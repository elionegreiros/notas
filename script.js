// ============================================================================
// 1. USUÁRIOS AUTORIZADOS
// ============================================================================
const USUARIOS = {
    "12345678900": { nome: "Prof. João Silva", senha: "123456", tipo: "professor" },
    "98765432100": { nome: "Profa. Maria Santos", senha: "123456", tipo: "professor" },
    "11122233344": { nome: "Prof. Carlos Lima", senha: "123456", tipo: "professor" },
    "55566677788": { nome: "Coord. Ana Paula", senha: "admin123", tipo: "coordenador" },
    "99988877766": { nome: "Administrador", senha: "admin123", tipo: "admin" }
};

// ============================================================================
// 2. CARREGAR DADOS DOS ARQUIVOS JSON
// ============================================================================
let turmasConfig = {};
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};
let dadosObservacoes = {};
let horarios = {};

// Estado global
let turmaAtual = "1adm";
let alunoSelecionadoVisto = null;
let sessaoAtual = null;
let graficoEvolucao = null;

// ============================================================================
// 3. FUNÇÕES DE CARREGAMENTO
// ============================================================================
async function carregarTurmas() {
    try {
        const response = await fetch('dados/turmas.json');
        const turmasData = await response.json();
        
        // Carregar alunos para cada turma
        for (let [nomeTurma, config] of Object.entries(turmasData)) {
            const arquivoAlunos = config.arquivo_alunos;
            const alunosResponse = await fetch(`dados/${arquivoAlunos}`);
            const alunos = await alunosResponse.json();
            
            // Mapear nome da turma para ID
            let turmaId = "";
            if (nomeTurma === "1º Administração") turmaId = "1adm";
            else if (nomeTurma === "1º Controle Ambiental") turmaId = "1amb";
            else if (nomeTurma === "2º Desenvolvimento de Sistemas") turmaId = "2ds";
            else if (nomeTurma === "INFORMÁTICA - MÓDULO I") turmaId = "inf1";
            else if (nomeTurma === "INFORMÁTICA - MÓDULO V") turmaId = "inf5";
            
            turmasConfig[turmaId] = {
                nome: nomeTurma,
                alunos: alunos,
                disciplinas: config.disciplinas,
                tipoAvaliacao: (turmaId === "inf1" || turmaId === "inf5") ? "bimestral" : "trimestral"
            };
        }
        
        // Carregar horários
        const horariosGentil = {
            segunda: { "1adm": [], "1amb": [], "2ds": [{ hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" }, { hora: "16:10", disciplina: "MOBILE" }], "inf1": [{ hora: "19:25", disciplina: "INF - MÓDULO I" }], "inf5": [{ hora: "18:30", disciplina: "INF - MÓDULO V" }] },
            terca: { "1adm": [{ hora: "15:10", disciplina: "INTELIGÊNCIA ARTIFICIAL" }], "1amb": [], "2ds": [{ hora: "12:50", disciplina: "UI/UX" }, { hora: "13:50", disciplina: "MENTORIA" }], "inf1": [{ hora: "20:20", disciplina: "INF - MÓDULO I" }], "inf5": [{ hora: "21:25", disciplina: "INF - MÓDULO V" }] },
            quarta: { "1adm": [], "1amb": [{ hora: "08:30", disciplina: "INTELIGÊNCIA ARTIFICIAL" }], "2ds": [{ hora: "15:10", disciplina: "FRONT-END" }, { hora: "16:10", disciplina: "PROG. ESTRUTURADA" }], "inf1": [], "inf5": [{ hora: "18:30", disciplina: "INF - MÓDULO V" }] },
            quinta: { "1adm": [], "1amb": [], "2ds": [{ hora: "07:30", disciplina: "POO" }, { hora: "12:50", disciplina: "MOBILE" }], "inf1": [], "inf5": [] },
            sexta: { "1adm": [], "1amb": [], "2ds": [{ hora: "10:50", disciplina: "IA" }, { hora: "12:50", disciplina: "UI/UX" }, { hora: "16:10", disciplina: "PENS. COMPUTACIONAL" }], "inf1": [], "inf5": [] }
        };
        horarios = horariosGentil;
        
        inicializarEstruturas();
        carregarDadosSalvos();
        
        // Preencher selects de turma no admin
        const adminSelect = document.getElementById("adminTurmaSelect");
        if (adminSelect) {
            adminSelect.innerHTML = "";
            for (let tid in turmasConfig) {
                const opt = document.createElement("option");
                opt.value = tid;
                opt.textContent = turmasConfig[tid].nome;
                adminSelect.appendChild(opt);
            }
        }
        
        mostrarToast("✅ Dados carregados com sucesso!");
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
        mostrarToast("Erro ao carregar dados do sistema", "error");
    }
}

// ============================================================================
// 4. FUNÇÕES UTILITÁRIAS
// ============================================================================
function mostrarToast(mensagem, tipo = "success") {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    const icones = { success: "fa-check-circle", error: "fa-times-circle", warning: "fa-exclamation-triangle", info: "fa-info-circle" };
    toast.innerHTML = `<i class="fas ${icones[tipo] || icones.success}"></i><span>${mensagem}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
    toast.onclick = () => toast.remove();
}

function salvarDados() {
    localStorage.setItem("sistemaAcademico", JSON.stringify({
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos,
        observacoes: dadosObservacoes
    }));
}

function carregarDadosSalvos() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            dadosNotas = data.notas || {};
            dadosPresenca = data.presenca || {};
            dadosVistos = data.vistos || {};
            dadosObservacoes = data.observacoes || {};
        } catch(e) {}
    }
}

function inicializarEstruturas() {
    for (let turmaId in turmasConfig) {
        if (!dadosNotas[turmaId]) dadosNotas[turmaId] = {};
        if (!dadosPresenca[turmaId]) dadosPresenca[turmaId] = {};
        if (!dadosVistos[turmaId]) dadosVistos[turmaId] = {};
        if (!dadosObservacoes[turmaId]) dadosObservacoes[turmaId] = {};
        
        const turma = turmasConfig[turmaId];
        turma.disciplinas.forEach(disciplina => {
            if (!dadosNotas[turmaId][disciplina]) {
                dadosNotas[turmaId][disciplina] = {};
                turma.alunos.forEach(aluno => {
                    dadosNotas[turmaId][disciplina][aluno] = turma.tipoAvaliacao === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" };
                });
            }
        });
        
        if (!dadosVistos[turmaId].alunos) {
            dadosVistos[turmaId].alunos = {};
            turma.alunos.forEach(aluno => {
                if (!dadosVistos[turmaId].alunos[aluno]) {
                    dadosVistos[turmaId].alunos[aluno] = { total: 0, registros: [], ultima: "" };
                }
            });
        }
    }
}

function getTurmaAtual() {
    return turmasConfig[turmaAtual];
}

// ============================================================================
// 5. AUTENTICAÇÃO
// ============================================================================
function fazerLogin(cpf, senha) {
    const cpfLimpo = cpf.replace(/[.\-]/g, '');
    const usuario = USUARIOS[cpfLimpo];
    if (usuario && usuario.senha === senha) {
        sessaoAtual = { cpf: cpfLimpo, nome: usuario.nome, tipo: usuario.tipo, loginTime: new Date().toISOString() };
        localStorage.setItem("sessaoAcademico", JSON.stringify(sessaoAtual));
        return { sucesso: true };
    }
    return { sucesso: false, erro: "CPF ou senha incorretos!" };
}

function verificarSessao() {
    const sessaoStr = localStorage.getItem("sessaoAcademico");
    if (!sessaoStr) return null;
    try {
        const sessao = JSON.parse(sessaoStr);
        const diffHoras = (new Date() - new Date(sessao.loginTime)) / (1000 * 60 * 60);
        if (diffHoras > 24) { localStorage.removeItem("sessaoAcademico"); return null; }
        return sessao;
    } catch(e) { return null; }
}

function fazerLogout() {
    localStorage.removeItem("sessaoAcademico");
    document.getElementById("telaLogin").style.display = "flex";
    document.getElementById("conteudoPrincipal").style.display = "none";
    document.getElementById("loginCpf").value = "";
    document.getElementById("loginSenha").value = "";
    mostrarToast("Logout realizado!");
}

function formatarCPF(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 9) valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    else if (valor.length > 6) valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    else if (valor.length > 3) valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    input.value = valor;
}

// ============================================================================
// 6. NOTAS
// ============================================================================
function calcularMedia(notas, tipo) {
    const nm1 = parseFloat(notas.nm1) || 0;
    const nm2 = parseFloat(notas.nm2) || 0;
    const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
    return tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
}

function renderizarNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    if (!disciplina) return;
    const turma = getTurmaAtual();
    const tipo = turma.tipoAvaliacao;
    const alunos = turma.alunos;
    const notasTurma = dadosNotas[turmaAtual]?.[disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || (tipo === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" });
        const media = calcularMedia(notas, tipo);
        const status = media >= 7 ? "✓ Aprovado" : (media >= 5 ? "⚠️ Recuperação" : "✗ Reprovado");
        const statusClass = media >= 7 ? "status-aprovado" : (media >= 5 ? "status-recuperacao" : "status-reprovado");
        
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;
        
        for (let i = 1; i <= (tipo === "trimestral" ? 3 : 2); i++) {
            const cell = row.insertCell(i);
            const input = document.createElement("input");
            input.type = "number"; input.step = "0.1"; input.min = "0"; input.max = "10";
            input.value = notas[`nm${i}`] !== "" ? notas[`nm${i}`] : "";
            input.classList.add("nota-input");
            input.dataset.aluno = aluno;
            input.dataset.trimestre = `nm${i}`;
            cell.appendChild(input);
        }
        
        if (tipo === "trimestral") {
            row.insertCell(4).innerHTML = `<strong>${media.toFixed(1)}</strong>`;
            row.insertCell(5).innerHTML = `<span class="${statusClass}">${status}</span>`;
            const obsCell = row.insertCell(6);
            const obsBtn = document.createElement("button");
            obsBtn.innerHTML = '<i class="fas fa-comment"></i>';
            obsBtn.className = "btn btn-pequeno";
            obsBtn.onclick = () => abrirModalObservacao(aluno);
            obsCell.appendChild(obsBtn);
        } else {
            row.insertCell(3).innerHTML = `<strong>${media.toFixed(1)}</strong>`;
            row.insertCell(4).innerHTML = `<span class="${statusClass}">${status}</span>`;
            const obsCell = row.insertCell(5);
            const obsBtn = document.createElement("button");
            obsBtn.innerHTML = '<i class="fas fa-comment"></i>';
            obsBtn.className = "btn btn-pequeno";
            obsBtn.onclick = () => abrirModalObservacao(aluno);
            obsCell.appendChild(obsBtn);
        }
    });
    
    atualizarEstatisticas();
}

function salvarNotas() {
    const disciplina = document.getElementById("disciplinaNotas").value;
    const inputs = document.querySelectorAll("#tbodyNotas .nota-input");
    inputs.forEach(input => {
        const aluno = input.dataset.aluno;
        const trimestre = input.dataset.trimestre;
        let valor = input.value === "" ? "" : parseFloat(input.value);
        if (valor !== "" && (isNaN(valor) || valor < 0 || valor > 10)) valor = "";
        if (!dadosNotas[turmaAtual][disciplina][aluno]) {
            dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
        }
        dadosNotas[turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    salvarDados();
    renderizarNotas();
    renderizarRelatorios();
    renderizarRanking();
    mostrarToast("Notas salvas!");
}

function atualizarEstatisticas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaAtual();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    let aprovados = 0, recuperacao = 0, reprovados = 0;
    
    turma.alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else if (media > 0) reprovados++;
    });
    
    document.getElementById("totalAlunos").textContent = turma.alunos.length;
}

function exportarNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaAtual();
    const tipo = turma.tipoAvaliacao;
    const dados = turma.alunos.map(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        if (tipo === "trimestral") {
            return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
        }
        return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "" };
    });
    const planilha = XLSX.utils.json_to_sheet(dados);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, "Notas");
    XLSX.writeFile(livro, `Notas_${turma.nome}.xlsx`);
    mostrarToast("Notas exportadas!");
}

// ============================================================================
// 7. PRESENÇA
// ============================================================================
function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = dadosPresenca[turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia">Nenhuma aula registrada. Clique em "+ Nova Aula" para começar.</div>';
        return;
    }
    
    const turma = getTurmaAtual();
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        let presencasHtml = "";
        turma.alunos.forEach(aluno => {
            const isChecked = aula.presencas && aula.presencas[aluno] === true;
            presencasHtml += `<tr><td><strong>${aluno}</strong></td><td><input type="checkbox" class="presenca-check" data-aluno="${aluno}" ${isChecked ? 'checked' : ''}></td></tr>`;
        });
        aulaCard.innerHTML = `
            <div class="aula-header">
                <span class="aula-data">📅 ${new Date(aula.data).toLocaleDateString('pt-BR')}</span>
                <button class="aula-remover" data-index="${idx}">🗑️ Remover</button>
            </div>
            <table class="tabela-presenca">
                <thead><tr><th>Aluno</th><th>Presente?</th></tr></thead>
                <tbody>${presencasHtml}</tbody>
            </table>
        `;
        container.appendChild(aulaCard);
        aulaCard.querySelector(".aula-remover").onclick = () => removerAula(key, idx);
        aulaCard.querySelectorAll(".presenca-check").forEach(checkbox => {
            checkbox.onchange = (e) => {
                const aluno = e.target.dataset.aluno;
                if (!dadosPresenca[turmaAtual][key][idx].presencas) dadosPresenca[turmaAtual][key][idx].presencas = {};
                dadosPresenca[turmaAtual][key][idx].presencas[aluno] = e.target.checked;
                salvarDados();
            };
        });
    });
}

function removerAula(key, index) {
    if (confirm("Remover esta aula?")) {
        dadosPresenca[turmaAtual][key].splice(index, 1);
        if (dadosPresenca[turmaAtual][key].length === 0) delete dadosPresenca[turmaAtual][key];
        salvarDados();
        renderizarPresenca();
        mostrarToast("Aula removida!");
    }
}

function adicionarAula() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    if (!dadosPresenca[turmaAtual][key]) dadosPresenca[turmaAtual][key] = [];
    dadosPresenca[turmaAtual][key].push({ data: new Date().toISOString().split('T')[0], presencas: {} });
    salvarDados();
    renderizarPresenca();
    mostrarToast("Nova aula adicionada!");
}

function exportarPresenca() {
    const turma = getTurmaAtual();
    const presencasTurma = dadosPresenca[turmaAtual] || {};
    const dadosExport = turma.alunos.map(aluno => {
        let totalPresencas = 0, totalAulas = 0;
        for (let key in presencasTurma) {
            if (Array.isArray(presencasTurma[key])) {
                presencasTurma[key].forEach(aula => {
                    totalAulas++;
                    if (aula.presencas && aula.presencas[aluno]) totalPresencas++;
                });
            }
        }
        const freq = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : "0";
        return { Aluno: aluno, "Total Aulas": totalAulas, "Total Presenças": totalPresencas, "Frequência (%)": freq };
    });
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Presenca_${turma.nome}`);
    XLSX.writeFile(livro, `Presenca_${turma.nome}.xlsx`);
    mostrarToast("Presenças exportadas!");
}

// ============================================================================
// 8. VISTOS
// ============================================================================
function renderizarVistos() {
    const vistosTurma = dadosVistos[turmaAtual]?.alunos || {};
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    tbody.innerHTML = "";
    const turma = getTurmaAtual();
    turma.alunos.forEach(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, ultima: "" };
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(1).innerHTML = `<span class="badge-visto">${dados.total}</span>`;
        row.insertCell(2).textContent = dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-";
        const btnCell = row.insertCell(3);
        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-star"></i> Dar Visto';
        btn.className = "btn btn-pequeno";
        btn.onclick = () => abrirModalVisto(aluno);
        btnCell.appendChild(btn);
    });
}

function abrirModalVisto(aluno) {
    alunoSelecionadoVisto = aluno;
    document.getElementById("modalDescVisto").value = "";
    document.getElementById("modalVisto").style.display = "flex";
}

function salvarVisto() {
    if (!alunoSelecionadoVisto) return;
    const descricao = document.getElementById("modalDescVisto")?.value.trim();
    if (!descricao) { mostrarToast("Descreva a participação!", "warning"); return; }
    if (!dadosVistos[turmaAtual].alunos) dadosVistos[turmaAtual].alunos = {};
    const vistosTurma = dadosVistos[turmaAtual].alunos;
    if (!vistosTurma[alunoSelecionadoVisto]) vistosTurma[alunoSelecionadoVisto] = { total: 0, registros: [], ultima: "" };
    const agora = new Date().toISOString();
    vistosTurma[alunoSelecionadoVisto].total++;
    vistosTurma[alunoSelecionadoVisto].registros.push({ data: agora, descricao: descricao });
    vistosTurma[alunoSelecionadoVisto].ultima = agora;
    salvarDados();
    renderizarVistos();
    renderizarRanking();
    document.getElementById("modalVisto").style.display = "none";
    mostrarToast("Visto concedido!");
}

function exportarVistos() {
    const turma = getTurmaAtual();
    const vistosTurma = dadosVistos[turmaAtual]?.alunos || {};
    const dadosExport = turma.alunos.map(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, registros: [] };
        return {
            Aluno: aluno,
            "Total de Vistos": dados.total,
            "Última": dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-",
            "Histórico": dados.registros.map(r => `${new Date(r.data).toLocaleDateString('pt-BR')}: ${r.descricao}`).join("; ")
        };
    });
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Vistos_${turma.nome}`);
    XLSX.writeFile(livro, `Vistos_${turma.nome}.xlsx`);
    mostrarToast("Vistos exportados!");
}

// ============================================================================
// 9. HORÁRIOS
// ============================================================================
function renderizarHorarios(dia = null) {
    if (!dia) {
        const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];
        const hoje = new Date();
        const diaSemana = hoje.getDay();
        dia = dias[diaSemana - 1] || "segunda";
    }
    
    document.querySelectorAll(".dia-btn").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.dia === dia);
    });
    
    const aulasDia = horarios[dia];
    if (!aulasDia) return;
    
    const horariosFixos = ["07:30", "08:30", "09:50", "10:50", "11:50", "12:50", "13:50", "15:10", "16:10", "18:30", "19:25", "20:20", "21:25", "22:20"];
    
    let html = `<table class="tabela-horarios"><thead>```
<th>Horário</th><th>1º Administração</th><th>1º Controle Ambiental</th><th>2º Desenvolvimento</th><th>Informática Mód I</th><th>Informática Mód V</th>```
</thead><tbody>`;
    
    for (let i = 0; i < horariosFixos.length; i++) {
        const hora = horariosFixos[i];
        html += `<tr><td class="hora-col">${hora}</td>`;
        for (let turmaId of ["1adm", "1amb", "2ds", "inf1", "inf5"]) {
            const aula = aulasDia[turmaId]?.find(a => a.hora === hora);
            html += `<td>${aula ? `<strong>${aula.disciplina}</strong>` : "—"}</td>`;
        }
        html += `</tr>`;
        if (hora === "09:50") html += `<tr style="background:#fef3c7;"><td class="hora-col">☕ INTERVALO</td><td colspan="5">🥪 Intervalo - Recreio</td></tr>`;
        if (hora === "12:50") html += `<tr style="background:#fef3c7;"><td class="hora-col">🍽️ ALMOÇO</td><td colspan="5">🍽️ Horário de Almoço</td></tr>`;
        if (hora === "18:30") html += `<tr style="background:#e8f4f8;"><td class="hora-col">🌙 NOTURNO</td><td colspan="5">🌙 Início das Aulas Noturnas</td></tr>`;
    }
    html += `</tbody></table>`;
    document.getElementById("gradeHorarios").innerHTML = html;
}

// ============================================================================
// 10. RANKING
// ============================================================================
function renderizarRanking() {
    const disciplina = document.getElementById("rankingDisciplina")?.value;
    if (!disciplina) return;
    const turma = getTurmaAtual();
    const tipo = turma.tipoAvaliacao;
    const container = document.getElementById("rankingContainer");
    if (!container) return;
    
    const rankings = turma.alunos.map(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        const vistos = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0;
        return { aluno, media, vistos };
    });
    rankings.sort((a, b) => b.media - a.media);
    
    container.innerHTML = rankings.map((item, idx) => {
        let medalha = "";
        if (idx === 0) medalha = "🥇";
        else if (idx === 1) medalha = "🥈";
        else if (idx === 2) medalha = "🥉";
        return `
            <div class="ranking-item">
                <div class="ranking-pos">${medalha || (idx+1)}</div>
                <div class="ranking-info"><strong>${item.aluno}</strong><br><span>⭐ ${item.vistos} vistos</span></div>
                <div class="ranking-nota">${item.media.toFixed(1)}</div>
            </div>
        `;
    }).join('');
}

// ============================================================================
// 11. RELATÓRIOS
// ============================================================================
function renderizarRelatorios() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaAtual();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    let aprovados = 0, recuperacao = 0, reprovados = 0, somaMedias = 0;
    
    turma.alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else if (media > 0) reprovados++;
        somaMedias += media;
    });
    const mediaGeral = turma.alunos.length ? (somaMedias / turma.alunos.length).toFixed(1) : 0;
    document.getElementById("resumoNotas").innerHTML = `<ul><li>📊 Média: ${mediaGeral}</li><li>✅ Aprovados: ${aprovados}</li><li>⚠️ Recuperação: ${recuperacao}</li><li>❌ Reprovados: ${reprovados}</li></ul>`;
    
    let totalPresencas = 0, totalAulas = 0;
    for (let key in dadosPresenca[turmaAtual]) {
        if (Array.isArray(dadosPresenca[turmaAtual][key])) {
            dadosPresenca[turmaAtual][key].forEach(aula => { totalAulas++; totalPresencas += Object.values(aula.presencas || {}).filter(v => v === true).length; });
        }
    }
    const freqMedia = totalAulas ? ((totalPresencas / (totalAulas * turma.alunos.length)) * 100).toFixed(1) : 0;
    document.getElementById("resumoFrequencia").innerHTML = `<ul><li>📅 Total Aulas: ${totalAulas}</li><li>📈 Frequência: ${freqMedia}%</li></ul>`;
    
    const destaques = [];
    turma.alunos.forEach(aluno => { const v = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0; if (v >= 3) destaques.push({ aluno, vistos: v }); });
    destaques.sort((a,b) => b.vistos - a.vistos);
    document.getElementById("alunosDestaque").innerHTML = destaques.length ? `<ul>${destaques.slice(0,5).map(d => `<li>⭐ ${d.aluno} - ${d.vistos} vistos</li>`).join('')}</ul>` : "<p>Nenhum destaque</p>";
    
    const recuperacaoList = [];
    turma.alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 5 && media < 7) recuperacaoList.push({ aluno, media });
    });
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ? `<ul>${recuperacaoList.map(r => `<li>⚠️ ${r.aluno} - ${r.media.toFixed(1)}</li>`).join('')}</ul>` : "<p>Nenhum</p>";
}

function exportarRelatorioCompleto() {
    exportarNotas();
}

// ============================================================================
// 12. DASHBOARD
// ============================================================================
function getDiaSemanaNome(data) {
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    return dias[data.getDay()];
}

function getAulasDoDia(data) {
    const diaSemana = getDiaSemanaNome(data);
    const aulasDia = horarios[diaSemana] || {};
    const aulas = [];
    for (let turmaId of ["1adm", "1amb", "2ds", "inf1", "inf5"]) {
        (aulasDia[turmaId] || []).forEach(aula => {
            aulas.push({ turmaNome: turmasConfig[turmaId].nome, disciplina: aula.disciplina, hora: aula.hora });
        });
    }
    aulas.sort((a, b) => a.hora.localeCompare(b.hora));
    return aulas;
}

function renderizarDashboard() {
    const hoje = new Date();
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    
    const horaAtual = hoje.getHours();
    let saudacao = horaAtual < 12 ? "Bom dia" : (horaAtual < 18 ? "Boa tarde" : "Boa noite");
    document.getElementById("saudacaoTexto").innerHTML = `${saudacao}, ${sessaoAtual?.nome || "Professor"}! 👋`;
    document.getElementById("dataAtual").textContent = hoje.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("hojeData").textContent = hoje.toLocaleDateString('pt-BR');
    document.getElementById("amanhaData").textContent = amanha.toLocaleDateString('pt-BR');
    
    const aulasHoje = getAulasDoDia(hoje);
    const aulasHojeContainer = document.getElementById("aulasHojeContainer");
    if (aulasHojeContainer) {
        if (aulasHoje.length === 0) {
            aulasHojeContainer.innerHTML = '<div class="empty-state">Nenhuma aula programada para hoje! 🎉</div>';
        } else {
            aulasHojeContainer.innerHTML = aulasHoje.map(aula => `
                <div class="aula-card-dashboard">
                    <div class="aula-hora">${aula.hora}</div>
                    <div class="aula-info">
                        <strong>${aula.disciplina}</strong>
                        <small>${aula.turmaNome}</small>
                    </div>
                </div>
            `).join('');
        }
    }
    
    const aulasAmanha = getAulasDoDia(amanha);
    const aulasAmanhaContainer = document.getElementById("aulasAmanhaContainer");
    if (aulasAmanhaContainer) {
        if (aulasAmanha.length === 0) {
            aulasAmanhaContainer.innerHTML = '<div class="empty-state">Nenhuma aula programada para amanhã!</div>';
        } else {
            aulasAmanhaContainer.innerHTML = aulasAmanha.map(aula => `
                <div class="aula-card-dashboard">
                    <div class="aula-hora">${aula.hora}</div>
                    <div class="aula-info">
                        <strong>${aula.disciplina}</strong>
                        <small>${aula.turmaNome}</small>
                    </div>
                </div>
            `).join('');
        }
    }
    
    document.getElementById("totalAulasHoje").textContent = aulasHoje.length;
    
    let totalVistos = 0;
    for (let turmaId in dadosVistos) {
        if (dadosVistos[turmaId]?.alunos) {
            for (let aluno in dadosVistos[turmaId].alunos) {
                totalVistos += dadosVistos[turmaId].alunos[aluno]?.total || 0;
            }
        }
    }
    document.getElementById("totalVistosMes").textContent = totalVistos;
    
    let totalAlunos = 0;
    for (let turmaId in turmasConfig) {
        totalAlunos += turmasConfig[turmaId].alunos.length;
    }
    document.getElementById("totalAlunos").textContent = totalAlunos;
}

// ============================================================================
// 13. ADMIN
// ============================================================================
function renderizarAdmin() {
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || turmaAtual;
    const turma = turmasConfig[turmaAdmin];
    if (!turma) return;
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    turma.alunos.forEach((aluno, idx) => {
        const obs = dadosObservacoes[turmaAdmin]?.[aluno] || "";
        const row = tbody.insertRow();
        row.insertCell(0).textContent = idx + 1;
        row.insertCell(1).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(2).innerHTML = '<span style="color: #22c55e;">✓ Ativo</span>';
        row.insertCell(3).innerHTML = obs ? `<i class="fas fa-comment"></i> ${obs.substring(0, 30)}` : "-";
        const btnCell = row.insertCell(4);
        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i> Remover';
        btnRemover.className = "btn btn-pequeno";
        btnRemover.onclick = () => removerAluno(turmaAdmin, aluno);
        btnCell.appendChild(btnRemover);
    });
}

function removerAluno(turmaId, alunoNome) {
    if (!confirm(`⚠️ Remover "${alunoNome}"?`)) return;
    const turma = turmasConfig[turmaId];
    const index = turma.alunos.indexOf(alunoNome);
    if (index !== -1) turma.alunos.splice(index, 1);
    salvarDados();
    renderizarAdmin();
    renderizarNotas();
    renderizarDashboard();
    mostrarToast(`"${alunoNome}" removido!`);
}

function adicionarAluno() {
    const nome = document.getElementById("modalAlunoNome")?.value.trim().toUpperCase();
    if (!nome) { mostrarToast("Digite o nome!", "warning"); return; }
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || turmaAtual;
    const turma = turmasConfig[turmaAdmin];
    if (turma.alunos.includes(nome)) { mostrarToast("Aluno já existe!", "warning"); return; }
    turma.alunos.push(nome);
    turma.alunos.sort();
    salvarDados();
    renderizarAdmin();
    renderizarNotas();
    renderizarDashboard();
    document.getElementById("modalAluno").style.display = "none";
    mostrarToast(`"${nome}" adicionado!`);
}

function backupDados() {
    const backup = {
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos,
        observacoes: dadosObservacoes,
        dataBackup: new Date().toISOString()
    };
    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `backup_${new Date().toLocaleDateString().replace(/\//g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    mostrarToast("Backup realizado!");
}

function restoreDados(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            if (backup.notas) dadosNotas = backup.notas;
            if (backup.presenca) dadosPresenca = backup.presenca;
            if (backup.vistos) dadosVistos = backup.vistos;
            if (backup.observacoes) dadosObservacoes = backup.observacoes;
            salvarDados();
            renderizarNotas();
            renderizarPresenca();
            renderizarVistos();
            renderizarRelatorios();
            renderizarRanking();
            renderizarDashboard();
            mostrarToast("Restore realizado!");
        } catch(e) { mostrarToast("Erro ao restaurar!", "error"); }
    };
    reader.readAsText(file);
}

// ============================================================================
// 14. OBSERVAÇÕES
// ============================================================================
function abrirModalObservacao(aluno) {
    const obs = dadosObservacoes[turmaAtual]?.[aluno] || "";
    document.getElementById("modalObsTexto").value = obs;
    document.getElementById("modalObs").style.display = "flex";
    window.alunoObsSelecionado = aluno;
}

function salvarObservacaoModal() {
    const obs = document.getElementById("modalObsTexto").value;
    if (window.alunoObsSelecionado) {
        if (!dadosObservacoes[turmaAtual]) dadosObservacoes[turmaAtual] = {};
        dadosObservacoes[turmaAtual][window.alunoObsSelecionado] = obs;
        salvarDados();
        document.getElementById("modalObs").style.display = "none";
        mostrarToast("Observação salva!");
    }
}

// ============================================================================
// 15. TROCAR TURMA
// ============================================================================
function trocarTurma(turmaId) {
    turmaAtual = turmaId;
    
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.turma === turmaId);
    });
    
    const turma = turmasConfig[turmaId];
    document.getElementById("turmaTitulo").innerHTML = `<h1>📚 ${turma.nome}</h1>`;
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turma.disciplinas.forEach(d => {
            const option = document.createElement("option");
            option.value = d;
            option.textContent = d;
            selectDisciplina.appendChild(option);
        });
    }
    
    const rankingDisciplina = document.getElementById("rankingDisciplina");
    if (rankingDisciplina) {
        rankingDisciplina.innerHTML = "";
        turma.disciplinas.forEach(d => {
            const option = document.createElement("option");
            option.value = d;
            option.textContent = d;
            rankingDisciplina.appendChild(option);
        });
    }
    
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
    renderizarRanking();
    renderizarHorarios();
    renderizarDashboard();
    renderizarAdmin();
}

// ============================================================================
// 16. INICIAR SISTEMA
// ============================================================================
async function iniciarSistema(usuario) {
    sessaoAtual = usuario;
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "block";
    
    await carregarTurmas();
    trocarTurma("1adm");
    
    // Eventos dos botões
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas")?.addEventListener("click", exportarNotas);
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca")?.addEventListener("click", () => { salvarDados(); mostrarToast("Presenças salvas!"); });
    document.getElementById("exportarPresenca")?.addEventListener("click", exportarPresenca);
    document.getElementById("adicionarVisto")?.addEventListener("click", () => { const t = getTurmaAtual(); if (t.alunos.length) abrirModalVisto(t.alunos[0]); });
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); mostrarToast("Vistos salvos!"); });
    document.getElementById("exportarVistos")?.addEventListener("click", exportarVistos);
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("adicionarAlunoBtn")?.addEventListener("click", () => document.getElementById("modalAluno").style.display = "flex");
    document.getElementById("backupDadosBtn")?.addEventListener("click", backupDados);
    document.getElementById("restoreDadosBtn")?.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => { if (e.target.files[0]) restoreDados(e.target.files[0]); };
        input.click();
    });
    document.getElementById("modalSalvarAluno")?.addEventListener("click", adicionarAluno);
    document.getElementById("modalCancelarAluno")?.addEventListener("click", () => document.getElementById("modalAluno").style.display = "none");
    document.getElementById("modalSalvarVisto")?.addEventListener("click", salvarVisto);
    document.getElementById("modalSalvarObs")?.addEventListener("click", salvarObservacaoModal);
    document.getElementById("disciplinaNotas")?.addEventListener("change", () => { renderizarNotas(); renderizarRanking(); });
    document.getElementById("rankingDisciplina")?.addEventListener("change", renderizarRanking);
    document.getElementById("adminTurmaSelect")?.addEventListener("change", renderizarAdmin);
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
    
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.addEventListener("click", () => trocarTurma(btn.dataset.turma));
    });
    
    document.querySelectorAll(".aba-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".aba-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            const abaId = `aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`;
            document.getElementById(abaId).classList.add("active");
            if (btn.dataset.aba === "relatorios") renderizarRelatorios();
            if (btn.dataset.aba === "ranking") renderizarRanking();
            if (btn.dataset.aba === "admin") renderizarAdmin();
        });
    });
    
    document.querySelectorAll(".dia-btn").forEach(btn => {
        btn.addEventListener("click", () => renderizarHorarios(btn.dataset.dia));
    });
    renderizarHorarios();
    
    document.querySelectorAll(".modal-fechar").forEach(btn => {
        btn.onclick = () => {
            document.getElementById("modalAluno").style.display = "none";
            document.getElementById("modalVisto").style.display = "none";
            document.getElementById("modalObs").style.display = "none";
        };
    });
    
    mostrarToast("Sistema pronto!");
}

// ============================================================================
// 17. INICIALIZAÇÃO
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    const sessao = verificarSessao();
    if (sessao) {
        iniciarSistema(sessao);
    } else {
        document.getElementById("telaLogin").style.display = "flex";
        document.getElementById("conteudoPrincipal").style.display = "none";
    }
    
    document.getElementById("loginCpf")?.addEventListener("input", () => formatarCPF(document.getElementById("loginCpf")));
    document.getElementById("btnLogin")?.addEventListener("click", () => {
        const resultado = fazerLogin(document.getElementById("loginCpf").value, document.getElementById("loginSenha").value);
        if (resultado.sucesso) {
            iniciarSistema(sessaoAtual);
        } else {
            document.getElementById("loginError").textContent = resultado.erro;
        }
    });
    document.getElementById("loginSenha")?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("btnLogin").click();
    });
    document.getElementById("btnLogoutSidebar")?.addEventListener("click", fazerLogout);
});
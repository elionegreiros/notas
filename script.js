// ============================================================================
// 1. CONFIGURAÇÕES E CONSTANTES GLOBAIS
// ============================================================================

const USUARIOS = {
    "12345678900": { nome: "Prof. João Silva", senha: "123456", tipo: "professor", escola: "ambas" },
    "98765432100": { nome: "Profa. Maria Santos", senha: "123456", tipo: "professor", escola: "gentil" },
    "11122233344": { nome: "Prof. Carlos Lima", senha: "123456", tipo: "professor", escola: "eneas" },
    "55566677788": { nome: "Coord. Ana Paula", senha: "admin123", tipo: "coordenador", escola: "ambas" },
    "99988877766": { nome: "Administrador", senha: "admin123", tipo: "admin", escola: "ambas" }
};

// Estado Global
let estado = {
    escolaAtual: "gentil",
    turmaAtual: "",
    dadosNotas: {},
    dadosPresenca: {},
    dadosVistos: {},
    dadosObservacoes: {},
    dadosEventos: [],
    graficoEvolucao: null,
    alunoSelecionadoVisto: null,
    sessaoAtual: null,
    configAlertas: { notificar: true, minutosAntecedencia: 15, som: true },
    escolas: {},
    turmas: {},
    alunos: {},
    horarios: {}
};

// ============================================================================
// FUNÇÕES DE CARREGAMENTO DE DADOS
// ============================================================================

async function carregarDadosJSON() {
    try {
        // Carregar configuração das escolas
        const resEscolas = await fetch('/dados/escolas.json');
        estado.escolas = await resEscolas.json();

        const escolas = ['gentil', 'eneas'];
        
        for (const escola of escolas) {
            // Carregar turmas
            const resTurmas = await fetch(`/dados/${escola}/turmas.json`);
            estado.turmas[escola] = await resTurmas.json();

            // Carregar horários
            const resHorarios = await fetch(`/dados/${escola}/horarios.json`);
            estado.horarios[escola] = await resHorarios.json();

            // Carregar alunos para cada turma
            estado.alunos[escola] = {};
            const turmasLista = Object.keys(estado.turmas[escola]);
            
            for (const turmaId of turmasLista) {
                try {
                    const resAlunos = await fetch(`/dados/${escola}/alunos_${turmaId}.json`);
                    estado.alunos[escola][turmaId] = await resAlunos.json();
                } catch (e) {
                    console.warn(`Alunos para ${escola}/${turmaId} não encontrados`);
                    estado.alunos[escola][turmaId] = [];
                }
            }
        }

        // Definir primeira turma
        const primeirasTurmas = Object.keys(estado.turmas.gentil);
        estado.turmaAtual = primeirasTurmas[0] || "1adm";
        
        inicializarEstruturas();
        carregarDadosSalvos();
        
        mostrarToast("✅ Dados carregados com sucesso");
    } catch (erro) {
        console.error("❌ Erro ao carregar dados JSON:", erro);
        mostrarToast("Erro ao carregar dados do sistema", "error");
    }
}

// ============================================================================
// FUNÇÕES UTILITÁRIAS
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
        notas: estado.dadosNotas,
        presenca: estado.dadosPresenca,
        vistos: estado.dadosVistos,
        observacoes: estado.dadosObservacoes,
        eventos: estado.dadosEventos
    }));
}

function carregarDadosSalvos() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            estado.dadosNotas = data.notas || {};
            estado.dadosPresenca = data.presenca || {};
            estado.dadosVistos = data.vistos || {};
            estado.dadosObservacoes = data.observacoes || {};
            estado.dadosEventos = data.eventos || [];
        } catch(e) { 
            console.log("Erro ao carregar dados salvos"); 
        }
    }
}

function inicializarEstruturas() {
    for (let escolaId in estado.escolas) {
        if (!estado.dadosNotas[escolaId]) estado.dadosNotas[escolaId] = {};
        if (!estado.dadosPresenca[escolaId]) estado.dadosPresenca[escolaId] = {};
        if (!estado.dadosVistos[escolaId]) estado.dadosVistos[escolaId] = {};
        if (!estado.dadosObservacoes[escolaId]) estado.dadosObservacoes[escolaId] = {};
        
        const turmas = estado.turmas[escolaId];
        for (let turmaId in turmas) {
            const turma = turmas[turmaId];
            const alunosTurma = estado.alunos[escolaId]?.[turmaId] || [];
            
            if (!estado.dadosNotas[escolaId][turmaId]) estado.dadosNotas[escolaId][turmaId] = {};
            
            turma.disciplinas.forEach(disciplina => {
                if (!estado.dadosNotas[escolaId][turmaId][disciplina]) {
                    estado.dadosNotas[escolaId][turmaId][disciplina] = {};
                    alunosTurma.forEach(aluno => {
                        estado.dadosNotas[escolaId][turmaId][disciplina][aluno] = 
                            turma.tipoAvaliacao === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" };
                    });
                }
            });

            if (!estado.dadosVistos[escolaId][turmaId]) estado.dadosVistos[escolaId][turmaId] = {};
            alunosTurma.forEach(aluno => {
                if (!estado.dadosVistos[escolaId][turmaId][aluno]) {
                    estado.dadosVistos[escolaId][turmaId][aluno] = { total: 0, registros: [], ultima: "" };
                }
            });
        }
    }
}

function getTurmaConfig() {
    return estado.turmas[estado.escolaAtual]?.[estado.turmaAtual] || null;
}

function getAlunosTurma() {
    return estado.alunos[estado.escolaAtual]?.[estado.turmaAtual] || [];
}

function getHorariosAtuais() {
    return estado.horarios[estado.escolaAtual] || {};
}

// ============================================================================
// AUTENTICAÇÃO
// ============================================================================

function fazerLogin(cpf, senha) {
    const cpfLimpo = cpf.replace(/[.\-]/g, '');
    const usuario = USUARIOS[cpfLimpo];
    if (usuario && usuario.senha === senha) {
        estado.sessaoAtual = { 
            cpf: cpfLimpo, 
            nome: usuario.nome, 
            tipo: usuario.tipo, 
            escola: usuario.escola, 
            loginTime: new Date().toISOString() 
        };
        localStorage.setItem("sessaoAcademico", JSON.stringify(estado.sessaoAtual));
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
        if (diffHoras > 24) { 
            localStorage.removeItem("sessaoAcademico"); 
            return null; 
        }
        return sessao;
    } catch(e) { return null; }
}

function fazerLogout() {
    localStorage.removeItem("sessaoAcademico");
    document.getElementById("telaLogin").style.display = "flex";
    document.getElementById("conteudoPrincipal").style.display = "none";
    document.getElementById("loginCpf").value = "";
    document.getElementById("loginSenha").value = "";
    mostrarToast("Logout realizado com sucesso!", "info");
}

window.formatarCPF = function(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 9) valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    else if (valor.length > 6) valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    else if (valor.length > 3) valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    input.value = valor;
}

// ============================================================================
// NAVEGAÇÃO E UI
// ============================================================================

function carregarTurmasSelect() {
    const turmaSelect = document.getElementById("turmaSelect");
    if (!turmaSelect) return;
    const turmas = estado.turmas[estado.escolaAtual];
    turmaSelect.innerHTML = "";
    for (let turmaId in turmas) {
        const turma = turmas[turmaId];
        const option = document.createElement("option");
        option.value = turmaId;
        option.textContent = turma.nome;
        if (turmaId === estado.turmaAtual) option.selected = true;
        turmaSelect.appendChild(option);
    }
}

function trocarEscolaTurma(escolaId, turmaId) {
    estado.escolaAtual = escolaId;
    estado.turmaAtual = turmaId;
    const escola = estado.escolas[escolaId];
    
    const escolaBadge = document.getElementById("escolaBadge");
    if (escolaBadge) {
        escolaBadge.innerHTML = `<i class="fas ${escola.icone}"></i> ${escola.nome}`;
    }
    
    carregarTurmasSelect();

    const turma = estado.turmas[escolaId][turmaId];
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turma.disciplinas.forEach(d => {
            const opt = document.createElement("option");
            opt.value = d;
            opt.textContent = d;
            selectDisciplina.appendChild(opt);
        });
    }

    const rankingDisciplina = document.getElementById("rankingDisciplina");
    if (rankingDisciplina) {
        rankingDisciplina.innerHTML = "";
        turma.disciplinas.forEach(d => {
            const opt = document.createElement("option");
            opt.value = d;
            opt.textContent = d;
            rankingDisciplina.appendChild(opt);
        });
    }

    const graficoSelect = document.getElementById("graficoAlunoSelect");
    if (graficoSelect) {
        graficoSelect.innerHTML = '<option value="">Selecione um aluno</option>';
        const alunos = estado.alunos[escolaId][turmaId] || [];
        alunos.forEach(aluno => {
            const opt = document.createElement("option");
            opt.value = aluno;
            opt.textContent = aluno;
            graficoSelect.appendChild(opt);
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
    renderizarEventos();
    atualizarEstatisticas();
    atualizarGraficoEvolucao();
}

function navegarPagina(paginaId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    const pageElement = document.getElementById(`page${paginaId.charAt(0).toUpperCase() + paginaId.slice(1)}`);
    if (pageElement) pageElement.classList.add('active');
    
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    const menuItem = document.querySelector(`.menu-item[data-page="${paginaId}"]`);
    if (menuItem) menuItem.classList.add('active');
    
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        const nomes = { dashboard: 'Dashboard', notas: 'Notas', presenca: 'Presença', vistos: 'Vistos', 
                        horarios: 'Horários', ranking: 'Ranking', relatorios: 'Relatórios', 
                        eventos: 'Eventos', admin: 'Administração' };
        pageTitle.textContent = nomes[paginaId] || paginaId;
    }
}

// ============================================================================
// NOTAS
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
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    tbody.innerHTML = "";

    const header = document.getElementById("tabelaNotasHeader");
    if (header) {
        header.innerHTML = tipo === "trimestral" 
            ? `<th>Aluno</th><th>NM1</th><th>NM2</th><th>NM3</th><th>Média</th><th>Status</th><th></th>`
            : `<th>Aluno</th><th>NM1</th><th>NM2</th><th>Média</th><th>Status</th><th></th>`;
    }

    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || (tipo === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" });
        const media = calcularMedia(notas, tipo);
        const status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        const statusClass = media >= 7 ? "status-aprovado" : (media >= 5 ? "status-recuperacao" : "status-reprovado");
        
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;

        for (let i = 1; i <= (tipo === "trimestral" ? 3 : 2); i++) {
            const cell = row.insertCell(i);
            const input = document.createElement("input");
            input.type = "number";
            input.step = "0.1";
            input.min = "0";
            input.max = "10";
            input.value = notas[`nm${i}`] !== "" ? notas[`nm${i}`] : "";
            input.classList.add("nota-input");
            input.dataset.aluno = aluno;
            input.dataset.trimestre = `nm${i}`;
            cell.appendChild(input);
        }

        row.insertCell(tipo === "trimestral" ? 4 : 3).innerHTML = `<strong>${media.toFixed(1)}</strong>`;
        row.insertCell(tipo === "trimestral" ? 5 : 4).innerHTML = `<span class="${statusClass}">${status}</span>`;
        
        const obsCell = row.insertCell(tipo === "trimestral" ? 6 : 5);
        const obsBtn = document.createElement("button");
        obsBtn.innerHTML = '<i class="fas fa-comment"></i>';
        obsBtn.className = "btn-secondary";
        obsBtn.style.padding = "5px 10px";
        obsBtn.onclick = () => abrirModalObservacao(aluno);
        obsCell.appendChild(obsBtn);
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
        
        if (!estado.dadosNotas[estado.escolaAtual][estado.turmaAtual][disciplina][aluno]) {
            estado.dadosNotas[estado.escolaAtual][estado.turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
        }
        estado.dadosNotas[estado.escolaAtual][estado.turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    salvarDados();
    renderizarNotas();
    renderizarRelatorios();
    renderizarRanking();
    mostrarToast("Notas salvas com sucesso!");
}

function atualizarEstatisticas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    let aprovados = 0, recuperacao = 0, reprovados = 0;

    alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
    });

    const statAlunos = document.getElementById("statAlunos");
    const statAprovados = document.getElementById("statAprovados");
    const statRecuperacao = document.getElementById("statRecuperacao");
    const statReprovados = document.getElementById("statReprovados");
    
    if (statAlunos) statAlunos.textContent = alunos.length;
    if (statAprovados) statAprovados.textContent = aprovados;
    if (statRecuperacao) statRecuperacao.textContent = recuperacao;
    if (statReprovados) statReprovados.textContent = reprovados;
}

function exportarNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    const dados = alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        return tipo === "trimestral" 
            ? { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" }
            : { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "" };
    });

    const planilha = XLSX.utils.json_to_sheet(dados);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Notas_${turma.nome}`);
    XLSX.writeFile(livro, `Notas_${turma.nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
    mostrarToast("Notas exportadas!");
}

// ============================================================================
// PRESENÇA
// ============================================================================

function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca")?.value;
    const ano = document.getElementById("anoPresenca")?.value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = estado.dadosPresenca[estado.escolaAtual]?.[estado.turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";

    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhuma aula registrada.</div>';
        return;
    }

    const alunos = getAlunosTurma();
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card-moderno";
        let presencasHtml = "";
        alunos.forEach(aluno => {
            const isChecked = aula.presencas && aula.presencas[aluno] === true;
            presencasHtml += `<tr><td style="padding:8px">${aluno}</td><td style="padding:8px"><input type="checkbox" class="presenca-check" data-aluno="${aluno}" ${isChecked ? 'checked' : ''}></td></tr>`;
        });

        aulaCard.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid #e2e8f0">
                <span><i class="fas fa-calendar-alt"></i> ${new Date(aula.data).toLocaleDateString('pt-BR')}</span>
                <button class="aula-remover btn-secondary" data-index="${idx}" style="padding:4px 12px">Remover</button>
            </div>
            <div class="tabela-container">
                <table style="width:100%">
                    <thead><tr><th>Aluno</th><th>Presente</th></tr></thead>
                    <tbody>${presencasHtml}</tbody>
                </table>
            </div>
        `;
        container.appendChild(aulaCard);

        aulaCard.querySelector(".aula-remover").onclick = () => removerAula(key, idx);
        aulaCard.querySelectorAll(".presenca-check").forEach(checkbox => {
            checkbox.onchange = (e) => {
                const aluno = e.target.dataset.aluno;
                if (!estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key][idx].presencas) {
                    estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key][idx].presencas = {};
                }
                estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key][idx].presencas[aluno] = e.target.checked;
                salvarDados();
            };
        });
    });
}

function removerAula(key, index) {
    if (confirm("Remover esta aula?")) {
        estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key].splice(index, 1);
        if (estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key].length === 0) {
            delete estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key];
        }
        salvarDados();
        renderizarPresenca();
        mostrarToast("Aula removida!", "warning");
    }
}

function adicionarAula() {
    const mes = document.getElementById("mesPresenca")?.value;
    const ano = document.getElementById("anoPresenca")?.value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    if (!estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual]) {
        estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual] = {};
    }
    if (!estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key]) {
        estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key] = [];
    }
    estado.dadosPresenca[estado.escolaAtual][estado.turmaAtual][key].push({ 
        data: new Date().toISOString().split('T')[0], 
        presencas: {} 
    });
    salvarDados();
    renderizarPresenca();
    mostrarToast("Nova aula adicionada!");
}

function salvarPresenca() {
    salvarDados();
    mostrarToast("Presenças salvas!");
}

// ============================================================================
// VISTOS
// ============================================================================

function renderizarVistos() {
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    const alunos = getAlunosTurma();
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};
    tbody.innerHTML = "";

    alunos.forEach(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, ultima: "" };
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(1).innerHTML = `<span class="badge-visto">${dados.total}</span>`;
        row.insertCell(2).textContent = dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-";
        const btnCell = row.insertCell(3);
        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-star"></i> Dar Visto';
        btn.className = "btn-secondary";
        btn.onclick = () => abrirModalVisto(aluno);
        btnCell.appendChild(btn);
    });
}

function abrirModalVisto(aluno) {
    estado.alunoSelecionadoVisto = aluno;
    const modal = document.getElementById("modalVisto");
    const textarea = document.getElementById("modalDescVisto");
    if (textarea) textarea.value = "";
    if (modal) modal.style.display = "flex";
}

function salvarVisto() {
    if (!estado.alunoSelecionadoVisto) return;
    const descricao = document.getElementById("modalDescVisto")?.value.trim();
    if (!descricao) { mostrarToast("Descreva a participação!", "warning"); return; }
    
    if (!estado.dadosVistos[estado.escolaAtual][estado.turmaAtual]) {
        estado.dadosVistos[estado.escolaAtual][estado.turmaAtual] = {};
    }
    if (!estado.dadosVistos[estado.escolaAtual][estado.turmaAtual][estado.alunoSelecionadoVisto]) {
        estado.dadosVistos[estado.escolaAtual][estado.turmaAtual][estado.alunoSelecionadoVisto] = { total: 0, registros: [], ultima: "" };
    }
    const vistosAluno = estado.dadosVistos[estado.escolaAtual][estado.turmaAtual][estado.alunoSelecionadoVisto];
    vistosAluno.total++;
    vistosAluno.registros.push({ data: new Date().toISOString(), descricao: descricao });
    vistosAluno.ultima = new Date().toISOString();
    
    salvarDados();
    renderizarVistos();
    renderizarRanking();
    const modal = document.getElementById("modalVisto");
    if (modal) modal.style.display = "none";
    mostrarToast("Visto concedido!");
}

// ============================================================================
// HORÁRIOS
// ============================================================================

function renderizarHorarios(diaAlvo = null) {
    if (!diaAlvo) {
        const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];
        const hoje = new Date();
        const diaSemana = hoje.getDay();
        diaAlvo = dias[diaSemana - 1] || "segunda";
    }
    
    const grade = document.getElementById("gradeHorarios");
    if (!grade) return;
    
    const horarios = getHorariosAtuais();
    const horariosDia = horarios[diaAlvo] || {};
    
    grade.innerHTML = "";

    document.querySelectorAll('.dia-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.dia-btn[data-dia="${diaAlvo}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    let temAula = false;
    for (let turmaId in horariosDia) {
        const aulas = horariosDia[turmaId];
        if (!aulas || aulas.length === 0) continue;
        temAula = true;
        const turmaNome = estado.turmas[estado.escolaAtual]?.[turmaId]?.nome || turmaId;
        
        aulas.forEach(aula => {
            const item = document.createElement("div");
            item.className = "horario-item-moderno";
            item.style.cssText = "display:flex; align-items:center; gap:15px; padding:12px; background:#f8fafc; border-radius:8px; margin-bottom:8px; border-left:4px solid #667eea";
            item.innerHTML = `
                <div style="min-width:80px; font-weight:bold; color:#667eea">${aula.hora}</div>
                <div style="flex:1">
                    <strong>${aula.disciplina}</strong>
                    <div style="font-size:12px; color:#64748b">${turmaNome}</div>
                </div>
            `;
            grade.appendChild(item);
        });
    }

    if (!temAula) {
        grade.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar-times"></i> Nenhuma aula cadastrada para este dia.</div>';
    }
}

// ============================================================================
// RANKING
// ============================================================================

function renderizarRanking() {
    const disciplina = document.getElementById("rankingDisciplina")?.value;
    if (!disciplina) return;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};

    const dadosAlunos = alunos.map(aluno => {
        const media = calcularMedia(notasTurma[aluno] || {}, tipo);
        const vistos = vistosTurma[aluno]?.total || 0;
        return { aluno, media, vistos };
    });

    dadosAlunos.sort((a, b) => b.media - a.media);

    const container = document.getElementById("rankingContainer");
    if (!container) return;
    container.innerHTML = "";

    dadosAlunos.forEach((dado, pos) => {
        let medalha = "";
        if (pos === 0) medalha = "🥇";
        else if (pos === 1) medalha = "🥈";
        else if (pos === 2) medalha = "🥉";
        
        const item = document.createElement("div");
        item.className = "ranking-item-moderno";
        item.style.cssText = "display:flex; align-items:center; gap:15px; padding:12px; background:#f8fafc; border-radius:8px; margin-bottom:8px";
        item.innerHTML = `
            <div style="min-width:50px; font-size:20px; font-weight:bold; text-align:center">${medalha || (pos+1)}</div>
            <div style="flex:1"><strong>${dado.aluno}</strong></div>
            <div style="text-align:center; min-width:80px"><span class="badge-visto">${dado.vistos}</span></div>
            <div style="min-width:60px; font-weight:bold; color:#667eea">${dado.media.toFixed(1)}</div>
        `;
        container.appendChild(item);
    });
}

// ============================================================================
// RELATÓRIOS
// ============================================================================

function renderizarRelatorios() {
    renderizarResumoNotas();
    renderizarResumoFrequencia();
    renderizarAlunosDestaque();
    renderizarAlunosRecuperacao();
    atualizarGraficoEvolucao();
}

function renderizarResumoNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
    
    let soma = 0, qtd = 0, aprovados = 0, rec = 0, rep = 0;
    alunos.forEach(aluno => {
        const m = calcularMedia(notasTurma[aluno] || {}, tipo);
        if (m > 0) { soma += m; qtd++; }
        if (m >= 7) aprovados++;
        else if (m >= 5) rec++;
        else if (m > 0) rep++;
    });
    const mediaGeral = qtd > 0 ? (soma / qtd).toFixed(1) : "0.0";

    const resumoDiv = document.getElementById("resumoNotas");
    if (resumoDiv) {
        resumoDiv.innerHTML = `
            <p><strong>Média geral:</strong> ${mediaGeral}</p>
            <p><strong>✅ Aprovados:</strong> ${aprovados}</p>
            <p><strong>⚠️ Recuperação:</strong> ${rec}</p>
            <p><strong>❌ Reprovados:</strong> ${rep}</p>
        `;
    }
}

function renderizarResumoFrequencia() {
    const alunos = getAlunosTurma();
    const presencaTurma = estado.dadosPresenca[estado.escolaAtual]?.[estado.turmaAtual] || {};
    
    let totalAulas = 0, totalPresencas = 0;
    for (let key in presencaTurma) {
        const aulas = presencaTurma[key];
        totalAulas += aulas.length;
        aulas.forEach(aula => {
            for (let aluno in aula.presencas) {
                if (aula.presencas[aluno]) totalPresencas++;
            }
        });
    }
    const mediaPresencas = totalAulas > 0 && alunos.length > 0 ? Math.round((totalPresencas / (totalAulas * alunos.length)) * 100) : 0;

    const resumoDiv = document.getElementById("resumoFrequencia");
    if (resumoDiv) {
        resumoDiv.innerHTML = `
            <p><strong>Total de aulas:</strong> ${totalAulas}</p>
            <p><strong>Presença média:</strong> ${mediaPresencas}%</p>
        `;
    }
}

function renderizarAlunosDestaque() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};

    const destaques = alunos
        .map(aluno => ({ aluno, media: calcularMedia(notasTurma[aluno]||{}, tipo), vistos: vistosTurma[aluno]?.total||0 }))
        .filter(d => d.media >= 8.5)
        .sort((a,b) => b.media - a.media)
        .slice(0, 3);

    const container = document.getElementById("alunosDestaque");
    if (container) {
        container.innerHTML = destaques.length 
            ? destaques.map(d => `<p><strong>⭐ ${d.aluno}</strong> - Média: ${d.media.toFixed(1)}</p>`).join('') 
            : "<p>Nenhum aluno em destaque.</p>";
    }
}

function renderizarAlunosRecuperacao() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const alunos = getAlunosTurma();
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};

    const rec = alunos.filter(aluno => {
        const m = calcularMedia(notasTurma[aluno]||{}, tipo);
        return m >= 5 && m < 7;
    });

    const container = document.getElementById("alunosRecuperacao");
    if (container) {
        container.innerHTML = rec.length 
            ? rec.map(a => `<p><strong>⚠️ ${a}</strong></p>`).join('') 
            : "<p>Nenhum aluno em recuperação.</p>";
    }
}

// ============================================================================
// DASHBOARD
// ============================================================================

function getDiaSemanaNome(data) {
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    return dias[data.getDay()];
}

function getAulasDoDia(data) {
    const diaSemana = getDiaSemanaNome(data);
    const horarios = getHorariosAtuais();
    const aulasDia = horarios[diaSemana] || {};
    const aulas = [];
    const turmasDaEscola = estado.turmas[estado.escolaAtual] || {};
    
    for (let turmaId in turmasDaEscola) {
        const turmaAulas = aulasDia[turmaId] || [];
        turmaAulas.forEach(aula => {
            aulas.push({
                turmaNome: turmasDaEscola[turmaId]?.nome || turmaId,
                disciplina: aula.disciplina,
                hora: aula.hora
            });
        });
    }
    aulas.sort((a, b) => a.hora.localeCompare(b.hora));
    return aulas;
}

function renderizarDashboard() {
    const hoje = new Date();
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    
    const hojeDataSpan = document.getElementById("hojeData");
    if (hojeDataSpan) hojeDataSpan.textContent = hoje.toLocaleDateString('pt-BR');
    
    const aulasHoje = getAulasDoDia(hoje);
    const aulasHojeContainer = document.getElementById("aulasHojeContainer");
    if (aulasHojeContainer) {
        if (aulasHoje.length === 0) {
            aulasHojeContainer.innerHTML = '<div class="lista-vazia">Nenhuma aula programada para hoje!</div>';
        } else {
            aulasHojeContainer.innerHTML = aulasHoje.map(aula => `
                <div style="display:flex; align-items:center; gap:15px; padding:12px; background:#f8fafc; border-radius:8px; border-left:4px solid #667eea">
                    <div style="min-width:80px; font-weight:bold; color:#667eea">${aula.hora}</div>
                    <div style="flex:1">
                        <strong>${aula.disciplina}</strong>
                        <div style="font-size:12px; color:#64748b">${aula.turmaNome}</div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    const todasProximas = [];
    for (let i = 0; i < 3; i++) {
        const dia = new Date(hoje);
        dia.setDate(hoje.getDate() + i);
        getAulasDoDia(dia).forEach(aula => {
            const [h, m] = aula.hora.split(":").map(Number);
            const dataAula = new Date(dia);
            dataAula.setHours(h, m, 0);
            if (dataAula > new Date()) {
                todasProximas.push({ ...aula, data: new Date(dia), diffMin: Math.floor((dataAula - new Date()) / 60000) });
            }
        });
    }
    todasProximas.sort((a, b) => a.diffMin - b.diffMin);
    
    const proximasContainer = document.getElementById("proximasAulasContainer");
    if (proximasContainer) {
        if (todasProximas.length === 0) {
            proximasContainer.innerHTML = '<div class="lista-vazia">Nenhuma aula futura agendada</div>';
        } else {
            proximasContainer.innerHTML = todasProximas.slice(0, 5).map(a => `
                <div style="display:flex; align-items:center; gap:15px; padding:12px; background:#f8fafc; border-radius:8px; border-left:4px solid #667eea">
                    <div style="min-width:80px; font-weight:bold; color:#667eea">${a.hora}</div>
                    <div style="flex:1">
                        <strong>${a.disciplina}</strong>
                        <div style="font-size:12px; color:#64748b">${a.turmaNome} - ${a.data.toLocaleDateString('pt-BR')}</div>
                    </div>
                    <div style="background:#fef3c7; padding:4px 10px; border-radius:20px; font-size:12px">em ${a.diffMin}min</div>
                </div>
            `).join('');
        }
    }
}

// ============================================================================
// ADMIN, EVENTOS, OBSERVAÇÕES
// ============================================================================

function renderizarAdmin() {
    const turma = getTurmaConfig();
    if (!turma) return;
    const alunos = getAlunosTurma();
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    alunos.forEach((aluno, idx) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = idx + 1;
        row.insertCell(1).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(2).innerHTML = '<span style="color: #22c55e;">✓ Ativo</span>';
        const btnCell = row.insertCell(3);
        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i>';
        btnRemover.className = "btn-secondary";
        btnRemover.style.padding = "5px 10px";
        btnRemover.style.background = "#fef2f2";
        btnRemover.style.color = "#ef4444";
        btnRemover.onclick = () => removerAluno(aluno);
        btnCell.appendChild(btnRemover);
    });
}

function removerAluno(alunoNome) {
    if (!confirm(`Remover "${alunoNome}"?`)) return;
    const alunos = getAlunosTurma();
    const index = alunos.indexOf(alunoNome);
    if (index !== -1) alunos.splice(index, 1);
    salvarDados();
    renderizarAdmin();
    renderizarNotas();
    renderizarDashboard();
    mostrarToast(`"${alunoNome}" removido!`, "warning");
}

function adicionarAluno() {
    const nome = document.getElementById("modalAlunoNome")?.value.trim().toUpperCase();
    if (!nome) { mostrarToast("Digite o nome!", "warning"); return; }
    const alunos = getAlunosTurma();
    if (alunos.includes(nome)) { mostrarToast("Aluno já existe!", "warning"); return; }
    alunos.push(nome);
    alunos.sort();
    salvarDados();
    renderizarAdmin();
    renderizarNotas();
    renderizarDashboard();
    const modal = document.getElementById("modalAluno");
    if (modal) modal.style.display = "none";
    const inputNome = document.getElementById("modalAlunoNome");
    if (inputNome) inputNome.value = "";
    mostrarToast(`"${nome}" adicionado!`);
}

function renderizarEventos() {
    const container = document.getElementById("eventosContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (!estado.dadosEventos || estado.dadosEventos.length === 0) {
        container.innerHTML = '<div class="lista-vazia">Nenhum evento cadastrado</div>';
        return;
    }
    
    const eventosOrdenados = [...estado.dadosEventos].sort((a, b) => new Date(a.data) - new Date(b.data));
    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    
    eventosOrdenados.forEach((evento, idx) => {
        const data = new Date(evento.data);
        const eventCard = document.createElement("div");
        eventCard.className = "evento-item-moderno";
        eventCard.style.cssText = "display:flex; align-items:center; gap:15px; padding:12px; background:#f8fafc; border-radius:8px; margin-bottom:8px";
        eventCard.innerHTML = `
            <div style="min-width:70px; text-align:center; padding:8px; background:#667eea; color:white; border-radius:12px">
                <div style="font-size:22px; font-weight:bold">${data.getDate()}</div>
                <div style="font-size:11px; text-transform:uppercase">${meses[data.getMonth()]}</div>
            </div>
            <div style="flex:1">
                <h4 style="margin-bottom:4px">${evento.titulo}</h4>
                <p style="font-size:13px; color:#64748b">${evento.descricao || ""}</p>
            </div>
            <button class="evento-remover btn-secondary" data-index="${idx}" style="padding:5px 10px">Remover</button>
        `;
        container.appendChild(eventCard);
        
        eventCard.querySelector(".evento-remover").onclick = () => {
            estado.dadosEventos.splice(idx, 1);
            salvarDados();
            renderizarEventos();
            mostrarToast("Evento removido!", "warning");
        };
    });
}

function adicionarEvento() {
    const titulo = document.getElementById("eventoTitulo")?.value;
    const data = document.getElementById("eventoData")?.value;
    const descricao = document.getElementById("eventoDescricao")?.value;
    if (!titulo || !data) { mostrarToast("Preencha título e data!", "warning"); return; }
    estado.dadosEventos.push({ titulo, data, descricao });
    salvarDados();
    renderizarEventos();
    const modal = document.getElementById("modalEvento");
    if (modal) modal.style.display = "none";
    mostrarToast("Evento adicionado!");
}

function backupDados() {
    const backup = {
        notas: estado.dadosNotas,
        presenca: estado.dadosPresenca,
        vistos: estado.dadosVistos,
        observacoes: estado.dadosObservacoes,
        eventos: estado.dadosEventos,
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
            if (backup.notas) estado.dadosNotas = backup.notas;
            if (backup.presenca) estado.dadosPresenca = backup.presenca;
            if (backup.vistos) estado.dadosVistos = backup.vistos;
            if (backup.observacoes) estado.dadosObservacoes = backup.observacoes;
            if (backup.eventos) estado.dadosEventos = backup.eventos;
            salvarDados();
            renderizarNotas();
            renderizarPresenca();
            renderizarVistos();
            renderizarRelatorios();
            renderizarRanking();
            renderizarDashboard();
            renderizarEventos();
            mostrarToast("Restore realizado!");
        } catch(e) { mostrarToast("Erro ao restaurar!", "error"); }
    };
    reader.readAsText(file);
}

function abrirModalObservacao(aluno) {
    const obs = estado.dadosObservacoes[estado.escolaAtual]?.[estado.turmaAtual]?.[aluno] || "";
    const textarea = document.getElementById("modalObsTexto");
    if (textarea) textarea.value = obs;
    const modal = document.getElementById("modalObs");
    if (modal) modal.style.display = "flex";
    window.alunoObsSelecionado = aluno;
}

function salvarObservacaoModal() {
    const obs = document.getElementById("modalObsTexto")?.value || "";
    if (window.alunoObsSelecionado) {
        if (!estado.dadosObservacoes[estado.escolaAtual]) estado.dadosObservacoes[estado.escolaAtual] = {};
        if (!estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual]) estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual] = {};
        estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual][window.alunoObsSelecionado] = obs;
        salvarDados();
        const modal = document.getElementById("modalObs");
        if (modal) modal.style.display = "none";
        mostrarToast("Observação salva!");
    }
}

function atualizarGraficoEvolucao() {
    const alunoSelect = document.getElementById("graficoAlunoSelect");
    if (!alunoSelect) return;
    const aluno = alunoSelect.value;
    if (!aluno) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
    
    let labels = [], valores = [];
    if (tipo === "trimestral") {
        labels = ["NM1", "NM2", "NM3"];
        valores = [parseFloat(notas.nm1) || 0, parseFloat(notas.nm2) || 0, parseFloat(notas.nm3) || 0];
    } else {
        labels = ["NM1", "NM2"];
        valores = [parseFloat(notas.nm1) || 0, parseFloat(notas.nm2) || 0];
    }
    
    const ctx = document.getElementById("graficoEvolucao")?.getContext("2d");
    if (!ctx) return;
    if (estado.graficoEvolucao) estado.graficoEvolucao.destroy();
    
    estado.graficoEvolucao = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets: [{ label: 'Evolução das Notas', data: valores, borderColor: '#667eea', backgroundColor: 'rgba(102,126,234,0.1)', borderWidth: 3, fill: true, tension: 0.3, pointRadius: 6 }] },
        options: { responsive: true, scales: { y: { min: 0, max: 10, title: { display: true, text: 'Nota' } } } }
    });
}

function exportarPDF() {
    const turma = getTurmaConfig();
    if (!turma) {
        mostrarToast("Selecione uma turma primeiro!", "warning");
        return;
    }
    
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';
    
    element.innerHTML = `
        <div style="text-align:center; margin-bottom:30px">
            <h1 style="color:#667eea">Academic Manager Pro</h1>
            <h2>${turma.nome}</h2>
            <p>${estado.escolas[estado.escolaAtual]?.nome || ''}</p>
            <p>Data: ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>
        <table style="width:100%; border-collapse:collapse">
            <thead><tr>
                <th style="border:1px solid #ddd; padding:8px; background:#667eea; color:white">Aluno</th>
                <th style="border:1px solid #ddd; padding:8px; background:#667eea; color:white">NM1</th>
                <th style="border:1px solid #ddd; padding:8px; background:#667eea; color:white">NM2</th>
                ${turma.tipoAvaliacao === "trimestral" ? '<th style="border:1px solid #ddd; padding:8px; background:#667eea; color:white">NM3</th>' : ''}
                <th style="border:1px solid #ddd; padding:8px; background:#667eea; color:white">Média</th>
                <th style="border:1px solid #ddd; padding:8px; background:#667eea; color:white">Status</th>
            </tr></thead>
            <tbody>
    `;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || turma.disciplinas[0];
    const alunos = getAlunosTurma();
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = turma.tipoAvaliacao === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        const media = turma.tipoAvaliacao === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        const status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        const statusColor = media >= 7 ? "#22c55e" : (media >= 5 ? "#f97316" : "#ef4444");
        
        element.innerHTML += `<tr>
            <td style="border:1px solid #ddd; padding:8px">${alumo}</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center">${nm1.toFixed(1)}</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center">${nm2.toFixed(1)}</td>
            ${turma.tipoAvaliacao === "trimestral" ? `<td style="border:1px solid #ddd; padding:8px; text-align:center">${nm3.toFixed(1)}</td>` : ''}
            <td style="border:1px solid #ddd; padding:8px; text-align:center; font-weight:bold">${media.toFixed(1)}</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center; color:${statusColor}">${status}</td>
        </tr>`;
    });
    
    element.innerHTML += `</tbody></table><div style="margin-top:30px; text-align:center"><p>© ${new Date().getFullYear()} Academic Manager Pro</p></div>`;
    
    html2pdf().set({ margin: [0.5,0.5,0.5,0.5], filename: `Boletim_${turma.nome}.pdf`, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(element).save();
    mostrarToast("PDF gerado!");
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

async function iniciarSistema(usuario) {
    estado.sessaoAtual = usuario;
    const usuarioLogado = document.getElementById("usuarioLogado");
    if (usuarioLogado) usuarioLogado.textContent = usuario.nome;
    
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "block";
    
    await carregarDadosJSON();
    carregarTurmasSelect();
    
    let escolaInicial = "gentil", turmaInicial = "1adm";
    if (usuario.escola === "eneas") { escolaInicial = "eneas"; turmaInicial = "inf1"; }
    trocarEscolaTurma(escolaInicial, turmaInicial);
    
    // Eventos de navegação
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            const pagina = item.dataset.page;
            navegarPagina(pagina);
        });
    });
    
    // Eventos dos botões
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas")?.addEventListener("click", exportarNotas);
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca")?.addEventListener("click", salvarPresenca);
    document.getElementById("adicionarVisto")?.addEventListener("click", () => {
        const alunos = getAlunosTurma();
        if (alunos.length > 0) abrirModalVisto(alunos[0]);
    });
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); mostrarToast("Vistos salvos!"); });
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto || (() => mostrarToast("Função em desenvolvimento")));
    document.getElementById("exportarPDF")?.addEventListener("click", exportarPDF);
    document.getElementById("adicionarEvento")?.addEventListener("click", () => {
        const modal = document.getElementById("modalEvento");
        if (modal) modal.style.display = "flex";
    });
    document.getElementById("modalSalvarEvento")?.addEventListener("click", adicionarEvento);
    document.getElementById("adicionarAlunoBtn")?.addEventListener("click", () => {
        const modal = document.getElementById("modalAluno");
        if (modal) modal.style.display = "flex";
    });
    document.getElementById("modalSalvarAluno")?.addEventListener("click", adicionarAluno);
    document.getElementById("backupDadosBtn")?.addEventListener("click", backupDados);
    document.getElementById("restoreDadosBtn")?.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => { if (e.target.files[0]) restoreDados(e.target.files[0]); };
        input.click();
    });
    document.getElementById("modalSalvarVisto")?.addEventListener("click", salvarVisto);
    document.getElementById("modalSalvarObs")?.addEventListener("click", salvarObservacaoModal);
    document.getElementById("graficoAlunoSelect")?.addEventListener("change", atualizarGraficoEvolucao);
    document.getElementById("escolaSelect")?.addEventListener("change", (e) => {
        const novaEscola = e.target.value;
        const primeiraTurma = Object.keys(estado.turmas[novaEscola])[0];
        trocarEscolaTurma(novaEscola, primeiraTurma);
    });
    document.getElementById("turmaSelect")?.addEventListener("change", (e) => {
        trocarEscolaTurma(estado.escolaAtual, e.target.value);
    });
    document.getElementById("disciplinaNotas")?.addEventListener("change", () => {
        renderizarNotas();
        renderizarRanking();
    });
    document.getElementById("rankingDisciplina")?.addEventListener("change", renderizarRanking);
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("toggleDarkMode")?.addEventListener("click", () => document.body.classList.toggle("dark-mode"));
    document.getElementById("btnLogout")?.addEventListener("click", fazerLogout);
    
    document.querySelectorAll(".dia-btn").forEach(btn => {
        btn.addEventListener("click", () => renderizarHorarios(btn.dataset.dia));
    });
    renderizarHorarios();
    
    document.querySelectorAll(".modal-fechar").forEach(btn => {
        btn.onclick = () => {
            const modais = ["modalAluno", "modalVisto", "modalEvento", "modalObs"];
            modais.forEach(id => {
                const modal = document.getElementById(id);
                if (modal) modal.style.display = "none";
            });
        };
    });
    
    mostrarToast("Sistema iniciado com sucesso!");
}

// ============================================================================
// SERVICE WORKER E DOM CONTENT LOADED
// ============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => console.log(err));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const sessao = verificarSessao();
    if (sessao) {
        iniciarSistema(sessao);
    } else {
        document.getElementById("telaLogin").style.display = "flex";
        document.getElementById("conteudoPrincipal").style.display = "none";
    }
    
    document.getElementById("btnLogin")?.addEventListener("click", () => {
        const cpf = document.getElementById("loginCpf").value;
        const senha = document.getElementById("loginSenha").value;
        const resultado = fazerLogin(cpf, senha);
        if (resultado.sucesso) {
            iniciarSistema(estado.sessaoAtual);
        } else {
            document.getElementById("loginError").textContent = resultado.erro;
        }
    });
    
    document.getElementById("loginSenha")?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("btnLogin").click();
    });
});
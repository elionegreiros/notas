// ============================================
// USUÁRIOS AUTORIZADOS (CPF + SENHA)
// ============================================

const usuariosAutorizados = {
    // Professores
    "02711337324": { nome: "Prof. Elio Negreiros", senha: "02711337324", tipo: "professor" },
    "98765432100": { nome: "Profa. Maria Santos", senha: "123456", tipo: "professor" },
    "11122233344": { nome: "Prof. Carlos Lima", senha: "123456", tipo: "professor" },
    
    // Coordenadores (têm acesso total)
    "55566677788": { nome: "Coord. Ana Paula", senha: "admin123", tipo: "coordenador" },
    
    // Admin (acesso total)
    "02711337324": { nome: "Administrador", senha: "admin123", tipo: "admin" }
};

// Função de login
function fazerLogin(cpf, senha) {
    // Limpar formatação do CPF
    const cpfLimpo = cpf.replace(/[.\-]/g, '');
    
    const usuario = usuariosAutorizados[cpfLimpo];
    
    if (usuario && usuario.senha === senha) {
        // Salvar sessão
        const sessao = {
            cpf: cpfLimpo,
            nome: usuario.nome,
            tipo: usuario.tipo,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem("sessaoAcademico", JSON.stringify(sessao));
        return { sucesso: true, usuario: sessao };
    }
    
    return { sucesso: false, erro: "CPF ou senha incorretos!" };
}

function verificarSessao() {
    const sessaoStr = localStorage.getItem("sessaoAcademico");
    if (!sessaoStr) return null;
    
    try {
        const sessao = JSON.parse(sessaoStr);
        // Verificar se a sessão não expirou (24 horas)
        const loginTime = new Date(sessao.loginTime);
        const agora = new Date();
        const diffHoras = (agora - loginTime) / (1000 * 60 * 60);
        
        if (diffHoras > 24) {
            localStorage.removeItem("sessaoAcademico");
            return null;
        }
        
        return sessao;
    } catch(e) {
        return null;
    }
}

function fazerLogout() {
    localStorage.removeItem("sessaoAcademico");
    document.getElementById("telaLogin").style.display = "flex";
    document.getElementById("conteudoPrincipal").style.display = "none";
    document.getElementById("loginCpf").value = "";
    document.getElementById("loginSenha").value = "";
}

// ============================================
// DADOS DOS ALUNOS
// ============================================

const alunos1Adm = [
    "ALICE FERREIRA DA SILVA", "CARLENE MARTINS DA SILVA", "DAVI DE ALENCAR MELO BEZERRA",
    "ELIEZER LEAL BARBOSA", "ENRICO SAMUEL PEREIRA HOSTERNO", "FRANCISCA YARA GONCALVES DE SANTANA",
    "FRANCISCO FELIX DINO JUNIOR", "FRANCISCO JHONANTAN GONCALVES DA SILVA", "HELOA MENDES ALVES",
    "JOSE GUILHERME ALVES PIMENTEL", "KELY FERNANDES DA SILVA", "KEVEN VINICIUS ALVES DE OLVEIRA",
    "LAVINE MARIA FERREIRA FELIX", "LUCAS VINICIUS ALVES DA SILVA", "LUIS ERIVAN FERNANDES DE SOUSA",
    "MARIA ALICE FREIRE DA SILVA", "MARIA CLARA DAMACENA DE SOUSA", "MARIA FERNANDA DE SOUSA",
    "MARIA ISADORA RIBEIRO DA SILVA", "MARIELLE PIRES DA SILVA", "MIGUEL THARL EY BATISTA BARROSA",
    "PAULO VICTOR MOREIRA DA SILVA", "PEDRO LUCAS BEZERRA DA COSTA", "RANNIEL ALVES NOGUEIRA DA SILVA",
    "RENNA DUARTE DA SILVA", "THAYSSA DO NASCIMENTO SILVA"
];

const alunos1Amb = [
    "ALEXANDRA DUARTE LOPES DA ROCHA", "ALICKY", "ANA CLARA MOTA GOMES", "ANA CLARA SOUSA SILVA",
    "ANDRESSA OLIVEIRA DE SOUSA", "ANNE VITORIA MARTINS CARVALHO", "DEBORA CAMILLE OLIVEIRA DE SOUSA",
    "DEISE MARTINS LIMA", "ELICKY SOARES LOIOLA", "FRANCISCO DAVID ROQUE DA SILVA", "GABRIELLY BRITO PEDROSA",
    "GEOVANNA ANTONELE RIBEIRO DE SOUSA", "JANICE VIANA DE SOUSA", "LARA MAYSA VITURIANO DE CARVALHO",
    "LUIS DAVY DA SILVA RULIM", "LUIS GUSTAVO GOMES DE MELO", "MAYSA ALVES SILVA", "SARA OLIVEIRA CRIZANTINO",
    "STEICIE DA SILVA LIMA"
];

const alunos2DS = [
    "ANA SOPHIA GOMES DA SILVA", "CARLOS MANOEL CAETANO", "FRANCISCA INGRID TAINAR DA SILVA ADALBERTO",
    "IAN BENICIO DE OLIVEIRA CARVALHO", "JACKSON VICENTE DO NASCIMENTO", "JOHNNATHAN RODRIGUES DA SILVA",
    "JUAN LOIOLA DA SILVA", "LEO VICTOR FERREIRA LOIOLA", "MARIA BEATRIZ XAVIER DE SOUSA",
    "MIKLENYO JOSE LUSTOSA ALVES", "NICOLAS OLIVEIRA DINIZ", "PABLO KAUAN DE SOUSA NASCIMENTO",
    "SHAUANY SOUZA LOPES", "TAYNARA OLIVEIRA REIS", "THIAGO LEVI NUNES PEREIRA", "VALTER ALEXANDRE OLIVEIRA FERNANDES"
];

const alunosInf1 = [
    "ALEXANDRE BARBOSA DA SILVA", "ANA MARIA DE JESUS OLIVEIRA", "ANTONIA GLENDA DA SILVA ALVES",
    "ANTONIO MAIK BEZERRA DOS SANTOS", "DAGMA MOREIRA LIMA FERNANDES", "DANIEL RODRIGUES XAVIER",
    "EMANUELLY DA SILVA ALVES", "FRANCIDALVA DE LIMA NOGUEIRA", "FRANCISCO EDSON DA SILVA CARNEIRO",
    "FRANCISCO VINICIUS SOARES MELO", "GEANE MARIA CARDOSO SOARES", "GEOVANA MARIA PEREIRA MARTINS",
    "KELIANY VIEIRA ANDRADE", "LUCIANO FRANCISCO DA SILVA", "LUZANIRA ARAUJO DE SOUSA",
    "MAICON RODRIGO BARROS SILVA", "MARIA BEATRIZ FERREIRA DA SILVA", "MARIA DA CRUZ FURTUNATA DA SILVA",
    "MARIA DE FATIMA OLIVEIRA", "MARIA ISABELLY RIBEIRO MARTINA", "MARIA ISLANIA DE SOUSA",
    "MARIA KARIELY DE MELO ANDRADE", "MARINA FERREIRA LEAL", "MARISANGELA VELOSO DA SILVA",
    "MAURO SILVA MARTINS DE SOUSA", "RITA FRALINA ROQUE DA SILVA", "SIDNEY SANTANA DA SILVA",
    "TALYSON SOUSA CARVALHO", "VENILSON GOMES DA SILVA", "VIVIANE DE SOUSA LOPES"
];

const alunosInf5 = [
    "AELTON MOTA DE SOUSA", "ANDRE DE CASTRO LIMA", "ANTONIA RODRIGUES MARTINS",
    "DAYANNY MARIA OLIVEIRA FREITAS", "DOUGLAS DE CARVALHO CARDOSO", "EDILENE CARVALHO DA SILVA",
    "HILTON FERNANDES DA SILVA", "KAIQUE JOSE LIMA LEITE"
];

const alunosPorTurma = {
    "1adm": alunos1Adm,
    "1amb": alunos1Amb,
    "2ds": alunos2DS,
    "inf1": alunosInf1,
    "inf5": alunosInf5
};

const turmasConfig = {
    "1adm": { nome: "1º Administração", alunos: alunos1Adm, disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
    "1amb": { nome: "1º Controle Ambiental", alunos: alunos1Amb, disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
    "2ds": { nome: "2º Desenvolvimento de Sistemas", alunos: alunos2DS, disciplinas: ["Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC", "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO", "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS", "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"], tipoAvaliacao: "trimestral" },
    "inf1": { nome: "Informática - Módulo I", alunos: alunosInf1, disciplinas: ["Análise e Lógica de Programação"], tipoAvaliacao: "bimestral" },
    "inf5": { nome: "Informática - Módulo V", alunos: alunosInf5, disciplinas: ["Empreendedorismo para TI"], tipoAvaliacao: "bimestral" }
};

let turmaAtual = "1adm";
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};
let alunoSelecionadoVisto = null;
let sessaoAtual = null;

// ============================================
// FUNÇÕES DE ADMIN
// ============================================

function sincronizarAlunosComListas() {
    for (let turmaId in turmasConfig) {
        turmasConfig[turmaId].alunos = alunosPorTurma[turmaId];
    }
}

function salvarAlunosPersistencia() {
    const alunosData = {
        "1adm": alunosPorTurma["1adm"],
        "1amb": alunosPorTurma["1amb"],
        "2ds": alunosPorTurma["2ds"],
        "inf1": alunosPorTurma["inf1"],
        "inf5": alunosPorTurma["inf5"]
    };
    localStorage.setItem("alunosPersonalizados", JSON.stringify(alunosData));
}

function carregarAlunosPersistencia() {
    const saved = localStorage.getItem("alunosPersonalizados");
    if (saved) {
        try {
            const alunosData = JSON.parse(saved);
            for (let turmaId in alunosData) {
                if (alunosPorTurma[turmaId]) alunosPorTurma[turmaId] = alunosData[turmaId];
            }
            sincronizarAlunosComListas();
        } catch(e) {}
    }
}

function removerAluno(turmaId, alunoNome) {
    if (!confirm(`⚠️ Remover "${alunoNome}"?\n\nTodas as notas, presenças e vistos serão excluídos!`)) return;
    
    const index = alunosPorTurma[turmaId].indexOf(alunoNome);
    if (index !== -1) alunosPorTurma[turmaId].splice(index, 1);
    
    const disciplinas = turmasConfig[turmaId].disciplinas;
    disciplinas.forEach(disciplina => {
        if (dadosNotas[turmaId] && dadosNotas[turmaId][disciplina]) delete dadosNotas[turmaId][disciplina][alunoNome];
    });
    
    for (let key in dadosPresenca[turmaId]) {
        if (Array.isArray(dadosPresenca[turmaId][key])) {
            dadosPresenca[turmaId][key].forEach(aula => { if (aula.presencas) delete aula.presencas[alunoNome]; });
        }
    }
    
    if (dadosVistos[turmaId] && dadosVistos[turmaId].alunos) delete dadosVistos[turmaId].alunos[alunoNome];
    
    sincronizarAlunosComListas();
    salvarAlunosPersistencia();
    salvarDados();
    
    if (turmaAtual === turmaId) {
        renderizarNotas(); renderizarPresenca(); renderizarVistos(); renderizarRelatorios();
    }
    renderizarAdmin();
    alert(`✅ "${alunoNome}" removido!`);
}

function adicionarAluno(turmaId, alunoNome) {
    alunoNome = alunoNome.trim().toUpperCase();
    if (!alunoNome) { alert("Digite o nome!"); return false; }
    if (alunosPorTurma[turmaId].includes(alunoNome)) { alert("Aluno já cadastrado!"); return false; }
    
    alunosPorTurma[turmaId].push(alunoNome);
    alunosPorTurma[turmaId].sort();
    
    const disciplinas = turmasConfig[turmaId].disciplinas;
    const tipo = turmasConfig[turmaId].tipoAvaliacao;
    
    disciplinas.forEach(disciplina => {
        if (!dadosNotas[turmaId]) dadosNotas[turmaId] = {};
        if (!dadosNotas[turmaId][disciplina]) dadosNotas[turmaId][disciplina] = {};
        if (tipo === "trimestral") dadosNotas[turmaId][disciplina][alunoNome] = { nm1: "", nm2: "", nm3: "" };
        else dadosNotas[turmaId][disciplina][alunoNome] = { nm1: "", nm2: "" };
    });
    
    if (!dadosVistos[turmaId]) dadosVistos[turmaId] = {};
    if (!dadosVistos[turmaId].alunos) dadosVistos[turmaId].alunos = {};
    dadosVistos[turmaId].alunos[alunoNome] = { total: 0, registros: [], ultima: "" };
    
    sincronizarAlunosComListas();
    salvarAlunosPersistencia();
    salvarDados();
    
    if (turmaAtual === turmaId) {
        renderizarNotas(); renderizarPresenca(); renderizarVistos(); renderizarRelatorios();
    }
    renderizarAdmin();
    alert(`✅ "${alunoNome}" adicionado!`);
    return true;
}

function renderizarAdmin() {
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || "1adm";
    const alunos = alunosPorTurma[turmaAdmin];
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    alunos.forEach((aluno, idx) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = idx + 1;
        row.insertCell(1).textContent = aluno;
        row.insertCell(2).innerHTML = '<span style="color: #2e7d32;">✓ Ativo</span>';
        const btnCell = row.insertCell(3);
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "🗑️ Remover";
        btnRemover.className = "btn btn-pequeno";
        btnRemover.style.background = "#dc3545";
        btnRemover.style.color = "white";
        btnRemover.onclick = () => removerAluno(turmaAdmin, aluno);
        btnCell.appendChild(btnRemover);
    });
}

// ============================================
// FUNÇÕES PRINCIPAIS
// ============================================

function inicializarEstruturas() {
    for (let turmaId in turmasConfig) {
        if (!dadosNotas[turmaId]) dadosNotas[turmaId] = {};
        if (!dadosPresenca[turmaId]) dadosPresenca[turmaId] = {};
        if (!dadosVistos[turmaId]) dadosVistos[turmaId] = {};
        
        const alunos = turmasConfig[turmaId].alunos;
        const disciplinas = turmasConfig[turmaId].disciplinas;
        const tipo = turmasConfig[turmaId].tipoAvaliacao;
        
        disciplinas.forEach(disciplina => {
            if (!dadosNotas[turmaId][disciplina]) {
                dadosNotas[turmaId][disciplina] = {};
                alunos.forEach(aluno => {
                    if (tipo === "trimestral") dadosNotas[turmaId][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
                    else dadosNotas[turmaId][disciplina][aluno] = { nm1: "", nm2: "" };
                });
            }
        });
        
        if (!dadosVistos[turmaId].alunos) {
            dadosVistos[turmaId].alunos = {};
            alunos.forEach(aluno => {
                if (!dadosVistos[turmaId].alunos[aluno]) dadosVistos[turmaId].alunos[aluno] = { total: 0, registros: [], ultima: "" };
            });
        }
    }
}

function carregarDadosSalvos() {
    carregarAlunosPersistencia();
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            dadosNotas = data.notas || {};
            dadosPresenca = data.presenca || {};
            dadosVistos = data.vistos || {};
        } catch(e) {}
    }
    inicializarEstruturas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("sistemaAcademico", JSON.stringify({
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos
    }));
}

function renderizarNotas() {
    const disciplinaSelect = document.getElementById("disciplinaNotas");
    if (!disciplinaSelect) return;
    const disciplina = disciplinaSelect.value;
    if (!disciplina) return;
    
    const alunos = turmasConfig[turmaAtual].alunos;
    const notasTurma = dadosNotas[turmaAtual]?.[disciplina] || {};
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || (tipo === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" });
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        let status = "", statusClass = "";
        if (media >= 7) { status = "✓ Aprovado"; statusClass = "status-aprovado"; }
        else if (media >= 5) { status = "⚠️ Recuperação"; statusClass = "status-recuperacao"; }
        else { status = "✗ Reprovado"; statusClass = "status-reprovado"; }
        
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        
        [1, 2].forEach((_, i) => {
            const cell = row.insertCell(i + 1);
            const input = document.createElement("input");
            input.type = "number"; input.step = "0.1"; input.min = "0"; input.max = "10";
            input.value = notas[`nm${i+1}`] !== "" ? notas[`nm${i+1}`] : "";
            input.classList.add("nota-input");
            input.dataset.aluno = aluno;
            input.dataset.trimestre = `nm${i+1}`;
            cell.appendChild(input);
        });
        
        if (tipo === "trimestral") {
            const cell3 = row.insertCell(3);
            const input3 = document.createElement("input");
            input3.type = "number"; input3.step = "0.1"; input3.min = "0"; input3.max = "10";
            input3.value = notas.nm3 !== "" ? notas.nm3 : "";
            input3.classList.add("nota-input");
            input3.dataset.aluno = aluno;
            input3.dataset.trimestre = "nm3";
            cell3.appendChild(input3);
            row.insertCell(4).textContent = media.toFixed(1);
            row.insertCell(5).innerHTML = `<span class="${statusClass}">${status}</span>`;
        } else {
            row.insertCell(3).textContent = media.toFixed(1);
            row.insertCell(4).innerHTML = `<span class="${statusClass}">${status}</span>`;
        }
    });
}

function salvarNotas() {
    const disciplina = document.getElementById("disciplinaNotas").value;
    const inputs = document.querySelectorAll("#tbodyNotas .nota-input");
    inputs.forEach(input => {
        const aluno = input.dataset.aluno;
        const trimestre = input.dataset.trimestre;
        let valor = input.value === "" ? "" : parseFloat(input.value);
        if (valor !== "" && (isNaN(valor) || valor < 0 || valor > 10)) valor = "";
        if (!dadosNotas[turmaAtual][disciplina][aluno]) dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
        dadosNotas[turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    salvarDados();
    renderizarNotas();
    alert("✅ Notas salvas!");
}

function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = dadosPresenca[turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";
    if (aulas.length === 0) { container.innerHTML = '<div class="lista-vazia">Nenhuma aula registrada.</div>'; return; }
    
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        let presencasHtml = "";
        turmasConfig[turmaAtual].alunos.forEach(aluno => {
            const isChecked = aula.presencas && aula.presencas[aluno] === true;
            presencasHtml += `<tr><td>${aluno}</td><td><input type="checkbox" class="presenca-check" data-aluno="${aluno}" ${isChecked ? 'checked' : ''}></td></tr>`;
        });
        aulaCard.innerHTML = `
            <div class="aula-header"><span class="aula-data">📅 ${new Date(aula.data).toLocaleDateString('pt-BR')}</span><button class="aula-remover" data-index="${idx}">🗑️</button></div>
            <table class="tabela-presenca"><thead><tr><th>Aluno</th><th>Presente?</th></tr></thead><tbody>${presencasHtml}</tbody></table>
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
    alert("✅ Nova aula adicionada!");
}

function renderizarVistos() {
    const vistosTurma = dadosVistos[turmaAtual]?.alunos || {};
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    tbody.innerHTML = "";
    turmasConfig[turmaAtual].alunos.forEach(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, ultima: "" };
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        row.insertCell(1).innerHTML = `<strong>${dados.total}</strong>`;
        row.insertCell(2).textContent = dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-";
        const btnCell = row.insertCell(3);
        const btn = document.createElement("button");
        btn.textContent = "➕ Visto";
        btn.className = "btn btn-pequeno";
        btn.onclick = () => abrirModalVisto(aluno);
        btnCell.appendChild(btn);
    });
}

function abrirModalVisto(aluno) {
    alunoSelecionadoVisto = aluno;
    document.getElementById("modalDescVisto").value = "";
    document.getElementById("modalVisto").style.display = "block";
}

function fecharModalVisto() { document.getElementById("modalVisto").style.display = "none"; }

function salvarVisto() {
    if (!alunoSelecionadoVisto) return;
    const descricao = document.getElementById("modalDescVisto")?.value.trim();
    if (!descricao) { alert("Descreva a participação!"); return; }
    if (!dadosVistos[turmaAtual].alunos) dadosVistos[turmaAtual].alunos = {};
    const vistosTurma = dadosVistos[turmaAtual].alunos;
    if (!vistosTurma[alunoSelecionadoVisto]) vistosTurma[alunoSelecionadoVisto] = { total: 0, registros: [], ultima: "" };
    const agora = new Date().toISOString();
    vistosTurma[alunoSelecionadoVisto].total++;
    vistosTurma[alunoSelecionadoVisto].registros.push({ data: agora, descricao: descricao });
    vistosTurma[alunoSelecionadoVisto].ultima = agora;
    salvarDados();
    renderizarVistos();
    fecharModalVisto();
    alert(`✅ Visto para ${alunoSelecionadoVisto}!`);
}

function renderizarRelatorios() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    
    let aprovados = 0, recuperacao = 0, reprovados = 0, somaMedias = 0;
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        if (media >= 7) aprovados++; else if (media >= 5) recuperacao++; else reprovados++;
        somaMedias += media;
    });
    const mediaGeral = alunos.length ? (somaMedias / alunos.length).toFixed(1) : 0;
    document.getElementById("resumoNotas").innerHTML = `<ul><li>📊 Média Geral: ${mediaGeral}</li><li>✅ Aprovados: ${aprovados}</li><li>⚠️ Recuperação: ${recuperacao}</li><li>❌ Reprovados: ${reprovados}</li></ul>`;
    
    let totalPresencas = 0, totalAulas = 0;
    for (let key in dadosPresenca[turmaAtual]) {
        if (Array.isArray(dadosPresenca[turmaAtual][key])) {
            dadosPresenca[turmaAtual][key].forEach(aula => { totalAulas++; totalPresencas += Object.values(aula.presencas || {}).filter(v => v === true).length; });
        }
    }
    const frequenciaMedia = totalAulas ? ((totalPresencas / (totalAulas * alunos.length)) * 100).toFixed(1) : 0;
    document.getElementById("resumoFrequencia").innerHTML = `<ul><li>📅 Total Aulas: ${totalAulas}</li><li>📈 Frequência: ${frequenciaMedia}%</li></ul>`;
    
    const destaques = []; alunos.forEach(aluno => { const v = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0; if (v >= 3) destaques.push({ aluno, vistos: v }); });
    destaques.sort((a,b) => b.vistos - a.vistos);
    document.getElementById("alunosDestaque").innerHTML = destaques.length ? `<ul>${destaques.slice(0,5).map(d => `<li>⭐ ${d.aluno} - ${d.vistos} vistos</li>`).join('')}</ul>` : "<p>Nenhum destaque</p>";
    
    const recuperacaoList = [];
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        if (media >= 5 && media < 7) recuperacaoList.push({ aluno, media });
    });
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ? `<ul>${recuperacaoList.map(r => `<li>⚠️ ${r.aluno} - ${r.media.toFixed(1)}</li>`).join('')}</ul>` : "<p>Nenhum</p>";
}

function exportarRelatorioCompleto() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    const dadosExport = alunos.map(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        let status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        let vistos = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0;
        let presencas = 0, aulas = 0;
        for (let key in dadosPresenca[turmaAtual]) {
            if (Array.isArray(dadosPresenca[turmaAtual][key])) {
                dadosPresenca[turmaAtual][key].forEach(aula => { aulas++; if (aula.presencas && aula.presencas[aluno]) presencas++; });
            }
        }
        let freq = aulas ? ((presencas / aulas) * 100).toFixed(1) : "0";
        let row = { Aluno: aluno, NM1: nm1, NM2: nm2, "Média": media.toFixed(1), Status: status, Frequência: `${freq}%`, Vistos: vistos };
        if (tipo === "trimestral") row["NM3"] = nm3;
        return row;
    });
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Relatorio_${turmasConfig[turmaAtual].nome}`);
    XLSX.writeFile(livro, `Relatorio_${turmasConfig[turmaAtual].nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
    alert("✅ Relatório exportado!");
}

function atualizarCabecalhoNotas() {
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    const thead = document.querySelector("#tabelaNotas thead tr");
    if (!thead) return;
    if (tipo === "trimestral") thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>NM3</th><th>Média</th><th>Status</th>`;
    else thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>Média</th><th>Status</th>`;
}

function trocarTurma(turmaId) {
    turmaAtual = turmaId;
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.turma === turmaId);
    });
    document.getElementById("turmaTitulo").innerHTML = `<h1>📚 ${turmasConfig[turmaId].nome}</h1>`;
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turmasConfig[turmaId].disciplinas.forEach(d => {
            const option = document.createElement("option");
            option.value = d; option.textContent = d;
            selectDisciplina.appendChild(option);
        });
    }
    atualizarCabecalhoNotas();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
}

function iniciarSistema(usuario) {
    sessaoAtual = usuario;
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "block";
    carregarDadosSalvos();
    trocarTurma("1adm");
}

// ============================================
// FORMATAÇÃO DO CPF
// ============================================

function formatarCPF(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length <= 11) {
        if (valor.length > 9) valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        else if (valor.length > 6) valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        else if (valor.length > 3) valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        input.value = valor;
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // Verificar se já existe sessão ativa
    const sessao = verificarSessao();
    if (sessao) {
        iniciarSistema(sessao);
    } else {
        document.getElementById("telaLogin").style.display = "flex";
        document.getElementById("conteudoPrincipal").style.display = "none";
    }
    
    // Formatar CPF
    const cpfInput = document.getElementById("loginCpf");
    if (cpfInput) cpfInput.addEventListener("input", () => formatarCPF(cpfInput));
    
    // Botão de login
    document.getElementById("btnLogin")?.addEventListener("click", () => {
        const cpf = document.getElementById("loginCpf").value;
        const senha = document.getElementById("loginSenha").value;
        const resultado = fazerLogin(cpf, senha);
        if (resultado.sucesso) {
            iniciarSistema(resultado.usuario);
        } else {
            document.getElementById("loginError").textContent = resultado.erro;
        }
    });
    
    // Enter no campo senha
    document.getElementById("loginSenha")?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("btnLogin").click();
    });
    
    // Botão logout
    document.getElementById("btnLogout")?.addEventListener("click", fazerLogout);
    
    // Eventos do sistema principal
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.addEventListener("click", () => trocarTurma(btn.dataset.turma));
    });
    
    document.querySelectorAll(".aba-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".aba-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            const abaId = `aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`;
            document.getElementById(abaId)?.classList.add("active");
            if (btn.dataset.aba === "relatorios") renderizarRelatorios();
            if (btn.dataset.aba === "admin") {
                renderizarAdmin();
                document.getElementById("adminTurmaSelect").value = turmaAtual;
            }
        });
    });
    
    document.getElementById("disciplinaNotas")?.addEventListener("change", renderizarNotas);
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas")?.addEventListener("click", () => {
        const disciplina = document.getElementById("disciplinaNotas")?.value;
        const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
        const dados = turmasConfig[turmaAtual].alunos.map(aluno => {
            const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
            if (tipo === "trimestral") return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
            return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "" };
        });
        const planilha = XLSX.utils.json_to_sheet(dados);
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, "Notas");
        XLSX.writeFile(livro, `Notas_${turmasConfig[turmaAtual].nome}.xlsx`);
        alert("✅ Notas exportadas!");
    });
    
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca")?.addEventListener("click", () => { salvarDados(); alert("✅ Presenças salvas!"); });
    document.getElementById("exportarPresenca")?.addEventListener("click", renderizarPresenca);
    
    document.getElementById("adicionarVisto")?.addEventListener("click", () => {
        if (turmasConfig[turmaAtual].alunos.length > 0) abrirModalVisto(turmasConfig[turmaAtual].alunos[0]);
    });
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); alert("✅ Vistos salvos!"); });
    document.getElementById("exportarVistos")?.addEventListener("click", renderizarVistos);
    
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto);
    
    document.getElementById("adicionarAlunoBtn")?.addEventListener("click", () => {
        document.getElementById("modalAlunoTitulo").textContent = "➕ Adicionar Novo Aluno";
        document.getElementById("modalAlunoNome").value = "";
        document.getElementById("modalAlunoTurma").value = document.getElementById("adminTurmaSelect").value;
        document.getElementById("modalAluno").style.display = "block";
    });
    document.getElementById("adminTurmaSelect")?.addEventListener("change", renderizarAdmin);
    document.querySelector(".modal-fechar-aluno")?.addEventListener("click", () => document.getElementById("modalAluno").style.display = "none");
    document.getElementById("modalCancelarAluno")?.addEventListener("click", () => document.getElementById("modalAluno").style.display = "none");
    document.getElementById("modalSalvarAluno")?.addEventListener("click", () => {
        const nome = document.getElementById("modalAlunoNome").value;
        const turma = document.getElementById("modalAlunoTurma").value;
        if (nome) {
            adicionarAluno(turma, nome);
            document.getElementById("modalAluno").style.display = "none";
        } else alert("Digite o nome do aluno!");
    });
    
    document.querySelector(".modal-fechar")?.addEventListener("click", fecharModalVisto);
    document.getElementById("modalSalvarVisto")?.addEventListener("click", salvarVisto);
    window.onclick = (event) => {
        if (event.target === document.getElementById("modalVisto")) fecharModalVisto();
        if (event.target === document.getElementById("modalAluno")) document.getElementById("modalAluno").style.display = "none";
    };
    
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
});
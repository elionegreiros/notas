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

// ============================================================================
// DADOS DOS ALUNOS (EMBUTIDOS DIRETAMENTE)
// ============================================================================

const ALUNOS_GENTIL_1ADM = [
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

const ALUNOS_GENTIL_1AMB = [
    "ALEXANDRA DUARTE LOPES DA ROCHA", "ALICKY", "ANA CLARA MOTA GOMES", "ANA CLARA SOUSA SILVA",
    "ANDRESSA OLIVEIRA DE SOUSA", "ANNE VITORIA MARTINS CARVALHO", "DEBORA CAMILLE OLIVEIRA DE SOUSA",
    "DEISE MARTINS LIMA", "ELICKY SOARES LOIOLA", "FRANCISCO DAVID ROQUE DA SILVA",
    "GABRIELLY BRITO PEDROSA", "GEOVANNA ANTONELE RIBEIRO DE SOUSA", "JANICE VIANA DE SOUSA",
    "LARA MAYSA VITURIANO DE CARVALHO", "LUIS DAVY DA SILVA RULIM", "LUIS GUSTAVO GOMES DE MELO",
    "MAYSA ALVES SILVA", "SARA OLIVEIRA CRIZANTINO", "STEICIE DA SILVA LIMA"
];

const ALUNOS_GENTIL_2DS = [
    "ANA SOPHIA GOMES DA SILVA", "CARLOS MANOEL CAETANO", "FRANCISCA INGRID TAINAR DA SILVA ADALBERTO",
    "IAN BENICIO DE OLIVEIRA CARVALHO", "JACKSON VICENTE DO NASCIMENTO", "JOHNNATHAN RODRIGUES DA SILVA",
    "JUAN LOIOLA DA SILVA", "LEO VICTOR FERREIRA LOIOLA", "MARIA BEATRIZ XAVIER DE SOUSA",
    "MIKLENYO JOSE LUSTOSA ALVES", "NICOLAS OLIVEIRA DINIZ", "PABLO KAUAN DE SOUSA NASCIMENTO",
    "SHAUANY SOUZA LOPES", "TAYNARA OLIVEIRA REIS", "THIAGO LEVI NUNES PEREIRA",
    "VALTER ALEXANDRE OLIVEIRA FERNANDES"
];

const ALUNOS_ENEAS_INF1 = [
    "ALEXANDRE BARBOSA DA SILVA", "ANTONIA GLENDA DA SILVA ALVES", "EMANUELLY DA SILVA ALVES",
    "FRANCISCO EDSON DA SILVA CARNEIRO", "GEOVANA MARIA PEREIRA MARTINS", "KELIANY VIEIRA ANDRADE",
    "LUZANIRA ARAUJO DE SOUSA", "MARIA DA CRUZ FURTUNATA DA SILVA", "MARIA DE FATIMA OLIVEIRA",
    "MARIA ISABELLY RIBEIRO MARTINA", "MARIA ISLANIA DE SOUSA", "MARIA KARIELY DE MELO ANDRADE",
    "MARISANGELA VELOSO DA SILVA", "RITA FRALINA ROQUE DA SILVA", "SIDNEY SANTANA DA SILVA",
    "VIVIANE DE SOUSA LOPES"
];

const ALUNOS_ENEAS_INF5 = [
    "AELTON MOTA DE SOUSA", "ANDRE DE CASTRO LIMA", "ANTONIA RODRIGUES MARTINS",
    "DAYANNY MARIA OLIVEIRA FREITAS", "DOUGLAS DE CARVALHO CARDOSO", "EDILENE CARVALHO DA SILVA",
    "HILTON FERNANDES DA SILVA", "KAIQUE JOSE LIMA LEITE"
];

// ============================================================================
// CONFIGURAÇÃO DAS TURMAS
// ============================================================================

const ESCOLAS = {
    gentil: {
        nome: "CETI Antonio Gentil Dantas Sobrinho",
        turno: "Diurno",
        icone: "fa-sun",
        turmas: {
            "1adm": { nome: "1º Administração", alunos: [...ALUNOS_GENTIL_1ADM], disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
            "1amb": { nome: "1º Controle Ambiental", alunos: [...ALUNOS_GENTIL_1AMB], disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
            "2ds": { nome: "2º Desenvolvimento de Sistemas", alunos: [...ALUNOS_GENTIL_2DS], disciplinas: ["Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI/UX", "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS", "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END"], tipoAvaliacao: "trimestral" }
        }
    },
    eneas: {
        nome: "Unidade Escolar Eneas Nogueira",
        turno: "Noturno",
        icone: "fa-moon",
        turmas: {
            "inf1": { nome: "Informática - Módulo I", alunos: [...ALUNOS_ENEAS_INF1], disciplinas: ["Análise e Lógica de Programação"], tipoAvaliacao: "bimestral" },
            "inf5": { nome: "Informática - Módulo V", alunos: [...ALUNOS_ENEAS_INF5], disciplinas: ["Empreendedorismo para TI"], tipoAvaliacao: "bimestral" }
        }
    }
};

// ============================================================================
// HORÁRIOS
// ============================================================================

const HORARIOS_GENTIL = {
    segunda: { "1adm": [], "1amb": [], "2ds": [{ hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" }, { hora: "16:10", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" }] },
    terca: { "1adm": [{ hora: "15:10", disciplina: "INTELIGÊNCIA ARTIFICIAL" }], "1amb": [], "2ds": [{ hora: "12:50", disciplina: "FUNDAMENTOS DE UI/UX" }, { hora: "13:50", disciplina: "MENTORIA TEC" }] },
    quarta: { "1adm": [], "1amb": [{ hora: "08:30", disciplina: "INTELIGÊNCIA ARTIFICIAL" }], "2ds": [{ hora: "15:10", disciplina: "FRONT-END" }, { hora: "16:10", disciplina: "PROGRAMAÇÃO ESTRUTURADA" }] },
    quinta: { "1adm": [], "1amb": [], "2ds": [{ hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" }, { hora: "12:50", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" }] },
    sexta: { "1adm": [], "1amb": [], "2ds": [{ hora: "10:50", disciplina: "INTELIGÊNCIA ARTIFICIAL" }, { hora: "12:50", disciplina: "FUNDAMENTOS DE UI/UX" }, { hora: "16:10", disciplina: "PENSAMENTO COMPUTACIONAL" }] }
};

const HORARIOS_ENEAS = {
    segunda: { "inf1": [{ hora: "19:25", disciplina: "INF - MÓDULO I" }], "inf5": [{ hora: "18:30", disciplina: "INF - MÓDULO V" }] },
    terca: { "inf1": [{ hora: "20:20", disciplina: "INF - MÓDULO I" }], "inf5": [{ hora: "21:25", disciplina: "INF - MÓDULO V" }] },
    quarta: { "inf1": [], "inf5": [{ hora: "18:30", disciplina: "INF - MÓDULO V" }] },
    quinta: { "inf1": [], "inf5": [] },
    sexta: { "inf1": [], "inf5": [] }
};

// ============================================================================
// ESTADO GLOBAL
// ============================================================================

let estado = {
    escolaAtual: "gentil",
    turmaAtual: "1adm",
    dadosNotas: {},
    dadosPresenca: {},
    dadosVistos: {},
    dadosObservacoes: {},
    dadosEventos: [],
    graficoEvolucao: null,
    alunoSelecionadoVisto: null,
    sessaoAtual: null,
    configAlertas: { notificar: true, minutosAntecedencia: 15, som: true }
};

// ============================================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================================

function mostrarToast(mensagem, tipo = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) {
        // Criar container se não existir
        const newContainer = document.createElement("div");
        newContainer.id = "toastContainer";
        newContainer.className = "toast-container";
        document.body.appendChild(newContainer);
    }
    const toastContainer = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    const icones = { success: "fa-check-circle", error: "fa-times-circle", warning: "fa-exclamation-triangle", info: "fa-info-circle" };
    toast.innerHTML = `<i class="fas ${icones[tipo] || icones.success}"></i><span>${mensagem}</span>`;
    toastContainer.appendChild(toast);
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
        } catch(e) { console.log("Erro ao carregar dados salvos"); }
    }
    inicializarEstruturas();
}

function inicializarEstruturas() {
    console.log("Inicializando estruturas...");
    for (let escolaId in ESCOLAS) {
        if (!estado.dadosNotas[escolaId]) estado.dadosNotas[escolaId] = {};
        if (!estado.dadosPresenca[escolaId]) estado.dadosPresenca[escolaId] = {};
        if (!estado.dadosVistos[escolaId]) estado.dadosVistos[escolaId] = {};
        if (!estado.dadosObservacoes[escolaId]) estado.dadosObservacoes[escolaId] = {};
        
        const turmas = ESCOLAS[escolaId].turmas;
        for (let turmaId in turmas) {
            const turma = turmas[turmaId];
            if (!estado.dadosNotas[escolaId][turmaId]) estado.dadosNotas[escolaId][turmaId] = {};
            turma.disciplinas.forEach(disciplina => {
                if (!estado.dadosNotas[escolaId][turmaId][disciplina]) {
                    estado.dadosNotas[escolaId][turmaId][disciplina] = {};
                    turma.alunos.forEach(aluno => {
                        estado.dadosNotas[escolaId][turmaId][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
                    });
                }
            });
            
            if (!estado.dadosVistos[escolaId][turmaId]) estado.dadosVistos[escolaId][turmaId] = {};
            turma.alunos.forEach(aluno => {
                if (!estado.dadosVistos[escolaId][turmaId][aluno]) {
                    estado.dadosVistos[escolaId][turmaId][aluno] = { total: 0, registros: [], ultima: "" };
                }
            });
        }
    }
    console.log("Estruturas inicializadas com sucesso!");
}

function getTurmaConfig() {
    return ESCOLAS[estado.escolaAtual]?.turmas[estado.turmaAtual] || null;
}

function getHorariosAtuais() {
    return estado.escolaAtual === "gentil" ? HORARIOS_GENTIL : HORARIOS_ENEAS;
}

// ============================================================================
// AUTENTICAÇÃO
// ============================================================================

function fazerLogin(cpf, senha) {
    const cpfLimpo = cpf.replace(/[.\-]/g, '');
    const usuario = USUARIOS[cpfLimpo];
    if (usuario && usuario.senha === senha) {
        estado.sessaoAtual = { cpf: cpfLimpo, nome: usuario.nome, tipo: usuario.tipo, escola: usuario.escola, loginTime: new Date().toISOString() };
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
    mostrarToast("Logout realizado com sucesso!", "info");
}

function formatarCPF(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 9) valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    else if (valor.length > 6) valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    else if (valor.length > 3) valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    input.value = valor;
}

// ============================================================================
// RENDERIZAÇÃO DO SIDEBAR E TURMAS
// ============================================================================

function carregarTurmasSidebar() {
    const container = document.getElementById("turmasContainer");
    if (!container) return;
    
    let html = '<div class="nav-label">TURMAS</div>';
    for (let escolaId in ESCOLAS) {
        const escola = ESCOLAS[escolaId];
        for (let turmaId in escola.turmas) {
            const turma = escola.turmas[turmaId];
            const activeClass = (estado.escolaAtual === escolaId && estado.turmaAtual === turmaId) ? "ativo" : "";
            html += `<button class="nav-item turma-item ${activeClass}" data-escola="${escolaId}" data-turma="${turmaId}"><i class="fas ${escola.icone}"></i><span>${turma.nome}</span></button>`;
        }
    }
    container.innerHTML = html;
    
    document.querySelectorAll(".turma-item").forEach(btn => {
        btn.addEventListener("click", () => {
            trocarEscolaTurma(btn.dataset.escola, btn.dataset.turma);
        });
    });
}

function trocarEscolaTurma(escolaId, turmaId) {
    estado.escolaAtual = escolaId;
    estado.turmaAtual = turmaId;
    
    document.querySelectorAll(".turma-item").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.turma === turmaId && btn.dataset.escola === escolaId);
    });
    
    const escola = ESCOLAS[escolaId];
    const turma = escola.turmas[turmaId];
    const escolaBadge = document.getElementById("escolaBadge");
    if (escolaBadge) {
        escolaBadge.innerHTML = `<span class="badge"><i class="fas ${escola.icone}"></i> ${escola.nome} (${escola.turno}) - ${turma.nome}</span>`;
    }
    
    document.getElementById("pageTitle").textContent = turma.nome;
    document.getElementById("pageSubtitle").textContent = turma.tipoAvaliacao === "trimestral" ? "Avaliação Trimestral (NM1, NM2, NM3)" : "Avaliação Bimestral (NM1, NM2)";
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turma.disciplinas.forEach(d => { const opt = document.createElement("option"); opt.value = d; opt.textContent = d; selectDisciplina.appendChild(opt); });
    }
    
    const rankingDisciplina = document.getElementById("rankingDisciplina");
    if (rankingDisciplina) {
        rankingDisciplina.innerHTML = "";
        turma.disciplinas.forEach(d => { const opt = document.createElement("option"); opt.value = d; opt.textContent = d; rankingDisciplina.appendChild(opt); });
    }
    
    const graficoSelect = document.getElementById("graficoAlunoSelect");
    if (graficoSelect) {
        graficoSelect.innerHTML = '<option value="">Selecione um aluno</option>';
        turma.alunos.forEach(aluno => { const opt = document.createElement("option"); opt.value = aluno; opt.textContent = aluno; graficoSelect.appendChild(opt); });
    }
    
    const adminSelect = document.getElementById("adminTurmaSelect");
    if (adminSelect) {
        adminSelect.innerHTML = "";
        for (let tId in escola.turmas) {
            const opt = document.createElement("option");
            opt.value = tId;
            opt.textContent = escola.turmas[tId].nome;
            adminSelect.appendChild(opt);
        }
        adminSelect.value = turmaId;
    }
    
    const modalTurmaSelect = document.getElementById("modalAlunoTurma");
    if (modalTurmaSelect) {
        modalTurmaSelect.innerHTML = "";
        for (let tId in escola.turmas) {
            const opt = document.createElement("option");
            opt.value = tId;
            opt.textContent = escola.turmas[tId].nome;
            modalTurmaSelect.appendChild(opt);
        }
    }
    
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarDashboard();
    renderizarAdmin();
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
    const turmaConfig = getTurmaConfig();
    if (!turmaConfig) return;
    const tipo = turmaConfig.tipoAvaliacao;
    const alunos = turmaConfig.alunos;
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || { nm1: "", nm2: "", nm3: "" };
        const media = calcularMedia(notas, tipo);
        const status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        const statusClass = media >= 7 ? "status-aprovado" : (media >= 5 ? "status-recuperacao" : "status-reprovado");
        
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;
        
        for (let i = 1; i <= (tipo === "trimestral" ? 3 : 2); i++) {
            const cell = row.insertCell(i);
            const input = document.createElement("input");
            input.type = "number"; input.step = "0.1"; input.min = "0"; input.max = "10";
            input.value = notas[`nm${i}`] || "";
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
    mostrarToast("Notas salvas com sucesso!");
}

function atualizarEstatisticas() {
    const turmaConfig = getTurmaConfig();
    if (!turmaConfig) return;
    document.getElementById("statAlunos").textContent = turmaConfig.alunos.length;
    document.getElementById("statAprovados").textContent = "0";
    document.getElementById("statRecuperacao").textContent = "0";
    document.getElementById("statReprovados").textContent = "0";
    document.getElementById("statAniversariantes").textContent = "0";
}

// ============================================================================
// PRESENÇA
// ============================================================================

function renderizarPresenca() {
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhuma aula registrada. Clique em "Nova Aula" para começar.</div>';
}

function adicionarAula() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
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

// ============================================================================
// VISTOS
// ============================================================================

function renderizarVistos() {
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    const turmaConfig = getTurmaConfig();
    if (!turmaConfig) return;
    tbody.innerHTML = "";
    turmaConfig.alunos.forEach(aluno => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(1).innerHTML = `<span class="badge-visto">0</span>`;
        row.insertCell(2).textContent = "-";
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
    document.getElementById("modalDescVisto").value = "";
    document.getElementById("modalVisto").style.display = "flex";
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
    document.getElementById("modalVisto").style.display = "none";
    mostrarToast(`Visto concedido para ${estado.alunoSelecionadoVisto}!`);
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
    const horariosAtuais = getHorariosAtuais();
    const aulasDia = horariosAtuais[diaSemana] || {};
    const aulas = [];
    const turmasDaEscola = ESCOLAS[estado.escolaAtual].turmas;
    for (let turmaId in turmasDaEscola) {
        (aulasDia[turmaId] || []).forEach(aula => {
            aulas.push({ turmaNome: turmasDaEscola[turmaId].nome, disciplina: aula.disciplina, hora: aula.hora });
        });
    }
    aulas.sort((a, b) => a.hora.localeCompare(b.hora));
    return aulas;
}

function renderizarDashboard() {
    const hoje = new Date();
    const amanha = new Date(hoje); amanha.setDate(amanha.getDate() + 1);
    
    const saudacaoElem = document.getElementById("saudacaoTexto");
    if (saudacaoElem) saudacaoElem.innerHTML = `Bom dia, ${estado.sessaoAtual?.nome || "Professor"}! 👋`;
    
    const dataAtualElem = document.getElementById("dataAtual");
    if (dataAtualElem) dataAtualElem.textContent = hoje.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    const hojeDataElem = document.getElementById("hojeData");
    if (hojeDataElem) hojeDataElem.textContent = hoje.toLocaleDateString('pt-BR');
    
    const amanhaDataElem = document.getElementById("amanhaData");
    if (amanhaDataElem) amanhaDataElem.textContent = amanha.toLocaleDateString('pt-BR');
    
    const aulasHoje = getAulasDoDia(hoje);
    const aulasHojeContainer = document.getElementById("aulasHojeContainer");
    if (aulasHojeContainer) {
        if (aulasHoje.length === 0) {
            aulasHojeContainer.innerHTML = `<div class="empty-state"><i class="fas fa-calendar-check"></i> Nenhuma aula programada para hoje! 🎉</div>`;
        } else {
            aulasHojeContainer.innerHTML = aulasHoje.map(aula => `
                <div class="aula-card-dashboard">
                    <div class="aula-hora">${aula.hora}</div>
                    <div class="aula-info">
                        <strong>${aula.disciplina}</strong>
                        <small><span class="aula-badge">${aula.turmaNome}</span></small>
                    </div>
                </div>
            `).join('');
        }
    }
    
    const aulasAmanha = getAulasDoDia(amanha);
    const aulasAmanhaContainer = document.getElementById("aulasAmanhaContainer");
    if (aulasAmanhaContainer) {
        if (aulasAmanha.length === 0) {
            aulasAmanhaContainer.innerHTML = `<div class="empty-state"><i class="fas fa-calendar-day"></i> Nenhuma aula programada para amanhã!</div>`;
        } else {
            aulasAmanhaContainer.innerHTML = aulasAmanha.map(aula => `
                <div class="aula-card-dashboard">
                    <div class="aula-hora">${aula.hora}</div>
                    <div class="aula-info">
                        <strong>${aula.disciplina}</strong>
                        <small><span class="aula-badge">${aula.turmaNome}</span></small>
                    </div>
                </div>
            `).join('');
        }
    }
    
    document.getElementById("totalAulasHoje").textContent = aulasHoje.length;
    
    const totalAlunosElem = document.getElementById("totalAlunos");
    const turmaConfig = getTurmaConfig();
    if (totalAlunosElem && turmaConfig) totalAlunosElem.textContent = turmaConfig.alunos.length;
}

// ============================================================================
// ADMIN
// ============================================================================

function renderizarAdmin() {
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || estado.turmaAtual;
    const turmaConfig = ESCOLAS[estado.escolaAtual]?.turmas[turmaAdmin];
    if (!turmaConfig) return;
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    turmaConfig.alunos.forEach((aluno, idx) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = idx + 1;
        row.insertCell(1).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(2).innerHTML = '<span style="color: #22c55e;"><i class="fas fa-check-circle"></i> Ativo</span>';
        row.insertCell(3).innerHTML = "-";
        const btnCell = row.insertCell(4);
        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i> Remover';
        btnRemover.className = "btn-secondary";
        btnRemover.onclick = () => removerAluno(turmaAdmin, aluno);
        btnCell.appendChild(btnRemover);
    });
}

function removerAluno(turmaId, alunoNome) {
    if (!confirm(`⚠️ Remover "${alunoNome}"?`)) return;
    const turmaConfig = ESCOLAS[estado.escolaAtual]?.turmas[turmaId];
    if (!turmaConfig) return;
    const index = turmaConfig.alunos.indexOf(alunoNome);
    if (index !== -1) turmaConfig.alunos.splice(index, 1);
    salvarDados();
    renderizarAdmin();
    renderizarNotas();
    mostrarToast(`"${alunoNome}" removido!`, "warning");
}

// ============================================================================
// OBSERVAÇÕES
// ============================================================================

function abrirModalObservacao(aluno) {
    document.getElementById("modalObsTexto").value = "";
    document.getElementById("modalObs").style.display = "flex";
    window.alunoObsSelecionado = aluno;
}

function salvarObservacaoModal() {
    const obs = document.getElementById("modalObsTexto").value;
    if (window.alunoObsSelecionado) {
        if (!estado.dadosObservacoes[estado.escolaAtual]) estado.dadosObservacoes[estado.escolaAtual] = {};
        if (!estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual]) estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual] = {};
        estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual][window.alunoObsSelecionado] = obs;
        salvarDados();
        document.getElementById("modalObs").style.display = "none";
        mostrarToast("Observação salva!");
    }
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

function iniciarSistema(usuario) {
    console.log("Iniciando sistema para:", usuario.nome);
    estado.sessaoAtual = usuario;
    
    document.getElementById("sidebarUserName").textContent = usuario.nome;
    document.getElementById("sidebarUserType").textContent = usuario.tipo === "professor" ? "Professor" : "Coordenador";
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "flex";
    
    carregarDadosSalvos();
    carregarTurmasSidebar();
    
    // Selecionar primeira turma
    const primeiraEscola = Object.keys(ESCOLAS)[0];
    const primeiraTurma = Object.keys(ESCOLAS[primeiraEscola].turmas)[0];
    trocarEscolaTurma(primeiraEscola, primeiraTurma);
    
    // Configurar eventos dos botões
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("adicionarVisto")?.addEventListener("click", () => {
        const tc = getTurmaConfig();
        if (tc && tc.alunos.length > 0) abrirModalVisto(tc.alunos[0]);
    });
    document.getElementById("salvarVistos")?.addEventListener("click", () => salvarDados());
    document.getElementById("adicionarAlunoBtn")?.addEventListener("click", () => {
        document.getElementById("modalAluno").style.display = "flex";
    });
    document.getElementById("modalSalvarAluno")?.addEventListener("click", () => {
        const nome = document.getElementById("modalAlunoNome").value;
        if (nome) {
            const turmaConfig = getTurmaConfig();
            if (turmaConfig && !turmaConfig.alunos.includes(nome.toUpperCase())) {
                turmaConfig.alunos.push(nome.toUpperCase());
                turmaConfig.alunos.sort();
                salvarDados();
                renderizarAdmin();
                renderizarNotas();
                mostrarToast(`"${nome}" adicionado!`);
            } else {
                mostrarToast("Aluno já existe ou inválido!", "warning");
            }
        }
        document.getElementById("modalAluno").style.display = "none";
        document.getElementById("modalAlunoNome").value = "";
    });
    
    document.querySelectorAll(".modal-fechar, .modal-fechar-aluno, .modal-fechar-evento, .modal-fechar-obs").forEach(btn => {
        btn.onclick = () => {
            document.getElementById("modalAluno").style.display = "none";
            document.getElementById("modalVisto").style.display = "none";
            document.getElementById("modalEvento").style.display = "none";
            document.getElementById("modalObs").style.display = "none";
        };
    });
    document.getElementById("modalCancelarAluno")?.addEventListener("click", () => document.getElementById("modalAluno").style.display = "none");
    document.getElementById("modalSalvarVisto")?.addEventListener("click", salvarVisto);
    document.getElementById("modalSalvarObs")?.addEventListener("click", salvarObservacaoModal);
    
    // Dark Mode e Sidebar
    const toggleBtn = document.getElementById("toggleSidebar");
    if (toggleBtn) toggleBtn.onclick = () => document.getElementById("sidebar").classList.toggle("collapsed");
    const darkModeBtn = document.getElementById("toggleDarkMode");
    if (darkModeBtn) darkModeBtn.onclick = () => document.body.classList.toggle("dark-mode");
    
    console.log("Sistema iniciado com sucesso!");
}

// ============================================================================
// DOM CONTENT LOADED
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM carregado, verificando sessão...");
    const sessao = verificarSessao();
    if (sessao) {
        iniciarSistema(sessao);
    } else {
        document.getElementById("telaLogin").style.display = "flex";
        document.getElementById("conteudoPrincipal").style.display = "none";
    }
    
    // Login
    document.getElementById("loginCpf")?.addEventListener("input", () => formatarCPF(document.getElementById("loginCpf")));
    document.getElementById("btnLogin")?.addEventListener("click", () => {
        const resultado = fazerLogin(document.getElementById("loginCpf").value, document.getElementById("loginSenha").value);
        if (resultado.sucesso) {
            iniciarSistema(estado.sessaoAtual);
        } else {
            document.getElementById("loginError").textContent = resultado.erro;
        }
    });
    document.getElementById("loginSenha")?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("btnLogin").click();
    });
    document.getElementById("btnLogoutSidebar")?.addEventListener("click", fazerLogout);
    
    // Navegação das abas
    document.querySelectorAll(".nav-item-aba").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".nav-item-aba").forEach(b => b.classList.remove("ativo"));
            btn.classList.add("ativo");
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            document.getElementById(`aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`)?.classList.add("active");
        });
    });
    
    document.getElementById("disciplinaNotas")?.addEventListener("change", renderizarNotas);
    
    // Filtros
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("adminTurmaSelect")?.addEventListener("change", renderizarAdmin);
    
    document.querySelector(".nav-item-aba[data-aba='dashboard']")?.classList.add("ativo");
});
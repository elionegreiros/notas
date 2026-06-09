
// ============================================================================
// 1. CONFIGURAÇÕES E CONSTANTES GLOBAIS
// ============================================================================

const USUARIOS = {
    "12345678900": { nome: "Prof. João Silva", senha: "123456", tipo: "professor" },
    "98765432100": { nome: "Profa. Maria Santos", senha: "123456", tipo: "professor" },
    "11122233344": { nome: "Prof. Carlos Lima", senha: "123456", tipo: "professor" },
    "55566677788": { nome: "Coord. Ana Paula", senha: "admin123", tipo: "coordenador" },
    "99988877766": { nome: "Administrador", senha: "admin123", tipo: "admin" }
};

// Dados dos alunos
const ALUNOS_1ADM = [
    { nome: "ALICE FERREIRA DA SILVA", nascimento: "2005-03-15" },
    { nome: "CARLENE MARTINS DA SILVA", nascimento: "2006-07-22" },
    { nome: "DAVI DE ALENCAR MELO BEZERRA", nascimento: "2005-11-08" },
    { nome: "ELIEZER LEAL BARBOSA", nascimento: "2006-01-30" },
    { nome: "ENRICO SAMUEL PEREIRA HOSTERNO", nascimento: "2005-05-12" },
    { nome: "FRANCISCA YARA GONCALVES DE SANTANA", nascimento: "2006-09-25" },
    { nome: "FRANCISCO FELIX DINO JUNIOR", nascimento: "2005-12-03" },
    { nome: "FRANCISCO JHONANTAN GONCALVES DA SILVA", nascimento: "2006-04-18" },
    { nome: "HELOA MENDES ALVES", nascimento: "2005-08-27" },
    { nome: "JOSE GUILHERME ALVES PIMENTEL", nascimento: "2006-02-14" },
    { nome: "KELY FERNANDES DA SILVA", nascimento: "2005-10-05" },
    { nome: "KEVEN VINICIUS ALVES DE OLVEIRA", nascimento: "2006-06-19" },
    { nome: "LAVINE MARIA FERREIRA FELIX", nascimento: "2005-01-09" },
    { nome: "LUCAS VINICIUS ALVES DA SILVA", nascimento: "2006-11-28" },
    { nome: "LUIS ERIVAN FERNANDES DE SOUSA", nascimento: "2005-07-16" },
    { nome: "MARIA ALICE FREIRE DA SILVA", nascimento: "2006-03-02" },
    { nome: "MARIA CLARA DAMACENA DE SOUSA", nascimento: "2005-09-11" },
    { nome: "MARIA FERNANDA DE SOUSA", nascimento: "2006-12-24" },
    { nome: "MARIA ISADORA RIBEIRO DA SILVA", nascimento: "2005-04-07" },
    { nome: "MARIELLE PIRES DA SILVA", nascimento: "2006-08-20" },
    { nome: "MIGUEL THARL EY BATISTA BARROSA", nascimento: "2005-10-31" },
    { nome: "PAULO VICTOR MOREIRA DA SILVA", nascimento: "2006-05-14" },
    { nome: "PEDRO LUCAS BEZERRA DA COSTA", nascimento: "2005-02-26" },
    { nome: "RANNIEL ALVES NOGUEIRA DA SILVA", nascimento: "2006-07-09" },
    { nome: "RENNA DUARTE DA SILVA", nascimento: "2005-12-17" },
    { nome: "THAYSSA DO NASCIMENTO SILVA", nascimento: "2006-01-21" }
];

const ALUNOS_1AMB = [
    { nome: "ALEXANDRA DUARTE LOPES DA ROCHA", nascimento: "2005-06-15" },
    { nome: "ALICKY", nascimento: "2006-03-10" },
    { nome: "ANA CLARA MOTA GOMES", nascimento: "2005-09-22" },
    { nome: "ANA CLARA SOUSA SILVA", nascimento: "2006-11-05" },
    { nome: "ANDRESSA OLIVEIRA DE SOUSA", nascimento: "2005-04-18" },
    { nome: "ANNE VITORIA MARTINS CARVALHO", nascimento: "2006-08-30" },
    { nome: "DEBORA CAMILLE OLIVEIRA DE SOUSA", nascimento: "2005-12-12" },
    { nome: "DEISE MARTINS LIMA", nascimento: "2006-02-28" },
    { nome: "ELICKY SOARES LOIOLA", nascimento: "2005-07-07" },
    { nome: "FRANCISCO DAVID ROQUE DA SILVA", nascimento: "2006-10-19" },
    { nome: "GABRIELLY BRITO PEDROSA", nascimento: "2005-01-25" },
    { nome: "GEOVANNA ANTONELE RIBEIRO DE SOUSA", nascimento: "2006-05-16" },
    { nome: "JANICE VIANA DE SOUSA", nascimento: "2005-09-03" },
    { nome: "LARA MAYSA VITURIANO DE CARVALHO", nascimento: "2006-11-14" },
    { nome: "LUIS DAVY DA SILVA RULIM", nascimento: "2005-03-29" },
    { nome: "LUIS GUSTAVO GOMES DE MELO", nascimento: "2006-07-21" },
    { nome: "MAYSA ALVES SILVA", nascimento: "2005-12-01" },
    { nome: "SARA OLIVEIRA CRIZANTINO", nascimento: "2006-04-11" },
    { nome: "STEICIE DA SILVA LIMA", nascimento: "2005-08-08" }
];

const ALUNOS_2DS = [
    { nome: "ANA SOPHIA GOMES DA SILVA", nascimento: "2005-02-10" },
    { nome: "CARLOS MANOEL CAETANO", nascimento: "2006-06-25" },
    { nome: "FRANCISCA INGRID TAINAR DA SILVA ADALBERTO", nascimento: "2005-10-14" },
    { nome: "IAN BENICIO DE OLIVEIRA CARVALHO", nascimento: "2006-01-08" },
    { nome: "JACKSON VICENTE DO NASCIMENTO", nascimento: "2005-05-22" },
    { nome: "JOHNNATHAN RODRIGUES DA SILVA", nascimento: "2006-09-30" },
    { nome: "JUAN LOIOLA DA SILVA", nascimento: "2005-03-17" },
    { nome: "LEO VICTOR FERREIRA LOIOLA", nascimento: "2006-07-12" },
    { nome: "MARIA BEATRIZ XAVIER DE SOUSA", nascimento: "2005-11-26" },
    { nome: "MIKLENYO JOSE LUSTOSA ALVES", nascimento: "2006-04-04" },
    { nome: "NICOLAS OLIVEIRA DINIZ", nascimento: "2005-08-19" },
    { nome: "PABLO KAUAN DE SOUSA NASCIMENTO", nascimento: "2006-12-07" },
    { nome: "SHAUANY SOUZA LOPES", nascimento: "2005-01-13" },
    { nome: "TAYNARA OLIVEIRA REIS", nascimento: "2006-05-05" },
    { nome: "THIAGO LEVI NUNES PEREIRA", nascimento: "2005-09-28" },
    { nome: "VALTER ALEXANDRE OLIVEIRA FERNANDES", nascimento: "2006-10-16" }
];

const ALUNOS_INF1 = [
    { nome: "ALEXANDRE BARBOSA DA SILVA", nascimento: "2005-07-18" },
    { nome: "ANTONIA GLENDA DA SILVA ALVES", nascimento: "2005-11-09" },
    { nome: "EMANUELLY DA SILVA ALVES", nascimento: "2005-01-31" },
    { nome: "FRANCISCO EDSON DA SILVA CARNEIRO", nascimento: "2005-10-03" },
    { nome: "GEOVANA MARIA PEREIRA MARTINS", nascimento: "2006-05-29" },
    { nome: "KELIANY VIEIRA ANDRADE", nascimento: "2005-07-24" },
    { nome: "LUZANIRA ARAUJO DE SOUSA", nascimento: "2005-03-20" },
    { nome: "MARIA DA CRUZ FURTUNATA DA SILVA", nascimento: "2006-04-26" },
    { nome: "MARIA DE FATIMA OLIVEIRA", nascimento: "2005-06-12" },
    { nome: "MARIA ISABELLY RIBEIRO MARTINA", nascimento: "2006-10-29" },
    { nome: "MARIA ISLANIA DE SOUSA", nascimento: "2005-01-17" },
    { nome: "MARIA KARIELY DE MELO ANDRADE", nascimento: "2006-09-06" },
    { nome: "MARISANGELA VELOSO DA SILVA", nascimento: "2006-07-01" },
    { nome: "RITA FRALINA ROQUE DA SILVA", nascimento: "2006-12-20" },
    { nome: "SIDNEY SANTANA DA SILVA", nascimento: "2005-05-11" },
    { nome: "VIVIANE DE SOUSA LOPES", nascimento: "2006-01-15" }
];

const ALUNOS_INF5 = [
    { nome: "AELTON MOTA DE SOUSA", nascimento: "2005-04-09" },
    { nome: "ANDRE DE CASTRO LIMA", nascimento: "2006-09-17" },
    { nome: "ANTONIA RODRIGUES MARTINS", nascimento: "2005-12-28" },
    { nome: "DAYANNY MARIA OLIVEIRA FREITAS", nascimento: "2006-02-05" },
    { nome: "DOUGLAS DE CARVALHO CARDOSO", nascimento: "2005-06-22" },
    { nome: "EDILENE CARVALHO DA SILVA", nascimento: "2006-10-10" },
    { nome: "HILTON FERNANDES DA SILVA", nascimento: "2005-07-19" },
    { nome: "KAIQUE JOSE LIMA LEITE", nascimento: "2006-03-31" }
];

// ============================================================================
// HORÁRIOS
// ============================================================================

const HORARIOS = {
    segunda: {
        "1adm": [],
        "1amb": [],
        "2ds": [
            { hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" },
            { hora: "16:10", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" }
        ],
        "inf1": [{ hora: "19:25", disciplina: "INF - MÓDULO I" }],
        "inf5": [{ hora: "18:30", disciplina: "INF - MÓDULO V" }]
    },
    terca: {
        "1adm": [{ hora: "15:10", disciplina: "INTELIGÊNCIA ARTIFICIAL" }],
        "1amb": [],
        "2ds": [
            { hora: "12:50", disciplina: "FUNDAMENTOS DE UI/UX" },
            { hora: "13:50", disciplina: "MENTORIA TEC" }
        ],
        "inf1": [{ hora: "20:20", disciplina: "INF - MÓDULO I" }],
        "inf5": [{ hora: "21:25", disciplina: "INF - MÓDULO V" }]
    },
    quarta: {
        "1adm": [],
        "1amb": [{ hora: "08:30", disciplina: "INTELIGÊNCIA ARTIFICIAL" }],
        "2ds": [
            { hora: "15:10", disciplina: "FRONT-END" },
            { hora: "16:10", disciplina: "PROGRAMAÇÃO ESTRUTURADA" }
        ],
        "inf1": [],
        "inf5": [{ hora: "18:30", disciplina: "INF - MÓDULO V" }]
    },
    quinta: {
        "1adm": [],
        "1amb": [],
        "2ds": [
            { hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" },
            { hora: "12:50", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" }
        ],
        "inf1": [],
        "inf5": []
    },
    sexta: {
        "1adm": [],
        "1amb": [],
        "2ds": [
            { hora: "10:50", disciplina: "INTELIGÊNCIA ARTIFICIAL" },
            { hora: "12:50", disciplina: "FUNDAMENTOS DE UI/UX" },
            { hora: "16:10", disciplina: "PENSAMENTO COMPUTACIONAL" }
        ],
        "inf1": [],
        "inf5": []
    }
};

// Configuração das turmas
const TURMAS_CONFIG = {
    "1adm": { nome: "1º Administração", alunos: ALUNOS_1ADM.map(a => a.nome), disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
    "1amb": { nome: "1º Controle Ambiental", alunos: ALUNOS_1AMB.map(a => a.nome), disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
    "2ds": { nome: "2º Desenvolvimento de Sistemas", alunos: ALUNOS_2DS.map(a => a.nome), disciplinas: ["Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC", "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO", "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS", "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"], tipoAvaliacao: "trimestral" },
    "inf1": { nome: "Informática - Módulo I", alunos: ALUNOS_INF1.map(a => a.nome), disciplinas: ["Análise e Lógica de Programação"], tipoAvaliacao: "bimestral" },
    "inf5": { nome: "Informática - Módulo V", alunos: ALUNOS_INF5.map(a => a.nome), disciplinas: ["Empreendedorismo para TI"], tipoAvaliacao: "bimestral" }
};

const ALUNOS_NASCIMENTOS = {
    "1adm": ALUNOS_1ADM, "1amb": ALUNOS_1AMB, "2ds": ALUNOS_2DS, "inf1": ALUNOS_INF1, "inf5": ALUNOS_INF5
};

// Estado global
let estado = {
    turmaAtual: "1adm",
    dadosNotas: {},
    dadosPresenca: {},
    dadosVistos: {},
    dadosObservacoes: {},
    dadosEventos: [],
    dadosAlunosCustom: {},
    graficoEvolucao: null,
    alunoSelecionadoVisto: null,
    sessaoAtual: null,
    configAlertas: { notificar: true, minutosAntecedencia: 15, som: true }
};

// ============================================================================
// 2. FUNÇÕES UTILITÁRIAS
// ============================================================================

function formatarDataBR(data) {
    return data.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function mostrarToast(mensagem, tipo = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
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

function carregarDados() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            estado.dadosNotas = data.notas || {};
            estado.dadosPresenca = data.presenca || {};
            estado.dadosVistos = data.vistos || {};
            estado.dadosObservacoes = data.observacoes || {};
            estado.dadosEventos = data.eventos || [];
        } catch(e) {}
    }
    inicializarEstruturas();
}

function inicializarEstruturas() {
    for (let turmaId in TURMAS_CONFIG) {
        if (!estado.dadosNotas[turmaId]) estado.dadosNotas[turmaId] = {};
        if (!estado.dadosPresenca[turmaId]) estado.dadosPresenca[turmaId] = {};
        if (!estado.dadosVistos[turmaId]) estado.dadosVistos[turmaId] = {};
        if (!estado.dadosObservacoes[turmaId]) estado.dadosObservacoes[turmaId] = {};
        
        const alunos = TURMAS_CONFIG[turmaId].alunos;
        const disciplinas = TURMAS_CONFIG[turmaId].disciplinas;
        const tipo = TURMAS_CONFIG[turmaId].tipoAvaliacao;
        
        disciplinas.forEach(disciplina => {
            if (!estado.dadosNotas[turmaId][disciplina]) {
                estado.dadosNotas[turmaId][disciplina] = {};
                alunos.forEach(aluno => {
                    estado.dadosNotas[turmaId][disciplina][aluno] = tipo === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" };
                });
            }
        });
        
        if (!estado.dadosVistos[turmaId].alunos) {
            estado.dadosVistos[turmaId].alunos = {};
            alunos.forEach(aluno => {
                if (!estado.dadosVistos[turmaId].alunos[aluno]) {
                    estado.dadosVistos[turmaId].alunos[aluno] = { total: 0, registros: [], ultima: "" };
                }
            });
        }
    }
}

// ============================================================================
// 3. AUTENTICAÇÃO
// ============================================================================

function fazerLogin(cpf, senha) {
    const cpfLimpo = cpf.replace(/[.\-]/g, '');
    const usuario = USUARIOS[cpfLimpo];
    if (usuario && usuario.senha === senha) {
        estado.sessaoAtual = { cpf: cpfLimpo, nome: usuario.nome, tipo: usuario.tipo, loginTime: new Date().toISOString() };
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
// 4. DASHBOARD
// ============================================================================

function getDiaSemanaNome(data) {
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    return dias[data.getDay()];
}

function getAulasDoDia(data) {
    const diaSemana = getDiaSemanaNome(data);
    const aulas = [];
    for (let turmaId of ["1adm", "1amb", "2ds", "inf1", "inf5"]) {
        (HORARIOS[diaSemana]?.[turmaId] || []).forEach(aula => {
            aulas.push({ turmaId, turmaNome: TURMAS_CONFIG[turmaId]?.nome, disciplina: aula.disciplina, hora: aula.hora });
        });
    }
    aulas.sort((a, b) => a.hora.localeCompare(b.hora));
    return aulas;
}

function calcularTempoRestante(hora) {
    const agora = new Date();
    const [h, m] = hora.split(":").map(Number);
    const dataAula = new Date(); dataAula.setHours(h, m, 0);
    const diffMin = Math.floor((dataAula - agora) / 60000);
    if (diffMin < 0) return null;
    if (diffMin < 60) return `${diffMin} minutos`;
    return `${Math.floor(diffMin / 60)}h ${diffMin % 60}min`;
}

function renderizarDashboard() {
    const hoje = new Date();
    const amanha = new Date(hoje); amanha.setDate(amanha.getDate() + 1);
    const horaAtual = hoje.getHours();
    let saudacao = horaAtual < 12 ? "Bom dia" : (horaAtual < 18 ? "Boa tarde" : "Boa noite");
    
    const saudacaoElem = document.getElementById("saudacaoTexto");
    if (saudacaoElem) saudacaoElem.innerHTML = `${saudacao}, ${estado.sessaoAtual?.nome || "Professor"}! 👋`;
    const dataAtualElem = document.getElementById("dataAtual");
    if (dataAtualElem) dataAtualElem.textContent = formatarDataBR(hoje);
    const hojeDataElem = document.getElementById("hojeData");
    if (hojeDataElem) hojeDataElem.textContent = hoje.toLocaleDateString('pt-BR');
    const amanhaDataElem = document.getElementById("amanhaData");
    if (amanhaDataElem) amanhaDataElem.textContent = amanha.toLocaleDateString('pt-BR');
    
    const aulasHoje = getAulasDoDia(hoje);
    const aulasHojeContainer = document.getElementById("aulasHojeContainer");
    if (aulasHojeContainer) {
        if (aulasHoje.length === 0) aulasHojeContainer.innerHTML = `<div class="empty-state"><i class="fas fa-calendar-check"></i> Nenhuma aula programada para hoje! 🎉</div>`;
        else aulasHojeContainer.innerHTML = aulasHoje.map(aula => `<div class="aula-card-dashboard"><div class="aula-hora">${aula.hora}</div><div class="aula-info"><strong>${aula.disciplina}</strong><small><span class="aula-badge">${aula.turmaNome}</span></small></div>${calcularTempoRestante(aula.hora) ? `<div class="aula-tempo">⏰ em ${calcularTempoRestante(aula.hora)}</div>` : '<div class="aula-tempo">✅ Já ocorreu</div>'}</div>`).join('');
    }
    
    const aulasAmanha = getAulasDoDia(amanha);
    const aulasAmanhaContainer = document.getElementById("aulasAmanhaContainer");
    if (aulasAmanhaContainer) {
        if (aulasAmanha.length === 0) aulasAmanhaContainer.innerHTML = `<div class="empty-state"><i class="fas fa-calendar-day"></i> Nenhuma aula programada para amanhã!</div>`;
        else aulasAmanhaContainer.innerHTML = aulasAmanha.map(aula => `<div class="aula-card-dashboard"><div class="aula-hora">${aula.hora}</div><div class="aula-info"><strong>${aula.disciplina}</strong><small><span class="aula-badge">${aula.turmaNome}</span></small></div></div>`).join('');
    }
    
    const todasProximas = [];
    for (let i = 0; i < 3; i++) {
        const dia = new Date(hoje); dia.setDate(hoje.getDate() + i);
        getAulasDoDia(dia).forEach(aula => {
            const [h, m] = aula.hora.split(":").map(Number);
            const dataAula = new Date(dia); dataAula.setHours(h, m, 0);
            if (dataAula > new Date()) todasProximas.push({ ...aula, data: new Date(dia), diffMin: Math.floor((dataAula - new Date()) / 60000) });
        });
    }
    todasProximas.sort((a, b) => a.diffMin - b.diffMin);
    const proximasAulasContainer = document.getElementById("proximasAulasContainer");
    if (proximasAulasContainer) {
        if (todasProximas.length === 0) proximasAulasContainer.innerHTML = `<div class="empty-state"><i class="fas fa-check-circle"></i> Nenhuma aula futura agendada!</div>`;
        else proximasAulasContainer.innerHTML = todasProximas.slice(0, 5).map(a => `<div class="aula-card-dashboard"><div class="aula-hora">${a.hora}</div><div class="aula-info"><strong>${a.disciplina}</strong><small><span class="aula-badge">${a.turmaNome}</span><span class="aula-badge">${a.data.toLocaleDateString('pt-BR')}</span></small></div><div class="aula-tempo">📅 em ${a.diffMin < 60 ? `${a.diffMin} min` : `${Math.floor(a.diffMin/60)}h ${a.diffMin%60}min`}</div></div>`).join('');
    }
    
    const totalAulasHojeElem = document.getElementById("totalAulasHoje");
    if (totalAulasHojeElem) totalAulasHojeElem.textContent = aulasHoje.length;
    
    let totalVistos = 0;
    for (let turmaId in estado.dadosVistos) {
        if (estado.dadosVistos[turmaId]?.alunos) {
            for (let aluno in estado.dadosVistos[turmaId].alunos) {
                totalVistos += estado.dadosVistos[turmaId].alunos[aluno]?.registros?.filter(r => new Date(r.data).getMonth() + 1 === hoje.getMonth() + 1).length || 0;
            }
        }
    }
    const totalVistosMesElem = document.getElementById("totalVistosMes");
    if (totalVistosMesElem) totalVistosMesElem.textContent = totalVistos;
    
    let totalAlunos = 0;
    for (let turmaId in TURMAS_CONFIG) totalAlunos += TURMAS_CONFIG[turmaId].alunos.length;
    const totalAlunosElem = document.getElementById("totalAlunos");
    if (totalAlunosElem) totalAlunosElem.textContent = totalAlunos;
}

// ============================================================================
// 5. NOTAS
// ============================================================================

function calcularMedia(notas, tipo) {
    const nm1 = parseFloat(notas.nm1) || 0;
    const nm2 = parseFloat(notas.nm2) || 0;
    const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
    return tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
}

function obterStatus(media) {
    if (media >= 7) return { texto: "<i class='fas fa-check-circle'></i> Aprovado", classe: "status-aprovado" };
    if (media >= 5) return { texto: "<i class='fas fa-exclamation-triangle'></i> Recuperação", classe: "status-recuperacao" };
    return { texto: "<i class='fas fa-times-circle'></i> Reprovado", classe: "status-reprovado" };
}

function renderizarNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    if (!disciplina) return;
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const notasTurma = estado.dadosNotas[estado.turmaAtual]?.[disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || (tipo === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" });
        const media = calcularMedia(notas, tipo);
        const status = obterStatus(media);
        
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
        
        row.insertCell(tipo === "trimestral" ? 4 : 3).innerHTML = `<strong>${media.toFixed(1)}</strong>`;
        row.insertCell(tipo === "trimestral" ? 5 : 4).innerHTML = `<span class="${status.classe}">${status.texto}</span>`;
        
        const obsCell = row.insertCell(tipo === "trimestral" ? 6 : 5);
        const obsBtn = document.createElement("button");
        obsBtn.innerHTML = '<i class="fas fa-comment"></i>';
        obsBtn.className = "btn-secondary";
        obsBtn.style.padding = "5px 10px";
        obsBtn.onclick = () => abrirModalObservacao(aluno);
        obsCell.appendChild(obsBtn);
    });
    atualizarCardsDashboard();
}

function salvarNotas() {
    const disciplina = document.getElementById("disciplinaNotas").value;
    const inputs = document.querySelectorAll("#tbodyNotas .nota-input");
    inputs.forEach(input => {
        const aluno = input.dataset.aluno;
        const trimestre = input.dataset.trimestre;
        let valor = input.value === "" ? "" : parseFloat(input.value);
        if (valor !== "" && (isNaN(valor) || valor < 0 || valor > 10)) valor = "";
        if (!estado.dadosNotas[estado.turmaAtual][disciplina][aluno]) {
            estado.dadosNotas[estado.turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
        }
        estado.dadosNotas[estado.turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    salvarDados();
    renderizarNotas();
    renderizarRelatorios();
    renderizarRanking();
    mostrarToast("Notas salvas com sucesso!");
}

function atualizarCardsDashboard() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || TURMAS_CONFIG[estado.turmaAtual].disciplinas[0];
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    let aprovados = 0, recuperacao = 0, reprovados = 0;
    
    alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
    });
    
    document.getElementById("statAlunos").textContent = alunos.length;
    document.getElementById("statAprovados").textContent = aprovados;
    document.getElementById("statRecuperacao").textContent = recuperacao;
    document.getElementById("statReprovados").textContent = reprovados;
}

// ============================================================================
// 6. PRESENÇA
// ============================================================================

function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = estado.dadosPresenca[estado.turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhuma aula registrada.</div>';
        return;
    }
    
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        let presencasHtml = "";
        TURMAS_CONFIG[estado.turmaAtual].alunos.forEach(aluno => {
            const isChecked = aula.presencas && aula.presencas[aluno] === true;
            presencasHtml += `<tr><td><strong>${aluno}</strong></td><td><input type="checkbox" class="presenca-check" data-aluno="${aluno}" ${isChecked ? 'checked' : ''}></td></tr>`;
        });
        aulaCard.innerHTML = `
            <div class="aula-header"><span class="aula-data"><i class="fas fa-calendar-alt"></i> ${new Date(aula.data).toLocaleDateString('pt-BR')}</span><button class="aula-remover" data-index="${idx}"><i class="fas fa-trash"></i> Remover</button></div>
            <div class="tabela-container"><table class="tabela-presenca"><thead><tr><th>Aluno</th><th>Presente?</th></tr></thead><tbody>${presencasHtml}</tbody></table></div>
        `;
        container.appendChild(aulaCard);
        aulaCard.querySelector(".aula-remover").onclick = () => removerAula(key, idx);
        aulaCard.querySelectorAll(".presenca-check").forEach(checkbox => {
            checkbox.onchange = (e) => {
                const aluno = e.target.dataset.aluno;
                if (!estado.dadosPresenca[estado.turmaAtual][key][idx].presencas) estado.dadosPresenca[estado.turmaAtual][key][idx].presencas = {};
                estado.dadosPresenca[estado.turmaAtual][key][idx].presencas[aluno] = e.target.checked;
                salvarDados();
            };
        });
    });
}

function removerAula(key, index) {
    if (confirm("Remover esta aula?")) {
        estado.dadosPresenca[estado.turmaAtual][key].splice(index, 1);
        if (estado.dadosPresenca[estado.turmaAtual][key].length === 0) delete estado.dadosPresenca[estado.turmaAtual][key];
        salvarDados();
        renderizarPresenca();
        mostrarToast("Aula removida!", "warning");
    }
}

function adicionarAula() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    if (!estado.dadosPresenca[estado.turmaAtual][key]) estado.dadosPresenca[estado.turmaAtual][key] = [];
    estado.dadosPresenca[estado.turmaAtual][key].push({ data: new Date().toISOString().split('T')[0], presencas: {} });
    salvarDados();
    renderizarPresenca();
    mostrarToast("Nova aula adicionada!");
}

// ============================================================================
// 7. VISTOS
// ============================================================================

function renderizarVistos() {
    const vistosTurma = estado.dadosVistos[estado.turmaAtual]?.alunos || {};
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    tbody.innerHTML = "";
    TURMAS_CONFIG[estado.turmaAtual].alunos.forEach(aluno => {
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
    document.getElementById("modalDescVisto").value = "";
    document.getElementById("modalVisto").style.display = "flex";
}

function salvarVisto() {
    if (!estado.alunoSelecionadoVisto) return;
    const descricao = document.getElementById("modalDescVisto")?.value.trim();
    if (!descricao) { mostrarToast("Descreva a participação!", "warning"); return; }
    if (!estado.dadosVistos[estado.turmaAtual].alunos) estado.dadosVistos[estado.turmaAtual].alunos = {};
    const vistosTurma = estado.dadosVistos[estado.turmaAtual].alunos;
    if (!vistosTurma[estado.alunoSelecionadoVisto]) vistosTurma[estado.alunoSelecionadoVisto] = { total: 0, registros: [], ultima: "" };
    const agora = new Date().toISOString();
    vistosTurma[estado.alunoSelecionadoVisto].total++;
    vistosTurma[estado.alunoSelecionadoVisto].registros.push({ data: agora, descricao: descricao });
    vistosTurma[estado.alunoSelecionadoVisto].ultima = agora;
    salvarDados();
    renderizarVistos();
    renderizarRanking();
    document.getElementById("modalVisto").style.display = "none";
    mostrarToast(`Visto concedido para ${estado.alunoSelecionadoVisto}!`);
}

// ============================================================================
// 8. RELATÓRIOS
// ============================================================================

function renderizarRelatorios() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || TURMAS_CONFIG[estado.turmaAtual].disciplinas[0];
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    let aprovados = 0, recuperacao = 0, reprovados = 0, somaMedias = 0;
    
    alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
        somaMedias += media;
    });
    const mediaGeral = alunos.length ? (somaMedias / alunos.length).toFixed(1) : 0;
    document.getElementById("resumoNotas").innerHTML = `<ul><li><i class="fas fa-chart-line"></i> Média Geral: <strong>${mediaGeral}</strong></li><li><i class="fas fa-check-circle" style="color:#22c55e"></i> Aprovados: ${aprovados}</li><li><i class="fas fa-exclamation-triangle" style="color:#f97316"></i> Recuperação: ${recuperacao}</li><li><i class="fas fa-times-circle" style="color:#ef4444"></i> Reprovados: ${reprovados}</li></ul>`;
    
    let totalPresencas = 0, totalAulas = 0;
    for (let key in estado.dadosPresenca[estado.turmaAtual]) {
        if (Array.isArray(estado.dadosPresenca[estado.turmaAtual][key])) {
            estado.dadosPresenca[estado.turmaAtual][key].forEach(aula => { totalAulas++; totalPresencas += Object.values(aula.presencas || {}).filter(v => v === true).length; });
        }
    }
    const frequenciaMedia = totalAulas ? ((totalPresencas / (totalAulas * alunos.length)) * 100).toFixed(1) : 0;
    document.getElementById("resumoFrequencia").innerHTML = `<ul><li><i class="fas fa-calendar-alt"></i> Total Aulas: ${totalAulas}</li><li><i class="fas fa-chart-line"></i> Frequência: ${frequenciaMedia}%</li></ul>`;
    
    const destaques = []; 
    alunos.forEach(aluno => { const v = estado.dadosVistos[estado.turmaAtual]?.alunos?.[aluno]?.total || 0; if (v >= 3) destaques.push({ aluno, vistos: v }); });
    destaques.sort((a,b) => b.vistos - a.vistos);
    document.getElementById("alunosDestaque").innerHTML = destaques.length ? `<ul>${destaques.slice(0,5).map(d => `<li><i class="fas fa-trophy" style="color:#f59e0b"></i> ${d.aluno} - ${d.vistos} vistos</li>`).join('')}</ul>` : "<p>Nenhum aluno com destaque</p>";
    
    const recuperacaoList = [];
    alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 5 && media < 7) recuperacaoList.push({ aluno, media });
    });
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ? `<ul>${recuperacaoList.map(r => `<li><i class="fas fa-book-open" style="color:#f97316"></i> ${r.aluno} - Média: ${r.media.toFixed(1)}</li>`).join('')}</ul>` : "<p>Nenhum aluno em recuperação</p>";
}

function exportarRelatorioCompleto() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || TURMAS_CONFIG[estado.turmaAtual].disciplinas[0];
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    const dadosExport = alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        const media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        const status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        const vistos = estado.dadosVistos[estado.turmaAtual]?.alunos?.[aluno]?.total || 0;
        const obs = estado.dadosObservacoes[estado.turmaAtual]?.[aluno] || "";
        let presencas = 0, aulas = 0;
        for (let key in estado.dadosPresenca[estado.turmaAtual]) {
            if (Array.isArray(estado.dadosPresenca[estado.turmaAtual][key])) {
                estado.dadosPresenca[estado.turmaAtual][key].forEach(aula => { aulas++; if (aula.presencas && aula.presencas[aluno]) presencas++; });
            }
        }
        const freq = aulas ? ((presencas / aulas) * 100).toFixed(1) : "0";
        const row = { Aluno: aluno, NM1: nm1, NM2: nm2, "Média": media.toFixed(1), Status: status, Frequência: `${freq}%`, Vistos: vistos, Observações: obs };
        if (tipo === "trimestral") row["NM3"] = nm3;
        return row;
    });
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Relatorio_${TURMAS_CONFIG[estado.turmaAtual].nome}`);
    XLSX.writeFile(livro, `Relatorio_${TURMAS_CONFIG[estado.turmaAtual].nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
    mostrarToast("Relatório exportado!");
}

// ============================================================================
// 9. HORÁRIOS E ALERTAS
// ============================================================================

function renderizarHorarios(dia = null) {
    if (!dia) { const dias = ["segunda", "terca", "quarta", "quinta", "sexta"]; const hoje = new Date(); dia = dias[hoje.getDay() - 1] || "segunda"; }
    document.querySelectorAll(".dia-btn").forEach(btn => btn.classList.toggle("ativo", btn.dataset.dia === dia));
    const aulasDia = HORARIOS[dia];
    if (!aulasDia) return;
    const horariosFixos = ["07:30", "08:30", "09:50", "10:50", "11:50", "12:50", "13:50", "15:10", "16:10", "18:30", "19:25", "20:20", "21:25", "22:20"];
    let html = `<table class="tabela-horarios"><thead><tr><th>Horário</th><th>1º Administração</th><th>1º Controle Ambiental</th><th>2º Desenvolvimento</th><th>Informática Mód I</th><th>Informática Mód V</th></tr></thead><tbody>`;
    for (let i = 0; i < horariosFixos.length; i++) {
        const hora = horariosFixos[i];
        html += `<tr><td class="hora-col">${hora}</td>`;
        for (let turmaId of ["1adm", "1amb", "2ds", "inf1", "inf5"]) {
            const aula = aulasDia[turmaId]?.find(a => a.hora === hora);
            html += `<td>${aula ? `<strong>${aula.disciplina}</strong>` : "—"}</td>`;
        }
        html += `</tr>`;
        if (hora === "09:50") html += `<tr style="background:#fef3c7;"><td class="hora-col">☕ INTERVALO<td colspan="5">🥪 Intervalo - Recreio</tr>`;
        if (hora === "12:50") html += `<tr style="background:#fef3c7;"><td class="hora-col">🍽️ ALMOÇO<td colspan="5">🍽️ Horário de Almoço</tr>`;
        if (hora === "18:30") html += `<tr style="background:#e8f4f8;"><td class="hora-col">🌙 NOTURNO<td colspan="5">🌙 Início das Aulas Noturnas</tr>`;
    }
    html += `</tbody></table>`;
    document.getElementById("gradeHorarios").innerHTML = html;
    
    const agora = new Date();
    const horaMinutoAtual = agora.getHours() * 60 + agora.getMinutes();
    const todasAulas = [];
    for (let turmaId of ["1adm", "1amb", "2ds", "inf1", "inf5"]) {
        (aulasDia[turmaId] || []).forEach(aula => {
            const [h, m] = aula.hora.split(":").map(Number);
            const minutosAula = h * 60 + m;
            if (minutosAula > horaMinutoAtual) todasAulas.push({ turmaNome: TURMAS_CONFIG[turmaId].nome, ...aula, minutosRestantes: minutosAula - horaMinutoAtual });
        });
    }
    todasAulas.sort((a, b) => a.minutosRestantes - b.minutosRestantes);
    const proximasHtml = todasAulas.slice(0, 5).map(a => `<div class="proxima-aula-item"><div class="proxima-aula-hora">${a.hora}</div><div class="proxima-aula-info"><strong>${a.disciplina}</strong><small>${a.turmaNome}</small></div><div class="proxima-aula-tempo">em ${a.minutosRestantes} min</div></div>`).join("");
    document.getElementById("proximasAulas").innerHTML = proximasHtml || '<div class="lista-vazia">Nenhuma aula programada</div>';
}

function verificarAlertasHorarios() {
    if (!estado.configAlertas.notificar) return;
    const agora = new Date();
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const diaSemana = dias[agora.getDay()];
    if (diaSemana === "domingo" || diaSemana === "sabado") return;
    const aulasHoje = HORARIOS[diaSemana];
    if (!aulasHoje) return;
    const horaAtual = agora.getHours() * 60 + agora.getMinutes();
    
    for (let turmaId of ["1adm", "1amb", "2ds", "inf1", "inf5"]) {
        (aulasHoje[turmaId] || []).forEach(aula => {
            const [h, m] = aula.hora.split(":").map(Number);
            const minutosAula = h * 60 + m;
            const minutosAteAula = minutosAula - horaAtual;
            if (minutosAteAula === estado.configAlertas.minutosAntecedencia || (minutosAteAula > 0 && minutosAteAula <= estado.configAlertas.minutosAntecedencia)) {
                const chave = `${turmaId}_${aula.disciplina}_${aula.hora}_${new Date().toDateString()}`;
                if (!localStorage.getItem(chave)) {
                    localStorage.setItem(chave, "true");
                    setTimeout(() => localStorage.removeItem(chave), 60000);
                    const alertaDiv = document.createElement("div");
                    alertaDiv.className = "alerta-teste";
                    alertaDiv.innerHTML = `<i class="fas fa-bell"></i><div><strong>📚 Próxima Aula!</strong><br>${TURMAS_CONFIG[turmaId]?.nome}<br>${aula.disciplina} às ${aula.hora}</div><button onclick="this.parentElement.remove()">✕</button>`;
                    document.body.appendChild(alertaDiv);
                    if (estado.configAlertas.som) new Audio('data:audio/wav;base64,U3RlYWx0aCBzb3VuZA==').play().catch(() => {});
                    setTimeout(() => alertaDiv.remove(), 30000);
                    if ("Notification" in window && Notification.permission === "granted") {
                        new Notification("Próxima Aula", { body: `${TURMAS_CONFIG[turmaId]?.nome}: ${aula.disciplina} às ${aula.hora}` });
                    }
                }
            }
        });
    }
}

// ============================================================================
// 10. RANKING
// ============================================================================

function renderizarRanking() {
    const disciplina = document.getElementById("rankingDisciplina")?.value || TURMAS_CONFIG[estado.turmaAtual].disciplinas[0];
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    const container = document.getElementById("rankingContainer");
    if (!container) return;
    
    const rankings = alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        const vistos = estado.dadosVistos[estado.turmaAtual]?.alunos?.[aluno]?.total || 0;
        return { aluno, media, vistos };
    });
    rankings.sort((a, b) => b.media - a.media);
    container.innerHTML = rankings.map((item, idx) => {
        let posClass = idx === 0 ? "gold" : idx === 1 ? "silver" : idx === 2 ? "bronze" : "";
        return `<div class="ranking-item"><div class="ranking-position ${posClass}">${idx + 1}</div><div class="ranking-info"><h4>${item.aluno}</h4><p><i class="fas fa-star"></i> ${item.vistos} vistos</p></div><div class="ranking-nota"><div class="nota">${item.media.toFixed(1)}</div><div class="label">Média</div></div></div>`;
    }).join('');
}

// ============================================================================
// 11. ADMINISTRAÇÃO
// ============================================================================

function renderizarAdmin() {
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || "1adm";
    const alunos = TURMAS_CONFIG[turmaAdmin].alunos;
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    alunos.forEach((aluno, idx) => {
        const obs = estado.dadosObservacoes[turmaAdmin]?.[aluno] || "";
        const row = tbody.insertRow();
        row.insertCell(0).textContent = idx + 1;
        row.insertCell(1).innerHTML = `<strong>${aluno}</strong>`;
        row.insertCell(2).innerHTML = '<span style="color: #22c55e;"><i class="fas fa-check-circle"></i> Ativo</span>';
        row.insertCell(3).innerHTML = obs ? `<i class="fas fa-comment"></i> ${obs.substring(0, 30)}${obs.length > 30 ? "..." : ""}` : "-";
        const btnCell = row.insertCell(4);
        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i> Remover';
        btnRemover.className = "btn-secondary";
        btnRemover.style.background = "#fef2f2";
        btnRemover.style.color = "#ef4444";
        btnRemover.onclick = () => removerAluno(turmaAdmin, aluno);
        btnCell.appendChild(btnRemover);
    });
}

function removerAluno(turmaId, alunoNome) {
    if (!confirm(`⚠️ Remover "${alunoNome}"? Todos os dados serão excluídos!`)) return;
    const index = TURMAS_CONFIG[turmaId].alunos.indexOf(alunoNome);
    if (index !== -1) TURMAS_CONFIG[turmaId].alunos.splice(index, 1);
    salvarDados();
    renderizarAdmin();
    mostrarToast(`"${alunoNome}" removido!`, "warning");
}

// ============================================================================
// 12. EVENTOS
// ============================================================================

function renderizarEventos() {
    const container = document.getElementById("eventosContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (!estado.dadosEventos || estado.dadosEventos.length === 0) {
        container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhum evento cadastrado</div>';
        return;
    }
    
    const eventosOrdenados = [...estado.dadosEventos].sort((a, b) => new Date(a.data) - new Date(b.data));
    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    
    eventosOrdenados.forEach((evento, idx) => {
        const data = new Date(evento.data);
        const eventCard = document.createElement("div");
        eventCard.className = "evento-card";
        eventCard.innerHTML = `
            <div class="evento-data"><div class="dia">${data.getDate()}</div><div class="mes">${meses[data.getMonth()]}</div></div>
            <div class="evento-info"><h4>${evento.titulo}</h4><p>${evento.descricao || ""}</p></div>
            <button class="evento-remover" data-index="${idx}"><i class="fas fa-trash"></i></button>
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

function adicionarEvento(titulo, data, descricao) {
    if (!titulo || !data) { mostrarToast("Preencha título e data!", "warning"); return false; }
    estado.dadosEventos.push({ titulo, data, descricao });
    salvarDados();
    renderizarEventos();
    mostrarToast("Evento adicionado!");
    return true;
}

// ============================================================================
// 13. BACKUP E RESTORE
// ============================================================================

function backupDados() {
    const backup = {
        notas: estado.dadosNotas,
        presenca: estado.dadosPresenca,
        vistos: estado.dadosVistos,
        observacoes: estado.dadosObservacoes,
        eventos: estado.dadosEventos,
        alunos: {
            "1adm": TURMAS_CONFIG["1adm"].alunos,
            "1amb": TURMAS_CONFIG["1amb"].alunos,
            "2ds": TURMAS_CONFIG["2ds"].alunos,
            "inf1": TURMAS_CONFIG["inf1"].alunos,
            "inf5": TURMAS_CONFIG["inf5"].alunos
        },
        dataBackup: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `academic_backup_${new Date().toLocaleDateString().replace(/\//g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    mostrarToast("Backup realizado com sucesso!");
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
            if (backup.alunos) {
                for (let turmaId in backup.alunos) {
                    if (TURMAS_CONFIG[turmaId]) TURMAS_CONFIG[turmaId].alunos = backup.alunos[turmaId];
                }
            }
            salvarDados();
            renderizarNotas();
            renderizarPresenca();
            renderizarVistos();
            renderizarRelatorios();
            renderizarEventos();
            renderizarDashboard();
            atualizarCardsDashboard();
            mostrarToast("Restore realizado com sucesso!");
        } catch(e) { mostrarToast("Erro ao restaurar backup!", "error"); }
    };
    reader.readAsText(file);
}

// ============================================================================
// 14. OBSERVAÇÕES
// ============================================================================

function abrirModalObservacao(aluno) {
    const obs = estado.dadosObservacoes[estado.turmaAtual]?.[aluno] || "";
    document.getElementById("modalObsTexto").value = obs;
    document.getElementById("modalObs").style.display = "flex";
    window.alunoObsSelecionado = aluno;
}

function salvarObservacaoModal() {
    const obs = document.getElementById("modalObsTexto").value;
    if (window.alunoObsSelecionado) {
        if (!estado.dadosObservacoes[estado.turmaAtual]) estado.dadosObservacoes[estado.turmaAtual] = {};
        estado.dadosObservacoes[estado.turmaAtual][window.alunoObsSelecionado] = obs;
        salvarDados();
        document.getElementById("modalObs").style.display = "none";
        mostrarToast("Observação salva!");
    }
}

// ============================================================================
// 15. GRÁFICO DE EVOLUÇÃO
// ============================================================================

function atualizarGraficoEvolucao() {
    const alunoSelect = document.getElementById("graficoAlunoSelect");
    if (!alunoSelect) return;
    const aluno = alunoSelect.value;
    if (!aluno) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || TURMAS_CONFIG[estado.turmaAtual].disciplinas[0];
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
    
    let labels = [], valores = [];
    
    if (tipo === "trimestral") {
        labels = ["NM1 - 1º Trimestre", "NM2 - 2º Trimestre", "NM3 - 3º Trimestre"];
        valores = [parseFloat(notas.nm1) || 0, parseFloat(notas.nm2) || 0, parseFloat(notas.nm3) || 0];
    } else {
        labels = ["NM1 - 1º Bimestre", "NM2 - 2º Bimestre"];
        valores = [parseFloat(notas.nm1) || 0, parseFloat(notas.nm2) || 0];
    }
    
    const ctx = document.getElementById("graficoEvolucao")?.getContext("2d");
    if (!ctx) return;
    
    if (estado.graficoEvolucao) estado.graficoEvolucao.destroy();
    
    estado.graficoEvolucao = new Chart(ctx, {
        type: 'line',
        data: { labels: labels, datasets: [{ label: 'Evolução das Notas', data: valores, borderColor: '#667eea', backgroundColor: 'rgba(102,126,234,0.1)', borderWidth: 3, fill: true, tension: 0.3, pointRadius: 6, pointBackgroundColor: '#667eea' }] },
        options: { responsive: true, maintainAspectRatio: true, scales: { y: { min: 0, max: 10, title: { display: true, text: 'Nota' } }, x: { title: { display: true, text: 'Avaliações' } } }, plugins: { tooltip: { callbacks: { label: (ctx) => `Nota: ${ctx.raw.toFixed(1)}` } } } }
    });
}

// ============================================================================
// 16. EXPORTAÇÕES
// ============================================================================

function exportarNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    const dados = TURMAS_CONFIG[estado.turmaAtual].alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        if (tipo === "trimestral") return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
        return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "" };
    });
    const planilha = XLSX.utils.json_to_sheet(dados);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, "Notas");
    XLSX.writeFile(livro, `Notas_${TURMAS_CONFIG[estado.turmaAtual].nome}.xlsx`);
    mostrarToast("Notas exportadas!");
}

function exportarPresenca() {
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const dadosExport = [];
    
    for (const aluno of alunos) {
        let totalPresencas = 0, totalAulas = 0;
        const aulasPorMes = {};
        
        for (let key in estado.dadosPresenca[estado.turmaAtual]) {
            if (Array.isArray(estado.dadosPresenca[estado.turmaAtual][key])) {
                estado.dadosPresenca[estado.turmaAtual][key].forEach(aula => {
                    totalAulas++;
                    if (aula.presencas && aula.presencas[aluno] === true) totalPresencas++;
                    const [ano, mes] = key.split('-');
                    const mesNome = `${mes}/${ano}`;
                    if (!aulasPorMes[mesNome]) aulasPorMes[mesNome] = { presencas: 0, total: 0 };
                    aulasPorMes[mesNome].total++;
                    if (aula.presencas && aula.presencas[aluno] === true) aulasPorMes[mesNome].presencas++;
                });
            }
        }
        
        const frequencia = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : "0";
        const row = { Aluno: aluno, "Total Aulas": totalAulas, "Total Presenças": totalPresencas, "Frequência (%)": frequencia };
        
        for (let mes in aulasPorMes) {
            const freqMes = aulasPorMes[mes].total > 0 ? ((aulasPorMes[mes].presencas / aulasPorMes[mes].total) * 100).toFixed(1) : "0";
            row[`${mes}`] = `${aulasPorMes[mes].presencas}/${aulasPorMes[mes].total} (${freqMes}%)`;
        }
        dadosExport.push(row);
    }
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Presenca_${TURMAS_CONFIG[estado.turmaAtual].nome}`);
    XLSX.writeFile(livro, `Presenca_${TURMAS_CONFIG[estado.turmaAtual].nome}.xlsx`);
    mostrarToast("Presenças exportadas!");
}

function exportarVistos() {
    const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
    const dadosExport = [];
    
    for (const aluno of alunos) {
        const dados = estado.dadosVistos[estado.turmaAtual]?.alunos?.[aluno] || { total: 0, registros: [] };
        dadosExport.push({
            "Aluno": aluno,
            "Total de Vistos": dados.total,
            "Última Participação": dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-",
            "Histórico": dados.registros.map(r => `${new Date(r.data).toLocaleDateString('pt-BR')}: ${r.descricao}`).join("; ")
        });
    }
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Vistos_${TURMAS_CONFIG[estado.turmaAtual].nome}`);
    XLSX.writeFile(livro, `Vistos_${TURMAS_CONFIG[estado.turmaAtual].nome}.xlsx`);
    mostrarToast("Vistos exportados!");
}

// ============================================================================
// 17. ADICIONAR ALUNO
// ============================================================================

function adicionarAluno(turmaId, alunoNome, nascimento = "") {
    alunoNome = alunoNome.trim().toUpperCase();
    if (!alunoNome) { mostrarToast("Digite o nome!", "warning"); return false; }
    if (TURMAS_CONFIG[turmaId].alunos.includes(alunoNome)) { mostrarToast("Aluno já cadastrado!", "warning"); return false; }
    
    TURMAS_CONFIG[turmaId].alunos.push(alunoNome);
    TURMAS_CONFIG[turmaId].alunos.sort();
    
    const disciplinas = TURMAS_CONFIG[turmaId].disciplinas;
    const tipo = TURMAS_CONFIG[turmaId].tipoAvaliacao;
    
    disciplinas.forEach(disciplina => {
        if (!estado.dadosNotas[turmaId]) estado.dadosNotas[turmaId] = {};
        if (!estado.dadosNotas[turmaId][disciplina]) estado.dadosNotas[turmaId][disciplina] = {};
        if (tipo === "trimestral") estado.dadosNotas[turmaId][disciplina][alunoNome] = { nm1: "", nm2: "", nm3: "" };
        else estado.dadosNotas[turmaId][disciplina][alunoNome] = { nm1: "", nm2: "" };
    });
    
    if (!estado.dadosVistos[turmaId]) estado.dadosVistos[turmaId] = {};
    if (!estado.dadosVistos[turmaId].alunos) estado.dadosVistos[turmaId].alunos = {};
    estado.dadosVistos[turmaId].alunos[alunoNome] = { total: 0, registros: [], ultima: "" };
    
    salvarDados();
    
    if (estado.turmaAtual === turmaId) {
        renderizarNotas();
        renderizarPresenca();
        renderizarVistos();
        renderizarRelatorios();
        renderizarDashboard();
        atualizarCardsDashboard();
    }
    renderizarAdmin();
    mostrarToast(`"${alunoNome}" adicionado!`);
    return true;
}

// ============================================================================
// 18. TROCAR TURMA
// ============================================================================

function trocarTurma(turmaId) {
    estado.turmaAtual = turmaId;
    document.querySelectorAll(".nav-item[data-turma]").forEach(btn => btn.classList.toggle("ativo", btn.dataset.turma === turmaId));
    document.getElementById("pageTitle").textContent = TURMAS_CONFIG[turmaId].nome;
    document.getElementById("pageSubtitle").textContent = TURMAS_CONFIG[turmaId].tipoAvaliacao === "trimestral" ? "Avaliação Trimestral (NM1, NM2, NM3)" : "Avaliação Bimestral (NM1, NM2)";
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        TURMAS_CONFIG[turmaId].disciplinas.forEach(d => { const opt = document.createElement("option"); opt.value = d; opt.textContent = d; selectDisciplina.appendChild(opt); });
    }
    const rankingDisciplina = document.getElementById("rankingDisciplina");
    if (rankingDisciplina) {
        rankingDisciplina.innerHTML = "";
        TURMAS_CONFIG[turmaId].disciplinas.forEach(d => { const opt = document.createElement("option"); opt.value = d; opt.textContent = d; rankingDisciplina.appendChild(opt); });
    }
    const graficoSelect = document.getElementById("graficoAlunoSelect");
    if (graficoSelect) {
        graficoSelect.innerHTML = '<option value="">Selecione um aluno</option>';
        TURMAS_CONFIG[turmaId].alunos.forEach(aluno => { const opt = document.createElement("option"); opt.value = aluno; opt.textContent = aluno; graficoSelect.appendChild(opt); });
    }
    
    atualizarCabecalhoNotas();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
    renderizarRanking();
    renderizarDashboard();
    atualizarCardsDashboard();
}

function atualizarCabecalhoNotas() {
    const tipo = TURMAS_CONFIG[estado.turmaAtual].tipoAvaliacao;
    const thead = document.querySelector("#tabelaNotas thead tr");
    if (!thead) return;
    if (tipo === "trimestral") thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>NM3</th><th>Média</th><th>Status</th><th>Obs</th>`;
    else thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>Média</th><th>Status</th><th>Obs</th>`;
}

// ============================================================================
// 19. HORÁRIOS INICIAL
// ============================================================================

function iniciarHorarios() {
    document.querySelectorAll(".dia-btn").forEach(btn => btn.addEventListener("click", () => renderizarHorarios(btn.dataset.dia)));
    renderizarHorarios();
    setInterval(verificarAlertasHorarios, 60000);
    if ("Notification" in window && Notification.permission === "default") Notification.requestPermission();
}

// ============================================================================
// 20. INICIAR SISTEMA
// ============================================================================

function iniciarSistema(usuario) {
    estado.sessaoAtual = usuario;
    document.getElementById("sidebarUserName").textContent = usuario.nome;
    document.getElementById("sidebarUserType").textContent = usuario.tipo === "professor" ? "Professor" : (usuario.tipo === "coordenador" ? "Coordenador" : "Administrador");
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "flex";
    carregarDados();
    trocarTurma("1adm");
    
    const toggleBtn = document.getElementById("toggleSidebar");
    if (toggleBtn) toggleBtn.onclick = () => document.getElementById("sidebar").classList.toggle("collapsed");
    const darkModeBtn = document.getElementById("toggleDarkMode");
    if (darkModeBtn) darkModeBtn.onclick = () => document.body.classList.toggle("dark-mode");
    
    iniciarHorarios();
    setInterval(() => { if (document.getElementById("abaDashboard")?.classList.contains("active")) renderizarDashboard(); }, 60000);
}

// ============================================================================
// 21. INICIALIZAÇÃO DO DOM
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    const sessao = verificarSessao();
    if (sessao) iniciarSistema(sessao);
    else { document.getElementById("telaLogin").style.display = "flex"; document.getElementById("conteudoPrincipal").style.display = "none"; }
    
    // Login
    document.getElementById("loginCpf")?.addEventListener("input", () => formatarCPF(document.getElementById("loginCpf")));
    document.getElementById("btnLogin")?.addEventListener("click", () => {
        const resultado = fazerLogin(document.getElementById("loginCpf").value, document.getElementById("loginSenha").value);
        if (resultado.sucesso) iniciarSistema(estado.sessaoAtual);
        else document.getElementById("loginError").textContent = resultado.erro;
    });
    document.getElementById("loginSenha")?.addEventListener("keypress", (e) => { if (e.key === "Enter") document.getElementById("btnLogin").click(); });
    document.getElementById("btnLogoutSidebar")?.addEventListener("click", fazerLogout);
    
    // Navegação
    document.querySelectorAll(".nav-item[data-turma]").forEach(btn => btn.addEventListener("click", () => trocarTurma(btn.dataset.turma)));
    document.querySelectorAll(".nav-item-aba").forEach(btn => btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-item-aba").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
        document.getElementById(`aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`)?.classList.add("active");
        if (btn.dataset.aba === "relatorios") renderizarRelatorios();
        if (btn.dataset.aba === "ranking") renderizarRanking();
        if (btn.dataset.aba === "admin") renderizarAdmin();
        if (btn.dataset.aba === "calendario") renderizarEventos();
    }));
    
    // Botões principais
    document.getElementById("disciplinaNotas")?.addEventListener("change", () => { renderizarNotas(); renderizarRanking(); });
    document.getElementById("rankingDisciplina")?.addEventListener("change", renderizarRanking);
    document.getElementById("graficoAlunoSelect")?.addEventListener("change", atualizarGraficoEvolucao);
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas")?.addEventListener("click", exportarNotas);
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca")?.addEventListener("click", () => { salvarDados(); mostrarToast("Presenças salvas!"); });
    document.getElementById("exportarPresenca")?.addEventListener("click", exportarPresenca);
    document.getElementById("adicionarVisto")?.addEventListener("click", () => { if (TURMAS_CONFIG[estado.turmaAtual].alunos.length > 0) abrirModalVisto(TURMAS_CONFIG[estado.turmaAtual].alunos[0]); });
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); mostrarToast("Vistos salvos!"); });
    document.getElementById("exportarVistos")?.addEventListener("click", exportarVistos);
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("adicionarEvento")?.addEventListener("click", () => {
        document.getElementById("eventoTitulo").value = "";
        document.getElementById("eventoData").value = "";
        document.getElementById("eventoDescricao").value = "";
        document.getElementById("modalEvento").style.display = "flex";
    });
    document.getElementById("modalSalvarEvento")?.addEventListener("click", () => {
        adicionarEvento(document.getElementById("eventoTitulo").value, document.getElementById("eventoData").value, document.getElementById("eventoDescricao").value);
        document.getElementById("modalEvento").style.display = "none";
    });
    document.getElementById("adicionarAlunoBtn")?.addEventListener("click", () => {
        document.getElementById("modalAlunoNome").value = "";
        document.getElementById("modalAlunoNascimento").value = "";
        document.getElementById("modalAlunoTurma").value = document.getElementById("adminTurmaSelect").value;
        document.getElementById("modalAluno").style.display = "flex";
    });
    document.getElementById("adminTurmaSelect")?.addEventListener("change", renderizarAdmin);
    document.getElementById("backupDadosBtn")?.addEventListener("click", backupDados);
    document.getElementById("restoreDadosBtn")?.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => { if (e.target.files[0]) restoreDados(e.target.files[0]); };
        input.click();
    });
    document.getElementById("modalSalvarAluno")?.addEventListener("click", () => {
        adicionarAluno(document.getElementById("modalAlunoTurma").value, document.getElementById("modalAlunoNome").value, document.getElementById("modalAlunoNascimento").value);
        document.getElementById("modalAluno").style.display = "none";
    });
    document.getElementById("modalSalvarVisto")?.addEventListener("click", salvarVisto);
    document.getElementById("modalSalvarObs")?.addEventListener("click", salvarObservacaoModal);
    document.getElementById("configurarAlertas")?.addEventListener("click", () => {
        const minutos = prompt("Minutos de antecedência para alertas? (5, 10, 15, 30, 60)", estado.configAlertas.minutosAntecedencia);
        if (minutos && [5,10,15,30,60].includes(parseInt(minutos))) {
            estado.configAlertas.minutosAntecedencia = parseInt(minutos);
            mostrarToast(`Alertas configurados para ${minutos} minutos antes!`);
        }
    });
    document.getElementById("testarAlerta")?.addEventListener("click", () => {
        const alertaDiv = document.createElement("div");
        alertaDiv.className = "alerta-teste";
        alertaDiv.innerHTML = `<i class="fas fa-bell"></i><div><strong>🔔 Teste de Alerta</strong><br>Você receberá notificações!</div><button onclick="this.parentElement.remove()">✕</button>`;
        document.body.appendChild(alertaDiv);
        setTimeout(() => alertaDiv.remove(), 5000);
    });
    
    // Fechar modais
    document.querySelectorAll(".modal-fechar, .modal-fechar-aluno, .modal-fechar-evento, .modal-fechar-obs").forEach(btn => {
        btn.onclick = () => {
            document.getElementById("modalAluno").style.display = "none";
            document.getElementById("modalVisto").style.display = "none";
            document.getElementById("modalEvento").style.display = "none";
            document.getElementById("modalObs").style.display = "none";
        };
    });
    document.getElementById("modalCancelarAluno")?.addEventListener("click", () => document.getElementById("modalAluno").style.display = "none");
    
    // Filtros
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
    
    // Pesquisa global
    document.getElementById("globalSearch")?.addEventListener("input", (e) => {
        const termo = e.target.value.toLowerCase();
        const alunos = TURMAS_CONFIG[estado.turmaAtual].alunos;
        const filtrados = alunos.filter(a => a.toLowerCase().includes(termo));
        if (termo.length > 0 && filtrados.length > 0) {
            mostrarToast(`🔍 Encontrados ${filtrados.length} alunos: ${filtrados.slice(0, 3).join(", ")}${filtrados.length > 3 ? "..." : ""}`, "info");
        }
    });
    
    document.querySelector(".nav-item-aba[data-aba='dashboard']")?.classList.add("ativo");
});
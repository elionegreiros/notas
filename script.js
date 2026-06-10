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
// DADOS DOS ALUNOS
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
        } catch(e) { console.log("Erro ao carregar dados salvos"); }
    }
    inicializarEstruturas();
}

function inicializarEstruturas() {
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
                        estado.dadosNotas[escolaId][turmaId][disciplina][aluno] = turma.tipoAvaliacao === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" };
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
}

function getTurmaConfig() {
    return ESCOLAS[estado.escolaAtual]?.turmas[estado.turmaAtual] || null;
}

function getEscolaAtual() {
    return ESCOLAS[estado.escolaAtual];
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
// RENDERIZAÇÃO DO SIDEBAR
// ============================================================================

function carregarSidebar() {
    const escolasPermitidas = estado.sessaoAtual?.escola === "ambas" ? Object.keys(ESCOLAS) : [estado.sessaoAtual?.escola];
    
    const escolasContainer = document.querySelector(".escola-selector");
    if (escolasContainer) {
        let escolasHtml = '<div class="nav-label">ESCOLA</div>';
        for (let escolaId of escolasPermitidas) {
            const escola = ESCOLAS[escolaId];
            const activeClass = estado.escolaAtual === escolaId ? "ativo" : "";
            escolasHtml += `<button class="nav-item escola-btn ${activeClass}" data-escola="${escolaId}"><i class="fas ${escola.icone}"></i><span>${escola.nome} (${escola.turno})</span></button>`;
        }
        escolasContainer.innerHTML = escolasHtml;
        
        document.querySelectorAll(".escola-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const novaEscola = btn.dataset.escola;
                const primeiraTurma = Object.keys(ESCOLAS[novaEscola].turmas)[0];
                trocarEscolaTurma(novaEscola, primeiraTurma);
            });
        });
    }
    
    const turmasContainer = document.getElementById("turmasContainer");
    if (turmasContainer) {
        let turmasHtml = '<div class="nav-label">TURMAS</div>';
        for (let escolaId of escolasPermitidas) {
            const escola = ESCOLAS[escolaId];
            for (let turmaId in escola.turmas) {
                const turma = escola.turmas[turmaId];
                const activeClass = (estado.escolaAtual === escolaId && estado.turmaAtual === turmaId) ? "ativo" : "";
                turmasHtml += `<button class="nav-item turma-item ${activeClass}" data-escola="${escolaId}" data-turma="${turmaId}"><i class="fas ${escola.icone}"></i><span>${turma.nome}</span></button>`;
            }
        }
        turmasContainer.innerHTML = turmasHtml;
        
        document.querySelectorAll(".turma-item").forEach(btn => {
            btn.addEventListener("click", () => {
                trocarEscolaTurma(btn.dataset.escola, btn.dataset.turma);
            });
        });
    }
}

function trocarEscolaTurma(escolaId, turmaId) {
    estado.escolaAtual = escolaId;
    estado.turmaAtual = turmaId;
    
    document.querySelectorAll(".escola-btn").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.escola === escolaId);
    });
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
    
    atualizarCabecalhoNotas();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
    renderizarRanking();
    renderizarHorarios();
    renderizarDashboard();
    renderizarAdmin();
    atualizarEstatisticas();
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
    const alunos = turma.alunos;
    const notasTurma = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina] || {};
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
    atualizarGraficoEvolucao();
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
    let aprovados = 0, recuperacao = 0, reprovados = 0;
    
    turma.alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
    });
    
    document.getElementById("statAlunos").textContent = turma.alunos.length;
    document.getElementById("statAprovados").textContent = aprovados;
    document.getElementById("statRecuperacao").textContent = recuperacao;
    document.getElementById("statReprovados").textContent = reprovados;
    document.getElementById("statAniversariantes").textContent = "0";
}

function atualizarCabecalhoNotas() {
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const thead = document.querySelector("#tabelaNotas thead tr");
    if (!thead) return;
    if (tipo === "trimestral") {
        thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>NM3</th><th>Média</th><th>Status</th><th>Obs</th>`;
    } else {
        thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>Média</th><th>Status</th><th>Obs</th>`;
    }
}

function exportarNotas() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaConfig();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const dados = turma.alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        if (tipo === "trimestral") {
            return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
        }
        return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "" };
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
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = estado.dadosPresenca[estado.escolaAtual]?.[estado.turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhuma aula registrada. Clique em "Nova Aula" para começar.</div>';
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
            <div class="aula-header"><span class="aula-data"><i class="fas fa-calendar-alt"></i> ${new Date(aula.data).toLocaleDateString('pt-BR')}</span><button class="aula-remover" data-index="${idx}"><i class="fas fa-trash"></i> Remover</button></div>
            <div class="tabela-container"><table class="tabela-presenca"><thead><tr><th>Aluno</th><th>Presente?</th><tr></thead><tbody>${presencasHtml}</tbody></table></div>
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

function exportarPresenca() {
    const turma = getTurmaAtual();
    if (!turma) return;
    const presencasTurma = estado.dadosPresenca[estado.escolaAtual]?.[estado.turmaAtual] || {};
    const dadosExport = [];
    
    for (const aluno of turma.alunos) {
        let totalPresencas = 0, totalAulas = 0;
        for (let key in presencasTurma) {
            if (Array.isArray(presencasTurma[key])) {
                presencasTurma[key].forEach(aula => {
                    totalAulas++;
                    if (aula.presencas && aula.presencas[aluno] === true) totalPresencas++;
                });
            }
        }
        const freq = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : "0";
        dadosExport.push({ Aluno: aluno, "Total Aulas": totalAulas, "Total Presenças": totalPresencas, "Frequência (%)": freq });
    }
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Presenca_${turma.nome}`);
    XLSX.writeFile(livro, `Presenca_${turma.nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
    mostrarToast("Presenças exportadas!");
}

// ============================================================================
// VISTOS
// ============================================================================

function renderizarVistos() {
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    const turma = getTurmaAtual();
    if (!turma) return;
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};
    tbody.innerHTML = "";
    
    turma.alunos.forEach(aluno => {
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
    document.getElementById("modalVisto").style.display = "none";
    mostrarToast(`Visto concedido para ${estado.alunoSelecionadoVisto}!`);
}

function exportarVistos() {
    const turma = getTurmaAtual();
    if (!turma) return;
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};
    const dadosExport = turma.alunos.map(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, registros: [] };
        return {
            Aluno: aluno,
            "Total de Vistos": dados.total,
            "Última Participação": dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-",
            "Histórico": dados.registros.map(r => `${new Date(r.data).toLocaleDateString('pt-BR')}: ${r.descricao}`).join("; ")
        };
    });
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Vistos_${turma.nome}`);
    XLSX.writeFile(livro, `Vistos_${turma.nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
    mostrarToast("Vistos exportados!");
}

// ============================================================================
// RELATÓRIOS
// ============================================================================

function renderizarRelatorios() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaAtual();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    let aprovados = 0, recuperacao = 0, reprovados = 0, somaMedias = 0;
    
    turma.alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
        somaMedias += media;
    });
    const mediaGeral = turma.alunos.length ? (somaMedias / turma.alunos.length).toFixed(1) : 0;
    
    document.getElementById("resumoNotas").innerHTML = `
        <ul>
            <li>📊 Média Geral: <strong>${mediaGeral}</strong></li>
            <li>✅ Aprovados: <strong style="color:#22c55e">${aprovados}</strong></li>
            <li>⚠️ Recuperação: <strong style="color:#f97316">${recuperacao}</strong></li>
            <li>❌ Reprovados: <strong style="color:#ef4444">${reprovados}</strong></li>
        </ul>
    `;
    
    let totalPresencas = 0, totalAulas = 0;
    const presencasTurma = estado.dadosPresenca[estado.escolaAtual]?.[estado.turmaAtual] || {};
    for (let key in presencasTurma) {
        if (Array.isArray(presencasTurma[key])) {
            presencasTurma[key].forEach(aula => {
                totalAulas++;
                totalPresencas += Object.values(aula.presencas || {}).filter(v => v === true).length;
            });
        }
    }
    const freqMedia = totalAulas ? ((totalPresencas / (totalAulas * turma.alunos.length)) * 100).toFixed(1) : 0;
    document.getElementById("resumoFrequencia").innerHTML = `
        <ul>
            <li>📅 Total Aulas: <strong>${totalAulas}</strong></li>
            <li>📈 Frequência Média: <strong>${freqMedia}%</strong></li>
        </ul>
    `;
    
    const destaques = [];
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};
    turma.alunos.forEach(aluno => {
        const v = vistosTurma[aluno]?.total || 0;
        if (v >= 3) destaques.push({ aluno, vistos: v });
    });
    destaques.sort((a, b) => b.vistos - a.vistos);
    document.getElementById("alunosDestaque").innerHTML = destaques.length ? 
        `<ul>${destaques.slice(0,5).map(d => `<li>⭐ ${d.aluno} - ${d.vistos} vistos</li>`).join('')}</ul>` : 
        "<p>Nenhum aluno com destaque ainda</p>";
    
    const recuperacaoList = [];
    turma.alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        if (media >= 5 && media < 7) recuperacaoList.push({ aluno, media });
    });
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ?
        `<ul>${recuperacaoList.map(r => `<li>⚠️ ${r.aluno} - Média: ${r.media.toFixed(1)}</li>`).join('')}</ul>` :
        "<p>Nenhum aluno em recuperação</p>";
}

function exportarRelatorioCompleto() {
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaAtual();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};
    const presencasTurma = estado.dadosPresenca[estado.escolaAtual]?.[estado.turmaAtual] || {};
    
    const dadosExport = turma.alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        const media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        const status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        const vistos = vistosTurma[aluno]?.total || 0;
        const obs = estado.dadosObservacoes[estado.escolaAtual]?.[estado.turmaAtual]?.[aluno] || "";
        
        let presencas = 0, aulas = 0;
        for (let key in presencasTurma) {
            if (Array.isArray(presencasTurma[key])) {
                presencasTurma[key].forEach(aula => {
                    aulas++;
                    if (aula.presencas && aula.presencas[aluno]) presencas++;
                });
            }
        }
        const freq = aulas ? ((presencas / aulas) * 100).toFixed(1) : "0";
        
        const row = { Aluno: aluno, NM1: nm1, NM2: nm2, "Média Final": media.toFixed(1), Status: status, "Frequência (%)": freq, Vistos: vistos, Observações: obs };
        if (tipo === "trimestral") row["NM3"] = nm3;
        return row;
    });
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Relatorio_${turma.nome}`);
    XLSX.writeFile(livro, `Relatorio_${turma.nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
    mostrarToast("Relatório completo exportado!");
}

// PDF Export
function exportarBoletimPDF() {
    const turma = getTurmaAtual();
    if (!turma) {
        mostrarToast("Selecione uma turma primeiro!", "warning");
        return;
    }
    
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';
    
    element.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #667eea;">Academic Manager Pro</h1>
            <h2>${turma.nome}</h2>
            <p>${getEscolaAtual().nome} - ${getEscolaAtual().turno}</p>
            <p>Data de emissão: ${new Date().toLocaleDateString('pt-BR')}</p>
            <hr style="margin: 20px 0;">
        </div>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #667eea; color: white;">Aluno</th>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #667eea; color: white;">NM1</th>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #667eea; color: white;">NM2</th>
                    ${turma.tipoAvaliacao === "trimestral" ? '<th style="border: 1px solid #ddd; padding: 8px; background: #667eea; color: white;">NM3</th>' : ''}
                    <th style="border: 1px solid #ddd; padding: 8px; background: #667eea; color: white;">Média</th>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #667eea; color: white;">Status</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || turma.disciplinas[0];
    turma.alunos.forEach(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = turma.tipoAvaliacao === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        const media = turma.tipoAvaliacao === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        const status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        const statusColor = media >= 7 ? "#22c55e" : (media >= 5 ? "#f97316" : "#ef4444");
        
        element.innerHTML += `
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${aluno}</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${nm1.toFixed(1)}</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${nm2.toFixed(1)}</td>
                ${turma.tipoAvaliacao === "trimestral" ? `<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${nm3.toFixed(1)}</td>` : ''}
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">${media.toFixed(1)}</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: ${statusColor};">${status}</td>
            </tr>
        `;
    });
    
    element.innerHTML += `
            </tbody>
        </table>
        <div style="margin-top: 30px; text-align: center;">
            <p>© ${new Date().getFullYear()} Academic Manager Pro - Todos os direitos reservados</p>
        </div>
    `;
    
    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `Boletim_${turma.nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
    mostrarToast("PDF gerado com sucesso!", "success");
}

// ============================================================================
// RANKING
// ============================================================================

function renderizarRanking() {
    const disciplina = document.getElementById("rankingDisciplina")?.value;
    const turma = getTurmaAtual();
    if (!turma) return;
    const tipo = turma.tipoAvaliacao;
    const container = document.getElementById("rankingContainer");
    if (!container) return;
    
    const rankings = turma.alunos.map(aluno => {
        const notas = estado.dadosNotas[estado.escolaAtual]?.[estado.turmaAtual]?.[disciplina]?.[aluno] || {};
        const media = calcularMedia(notas, tipo);
        const vistos = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual]?.[aluno]?.total || 0;
        return { aluno, media, vistos };
    });
    rankings.sort((a, b) => b.media - a.media);
    
    container.innerHTML = rankings.map((item, idx) => {
        let posClass = "";
        if (idx === 0) posClass = "gold";
        else if (idx === 1) posClass = "silver";
        else if (idx === 2) posClass = "bronze";
        
        return `
            <div class="ranking-item">
                <div class="ranking-position ${posClass}">${idx + 1}</div>
                <div class="ranking-info">
                    <h4>${item.aluno}</h4>
                    <p><i class="fas fa-star"></i> ${item.vistos} vistos</p>
                </div>
                <div class="ranking-nota">
                    <div class="nota">${item.media.toFixed(1)}</div>
                    <div class="label">Média</div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================================
// HORÁRIOS
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
    
    const horariosAtuais = getHorariosAtuais();
    const aulasDia = horariosAtuais[dia];
    if (!aulasDia) return;
    
    const escola = getEscolaAtual();
    const turmasLista = Object.keys(escola.turmas);
    const horariosFixos = estado.escolaAtual === "gentil" 
        ? ["07:30", "08:30", "09:50", "10:50", "11:50", "12:50", "13:50", "15:10", "16:10"]
        : ["18:30", "19:25", "20:20", "21:25", "22:20"];
    
    let html = `<table class="tabela-horarios"><thead><tr><th>Horário</th>${turmasLista.map(t => `<th>${escola.turmas[t].nome}</th>`).join('')}</thead><tbody>`;
    
    for (let i = 0; i < horariosFixos.length; i++) {
        const hora = horariosFixos[i];
        html += `<tr><td class="hora-col">${hora}</td>`;
        for (let turmaId of turmasLista) {
            const aula = aulasDia[turmaId]?.find(a => a.hora === hora);
            html += `<td>${aula ? `<strong>${aula.disciplina}</strong>` : "—"}</td>`;
        }
        html += `</tr>`;
        
        if (estado.escolaAtual === "gentil" && hora === "09:50") {
            html += `<tr style="background:#fef3c7;"><td class="hora-col">☕ INTERVALO<td colspan="${turmasLista.length}">🥪 Intervalo - Recreio</td></tr>`;
        }
        if (estado.escolaAtual === "gentil" && hora === "12:50") {
            html += `<tr style="background:#fef3c7;"><td class="hora-col">🍽️ ALMOÇO<td colspan="${turmasLista.length}">🍽️ Horário de Almoço</td></tr>`;
        }
    }
    html += `</tbody></table>`;
    document.getElementById("gradeHorarios").innerHTML = html;
    
    const agora = new Date();
    const horaMinutoAtual = agora.getHours() * 60 + agora.getMinutes();
    const todasAulas = [];
    for (let turmaId of turmasLista) {
        (aulasDia[turmaId] || []).forEach(aula => {
            const [h, m] = aula.hora.split(":").map(Number);
            const minutosAula = h * 60 + m;
            if (minutosAula > horaMinutoAtual) {
                todasAulas.push({ turmaNome: escola.turmas[turmaId].nome, ...aula, minutosRestantes: minutosAula - horaMinutoAtual });
            }
        });
    }
    todasAulas.sort((a, b) => a.minutosRestantes - b.minutosRestantes);
    const proximasHtml = todasAulas.slice(0, 5).map(a => `
        <div class="proxima-aula-item">
            <div class="proxima-aula-hora">${a.hora}</div>
            <div class="proxima-aula-info">
                <strong>${a.disciplina}</strong>
                <small>${a.turmaNome}</small>
            </div>
            <div class="proxima-aula-tempo">em ${a.minutosRestantes} min</div>
        </div>
    `).join("");
    document.getElementById("proximasAulas").innerHTML = proximasHtml || '<div class="lista-vazia">Nenhuma aula programada</div>';
}

function configurarAlertas() {
    const minutos = prompt("Minutos de antecedência para alertas? (5, 10, 15, 30, 60)", estado.configAlertas.minutosAntecedencia);
    if (minutos && [5,10,15,30,60].includes(parseInt(minutos))) {
        estado.configAlertas.minutosAntecedencia = parseInt(minutos);
        mostrarToast(`Alertas configurados para ${minutos} minutos antes!`);
    }
}

function testarAlerta() {
    mostrarToast("🔔 Teste de Alerta! Você receberá notificações dos horários das aulas.", "info");
}

function verificarAlertasHorarios() {
    if (!estado.configAlertas.notificar) return;
    const agora = new Date();
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const diaSemana = dias[agora.getDay()];
    if (diaSemana === "domingo" || diaSemana === "sabado") return;
    const horariosAtuais = getHorariosAtuais();
    const aulasHoje = horariosAtuais[diaSemana];
    if (!aulasHoje) return;
    const horaAtual = agora.getHours() * 60 + agora.getMinutes();
    const escola = getEscolaAtual();
    
    for (let turmaId in escola.turmas) {
        (aulasHoje[turmaId] || []).forEach(aula => {
            const [h, m] = aula.hora.split(":").map(Number);
            const minutosAula = h * 60 + m;
            const minutosAteAula = minutosAula - horaAtual;
            if (minutosAteAula === estado.configAlertas.minutosAntecedencia || (minutosAteAula > 0 && minutosAteAula <= estado.configAlertas.minutosAntecedencia)) {
                const chave = `${estado.escolaAtual}_${turmaId}_${aula.disciplina}_${aula.hora}_${new Date().toDateString()}`;
                if (!localStorage.getItem(chave)) {
                    localStorage.setItem(chave, "true");
                    setTimeout(() => localStorage.removeItem(chave), 60000);
                    mostrarToast(`📚 Próxima aula: ${escola.turmas[turmaId].nome} - ${aula.disciplina} às ${aula.hora}`, "info");
                    if (estado.configAlertas.som) {
                        const audio = new Audio('data:audio/wav;base64,U3RlYWx0aCBzb3VuZA==');
                        audio.play().catch(() => {});
                    }
                }
            }
        });
    }
}

function iniciarHorarios() {
    document.querySelectorAll(".dia-btn").forEach(btn => {
        btn.addEventListener("click", () => renderizarHorarios(btn.dataset.dia));
    });
    renderizarHorarios();
    setInterval(verificarAlertasHorarios, 60000);
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
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
    const horariosAtuais = getHorariosAtuais();
    const aulasDia = horariosAtuais[diaSemana] || {};
    const aulas = [];
    const escola = getEscolaAtual();
    for (let turmaId in escola.turmas) {
        (aulasDia[turmaId] || []).forEach(aula => {
            aulas.push({ turmaNome: escola.turmas[turmaId].nome, disciplina: aula.disciplina, hora: aula.hora });
        });
    }
    aulas.sort((a, b) => a.hora.localeCompare(b.hora));
    return aulas;
}

function renderizarDashboard() {
    const hoje = new Date();
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    
    const saudacaoElem = document.getElementById("saudacaoTexto");
    if (saudacaoElem) {
        const hora = hoje.getHours();
        let saudacao = "Bom dia";
        if (hora >= 12 && hora < 18) saudacao = "Boa tarde";
        if (hora >= 18) saudacao = "Boa noite";
        saudacaoElem.innerHTML = `${saudacao}, ${estado.sessaoAtual?.nome || "Professor"}! 👋`;
    }
    
    const dataAtualElem = document.getElementById("dataAtual");
    if (dataAtualElem) {
        dataAtualElem.textContent = hoje.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    
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
    
    const totalAulasHojeElem = document.getElementById("totalAulasHoje");
    if (totalAulasHojeElem) totalAulasHojeElem.textContent = aulasHoje.length;
    
    const totalAlunosElem = document.getElementById("totalAlunos");
    const turma = getTurmaAtual();
    if (totalAlunosElem && turma) totalAlunosElem.textContent = turma.alunos.length;
    
    let totalVistos = 0;
    const vistosTurma = estado.dadosVistos[estado.escolaAtual]?.[estado.turmaAtual] || {};
    for (let aluno in vistosTurma) {
        totalVistos += vistosTurma[aluno]?.total || 0;
    }
    const totalVistosMesElem = document.getElementById("totalVistosMes");
    if (totalVistosMesElem) totalVistosMesElem.textContent = totalVistos;
}

// ============================================================================
// ADMIN
// ============================================================================

function renderizarAdmin() {
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || estado.turmaAtual;
    const escola = getEscolaAtual();
    if (!escola) return;
    const turma = escola.turmas[turmaAdmin];
    if (!turma) return;
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    turma.alunos.forEach((aluno, idx) => {
        const obs = estado.dadosObservacoes[estado.escolaAtual]?.[turmaAdmin]?.[aluno] || "";
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
    if (!confirm(`⚠️ Remover "${alunoNome}"?`)) return;
    const escola = getEscolaAtual();
    if (!escola) return;
    const turma = escola.turmas[turmaId];
    if (!turma) return;
    const index = turma.alunos.indexOf(alunoNome);
    if (index !== -1) turma.alunos.splice(index, 1);
    salvarDados();
    renderizarAdmin();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRanking();
    renderizarDashboard();
    mostrarToast(`"${alunoNome}" removido!`, "warning");
}

function adicionarAluno(turmaId, alunoNome, nascimento = "") {
    alunoNome = alunoNome.trim().toUpperCase();
    if (!alunoNome) { mostrarToast("Digite o nome!", "warning"); return false; }
    const escola = getEscolaAtual();
    if (!escola) return false;
    const turma = escola.turmas[turmaId];
    if (!turma) return false;
    if (turma.alunos.includes(alunoNome)) { mostrarToast("Aluno já cadastrado!", "warning"); return false; }
    
    turma.alunos.push(alunoNome);
    turma.alunos.sort();
    
    const tipo = turma.tipoAvaliacao;
    turma.disciplinas.forEach(disciplina => {
        if (!estado.dadosNotas[estado.escolaAtual][turmaId][disciplina]) {
            estado.dadosNotas[estado.escolaAtual][turmaId][disciplina] = {};
        }
        estado.dadosNotas[estado.escolaAtual][turmaId][disciplina][alunoNome] = tipo === "trimestral" ? { nm1: "", nm2: "", nm3: "" } : { nm1: "", nm2: "" };
    });
    
    if (!estado.dadosVistos[estado.escolaAtual][turmaId]) {
        estado.dadosVistos[estado.escolaAtual][turmaId] = {};
    }
    estado.dadosVistos[estado.escolaAtual][turmaId][alunoNome] = { total: 0, registros: [], ultima: "" };
    
    salvarDados();
    
    if (estado.turmaAtual === turmaId) {
        renderizarNotas();
        renderizarPresenca();
        renderizarVistos();
        renderizarRelatorios();
        renderizarRanking();
        renderizarDashboard();
        atualizarEstatisticas();
    }
    renderizarAdmin();
    mostrarToast(`"${alunoNome}" adicionado!`);
    return true;
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
            salvarDados();
            renderizarNotas();
            renderizarPresenca();
            renderizarVistos();
            renderizarRelatorios();
            renderizarRanking();
            renderizarDashboard();
            atualizarEstatisticas();
            mostrarToast("Restore realizado com sucesso!");
        } catch(e) { mostrarToast("Erro ao restaurar backup!", "error"); }
    };
    reader.readAsText(file);
}

// ============================================================================
// INDEXEDDB
// ============================================================================

const DB_NAME = 'AcademicManagerDB';
const DB_VERSION = 1;

function abrirBancoDados() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('backups')) {
                db.createObjectStore('backups', { keyPath: 'timestamp' });
            }
        };
    });
}

async function fazerBackupIndexedDB() {
    const backup = {
        timestamp: new Date().toISOString(),
        notas: estado.dadosNotas,
        presenca: estado.dadosPresenca,
        vistos: estado.dadosVistos,
        observacoes: estado.dadosObservacoes,
        eventos: estado.dadosEventos
    };
    
    const db = await abrirBancoDados();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['backups'], 'readwrite');
        const store = transaction.objectStore('backups');
        const request = store.add(backup);
        request.onsuccess = () => {
            mostrarToast("Backup salvo no IndexedDB!", "success");
            resolve();
        };
        request.onerror = () => reject(request.error);
    });
}

async function restaurarUltimoBackup() {
    const db = await abrirBancoDados();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['backups'], 'readonly');
        const store = transaction.objectStore('backups');
        const request = store.getAll();
        request.onsuccess = () => {
            const backups = request.result;
            if (backups.length === 0) {
                mostrarToast("Nenhum backup encontrado!", "warning");
                resolve();
                return;
            }
            backups.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            const ultimoBackup = backups[0];
            
            estado.dadosNotas = ultimoBackup.notas;
            estado.dadosPresenca = ultimoBackup.presenca;
            estado.dadosVistos = ultimoBackup.vistos;
            estado.dadosObservacoes = ultimoBackup.observacoes;
            estado.dadosEventos = ultimoBackup.eventos;
            
            salvarDados();
            renderizarNotas();
            renderizarPresenca();
            renderizarVistos();
            renderizarRelatorios();
            renderizarRanking();
            renderizarDashboard();
            atualizarEstatisticas();
            mostrarToast("Backup restaurado com sucesso!", "success");
            resolve();
        };
        request.onerror = () => reject(request.error);
    });
}

// ============================================================================
// QR CODE
// ============================================================================

function gerarQRCode() {
    const turma = getTurmaAtual();
    if (!turma) {
        mostrarToast("Selecione uma turma primeiro!", "warning");
        return;
    }
    
    const urlAtual = window.location.href.split('?')[0];
    const urlCompartilhamento = `${urlAtual}?escola=${estado.escolaAtual}&turma=${estado.turmaAtual}`;
    
    const container = document.getElementById("qrcodeContainer");
    container.innerHTML = "";
    
    if (typeof QRCode !== 'undefined') {
        new QRCode(container, {
            text: urlCompartilhamento,
            width: 200,
            height: 200,
            colorDark: "#667eea",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        container.innerHTML = '<p>QR Code não disponível</p>';
    }
    
    document.getElementById("qrLinkText").textContent = urlCompartilhamento;
    document.getElementById("modalQR").style.display = "flex";
}

function copiarLink() {
    const link = document.getElementById("qrLinkText").textContent;
    navigator.clipboard.writeText(link).then(() => {
        mostrarToast("Link copiado para a área de transferência!", "success");
    }).catch(() => {
        mostrarToast("Erro ao copiar link!", "error");
    });
}

function processarParametrosURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const escola = urlParams.get('escola');
    const turma = urlParams.get('turma');
    
    if (escola && turma && ESCOLAS[escola] && ESCOLAS[escola].turmas[turma]) {
        setTimeout(() => {
            trocarEscolaTurma(escola, turma);
            mostrarToast(`Acessando: ${ESCOLAS[escola].turmas[turma].nome}`, "success");
        }, 1000);
    }
}

// ============================================================================
// EVENTOS, OBSERVAÇÕES E GRÁFICO
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

function abrirModalObservacao(aluno) {
    const obs = estado.dadosObservacoes[estado.escolaAtual]?.[estado.turmaAtual]?.[aluno] || "";
    document.getElementById("modalObsTexto").value = obs;
    document.getElementById("modalObs").style.display = "flex";
    window.alunoObsSelecionado = aluno;
}

function salvarObservacaoModal() {
    const obs = document.getElementById("modalObsTexto").value;
    if (window.alunoObsSelecionado) {
        if (!estado.dadosObservacoes[estado.escolaAtual]) estado.dadosObservacoes[estado.escolaAtual] = {};
        if (!estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual]) {
            estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual] = {};
        }
        estado.dadosObservacoes[estado.escolaAtual][estado.turmaAtual][window.alunoObsSelecionado] = obs;
        salvarDados();
        document.getElementById("modalObs").style.display = "none";
        mostrarToast("Observação salva!");
    }
}

function atualizarGraficoEvolucao() {
    const alunoSelect = document.getElementById("graficoAlunoSelect");
    if (!alunoSelect) return;
    const aluno = alunoSelect.value;
    if (!aluno) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value;
    const turma = getTurmaAtual();
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
        data: {
            labels: labels,
            datasets: [{
                label: 'Evolução das Notas',
                data: valores,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102,126,234,0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointRadius: 6,
                pointBackgroundColor: '#667eea'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: { y: { min: 0, max: 10, title: { display: true, text: 'Nota' } } },
            plugins: { tooltip: { callbacks: { label: (ctx) => `Nota: ${ctx.raw.toFixed(1)}` } } }
        }
    });
}

// ============================================================================
// INICIALIZAÇÃO DO SISTEMA
// ============================================================================

async function iniciarSistema(usuario) {
    console.log("Iniciando sistema para:", usuario.nome);
    estado.sessaoAtual = usuario;
    
    document.getElementById("sidebarUserName").textContent = usuario.nome;
    document.getElementById("sidebarUserType").textContent = usuario.tipo === "professor" ? "Professor" : "Coordenador";
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "flex";
    
    carregarDadosSalvos();
    carregarSidebar();
    
    let escolaInicial = "gentil";
    let turmaInicial = "1adm";
    if (usuario.escola === "eneas") {
        escolaInicial = "eneas";
        turmaInicial = "inf1";
    } else if (usuario.escola === "gentil") {
        escolaInicial = "gentil";
        turmaInicial = "1adm";
    }
    await trocarEscolaTurma(escolaInicial, turmaInicial);
    
    // Event listeners dos botões principais
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas")?.addEventListener("click", exportarNotas);
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca")?.addEventListener("click", () => { salvarDados(); mostrarToast("Presenças salvas!"); });
    document.getElementById("exportarPresenca")?.addEventListener("click", exportarPresenca);
    document.getElementById("adicionarVisto")?.addEventListener("click", () => {
        const turma = getTurmaAtual();
        if (turma && turma.alunos.length > 0) abrirModalVisto(turma.alunos[0]);
    });
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); mostrarToast("Vistos salvos!"); });
    document.getElementById("exportarVistos")?.addEventListener("click", exportarVistos);
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("exportarPDF")?.addEventListener("click", exportarBoletimPDF);
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
        document.getElementById("modalAluno").style.display = "flex";
    });
    document.getElementById("modalSalvarAluno")?.addEventListener("click", () => {
        const turmaSelect = document.getElementById("modalAlunoTurma");
        adicionarAluno(turmaSelect?.value || estado.turmaAtual, document.getElementById("modalAlunoNome").value, document.getElementById("modalAlunoNascimento").value);
        document.getElementById("modalAluno").style.display = "none";
        document.getElementById("modalAlunoNome").value = "";
    });
    document.getElementById("backupDadosBtn")?.addEventListener("click", backupDados);
    document.getElementById("restoreDadosBtn")?.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => { if (e.target.files[0]) restoreDados(e.target.files[0]); };
        input.click();
    });
    document.getElementById("backupIndexedDBBtn")?.addEventListener("click", fazerBackupIndexedDB);
    document.getElementById("restoreIndexedDBBtn")?.addEventListener("click", restaurarUltimoBackup);
    document.getElementById("gerarQRBtn")?.addEventListener("click", gerarQRCode);
    document.getElementById("copiarLinkBtn")?.addEventListener("click", copiarLink);
    document.querySelector(".modal-fechar-qr")?.addEventListener("click", () => {
        document.getElementById("modalQR").style.display = "none";
    });
    document.getElementById("configurarAlertas")?.addEventListener("click", configurarAlertas);
    document.getElementById("testarAlerta")?.addEventListener("click", testarAlerta);
    document.getElementById("graficoAlunoSelect")?.addEventListener("change", atualizarGraficoEvolucao);
    
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
    
    const toggleBtn = document.getElementById("toggleSidebar");
    if (toggleBtn) toggleBtn.onclick = () => document.getElementById("sidebar").classList.toggle("collapsed");
    const darkModeBtn = document.getElementById("toggleDarkMode");
    if (darkModeBtn) darkModeBtn.onclick = () => document.body.classList.toggle("dark-mode");
    
    iniciarHorarios();
    processarParametrosURL();
    
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
    
    document.querySelectorAll(".nav-item-aba").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".nav-item-aba").forEach(b => b.classList.remove("ativo"));
            btn.classList.add("ativo");
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            const abaId = `aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`;
            const abaElement = document.getElementById(abaId);
            if (abaElement) abaElement.classList.add("active");
            
            if (btn.dataset.aba === "relatorios") renderizarRelatorios();
            if (btn.dataset.aba === "ranking") renderizarRanking();
            if (btn.dataset.aba === "calendario") renderizarEventos();
            if (btn.dataset.aba === "horarios") renderizarHorarios();
        });
    });
    
    document.getElementById("disciplinaNotas")?.addEventListener("change", () => {
        renderizarNotas();
        renderizarRanking();
        atualizarEstatisticas();
    });
    document.getElementById("rankingDisciplina")?.addEventListener("change", renderizarRanking);
    document.getElementById("adminTurmaSelect")?.addEventListener("change", renderizarAdmin);
    
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
    
    document.querySelector(".nav-item-aba[data-aba='dashboard']")?.classList.add("ativo");
});
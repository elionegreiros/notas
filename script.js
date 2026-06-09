// ============================================
// USUÁRIOS AUTORIZADOS
// ============================================

const usuariosAutorizados = {
    "12345678900": { nome: "Prof. João Silva", senha: "123456", tipo: "professor" },
    "98765432100": { nome: "Profa. Maria Santos", senha: "123456", tipo: "professor" },
    "11122233344": { nome: "Prof. Carlos Lima", senha: "123456", tipo: "professor" },
    "55566677788": { nome: "Coord. Ana Paula", senha: "admin123", tipo: "coordenador" },
    "99988877766": { nome: "Administrador", senha: "admin123", tipo: "admin" }
};

// ============================================
// DADOS DOS ALUNOS (com aniversários)
// ============================================

const alunos1Adm = [
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

const alunos1Amb = [
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

const alunos2DS = [
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

const alunosInf1 = [
    { nome: "ALEXANDRE BARBOSA DA SILVA", nascimento: "2005-07-18" },
    { nome: "ANA MARIA DE JESUS OLIVEIRA", nascimento: "2006-03-23" },
    { nome: "ANTONIA GLENDA DA SILVA ALVES", nascimento: "2005-11-09" },
    { nome: "ANTONIO MAIK BEZERRA DOS SANTOS", nascimento: "2006-08-14" },
    { nome: "DAGMA MOREIRA LIMA FERNANDES", nascimento: "2005-04-27" },
    { nome: "DANIEL RODRIGUES XAVIER", nascimento: "2006-12-11" },
    { nome: "EMANUELLY DA SILVA ALVES", nascimento: "2005-01-31" },
    { nome: "FRANCIDALVA DE LIMA NOGUEIRA", nascimento: "2006-06-08" },
    { nome: "FRANCISCO EDSON DA SILVA CARNEIRO", nascimento: "2005-10-03" },
    { nome: "FRANCISCO VINICIUS SOARES MELO", nascimento: "2006-02-19" },
    { nome: "GEANE MARIA CARDOSO SOARES", nascimento: "2005-09-14" },
    { nome: "GEOVANA MARIA PEREIRA MARTINS", nascimento: "2006-05-29" },
    { nome: "KELIANY VIEIRA ANDRADE", nascimento: "2005-07-24" },
    { nome: "LUCIANO FRANCISCO DA SILVA", nascimento: "2006-11-02" },
    { nome: "LUZANIRA ARAUJO DE SOUSA", nascimento: "2005-03-20" },
    { nome: "MAICON RODRIGO BARROS SILVA", nascimento: "2006-08-07" },
    { nome: "MARIA BEATRIZ FERREIRA DA SILVA", nascimento: "2005-12-15" },
    { nome: "MARIA DA CRUZ FURTUNATA DA SILVA", nascimento: "2006-04-26" },
    { nome: "MARIA DE FATIMA OLIVEIRA", nascimento: "2005-06-12" },
    { nome: "MARIA ISABELLY RIBEIRO MARTINA", nascimento: "2006-10-29" },
    { nome: "MARIA ISLANIA DE SOUSA", nascimento: "2005-01-17" },
    { nome: "MARIA KARIELY DE MELO ANDRADE", nascimento: "2006-09-06" },
    { nome: "MARINA FERREIRA LEAL", nascimento: "2005-11-19" },
    { nome: "MARISANGELA VELOSO DA SILVA", nascimento: "2006-07-01" },
    { nome: "MAURO SILVA MARTINS DE SOUSA", nascimento: "2005-02-23" },
    { nome: "RITA FRALINA ROQUE DA SILVA", nascimento: "2006-12-20" },
    { nome: "SIDNEY SANTANA DA SILVA", nascimento: "2005-05-11" },
    { nome: "TALYSON SOUSA CARVALHO", nascimento: "2006-03-07" },
    { nome: "VENILSON GOMES DA SILVA", nascimento: "2005-08-25" },
    { nome: "VIVIANE DE SOUSA LOPES", nascimento: "2006-01-15" }
];

const alunosInf5 = [
    { nome: "AELTON MOTA DE SOUSA", nascimento: "2005-04-09" },
    { nome: "ANDRE DE CASTRO LIMA", nascimento: "2006-09-17" },
    { nome: "ANTONIA RODRIGUES MARTINS", nascimento: "2005-12-28" },
    { nome: "DAYANNY MARIA OLIVEIRA FREITAS", nascimento: "2006-02-05" },
    { nome: "DOUGLAS DE CARVALHO CARDOSO", nascimento: "2005-06-22" },
    { nome: "EDILENE CARVALHO DA SILVA", nascimento: "2006-10-10" },
    { nome: "HILTON FERNANDES DA SILVA", nascimento: "2005-07-19" },
    { nome: "KAIQUE JOSE LIMA LEITE", nascimento: "2006-03-31" }
];

// Converter para arrays de nomes simples para compatibilidade
const alunosPorTurmaRaw = {
    "1adm": alunos1Adm.map(a => a.nome),
    "1amb": alunos1Amb.map(a => a.nome),
    "2ds": alunos2DS.map(a => a.nome),
    "inf1": alunosInf1.map(a => a.nome),
    "inf5": alunosInf5.map(a => a.nome)
};

const alunosNascimentos = {
    "1adm": alunos1Adm,
    "1amb": alunos1Amb,
    "2ds": alunos2DS,
    "inf1": alunosInf1,
    "inf5": alunosInf5
};

const turmasConfig = {
    "1adm": { nome: "1º Administração", alunos: alunosPorTurmaRaw["1adm"], disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
    "1amb": { nome: "1º Controle Ambiental", alunos: alunosPorTurmaRaw["1amb"], disciplinas: ["Inteligência Artificial"], tipoAvaliacao: "trimestral" },
    "2ds": { nome: "2º Desenvolvimento de Sistemas", alunos: alunosPorTurmaRaw["2ds"], disciplinas: ["Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC", "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO", "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS", "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"], tipoAvaliacao: "trimestral" },
    "inf1": { nome: "Informática - Módulo I", alunos: alunosPorTurmaRaw["inf1"], disciplinas: ["Análise e Lógica de Programação"], tipoAvaliacao: "bimestral" },
    "inf5": { nome: "Informática - Módulo V", alunos: alunosPorTurmaRaw["inf5"], disciplinas: ["Empreendedorismo para TI"], tipoAvaliacao: "bimestral" }
};

// ============================================
// ESTADO GLOBAL
// ============================================

let turmaAtual = "1adm";
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};
let dadosObservacoes = {};
let dadosEventos = [];
let dadosAlunosCustom = {};
let graficoEvolucao = null;
let alunoSelecionadoVisto = null;
let sessaoAtual = null;

// ============================================
// FUNÇÕES DE AUTENTICAÇÃO
// ============================================

function fazerLogin(cpf, senha) {
    const cpfLimpo = cpf.replace(/[.\-]/g, '');
    const usuario = usuariosAutorizados[cpfLimpo];
    if (usuario && usuario.senha === senha) {
        const sessao = { cpf: cpfLimpo, nome: usuario.nome, tipo: usuario.tipo, loginTime: new Date().toISOString() };
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
        const loginTime = new Date(sessao.loginTime);
        const agora = new Date();
        const diffHoras = (agora - loginTime) / (1000 * 60 * 60);
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
}

// ============================================
// FUNÇÕES DE NOTIFICAÇÕES
// ============================================

function verificarNotificacoes() {
    const container = document.getElementById("notificacoesContainer");
    if (!container) return;
    container.innerHTML = "";
    
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();
    
    // Verificar aniversariantes
    const aniversariantes = [];
    const alunos = turmasConfig[turmaAtual].alunos;
    const nascimentos = alunosNascimentos[turmaAtual] || [];
    
    alunos.forEach((aluno, idx) => {
        const nasc = nascimentos.find(n => n.nome === aluno);
        if (nasc && nasc.nascimento) {
            const dataNasc = new Date(nasc.nascimento);
            if (dataNasc.getMonth() + 1 === mesAtual && dataNasc.getDate() === diaAtual) {
                aniversariantes.push(aluno);
            }
        }
    });
    
    if (aniversariantes.length > 0) {
        const notif = document.createElement("div");
        notif.className = "notificacao success";
        notif.innerHTML = `<i class="fas fa-birthday-cake"></i> 🎉 Hoje é aniversário de: ${aniversariantes.join(", ")}!`;
        container.appendChild(notif);
    }
    
    // Verificar alunos com frequência baixa
    let totalPresencas = 0, totalAulas = 0;
    const faltasPorAluno = {};
    
    for (let key in dadosPresenca[turmaAtual]) {
        if (Array.isArray(dadosPresenca[turmaAtual][key])) {
            dadosPresenca[turmaAtual][key].forEach(aula => {
                totalAulas++;
                alunos.forEach(aluno => {
                    if (aula.presencas && aula.presencas[aluno] === false) {
                        faltasPorAluno[aluno] = (faltasPorAluno[aluno] || 0) + 1;
                    }
                    if (aula.presencas && aula.presencas[aluno] === true) {
                        totalPresencas++;
                    }
                });
            });
        }
    }
    
    for (let aluno in faltasPorAluno) {
        const faltas = faltasPorAluno[aluno];
        if (faltas >= 5 && totalAulas > 0) {
            const frequencia = ((totalAulas - faltas) / totalAulas * 100).toFixed(1);
            if (frequencia < 75) {
                const notif = document.createElement("div");
                notif.className = "notificacao warning";
                notif.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ⚠️ Aluno ${aluno} está com frequência baixa (${frequencia}%)!`;
                container.appendChild(notif);
            }
        }
    }
}

// ============================================
// FUNÇÕES DE ADMIN E BACKUP
// ============================================

function sincronizarAlunosComListas() {
    for (let turmaId in turmasConfig) {
        turmasConfig[turmaId].alunos = dadosAlunosCustom[turmaId] || alunosPorTurmaRaw[turmaId];
    }
}

function salvarAlunosPersistencia() {
    const alunosData = {
        "1adm": turmasConfig["1adm"].alunos,
        "1amb": turmasConfig["1amb"].alunos,
        "2ds": turmasConfig["2ds"].alunos,
        "inf1": turmasConfig["inf1"].alunos,
        "inf5": turmasConfig["inf5"].alunos
    };
    localStorage.setItem("alunosPersonalizados", JSON.stringify(alunosData));
    localStorage.setItem("alunosNascimentos", JSON.stringify(dadosAlunosCustom));
}

function carregarAlunosPersistencia() {
    const saved = localStorage.getItem("alunosPersonalizados");
    if (saved) {
        try {
            const alunosData = JSON.parse(saved);
            for (let turmaId in alunosData) {
                if (turmasConfig[turmaId]) turmasConfig[turmaId].alunos = alunosData[turmaId];
            }
        } catch(e) {}
    }
    const savedNasc = localStorage.getItem("alunosNascimentos");
    if (savedNasc) {
        try {
            dadosAlunosCustom = JSON.parse(savedNasc);
        } catch(e) {}
    }
    sincronizarAlunosComListas();
}

function removerAluno(turmaId, alunoNome) {
    if (!confirm(`⚠️ Remover "${alunoNome}"? Todos os dados serão excluídos!`)) return;
    
    const index = turmasConfig[turmaId].alunos.indexOf(alunoNome);
    if (index !== -1) turmasConfig[turmaId].alunos.splice(index, 1);
    
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
    if (dadosObservacoes[turmaId]) delete dadosObservacoes[turmaId][alunoNome];
    
    salvarAlunosPersistencia();
    salvarDados();
    
    if (turmaAtual === turmaId) {
        renderizarNotas(); renderizarPresenca(); renderizarVistos(); renderizarRelatorios(); 
        atualizarDashboard(); renderizarRanking(); verificarNotificacoes();
    }
    renderizarAdmin();
    alert(`✅ "${alunoNome}" removido!`);
}

function adicionarAluno(turmaId, alunoNome, nascimento = "") {
    alunoNome = alunoNome.trim().toUpperCase();
    if (!alunoNome) { alert("Digite o nome!"); return false; }
    if (turmasConfig[turmaId].alunos.includes(alunoNome)) { alert("Aluno já cadastrado!"); return false; }
    
    turmasConfig[turmaId].alunos.push(alunoNome);
    turmasConfig[turmaId].alunos.sort();
    
    if (nascimento && !dadosAlunosCustom[turmaId]) dadosAlunosCustom[turmaId] = [];
    if (nascimento) dadosAlunosCustom[turmaId].push({ nome: alunoNome, nascimento: nascimento });
    
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
    
    salvarAlunosPersistencia();
    salvarDados();
    
    if (turmaAtual === turmaId) {
        renderizarNotas(); renderizarPresenca(); renderizarVistos(); renderizarRelatorios();
        atualizarDashboard(); verificarNotificacoes();
    }
    renderizarAdmin();
    alert(`✅ "${alunoNome}" adicionado!`);
    return true;
}

function backupDados() {
    const backup = {
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos,
        observacoes: dadosObservacoes,
        eventos: dadosEventos,
        alunos: {
            "1adm": turmasConfig["1adm"].alunos,
            "1amb": turmasConfig["1amb"].alunos,
            "2ds": turmasConfig["2ds"].alunos,
            "inf1": turmasConfig["inf1"].alunos,
            "inf5": turmasConfig["inf5"].alunos
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
    alert("✅ Backup realizado com sucesso!");
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
            if (backup.eventos) dadosEventos = backup.eventos;
            if (backup.alunos) {
                for (let turmaId in backup.alunos) {
                    if (turmasConfig[turmaId]) turmasConfig[turmaId].alunos = backup.alunos[turmaId];
                }
            }
            salvarDados();
            salvarAlunosPersistencia();
            renderizarNotas(); renderizarPresenca(); renderizarVistos(); 
            renderizarRelatorios(); renderizarEventos(); atualizarDashboard();
            alert("✅ Restore realizado com sucesso!");
        } catch(e) { alert("Erro ao restaurar backup!"); }
    };
    reader.readAsText(file);
}

// ============================================
// FUNÇÕES DE OBSERVAÇÕES
// ============================================

function salvarObservacao(turmaId, aluno, obs) {
    if (!dadosObservacoes[turmaId]) dadosObservacoes[turmaId] = {};
    dadosObservacoes[turmaId][aluno] = obs;
    salvarDados();
}

// ============================================
// FUNÇÕES DE EVENTOS
// ============================================

function renderizarEventos() {
    const container = document.getElementById("eventosContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (!dadosEventos || dadosEventos.length === 0) {
        container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhum evento cadastrado</div>';
        return;
    }
    
    const eventosOrdenados = [...dadosEventos].sort((a, b) => new Date(a.data) - new Date(b.data));
    
    eventosOrdenados.forEach((evento, idx) => {
        const data = new Date(evento.data);
        const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        const eventCard = document.createElement("div");
        eventCard.className = "evento-card";
        eventCard.innerHTML = `
            <div class="evento-data"><div class="dia">${data.getDate()}</div><div class="mes">${meses[data.getMonth()]}</div></div>
            <div class="evento-info"><h4>${evento.titulo}</h4><p>${evento.descricao || ""}</p></div>
            <button class="evento-remover" data-index="${idx}"><i class="fas fa-trash"></i></button>
        `;
        container.appendChild(eventCard);
        eventCard.querySelector(".evento-remover").onclick = () => {
            dadosEventos.splice(idx, 1);
            salvarDados();
            renderizarEventos();
        };
    });
}

function adicionarEvento(titulo, data, descricao) {
    if (!titulo || !data) { alert("Preencha título e data!"); return false; }
    dadosEventos.push({ titulo, data, descricao });
    salvarDados();
    renderizarEventos();
    alert("✅ Evento adicionado!");
    return true;
}

// ============================================
// FUNÇÕES DE RANKING
// ============================================

function renderizarRanking() {
    const disciplina = document.getElementById("rankingDisciplina")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    const container = document.getElementById("rankingContainer");
    if (!container) return;
    
    const rankings = [];
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        const vistos = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0;
        rankings.push({ aluno, media, vistos });
    });
    
    rankings.sort((a, b) => b.media - a.media);
    container.innerHTML = "";
    
    rankings.forEach((item, idx) => {
        let posClass = "";
        if (idx === 0) posClass = "gold";
        else if (idx === 1) posClass = "silver";
        else if (idx === 2) posClass = "bronze";
        
        const rankingItem = document.createElement("div");
        rankingItem.className = "ranking-item";
        rankingItem.innerHTML = `
            <div class="ranking-position ${posClass}">${idx + 1}</div>
            <div class="ranking-info"><h4>${item.aluno}</h4><p><i class="fas fa-star"></i> ${item.vistos} vistos</p></div>
            <div class="ranking-nota"><div class="nota">${item.media.toFixed(1)}</div><div class="label">Média</div></div>
        `;
        container.appendChild(rankingItem);
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
        if (!dadosObservacoes[turmaId]) dadosObservacoes[turmaId] = {};
        
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
    if (!dadosEventos) dadosEventos = [];
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
            dadosObservacoes = data.observacoes || {};
            dadosEventos = data.eventos || [];
        } catch(e) {}
    }
    inicializarEstruturas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("sistemaAcademico", JSON.stringify({
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos,
        observacoes: dadosObservacoes,
        eventos: dadosEventos
    }));
}

function atualizarDashboard() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    
    let aprovados = 0, recuperacao = 0, reprovados = 0;
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
    });
    
    document.getElementById("statAlunos").textContent = alunos.length;
    document.getElementById("statAprovados").textContent = aprovados;
    document.getElementById("statRecuperacao").textContent = recuperacao;
    document.getElementById("statReprovados").textContent = reprovados;
    
    // Aniversariantes do mês
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    let anivCount = 0;
    const nascimentos = alunosNascimentos[turmaAtual] || [];
    alunos.forEach(aluno => {
        const nasc = nascimentos.find(n => n.nome === aluno);
        if (nasc && nasc.nascimento) {
            const dataNasc = new Date(nasc.nascimento);
            if (dataNasc.getMonth() + 1 === mesAtual) anivCount++;
        }
    });
    document.getElementById("statAniversariantes").textContent = anivCount;
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
        if (media >= 7) { status = "<i class='fas fa-check-circle'></i> Aprovado"; statusClass = "status-aprovado"; }
        else if (media >= 5) { status = "<i class='fas fa-exclamation-triangle'></i> Recuperação"; statusClass = "status-recuperacao"; }
        else { status = "<i class='fas fa-times-circle'></i> Reprovado"; statusClass = "status-reprovado"; }
        
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${aluno}</strong>`;
        
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
            row.insertCell(4).innerHTML = `<strong>${media.toFixed(1)}</strong>`;
            row.insertCell(5).innerHTML = `<span class="${statusClass}">${status}</span>`;
        } else {
            row.insertCell(3).innerHTML = `<strong>${media.toFixed(1)}</strong>`;
            row.insertCell(4).innerHTML = `<span class="${statusClass}">${status}</span>`;
        }
        
        // Botão de observações
        const obsCell = row.insertCell(tipo === "trimestral" ? 6 : 5);
        const obsBtn = document.createElement("button");
        obsBtn.innerHTML = '<i class="fas fa-comment"></i>';
        obsBtn.className = "btn-secondary";
        obsBtn.style.padding = "5px 10px";
        obsBtn.onclick = () => abrirModalObservacao(aluno);
        obsCell.appendChild(obsBtn);
    });
    atualizarDashboard();
    atualizarGraficoEvolucao();
}

function abrirModalObservacao(aluno) {
    const obs = dadosObservacoes[turmaAtual]?.[aluno] || "";
    document.getElementById("modalObsTexto").value = obs;
    document.getElementById("modalObs").style.display = "flex";
    window.alunoObsSelecionado = aluno;
}

function salvarObservacaoModal() {
    const obs = document.getElementById("modalObsTexto").value;
    if (window.alunoObsSelecionado) {
        salvarObservacao(turmaAtual, window.alunoObsSelecionado, obs);
        document.getElementById("modalObs").style.display = "none";
        alert("✅ Observação salva!");
    }
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
    renderizarRelatorios();
    renderizarRanking();
    alert("✅ Notas salvas com sucesso!");
}

function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = dadosPresenca[turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";
    if (aulas.length === 0) { container.innerHTML = '<div class="lista-vazia"><i class="fas fa-calendar"></i> Nenhuma aula registrada.</div>'; return; }
    
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        let presencasHtml = "";
        turmasConfig[turmaAtual].alunos.forEach(aluno => {
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
                if (!dadosPresenca[turmaAtual][key][idx].presencas) dadosPresenca[turmaAtual][key][idx].presencas = {};
                dadosPresenca[turmaAtual][key][idx].presencas[aluno] = e.target.checked;
                salvarDados();
                verificarNotificacoes();
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
        verificarNotificacoes();
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
    alunoSelecionadoVisto = aluno;
    document.getElementById("modalDescVisto").value = "";
    document.getElementById("modalVisto").style.display = "flex";
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
    renderizarRanking();
    fecharModalVisto();
    alert(`✅ Visto concedido para ${alunoSelecionadoVisto}!`);
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
    document.getElementById("resumoNotas").innerHTML = `
        <ul><li><i class="fas fa-chart-line"></i> Média Geral: <strong>${mediaGeral}</strong></li>
        <li><i class="fas fa-check-circle" style="color:#22c55e"></i> Aprovados: <strong>${aprovados}</strong></li>
        <li><i class="fas fa-exclamation-triangle" style="color:#f97316"></i> Recuperação: <strong>${recuperacao}</strong></li>
        <li><i class="fas fa-times-circle" style="color:#ef4444"></i> Reprovados: <strong>${reprovados}</strong></li></ul>
    `;
    
    let totalPresencas = 0, totalAulas = 0;
    for (let key in dadosPresenca[turmaAtual]) {
        if (Array.isArray(dadosPresenca[turmaAtual][key])) {
            dadosPresenca[turmaAtual][key].forEach(aula => { totalAulas++; totalPresencas += Object.values(aula.presencas || {}).filter(v => v === true).length; });
        }
    }
    const frequenciaMedia = totalAulas ? ((totalPresencas / (totalAulas * alunos.length)) * 100).toFixed(1) : 0;
    document.getElementById("resumoFrequencia").innerHTML = `<ul><li><i class="fas fa-calendar-alt"></i> Total Aulas: ${totalAulas}</li><li><i class="fas fa-chart-line"></i> Frequência: ${frequenciaMedia}%</li></ul>`;
    
    const destaques = []; alunos.forEach(aluno => { const v = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0; if (v >= 3) destaques.push({ aluno, vistos: v }); });
    destaques.sort((a,b) => b.vistos - a.vistos);
    document.getElementById("alunosDestaque").innerHTML = destaques.length ? `<ul>${destaques.slice(0,5).map(d => `<li><i class="fas fa-trophy" style="color:#f59e0b"></i> ${d.aluno} - ${d.vistos} vistos</li>`).join('')}</ul>` : "<p><i class='fas fa-info-circle'></i> Nenhum aluno com destaque</p>";
    
    const recuperacaoList = [];
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0, nm2 = parseFloat(notas.nm2) || 0, nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        let media = tipo === "trimestral" ? (nm1 + nm2 + nm3) / 3 : (nm1 + nm2) / 2;
        if (media >= 5 && media < 7) recuperacaoList.push({ aluno, media });
    });
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ? `<ul>${recuperacaoList.map(r => `<li><i class="fas fa-book-open" style="color:#f97316"></i> ${r.aluno} - Média: ${r.media.toFixed(1)}</li>`).join('')}</ul>` : "<p><i class='fas fa-check-circle'></i> Nenhum aluno em recuperação</p>";
}

function atualizarGraficoEvolucao() {
    const alunoSelect = document.getElementById("graficoAlunoSelect");
    if (!alunoSelect) return;
    const aluno = alunoSelect.value;
    if (!aluno) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
    
    let labels = [];
    let valores = [];
    
    if (tipo === "trimestral") {
        labels = ["NM1 - 1º Trimestre", "NM2 - 2º Trimestre", "NM3 - 3º Trimestre"];
        valores = [parseFloat(notas.nm1) || 0, parseFloat(notas.nm2) || 0, parseFloat(notas.nm3) || 0];
    } else {
        labels = ["NM1 - 1º Bimestre", "NM2 - 2º Bimestre"];
        valores = [parseFloat(notas.nm1) || 0, parseFloat(notas.nm2) || 0];
    }
    
    const ctx = document.getElementById("graficoEvolucao").getContext("2d");
    if (graficoEvolucao) graficoEvolucao.destroy();
    
    graficoEvolucao = new Chart(ctx, {
        type: 'line',
        data: { labels: labels, datasets: [{ label: 'Evolução das Notas', data: valores, borderColor: '#667eea', backgroundColor: 'rgba(102,126,234,0.1)', borderWidth: 3, fill: true, tension: 0.3, pointRadius: 6, pointBackgroundColor: '#667eea' }] },
        options: { responsive: true, maintainAspectRatio: true, scales: { y: { min: 0, max: 10, title: { display: true, text: 'Nota' } }, x: { title: { display: true, text: 'Avaliações' } } }, plugins: { tooltip: { callbacks: { label: (ctx) => `Nota: ${ctx.raw.toFixed(1)}` } } } }
    });
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
        let obs = dadosObservacoes[turmaAtual]?.[aluno] || "";
        let presencas = 0, aulas = 0;
        for (let key in dadosPresenca[turmaAtual]) {
            if (Array.isArray(dadosPresenca[turmaAtual][key])) {
                dadosPresenca[turmaAtual][key].forEach(aula => { aulas++; if (aula.presencas && aula.presencas[aluno]) presencas++; });
            }
        }
        let freq = aulas ? ((presencas / aulas) * 100).toFixed(1) : "0";
        let row = { Aluno: aluno, NM1: nm1, NM2: nm2, "Média": media.toFixed(1), Status: status, Frequência: `${freq}%`, Vistos: vistos, Observações: obs };
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
    if (tipo === "trimestral") thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>NM3</th><th>Média</th><th>Status</th><th>Obs</th>`;
    else thead.innerHTML = `<th>Aluno</th><th>NM1</th><th>NM2</th><th>Média</th><th>Status</th><th>Obs</th>`;
}

function trocarTurma(turmaId) {
    turmaAtual = turmaId;
    document.querySelectorAll(".nav-item[data-turma]").forEach(btn => btn.classList.toggle("ativo", btn.dataset.turma === turmaId));
    document.getElementById("pageTitle").textContent = turmasConfig[turmaId].nome;
    document.getElementById("pageSubtitle").textContent = turmasConfig[turmaId].tipoAvaliacao === "trimestral" ? "Avaliação Trimestral (NM1, NM2, NM3)" : "Avaliação Bimestral (NM1, NM2)";
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turmasConfig[turmaId].disciplinas.forEach(d => { const option = document.createElement("option"); option.value = d; option.textContent = d; selectDisciplina.appendChild(option); });
    }
    
    const rankingDisciplina = document.getElementById("rankingDisciplina");
    if (rankingDisciplina) {
        rankingDisciplina.innerHTML = "";
        turmasConfig[turmaId].disciplinas.forEach(d => { const option = document.createElement("option"); option.value = d; option.textContent = d; rankingDisciplina.appendChild(option); });
    }
    
    const graficoSelect = document.getElementById("graficoAlunoSelect");
    if (graficoSelect) {
        graficoSelect.innerHTML = '<option value="">Selecione um aluno</option>';
        turmasConfig[turmaId].alunos.forEach(aluno => { const option = document.createElement("option"); option.value = aluno; option.textContent = aluno; graficoSelect.appendChild(option); });
    }
    
    atualizarCabecalhoNotas();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
    renderizarRanking();
    renderizarEventos();
    atualizarDashboard();
    verificarNotificacoes();
}

function renderizarAdmin() {
    const turmaAdmin = document.getElementById("adminTurmaSelect")?.value || "1adm";
    const alunos = turmasConfig[turmaAdmin].alunos;
    const tbody = document.getElementById("tbodyAdmin");
    if (!tbody) return;
    tbody.innerHTML = "";
    alunos.forEach((aluno, idx) => {
        const obs = dadosObservacoes[turmaAdmin]?.[aluno] || "";
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

function iniciarSistema(usuario) {
    sessaoAtual = usuario;
    document.getElementById("sidebarUserName").textContent = usuario.nome;
    document.getElementById("sidebarUserType").textContent = usuario.tipo === "professor" ? "Professor" : (usuario.tipo === "coordenador" ? "Coordenador" : "Administrador");
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "flex";
    carregarDadosSalvos();
    trocarTurma("1adm");
    
    const toggleBtn = document.getElementById("toggleSidebar");
    if (toggleBtn) toggleBtn.onclick = () => document.getElementById("sidebar").classList.toggle("collapsed");
    
    const darkModeBtn = document.getElementById("toggleDarkMode");
    if (darkModeBtn) darkModeBtn.onclick = () => document.body.classList.toggle("dark-mode");
}

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
// HORÁRIOS E ALERTAS
// ============================================

const horarios = {
    segunda: {
        "1adm": [],
        "1amb": [],
        "2ds": [
            { hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" },
            { hora: "08:30", disciplina: "PROG. ORIENTADA A OBJETOS" },
            { hora: "12:50", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" },
            { hora: "13:50", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" }
        ]
    },
    terca: {
        "1adm": [],
        "1amb": [],
        "2ds": [
            { hora: "12:50", disciplina: "FUNDAMENTOS DE UI/UX" },
            { hora: "13:50", disciplina: "MENTORIA TEC" },
            { hora: "15:10", disciplina: "INTELIGÊNCIA ARTIFICIAL" },
            { hora: "16:10", disciplina: "INTELIGÊNCIA ARTIFICIAL" }
        ]
    },
    quarta: {
        "1adm": [],
        "1amb": [
            { hora: "08:30", disciplina: "INTELIGÊNCIA ARTIFICIAL" },
            { hora: "09:30", disciplina: "INTELIGÊNCIA ARTIFICIAL" }
        ],
        "2ds": [
            { hora: "15:10", disciplina: "FRONT-END" },
            { hora: "16:10", disciplina: "PROGRAMAÇÃO ESTRUTURADA" }
        ]
    },
    quinta: {
        "1adm": [],
        "1amb": [],
        "2ds": [
            { hora: "07:30", disciplina: "PROG. ORIENTADA A OBJETOS" },
            { hora: "08:30", disciplina: "PROG. ORIENTADA A OBJETOS" },
            { hora: "12:50", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" },
            { hora: "13:50", disciplina: "PROG. P/ DISPOSITIVOS MÓVEIS" }
        ]
    },
    sexta: {
        "1adm": [],
        "1amb": [
            { hora: "10:50", disciplina: "INTELIGÊNCIA ARTIFICIAL" },
            { hora: "11:50", disciplina: "INTELIGÊNCIA ARTIFICIAL" }
        ],
        "2ds": [
            { hora: "12:50", disciplina: "FUNDAMENTOS DE UI/UX" },
            { hora: "16:10", disciplina: "PENSAMENTO COMPUTACIONAL" }
        ]
    }
};

const turmaHorariosMap = {
    "1adm": "1º ADM",
    "1amb": "1º CONT. AMB",
    "2ds": "2º SISTEMAS"
};

let configAlertas = {
    notificar: true,
    minutosAntecedencia: 15,
    som: true
};

function carregarConfigAlertas() {
    const saved = localStorage.getItem("configAlertas");
    if (saved) {
        try {
            configAlertas = JSON.parse(saved);
        } catch(e) {}
    }
}

function salvarConfigAlertas() {
    localStorage.setItem("configAlertas", JSON.stringify(configAlertas));
}

function verificarAlertasHorarios() {
    if (!configAlertas.notificar) return;
    
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();
    const horaMinuto = `${horaAtual.toString().padStart(2,'0')}:${minutoAtual.toString().padStart(2,'0')}`;
    
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const diaSemana = dias[agora.getDay()];
    
    if (diaSemana === "domingo" || diaSemana === "sabado") return;
    
    const aulasHoje = horarios[diaSemana];
    if (!aulasHoje) return;
    
    // Verificar aulas para cada turma
    for (let turmaId of ["1adm", "1amb", "2ds"]) {
        const aulasTurma = aulasHoje[turmaId] || [];
        for (let aula of aulasTurma) {
            const [aulaHora, aulaMinuto] = aula.hora.split(":").map(Number);
            const minutosAteAula = (aulaHora * 60 + aulaMinuto) - (horaAtual * 60 + minutoAtual);
            
            if (minutosAteAula === configAlertas.minutosAntecedencia || 
                (minutosAteAula > 0 && minutosAteAula <= configAlertas.minutosAntecedencia && minutosAteAula > 0)) {
                mostrarAlerta(turmaId, aula.disciplina, aula.hora);
            }
        }
    }
}

function mostrarAlerta(turmaId, disciplina, hora) {
    const turmaNome = turmasConfig[turmaId]?.nome || turmaId;
    
    // Verificar se já notificou esta aula
    const chaveNotificacao = `${turmaId}_${disciplina}_${hora}_${new Date().toDateString()}`;
    if (localStorage.getItem(chaveNotificacao)) return;
    localStorage.setItem(chaveNotificacao, "true");
    setTimeout(() => localStorage.removeItem(chaveNotificacao), 60000);
    
    const alertaDiv = document.createElement("div");
    alertaDiv.className = "alerta-teste";
    alertaDiv.innerHTML = `
        <i class="fas fa-bell"></i>
        <div>
            <strong>📚 Próxima Aula!</strong><br>
            ${turmaNome}<br>
            ${disciplina} às ${hora}
        </div>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:white;cursor:pointer;">✕</button>
    `;
    document.body.appendChild(alertaDiv);
    
    if (configAlertas.som) {
        const audio = new Audio('data:audio/wav;base64,U3RlYWx0aCBzb3VuZA==');
        audio.play().catch(e => console.log("Áudio não suportado"));
    }
    
    setTimeout(() => alertaDiv.remove(), 30000);
    
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Próxima Aula", { body: `${turmaNome}: ${disciplina} às ${hora}`, icon: "https://via.placeholder.com/64" });
    } else if ("Notification" in window && Notification.permission !== "denied") {
        Notification.requestPermission();
    }
}

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
    
    const horariosFixos = ["07:30", "08:30", "09:50", "10:50", "11:50", "12:50", "13:50", "15:10", "16:10"];
    const intervalos = ["09:30-09:50", "12:50-13:50", "14:50-15:10"];
    
    let html = `<table class="tabela-horarios"><thead><tr><th>Horário</th><th>1º Administração</th><th>1º Controle Ambiental</th><th>2º Desenvolvimento</th></tr></thead><tbody>`;
    
    for (let i = 0; i < horariosFixos.length; i++) {
        const hora = horariosFixos[i];
        const horaAnterior = i > 0 ? horariosFixos[i-1] : null;
        let isIntervalo = false;
        
        if (hora === "09:50" && horaAnterior === "08:30") isIntervalo = true;
        if (hora === "12:50" && horaAnterior === "11:50") isIntervalo = true;
        if (hora === "15:10" && horaAnterior === "13:50") isIntervalo = true;
        
        html += `<tr>`;
        html += `<td class="hora-col">${hora}</td>`;
        
        for (let turmaId of ["1adm", "1amb", "2ds"]) {
            const aula = aulasDia[turmaId]?.find(a => a.hora === hora);
            let conteudo = "—";
            let classe = "";
            
            if (aula) {
                conteudo = `<strong>${aula.disciplina}</strong>`;
                classe = "aula-atual";
                
                const agora = new Date();
                const [h, m] = hora.split(":");
                const horaAula = new Date();
                horaAula.setHours(parseInt(h), parseInt(m), 0);
                const diffMin = (horaAula - agora) / 1000 / 60;
                
                if (diffMin > 0 && diffMin <= 30) classe = "aula-em-breve";
            }
            
            html += `<td class="${classe}">${conteudo}</td>`;
        }
        html += `</tr>`;
        
        if (isIntervalo) {
            html += `<tr style="background:#fef3c7;"><td class="hora-col">☕ INTERVALO</td><td colspan="3">🥪 Intervalo - Recreio</td></tr>`;
        }
    }
    
    html += `</tbody></table>`;
    document.getElementById("gradeHorarios").innerHTML = html;
    
    // Próximas aulas
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();
    const horaMinutoAtual = horaAtual * 60 + minutoAtual;
    
    const todasAulas = [];
    for (let turmaId of ["1adm", "1amb", "2ds"]) {
        const aulasTurma = aulasDia[turmaId] || [];
        for (let aula of aulasTurma) {
            const [h, m] = aula.hora.split(":").map(Number);
            const horaMinutoAula = h * 60 + m;
            if (horaMinutoAula > horaMinutoAtual) {
                todasAulas.push({ turmaId, turmaNome: turmasConfig[turmaId].nome, ...aula, minutosRestantes: horaMinutoAula - horaMinutoAtual });
            }
        }
    }
    
    todasAulas.sort((a, b) => a.minutosRestantes - b.minutosRestantes);
    
    const proximasHtml = todasAulas.slice(0, 5).map(aula => `
        <div class="proxima-aula-item">
            <div class="proxima-aula-hora">${aula.hora}</div>
            <div class="proxima-aula-info">
                <strong>${aula.disciplina}</strong>
                <small>${aula.turmaNome}</small>
            </div>
            <div class="proxima-aula-tempo">em ${aula.minutosRestantes} min</div>
        </div>
    `).join("");
    
    document.getElementById("proximasAulas").innerHTML = proximasHtml || '<div class="lista-vazia">Nenhuma aula programada para hoje</div>';
    
    // Alertas do dia
    const alertasHtml = todasAulas.slice(0, 3).map(aula => `
        <div class="alerta-card">
            <i class="fas fa-bell"></i>
            <div class="alerta-info">
                <h4>${aula.disciplina}</h4>
                <p>${aula.turmaNome} - ${aula.hora}</p>
            </div>
            <div class="alerta-tempo">em ${aula.minutosRestantes} min</div>
        </div>
    `).join("");
    
    document.getElementById("alertasHoje").innerHTML = `
        <div style="margin-bottom: 10px;"><i class="fas fa-bell"></i> 📢 Alertas de Hoje</div>
        ${alertasHtml || '<div class="alerta-card"><i class="fas fa-check-circle"></i><div class="alerta-info"><h4>Todas as aulas já passaram</h4><p>Nenhuma aula pendente para hoje</p></div></div>'}
    `;
}

function configurarAlertasModal() {
    const modalHtml = `
        <div id="modalConfigAlertas" class="modal-profissional" style="display:flex">
            <div class="modal-content modal-alertas">
                <div class="modal-header">
                    <h3><i class="fas fa-bell"></i> Configurar Alertas</h3>
                    <button class="modal-fechar-config">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="config-alerta-item">
                        <label><i class="fas fa-toggle-on"></i> Notificações</label>
                        <input type="checkbox" id="configNotificar" ${configAlertas.notificar ? 'checked' : ''}>
                    </div>
                    <div class="config-alerta-item">
                        <label><i class="fas fa-clock"></i> Antecedência</label>
                        <select id="configMinutos">
                            <option value="5" ${configAlertas.minutosAntecedencia === 5 ? 'selected' : ''}>5 minutos</option>
                            <option value="10" ${configAlertas.minutosAntecedencia === 10 ? 'selected' : ''}>10 minutos</option>
                            <option value="15" ${configAlertas.minutosAntecedencia === 15 ? 'selected' : ''}>15 minutos</option>
                            <option value="30" ${configAlertas.minutosAntecedencia === 30 ? 'selected' : ''}>30 minutos</option>
                            <option value="60" ${configAlertas.minutosAntecedencia === 60 ? 'selected' : ''}>1 hora</option>
                        </select>
                    </div>
                    <div class="config-alerta-item">
                        <label><i class="fas fa-volume-up"></i> Som de Alerta</label>
                        <input type="checkbox" id="configSom" ${configAlertas.som ? 'checked' : ''}>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="salvarConfigAlertas" class="btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    document.querySelector(".modal-fechar-config").onclick = () => document.getElementById("modalConfigAlertas")?.remove();
    document.getElementById("salvarConfigAlertas").onclick = () => {
        configAlertas.notificar = document.getElementById("configNotificar").checked;
        configAlertas.minutosAntecedencia = parseInt(document.getElementById("configMinutos").value);
        configAlertas.som = document.getElementById("configSom").checked;
        salvarConfigAlertas();
        document.getElementById("modalConfigAlertas")?.remove();
        alert("✅ Configurações salvas!");
    };
}

function testarAlerta() {
    const alertaDiv = document.createElement("div");
    alertaDiv.className = "alerta-teste";
    alertaDiv.innerHTML = `
        <i class="fas fa-bell"></i>
        <div>
            <strong>🔔 Teste de Alerta</strong><br>
            Você receberá notificações ${configAlertas.minutosAntecedencia} minutos antes de cada aula!
        </div>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:white;cursor:pointer;">✕</button>
    `;
    document.body.appendChild(alertaDiv);
    setTimeout(() => alertaDiv.remove(), 5000);
    
    if (configAlertas.som) {
        const audio = new Audio('data:audio/wav;base64,U3RlYWx0aCBzb3VuZA==');
        audio.play().catch(e => console.log("Áudio não suportado"));
    }
}

// Inicializar horários
function iniciarHorarios() {
    carregarConfigAlertas();
    
    document.querySelectorAll(".dia-btn").forEach(btn => {
        btn.addEventListener("click", () => renderizarHorarios(btn.dataset.dia));
    });
    
    document.getElementById("configurarAlertas")?.addEventListener("click", configurarAlertasModal);
    document.getElementById("testarAlerta")?.addEventListener("click", testarAlerta);
    
    renderizarHorarios();
    
    // Verificar alertas a cada minuto
    setInterval(verificarAlertasHorarios, 60000);
    verificarAlertasHorarios();
    
    // Solicitar permissão para notificações
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
}
// ============================================
// FUNÇÃO QUE INICIA O SISTEMA APÓS LOGIN
// ============================================

function iniciarSistema(usuario) {
    sessaoAtual = usuario;
    document.getElementById("sidebarUserName").textContent = usuario.nome;
    document.getElementById("sidebarUserType").textContent = usuario.tipo === "professor" ? "Professor" : (usuario.tipo === "coordenador" ? "Coordenador" : "Administrador");
    document.getElementById("usuarioLogado").textContent = usuario.nome;
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudoPrincipal").style.display = "flex";
    carregarDadosSalvos();
    trocarTurma("1adm");
    
    const toggleBtn = document.getElementById("toggleSidebar");
    if (toggleBtn) toggleBtn.onclick = () => document.getElementById("sidebar").classList.toggle("collapsed");
    
    const darkModeBtn = document.getElementById("toggleDarkMode");
    if (darkModeBtn) darkModeBtn.onclick = () => document.body.classList.toggle("dark-mode");
    
    // INICIAR HORÁRIOS E ALERTAS
    iniciarHorarios();
}

// ============================================
// INICIALIZAÇÃO DO DOM
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const sessao = verificarSessao();
    if (sessao) {
        iniciarSistema(sessao);
    } else {
        document.getElementById("telaLogin").style.display = "flex";
        document.getElementById("conteudoPrincipal").style.display = "none";
    }
    
    // Eventos de login
    document.getElementById("loginCpf")?.addEventListener("input", () => formatarCPF(document.getElementById("loginCpf")));
    document.getElementById("btnLogin")?.addEventListener("click", () => {
        const resultado = fazerLogin(document.getElementById("loginCpf").value, document.getElementById("loginSenha").value);
        if (resultado.sucesso) {
            iniciarSistema(resultado.usuario);
        } else {
            document.getElementById("loginError").textContent = resultado.erro;
        }
    });
    document.getElementById("loginSenha")?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("btnLogin").click();
    });
    document.getElementById("btnLogoutSidebar")?.addEventListener("click", fazerLogout);
    
    // Navegação do sidebar
    document.querySelectorAll(".nav-item[data-turma]").forEach(btn => {
        btn.addEventListener("click", () => trocarTurma(btn.dataset.turma));
    });
    
    document.querySelectorAll(".nav-item-aba").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".nav-item-aba").forEach(b => b.classList.remove("ativo"));
            btn.classList.add("ativo");
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            document.getElementById(`aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`)?.classList.add("active");
            if (btn.dataset.aba === "relatorios") renderizarRelatorios();
            if (btn.dataset.aba === "ranking") renderizarRanking();
            if (btn.dataset.aba === "calendario") renderizarEventos();
            if (btn.dataset.aba === "admin") { renderizarAdmin(); document.getElementById("adminTurmaSelect").value = turmaAtual; }
        });
    });
    
    // Eventos dos botões principais
    document.getElementById("disciplinaNotas")?.addEventListener("change", () => { renderizarNotas(); renderizarRanking(); });
    document.getElementById("rankingDisciplina")?.addEventListener("change", renderizarRanking);
    document.getElementById("graficoAlunoSelect")?.addEventListener("change", atualizarGraficoEvolucao);
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
    document.getElementById("salvarPresenca")?.addEventListener("click", () => { salvarDados(); alert("✅ Presenças salvas!"); verificarNotificacoes(); });
    document.getElementById("exportarPresenca")?.addEventListener("click", renderizarPresenca);
    document.getElementById("adicionarVisto")?.addEventListener("click", () => { if (turmasConfig[turmaAtual].alunos.length > 0) abrirModalVisto(turmasConfig[turmaAtual].alunos[0]); });
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); alert("✅ Vistos salvos!"); });
    document.getElementById("exportarVistos")?.addEventListener("click", renderizarVistos);
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto);
    
    // Eventos de admin
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
    
    // Eventos de eventos
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
    document.getElementById("modalSalvarAluno")?.addEventListener("click", () => {
        adicionarAluno(document.getElementById("modalAlunoTurma").value, document.getElementById("modalAlunoNome").value, document.getElementById("modalAlunoNascimento").value);
        document.getElementById("modalAluno").style.display = "none";
    });
    document.getElementById("modalSalvarVisto")?.addEventListener("click", salvarVisto);
    document.getElementById("modalSalvarObs")?.addEventListener("click", salvarObservacaoModal);
    
    // Filtros
    document.getElementById("mesPresenca")?.addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca")?.addEventListener("change", renderizarPresenca);
    
    // Clique fora do modal
    window.onclick = (event) => {
        if (event.target.classList.contains("modal-profissional")) {
            document.getElementById("modalAluno").style.display = "none";
            document.getElementById("modalVisto").style.display = "none";
            document.getElementById("modalEvento").style.display = "none";
            document.getElementById("modalObs").style.display = "none";
        }
    };
    
    // Pesquisa global
    document.getElementById("globalSearch")?.addEventListener("input", (e) => {
        const termo = e.target.value.toLowerCase();
        const alunos = turmasConfig[turmaAtual].alunos;
        const filtrados = alunos.filter(a => a.toLowerCase().includes(termo));
        if (termo.length > 0 && filtrados.length > 0) {
            const notif = document.createElement("div");
            notif.className = "notificacao";
            notif.innerHTML = `<i class="fas fa-search"></i> 🔍 Encontrados ${filtrados.length} alunos: ${filtrados.slice(0, 5).join(", ")}${filtrados.length > 5 ? "..." : ""}`;
            document.getElementById("notificacoesContainer")?.prepend(notif);
            setTimeout(() => notif.remove(), 5000);
        }
    });
    
    document.querySelector(".nav-item-aba[data-aba='notas']")?.classList.add("ativo");
});
// Dados dos alunos EMBUTIDOS (para funcionar no GitHub Pages)
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
    "DEISE MARTINS LIMA", "ELICKY SOARES LOIOLA", "FRANCISCO DAVID ROQUE DA SILVA",
    "GABRIELLY BRITO PEDROSA", "GEOVANNA ANTONELE RIBEIRO DE SOUSA", "JANICE VIANA DE SOUSA",
    "LARA MAYSA VITURIANO DE CARVALHO", "LUIS DAVY DA SILVA RULIM", "LUIS GUSTAVO GOMES DE MELO",
    "MAYSA ALVES SILVA", "SARA OLIVEIRA CRIZANTINO", "STEICIE DA SILVA LIMA"
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

// Configuração das turmas (COM ALUNOS EMBUTIDOS)
const turmasConfig = {
    "1adm": { 
        nome: "1º Administração", 
        alunos: alunos1Adm,
        disciplinas: ["Inteligência Artificial"]
    },
    "1amb": { 
        nome: "1º Controle Ambiental", 
        alunos: alunos1Amb,
        disciplinas: ["Inteligência Artificial"]
    },
    "2ds": { 
        nome: "2º Desenvolvimento de Sistemas", 
        alunos: alunos2DS,
        disciplinas: [
            "Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC",
            "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO",
            "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS",
            "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"
        ]
    },
    "inf1": { 
        nome: "Informática - Módulo I", 
        alunos: alunosInf1,
        disciplinas: ["Análise e Lógica de Programação"]
    },
    "inf5": { 
        nome: "Informática - Módulo V", 
        alunos: alunosInf5,
        disciplinas: ["Empreendedorismo para TI"]
    }
};

// Estado global
let turmaAtual = "1adm";
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};
let dadosComentarios = {};
let dadosArquivos = {};
let limiteFaltasPercentual = 25;

// Carregar dados do localStorage
function carregarDadosSalvos() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            dadosNotas = data.notas || {};
            dadosPresenca = data.presenca || {};
            dadosVistos = data.vistos || {};
            dadosComentarios = data.comentarios || {};
            dadosArquivos = data.arquivos || {};
        } catch (e) {
            console.error("Erro ao carregar dados salvos:", e);
        }
    }
    
    // Inicializar estruturas
    for (let turmaId in turmasConfig) {
        if (!dadosNotas[turmaId]) dadosNotas[turmaId] = {};
        if (!dadosPresenca[turmaId]) dadosPresenca[turmaId] = {};
        if (!dadosVistos[turmaId]) dadosVistos[turmaId] = {};
        if (!dadosComentarios[turmaId]) dadosComentarios[turmaId] = {};
        if (!dadosArquivos[turmaId]) dadosArquivos[turmaId] = {};
        
        const turma = turmasConfig[turmaId];
        const alunos = turma.alunos;
        const disciplinas = turma.disciplinas;
        
        if (alunos && alunos.length > 0) {
            disciplinas.forEach(disciplina => {
                if (!dadosNotas[turmaId][disciplina]) {
                    dadosNotas[turmaId][disciplina] = {};
                    alunos.forEach(aluno => {
                        dadosNotas[turmaId][disciplina][aluno] = { nm1: "", nm2: "", nm3: "", exame: "" };
                    });
                }
            });
            
            if (!dadosVistos[turmaId].alunos) {
                dadosVistos[turmaId].alunos = {};
                alunos.forEach(aluno => {
                    dadosVistos[turmaId].alunos[aluno] = { 
                        total: 0, advertencias: 0, suspensoes: 0, registros: [], ultima: ""
                    };
                });
            }
            
            alunos.forEach(aluno => {
                if (!dadosComentarios[turmaId][aluno]) {
                    dadosComentarios[turmaId][aluno] = { observacoes: "", historico: [] };
                }
            });
        }
    }
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("sistemaAcademico", JSON.stringify({
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos,
        comentarios: dadosComentarios,
        arquivos: dadosArquivos
    }));
}

// Renderizar notas
function renderizarNotas() {
    const disciplina = document.getElementById("disciplinaNotas").value;
    if (!disciplina) return;
    
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const alunos = turma.alunos;
    const notasTurma = dadosNotas[turmaAtual][disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || { nm1: "", nm2: "", nm3: "", exame: "" };
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        let media = (nm1 + nm2 + nm3) / 3;
        const exame = parseFloat(notas.exame) || 0;
        
        if (exame > 0) media = (media + exame) / 2;
        
        let status = "", statusClass = "";
        if (exame > 0) {
            if (media >= 5) { status = "✓ Aprovado por Exame"; statusClass = "status-aprovado"; }
            else { status = "✗ Reprovado por Exame"; statusClass = "status-reprovado"; }
        } else if (media >= 7) { status = "✓ Aprovado"; statusClass = "status-aprovado"; }
        else if (media >= 5) { status = "⚠️ Recuperação"; statusClass = "status-recuperacao"; }
        else if (media > 0) { status = "✗ Reprovado"; statusClass = "status-reprovado"; }
        else { status = "⏳ Sem notas"; statusClass = ""; }
        
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        
        [1, 2, 3].forEach(trimestre => {
            const cell = row.insertCell(trimestre);
            const input = document.createElement("input");
            input.type = "number"; input.step = "0.1"; input.min = "0"; input.max = "10";
            input.value = notas[`nm${trimestre}`];
            input.classList.add("nota-input");
            input.dataset.aluno = aluno;
            input.dataset.trimestre = `nm${trimestre}`;
            cell.appendChild(input);
        });
        
        row.insertCell(4).textContent = media.toFixed(1);
        row.insertCell(5).innerHTML = `<span class="${statusClass}">${status}</span>`;
        
        const cellExame = row.insertCell(6);
        const inputExame = document.createElement("input");
        inputExame.type = "number"; inputExame.step = "0.1"; inputExame.min = "0"; inputExame.max = "10";
        inputExame.value = notas.exame;
        inputExame.classList.add("exame-input");
        inputExame.dataset.aluno = aluno;
        cellExame.appendChild(inputExame);
        
        const cellAcoes = row.insertCell(7);
        const btnComentario = document.createElement("button");
        btnComentario.textContent = "📝 Comentário";
        btnComentario.className = "btn-pequeno btn-comentario";
        btnComentario.onclick = () => abrirModalComentario(aluno);
        cellAcoes.appendChild(btnComentario);
    });
    
    document.querySelectorAll(".exame-input").forEach(input => {
        input.addEventListener("change", (e) => {
            const aluno = e.target.dataset.aluno;
            let valor = e.target.value === "" ? "" : parseFloat(e.target.value);
            if (valor !== "" && (isNaN(valor) || valor < 0 || valor > 10)) valor = "";
            if (!dadosNotas[turmaAtual][disciplina][aluno]) {
                dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "", exame: "" };
            }
            dadosNotas[turmaAtual][disciplina][aluno].exame = valor;
            salvarDados();
            renderizarNotas();
        });
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
        
        if (!dadosNotas[turmaAtual][disciplina][aluno]) {
            dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "", exame: "" };
        }
        dadosNotas[turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    
    salvarDados();
    renderizarNotas();
    alert("✅ Notas salvas com sucesso!");
}

// Renderizar presença
function renderizarPresenca() {
    const todasAulas = [];
    for (let key in dadosPresenca[turmaAtual]) {
        const aulas = dadosPresenca[turmaAtual][key];
        if (aulas && aulas.length > 0) {
            aulas.forEach(aula => { todasAulas.push({ ...aula, key: key }); });
        }
    }
    todasAulas.sort((a, b) => a.data.localeCompare(b.data));
    
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    container.innerHTML = "";
    
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos || turma.alunos.length === 0) {
        container.innerHTML = '<div class="lista-vazia">📭 Carregando alunos...</div>';
        return;
    }
    
    if (todasAulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia">📭 Nenhuma aula registrada. Clique em "+ Nova Aula" para começar.</div>';
        return;
    }
    
    todasAulas.forEach((aula) => {
        const [ano, mes, dia] = aula.data.split('-');
        const dataFormatada = `${dia}/${mes}/${ano}`;
        
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        aulaCard.innerHTML = `
            <div class="aula-header">
                <span class="aula-data">📅 ${dataFormatada}</span>
                <button class="aula-remover" data-key="${aula.key}" data-data="${aula.data}">🗑️ Remover</button>
            </div>
            <div class="tabela-container">
                <table class="tabela-presenca">
                    <thead><tr><th>Aluno</th><th>Presente?</th></tr></thead>
                    <tbody>
                        ${turma.alunos.map(aluno => `
                            <tr>
                                <td>${aluno}</td>
                                <td style="text-align:center">
                                    <input type="checkbox" class="presenca-check" data-aluno="${aluno}" data-key="${aula.key}" data-data="${aula.data}" ${aula.presencas?.[aluno] ? 'checked' : ''}>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        container.appendChild(aulaCard);
        
        aulaCard.querySelector(".aula-remover").onclick = () => {
            const key = aulaCard.querySelector(".aula-remover").dataset.key;
            const data = aulaCard.querySelector(".aula-remover").dataset.data;
            const aulasList = dadosPresenca[turmaAtual][key];
            const idx = aulasList.findIndex(a => a.data === data);
            if (idx !== -1 && confirm(`Remover aula do dia ${dataFormatada}?`)) {
                aulasList.splice(idx, 1);
                if (aulasList.length === 0) delete dadosPresenca[turmaAtual][key];
                salvarDados();
                renderizarPresenca();
            }
        };
        
        aulaCard.querySelectorAll(".presenca-check").forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const aluno = e.target.dataset.aluno;
                const key = e.target.dataset.key;
                const data = e.target.dataset.data;
                const aulasList = dadosPresenca[turmaAtual][key];
                const aulaIndex = aulasList.findIndex(a => a.data === data);
                if (aulaIndex !== -1) {
                    if (!dadosPresenca[turmaAtual][key][aulaIndex].presencas) {
                        dadosPresenca[turmaAtual][key][aulaIndex].presencas = {};
                    }
                    dadosPresenca[turmaAtual][key][aulaIndex].presencas[aluno] = e.target.checked;
                    salvarDados();
                }
            });
        });
    });
}

function adicionarAula() {
    const dataAula = document.getElementById("dataAula").value;
    if (!dataAula) { alert("⚠️ Selecione a data da aula!"); return; }
    
    const [ano, mes, dia] = dataAula.split('-');
    const key = `${ano}-${mes}`;
    const dataFormatada = `${dia}/${mes}/${ano}`;
    
    const aulasExistentes = dadosPresenca[turmaAtual][key] || [];
    if (aulasExistentes.find(a => a.data === dataAula)) {
        alert(`⚠️ Já existe aula para ${dataFormatada}!`);
        return;
    }
    
    if (!dadosPresenca[turmaAtual][key]) dadosPresenca[turmaAtual][key] = [];
    dadosPresenca[turmaAtual][key].push({ data: dataAula, presencas: {} });
    salvarDados();
    renderizarPresenca();
    
    const proximaData = new Date(parseInt(ano), parseInt(mes)-1, parseInt(dia) + 1);
    document.getElementById("dataAula").value = `${proximaData.getFullYear()}-${String(proximaData.getMonth()+1).padStart(2,'0')}-${String(proximaData.getDate()).padStart(2,'0')}`;
    alert(`✅ Aula ${dataFormatada} adicionada!`);
}

function calcularSelo(totalVistos, advertencias, suspensoes) {
    let pontuacao = totalVistos - (advertencias * 2) - (suspensoes * 5);
    if (pontuacao >= 20) return "diamante";
    if (pontuacao >= 10) return "ouro";
    if (pontuacao >= 5) return "prata";
    return "bronze";
}

function renderizarVistos() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const vistosTurma = dadosVistos[turmaAtual].alunos || {};
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    const seloClasse = { diamante: "selo-diamante", ouro: "selo-ouro", prata: "selo-prata", bronze: "selo-bronze" };
    
    turma.alunos.forEach(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, advertencias: 0, suspensoes: 0, ultima: "" };
        const selo = calcularSelo(dados.total, dados.advertencias, dados.suspensoes);
        
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        row.insertCell(1).innerHTML = `<span class="selo ${seloClasse[selo]}">🏆 ${selo.toUpperCase()}</span>`;
        row.insertCell(2).innerHTML = `<strong style="color:#2e7d32">${dados.total}</strong>`;
        row.insertCell(3).innerHTML = `<strong style="color:#f57c00">${dados.advertencias || 0}</strong>`;
        row.insertCell(4).innerHTML = `<strong style="color:#c62828">${dados.suspensoes || 0}</strong>`;
        row.insertCell(5).textContent = dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-";
        
        const btnCell = row.insertCell(6);
        
        const btnVisto = document.createElement("button");
        btnVisto.textContent = "⭐ +Visto"; btnVisto.className = "btn-pequeno";
        btnVisto.style.background = "#2e7d32"; btnVisto.style.marginRight = "5px";
        btnVisto.onclick = () => adicionarRegistro(aluno, "visto", "Participação positiva");
        btnCell.appendChild(btnVisto);
        
        const btnAdv = document.createElement("button");
        btnAdv.textContent = "⚠️ Adv"; btnAdv.className = "btn-pequeno";
        btnAdv.style.background = "#f57c00"; btnAdv.style.marginRight = "5px";
        btnAdv.onclick = () => adicionarRegistro(aluno, "advertencia", "Comportamento inadequado");
        btnCell.appendChild(btnAdv);
        
        const btnSus = document.createElement("button");
        btnSus.textContent = "🚫 Susp"; btnSus.className = "btn-pequeno";
        btnSus.style.background = "#c62828";
        btnSus.onclick = () => adicionarRegistro(aluno, "suspensao", "Medida disciplinar");
        btnCell.appendChild(btnSus);
    });
}

function adicionarRegistro(aluno, tipo, descricaoPadrao) {
    const descricao = prompt(`Descrição:`, descricaoPadrao);
    if (!descricao) return;
    
    const vistosTurma = dadosVistos[turmaAtual].alunos;
    if (!vistosTurma[aluno]) {
        vistosTurma[aluno] = { total: 0, advertencias: 0, suspensoes: 0, registros: [], ultima: "" };
    }
    
    const agora = new Date().toISOString();
    vistosTurma[aluno].registros.push({ data: agora, tipo, descricao });
    vistosTurma[aluno].ultima = agora;
    
    if (tipo === "visto") vistosTurma[aluno].total++;
    else if (tipo === "advertencia") vistosTurma[aluno].advertencias++;
    else if (tipo === "suspensao") vistosTurma[aluno].suspensoes++;
    
    salvarDados();
    renderizarVistos();
    alert(`✅ Registrado para ${aluno}!`);
}

let alunoSelecionado = null;

function abrirModalComentario(aluno) {
    alunoSelecionado = aluno;
    document.getElementById("comentarioAlunoNome").innerHTML = `<strong>${aluno}</strong>`;
    const comentarios = dadosComentarios[turmaAtual][aluno] || { observacoes: "", historico: [] };
    document.getElementById("modalComentarioTexto").value = comentarios.observacoes || "";
    
    const historicoDiv = document.getElementById("historicoComentarios");
    historicoDiv.innerHTML = "";
    if (comentarios.historico && comentarios.historico.length > 0) {
        comentarios.historico.slice().reverse().forEach(com => {
            historicoDiv.innerHTML += `<div class="historico-item"><div class="data">📅 ${new Date(com.data).toLocaleDateString('pt-BR')}</div><div>${com.texto}</div></div>`;
        });
    } else {
        historicoDiv.innerHTML = "<p>Nenhuma observação.</p>";
    }
    document.getElementById("modalComentario").style.display = "block";
}

function salvarComentario() {
    if (!alunoSelecionado) return;
    const texto = document.getElementById("modalComentarioTexto").value.trim();
    if (!texto) { alert("Digite uma observação!"); return; }
    
    if (!dadosComentarios[turmaAtual][alunoSelecionado]) {
        dadosComentarios[turmaAtual][alunoSelecionado] = { observacoes: "", historico: [] };
    }
    dadosComentarios[turmaAtual][alunoSelecionado].observacoes = texto;
    dadosComentarios[turmaAtual][alunoSelecionado].historico.push({ data: new Date().toISOString(), texto: texto });
    salvarDados();
    document.getElementById("modalComentario").style.display = "none";
    alert("✅ Observação salva!");
}

function renderizarRelatorios() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || turma.disciplinas[0];
    const alunos = turma.alunos;
    
    let aprovados = 0, recuperacao = 0, reprovados = 0, semNotas = 0;
    const rankingNotas = [];
    
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        let media = (nm1 + nm2 + nm3) / 3;
        const exame = parseFloat(notas.exame) || 0;
        if (exame > 0) media = (media + exame) / 2;
        
        if (nm1 === 0 && nm2 === 0 && nm3 === 0) semNotas++;
        else {
            if (media >= 7) aprovados++;
            else if (media >= 5) recuperacao++;
            else reprovados++;
            rankingNotas.push({ aluno, media });
        }
    });
    rankingNotas.sort((a,b) => b.media - a.media);
    
    let totalPresencas = 0, totalAulas = 0;
    for (let key in dadosPresenca[turmaAtual]) {
        dadosPresenca[turmaAtual][key].forEach(aula => {
            totalAulas++;
            totalPresencas += Object.values(aula.presencas || {}).filter(v => v === true).length;
        });
    }
    
    const baixaFrequencia = [];
    alunos.forEach(aluno => {
        let aulasAluno = 0, presencasAluno = 0;
        for (let key in dadosPresenca[turmaAtual]) {
            dadosPresenca[turmaAtual][key].forEach(aula => {
                aulasAluno++;
                if (aula.presencas?.[aluno]) presencasAluno++;
            });
        }
        const perc = aulasAluno > 0 ? (presencasAluno / aulasAluno) * 100 : 0;
        if (perc < 75 && aulasAluno > 0) baixaFrequencia.push({ aluno, perc });
    });
    
    const vistosAlunos = alunos.map(aluno => {
        const v = dadosVistos[turmaAtual].alunos[aluno] || { total: 0 };
        return { aluno, total: v.total };
    }).sort((a,b) => b.total - a.total);
    
    document.getElementById("resumoNotas").innerHTML = `
        <ul>
            <li>✅ Aprovados: ${aprovados}</li>
            <li>⚠️ Recuperação: ${recuperacao}</li>
            <li>❌ Reprovados: ${reprovados}</li>
            <li>📝 Sem notas: ${semNotas}</li>
        </ul>
        <h4>🏆 Top 5</h4>
        <ul>${rankingNotas.slice(0,5).map((r,i) => `<li>${i+1}º - ${r.aluno}: ${r.media.toFixed(1)}</li>`).join('')}</ul>
    `;
    
    document.getElementById("resumoFrequencia").innerHTML = `
        <ul>
            <li>📅 Total de Aulas: ${totalAulas}</li>
            <li>📈 Frequência Média: ${totalAulas > 0 ? ((totalPresencas/(totalAulas*alunos.length))*100).toFixed(1) : 0}%</li>
        </ul>
    `;
    
    document.getElementById("alertasFrequencia").innerHTML = baixaFrequencia.length ? 
        `<h4>🚨 ALERTAS</h4><ul>${baixaFrequencia.map(a => `<li>⚠️ ${a.aluno}: ${a.perc.toFixed(1)}%</li>`).join('')}</ul>` : "";
    
    document.getElementById("alunosDestaque").innerHTML = `
        <ul>${vistosAlunos.slice(0,5).map((v,i) => `<li>${i+1}º - ${v.aluno}: ${v.total} vistos</li>`).join('')}</ul>
    `;
    
    document.getElementById("rankingParticipacao").innerHTML = `
        <ul>${vistosAlunos.map(v => `<li>${v.aluno}: ⭐${v.total}</li>`).join('')}</ul>
    `;
    
    const recuperacaoList = alunos.filter(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const media = (nm1 + nm2 + nm3) / 3;
        return media >= 5 && media < 7;
    });
    
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ?
        `<ul>${recuperacaoList.map(a => `<li>⚠️ ${a}</li>`).join('')}</ul>` : "<p>Nenhum</p>";
    
    document.getElementById("alunosBaixaFrequencia").innerHTML = baixaFrequencia.length ?
        `<ul>${baixaFrequencia.map(a => `<li>🚨 ${a.aluno}: ${a.perc.toFixed(1)}%</li>`).join('')}</ul>` : "<p>✅ Todos OK</p>";
}

function exportarRelatorioCompleto() {
    const turma = turmasConfig[turmaAtual];
    const disciplina = document.getElementById("disciplinaNotas")?.value || turma.disciplinas[0];
    const alunos = turma.alunos;
    
    const dadosExport = alunos.map(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        let media = (nm1 + nm2 + nm3) / 3;
        const exame = parseFloat(notas.exame) || 0;
        if (exame > 0) media = (media + exame) / 2;
        
        let status = "Sem notas";
        if (nm1 !== 0 || nm2 !== 0 || nm3 !== 0) {
            if (exame > 0) status = media >= 5 ? "Aprovado por Exame" : "Reprovado por Exame";
            else status = media >= 7 ? "Aprovado" : (media >= 5 ? "Recuperação" : "Reprovado");
        }
        
        const v = dadosVistos[turmaAtual].alunos[aluno] || { total: 0, advertencias: 0, suspensoes: 0 };
        
        let totalAulas = 0, totalPresencas = 0;
        for (let key in dadosPresenca[turmaAtual]) {
            dadosPresenca[turmaAtual][key].forEach(aula => {
                totalAulas++;
                if (aula.presencas?.[aluno]) totalPresencas++;
            });
        }
        const frequencia = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : 0;
        
        return { Aluno: aluno, NM1: nm1, NM2: nm2, NM3: nm3, "Média": media.toFixed(1), Status: status, Vistos: v.total, Advertências: v.advertencias, Suspensões: v.suspensoes, "Frequência(%)": frequencia };
    });
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Relatorio`);
    XLSX.writeFile(livro, `Relatorio_${turma.nome}_${new Date().toLocaleDateString()}.xlsx`);
    alert("✅ Exportado!");
}

function exportarPDF() {
    const element = document.querySelector(".relatorios-grid");
    html2pdf().set({ margin: 0.5, filename: `Relatorio_${turmasConfig[turmaAtual].nome}.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' } }).from(element).save();
}

function toggleTema() {
    document.body.classList.toggle("tema-escuro");
    localStorage.setItem("tema", document.body.classList.contains("tema-escuro") ? "escuro" : "claro");
}

function trocarTurma(turmaId) {
    turmaAtual = turmaId;
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.turma === turmaId);
    });
    document.getElementById("turmaTitulo").innerHTML = `<h1>📚 ${turmasConfig[turmaId].nome}</h1>`;
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    selectDisciplina.innerHTML = "";
    turmasConfig[turmaId].disciplinas.forEach(disciplina => {
        const option = document.createElement("option");
        option.value = disciplina;
        option.textContent = disciplina;
        selectDisciplina.appendChild(option);
    });
    
    carregarDadosSalvos();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === "escuro") document.body.classList.add("tema-escuro");
    
    document.getElementById("dataAula").valueAsDate = new Date();
    document.getElementById("dataVisto").valueAsDate = new Date();
    
    carregarDadosSalvos();
    
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.addEventListener("click", () => trocarTurma(btn.dataset.turma));
    });
    
    document.querySelectorAll(".aba-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".aba-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(`aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`).classList.add("active");
            if (btn.dataset.aba === "relatorios") renderizarRelatorios();
        });
    });
    
    document.getElementById("btnTema")?.addEventListener("click", toggleTema);
    document.getElementById("disciplinaNotas")?.addEventListener("change", renderizarNotas);
    document.getElementById("salvarNotas")?.addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("adicionarAula")?.addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca")?.addEventListener("click", () => { salvarDados(); alert("✅ Salvo!"); });
    document.getElementById("exportarPresenca")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("salvarVistos")?.addEventListener("click", () => { salvarDados(); alert("✅ Salvo!"); });
    document.getElementById("exportarVistos")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("exportarRelatorioGeral")?.addEventListener("click", exportarRelatorioCompleto);
    document.getElementById("exportarPDF")?.addEventListener("click", exportarPDF);
    
    document.getElementById("adicionarVisto")?.addEventListener("click", () => {
        const data = document.getElementById("dataVisto").value;
        const desc = document.getElementById("descVisto").value.trim();
        const tipo = document.getElementById("tipoRegistro")?.value || "visto";
        if (!data) { alert("Selecione a data!"); return; }
        if (!desc) { alert("Digite a descrição!"); return; }
        if (turmasConfig[turmaAtual].alunos.length) {
            adicionarRegistro(turmasConfig[turmaAtual].alunos[0], tipo, desc);
            document.getElementById("descVisto").value = "";
        }
    });
    
    document.querySelectorAll(".modal-fechar").forEach(btn => {
        btn.onclick = () => {
            document.getElementById("modalComentario").style.display = "none";
            document.getElementById("modalVisto")?.style.display = "none";
        };
    });
    document.getElementById("modalSalvarComentario")?.addEventListener("click", salvarComentario);
    
    window.onclick = (event) => {
        if (event.target.classList.contains("modal")) event.target.style.display = "none";
    };
    
    trocarTurma("1adm");
});
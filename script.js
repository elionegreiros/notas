// Dados das turmas
const turmasConfig = {
    "1adm": { nome: "1º Administração", alunos: alunos1Adm, disciplinas: ["Inteligência Artificial"] },
    "1amb": { nome: "1º Controle Ambiental", alunos: alunos1Amb, disciplinas: ["Inteligência Artificial"] },
    "2ds": { nome: "2º Desenvolvimento de Sistemas", alunos: alunos2DS, disciplinas: [
        "Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC",
        "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO",
        "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS",
        "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"
    ] },
    "inf1": { nome: "Informática - Módulo I", alunos: alunosInf1, disciplinas: ["Análise e Lógica de Programação"] },
    "inf5": { nome: "Informática - Módulo V", alunos: alunosInf5, disciplinas: ["Empreendedorismo para TI"] }
};

// Dados dos alunos (embutidos)
function getAlunos1Adm() {
    return ["ALICE FERREIRA DA SILVA", "CARLENE MARTINS DA SILVA", "DAVI DE ALENCAR MELO BEZERRA", "ELIEZER LEAL BARBOSA", "ENRICO SAMUEL PEREIRA HOSTERNO", "FRANCISCA YARA GONCALVES DE SANTANA", "FRANCISCO FELIX DINO JUNIOR", "FRANCISCO JHONANTAN GONCALVES DA SILVA", "HELOA MENDES ALVES", "JOSE GUILHERME ALVES PIMENTEL", "KELY FERNANDES DA SILVA", "KEVEN VINICIUS ALVES DE OLVEIRA", "LAVINE MARIA FERREIRA FELIX", "LUCAS VINICIUS ALVES DA SILVA", "LUIS ERIVAN FERNANDES DE SOUSA", "MARIA ALICE FREIRE DA SILVA", "MARIA CLARA DAMACENA DE SOUSA", "MARIA FERNANDA DE SOUSA", "MARIA ISADORA RIBEIRO DA SILVA", "MARIELLE PIRES DA SILVA", "MIGUEL THARL EY BATISTA BARROSA", "PAULO VICTOR MOREIRA DA SILVA", "PEDRO LUCAS BEZERRA DA COSTA", "RANNIEL ALVES NOGUEIRA DA SILVA", "RENNA DUARTE DA SILVA", "THAYSSA DO NASCIMENTO SILVA"];
}

function getAlunos1Amb() {
    return ["ALEXANDRA DUARTE LOPES DA ROCHA", "ALICKY", "ANA CLARA MOTA GOMES", "ANA CLARA SOUSA SILVA", "ANDRESSA OLIVEIRA DE SOUSA", "ANNE VITORIA MARTINS CARVALHO", "DEBORA CAMILLE OLIVEIRA DE SOUSA", "DEISE MARTINS LIMA", "ELICKY SOARES LOIOLA", "FRANCISCO DAVID ROQUE DA SILVA", "GABRIELLY BRITO PEDROSA", "GEOVANNA ANTONELE RIBEIRO DE SOUSA", "JANICE VIANA DE SOUSA", "LARA MAYSA VITURIANO DE CARVALHO", "LUIS DAVY DA SILVA RULIM", "LUIS GUSTAVO GOMES DE MELO", "MAYSA ALVES SILVA", "SARA OLIVEIRA CRIZANTINO", "STEICIE DA SILVA LIMA"];
}

function getAlunos2DS() {
    return ["ANA SOPHIA GOMES DA SILVA", "CARLOS MANOEL CAETANO", "FRANCISCA INGRID TAINAR DA SILVA ADALBERTO", "IAN BENICIO DE OLIVEIRA CARVALHO", "JACKSON VICENTE DO NASCIMENTO", "JOHNNATHAN RODRIGUES DA SILVA", "JUAN LOIOLA DA SILVA", "LEO VICTOR FERREIRA LOIOLA", "MARIA BEATRIZ XAVIER DE SOUSA", "MIKLENYO JOSE LUSTOSA ALVES", "NICOLAS OLIVEIRA DINIZ", "PABLO KAUAN DE SOUSA NASCIMENTO", "SHAUANY SOUZA LOPES", "TAYNARA OLIVEIRA REIS", "THIAGO LEVI NUNES PEREIRA", "VALTER ALEXANDRE OLIVEIRA FERNANDES"];
}

function getAlunosInf1() {
    return ["ALEXANDRE BARBOSA DA SILVA", "ANA MARIA DE JESUS OLIVEIRA", "ANTONIA GLENDA DA SILVA ALVES", "ANTONIO MAIK BEZERRA DOS SANTOS", "DAGMA MOREIRA LIMA FERNANDES", "DANIEL RODRIGUES XAVIER", "EMANUELLY DA SILVA ALVES", "FRANCIDALVA DE LIMA NOGUEIRA", "FRANCISCO EDSON DA SILVA CARNEIRO", "FRANCISCO VINICIUS SOARES MELO", "GEANE MARIA CARDOSO SOARES", "GEOVANA MARIA PEREIRA MARTINS", "KELIANY VIEIRA ANDRADE", "LUCIANO FRANCISCO DA SILVA", "LUZANIRA ARAUJO DE SOUSA", "MAICON RODRIGO BARROS SILVA", "MARIA BEATRIZ FERREIRA DA SILVA", "MARIA DA CRUZ FURTUNATA DA SILVA", "MARIA DE FATIMA OLIVEIRA", "MARIA ISABELLY RIBEIRO MARTINA", "MARIA ISLANIA DE SOUSA", "MARIA KARIELY DE MELO ANDRADE", "MARINA FERREIRA LEAL", "MARISANGELA VELOSO DA SILVA", "MAURO SILVA MARTINS DE SOUSA", "RITA FRALINA ROQUE DA SILVA", "SIDNEY SANTANA DA SILVA", "TALYSON SOUSA CARVALHO", "VENILSON GOMES DA SILVA", "VIVIANE DE SOUSA LOPES"];
}

function getAlunosInf5() {
    return ["AELTON MOTA DE SOUSA", "ANDRE DE CASTRO LIMA", "ANTONIA RODRIGUES MARTINS", "DAYANNY MARIA OLIVEIRA FREITAS", "DOUGLAS DE CARVALHO CARDOSO", "EDILENE CARVALHO DA SILVA", "HILTON FERNANDES DA SILVA", "KAIQUE JOSE LIMA LEITE"];
}

const alunos1Adm = getAlunos1Adm();
const alunos1Amb = getAlunos1Amb();
const alunos2DS = getAlunos2DS();
const alunosInf1 = getAlunosInf1();
const alunosInf5 = getAlunosInf5();

// Estado global
let turmaAtual = "1adm";
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};

// Carregar dados do localStorage
function carregarDadosSalvos() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        const data = JSON.parse(saved);
        dadosNotas = data.notas || {};
        dadosPresenca = data.presenca || {};
        dadosVistos = data.vistos || {};
    }
    
    // Inicializar estruturas para turmas que não existem
    for (let turmaId in turmasConfig) {
        if (!dadosNotas[turmaId]) dadosNotas[turmaId] = {};
        if (!dadosPresenca[turmaId]) dadosPresenca[turmaId] = {};
        if (!dadosVistos[turmaId]) dadosVistos[turmaId] = {};
        
        const alunos = turmasConfig[turmaId].alunos;
        const disciplinas = turmasConfig[turmaId].disciplinas;
        
        // Inicializar notas
        disciplinas.forEach(disciplina => {
            if (!dadosNotas[turmaId][disciplina]) {
                dadosNotas[turmaId][disciplina] = {};
                alunos.forEach(aluno => {
                    dadosNotas[turmaId][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
                });
            }
        });
        
        // Inicializar vistos
        if (!dadosVistos[turmaId].alunos) {
            dadosVistos[turmaId].alunos = {};
            alunos.forEach(aluno => {
                dadosVistos[turmaId].alunos[aluno] = { total: 0, registros: [], ultima: "" };
            });
        }
    }
    
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("sistemaAcademico", JSON.stringify({
        notas: dadosNotas,
        presenca: dadosPresenca,
        vistos: dadosVistos
    }));
}

// Renderizar notas
function renderizarNotas() {
    const disciplina = document.getElementById("disciplinaNotas").value;
    if (!disciplina) return;
    
    const alunos = turmasConfig[turmaAtual].alunos;
    const notasTurma = dadosNotas[turmaAtual][disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    tbody.innerHTML = "";
    
    alunos.forEach(aluno => {
        const notas = notasTurma[aluno] || { nm1: "", nm2: "", nm3: "" };
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const media = (nm1 + nm2 + nm3) / 3;
        
        let status = "";
        let statusClass = "";
        if (media >= 7) {
            status = "✓ Aprovado";
            statusClass = "status-aprovado";
        } else if (media >= 5) {
            status = "⚠️ Recuperação";
            statusClass = "status-recuperacao";
        } else {
            status = "✗ Reprovado";
            statusClass = "status-reprovado";
        }
        
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        
        const cell1 = row.insertCell(1);
        const input1 = document.createElement("input");
        input1.type = "number";
        input1.step = "0.1";
        input1.min = "0";
        input1.max = "10";
        input1.value = notas.nm1;
        input1.classList.add("nota-input");
        input1.dataset.aluno = aluno;
        input1.dataset.trimestre = "nm1";
        cell1.appendChild(input1);
        
        const cell2 = row.insertCell(2);
        const input2 = document.createElement("input");
        input2.type = "number";
        input2.step = "0.1";
        input2.min = "0";
        input2.max = "10";
        input2.value = notas.nm2;
        input2.classList.add("nota-input");
        input2.dataset.aluno = aluno;
        input2.dataset.trimestre = "nm2";
        cell2.appendChild(input2);
        
        const cell3 = row.insertCell(3);
        const input3 = document.createElement("input");
        input3.type = "number";
        input3.step = "0.1";
        input3.min = "0";
        input3.max = "10";
        input3.value = notas.nm3;
        input3.classList.add("nota-input");
        input3.dataset.aluno = aluno;
        input3.dataset.trimestre = "nm3";
        cell3.appendChild(input3);
        
        row.insertCell(4).textContent = media.toFixed(1);
        row.insertCell(5).innerHTML = `<span class="${statusClass}">${status}</span>`;
    });
}

// Salvar notas
function salvarNotas() {
    const disciplina = document.getElementById("disciplinaNotas").value;
    const inputs = document.querySelectorAll("#tbodyNotas .nota-input");
    
    inputs.forEach(input => {
        const aluno = input.dataset.aluno;
        const trimestre = input.dataset.trimestre;
        let valor = input.value === "" ? "" : parseFloat(input.value);
        if (valor !== "" && (valor < 0 || valor > 10)) valor = "";
        
        if (!dadosNotas[turmaAtual][disciplina][aluno]) {
            dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
        }
        dadosNotas[turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    
    salvarDados();
    renderizarNotas();
    alert("✅ Notas salvas com sucesso!");
}

// Renderizar presença
function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = dadosPresenca[turmaAtual][key] || [];
    const container = document.getElementById("aulasContainer");
    container.innerHTML = "";
    
    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia">Nenhuma aula registrada neste mês. Clique em "+ Nova Aula" para começar.</div>';
        return;
    }
    
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        aulaCard.innerHTML = `
            <div class="aula-header">
                <span class="aula-data">📅 ${new Date(aula.data).toLocaleDateString('pt-BR')}</span>
                <button class="aula-remover" data-index="${idx}">🗑️ Remover</button>
            </div>
            <table class="tabela-presenca">
                <thead>
                    <tr><th>Aluno</th><th>Presente?</th></tr>
                </thead>
                <tbody>
                    ${turmasConfig[turmaAtual].alunos.map(aluno => `
                        <tr>
                            <td>${aluno}</td>
                            <td><input type="checkbox" class="presenca-check" data-aluno="${aluno}" ${aula.presencas && aula.presencas[aluno] ? 'checked' : ''}></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        container.appendChild(aulaCard);
        
        aulaCard.querySelector(".aula-remover").onclick = () => removerAula(key, idx);
        
        aulaCard.querySelectorAll(".presenca-check").forEach(checkbox => {
            checkbox.onchange = (e) => {
                const aluno = e.target.dataset.aluno;
                if (!dadosPresenca[turmaAtual][key][idx].presencas) {
                    dadosPresenca[turmaAtual][key][idx].presencas = {};
                }
                dadosPresenca[turmaAtual][key][idx].presencas[aluno] = e.target.checked;
                salvarDados();
            };
        });
    });
}

function removerAula(key, index) {
    if (confirm("Remover esta aula?")) {
        dadosPresenca[turmaAtual][key].splice(index, 1);
        if (dadosPresenca[turmaAtual][key].length === 0) {
            delete dadosPresenca[turmaAtual][key];
        }
        salvarDados();
        renderizarPresenca();
    }
}

function adicionarAula() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    
    const hoje = new Date().toISOString().split('T')[0];
    const novaAula = {
        data: hoje,
        presencas: {}
    };
    
    if (!dadosPresenca[turmaAtual][key]) {
        dadosPresenca[turmaAtual][key] = [];
    }
    
    dadosPresenca[turmaAtual][key].push(novaAula);
    salvarDados();
    renderizarPresenca();
}

// Renderizar vistos
let alunoSelecionadoVisto = null;

function renderizarVistos() {
    const vistosTurma = dadosVistos[turmaAtual].alunos;
    const tbody = document.getElementById("tbodyVistos");
    tbody.innerHTML = "";
    
    turmasConfig[turmaAtual].alunos.forEach(aluno => {
        const dados = vistosTurma[aluno] || { total: 0, ultima: "" };
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        row.insertCell(1).innerHTML = `<strong>${dados.total}</strong> visto(s)`;
        row.insertCell(2).textContent = dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-";
        
        const btnCell = row.insertCell(3);
        const btn = document.createElement("button");
        btn.textContent = "➕ Dar Visto";
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

function salvarVisto() {
    if (!alunoSelecionadoVisto) return;
    
    const descricao = document.getElementById("modalDescVisto").value.trim();
    if (!descricao) {
        alert("Por favor, descreva a participação do aluno!");
        return;
    }
    
    const vistosTurma = dadosVistos[turmaAtual].alunos;
    if (!vistosTurma[alunoSelecionadoVisto]) {
        vistosTurma[alunoSelecionadoVisto] = { total: 0, registros: [], ultima: "" };
    }
    
    const agora = new Date().toISOString();
    vistosTurma[alunoSelecionadoVisto].total++;
    vistosTurma[alunoSelecionadoVisto].registros.push({
        data: agora,
        descricao: descricao
    });
    vistosTurma[alunoSelecionadoVisto].ultima = agora;
    
    salvarDados();
    renderizarVistos();
    document.getElementById("modalVisto").style.display = "none";
    alert(`✅ Visto concedido para ${alunoSelecionadoVisto}!`);
}

// Renderizar relatórios
function renderizarRelatorios() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    
    // Resumo de Notas
    let aprovados = 0, recuperacao = 0, reprovados = 0;
    let somaMedias = 0;
    
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || { nm1: "", nm2: "", nm3: "" };
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const media = (nm1 + nm2 + nm3) / 3;
        
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
        somaMedias += media;
    });
    
    const mediaGeral = alunos.length ? (somaMedias / alunos.length).toFixed(1) : 0;
    
    document.getElementById("resumoNotas").innerHTML = `
        <ul>
            <li>📊 Média Geral da Turma: <strong>${mediaGeral}</strong></li>
            <li>✅ Aprovados: <strong style="color:#2e7d32">${aprovados}</strong></li>
            <li>⚠️ Recuperação: <strong style="color:#f57c00">${recuperacao}</strong></li>
            <li>❌ Reprovados: <strong style="color:#c62828">${reprovados}</strong></li>
        </ul>
    `;
    
    // Frequência Geral
    let totalPresencas = 0;
    let totalAulas = 0;
    
    for (let key in dadosPresenca[turmaAtual]) {
        dadosPresenca[turmaAtual][key].forEach(aula => {
            totalAulas++;
            const presentes = Object.values(aula.presencas || {}).filter(v => v === true).length;
            totalPresencas += presentes;
        });
    }
    
    const frequenciaMedia = totalAulas ? ((totalPresencas / (totalAulas * alunos.length)) * 100).toFixed(1) : 0;
    
    document.getElementById("resumoFrequencia").innerHTML = `
        <ul>
            <li>📅 Total de Aulas: <strong>${totalAulas}</strong></li>
            <li>👥 Total de Presenças: <strong>${totalPresencas}</strong></li>
            <li>📈 Frequência Média: <strong>${frequenciaMedia}%</strong></li>
        </ul>
    `;
    
    // Alunos Destaque
    const destaques = [];
    alunos.forEach(aluno => {
        const vistos = dadosVistos[turmaAtual].alunos[aluno]?.total || 0;
        if (vistos >= 5) {
            destaques.push({ aluno, vistos });
        }
    });
    destaques.sort((a, b) => b.vistos - a.vistos);
    
    document.getElementById("alunosDestaque").innerHTML = destaques.length ? `
        <ul>
            ${destaques.slice(0,5).map(d => `<li>⭐ ${d.aluno} - ${d.vistos} vistos</li>`).join('')}
        </ul>
    ` : "<p>Nenhum aluno com destaque ainda</p>";
    
    // Alunos em Recuperação
    const recuperacaoList = [];
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || { nm1: "", nm2: "", nm3: "" };
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const media = (nm1 + nm2 + nm3) / 3;
        if (media >= 5 && media < 7) {
            recuperacaoList.push({ aluno, media });
        }
    });
    
    document.getElementById("alunosRecuperacao").innerHTML = recuperacaoList.length ? `
        <ul>
            ${recuperacaoList.map(r => `<li>⚠️ ${r.aluno} - Média: ${r.media.toFixed(1)}</li>`).join('')}
        </ul>
    ` : "<p>Nenhum aluno em recuperação</p>";
}

// Exportar relatório completo
function exportarRelatorioCompleto() {
    const disciplina = document.getElementById("disciplinaNotas")?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    
    const dadosExport = alunos.map(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const mediaFinal = (nm1 + nm2 + nm3) / 3;
        const status = mediaFinal >= 7 ? "Aprovado" : (mediaFinal >= 5 ? "Recuperação" : "Reprovado");
        const vistos = dadosVistos[turmaAtual].alunos[aluno]?.total || 0;
        
        return {
            "Aluno": aluno,
            "NM1": nm1,
            "NM2": nm2,
            "NM3": nm3,
            "Média Final": mediaFinal.toFixed(1),
            "Status": status,
            "Vistos de Participação": vistos
        };
    });
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Relatorio_${turmasConfig[turmaAtual].nome}`);
    XLSX.writeFile(livro, `Relatorio_${turmasConfig[turmaAtual].nome}_${new Date().toLocaleDateString()}.xlsx`);
}

// Trocar turma
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
    
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
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
    
    document.getElementById("disciplinaNotas").addEventListener("change", renderizarNotas);
    document.getElementById("salvarNotas").addEventListener("click", salvarNotas);
    document.getElementById("exportarNotas").addEventListener("click", () => {
        const disciplina = document.getElementById("disciplinaNotas").value;
        const dados = turmasConfig[turmaAtual].alunos.map(aluno => {
            const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
            return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
        });
        const planilha = XLSX.utils.json_to_sheet(dados);
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, "Notas");
        XLSX.writeFile(livro, `Notas_${turmasConfig[turmaAtual].nome}.xlsx`);
    });
    
    document.getElementById("adicionarAula").addEventListener("click", adicionarAula);
    document.getElementById("salvarPresenca").addEventListener("click", () => {
        salvarDados();
        alert("✅ Presenças salvas!");
    });
    document.getElementById("exportarPresenca").addEventListener("click", renderizarPresenca);
    
    document.getElementById("adicionarVisto").addEventListener("click", () => {
        if (turmasConfig[turmaAtual].alunos.length === 0) return;
        abrirModalVisto(turmasConfig[turmaAtual].alunos[0]);
    });
    document.getElementById("salvarVistos").addEventListener("click", () => {
        salvarDados();
        alert("✅ Vistos salvos!");
    });
    document.getElementById("exportarVistos").addEventListener("click", renderizarVistos);
    
    document.getElementById("exportarRelatorioGeral").addEventListener("click", exportarRelatorioCompleto);
    
    document.querySelector(".modal-fechar").addEventListener("click", () => {
        document.getElementById("modalVisto").style.display = "none";
    });
    document.getElementById("modalSalvarVisto").addEventListener("click", salvarVisto);
    
    window.onclick = (event) => {
        if (event.target === document.getElementById("modalVisto")) {
            document.getElementById("modalVisto").style.display = "none";
        }
    };
    
    document.getElementById("mesPresenca").addEventListener("change", renderizarPresenca);
    document.getElementById("anoPresenca").addEventListener("change", renderizarPresenca);
    document.getElementById("dataVisto").valueAsDate = new Date();
    
    trocarTurma("1adm");
});
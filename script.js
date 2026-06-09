// ============================================
// DADOS DOS ALUNOS (DEFINIDOS PRIMEIRO)
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

// ============================================
// CONFIGURAÇÃO DAS TURMAS
// ============================================

const turmasConfig = {
    "1adm": { 
        nome: "1º Administração", 
        alunos: alunos1Adm, 
        disciplinas: ["Inteligência Artificial"],
        tipoAvaliacao: "trimestral"
    },
    "1amb": { 
        nome: "1º Controle Ambiental", 
        alunos: alunos1Amb, 
        disciplinas: ["Inteligência Artificial"],
        tipoAvaliacao: "trimestral"
    },
    "2ds": { 
        nome: "2º Desenvolvimento de Sistemas", 
        alunos: alunos2DS, 
        disciplinas: [
            "Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC",
            "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO",
            "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS",
            "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"
        ],
        tipoAvaliacao: "trimestral"
    },
    "inf1": { 
        nome: "Informática - Módulo I", 
        alunos: alunosInf1, 
        disciplinas: ["Análise e Lógica de Programação"],
        tipoAvaliacao: "bimestral"
    },
    "inf5": { 
        nome: "Informática - Módulo V", 
        alunos: alunosInf5, 
        disciplinas: ["Empreendedorismo para TI"],
        tipoAvaliacao: "bimestral"
    }
};

// ============================================
// ESTADO GLOBAL
// ============================================

let turmaAtual = "1adm";
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};
let alunoSelecionadoVisto = null;

// ============================================
// FUNÇÕES DE INICIALIZAÇÃO
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
                    if (tipo === "trimestral") {
                        dadosNotas[turmaId][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
                    } else {
                        dadosNotas[turmaId][disciplina][aluno] = { nm1: "", nm2: "" };
                    }
                });
            }
        });
        
        if (!dadosVistos[turmaId].alunos) {
            dadosVistos[turmaId].alunos = {};
            alunos.forEach(aluno => {
                dadosVistos[turmaId].alunos[aluno] = { total: 0, registros: [], ultima: "" };
            });
        }
    }
}

function carregarDadosSalvos() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            dadosNotas = data.notas || {};
            dadosPresenca = data.presenca || {};
            dadosVistos = data.vistos || {};
        } catch(e) {
            console.log("Erro ao carregar dados salvos");
        }
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

// ============================================
// RENDERIZAÇÃO DAS NOTAS
// ============================================

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
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        
        let media = 0;
        if (tipo === "trimestral") {
            media = (nm1 + nm2 + nm3) / 3;
        } else {
            media = (nm1 + nm2) / 2;
        }
        
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
        input1.value = notas.nm1 !== "" ? notas.nm1 : "";
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
        input2.value = notas.nm2 !== "" ? notas.nm2 : "";
        input2.classList.add("nota-input");
        input2.dataset.aluno = aluno;
        input2.dataset.trimestre = "nm2";
        cell2.appendChild(input2);
        
        if (tipo === "trimestral") {
            const cell3 = row.insertCell(3);
            const input3 = document.createElement("input");
            input3.type = "number";
            input3.step = "0.1";
            input3.min = "0";
            input3.max = "10";
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
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    
    inputs.forEach(input => {
        const aluno = input.dataset.aluno;
        const trimestre = input.dataset.trimestre;
        let valor = input.value === "" ? "" : parseFloat(input.value);
        if (valor !== "" && (isNaN(valor) || valor < 0 || valor > 10)) valor = "";
        
        if (!dadosNotas[turmaAtual][disciplina][aluno]) {
            if (tipo === "trimestral") {
                dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "", nm3: "" };
            } else {
                dadosNotas[turmaAtual][disciplina][aluno] = { nm1: "", nm2: "" };
            }
        }
        dadosNotas[turmaAtual][disciplina][aluno][trimestre] = valor;
    });
    
    salvarDados();
    renderizarNotas();
    alert("✅ Notas salvas com sucesso!");
}

// ============================================
// RENDERIZAÇÃO DA PRESENÇA
// ============================================

function renderizarPresenca() {
    const mes = document.getElementById("mesPresenca").value;
    const ano = document.getElementById("anoPresenca").value;
    const key = `${ano}-${mes.padStart(2,'0')}`;
    const aulas = dadosPresenca[turmaAtual]?.[key] || [];
    const container = document.getElementById("aulasContainer");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia">Nenhuma aula registrada neste mês. Clique em "+ Nova Aula" para começar.</div>';
        return;
    }
    
    aulas.forEach((aula, idx) => {
        const aulaCard = document.createElement("div");
        aulaCard.className = "aula-card";
        
        let presencasHtml = "";
        turmasConfig[turmaAtual].alunos.forEach(aluno => {
            const isChecked = aula.presencas && aula.presencas[aluno] === true;
            presencasHtml += `
                <tr>
                    <td>${aluno}</td>
                    <td><input type="checkbox" class="presenca-check" data-aluno="${aluno}" ${isChecked ? 'checked' : ''}></td>
                </tr>
            `;
        });
        
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
                    ${presencasHtml}
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
    alert("✅ Nova aula adicionada!");
}

// ============================================
// RENDERIZAÇÃO DOS VISTOS
// ============================================

function renderizarVistos() {
    const vistosTurma = dadosVistos[turmaAtual]?.alunos || {};
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    
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
    const modal = document.getElementById("modalVisto");
    const textarea = document.getElementById("modalDescVisto");
    if (textarea) textarea.value = "";
    if (modal) modal.style.display = "block";
}

function fecharModalVisto() {
    const modal = document.getElementById("modalVisto");
    if (modal) modal.style.display = "none";
}

function salvarVisto() {
    if (!alunoSelecionadoVisto) return;
    
    const descricao = document.getElementById("modalDescVisto")?.value.trim();
    if (!descricao) {
        alert("Por favor, descreva a participação do aluno!");
        return;
    }
    
    if (!dadosVistos[turmaAtual].alunos) {
        dadosVistos[turmaAtual].alunos = {};
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
    fecharModalVisto();
    alert(`✅ Visto concedido para ${alunoSelecionadoVisto}!`);
}

// ============================================
// RELATÓRIOS
// ============================================

function renderizarRelatorios() {
    const disciplinaSelect = document.getElementById("disciplinaNotas");
    const disciplina = disciplinaSelect?.value || turmasConfig[turmaAtual].disciplinas[0];
    const alunos = turmasConfig[turmaAtual].alunos;
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    
    let aprovados = 0, recuperacao = 0, reprovados = 0;
    let somaMedias = 0;
    
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        
        let media = 0;
        if (tipo === "trimestral") {
            media = (nm1 + nm2 + nm3) / 3;
        } else {
            media = (nm1 + nm2) / 2;
        }
        
        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
        somaMedias += media;
    });
    
    const mediaGeral = alunos.length ? (somaMedias / alunos.length).toFixed(1) : 0;
    
    const resumoNotas = document.getElementById("resumoNotas");
    if (resumoNotas) {
        resumoNotas.innerHTML = `
            <ul>
                <li>📊 Média Geral da Turma: <strong>${mediaGeral}</strong></li>
                <li>✅ Aprovados: <strong style="color:#2e7d32">${aprovados}</strong></li>
                <li>⚠️ Recuperação: <strong style="color:#f57c00">${recuperacao}</strong></li>
                <li>❌ Reprovados: <strong style="color:#c62828">${reprovados}</strong></li>
                <li>📋 Avaliação: <strong>${tipo === "trimestral" ? "Trimestral (NM1, NM2, NM3)" : "Bimestral (NM1, NM2)"}</strong></li>
            </ul>
        `;
    }
    
    let totalPresencas = 0;
    let totalAulas = 0;
    
    for (let key in dadosPresenca[turmaAtual]) {
        if (Array.isArray(dadosPresenca[turmaAtual][key])) {
            dadosPresenca[turmaAtual][key].forEach(aula => {
                totalAulas++;
                const presentes = Object.values(aula.presencas || {}).filter(v => v === true).length;
                totalPresencas += presentes;
            });
        }
    }
    
    const frequenciaMedia = totalAulas ? ((totalPresencas / (totalAulas * alunos.length)) * 100).toFixed(1) : 0;
    
    const resumoFrequencia = document.getElementById("resumoFrequencia");
    if (resumoFrequencia) {
        resumoFrequencia.innerHTML = `
            <ul>
                <li>📅 Total de Aulas: <strong>${totalAulas}</strong></li>
                <li>👥 Total de Presenças: <strong>${totalPresencas}</strong></li>
                <li>📈 Frequência Média: <strong>${frequenciaMedia}%</strong></li>
            </ul>
        `;
    }
    
    const destaques = [];
    alunos.forEach(aluno => {
        const vistos = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0;
        if (vistos >= 3) {
            destaques.push({ aluno, vistos });
        }
    });
    destaques.sort((a, b) => b.vistos - a.vistos);
    
    const alunosDestaque = document.getElementById("alunosDestaque");
    if (alunosDestaque) {
        alunosDestaque.innerHTML = destaques.length ? `
            <ul>
                ${destaques.slice(0,5).map(d => `<li>⭐ ${d.aluno} - ${d.vistos} vistos</li>`).join('')}
            </ul>
        ` : "<p>Nenhum aluno com destaque ainda</p>";
    }
    
    const recuperacaoList = [];
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
        
        let media = 0;
        if (tipo === "trimestral") {
            media = (nm1 + nm2 + nm3) / 3;
        } else {
            media = (nm1 + nm2) / 2;
        }
        
        if (media >= 5 && media < 7) {
            recuperacaoList.push({ aluno, media });
        }
    });
    
    const alunosRecuperacao = document.getElementById("alunosRecuperacao");
    if (alunosRecuperacao) {
        alunosRecuperacao.innerHTML = recuperacaoList.length ? `
            <ul>
                ${recuperacaoList.map(r => `<li>⚠️ ${r.aluno} - Média: ${r.media.toFixed(1)}</li>`).join('')}
            </ul>
        ` : "<p>Nenhum aluno em recuperação</p>";
    }
}

// ============================================
// EXPORTAR RELATÓRIO COMPLETO (CORRIGIDO)
// ============================================

function exportarRelatorioCompleto() {
    try {
        const disciplinaSelect = document.getElementById("disciplinaNotas");
        const disciplina = disciplinaSelect?.value || turmasConfig[turmaAtual].disciplinas[0];
        const alunos = turmasConfig[turmaAtual].alunos;
        const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
        
        const dadosExport = [];
        
        for (const aluno of alunos) {
            const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
            const nm1 = parseFloat(notas.nm1) || 0;
            const nm2 = parseFloat(notas.nm2) || 0;
            const nm3 = tipo === "trimestral" ? (parseFloat(notas.nm3) || 0) : 0;
            
            let mediaFinal = 0;
            if (tipo === "trimestral") {
                mediaFinal = (nm1 + nm2 + nm3) / 3;
            } else {
                mediaFinal = (nm1 + nm2) / 2;
            }
            
            const status = mediaFinal >= 7 ? "Aprovado" : (mediaFinal >= 5 ? "Recuperação" : "Reprovado");
            const vistos = dadosVistos[turmaAtual]?.alunos?.[aluno]?.total || 0;
            
            // Calcular frequência do aluno
            let presencasAluno = 0;
            let totalAulasAluno = 0;
            for (let key in dadosPresenca[turmaAtual]) {
                if (Array.isArray(dadosPresenca[turmaAtual][key])) {
                    dadosPresenca[turmaAtual][key].forEach(aula => {
                        totalAulasAluno++;
                        if (aula.presencas && aula.presencas[aluno] === true) {
                            presencasAluno++;
                        }
                    });
                }
            }
            const frequencia = totalAulasAluno > 0 ? ((presencasAluno / totalAulasAluno) * 100).toFixed(1) : "0";
            
            const row = {
                "Aluno": aluno,
                "NM1": nm1,
                "NM2": nm2,
                "Média Final": mediaFinal.toFixed(1),
                "Status": status,
                "Frequência (%)": frequencia,
                "Vistos": vistos
            };
            
            if (tipo === "trimestral") {
                row["NM3"] = nm3;
            }
            
            dadosExport.push(row);
        }
        
        const planilha = XLSX.utils.json_to_sheet(dadosExport);
        
        // Ajustar largura das colunas
        planilha['!cols'] = [
            { wch: 35 },  // Aluno
            { wch: 8 },   // NM1
            { wch: 8 },   // NM2
            { wch: 12 },  // Média Final
            { wch: 12 },  // Status
            { wch: 12 },  // Frequência
            { wch: 8 }    // Vistos
        ];
        if (tipo === "trimestral") {
            planilha['!cols'] = [
                { wch: 35 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 8 }
            ];
        }
        
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, `Relatorio_${turmasConfig[turmaAtual].nome}`);
        
        const dataAtual = new Date();
        const nomeArquivo = `Relatorio_${turmasConfig[turmaAtual].nome}_${dataAtual.getFullYear()}-${(dataAtual.getMonth()+1).toString().padStart(2,'0')}-${dataAtual.getDate().toString().padStart(2,'0')}.xlsx`;
        
        XLSX.writeFile(livro, nomeArquivo);
        alert("✅ Relatório exportado com sucesso!");
        
    } catch (error) {
        console.error("Erro ao exportar:", error);
        alert("Erro ao exportar relatório. Verifique o console para mais detalhes.");
    }
}

// ============================================
// ATUALIZAR CABEÇALHO DA TABELA DE NOTAS
// ============================================

function atualizarCabecalhoNotas() {
    const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
    const thead = document.querySelector("#tabelaNotas thead tr");
    if (!thead) return;
    
    if (tipo === "trimestral") {
        thead.innerHTML = `
            <th>Aluno</th>
            <th>NM1 <span class="info-tooltip" title="Nota do 1º Trimestre">ⓘ</span></th>
            <th>NM2 <span class="info-tooltip" title="Nota do 2º Trimestre">ⓘ</span></th>
            <th>NM3 <span class="info-tooltip" title="Nota do 3º Trimestre">ⓘ</span></th>
            <th>Média Final</th>
            <th>Status</th>
        `;
    } else {
        thead.innerHTML = `
            <th>Aluno</th>
            <th>NM1 <span class="info-tooltip" title="Nota do 1º Bimestre">ⓘ</span></th>
            <th>NM2 <span class="info-tooltip" title="Nota do 2º Bimestre">ⓘ</span></th>
            <th>Média Final</th>
            <th>Status</th>
        `;
    }
}

// ============================================
// TROCAR TURMA
// ============================================

function trocarTurma(turmaId) {
    turmaAtual = turmaId;
    
    document.querySelectorAll(".turma-btn").forEach(btn => {
        if (btn.dataset.turma === turmaId) {
            btn.classList.add("ativo");
        } else {
            btn.classList.remove("ativo");
        }
    });
    
    const turmaTitulo = document.getElementById("turmaTitulo");
    if (turmaTitulo) {
        turmaTitulo.innerHTML = `<h1>📚 ${turmasConfig[turmaId].nome} ${turmasConfig[turmaId].tipoAvaliacao === "bimestral" ? "(Avaliação Bimestral)" : "(Avaliação Trimestral)"}</h1>`;
    }
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turmasConfig[turmaId].disciplinas.forEach(disciplina => {
            const option = document.createElement("option");
            option.value = disciplina;
            option.textContent = disciplina;
            selectDisciplina.appendChild(option);
        });
    }
    
    atualizarCabecalhoNotas();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
}

// ============================================
// EXPORTAR PRESENÇA
// ============================================

function exportarPresenca() {
    try {
        const alunos = turmasConfig[turmaAtual].alunos;
        const dadosExport = [];
        
        for (const aluno of alunos) {
            let totalPresencas = 0;
            let totalAulas = 0;
            const aulasPorMes = {};
            
            for (let key in dadosPresenca[turmaAtual]) {
                if (Array.isArray(dadosPresenca[turmaAtual][key])) {
                    dadosPresenca[turmaAtual][key].forEach(aula => {
                        totalAulas++;
                        if (aula.presencas && aula.presencas[aluno] === true) {
                            totalPresencas++;
                        }
                        const [ano, mes] = key.split('-');
                        const mesNome = `${mes}/${ano}`;
                        if (!aulasPorMes[mesNome]) {
                            aulasPorMes[mesNome] = { presencas: 0, total: 0 };
                        }
                        aulasPorMes[mesNome].total++;
                        if (aula.presencas && aula.presencas[aluno] === true) {
                            aulasPorMes[mesNome].presencas++;
                        }
                    });
                }
            }
            
            const frequencia = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : "0";
            
            const row = {
                "Aluno": aluno,
                "Total Aulas": totalAulas,
                "Total Presenças": totalPresencas,
                "Frequência (%)": frequencia
            };
            
            for (let mes in aulasPorMes) {
                const freqMes = aulasPorMes[mes].total > 0 ? ((aulasPorMes[mes].presencas / aulasPorMes[mes].total) * 100).toFixed(1) : "0";
                row[`${mes} - Presenças`] = `${aulasPorMes[mes].presencas}/${aulasPorMes[mes].total} (${freqMes}%)`;
            }
            
            dadosExport.push(row);
        }
        
        const planilha = XLSX.utils.json_to_sheet(dadosExport);
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, `Presenca_${turmasConfig[turmaAtual].nome}`);
        XLSX.writeFile(livro, `Presenca_${turmasConfig[turmaAtual].nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
        alert("✅ Relatório de presença exportado!");
    } catch(error) {
        alert("Erro ao exportar presença: " + error.message);
    }
}

// ============================================
// EXPORTAR VISTOS
// ============================================

function exportarVistos() {
    try {
        const alunos = turmasConfig[turmaAtual].alunos;
        const dadosExport = [];
        
        for (const aluno of alunos) {
            const dados = dadosVistos[turmaAtual]?.alunos?.[aluno] || { total: 0, registros: [] };
            dadosExport.push({
                "Aluno": aluno,
                "Total de Vistos": dados.total,
                "Última Participação": dados.ultima ? new Date(dados.ultima).toLocaleDateString('pt-BR') : "-",
                "Histórico": dados.registros.map(r => `${new Date(r.data).toLocaleDateString('pt-BR')}: ${r.descricao}`).join("; ")
            });
        }
        
        const planilha = XLSX.utils.json_to_sheet(dadosExport);
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, `Vistos_${turmasConfig[turmaAtual].nome}`);
        XLSX.writeFile(livro, `Vistos_${turmasConfig[turmaAtual].nome}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
        alert("✅ Relatório de vistos exportado!");
    } catch(error) {
        alert("Erro ao exportar vistos: " + error.message);
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    carregarDadosSalvos();
    
    // Botões das turmas
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.addEventListener("click", () => trocarTurma(btn.dataset.turma));
    });
    
    // Abas
    document.querySelectorAll(".aba-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".aba-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            const abaId = `aba${btn.dataset.aba.charAt(0).toUpperCase() + btn.dataset.aba.slice(1)}`;
            const abaElement = document.getElementById(abaId);
            if (abaElement) abaElement.classList.add("active");
            if (btn.dataset.aba === "relatorios") renderizarRelatorios();
        });
    });
    
    // Notas
    const disciplinaNotas = document.getElementById("disciplinaNotas");
    if (disciplinaNotas) disciplinaNotas.addEventListener("change", renderizarNotas);
    
    const salvarNotasBtn = document.getElementById("salvarNotas");
    if (salvarNotasBtn) salvarNotasBtn.addEventListener("click", salvarNotas);
    
    const exportarNotasBtn = document.getElementById("exportarNotas");
    if (exportarNotasBtn) {
        exportarNotasBtn.addEventListener("click", () => {
            const disciplina = document.getElementById("disciplinaNotas")?.value;
            const tipo = turmasConfig[turmaAtual].tipoAvaliacao;
            const dados = turmasConfig[turmaAtual].alunos.map(aluno => {
                const notas = dadosNotas[turmaAtual]?.[disciplina]?.[aluno] || {};
                if (tipo === "trimestral") {
                    return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
                } else {
                    return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "" };
                }
            });
            const planilha = XLSX.utils.json_to_sheet(dados);
            const livro = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(livro, planilha, "Notas");
            XLSX.writeFile(livro, `Notas_${turmasConfig[turmaAtual].nome}.xlsx`);
            alert("✅ Notas exportadas!");
        });
    }
    
    // Presença
    const adicionarAulaBtn = document.getElementById("adicionarAula");
    if (adicionarAulaBtn) adicionarAulaBtn.addEventListener("click", adicionarAula);
    
    const salvarPresencaBtn = document.getElementById("salvarPresenca");
    if (salvarPresencaBtn) {
        salvarPresencaBtn.addEventListener("click", () => {
            salvarDados();
            alert("✅ Presenças salvas!");
        });
    }
    
    const exportarPresencaBtn = document.getElementById("exportarPresenca");
    if (exportarPresencaBtn) exportarPresencaBtn.addEventListener("click", exportarPresenca);
    
    // Vistos
    const adicionarVistoBtn = document.getElementById("adicionarVisto");
    if (adicionarVistoBtn) {
        adicionarVistoBtn.addEventListener("click", () => {
            if (turmasConfig[turmaAtual].alunos.length > 0) {
                abrirModalVisto(turmasConfig[turmaAtual].alunos[0]);
            }
        });
    }
    
    const salvarVistosBtn = document.getElementById("salvarVistos");
    if (salvarVistosBtn) {
        salvarVistosBtn.addEventListener("click", () => {
            salvarDados();
            alert("✅ Vistos salvos!");
        });
    }
    
    const exportarVistosBtn = document.getElementById("exportarVistos");
    if (exportarVistosBtn) exportarVistosBtn.addEventListener("click", exportarVistos);
    
    // Relatórios
    const exportarRelatorioBtn = document.getElementById("exportarRelatorioGeral");
    if (exportarRelatorioBtn) {
        exportarRelatorioBtn.addEventListener("click", exportarRelatorioCompleto);
    }
    
    // Modal
    const modalFechar = document.querySelector(".modal-fechar");
    if (modalFechar) modalFechar.addEventListener("click", fecharModalVisto);
    
    const modalSalvarVisto = document.getElementById("modalSalvarVisto");
    if (modalSalvarVisto) modalSalvarVisto.addEventListener("click", salvarVisto);
    
    window.onclick = (event) => {
        const modal = document.getElementById("modalVisto");
        if (event.target === modal) fecharModalVisto();
    };
    
    // Filtros
    const mesPresenca = document.getElementById("mesPresenca");
    if (mesPresenca) mesPresenca.addEventListener("change", renderizarPresenca);
    
    const anoPresenca = document.getElementById("anoPresenca");
    if (anoPresenca) anoPresenca.addEventListener("change", renderizarPresenca);
    
    const dataVisto = document.getElementById("dataVisto");
    if (dataVisto) dataVisto.valueAsDate = new Date();
    
    // Iniciar
    trocarTurma("1adm");
});
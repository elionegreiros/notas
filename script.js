// Configuração das turmas (agora sem dados de alunos embutidos)
const turmasConfig = {
    "1adm": { 
        nome: "1º Administração", 
        alunos: [],  // Será carregado do JSON
        disciplinas: ["Inteligência Artificial"],
        arquivoAlunos: "alunos_1_adm.json"
    },
    "1amb": { 
        nome: "1º Controle Ambiental", 
        alunos: [],
        disciplinas: ["Inteligência Artificial"],
        arquivoAlunos: "alunos_1_ambiental.json"
    },
    "2ds": { 
        nome: "2º Desenvolvimento de Sistemas", 
        alunos: [],
        disciplinas: [
            "Inteligência Artificial", "MENTORIAS TEC II", "FUNDAMENTOS DE UI / UX OU IHC",
            "PENSAMENTO COMPUTACIONAL II", "PROGRAMAÇÃO ESTRUTURADA", "PROGRAMAÇÃO ORIENTADA À OBJETOS - POO",
            "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS", "PROGRAMAÇÃO WEB FRONT-END", "ARQUITETURA DE MICROSSERVIÇOS",
            "INTRODUÇÃO AO ECOSSISTEMA DEVops", "MANUTENÇÃO DE SISTEMAS"
        ],
        arquivoAlunos: "alunos_2_desenvolvimento.json"
    },
    "inf1": { 
        nome: "Informática - Módulo I", 
        alunos: [],
        disciplinas: ["Análise e Lógica de Programação"],
        arquivoAlunos: "alunos_informatica_mod1.json"
    },
    "inf5": { 
        nome: "Informática - Módulo V", 
        alunos: [],
        disciplinas: ["Empreendedorismo para TI"],
        arquivoAlunos: "alunos_informatica_mod5.json"
    }
};

// Estado global
let turmaAtual = "1adm";
let dadosNotas = {};
let dadosPresenca = {};
let dadosVistos = {};
let isLoading = false;

// Função para carregar alunos de um arquivo JSON
async function carregarAlunos(turmaId) {
    const turma = turmasConfig[turmaId];
    if (!turma || turma.arquivoAlunos) {
        try {
            const response = await fetch(`dados/${turma.arquivoAlunos}`);
            if (response.ok) {
                const alunos = await response.json();
                turmasConfig[turmaId].alunos = alunos;
                return true;
            }
        } catch (error) {
            console.error(`Erro ao carregar alunos da turma ${turmaId}:`, error);
        }
    }
    return false;
}

// Carregar todos os alunos ao iniciar
async function carregarTodosAlunos() {
    const promises = Object.keys(turmasConfig).map(turmaId => carregarAlunos(turmaId));
    await Promise.all(promises);
}

// Carregar dados do localStorage
function carregarDadosSalvos() {
    const saved = localStorage.getItem("sistemaAcademico");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            dadosNotas = data.notas || {};
            dadosPresenca = data.presenca || {};
            dadosVistos = data.vistos || {};
        } catch (e) {
            console.error("Erro ao carregar dados salvos:", e);
        }
    }
    
    // Inicializar estruturas para turmas que não existem
    for (let turmaId in turmasConfig) {
        if (!dadosNotas[turmaId]) dadosNotas[turmaId] = {};
        if (!dadosPresenca[turmaId]) dadosPresenca[turmaId] = {};
        if (!dadosVistos[turmaId]) dadosVistos[turmaId] = {};
        
        const turma = turmasConfig[turmaId];
        const alunos = turma.alunos;
        const disciplinas = turma.disciplinas;
        
        if (alunos && alunos.length > 0) {
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
    
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const alunos = turma.alunos;
    const notasTurma = dadosNotas[turmaAtual][disciplina] || {};
    const tbody = document.getElementById("tbodyNotas");
    if (!tbody) return;
    
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
        } else if (media > 0) {
            status = "✗ Reprovado";
            statusClass = "status-reprovado";
        } else {
            status = "⏳ Sem notas";
            statusClass = "";
        }
        
        const row = tbody.insertRow();
        row.insertCell(0).textContent = aluno;
        
        [1, 2, 3].forEach(trimestre => {
            const cell = row.insertCell(trimestre);
            const input = document.createElement("input");
            input.type = "number";
            input.step = "0.1";
            input.min = "0";
            input.max = "10";
            input.value = notas[`nm${trimestre}`];
            input.classList.add("nota-input");
            input.dataset.aluno = aluno;
            input.dataset.trimestre = `nm${trimestre}`;
            cell.appendChild(input);
        });
        
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
        if (valor !== "" && (isNaN(valor) || valor < 0 || valor > 10)) valor = "";
        
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
    if (!container) return;
    
    container.innerHTML = "";
    
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    if (aulas.length === 0) {
        container.innerHTML = '<div class="lista-vazia" style="padding: 20px; text-align: center; background: #f8f9fa; border-radius: 8px;">📭 Nenhuma aula registrada neste mês. Clique em "+ Nova Aula" para começar.</div>';
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
                    ${turma.alunos.map(aluno => `
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

// Exportar presença/frequência
function exportarPresenca() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const dadosFrequencia = [];
    
    // Coletar todos os alunos e calcular percentual de frequência
    turma.alunos.forEach(aluno => {
        let totalAulas = 0;
        let totalPresencas = 0;
        
        for (let key in dadosPresenca[turmaAtual]) {
            dadosPresenca[turmaAtual][key].forEach(aula => {
                totalAulas++;
                if (aula.presencas && aula.presencas[aluno]) {
                    totalPresencas++;
                }
            });
        }
        
        const percentual = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : 0;
        
        dadosFrequencia.push({
            "Aluno": aluno,
            "Total de Aulas": totalAulas,
            "Presenças": totalPresencas,
            "Faltas": totalAulas - totalPresencas,
            "Frequência (%)": percentual
        });
    });
    
    const planilha = XLSX.utils.json_to_sheet(dadosFrequencia);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Frequencia_${turma.nome}`);
    XLSX.writeFile(livro, `Frequencia_${turma.nome}_${new Date().toLocaleDateString()}.xlsx`);
    alert("✅ Frequência exportada com sucesso!");
}

// Renderizar vistos
let alunoSelecionadoVisto = null;

function renderizarVistos() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const vistosTurma = dadosVistos[turmaAtual].alunos || {};
    const tbody = document.getElementById("tbodyVistos");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    turma.alunos.forEach(aluno => {
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

function adicionarVistoRapido() {
    const data = document.getElementById("dataVisto").value;
    const descricao = document.getElementById("descVisto").value.trim();
    
    if (!data) {
        alert("Selecione uma data para o visto!");
        return;
    }
    
    if (!descricao) {
        alert("Digite uma descrição para o visto!");
        return;
    }
    
    if (turmasConfig[turmaAtual].alunos.length === 0) return;
    
    // Para este exemplo, vamos dar visto para todos os alunos? 
    // Melhor: abrir modal para selecionar aluno
    abrirModalVisto(turmasConfig[turmaAtual].alunos[0]);
}

// Exportar vistos
function exportarVistos() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const dadosExport = turma.alunos.map(aluno => {
        const vistos = dadosVistos[turmaAtual].alunos[aluno] || { total: 0, registros: [] };
        return {
            "Aluno": aluno,
            "Total de Vistos": vistos.total,
            "Última Participação": vistos.ultima ? new Date(vistos.ultima).toLocaleDateString('pt-BR') : "-",
            "Registros": vistos.registros.map(r => `${new Date(r.data).toLocaleDateString('pt-BR')}: ${r.descricao}`).join("; ")
        };
    });
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Vistos_${turma.nome}`);
    XLSX.writeFile(livro, `Vistos_${turma.nome}_${new Date().toLocaleDateString()}.xlsx`);
    alert("✅ Vistos exportados com sucesso!");
}

// Renderizar relatórios
function renderizarRelatorios() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || turma.disciplinas[0];
    const alunos = turma.alunos;
    
    // Resumo de Notas
    let aprovados = 0, recuperacao = 0, reprovados = 0, semNotas = 0;
    let somaMedias = 0;
    let alunosComNota = 0;
    
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || { nm1: "", nm2: "", nm3: "" };
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const media = (nm1 + nm2 + nm3) / 3;
        
        if (nm1 === 0 && nm2 === 0 && nm3 === 0) {
            semNotas++;
        } else {
            alunosComNota++;
            if (media >= 7) aprovados++;
            else if (media >= 5) recuperacao++;
            else reprovados++;
            somaMedias += media;
        }
    });
    
    const mediaGeral = alunosComNota > 0 ? (somaMedias / alunosComNota).toFixed(1) : 0;
    
    const resumoNotasDiv = document.getElementById("resumoNotas");
    if (resumoNotasDiv) {
        resumoNotasDiv.innerHTML = `
            <ul>
                <li>📊 Média Geral da Turma: <strong>${mediaGeral}</strong></li>
                <li>✅ Aprovados: <strong style="color:#2e7d32">${aprovados}</strong></li>
                <li>⚠️ Recuperação: <strong style="color:#f57c00">${recuperacao}</strong></li>
                <li>❌ Reprovados: <strong style="color:#c62828">${reprovados}</strong></li>
                <li>📝 Sem notas: <strong>${semNotas}</strong></li>
            </ul>
        `;
    }
    
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
    
    const frequenciaMedia = totalAulas > 0 && alunos.length > 0 ? ((totalPresencas / (totalAulas * alunos.length)) * 100).toFixed(1) : 0;
    
    const resumoFrequenciaDiv = document.getElementById("resumoFrequencia");
    if (resumoFrequenciaDiv) {
        resumoFrequenciaDiv.innerHTML = `
            <ul>
                <li>📅 Total de Aulas: <strong>${totalAulas}</strong></li>
                <li>👥 Total de Presenças: <strong>${totalPresencas}</strong></li>
                <li>📈 Frequência Média: <strong>${frequenciaMedia}%</strong></li>
            </ul>
        `;
    }
    
    // Alunos Destaque (mais vistos)
    const destaques = [];
    alunos.forEach(aluno => {
        const vistos = dadosVistos[turmaAtual].alunos[aluno]?.total || 0;
        if (vistos >= 3) {
            destaques.push({ aluno, vistos });
        }
    });
    destaques.sort((a, b) => b.vistos - a.vistos);
    
    const alunosDestaqueDiv = document.getElementById("alunosDestaque");
    if (alunosDestaqueDiv) {
        alunosDestaqueDiv.innerHTML = destaques.length ? `
            <ul>
                ${destaques.slice(0,5).map(d => `<li>⭐ ${d.aluno} - ${d.vistos} vistos</li>`).join('')}
            </ul>
        ` : "<p>Nenhum aluno com destaque ainda</p>";
    }
    
    // Alunos em Recuperação
    const recuperacaoList = [];
    alunos.forEach(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || { nm1: "", nm2: "", nm3: "" };
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const media = (nm1 + nm2 + nm3) / 3;
        if (media >= 5 && media < 7 && (nm1 !== 0 || nm2 !== 0 || nm3 !== 0)) {
            recuperacaoList.push({ aluno, media });
        }
    });
    
    const alunosRecuperacaoDiv = document.getElementById("alunosRecuperacao");
    if (alunosRecuperacaoDiv) {
        alunosRecuperacaoDiv.innerHTML = recuperacaoList.length ? `
            <ul>
                ${recuperacaoList.map(r => `<li>⚠️ ${r.aluno} - Média: ${r.media.toFixed(1)}</li>`).join('')}
            </ul>
        ` : "<p>Nenhum aluno em recuperação</p>";
    }
}

// Exportar relatório completo
function exportarRelatorioCompleto() {
    const turma = turmasConfig[turmaAtual];
    if (!turma || !turma.alunos) return;
    
    const disciplina = document.getElementById("disciplinaNotas")?.value || turma.disciplinas[0];
    const alunos = turma.alunos;
    
    const dadosExport = alunos.map(aluno => {
        const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
        const nm1 = parseFloat(notas.nm1) || 0;
        const nm2 = parseFloat(notas.nm2) || 0;
        const nm3 = parseFloat(notas.nm3) || 0;
        const mediaFinal = (nm1 + nm2 + nm3) / 3;
        let status = "Sem notas";
        if (nm1 !== 0 || nm2 !== 0 || nm3 !== 0) {
            status = mediaFinal >= 7 ? "Aprovado" : (mediaFinal >= 5 ? "Recuperação" : "Reprovado");
        }
        const vistos = dadosVistos[turmaAtual].alunos[aluno]?.total || 0;
        
        // Calcular frequência do aluno
        let totalAulas = 0;
        let totalPresencas = 0;
        for (let key in dadosPresenca[turmaAtual]) {
            dadosPresenca[turmaAtual][key].forEach(aula => {
                totalAulas++;
                if (aula.presencas && aula.presencas[aluno]) {
                    totalPresencas++;
                }
            });
        }
        const frequencia = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : 0;
        
        return {
            "Aluno": aluno,
            "NM1": nm1 || "",
            "NM2": nm2 || "",
            "NM3": nm3 || "",
            "Média Final": mediaFinal.toFixed(1),
            "Status": status,
            "Vistos de Participação": vistos,
            "Frequência (%)": frequencia
        };
    });
    
    const planilha = XLSX.utils.json_to_sheet(dadosExport);
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, `Relatorio_${turma.nome}`);
    XLSX.writeFile(livro, `Relatorio_${turma.nome}_${new Date().toLocaleDateString()}.xlsx`);
    alert("✅ Relatório completo exportado com sucesso!");
}

// Trocar turma
async function trocarTurma(turmaId) {
    if (isLoading) return;
    
    turmaAtual = turmaId;
    
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.classList.toggle("ativo", btn.dataset.turma === turmaId);
    });
    
    const turma = turmasConfig[turmaId];
    if (!turma) return;
    
    // Garantir que os alunos estão carregados
    if (turma.alunos.length === 0) {
        isLoading = true;
        await carregarAlunos(turmaId);
        isLoading = false;
    }
    
    document.getElementById("turmaTitulo").innerHTML = `<h1>📚 ${turma.nome}</h1>`;
    
    const selectDisciplina = document.getElementById("disciplinaNotas");
    if (selectDisciplina) {
        selectDisciplina.innerHTML = "";
        turma.disciplinas.forEach(disciplina => {
            const option = document.createElement("option");
            option.value = disciplina;
            option.textContent = disciplina;
            selectDisciplina.appendChild(option);
        });
    }
    
    // Recarregar dados para a nova turma
    carregarDadosSalvos();
    renderizarNotas();
    renderizarPresenca();
    renderizarVistos();
    renderizarRelatorios();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", async () => {
    // Mostrar loading
    console.log("Carregando sistema...");
    
    // Carregar todos os alunos dos JSONs
    await carregarTodosAlunos();
    
    // Carregar dados salvos
    carregarDadosSalvos();
    
    // Configurar eventos dos botões de turma
    document.querySelectorAll(".turma-btn").forEach(btn => {
        btn.addEventListener("click", () => trocarTurma(btn.dataset.turma));
    });
    
    // Configurar eventos das abas
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
    
    // Configurar eventos dos botões
    const disciplinaNotas = document.getElementById("disciplinaNotas");
    if (disciplinaNotas) disciplinaNotas.addEventListener("change", renderizarNotas);
    
    const salvarNotas = document.getElementById("salvarNotas");
    if (salvarNotas) salvarNotas.addEventListener("click", salvarNotas);
    
    const exportarNotas = document.getElementById("exportarNotas");
    if (exportarNotas) {
        exportarNotas.addEventListener("click", () => {
            const turma = turmasConfig[turmaAtual];
            const disciplina = document.getElementById("disciplinaNotas").value;
            const dados = turma.alunos.map(aluno => {
                const notas = dadosNotas[turmaAtual][disciplina]?.[aluno] || {};
                return { Aluno: aluno, NM1: notas.nm1 || "", NM2: notas.nm2 || "", NM3: notas.nm3 || "" };
            });
            const planilha = XLSX.utils.json_to_sheet(dados);
            const livro = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(livro, planilha, "Notas");
            XLSX.writeFile(livro, `Notas_${turma.nome}.xlsx`);
            alert("✅ Notas exportadas com sucesso!");
        });
    }
    
    const adicionarAulaBtn = document.getElementById("adicionarAula");
    if (adicionarAulaBtn) adicionarAulaBtn.addEventListener("click", adicionarAula);
    
    const salvarPresenca = document.getElementById("salvarPresenca");
    if (salvarPresenca) {
        salvarPresenca.addEventListener("click", () => {
            salvarDados();
            alert("✅ Presenças salvas!");
        });
    }
    
    const exportarPresenca = document.getElementById("exportarPresenca");
    if (exportarPresenca) exportarPresenca.addEventListener("click", exportarPresenca);
    
    const adicionarVisto = document.getElementById("adicionarVisto");
    if (adicionarVisto) adicionarVisto.addEventListener("click", adicionarVistoRapido);
    
    const salvarVistos = document.getElementById("salvarVistos");
    if (salvarVistos) {
        salvarVistos.addEventListener("click", () => {
            salvarDados();
            alert("✅ Vistos salvos!");
        });
    }
    
    const exportarVistos = document.getElementById("exportarVistos");
    if (exportarVistos) exportarVistos.addEventListener("click", exportarVistos);
    
    const exportarRelatorio = document.getElementById("exportarRelatorioGeral");
    if (exportarRelatorio) exportarRelatorio.addEventListener("click", exportarRelatorioCompleto);
    
    // Modal events
    const modalFechar = document.querySelector(".modal-fechar");
    if (modalFechar) {
        modalFechar.addEventListener("click", () => {
            document.getElementById("modalVisto").style.display = "none";
        });
    }
    
    const modalSalvar = document.getElementById("modalSalvarVisto");
    if (modalSalvar) modalSalvar.addEventListener("click", salvarVisto);
    
    window.onclick = (event) => {
        const modal = document.getElementById("modalVisto");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    
    const mesPresenca = document.getElementById("mesPresenca");
    if (mesPresenca) mesPresenca.addEventListener("change", renderizarPresenca);
    
    const anoPresenca = document.getElementById("anoPresenca");
    if (anoPresenca) anoPresenca.addEventListener("change", renderizarPresenca);
    
    const dataVisto = document.getElementById("dataVisto");
    if (dataVisto) dataVisto.valueAsDate = new Date();
    
    // Inicializar com a primeira turma
    await trocarTurma("1adm");
});
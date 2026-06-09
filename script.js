let dadosTurmas = {};
let alunosAtuais = [];
let dadosCadastrados = [];

// Carregar dados dos arquivos JSON
async function carregarDados() {
  try {
    // Carrega definição das turmas
    const respTurmas = await fetch('dados/turmas.json');
    dadosTurmas = await respTurmas.json();

    // Carregar dados salvos do localStorage
    const salvos = localStorage.getItem('dadosNotasProvas');
    if (salvos) {
      dadosCadastrados = JSON.parse(salvos);
    }

    // Preencher lista de turmas no formulário
    const selectTurma = document.getElementById('turma');
    selectTurma.innerHTML = '<option value="">Selecione a turma</option>';
    for (const nomeTurma of Object.keys(dadosTurmas)) {
      const opt = document.createElement('option');
      opt.value = nomeTurma;
      opt.textContent = nomeTurma;
      selectTurma.appendChild(opt);
    }

    // Preencher filtro de turmas
    const filtroTurma = document.getElementById('filtroTurma');
    filtroTurma.innerHTML = '<option value="todas">Todas as Turmas</option>';
    for (const nomeTurma of Object.keys(dadosTurmas)) {
      const opt = document.createElement('option');
      opt.value = nomeTurma;
      opt.textContent = nomeTurma;
      filtroTurma.appendChild(opt);
    }

    // Inicializar exibição
    exibirDados();

  } catch (erro) {
    console.error('Erro ao carregar dados:', erro);
    alert('Erro ao carregar dados das turmas/alunos');
  }
}

// Selecionar elementos
const selectTurma = document.getElementById('turma');
const selectDisciplina = document.getElementById('disciplina');
const selectAluno = document.getElementById('nomeAluno');
const filtroTurma = document.getElementById('filtroTurma');
const filtroDisciplina = document.getElementById('filtroDisciplina');
const btnExportar = document.getElementById('btnExportar');
const form = document.getElementById('formCadastro');
const listaDados = document.getElementById('listaDados');

// Atualizar disciplinas e alunos conforme turma selecionada
selectTurma.addEventListener('change', async function() {
  const turmaSelecionada = this.value;
  selectDisciplina.innerHTML = '<option value="">Selecione a disciplina</option>';
  selectAluno.innerHTML = '<option value="">Carregando alunos...</option>';
  selectAluno.disabled = true;
  alunosAtuais = [];
  
  if (turmaSelecionada && dadosTurmas[turmaSelecionada]) {
    // Preencher disciplinas da turma
    dadosTurmas[turmaSelecionada].disciplinas.forEach(disciplina => {
      const option = document.createElement('option');
      option.value = disciplina;
      option.textContent = disciplina;
      selectDisciplina.appendChild(option);
    });

    // Carregar lista de alunos do arquivo JSON correspondente
    try {
      const arquivo = dadosTurmas[turmaSelecionada].arquivo_alunos;
      const respAlunos = await fetch(`dados/${arquivo}`);
      alunosAtuais = await respAlunos.json();
      
      selectAluno.innerHTML = '<option value="">Selecione o aluno</option>';
      alunosAtuais.forEach(aluno => {
        const option = document.createElement('option');
        option.value = aluno;
        option.textContent = aluno;
        selectAluno.appendChild(option);
      });
      selectAluno.disabled = false;
    } catch (e) {
      selectAluno.innerHTML = '<option value="">Erro ao carregar alunos</option>';
      console.error(e);
    }
  } else {
    selectAluno.innerHTML = '<option value="">Selecione primeiro a turma</option>';
    selectAluno.disabled = true;
  }
});

// Atualizar filtro de disciplinas ao mudar turma no filtro
filtroTurma.addEventListener('change', function() {
  const turmaSelecionada = this.value;
  filtroDisciplina.innerHTML = '<option value="todas">Todas as Disciplinas</option>';
  
  if (turmaSelecionada !== 'todas' && dadosTurmas[turmaSelecionada]) {
    dadosTurmas[turmaSelecionada].disciplinas.forEach(disciplina => {
      const option = document.createElement('option');
      option.value = disciplina;
      option.textContent = disciplina;
      filtroDisciplina.appendChild(option);
    });
  }
  exibirDados();
});

filtroDisciplina.addEventListener('change', exibirDados);

// Salvar dados no localStorage
function salvarDados() {
  localStorage.setItem('dadosNotasProvas', JSON.stringify(dadosCadastrados));
}

// Exibir dados com filtros aplicados
function exibirDados() {
  listaDados.innerHTML = '';

  if (dadosCadastrados.length === 0) {
    listaDados.innerHTML = '<div class="lista-vazia">Nenhum dado cadastrado ainda.</div>';
    return;
  }

  // Aplicar filtros
  const turmaFiltro = filtroTurma.value;
  const disciplinaFiltro = filtroDisciplina.value;

  let dadosFiltrados = dadosCadastrados;

  if (turmaFiltro !== 'todas') {
    dadosFiltrados = dadosFiltrados.filter(item => item.turma === turmaFiltro);
  }
  if (disciplinaFiltro !== 'todas') {
    dadosFiltrados = dadosFiltrados.filter(item => item.disciplina === disciplinaFiltro);
  }

  if (dadosFiltrados.length === 0) {
    listaDados.innerHTML = '<div class="lista-vazia">Nenhum registro encontrado com esses filtros.</div>';
    return;
  }

  // Criar cartões de visualização
  dadosFiltrados.forEach((item, index) => {
    // Encontrar o índice real no array original
    const originalIndex = dadosCadastrados.findIndex((d, i) => 
      d.turma === item.turma && 
      d.disciplina === item.disciplina && 
      d.nomeAluno === item.nomeAluno && 
      d.dataProva === item.dataProva && 
      d.nota === item.nota
    );
    
    const cartao = document.createElement('div');
    cartao.className = 'cartao-dado';

    let classeNota = 'baixa';
    if (item.nota >= 7) classeNota = 'alta';
    else if (item.nota >= 5) classeNota = 'media';

    cartao.innerHTML = `
            <div class="info">
                <p><strong>Turma:</strong> ${item.turma}</p>
                <p><strong>Disciplina:</strong> ${item.disciplina}</p>
                <p><strong>Aluno:</strong> ${item.nomeAluno}</p>
                <p><strong>Data da Prova:</strong> ${new Date(item.dataProva).toLocaleDateString('pt-BR')}</p>
                <p class="nota ${classeNota}"><strong>Nota:</strong> ${item.nota.toFixed(1)}</p>
            </div>
            <div class="acoes">
                <button onclick="excluirDado(${originalIndex})">Excluir</button>
                <button onclick="editarDado(${originalIndex})">Editar</button>
            </div>
        `;

    listaDados.appendChild(cartao);
  });
}

// Excluir registro
function excluirDado(index) {
  if (confirm('Deseja realmente excluir este registro?')) {
    dadosCadastrados.splice(index, 1);
    salvarDados();
    exibirDados();
  }
}

// Editar registro
async function editarDado(index) {
  const item = dadosCadastrados[index];
  
  // Preencher o formulário com os dados do item
  document.getElementById('turma').value = item.turma;
  
  // Aguardar o carregamento das disciplinas e alunos
  const event = new Event('change');
  selectTurma.dispatchEvent(event);
  
  // Aguardar um pouco para o select de disciplinas e alunos serem populados
  setTimeout(() => {
    selectDisciplina.value = item.disciplina;
    selectAluno.value = item.nomeAluno;
    document.getElementById('dataProva').value = item.dataProva;
    document.getElementById('nota').value = item.nota;
  }, 200);
  
  // Remover o registro antigo
  dadosCadastrados.splice(index, 1);
  salvarDados();
  exibirDados();
  
  // Rolar para o formulário
  document.querySelector('.formulario').scrollIntoView({ behavior: 'smooth' });
}

// Capturar envio do formulário
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Validações
  if (!selectTurma.value) {
    alert('Selecione uma turma!');
    return;
  }
  if (!selectDisciplina.value) {
    alert('Selecione uma disciplina!');
    return;
  }
  if (!selectAluno.value) {
    alert('Selecione um aluno!');
    return;
  }
  if (!document.getElementById('dataProva').value) {
    alert('Selecione a data da prova!');
    return;
  }
  if (!document.getElementById('nota').value) {
    alert('Informe a nota!');
    return;
  }

  const novaNota = parseFloat(document.getElementById('nota').value);
  if (novaNota < 0 || novaNota > 10) {
    alert('A nota deve estar entre 0 e 10!');
    return;
  }

  const novoDado = {
    turma: selectTurma.value,
    disciplina: selectDisciplina.value,
    nomeAluno: selectAluno.value,
    dataProva: document.getElementById('dataProva').value,
    nota: novaNota
  };

  dadosCadastrados.push(novoDado);
  salvarDados();
  exibirDados();
  form.reset();
  
  // Resetar os selects
  selectDisciplina.innerHTML = '<option value="">Selecione primeiro a turma</option>';
  selectAluno.innerHTML = '<option value="">Selecione primeiro a turma</option>';
  selectAluno.disabled = true;
});

// Exportar para Excel
btnExportar.addEventListener('click', function() {
  if (dadosCadastrados.length === 0) {
    alert('Não há dados para exportar!');
    return;
  }

  const turmaFiltro = filtroTurma.value;
  const disciplinaFiltro = filtroDisciplina.value;

  let dadosParaExportar = dadosCadastrados;

  if (turmaFiltro !== 'todas') {
    dadosParaExportar = dadosParaExportar.filter(item => item.turma === turmaFiltro);
  }
  if (disciplinaFiltro !== 'todas') {
    dadosParaExportar = dadosParaExportar.filter(item => item.disciplina === disciplinaFiltro);
  }

  if (dadosParaExportar.length === 0) {
    alert('Não há dados com os filtros selecionados para exportar!');
    return;
  }

  const dadosFormatados = dadosParaExportar.map(item => ({
    'Turma': item.turma,
    'Disciplina': item.disciplina,
    'Nome do Aluno': item.nomeAluno,
    'Data da Prova': new Date(item.dataProva).toLocaleDateString('pt-BR'),
    'Nota': item.nota.toFixed(1)
  }));

  const planilha = XLSX.utils.json_to_sheet(dadosFormatados);
  const livro = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(livro, planilha, 'Notas e Provas');

  const agora = new Date();
  const dataArquivo = `${agora.getFullYear()}-${(agora.getMonth()+1).toString().padStart(2,'0')}-${agora.getDate().toString().padStart(2,'0')}_${agora.getHours().toString().padStart(2,'0')}h${agora.getMinutes().toString().padStart(2,'0')}`;
  XLSX.writeFile(livro, `Controle_Notas_${dataArquivo}.xlsx`);
});

// Inicializar sistema
carregarDados();
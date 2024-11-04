const Aluno = require('../models/aluno');

let alunos = []; 

// Função para criar um novo aluno
exports.createAluno = (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const novoAluno = new Aluno(nome, email, nome_curso);
    alunos.push(novoAluno);
    res.status(201).json({ message: 'Aluno criado com sucesso!', aluno: novoAluno });
};

// Função para listar todos os alunos
exports.getAlunos = (req, res) => {
  res.status(200).json(alunos);
};

// Função para buscar um aluno específico por ID
exports.getAlunoById = (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  res.status(200).json(aluno);
};

// Função para buscar um aluno específico por ID
exports.getAlunoByName = (req, res) => {
  const aluno = alunos.find(a => a.name === parseInt(req.params.name));
  if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  res.status(200).json(aluno);
};

// Função para deletar um aluno específico por ID
exports.deleteAluno = (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  alunos = alunos.filter(a => a.id !== parseInt(req.params.id));
  res.status(200).json({ message: 'Aluno deletado com sucesso!' });
}

// Função para atualizar um aluno específico por ID
exports.updateAluno = (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  const { nome, email, nome_curso } = req.body;
  aluno.nome = nome;
  aluno.email = email;
  aluno.nome_curso = nome_curso;
  res.status(200).json({ message: 'Aluno atualizado com sucesso!', aluno });
};

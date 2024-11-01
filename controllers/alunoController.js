const Aluno = require('../models/aluno');

let alunos = []; 

// Função para criar um novo aluno
exports.createAluno = (req, res) => {
    const { id, nome, email, nome_curso } = req.body;
    const novoAluno = new Aluno(id, nome, email, nome_curso);
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

const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rota para criar um novo aluno
router.post('/', alunoController.createAluno);

// Rota para listar todos os alunos
router.get('/', alunoController.getAlunos);

// Rota para buscar um aluno específico pelo ID
router.get('/:id', alunoController.getAlunoById);

// Rota para buscar um aluno específico pelo ID
router.get('/:name', alunoController.getAlunoByName);

// Rota para deletar um aluno específico pelo ID
router.delete('/:id', alunoController.deleteAluno);

// Rota para atualizar um aluno específico pelo ID
router.put('/:id', alunoController.updateAluno);

module.exports = router;

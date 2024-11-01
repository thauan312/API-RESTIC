const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');

app.use(express.json());

// Rotas
app.use('/alunos', alunoRoutes);

module.exports = app;

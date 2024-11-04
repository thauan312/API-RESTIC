import {v4 as uuidv4} from "uuid"

class Aluno {
  constructor(nome, email, nome_curso) {
      this.id = uuidv4();
      this.nome = nome;
      this.email = email;
      this.nome_curso = nome_curso;
  }
}

module.exports = Aluno;

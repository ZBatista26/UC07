
const express = require('express'); // biblioteca (sempre em cima) 
const AlunoController = require('../controllers/index');

// sistema de roteamento do express (todo gereciamento de rota dentro do router)
const router = express.Router()
// criando
router.post("/alunos", AlunoController.criar)  // passando o path e pegando a funçao de criar no controller

// pegando todos
router.get("/alunos", AlunoController.listarTodos ) // passando o path e pegando a funçao de listar todos no controller

// pegando por matricula
router.get("/aluno/:matricula", AlunoController.listarPorMatricula) // passando o path e pegando a funçao de listar por matricula no controller

// editando
router.put("/aluno/:matricula", AlunoController.editar) // passando o path e pegando a funçao de editar no controller

// excluindo todos
router.delete("/alunos", AlunoController.excluirTodos) // passando o path e pegando a funçao de excluir todos no controller

// excluindo por matricula
router.delete("/aluno/:matricula", AlunoController.excluirPorMatricula) //passando o path e pegando a funçao de excluir por matricula no controller

module.exports = router;

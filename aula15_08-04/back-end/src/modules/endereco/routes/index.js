const express = require('express');
const EnderecoController = require('../controllers/index');

const router = express.Router()

router.post("/endereco", EnderecoController.criarEndereco)

router.get("/endereco", EnderecoController.ListarEndereco)

router.get("/endereco/aluno/:matricula", EnderecoController.listarPorAluno)

router.get("/endereco/cidade/:cidade", EnderecoController.listarPorCidade)

router.get("/endereco/cep/:cep", EnderecoController.listarPorCEP)

router.put("/endereco/:matricula", EnderecoController.editarEndereco)

module.exports = router;
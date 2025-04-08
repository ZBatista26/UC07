const AlunoModel = require('../models/index'); //importanto o module do models Aluno


class AlunoController {
    static async criar(requisicao, resposta) {
        try {
            const { matricula, nome, email, senha } = requisicao.body  // passando os dados da requisicao
            if (!matricula || !nome || !email || !senha) {
                return resposta.status(400).json({ mensagem: "Todos os campos devem ser preenchidos!" })
            }
            const novoAluno = await AlunoModel.criar(matricula, nome, email, senha);
            resposta.status(201).json({ mensagem: "Aluno criado com sucesso", aluno: novoAluno })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao criar aluno.", erro: error.message })
        }
    }

    static async listarTodos(requisicao, resposta) {
        try {
            
            const alunos = await AlunoModel.listar()
            if (alunos.length === 0) {
                return resposta.status(400).json({ mensagem: "Nenhum aluno cadastrado." })
            }
            resposta.status(200).json( alunos )
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao listar alunos.", erro: error.message })
        }
    }

    static async listarPorMatricula(requisicao, resposta) {
        try {
            const matricula = requisicao.params.matricula
            const aluno = await AlunoModel.listarPorMatricula(matricula)
            if (aluno.length === 0) {
                return resposta.status(400).json({ mensagem: "Nenhum aluno cadastrado." })
            }
            resposta.status(200).json(aluno)
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao listar o aluno selecionado.", erro: error.message })
        }
    }
    static async editar(requisicao, resposta) {
        // http://localhost:3000/aluno
        try {
            const matricula = requisicao.params.matricula
            const { nome, email, senha } = requisicao.body  // passando parametro para editar
            if (!nome || !email || !senha) {
                return resposta.status(400).json({ mensagem: "Todos os campos devem ser preenchidos" })
            }
            const aluno = await AlunoModel.editar(matricula, nome, email, senha)
            if (aluno.length === 0) {
                return resposta.status(400).json({ mensagem: "Aluno não encontrado" })
            }
            resposta.status(200).json({ mensagem: "Aluno editado com sucesso!", alunoEditado: aluno })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao atualizar os dados.", erro: error.message })
        }
    }
    static async excluirTodos(requisicao, resposta) {
        try {
            await AlunoModel.excluirTodos()
            resposta.status(200).json({ mensagem: "Todos os alunos foram excluidos." })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao apagar todos os alunos.", erro: error.message })
        }
    }
    static async excluirPorMatricula(requisicao, resposta) {
        try {
            const matricula = requisicao.params.matricula           // buscando matricula
            const aluno = await AlunoModel.excluirPorMatricula(matricula)  // verificar se o aluno existe pela matricula NA LISTA
            if (!aluno) {                                           // se não encontrar...
                return resposta.status(400).json({ mensagem: "Aluno não encontrado" })
            }
            await AlunoModel.excluirPorMatricula(matricula)     // apagando aluno se for encontrado
            resposta.status(200).json({ mensagem: "Aluno excluido com sucesso!" })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao excluir o aluno.", erro: error.message })
        }
    }
}

module.exports = AlunoController;
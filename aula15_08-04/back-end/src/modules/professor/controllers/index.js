
const ProfessorModel = require('../models/index');

class ProfessorController {
    static async criar(requisicao, resposta) {
        try {
            const { id, nome, email, disciplina } = requisicao.body
            if (!id || !nome || !email || !disciplina) {
                return resposta.status(400).json({ mensagem: "Todos os campos devem ser preenchidos!" })
            }
            const novoProfessor = await ProfessorModel.criar(id, nome, email, disciplina)
            resposta.status(200).json({ novoProfessor })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao cadastrar profesor.", erro: error.message })
        }
    }

    static async listar(requisicao, resposta) {
        try {
            const professores = await ProfessorModel.listar()
            if (professores.length === 0) {
                return resposta.status(400).json({ mensagem: "Nenhum professor cadastrado." })
            }
            resposta.status(200).json({ mensagem: "Lista de todos os professores!" })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao listar os professores.", erro: error.message })
        }
    }

    static async listarPorID(requisicao, resposta) {
        try {
            const id = requisicao.params.id
            const professor = await ProfessorModel.listarPorID(id)
            if (!professor) {
                return resposta.status(400).json({ mensagem: "Nenhum professor encontrado.", erro: error.message })
            }
            resposta.status(400).json(professor)
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao listar o professor selecionado", erro: error.message })
        }
    }

    static async editar(requisicao, resposta) {
        try {
            const id = requisicao.params.id
            if (!id) {
                return resposta.status(400).json({ mensagem: "Professor nao expecificado!", erro: error.message })
            }
            const professor = await ProfessorModel.editar()
            if (professor) {
                professor.email = novaemail || professor.email,
                professor.disciplina = novaDisciplina || professor.disciplina
            }
            resposta.status(200).json({ mensagem: "Dados do professor atualizado!" })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao atualizar os dados.", erro: error.message })
        }
    }

    static async excluir(requisicao, resposta) {
        try {
            const professores = await ProfessorModel.excluirTodos()
            if (professores === 0) {
                return resposta.status(200).json({ mensagem: "Nenhum professor cadastrado." })
            }
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao apagar todos os professore.", erro: error.message })
        }
    }
    
    static async excluirPorID(requisicao, resposta) {
        try {
            const id = requisicao.params.id
            const professor = await ProfessorModel.excluirPorID(id)
            if (professor === 0) {
                return resposta.status(200).json({ mensagem: "Professor apagado com sucesso" })
            }
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao deleter professores.", erro: error.message })
        }
    }
}


const TurmaModel = require('../model/index');

class TurmaController {
    static async criar(requisicao, resposta) {
        try {
            const { sala, turno, materia, professor } = requisicao.body
            if (!sala || !turno || !materia || !professor) {
                return resposta.status(400).json({ mensagem: "Todos os campos devem ser preenchidos!" })
            }
            const novaTurma = await TurmaModel.criar(sala, turno, materia, professor)
            resposta.status(200).json({ novaTurma })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao criar turma.", erro: error.message })
        }
    }

    static async listar(requisicao, resposta) {
        try {
            const turmas = await TurmaModel.listar()
            if (turmas.length === 0) {
                return resposta.status(400).json({ mensagem: "Nenhuma turma cadastrada." })
            }
            resposta.status(200).json({ mensagem: "Lista de todas as turmas!" })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao listar as turmas.", erro: error.message })
        }
    }

    static async listarPorID(requisicao, resposta) {
        try {
            const sala = requisicao.params.sala
            const turma = await TurmaModel.listarPorID(sala)
            if (!turma) {
                return resposta.status(400).json({ mensagem: "Nenhuma turma encontrado.", erro: error.message })
            }
            resposta.status(400).json(turma)
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao listar a turma selecionada", erro: error.message })
        }
    }

    static async editar(requisicao, resposta) {
        try {
            const sala = requisicao.params.sala
            if (!sala) {
                return resposta.status(400).json({ mensagem: "turma nao expecificado!", erro: error.message })
            }
            const turma = await TurmaModel.editar()
            if (turma) {
                turma.turno = novoTurno|| turma.turno,
                turma.materia = novaMateria || turma.materia,
                turma.professor = novoProfesor || turma.professor
            }
            resposta.status(200).json({ mensagem: "Dados da turma atualizado!" })
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao atualizar os dados.", erro: error.message })
        }
    }

    static async excluir(requisicao, resposta) {
        try {
            const turmas = await TurmaModel.excluirTodos()
            if (turmas === 0) {
                return resposta.status(200).json({ mensagem: "Nenhuma turma cadastrada." })
            }
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao apagar todos as turmas.", erro: error.message })
        }
    }
    
    static async excluirPorID(requisicao, resposta) {
        try {
            const sala = requisicao.params.sala
            const turma = await TurmaModel.excluirPorID(sala)
            if (turma === 0) {
                return resposta.status(200).json({ mensagem: "Turma apagado com sucesso" })
            }
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao deleter turma.", erro: error.message })
        }
    }
}

const EnderecoModel = require ('../models/index.js');

class EnderecoController {
    static async criarEndereco(requisicao, resposta){
        try {
            const {matricula, cep, numero, ponto_referencia} = requisicao.body;
            if (!matricula || !cep || !numero) {
                return resposta.status(400).json({msg: "Todos os campos devem ser preenchidos"})
            }
            const endereco = await EnderecoModel.criarEndereco(matricula, cep, numero, ponto_referencia)
            resposta.status(201).json(endereco)
        } catch (error) {
            resposta.status(500).json({ mensagem: 'Problema interno do servidor. Por favor tente mais tarde!', erro: error.message })
        }
    }

    static async editarEndereco(requisicao, resposta){
        try {
            const matricula = requisicao.params.matricula
            const {cep, numero, ponto_referencia} = requisicao.body
            if (!cep || !numero) {
                return resposta.status(400).json({msg: 'Todos os campos devem ser preenchidos'})
            }
            const endereco = await EnderecoModel.editarEndereco(matricula, cep, numero, ponto_referencia)
            if (endereco.length === 0){
                return resposta.status(400).json({msg: 'Endereco não encontrado'})
            }
            resposta.status(200).json({msg: 'Endereço atualizado com sucesso!', enderecoEditado: endereco})
        } catch (error) {
            resposta.status(500).json({msg: 'Problema interno do servidor. Por favor tente mais tarde!', erro: error.message })
        }
    }

    static async listarPorCEP(requisicao, resposta){
        try {
            const cep = requisicao.params.cep
            const endereco = await EnderecoModel.listarPorCEP(cep);
            if(endereco.length === 0){
                return resposta.status(404).json({msg: 'Cep não existe ou não foi cadastrado!'})
            }
            resposta.status(200).json(endereco)
        } catch (error) {
            resposta.status(500).json({msg: 'Problema interno do servidor. Por favor tente mais tarde!', erro: error.message })
        }
    }

    static async listarPorCidade(requisicao, resposta){
        try {
            const cidade = requisicao.params.cidade
            const endereco = await EnderecoModel.listarPorCidade(cidade);
            if (endereco.length === 0){
                return resposta.status(404).json({msg: 'Cidade não existe ou não cadastrado!'})
            }
            resposta.status(200).json(endereco)
        } catch (error) {
            resposta.status(500).json({msg: 'Problema interno do servidor. Por favor tente mais tarde!', erro: error.message })
        }
    }

    static async listarPorAluno(requisicao, resposta){
        try {
            const matricula = requisicao.params.matricula
            const endereco = await EnderecoModel.listarPorAluno(matricula);
            if (endereco.length === 0){
                return resposta.status(404).json({msg: 'matricula não existe ou não foi cadastrado!'})
            }
            resposta.status(200).json(endereco)
        } catch (error) {
            resposta.status(500).json({msg: 'Problema interno do servidor. Por favor tente mais tarde!', erro: error.message })
        }
    }

    static async ListarEndereco(requisicao, resposta){
        try {
            const endereco = await EnderecoModel.listarEndereco();
            if (endereco.length === 0){
                return resposta.status(400).json({msg: 'Nenhum endereço cadastrado!'})
            }
            resposta.status(200).json(endereco)
        } catch (error) {
            resposta.status(500).json({msg: 'Erro ao listar endereco', erro: error.message})
        }
    }
}

module.exports = EnderecoController
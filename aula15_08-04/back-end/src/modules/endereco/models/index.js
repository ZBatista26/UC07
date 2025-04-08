const axios = require('axios');
const { pool } = require('../../../config/database')


class EnderecoModel{
    
    static async criarEndereco(matricula, cep, numero, ponto_referencia){
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        //Desestruturação de objetos
        const {logradouro, complemento, bairro, localidade, uf} = resposta.data

        //froma estruturada 
        // const logradouro = resposta.data.logradouro
        // const complemento = resposta.data.complemento
        // const bairro = resposta.data.bairro
        // const localidade = resposta.data.localidade
        // const uf = resposta.data.uf

        // montando o array para a query

        const dados = [
            matricula,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            localidade,
            uf,
            ponto_referencia,
        ]

        const consulta = `INSERT into endereco(matricula, cep, logradouro, numero, complemento, bairro, localidade, uf, ponto_referencia) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows

    }
    static async editarEndereco(matricula, cep, numero, ponto_referencia){
        const resposta = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        const {logradouro, complemento, bairro, localidade, uf} = resposta.data
        const dados = [
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            localidade,
            uf,
            ponto_referencia,
            matricula
        ]

        const consulta = `update endereco set cep = $1, logradouro = $2, numero = $3,
        complemento = $4, bairro = $5, localidade = $6, uf = $7, ponto_referencia = $8 where matricula = $9 returning *`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows

    }
    static async listarPorCEP(cep){
        const dados = [cep]
        const consulta = `select * from endereco where cep = $1`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
    }
    static async listarPorCidade(cidade){
        const dados = [`%${cidade}%`]
        const consulta = `select * from endereco where lower(localidade) like lower($1) `
        const resultado = await pool.query(consulta, dados)
        return resultado.rows

    }
    static async listarPorAluno(matricula){
        const dados = [matricula]
        const consulta = `select aluno.matricula, aluno.nome, endereco.* from aluno
        join endereco on aluno.matricula = endereco.matricula
        where aluno.matricula = $1`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
        
    }
    static async listarEndereco(){
        const consulta =  `select * from endereco`
        const resultado = await pool.query(consulta)
        return resultado.rows

}

}

module.exports = EnderecoModel;

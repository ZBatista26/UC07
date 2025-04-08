
const { pool } = require('../../../config/database');

class AlunoModel {
    static async criar(matricula, nome, email, senha) {    // static para reaproveitar os parametros da classe (aluno) sem precisar instanciar
        const dados = [matricula, nome, email, senha]  // guardando os dados
        const consulta = `insert into aluno(matricula, nome, email, senha) values ($1, $2, $3, $4) returning *` // metodo para criar no banco - retornar todos os dados criados
        const novoAluno = await pool.query(consulta, dados)
        return novoAluno.rows
    }

    static async editar(matricula, nome, email, senha) {
        const dados = [matricula, nome, email, senha]
        const consulta = `update aluno set nome = $2, email = $3, senha = $4 where matricula = $1 returning *`
        const alunoAtualizado = await pool.query(consulta, dados)
        return alunoAtualizado.rows
    }

    static async listar() {
        const consulta = `select * from aluno`
        const alunos = await pool.query(consulta)  // chamar dados no banco
        return alunos.rows  // retornar todas as linhas do elemento
    }

    static async listarPorMatricula(matricula) {
        const dados = [matricula]
        const consulta = `select * from aluno where matricula = $1`
        const aluno = await pool.query(consulta, dados)
        return aluno.rows
    }

    static async excluirPorMatricula(matricula) {
        const dados = [matricula]
        const consulta = `delete from aluno where matricula = $1`
        await pool.query(consulta, dados)
    }

    static async excluirTodos() {
        const consulta = `delete from aluno`
        await pool.query(consulta)
    }
}

module.exports = AlunoModel;

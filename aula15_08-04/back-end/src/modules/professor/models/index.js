
const { pool } = require('../../../config/database');

class ProfessorModel {
    static async criar(id, nome, email, disciplina) {
        const dados = [id, nome, email, disciplina]
        const consulta = `insert into professor(id, nome, email, disciplina) values ($1, $2, $3, $4) returning *`
        const novoProfessor = await pool.query(consulta, dados)
        return novoProfessor.rows
    }

    static async editar(id, nome, email, disciplina) {
        const dados = [id, nome, email, disciplina]
        const consulta = `update professor set nome = $2, email = $3, disciplina = $4 where id = $1 returning *`
        const professorAtualizado = await pool.query(consulta, dados)
        return professorAtualizado.rows
    }

    static async listar() {
        const consulta = `select * from professor`
        const professores = await pool.query(consulta)   
        return professores.rows 
    }

    static async listarPorID(id) {
        const dados = [id]
        const consulta = `select from professor where id = $1`
        const professor = await pool.query(consulta, dados)
        return professor.rows
    }

    static async excluirPorID(id) {
        const dados = [id]
        const consulta = `delete from professor where id = $1 returning *`
        await pool.query(consulta, dados)
    }
    
    static async excluirTodos() {
        const consulta = `delete from professor returning *`
        await pool.query(consulta)
    }
};

module.exports = ProfessorModel


const { pool } = require('../../../config/database');

class TurmaModel {
    static async criar(sala, turno, materia, professor) {
        const dados = [sala, turno, materia, professor]
        const consulta = `insert into turma(sala, turno, materia, professor) values ($1, $2, $3, $4) returning *`
        const novaTurma = await pool.query(consulta, dados)
        return novaTurma.rows
    }

    static async editar(sala, turno, materia, professor) {
        const dados = [sala, turno, materia, professor]
        const consulta = `update turma set turno = $2, materia = $3, professor = $4 where sala = $1 returning *`
        const turmaAtualizada = await pool.query(consulta, dados)
        return turmaAtualizada.rows
    }

    static async listar() {
        const consulta = `select * from turma`
        const turmas = await pool.query(consulta)   
        return turmas.rows
    }

    static async listarPorID(sala) {
        const dados = [sala]
        const consulta = `select from turma where sala = $1`
        const turma = await pool.query(consulta, dados)
        return turma.rows
    }

    static async excluir() {
        const consulta = `delete from turma returning *`
        await pool.query(consulta)
    }

    static async excluirPorID(sala) {
        const dados = [sala]
        const consulta = `delete from turma where sala = $1 returning *`
        await pool.query(consulta, dados)
    }
};

module.exports = TurmaModel;

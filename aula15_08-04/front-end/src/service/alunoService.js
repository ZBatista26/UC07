import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
//
export const listarTodos = async () => axios.get(`${API_URL}/alunos`);
export const listarPorMatricula = async (matricula) => axios.get(`${API_URL}/aluno/${matricula}`);
export const deletarTodos = async () => axios.delete(`${API_URL}/alunos`);
export const deletarPorMatricula = async (matricula) => axios.delete(`${API_URL}/aluno/${matricula}`);
export const criar = async (aluno) => axios.post(`${API_URL}/alunos`, aluno);
export const editar = async (matricula, aluno) => axios.put(`${API_URL}/aluno/${matricula}`, aluno);


// router.post("/alunos", AlunoController.criar);
// router.get("/alunos", AlunoController.listarTodos);
// router.get("/aluno/:matricula", AlunoController.listarPorMatricula);
// router.put("/aluno/:matricula", AlunoController.editar);
// router.delete("/alunos", AlunoController.excluirTodos);
// router.delete("/aluno/:matricula", AlunoController.excluirPorMatricula);

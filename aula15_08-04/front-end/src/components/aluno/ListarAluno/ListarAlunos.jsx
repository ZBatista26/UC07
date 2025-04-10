import React, {useState, useEffect} from "react";
import {listarTodos} from "../../../service/alunoService";
import Styles from './ListarAlunos';

function ListarAlunos(){
    const [alunos, setAlunos] = useState([]); // estado para armazenar a lista de alunos
    const [errorMsg, setErrorMsg] = useState('');

    //function que é chamada ao carregar um componente, para buscar os alunos
    async function fetchAlunos() {
        try {
            const res = await listarTodos(); // chama o serviço para listar todos os alunos.
            setAlunos(res.data)
            setErrorMsg(res.data.msg)
        } catch (error) {
            setErrorMsg(error.response.data.msg)
        }
    }

useEffect(()=>{
    fetchAlunos();// Chama a função para buscar os alunos.
}, [])// o array vazio garante que a função seja chamada apenas uma vez quando o componente for montado.

return(
    <div>
        <h2>Lista de Alunos</h2>
        {errorMsg && <p>{errorMsg}</p>} {/* exibe mensagem de erro se houver*/}

        <ul>
            {
                alunos.map((aluno) =>(
                    <li key={aluno.matricula}> {/* a key indica a referencia de cada registro (única)                                                                                            */}
                        {aluno.nome} - {aluno.email} - Matricula:{aluno.matricula}
                    </li>
                ))
            }
        </ul>
    </div>

)

}

export default ListarAlunos;
import React, { useEffect, useState } from "react";
import { listarTodos } from "../../service/alunoService";
import { listarPorMatricula } from "../../service/alunoService";

function ListarAlunos(){
const [alunos, setAlunos] = useState([]);
const [errorMsg, setErrorMsg] = useState('');

    // async function listarAlunos(){
    //     try {
    //         const response = await axios.get('http://localhost:3000/alunos');
    //         if (response){
    //             setAlunos(response.data)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         setErrorMsg(error)
    //     }
        
    // }

    // useEffect(()=>{
    //     listarAlunos();
    // }, []);

    // console.log(alunos);

async function listarAlunos() {
    try {
        const response = await listarTodos();
        setAlunos(response.data);
        console.log(response.data)
    } catch (error) {
        setAlunos([]);
        setErrorMsg(error)
        console.log(error);
    }
}

async function listarPorAluno(matricula){
    try {
        const response = await listarPorMatricula(matricula);
        setAlunos(response.data);
        console.log(response.data)
    } catch (error) {
        setAlunos([]);
        setErrorMsg(error);
        console.log(error);
        
    }
}

    useEffect(()=>{
            //listarAlunos()
            listarPorAluno('a1234');
     }, []);


    
    return (
        <div>
            {/* { errorMsg && */}
                <div>
            
            <h1>Listagem de Aluno</h1>
            <ul>
                {
                    alunos.map((aluno)=>(
                        <li key={aluno.matricula}>
                            {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}

                        </li>
                    ))
                }

            </ul>
            </div>
            {/* } */}
        </div>
    );
}

export default ListarAlunos
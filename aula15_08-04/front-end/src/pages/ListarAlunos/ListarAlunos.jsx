import React, { useState } from "react";
import axios from 'axios';

function ListarAlunos(){
const [alunos, setAlunos] = useState({});

    async function listarAlunos(){
        const response = await axios.get('http://localhost:3000/aluno')
    }

    return (
        <div>

        </div>
    );
}
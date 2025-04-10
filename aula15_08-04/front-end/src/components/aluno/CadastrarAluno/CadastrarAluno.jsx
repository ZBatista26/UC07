import React, {useState} from "react";
import { criar } from "../../../service/alunoService";
import  Styles  from '../CadastrarAluno/CadastrarAluno.modules.css'

function CadastrarAluno(){
    const[matricula, setMatricula] = useState('');
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    const[sucessoMsg, setSucessoMsg] = useState('');

    async function criarAluno() {
        try {
            await criar({matricula, nome,  email, senha});
            setSucessoMsg('Aluno cadastrado com sucesso!');
            setErrorMsg('')
        } catch (error) {
            setErrorMsg(error.response.data.msg);
        }
    }
    return(
        <div>
            <h2>Cadastrar Aluno</h2>
            <input 
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                placeholder="Digite o número da matricula"
            />
            <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome"
            />
            
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
            />
            <input 
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite seua senha"
            />
            <button onClick={criarAluno}>Cadastrar</button>
            {errorMsg && <p>{errorMsg}</p>}
            {sucessoMsg && <p>{sucessoMsg}</p>}
        </div>
    );

}

export default CadastrarAluno;

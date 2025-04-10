import ListarAlunos from "../../components/aluno/ListarAluno/ListarAlunos";
import CadastrarAluno from "../../components/aluno/CadastrarAluno/CadastrarAluno";

function GerenciarAlunos(){
    return(
      <div>
        <ListarAlunos/>
        <CadastrarAluno/>
      </div>  
    )
}
export default GerenciarAlunos;
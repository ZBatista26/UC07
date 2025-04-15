import ListarAlunos from "../../components/aluno/ListarAluno/ListarAlunos";
import CadastrarAluno from "../../components/aluno/CadastrarAluno/CadastrarAluno";
import BuscarAluno from "../../components/aluno/BuscarAluno/BuscarAluno";

function GerenciarAlunos(){
  ;

    return(
      <div>
        <ListarAlunos/>
        <CadastrarAluno/>
        <BuscarAluno/>

      </div>  
    )
}
export default GerenciarAlunos;

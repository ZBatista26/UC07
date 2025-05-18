import './index.css';
function MissoesPage(){
  return( 
     <div className="">
      <div className="">
        {/* Header */}
        <header>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <span className="text-3xl md:text-4xl ml-[40px] mt-[20px] md:mt-5 font-bold">
            <span className="text-[#000821] mar">Code</span>
            <span className="text-[#3A8D57]">Lingo</span>
          </span>
          <div className="flex items-center gap-10 mr-[40px] mt-[20px]">
            <div className="flex gap-5 bg-gray-100 rounded-xl border-b-3 border-gray-300 px-1 py-2">

              <button className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-gray-200">
                <span className="text-[#C0C0C0]"><img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="ceta esquerda" className='flex flex-col items-center px-1 py-2 rounded-lg hover:bg-gray-200 w-5'/></span>
              </button>

              <button className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-gray-200">
                <span className="text-gray-700">Lições</span>
              </button>

              <button className="flex flex-col items-center px-4 py-2 rounded-sm border-b-4 border-[#3A8D57]">
                <span className="text-[#000821] font-bold">Missões</span>
              </button>

              <button className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-gray-200">
                <span className="text-gray-700">Equipe</span>
              </button>

               <button className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-gray-200">
                <span className="text-[#C0C0C0]"><img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" className='flex flex-col items-center px-1 py-2 rounded-lg hover:bg-gray-200 w-5'/></span>
              </button>

            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" alt="iamgem perfil" className='w-12 h-12 mr-[20px]'/>
            </div>
          </div>
        </div>
        </header>

        {/* Barra de progresso */}
        <div className="bg-[#3A8D57] rounded-t-lg p-4 mb-8 ml-[40px] mr-[40px] flex items-center gap-5 ">
          <div className="bg-green-600 text-white rounded-lg px-4 py-3 flex flex-col items-center justify-center">
            <span className="text-xs">Segunda Semana</span>
            <span className="text-sm font-bold">11/05/25</span>
          </div>
          <h1 className='text-2xl font-bold text-[#FFFFFF]'>Progresso</h1>
          <div className='flex-2 bg-[#FFFFFF] rounded-lg h-20 flex items-center justify-center mr-[10px] p-10'> 
          <div className="flex-1">
            <div className="flex items-center justify-between ml-[300px]">
              {[1, 2, 3, 4, [<div className='bg-[#3A8D57] rounded-xl '>Proxima Semana</div>]].map((step, idx) => (
                <div key={step} className="flex items-center w-1/4"> 
                  <div className={`rounded-full bg-[#3A8D57] border-4 w-10 h-10 flex items-center justify-center font-bold text-white ${step === 1 ? 'bg-green-600' : 'bg-'}`}>
                    {step}
                  </div>
                  {step !== 5 && (
                    <div className={`h-4 flex-1 ${step < 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
              </div>        
            </div>
          </div>
        </div>

        {/* Missões */}
        <div className="grid m-10 grid-cols-2 gap-8 bg-[#F2F3F5] rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold ">Missões diárias</h2>
          <h2 className="text-xl font-bold ">Missões da equipe</h2>
          {/* Missões diárias */}
          <div className='bg-[#FFFFFF] rounded-lg p-4'> 
            
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold">Desafio de Sintaxe</div>
                  <div className="text-sm text-gray-600">Resolva 5 exercícios de sintaxe corrigindo erros em código<br/>(por exemplo: parênteses faltando, variáveis mal declaradas).</div>
                </div>
                <span className="text-2xl text-gray-400">🎯</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold">Quiz Relâmpago</div>
                  <div className="text-sm text-gray-600">Responda corretamente 10 perguntas de múltipla escolha sobre conceitos fundamentais (por exemplo: tipo de dados, estrutura de controle).</div>
                </div>
                <span className="text-2xl text-gray-400">🎯</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold">Código Prático</div>
                  <div className="text-sm text-gray-600">Escreva uma função simples a partir de uma descrição (por exemplo: uma função que verifica se um número é primo).</div>
                </div>
                <span className="text-2xl text-gray-400">🎯</span>
              </div>
            </div>
          </div>
          {/* Missões da equipe */}
           
          <div className='bg-[#FFFFFF] rounded-lg p-4'>
           
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold">Corrida de Testes</div>
                  <div className="text-sm text-gray-600">A equipe deve corrigir ou criar 15 testes unitários no total<br/>(pode ser distribuído entre os membros) em 24 horas.</div>
                </div>
                <span className="text-2xl text-gray-400">🎯</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold">Caça aos Bugs</div>
                  <div className="text-sm text-gray-600">Encontrar e corrigir 10 bugs escondidos em snippets de código.<br/>Cada membro pode contribuir com até 3 correções.</div>
                </div>
                <span className="text-2xl text-gray-400">🎯</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold">Desafio de Projeto</div>
                  <div className="text-sm text-gray-600">Criar juntos um mini-projeto simples (como um jogo de adivinhação ou um gerador de senha) em até 48 horas. O app pode avaliar por cobertura de funcionalidades e boas práticas.</div>
                </div>
                <span className="text-2xl text-gray-400">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-[#2E3A47] text-white text-center py-4 mt-8 '>
  © 2025 CodeLingo. Todos os direitos reservados.
</footer>
    </div>

    
  )
}

export default MissoesPage



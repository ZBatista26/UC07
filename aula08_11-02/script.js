let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);

function verificarInput(){
    let nome = document.getElementById('nome')
    //console.log(input)
   if(nome.value.length <5){
        nome.className = 'erro';
   } else{
    nome.className = ' ';
   }
    
}
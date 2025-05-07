function comprar(){
    let tipoDeCadeira = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = document.getElementById('qtd').value;
   let totalIngressos = document.getElementById(`qtd-${tipoDeCadeira}`).textContent

   console.log(totalIngressos);

    
}




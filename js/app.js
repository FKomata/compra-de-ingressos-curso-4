function comprar(){
    let tipoDeCadeira = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = document.getElementById('qtd').value;
    let totalIngressos = document.getElementById(`qtd-${tipoDeCadeira}`).textContent;
    
    let resultanteCompra = totalIngressos - quantidadeIngresso;
    
    if(resultanteCompra < 0){
        alert('a compra não pode ser realizada');
        return;
    }

    let ingressosFinal = document.getElementById(`qtd-${tipoDeCadeira}`);
    ingressosFinal.innerHTML = resultanteCompra; 

    document.getElementById('qtd').value = '';

}




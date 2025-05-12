function comprar(){
    let tipoDeCadeira = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = document.getElementById('qtd').value;
    let totalIngressos = document.getElementById(`qtd-${tipoDeCadeira}`).textContent;
    
    let resultanteCompra = totalIngressos - quantidadeIngresso;
    
    if(resultanteCompra < 0){
        alert('a compra não pode ser realizada');
        return document.getElementById('qtd').value = '';
    }

    if(quantidadeIngresso < 0){
        alert('não é possivel comprar uma quantidade de ingressos negativa');
        return document.getElementById('qtd').value = '';
    }

    let ingressosFinal = document.getElementById(`qtd-${tipoDeCadeira}`);
    ingressosFinal.innerHTML = resultanteCompra; 

    document.getElementById('qtd').value = '';

}
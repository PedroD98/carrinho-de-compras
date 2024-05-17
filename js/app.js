let precoTotal;
limpar();

function adicionar() {
    
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    if (!produto || produto.trim() == "") {
        alert("Selecione um produto válido.");
        return;
    }
    if(quantidade <= 0 || isNaN(quantidade) ){
        alert('Escolha a quantidade do produto que deseja comprar');
        return;
    }
    
    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];
    let preco = quantidade * valorDoProduto;
    let itensNoCarrinho = document.getElementById('lista-produtos');
    
    itensNoCarrinho.innerHTML = itensNoCarrinho.innerHTML + (`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
    </section>`);
    
    
    
    precoTotal = precoTotal + preco;
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$${precoTotal}`;
    
    document.getElementById('quantidade').value = '';
}

function limpar() {

    precoTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0,00';
    document.getElementById('quantidade').value = '';  
}
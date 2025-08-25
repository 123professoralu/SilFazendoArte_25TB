//Código para calcular o total de 1 linha
//document.querySelector(".total").textContent=document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent

//Captura todas as encomendas para calcular o total
var clientes = document.querySelectorAll(".cliente");

for (var count=0; count < clientes.length; count++) {
    
    //Captura a quantidade da encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;

    //Captura o valor unitário da encomenda
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    //Valida a quantidade
    if(tab_qtde < 1 || isNaN(tab_qtde)){
        //Quantidade é inválida
        clientes[count].querySelector(".qtde").textContent = "Qtde inválida";
        clientes[count].classList.add("info-invalida");
    } else {
        //Verifica se o valor unitário é inválido
        if(tab_unitario < 0 || isNaN(tab_unitario)){
            //Unitário é inválido
            clientes[count].querySelector(".unitario").textContent = "R$ Unitário inválido";
            clientes[count].classList.add("info-invalida2");
        } else {
            //Calcula o valor total
            clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde,tab_unitario);   
            clientes[count].querySelector(".unitario").textContent = parseFloat(tab_unitario).toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
        }
    }
}

//Função para cálculo do valor total
function calculaTotal(qtde_encomenda, unit_encomenda){
    var total = 0;

    total = qtde_encomenda * unit_encomenda;

    return total.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
}
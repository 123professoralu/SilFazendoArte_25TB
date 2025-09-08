//document.querySelector(".total").textContent=
// document.querySelector(".qtde").textContent * 
// document.querySelector(".unitario").textContent

//Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

//Passa por todas as encomendas e calcula o valor total
for (var count=0; count < clientes.length; count++){
    
    //Quantidade da encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;
    
    //Valor unitário da encomenda
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    //Verifica se a quantidade é válida
    if(tab_qtde < 1 || isNaN(tab_qtde)){
        //A quantidade é menor que 1 ou não é númerica
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida!";
        //Texto da quantidade em vermelho
        //clientes[count].querySelector(".qtde").style.color = "red";

        //Linha toda com texto vermelho
        //clientes[count].style.color = "red";

        //Linha toda fique vermelha
        // clientes[count].style.backgroundColor = "red";
        // clientes[count].style.color = "white";
        clientes[count].classList.add("info_invalida");

    } else {
        //Verifica se o valor unitário é válido
        if(tab_unitario <=0 || isNaN(tab_unitario)){
            //O unitário é menor ou igual a 0 ou não é numérico
            clientes[count].querySelector(".unitario").textContent = "R$ Unitário inválido!";
            clientes[count].style.color = "red";
        } else {
            //Calcula e exibe o total
            clientes[count].querySelector(".total").textContent =  calculaTotal(tab_qtde,tab_unitario);

            //Envia formatação para o valor unitário
            clientes[count].querySelector(".unitario").textContent=formataValor(parseFloat(tab_unitario));
        }
    }

    
}

//Função de cálculo do valor total
function calculaTotal(qtde,unit){
    var total=0;

    total = qtde * unit;
    
    return formataValor(total);
}

//Função que formata os valores em R$
function formataValor(valor){
    var valor_formatado = valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});

    return valor_formatado;
}
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");

    //Verifica se tem informação para busca
    if(this.value.length > 0){
        //Há filtro de busca
        for(var cli=0; cli < clientes.length; cli++){
            var cliente=clientes[cli];
            var nome=cliente.querySelector(".nome").textContent;
            
            //Busca com Expressão Regular
            //var expressao= new RegExp(this.value, "i");
            //Verifica se o nome digitado é igual ao do contador
            //if(!expressao.test(nome)){

            //Busca com substring
            var comparavel = nome.substring(0, this.value.length);
            var comparavelMinusculo = comparavel.toLowerCase();
            var filtroBuscaMinusculo = this.value.toLowerCase();

            //Verifica se o nome digitado é igual ao do contador
            if(filtroBuscaMinusculo != comparavelMinusculo){
                //Torna invisível
                cliente.classList.add("invisivel");
            } else {
                //Deixa visível
                cliente.classList.remove("invisivel");
            }
        } 
    } else {
        //Não há filtro de busca, exibe lista completa
        for(var cli=0; cli < clientes.length; cli++){
            clientes[cli].classList.remove("invisivel");
        }
    }
    
})
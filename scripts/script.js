/*Funcão de calcular*/
function calcular(tipo,valor){

    /*verifica se é ação ou valor*/
    if(tipo === 'acao'){

    }else if(tipo === 'valor'){
        //se for valor, colocar no visor
        //seleionando objeto, acessando valor, atribuindo como valor o parametro valor
        document.getElementById('resultado').value = valor
    }
}
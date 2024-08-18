/*Funcão de calcular*/
function calcular(tipo,valor){

    /*verifica se é ação ou valor*/
    if(tipo === 'acao'){
        // botão de apagar
        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value = ''           
        }
        //concatenando, junto com as operações
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        //botão de igual
        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            //exibindo resultado da expressão
            document.getElementById('resultado').value = valor_campo
        }
    }else if(tipo === 'valor'){
        //se for valor, colocar no visor
        //seleionando objeto, acessando valor, atribuindo como valor o parametro valor
        document.getElementById('resultado').value += valor
    }


}
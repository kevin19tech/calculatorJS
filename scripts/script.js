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
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' || valor === '**'){
            document.getElementById('resultado').value += valor
        }
        if(valor === 'raiz'){
            var valor_campo = Math.sqrt(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
        //botão de igual
        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            //exibindo resultado da expressão
            document.getElementById('resultado').value = valor_campo
            
        }
        //tratamento de erros
        //Divisões por zero
            if(document.getElementById('resultado').value === 'Infinity' || document.getElementById('resultado').value === 'NaN'){
                alert('Erro: A divisão por zero é inválida')
                document.getElementById('resultado').value =''
            }
        //botão delete
        if(valor === 'backspace'){
            var valor_visor = document.getElementById('resultado').value
            //retira o último número
            valor_visor = valor_visor.slice(0,-1)
            document.getElementById('resultado').value = valor_visor
        }
    }else if(tipo === 'valor'){
        //se for valor, colocar no visor
        //seleionando objeto, acessando valor, atribuindo como valor o parametro valor
        document.getElementById('resultado').value += valor
    }


}
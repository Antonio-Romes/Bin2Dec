
$(function() {
    $("#divMensagem").hide();
});

function converterValorBinarioParaDecimal(){
   
    let valorBinario =  $("#txtValorBinario").val();
    let isValido = validarValorBinario(valorBinario);

    if(isValido){
        let valorconvertido = converterBinarioParaDecimal(valorBinario);
        $("#spnMostrarValorConvertido").text(valorconvertido);
    }
    else{
        mostrarMensagem(valorBinario);
    }
}

function validarValorBinario(valorBinario){

    let arrayValorBinario = valorBinario.split('');
    let isValidar = true;
    for(let index =0 ; index < arrayValorBinario.length; index++){

        if(arrayValorBinario[index] != "0" && arrayValorBinario[index] != "1"  ){
            isValidar = false;
            break;
        }
    }

    return isValidar; 
}

function mostrarMensagem(valorBinario){
    $("#divMensagem").show();
    $("#txtValorBinario").val("");
    $("#txtValorBinario").focus();
    
    setTimeout(function(){ 
        $("#divMensagem").hide(); 
    }, 3000); 
}

let valorBinario = "11111111";

function converterBinarioParaDecimal(valorBinario){

    let arrayValorBinario = valorBinario.split('');
    let arrayValorBinarioReverso = arrayValorBinario.reverse();
    let valorDecimal = arrayValorBinarioReverso.reduce(function(acumulador, valor, index){

        let valorAxiliar = 0;
        if(valor == 1){
            valorAxiliar =  ( Math.pow(2, index));    
        }
        
        return acumulador + valorAxiliar;

    },0);

    return valorDecimal;
}

 
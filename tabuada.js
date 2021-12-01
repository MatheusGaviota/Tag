function valorn(valor){
    let n1 = parseInt(document.getElementById("num1").value)
    let n2 = parseInt(document.getElementById("num2").value)
    let resultado = document.getElementById("sm")
  

    /*
    if(valor === 'soma'){         
        resultado.innerHTML = "A soma é: " + soma(n1,n2)    
    } else if (valor === 'sub'){
        resultado.innerHTML = "A subtração é é: " + subtracao(n1,n2)   
    } else if (valor === 'div'){
        resultado.innerHTML = "A divisão é: " + divisao(n1,n2)
    } else {
        resultado.innerHTML = "A multiplicação é: " + multiplicao(n1,n2)
    }
    */

    switch(valor){
        case 'soma': resultado.innerHTML = "A soma é: " + soma(n1,n2)  
        break
        case 'sub': resultado.innerHTML = "A subtração é é: " + subtracao(n1,n2)  
        break
        case 'div': resultado.innerHTML = "A divisão é: " + divisao(n1,n2)
        break
        case 'mult': resultado.innerHTML = "A multiplicação é: " + multiplicao(n1,n2)
        break
    }
    

}

function soma(valor1, valor2){
 
    return valor1 + valor2
}

function subtracao(valor1, valor2){
    
    return valor1 - valor2
}

function divisao(valor1, valor2){
    return valor1 / valor2

}
function multiplicao(valor1, valor2){
    return valor1 * valor2

}


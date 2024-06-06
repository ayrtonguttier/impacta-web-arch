let btnCalcular = document.getElementById('calcular')
let pesoElement = document.getElementById('peso')
let alturaElement = document.getElementById('altura')
let resultadoElement = document.getElementById('resultado')

let resultados = {}
resultados['magreza'] = 18.5
resultados['normal'] = 24.9
resultados['sobrepeso'] = 30
resultados['obesidade'] = 30

function getPeso() {
    let peso = parseFloat(pesoElement.value)
    return peso
}

function getAltura() {
    let altura = parseFloat(alturaElement.value)
    return altura
}

function escreverResultado(mensagem){
    resultadoElement.innerHTML = mensagem
}

function calcular() {
    let peso = 0;
    let altura = 0;
    try {
        peso = getPeso()
        altura = getAltura()
    }
    catch {
       escreverResultado("Erro ao converter valores") 
    }

    let imc = peso / (altura * altura) 

    console.log("resultado " + imc)
    for (const [key, value] of Object.entries(resultados)){
        if (imc < value) {
            escreverResultado(key + ", quando o resultado é menor que " + value + "kg/m²")
            break
        }

        escreverResultado(key + ", quando o resultado é maior que " + value + "kg/m²")
    }

}

btnCalcular.onclick = calcular

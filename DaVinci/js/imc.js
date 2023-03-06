let altura = parseFloat(prompt(
    'Digite a sua altura em metros. Ex: 1.72'))
let peso = parseFloat(prompt(
    'Informe o seu peso e sua massa em gramas Ex: 85'))

let imc = peso / (altura * altura)

if(imc < 17){
    document.write('Seu IMC é ' +imc + '<br>' + 'ihhhhhhh')
}

else if(imc > 30){
    document.write('Seu IMC é ' +imc + '<br>' + 'ahhhhhhhhh')
}

else{
    document.write('Seu IMC é ' +imc + '<br>' + 'Parabéns')
    document.write('img src=images/imc.png')
}


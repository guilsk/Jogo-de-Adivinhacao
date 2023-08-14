const btnTentar = document.getElementById('btnTentar')
const input = document.querySelector('input')

numero = parseInt(Math.random() * 100)
console.log(numero)
tentativas = 0

btnTentar.addEventListener('click', (e) => this.testarNumero())


function testarNumero(){
    if(input.value == numero){
        console.log("acerto >:D")
        numero = parseInt(Math.random() * 100)
        console.log(numero)
        document.getElementById('txtResultado').innerHTML = 'Parabéns você acertou!' + '<p>Um novo valor foi gerado!</p>'
        document.getElementById('resultado').style.backgroundColor = '#00fc00';
        document.getElementById('tentativas').innerHTML = 'Tentativas: 0' +'<p>Tentativas até acertar: ' + tentativas + '</p>'
        tentativas = 0
    }
    else if(input.value < numero){
        document.getElementById('txtResultado').innerHTML = 'Seu chute foi menor que o número secreto!'
        document.getElementById('resultado').style.backgroundColor = 'red';
        tentativas++
        document.getElementById('tentativas').innerHTML = 'Tentativas: '+ tentativas
        console.log('menor')
    }
    else{
        document.getElementById('txtResultado').innerHTML = 'Seu chute foi maior que o número secreto!'
        document.getElementById('resultado').style.backgroundColor = 'red';
        tentativas++
        document.getElementById('tentativas').innerHTML = 'Tentativas: '+ tentativas
        console.log('maior')
    }
}
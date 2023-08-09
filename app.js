'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const fundo = document.getElementById('fundo')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function trocarCor () {
    forma1.classList.toggle('amarelo')
}

function trocarForma () { 
    forma2.classList.toggle('circulo')
}

function trocarFormaCor (){ 
    forma3.classList.toggle('azul')
}

function girarRosa (){
    forma4.classList.toggle('girorosa')
}
function popUp () {
    alert('Hello World!')
}

function mudarFundo () {
    fundo.classList.toggle('fundo')
}

function sumir (){
    forma7.classList.toggle('sumir')
}
forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarFormaCor)
forma4.addEventListener('click', girarRosa)
forma5.addEventListener('click', popUp)
forma6.addEventListener('click', mudarFundo)
forma7.addEventListener('click', sumir)
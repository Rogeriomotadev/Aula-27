// 1 - Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

//Para parar o envio do formulário utilizamos um evento.
form.addEventListener('submit', function (e){//Pode ser chamado de evento, event ou e.
    event.preventDefault();
    //console.log('Evento previnido.');//Para saber que ele foi enviado.
    //setResultado('Tente novamente.');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const Altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if (!Altura){
        setResultado('Altura inválida', false);
        return; //sem o retorno a função não para e pode execultar outras coisas não previstas.
    }

    const imc=getImc(peso,Altura); //função getImc não existe. Será criada com o intuito unicamente de executar o imc.
    //Posso criar função em qualquer momento do código, pois existe algo chamado roichen 
    const nivelImc = getNivelImc (imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado (msg, true);
    
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso',
     'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];//Alray, lista de coisas


if (imc >=39.9) return nivel[5];//Sendo verdadeiro a função, os demais valores não são executados pois o return para a execução da função.//Se tem somente uma linha no if, não precisa de chave{} 
if (imc >=34.9) return nivel[4];
if (imc >=29.9) return nivel[3];
if (imc >=24.9) return nivel[2];
if (imc >=18.5) return nivel[1];
if (imc < 18.5) return nivel[0];
} //Secando Range, de trás para frente.


function getImc(peso, Altura) {
    const imc = peso / Altura **2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');//constante parágrafo.
    return p;
    //p.classList.add('paragrafo-resultado');//criei uma classe para ser inserida diretamente aqui no JS que é válida como se fosse feita no HTML.
   // p.innerHTML = 'Qualquer coisa';
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';//função com texto vazio. essa função é para preencher o Resultado da div no HTML.
    
    const p = criaP();
    //resultado.appendChild(p); //Inserção no HTML

      
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

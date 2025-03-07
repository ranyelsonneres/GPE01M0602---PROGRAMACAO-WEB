//buscar na arvore do DOM

var meuElemento  = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

var paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

console.log(paragrafo1[0].textContent);

for(let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}

var paragrafo2 = document.getElementsByTagName("p");
for(let i=0; i< paragrafo2.length; i++){
    console.log(paragrafo2[i].textContent);
}

var cabecalho1 = document.querySelector(".cabecalho");
console.log(cabecalho1.textContent);

var cabecalho2 = document.querySelectorAll(".cabecalho");
for (let i=0; i< cabecalho2.length; i++){
    console.log(cabecalho2[i].textContent);
}

//acesso ao conteúdo dos elementos HTML
document.getElementById("paragrafo1").textContent = "Texto alterado";

document.getElementById("paragrafo2").innerHTML = "<h3>Texto <strong>alterado</strong></h3>"

//eventos:
var botao1 = document.getElementById("botao1");
botao1.onclick = function(){
    botao1.textContent = "Clicado";
    botao1.style.backgroundColor = "green";
    alert("Clicado!");
}

var paragrafo4 = document.getElementById("paragrafo4");
var botao2 = document.getElementById("botao2");

botao2.onclick = function(){
    paragrafo4.textContent = "Texto alterado!";
}

var botao3 = document.getElementById("botao3");

botao3.addEventListener("mouseover", function(){
    botao3.style.backgroundColor = "red";
});

botao3.addEventListener("mouseout", function(){
    botao3.style.backgroundColor = "";
})








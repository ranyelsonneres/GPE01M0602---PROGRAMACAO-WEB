let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

let frutas = ["Maçã", "Banana"];
console.log(frutas);
console.log(frutas[1]);

let lista = [];
//java
//c
//python
lista[0] = "java";
lista[1] = "c";
lista[2] = "python";

console.log(lista);

lista[2] = "R";

for (let i=0; i<lista.length;i++){
    console.log(`Elemento ${i}: ${lista[i]}`);
}

//métodos
let numeros2 =[1, 2, 3];
numeros2.push(4);
console.log(numeros2);

numeros2.unshift(0);
console.log(numeros2);

numeros2.splice(1,0,10);
console.log(numeros2);


numeros2.pop();
console.log(numeros2);

numeros2.shift();
console.log(numeros2);

numeros2.splice(1,2);
console.log(numeros2);

console.log(numeros2.indexOf(3));

console.log(numeros2.includes(3));

let maiorQue10 = numeros2.find(num => num>=10);
console.log(maiorQue10);




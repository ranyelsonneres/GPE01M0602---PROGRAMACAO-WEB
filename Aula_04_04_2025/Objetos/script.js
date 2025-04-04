//criar o objeto
const pessoa = {
    nome: "Ranyelson",
    idade: 32
};

console.log(pessoa);

const pessoa2 = {};

pessoa2.nome = "Fulano";
pessoa2.idade = 20;

console.log(pessoa2);

const carro = new Object();
carro.marca = "Fiat";
carro.ano = 2010;
console.log(carro);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

let p1 = new Pessoa("João", 15);
let p2 = new Pessoa("Maria", 16);
let p3 = new Pessoa("Ana", 14);

console.log(p1.nome);

const pessoas = [p1, p2, p3];

for (let pessoa of pessoas){
    for (let chave in pessoa){
        console.log(`${chave} - ${pessoa[chave]}`)
    }
}

class Animal {
    constructor(tipo, nome){
        this.tipo = tipo;
        this.nome = nome;
    }

    emitirSom() {
        return `${this.nome} faz um som!`;
    }

}

let gato = new Animal("Felino", "Mingau");
console.log(gato.emitirSom());

let gato2 = new Animal("Felino", "Luna");
console.log(gato2.emitirSom());

//acessar o objeto
console.log(gato2.nome);
console.log(gato2["nome"]);


gato.nome = "Fofinho";
console.log(gato);


//remover um elemento
const veiculo = {
    marca: "Toytota",
    modelo: "Corola",
    ano: 2023
}

console.log(veiculo);
delete veiculo.ano;

console.log(veiculo);



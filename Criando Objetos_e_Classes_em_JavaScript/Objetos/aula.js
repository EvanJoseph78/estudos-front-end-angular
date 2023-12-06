class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  apresentar() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    console.log(`Ano de nascimento: ${this.anoDeNascimento}`);
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
  }
}

const evan = new Pessoa("Evandro Mariano", 25);
evan.apresentar();

const ednaldo = new Pessoa("Ednaldo Pereira", 55);

compararPessoas(evan, ednaldo);

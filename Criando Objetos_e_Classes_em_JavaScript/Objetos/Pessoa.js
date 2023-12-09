class Pessoa {
  nome;
  peso;
  altura;
  Imc;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.Imc = peso / (altura * altura);
  }

  getImc() {
    return this.Imc;
  }

  classificarImc() {
    if (this.Imc < 18.5) {
      console.log("Abaixo do peso");
    } else if (this.Imc >= 18.5 && this.Imc < 25) {
      console.log("Peso Normal");
    } else if (this.Imc >= 25 && this.Imc < 30) {
      console.log("Acima do peso");
    } else if (this.Imc >= 30 && this.Imc < 40) {
      console.log("Obeso");
    } else {
      console.log("Obesidade grave");
    }
  }
}

const p1 = new Pessoa("Evandro", 65, 1.65);
console.log(p1.getImc());
p1.classificarImc();
new Pessoa("Mariano", 70, 1.88).classificarImc();

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  gastoPorPercurso(quantidadeKm, precoCombustivel) {
    return quantidadeKm * precoCombustivel * this.gastoMedioPorKm;
  }
}

const c1 = new Carro("Audi", "Vermelho", 1 / 10);
console.log(c1.gastoPorPercurso(1, 7));

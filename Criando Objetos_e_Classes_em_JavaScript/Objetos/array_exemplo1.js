function tabuada(numero, expressao) {
  switch (expressao) {
    case "*":
      for (let index = 0; index < 9; index++) {
        console.log(index * numero);
      }
      break;

    case "/":
      for (let index = 0; index < 9; index++) {
        console.log(numero / index);
      }
      break;
  }
}

tabuada(2, "/");

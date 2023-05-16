const criarTabuadaDeMultiplicacao = (listaDeNumeros: number[]): string => {
  let tabuada: string = "";

  for (const numero of listaDeNumeros) {

    for (let index: number = 0; index < 11; index++) {
      tabuada += `${numero} x ${index} = ${numero * index} \n`;
    }

    tabuada += "--------------- \n \n";
  }

  return tabuada;
}

const numerosDaTabuada: number[] = [1, 5, 2];

console.log(criarTabuadaDeMultiplicacao(numerosDaTabuada));

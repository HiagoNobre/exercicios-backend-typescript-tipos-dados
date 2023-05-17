interface produto {
  produto: string,
  lote: number,
  ano: number,
  qtd: number
};

const gerarEtiquetas = (produto: produto): string[] => {
  const etiquetas: string[] = [];

  for (let item = 1; item < produto.qtd + 1; item++) {
    etiquetas.push(
      `${produto.lote}-${produto.ano}-${String(item).padStart(3, "0")}`
    );
  }

  return etiquetas;
}

const CPU: produto = {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 150
}

console.log(gerarEtiquetas(CPU));

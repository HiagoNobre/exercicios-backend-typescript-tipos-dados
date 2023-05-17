const vazio: string = "";

const formatarCaracteres = (caracteres: string): string => {
  const hifen: string = "-";

  const caracteresComHifens: string = caracteres.replaceAll(vazio, hifen);

  const caracteresSemHifenNasExtremidades: string = caracteresComHifens.slice(1, caracteresComHifens.length - 1);

  return caracteresSemHifenNasExtremidades
}

const separarStringPorHifen = (caracteres: string): string => {

  const caracteresSemEspacoNasExtremidades: string = caracteres.trim();
  const espaco: string = " ";

  let caracteresFormatados: string = vazio;

  if (caracteresSemEspacoNasExtremidades.includes(espaco)) {

    const fraseSeparada: string[] = caracteresSemEspacoNasExtremidades.split(espaco);

    for (const palavra of fraseSeparada) {
      caracteresFormatados += formatarCaracteres(palavra) + espaco;
    }

    return caracteresFormatados.trim();
  }

  caracteresFormatados = formatarCaracteres(caracteresSemEspacoNasExtremidades);

  return caracteresFormatados;
}

console.log(separarStringPorHifen("programador freelancer"));

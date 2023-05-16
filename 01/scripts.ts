interface usuario {
  nome: string,
  pets: string[]
};

const usuarios: usuario[] = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

const buscarDonoPet = (lista: usuario[], nomePet: string) => {

  let usuarioEncontrado: usuario | undefined;

  for (const usuario of lista) {
    if (usuario.pets.includes(nomePet)) {
      usuarioEncontrado = usuario;
    }
  }

  if (usuarioEncontrado) {
    return `O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}`;
  }

  return `Que pena ${nomePet}, não encontramos seu dono(a)`;
}

console.log(buscarDonoPet(usuarios, 'Guido')); // Não fui eu que coloquei já estava hahahhaha

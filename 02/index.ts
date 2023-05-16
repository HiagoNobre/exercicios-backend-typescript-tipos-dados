interface segundoUsuario {
  nome: string,
  idade: number,
  status: boolean
}

const instrutores: segundoUsuario[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarUsuariosPeloNome = (listaDeUsuarios: segundoUsuario[], nomeDoUsuario: string): segundoUsuario[] => {

  let usuariosEncontrados: segundoUsuario[] = [];

  if (nomeDoUsuario === "") return usuariosEncontrados;

  usuariosEncontrados = listaDeUsuarios.filter(usuario => {
    return (usuario.nome.toLowerCase()).includes((nomeDoUsuario.toLowerCase()));
  });

  return usuariosEncontrados;
}

console.log(filtrarUsuariosPeloNome(instrutores, "ana"));

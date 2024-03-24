const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tarefa {
    id: ID!
    titulo: String!
    descricao: String
    concluida: Boolean!
    usuario: Usuario
  }

  type Usuario {
    id: ID!
    nome: String!
    tarefas: [Tarefa]
  }

  type Query {
    tarefas: [Tarefa]
    tarefa(id: ID!): Tarefa
    tarefasConcluidas: [Tarefa]
    tarefasPendentes: [Tarefa]
    usuarios: [Usuario]
  }

  type Mutation {
    criarTarefa(titulo: String!, descricao: String, usuarioId: ID!): Tarefa
    criarUsuario(nome: String!): Usuario
    marcarTarefaComoConcluida(id: ID!): Tarefa
    atualizarTarefa(id: ID!, titulo: String, descricao: String): Tarefa
    excluirTarefa(id: ID!): ID
  }
`;

module.exports = { typeDefs };
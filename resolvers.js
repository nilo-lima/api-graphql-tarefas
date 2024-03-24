let tarefas = [
    // array de tarefas
];
  
let usuarios = [
    // array de usuários
];
  
const resolvers = {
    Query: {
      tarefas: () => tarefas,
      tarefa: (_, { id }) => tarefas.find(tarefa => tarefa.id === id),
      tarefasConcluidas: () => tarefas.filter(tarefa => tarefa.concluida),
      tarefasPendentes: () => tarefas.filter(tarefa => !tarefa.concluida),
      usuarios: () => usuarios,
},
Mutation: {
      criarTarefa: (_, { titulo, descricao, usuarioId }) => {
        const novoId = String(tarefas.length + 1)
        const usuario = usuarios.find(user => user.id === usuarioId)

        if (!usuario) {
          throw new Error("Usuário não encontrado!")
        }

        const novaTarefa = { id: novoId, titulo, descricao, concluida: false, usuarioId, usuario };
        
        tarefas.push(novaTarefa);

        if (!usuario.tarefas) {
          usuario.tarefas = [];
        }
        usuario.tarefas.push(novaTarefa);
  
        return novaTarefa;        
      },

      criarUsuario: (_, { nome }) => {
        const novoId = String(usuarios.length + 1);
        const novoUsuario = {
          id: novoId,
          nome,
          tarefas: [] 
        };
  
        usuarios.push(novoUsuario);
        return novoUsuario;
      },

      marcarTarefaComoConcluida: (_, { id }) => {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (!tarefa) {
          throw new Error("Tarefa não encontrada!");
        }
        tarefa.concluida = true;
        return tarefa;
      },

      atualizarTarefa: (_, { id, titulo, descricao }) => {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (!tarefa) {
          throw new Error("Tarefa não encontrada!");
        }
        if (titulo) tarefa.titulo = titulo;
        if (descricao) tarefa.descricao = descricao;
        return tarefa;
      },

      excluirTarefa: (_, { id }) => {
        const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === id);
        if (tarefaIndex === -1) {
          throw new Error("Tarefa não encontrada!");
        }
        
        // Encontra o usuário associado à tarefa
        const usuario = usuarios.find(user => user.tarefas.some(tarefa => tarefa.id === id));
        if (usuario) {
          // Filtra as tarefas do usuário para excluir a tarefa removida
          usuario.tarefas = usuario.tarefas.filter(tarefa => tarefa.id !== id);
        }
    
        // Remove a tarefa do array de tarefas
        tarefas.splice(tarefaIndex, 1);
        
        return id;
      },
    },
  };
  
  module.exports = { resolvers };

# Documentação da API GraphQL para Gerenciamento de Tarefas

Esta API GraphQL permite a criação, listagem, atualização e exclusão de tarefas e usuários. Ela é construída usando Apollo Server e Express, fornecendo uma interface flexível para operações relacionadas a tarefas e usuários.

## Tipos Principais

- **Tarefa**: Representa uma tarefa com um título, descrição, estado de conclusão, e um usuário associado.
- **Usuario**: Representa um usuário com um nome e uma lista de tarefas associadas.

## Operações Disponíveis

### Queries
- `usuarios`: Retorna uma lista de todos os usuários.
- `tarefas`: Retorna uma lista de todas as tarefas.
- `tarefa(id: ID!)`: Retorna uma tarefa específica pelo seu ID.
- `tarefasConcluidas`: Retorna todas as tarefas que estão marcadas como concluídas.
- `tarefasPendentes`: Retorna todas as tarefas que ainda estão pendentes.

### Mutations
- `criarUsuario(nome: String!)`: Cria um novo usuário.
- `criarTarefa(titulo: String!, descricao: String, usuarioId: ID!)`: Cria uma nova tarefa associada a um usuário.
- `atualizarTarefa(id: ID!, titulo: String, descricao: String)`: Atualiza o título e/ou descrição de uma tarefa existente.
- `marcarTarefaComoConcluida(id: ID!)`: Marca uma tarefa específica como concluída.
- `excluirTarefa(id: ID!)`: Exclui uma tarefa pelo seu ID.

## Exemplos de Consultas e Mutations

Nesta seção, são fornecidos exemplos práticos de como utilizar as operações de consulta (Query) e mutação (Mutation) disponíveis na API GraphQL. Esses exemplos o ajudarão a entender como interagir com a API para realizar operações comuns, como criar usuários e tarefas, recuperar informações específicas e atualizar ou excluir registros existentes.

Todos os exemplos devem ser formatados corretamente como objetos JSON, com a chave "query" contendo a consulta ou mutação em formato de string. Para realizar uma mutação, substitua "query" por "mutation" na chave do objeto JSON.

### Criar um Usuário
Para adicionar um novo usuário ao sistema:
```json
{
  "query": "mutation { criarUsuario(nome: \"João da Silva\") { id nome } }"
}
```

### Lista de Usuários
Para recuperar a lista de todos os usuários e suas tarefas associadas:
```json
{
  "query": "query { usuarios { id nome tarefas { id titulo descricao concluida } } }"
}
```

### Criar uma Tarefa
Para criar uma nova tarefa associada a um usuário (usando o ID do usuário):
```json
{
  "query": "mutation { criarTarefa(titulo: \"Nova Tarefa\", descricao: \"Descrição da tarefa\", usuarioId: \"1\") { id titulo descricao concluida usuario { nome } } }"
}
```

### Lista de Todas as Tarefas
Para obter uma lista de todas as tarefas, incluindo informações sobre o usuário associado a cada tarefa:
```json
{
  "query": "query { tarefas { id titulo descricao concluida usuario { nome } } }"
}
```

### Listar Tarefa por ID
Para recuperar informações de uma tarefa específica pelo seu ID:
```json
{
  "query": "query { tarefa(id: \"1\") { id titulo descricao concluida usuario { nome } } }"
}
```

### Lista de Tarefas Concluídas
Para listar todas as tarefas que foram marcadas como concluídas:
```json
{
  "query": "query { tarefasConcluidas { id titulo descricao concluida usuario { nome } } }"
}
```

### Lista de Tarefas Pendentes
Para listar todas as tarefas que ainda estão pendentes:
```json
{
  "query": "query { tarefasPendentes { id titulo descricao concluida usuario { nome } } }"
}
```

### Atualizar uma Tarefa
Para atualizar o título e a descrição de uma tarefa existente:
```json
{
  "query": "mutation { atualizarTarefa(id: \"1\", titulo: \"Novo Título\", descricao: \"Nova descrição.\") { id titulo descricao concluida } }"
}
```

### Marcar uma Tarefa como Concluída
Para marcar uma tarefa específica como concluída:
```json
{
  "query": "mutation { marcarTarefaComoConcluida(id: \"1\") { id titulo descricao concluida } }"
}
```

### Excluir uma Tarefa
Para excluir uma tarefa do sistema pelo seu ID:
```json
{
  "query": "mutation { excluirTarefa(id: \"1\") }"
}
```

Esta documentação serve como um guia prático para desenvolvedores interagirem com a API.
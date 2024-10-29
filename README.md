# BusinessFlow

## 🚀 link dos deploys na vercel:

## 🔏 Como Fazer Login?

Para fazer login utilize os dados:

Nome de usuário: admin (tudo minúsculo)

Senha: 123456

Marque o checkbox Manter Conectado para salvar o nome de usuário nos cookies!

## 📱 Tecnologias Utilizadas:

React.js | styled-components | vite | vercel | Javascript, tabela com paginação.

Conexão ao backend via Axios dos métodos `get` | `post` | `put` | `delete`.

**Endpoints**:

- `GET /` - Listar todos
- `GET /:id` - Listar por ID
- `POST /` - Cadastrar parceiro
- `PUT /:id` - Atualizar parceiro
- `DELETE /:id` - Deletar parceiro

## 🛠️ Como rodar aplicação na sua máquina? 

Comandos:

`npm install`

`mpm run dev `

## ✍️ Como foi feito o projeto? 

Implementação de uma página de login com as seguintes funcionalidades:

Opção "Manter Conectado": Armazena o nome de usuário nos cookies para manter o usuário logado entre sessões.

Verificação de Autenticação: Impede o acesso a áreas restritas caso o usuário não esteja autenticado.

Cadastro, Edição e Exclusão de Dados: Permite a criação, modificação e exclusão de parceiros e empresas através de componentes dedicados.

Gerenciamento de Rotas e Redirecionamento: Redireciona automaticamente para a página solicitada, caso o usuário acesse um link direto para uma página específica (ex. página 6 de uma tabela). Se não estiver logado, o usuário é direcionado ao login e, após autenticação, é levado diretamente para a página que tentou acessar.

# BusinessFlow

## 🚀 Conheça o projeto: [Deploy do projeto](https://buss-zeta.vercel.app/login)

 <h2 align="center">📺</h2>

<div align="center">
   <figure>
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmRnM21rM3VvdXpvbW4wYXRwYXRlaGYzejNmM2gza3kxZ2wzZzdxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jeojafABnlzdNotl5d/giphy.gif" alt="Visualização de Parceiros" width="700"/>
   </figure>
   <figure>
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDN0ZzBhcjYyeWZnbXR1Y2g3bmF4b3RocnJuMnl5eHQ3bm50aWNhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jf4zAwySlcNdtMfQRT/giphy.gif" alt="Tela de Login" width="700"/>
    </figure>
   <figure>
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDZoYzNhOHk5YjBqMzBmbGViYjY0emp0aDJmYW96d2JybDVsbDBwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VAvxGuruXCxcce41zY/giphy.gif" alt="Tela Inicial" width="700"/>
   </figure>

   <figure >
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzUzd3MxbWJhb2ppOWhueDdhMTE5Ym9xODVtendyYzBvMjQ3ZHMzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zJTxhQhDmxAP0F31wd/giphy.gif" alt="Visualização de Empresas" width="700"/>
   </figure>

</div>

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

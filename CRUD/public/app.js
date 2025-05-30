//formulário de cadastro
const form = document.getElementById('user-form');

//lista de usuários
const userList = document.getElementById('user-list');

//carregar os usuários cadastrados
function carregarUsuarios() {
    // Faz uma requisição GET para a API
    fetch('/api/users')
        .then(res => res.json()) // Converte a resposta para JSON
        

}

//carregarUsuarios();

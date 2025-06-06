//formulário de cadastro
const form = document.getElementById('user-form');

//lista de usuários
const userList = document.getElementById('user-list');

carregarUsuarios();

//carregar os usuários cadastrados
function carregarUsuarios() {
    // Faz uma requisição GET para a API
    fetch('/api/users')
        .then(res => res.json()) // Converte a resposta para JSON
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `${user.nome} (${user.email})
                <button onclick="atualizarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>
                `;
                userList.appendChild(li);
            });
        });

};

//pegar os dados do formulário
form.addEventListener('submit', e =>{
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //chamar a função de cadastro
    cadastrarUsuario(nome, email);
});

function cadastrarUsuario(nome, email) {
    fetch('api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        form.reset();
        carregarUsuarios();
    })
};

//função para atualizar o usuario
function atualizarUsuario(id) {
    const nome = prompt("Novo nome: ");
    const email = prompt("Novo email: ");
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        carregarUsuarios();
    })
}

function excluirUsuario(id) {
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        carregarUsuarios();
    })
}

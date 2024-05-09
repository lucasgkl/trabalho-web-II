// Espera o evento que indica que todo o conteúdo do DOM está carregado.
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um manipulador de evento para o envio do formulário.
    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio do formulário para não recarregar a página.

        // Obtém o valor inserido no campo de texto do formulário.
        var postContent = document.getElementById('postContent').value;
        if (postContent.trim() === '') return;  // Ignora o envio se o campo estiver vazio.

        // Cria o elemento principal do card que contém cada postagem.
        var postDiv = document.createElement('div');
        postDiv.className = 'card mb-3';  // Usa classes do Bootstrap para estilização.

        // Cria o corpo interno do card.
        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';  // Mais uma classe do Bootstrap.

        // Cria um contêiner flexível para os itens dentro do card.
        var flexDiv = document.createElement('div');
        flexDiv.className = 'd-flex align-items-center';  // Flexbox do Bootstrap.

        // Cria o parágrafo que vai conter o texto da postagem.
        var postText = document.createElement('p');
        postText.className = 'card-text';
        postText.textContent = postContent;  // Insere o texto obtido do formulário.

        // Insere os elementos na estrutura do card.
        flexDiv.appendChild(postText);  // Adiciona o texto ao flex container.
        cardBodyDiv.appendChild(flexDiv);  // Adiciona o flex container ao corpo do card.

        // Cria e configura o botão de deletar.
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-outline-danger delete-post';
        deleteButton.innerHTML = '<i class="bi bi-x"></i>';  // Ícone de deletar.

        // Cria e configura o botão de curtir.
        var likeButton = document.createElement('button');
        likeButton.className = 'btn btn-sm btn-outline-primary like-button';
        likeButton.innerHTML = '<i class="bi bi-heart"></i>';  // Ícone de curtir.

        // Adiciona os botões ao corpo do card.
        cardBodyDiv.appendChild(deleteButton);
        cardBodyDiv.appendChild(likeButton);

        // Adiciona o card completo ao contêiner de postagens.
        document.getElementById('postContainer').prepend(postDiv);

        // Limpa o campo de entrada do formulário após a postagem.
        document.getElementById('postContent').value = '';

    });

    // Escuta cliques no documento para curtir ou deletar postagens.
    document.addEventListener('click', function(event) {
        // Verifica se o botão curtido foi clicado e alterna o estilo para indicar estado ativo/inativo.
        if (event.target.classList.contains('like-button')) {
            event.target.classList.toggle('btn-primary');
            event.target.classList.toggle('btn-outline-primary');
        }
        // Verifica se o botão de deletar foi clicado e remove a postagem correspondente.
        if (event.target.classList.contains('delete-post')) {
            event.target.closest('.card').remove();
        }
    });
});

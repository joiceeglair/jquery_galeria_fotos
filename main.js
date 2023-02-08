$(document).ready(function() {
    /*adicionando um evento de click no JS
    document.querySelector('header button').addEventListener('click', function() {
        o elemento que fica aqui dentro é o callback para o clickdo nosso header button
    })*/

    /*para adicionar um evento com o jQuery*/
    /*Primeira forma*/
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })


    /*Segunda forma é usando a função on*/
    /*Nesse tem que ser passado o evento (e) na função*/
    /*preventDefault - previne o comportamento padrão do formulário que atualiza a paágina quando é submetido*/
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); /*recuperando o endereço que foi inserido no campo*/
        const novoItem = $('<li style="display: none"></li>'); /*cria o endereço HTML que será inserido ao final da lista*/
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); /*O appendTo pega o elemento ${enderecoDaNovaImagem} e insere ele dentro do <li></li> do novoItem*/
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem); /*O appendTo pega o elemento ${enderecoDaNovaImagem} e completa toda a imagem e o anuncio, sendo a <div> e <a>*/
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1);
        $('#endereco-imagem-nova').val('')
    })
})
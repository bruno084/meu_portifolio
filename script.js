const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', function() {
    // Alterna a classe no body
    document.body.classList.toggle('modo-claro');

    // Verifica se o modo claro está ativo para mudar o texto/ícone do botão
    if (document.body.classList.contains('modo-claro')) {
        btnTema.textContent = ' ☽ Modo Escuro';
    } else {
        btnTema.textContent = ' ☀︎︎ Modo Claro';
    }
});

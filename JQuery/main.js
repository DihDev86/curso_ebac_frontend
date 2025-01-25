/**
 * Executa quando o DOM está completamente carregado.
 */
$(document).ready(function(){ 

    /**
     * Adiciona um ouvinte de evento de clique ao botão dentro do cabeçalho.
     * Quando o botão é clicado, exibe um alerta com a mensagem "Expandir formulário".
     */
    $('header button').click(function(){
        $('form').slideDown();// Exibe um alerta com a mensagem "Expandir formulário"
        
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    

    /**
     * Adiciona um ouvinte de evento de envio ao formulário.
     * Quando o formulário é enviado, registra "submit" no console e previne o comportamento padrão de envio do formulário.
     * 
     * 
     */
    $('form').on('submit', function(e) {
        console.log("submit"); // Registra "submit" no console
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    })
})

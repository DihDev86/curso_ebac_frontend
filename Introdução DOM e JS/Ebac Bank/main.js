const form = document.getElementById('form-deposito')//Esta linha seleciona o elemento HTML com o ID form-deposito e armazena na variável form. Presumivelmente, no seu HTML, você tem um formulário com esse ID
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false; //Variável com função de validação.

function validaNome(nomeCompleto){//Esta função validaNome recebe um nome completo como argumento (nomeCompleto).
    const nomeComoArray = nomeCompleto.split(' ');//nomeCompleto.split(' ') divide a string do nome em um array de substrings, usando o espaço em branco como separador. Por exemplo, "João Silva" se torna ["João", "Silva"].
    return nomeComoArray.length >= 2;//nomeComoArray.length >= 2 verifica se o array resultante tem pelo menos dois elementos.
    //A função retorna true se o nome for válido (pelo menos dois nomes) e false caso contrário.
}

form.addEventListener('submit', function(e) { //form.addEventListener('submit', ...) adiciona um ouvinte de evento ao formulário. Quando o formulário é submetido (clicando no botão "Enviar", por exemplo), a função anônima dentro do addEventListener é executada.
    e.preventDefault();


    //As linhas seguintes selecionam os elementos de input do formulário pelos seus IDs (nome-beneficiario, numero-conta, valor-deposito).
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito')

    //A template string (crase) mensagemSucesso cria a mensagem de sucesso usando os valores dos campos do formulário.
    const mensagemSucesso = `O depósito no valor de R$ <b>${valorDeposito.value}</b> feito na conta de número <b>${numeroContaBeneficiario.value}</b> Nome do cliente: <b>${nomeBeneficiario.value}</b>`

    formEValido = validaNome(nomeBeneficiario.value)//formEValido = validaNome(nomeBeneficiario.value); chama a função validaNome para verificar se o nome do beneficiário é válido.
    
    //A estrutura if/else verifica o valor de formEValido:
    
    if(formEValido){//Se formEValido for true (nome válido), um alerta com a mensagem de sucesso é exibido e os campos do formulário são limpos.

        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso')//Seleciona o elemento HTML com a classe mensagem-sucesso e armazena na constante containerMensagemSucesso
        containerMensagemSucesso.innerHTML= mensagemSucesso //Substitui o conteúdo do elemento selecionado (mensagem-sucesso) pelo valor da variável mensagemSucesso.
        containerMensagemSucesso.style.display= 'block';//Altera o estilo do elemento para que ele seja exibido na página.
        //O elemento pode estar invisível ou escondido (por exemplo, com display: none;), e essa linha o torna visível ao configurar o estilo display para block.

        nomeBeneficiario.value = " ";//Se o form for válido o campo nome beneficiario é limpo
        numeroContaBeneficiario.value = " ";//Se o form for válido o campo conta beneficiario é limpo
        valorDeposito.value = " ";//Se o form for válido o campo valor deposito é limpo


    }else{
        nomeBeneficiario.style.border= '1px solid red'//Se o nome do beneficiario for inválido aparecerá uma borda vermelha 
        document.querySelector('.mensagem-de-erro').style.display='block'//Se o nome do beneficiario for inválido aparecerá a mensagem de erro
    }
    
})

nomeBeneficiario.addEventListener('keyup', function(e){//Escuta o evento keyup (quando o usuário solta uma tecla) no campo nomeBeneficiario.
    console.log(e.target.value)//Mostra no console o texto digitado no campo até o momento.
    formEValido = validaNome(e.target.value)// Uma função que verifica se o nome digitado é válido.

    if(!formEValido){//Verifica se formEValido é falso (nome inválido)
        nomeBeneficiario.style.border= '1px solid red'//Se o nome do beneficiario for inválido aparecerá uma borda vermelha 
        document.querySelector('.mensagem-de-erro').style.display='block'//Mostra a mensagem de erro (torna visível).
    }else{
        nomeBeneficiario.style.border= ' '//Remove a borda vermelha do campo.
        document.querySelector('.mensagem-de-erro').style.display='none' //Esconde a mensagem de erro.
    }
})





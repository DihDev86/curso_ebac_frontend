const form = document.getElementById('form-atividade'); // Seleciona o formulário de atividades
const imgAprovado = '<img src = "./imagens/aprovado.png" alt = "Aprovado">'; // HTML para imagem de aprovado
const imgReprovado = '<img src="./imagens/reprovado.png" alt = "Reprovado">'; // HTML para imagem de reprovado
const atividades = []; // Array para armazenar as atividades
const notas = []; // Array para armazenar as notas
const spanAprovado = '<span class=" resultado aprovado">Aprovado</span>'; // HTML para span de aprovado
const spanReprovado = '<span class=" resultado reprovado">Reprovado</span>'; // HTML para span de reprovado
const notaMinima = parseFloat(prompt("Digite a nota mínima para aprovação: ")); // Solicita a nota mínima para aprovação

let linhas = ""; // Variável para armazenar as linhas da tabela

form.addEventListener('submit',function(e){
    e.preventDefault(); // Previne o comportamento padrão do formulário

    adicionarLinha(); // Chama a função para adicionar uma nova linha
    atualizar (); // Chama a função para atualizar a tabela
    atualizaMediaFinal (); // Chama a função para atualizar a média final

});

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade"); // Seleciona o input do nome da atividade
    const inputNotaAtividade = document.getElementById("nota-atividade"); // Seleciona o input da nota da atividade
    
    if(atividades.includes(inputNomeAtividade.value)){  
        alert('Atividade já cadastrada'); // Alerta se a atividade já foi cadastrada
    }
    else{
        atividades.push(inputNomeAtividade.value); // Adiciona a atividade ao array
        notas.push(parseFloat(inputNotaAtividade.value)); // Adiciona a nota ao array
        
    
        let linha = '<tr>' // Cria uma nova linha na tabela
        linha += `<td> ${inputNomeAtividade.value}</td>`; // Adiciona a atividade na linha
        linha += `<td> ${inputNotaAtividade.value}</td>`; // Adiciona a nota na linha
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; // Adiciona a imagem de aprovado ou reprovado na linha
        linha += `</tr>`; // Fecha a linha
    
        linhas += linha; // Adiciona a linha à variável de linhas
    }

    inputNomeAtividade.value = ""; // Limpa o input do nome da atividade
    inputNotaAtividade.value = ""; // Limpa o input da nota da atividade

}

function atualizar (){
    const corpoTabela = document.querySelector('tbody'); // Seleciona o corpo da tabela
    corpoTabela.innerHTML= linhas; // Atualiza o corpo da tabela com as novas linhas
}

function atualizaMediaFinal (){
    const mediaFinal = calcularMediaFinal(); // Calcula a média final

    document.getElementById('media-final-valor').innerText = mediaFinal; // Atualiza o valor da média final

    document.getElementById('media-final-resultado').innerHTML= mediaFinal >= notaMinima ? spanAprovado : spanReprovado; // Atualiza o resultado da média final com aprovado ou reprovado

    

    console.log(media); // Loga a média no console
}

function calcularMediaFinal(){
    let somaDasNotas = 0; // Inicializa a soma das notas
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]; // Soma todas as notas
    }
    return somaDasNotas / notas.length; // Retorna a média das notas
}

getComputedStyle.apply.call.bind.call.bind.call
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src = "./imagens/aprovado.png" alt = "Aprovado">';
const imgReprovado = '<img src="./imagens/reprovado.png" alt = "Reprovado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class=" resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class=" resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima para aprovação: "));

let linhas = "";

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha();
    atualizar ();
    atualizaMediaFinal ();

});

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");
    
    if(atividades.includes(inputNomeAtividade.value)){  
        alert('Atividade já cadastrada');
    }
    else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
    
        let linha = '<tr>'
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";

}

function atualizar (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;
}

function atualizaMediaFinal (){
    const mediaFinal = calcularMediaFinal();

    document.getElementById('media-final-valor').innerText = mediaFinal;

    document.getElementById('media-final-resultado').innerHTML= mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    

    console.log(media);
}

function calcularMediaFinal(){
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}
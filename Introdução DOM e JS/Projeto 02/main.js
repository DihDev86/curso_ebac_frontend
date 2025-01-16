const form = document.getElementById('form-atividade');//Seleciona o formulário com o id form-atividade
form.addEventListener('submit',function(e){//Adiciona um evento de submissão ao formulário, que executa uma função anônima quando o formulário é submetido.
    e.preventDefault();//Previne o comportamento padrão do formulário, que é recarregar a página ao ser submetido.

    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");
    
    let linha = '<tr>'// Cria uma string chamada linha com a abertura de uma linha de tabela HTML (<tr>).
    linha += `<td> ${inputNomeAtividade.value}</td>`;//Adiciona uma célula (<td>) na linha da tabela contendo o valor do campo inputNomeAtividade. //${inputNomeAtividade.value} utiliza template literals (acentos graves `) para inserir dinamicamente o valor do campo no HTML.
    linha += `<td> ${inputNotaAtividade.value}</td>`;// Adiciona mais uma célula à linha, contendo o valor do campo inputNotaAtividade


    linha += `<td> ${inputNotaAtividade.value >= 7 ? `Aprovado` : `Reprovado`}</td>`;
    /*O que faz: Adiciona mais uma célula (<td>) que exibe "Aprovado" se a nota for maior ou igual a 7, caso contrário, exibe "Reprovado".
    Operador ternário (? :):
    Condição: inputNotaAtividade.value >= 7
    Se verdadeiro: Aprovado
    Se falso: Reprovado*/
    
    linha += `</tr>`;//Fecha a linha da tabela

    /*Esse código cria dinamicamente uma linha de tabela (<tr>), com três células (<td>):

    Nome da atividade.
    Nota da atividade.
    Status de aprovação (Aprovado/Reprovado). */

    alert(`A atividade feita foi de : ${inputNomeAtividade.value} e sua nota foi ${inputNotaAtividade.value}`)
});
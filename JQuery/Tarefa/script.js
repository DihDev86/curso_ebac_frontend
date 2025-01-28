$(document).ready(function () {
    // Adicionar tarefa na lista
    $("#taskForm").on("submit", function (event) {
      event.preventDefault();
      const taskName = $("#taskInput").val().trim();
      if (taskName !== "") {
        $("#taskList").append(`<li>${taskName}</li>`);
        $("#taskInput").val(""); // Limpar o campo de entrada
      }
    });
  
    // Alternar o efeito de riscar ao clicar em um item
    $("#taskList").on("click", "li", function () {
      $(this).toggleClass("completed");
    });
  });
  
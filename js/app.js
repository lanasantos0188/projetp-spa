const formulario = document.querySelector("form");
const listaAlunos = document.querySelector("#lista-alunos");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const idade = document.querySelector("#idade").value;
  const turma = document.querySelector("#turma").value.trim();
  const curso = document.querySelector("#curso").value.trim();

  if (!nome || !idade || !turma || !curso) {
    alert("Preencha todos os campos.");
    return;
  }

  const item = document.createElement("li");
  item.textContent = `${nome} - ${idade} anos - Turma ${turma} - Curso: ${curso}`;
  const editar = document.createElement("button");
editar.textContent = "Editar";

editar.onclick = () => {
  document.querySelector("#nome").value = nome;
  document.querySelector("#idade").value = idade;
  document.querySelector("#turma").value = turma;
  document.querySelector("#curso").value = curso;

  item.remove();
};

item.appendChild(editar);

  const excluir = document.createElement("button");
  excluir.textContent = "Excluir";
  excluir.onclick = () => item.remove();

  item.appendChild(excluir);
  listaAlunos.appendChild(item);
  formulario.reset();
});

function mostrarTela(tela) {
  document.querySelectorAll("section").forEach(secao => {
    secao.style.display = "none";
  });

  document.querySelector(`#${tela}`).style.display = "block";
}

mostrarTela("inicio");
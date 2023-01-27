const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name) {
    alert("Por favor, preencha o campo nome");
    return;
  }
  if (!email) {
    alert("Por favor, preencha o campo email");
    return;
  }
  if (!password) {
    alert("Por favor, preencha o campo senha");
    return;
  }

  alert("Formulário enviado com sucesso!");
  form.reset();
}
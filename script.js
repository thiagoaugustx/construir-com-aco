const form = document.getElementById("form");
const username = document.getElementById("username");
const area = document.getElementById("area");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const empresa = document.getElementById("empresa");
const instagram = document.getElementById("instagram");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const areaValue = area.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const empresaValue = empresa.value;
  const instagramValue = instagram.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (areaValue === "") {
    setErrorFor(area, "A área de atuação é obrigatória");
  } else {
    setSuccessFor(area);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "O telefone é obrigatório");
  } else {
    setSuccessFor(telefone);
  }



  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


const handleSubmit = (event) => {
    event.preventDefault();

    alert('enviando inscrição...')
}

document.querySelector('form').addEventListener('submit', handleSubmit);
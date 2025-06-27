import { clienteService } from "../service/client-service.js";

const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get("id");

const inputName = document.querySelector(`[data-nome]`);
const inputEmail = document.querySelector(`[data-email]`);

clienteService.detalhaCliente(id).then((dados) => {
  inputName.value = dados.nome;
  inputEmail.value = dados.email;
});

const formulario = document.querySelector(`[data-form]`);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  clienteService
    .atualizaCliente(id, inputName.value, inputEmail.value)
    .then(() => {
      window.location.href = "../telas/edicao_concluida.html";
    });
});

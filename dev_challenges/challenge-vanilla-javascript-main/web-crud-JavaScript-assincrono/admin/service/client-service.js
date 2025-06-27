//? XMLHttpRequest()
//export const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/profile");

//     http.onload = () => {
//       try {
//         resolve(JSON.parse(http.response));
//       } catch (err) {
//         reject(JSON.parse(http.response));
//       }
//     };

//     http.send();
//   });

//   return promise;
// };

// listaClientes().then((data) => {
//   data.forEach((element) => {
//     tabela.appendChild(criaNovaLinha(element.nome, element.email));
//   });
// });

//? FetchAPI
const listaClientes = async () => {
  return fetch(`http://localhost:3000/profile`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const criaCliente = async (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
    }),
  })
    .then((response) => {
      return response.body;
    })
    .catch((err) => console.log(err));
};

const removeCliente = async (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log("Success");
    })
    .catch((err) => console.log(err));
};

const detalhaCliente = async (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const atualizaCliente = async (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
    }),
  })
    .then((response) => {
      return response.body;
    })
    .catch((err) => console.log(err));
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};

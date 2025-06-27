import express, { Request, Response } from "express";
import cors from "cors";
import mercadopago from "mercadopago";

import "dotenv/config";

const app = express();

//sandbox: true --> Teste
//sandbox: false --> Produção
mercadopago.configure({
  sandbox: true,
  access_token: `${process.env.ACCESS_TOKEN}`,
});

app.use(express());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Olá Mundo");
});

// Rota de pagamento
app.get("/pagar", async (req: Request, res: Response) => {
  const id = "1";
  const price: string = "5";

  // Banco de dados

  // Pagamentos
  // id // codigo // pagador // status
  // 1 // 231332132 // luis@gmail.com // Não foi pago
  // 2 // 5656565645 // gabriel@gmail.com // Pago

  const dados = {
    items: [
      {
        id: id,
        title: "minha descrição para teste -- mercado pago",
        quantity: 1,
        currency_id: "BRL",
        unit_price: Number.parseFloat(price),
      },
    ],
    payer: {
      email: "luis@gmail.com",
    },
    // Necessario que tenha o mesmo id do pagamento a cima
    external_reference: id,
  } as any;

  try {
    const pagamento = await mercadopago.preferences.create(dados);
    console.log(pagamento);
    // É Necessario salvar os dados de pagamento no banco de dados
    return res.redirect(pagamento.body.init_point);
  } catch (err) {
    return res.send("Ocorreu um erro!");
  }
});

//Notificação IPN
app.post("/not", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("OK");
});

app.listen(3333, () => {
  console.log("Server is running");
});

import "dotenv/config";
import app from "./app";

// Inicialização do servidor
app.listen(process.env.PORT, () => {
  console.log(`Aplicação executando na porta ${process.env.PORT}!`);
});

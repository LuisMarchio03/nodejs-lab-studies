import express from "express";
import cors from "cors";
import './db'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

const port = 3000;

app.listen(port, () => {
    console.log(`Virtual Wallet app listening at llet app listening at URL_ADDRESS:${port}`);
})
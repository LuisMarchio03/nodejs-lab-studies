import express from "express";
import { TransactionController } from "../controllers/transaction.controller";
import { TransactionService } from "../services/transaction.service";
import { TransactionRepository } from "../repositories/transaction.repository";
import { UserRepository } from "../repositories/user.repository";

const router = express.Router();

const transactionRepository = new TransactionRepository();
const userRepository = new UserRepository();
const transactionsService = new TransactionService(transactionRepository, userRepository);
const transactionController = new TransactionController(transactionsService);

router.post("/transaction", async () => transactionController.send);

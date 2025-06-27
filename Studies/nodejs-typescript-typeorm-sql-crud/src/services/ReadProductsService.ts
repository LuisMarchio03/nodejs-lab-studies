import { response } from "express";
import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repositories/ProductsRepository";

class ReadProductService {
  async execute() {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.find();

    return product;
  }
}

export { ReadProductService };

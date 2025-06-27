import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repositories/ProductsRepository";

interface IProductRequest {
  name: string;
  price: string;
  description: string;
}

class CreateProductService {
  async execute({ name, price, description }: IProductRequest) {
    const productsRepository = getCustomRepository(ProductsRepository);

    // Verifica se o name existe
    if (!name) {
      throw new Error("name incorrect");
    }

    // Verifica se o price existe
    if (!price) {
      throw new Error("price incorrect");
    }

    // Verifica se o description existe
    if (!description) {
      throw new Error("description incorrect");
    }

    // Verifica se o produto já existe
    const userAlreadyExists = await productsRepository.findOne({
      name,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    // Caso tudo esteja certo, salva o procuto no banco de dados
    const product = productsRepository.create({
      name,
      price,
      description,
    });

    await productsRepository.save(product);

    return product;
  }
}

export { CreateProductService };

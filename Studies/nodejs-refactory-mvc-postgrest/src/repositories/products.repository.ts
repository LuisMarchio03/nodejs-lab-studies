import db from "../services/db";
import DatabaseError from "../models/errors/database.error.models";

import Products from "../models/products.model";

class ProductsRepository {
  async findAll(): Promise<Products[]> {
    try {
      const query = `
        SELECT * FROM products
      `;

      const { rows } = await db.query<Products>(query);
      return rows || [];
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar o produto");
    }
  }

  async findById(id: string): Promise<Products> {
    try {
      const query = `
        SELECT * FROM products
        WHERE id = $1
      `;

      const values = [id];
      const { rows } = await db.query<Products>(query, values);
      const [product] = rows;

      return product;
    } catch (error) {
      throw new DatabaseError(
        "Ocorreu um erro ao consultar a categoria específica"
      );
    }
  }

  async create(products: Products): Promise<void> {
    try {
      const query = `
      INSERT INTO products (
        name,
        price,
        stock
      )
      VALUES ($1, $2, $3)
    `;

      const values = [products.name, products.price, products.stock];
      await db.query(query, values);
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao criar o produto");
    }
  }

  async update(products: Products): Promise<void> {
    try {
      const query = `
      UPDATE products
      SET
        name = $1,
        price = $2,
        stock = $3
      WHERE id = $4
    `;

      const values = [
        products.name,
        products.price,
        products.stock,
        products.id,
      ];
      await db.query<{ id: string }>(query, values);
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao tentar atualizar o produto");
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const query = `
      DELETE
      FROM products
      WHERE id = $1
    `;

      const values = [id];
      await db.query(query, values);
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao tentar deletar o produto");
    }
  }
}

export default new ProductsRepository();

import db from "../db";
import Category from "../models/category.model";
import DatabaseError from "../models/errors/database.error.models";

class CategoryRepository {
  async findAllCategories(): Promise<Category[]> {
    try {
      const query = `
        SELECT * FROM category
      `;

      const { rows } = await db.query<Category>(query);
      return rows || [];
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar as categorias");
    }
  }

  async findById(id: string): Promise<Category> {
    try {
      const query = `
        SELECT * FROM category
        WHERE id = $1
      `;

      const values = [id];
      const { rows } = await db.query<Category>(query, values);
      const [category] = rows;

      return category;
    } catch (error) {
      throw new DatabaseError(
        "Ocorreu um erro ao consultar a categoria especifica"
      );
    }
  }

  async create(category: Category): Promise<string> {
    try {
      const query = `
        INSERT INTO category (
          name,
          createdAt
        )
        VALUES ($1, $2)
        RETURNING id
      `;

      const values = [category.name, category.createdAt];
      const { rows } = await db.query<{ id: string }>(query, values);
      const [newCategory] = rows;

      return newCategory.id;
    } catch (error) {
      throw new DatabaseError(
        "Ocorreu um erro ao criar a categoria no banco de dados"
      );
    }
  }

  async update(category: Category): Promise<void> {
    try {
      const query = `
        UPDATE category 
        SET
          name = $1,
          createdAt = $2
        WHERE id = $3
      `;

      const values = [category.name, category.createdAt, category.id];
      await db.query<{ id: string }>(query, values);
    } catch (error) {
      throw new DatabaseError(
        "Ocorreu um erro ao atualizar a categoria no banco de dados"
      );
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const query = `
        DELETE 
        FROM category
        WHERE id = $1
      `;

      const values = [id];
      await db.query(query, values);
    } catch (error) {
      throw new DatabaseError(
        "Ocorreu um erro ao atualizar a categoria no banco de dados"
      );
    }
  }
}

export default new CategoryRepository();

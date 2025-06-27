import db from "../db";
import DatabaseError from "../models/errors/database.error.models";

import Posts from "../models/posts.model";
import Category from "../models/category.model";

class PostsRepository {
  async findAllPosts(): Promise<Posts[]> {
    try {
      const query = `
        SELECT * FROM posts
      `;

      const { rows } = await db.query<Posts>(query);
      return rows || [];
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar as categorias");
    }
  }

  async findByCategory(category_id: string): Promise<Posts[]> {
    try {
      const query = `
        SELECT *
        FROM posts
        WHERE category_id = $1
      `;

      const values = [category_id];
      const { rows } = await db.query<Posts[]>(query, values);
      const [posts] = rows;

      return posts || [];
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar as categorias");
    }
  }

  async findById(id: string): Promise<Posts> {
    try {
      const query = `
        SELECT *
        FROM posts
        WHERE id = $1
      `;

      const values = [id];
      const { rows } = await db.query<Posts>(query, values);
      const [posts] = rows;

      return posts;
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar as categorias");
    }
  }

  async create(posts: Posts): Promise<void> {
    try {
      const query = `
      INSERT INTO posts (
        category_id,
        title,
        content
      )
      VALUES ($1, $2, $3)
    `;

      const values = [posts.category_id, posts.title, posts.content];
      await db.query(query, values);
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar as categorias");
    }
  }

  async update(post: Posts): Promise<void> {
    try {
      const query = `
      UPDATE posts
      SET
        category_id = $1,
        title = $2,
        content = $3
      WHERE id = $4
    `;

      const values = [post.category_id, post.title, post.content, post.id];
      await db.query<{ id: string }>(query, values);
    } catch (error) {
      throw new DatabaseError("Ocorreu um erro ao consultar as categorias");
    }
  }

  async remove(id: string): Promise<void> {
    const query = `
      DELETE
      FROM posts
      WHERE id = $1
    `;

    const values = [id];
    await db.query(query, values);
  }
}

export default new PostsRepository();

import { app } from "@shared/infra/http/app";
import request from "supertest";

import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";

const photo_file = `${__dirname}/../../../../__tests__/test-file/nestjs.png`;

let connection: Connection;

describe("Update Photo - Product Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at) 
        values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()')
      `
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("[PATCH] Should be able to update photo a product", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });
    const { token } = responseToken.body;

    await connection.query(
      `INSERT INTO PRODUCTS(id, name, brand, price, quantities, created_at) 
        values('22cf2b35-01d4-4ee9-8a3f-9071a45728b3', 'Book Test', 'Brand Book Test', '${Number(
          160
        )}', '${Number(16)}', 'now()')
      `
    );

    const response = await request(app)
      .patch(`/products/22cf2b35-01d4-4ee9-8a3f-9071a45728b3/upload/photo`)
      .attach("photo", photo_file)
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(204);
  });
});

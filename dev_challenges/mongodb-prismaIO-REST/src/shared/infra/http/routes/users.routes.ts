import { request, Router } from "express";

import { createUserFactory } from "../../../../modules/accounts/users/useCases/createUser/CreateUserFactory";
import { deleteUserFactory } from "../../../../modules/accounts/users/useCases/deleteUser/DeleteUserFactory";
import { listUserFactory } from "../../../../modules/accounts/users/useCases/listUser/ListUserFactory";
import { listUserByIdFactory } from "../../../../modules/accounts/users/useCases/listUserById/ListByIdUserFactory";
import { updateUserFactory } from "../../../../modules/accounts/users/useCases/updateUser/updateUserFactory";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  createUserFactory().handle(request, response);
});
usersRoutes.get("/", (request, response) => {
  listUserFactory().handle(request, response);
});
usersRoutes.get("/:id", (request, response) => {
  listUserByIdFactory().handle(request, response);
});
usersRoutes.put("/:id", (request, response) => {
  updateUserFactory().handle(request, response);
});
usersRoutes.delete("/:id", (request, response) => {
  deleteUserFactory().handle(request, response);
});

export { usersRoutes };

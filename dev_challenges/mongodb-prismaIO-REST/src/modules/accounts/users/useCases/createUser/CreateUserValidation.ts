import * as yup from "yup";

export const userSchemaValidation = yup.object({
  name: yup.string().required("name is required"),
  cpf: yup.string().required("cpf is required").min(11, "cpf is invalid"),
  email: yup.string().required("email is required").email("email is invalid"),
  isAdmin: yup.boolean(),
  isClient: yup.boolean(),
  isSeller: yup.boolean(),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 characters")
    .max(150, "password can have a maximum of 150 characters"),
});

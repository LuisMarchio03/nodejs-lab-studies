import * as yup from "yup";

yup.setLocale({
  string: {
    min: "A senha deve ter no mínimo 8 caracteres",
  },
});

export const usersSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  username: yup.string().required("Username é obrigatório"),
  password: yup.string().required("Senha é obrigatório").min(8),
});

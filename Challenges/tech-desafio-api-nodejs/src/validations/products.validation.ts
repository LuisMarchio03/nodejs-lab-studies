import * as yup from "yup";

export const productsSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  price: yup.number().required("Preço é obrigatório"),
  quantity: yup.number().required("Quantidade é obrigatória"),
});

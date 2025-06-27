import Products from "../models/products";

interface DataProps {
  name: string;
  price: number;
  quantity: number;
}

class ProductsRepository {
  async create(data: DataProps) {
    const products = new Products(data);
    await products.save();

    return products;
  }

  async findAll() {
    const products = await Products.find();

    return products;
  }

  async findById(id: string) {
    const products = await Products.findById(id);

    return products;
  }

  async update(id: string, name: string, price: number, quantity: number) {
    const products = await Products.findByIdAndUpdate(id, {
      name,
      price,
      quantity,
    });

    return products;
  }

  async delete(id: string) {
    await Products.findByIdAndDelete(id);
  }
}

export { ProductsRepository };

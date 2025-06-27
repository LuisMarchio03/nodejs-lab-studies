import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsRegister from "./pages/Products/Register";
import ProductsList from "./pages/Products/List";
import EditProduct from "./pages/Products/Edit";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/register" exact component={ProductsRegister} />
      <Route path="/products/list" exact component={ProductsList} />
      <Route path="/products/edit/:id" exact component={EditProduct} />
    </Switch>
  );
}

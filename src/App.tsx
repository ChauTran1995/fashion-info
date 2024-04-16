import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import Login from "./Auth/login";

function App() {
  return (
    <Switch>
      <Route path="/Login" exact>
        <Login />
      </Route>
      <Template>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Template>
    </Switch>
  );
}

export default App;

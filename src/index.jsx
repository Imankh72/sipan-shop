import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

render(
  <StrictMode>
    <Auth0Provider
      domain="dev-zkqf3hr7.us.auth0.com"
      clientId="AjOfsNq5WpbSAMJRu4xhduIo4EDj3P06"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </StrictMode>,
  document.getElementById("root")
);

import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductsContext();
  return (
    <Wrapper className="section">
      {products_loading && <Loading />}
      {products_error && <Error />}
      {!products_loading && !products_error && (
        <div className="title">
          <h2>featured products</h2>
          <div className="underline"></div>
          <div className="section-center featured">
            {featured_products.slice(0, 6).map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      )}
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;

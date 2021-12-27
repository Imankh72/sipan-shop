import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  return (
    <Wrapper>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;

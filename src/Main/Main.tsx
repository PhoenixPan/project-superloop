import styled from "styled-components";

import SearchAndDisplay from "../SeatchAndDisplay";
import Banner from "./Banner";

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <SearchAndDisplay />
    </MainContainer>
  );
};
export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  margin: auto;
  padding: 0 20px;
`;

import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <NavHeader>Country Search Engine</NavHeader>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  height: 60px;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background: rgb(228, 4, 12);
  background: linear-gradient(
    90deg,
    rgba(228, 4, 12, 1) 0%,
    rgba(68, 4, 180, 1) 100%
  );
`;

const NavBrandLogo = styled.img`
  height: 40px;
`;

const NavHeader = styled.h2`
  color: white;
`;

import styled from "styled-components";

const Navigation = styled.nav`
  padding: 16px 24px;
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  position: sticky;
  z-index: 25;
  background: #2d2d2d;
  top: 0;
`;

const Navbar = () => {
  return (
    <Navigation>
      <img src="logo-monks.svg" />
      <img src="hamburger.svg" />
    </Navigation>
  );
};

export default Navbar;

import styled from "styled-components";

const Block = styled.div`
  background: #2d2d2d;
  width: 100%;
  padding: 24px 24px 0 24px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 24px;
    right: 24px;
    height: 1px;
    background: #dfbbfe;
  }
`;

const Wrapper = styled.footer`
  background: #2d2d2d;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-inline: auto;
  row-gap: 40px;
  color: #eae8e4;
`;

const LogoSection = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 40px;
  margin-inline: auto;
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  row-gap: 16px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  /* text-box-trim: none; */
  line-height: 36px;
  letter-spacing: 0%;
  text-align: center;
`;

const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  column-gap: 16px;
  row-gap: 16px;
  margin-inline: auto;
`;

const Categorie = styled.li`
  width: fit-content;
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
`;

const Footer = () => {
  return (
    <>
      <Block />
      <Wrapper>
        <LogoSection>
          <img src="insta-logo.svg" />
          <img src="whats-logo.svg" />
          <img src="twitter-logo.svg" />
          <img src="facebook-logo.svg" />
        </LogoSection>
        <Info>
          <Title>Lorem ipsum dolor sit amet</Title>
          <Categories>
            <Categorie>Lorem ipsum</Categorie>
            <Categorie>Lorem ipsum</Categorie>
            <Categorie>Lorem ipsum</Categorie>
            <Categorie>Lorem ipsum</Categorie>
          </Categories>
        </Info>
      </Wrapper>
    </>
  );
};

export default Footer;

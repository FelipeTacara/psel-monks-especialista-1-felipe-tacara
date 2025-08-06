import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 32px 24px;
  background: #2d2d2d;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 64px 80px;
    align-items: center;
  }
`;

const Image = styled.img`
  object-fit: cover;
  @media (min-width: 1024px) {
    width: 314px;
    height: 300px;
  }
`;

const FormWrapper = styled.form`
  background: #eae8e4;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 24px;
  border-radius: 24px;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  color: #2d2d2d;
`;

const Title = styled.h2`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Medium;
  font-size: 24px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2px;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 24px;
  letter-spacing: 0%;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Text = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 24px;
  letter-spacing: 0%;
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 100%;
  }
`;

const FormFields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 18px;

  @media (min-width: 1024px) {
    column-gap: 18px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const Input = styled.input`
  padding: 6px 10px;
`;

const VerificationSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const VerificationTitle = styled.h3`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Medium;
  font-size: 20px;
  /* leading-trim: NONE; */
  line-height: 30px;
  letter-spacing: 0%;
`;

const VerificationCheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;
  width: 100%;
`;

const Values = styled.div`
  background-color: #dfdcd5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  padding: 8px;
`;

const Numbers = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Bold;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #7d26c9;
`;

const PlusIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const EqualsIcon = styled.img`
  width: 14px;
  height: 8px;
`;

const VerificationInput = styled.input`
  width: 100%;
`;

const FormButton = styled.button`
  background: #dfbbfe;
  padding: 8px 40px;
  border-radius: 4px;
  width: fit-content;
  margin: auto;
  border: none;
`;

const FormSection = () => {
  return (
    <Wrapper>
      <Image src="form-image.svg" alt="form image" />
      <FormWrapper>
        <TextWrapper>
          <Title>Lorem ipsum dolor sit amet consectetur</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque
          </Subtitle>
          <Text style={{ margin: "8px 0 0 0" }}>
            *Lorem ipsum dolor sit amet consectetur
          </Text>
        </TextWrapper>
        <FormFields>
          <Input placeholder="Categoria"></Input>
          <Input placeholder="Categoria"></Input>
          <Input placeholder="Categoria"></Input>
          <Input placeholder="Categoria"></Input>
        </FormFields>
        <VerificationSection>
          <VerificationTitle>Verificação de segurança</VerificationTitle>
          <VerificationCheckWrapper>
            <Values>
              <Numbers>22</Numbers>
              <PlusIcon src="plus-icon.svg" alt="Plus icon" />
              <Numbers>22</Numbers>
            </Values>
            <EqualsIcon src="equals-icon.svg" alt="equals icon" />
            <VerificationInput placeholder="Resultado"></VerificationInput>
          </VerificationCheckWrapper>
        </VerificationSection>
        <FormButton>Lorem Ipsum</FormButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default FormSection;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGraphQL } from "../context/GraphQLContext";

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
  font-weight: 500;
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
  height: 42px;
  border-radius: 8px;
  border: none;
`;

const VerificationSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 32px;
  }
`;

const VerificationTitle = styled.h3`
  font-family: HelveticaNeue;
  font-weight: 500;
  font-style: Medium;
  font-size: 20px;
  /* leading-trim: NONE; */
  line-height: 30px;
  letter-spacing: 0%;

  @media (min-width: 1024px) {
    display: flex;
    flex-grow: 1;
    font-size: 24px;
    line-height: 36px;
    white-space: nowrap;
  }
`;

const VerificationCheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    column-gap: 32px;
    flex-shrink: 1;
  }
`;

const Values = styled.div`
  background-color: #dfdcd5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  padding: 0 8px 0 8px;
  height: 42px;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 0 24px 0 24px;
    column-gap: 24px;
  }
`;

const Numbers = styled.p`
  font-family: HelveticaNeue;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #7d26c9;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
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
  height: 42px;
  border-radius: 8px;
  border: none;
  padding: 6px 10px;
  @media (min-width: 1024px) {
    flex-shrink: 1;
  }
`;

const FormButton = styled.button`
  background: #dfbbfe;
  padding: 8px 40px;
  border-radius: 4px;
  width: fit-content;
  margin: auto;
  border: none;
  color: #2d2d2d;
`;

const FormSection = () => {
  const { formSections } = useGraphQL();

  //Lógica do Form
  const [categorias, setCategorias] = useState({
    categoria_1: "",
    categoria_2: "",
    categoria_3: "",
    categoria_4: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Lógica da Verificação
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resposta, setResposta] = useState("");
  const [verificado, setVerificado] = useState(false);

  useEffect(() => {
    gerarNovosNumeros();
  }, []);

  const gerarNovosNumeros = () => {
    const novoNum1 = Math.floor(Math.random() * 100);
    const novoNum2 = Math.floor(Math.random() * 100);
    setNum1(novoNum1);
    setNum2(novoNum2);
    setResposta("");
    setVerificado(false);
  };

  const verificarSoma = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setResposta(valor);

    // Verifica se a resposta está correta
    if (parseInt(valor) === num1 + num2) {
      setVerificado(true);
    } else {
      setVerificado(false);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/wp-json/categorias/v1/salvar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            x_api_token: "token_desafio_monks",
          },
          body: JSON.stringify(categorias),
        }
      );

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        setMessage("Dados salvos com sucesso!");
        setCategorias({
          // Limpa o formulário
          categoria_1: "",
          categoria_2: "",
          categoria_3: "",
          categoria_4: "",
        });
      } else {
        setMessage(`Erro: ${data.message}`);
      }
      gerarNovosNumeros();
    } catch (error) {
      setMessage("Falha na conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Image src="form-image.svg" alt="form image" />
      {formSections.map((form) => (
        <FormWrapper onSubmit={handleSubmit} key={form.id}>
          <TextWrapper>
            <Title>{form.title}</Title>
            <Subtitle>{form.subtitle}</Subtitle>
            <Text style={{ margin: "8px 0 0 0" }}>{form.text}</Text>
          </TextWrapper>
          <FormFields>
            <Input
              type="text"
              placeholder={form.inputs[0]}
              value={categorias[`categoria_1`]}
              onChange={(e) =>
                setCategorias({
                  ...categorias,
                  [`categoria_1`]: e.target.value,
                })
              }
              required
            ></Input>
            <Input
              type="text"
              placeholder={form.inputs[1]}
              value={categorias[`categoria_2`]}
              onChange={(e) =>
                setCategorias({
                  ...categorias,
                  [`categoria_2`]: e.target.value,
                })
              }
              required
            ></Input>
            <Input
              type="text"
              placeholder={form.inputs[2]}
              value={categorias[`categoria_3`]}
              onChange={(e) =>
                setCategorias({
                  ...categorias,
                  [`categoria_3`]: e.target.value,
                })
              }
              required
            ></Input>
            <Input
              type="text"
              placeholder={form.inputs[3]}
              value={categorias[`categoria_4`]}
              onChange={(e) =>
                setCategorias({
                  ...categorias,
                  [`categoria_4`]: e.target.value,
                })
              }
              required
            ></Input>
          </FormFields>
          <VerificationSection>
            <VerificationTitle>Verificação de segurança</VerificationTitle>
            <VerificationCheckWrapper>
              <Values>
                <Numbers>{num1}</Numbers>
                <PlusIcon src="plus-icon.svg" alt="Plus icon" />
                <Numbers>{num2}</Numbers>
              </Values>
              <EqualsIcon src="equals-icon.svg" alt="equals icon" />
              <VerificationInput
                placeholder="Resultado"
                type="number"
                value={resposta}
                onChange={verificarSoma}
              ></VerificationInput>
            </VerificationCheckWrapper>
          </VerificationSection>
          <FormButton
            type="submit"
            disabled={!verificado || loading}
            style={{
              opacity: verificado ? 1 : 0.5,
              cursor: verificado ? "pointer" : "not-allowed",
            }}
          >
            Lorem Ipsum
          </FormButton>
        </FormWrapper>
      ))}
    </Wrapper>
  );
};

export default FormSection;

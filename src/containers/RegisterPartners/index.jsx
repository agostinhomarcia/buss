import { useState } from "react";
import {
  Container,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  SubmitButton,
  Title,
  Description,
} from "./styles";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function RegisterPartners() {
  const [partnerData, setPartnerData] = useState({
    name: "",
    urlDoc: "",
    repositoryGit: "",
    isActive: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerData({
      ...partnerData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners",
        partnerData
      );
      toast.success("Parceiro cadastrado com sucesso!");
      setPartnerData({
        name: "",
        urlDoc: "",
        repositoryGit: "",
        isActive: false,
      });
    } catch (error) {
      console.error("Erro ao cadastrar parceiro:", error);
      toast.error(
        "Erro ao cadastrar parceiro. Verifique o console para mais detalhes."
      );
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Title>Cadastrar Parceiros</Title>
      <Description>
        Preencha as informações do novo Parceiro BusinessFlow:
      </Description>

      <FormGroup>
        <FormLabel>Nome do Parceiro:</FormLabel>
        <FormInput
          type="text"
          name="name"
          value={partnerData.name}
          onChange={handleInputChange}
          placeholder="Insira o nome"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>URL do Parceiro:</FormLabel>
        <FormInput
          type="text"
          name="urlDoc"
          value={partnerData.urlDoc}
          onChange={handleInputChange}
          placeholder="Insira a URL"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Repositório Git:</FormLabel>
        <FormInput
          type="text"
          name="repositoryGit"
          value={partnerData.repositoryGit}
          onChange={handleInputChange}
          placeholder="Insira o repositório"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Empresa ativa?</FormLabel>
        <FormSelect
          value={partnerData.isActive}
          onChange={(e) =>
            setPartnerData({
              ...partnerData,
              isActive: e.target.value === "true",
            })
          }
        >
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </FormSelect>
      </FormGroup>

      <SubmitButton onClick={handleSubmit}>Cadastrar</SubmitButton>
    </Container>
  );
}

export default RegisterPartners;

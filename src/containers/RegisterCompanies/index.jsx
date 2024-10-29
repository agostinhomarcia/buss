import { useState } from "react";
import {
  Container,
  Title,
  Description,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  SubmitButton,
} from "./styles";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function RegisterCompanies() {
  const [companiesData, setCompaniesData] = useState({
    companyName: "",
    collaboratorsCount: "",
    isActive: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompaniesData({
      ...companiesData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies",
        companiesData
      );
      toast.success("Empresa cadastrada com sucesso!");
      setCompaniesData({
        companyName: "",
        collaboratorsCount: "",
        isActive: false,
      });
    } catch (error) {
      console.error("Erro ao cadastrar Empresa:", error);
      toast.error("Erro ao cadastrar Empresa. Tente novamente.");
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Title>Cadastrar Empresas</Title>
      <Description>
        Preencha as informações da nova Empresa Externa BusinessFlow:
      </Description>

      <FormGroup>
        <FormLabel>Nome da Empresa:</FormLabel>
        <FormInput
          type="text"
          name="companyName"
          value={companiesData.companyName}
          onChange={handleInputChange}
          placeholder="Insira o nome da empresa"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Número de Colaboradores:</FormLabel>
        <FormInput
          type="number"
          name="collaboratorsCount"
          value={companiesData.collaboratorsCount}
          onChange={handleInputChange}
          placeholder="Ex.: 50"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>A empresa está ativa?</FormLabel>
        <FormSelect
          value={companiesData.isActive}
          onChange={(e) =>
            setCompaniesData({
              ...companiesData,
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

export default RegisterCompanies;

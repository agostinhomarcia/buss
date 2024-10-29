import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  min-height: 100vh;

  /* Para telas menores */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 16px;
  text-align: center;

  /* Reduzir tamanho do título em telas menores */
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: #dcdcdc;
  font-size: 18px;
  margin-bottom: 24px;
  text-align: center;

  /* Ajustes para dispositivos menores */
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;

  /* Ajuste da largura do formulário para telas menores */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormLabel = styled.label`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 35px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    height: 32px;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 35px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    height: 32px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 40px;
  margin-top: 24px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 15px;
    height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 35px;
  }
`;

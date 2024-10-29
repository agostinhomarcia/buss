import styled from 'styled-components';

export const Colunas = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #333;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #555;
  }

  th {
    background-color: #007bff;
    color: #ffffff;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #444; /* Cinza escuro para as linhas pares */
  }

  tr:nth-child(odd) {
    background-color: #3c3f41; /* Cinza escuro para as linhas ímpares */
  }

  td {
    color: #ddd; /* Texto mais claro para contraste */
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
      font-size: 14px;
    }

    th {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    
    th, td {
      font-size: 12px;
      padding: 6px;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  span {
    margin: 0 10px;
    font-weight: bold;
    color: #ddd;
  }
`;

export const EditRow = styled.tr`
  background-color: #555;
  
  td {
    padding: 10px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: #ffffff;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const PaginationButton = styled(Button)`
  background-color: #6c757d;

  &:disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
  }
`;

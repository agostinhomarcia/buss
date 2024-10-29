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
  background-color: #fff;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #007bff;
    color: #ffffff;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
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
  }

  @media (max-width: 768px) {
    span {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 12px;
      margin: 0 5px;
    }
  }
`;

export const EditRow = styled.tr`
  background-color: #e8f4ff;

  td {
    padding: 10px;
  }

  input {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f8fa;
    color: #222;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 100%;
      font-size: 12px;
      padding: 4px;
    }
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  color: #222;

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

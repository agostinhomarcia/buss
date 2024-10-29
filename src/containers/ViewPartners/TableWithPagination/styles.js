import styled from 'styled-components';

export const Container = styled.div`
  background-color: #282c34;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 100px;
  min-height: 100vh;

  h1 {
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    margin-top: 12px;
    text-align: center;
  }

  p {
    color: #dcdcdc;
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    text-align: center;
    max-width: 80%;
  }
`;

export const Colunas = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 1000px;


  @media (max-width: 768px) {
    max-width: 100%;
  }

  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #3c3f41;
    border-radius: 8px;
    overflow: hidden;
    min-width: 600px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    color: #ffffff;
    font-size: 14px;
  }

  th {
    background-color: #007bff;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }

  tr:nth-child(even) {
    background-color: #33373a;
  }

  tr:hover {
    background-color: #4a4e53;
  }

  td {
    font-size: 14px;
    color: #dcdcdc;
    border-bottom: 1px solid #555;
  }

  .action-buttons {
    display: flex;
    gap: 8px;
  }

  .edit-button, .delete-button, .update-button, .cancel-button {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .edit-button {
    background-color: #007bff;
    color: #ffffff;
  }

  .edit-button:hover {
    background-color: #0056b3;
  }

  .delete-button {
    background-color: #007bff;
    color: #ffffff;
  }

  .delete-button:hover {
    background-color: #0056b3;
  }

  .update-button {
    background-color: #007bff;
    color: #ffffff;
  }

  .update-button:hover {
    background-color: #0056b3;
  }

  .cancel-button {
    background-color: #6c757d;
    color: #ffffff;
  }

  .cancel-button:hover {
    background-color: #5a6268;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 20px;

    button {
      padding: 8px 16px;
      background-color: #555;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #333;
    }

    button:disabled {
      background-color: #777;
      cursor: not-allowed;
    }

    span {
      color: #ffffff;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      padding: 8px;
      font-size: 12px;
    }

    .pagination button {
      padding: 6px 12px;
      font-size: 12px;
    }

    .edit-button, .delete-button, .update-button, .cancel-button {
      padding: 4px 8px;
      font-size: 12px;
    }
  }
`;

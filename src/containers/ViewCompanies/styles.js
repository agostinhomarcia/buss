import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #282c34;

  h1 {
    color: #ffffff;
    font-size: 36px;
    font-weight: bold;
    margin-top: 12px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    color: #dcdcdc;
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    text-align: center;
    max-width: 80%;

    @media (max-width: 768px) {
      font-size: 16px;
      max-width: 90%;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      max-width: 100%;
    }
  }

  input {
    width: 200px;
    height: 35px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #555;
    border-radius: 8px;
    background-color: #3c3f41;
    color: #ffffff;
    font-size: 16px;

    @media (max-width: 768px) {
      width: 180px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 160px;
      font-size: 13px;
    }
  }

  button {
    margin-top: 20px;
    padding: 8px 16px;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      padding: 6px 12px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      padding: 5px 10px;
      font-size: 13px;
    }
  }

  select {
    width: 200px;
    height: 35px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #555;
    border-radius: 8px;
    background-color: #3c3f41;
    color: #ffffff;
    font-size: 16px;

    @media (max-width: 768px) {
      width: 180px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 160px;
      font-size: 13px;
    }
  }
`;

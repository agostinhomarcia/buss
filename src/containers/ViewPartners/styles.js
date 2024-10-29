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

  input {
    width: 250px;
    height: 35px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #555;
    border-radius: 8px;
    background-color: #3c3f41;
    color: #ffffff;
    font-size: 16px;
  }

  button {
    padding: 8px 16px;
    margin: 10px;
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
  }
`;

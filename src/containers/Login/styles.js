import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    width: 200px;
    border-radius: 10px;
    margin-top: 30px;
  }

  h1 {
    margin-top: 12px;
    color: #fff;
    font-size: 50px;
    text-align: center;
  }

  p {
    margin-top: 30px;
    color: #fff;
    font-size: 25px;
    text-align: center;
  }

  h3 {
    margin-top: 25px;
    color: #fff;
  }

  input {
    width: 100%;
    max-width: 300px;
    height: 30px;
    margin-top: 10px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 16px;
  }

  .password-container {
    position: relative;
    display: flex;
    align-items: center;

    input {
      padding-right: 40px;
    }

    .eye-icon {
      position: absolute;
      right: -65px;
      background: none;
      border: none;
      cursor: pointer;
      color: #666;
      bottom: -1px;
      font-size: 1.2em;
      display: flex;
      align-items: center;
    }
  }

  label {
    color: #fff;
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    width: 100%;
    max-width: 120px;
    height: 40px;
    background-color: #dcdcdc;
    border: none;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }

    h1 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }

    input {
      max-width: 250px;
      height: 35px;
      font-size: 16px;
    }

    button {
      max-width: 100px;
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 120px;
    }

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
    }

    input {
      max-width: 200px;
      height: 30px;
      font-size: 14px;
      padding-left: 15px;
    }

    button {
      max-width: 90px;
      font-size: 14px;
      height: 35px;
    }
  }
`;

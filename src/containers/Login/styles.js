// src/components/styles.js

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #3a3a3a, #5a5a5a);
`;

export const LoginCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 120px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
    font-size: 1rem;
  }

  .input-group {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;

    input {
      width: 100%;
      height: 45px;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 0 15px;
      font-size: 1rem;
      margin-bottom: 12px;
      &:focus {
        border-color: #4b79a1;
        outline: none;
      }
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
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        color: #555;
        font-size: 1.2em;
      }
    }

    label {
      color: #333;
      font-size: 0.9rem;
      display: inline-block;
      margin-top: 4px;
    }

    input[type="checkbox"] {
      margin-right: 8px;
    }
  }

  .login-button {
    width: 100%;
    height: 45px;
    background-color: #4b79a1;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3b668e;
    }
  }

  .google-login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    background-color: #ffffff;
    color: #555;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

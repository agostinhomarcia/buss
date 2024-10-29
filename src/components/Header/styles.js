import styled from 'styled-components';

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a23;
  padding: 15px 30px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  img {
    width: 50px;
    margin-right: 10px;
  }

  @media (max-width: 1200px) {
    padding: 15px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  h2 {
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    margin: 0;
  }
`;


export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 1200px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #0a0a23;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    width: auto;
  }
`;

export const Li = styled.li`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
      border-bottom: 2px solid #007bff;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 28px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;

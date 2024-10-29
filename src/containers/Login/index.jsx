import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Container, LoginCard } from "./styles";
import Logo from "../../assets/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "123456") {
      if (keepLoggedIn) {
        document.cookie = `username=${username}; expires=${new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toUTCString()}; path=/`;
      } else {
        localStorage.setItem("username", username);
      }
      const redirectUrl = getCookie("redirectUrl");
      window.location.href = redirectUrl || "/Home";
    } else {
      toast.error("Nome de usuário ou senha incorretos");
    }
  };

  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return "";
  }

  return (
    <Container>
      <ToastContainer />
      <LoginCard>
        <img src={Logo} alt="logo" />
        <h1>BusinessFlow</h1>
        <p>Controle de Gestão de Empresas e Parceiros</p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="eye-icon"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          <input
            type="checkbox"
            checked={keepLoggedIn}
            onChange={() => setKeepLoggedIn(!keepLoggedIn)}
          />
          <label>Mantenha-me conectado</label>
        </div>
        <button onClick={handleLogin} className="login-button">
          Entrar
        </button>
      </LoginCard>
    </Container>
  );
}

export default Login;

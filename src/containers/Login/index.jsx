import { Container } from "./styles";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        window.location.href = "/Home";
      }
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
      <img src={Logo} alt="logo" />
      <h1>Login - BusinessFlow</h1>
      <p>Controle de Gestão de Empresas e Parceiros</p>
      <h3>Insira seu Nome de Usuário:</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h3>Insira sua Senha:</h3>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
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
      <button onClick={handleLogin}>Entrar</button>
    </Container>
  );
}

export default Login;

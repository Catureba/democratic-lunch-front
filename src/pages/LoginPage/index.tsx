import styles from "./LoginPage.module.css";
import logo from "../../assets/democratic-lunch-tela-login.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/login";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event?.preventDefault();
    const cardBody = {
      email,
      password,
    };
    try {
      await login(cardBody);
      // redirecinar o usuario
      console.log("Login ok");
    } catch (error: any) {
      if (error.response?.status === 403) {
        setErrorMessage("E-mail ou senha incorretos!");
      } else {
        setErrorMessage(
          "Ops, ocorreu um erro interno no sistema. Tente novamente mais tarde!"
        );
      }
    }
  }

  return (
    <div className={styles.loginPageConteiner}>
      <div className={styles.box}>
        <div className={styles.boxLeft}>
          <div className={styles.boxLeftIntern}>
            <h1>Democratic Lunch</h1>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.boxRight}>
          <div className={styles.formBox}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                type="email"
                className={styles.inputBox1}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit">Login</button>
              <span className={styles.line}></span>
              {errorMessage != "" && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </form>
            <button onClick={() => navigate("/cadastrar")}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

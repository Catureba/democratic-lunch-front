import styles from "./LoginPage.module.css";
import logo from "../../assets/democratic-lunch-tela-login.jpg";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

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
            <form className={styles.form} action="">
              <input
                placeholder="Email"
                type="email"
                name=""
                id=""
                className={styles.inputBox1}
              />
              <input placeholder="Senha" type="password" />
              <button type="submit">Login</button>
              <span className={styles.line}></span>
            </form>
            <button onClick={() => navigate("/cadastrar")}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

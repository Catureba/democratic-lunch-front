import { useState } from "react";
import { postUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/democratic-lunch-tela-login.jpg";
import styles from "./SignUp.module.css";
import Alert from "../../components/Alert";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event?.preventDefault();
    if (password.length >= 8 && password.length <= 12) {
      if (password === confirmPassword) {
        const cardBody = {
          name,
          email,
          password,
        };
        try {
          await postUser(cardBody);
          setSuccess(true);
          // redirecionar usuário
        } catch (error: any) {
          setErrorMessage("Ops, ocorreu um erro ao realizar seu cadastro.");
        }
      } else {
        setErrorMessage("As senhas devem ser iguais.");
      }
    } else {
      setErrorMessage("Sua senha deve ter entre 8 e 12 caracteres.");
    }
  }

  return (
    <>
      {success && <Alert />}
      <div className={styles.singUpConteiner}>
        <div className={styles.box}>
          <div className={styles.boxLeft}>
            <div className={styles.boxLeftIntern}>
              <h1>Democratic Lunch</h1>
              <img src={logo} alt="Logo do Democratic Lunch" />
            </div>
          </div>
          <div className={styles.boxRight}>
            <div className={styles.formBox}>
              <form onSubmit={handleSubmit}>
                <input
                  required
                  placeholder="Nome"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  required
                  placeholder="E-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                />
                <input
                  required
                  placeholder="Senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                />
                <input
                  required
                  placeholder="Digite a senha novamente"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  type="password"
                />

                <button type="submit">Finalizar cadastro</button>
              </form>
              {errorMessage != "" && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </div>
          </div>                                
        </div>
      </div>
    </>
  );
}

import styles from "./Alert.module.css";

function Alert() {
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <p> Cadastro realizado com sucesso! </p>
      </div>
    </div>
  );
}

export default Alert;

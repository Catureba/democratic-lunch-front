
import styles from './loginPage.module.css'

function LoginPage() {
    return (
        <div className={styles.loginPageConteiner}>
            <div className={styles.box}>
                <div className={styles.boxLeft}>
                    <h1>Esquerda</h1>
                </div>
                <div className={styles.boxRight}>
                    <h1>Direita</h1>
                    <div className={styles.formBox}>
                        <form action="">
                            <input placeholder='Email' type="email" name="" id="" />
                            <input placeholder='Senha' type="password" />
                            <button type="submit" >Entrar</button>
                            <span className={styles.line}></span>
                        </form>
                        <button>Criar Conta</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
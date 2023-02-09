
import styles from './LoginPage.module.css'

function LoginPage() {
    return (
        <div className={styles.loginPageConteiner}>
            <div className={styles.box}>
                <div className={styles.boxLeft}>
                    <div className={styles.boxLeftIntern}>
                        <h1>Democratic Lunch</h1>
                        <img src="./democratic-lunch-tela-login.jpg" alt="" />
                    </div>

                </div>
                <div className={styles.boxRight}>
                    <div className={styles.formBox}>
                        <form action="">
                            <input placeholder='Email' type="email" name="" id="" className={styles.inputBox1} />
                            <input placeholder='Senha' type="password" />
                            <button type="submit" >Login</button>
                            <span className={styles.line}></span>
                        </form>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
import styles from './Header.module.css'
import logo from '../../assets/democratic-lunch-tela-login.jpg'
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>

            <div className={styles.box}>

                <div className={styles.logo}>

                    <img src={logo} alt="" />

                    <h2>Democratic Lunch</h2>

                </div>

                <ul>
                    
                    <li onClick={() => navigate("/home")}>Home</li>

                    <li >Usuario</li>

                </ul>

            </div>

        </header>
    );
}
export default Header
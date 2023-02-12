import Header from "../../components/Header";
import styles from "./Home.module.css";
import imageDefault from '../../assets/image-dafult.png'

function Home() {

  return (
    <div>
      <Header />
      <div className={styles.homeConteiner}>
        <div className={styles.homeBox}>

          <div className={styles.homeBox1}>
            <img src={imageDefault} alt="" />
            <button>Sugerir novo restaurante</button>
          </div>

          <div className={styles.homeBox2}>
            <img src={imageDefault} alt="" />
            <button>Votar no meu preferido</button>
          </div>

          <div className={styles.homeBox3}>
            <img src={imageDefault} alt="" />
            <button>Resultado da Votação</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

import Header from "../../components/Header";
import styles from "./Home.module.css";
import imageDefault from '../../assets/image-dafult.png'
import axios from "axios";
import { get } from "http";

function Home() {

  let resultado = [{
    nome: "Barraca da maria",
    site: "mariabarrraqueira.com.br",
    descricao: "não é o lugar mais calmo, mas a comida é boa",
    cep: 40285820,
    rua: "Rua Jardim Santo Antônio",
    bairro: "Brotas",
    cidade: "Salvador",
    estado: "BA"
  }]

  const restaurantes = [{
    nome: "Barraca da maria",
    site: "mariabarrraqueira.com.br",
    descricao: "não é o lugar mais calmo, mas a comida é boa",
    cep: 40285820,
    rua: "Rua Jardim Santo Antônio",
    bairro: "Brotas",
    cidade: "Salvador",
    estado: "BA",
  },
  {
    nome: "Hotdog da joana",
    site: "joanacachorrohot.com.br",
    descricao: "sinceramente eu nem sei, só vi no insta e indiquei",
    cep: 40285820,
    rua: "Rua Jardim Santo Antônio",
    bairro: "Brotas",
    cidade: "Salvador",
    estado: "BA",
  },
  {
    nome: "Restaurante do sergio",
    site: "sergiorestaurante.com.br",
    descricao: "A comida é boa",
    cep: 40285820,
    rua: "Rua Jardim Santo Antônio",
    bairro: "Brotas",
    cidade: "Salvador",
    estado: "BA",
  }]

  function votar(voto: any) {
    console.log(voto)
    alert("Você votou no restaurante: " + voto.nome)
  }

  return (
    <div>
      <Header />
      <div className={styles.homeConteiner}>

        <section className={styles.resultBox}>
          {resultado.map((element) => (
            <div className={styles.vencedor}>
              <h1>Vencedor do dia: <span>{element.nome}</span></h1>
              <h2>Site: <span>{element.site}</span></h2>
              <h2>Descrição: <span>{element.descricao}</span></h2>
              <h2>Rua: <span>{element.rua}</span></h2>
              <h2>Bairro: <span>{element.bairro}</span></h2>
              <h2>Cidade: <span>{element.cidade}</span></h2>
              <h2>Estado: <span>{element.estado}</span></h2>
              <h2>Cep: <span>{element.cep}</span></h2>
            </div>
          ))}
        </section>


        <section className={styles.listBox}>
          {restaurantes.map((element) => (
            <div className={styles.restaurantes}>
              <h1>{element.nome}</h1>
              <h2>Site: <span>{element.site}</span></h2>
              <h2>Descrição: <span>{element.descricao}</span></h2>
              <h2>Rua: <span>{element.rua}</span></h2>
              <h2>Bairro: <span>{element.bairro}</span></h2>
              <h2>Cidade: <span>{element.cidade}</span></h2>
              <h2>Estado: <span>{element.estado}</span></h2>
              <h2>Cep: <span>{element.cep}</span></h2>
              <button onClick={() => votar(element)} >Votar</button>
            </div>
          ))}
        </section>
        <section className={styles.postBox}>
          <div>
            <h1>
              Não encontrou seu restaurante preferido? <br />
              Cadastre ele agora!
            </h1>

          </div>
          <form action="">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Site" />
            <input type="text" placeholder="Descrição" />
            <input type="number" placeholder="CEP" />
            <button type="submit">Cadastrar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
export default Home;

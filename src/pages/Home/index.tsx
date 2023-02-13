import Header from "../../components/Header";
import styles from "./Home.module.css";
import axios from "axios";
import { get } from "http";
import { useEffect, useState } from "react";

function Home() {

  const [posts, setPosts] = useState([]);
  const [result, setResult] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/restaurant/list")
      const data = response.data
      setPosts(data)
      buscarResultado(data)
    } catch (error) {
      console.log(error)
    }
  }

  function buscarResultado(data: any) {
    let resultado = -1
    let maiorNumeroDeVotos = -1
    data.map((element: any, index: number) => {
      if (element.votes > maiorNumeroDeVotos) {
        maiorNumeroDeVotos = element.votes
        resultado = index
      }
    })
    setResult(data[resultado])
    console.table(result)
    console.table(data[resultado])
    //console.table(resultadoTeste)
  }

  useEffect(() => {
    getPosts()
  }, [])



  let resultadoTeste = [{
    nome: "Barraca da maria",
    site: "mariabarrraqueira.com.br",
    description: "não é o lugar mais calmo, mas a comida é boa",
    cep: 40285820,
    street: "Rua Jardim Santo Antônio",
    neighborhood: "Brotas",
    city: "Salvador",
    uf: "BA"
  }]



  function votar(voto: any) {
    alert("Você votou no restaurante: " + voto.nome)
  }

  return (
    <div>
      <Header />
      <div className={styles.homeConteiner}>

        <section className={styles.resultBox}>
          {resultadoTeste.map((element: any) => (
            <div className={styles.vencedor}>
              <h1>Vencedor do dia: <span>{element.name}</span></h1>
              <h2>Site: <span>{element.site}</span></h2>
              <h2>Descrição: <span>{element.description}</span></h2>
              <h2>Rua: <span>{element.street}</span></h2>
              <h2>Bairro: <span>{element.neighborhood}</span></h2>
              <h2>Cidade: <span>{element.city}</span></h2>
              <h2>Estado: <span>{element.uf}</span></h2>
              <h2>Cep: <span>{element.cep}</span></h2>
            </div>
          ))}
        </section>


        <section className={styles.listBox}>
          {
            posts.map((element: any) => (
              <div className={styles.restaurantes}>
                <h1>{element.name}</h1>
                <h2>Site: <span>{element.site}</span></h2>
                <h2>Descrição: <span>{element.description}</span></h2>
                <h2>Rua: <span>{element.street}</span></h2>
                <h2>Bairro: <span>{element.neighborhood}</span></h2>
                <h2>Cidade: <span>{element.city}</span></h2>
                <h2>Estado: <span>{element.uf}</span></h2>
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

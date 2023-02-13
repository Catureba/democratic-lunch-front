import Header from "../../components/Header";
import styles from "./Home.module.css";
import axios from "axios";
import { get } from "http";
import { useEffect, useState } from "react";

function Home() {

  const [posts, setPosts] = useState([]);
  const [result, setResult] = useState({
    name: "Aguardando...",
    site: "",
    description: "Aguardando",
    cep: 0,
    street: "",
    neighborhood: "",
    city: "",
    uf: "",
    votes: 0,
  });
  var indexResult = -1

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/restaurant/list")
      const data = response.data
      setPosts(data)
      indexResult = buscarResultado(data)
      setResult(data[indexResult])

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
    return resultado
  }
  useEffect(() => {
    getPosts()
  }, [])
  function votar(voto: any) {
    alert("Você votou no restaurante: " + voto.nome)
  }

  return (
    <div>
      <Header />
      <div className={styles.homeConteiner}>

        <section className={styles.resultBox}>
            <div className={styles.vencedor}>
              <h1>Restaurante mais votado com {result.votes} até o momento: <span>{result.name}</span></h1>
              <h2>Site: <span>{result.site}</span></h2>
              <h2>Descrição: <span>{result.description}</span></h2>
              <h2>Rua: <span>{result.street}</span></h2>
              <h2>Bairro: <span>{result.neighborhood}</span></h2>
              <h2>Cidade: <span>{result.city}</span></h2>
              <h2>Estado: <span>{result.uf}</span></h2>
              <h2>Cep: <span>{result.cep}</span></h2>
            </div>
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

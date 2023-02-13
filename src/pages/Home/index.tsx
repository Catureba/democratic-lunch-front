import Header from "../../components/Header";
import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { postRestaurants } from "../../services/restaurants";

interface ViacepInterface {
  data: {
    cep: string;
    logradouro?: string;
    bairro?: string;
    localidade: string;
    uf: string;
    erro?: string;
  };
}

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

  const [name, setName] = useState("");
  const [site, setSite] = useState("");
  const [description, setDescription] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/restaurant/list")
      const data = response.data
      setPosts(data)
      indexResult = buscarResultado(data)
      setResult(data[indexResult])
    } catch (error) {
      console.log(error);
    }
  };

  function buscarResultado(data: any) {
    let resultado = -1;
    let maiorNumeroDeVotos = -1;
    data.map((element: any, index: number) => {
      if (element.votes > maiorNumeroDeVotos) {
        maiorNumeroDeVotos = element.votes;
        resultado = index;
      }
    })
    return resultado
  }
  useEffect(() => {

    getPosts();
  }, []);

  function votar(voto: any) {
    alert("Você votou no restaurante: " + voto.name);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!error) {
      const cardBody = {
        name,
        site,
        description,
        cep,
        street,
        neighborhood,
        city,
        uf,
      };
      try {
        await postRestaurants(cardBody);
        setMessage("Restaurante cadastrado com sucesso!");
        setName("");
        setSite("");
        setDescription("");
        setCep("");
        setStreet("");
        setNumber("");
        setNeighborhood("");
        setCity("");
        setUf("");
        getPosts();
      } catch (error: any) {
        setMessage("Ops, ocorreu um erro ao realizar seu cadastro.");
      }
    }
  }

  async function handleCep() {
    try {
      let adress: ViacepInterface = await axios(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      if (!adress.data.erro) {
        adress.data.logradouro != undefined &&
          setStreet(adress.data.logradouro);
        adress.data.bairro != undefined && setNeighborhood(adress.data.bairro);
        setCity(adress.data.localidade);
        setUf(adress.data.uf);
        setError(false);
        setMessage("");
      } else {
        setMessage("CEP inválido!");
        setError(true);
      }
    } catch (error: any) {
      setMessage("Erro com a API Viacep!");
      setError(true);
    }

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
          {posts.map((element: any) => (
            <div className={styles.restaurantes}>
              <h1>{element.name}</h1>
              <h2>
                Site: <span>{element.site}</span>
              </h2>
              <h2>
                Descrição: <span>{element.description}</span>
              </h2>
              <h2>
                Rua: <span>{element.street}</span>
              </h2>
              <h2>
                Bairro: <span>{element.neighborhood}</span>
              </h2>
              <h2>
                Cidade: <span>{element.city}</span>
              </h2>
              <h2>
                Estado: <span>{element.uf}</span>
              </h2>
              <h2>
                Cep: <span>{element.cep}</span>
              </h2>
              <button onClick={() => votar(element)}>Votar</button>
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
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Site"
              value={site}
              onChange={(event) => setSite(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <input
              required
              type="number"
              placeholder="CEP"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
              onBlur={handleCep}
            />
            <input
              required
              type="text"
              placeholder="Rua"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
            <input
              required
              type="number"
              placeholder="Número"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Bairro"
              value={neighborhood}
              onChange={(event) => setNeighborhood(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="UF"
              value={uf}
              onChange={(event) => setUf(event.target.value)}
            />
            {message !== "" && <p>{message}</p>}
            <button type="submit">Cadastrar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
export default Home;

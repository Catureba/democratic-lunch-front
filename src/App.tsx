import Footer from "./components/Footer";
import Routers from "./routes";
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="main">
      <Routers />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

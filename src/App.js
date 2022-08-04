import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!!! a LG TECH" />

    </div>
  );
}

export default App;

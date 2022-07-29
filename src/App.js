import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!!! a LG TECH" />
    </div>
  );
}

export default App;

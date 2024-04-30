import logo from './logo.svg';
import './App.css';
import ListaDeImagenes from './components/listadeimagenes';
import Header from './components/header';



function App() {
  return (
    <div className="App">
      <Header></Header> 
      <ListaDeImagenes></ListaDeImagenes>
    </div>
  );
}

export default App;

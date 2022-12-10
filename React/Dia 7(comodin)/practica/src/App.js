import './App.css';
import Modulo from './componentes/Modulo';

function App() {
  return (
    <div className="App">
      <h1>Titulo</h1>
        <Modulo 
          imagen='persona1'
          alter='Imagen de Persona 1'
          nombre='Juan Marquez'
          cargo='Ingeniero Mecanico'
          contenido='Supongo que hace algo'
        />
    </div>
  );
}

export default App;

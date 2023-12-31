import './App.css';
import freeCodeCampLogo from './imagenes/logofreecode.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={ freeCodeCampLogo }
          className="freecodecamp-logo"
          alt="freeCodeLogo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

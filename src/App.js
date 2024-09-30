import './index.css';
import Encabezado from '../src/Componentes/encabezado/Encabezado';
import Info from './Componentes/info_encabezado/Informacion';
import TeEsperamos from './Componentes/esperamos/TeEsperamos';
import Historia from './Componentes/historia/Historia';
import InfoFinal from './Componentes/info_final/Info';
import Footer from './Componentes/footer/Footer';


function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Info/>
      <TeEsperamos/>
      <Historia/>
      <InfoFinal/>
      <Footer/>
    </div>
  );
}

export default App;

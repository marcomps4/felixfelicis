import '../encabezado/encabezado.css';
import bg1 from '../../Assets/encabezado/01_fondo.jpg';
import manos from '../../Assets/encabezado/01_recorte.png';
import vector from '../../Assets/encabezado/deco_03.png';



const Encabezado = () => {
    return(

            <div className='encabezado'>
                <img src={bg1} alt="fondo1"/>
                <img src={manos} alt="fondo1" className='hands'/>
                <img src={vector} alt="fondo1" className='vector'/>
                <div className="container">
                <div className='title'>
                    <h1>Catalina & Jhonatan</h1>
                    <h2>20 • 12 • 2024</h2>
                </div>
                
                </div>
            </div>

    )
}

export default Encabezado
import '../encabezado/encabezado.css';
import fondo from '../../Assets/encabezado/fondo.png';



const Encabezado = () => {
    return(

            <div className='encabezado'>
                <img src={fondo} alt="imagen de fondo" className='fondo_img' />

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
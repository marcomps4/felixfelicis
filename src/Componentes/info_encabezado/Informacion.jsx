import '../info_encabezado/informacion.css';
import foto1 from '../../Assets/encabezado/foto1.jpg';

const Info = () =>{
    return(
        <section>
        <div className="container">
        <div className='info'>
        <div className="shape">
        <img src={foto1} alt="fondo1" className='foto1'/>
        </div>
        <div className="text">
            <p className='text1'>“Ponme como un sello sobre tu corazón, como una marca sobre tu brazo; Porque fuerte es como la muerte el amor”.</p>
            <p className='text2'>Cantares 8: 6-7</p>
        </div>
         </div>
         </div>
         </section>
    )

}

export default Info
import '../esperamos/teesperamos.css';
import separador from '../../Assets/separador.png';
import Kiss from '../../Assets/teesperamos/beso.jpg';
import rings from '../../Assets/teesperamos/rings.jpg';
import location from '../../Assets/location.png';
import reception from '../../Assets/teesperamos/reception.jpg';

const TeEsperamos = () =>{
    return(
       <section>
        <div className="container">
            <div className="esperamos">
                <div className="section-title">
                    <div className="title">
                    <h2>Te esperamos</h2>
                    </div>
                    <div className='separador'>
                    <img src={separador} alt="separador" />
                    </div>
                </div>
                <div className='container-info'>
                    <div className='date'>
                        <div className='info-date'>
                            <p className='font'>20</p>
                            <p className='font1'>dicimebre 2024</p>
                            <p>Tus risas, cariño y compañía harán que nuestra boda sea aún más memorable. Esperamos verte y compartir juntos esta hermosa ocasión.</p>
                        </div>
                        <div className='img-date'>
                            <img src={Kiss} alt="imgen de beso" />

                        </div>
                    </div>
                    <div className='ceremony'>
                        <div className='img-ceremony'>
                        <img src={rings} alt="imagen de anillos encima de una biblia" />
                        </div>
                        <div className='info_ceremony'>
                            <h4 className='font'>Ceremonia</h4>
                            
                            <p><span>17:00 <br/> Capilla San Felipe Neri</span><br/> Cra. 90 #149-7, Bogotá Dentro de la Fundación FUMDIR - Seminario EMAÚS de Suba</p>
                            <div className='icon'>
                                <img src={location} alt="icono de localización con forma de corazón" />
                                <h3>¿Cómo llegar?</h3>
                            </div>
                        </div>
                    </div>
                    <div className='reception'>
                        <div className='info-reception'>
                            <h4>Recepción</h4>
                            <p><span>19:00<br/>Hacienda Ana María Sierra</span> <br/> Cra. 90 # 159A-48, Casa 1 Suba, Bogotá</p>
                            <div className='icon'>
                                <img src={location} alt="icono de localización con forma de corazón"/>
                                <h3>¿Cómo llegar?</h3>
                            </div>
                        </div>
                        <div className='img-reception'>
                        <img src={reception} alt="Imagen de mesas en una recepción de boda"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </section>

    )
}

export default TeEsperamos
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../info_final/info.css';
import ninos from '../../Assets/info_final/ninos.jpg';
import parking from '../../Assets/info_final/estacionamiento.jpg';
import vestimenta from '../../Assets/info_final/vestimenta.jpg';

const InfoFinal = () =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bbagjll', 'template_99zblqf', form.current, 'VkGvt6sCClqcAHzX-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
        e.target.reset()
    }



    return(
        <section>
            <div className="container">
                <div className="more-info">
                    <div className="info-final">
                        <div className="section-title">
                            <h2>Para tener en cuenta</h2>
                        </div>
                        <div className="ninos">
                            <img src={ninos} alt="imagen de una niña en blanco y negro" />
                            <div className="info-ninos">
                            <p className='title'>Niños en la Recepción:</p>
                            <p className='parrafo'>Queremos que esta noche sea mágica y especial para todos, por eso te pedimos que nos acompañes sin niños. <br/> ¡Estamos emocionados por celebrar juntos este día tan importante!</p>
                            </div>
                            
                        </div>
                        <div className="estacionamiento">
                            <div className="info-estacionamiento">
                            <p className='title'>Estacionamiento:</p>
                            <p className='parrafo'>Los espacios de estacionamiento son limitados, tanto en la iglesia como en la recepción. Te recomendamos llegar temprano para asegurar tu lugar.</p>
                            </div>
                            <img src={parking} alt="imagen de un estacionamiento en blanco y negro" />
                            
                        </div>
                        <div className="recepcion">
                            <img src={vestimenta} alt="imagen de un hombre midiendose un traje en blanco y negro" />
                            <div className="info-recepcion">
                            <p className='title'>Código de Vestimenta:</p>
                            <p className='parrafo'>¡Nos encantaría verte luciendo elegante y a la altura de la ocasión! Queremos que te sientas fabuloso y que el ambiente sea perfecto para nuestro gran día, por ello el código de vestimenta es cóctel de noche, y te pedimos que evites usar colores verdes.</p>
                            </div>
                            
                        </div>
                        <div>
                            <p>Estamos muy emocionados de compartir este día contigo. ¡Gracias
                            por tu comprensión y por ser parte de nuestra boda!</p>
                        </div>
                    </div>
                    <div className="formulario">
                    <div className="section-title">
                            <h2>¿Nos Acompañas?</h2>
                    </div>
                    <div className="info-formulario">
                            <p className='parrafo1'>Para ayudarnos a planificar mejor nuestra boda y asegurarnos de que todo esté perfecto para ti, te agradeceríamos que confirmes tu asistencia completando el formulario a continuación. Así podremos organizar cada detalle con el cariño que este día merece.</p>
                            
                            <p>Por favor, indícanos si podrás acompañarnos y cualquier información adicional que consideres importante. ¡Tu presencia será el mejor regalo para nosotros!</p>
                            
                    </div>
                    <div className="form">
                    <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nombre Completo' required />
                    <input type="text" name='email' placeholder='Mi correo electrónico es...' required />
                    <input type="number" name="acompanantes" placeholder='Número de acompañantes' id="" />
                    <textarea name="message" rows="7" placeholder='Hola Cata y Jhonatan. Confirmo mi asistencia. Iré acompañado de [Nombre de tus Acompañantes] ¡Estoy muy emocionado/a por el gran día!' required></textarea>
                    <button type='submit' className='btn-primary'>Enviar</button>
                    </form>

                    </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default InfoFinal
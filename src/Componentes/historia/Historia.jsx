import '../historia/historia.css';
import separador from '../../Assets/separador.png';
import corazon from '../../Assets/historia/corazon.png';
import corazonmobile from '../../Assets/historia/corazon_mobile.png';

const Historia = () =>{
    return(
        <section>
            <div className="container">
                <div className="historia">
                <div className="section-title">
                    <div className='separador'>
                    <img src={separador} alt="separador" />
                    </div>
                    <div className="title">
                    <h2>Nuestra historia</h2>
                    </div> 
                </div>
                <div className="historia-info">
                    <div className="colmu1">
                        <div className="encuentro">
                        <h4 className='title'>El encuentro</h4>
                        <p>En 2017 nos conocimos en el cine, donde el destino hizo que nuestras vidas se cruzaran. 
                            Desde ese primer momento, supimos que algo especial estaba por comenzar.</p>
                        </div>
                        <div className="recuerdo">
                        <h4 className='title'>Un Recuerdo Especial</h4>
                        <p>Compartimos la experiencia de vivir juntos, lo que nos permitió ver el verdadero potencial de nuestra relación y fortaleció el vínculo que nos une.</p>
                        </div>
                    </div>
                    <img src={corazon} alt="imagen de un corazón" />
                    <div className="colmu2">
                        <div className="propuesta">
                        <h4 className='title'>La propuesta</h4>
                        <p>El 17 de diciembre de 2023, en Monserrate, decidimos dar el primer paso a juntar nuestras vidas y corazones por siempre. ¡Nos comprometimos!</p>
                        </div>
                        <div className="juntos">
                        <h4 className='title'>El futuro juntos</h4>
                        <p>Ahora, estamos emocionados de comenzar nuestra vida juntos como esposos y de celebrar este amor con todos ustedes, que han sido parte importante de nuestra historia.</p>
                        </div>
                    </div>
                    <img src={corazonmobile} alt="imagen de un corazón" className='corazon-mobile'/>
                </div>
                <div className='linea-vertical'></div>
                </div>

            </div>

        </section>
    )
}

export default Historia
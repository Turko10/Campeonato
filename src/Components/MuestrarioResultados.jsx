import Resultado from "./Resultado";
import { Button } from "bootstrap";


function MuestrarioResultados(props) {
    const partidos = props.partidos.map((partido) => <Resultado key={partido[0]} partido={partido} />);
    if (typeof props.partidos != 'undefined')
        return (
            <div id='carouselResultados' class='carousel carousel-dark slide' data-ride='carousel'>
                <div class='carousel-inner'>
                    {partidos}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselResultados" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselResultados" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        );
}

export default MuestrarioResultados;



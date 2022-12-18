import ReactDOM from "react-dom/client";
import axios from "axios";
import { useState, useEffect, React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaParticipantes from "./Components/ListaParticipantes";
import Partidos from "./Components/Partidos";

function App() {
    const URLparticipantes = 'https://jsonplaceholder.typicode.com/users'; //guardamos el link
    const [participantes, setParticipantes] = useState([]);
    useEffect(() => { //busca en la pagina web y lo convierte en json
        axios.get(URLparticipantes).then((json) => setParticipantes(json.data)).catch((err) => console.log(err));
    }, []);
    console.log(participantes)
    return (
        <>
            <div className="navbar navbar-expand navbar-dark bg-dark">
                <div className='container'>
                    <a class="navbar-brand">Campeonato 2022</a>
                </div>
            </div>
            <div className='container'>
                <div className='row'> {/*creamos una rejilla*/}
                    <div className='col-md-3'>  {/*tamaño del margen izquierdo de la columna*/}
                        <ListaParticipantes participantes={participantes} />
                    </div>
                    <div className='col'>
                        <Partidos participantes={participantes} />
                    </div>
                </div>
            </div>
        </>
    );
}   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





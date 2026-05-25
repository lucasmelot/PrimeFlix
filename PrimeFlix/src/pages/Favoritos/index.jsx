import { useEffect, useState } from "react"
import Styles from "./style.module.css"
import { Link } from "react-router-dom"

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhalista = localStorage.getItem("@filmes")

        setFilmes(JSON.parse(minhalista)) || []


    }, [])

    return(
        <div className={Styles.meusfilmes}>
            <h1>Meus filmes</h1>

            <ul>
                {filmes.map((filme, index) => {
                    return(
                        <li key={index}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`} >Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos
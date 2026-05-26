import { useEffect, useState } from "react"
import Styles from "./style.module.css"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhalista = localStorage.getItem("@filmes")

        setFilmes(JSON.parse(minhalista)) || []


    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme) => {
            return (filme.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@filmes", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso")
    }

    return(
        <div className={Styles.meusfilmes}>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span className={Styles.filmenotfound}>Nenhum filme encontrado</span>}

            <ul>
                {filmes.map((filme, index) => {
                    return(
                        <li key={index}>
                            <span className={Styles.title}>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`} >Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)} >Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos
import { useEffect, useState } from "react";
import api from "../../Services/api";
import Styles from "./style.module.css"
import { Link } from "react-router-dom";

// url: https://api.themoviedb.org/3/movie/now_playing?api_key=1dc669e0dde823abe4d93e513cf0608d&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: "1dc669e0dde823abe4d93e513cf0608d",
                    language: 'pt-BR',
                    page: 1,
                }
            })

            // console.log(response.data.results)
            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes()

    }, [])

    if(loading){
        return(
            <div className={Styles.loading}>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.listafilmes}>
                {filmes.filter((filme, index) => index !== 12 && index !== 19)
                .map((filme, index) => {
                    return(
                        <article key={index}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`} >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
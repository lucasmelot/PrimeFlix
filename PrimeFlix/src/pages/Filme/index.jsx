import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./style.module.css"

import api from "../../Services/api";

function Filme() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "1dc669e0dde823abe4d93e513cf0608d",
                    language: 'pt-BR',
                }
            })
                .then((r) => {
                    const dadosFilme = r.data;
                    if (dadosFilme.vote_average) {
                        dadosFilme.vote_average = Number(dadosFilme.vote_average).toFixed(2);
                    }

                    setFilme(r.data)
                    setLoading(false)
                })
                .catch(() => {
                    navigate("/", { replace: true })
                    return
                })
        }

        loadFilmes();

    }, [ navigate, id ])

    function SalvarFilme(){
        const minhaLista = localStorage.getItem("@filmes")

        let filmessalvos = JSON.parse(minhaLista) || []

        const temFilme = filmessalvos.some( (filmesalvo) => filmesalvo.id === filme.id)

        if(temFilme){
            alert("Esse filme já está na lista")
            return
        }
        
        filmessalvos.push(filme)
        localStorage.setItem("@filmes", JSON.stringify(filmessalvos))
        alert("Filme salvo com sucesso")

    }

    if (loading) {
        return (
            <div className={Styles.filmeinfo} >
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className={Styles.filmeinfo} >
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className={Styles.areabuttons}>
                <button onClick={SalvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`} >
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Filme;
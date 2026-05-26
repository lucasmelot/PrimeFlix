import { Link } from 'react-router-dom';
import Styles from './style.module.css'


function Erro(){
    const imgurl = "https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
    const erro404 = "< 404 />"


    return(
        <div className={Styles.notfound}>
            <img src={imgurl} alt="imagem-robo-404" />
            <h1>{erro404}</h1>
            <h2>Ops! Página não encontrada</h2>
            <Link to='/' className={Styles.link} >Veja nossos filmes</Link>
        </div>
    )
}

export default Erro;
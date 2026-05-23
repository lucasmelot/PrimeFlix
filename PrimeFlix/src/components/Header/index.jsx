import { Link } from 'react-router-dom';
import Styles from './style.module.css'

function Header(){
    return(
        <header className={Styles.header}>
            <Link to='/' className={Styles.logo} >Prime Flix</Link>
            <Link to='/favoritos' className={Styles.favoritos} >Meus filmes</Link>
        </header>
    )
}

export default Header;
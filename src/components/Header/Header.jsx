import { Link } from 'react-router'
import './Header.scss'
import picLogo from '../../assets/logo.png';


function Header() {
  return (
    <>

      <nav className="navbar">
        <img className="navbar__logo" src={picLogo} alt="Logo Kasa" />
        <div>
          <Link className="navbar__link navbar__link--underline" to="/">Accueil</Link>
          <Link className="navbar__link" to="/about">A Propos</Link>
        </div>
      </nav>

    </>
  )

}

export default Header
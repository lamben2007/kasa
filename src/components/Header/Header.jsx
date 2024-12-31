import { NavLink } from 'react-router-dom';
import picLogo from '../../assets/logo.png';
import './Header.scss'

/**
 * 
 * @returns 
 */
function Header() {

  //
  return (

    <nav className="navbar">
      <img className="navbar__logo" src={picLogo} alt="Logo Kasa" />

      <div className='navbar__btn'>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')}
          end
        >
          Accueil
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')}
          end
        >
          A Propos
        </NavLink>

      </div>

    </nav>

  )

}

export default Header
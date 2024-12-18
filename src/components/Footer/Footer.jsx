// import picLogo from '../../assets/logo.png';
import picLogo from '../../assets/logo.svg'
import './Footer.scss'


function Footer() {
  return (
    <>

      <div className="divFooter">
        <img className="divFooter__logo" src={picLogo} alt="Logo Kasa" />
        <span className="divFooter__copyright">© 2020 Kasa. All rights reserved</span>
      </div>

    </>
  )
}

export default Footer
import './Banner.scss'
import PropTypes from 'prop-types';

function Banner({ type }) {


  //
  return (

    <div className="divBanner">

      <div className="divBanner_overlay"></div>
      <div className="divBanner_content">

        {(type === "home" ? (<span>Chez vous, partout et ailleurs</span>) : (<></>))}

      </div>


      <img
        src={type === "home" ? "public/bannerHome.png" : "public/bannerAbout.webp"}
        alt={type === "home" ? "Accueil" : "A propos"}
        className="divBanner_image"
      />

    </div>

  )

}


Banner.propTypes = {
  type: PropTypes.string.isRequired
}

export default Banner
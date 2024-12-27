import './Banner.scss'
import PropTypes from 'prop-types';
import bannerHomeImg from '../../assets/bannerHome.png'
import bannerAboutImg from '../../assets/bannerAbout.webp'

function Banner({ page }) {


  //
  return (

    <div className="divBanner">

      <div className="divBanner_overlay"></div>
      <div className="divBanner_content">

        {(page === "home" ? (<span>Chez vous, partout et ailleurs</span>) : (<></>))}

      </div>


      <img
        src={page === "home" ? bannerHomeImg : bannerAboutImg}
        alt={page === "home" ? "Accueil" : "A propos"}
        className="divBanner_image"
      />

    </div>

  )

}


Banner.propTypes = {
  page: PropTypes.string.isRequired
}

export default Banner
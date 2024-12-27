import PropTypes from 'prop-types';
import starImg from '../../assets/star.png'
import grayStarImg from '../../assets/grayStar.png'
import './Rate.scss'

//
function Rate({ accommodationData }) {

    // Liste d'étoiles
    const stars = [];
    for (let i = 0; i < accommodationData.rating; i++) {
        stars.push(<img key={"s"+i} className="divRate_star" src={starImg} alt="*" />);
    }
    for (let i = 0; i < (5 - accommodationData.rating); i++) {
        stars.push(<img key={"gs"+i} className="divRate_star" src={grayStarImg} alt="." />);
    }

    //
    return (
        <div className='divRate'>
            {stars}
        </div>
    )
}

//
Rate.propTypes = {
    accommodationData: PropTypes.object.isRequired
}

export default Rate
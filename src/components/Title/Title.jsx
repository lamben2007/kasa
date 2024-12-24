import PropTypes from 'prop-types';
import './Title.scss'

//
function Title({ accommodationData }) {

    //
    return (
        <div className='divTitle' >

            <div className='divTitle_title'>
                {accommodationData.title}
            </div>

            <div className='divTitle_location'>
                {accommodationData.location}
            </div>

        </div>
    )
}

//
Title.propTypes = {
    accommodationData: PropTypes.object.isRequired
}

export default Title
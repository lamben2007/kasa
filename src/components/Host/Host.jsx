import PropTypes from 'prop-types';
import './Host.scss'

//
function Host({ accommodationData }) {

    //
    return (
        <div className='divHost' >

            <div className='divHost_name'> {accommodationData.host.name} </div>

            <div className="divHost_picture">
                <img src={accommodationData.host.picture} alt={accommodationData.host.name} />
            </div>

        </div>
    )
}

//
Host.propTypes = {
    accommodationData: PropTypes.object.isRequired
}

export default Host
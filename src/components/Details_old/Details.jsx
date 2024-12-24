// import PropTypes from 'prop-types';
import Collapse from "../../components/Collapse/Collapse"
import './Details.scss'

//
function Details() {

    //
    return (
        <>
            <div className='divDetails' >
                <Collapse title="Description" collapseText="text1" />
                <Collapse title="Equipements" collapseText="text2" />
            </div>
        </>
    )
}

// //
// Details.propTypes = {
//   type: PropTypes.string.isRequired
// }

export default Details
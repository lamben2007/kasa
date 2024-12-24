import PropTypes from 'prop-types';
import './Tags.scss'

//
function Tags({ accommodationData }) {

    //
    return (
        <div className='divTags' >
            {
                accommodationData.tags.map((tag) => {
                    return <span className='divTags_tag' key={tag}> {tag} </span>;
                })
            }
        </div>
    )
}

//
Tags.propTypes = {
    accommodationData: PropTypes.object.isRequired
}

export default Tags
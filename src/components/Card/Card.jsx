import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ id, imageUrl, title }) => {

    //
    function test(event, id) {
        event.preventDefault(); // Empêche la navigation par défaut du lien
        alert("clic ID: " + id);
    }

    //
    return (
        <a className="card">
            <img className="card__image" onClick={(event) => test(event, id)} src={imageUrl} alt={title} />
            <span className="card__title">{title}-{id}</span>
        </a>
    );
};

//
Card.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired, // URL de l'image
    title: PropTypes.string.isRequired,   // Titre de la carte
};

export default Card;

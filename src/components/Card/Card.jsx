import PropTypes from 'prop-types';
import './Card.scss';
import {  NavLink } from 'react-router-dom'

//
const Card = ({ id, cover, title }) => {

    //
    return (
        <article>
            <NavLink key={id} to={`/accommodation/${id}`} className="card">
                <img className="card__image" src={cover} alt={title} />
                <span className="card__title">{title}</span>
            </NavLink>
        </article>
    );

}

//
Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired, // URL de l'image
    title: PropTypes.string.isRequired,   // Titre de la carte
};

export default Card;



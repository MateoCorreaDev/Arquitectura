import PropTypes from 'prop-types';

export function CardUser({name, description, price}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <span>{price}</span>
        </div>
    )
}

CardUser.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

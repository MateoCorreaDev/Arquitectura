import PropTypes from 'prop-types';

export function CardUser({name, description, price}) {
    return (
        <div className='shadow-lg bg-white p-4 rounded'>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-gray-600'>{description}</p>
            <span className='text-gray-500'>{price}</span>
        </div>
    )
}

CardUser.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
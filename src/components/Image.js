import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = (props) => {
    const [count, setCount] = useState(0);

    return (
        <button className="image-container" onClick={() => setCount(count + 1)}>
            <img src={props.src} alt={props.alt} />
            <div className="counter">{count}</div>
        </button>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image;

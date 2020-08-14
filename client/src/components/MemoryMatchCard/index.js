import React from 'react';
import './MemoryMatchCard.scss';

export default function MemoryMatchCard(props) {

    const { id, url, title, flipped, matched, handleFlip } = props;

    return (
        <div className='card-wrapper'>
            <div className={`card ${flipped && matched ? 'is-flipped' : (flipped ? 'is-flipped' : '')}`} onClick={() => handleFlip(id)}>
                <div className='card-front' >
                    <img src={url} alt={title} />
                </div>
                <div className='card-back'>
                    <img src='https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-clip-art-png-14.png' alt="pokeball" />
                </div>
            </div>
        </div>
    )
}

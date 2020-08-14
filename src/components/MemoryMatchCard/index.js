import React from 'react';
import { animated as a } from 'react-spring';
import './MemoryMatchCard.scss';

export default function MemoryMatchCard(props) {

    const { id, url, title, flipped, matched, handleFlip, cardAnim } = props;

    return (
        <div className='card-wrapper'>
            <a.div className={`card ${flipped && matched ? 'is-flipped' : ''}`} onClick={() => handleFlip(id)} style={flipped && matched ? {} : ( flipped ? cardAnim : {}) }>
                <div className='card-front' >
                    <img src={url} alt={title} />
                </div>
                <div className='card-back'>
                    <img src='https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-clip-art-png-14.png' alt="pokeball" />
                </div>
            </a.div>
        </div>
    )
}

import React from 'react';
import { animated as a } from 'react-spring';
import './MemoryMatchCard.scss';

export default function MemoryMatchCard(props) {

    const { id, url, title, flipped, matched, handleFlip, cardAnim } = props;

    return (
        <a.div className='card' onClick={() => handleFlip(id)} style={flipped && matched ? {} : ( flipped ? cardAnim : {}) }>
            <img src={flipped ? url : 'https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-clip-art-png-14.png'} alt={title} />
        </a.div>
    )
}

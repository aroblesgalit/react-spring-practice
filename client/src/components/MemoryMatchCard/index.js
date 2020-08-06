import React from 'react';
import './MemoryMatchCard.scss';

export default function MemoryMatchCard({ id, url, title, flipped, handleFlip }) {
    return (
        <div className="card" onClick={() => handleFlip(id)}>
            <img src={flipped ? url : 'https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-clip-art-png-14.png'} alt={title} />
        </div>
    )
}

import React from 'react';
import './MemoryMatchCard.scss';

export default function MemoryMatchCard({ url, title }) {
    return (
        <div className="card">
            <img src={url} alt={title} />
        </div>
    )
}

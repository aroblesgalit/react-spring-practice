import React from 'react';
import MemoryMatchCards from '../components/MemoryMatchCards';
import './pages.scss';

export default function MemoryMatch() {
    return (
        <div className='container memory-match'>
            <h1>Card Memory Matching Game</h1>
            <MemoryMatchCards />
        </div>
    )
}

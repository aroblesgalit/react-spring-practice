import React from 'react';
import { Link } from 'react-router-dom';
import './pages.scss';

export default function Main() {
    return (
        <div className='container main'>
            <h1>React Spring Practice</h1>
            <Link to="/memory-match" className='items'>Card Flip Animation</Link>
        </div>
    )
}

import React from 'react';
import {Link} from 'gatsby';

const Navigation = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
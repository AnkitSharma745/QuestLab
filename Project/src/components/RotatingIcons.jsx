import React from 'react';
import './rotatingIcons.css';

import { faCoffee, faAppleAlt, faAnchor, faAndroid, faBug } from '@fortawesome/free-solid-svg-icons';

const RotatingIcons = () => {
    const icons = [faCoffee, faAppleAlt, faAnchor, faAndroid, faBug];

    return ( 
        <div className="icon-container">
            {icons.map((icon, index) => (
                <div key={index} className="icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
            ))}
        </div>
    );
};

export default RotatingIcons;

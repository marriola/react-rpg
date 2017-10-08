import React from 'react';
import './Viewport.css';

const Viewport = ({ children, ...props }) => (
    <div className="viewport">
        {children}
    </div>
);

export default Viewport;
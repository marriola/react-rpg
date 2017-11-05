import React from 'react';
import './Viewport.scss';

const Viewport = ({ children, ...props }) => (
    <div className="viewport">
        {children}
    </div>
);

export default Viewport;
import React from 'react';

const Title = ({ children }) => (
    <div className="row">
        <div className="twelve columns">
            <div className="section-header fadeInDown animated">
                <p className="line-one"></p>
                <h2>{children}</h2>
                <p className="line-one"></p>
            </div>
        </div>
    </div>
);

export default Title;

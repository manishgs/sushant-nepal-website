import React from 'react';
import { Helmet } from 'react-helmet';

const Page = ({ title, description, children }) => {
    return (
        <div className="page">
            <Helmet>
                <title>{title || ''}</title>
                <meta name="description" content={description || ''} />
            </Helmet>
            <div>
                {children || ''}
            </div>
        </div>
    );
};

export default Page;

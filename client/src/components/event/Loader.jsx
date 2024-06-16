// Loader.jsx
import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = ({ loading, color = "#1A7499", size = 50 }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mt-[-380px]">
                <HashLoader color={color} loading={loading} size={size} />
            </div>
        </div>
    );
};

export default Loader;

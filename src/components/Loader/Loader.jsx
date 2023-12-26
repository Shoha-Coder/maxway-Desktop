import React, { useState, useEffect } from 'react';
import TopLoadingBar from 'react-top-loading-bar';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((prevProgress) => prevProgress + 10);
            } else {
                clearInterval(timer);
            }
        }, );

        return () => {
            clearInterval(timer);
        };
    }, [progress]);

    return (
        <div>
            <TopLoadingBar
                progress={progress}
                color="#51267d"
                height={5}
            />
        </div>
    );
};

export default Loader
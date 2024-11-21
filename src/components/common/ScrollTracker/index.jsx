import React, { useState, useEffect } from 'react';

function ScrollPercentage() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.body.scrollHeight;
            const viewportHeight = window.innerHeight;
            const percentage = Math.min(
                (documentHeight - viewportHeight) !== 0
                    ? (scrollPosition / (documentHeight - viewportHeight)) * 100
                    : 0,
                100
            );
           
            setScrollPercentage(Math.round(percentage));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='fixed z-50 bottom-0 left-0'>
          
            <div style={{display: 'block', position: 'fixed', bottom: 0, left: 0, height: '10px', width: `${scrollPercentage}%`, backgroundColor: 'white'}}></div>
        </div>
    );
}

export default ScrollPercentage;
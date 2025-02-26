// pages/404.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(5);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prevCounter) => {
                const newCounter = prevCounter - 1;
                // Check if the counter reaches 0
                if (newCounter <= 0) {
                    clearInterval(timer); // Stop the interval timer
                    router.push('/'); // Perform the redirect
                }
                return newCounter;
            });
        }, 1000);
    
        // Cleanup function to clear the interval if the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, [router]);

    return (
        <div className='main flex col-flex'>
            <h1 id='not-found'>404 - Page Not Found</h1>
            <p>Redirecting to the homepage in {counter} seconds...</p>
        </div>
    );
};

export default Custom404;

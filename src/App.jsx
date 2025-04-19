import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from "./components/Experinece.jsx";
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
    const glowRef = useRef(null);

    useGSAP(() => {
        // Mouse-pointer-responsive global glow
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPercent = (clientX / innerWidth) * 100;
            const yPercent = (clientY / innerHeight) * 100;

            gsap.to(glowRef.current, {
                background: `radial-gradient(circle 300px at ${xPercent}% ${yPercent}%, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.3), transparent)`,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Reset glow on mouse leave
        const handleMouseLeave = () => {
            gsap.to(glowRef.current, {
                background: 'radial-gradient(circle 300px at 50% 50%, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.3), transparent)',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="relative">
            <div ref={glowRef} className="global-glow-overlay"></div>
            <Home>
                <Navbar />
            </Home>
            <Experience />
            <Footer />
        </div>
    );
}

export default App;
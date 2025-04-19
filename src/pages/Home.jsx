import React, { useRef, useEffect,useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/profile.jpg';

function Home({ children }) {
    const sectionRef = useRef(null);
    const items = [
        { text: 'Full Stack Developer', color: '#4285F4' },
        { text: 'Coder', color: '#DB4437' },
        { text: 'CS Grad', color: '#F4B400' },
        { text: 'NITian', color: '#0F9D58' },
        { text: 'App Developer', color: '#4285F4' },
        { text: 'Problem Solver', color: '#DB4437' },
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 4000); // 2s typing + 2s pause
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-20">{children}</div>

            <section
                id="home"
                ref={sectionRef}
                className="relative bg-gray-900 min-h-screen flex flex-col pt-[80px]"
            >
                {/* Background */}
                <div className="background-container">
                    <div className="background-layer"></div>
                </div>

                {/* Foreground Content */}
                <div className="relative flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Side: Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left animate__animated animate__fadeInLeft">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-balance font-bold text-white mb-3 gradient-glow">
                                Hello, I’m Bikkina Uday Sathyanarayana
                            </h1>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 mb-6">
                                I am a{' '}
                                <TypeAnimation
                                    key={index} // important to reset animation
                                    sequence={[
                                        items[index].text,
                                        2000,
                                        '', // triggers delete
                                        1000,
                                    ]}
                                    speed={50}
                                    deleteSpeed={50}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={0}
                                    className={`flashy-text ${items[index].className}`}
                                    style={{ color: items[index].color }}
                                />
                            </h3>
                            <p className="text-base sm:text-lg lg:text-lg text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
                                I'm a B.Tech graduate in Computer Science from NIT Silchar (CGPA: 9.39) with a passion for building scalable web and mobile applications. Experienced in full-stack development with React, Node.js, and GraphQL, I interned at Incut Digital Pvt Ltd, Hyderabad, solving complex problems with innovative solutions.
                            </p>
                            <a
                                href="https://drive.google.com/file/d/1uorm1clrQMcq7gUCQne8iLddsO9nymlj/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Right Side: Circular Image */}
                        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 animate__animated animate__fadeInRight">
                            <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                perspective={1000}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 pulse-border"
                            >
                                <img
                                    src={profileImage}
                                    alt="Bikkina Uday Sathyanarayana"
                                    className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </Tilt>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
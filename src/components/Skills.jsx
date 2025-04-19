import React, { useRef, useEffect } from 'react';
import { SkillsInfo } from '../constants';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Skills() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        // Animate title gradient
        gsap.to(titleRef.current, {
            backgroundPosition: '100% 0',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        });

        // Letter-by-letter animation
        const letters = titleRef.current.querySelectorAll('.letter');
        gsap.from(letters, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.5,
        });

        // Pulse scale animation
        gsap.to(titleRef.current, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, []);

    // Split title into letters
    useEffect(() => {
        const title = titleRef.current;
        const text = title.textContent;
        title.innerHTML = text
            .split('')
            .map((char) => `<span class="letter">${char}</span>`)
            .join('');
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="skills-section relative bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)]"
        >
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2
                        ref={titleRef}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text gradient-glow animate__animated animate__fadeInDown"
                    >
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
                    <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate__animated animate__fadeIn">
                        A collection of my technical skills and expertise honed through various projects and experiences
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {SkillsInfo.map((category) => (
                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            className="skill-card bg-gray-800 bg-opacity-80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg animate__animated animate__fadeInUp"
                        >
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center gradient-glow">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="skill-item flex items-center justify-center space-x-2 bg-gray-900 border border-gray-600 rounded-xl py-2 px-3"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className="skill-logo w-6 h-6 sm:w-8 sm:h-8"
                                        />
                                        <span className="text-xs sm:text-sm text-gray-200">
                      {skill.name}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
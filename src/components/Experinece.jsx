import React, { useRef, useEffect } from 'react';
import { experiences } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Experience() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);

    useGSAP(() => {
        // Animate title gradient
        gsap.to(titleRef.current, {
            backgroundPosition: '100% 0',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        });

        // Letter-by-letter animation for title
        const letters = titleRef.current.querySelectorAll('.letter');
        gsap.from(letters, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.5,
        });

        // Timeline line animation
        gsap.from(timelineRef.current, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        });

        // Experience cards and markers animation
        gsap.utils.toArray('.experience-card').forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                x: index % 2 === 0 ? 50 : -50,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
            });

            // Skills tags animation
            const tags = card.querySelectorAll('.skill-tag');
            gsap.from(tags, {
                scale: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
            });
        });

        gsap.utils.toArray('.timeline-marker').forEach((marker) => {
            gsap.from(marker, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: marker,
                    start: 'top 90%',
                },
            });
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
            id="experience"
            ref={sectionRef}
            className="experience-section relative bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-[80px] min-h-[calc(100vh-80px)]"
        >
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2
                        ref={titleRef}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text gradient-glow animate__animated animate__fadeInDown"
                    >
                        Experience
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
                    <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate__animated animate__fadeIn">
                        A collection of my work experience and the roles I have taken in various organizations
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div ref={timelineRef} className="timeline-line hidden md:block"></div>

                    {/* Experience Entries */}
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className={`flex flex-col md:flex-row items-center mb-16 ${
                                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                            }`}
                        >
                            {/* Timeline Marker */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 bg-gray-800 border-4 border-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center z-10 timeline-marker">
                                <img
                                    src={experience.img}
                                    alt={experience.company}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            {/* Experience Card */}
                            <div
                                className={`experience-card w-full md:max-w-md p-6 rounded-2xl border border-gray-700 bg-gray-800 bg-opacity-80 backdrop-blur-md ${
                                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                                } ml-16 md:ml-0 transform transition-transform duration-300`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-md overflow-hidden">
                                        <img
                                            src={experience.img}
                                            alt={experience.company}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white gradient-glow">
                                            {experience.role}
                                        </h3>
                                        <h4 className="text-sm text-gray-300">{experience.company}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-400 text-sm sm:text-base">{experience.desc}</p>
                                <div className="mt-4">
                                    <h5 className="font-medium text-white">Skills:</h5>
                                    <ul className="flex flex-wrap mt-2 gap-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="skill-tag bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-xs sm:text-sm rounded-lg"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
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
        // Letter-by-letter animation for title
        const letters = titleRef.current.querySelectorAll('.letter');
        gsap.from(letters, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        });

        // Timeline line animation (desktop only)
        gsap.from(timelineRef.current, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Experience cards and branches animation
        gsap.utils.toArray('.experience-card').forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Skills tags animation
            const tags = card.querySelectorAll('.skill-tag');
            gsap.fromTo(
                tags,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Branch animation (desktop only)
            const branch = card.parentElement.querySelector('.timeline-branch');
            if (branch) {
                gsap.fromTo(
                    branch,
                    { width: 0 },
                    {
                        width: 28,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
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
            className="experience-section relative bg-[var(--dark-secondary)] py-12 px-4 sm:px-6 lg:px-8 pt-[80px] min-h-[calc(100vh-80px)]"
        >
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2
                        ref={titleRef}
                        className="flashy-text text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] animate__animated animate__fadeInDown"
                    >
                        Experience
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[#9333ea] mx-auto mt-4"></div>
                    <p className="text-[var(--text-secondary)] mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate__animated animate__fadeIn slide-down">
                        A collection of my work experience and the roles I have taken in various organizations
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-[60rem] mx-auto">
                    {/* Timeline Line (Desktop Only) */}
                    <div ref={timelineRef} className="timeline-line hidden md:block"></div>

                    {/* Experience Entries */}
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className={`relative flex flex-col md:flex-row items-center mb-12 ${
                                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                            }`}
                        >
                            {/* Timeline Branch (Desktop Only) */}
                            <div
                                className={`timeline-branch hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                                    index % 2 === 0
                                        ? 'left-[calc(50%+2px)]'
                                        : 'right-[calc(50%+2px)]'
                                }`}
                            ></div>

                            {/* Experience Card */}
                            <div
                                className={`experience-card w-full max-w-full md:max-w-md p-6 rounded-2xl border border-[var(--text-secondary)] bg-[var(--dark-bg)] bg-opacity-80 backdrop-blur-md mx-auto md:mx-0 ${
                                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                                } transform transition-transform duration-300 slide-down`}
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
                                        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] gradient-glow">
                                            {experience.role}
                                        </h3>
                                        <h4 className="text-sm text-[var(--text-secondary)]">{experience.company}</h4>
                                        <p className="text-sm text-[var(--text-secondary)] mt-1">{experience.date}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-[var(--text-secondary)] text-sm sm:text-base">{experience.desc}</p>
                                <div className="mt-4">
                                    <h5 className="font-medium text-[var(--text-primary)]">Skills:</h5>
                                    <ul className="flex flex-wrap mt-2 gap-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="skill-tag bg-gradient-to-r from-[var(--accent-blue)] to-[#9333ea] text-[var(--text-primary)] px-3 py-1 text-xs sm:text-sm rounded-lg"
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
import React, { useState, useEffect } from 'react';
import './Nav.css';

const sections = [
    { id: 'me', label: 'About' },
    { id: 'activity', label: 'Activity' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'publications', label: 'Blog' },
    { id: 'portfolio', label: 'Gallery' },
];

function Nav() {
    const [activeSection, setActiveSection] = useState('me');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            const sectionEls = sections
                .map(s => document.getElementById(s.id))
                .filter(Boolean);

            const current = sectionEls.find(el => {
                const rect = el.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
            <div className="nav-inner">
                {sections.map(s => (
                    <button
                        key={s.id}
                        className={`nav-btn ${activeSection === s.id ? 'nav-btn--active' : ''}`}
                        onClick={() => scrollTo(s.id)}
                    >
                        {s.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Nav;

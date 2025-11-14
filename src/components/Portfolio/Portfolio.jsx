import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import projectsData from '../../public/content/projects.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cardImageIndices, setCardImageIndices] = useState({});

    useEffect(() => {
        setProjects(projectsData.projects);
        // Initialize card image indices
        const initialIndices = {};
        projectsData.projects.forEach(project => {
            initialIndices[project.id] = 0;
        });
        setCardImageIndices(initialIndices);
    }, []);

    const handleImageEnlargeClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(cardImageIndices[project.id] || 0);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
    }

    const handleNextImage = (e) => {
        e.stopPropagation();
        if (selectedProject && selectedProject.images.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    }

    const handlePrevImage = (e) => {
        e.stopPropagation();
        if (selectedProject && selectedProject.images.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    }

    const handleCardNextImage = (e, projectId, imagesLength) => {
        e.stopPropagation();
        setCardImageIndices(prev => ({
            ...prev,
            [projectId]: prev[projectId] === imagesLength - 1 ? 0 : prev[projectId] + 1
        }));
    }

    const handleCardPrevImage = (e, projectId, imagesLength) => {
        e.stopPropagation();
        setCardImageIndices(prev => ({
            ...prev,
            [projectId]: prev[projectId] === 0 ? imagesLength - 1 : prev[projectId] - 1
        }));
    }

    return (
        <div className="portfolio">
            <div className="portfolio-container">
                <h1 className="portfolio-title">Gallery</h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => handleImageEnlargeClick(project)}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.images[cardImageIndices[project.id] || 0]}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-overlay">
                                    <span className="expand-icon">
                                        <FontAwesomeIcon icon={faMaximize} />
                                    </span>
                                </div>

                                {/* Card navigation arrows */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            className="card-nav-btn card-nav-prev"
                                            onClick={(e) => handleCardPrevImage(e, project.id, project.images.length)}
                                        >
                                            {'‹'}
                                        </button>
                                        <button
                                            className="card-nav-btn card-nav-next"
                                            onClick={(e) => handleCardNextImage(e, project.id, project.images.length)}
                                        >
                                            {'›'}
                                        </button>
                                        <div className="image-counter">
                                            {(cardImageIndices[project.id] || 0) + 1} / {project.images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for enlarged image */}
                {isModalOpen && selectedProject && (
                    <div className="modal-overlay" onClick={handleModalClose}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={handleModalClose}>
                                ✕
                            </button>

                            <div className="modal-image-container">
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={selectedProject.title}
                                    className="modal-image"
                                    loading="lazy"
                                />

                                {/* Modal navigation arrows */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            className="modal-nav-btn modal-nav-prev"
                                            onClick={handlePrevImage}
                                        >
                                            {'‹'}
                                        </button>
                                        <button
                                            className="modal-nav-btn modal-nav-next"
                                            onClick={handleNextImage}
                                        >
                                            {'›'}
                                        </button>
                                        <div className="modal-image-counter">
                                            {currentImageIndex + 1} / {selectedProject.images.length}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="modal-info">
                                <h2>{selectedProject.title}</h2>
                                <p>{selectedProject.description}</p>
                                <div className="modal-tags">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className="modal-tag">{tag}</span>
                                    ))}
                                </div>
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
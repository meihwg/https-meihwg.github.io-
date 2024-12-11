import React from "react";
import "./project-card.css";

import { Icon } from '@iconify/react';

interface ProjectCardProps {
    title: string;
    images: string[];
    tags: string[];
    date: string;
    description: string;
    keywords: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, images, tags, date, description, keywords }) => {

    const [popup, setPopup] = React.useState(false);

    function togglePopup() {
        setPopup(!popup);
    }

    return (
        <>
            <div className="project-card">
                <div className="card">
                    <div className="card-image">
                        <img src={"/img/projects/" + images[0] + ".png" || images[0]} alt={title} />
                    </div>
                    <div className="card-info">
                        <h3>{title}</h3>
                        <div className="date">{date}</div>
                        <div className="tags">{tags.map((tag) => <span>{tag}</span>)}</div>
                        <div className="open-details" onClick={togglePopup}> Voir plus </div>
                    </div>
                </div>
            </div>
            {
                popup ?
                    <div className="popup-bg">
                        <div className="project-popup">
                            <div className="popup-header">
                                <div className="popup-space"></div>
                                <h4 className="card-title">{title}</h4>
                                <div className="popup-close" onClick={togglePopup}> <Icon icon="material-symbols:close" className="icon" /></div>
                            </div>
                            <div className="popup-body">
                                <img className="popup-img" src={"/img/projects/" + images[0] + ".png"} />
                                <div className="popup-text">
                                    <div className="popup-cont">
                                        <div className="tags">
                                            {tags.map((tag) => <span className="tag">{tag}</span>)}
                                        </div>
                                        <div className="date">{date}</div>
                                    </div>
                                    <div className="popup-desc">
                                        <p>
                                            <div dangerouslySetInnerHTML={{ __html: description }} />
                                        </p>
                                        <div className="popup-images">
                                            {images.map((image) => {
                                                // every image but the first
                                                if (image !== images[0]) {
                                                    return (
                                                        <img className="popup-img" src={"/img/projects/" + image + ".png"} />
                                                    );
                                                }
                                            })}
                                        </div>
                                        <div className="popup-keywords">
                                            {keywords.map((keyword) => {
                                                return (
                                                    <span className="popup-keyword">{keyword}</span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    );
};

export default ProjectCard;


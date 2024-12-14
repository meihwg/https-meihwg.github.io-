import React from "react";
import "./projects.css";

import ProjectCards from "../../cards/project-card/project-card";

// todo : plus de projets
// todo : pas sûre du menu

import { projects } from "./data.ts";

const Projects: React.FC = () => {

    const [activeCategory, setActiveCategory] = React.useState<string>("Tous");
    const [activeType, setActiveType] = React.useState<string>("Tous");

    const filteredProjects = projects.filter((project) => 
        activeCategory === "Tous" || project.tags.includes(activeCategory)
    ).filter((project) => 
        activeType === "Tous" || project.tags.includes(activeType)
    );

    return (
        <section id="projects">
            <h2>Projets</h2>
            <nav>
                <ul className="category">
                    {["Tous", "Universitaires", "Personnels", "Professionnels"].map((category) => (
                        <li
                            key={category}
                            className={activeCategory === category ? "active" : ""}
                            onClick={() => setActiveCategory(category)}
                        >
                            <span>{category}</span>
                            <div className="underline"></div>
                        </li>
                    ))}
                </ul>
                <ul className="type">
                    {["Tous", "Web", "Mobile", "Logiciel", "Jeu"].map((type) => (
                        <li
                            key={type}
                            className={activeType === type ? "active" : ""}
                            onClick={() => setActiveType(type)}
                        >
                            <span>{type}</span>
                            <div className="underline"></div>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="cards-container">
                {filteredProjects.length === 0 ? (
                    <p>Aucun projet ne correspond à votre recherche.</p>
                ) : (
                    filteredProjects.map((project, index) => 
                        <ProjectCards key={index} {...project} />
                    )
                )}
            </div>
        </section>

    );
};

export default Projects;
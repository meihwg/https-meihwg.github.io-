import React from "react";
import "./header.css";

// todo : faire le logo et le add
// todo : changer favicon

const Header: React.FC = () => {
    return (
        <header>
            <img src="" alt="logo" />
            <nav>
                <ul>
                    <li><a href="#about">A propos</a><div className="underline"></div></li>
                    <li><a href="#projects">Projets</a><div className="underline"></div></li>
                    <li><a href="#career">Parcours</a><div className="underline"></div></li>
                    <li><a href="#contact">Contact</a><div className="underline"></div></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
import React from "react";
import "./contact.css";

import { Icon } from '@iconify/react';

// todo : mettre une image

const Contact: React.FC = () => {
    return (
        <section id="contact"> 
            <div className="filter"></div>
            <div className="content">
                <div className="text">
                    <h2>Me contacter</h2>
                        <p> Vous pouvez me contacter via les moyens suivants : <br /> <br />
                            <Icon icon="material-symbols:mail" /> : belgrandlaureen.tg2@gmail.com <br />
                            <Icon icon="ic:sharp-phone" /> : 0768735193 <br />
                            <Icon icon="mdi:linkedin" /> : <a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer">Laureen Belgrand</a> <br />
                            <Icon icon="ant-design:github-filled" /> : <a href="https://www.github.com/meihwg" target="_blank" rel="noreferrer">meihwg</a>
                        </p>
                </div>
                <div className="image"></div>
            </div>
        </section>
    );
};

export default Contact;
import React from "react";
import "./about.css";

import { Icon } from '@iconify/react';

// todo : mettre une image

const About: React.FC = () => {
    return (
        <section id="about">
            <div className="filter"></div>
            <div className="content">
                <div className="left">
                    <div className="image"></div>
                    <div className="icons">
                        <a href="mailto:belgrandlaureen.tg2@gmail.com"><Icon icon="material-symbols:mail" className="icon" /></a>
                        <span title="0768735193"><Icon icon="ic:sharp-phone" className="icon" /></span>
                        <a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" className="icon" /></a>
                        <a href="https://github.com/meihwg" target="_blank" rel="noreferrer"><Icon icon="ant-design:github-filled" className="icon" /></a>
                    </div>
                </div>
                <div className="text">
                    <h2> <Icon icon="pepicons-print:flower" /> Laureen Belgrand</h2>
                    <p>Jeune développeuse de 21 ans, je travaille actuellement pour l'entreprise Eticeo chez laquelle j'interviens sur la création et la 
                        maintenance de plateformes de formations. Mon travail concerne principalement les langages PHP, JavaScript et MySQL, parfois via 
                        le framework Symphony et la librairie JQuery, et touche d'autres outils tels que Docker, [autres].
                        <br /> <br />
                        Je suis l'heureuse détentrice d'un BUT Informatique, parcours Réalisation d'Applications, un diplôme réalisé en 3 ans qui m'a permis 
                        de découvrir de nombreuses technologies dans toutes sortes de domaines (développement web, logiciel, mobile, gestion de base de données, 
                        etc.)  et qui m'a permis d'acquérir de précieuses compétences dans des domaines tels que la gestion de projet, le maquettage d'interfaces 
                        ergonomiques, le travail d'équipe, [autres]
                        <br /><br />
                        Je réalise aussi parfois d'autres projets de mon côté que vous pourrez découvrir dans la section "Projets". J'aime réaliser des choses 
                        visuellement attrayantes, réfléchir à des solutions à des problèmes, expérimenter en développant des choses amusantes, et c'est ce que 
                        j'essaie de faire au maximum dans mon travail et sur mon temps libre. Je ne prétends pas être la meilleure dans ces domaines mais je 
                        m'améliore tous les jours et je suis toujours prête à apprendre de nouvelles choses.
                        <br /><br />
                        En dehors de mon travail, je suis passionnée par l'art (notez le magnifique tableau en fond de cette section), j'aime manger, créer et 
                        jouer au jeu Genshin Impact. Je suis apparemment quelqu'un de très drôle et sympathique, si j'en crois les rumeurs.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
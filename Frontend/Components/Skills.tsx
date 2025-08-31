import styles from './Styles/Skills.module.css';
import ProjectsRail, { ProjectItem } from "./ProjectRail";

import CSS from './../Images/CSS.png';
import HTML from './../Images/HTML.png';
import JS from './../Images/JS.png';
import React from './../Images/React.png';
import TS from './../Images/TS.png';
import Python from './../Images/Python.png';
import FCA_image from './../Images/FCA_image.png';
import MYWAY_image from './../Images/MYWAY_image.png';

const projects: ProjectItem[] = [
    {
        name: "Financial Control App",
        link: "https://finantial-control-app.vercel.app/",
        image: FCA_image,
        tools: [React, TS, Python, CSS],
    },
    {
        name: "MyWay App",
        link: "https://myway-app.vercel.app/",
        image: MYWAY_image,
        tools: [React, TS, JS, CSS],
    }
];

export default function Skills() {
    return (
        <section className={styles.Skills}>
            <div className={styles.Tools}>
                <img src={HTML} width={56} height={56} alt="HTML" />
                <img src={CSS} width={56} height={56} alt="CSS" />
                <img src={JS} width={56} height={56} alt="JavaScript" />
                <img src={React} width={56} height={56} alt="React" />
                <img src={Python} width={56} height={56} alt="Python" />
                <img src={TS} width={56} height={56} alt="TypeScript" />
            </div>
            <ProjectsRail
                title="Proyectos"
                projects={projects}
                autoOnMobileMs={1500}
            />
        </section>
    );
}

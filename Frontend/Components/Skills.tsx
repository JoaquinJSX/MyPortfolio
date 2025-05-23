import Card from "./ProjectCard";
import CSS from './../Images/CSS.png';
import HTML from './../Images/HTML.png';
import JS from './../Images/JS.png';
import React_png from './../Images/React.png';
import TS from './../Images/TS.png';
import Python from './../Images/Python.png';
import FCA_image from './../Images/FCA_image.png';
import styles from './Styles/Skills.module.css';


export default function Skills() {

    const images = [HTML, CSS, JS, React_png, Python, TS];

    const Projects = [
        {
            name: "Finantial Control App",
            image: FCA_image,
            tools: [React_png, TS, Python, CSS],
            link: "https://finantial-control-app.vercel.app/"
        }
    ]

    return (
        <div className={styles.Skills}>
            <section className={styles.Tools}>
                <h2>Herramientas</h2>
                {/*Lenguajes y programas que sé usar*/}
                <div className={styles.logoContainer}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="language" width={50} height={50} />
                    ))}
                </div>
            </section>
            <section className={styles.Projects}>
                <h2>Proyectos</h2>
                {/*Usar map() para mostrar cada projecto en una carta*/}
                {Projects.map((project, index) => (
                    <Card
                        key={index}
                        name={project.name}
                        image={project.image}
                        tools={project.tools}
                        link={project.link}
                    />
                ))}
            </section>
        </div>
    );
}
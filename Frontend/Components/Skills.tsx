import Card from "./ProjectCard";
import CSS from './../../dist/assets/CSS-BmHoKlFT.png';
import HTML from './../Images/HTML.png';
import JS from './../Images/JS.png';
import React_png from './../../dist/assets/React-CrPTLroW.png';
import TS from './../../dist/assets/TS-CFxE178t.png';
import Node from './../Images/Node.png';
import Python from './../../dist/assets/Python-B4CTgkwg.png';
import FCA_image from './../../dist/assets/FCA_image-eob5HqkB.png';
import styles from './Styles/Skills.module.css';


export default function Skills() {

    const images = [HTML, CSS, JS, React_png, Python, TS, Node];

    const Projects = [
        {
            name: "Finantial Control App",
            image: FCA_image,
            tools: [React_png, TS, Python, CSS],
            link: "https://fca-frontend.vercel.app/"
        }
    ]

    return (
        <div className={styles.Skills}>
            <section>
                <h2>Herramientas</h2>
                {/*Lenguajes y programas que sé usar*/}
                <div>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="language" width={50} height={50} />
                    ))}
                </div>
            </section>
            <section>
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
import styles from './Styles/ProjectCard.module.css';
import Enlace from './../Images/Enlace.png';

interface Props {
    name: string;
    image: string;
    tools: string[];
    link: string
}

export default function Card({ name, image, tools, link }: Props) {

    return (
        <div className={styles.ProjectCard}>
            <h3>
                {/*Nombre del projecto*/}
                <p>{name}</p>
                <img className={styles.Enlace} src={Enlace} alt="Enlace image" onClick={() => window.open(link)} />
            </h3>
            <div className={styles.projectImageContainer}>
                {/*Imagen del proyecto*/}
                <img src={image} alt="ProjectImage" height={150} width={275} />
            </div>
            <section className={styles.projectTools}>
                {/*Logo de cada herramienta usada en el proyecto*/}
                {tools.map((tool, index) => (
                    <img key={index} src={tool} alt="tool" width={50} height={50} />
                ))}
            </section>
        </div>
    );
}
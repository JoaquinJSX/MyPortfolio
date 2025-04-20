import styles from './Styles/ProjectCard.module.css';

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
                {name}
            </h3>
            <img src={image} alt="ProjectImage" height={150} width={275}/> {/*Imagen del proyecto*/}
            <button onClick={() => window.open(link)}>Ver</button> {/*Opción para ver el proyecto*/}
            <section>
                {/*Logo de cada herramienta usada en el proyecto*/}
                {tools.map((tool, index) => (
                    <img key={index} src={tool} alt="tool" width={50} height={50} />
                ))}
            </section>
        </div>
    );
}
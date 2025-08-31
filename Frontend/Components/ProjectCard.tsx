import styles from "./Styles/ProjectCard.module.css";

interface Props {
  name: string;
  image: string;
  tools: string[];
  link: string;
  imageWebp?: string;
  imageAvif?: string;
}

export default function ProjectCard({ name, image, tools, link, imageWebp, imageAvif }: Props) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <a
          className={styles.external}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${name} en una nueva pestaña`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.externalIcon}>
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
            <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z"></path>
          </svg>
        </a>
      </header>

      <div className={styles.media}>
        <picture>
          {imageAvif && <source type="image/avif" srcSet={imageAvif} />}
          {imageWebp && <source type="image/webp" srcSet={imageWebp} />}
          <img
            className={styles.screenshot}
            src={image}
            alt={`Captura de ${name}`}
            loading="lazy"
            decoding="async"
            width={640}
            height={360}
          />
        </picture>
      </div>

      <footer className={styles.tools} aria-label="Tecnologías utilizadas">
        {tools?.map((tool, i) => (
          <img key={i} className={styles.tool} src={tool} width={36} height={36} alt="" loading="lazy" decoding="async" />
        ))}
      </footer>
    </article>
  );
}

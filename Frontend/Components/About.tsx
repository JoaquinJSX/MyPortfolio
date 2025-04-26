import Me from './../Images/Me.jpeg';
import GitHub from './../Images/GitHub.png';
import Gmail from './../Images/Gmail.png';
import LinkedIn from './../Images/Linkedin.png';
import WSP from './../Images/WSP.png';
import styles from './Styles/About.module.css';


export default function About() {

    const socialMedia = [
        {
            name: "GitHub",
            image: GitHub,
            link: "https://github.com/JoaquinJSX"
        }, 
        {
            name: "Gmail",
            image: Gmail,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=joaquinpalaciosgomez04@gmail.com"
        },
        {
            name: "LinkedIn",
            image: LinkedIn,
            link: "https://www.linkedin.com/in/joaquin-palacios-530a45334"
        },
        {
            name: "WhatsApp",
            image: WSP,
            link: "tel:+51918625203"
        }
    ];

    return (
        <div className={styles.About}>
            <header className={styles.Header}>
                {/*Foto y ocupación*/}
                <img height={125} src={Me} alt="" />
                <h3>Joaquin Palacios Gomez</h3>
                <hr />
                <h3>Desarrollador de software</h3>
            </header>
            <section className={styles.Description}>
                {/*Pequeña descripción sobre mí*/}
                <p> 
                    Me apasiona crear aplicaciones web interactivas y atractivas. 
                    Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
                </p>
            </section>
            <nav className={styles.SocialMedia}>
                {/*Redes sociales o formas de contactarme*/}
                {socialMedia.map((i, index) => 
                <img key={index} src={i.image} alt={i.name} onClick={() => window.open(i.link)}/>)}
            </nav>
        </div>
    );
}
import styles from './Styles/NavBar.module.css';

interface Props {
    path: string;
    setPath: (path: string) => void;
}

export default function NavBar({ path, setPath }: Props) {

    function changePath(newPath: string) {
        if (newPath !== path) {
            setPath(newPath);
        }
    }

    return (
        <nav className={styles.NavBar}>
            {/*Barra de navegación (cambiar de about a Skills - Projects)*/}
            <button className={path === 'about' ? styles.activeBtn : ''}
                onClick={() => changePath('about')}
            >
                Sobre mí
            </button>
            <button className={path === 'skills' ? styles.activeBtn : ''}
                onClick={() => changePath('skills')}
            >
                Mis habilidades
            </button>
        </nav>
    );
}
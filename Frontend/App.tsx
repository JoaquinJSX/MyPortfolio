import { useEffect, useState } from "react";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import styles from './App.module.css';

export default function App() {

  const [path, setPath] = useState<string>('about');

  useEffect(() => {
    let lastScrollY: number = window.scrollY;

    function handleScroll() {
      if (window.scrollY < lastScrollY) {
        setPath('about');
      } else if (window.scrollY > lastScrollY) {
        setPath('skills');
      }
      lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={styles.App}>
      <NavBar path={path} setPath={setPath} />
      <section className={styles.MainComponent}>
        {path === 'about' ?
          <About />
          :
          <Skills />}
      </section>
    </div>
  );
}
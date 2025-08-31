import { useEffect, useMemo, useRef, useState } from "react";
import styles from './Styles/Skills.module.css';
import ProjectCard from "./ProjectCard";

export interface ProjectItem {
  name: string;
  link: string;
  image: string;
  imageWebp?: string;
  imageAvif?: string;
  tools: string[];
}

interface Props {
  title?: string;
  projects: ProjectItem[];
  autoOnMobileMs?: number; // default 1500
}

export default function ProjectsRail({ title = "Proyectos", projects, autoOnMobileMs = 1500 }: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 720px)").matches;
  }, []);

  // === Util: calcula el paso real = ancho de un slide + gap ===
  const computeStep = () => {
    const el = railRef.current;
    if (!el) return 0;
    const first = el.querySelector<HTMLElement>(`.${styles.Slide}`);
    if (!first) return 0;
    const slideW = first.getBoundingClientRect().width;
    const cs = getComputedStyle(el);
    // gap puede venir como "24px 24px" o "24px"
    const gapToken = (cs.gap || cs.columnGap || "0px").toString().split(" ")[0];
    const gap = parseFloat(gapToken) || 0;
    return slideW + gap;
  };

  // === Rueda -> scroll horizontal (con un pelín de Y para la sensación diagonal) ===
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const left = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      if (Math.abs(left) > 0) {
        e.preventDefault();
        el.scrollBy({ left, top: e.deltaY * 0.15, behavior: "auto" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // === Auto-slide solo en móvil, respetando reduced-motion y pausas por interacción ===
  useEffect(() => {
    if (!isMobile || typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || isUserInteracting) return;

    const el = railRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      const step = computeStep();
      if (!step) return;

      // ¿ya estamos al final? -> vuelve al inicio
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      if (nearEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      el.scrollTo({ left: el.scrollLeft + step, behavior: "smooth" });
    }, autoOnMobileMs);

    return () => window.clearInterval(id);
  }, [isMobile, autoOnMobileMs, isUserInteracting]);

  // Pausar auto-slide mientras el usuario interactúa
  useEffect(() => {
    if (!isMobile) return;
    const el = railRef.current;
    if (!el) return;

    const onPointerDown = () => setIsUserInteracting(true);
    const onPointerUp = () => setIsUserInteracting(false);
    const onTouchStart = () => setIsUserInteracting(true);
    const onTouchEnd = () => setIsUserInteracting(false);
    const onMouseEnter = () => setIsUserInteracting(true);
    const onMouseLeave = () => setIsUserInteracting(false);

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isMobile]);

  // Recalcular pasos cuando cambie el tamaño
  useEffect(() => {
    const onResize = () => {
      // fuerza el cálculo diferido para que el siguiente tick use el nuevo step
      computeStep();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className={styles.Projects}>
      <h2>{title}</h2>

      <div ref={railRef} className={styles.ProjectsRail} aria-label="Lista de proyectos" role="region">
        {projects.map((p, i) => (
          <div className={styles.Slide} key={i}>
            <ProjectCard
              name={p.name}
              link={p.link}
              image={p.image}
              imageWebp={p.imageWebp}
              imageAvif={p.imageAvif}
              tools={p.tools}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

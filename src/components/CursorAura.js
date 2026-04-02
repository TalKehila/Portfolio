import { useEffect, useRef } from "react";
import "./CursorAura.css";

export const CursorAura = () => {
  const auraRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse || !auraRef.current || !dotRef.current) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let rafId;

    const move = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.body.classList.add("cursor-visible");
    };

    const onLeave = () => {
      document.body.classList.remove("cursor-visible");
      document.body.classList.remove("cursor-hover");
    };

    const onOver = (event) => {
      const interactive = event.target.closest(
        "a, button, input, textarea, select, .nav-link, .proj-imgbx, .contact-icon-link, [role='button']"
      );
      if (interactive) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    const animate = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;

      auraRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOver);
    window.addEventListener("mouseleave", onLeave);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOver);
      window.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("cursor-visible");
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  return (
    <div className="cursor-aura-layer" aria-hidden="true">
      <div ref={auraRef} className="cursor-aura"></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </div>
  );
};

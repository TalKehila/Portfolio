import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { createPortal } from "react-dom";

export const ProjectCard = ({ title, description, imgUrl, bullets }) => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  const closePopup = () => setOpen(false);

  const openPopup = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpen(true);
  };

  useEffect(() => {
    if (open && popupRef.current) {
      popupRef.current.scrollTop = 0;
      document.body.style.overflow = "hidden";
      document.body.classList.add("project-modal-open");
    }

    if (!open) {
      document.body.style.overflow = "";
      document.body.classList.remove("project-modal-open");
    }
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("project-modal-open");
    };
  }, []);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={openPopup} style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="proj-hint">Click for details</span>
        </div>
      </div>

      {open &&
        createPortal(
          <div
            className="proj-popup-overlay"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closePopup();
              }
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closePopup();
              }
            }}
          >
            <div ref={popupRef} className="proj-popup" onClick={(e) => e.stopPropagation()}>
              <button className="proj-popup-close" onClick={closePopup}>✕</button>
              <h4>{title}</h4>
              {bullets?.length ? (
                <ul className="proj-popup-list">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>,
          document.body
        )}
    </Col>
  );
}

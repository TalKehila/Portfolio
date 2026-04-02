import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, bullets }) => {
  const [open, setOpen] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="proj-hint">Click for details</span>
        </div>
      </div>

      {open && (
        <div className="proj-popup-overlay" onClick={() => setOpen(false)}>
          <div className="proj-popup" onClick={(e) => e.stopPropagation()}>
            <button className="proj-popup-close" onClick={() => setOpen(false)}>✕</button>
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
        </div>
      )}
    </Col>
  );
}

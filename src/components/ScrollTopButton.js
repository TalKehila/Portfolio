import { FaArrowUp } from "react-icons/fa";
import "./ScrollTopButton.css";

export const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="scroll-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

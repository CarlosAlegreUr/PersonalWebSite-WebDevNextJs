import { useState, useEffect } from "react";

export default function BackToTopButton(): JSX.Element {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setDisplay(true);
      else setDisplay(false);
    });
  }, []);
  return (
    <>
      {display && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed-bottom-button"
        >
          {" "}
          GO BACK TO THE TOP{" "}
        </button>
      )}
    </>
  );
}

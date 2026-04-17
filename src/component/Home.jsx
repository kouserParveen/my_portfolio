import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImg from '../img/hero-img.jpg';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Delay initialization to avoid Strict Mode issues
    const timeout = setTimeout(() => {
      if (typedRef.current) {
        const typed = new Typed(typedRef.current, {
          strings: ["React", "Developer", "agular", ""],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>I am Koser parveen</h2>
      <span
        ref={typedRef}
        style={{ fontSize: "36px", fontWeight: "bold", display: "block" }}
      ></span>
    </section>





    
  );
}

export default Home;

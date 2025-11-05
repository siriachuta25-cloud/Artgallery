import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const styles = {
    navbar: {
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      width: "100%",
      position: "fixed",
      top: 0,
      zIndex: 100,
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    icon: {
      background: "linear-gradient(135deg, #6a5acd, #ff69b4)",
      color: "white",
      fontWeight: "bold",
      width: "38px",
      height: "38px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      fontSize: "1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    },
    title: {
      fontSize: "1.3rem",
      color: "#333",
      fontWeight: 600,
    },
    links: {
      display: "flex",
      gap: "32px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: "none",
      color: "#444",
      fontWeight: 500,
      position: "relative",
      transition: "color 0.3s ease",
    },
  };

  const linkHover = (e, hover) => {
    if (hover) {
      e.target.style.color = "#6a5acd";
      e.target.style.borderBottom = "2px solid #6a5acd";
      e.target.style.paddingBottom = "3px";
    } else {
      e.target.style.color = "#444";
      e.target.style.borderBottom = "none";
      e.target.style.paddingBottom = "0";
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logo}>
          <div style={styles.icon}>AG</div>
          <h1 style={styles.title}>ArtVault</h1>
        </div>

        {/* Navigation Links */}
        <ul style={styles.links}>
          {[
            ["Home", "/"],
            ["Gallery", "/gallery"],
            ["About", "/about"],
            ["Sign In", "/signin"], // 👈 Added Sign In link
          ].map(([text, path]) => (
            <li key={text}>
              <Link
                to={path}
                style={styles.link}
                onMouseEnter={(e) => linkHover(e, true)}
                onMouseLeave={(e) => linkHover(e, false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

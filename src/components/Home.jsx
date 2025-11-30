import React from "react";

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
     <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to The ArtVault</h1>
        <p style={styles.subtitle}>
          Discover timeless wall paintings and soulful art pieces from talented artists worldwide.
        </p>
      
      </section>

    {/* Footer Section */}
<footer style={styles.footer}>
  <div style={styles.footerContent}>
    <h3 style={styles.footerTitle}>The ArtVault</h3>
    <p style={styles.footerText}>
      Inspiring creativity and celebrating artistic expression since 2025.
    </p>

    <div style={styles.socials}>
      <a href="#" style={styles.icon}>🎨</a>
      <a href="#" style={styles.icon}>💖</a>
      <a href="#" style={styles.icon}>📸</a>
      <a href="#" style={styles.icon}>🌍</a>
    </div>

    <p style={styles.copy}>© 2025 The ArtVault. All Rights Reserved.</p>
  </div>
</footer>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    padding: 0,
    fontFamily: "Poppins, sans-serif",
    color: "#333",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/src/assets/image13.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "1545px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hero: {
    textAlign: "center",
    padding: "150px 20px 100px",
    color: "#fff",
    flexGrow: 1,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "inline-block",
    padding: "40px 30px",
    borderRadius: "12px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    textShadow: "0 3px 8px rgba(0,0,0,0.6)",
  },
  subtitle: {
    fontSize: "1.3rem",
    maxWidth: "700px",
    margin: "0 auto 2rem",
    textShadow: "0 2px 5px rgba(0,0,0,0.4)",
  },
  btn: {
    padding: "12px 25px",
    background: "#ff7043",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  footer: {
    background: "rgba(0,0,0,0.8)",
    color: "#bbb",
    textAlign: "center",
    padding: "20px 0",
    fontSize: "0.9rem",
  },
};

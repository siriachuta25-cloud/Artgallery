import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.title}>About The ArtVault</h1>
        <p style={styles.subtitle}>
          Where creativity meets emotion — a haven for art lovers and dreamers alike.
        </p>
      </section>

      {/* Main Content */}
      <section style={styles.content}>
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Our Story</h2>
          <p style={styles.text}>
            Founded with a passion for artistic expression, <b>The ArtVault</b> brings together
            timeless wall paintings, abstract visions, and modern masterpieces from artists around
            the globe. Each painting tells a story — a whisper of the soul captured in colors and
            textures.
          </p>
        </div>

        <div style={styles.textSection}>
          <h2 style={styles.heading}>Our Vision</h2>
          <p style={styles.text}>
            We believe art has the power to transform spaces and emotions. Our mission is to make
            art accessible, meaningful, and deeply personal — helping every visitor discover pieces
            that resonate with their heart and home.
          </p>
        </div>

        <div style={styles.textSection}>
          <h2 style={styles.heading}>Meet the Artists</h2>
          <p style={styles.text}>
            Our collection features both emerging and established artists whose works embody
            creativity, passion, and purpose. Each brushstroke is a journey — and The ArtVault is
            where those journeys find a home.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section style={styles.quoteSection}>
        <blockquote style={styles.quote}>
          “Every artist dips his brush in his own soul, and paints his own nature into his pictures.”
        </blockquote>
        <p style={styles.author}>— Henry Ward Beecher</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 The ArtVault. Crafted with ❤️ for art and imagination.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    color: "#333",
   
    minHeight: "100vh",
    padding: "0",
    margin: "0",
  },
  header: {
    textAlign: "center",
    padding: "100px 20px 60px",
    background:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/src/assets/image13.png') center/cover no-repeat",
    color: "#fff",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    textShadow: "0 4px 10px rgba(0,0,0,0.6)",
  },
  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto",
    textShadow: "0 3px 6px rgba(0,0,0,0.4)",
  },
  content: {
    padding: "80px 12%",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
  },
  textSection: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(250,245,255,0.9))", // ✨ new modern soft gradient
    borderRadius: "18px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    padding: "45px 35px",
    border: "1px solid rgba(220, 220, 255, 0.5)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#8e24aa",
    marginBottom: "1rem",
    fontWeight: "600",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#444",
  },
  quoteSection: {
    textAlign: "center",
    padding: "80px 15%",
    background:
      "linear-gradient(120deg, rgba(240, 220, 255, 0.95), rgba(255, 235, 245, 0.95))",
  },
  quote: {
    fontSize: "1.6rem",
    fontStyle: "italic",
    color: "#4a148c",
    marginBottom: "1rem",
  },
  author: {
    fontSize: "1rem",
    color: "#880e4f",
  },
  footer: {
    background: "linear-gradient(90deg, #3a0ca3, #7209b7, #b5179e)",
    color: "#fff",
    textAlign: "center",
    padding: "25px 0",
    marginTop: "40px",
    fontSize: "0.95rem",
    letterSpacing: "0.5px",
  },
};

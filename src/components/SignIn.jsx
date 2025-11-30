import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome Back to The ArtVault</h1>
          <p style={styles.subtitle}>Sign in to continue exploring creativity</p>

          {!success ? (
            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />

              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                required
              />

              <button type="submit" style={styles.button}>
                Sign In
              </button>
            </form>
          ) : (
            <div style={styles.successBox}>
              <h3 style={styles.successText}>🎨 Sign-in Successful!</h3>
              <p style={styles.redirectText}>Redirecting to Home...</p>
            </div>
          )}

          <div style={styles.quoteBox}>
            <p>“Art speaks where words are unable to explain.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    fontFamily: "Poppins, sans-serif",
    padding: "0",
    margin: "0",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  card: {
    background: "rgba(255, 255, 255, 0.97)",
    padding: "50px 40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    width: "400px",
    textAlign: "center",
  },

  title: {
    fontSize: "1.8rem",
    color: "#1b1b1b",
    marginBottom: "10px",
    fontWeight: "600",
  },

  subtitle: {
    color: "#555",
    fontSize: "1rem",
    marginBottom: "30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  label: {
    textAlign: "left",
    fontWeight: "500",
    color: "#333",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
  },

  button: {
    marginTop: "15px",
    padding: "12px",
    background: "linear-gradient(90deg, #f9a825, #ff7043)",
    border: "none",
    color: "#fff",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
  },

  successBox: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "10px",
    background: "linear-gradient(120deg, #81c784, #66bb6a)",
    color: "white",
  },

  successText: {
    fontSize: "1.3rem",
    marginBottom: "5px",
  },

  redirectText: {
    fontSize: "0.95rem",
  },

  quoteBox: {
    marginTop: "25px",
    fontStyle: "italic",
    color: "#666",
  },
};

import React from "react";
import { useNavigate } from "react-router-dom";
import image2 from "../assets/image2.png"; // Pichwai painting image

export default function Pichwai() {
  const navigate = useNavigate();

  const painting = {
    name: "Pichwai Painting - Udaipur",
    intro: "Pichwai Paintings originated from Udaipur, Rajasthan. These paintings depict tales of Lord Krishna, especially Shrinathji, using vibrant colors and intricate designs. Often painted on cloth, Pichwai art showcases traditional Indian motifs and devotional themes.",
    details: [
      "Preserves traditional Indian art techniques.",
      "Popular among collectors worldwide.",
      "Cost varies depending on size and intricacy.",
      "Typically ranges from ₹7,000 to ₹60,000."
    ],
    cost: "₹7,000 - ₹60,000",
    contact: {
      phone: "+91-9876543210",
      email: "udaipurartisans@example.com"
    }
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "1200px",
    height: "auto",
    display: "block",
    margin: "0 auto"
  };

  const contentStyle = {
    width: "90%",
    maxWidth: "1600px",
    margin: "40px auto",
    padding: "40px",
    background: "linear-gradient(145deg, #fff 0%, #f1f1f1 100%)",
    color: "#333",
    borderRadius: "15px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
    fontFamily: "'Georgia', serif",
    transition: "all 0.3s ease"
  };

  const paragraphStyle = {
    marginBottom: "25px",
    lineHeight: "1.9",
    fontSize: "1.15rem",
    textAlign: "justify",
    textJustify: "inter-word"
  };

  const listItemStyle = {
    marginBottom: "15px",
    lineHeight: "1.7",
    fontSize: "1.05rem",
    paddingLeft: "10px",
    position: "relative",
    listStyleType: "disc"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2.2rem",
    borderBottom: "3px solid #ccc",
    paddingBottom: "12px",
    fontWeight: "bold",
    color: "#222"
  };

  const backBtnStyle = {
    display: "block",
    margin: "35px auto 0",
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "0.3s",
  };

  return (
    <div>
      {/* Full-width painting image */}
      <img src={image2} alt={painting.name} style={imageStyle} />

      {/* Content section */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>{painting.name}</h1>
        <p style={paragraphStyle}>{painting.intro}</p>
        <ul>
          {painting.details.map((line, index) => (
            <li key={index} style={listItemStyle}>{line}</li>
          ))}
        </ul>
        <p><strong>Estimated Cost:</strong> {painting.cost}</p>
        <p><strong>Contact:</strong> Phone: {painting.contact.phone}, Email: {painting.contact.email}</p>

        {/* Back to Gallery button */}
        <button
          style={backBtnStyle}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0056b3"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#007bff"}
          onClick={() => navigate("/gallery")}
        >
          ← Back to Gallery
        </button>
      </div>
    </div>
  );
}

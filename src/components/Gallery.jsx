import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";

export default function Gallery() {
  const navigate = useNavigate();

  const styles = {
    page: {
      paddingTop: "90px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#fafafa",
      minHeight: "100vh",
      textAlign: "center",
    },
    subtitle: {
      color: "#666",
      marginBottom: "40px",
      fontSize: "1rem",
    },
    galleryGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "0 40px 60px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      width: "250px",
    },
    image: { width: "100%", height: "200px", objectFit: "cover" },
    caption: { padding: "12px", color: "#444", fontWeight: 500 },
  };

  const artworks = [
    { id: 1, img: image1, title: "Rajasthani Miniature Painting - Jaipur", path: "/rajasthani" },
    { id: 2, img: image2, title: "Pichwai Painting - Udaipur", path: "/Pichwai"  },
    { id: 3, img: image3, title: "Kalighat Pat Art - Kolkata", path:"/Kalighat" },
    { id: 4, img: image4, title: "Tanjore Gold Leaf Painting - Tamil Nadu", path:"/Tanjore" },
    { id: 5, img: image5, title: "Deccan Kalam Painting - Hyderabad", path:"/DeccanKalam" },
    { id: 6, img: image6, title: "Mysore Traditional Painting - Mysuru",path:"/MysorePainting"},
    { id: 7, img: image7, title: "Gond Tribal Art - Madhya Pradesh",path:"/Gond" },
    { id: 8, img: image8, title: "Kerala Mural Painting - Kerala",path:"/KeralaMural" },
    { id: 9, img: image9, title: "Warli Tribal Painting - Maharashtra",path:"/WarliPainting" },
    { id: 10, img: image10, title: "Rogan Art - Kutch, Gujarat",path:"/RoganArt" },
  ];

  return (
    <div style={styles.page}>
      <p style={styles.subtitle}>
        Explore traditional and cultural paintings from different regions of India.
      </p>

      <div style={styles.galleryGrid}>
        {artworks.map((art) => (
          <div
            key={art.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
            onClick={() => {
              if (art.path) {
                navigate(art.path); // Navigate to Rajasthani.jsx page
              } else {
                alert("Details not available for this painting yet!");
              }
            }}
          >
            <img src={art.img} alt={art.title} style={styles.image} />
            <div style={styles.caption}>{art.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

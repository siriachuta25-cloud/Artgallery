import React, { useState } from "react";
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
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState(null);

  const styles = {
    page: {
      paddingTop: "90px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#fafafa",
      minHeight: "100vh",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "20px",
    },
    subtitle: {
      color: "#666",
      marginBottom: "40px",
      fontSize: "1rem",
    },
    galleryGrid: {
      display: "flex", // ✅ use flexbox
      flexWrap: "wrap", // ✅ allows wrapping to next line
      justifyContent: "center", // ✅ centers horizontally
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
      width: "250px", // ✅ fixed width so items stay aligned
    },
    image: {
      width: "500px",
      height: "200px",
      objectFit: "cover",
    },
    caption: {
      padding: "12px",
      color: "#444",
      fontWeight: 500,
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      width: "90%",
      maxWidth: "500px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
      overflow: "hidden",
      animation: "fadeIn 0.3s ease",
    },
    modalImg: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
    modalContent: {
      padding: "20px",
      textAlign: "left",
    },
    modalTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#222",
    },
    modalDesc: {
      color: "#555",
      marginBottom: "10px",
      lineHeight: "1.5",
    },
    modalDate: {
      fontSize: "0.9rem",
      color: "#777",
      marginBottom: "10px",
    },
    closeBtn: {
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      borderRadius: "5px",
      cursor: "pointer",
      float: "right",
    },
  };

  const artworks = [
    {
      id: 1,
      img: image1,
      title: "Whispers of the Wild - by Eleanor Hayes",
      desc: "A dreamy depiction of the Alaskan twilight sky, filled with vibrant purples and soft golden hues. It captures the harmony between nature and solitude.",
      date: "February 10, 2020",
    },
    {
      id: 2,
      img: image2,
      title: "Harmony of Peaks - by Thomas Bergen",
      desc: "A breathtaking depiction of mountain landscapes bathed in golden light, symbolizing strength and eternity.",
      date: "June 3, 2021",
    },
    {
      id: 3,
      img: image3,
      title: "Verdant Calm - by Sophia Westwood",
      desc: "Soft rolling hills in muted tones evoke peace and timeless beauty in this serene landscape painting.",
      date: "August 14, 2022",
    },
     {
      id: 4,
      img: image4,
      title: "Ethereal Duet - by Gabriel Martinez",
      desc: "Flight at Dusk can refer to several things, including the beautiful imagery of birds or airplanes in a twilight sky, as seen in artwork, photography, or stock photos. It can also refer to the practicalities of night flying, which presents unique challenges and considerations for pilots compared to daytime flying.",
      date: "August 14, 2022",
    },
    {
      id: 5,
      img: image5,
      title: "Frozen Echo - by Isabella Frost",
      desc: "Storm's Embrace can refer to several things, including a romance novel about a doctor and his assistant, an electro-Celtic music album by Rainfall Peace, various art pieces like paintings and prints, and a passive skill named Valako, Storm's Embrace in the video game Path of Exile. The most common meaning depends on the context in which it is used. ",
      date: "August 14, 2022",
    },
        {
      id: 6,
      img: image6,
      title: "Forest of Dreams - by Lucas Andersson",
      desc: "Mirror of Tranquility most commonly refers to a 2024 album by Wulder Reverie in the Vocal/Easy Listening genre, but the phrase can also describe a decorative wall mirror, a piece of art, a photography project, or a luxury retreat. The specific meaning depends on the context. ",
      date: "August 14, 2022",
    },
      {
      id: 7,
      img: image7,
      title: "Golden Hour Reverie - by Amara Thompson",
      desc: "Golden hour reverie can refer to a song title, such as by Aurelune Keys from the album Silent Lights, or an atmospheric concept related to the golden hour of photography, which is the time around sunrise and sunset. The phrase is also used to describe an art piece and can refer to music genres like lo-fi hip hope." ,
      date: "February 28, 2024",
    },
      {
      id: 8,
      img: image8,
      title: "Alpine Grandeur - by Henrik Olsen",
      desc: "Alpine Grandeur can refer to a song, an event destination, or artistic works inspired by the beauty of the Alps, such as a painting or wallpapers. It is a phrase used to describe the majestic and awe-inspiring scenery of mountain ranges, and can also be the name of specific vacation rentals or services. ",
      date: "June 3, 2023",
    },
      {
      id: 9,
      img: image9,
      title: "Meadow Dreams - by Charlotte Dubois",
      desc: "Meadow Dreams can refer to a dream symbol, a book title, a piece of music, or even a brand name. As a dream symbol, it often represents peace, personal growth, and fulfillment. It is also the title of a book, an album track, and a nail polish color. ",
    },
    {
      id: 10,
      img: image10,
      title: "Coastal Sanctuary - by James Morrison",
      desc: "coastal sanctuary painting can refer to a specific artwork with that title or more generally to any painting that depicts a serene protected coastal scene These paintings can be purchased as original art prints or paint-by-number kits and often feature seascapes beach houses or idyllic natural settings. ",
      date: "August 20, 2023",
    },
    {
      id: 11,
      img: image11,
      title: "Ethereal Convergence - by Marina Rodriguez",
      desc: "Ethereal Convergence describes the coming together of non-physical or abstract elements, such as digital technology and physical reality, or different dimensions and forms of energy. It is a conceptual term often used in art, literature, and technology to evoke a sense of a mystical, dreamlike, or otherworldly union. ",
      date: "August 20, 2023",
    },
    {
      id: 12,
      img: image12,
      title: "Digital Dreamscapeby - Sofia Nakamura",
      desc:  "Breaking free of the ordinary the Digital Dreamscape reimagines an environment through the careful and visionary selection of materials, colours, and furnishings: ethereal atmospheres, dynamic use of light, and surprising details are used as tools in projects that celebrate creativity and escape.",
      date: "September 30, 2024",
    },
  ];

  return (
    <div style={styles.page}>
      <p style={styles.subtitle}>
        Explore stunning wall paintings and abstract masterpieces from artists worldwide.
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
            onClick={() => setSelectedArt(art)}
          >
            <img src={art.img} alt={art.title} style={styles.image} />
            <div style={styles.caption}>{art.title}</div>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div style={styles.modalOverlay} onClick={() => setSelectedArt(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={selectedArt.img} alt={selectedArt.title} style={styles.modalImg} />
            <div style={styles.modalContent}>
              <button
                style={styles.closeBtn}
                onClick={() => setSelectedArt(null)}
              >
                ✕ Close
              </button>
              <h2 style={styles.modalTitle}>{selectedArt.title}</h2>
              <p style={styles.modalDesc}>{selectedArt.desc}</p>
              <p style={styles.modalDate}>🗓 {selectedArt.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

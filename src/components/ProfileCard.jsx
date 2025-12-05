import Button from "./Button";

export default function ProfileCard({ avatar, nome, bio }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      <img src={avatar} alt={nome} style={imgStyle} />
      <h2>{nome}</h2>
      <p>{bio}</p>
      <Button title="Seguir" color="#007bff" />
      <Button title="Mensagem" color="#28a745" />
    </div>
  );
}

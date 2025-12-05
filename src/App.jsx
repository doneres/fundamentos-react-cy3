import ProfileCard from "./components/ProfileCard";

export default function App() {
  const containerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <ProfileCard
        nome="Ana Silva"
        bio="Desenvolvedora Front-end apaixonada por React."
        avatar="https://i.pravatar.cc/150"
      />

      <ProfileCard
        nome="Carlos Souza"
        bio="Engenheiro de Software e fã de UI/UX."
        avatar="https://i.pravatar.cc/150"
      />

      <ProfileCard
        nome="Beatriz Costa"
        bio="Tech Lead e Mentora de Carreira."
        avatar="https://i.pravatar.cc/150"
      />
    </div>
  );
}

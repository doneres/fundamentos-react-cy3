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
      <h1 className="text-3xl font-bold underline text-red-500">Hello World</h1>

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

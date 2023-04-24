import Container from "./components/Container";

import "./App.css";
import useRepository from "./hooks/useRepository";

function App() {
  const context = useRepository();

  return (
    <section>
      <h1>Nome do usuário: {context.name}</h1>
      <Container />
    </section>
  );
}

export default App;

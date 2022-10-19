import styled, { createGlobalStyle } from "styled-components";
import FormularioCadastro from "./componentes/FormularioCadastro/FormularioCadastro";
import { Header } from "./componentes/Header";
import TelaDaPostagem from "./componentes/TelaDaPostage/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [urlFoto, setUrlFoto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            urlFoto={urlFoto}
            setUrlFoto={setUrlFoto}
            descricao={descricao}
            setDescricao={setDescricao}
            titulo={titulo}
            setTitulo={setTitulo}
          />
        </aside>
        <TelaDaPostagem 
        urlFoto={urlFoto}
        descricao={descricao}
        titulo={titulo}
        />
      </Container>
    </>
  );
}

export default App;
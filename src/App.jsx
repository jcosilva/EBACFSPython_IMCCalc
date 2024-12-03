import { useState, useEffect } from 'react'

import Cabecalho from "./components/01_Cabecalho/cabecalho.jsx";
import Formulario from "./components/02_Formulario/formulario.jsx";
import Resultado from "./components/03_Resultado/resultado.jsx";
import Rodape from "./components/04_Rodape/rodape.jsx";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  const calcularImc = (novoPeso, novaAltura) => {
    setPeso(novoPeso);
    setAltura(novaAltura);
    if (novoPeso > 0 && novaAltura > 0) {
        setImc(novoPeso / (novaAltura * novaAltura));
    } else {
        setImc(0);
    }
  };

  return (
    <>
      <Cabecalho />
      <Formulario calcularImc={calcularImc} />
      <Resultado peso={peso} altura={altura} imc={imc} />
      <Rodape />
    </>
  )

}

export default App
import { useState, useEffect } from 'react';

import styles from './formulario.module.css'

const Formulario = ({ calcularImc }) => {
    const [pesoInput, setPesoInput] = useState(0);
    const [alturaInput, setAlturaInput] = useState(0);

    const alteraPeso = (evento) => {
        const novoPeso = Number(evento.target.value);
        setPesoInput(novoPeso);
        calcularImc(novoPeso, alturaInput);
    };

    const alteraAltura = (evento) => {
        const novaAltura = Number(evento.target.value);
        setAlturaInput(novaAltura);
        calcularImc(pesoInput, novaAltura);
    };

    return (
        <article className={`container ${styles.containerFormulario}`}>
            <form>
                <p>Digite o seu peso em metros e peso em kilogramas para saber qual é o seu IMC (*)</p>
                <div>
                    <ul className={`${styles.formularioList}`}>
                        <li className={`${styles.formularioItem}`}>
                            <b>Peso:</b> 
                            <input type='number' placeholder='Peso em kg' value={pesoInput} onChange={alteraPeso} required />
                        </li>
                        <li className={`${styles.formularioItem}`}>
                            <b>Altura:</b> 
                            <input type='number' placeholder='Altura em m' value={alturaInput} onChange={alteraAltura} required />
                        </li>
                    </ul>
                </div>
                <p><b>(*) IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. O calculo é realizado por peso (em kilogramas) dividido pelo quadrado da altura (em metros).</b></p>
            </form>
        </article>
    )
}

export default Formulario;
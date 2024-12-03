import { useState, useEffect } from 'react';

import styles from './resultado.module.css'

const imcDataTemplate = [
    { index: "imc1", range: "00.00 <= IMC < 17.00", description: "Muito Abaixo do Peso", min: 0, max: 17, status: "" },
    { index: "imc2", range: "17.00 <= IMC < 18.50", description: "Abaixo do Peso", min: 17, max: 18.5, status: "" },
    { index: "imc3", range: "18.50 <= IMC < 25.00", description: "Peso Normal", min: 18.5, max: 25, status: "" },
    { index: "imc4", range: "25.00 <= IMC < 30.00", description: "Acima do Peso", min: 25, max: 30, status: "" },
    { index: "imc5", range: "30.00 <= IMC < 35.00", description: "Obesidade I", min: 30, max: 35, status: "" },
    { index: "imc6", range: "35.00 <= IMC < 40.00", description: "Obesidade II", min: 35, max: 40, status: "" },
    { index: "imc7", range: "IMC >= 40.00", description: "Obesidade III", min: 40, max: Infinity, status: "" }
];

const Resultado = ({ peso, altura, imc }) => {
    const [imcData, setImcData] = useState(imcDataTemplate);

    useEffect(() => {
        const updatedData = imcDataTemplate.map((item) => ({
            ...item,
            status: imc >= item.min && imc < item.max ? "Você está aqui" : "",
        }));
        setImcData(updatedData);
    }, [imc]);

    return (
        <article className={`container ${styles.containerResultado}`}>
            <div className={`${styles.resultadoTexto}`}>
                <p>Considerando <b>Peso = {peso.toFixed(2)}kg</b> e <b>Altura = {altura.toFixed(2)}m</b>, temos <b>IMC = {imc.toFixed(2)}</b></p>
                <p>Veja abaixo a faixa que você se encontra no momento:</p>
            </div>
            <div>
                <table className={`${styles.resultadoTabela}`}>
                    <thead>
                        <tr>
                            <td className={`${styles.tabelaHeader}`}>Range</td>
                            <td className={`${styles.tabelaHeader}`}>Descrição</td>
                            <td className={`${styles.tabelaHeader}`}>Seu Resultado</td>
                        </tr>
                    </thead>
                    <tbody>
                        {imcData.map((item) => (
                            <tr key={item.index} className={item.status ? styles.linhaAtiva : styles.linhaInativa}>
                                <td className={`${styles.tabelaCorpo}`}>{item.range}</td>
                                <td className={`${styles.tabelaCorpo}`}>{item.description}</td>
                                <td className={`${styles.tabelaCorpo}`}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </article>
    )
}

export default Resultado;
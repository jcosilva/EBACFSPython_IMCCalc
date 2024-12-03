import styles from './cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className={`${styles.containerHeader}`}>
            <h1>Calculadora IMC</h1>
        </header>
    )
}

export default Cabecalho;
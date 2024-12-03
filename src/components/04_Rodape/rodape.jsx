import { useState, useEffect } from 'react';

import styles from './rodape.module.css';

const Rodape = () => {
    return (
        <footer>
            <div className={`container ${styles.containerFooter}`}>
                <p><b>Curso EBAC Full Stack 2024 - Desenvolvido por Julio Silva</b></p>
                <p>Desenvolvido em ReactJS para fins educacionais</p>
            </div>
        </footer>
    )
}

export default Rodape;
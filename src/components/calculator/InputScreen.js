import React from 'react'

import styles from './InputScreen.module.css'

const InputScreen = ({ operationText, resultText }) => {

    return (
        <div id={styles.screen}>
            <div className={styles.title}>
                <span>Calculator</span>
                <span className={"material-symbols-rounded " + styles.titleIcon}>
                    more_vert
                </span>
            </div>
            <span id={styles.inputOperation}>{operationText}</span>
            <span id={styles.inputResult}>{resultText}</span>
        </div>
    )
}

export default InputScreen

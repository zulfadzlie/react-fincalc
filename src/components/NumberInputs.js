import styles from './CSS/NumberInputs.module.css'


function NumberInputs(props) {
    return (
        <>
            <form className={styles.form}>
                {props.data.mode === "PMT" ? 
                    <></> 
                : 
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} for="inputPMT">PMT</label>
                        <input
                            className={styles.input}
                            id="inputPMT"
                            type="number"
                            name="inputPMT"
                            value={props.data.inputPMT}
                            onChange={props.handleChange}
                            placeholder="First periodic payment"
                        />
                    </div>
                }

                <div className={styles.inputWrapper}>
                    <label className={styles.label} for="inputRATE">RATE</label>
                    <input
                        className={styles.input}
                        id="inputRATE"
                        type="number"
                        name="inputRATE"
                        value={props.data.inputRATE}
                        onChange={props.handleChange}
                        placeholder="Discount rate (%)"
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <label className={styles.label} for="inputGROW">GROW</label>
                    <input
                        className={styles.input}
                        id="inputGROW"
                        type="number"
                        name="inputGROW"
                        value={props.data.inputGROW}
                        onChange={props.handleChange}
                        placeholder="Payment growth rate (%)"
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <label className={styles.label} for="inputNPER">NPER</label>
                    <input
                        className={styles.input}
                        id="inputNPER"
                        type="number"
                        name="inputNPER"
                        value={props.data.inputNPER}
                        onChange={props.handleChange}
                        placeholder="Number of payments"
                    />
                </div>
                
                {props.data.mode === "PV" ? 
                    <></> 
                : 
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} for="inputPV">PV</label>
                        <input
                            className={styles.input}
                            id="inputPV"
                            type="number"
                            name="inputPV"
                            value={props.data.inputPV}
                            onChange={props.handleChange}
                            placeholder="Present Value"
                        />
                    </div>
                }

                {props.data.mode === "FV" ? 
                    <></> 
                : 
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} for="inputFV">FV</label>
                        <input
                            className={styles.input}
                            id="inputFV"
                            type="number"
                            name="inputFV"
                            value={props.data.inputFV}
                            onChange={props.handleChange}
                            placeholder="Last payment minus periodic payment"
                        />
                    </div>
                }
            </form>
        </>
    )
}

export default NumberInputs
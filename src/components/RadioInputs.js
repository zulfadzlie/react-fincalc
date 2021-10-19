import styles from './CSS/RadioInputs.module.css'

function RadioInputs(props) {
    return (
        <>
            <form className={styles.form}>
                <input
                    id="radioPMT"
                    type="radio"
                    name="mode"
                    value="PMT"
                    checked={props.data.mode === "PMT"}
                    onChange={props.handleChange}
                />
                <label className={styles.label} for="radioPMT">PMT</label>

                <input
                    id="radioPV"
                    type="radio"
                    name="mode"
                    value="PV"
                    checked={props.data.mode === "PV"}
                    onChange={props.handleChange}
                />
                <label className={styles.label} for="radioPV">PV</label>

                <input
                    id="radioFV"
                    type="radio"
                    name="mode"
                    value="FV"
                    checked={props.data.mode === "FV"}
                    onChange={props.handleChange}
                />
                <label className={styles.label} for="radioFV">FV</label>
            </form>
        </>
    )
}

export default RadioInputs
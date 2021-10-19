import styles from './CSS/RadioInputs.module.css'

function RadioInputs2(props) {
    return (
        <>
            <form className={styles.form}>
                <input
                    id="radioBegin"
                    type="radio"
                    name="mode2"
                    value="BEGIN"
                    checked={props.data.mode2 === "BEGIN"}
                    onChange={props.handleChange}
                />
                <label className={styles.label} for="radioBEGIN">BEGIN</label>

                <input
                    id="radioEnd"
                    type="radio"
                    name="mode2"
                    value="END"
                    checked={props.data.mode2 === "END"}
                    onChange={props.handleChange}
                />
                <label className={styles.label} for="radioEND">END</label>
            </form>
        </>
    )
}

export default RadioInputs2
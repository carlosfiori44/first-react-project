import styles from './InputFatec.module.css'

interface Props{
    type: string
    value: string
    placeholder: string
}

function InputFatec({type, value, placeholder}: Props){
    return(
        <input className={styles.inputFatec} type={type} defaultValue={value} placeholder={placeholder} />
    )

}

export default InputFatec
import classes from './FormInput.module.css'

const FormInput = (props) => {
    return <div className={`${classes.form__input} ${props.className}`}>
        <label className={classes.form__input__label}>{props.label}</label>
        {props.inputType==='textArea' ?
        <textarea 
            type={props.type??'text'} 
            className={classes.form__input__input} 
            ref={props.inputRef} 
            onChange={props.onChange} 
            placeholder={props.placeholder}/>
        : <input 
            type={props.type??'text'} 
            className={classes.form__input__input} 
            ref={props.inputRef} 
            onChange={props.onChange} 
            value={props.value}
            placeholder={props.placeholder}
            onFocus={props.onFocus}
            onBlur={props.onBlur}/>
        }
        {!props.valid && <p style={{color:'red'}}>Cannot be empty</p>}   
    </div>
}

export default FormInput;
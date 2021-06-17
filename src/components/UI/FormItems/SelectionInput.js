import { useState } from 'react';
import classes from './SelectionInput.module.css';

const SelectionInput = (props) => {
    console.log(props.initialValue);
    const [state, setState] = useState(props.initialValue??props.options.enabled);

    const selectionChanged = (event) => {
        setState(event.target.value); 
        if(props.onSelectionChange)
        props.onSelectionChange(event.target.value,event.target.value===props.options.enabled);
    }

    return <div className={classes.selection__input}>
        <header className={classes.selection__input__header}>
            {props.label}
        </header>
        <select className={classes.selection__input__select} onChange={selectionChanged}>
            <option value={props.options.enabled} key={props.options.enabled} >{props.options.enabled}</option>
            <option value={props.options.disabled} key={props.options.disabled}>{props.options.disabled}</option>
        </select>
        <input 
            type='text' 
            className={classes.selection__input__input}
            onChange={(event)=>props.onInputChange(event.target.value)}
            value={state===props.options.enabled?props.inputValue:''}
            style={{pointerEvents:state === props.options.disabled && 'none', backgroundColor:state === props.options.disabled && '#b7b7b7'}}
            >

        </input>

    </div>
}

export default SelectionInput;
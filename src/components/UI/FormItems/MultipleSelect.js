import { useEffect, useState } from 'react';
import FormInput from './FormInput';
import classes from './MultipleSelect.module.css';


const MultipleSelect = (props) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [additional, setAdditional] = useState('');

    const selectedHandler = (value) => {
        if(selectedValues.includes(value)){
            setSelectedValues(state=>{
                return [...(state.filter(item=> item!==value))]
            })
        }else{
            setSelectedValues(state=>{
                return [value, ...state]
            })
        }


        

        //props.onSelectionChange(selectedValues);    //Here
    }

    useEffect(()=>{
        props.onSelectionChange({
            values:selectedValues,
            additional:additional
        })
    },[selectedValues, additional]);

    const alternateChangeHandler = (event) => {
        setAdditional(event.target.value);
    }

    return <div className={classes.multiple__select}>
        <header className={classes.multiple__select__header}>
            {props.label}
        </header>
        <div className={classes.items}>
            {props.items.map(item=>{
                return <button className={`${classes.item__button} ${selectedValues.includes(item) && classes.selected}`} onClick={()=>selectedHandler(item)}>
                    {item}
                </button>
            })}
            <div className={classes.alternate}>
                <FormInput label={props.alternateLabel} onChange={alternateChangeHandler} valid={true}/>
            </div>
        </div>
    </div>
}

export default MultipleSelect;
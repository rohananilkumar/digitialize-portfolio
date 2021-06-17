import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../hooks/use-http';
import { portfolioActions } from '../../store';
import FormInput from '../UI/FormItems/FormInput';
import HightlightedButton from '../UI/FormItems/HighlightedButton';
import classes from './WorkWithUsForm.module.css';

const WorkWithUsForm = (props) => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const emailRef = useRef();
    const dataRef = useRef();

    const workWithUsRedux = useSelector(state=>state.workWithUs);

    const http = useHttp('workWithUs',{method:'POST'});

    const sendClickHandler = (event) => {
        if(nameRef.current.value.trim().length === 0 || dataRef.current.value.trim().length === 0) return alert('Input cannot be empty')
        if(!emailRef.current.value.includes('@') || !emailRef.current.value.includes('.')) return alert('Invalid Email');


        dispatch(portfolioActions.workWithUs({
            name: nameRef.current.value,
            email:emailRef.current.value,
            data:dataRef.current.value
        }));

        nameRef.current.value = '';
        emailRef.current.value = '';
        dataRef.current.value = '';

        alert("Your message has been sent. We'll get back soon :)")
    };

    useEffect(()=>{
        if(workWithUsRedux){
            if(localStorage.getItem('workWithUs')) return alert('One message at a time');
            http.fetchData(workWithUsRedux);
        }
    },[workWithUsRedux])


    const submitHandler = (event) => {
        event.preventDefault();
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <FormInput valid={true} label='Name' id='name' className={classes.name} inputRef={nameRef}/>
        <FormInput valid={true} label='Email' id='email' type='email' key='email' className={classes.email} inputRef={emailRef}/>
        <FormInput valid={true} label='How’d you like to work with us?' className={classes.data} id='data' key='data' inputRef={dataRef} inputType='textArea'/>
        <HightlightedButton className={classes.btn} onClick={sendClickHandler}> 
            Send
        </HightlightedButton>
    </form>
}

export default WorkWithUsForm;
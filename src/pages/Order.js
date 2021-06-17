import PortfolioDisplay from '../components/Order/PortflioDisplay';
import classes from './Order.module.css';
import FormInput from '../components/UI/FormItems/FormInput';
import CardSteps from '../components/UI/CardSteps';
import SelectionInput from '../components/UI/FormItems/SelectionInput';
import IconStep from '../components/UI/IconStep';
import chatSvg from '../assets/svgs/chat.svg';
import badReviewSvg from '../assets/svgs/bad-review.svg';
import bestPriceSvg from '../assets/svgs/best-price.svg';
import shuttleSvg from '../assets/svgs/shuttle.svg';
import OrderDetailItem from '../components/Order/OrderDetailItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input'
import { portfolioActions } from '../store';
import useHttp from '../hooks/use-http';

const domainPrice=1000;

const emptyValidate = (input) => {
    return input.trim() !== '';
}

const checkFormValidity = (...array) => {
    let valid = true;
    
    array.forEach(ele=>{
        valid= valid && ele.enteredValueIsValid;
        console.log(ele.enteredValueIsValid);
    });
    return valid
}

const Order = (props) => {
    const portfolio = useSelector(state=> state.ordering);
    const history = useHistory();
    const dispatch = useDispatch();

    const http = useHttp('orders',{method:'POST'});
    const name = useInput(emptyValidate,'');
    const profession = useInput(emptyValidate,'');
    const contactNumber = useInput(emptyValidate,'');
    const email = useInput(emptyValidate,'');
    const domain = useInput(emptyValidate,'');

    const order = useSelector(state=> state.order);

    const [domainNeeded, setDomainNeeded] = useState(true);


    const answers = useInput(()=>{},{});

    const answerChangedHandler = (question, answer) => {
        answers.setEnteredValue({...answers.enteredValue, [question]:answer});
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, []);

    useEffect(()=>{
        if(order.portfolio){
            http.fetchData(order);
            alert('Your order has been successfully placed');
        }
    }, [order])


    const orderClickHandler = async (event) => {
        const validity = checkFormValidity(name, profession, contactNumber, email, domain)
        if(!validity){
            alert('Input cannot be blank');
            return;
        }

        if(localStorage.getItem('order')){
            alert('Your previous order has not been processed yet. Please wait...');
            return;
        }

        const order = {
            name:name.enteredValue,
            profession:profession.enteredValue,
            contactNumber:contactNumber.enteredValue,
            email:email.enteredValue,
            answers:answers.enteredValue,
            portfolio:portfolio,
        };

        dispatch(portfolioActions.addOrder(order));
    };

    if(!portfolio.title) {
        history.replace('/home/pre-designed');
        return <p> 404 </p>
    }

    return <section className={classes.order}>
        <label className={classes.order__label}>
            Your Order
        </label>
        <PortfolioDisplay portfolio={portfolio}/>
        <CardSteps header='Let’s gather some information about you' number='1'>
            <FormInput label='Your Name' onChange={name.setEnteredValue} value={name.enteredValue} onFocus={name.setIsTouched} valid={name.enteredValueIsValid}/>
            <FormInput label='Who are you and what do you do?' onChange={profession.setEnteredValue} value={profession.enteredValue} onFocus={profession.setIsTouched} valid={profession.enteredValueIsValid}/>
            <FormInput label='Contact number (Whatsapp Active)' onChange={contactNumber.setEnteredValue} value={contactNumber.enteredValue} onFocus={contactNumber.setIsTouched} valid={contactNumber.enteredValueIsValid}/>
            <FormInput label='Email' onChange={email.setEnteredValue} value={email.enteredValue} onFocus={email.setIsTouched} valid={email.enteredValueIsValid}/>
        </CardSteps>
        <CardSteps header='Now let’s talk about the portfolio itself' number='2'>
                <p className={classes['may-skip']}>You may skip this step if you're not sure about the answers and would like to inform this directly to a representative</p>

                {portfolio.questions.map(question=>{
                    return <FormInput valid={true} value={answers[question]} label={question} onChange={(event)=>answerChangedHandler(question,event.target.value)} key={question}/>
                })}
                <SelectionInput initialValue='No Thanks' onSelectionChange={(value, boolean)=>{setDomainNeeded(boolean);console.log(boolean)}} onInputChange={domain.setEnteredValue} valid={true} inputValue={domain.enteredValue} label='Do you want your own domain name? (www.yourname.com)' options={{enabled:'Yes(Will cost extra)', disabled:'No thanks'}}/>  
        </CardSteps>
        <CardSteps header='Order Details' number='3'>
                <OrderDetailItem header='Order Name'>
                    {portfolio.title}
                </OrderDetailItem>
                <OrderDetailItem header='Portfolio price'>

                    <div className={classes.red__text}>
                        {portfolio.price}
                    </div>
                </OrderDetailItem>
                <OrderDetailItem header='Domain'>
                <div className={classes.red__text}>
                    {domainNeeded && domainPrice}
                </div>
                </OrderDetailItem>

                <div className={classes.total__line}>

                </div>

                <OrderDetailItem header='Total'>
                <div className={classes.red__text}>
                        {parseInt(portfolio.price)+(domainNeeded?1000:0)}
                    </div>
                </OrderDetailItem>
        </CardSteps>
        <CardSteps header='Agree to terms and place order' number='4'>
                <div className={classes.order__flex}>
                    <header className={classes.agree__header}>
                        I agree to be contacted by a designer via whatsapp for further investigation
                    </header>
                    <button className={classes.order__btn} onClick={orderClickHandler}>
                        {http.isLoading?'Ordering...':'Place Order'}
                    </button>
                </div>
            </CardSteps>

            <CardSteps header='Next Steps' number='5'>
                <div className={classes.icon__step__list}>
                    <IconStep header='The designer will contact you on whatsapp'
                        svg={chatSvg}>
                        He’ll ask you for further details regarding the theme, colouring
                    </IconStep>
                    <IconStep header='The price will be discussed over text'
                        svg={bestPriceSvg}>
                        It’ll depend on the content and the complexity of the portfolio
                    </IconStep>
                    <IconStep header='You’ll get to review the site before launch. '
                        svg={badReviewSvg}>
                        Changes will be made and resent to you
                    </IconStep>
                    <IconStep header='The site will be launched'
                        svg={shuttleSvg}>
                        Your site will be launched on github pages and you’ll be able to view it from anywhere in the world.
                    </IconStep>
                </div>

            </CardSteps>
    </section>
}

export default Order;
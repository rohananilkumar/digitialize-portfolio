import CardSteps from '../UI/CardSteps'
import FormInput from '../UI/FormItems/FormInput'
import MultipleSelect from '../UI/FormItems/MultipleSelect'
import SelectionInput from '../UI/FormItems/SelectionInput'
import IconStep from '../UI/IconStep'
import Section from '../UI/Section'
import classes from'./CustomPortfolio.module.css'
import chatSvg from '../../assets/svgs/chat.svg';
import badReviewSvg from '../../assets/svgs/bad-review.svg';
import bestPriceSvg from '../../assets/svgs/best-price.svg';
import shuttleSvg from '../../assets/svgs/shuttle.svg';
import useInput from '../../hooks/use-input'
import { useDispatch, useSelector } from 'react-redux'
import { portfolioActions } from '../../store'
import { useEffect } from 'react'
import useHttp from '../../hooks/use-http'


const emptyValidate = (input) => {
    return input.trim() !== '';
}

const checkFormValidity = (...array) => {
    let valid = true;
    array.forEach(ele=>valid= valid && ele.enteredValueIsValid);
    return valid
}


const CustomPortfolio = (props) =>{
    const items = ['Your Image', 'What do you do','Certifications','Experience','Your featured works','Your Achievements']

    const dispatch = useDispatch();
    
    const name = useInput(emptyValidate,'');
    const profession = useInput(emptyValidate,'');
    const contactNumber = useInput(emptyValidate,'');
    const email = useInput(emptyValidate,'');

    const contents = useInput(()=>{},'');
    const colorCombo = useInput(emptyValidate,'');
    const domainName = useInput(emptyValidate, '');
    const referenceSites = useInput(emptyValidate,'');

    const imageLink = useInput(emptyValidate,'');

    const order = useSelector(state=> state.orderingCustom);
    const http = useHttp('customOrders',{method:'POST'});

    useEffect(async ()=>{
        if(order?.name){
            await http.fetchData(order);
            if(http.error){
                alert(http.error);
            }
            else{
                alert('Your order has been received');
            }
        }
    },[order]);

    const placeOrderHandler = () =>{
        let valid = checkFormValidity(name, profession, contactNumber,email,colorCombo, domainName, referenceSites, imageLink);
        valid &= emptyValidate(name.enteredValue);
        valid &= emptyValidate(profession.enteredValue);
        valid &= emptyValidate(contactNumber.enteredValue);
        valid &= emptyValidate(email.enteredValue);
        if(!valid){ 
            alert('Inputs cannot be left blank');
            return;
        };
        
        dispatch(portfolioActions.addCustomOrder({
            name:name.enteredValue,
            profession:profession.enteredValue,
            contactNumber:contactNumber.enteredValue,
            email:email.enteredValue,
            contents:contents.enteredValue,
            colorCombo:colorCombo.enteredValue,
            domainName:domainName.enteredValue,
            referenceSites:referenceSites.enteredValue,
            imageLink:imageLink.enteredValue,
        }))
    }



    return   <Section header='Create a portfolio according to your preferences'
                summary='Help us create a brand new portfolio catered towards your needs'>
            <CardSteps  header='Let’s gather some information about you' number='1'>
                <FormInput label='Your Name' onChange={name.setEnteredValue} value={name.enteredValue} onFocus={name.setIsTouched} valid={name.enteredValueIsValid}/>
                <FormInput label='Who are you and what do you do?' onChange={profession.setEnteredValue} value={profession.enteredValue} onFocus={profession.setIsTouched} valid={profession.enteredValueIsValid}/>
                <FormInput label='Contact number (Whatsapp Active)' onChange={contactNumber.setEnteredValue} value={contactNumber.enteredValue} onFocus={contactNumber.setIsTouched} valid={contactNumber.enteredValueIsValid}/>
                <FormInput label='Email' onChange={email.setEnteredValue} value={email.enteredValue} onFocus={email.setIsTouched} valid={email.enteredValueIsValid}/>
            </CardSteps>
            <CardSteps header='Now let’s talk about the portfolio itself' number='2'>
                <MultipleSelect
                    label='What type of contents do you want in your portfolio? (Select the ones that you want)'
                    items={items}
                    onSelectionChange={contents.setEnteredValue}
                    alternateLabel='Any other (Separate with commas)'/>
                <SelectionInput inputValue={colorCombo.enteredValue} onInputChange={colorCombo.setEnteredValue} value={colorCombo.enteredValue} key='colorCombo' label='Do you have any specific color combo preference'
                    options={{disabled:'No, let the designer decide', enabled:'Yes'}}/>
                <SelectionInput inputValue={domainName.enteredValue} onInputChange={domainName.setEnteredValue} value={domainName.enteredValue} key='domainName' label='Do you want your own domain name? (www.yourname.com)'
                    options={{enabled:'Yes (Will cost extra)', disabled:'No'}}/>
                <SelectionInput inputValue={referenceSites.enteredValue} onInputChange={referenceSites.setEnteredValue} value={referenceSites.enteredValue} key='referenceSites' label='Do you have any websites in mind that you’d like to be similar to your portfolio?'
                    options={{enabled:'Yes', disabled:'No'}}/>
            </CardSteps>

            <CardSteps header='Now let’s talk about images and other stuff' number='3'>
                <summary className={classes.image__summary}>
                Please upload any other content (Images, details of your work, achievements) on the cloud and pls post the link
                </summary>
                
                <FormInput label='Link for additional content' onChange={imageLink.setEnteredValue} value={imageLink.enteredValue} onFocus={imageLink.setIsTouched} valid={true}/>

                <div className={classes.or}>
                    or
                </div>

                <button className={classes['other-means-btn']}>
                I’d like to send it through other means which can be discussed later
                </button>
                
            </CardSteps>
            
            <CardSteps header='Agree to terms and place order' number='4'>
                <div className={classes.order__flex}>
                    <header className={classes.agree__header}>
                        I agree to be contacted by a designer via whatsapp for further investigation
                    </header>
                    <button className={classes.order__btn} onClick={placeOrderHandler}>
                        Place Order
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

        </Section>
}

export default CustomPortfolio;
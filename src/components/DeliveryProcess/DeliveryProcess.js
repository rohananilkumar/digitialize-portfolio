import Section from '../UI/Section';
import classes from './DeliveryProcess.module.css';
import ProcessItem from './ProcessItem';
import orderSVG from '../../assets/svgs/order.svg';
import whatsappSVG from '../../assets/svgs/whatsapp.svg';
import wwwSVG from '../../assets/svgs/www.svg';
import customerReviewSVG from '../../assets/svgs/customer-review.svg';
import debitCardSVG from '../../assets/svgs/debit-card.svg';
import cloudSVG from '../../assets/svgs/cloud.svg';



const DeliveryProcess = (props) => {


    return <Section header='How do we deliver the site?'
                    summary='We have made the whole process as simple as possible so that you can lay back and have your site made by professionals'
                    id='delivery-process'>
        <div className={classes.process__list}>
            <ProcessItem 
                backgroundColor='#A8FFC0'
                number='1' 
                header='You place order for the site'
                summary='The order is then recieved by one of our wizards(they call them programmers or something nowadays, idk).'
                svg={orderSVG}/>
            <ProcessItem 
                backgroundColor='#FFF384'
                number='2' 
                header='A representative contacts you via whatsapp'
                summary='One of the wizards contacts you via whatsapp so as to make your corner of the internet the paradise that you want it to be'
                svg={whatsappSVG}/>
            <ProcessItem 
                backgroundColor='#FFB48A'
                number='3' 
                header='We create your site in less than a week'
                summary='The wizard, with the help of other wizards make your site according your directions in the shortest time possible'
                svg={wwwSVG}/>
            <ProcessItem 
                backgroundColor='#FFA3A3'
                number='4' 
                header='You review the site'
                summary="The wizard sends a the website created by you at certain intervals so as to assure that we're on the same page"
                svg={customerReviewSVG}/>
            <ProcessItem 
                backgroundColor='#9DD0FF'
                number='5' 
                header='The payment transation is made'
                summary='The payment is made through any mode comfortable for the user. UPI payments can be preferred'
                svg={debitCardSVG}/>
            <ProcessItem 
                backgroundColor='#FFB1F7'
                number='6' 
                header='We upload the site'
                summary='We upload the site to the internet so that everyone can enjoy your corner of the internet.'
                svg={cloudSVG}/>

        </div>
    </Section>
}

export default DeliveryProcess;
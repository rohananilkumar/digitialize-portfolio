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
                summary='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                svg={orderSVG}/>
            <ProcessItem 
                backgroundColor='#FFF384'
                number='2' 
                header='A representative contacts you via whatsapp'
                summary='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                svg={whatsappSVG}/>
            <ProcessItem 
                backgroundColor='#FFB48A'
                number='3' 
                header='We create your site in less than a week'
                summary='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                svg={wwwSVG}/>
            <ProcessItem 
                backgroundColor='#FFA3A3'
                number='4' 
                header='You review the site'
                summary='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                svg={customerReviewSVG}/>
            <ProcessItem 
                backgroundColor='#9DD0FF'
                number='5' 
                header='The payment transation is made'
                summary='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                svg={debitCardSVG}/>
            <ProcessItem 
                backgroundColor='#FFB1F7'
                number='6' 
                header='We upload the site'
                summary='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                svg={cloudSVG}/>

        </div>
    </Section>
}

export default DeliveryProcess;
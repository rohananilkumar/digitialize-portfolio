import Section from '../UI/Section';
import classes from './WorkWithUs.module.css';
import WorkWithUsForm from './WorkWithUsForm';

const WorkWithUs = (props) => {
    return <Section
                header='Wanna work with us?'
                summary='Let us know if you wanna work with us on websites. We’ll get back to you as soon as we can.'>
            <WorkWithUsForm/>
    </Section>
}

export default WorkWithUs;
import classes from './Section.module.css'
import SectionIntro from './SectionIntro'

const Section = (props) => {
    return <section className={classes.section} id={props.id}>
        <SectionIntro header={props.header}>
            {props.summary}
        </SectionIntro>
        {props.children}
    </section>
}

export default Section;
import classes from './SectionIntro.module.css'

const SectionIntro = (props) => {
    return <>
        <header className={classes.header}>
            {props.header}
        </header>
        <summary className={classes.summary}>
            {props.children}
        </summary>
    </>
}

export default SectionIntro;
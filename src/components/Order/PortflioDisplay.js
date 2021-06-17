import PortfolioDisplayMobile from '../Portfolio/PortfolioDisplay/PortfolioDisplayMobile'
import PortfolioDisplayDesktop from '../Portfolio/PortfolioDisplay/PortfolioDisplayDesktop';

const PortfolioDisplay = (props) =>{

    return <>
        {window.innerWidth<=1000 && <PortfolioDisplayMobile images={props.portfolio.images}/>}
        {window.innerWidth>=1000 && <PortfolioDisplayDesktop images={props.portfolio.images}/>}
    </>
}

export default PortfolioDisplay;
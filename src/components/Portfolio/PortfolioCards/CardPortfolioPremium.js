import classes from './CardPortfolioPremium.module.css'
import PortfolioData from '../PortfolioData/PortfolioData';

const CardPortfolioPremium = (props) =>{
    return <div className={classes.card}>
        <div className={classes.img__card}>
            <img src={props.portfolio.thumbnail}/>
            <div className={classes['premium-tag']}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.44336 17.627V22.0215H20.5566V17.627H4.44336Z" fill="#FF9F00"/>
                    <path d="M12.5 17.627H20.5566V22.0215H12.5V17.627Z" fill="#FF7816"/>
                    <path d="M20.6299 11.2402L19.4433 13.5546H5.55668L4.37012 11.2402C6.11324 8.8232 9.14555 7.37305 12.5 7.37305C15.8545 7.37305 18.8868 8.8232 20.6299 11.2402Z" fill="#FF4B00"/>
                    <path d="M20.6299 11.2402L19.4433 13.5546H12.5V7.37305C15.8545 7.37305 18.8868 8.8232 20.6299 11.2402Z" fill="#CC1E0D"/>
                    <path d="M23.296 9.77531L20.5567 19.0918H4.44337L1.70404 9.77531L3.54978 9.07226C4.38482 10.6689 5.98146 11.6064 7.28513 11.7675H8.04693C9.7315 11.5039 10.9911 8.92577 11.504 6.46472H13.4962C14.0089 8.92577 15.2687 11.5039 16.9531 11.7675H17.7149C19.0186 11.6064 20.6152 10.6689 21.4502 9.07226L23.296 9.77531Z" fill="#FDBF00"/>
                    <path d="M23.296 9.77531L20.5566 19.0918H12.5V6.46472H13.496C14.0089 8.92577 15.2685 11.5039 16.9531 11.7675H17.7149C19.0186 11.6064 20.6152 10.6689 21.4502 9.07226L23.296 9.77531Z" fill="#FF9F00"/>
                    <path d="M2.24609 10.3027C1.03455 10.3027 0 9.31702 0 8.10547C0 6.89392 1.03455 5.9082 2.24609 5.9082C3.45764 5.9082 4.44336 6.89392 4.44336 8.10547C4.44336 9.31702 3.45764 10.3027 2.24609 10.3027Z" fill="#FF9F00"/>
                    <path d="M22.7539 10.3027C21.5424 10.3027 20.5566 9.31702 20.5566 8.10547C20.5566 6.89392 21.5424 5.9082 22.7539 5.9082C23.9655 5.9082 25 6.89392 25 8.10547C25 9.31702 23.9655 10.3027 22.7539 10.3027Z" fill="#FF7816"/>
                    <path d="M12.5 2.97852C11.2841 2.97852 10.3027 3.95985 10.3027 5.17578C10.3027 6.39153 11.2841 7.37305 12.5 7.37305C13.7159 7.37305 14.6973 6.39153 14.6973 5.17578C14.6973 3.95985 13.7159 2.97852 12.5 2.97852Z" fill="#FF9F00"/>
                    <path d="M12.5 11.46L9.99506 13.9649L12.5 16.4698L15.0049 13.9649L12.5 11.46Z" fill="#FF4B00"/>
                    <path d="M16.8945 14.3938L17.9302 15.4295L16.8945 16.4652L15.8588 15.4295L16.8945 14.3938Z" fill="#CC1E0D"/>
                    <path d="M8.10545 14.3938L9.14114 15.4295L8.10545 16.4652L7.06976 15.4295L8.10545 14.3938Z" fill="#FF4B00"/>
                    <path d="M12.5 7.37305V2.97852C13.7159 2.97852 14.6973 3.95985 14.6973 5.17578C14.6973 6.39153 13.7159 7.37305 12.5 7.37305Z" fill="#FF7816"/>
                    <path d="M15.0049 13.9649L12.5 16.4698V11.46L15.0049 13.9649Z" fill="#CC1E0D"/>
                    </svg>

                <header>
                    premium
                </header>
            </div>
        </div>

        <PortfolioData
        buttonLayout='vertical'
        portfolio={props.portfolio}/>
    </div>
}

export default CardPortfolioPremium;
import './appBanner.scss';
import avengersLogo from './../../resources/img/AvengersLogo.png';
import avengers from './../../resources/img/Avengers.png';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers" />
            <div className="app__banner-text">New comics every week!<br />
                Stay tuned!</div>
            <img src={avengersLogo} alt="avengers logo" />
        </div>
    )
}

export default AppBanner;
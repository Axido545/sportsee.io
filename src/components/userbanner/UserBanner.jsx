import "./userbanner.css";
import myPropTypes from 'prop-types';

export default function UserBanner({ name }) {
    return <div className="user-banner">
        <h1 className="user-name">Bonjour <span className="user-firstname">{name}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
}

UserBanner.propTypes = myPropTypes;
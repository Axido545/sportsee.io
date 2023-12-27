import "./userbanner.css"
import PropTypes from "prop-types"


export default function UserBanner({ firstName }) {
    return <div className="user-banner">
        <h1 className="user-name">Bonjour <span className="user-firstname">{firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
}

UserBanner.prototype = {
    firstName: PropTypes.string.isRequired,
}
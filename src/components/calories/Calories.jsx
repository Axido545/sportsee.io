import "./calories.css"

export default function calories({ url, name, number, quantity }) {
    return <div className="calories-block">
        <div>
            <img className="calorie-icon" src={url} alt="ico" />
        </div>
        <div className="block-number">
            <span className="number-calories"><strong>{number}{quantity}</strong></span>
            <p className="calorie-name">{name}</p>
        </div>
    </div>
}
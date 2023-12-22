import "./calories.css"

export default function calories({url, name, number,quantity}){
    return <div className="calories-block">

        <img src={url} alt="ico" /><span>{number}</span><span>{quantity}</span>
<p>{name}</p>
    </div> 
}
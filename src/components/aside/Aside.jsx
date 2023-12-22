import "./aside.css"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

export default function Aside() {
    return<aside className="aside">
        <div className="wrap-aside">
        <div className="wrap-icon">
            <img className="icon-style" src={icon1} alt="icon1"/>
            <img className="icon-style"  src={icon2} alt="icon2"/>
            <img className="icon-style"  src={icon3} alt="icon3"/>
            <img className="icon-style"  src={icon4} alt="icon4"/>
        </div>
        <small className="copyright">Copiryght, SportSee 2020</small>0
        </div>
    </aside>
}
import { HouseInformation } from "../interface/interface";
import style from "./styles/HouseInfo.module.scss";

function HouseInfo({house, text}: HouseInformation): JSX.Element {


    return(
        <main>
            <h2>{house}</h2>
            <p>{text}</p>
        </main>
    )
}

export default HouseInfo;
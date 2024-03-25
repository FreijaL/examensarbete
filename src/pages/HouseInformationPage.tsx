import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavigationCard from "../components/NavigationCard";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/HouseInformationPage.module.scss";
import { useEffect, useState } from "react";
import { HouseInformation } from "../interface/interface";


function HouseInformationPage() {

    const { theme } = useTheme();
    const navigate = useNavigate();
    const [houses, setHouses] = useState<HouseInformation[]>([]);

    const fetchData = async () => {
        const response = await fetch("../../data/houseInfo.json");
        if (!response.ok) {
            throw new Error("Faild to fetch data");
        }
        const data: HouseInformation[] = await response.json();            
        setHouses(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleCardClick = (house: HouseInformation) => {
        navigate(`/houseinformation/${house.house}`, { state: { house: house }});
    }

    return(
        <>
            <Header />
            <main className={style.mainContainer} style={{ ...theme as React.CSSProperties }}>
                <section>
                    <p>Click on the house you wolud like to learn more about. Take quizes and join the family!</p>
                </section>
                <section className={style.cardWrapper}>
                    {
                        houses && houses.map(house => (
                            <NavigationCard 
                                key={house.id}
                                onClick={() => handleCardClick(house)} 
                                img={`./svg/${house.house}.png`}
                                imgName={house.house} 
                                text={house.house}
                                data={house}
                            />
                        ))
                    }
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HouseInformationPage;
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import NavigationCard from "../components/NavigationCard";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/HomePage.module.scss"
import { motion, useAnimate } from "framer-motion";
import Footer from "../components/Footer";


function HomePage() {

    const { theme } = useTheme();
    const navigate = useNavigate();

    /* 
    TODO:
    - close menu and theme when click outside
    - useAnimate may be necessary for multiple animations (sorting hat)
    - if in active navMenu, show hovereffect
    */
    
        // const [ scope, animate] = useAnimate();

        // const handleAnimate = async () => {
        //     await animate(".heading", { scale: 3 })
        // };
        
    


    return (
        < >
            <Header />
            <main className={style.mainContainer} style={{ ...theme as React.CSSProperties }}>
                <section>
                    <p>Choose your next move</p>
                </section>
                <section className={style.cardWrapper}>
                    <NavigationCard 
                        img="https://i.pinimg.com/474x/05/4d/27/054d27bcf0f34fbd26c05b155237deea.jpg" 
                        imgName="SortingHat" 
                        text="Get sorted now!"
                        onClick={() => navigate("/sortinghat")}
                    />
                    <NavigationCard 
                        img="https://i.pinimg.com/474x/4c/43/3d/4c433dae9cadd2dc9b5c8854530f68c0.jpg" 
                        imgName="Patronus" 
                        text="Learn a new spell" 
                        onClick={() => navigate("/spells")}
                    />
                    <NavigationCard 
                        img="https://i.pinimg.com/564x/70/89/11/7089115ef879f5fe38bee836d47c8f81.jpg" 
                        imgName="Character" 
                        text="Find a character" 
                        onClick={() => navigate("/characters")}
                    />
                    <NavigationCard 
                        img="https://i.pinimg.com/474x/d0/38/22/d03822e046366cef7a0d7d2eeb1eed02.jpg" 
                        imgName="Hogwarts" 
                        text="Photo gallery" 
                        onClick={() => navigate("/photogallery")}
                    />
                    {/* <NavigationCard 
                        img="https://i.pinimg.com/474x/74/0d/10/740d10c4d10333fb6373f34b338c00c5.jpg" 
                        imgName="Hogwarts Logo" 
                        text="House information" 
                        onClick={() => navigate("/houseinformation")}
                    />
                    <NavigationCard 
                        img="https://i.pinimg.com/474x/d0/38/22/d03822e046366cef7a0d7d2eeb1eed02.jpg" 
                        imgName="Hogwarts" 
                        text="Photo gallery" 
                        onClick={() => navigate("/photogallery")}
                    />
                    <NavigationCard 
                        img="https://i.pinimg.com/474x/d0/38/22/d03822e046366cef7a0d7d2eeb1eed02.jpg" 
                        imgName="Hogwarts" 
                        text="Photo gallery" 
                        onClick={() => navigate("/photogallery")}
                    />
                    <NavigationCard 
                        img="https://i.pinimg.com/474x/d0/38/22/d03822e046366cef7a0d7d2eeb1eed02.jpg" 
                        imgName="Hogwarts" 
                        text="Photo gallery" 
                        onClick={() => navigate("/photogallery")}
                    /> */}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;
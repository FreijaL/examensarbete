import style from "./styles/Footer.module.scss";

function Footer() {

    return(
        <footer className={style.footer}>
            <section>
                <p>	&copy; Copyright 2024</p>
                <p>Created by Freija Lindkvist</p>
                <p>Frontend student</p>
            </section>
            <section>
                <img className={style.logo} src="./svg/linkedin-svgrepo-com.svg" alt="LinkedIn-logo" />
                <p>Pictures from <img className={style.logo} src="./svg/pintrest-svgrepo-com.svg" alt="Pintrest-Logo"/></p>
                {/* <p>Här står något viktigt</p> */}
            </section>
        </footer>
    )
}

export default Footer;
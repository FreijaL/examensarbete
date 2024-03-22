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
                <p>Visit my <a className={style.links} href="https://www.linkedin.com/in/freija-lindkvist-7725a8260/">LinkedIn</a></p>
                <p>Pictures from <a className={style.links} href="https://www.pinterest.se/">Pintrest</a></p>
            </section>
        </footer>
    )
}

export default Footer;
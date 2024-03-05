import style from "./styles/Spells.module.scss";

function Spells({spell}) {

    return (
        <main className={style.spellContainer}>
            <h2 className={style.spellName}>{spell.name}</h2>
            <p>{spell.description}</p>
        </main>
    )
}

export default Spells;
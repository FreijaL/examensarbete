export const cardAnimation = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: 1.05,
        border: "1px solid var(--text)",
        boxShadow: "0 5px 15px var(--textShadow)",
    },
    animateTap: {
        scale: 1,
    }
}

export const buttonAnimation = {
    initial: {
        scale: 1,
        boxShadow: "none"
    },
    whileHover: {
        scale: 1.1,
        boxShadow: "0 5px 15px var(--text)",
        cursor: "url(../public/svg/wand.svg), pointer",
    },
    whileTap: {
        scale: 1
    }
}

export const pixelAnimation = {
    initial: {
        opacity: 1,
    },
    show: (i) => ({
        opacity: 0,
        transition: { duration: 1, delay: 0.01 * i}
    })
}


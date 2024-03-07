import style from "./styles/Button.module.scss";
import { motion } from 'framer-motion';

interface ButtonProps {
    name: string;
    onClick: () => void;
}

function Button ({ name, onClick }: ButtonProps): JSX.Element {
    return (
        <motion.button 
            className={style.default} 
            onClick={onClick}
            initial={{ scale: 1, boxShadow: "0 0 0 transparent"}}
            whileHover={{ scale: 1.1, boxShadow: "0 5px 15px var(--text)" }}
            whileTap={{ scale: 1}}
        >
        {name}
        </motion.button>
    );
}

export default Button;
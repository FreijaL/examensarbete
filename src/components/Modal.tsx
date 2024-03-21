import style from "./styles/Modal.module.scss";

interface Modal {
    action: () => void;
}

function Modal({action}: Modal): JSX.Element {

    return(
        <div className={style.modal} onClick={action}></div>
    )
}

export default Modal;
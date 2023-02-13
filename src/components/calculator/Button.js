import styles from './Button.module.css';

const Button = ({ label, onClick, type }) => {
    let style;

    if (label === '<') {
        const style = { verticalAlign: "middle" }
        label = (
            <span 
                className="material-symbols-rounded" style={style}>
                backspace
            </span>
        )
    }

    switch (type) {
        case 'operator':
            style = styles.operatorButton;
            break;
        case 'equals':
            style = styles.equalButton;
            break;
        default:
            style = styles.defaultButton;
    }

    return (
        <button className={style} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
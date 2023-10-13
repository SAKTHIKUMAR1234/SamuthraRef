import "./Button.css"
export const Button = (props) =>{
    return (
        <button
        type={props.type || 'button'}
        onClick={props.onclick}
        className={props.className}
        disabled = {props.isDisabled || false}
        >
            {props.text}
            {props.icon}
        </button>
    )
}
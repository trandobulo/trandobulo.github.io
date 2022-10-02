import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button(props){

    let btnClass = 'button ';

    if (props.type === 'primary'){
        btnClass += "primaryButton";
    }

    return(
        <button className={btnClass} >
        {props.label}{props.icon && <FontAwesomeIcon className='btnIcon' icon={props.icon} />}
        </button>
    )
}

export default Button
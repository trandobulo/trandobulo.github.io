import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button(props){

    let btnClass = 'button ';

    switch(props.type){
        case 'secondary':
            btnClass += "secondaryButton";
            break;
        case 'primary':
            btnClass += "primaryButton";
            break;
        default: ;
    }

    return(
        <button className={btnClass} >
        {props.label}{props.icon && <FontAwesomeIcon className='btnIcon' icon={props.icon} />}
        </button>
    )
}

export default Button
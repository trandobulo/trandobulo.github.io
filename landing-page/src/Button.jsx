import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button(props){

    let btnClass;

    if(props.type){btnClass = props.className+' '+props.type} else {btnClass = props.className}

    if (props.icon){

        const icon = <FontAwesomeIcon className='btnIcon' icon={props.icon} />

        return(
            <button className={btnClass}>
            {props.label} {icon}
            </button>
        )
    }

    return(
        <button className={btnClass} >
        {props.label}
        </button>
    )
}

export default Button
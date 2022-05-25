import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button(props){

   const icon = <FontAwesomeIcon className='btnIcon' icon={props.icon} />

   if(props.icon){
    return(
        <button className={props.className} >
        Button {icon}
        </button>
    )
   } else {
    return(
        <button className={props.className} >
        Button
        </button>
        )
   }
}   

export default Button
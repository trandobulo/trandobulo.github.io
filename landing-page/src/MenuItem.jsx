function MenuItem(props){
    return(
        <a className="menuItem" href={props.href} >
            {props.name}
        </a>
    )
}

export default MenuItem
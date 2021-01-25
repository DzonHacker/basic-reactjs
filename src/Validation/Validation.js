const LenghtValidation = (props) => {
    
    let output = null 
    if(props.strLen >= 20 && props.strLen != 0){
        output = (<p>Length too long</p>)
    }else if(props.strLen <= 5 && props.strLen != 0){
        output = (<p>Length too short</p>)
    }

    
    return(
        <div>
            {output}
        </div>
    )
}

export default LenghtValidation
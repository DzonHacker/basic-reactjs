

const CharComponent = (props) =>{
    const myStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign : 'center',
        margin: '16px',
        color: 'blue',
        border: '1px solid black'
    }
    return(
        <div style={myStyle}>
            <p  onClick={props.clicked}>{props.ch}</p>
        </div>
    )

}

export default CharComponent
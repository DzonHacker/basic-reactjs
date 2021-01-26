import './UserInput.css'
import Radium from 'radium'

const UserInput = (props) => {
    const btnStyle = {
        backgroundColor : 'cyan',
        cursor: 'pointer',
        border: '1px solid green',
        borderRadius: '4px',
        padding: '8px',
        ':hover' : {
            backgroundColor: 'brown',
            color: 'white'
        }
    }

    // const pStyle = {
    //     '@media {min-width: 500px)':{
    //         width: '450px'
    //     }
    //}
    // if(true){
    //     btnStyle[':hover'] = {
    //         backgroundColor: 'black',
    //         color: 'white'
    //     }
    // }
    return(
        <div className = "UserInput">
            <input type="text" onChange={props.userChanged}></input>
            <button style={btnStyle}>Click Me</button>
        </div>
    )
}

export default Radium(UserInput)
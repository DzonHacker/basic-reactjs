import './UserInput.css'

const UserInput = (props) => {
    return(
        <div className = "UserInput">
            <input type="text" onChange={props.userChanged}></input>
        </div>
    )
}

export default UserInput
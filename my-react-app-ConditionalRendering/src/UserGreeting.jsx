
import PropTypes from 'prop-types'

function UserGreeting(props){

    const welcomeMessage = <h2 className='welcome-message'>
                            Welcome {props.username}
                            </h2>;

    const loginPromt = <h2 className="log-in">
                        Please log in to continue
                        </h2>;


    return( props.isLoggedIn ?  welcomeMessage : loginPromt);
    
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultprops = {
    isLoggedIn: false,
    username: "Guest"
}


export default UserGreeting
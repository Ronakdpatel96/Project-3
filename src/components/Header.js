import {Link} from "react-router-dom";
import './header.css';

function Header ({isLoggedIn}){
    
    return (
        <>
        <h1>Penalty Chess</h1>
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/gameroom">Game Room</Link>
            </li>
            
            <li>
                <Link to="/leaderboard">LeaderBoard</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            {
                !isLoggedIn ? 
                <li><Link to="/login">Log In</Link></li>
                :
                null
            }
        </ul>
        </>
        );
}

export default Header;
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  let handleLogout = () => {
    window.localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotelbooking</span>
        {
          user ? <><div>Hi <span className="username">{user.username}</span> ! Welcome</div><button className="logout" onClick={handleLogout}>Logout</button></> : (
            <div className="navItems">
                <a href="https://hotelbooking-admincontrol.netlify.app/" target="_blank" className="admin-link">Admin</a>
              <Link to={'/register'}>
                <button className="navButton">Register</button>
              </Link>

              <Link to={'/login'}>
                <button className="navButton">Login</button>
              </Link>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
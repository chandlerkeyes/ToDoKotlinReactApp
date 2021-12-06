import { Link } from 'react-router-dom';
import './styles.css';

function NavBar() {
    const CLASS_NAME = "nav-bar"
    return <div className={CLASS_NAME}>
      <Link to="/">Home</Link>
      <Link to="/to-do-list">View To Do List</Link>
    </div>;
  }
  
  
  export default NavBar;
  
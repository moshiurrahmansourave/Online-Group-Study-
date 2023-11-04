import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

  const navItems = <nav className="flex text-lg font-semibold  lg:flex-row flex-col space-x-3">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Assignments</NavLink></li>
        <li><NavLink to="/create assignment">Create Assignment</NavLink></li>
        <li><NavLink to="/my assignment">My Assignments</NavLink></li>
        

    </nav>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="flex items-center">
    
    <img className="w-20" src="https://i.ibb.co/JkLMsj9/pngtree-education-school-logo-design-learning-library-knowledge-vector-png-image-12898110.png" alt="" />
    
    <p className="text-3xl font-bold text-green-400">Study Butter</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn btn-sm text-green-400" to="/login">Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;
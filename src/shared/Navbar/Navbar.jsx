import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);


  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle = e =>{
    if(e.target.checked){
      setTheme("dark");
    } else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  },[theme])

  const handleSingOut = () =>{
    logOut()
    .then()
    .catch()
}

  const navItems = <nav className="flex text-lg font-semibold  lg:flex-row flex-col space-x-3">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/assignments">Assignments</NavLink></li>
        <li><NavLink to="/create assignment">Create Assignment</NavLink></li>
        <li><NavLink to="/my assignment">My Assignments</NavLink></li>
        <li><NavLink to="/submitted">Submitted</NavLink></li>
        

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
    
    <img  className="w-20 rounded-full " src="https://i.ibb.co/JkLMsj9/pngtree-education-school-logo-design-learning-library-knowledge-vector-png-image-12898110.png" alt="" />
    
    <p className="text-3xl font-bold text-orange-400">Study Better</p>
    </Link>
    <div className="lg:mt-5 mt-4 mb-2 ml-4 hidden lg:flex">
    <input type="checkbox" onChange={handleToggle} className="toggle toggle-xs" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <div className=" mr-3 text-lg hidden lg:flex">
      {
        user && <p>{user?.displayName
        }</p>
      }
    </div>

    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full">
          {
            user ?
              <img src={user.photoURL} />
              :
              // <img src="https://i.ibb.co/jLvgVST/user.png" alt="" />
              ""
          }
        </div>
      </label>
  {
    user ? 
    <button onClick={handleSingOut} className="btn btn-sm bg-orange-500 text-white">sing Out</button>
    :
    <Link to="/login">
    <p className="btn btn-sm bg-orange-500 text-white">Login</p>
    </Link>
  
  }
  </div>
</div>
        </div>
    );
};

export default Navbar;
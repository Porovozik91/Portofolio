import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-20 h10 rounded-lg bg-white
      items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">Adam</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-green-600 font-bold" }>
          OM MEG
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-red-600 font-bold"}>
          Prosjekter
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

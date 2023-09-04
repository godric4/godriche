import { Link, NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNav = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-20  w-full fixed ${scrolling ? 'bg-primary' : ''}`}>
      <nav className='container flex  justify-between items-center w-full px-4 py-2 '>
        {/* Logo */}
        <Link to='/'>
          <h1 className='font-semibold'>G&ouml;drich&eacute;</h1>
        </Link>
        {/* links */}
        <ul className='flex gap-4 justify-center items-center max-lg:hidden  '>
          {links.map((link) => {
            const { label, path } = link;
            return (
              <NavLink to={path} key={path}>
                <li>{label}</li>
              </NavLink>
            );
          })}
          <NavLink className='text-grey'>
            <p>Sign In | Register</p>
          </NavLink>
        </ul>

        {/* <button className='text-[1.6rem]   hidden max-lg:block'>
          <FaBars />
        </button> */}
        <div className='text-[1.6rem]   hidden max-lg:block'>
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

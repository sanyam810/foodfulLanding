import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import {navLinks} from '../constants';
import {logo,menu,close} from '../assets';

const Navbar = () => {
  const[active,setActive]=useState('');
  const[toggle,setToggle]=useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5  fixed top-0 z-20 bg-[#100e0e] backdrop-blur `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/" 
          className="flex items-center gap-2" 
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          
          <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
          {/* <p className="text-white text-[18px]  cursor-pointer 
          flex font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            FoodFull
            <span
             className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Full
             </span> &nbsp;
            <span className="sm:block hidden">Saini</span>
            </p> */}
            
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>
            <li 
              key={link.id}
              className={`${
                active===link.title
                ?"text-white font-extrabold"
                :"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
            <a href="app-release.apk" download="app-release.apk">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-600 text-white font-extrabold px-4
               py-2 rounded-xl hover:shadow-lg hover:scale-105 transition 
               duration-300 ease-out">Download
              </button>
            </a>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close:menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={()=>setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden':'flex'} 
              p-6 black-gradient 
              absolute top-20 
              right-0 mx-4 my-2 
              min-w-[140px] z-10 
              rounded-xl`}>
                <ul className="list-none flex justify-end items-center flex-col gap-4">
          {navLinks.map((link)=>
            <li 
              key={link.id}
              className={`${
                active===link.title
                ?"text-white"
                :"text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={()=> { 
                setToggle(!toggle)
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
          <a href="app-release.apk" download="app-release.apk">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-600 text-white font-extrabold px-4
               py-2 rounded-xl hover:shadow-lg hover:scale-105 transition 
               duration-300 ease-out">Download
              </button>
          </a>
        </ul>
              </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
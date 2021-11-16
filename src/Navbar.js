import React from 'react';
import {  Link } from "react-router-dom";
import "./App"

const Navbar = () => {
    return (
        <>
            <div className=" w-full    bg-red-900  flex justify-start justify-around z-50  fixed" >
                <h1 className=" flex items-center text-3xl font-bold tracking-tight text-white"> <Link to="/"><strong className="text-black text-5xl">A</strong>DVENTURE</Link></h1>
                <nav>
                 <ul className="flex items-center p-4 space-x-6 font-sans text-base text-white hover:text-gray-100">
                     <li>
                       <Link to="/App"></Link> 
                       <Link to="/Home">Home</Link>
                     </li>
                     <li>
                       <Link to="/About">About</Link> 
                     </li>
                     <li>
                       <Link to="/Destination">Destination</Link>
                     </li>
                     <li>
                       <Link to="/Contact">Contact</Link>
                     </li>
                     <li>
                       <button className="sm bg-black hover:bg-gray-900  p-3.5 font-normal rounded-lg tracking-widest ring-4 ring-grey  shadow-sm delay-100 ">GetStarted</button>
                     </li>
                 </ul>
              </nav>
            
            </div>
        </>
    )
}
/*   
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Destination">Destination</Link>
            </li>
            <li>
              <Link to="Contact">Destination</Link>
            </li>
          </ul>
        </nav>

*/

export default Navbar

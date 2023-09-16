import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Chat from '../Pages/Chat';

import MovingText from "react-moving-text";
import { Navbar } from "@material-tailwind/react";
import { AuthContext } from '../Context/AuthContext';


const NavL = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);

    const { user, logoutUser } = useContext(AuthContext);


    useEffect(() => {
        if (location !== displayLocation) setDisplayLocation(location);
      }, [location, displayLocation]);


    const navList = (
        <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li
            className={
                displayLocation.pathname === "/register" ?
               "p-1 font-bold text-md text-blue-300" :
               "p-1 font-bold text-md"
            }

          >
            {
                user ?
                <h1>Login as <span className='text-blue-300'>{user.name}</span></h1>
                :
                <button onClick={() => navigate('/register')}>Sing Up</button>
            }

          </li>
          <li
            className={
                displayLocation.pathname === "/login" ?
               "p-1 font-bold text-md text-blue-300" :
               "p-1 font-bold text-md"
            }
          >
            {user  ?
            <button onClick={() => logoutUser()}>Logout</button>
            :
            <button onClick={() => navigate('/login')}>Login</button>
            }


          </li>
        </ul>
      );

      const footer = (
        <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li
            className="p-1 font-bold font-gg1 text-lg"
            >
            {/* <Link
              to="https://wa.me/+6586470728"
              className="flex items-center"
              target="_blank"
            >
              <FaSquareWhatsapp className="text-[#25D366] text-2xl" />
            </Link> */}
          </li>
          <li
            className="p-1 font-bold font-gg1 text-lg"
          >
            {/* <Link
              to="https://twitter.com/SoeLaPyaeHtun"
              className="flex items-center"
              target="_blank"
            >
              <FaSquareTwitter className="text-[#00acee] text-2xl" />
            </Link> */}
          </li>
        </ul>
      );
  return (
    <div>
    <Navbar color="transparent" className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-400">
        <MovingText
          type="shakeHorizontal"
          duration="10000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
          className="font-extrabold"
        >
         Chat App
        </MovingText>

        <div>{navList}</div>
      </div>
    </Navbar>
   <Content />
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex justify-center items-center">copyright@2023</div>

        <div>{footer}</div>
      </div>
    </div>
  </div>
  )
}

export default NavL

function Content() {
    const location = useLocation();

    const { user } = useContext(AuthContext);
    console.log(user)

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    console.log(user ? "1" : "0")
    useEffect(() => {
      if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    return (
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
            <Route path="/" element="" />
            <Route path="/chat" element={ user ? <Chat /> : <Login />} />
            <Route path="/register" element={ user ? <Navigate to="/chat" replace/> : <Register />} />
            <Route path="/login" element={ user ? <Navigate to="/chat" replace/> : <Login />} />
        </Routes>

      </div>
    );
  }
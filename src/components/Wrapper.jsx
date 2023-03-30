import React, {useEffect } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './Navbar'

const Wrapper = () => {
    const location = useLocation();
    const navigationType = useNavigationType();
    useEffect(() => {
      // scroll to top except when you click the back button
      if (navigationType !== "POP" || "PUSH") {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
   <>
   <Navbar/>
    <Outlet/>
   </>
  )
}

export default Wrapper
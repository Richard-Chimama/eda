import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

interface Props{
    isOpen: boolean,
    toggleSidebar: ()=> void
}

const Hamburgur: React.FC<Props> = ({toggleSidebar, isOpen}) => {
    const [screenWidth, setScrrenWidth] = useState(460);

  const handleScreenResize = () => {
    const GET_WINDOW_WIDTH = window.screen.width;
    setScrrenWidth(GET_WINDOW_WIDTH);
  };

  useEffect(()=>{
        document.getElementById("hamburger")?.classList.toggle('hidden')
        setScrrenWidth(window.screen.width);
  },[isOpen])

  window.onresize = handleScreenResize;

  return (
    <>
        { screenWidth < 480 && <div onClick={toggleSidebar}>
            <GiHamburgerMenu id="hamburger" className='hamburger hidden'  size={30} />
        </div> }
    </>
  )
}

export default Hamburgur
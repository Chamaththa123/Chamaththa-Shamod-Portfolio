import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import logo from './../../assets/images/logo.webp'
import { headerItems } from '../../util/dataArrays';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header = ({ scrollRefs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeNavigation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    config: {
      duration: 800,
      delay: 800,

    },
  });


  useEffect(() => {
    const loaderDelay = 200;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  const navigate = useNavigate();
  const [visibleMObile, setVisibleMObile] = useState(false);

  const handleFadeIn = () => {
    setVisibleMObile((pre) => !pre);
    document.body.style.overflow = visibleMObile ? "visible" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [])

  const handleNavigateToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigateToSectionMobile = (sectionRef) => {
    if (window.location.href.split("/").pop() !== "/") {

      navigate("/"); // Navigate to the home page if not already there

      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      handleFadeIn();
    }
  }


  return (
    <animated.section ref={ref}  className=' fixed top-0 md:relative w-full z-50 h-auto bg-[#080831] font-press-start flex items-center justify-between p-0 xl:py-[1px] xl:px-[40px]'>
      <Link className='xl:w-[35%]' to="/">
        <animated.img style={fadeNavigation} src={logo} className=' w-[95px] h-[50px] md:h-[70px] md:w-[100px]' alt="" />
      </Link>
      <animated.div style={fadeNavigation} className='hidden xl:flex w-[55%]  justify-between'>
        <div className="nav-item cursor-pointer text-right text-white text-[15px] font-medium">Home</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.aboutUs)} className="nav-item cursor-pointer text-center text-white text-[15px] font-medium">About Me</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="nav-item cursor-pointer text-center text-white text-[15px] font-medium">Skill</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="nav-item cursor-pointer text-center text-white text-[15px] font-medium">Experience</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="nav-item cursor-pointer text-center text-white text-[15px] font-medium">Education</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="nav-item cursor-pointer text-center text-white text-[15px] font-medium">Projects</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.contact)} className="nav-item cursor-pointer text-center text-white text-[15px] font-medium">Contact</div>

      </animated.div>
      <div className=" bg-neutral-100 flex gap-3 items-center  xl:hidden px-[18px]  h-[70px]">
        <div className="text-black text-lg font-semibold">Menu</div>
        <span onClick={handleFadeIn}><GiHamburgerMenu className=' text-black text-[25px]' /></span>
      </div>


      <div className={`fixed w-full z-50 inset-0 top-0 left-0 bottom-0 bg-white h-[100vh] p-[20px] transition transform duration-500 ease-in-out fade-up-enter-active ${visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `} >
        <div className="flex items-center justify-between w-full">
          <Link className="">
            <img src={logo} className=" w-[150px]  " alt="" />
          </Link>
          <span onClick={handleFadeIn}  >
            <IoMdClose className=' text-[20px]' />
          </span>
        </div>
        {/* mobile header  */}
        <animated.div style={fadeNavigation} className='md:hidden flex w-[35%]  justify-around'>
        <div className="nav-item cursor-pointer text-center text-black text-lg font-medium">Home</div>
        <div onClick={() => handleNavigateToSectionMobile(scrollRefs.aboutUs)} className="nav-item cursor-pointer text-center text-black text-lg font-medium">About Us</div>
        <div onClick={() => handleNavigateToSectionMobile(scrollRefs.services)} className="nav-item cursor-pointer text-center text-black text-lg font-medium">Services</div>
        <div onClick={() => handleNavigateToSectionMobile(scrollRefs.contact)} className="nav-item cursor-pointer text-center text-black text-lg font-medium">Contact Us</div>

      </animated.div>
      </div>
    </animated.section>
  )
}

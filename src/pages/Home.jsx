import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { Loader } from "../components/Loader";
import NavigationContext from "../context/NavigationContext";
import { Hero } from "./Hero";


export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);


  const scrollRefs = useContext(NavigationContext)

  const handleScrollToSections = (scrollRefs) => {
    if (scrollRefs.current) {
      scrollRefs.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <Header
              scrollRefs={scrollRefs}
              
            />
            <Hero/>
          </>)
      }
    </>

  );
};

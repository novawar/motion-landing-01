import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";


const Home = () => {

  function Section({ children, translateX }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <section ref={ref}>
        <span

          style={{
            transform: isInView ? "none" : `translateX(${translateX}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

  return (

    <div>
      <div className="animation-section font-head">
        <Section className="" translateX={'-200'}>Somebody</Section>
        {/* <h1 className="ml-3 description bg-gradient-to-r from-pink-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">who cares</h1> */}
      </div>
      <div className="animation-section font-head">
        {/* <h1 className="mr-3 description bg-gradient-to-r from-yellow-500 to-pink-600 inline-block text-transparent bg-clip-text">I am</h1> */}
        <Section className="" translateX={'200'}>your father</Section>
      </div>
      <div className="animation-section font-head">
        <Section  className=""  translateX={'-200'}>Go</Section>
        {/* <h1 className="ml-3 description bg-gradient-to-r from-pink-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">with Cat</h1> */}
      </div>
      <div className="animation-section font-head">
        <Section className="" translateX={'200'}>your father</Section>
        {/* <h1 className="text-gray-700">Break;</h1> */}
      </div>
    </div>
  )
}

export default Home;    
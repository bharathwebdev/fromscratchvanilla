import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";

import './App.css';
import { useLayoutEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '../src/component/Nav'
import Main from '../src/component/Main'
import { useCallback } from 'react';
import { Particle } from './configsFiles/partical.config';
import './astroid.css'
import styled from 'styled-components';
import Departments from './component/Departments';

import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const DepartmentDiv = styled.div`
position: sticky;
`;


const App = () => {
  const parallex = useRef(null)
  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 1000], [0, -300]);
  const { scrollYProgress } = useScroll();
  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);




const parallexFun = ()=>{
  // const target  = document.querySelectorAll('');
window.requestAnimationFrame(()=>{
  var pos = window.pageYOffset* parallex.current.dataset.rate
  if(parallex.current.dataset.direction === 'vertical'){
    parallex.current.style.transform = 'translate3d(0px ,'+ pos +'px'+',0px)'

  }else {
    var posX = window.pageYOffset * parallex.current.dataset.ratex;
    var posY = window.pageYOffset * parallex.current.dataset.ratey;
    parallex.current.style.transform = 'translate3d(' +posX+'px,'+posY+'px,0px)'
  }
})

    
  
}
  
  // useEffect(()=>{
      
  //   window.addEventListener('scroll',parallexFun)
  //   return ()=>{window.removeEventListener('scroll',parallexFun)
  // }
  // },[])

  
// gsap.to(headerRef.current, {rotation: 27, x: 100, duration: 1});
// var reset = function(e) {
//   e.target.className = '';
//   setTimeout(function() {
//     e.target.className = 'meteor';
//   }, 0);
// };
// var meteors = document.querySelectorAll('.meteor');
// for(var i = 0; i < meteors.length; i++) {
//   meteors[i].addEventListener('animationend', reset);
// }
  return (

<div>
  {/* <SmoothScroll> */}
  <motion.div className='scrollprogress' style={{ scaleX:scrollYProgress}} />


<div className="meteors">
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
</div>
<Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particle}
     
        
      />
  <Nav/>
  <Main/>
  <motion.div
        className="img"
        style={{ y: yValue, zIndex: -1 }}
      ></motion.div>
  {/* <div className='img' ref={parallex} data-rate='-0.6' data-direction='vertical'></div> */}
  <DepartmentDiv>
        <Departments />
      </DepartmentDiv>
  {/* </SmoothScroll> */}
</div>

  )
}

export default App;







{/* <section>
  <ul>
    <li className='parallex' data-rate='-2' data-direction ='vertical'>par</li>
    <li className='parallex' data-rate='2'  data-direction ='vertical'>al</li>
    <li>lax</li>
 
  </ul>
  <span className='parallex' data-rateY='-1' data-rateX='2' data-direction='horizontal'></span> */}
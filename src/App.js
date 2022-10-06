import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";

import './App.css';
import { useLayoutEffect } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '../src/component/Nav'
import Main from '../src/component/Main'
import SmoothScroll from '../src/component/interactive/SmoothScroll'

gsap.registerPlugin(ScrollTrigger);



const App = () => {
  const parallex = useRef(null)
  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);
  




  useLayoutEffect(() => {
    let to = gsap.to(headerRef.current, {
      scrollTrigger: {
        scrub: true
      }, 
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });

    return () => {

      to.kill();
    };
  });
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
  
  useEffect(()=>{
      
    window.addEventListener('scroll',parallexFun)
    return ()=>{window.removeEventListener('scroll',parallexFun)
  }
  },[])
// gsap.to(headerRef.current, {rotation: 27, x: 100, duration: 1});

  return (

<div>
  {/* <SmoothScroll> */}

 
  <Nav/>
  <Main/>
  <div className='img' ref={parallex} data-rate='-0.7' data-direction='vertical'></div>
  <section >

  </section>
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
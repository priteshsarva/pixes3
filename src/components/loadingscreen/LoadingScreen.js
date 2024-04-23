import React from 'react'
import './LoadingScreen.css'
import C1 from '../../assets/svg/whatAreYourLookingFor/c1.svg'
import C2 from '../../assets/svg/whatAreYourLookingFor/c2.svg'
import C3 from '../../assets/svg/whatAreYourLookingFor/c3.svg'
import C4 from '../../assets/svg/whatAreYourLookingFor/c4.svg'
import PixesLogo from '../../assets/png/pixesLogo.png'
import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const LoadingScreen = () => {



  const cloudparralex = () => {
    // var parallax = document.querySelectorAll('#parallax')
    // console.log('parallax');

    var xValue = 0;
    var yValue = 0;
    window.addEventListener('mousemove', (data) => {
      var parallax = document.querySelectorAll('#parallax')
      xValue = data.clientX - window.innerWidth / 2;
      yValue = data.clientY - window.innerHeight / 2;
      // console.log(parallax);
      // console.log('parallax');
      parallax.forEach((elem) => {
        let speedX = elem.dataset.speedx;
        let speedY = elem.dataset.speedy;
        // console.log(speedX, speedY);
        elem.style.transform = `translateX(calc( ${-xValue * speedX}px)) translateY(calc( ${-yValue * speedY}px))`
      })
    })
  }

  window.addEventListener('load', cloudparralex())

  const handleClickLoadingScreen = () => {

    var loadingscreen = document.querySelector('.loadingscreen')
    loadingscreen.style.filter = 'blur(10px)'



    gsap.to('.loadingscreen', {
      y: '-150vh',
      duration: 1.5,
    })

  }


  var tl = gsap.timeline({});
  useGSAP(() => {
    tl.from(".pixesLogo", {
      opacity: 0,
      duration: 1.5,
      delay: .5,
      ease: Power3,
    });
    tl.to(".pixesLogo", {
      opacity: 0,
      y: -200,
      duration: 1.5,
      delay: 1.5,
      ease: Power3,
    });
    tl.to(".LoadingScreendes", {
      opacity: 1,
      duration: 2,
      delay: -.5,
      ease: Power3,
    });
    tl.to(".nextButton", {
      opacity: 1,
      duration: 2,
      ease: Power3,
    });


  });



  return (
    <>
      <div className="loadingscreen">
        <img src={C1} alt="c1" className='c1' data-speedx='0.03' data-speedy='0.03' id='parallax' />
        <img src={C2} alt="c2" className='c2' data-speedx='0.04' data-speedy='0.04' id='parallax' />
        <img src={C3} alt="c3" className='c3' data-speedx='0.02' data-speedy='0.02' id='parallax' />
        <img src={C4} alt="c4" className='c4' data-speedx='0.025' data-speedy='0.025' id='parallax' />
        <img src={PixesLogo} alt="pixesLogo" className='pixesLogo' />

        <div className="LoadingScreendes">
          <p className='lsdes'>we offer a comprehensive range of services tailored to elevate our clients' digital presence. From captivating website development that seamlessly blends aesthetics with functionality to eye-catching graphic design solutions, we ensure a cohesive brand identity across all platforms. Our expertise extends to social media handling, where we craft engaging content strategies to maximize reach and engagement. Additionally, our skilled team excels in video editing, creating compelling visual narratives that resonate with audiences. With a keen focus on user experience and interface design, we deliver intuitive solutions that drive user engagement and satisfaction. At Pixes.in, we're committed to transforming visions into digital realities.
          </p>
        </div>
        <button className='nextButton' onClick={handleClickLoadingScreen}>Next <span><i className="ri-arrow-right-line"></i></span></button>

      </div>
    </>
  )
}

export default LoadingScreen

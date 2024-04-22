import React, { useEffect, useState } from 'react';
import './LookingFor.css'

import C1 from '../../assets/svg/whatAreYourLookingFor/c1.svg'
import C2 from '../../assets/svg/whatAreYourLookingFor/c2.svg'
import C3 from '../../assets/svg/whatAreYourLookingFor/c3.svg'
import C4 from '../../assets/svg/whatAreYourLookingFor/c4.svg'
import Frontcloudbottom from "../../assets/svg/whatAreYourLookingFor/front cloud bottom.svg";
import FrontStoneRightbottom from "../../assets/svg/whatAreYourLookingFor/front stone rightbottom.svg";
import FrontTree from "../../assets/svg/whatAreYourLookingFor/front tree.svg";
import M1 from "../../assets/svg/whatAreYourLookingFor/m1.svg";
import M2 from "../../assets/svg/whatAreYourLookingFor/m2.svg";
import M3 from "../../assets/svg/whatAreYourLookingFor/m3.svg";
import ManAndStone from "../../assets/svg/whatAreYourLookingFor/man and stone.svg";
import ManAndStonemobile from "../../assets/svg/whatAreYourLookingFor/man and stone mobile.svg";

import Tree from "../../assets/svg/whatAreYourLookingFor/tree.svg";







const LookingFor = () => {

  const [man, setman] = useState(ManAndStone)

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 992) {
      setman(ManAndStonemobile)
      console.log(window.innerWidth);
    } else {
      setman(ManAndStone)
      console.log(window.innerWidth);
    }
  })

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setman(ManAndStonemobile)
      console.log(window.innerWidth);
    } else {
      setman(ManAndStone)
      console.log(window.innerWidth);
    }
  }, [])
  const handleClick = (e)=>{
    console.log(e.target.value)
  }


  return (
    <>

      <div className="lookingfor">
        <img src={C1} alt="" className='lookingforc1' />
        <img src={C2} alt="" className='lookingforc2' />
        <img src={C3} alt="" className='lookingforc3' />
        <img src={C4} alt="" className='lookingforc4' />
        <img src={M3} alt="" className='lookingform3' />
        <img src={M2} alt="" className='lookingform2' />

        <img src={M1} alt="" className='lookingform1' />


        <img src={FrontTree} alt="" className='lookingforfrontTree' />

        <img src={Tree} alt="" className='lookingfortree' />
        <img src={man} alt="" className='lookingformanAndStone' />

        <img src={FrontStoneRightbottom} alt="" className='lookingforfrontStoneRightbottom' />
        <img src={Frontcloudbottom} alt="" className='lookingforfrontcloudbottom' />
        <h1 className='lookingforBottomHeading'> What are you looking for?</h1>

        <div className="lookingforTittles">
          <div  className="tooltip">
            <button className='tooltiptittle' onClick={handleClick} value='Business Websites'>Business Websites</button>
            <span  className="tooltiptext">Promote a company's products or services, provide information about the business, and often include features like online stores or contact forms</span>
          </div>
          <div  className="tooltip">
            <button className='tooltiptittle'>E-commerce Websites
            </button>
            <span  className="tooltiptext">Specifically designed for selling products or services online, with features such as shopping carts, payment gateways, and product catalogs.</span>
          </div>
          <div  className="tooltip">
            <button className='tooltiptittle'>Portfolio Websites</button>
            <span  className="tooltiptext">Showcase the work and accomplishments of artists, designers, photographers, or other creative professionals.</span>
          </div>
          <div  className="tooltip">
            <button className='tooltiptittle'>Educational Websites</button>
            <span  className="tooltiptext">Offer educational content, courses, or resources for learners of all ages.</span>
          </div>
          <div  className="tooltip">
            <button className='tooltiptittle'>News and Media Websites</button>
            <span  className="tooltiptext">Provide news articles, videos, and other multimedia content to inform and entertain audiences.</span>
          </div>
          <div  className="tooltip">
            <button className='tooltiptittle'>Community Forums/Social Networks</button>
            <span  className="tooltiptext">Platforms where users can interact, share content, and engage in discussions with each other.</span>
          </div>

          <div  className="tooltip">
            <button className='tooltiptittle'>Personal Websites/Blogs</button>
            <span  className="tooltiptext">Owned by individuals to share personal stories, thoughts, or portfolios.</span>
          </div>
          
          <div  className="tooltip">
            <button className='tooltiptittle'>Nonprofit/Charity Websites</button>
            <span  className="tooltiptext">Raise awareness, funds, or support for a cause or organization.</span>
          </div>
          
          <div  className="tooltip">
            <button className='tooltiptittle'>Government Websites</button>
            <span  className="tooltiptext">Provide information and services offered by government agencies or departments.</span>
          </div>

          <div  className="tooltip">
            <button className='tooltiptittle'>Wiki/Informational Websites</button>
            <span  className="tooltiptext">Collaboratively edited sites containing information on various topics, like Wikipedia.</span>
          </div>
          <div  className="tooltip">
            <button className='tooltiptittle'>Blogging Platforms</button>
            <span  className="tooltiptext">Websites that host user-generated content in the form of articles, posts, or multimedia.</span>
          </div>


        </div>

      </div>

    </>
  )
}

export default LookingFor
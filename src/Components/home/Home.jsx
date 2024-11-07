import React from 'react'
import Heading from './Heading'
import Ban_utility_Container from "./Ban_Img_Container";
import heroImg from '../../assets/banner.jpg';
import Banner from './Banner'
import MainContainer from './MainContainer/MainContainer';
export default function Home() {
  const button1 = <button className='btn text-[#9538E2] font-bold text-xl'>Shop Now</button>
  return (
    <>  
        <Banner button1={button1} title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>
        <Ban_utility_Container HeroIMG={heroImg}/>
        <Heading title={'Explore Cutting-Edge Gadgets'} subTitle=''></Heading>
        <MainContainer></MainContainer>
    </>
  )
}

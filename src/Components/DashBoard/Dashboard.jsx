import React, { useEffect,useState } from 'react';
import Banner from '../home/Banner';
import CartsContainer from '../navBar/CartsContainer';
import { Link, Outlet } from 'react-router-dom';
export default function Dashboard() {
  const [isButton1Active, setIsButton1Active] = useState(true);
  const [isButton2Active, setIsButton2Active] = useState(false);

  const handleToggleButton1 = () => {
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const handleToggleButton2 = () => {
    setIsButton1Active(false);
    setIsButton2Active(true);
  };
   
  const button1= <Link to={'/dashboard'}><button onClick={handleToggleButton1} className={`btn text-[#9538E2] font-bold text-xl ${
   isButton1Active ?  'bg-white border border-gray-400' : 'bg-[#9538E2] border-gray-400 text-white'
  }`}>Cart</button></Link>

  const button2 = <Link to={'/dashboard/wishedlist'}><button onClick={handleToggleButton2} className={`btn text-[#9538E2] font-bold text-xl 
    ${ isButton2Active ? 'bg-white border border-gray-400' : 'bg-[#9538E2] border-gray-400 text-white'}`}>Wish List</button></Link>

  return (
    <div>
      <Banner
        button1={button1}
        button2={button2 }
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <Outlet></Outlet>
    </div>
  );
}

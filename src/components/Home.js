import React, { useEffect, useState } from 'react';
// import {F4} from './F4';
import SliderItems from './SliderItems';
import Review from './Review';
import { Link } from 'react-router-dom';

const Home = () => {

  const [items1, setItems1] = useState([])
  const [items2, setItems2] = useState([])
  const [items3, setItems3] = useState([])

  const getItem = async () => {
    let response = await fetch(`http://localhost:8000/api/auth/getproducts/car`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let json = await response.json();
    setItems1(json);


    response = await fetch(`http://localhost:8000/api/auth/getproducts/mobiles`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    json = await response.json();
    setItems2(json);



    response = await fetch(`http://localhost:8000/api/auth/getproducts/laptop`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    json = await response.json();
    setItems3(json);
  }


  useEffect(() => {
    getItem();
    // eslint-disable-next-line
  }, [])

  // console.log(items1, items2, items3);


  return (
    <div className="flex justify-center my-24 md:my-16">
      <div className='max-w-[1700px]'>
        {/* <F4/> */}
        <div className="categories px-1.5 flex justify-evenly py-2 space-x-3 shadow-gray-400  mb-5 shadow-sm pr-2 ">
          <Link to={`/filter/mobiles`} className="cursor-pointer items hidden sm:flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Mobiles</span></Link>
          <Link to={`/filter/car`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Car</span></Link>
          <Link to={`/filter/scooter`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Scooter</span></Link>
          <Link to={`/filter/sports`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Sports</span></Link>
          <Link to={`/filter/laptop`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>laptop</span></Link>
          <Link to={`/filter/appliances`} className="hidden mdl:flex cursor-pointer items flex-col justify-center items-center"><span className='text-sm hover:text-[#7520f5] font-bold'>Appliances</span></Link>
          <Link to={`/filter/camera`} className="hidden md:flex cursor-pointer items flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Camera</span></Link>
          <Link to={`/filter/home`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Home</span></Link>
        </div>

        <SliderItems category="car" sliderNo={1} recmd={true} items={items1} title="More On Cars" />
        <SliderItems category="mobiles" sliderNo={2} recmd={true} items={items2} title="Deals On Mobiles" />
        <SliderItems category="laptop" sliderNo={3} items={items3} title="Suggested for You" />

        <Review />
      </div>
    </div>
  );
};

export default Home;

"use client"

import Footer from "@/app/compant/Footer/Footer";
import ProjectSlideshow from "@/app/compant/ProjectSlideshow";
import Sliders from "@/app/compant/Slider/Slider";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';


export default function Home() {


  const dataJson = [
    {
      id: 1,
      title: "Special Morning Moment",
      thumbnail: "https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg",
      description: "Captured during a beautiful morning."
    },
    {
      id: 2,
      title: "Perfect Smile",
      thumbnail: "https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg",
      description: "A sweet and joyful smiling moment."
    },
    {
      id: 3,
      title: "Nature Walk",
      thumbnail: "https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg",
      description: "Walking through nature with peace."
    },
    {
      id: 4,
      title: "Special Morning Moment",
      thumbnail: "https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg",
      description: "Captured during a beautiful morning."
    },
    {
      id: 5,
      title: "Perfect Smile",
      thumbnail: "https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg",
      description: "A sweet and joyful smiling moment."
    },
    {
      id: 6,
      title: "Nature Walk",
      thumbnail: "https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg",
      description: "Walking through nature with peace."
    }
  ];


 

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(dataJson);
  }, []);


  

  return (
    <>

<div>

    <div
     className=" bg-cover bg-center flex items-center justify-center text-white text-center"
    > 
    <div className="relative h-[500px] w-full">


    <Image className="w-full h-[500px] object-cover" width={200} height={400} src="https://i.ibb.co.com/j9GtCxRx/premium-photo-1682361002170-082dc66c1a50.jpg" />
      
      
      <div className="bg-[#272727b0]  p-6  absolute top-0 flex justify-center items-center z-50 w-full h-full">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold flex gap-x-1.5">Beautiful 
   <h1 className="text-[#FF6D1F]">           
<Typewriter
  options={{
    strings: ['Plaster', 'Paintings'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          
           </h1>




        <p className="mt-3 text-lg max-w-xl">
          Explore stunning artworks created with passion, colors, and imagination.
        </p>
        </div>
      </div>
    </div>


    </div>
</div>

{/* section */}

<div>
<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] sm:mx-[10px] space-y-5 my-2">
  <div className="text-center">
  <h2 className="font-bold text-[24px] text-[#3A3A3A] ">Our Mission</h2>
<div className="mt-4">
   <h3 className="font-semibold text-[#3A3A3A] text-[19px]">Ma Construction Maintenance LTD.</h3>
 <p className="text-[#747474]">is proud to represent the essence of dedication and professionalism in the construction industry. Our main goal is to maintain high standards in every project, with workers equipped with appropriate safety equipment, and to complete the work with precision and care.</p>
</div>
</div>

</div>


<div className="relative w-full h-[300px] bg-fixed bg-center bg-cover" 
     style={{ backgroundImage: "url('https://i.ibb.co.com/j9GtCxRx/premium-photo-1682361002170-082dc66c1a50.jpg')" }}>
  
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#02020275] bg-opacity-60"></div>
  
  {/* Centered content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-2xl md:text-4xl font-bold mb-4">Lets Make Your Dream House With Our ProfessionalsYour Title Here</h1>
    <p className="mb-6">Some subtitle or description goes here.</p>
    <button className="bg-transparent border-[1px] border-[#7575758c] text-white font-semibold py-2 px-6 rounded">
      Click Me
    </button>
  </div>
</div>





<div>

  
  <h2 className="font-bold text-[20px] text-center text-black">Our Services</h2>

<div>
  <h2 className="text-black text-center">
Building and Construction </h2>
<p></p>
</div>

</div>


</div>


{/* section */}
<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] sm:mx-[10px] ">

<h2 className="font-semibold mt-6 text-center text-black text-2xl">
  Our Services
</h2>

<div
  className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-3
    gap-6 
    p-5
  "
>
  {slides.map((item) => (
    <div
      key={item.id}
      className="
        border-[1px]
        border-gray-300 
        rounded-md
        shadow-md 
        overflow-hidden 
        hover:shadow-lg 
        transition
      "
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        rounded-xl 
        className="w-full  h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>

<div>
  <button type="button">More</button>
</div>

    </div>
  ))}
</div>




</div>

      <Sliders></Sliders>




<div>
  <ProjectSlideshow slides={dataJson} />;
</div>


<div className="xl:flex lg:flex md:flex items-center flex-wrap my-2 justify-center gap-x-4 bg-[#843232]">
<div className="py-2">
    <Image className="w-[90px] bg-white  h-[90px] rounded-full mx-auto my-2" src="https://i.ibb.co.com/0jLgLv1G/Chat-GPT-Image-Nov-25-2025-05-57-46-PM-removebg-preview.png" alt="logo" width={100} height={100}/>
</div>
  <div>
    <h2 className="font-bold xl:text-[25px] lg:text-[25px] md:text-[25px] text-[14px] text-center">Govt Licensed Approved</h2>
  </div>
</div>

<Footer></Footer>
    </>
  );
}


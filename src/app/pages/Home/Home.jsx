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
    title: "Interior Plastering",
    thumbnail: "https://i.ibb.co.com/vb3Pb66/1-premium-photo-1681589433879-c823909b13be.jpg",
    description: "Smooth interior plastering for clean, strong, and paint-ready walls and ceilings."
  },
  {
    id: 2,
    title: "Exterior Plastering",
    thumbnail: "https://i.ibb.co.com/3yvxYhGP/savannah-du-toit-h3-FRYkgq-JSg-unsplash.jpg",
    description: "Durable exterior plastering that protects your home from weather and damage."
  },
  {
    id: 3,
    title: "Skim Coating",
    thumbnail: "https://i.ibb.co.com/67rVYwTp/close-up-shot-hand-trowel.jpg",
    description: "A thin finishing layer to make walls and ceilings smooth and flawless."
  },
  {
    id: 4,
    title: "Gib Stopping",
    thumbnail: "https://i.ibb.co.com/Z6FP3JKK/stop-sign-744192-1280.jpg",
    description: "Professional Gib stopping for seamless joints and perfectly even surfaces."
  },
  {
    id: 5,
    title: "Crack Repairs",
    thumbnail: "https://i.ibb.co.com/vb3Pb66/1-premium-photo-1681589433879-c823909b13be.jpg",
    description: "Repairing cracks in walls and ceilings to restore strength and appearance."
  },
  {
    id: 6,
    title: "Interior & Exterior Painting",
    thumbnail: "https://i.ibb.co.com/XZ4RhJ47/masaking-blue-paint-with-roller-brush-dipped-white-paint-handyman-renovating-apartment-redecoration.jpg",
    description: "High-quality painting services that enhance and protect your home."
  }
];
const dataJsonTwo = [
  {
    id: 1,
    title: "Shower Installation",
    thumbnail: "https://i.ibb.co.com/w8rYhMN/Untitled.jpg",
    description: "Professional shower installation for a clean, functional, and modern bathroom setup."
  },
  {
    id: 2,
    title: "Vanity Installation",
    thumbnail: "https://i.ibb.co.com/vb3Pb66/1-premium-photo-1681589433879-c823909b13be.jpghttps://i.ibb.co.com/VpkmfdZB/images.jpg",
    description: "Installing stylish and durable vanities to upgrade the look and functionality of your bathroom."
  },
  {
    id: 3,
    title: "Toilet & Tapware Installation",
    thumbnail: "https://i.ibb.co.com/1GQVqMDr/2222.jpg",
    description: "Reliable installation of toilets, taps, mixers, and bathroom fittings for smooth daily use."
  },
  
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




{/* 
<div>

  
  <h2 className="font-bold text-[20px] text-center text-black">Our Services</h2>

<div>
  <h2 className="text-black text-center">
Building and Construction </h2>
<p></p>
</div>

</div> */}


</div>


{/* section */}
<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] mx-[10px] ">

<h2 className="font-semibold mt-6 text-center text-black text-2xl">
  Our Services
</h2>
<p className="text-black text-center font-medium text-orange-500 font-semibold italic">Plaster & Painting</p>

<div
  className="
    grid 
    grid-cols-1 
    sm:grid-cols-2  
    md:grid-cols-3 
    lg:grid-cols-3
    gap-6 
    my-6
  "
>
  {slides.map((item) => (
    <div
      key={item.id}
      className="
        rounded-md border-1 border-[#ddd] shadow-xl
       
      "
    >
<div>
        <img
        src={item.thumbnail}
        alt={item.title}
        rounded-xl 
        className="w-full  h-48 object-cover rounded-t-md"
      />
      <div className="flex flex-wrap justify-between items-center   ">

 

  

   <div className="p-4">
        <h3 className="font-semibold text-lg text-black my-2">{item.title}</h3>
    
       <p className="text-black font-normal text-left text-[13px]">
  {item?.description.length > 76 ? (
    <>
      {item?.description.slice(0, 70)}{" "}
      <span className="text-green-600">More...</span>
    </>
  ) : (
    item?.description
  )}
</p>

      </div>
  </div>

<div className="flex justify-center my-2">
  <button className="bg-amber-400 rounded-full hover:bg-orange-500 transition-all cursor-pointer shadow-2xl px-6 py-2" type="button">More</button>
</div> 
     </div>
    

    </div>
  ))}
</div>




</div>

      <Sliders></Sliders>




<div>
  <ProjectSlideshow slides={dataJsonTwo} />;
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


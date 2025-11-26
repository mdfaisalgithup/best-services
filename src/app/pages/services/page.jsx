"use client"

import Footer from "@/app/compant/Footer/Footer";
import Header from "@/app/compant/Header/Header";
import { useEffect, useState } from "react";

export default function Services() {


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
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(dataJson);
  }, []);




  return (
 <>
 
<Header></Header>


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


<Footer></Footer>

 </>
  );
}
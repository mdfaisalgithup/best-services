"use client"

import Footer from "@/app/compant/Footer/Footer";
import Header from "@/app/compant/Header/Header";
import { useEffect, useState } from "react";

export default function OurProject() {

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
 
<Header></Header>


<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] sm:mx-[10px] ">
<h2 className="font-semibold mt-6 text-center text-black text-2xl">
  Our Project
</h2>

<div
  className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-6 
    p-5
  "
>
  {slides.map((item) => (
    <div
      key={item.id}
      className="
        border 
        border-gray-200 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        hover:shadow-lg 
        transition
      "
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
  ))}
</div>




</div>


<Footer></Footer>

 </>
  );
}
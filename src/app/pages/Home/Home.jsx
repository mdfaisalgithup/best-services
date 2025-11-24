"use client"

import Footer from "@/app/compant/Footer/Footer";
import Sliders from "@/app/compant/Slider/Slider";
import { useEffect, useState } from "react";


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

    <section
      className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg')",
      }}
    >
      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold">Beautiful Paintings</h1>
        <p className="mt-3 text-lg max-w-xl">
          Explore stunning artworks created with passion, colors, and imagination.
        </p>
      </div>
    </section>

</div>



<div className="mx-60">
  <h2 className="font-semibold mt-6 text-center text-black">Our Services</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {slides.map((item) => (



          <div>
<div key={item.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{item.title}</h3>
              <p style={{ color: "#555" }}>{item.description}</p>
            </div>


   <div className="flex justify-center my-2">
 
 <button className="font-semibold  hover:cursor-pointer hover:bg-amber-600 hover:text-white px-6 py-2 rounded-full bg-amber-500" type="button">More</button>
</div>         
          </div>




          </div>
        ))}
      </div>




</div>

      <Sliders></Sliders>

https://github.com/mdfaisald040/best-services.git

<div className="mx-60">
  <h2 className="font-semibold mt-6 text-center text-black">Our Project</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {slides.map((item) => (



          <div>
<div key={item.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{item.title}</h3>
              <p style={{ color: "#555" }}>{item.description}</p>
            </div>


   <div className="flex justify-center my-2">
 
 <button className="font-semibold  hover:cursor-pointer hover:bg-amber-600 hover:text-white px-6 py-2 rounded-full bg-amber-500" type="button">More</button>
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


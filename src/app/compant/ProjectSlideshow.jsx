"use client";
import { useState } from "react";

export default function ProjectSlideshow({ slides }) {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] sm:mx-[10px] ">


      <div>
        <h2 className="font-semibold mt-6 text-center text-black text-2xl">
  Our Services
</h2>
<p className="text-black text-center font-medium text-orange-500 font-semibold italic"> Bathroom, Kitchen & General Installations
</p>
      </div>

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
              border border-gray-200 
              rounded-xl shadow-md 
              overflow-hidden 
              hover:shadow-lg 
              transition cursor-pointer
            "
            onClick={() => setFullscreenImg(item.thumbnail)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            className="max-w-full max-h-full rounded-lg"
            alt="Fullscreen"
          />
        </div>
      )}
    </div>
  );
}

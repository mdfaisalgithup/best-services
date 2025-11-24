"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Sliders = () => {
  return (<>
 <div> 
   <div>

    
     <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img className="h-[550px] object-cover" src="https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg" />
        <p className="legend">Legend 1</p>
      </div>

      <div>
        <img className="h-[550px] object-center" src="https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg" alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>

      <div>
        <img className="h-[550px] object-center" src="https://i.ibb.co.com/bMWfpJ5n/Whats-App-Image-2025-11-23-at-8-46-46-AM.jpg" alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
   </div>
</div>
   </> 
  ); 
};

export default Sliders;

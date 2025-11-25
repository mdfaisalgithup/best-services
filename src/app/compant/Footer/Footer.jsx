import Image from "next/image";

export default function Footer() {
  return (
 <>
 {/* #191E24 */}

<div className="bg-[#191E24] h-auto pt-4 w-full">


<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] sm:mx-[10px] h-full flex items-center justify-center">

  
<div className="w-full ">
     <div className="flex   justify-center items-center text-center w-full">
   <aside>
<div>
<Image className="w-[90px] h-[90px] rounded-full mx-auto my-2" src="https://i.ibb.co.com/8gbbcBb8/logo.pnghttps://i.ibb.co.com/7tcrGrhw/360-F-546308831-wv-I3-K9zg0-Lx-FRUx-Sol-Sh-Er-Ehx-Cs3-Gsq3-removebg-preview.png" alt="logo" width={100} height={100}/>
</div> 
  <div className="xl:text-[16px] lg:text-[16px] md:text-[16px] text-[12px]">
      <p className="font-bold">
      Ma Construction Maintenance

    </p>
    <p className="text-[14px]">      Providing reliable tech since 2025</p>
  </div>
  </aside>
 </div>



<div className="flex mt-6  justify-between xl:text-[16px] lg:text-[16px] md:text-[16px] text-[12px] mx-2">
    <nav>
    <h6 className="footer-title">Services</h6>
    <div className="link link-hover">Branding</div>
    <div className="link link-hover">Design</div>
    <div className="link link-hover">Advertisement</div>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <div className="link link-hover">About us</div>
    <div className="link link-hover">Contact</div>
    
    <div className="link link-hover">Press kit</div>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <div className="link link-hover">Terms of use</div>
    <div className="link link-hover">Privacy policy</div>

  </nav>

</div>
</div>


</div>



<div className="flex items-center justify-center gap-x-4 bg-[#1a2127] ">

  <div>
    <h2 className="font-bold text-[16px] py-2">Copyright 2025</h2>
  </div>
</div>

</div>

 </>
  );
}

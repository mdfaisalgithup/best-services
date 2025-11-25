import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
 <>
 
<div className="bg-amber-50">
 <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[100px] sm:mx-[10px]">

<div className=" xl:flex lg:flex-nowrap flex-wrap items-center lg:justify-between  xl:justify-between md:justify-between ">

<div>
<Image className="w-[70px] h-[70px]" src="https://i.ibb.co.com/8gbbcBb8/logo.png" alt="logo" width={100} height={100}/>
</div> 

<div className="flex xl:justify-start  lg:justify-start md:justify-start justify-center gap-4 text-black">
<Link className="hover:text-amber-700" href="/">Home</Link>
<Link className="hover:text-amber-700" href="/pages/services">Services</Link>
<Link className="hover:text-amber-700" href="/pages/our-project">Our Project</Link>
<Link className="hover:text-amber-700" href="/pages/about">About</Link>
<Link className="hover:text-amber-700" href="/pages/contact">Contact</Link>
</div>


<div>
  <input className="bg-[#fab702] hover:text-amber-50 mask-radial-to-fuchsia-950 text-black hover:cursor-pointer hover:bg-amber-700 px-4 py-2" type="button" value="Request A Quote" />
</div>
</div>



 </div>
</div>

 </>
  );
}

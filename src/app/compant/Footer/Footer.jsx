import Image from "next/image";

export default function Footer() {
  return (
 <>
 
<footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
<div>
<Image className="w-[70px] h-[70px]" src="https://i.ibb.co.com/7tcrGrhw/360-F-546308831-wv-I3-K9zg0-Lx-FRUx-Sol-Sh-Er-Ehx-Cs3-Gsq3-removebg-preview.png" alt="logo" width={100} height={100}/>
</div> 
    <p>
      House Painting
      <br />
      Providing reliable tech since 2025
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
 </>
  );
}

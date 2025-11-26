import Footer from "@/app/compant/Footer/Footer";
import Header from "@/app/compant/Header/Header";

export default function Contact() {
  return (
 <>
 
<Header></Header>


    <div className=" flex items-center justify-center p-6">
      
      <div className="bg-[#1B3C53] border-[1px] border-[#8a8a8a7c] shadow-md rounded-lg w-full p-8">
        <h1 className="text-3xl text-black font-bold text-center mb-6 xl:text-[16px] lg:text-[16px] md:text-[16px] text-white  text-[12px]">Contact Us</h1>
        <p className="text-center text-white  mb-8 xl:text-[16px] lg:text-[16px] md:text-[16px] text-[12px]">
          We'd love to hear from you! Fill out the form below.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white  font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-[1px] border-[#b7c3e4b9] rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white  font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-[1px] text-white  border-[#b7c3e4b9]  rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white  font-medium mb-2">
              Message
            </label>
            <textarea 
              id="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border-[1px] border-[#b7c3e4b9]  rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-white text-sm">
          Or reach us at <span className="font-medium">mahabubsadi1994@gmail.com</span>
        </div>
      </div>




    </div>


    <div className=" bg-gray-100 py-12 px-6 lg:px-32 shadow-lg ">
<div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
<h1 className="text-3xl text-bl font-bold text-center mb-8 text-black">Company Information</h1>



{/* Company Info */}
<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">


<div className="p-6 bg-gray-50 rounded-xl shadow-sm">

<p className="text-gray-700 mb-2"><span className="font-semibold">Company: </span>Ma Construction Maintenance LTD</p>
<p className="text-gray-700 mb-2"> Govt Licenced Approved</p>
</div>

<div>
  <p className="text-gray-700 mb-2"><span className="font-semibold">Address:</span></p>
<p className="text-gray-700 ml-4">City</p>
<p className="text-gray-700 ml-4">Auckland</p>
<p className="text-gray-700 ml-4">New Zealand</p>
</div>


<div className="p-6 bg-gray-50 rounded-xl shadow-sm">
<h2 className="text-xl font-semibold mb-4">Contact Details</h2>
<p className="text-gray-700 mb-2">+64 20 4095 2590</p>
<a href="mailto:mahabubsadi1994@gmail.com" className="text-blue-600 font-semibold underline">
mahabubsadi1994@gmail.com
</a>
</div>


</div>


{/* Contact Form */}

</div>
</div>

<Footer></Footer>

 </>
  );
}
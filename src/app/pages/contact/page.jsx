import Footer from "@/app/compant/Footer/Footer";
import Header from "@/app/compant/Header/Header";

export default function Contact() {
  return (
 <>
 
<Header></Header>


    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-3xl text-black font-bold text-center mb-6 xl:text-[16px] lg:text-[16px] md:text-[16px] text-[12px]">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8 xl:text-[16px] lg:text-[16px] md:text-[16px] text-[12px]">
          We'd love to hear from you! Fill out the form below.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-[#b7c3e4b9] rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-2 border-[#b7c3e4b9]  rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea 
              id="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border-2 border-[#b7c3e4b9]  rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-500 text-sm">
          Or reach us at <span className="font-medium">contact@yourdomain.comdfd</span>
        </div>
      </div>
    </div>

<Footer></Footer>

 </>
  );
}
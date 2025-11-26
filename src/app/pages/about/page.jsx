import Footer from "@/app/compant/Footer/Footer";
import Header from "@/app/compant/Header/Header";

export default function About() {
  return (
 <>
 
<Header></Header>

<main className="min-h-screen bg-slate-50 text-slate-800">



<div className="flex justify-center p-4">
  <ol className="mt-10 space-y-10 border-l border-slate-300 pl-6">
<li>
<p className="text-sm text-slate-500">2025</p>
<h3 className="font-semibold">Company founded</h3>
<p className="mt-1 text-slate-600 text-sm">
Two founders and a tiny office.
</p>
</li>

</ol>
</div>



{/* CONTACT */}
<section id="contact" className="bg-[#1B3C53] text-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<h2 className="text-2xl font-bold">Let's talk</h2>
<p className="mt-2 text-indigo-200">
Tell us about your project and we'll reply soon.
</p>


<form className="mt-8 bg-white text-slate-800 p-6 rounded-lg shadow-sm grid gap-4">
<input
type="text"
placeholder="Your name"
className="px-3 py-2 border rounded-md"
/>
<input
type="email"
placeholder="Email"
className="px-3 py-2 border rounded-md"
/>
<textarea
rows="4"
placeholder="Tell us about your project"
className="px-3 py-2 border rounded-md"
></textarea>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
Send message
</button>
</form>
</div>
</section>
</main>



<Footer></Footer>

 </>
  );
}
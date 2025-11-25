import Footer from "@/app/compant/Footer/Footer";
import Header from "@/app/compant/Header/Header";

export default function About() {
  return (
 <>
 
<Header></Header>

<main className="min-h-screen bg-slate-50 text-slate-800">



<ol className="mt-10 space-y-10 border-l border-slate-300 pl-6">
<li>
<p className="text-sm text-slate-500">Jan 2018</p>
<h3 className="font-semibold">Company founded</h3>
<p className="mt-1 text-slate-600 text-sm">
Two founders and a tiny office.
</p>
</li>
<li>
<p className="text-sm text-slate-500">Jun 2019</p>
<h3 className="font-semibold">First Product Launch</h3>
<p className="mt-1 text-slate-600 text-sm">
Launched MVP and gained early adopters.
</p>
</li>
<li>
<p className="text-sm text-slate-500">Mar 2021</p>
<h3 className="font-semibold">Series A</h3>
<p className="mt-1 text-slate-600 text-sm">Scaled the team.</p>
</li>
</ol>



{/* CONTACT */}
<section id="contact" className="bg-indigo-700 text-white">
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
placeholder="you@company.com"
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
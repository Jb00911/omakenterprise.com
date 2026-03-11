function Footer() {
  return (

<footer className="relative mt-32 overflow-hidden border-t border-slate-800">

{/* Gradient Background */}
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

{/* Glow Effect */}
<div className="absolute inset-0 -z-10 flex justify-center">
  <div className="w-[700px] h-[300px] bg-blue-600/20 blur-[140px] rounded-full"></div>
</div>

<div className="max-w-4xl mx-auto px-6 py-20 text-center">

<h3 className="text-2xl font-bold mb-6">
Omak <span className="text-blue-500">Enterprise</span>
</h3>

<p className="text-slate-400 leading-relaxed mb-10">
We build AI-powered business systems, automation tools, and scalable
SaaS platforms designed to increase efficiency and accelerate growth.
</p>

<div className="text-slate-400 leading-relaxed">

<p className="font-semibold text-slate-300 mb-2">
Address
</p>

<p>
Omak Enterprise Inc. <br/>
New York, United States <br/>
Registered Corporation
</p>

</div>

</div>

<div className="text-center text-slate-500 text-sm pb-8">
© {new Date().getFullYear()} Omak Enterprise Inc.
</div>

</footer>

  )
}

export default Footer
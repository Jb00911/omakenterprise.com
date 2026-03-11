import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Navbar() {
  return (

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

{/* Logo */}

<Link to="/" className="text-xl font-bold tracking-tight">
  Omak <span className="text-blue-500">Enterprise</span>
</Link>


{/* Navigation */}

<div className="hidden md:flex items-center gap-8 text-slate-300">

  <Link to="/" className="hover:text-blue-400 transition">
    Home
  </Link>

  <Link to="/services" className="hover:text-blue-400 transition">
    Services
  </Link>

  <Link to="/blog" className="hover:text-blue-400 transition">
    Blog
  </Link>

  <Link to="/contact" className="hover:text-blue-400 transition">
    Contact
  </Link>

</div>


{/* CTA */}

<motion.div
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
>

<Link
to="/contact"
className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-medium shadow-lg shadow-blue-600/30 transition"
>
Start Project
</Link>

</motion.div>

</div>

</nav>

  )
}

export default Navbar
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackgroundGlow from "./components/BackgroundGlow"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Contact from "./pages/Contact"

function App() {
  return (

<BrowserRouter>

<BackgroundGlow />

<Navbar />

<Routes>

<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogPost />} />
<Route path="/contact" element={<Contact />} />

</Routes>

<Footer />

</BrowserRouter>

  )
}

export default App
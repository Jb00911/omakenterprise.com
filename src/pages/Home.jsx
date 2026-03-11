"use client";

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="relative overflow-hidden">

  {/* GLOBAL PREMIUM BACKGROUND */}
  <div className="absolute inset-0 -z-10"></div>

    {/* GLOW LAYER */}
    <div className="absolute inset-0 -z-10 overflow-hidden">

    <motion.div
        initial={{ x: -300, y: -200 }}
        animate={{ x: [ -300, 200, -300 ], y: [ -200, 200, -200 ] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-blue-600/40 rounded-full blur-[140px]"
    />

    <motion.div
        initial={{ x: 300, y: 200 }}
        animate={{ x: [ 300, -200, 300 ], y: [ 200, -200, 200 ] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-purple-600/40 rounded-full blur-[140px]"
    />

    <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [ 0, 150, -150, 0 ], y: [ 0, -150, 150, 0 ] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[140px]"
    />

    </div>

      {/* HERO SECTION */}
      <section className="pt-40 pb-32 px-6 text-center max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          We Build <span className="text-blue-500">AI-Powered</span>  
          <br /> Business Systems That Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Internal dashboards, automation tools, SaaS platforms and
          intelligent systems designed to increase efficiency and profit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6"
        >

          <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-600/30"
          >
          Start a Project
          </Link>

          <Link
          to = "/services" 
          className="border border-slate-700 hover:border-blue-500 px-8 py-4 rounded-2xl transition">
          View Services
          </Link>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          What We Specialize In
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "AI Automation",
              desc: "Automate repetitive workflows and integrate AI to reduce operational cost."
            },
            {
              title: "Custom Dashboards",
              desc: "Real-time data dashboards for internal teams and executives."
            },
            {
              title: "SaaS MVP Development",
              desc: "Launch scalable SaaS platforms with modern tech stacks."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {service.title}
              </h3>
              <p className="text-slate-400">{service.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

          {/* PROCESS SECTION */}

      <section className="py-28 px-6 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-20">
      Our Development Process
      </h2>

      <div className="grid md:grid-cols-4 gap-10">

      {[
      {
      title: "Strategy",
      desc: "We analyze your business, workflows and data to design the right technical solution."
      },
      {
      title: "Design",
      desc: "We design a scalable architecture and user experience focused on efficiency."
      },
      {
      title: "Development",
      desc: "Our engineers build the system using modern frameworks and AI integrations."
      },
      {
      title: "Launch & Scale",
      desc: "We deploy, monitor performance and help scale the system as your business grows."
      }

      ].map((step,index)=>(
      <motion.div
      key={index}
      whileHover={{y:-8}}
      className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center"
      >

      <div className="text-blue-500 text-3xl font-bold mb-4">
      0{index+1}
      </div>

      <h3 className="text-xl font-semibold mb-3">
      {step.title}
      </h3>

      <p className="text-slate-400">
      {step.desc}
      </p>

      </motion.div>
      ))}

      </div>

      </section>
      {/* CTA SECTION */}
        <section className="py-28 px-6 text-center relative overflow-hidden">

        <div className="relative max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Powerful?
            </h2>

            <p className="text-slate-400 mb-10 text-lg">
            Let’s create systems that increase efficiency, revenue,
            and long-term scalability.
            </p>

          <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-2xl text-lg transition shadow-xl shadow-blue-600/40 inline-block"
        >
          Schedule a Strategy Call
        </Link>
        </div>
        </section>

    </div>
  )
}

export default Home
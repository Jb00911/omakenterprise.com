import { motion } from "framer-motion"

function BackgroundGlow() {
  return (

<div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">

<motion.div
animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-blue-600/40 rounded-full blur-[150px]"
/>

<motion.div
animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-purple-600/40 rounded-full blur-[150px]"
/>

<motion.div
animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"
/>

</div>

  )
}

export default BackgroundGlow
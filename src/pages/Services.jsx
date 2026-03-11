import { motion } from "framer-motion"

function Services() {

  const services = [
    {
      title: "AI Automation Systems",
      desc: "We build intelligent automation workflows that reduce manual work, cut costs, and increase operational efficiency.",
      features: [
        "AI-powered chat automation",
        "CRM workflow automation",
        "Business process optimization"
      ]
    },
    {
      title: "Custom Internal Dashboards",
      desc: "Real-time analytics dashboards for executives, managers, and operations teams.",
      features: [
        "Live data integration",
        "Secure admin panels",
        "Role-based access control"
      ]
    },
    {
      title: "SaaS MVP Development",
      desc: "Launch scalable SaaS platforms built with modern and maintainable technologies.",
      features: [
        "User authentication systems",
        "Subscription models",
        "Scalable backend architecture"
      ]
    }
  ]

  return (
    <div className="pt-40 pb-28 px-6 max-w-7xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20"
      >
        Our Core Services
      </motion.h1>

      <div className="space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">
              {service.title}
            </h2>
            <p className="text-slate-400 mb-6 text-lg">
              {service.desc}
            </p>

            <ul className="space-y-3 text-slate-300">
              {service.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Services
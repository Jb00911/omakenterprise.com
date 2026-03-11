function Contact() {
  return (
    <div className="pt-40 pb-28 px-6 max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-12">
        Let’s Work Together
      </h1>

      <form className="space-y-6 bg-slate-900 border border-slate-800 p-10 rounded-3xl">

        <div>
          <label className="block mb-2 text-slate-400">Full Name</label>
          <input
            type="text"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-400">Email</label>
          <input
            type="email"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-400">Project Details</label>
          <textarea
            rows="5"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition shadow-lg shadow-blue-600/30"
        >
          Send Message
        </button>

      </form>

    </div>
  )
}

export default Contact
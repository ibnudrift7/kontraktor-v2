export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100">
            <img
              src="/professional-construction-team-meeting.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Why Choose <span className="text-blue-600">Kontraktor</span>?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of industry experience, we've established ourselves as a trusted partner for
              construction projects of all scales. Our commitment to excellence, innovation, and client satisfaction
              sets us apart.
            </p>

            <div className="space-y-4">
              {[
                { label: "500+", desc: "Projects Completed" },
                { label: "98%", desc: "Client Satisfaction" },
                { label: "15+", desc: "Years Experience" },
                { label: "50+", desc: "Team Members" },
              ].map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.label}</p>
                    <p className="text-gray-600">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth font-medium mt-4">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    image: "/modern-office-building-construction.jpg",
  },
  {
    title: "Residential Development",
    category: "Residential",
    image: "/luxury-residential-apartment-complex.jpg",
  },
  {
    title: "Industrial Facility",
    category: "Industrial",
    image: "/industrial-warehouse-facility-construction.jpg",
  },
  {
    title: "Mixed-Use Development",
    category: "Mixed-Use",
    image: "/mixed-use-development-retail-residential.jpg",
  },
  {
    title: "Healthcare Center",
    category: "Healthcare",
    image: "/modern-hospital-healthcare-facility.jpg",
  },
  {
    title: "Educational Complex",
    category: "Education",
    image: "/university-campus-educational-building.jpg",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-smooth"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-smooth">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

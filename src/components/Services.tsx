import { Building2, BarChart3, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Project Management",
    description: "End-to-end project coordination with real-time tracking and seamless team communication.",
  },
  {
    icon: BarChart3,
    title: "Cost Analysis",
    description: "Detailed budget planning and cost optimization to maximize your project ROI.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Unified platform for managing teams, schedules, and resource allocation.",
  },
  {
    icon: Zap,
    title: "Quality Assurance",
    description: "Comprehensive quality control and compliance monitoring throughout the project lifecycle.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions designed to deliver results on time and within budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-smooth cursor-pointer group"
              >
                <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-200 transition-smooth">
                  <IconComponent className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

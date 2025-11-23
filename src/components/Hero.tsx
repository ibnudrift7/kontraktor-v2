import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              <span className="text-blue-600">Build</span> with
              <br />
              <span className="text-blue-600">Precision</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Kontraktor delivers excellence in construction management. From planning to execution, we ensure every
              project meets the highest standards of quality and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth font-medium flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-smooth font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/modern-construction-architecture-blueprint.jpg"
                alt="Construction blueprint"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

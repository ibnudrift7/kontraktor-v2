export default function AboutSection() {
  return (
    <section id="about" className="bg-accent text-accent-foreground py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="text-sm font-bold tracking-widest uppercase">Bekerja Dengan Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
            Kontraktor & Manajer Konstruksi Sejak 1989
          </h2>
          <p className="text-lg leading-relaxed">
            Kami berkomitmen untuk memberikan layanan konstruksi terbaik dengan standar kualitas internasional. 
            Setiap proyek ditangani dengan profesionalisme tinggi dan perhatian terhadap detail untuk memastikan 
            kepuasan klien maksimal.
          </p>
          <button
            onClick={() => window.open('https://wa.me/6283854560095', '_blank')}
            className="mt-8 bg-accent-foreground text-accent font-bold px-8 py-3 rounded hover:opacity-90 transition"
          >
            Minta Penawaran
          </button>
        </div>
        
        <div className="flex-1 h-96 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?key=3s13l"
            alt="Profesional Konstruksi"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

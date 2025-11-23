export default function YellowBanner() {
  return (
    <section className="bg-accent text-accent-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Kontraktor & Manajer Konstruksi Sejak 1989</h3>
          <p className="text-accent-foreground/80 mt-2">Membangun kepercayaan melalui profesionalisme dan kualitas terbaik.</p>
        </div>
        <button
          onClick={() => window.open('https://wa.me/6283854560095', '_blank')}
          className="bg-accent-foreground text-accent font-bold px-6 py-3 rounded hover:opacity-90 transition whitespace-nowrap"
        >
          Minta Penawaran
        </button>
      </div>
    </section>
  )
}

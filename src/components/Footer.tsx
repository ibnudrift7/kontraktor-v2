import { Facebook, Twitter, Linkedin as LinkedIn, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Kontraktor</h3>
            <p className="text-sm text-gray-400">Building excellence through innovation and precision.</p>
          </div>

          {/* Quick Links */}
          {[
            { title: "Company", links: ["About", "Services", "Portfolio", "Team"] },
            { title: "Resources", links: ["Blog", "Case Studies", "Documentation", "FAQ"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Contact"] },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-smooth">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {currentYear} Kontraktor. All rights reserved.</p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: LinkedIn, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-smooth text-gray-400 hover:text-blue-400"
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

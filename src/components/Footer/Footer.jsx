import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#031020ff] text-[#F5F7FA] pt-16 pb-6 mt-0 border-t border-[#1D4E89]/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">

          {/* QUICK LINKS */}
          <div className="text-center">
            <h3 className="text-[#D4B77D] font-semibold mb-4 text-base">Enlaces rápidos</h3>
            <ul className="space-y-2.5 text-sm inline-block text-left">
              <li
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition-colors duration-200 group"
              >
                <ArrowRight size={14} className="text-[#D4B77D] group-hover:translate-x-1 transition-transform" />
                <span>Inicio</span>
              </li>
              <li
                onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition-colors duration-200 group"
              >
                <ArrowRight size={14} className="text-[#D4B77D] group-hover:translate-x-1 transition-transform" />
                <span>Cómo funciona</span>
              </li>
              <li
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition-colors duration-200 group"
              >
                <ArrowRight size={14} className="text-[#D4B77D] group-hover:translate-x-1 transition-transform" />
                <span>Precios</span>
              </li>
              <li
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition-colors duration-200 group"
              >
                <ArrowRight size={14} className="text-[#D4B77D] group-hover:translate-x-1 transition-transform" />
                <span>Testimonios</span>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center">
            <h3 className="text-[#D4B77D] font-semibold mb-4 text-base">Contacto</h3>
            <ul className="space-y-3 text-sm inline-block text-left">
              <li>
                <a
                  href="tel:+573132157378"
                  className="flex items-center gap-2.5 hover:text-[#D4B77D] transition-colors duration-200 group"
                >
                  <Phone size={16} className="text-[#D4B77D] flex-shrink-0" />
                  <span className="group-hover:underline">+57 313 215 7378</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hi@fluentking.co"
                  className="flex items-center gap-2.5 hover:text-[#D4B77D] transition-colors duration-200 group"
                >
                  <Mail size={16} className="text-[#D4B77D] flex-shrink-0" />
                  <span className="group-hover:underline break-all">hi@fluentking.co</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#F5F7FA]/70">
                <MapPin size={16} className="text-[#D4B77D] flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-[#D4B77D] font-semibold mb-4 text-base">
              Clase gratuita
            </h3>
            <p className="text-[#F5F7FA]/80 text-sm mb-4 leading-relaxed">
              Habla con un asesor y comienza hoy mismo.
            </p>

            <a
              href="https://wa.me/573132157378"
              className="inline-block w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-[#031020ff] transition-all duration-300 text-center py-3 px-4 rounded-lg font-bold text-sm shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transform"
            >
              Escríbenos ahora
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1D4E89]/50 pt-6 text-center">
          <p className="text-xs text-[#F5F7FA]/50">
            © {new Date().getFullYear()} FluentKing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#031020ff] text-[#F5F7FA] pt-12 pb-6 mt-0 border-t border-[#1D4E89]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-[#D4B77D] mb-3">
            Change Your Life Forever
          </h2>
          <p className="text-[#F5F7FA]/70 text-sm leading-relaxed">
            Programa personalizado de inglés para latinos que quieren resultados
            reales sin perder tiempo en clases tradicionales.
          </p>
        </div>

        {/* QUICK LINKS */}
 <div>
          <h3 className="text-[#D4B77D] font-semibold mb-3">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li 
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition"
            >
              <ArrowRight size={14} /> Inicio
            </li>
            <li 
              onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition"
            >
              <ArrowRight size={14} /> Cómo funciona
            </li>
            <li 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition"
            >
              <ArrowRight size={14} /> Precios
            </li>
            <li 
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-[#D4B77D] cursor-pointer transition"
            >
              <ArrowRight size={14} /> Testimonios
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-[#D4B77D] font-semibold mb-3">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#D4B77D]" /> +57 313 215 7378
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#D4B77D]" /> luis.dev0519@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-[#D4B77D]" /> Bogotá, Colombia
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-[#D4B77D] font-semibold mb-3">
            ¿Quieres una clase gratuita?
          </h3>
          <p className="text-[#F5F7FA]/70 text-sm mb-3">
            Déjanos tu WhatsApp y un asesor te contactará en minutos.
          </p>

          <a
            href="https://wa.me/573132157378"
            className="block bg-[#1D4E89] hover:bg-[#D4B77D] hover:text-[#0A1A2F] transition text-center text-[#F5F7FA] py-2 rounded-xl font-semibold border border-[#D4B77D]/30"
          >
            Escríbenos ahora
          </a>
        </div>

      </div>

      <div className="border-t border-[#1D4E89] mt-10 pt-4 text-center text-xs text-[#F5F7FA]/50">
        © {new Date().getFullYear()} Change Your Life Forever. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
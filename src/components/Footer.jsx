import React from 'react';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-brown text-cream pt-24 pb-12 px-8 md:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-light tracking-widest uppercase mb-6 text-ivory">
            Roti Li Doku
          </h3>
          <p className="max-w-sm text-beige/80 font-light leading-relaxed mb-8">
            Roti artisan yang dipanggang dengan penuh semangat, bahan premium, dan komitmen terhadap kualitas yang dapat Anda rasakan di setiap gigitan.
          </p>
          <p className="max-w-sm text-beige/80 font-light leading-relaxed">
            <a href="https://maps.app.goo.gl/zyGiaK3y625bnrT48" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors block mb-2">
              <strong>Kunjungi Toko Roti Kami:</strong><br/>
              Jl. Selayar No.188, Dulalowo,<br/>Kec. Kota Tengah, Kota Gorontalo,<br/>Gorontalo 96138
            </a>
          </p>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-widest text-wheat font-medium mb-6">Menu</h4>
          <ul className="flex flex-col gap-4 text-beige/80">
            <li><a href="#cerita-kami" className="hover:text-cream transition-colors">Cerita Kami</a></li>
            <li><a href="#roti-kami" className="hover:text-cream transition-colors">Roti Kami</a></li>
            <li><a href="#proses" className="hover:text-cream transition-colors">Proses</a></li>
            <li><a href="#kontak" className="hover:text-cream transition-colors">Kontak</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-widest text-wheat font-medium mb-6">Sosial</h4>
          <ul className="flex flex-col gap-4 text-beige/80">
            <li><a href="https://www.instagram.com/roti.lidoku/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a></li>
            <li><a href="https://wa.me/6282292052791" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-beige/50 uppercase tracking-widest gap-4">
        <p>&copy; {new Date().getFullYear()} Roti Li Doku. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

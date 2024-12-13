import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">LensCraft Studio</h3>
              <p className="text-sm">Capturing Moments, Creating Memories</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li><Link href="/" className="hover:text-zinc-500 transition duration-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-zinc-500 transition duration-300">About Us</Link></li>
                <li><Link href="/services" className="hover:text-zinc-500 transition duration-300">Services</Link></li>
                <li><Link href="/teams" className="hover:text-zinc-500 transition duration-300">Teams</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p className="text-sm">Sampangan RT 17 no 17 Mantup <br />Baturetno Banguntapan<br />bantul, 55197<br />Phone: (+62) 274-516712<br />Email: lenscraft@studio.com</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} LensCraft Studio. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  
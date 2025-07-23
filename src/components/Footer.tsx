import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Banner */}
      <div className="bg-[#87abc3] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Head Office */}
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Head Office</h3>
                <p className="text-sm">
                  66, Adeniran Ogunsanya<br />
                  St Surulere Lagos.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-sm">
                  Phone: (01) 2710030-4<br />
                  Mobile: (234) 802 223 8063
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-sm">
                  info@elgring.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img
                src="/logo.png"
                alt="El-gris Footer Logo"
                className="h-12 mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We are Nigeria's Leading Risks Solutions Provider of Choice. Not only
                do we want to be the undisputed no 1 company, we also want to remain in that
                position in whichever market we are operating in.
              </p>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Network Correspondent in Nigeria for </strong>
                <Link href="https://www.aon.com" className="text-[#1d79bc] hover:underline">
                  Aon
                </Link> - The world's Leading Insurance Broker.
              </p>
            </div>

            {/* Important Links */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6">IMPORTANT LINKS</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Insurance Broking
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Reinsurance Broking
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Consultancy Services
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    About El-gris
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Why El-gris
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Industries
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Careers
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    El-gris Publication
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Global Reach
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    Latest News
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              Copyright 2016-2025.
              <Link href="https://kolapo.vercel.app/" className="text-[#E67817] hover:underline ml-1">
                El-gris
              </Link> | Insurance Brokers. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Legal</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Notice</Link>
              <span>Powered by: Kolawole Kolapo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

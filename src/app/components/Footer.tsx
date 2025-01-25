import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 font-poppins text-center md:text-start">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Address */}
          <div className="space-y-6">
          <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
              </Link>
            </div>

            <div className="text-[#9F9F9F] text-base leading-relaxed">
              <p>400 University Drive Suite 200 Coral</p>
              <p>Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-purple-700 text-base">Links</h3>
            <nav className="flex flex-col space-y-4  font-poppinsSemiBold">
              <Link href="/" className="text-black hover:text-purple-700 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-black hover:text-purple-700 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-black hover:text-purple-700 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-black hover:text-purple-700 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <h3 className="text-purple-700 text-base">Help</h3>
            <nav className="flex flex-col space-y-4 font-poppinsSemiBold">
              <Link href="/payment" className="text-black hover:text-purple-700 transition-colors">
                Payment Options
              </Link>
              <Link href="/returns" className="text-black hover:text-purple-700 transition-colors">
                Returns
              </Link>
              <Link href="/privacy" className="text-black hover:text-purple-700 transition-colors">
                Privacy Policies
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-purple-700 text-base">Newsletter</h3>
            <form className="flex flex-col lg:flex-row items-center gap-4 space-y-4">
              <div className="border-b border-black">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full py-2 bg-transparent text-black placeholder-[#9F9F9F] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="font-poppinsSemiBold border-b border-black text-black hover:text-purple-700 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#D9D9D9]">
          <p className="text-[#000000] text-base text-center">
            2025 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  )
}


import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const links = [
  { label: 'Studio', href: '#story' },
  { label: 'Collections', href: '#collections' },
  { label: 'Craft', href: '#craft' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(100, (window.scrollY / (window.innerHeight * 0.9)) * 100)
      setScrollProgress(progress)
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="site-navbar fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 backdrop-blur-[22px] backdrop-saturate-150 transition-all duration-400 sm:px-4 md:px-6 ${
          isScrolled
            ? 'border-white/65 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.18)]'
            : 'border-white/30 bg-white/12 shadow-[0_14px_40px_rgba(0,0,0,0.32)]'
        }`}
      >
        <a
          href="#top"
          className="text-base font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-300 sm:text-lg"
        >
          Ennar
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/85 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-[#C7A15A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          aria-label="Visit showroom"
          className="inline-flex items-center gap-2 rounded-full border border-[#C7A15A]/35 bg-[#111827] px-3.5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f2937] hover:shadow-[0_12px_35px_rgba(199,161,90,0.24)] sm:px-4"
        >
          <span className="hidden sm:inline">Visit Showroom</span>
          <span className="sm:hidden">Visit</span>
          <FiArrowRight />
        </a>
      </div>

      <div className="mx-auto mt-2 h-1 max-w-7xl overflow-hidden rounded-full bg-white/30">
        <div
          className="h-full rounded-full bg-[#C7A15A] transition-[width] duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}

export default Navbar

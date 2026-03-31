import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Linkedin, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import headerData from '../../content/data/header.json'
import footerData from '../../content/data/footer.json'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Início', href: isHome ? '#inicio' : '/' },
    { name: 'Sobre', href: isHome ? '#sobre' : '/#sobre' },
    { name: 'Áreas', href: isHome ? '#areas' : '/#areas' },
    { name: 'Artigos', href: isHome ? '#artigos' : '/#artigos' },
    { name: 'Contato', href: isHome ? '#contato' : '/#contato' },
  ]

  return (
    <div className="flex flex-col min-h-screen relative font-sans text-foreground">
      {/* Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6',
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-subtle py-4' : 'bg-transparent',
        )}
        data-sb-object-id="content/data/header.json"
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            {/* Elegant Monogram Logo representation */}
            <div className="font-serif text-3xl tracking-widest text-foreground font-semibold" data-sb-field-path="logoText">
              {headerData.logoText}
            </div>
            <div className="hidden md:flex flex-col ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-l border-primary pl-2">
              <span className="text-[10px] uppercase tracking-widest leading-tight" data-sb-field-path="logoSubtitle">
                {headerData.logoSubtitle}
              </span>
              <span className="text-[10px] uppercase tracking-widest leading-tight text-muted-foreground" data-sb-field-path="logoSubtitle2">
                {headerData.logoSubtitle2}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-wide hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background flex flex-col items-center justify-center transition-transform duration-500 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Minimalist Footer */}
      <footer className="bg-background border-t border-border pt-16 pb-8" data-sb-object-id="content/data/footer.json">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            <div>
              <div className="font-serif text-2xl tracking-widest mb-4" data-sb-field-path="logoText">
                {footerData.logoText}
              </div>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0" data-sb-field-path="tagline">
                {footerData.tagline}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-serif text-lg mb-4" data-sb-field-path="quickLinksTitle">
                {footerData.quickLinksTitle}
              </h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-serif text-lg mb-4">Escritórios</h4>
              <div className="space-y-4">
                {footerData.offices.map((office, index) => (
                  <div key={office.city} className="flex items-start gap-2" data-sb-field-path={`offices.${index}`}>
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-medium block" data-sb-field-path=".city">{office.city}</span>
                      <span className="text-xs text-muted-foreground" data-sb-field-path=".address">{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h4 className="font-serif text-lg mb-4" data-sb-field-path="connectTitle">
                {footerData.connectTitle}
              </h4>
              <div className="flex gap-4">
                <a
                  href={footerData.instagramUrl}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a
                  href={footerData.linkedinUrl}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              <span data-sb-field-path="copyrightName">{footerData.copyrightName}</span>. Todos os direitos
              reservados.
            </p>
            <p data-sb-field-path="oab">{footerData.oab}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import LanguageSelector from './LanguageSelector'

interface NavItem {
  key: string
  href: string
  external?: boolean
}

const navigationItems: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/servicios' },
  { key: 'for_sponsors', href: '/para-patrocinadores' },
  { key: 'for_patients', href: '/para-pacientes' },
  { key: 'about', href: '/nosotros' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contacto' }
]

const externalLinks: NavItem[] = [
  { key: 'dr_wilson', href: 'https://drwilsonbautista.com', external: true }
]

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, locale } = useCustomTranslation()
  const router = useRouter()

  const isActivePath = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    }
    return router.pathname.startsWith(href)
  }

  const getLinkClass = (href: string, isMobile: boolean = false) => {
    const baseClass = isMobile 
      ? 'block px-3 py-2 text-base font-medium rounded-lg transition-colors'
      : 'text-sm font-medium transition-colors hover:text-primary-600'
    
    const activeClass = isMobile
      ? 'text-primary-600 bg-primary-50'
      : 'text-primary-600'
      
    const inactiveClass = isMobile
      ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
      : 'text-gray-700'

    return `${baseClass} ${isActivePath(href) ? activeClass : inactiveClass}`
  }

  return (
    <nav className={`bg-white shadow-sm ${className}`}>
      <div className="container-max">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">CODENTMED IPS</div>
              <div className="text-xs text-gray-500 hidden sm:block">{t('site.tagline')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={getLinkClass(item.href)}
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}
            
            {/* External Links */}
            {externalLinks.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {t(`navigation.${item.key}`)} ↗
              </a>
            ))}

            {/* Language Selector */}
            <LanguageSelector variant="minimal" showLabel={false} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector variant="minimal" showLabel={false} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={getLinkClass(item.href, true)}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
              
              {/* External Links */}
              {externalLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`navigation.${item.key}`)} ↗
                </a>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {locale === 'es' ? 'Idioma' : 'Language'}
                </div>
                <LanguageSelector 
                  variant="mobile" 
                  showLabel={false}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Breadcrumb component for internal pages
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const { t } = useCustomTranslation()

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-primary-600 text-sm">
            {t('navigation.home')}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-gray-300">/</span>
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-primary-600 text-sm">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 text-sm font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
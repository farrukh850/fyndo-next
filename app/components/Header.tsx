import React from "react"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { useLocale } from 'next-intl';
function Header() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const navLinks  = t.raw('navbar-links') as { label: string; href: string }[];
  const logoSrc = locale === 'de'
  ? '/images/logo-de.svg'
  : '/images/logo-en.svg';
  return (
    <header className="h-[68px] flex items-center fixed shadow-xs bg-white top-0 right-0 left-0 justify-between pl-4.5 lg:pl-11 pr-3 lg:pr-7.5 max-w-[1408px] w-full mx-auto z-[1000]">
        <a href="/"><Image
          src={logoSrc}
          alt="Fyndo Logo"
          width={50}
          height={16}
          priority
        /></a>
        <div className="header-right flex lg:gap-5 gap-3 items-center">
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-[12.5px] leading-[26px] tracking-[-1%] font-inter ${
                  index === 0 ? 'text-[#000]' : 'text-[#000]/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
            <div className="flex items-center gap-[5px]">
                <a href="#" className="h-[37px] w-[157px] flex items-center justify-center gap-[5px] bg-[#EFEFF0] border border-[#EFEFF0] rounded-lg "><img src="/images/german-flag.svg" className="w-[14px]" alt="German Flag"/><p className="text-black text-xs font-inter font-medium">Switch to English</p></a>
                <a href="#" className="h-[37px] w-[115px] flex items-center gap-[5px] justify-center bg-[#4E00D5] border border-[#4E00D5] rounded-lg "><p className="text-white text-xs font-inter font-medium">{t('navbar-btn')}</p></a>
            </div>
        </div>
    </header>
  )
}

export default Header
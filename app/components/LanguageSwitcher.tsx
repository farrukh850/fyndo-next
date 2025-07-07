// components/SimpleLanguageSwitcher.jsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function SimpleLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    
    router.replace(
      newLocale === 'en' 
        ? pathWithoutLocale 
        : `/${newLocale}${pathWithoutLocale}`
    );
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <span className="text-sm font-medium">
        {locale === 'en' ? '🇺🇸' : '🇩🇪'}
      </span>
      <span className="text-sm">
        {locale === 'en' ? 'EN' : 'DE'}
      </span>
    </button>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CookieConsent() {
  const t = useTranslations('CookieConsent');
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-[360px] rounded-lg bg-[#353434] text-white p-4 shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
        <h5 className='mb-1 text-sm font-medium'>{t('heading')}</h5>
        <p className="text-xs text-gray-300">
            {t('message')}{' '}
            <Link
            href="/privacy"
            className="text-white underline"
            >
            {t('privacyLink')}
            </Link>
            .
        </p>
        <div className="flex gap-min justify-between mt-3">
            <button className='w-[72px] h-7 bg-transparent hover:underline transition-colors text-dark rounded-md font-medium text-sm cursor-pointer'>{t('settings')}</button>
            <div className="flex items-center gap-2">
                <button
                onClick={handleAccept}
                className="px-3 h-7 bg-transparent hover:bg-white/10 transition-colors text-dark rounded-md font-medium text-sm cursor-pointer"
                >
                {t('reject')}
                </button>
                <button
                onClick={handleAccept}
                className="px-3 h-7 bg-[#4E00D5] transition-colors text-dark rounded-md font-medium text-sm cursor-pointer"
                >
                {t('accept')}
                </button>
            </div>
        </div>
    </div>
  );
}

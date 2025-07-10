import React from 'react'
import { useState } from 'react';
import {useTranslations} from 'next-intl';

function Packagestags() {
  const t = useTranslations('HomePage');
  const packages_labels = t.raw('packages-labels') as { label: string; href: string }[];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="hidden lg:flex items-center justify-center gap-8 border-t border-b border-[#EFEFF0] h-[50px] fixed top-[68px] right-0 left-0 bg-white z-[1000]">
        {packages_labels.map((link, idx) => (
            <a href={link.href} key={idx} onClick={() => setActiveIndex(idx)} className={`text-sm leading-[19px] font-[600] font-inter transition duration-200 ${
            activeIndex === idx ? 'text-black' : 'text-[#717179]'
          }`}>{link.label}</a>
        ))}
    </div>
  )
}

export default Packagestags
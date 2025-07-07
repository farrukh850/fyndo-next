import React from 'react'
import {useTranslations} from 'next-intl';

function Packagestags() {
  const t = useTranslations('HomePage');
  const packages_labels = t.raw('packages-labels') as { label: string; href: string }[];
  return (
    <div className="hidden lg:flex items-center justify-center gap-8 border-t border-b border-[#EFEFF0] h-[50px] fixed top-[68px] right-0 left-0 bg-white z-[1000]">
        {packages_labels.map((link, idx) => (
            <p key={idx} className="text-sm leading-[19px] font-semibold text-black font-inter">{link.label}</p>
        ))}
    </div>
  )
}

export default Packagestags
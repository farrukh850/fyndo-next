import React from "react"
import FAQItems from "./FAQItems"
import {useTranslations} from 'next-intl';

function FAQ() {
  const t = useTranslations('HomePage');
  return (
    <section className="lg:py-32 mx-1 lg:mx-0 pt-7 pb-13 max-w-[1408p] px-4 bg-[#4E00D5] rounded-2xl">
        <div className="flex items-center justify-center gap-1">
            <img src="images/faq-icon.svg" alt="FAQ Icon" />
            <p className="text-[13px] leading-[15.6px] text-white uppercase">FAQ</p>
        </div>
        <h2 className="text-[43px] leading-[44px] lg:text-[47.63px] lg:leading-[60px] text-white font-bagoss text-center mt-6 tracking-[-1px]">{t('faq-heading')}</h2>

        <FAQItems />
    </section>
  )
}

export default FAQ
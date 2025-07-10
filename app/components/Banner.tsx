import React from "react"
import Video from "./Video"
import {useTranslations} from 'next-intl';
function Banner({ id }: { id: string }) {
  const t = useTranslations('HomePage');
  return (
    <section id={id} className="d-flex px-2.5 lg:px-0 flex-col pt-5 pb-2 lg:pt-[68px] lg:pb-[59px] bg-[#F7F6F3] rounded-bl-2xl rounded-br-2xl">
        <h1 className="max-w-[1115px] w-full mx-auto text-left lg:text-center h-auto lg:h-[131px] mb-6 text-[43px] leading-[44px] tracking-[-0.9px] lg:text-[60px] lg:leading-[63.84px] lg:tracking-[-2px] text-black font-bagoss whitespace-pre-line">{t('banner_title')}</h1>
        <p className="text-[18px] leading-[25.92px] mb-12 mt-8 lg:mt-0 max-w-[913px] w-full mx-auto text-left lg:text-center tracking-[-1%] text-[#4D4D4D] font-inter whitespace-pre-line">{t('banner_subtitle')}</p>
        <Video />
    </section>
  )
}

export default Banner
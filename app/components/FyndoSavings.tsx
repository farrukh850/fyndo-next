import React from "react"
import {useTranslations} from 'next-intl';

function FyndoSavings({ id }: { id: string }) {
  const t = useTranslations('HomePage');
  return (
    <section id={id} className="pt-7.5 px-2.5 lg:px-0 lg:pt-[111px] pb-[68px] lg:pb-[84px] lg:scroll-mt-[111px]">
        <h2 className="text-[43px] leading-[44px] tracking-[1px] lg:text-[50px] lg: lg:text-center font-bagoss mb-10 lg:mb-22 lg:leading-[63.84px] lg:tracking-[-1px] text-black text-left lg:whitespace-pre-line">{t('saving_heading')}</h2>
        <div className="flex flex-col lg:flex-row items-center gap-[60px] lg:gap-50 max-w-[1162px] mx-auto justify-center">
            <div className="flex flex-col gap-3.5 items-center max-w-[154px] w-full text-center">
                <small className="text-sm font-inter leading-[19.88px] tracking-[-1%] text-[#484848] whitespace-pre-line">{t('saving_one_headingone')}</small>
                <h3 className="text-[56.75px] font-bagoss-bold font-bagoss leading-[60px] tracking-[-1.92px] text-black">{t('saving_one_headingtwo')}</h3>
                <p className="text-[23.25px] font-bagoss leading-[25px] text-[#424242]">{t('saving_one_headingthree')}</p>
            </div>
            <div className="flex flex-col gap-3.5 items-center max-w-[209px] w-full text-center">
                <small className="text-sm font-inter leading-[19.88px] tracking-[-1%] text-[#484848] whitespace-pre-line">{t('saving_two_headingone')}</small>
                <h3 className="text-[56.75px] font-bagoss-bold font-bagoss leading-[60px] tracking-[-1.92px] text-black">{t('saving_two_headingtwo')}</h3>
                <p className="text-[23.25px] font-bagoss leading-[25px] text-[#424242]">{t('saving_two_headingthree')}</p>
            </div>
            <div className="flex flex-col gap-3.5 items-center max-w-[227px] w-full text-center">
                <small className="text-sm font-inter leading-[19.88px] tracking-[-1%] text-[#484848] whitespace-pre-line">{t('saving_three_headingone')}</small>
                <h3 className="text-[56.75px] font-bagoss-bold font-bagoss leading-[60px] tracking-[-1.92px] text-black">{t('saving_three_headingtwo')}</h3>
                <p className="text-[23.25px] font-bagoss leading-[25px] text-[#424242]">{t('saving_three_headingthree')}</p>
            </div>
        </div>
    </section>
  )
}

export default FyndoSavings
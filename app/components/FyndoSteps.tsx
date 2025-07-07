import React from "react"
import {useTranslations} from 'next-intl';

function FyndoSteps() {
  const t = useTranslations('HomePage');
  return (
    <section className="pt-[60px] px-2.5 lg:px-0 pb-[37px] lg:pb-[110px]">
        <div className="flex items-center justify-center gap-[9px]">
            <img src="/images/star.svg" alt="Star" />
            <p className="text-[11px] lg:text-[13px] leading-[15px] lg:leading-[15.6px] font-inter uppercase text-[#937DF2] font-medium">Fyndo in 3 Easy Steps</p>
        </div>
        <h2 className="text-[43px] leading-[44px] lg:text-[47.63px] mt-2 h-[164px] lg:leading-[60px] tracking-[-1px] text-black font-bagoss text-left lg:text-center whitespace-pre-line">{t('fyndo-steps-heading')}</h2>
        <p className="text-[15px] leading-5 lg:text-lg lg:leading-[25.92px] mt-8 lg:-mt-8 tracking-[-1%] text-[#4D4D4D] font-inter text-left lg:text-center whitespace-pre-line">{t('fyndo-steps-subheading')}</p>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-[67px] gap-11 max-w-[1140px] mx-auto">
            <div className="flex flex-col gap-[15px] flex-1 text-center lg:text-left">
                <div className="w-full h-[319px] rounded-2xl overflow-hidden">
                    <img src="images/step-img1.svg" className="w-full h-full object-cover" alt="Pick your Plan" />
                </div>
                <p className="w-6 h-6 bg-[#4E00D5] flex items-center justify-center text-xs leading-4 rounded-full text-white mx-auto lg:ml-0">1</p>
                <h6 className="text-base leading-6 text-black font-bagoss-bold">{t('fyndo-stepone-heading')}</h6>
                <p className="text-sm leading-[19px] text-[#717179] font-inter">{t('fyndo-stepone-subheading')}.</p>
            </div>
            <div className="flex flex-col gap-[15px] flex-1 text-center lg:text-left">
                <div className="w-full h-[319px] rounded-2xl overflow-hidden">
                    <img src="images/step-img2.svg" className="w-full h-full object-cover" alt="Pick your Plan" />
                </div>
                <p className="w-6 h-6 bg-[#4E00D5] flex items-center justify-center text-xs leading-4 font-inter rounded-full text-white mx-auto lg:ml-0">2</p>
                <h6 className="text-base leading-6 text-black font-bagoss-bold">{t('fyndo-steptwo-heading')}</h6>
                <p className="text-sm leading-[19px] text-[#717179] font-inter">{t('fyndo-steptwo-subheading')}</p>
            </div>
            <div className="flex flex-col gap-[15px] flex-1 text-center lg:text-left">
                <div className="w-full h-[319px] rounded-2xl overflow-hidden">
                    <img src="images/step-img3.svg" className="w-full h-full object-cover" alt="Pick your Plan" />
                </div>
                <p className="w-6 h-6 bg-[#4E00D5] flex items-center justify-center text-xs leading-4 font-inter rounded-full text-white mx-auto lg:ml-0">3</p>
                <h6 className="text-base leading-6 text-black font-bagoss-bold">{t('fyndo-stepthree-heading')}</h6>
                <p className="text-sm leading-[19px] text-[#717179] font-inter">{t('fyndo-stepthree-subheading')}</p>
            </div>
        </div>
    </section>
  )
}

export default FyndoSteps
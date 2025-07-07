import React from 'react'
import {useTranslations} from 'next-intl';

function FyndoDreams() {
  const t = useTranslations('HomePage');
  return (
    <section className="py-[34px] lg:pt-[57px] px-2.5 lg:px-0 lg:pb-[128px]">
                    <div className="flex items-center justify-center gap-[9px]">
                        <img src="images/star.svg" alt="Star" />
                        <p className="text-[11px] lg:text-[13px] leading-[15px] lg:leading-[15.6px] font-inter uppercase text-[#937DF2] font-medium">{t('biggie-small-heading')}</p>
                    </div>
                    <h2 className="text-[43px] leading-[44px] lg:text-[47.63px] mt-2 h-[164px] lg:leading-[60px] tracking-[-1px] text-black font-bagoss text-left lg:text-center whitespace-pre-line">{t('biggie-heading')}</h2>
                    <p className="text-[15px] leading-5 lg:text-lg lg:leading-[25.92px] mt-8 lg:-mt-8 tracking-[-1%] text-[#4D4D4D] font-inter text-left lg:text-center whitespace-pre-line">{t('biggie-subheading')}</p>
                    <div className="flex flex-col lg:flex-row items-stretch gap-4 justify-between mt-16 max-w-[1200px] mx-auto">
                        <div className="flex-[37%] pt-[47px] px-6 pb-6 bg-[#F7F6F3] rounded-xl">
                            <img src="images/fyndo-illustration-1.svg" alt="Illustration" className="mx-auto" />
                            <h5 className="mt-[26px] mb-1 text-base text-black leading-6 font-bagoss-bold">{t('biggie-card1-headingone')}</h5>
                            <p className="text-sm text-black leading-6 font-inter">{t('biggie-card1-headingtwo')}</p>
                        </div>
                        <div className="flex-[59%] flex-col-reverse lg:flex-row flex justify-between items-stretch gap-7 lg::gap-[33px] bg-[#F7F6F3] rounded-xl">
                            <div className="flex items-center flex-col justify-between flex-1">
                                <div className="flex flex-col gap-[11px] pt-0 lg:pt-[41px] px-6 pb-6">
                                    <small className="text-[13px] leading-[15.6px] text-[#ABABAB] uppercase font-inter">{t('biggie-card2-headingone')}</small>
                                    <h6 className="text-base leading-6 text-black font-bagoss-bold">{t('biggie-card2-headingtwo')}</h6>
                                </div>
                                <p className="text-sm leading06 leading-[-0.16px] text-[#404040] p-6 pt-0">{t('biggie-card2-headingthree')}</p>
                            </div>
                            <div className="flex-1 pt-[31px] lg:pr-[19px] lg:pb-[24px] flex justify-end">
                                <div className="w-[298px] mx-auto h-[425px] rounded-2xl overflow-hidden">
                                    <img src="images/fyndo-creators.png" className="w-full h-full object-cover" alt="Fyndo Creators" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-stretch flex-col lg:flex-row gap-4 justify-between mt-4 max-w-[1200px] mx-auto">
                        <div className="flex-[59%] flex-col lg:flex-row flex justify-between items-stretch gap-[33px] bg-[#F7F6F3] rounded-xl">
                            <div className="flex items-center flex-col justify-between flex-1">
                                <div className="flex flex-col gap-[11px] pt-[41px] px-6 pb-6">
                                    <small className="text-[13px] leading-[15.6px] text-[#ABABAB] uppercase font-inter">{t('biggie-card3-headingone')}</small>
                                    <h6 className="text-base leading-6 text-black font-bagoss-bold">{t('biggie-card3-headingtwo')}</h6>
                                </div>
                                <p className="text-sm leading06 leading-[-0.16px] text-[#404040] p-6 pt-0">{t('biggie-card3-headingthree')}</p>
                            </div>
                            <div className="flex-1 lg:pt-[31px] pt-0 lg:pr-[19px] pb-[24px] flex justify-end">
                                <div className="w-[298px] mx-auto h-[425px] rounded-2xl overflow-hidden">
                                    <img src="images/fyndo-central-hub.png" className="w-full h-full object-cover" alt="Fyndo Creators" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-[37%] pt-[47px] px-6 pb-6 bg-[#F7F6F3] rounded-xl">
                            <img src="images/fyndo-illustration-2.svg" alt="Illustration" className="mx-auto" />
                            <h5 className="mt-[26px] mb-1 text-base text-black leading-6 font-bagoss-bold">{t('biggie-card4-headingone')}</h5>
                            <p className="text-sm text-black leading-6 font-inter">{t('biggie-card4-headingtwo')}</p>
                        </div>
                    </div>
                </section>
  )
}

export default FyndoDreams
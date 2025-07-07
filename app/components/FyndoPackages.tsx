import React from "react"
import VideoPackages from "./VideoPackages";
import {useTranslations} from 'next-intl';
function FyndoPackages() {
  const t = useTranslations('HomePage');
  return (
    <section className="pt-[33px] px-2.5 lg:px-0 lg:pt-[60px] pb-0 lg:pb-[110px] bg-[#F7F6F3] rounded-2xl">
        <div className="flex items-center justify-center gap-[9px]">
            <img src="/images/star.svg" alt="Star" />
            <p className="text-[11px] lg:text-[13px] leading-[15px] lg:leading-[15.6px] font-inter uppercase text-[#937DF2] font-medium">{t('Easy_smalltitle')}</p>
        </div>
        <h2 className="text-[43px] leading-[44px] tracking-[1px] lg:text-[47.63px] mt-8 h-auto lg:h-[164px] lg:leading-[60px] lg:tracking-[-1px] text-black font-bagoss lg:text-center text-left whitespace-pre-line">{t('Easy_title')}</h2>
        <p className="text-[15px] leading-5 lg:text-lg lg:leading-[25.92px] mt-4 lg:-mt-8 tracking-[-1%] text-[#4D4D4D] font-inter text-left lg:text-center whitespace-pre-line">{t('Easy_subtitle')}</p>
        <div className="flex flex-col lg:flex-row items-stretch gap-2 mt-[59px] justify-end max-w-[1168px] mx-auto">
            <div className="flex-[54%]">
                <VideoPackages />
            </div>
            <div className="flex-[45%] h-full py-5 px-2.5 lg:pt-8 lg:pr-8 lg:pl-[35px] lg:pb-[22px] bg-black rounded-2xl">
                <div className="hidden lg:flex items-center justify-end gap-[5px] bg-transpaent lg:bg-white lg:justify-center w-[87px] h-[29px] rounded-lg">
                    <img src="/images/star-2.svg" alt="Purple star" className="hidden lg:block" />
                    <p className="text-[25px] leading-[43.2px] lg:text-[12.59px] lg:leading-[15.6px] font-inter font-medium text-white lg:text-black">€599,- </p>
                </div>
                <p className="block lg:hidden text-right text-[25px] leading-[43.2px] lg:text-[12.59px] lg:leading-[15.6px] font-inter font-medium text-white lg:text-black">€599,- </p>
                <h3 className="text-[37px] lg:text-4xl leading-[43px] font-bagoss text-white tracking-[-1px] mb-[11px] mt-[15px]">{t('estimation_heading')}</h3>
                <h4 className="text-sm lg:text-base leading-[22px] font-inter text-[#E5E3E3] tracking-[-0.32px]">{t('estimation_subheading')}</h4>
                <div className="flex flex-col gap-[29px] mt-[29px]">
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-[15px] lg:text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('estimation_list_itemoneheading')}</h5>
                            <p className="text-sm lg:text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px]">{t('estimation_list_itemonetext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('estimation_list_itemtwoheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px]">{t('estimation_list_itemtwotext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('estimation_list_itemthreeheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px]">{t('estimation_list_itemthreetext')}</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="w-full bg-white flex items-center gap-[5px] rounded-lg h-[39px] mt-[29px] justify-center"><p className="text-xs font-inter text-black font-semibold">Choose Your Estimation Package</p><img src="/images/arrow-up.svg" alt="Arrow rise" /></a>
            </div>

        </div>
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-2 mt-4 justify-end max-w-[1168px] mx-auto">
            <div className="flex-[45%] h-full px-2.5 py-5 lg:pt-8 lg:pr-8 lg:pl-[35px] lg:pb-[22px] bg-black rounded-2xl">
                <div className="hidden lg:flex items-center justify-end gap-[5px] bg-transpaent lg:bg-white lg:justify-center w-[87px] h-[29px] rounded-lg">
                    <img src="/images/star-2.svg" alt="Purple star" className="hidden lg:block" />
                    <p className="text-[25px] leading-[43.2px] lg:text-[12.59px] lg:leading-[15.6px] font-inter font-medium text-white lg:text-black">€599,- </p>
                </div>
                <p className="block lg:hidden text-right text-[25px] leading-[43.2px] lg:text-[12.59px] lg:leading-[15.6px] font-inter font-medium text-white lg:text-black">€599,- </p>
                <h3 className="text-[37px] lg:text-4xl leading-[43px] font-bagoss text-white tracking-[-1px] mb-[11px] mt-[15px]">{t('screening_heading')}</h3>
                <h4 className="text-sm lg:text-base leading-[22px] font-inter text-[#E5E3E3] tracking-[-0.32px]">{t('screening_subheading')}</h4>
                <div className="flex flex-col gap-[29px] mt-[29px]">
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-[15px] lg:text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('screening_list_itemoneheading')}</h5>
                            <p className="text-sm lg:text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px]">{t('screening_list_itemonetext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('screening_list_itemtwoheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px]">{t('screening_list_itemtwotext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('screening_list_itemthreeheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px]">{t('screening_list_itemthreetext')}</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="w-full bg-white flex items-center gap-[5px] rounded-lg h-[39px] mt-[29px] justify-center"><p className="text-xs font-inter text-black font-semibold">Choose Your Screening Package</p><img src="/images/arrow-up.svg" alt="Arrow rise" /></a>
            </div>
            <div className="flex-[54%]">
                <div className="w-full h-[564px] lg:h-[640px] rounded-2xl overflow-hidden relative">
                <iframe
                    src="https://iframe.mediadelivery.net/play/463100/9e9f9eae-1709-4b3a-921c-a6f175be0849?autoplay=false&loop=true&muted=true"
                    loading="lazy"
                    allow="autoplay"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default FyndoPackages
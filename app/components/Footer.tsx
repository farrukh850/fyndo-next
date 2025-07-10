import React from "react"
import {useTranslations} from 'next-intl';

function Footer({ id }: { id: string }) {
  const t = useTranslations('HomePage');
  const links = t.raw('footer-links') as { label: string; href: string }[];
  const linksmore = t.raw('footer-links-more') as { label: string; href: string }[];
  return (
  <footer id={id} className="bg-[#151413] mx-1 lg:mx-0 rounded-2xl max-w-[1408px] px-4 pb-3.5 pt-10.5 lg:pt-[106px] my-4 lg:pb-2.5">
            <div className="flex flex-col gap-3">
                <h2 className="text-[40px] leading-11 lg:text-[47.63px] text-center lg:leading-[60px] text-white font-bagoss whitespace-pre-line">{t('cta-heading')}</h2>
                <p className="text-sm leading-5 lg:text-lg text-center lg:leading-[25.92px] max-w-[688px] mx-auto text-[#B3B3B3] whitespace-pre-line font-[300]">{t('cta-text')}</p>
                <div className="flex items-center gap-3.5 justify-center mt-2">
                    <a href="#"><img src="/images/whatsapp.svg" alt="Whatsapp" /></a>
                    <a href="#"><img src="/images/telegram.svg" alt="Telegram" /></a>
                </div>
                <a href="#" className="w-[144px] h-[37px] bg-white text-black text-xs leading-[100%] rounded-[5px] flex items-center justify-center font-inter font-semibold mt-4 mx-auto">{t('cta-btn')}</a>
            </div>
            <div className="lg:pt-[58px] pt-[42px] bg-white rounded-xl mt-[54px] text-center">
                <a href="#" className="flex justify-center"><img src="/images/logo.svg" className="w-25" alt="Fyndo" /></a>
                <p className="text-sm leading-[23px] tracking-[-0.23] text-[#A1A1A1] mt-4 whitespace-pre-line">{t('footer-text')}</p>
                <div className="hidden lg:flex flex-wrap lg:flex-nowrap items-center gap-3 lg:gap-6 mt-7 justify-center pb-3 lg:pb-12 border-b border-[#F7F7F7] mx-6">
                    {links.map((link, idx) => (
                        <a
                        key={idx}
                        href={link.href}
                        className="text-[12.5px] leading-[26px] tracking-[-1%] font-inter text-[#A1A1A1]/60"
                        >
                        {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex justify-between items-center pb-6 px-6 pt-6">
                    <div className="flex items-center gap-4 flex-col-reverse lg:flex-row">
                        <small className="text-[13px] leading-[14px] tracking-[-0.14px] text-[#A1A1A1]">{t('copy-right')}</small>
                        <div className="flex gap-1 lg:gap-2 items-center">
                            {linksmore.map((link, index) => (
                                <div key={index} className="flex items-center gap-1 lg:gap-2">
                                {index > 0 && (
                                    <span className="w-1 h-1 bg-[#A1A1A1] rounded-full d-block" />
                                )}
                                <a
                                    href={link.href}
                                    className="text-[13px] leading-[14px] tracking-[-0.14px] text-[#A1A1A1]"
                                >
                                    {link.label}
                                </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-5">
                        <a href="#"><img src="/images/whatsapp.svg" className="w-5" alt="Whatsapp" /></a>
                        <a href="#"><img src="/images/telegram.svg" className="w-5" alt="Telegram" /></a>
                    </div>
                </div>
            </div>
  </footer>
  )
}

export default Footer
import { useRef, useState } from "react";
import VideoPackages from "./VideoPackages";
import {useTranslations} from 'next-intl';
function FyndoPackages({ id, idtwo }: { id: string; idtwo: string }) {
  const t = useTranslations('HomePage');
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      }
    };
  return (
    <section id={id} className="pt-[33px] px-2.5 lg:px-0 lg:pt-[60px] pb-0 lg:pb-[110px] bg-[#F7F6F3] rounded-2xl">
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
                <h3 className="text-[37px] lg:text-4xl leading-[43px] font-bagoss text-white tracking-[-1px] mb-[11px] mt-[15px] whitespace-pre-line">{t('estimation_heading')}</h3>
                <h4 className="text-sm lg:text-base leading-[22px] font-inter text-[#E5E3E3] tracking-[-0.32px] whitespace-pre-line">{t('estimation_subheading')}</h4>
                <div className="flex flex-col gap-[29px] mt-[29px]">
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-[15px] lg:text-base leading-[22.4px] font-inter text-white tracking-[-0.32px] whitespace-pre-line">{t('estimation_list_itemoneheading')}</h5>
                            <p className="text-sm lg:text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px] whitespace-pre-line">{t('estimation_list_itemonetext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px] whitespace-pre-line">{t('estimation_list_itemtwoheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px] whitespace-pre-line">{t('estimation_list_itemtwotext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px] whitespace-pre-line">{t('estimation_list_itemthreeheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px] whitespace-pre-line">{t('estimation_list_itemthreetext')}</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="w-full bg-white flex items-center gap-[5px] rounded-lg h-[39px] mt-[29px] justify-center"><p className="text-xs font-inter text-black font-semibold">{t('estimation_btn')}</p><img src="/images/arrow-up.svg" alt="Arrow rise" /></a>
            </div>

        </div>
        <div id={idtwo} className="flex flex-col-reverse lg:flex-row items-stretch gap-2 mt-4 justify-end max-w-[1168px] mx-auto">
            <div className="flex-[45%] h-full px-2.5 py-5 lg:pt-8 lg:pr-8 lg:pl-[35px] lg:pb-[22px] bg-black rounded-2xl">
                <div className="hidden lg:flex items-center justify-end gap-[5px] bg-transpaent lg:bg-white lg:justify-center w-[87px] h-[29px] rounded-lg">
                    <img src="/images/star-2.svg" alt="Purple star" className="hidden lg:block" />
                    <p className="text-[25px] leading-[43.2px] lg:text-[12.59px] lg:leading-[15.6px] font-inter font-medium text-white lg:text-black">€999,- </p>
                </div>
                <p className="block lg:hidden text-right text-[25px] leading-[43.2px] lg:text-[12.59px] lg:leading-[15.6px] font-inter font-medium text-white lg:text-black">€599,- </p>
                <h3 className="text-[37px] lg:text-4xl leading-[43px] font-bagoss text-white tracking-[-1px] mb-[11px] mt-[15px]">{t('screening_heading')}</h3>
                <h4 className="text-sm lg:text-base leading-[22px] font-inter text-[#E5E3E3] tracking-[-0.32px]">{t('screening_subheading')}</h4>
                <div className="flex flex-col gap-[29px] mt-[29px]">
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-[15px] lg:text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('screening_list_itemoneheading')}</h5>
                            <p className="text-sm lg:text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px] whitespace-pre-line">{t('screening_list_itemonetext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('screening_list_itemtwoheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px] whitespace-pre-line">{t('screening_list_itemtwotext')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/check.svg" alt="Check square" className="mt-1" />
                        <div className="flex flex-col gap-[7px]">
                            <h5 className="text-base leading-[22.4px] font-inter text-white tracking-[-0.32px]">{t('screening_list_itemthreeheading')}</h5>
                            <p className="text-base leading-[22.4px] font-inter text-[#A4A4A4] tracking-[-0.32px] whitespace-pre-line">{t('screening_list_itemthreetext')}</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="w-full bg-white flex items-center gap-[5px] rounded-lg h-[39px] mt-[29px] justify-center"><p className="text-xs font-inter text-black font-semibold">{t('screening_btn')}</p><img src="/images/arrow-up.svg" alt="Arrow rise" /></a>
            </div>
            <div className="flex-[54%]">
                <div className="w-full h-[564px] lg:h-[640px] rounded-2xl overflow-hidden relative">
                <video ref={videoRef} muted={isMuted} loop playsInline autoPlay className="w-full h-full object-cover rounded-2xl">
                    <source src="/images/fyndo_estimation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                 <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full"
            aria-label="Toggle sound"
        >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0A7.975 7.975 0 0112 6"
            />
          </svg>
        )}
        </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FyndoPackages
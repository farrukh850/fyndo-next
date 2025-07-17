import React from "react"
import {useTranslations} from 'next-intl';
function TechStacks() {
  const t = useTranslations('HomePage');
  return (
    <section className="pt-[74px] px-2.5 lg:px-0 pb-10 mb-10 max-w-[1408px] mx-auto bg-[#F7F6F3] rounded-2xl">
        <div className="flex items-center lg:justify-center gap-[9px]">
            <img src="/images/star.svg" alt="Star" />
            <p className="text-[11px] lg:text-[13px] leading-[15px] lg:leading-[15.6px] font-inter uppercase text-[#937DF2] font-medium">Fyndo’s Tech Arsenal</p>
        </div>
        <h2 className="text-[43px] leading-[44px] lg:text-[47.63px] mt-2 h-[164px] lg:leading-[55px] tracking-[-1px] text-black font-bagoss text-left lg:text-center lg:max-w-[50%] w-full mx-auto whitespace-pre-line">{t('tech-stack-heading')}</h2>
        <p className="text-[15px] leading-5 lg:text-lg lg:leading-[25.92px] mt-8 lg:-mt-8 tracking-[-1%] text-[#4D4D4D] font-inter text-left lg:text-center whitespace-pre-line font-[300]">{t('tech-stack-subheading')}</p>
            <div className="grid grid-cols-5 lg:grid-cols-16 gap-5 lg:gap-8 items-center mt-[26px] lg:mt-[75px] px-[13px]">
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon1.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon2.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon3.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon4.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon5.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon6.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon7.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon8.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon9.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon10.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon11.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon12.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon13.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon14.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon15.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon16.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon17.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon18.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon19.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon20.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon21.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon22.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon23.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon24.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon25.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon26.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon27.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon28.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon29.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon30.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon31.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon32.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon33.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon34.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon35.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon36.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon37.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon38.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon39.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon40.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon41.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon42.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon43.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon44.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon45.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon46.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon47.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon48.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon49.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon50.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon51.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon52.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon53.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon54.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon55.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon56.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon57.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon58.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon59.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon60.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon61.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon62.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon63.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon64.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon65.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon66.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon67.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon68.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon69.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon70.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon71.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon72.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon73.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon74.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon75.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon76.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon77.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon78.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon79.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon80.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon81.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon82.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon83.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon84.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon85.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon86.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon87.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon88.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon89.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon90.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon91.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon92.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon93.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon94.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon95.svg" className="w-full" alt="Tech Icon" />
              </div>
              <div className="col-span-1 rounded-2xl bg-white">
                  <img src="/images/tech-icon96.svg" className="w-full" alt="Tech Icon" />
              </div>
          </div>
        </section>
  )
}

export default TechStacks
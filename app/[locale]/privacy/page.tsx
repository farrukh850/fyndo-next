'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPage');
  const pathname = usePathname();

  const renderSection = (sectionKey: string) => {
    const section = t.raw(`privacy.sections.${sectionKey}`);
    
    return (
      <div key={sectionKey}>
        <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500]">
          {section.title}
        </p>
        {section.content && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter">
            {section.content}
          </p>
        )}
        {section.items && (
          <ul className="list-disc pl-7">
            {section.items.map((item: string, index: number) => (
              <li key={index} className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter">
                {item}
              </li>
            ))}
          </ul>
        )}
        {section.note && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter mt-2">
            {section.note}
          </p>
        )}
      </div>
    );
  };

  const renderTermsSection = (sectionKey: string) => {
    const section = t.raw(`terms.sections.${sectionKey}`);
    
    return (
      <div key={sectionKey}>
        <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500]">
          {section.title}
        </p>
        {section.content && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter">
            {section.content}
          </p>
        )}
        {section.items && (
          <ul className="list-disc pl-7">
            {section.items.map((item: string, index: number) => (
              <li key={index} className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter">
                {item}
              </li>
            ))}
          </ul>
        )}
        {section.note && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter mt-2">
            {section.note}
          </p>
        )}
      </div>
    );
  };

  const renderCookiesSection = (sectionKey: string) => {
    const section = t.raw(`cookies.sections.${sectionKey}`);
    
    return (
      <div key={sectionKey}>
        <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500]">
          {section.title}
        </p>
        {section.content && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter">
            {section.content}
          </p>
        )}
        {section.items && (
          <ul className="list-disc pl-7">
            {section.items.map((item: string, index: number) => (
              <li key={index} className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter">
                {item}
              </li>
            ))}
          </ul>
        )}
        {section.table && (
          <pre className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter bg-gray-100 p-4 rounded mt-2">
            {section.table}
          </pre>
        )}
        {section.email && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500] mt-2">
            {section.email}
          </p>
        )}
        {section.address && (
          <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter mt-2">
            {section.address}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="mt-[68px]">
      <div className="hidden lg:flex items-center justify-center gap-8 border-t border-b border-[#EFEFF0] h-[50px] fixed top-[68px] right-0 left-0 bg-white z-50">
        <a 
          href="#" 
          className={`text-sm leading-[19px] font-semibold font-inter ${pathname?.includes('#terms') || pathname?.includes('#cookies') ? 'text-[#717179]' : 'text-black'}`}
        >
          {t('navigation.privacy')}
        </a>
        <a 
          href="#terms" 
          className={`text-sm leading-[19px] font-semibold font-inter ${pathname?.includes('#terms') ? 'text-black' : 'text-[#717179]'}`}
        >
          {t('navigation.terms')}
        </a>
        <a 
          href="#cookies" 
          className={`text-sm leading-[19px] font-semibold font-inter ${pathname?.includes('#cookies') ? 'text-black' : 'text-[#717179]'}`}
        >
          {t('navigation.cookies')}
        </a>
      </div>

      <div className="bg-[#F7F6F3] rounded-bl-2xl rounded-br-2xl pt-7 lg:pt-[68px] pb-10 lg:pb-[144px] px-4">
        {/* Privacy Policy Section */}
        <div>
          <h1 className="text-4xl lg:text-[60px] leading-[63.84px] tracking-[-2px] text-black font-bagoss text-center">
            {t('privacy.title')}
          </h1>
          
          <div className="px-0 lg:px-[129px] pb-5 lg:pb-25 max-w-[1120px] mx-auto mt-5 lg:mt-20 flex flex-col gap-5 lg:gap-10">
            <div>
              <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500]">
                {t('privacy.title')}
              </p>
              <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter whitespace-pre-line">
                {t('privacy.effectiveDate')}
                <br />
                {t('privacy.intro')}
              </p>
            </div>

            {['whoWeAre', 'informationWeCollect', 'dataSharing', 'dataSecurity', 
              'yourRights', 'dataRetention', 'cookies', 'internationalTransfers', 
              'policyChanges'].map(renderSection)}
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div id="terms">
          <h1 className="text-4xl lg:text-[60px] leading-[63.84px] tracking-[-2px] text-black font-bagoss text-center">
            {t('terms.title')}
          </h1>
          
          <div className="px-0 lg:px-[129px] pb-5 lg:pb-25 max-w-[1120px] mx-auto mt-5 lg:mt-20 flex flex-col gap-5 lg:gap-10">
            <div>
              <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500]">
                {t('terms.title')}
              </p>
              <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter whitespace-pre-line">
                {t('terms.effectiveDate')}
                <br />
                {t('terms.intro')}
              </p>
            </div>

            {['services', 'eligibility', 'ordering', 'delivery', 'refunds', 
              'responsibilities', 'ip', 'warranties', 'liability', 
              'governingLaw', 'amendments'].map(renderTermsSection)}
          </div>
        </div>

        {/* Cookie Policy Section */}
        <div id="cookies">
          <h1 className="text-4xl lg:text-[60px] leading-[63.84px] tracking-[-2px] text-black font-bagoss text-center">
            {t('cookies.title')}
          </h1>
          
          <div className="px-0 lg:px-[129px] pb-5 lg:pb-25 max-w-[1120px] mx-auto mt-5 lg:mt-20 flex flex-col gap-5 lg:gap-10">
            <div>
              <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter font-[500]">
                {t('cookies.title')}
              </p>
              <p className="text-lg leading-[25.92px] text-[#4D4D4D] font-inter whitespace-pre-line">
                {t('cookies.effectiveDate')}
                <br />
                {t('cookies.intro')}
              </p>
            </div>

            {['whatAreCookies', 'cookieTypes', 'ourCookies', 'legalBasis', 
              'managingCookies', 'thirdParty', 'changes', 'contact'].map(renderCookiesSection)}
          </div>
        </div>
      </div>
    </div>
  );
}
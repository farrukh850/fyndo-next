'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';


export default function Accordion() {
  const t = useTranslations();
  const accordionData = t.raw('accordion') as { title: string; content: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-7.5 lg:mt-20 mt-8 max-w-[810px] mx-auto">
     {Array.isArray(accordionData) &&
      accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={clsx(
              'p-4 rounded-xl transition-colors duration-300 m-0',
              isOpen ? 'bg-white' : 'bg-transparent'
            )}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className={clsx(
                'w-full text-left text-base leading-6 tracking-[-0.4px] flex justify-between items-center cursor-pointer',
                isOpen ? 'text-gray-900' : 'text-white'
              )}
            >
              <span>{item.title}</span>
              <span
                className={clsx(
                  'text-2xl transform transition-transform duration-300',
                  isOpen && 'rotate-45'
                )}
              >
                +
              </span>
            </button>

            <div
              className={clsx(
                'mt-2 text-sm leading-[22.4px] whitespace-pre-line transition-all duration-300',
                isOpen ? 'block text-black' : 'hidden'
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}

    </div>
  );
}

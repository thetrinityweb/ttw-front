"use client";

import { useEffect } from "react";
import { LanguageDescriptor, useLanguageSwitcher } from "@/src/hooks/useLanguageSwitcher";
import { NextPageContext } from "next";
import { twMerge } from "tailwind-merge";

export const LanguageSwitcher = ({ context, isGradient }: { context?: NextPageContext; isGradient?: boolean } = {}) => {
  const { currentLanguage, switchLanguage, languageConfig } = useLanguageSwitcher({ context });

  useEffect(() => {
    // Initialize Google Translate when component mounts
    if (typeof window !== 'undefined' && (window as any).google?.translate) {
      const translateElement = new (window as any).google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'en,es,fr,de,it,ja,ko,zh',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    }
  }, []);

  if (!languageConfig) {
    return null;
  }

  return (
    <div className={twMerge("text-center notranslate text-base lg:text-lg flex gap-x-1 mr-4 font-semibold text-gray-900 border-gray-900", isGradient && "text-white border-white")}>
      {languageConfig.languages.map((ld: LanguageDescriptor) => (
        <span key={`l_s_${ld.name}`}>
          {currentLanguage === ld.name ? (
            <span className="cursor-not-allowed rounded-lg border p-1.5">{ld.name.toUpperCase()}</span>
          ) : (
            <a onClick={switchLanguage(ld.name)} className={twMerge("cursor-pointer rounded-lg p-1.5 border border-black/60 text-black/60", isGradient && "border-white/60 text-white/60")}>
              {ld.name.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 
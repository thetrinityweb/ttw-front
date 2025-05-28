"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
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

  return (
    <div id="google_translate_element" style={{ display: 'none' }}></div>
  );
} 
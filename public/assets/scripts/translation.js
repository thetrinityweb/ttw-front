function TranslateInit() {
  if (typeof google !== 'undefined' && google.translate) {
    new google.translate.TranslateElement({
      pageLanguage: 'pt',
      includedLanguages: 'en,es,fr,de,it,ja,ko,zh',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
  }
}

function protectMetadata() {
  const title = document.querySelector('title');
  if (title) {
    title.classList.add('notranslate');
  }
}
// Реестр курсов. path — относительно папки data/. tts — BCP-47 язык голоса (null — без озвучки).
// hidden: true — курс виден только при ?demo=1.
export default [
  { id: 'nb', name: 'Norsk bokmål', nameRu: 'Норвежский (букмол)', mode: 'review', path: './nb/index.js', tts: 'nb-NO', emblem: 'NB' },
  { id: 'la', name: 'Lingua Latina', nameRu: 'Латынь', mode: 'review', path: './la/index.js', tts: null, emblem: 'LA' },
  { id: 'ang', name: 'Ænglisc', nameRu: 'Древнеанглийский', mode: 'review', path: './ang/index.js', tts: null, emblem: 'ÆN' },
  { id: 'it', name: 'Italiano', nameRu: 'Итальянский', mode: 'review', path: './it/index.js', tts: 'it-IT', emblem: 'IT' },
  { id: 'sr', name: 'Српски / Srpski', nameRu: 'Сербский', mode: 'learn', path: './sr/index.js', tts: 'sr-RS', emblem: 'SR' },
  { id: 'demo', name: 'Demo', nameRu: 'Демо-курс (отладка)', mode: 'learn', path: './demo/index.js', tts: 'nb-NO', emblem: 'DE', hidden: true },
];

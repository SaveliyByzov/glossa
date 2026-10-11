import u01 from './u01.js';
import u01ex from './u01.ex.js';
import u02 from './u02.js';
import u02ex from './u02.ex.js';
import u03 from './u03.js';
import u03ex from './u03.ex.js';
import u04 from './u04.js';
import u04ex from './u04.ex.js';
import u05 from './u05.js';
import u05ex from './u05.ex.js';
import u06 from './u06.js';
import u06ex from './u06.ex.js';
import u07 from './u07.js';
import u07ex from './u07.ex.js';
import u08 from './u08.js';
import u08ex from './u08.ex.js';

export default {
  id: 'ang',
  name: 'Ænglisc',
  nameRu: 'Древнеанглийский',
  mode: 'review',
  level: 'поздний западносаксонский: проза → начало поэзии',
  keyboard: ['æ', 'þ', 'ð', 'ƿ', 'ā', 'ǣ', 'ē', 'ī', 'ō', 'ū', 'ȳ', 'ċ', 'ġ'],
  answer: {
    ignoreCase: true,
    // Макроны и точки необязательны: ā→a, ǣ→æ (НЕ a!), ē→e, ī→i, ō→o, ū→u, ȳ→y, ċ→c, ġ→g.
    // Снятие = удаление комбинируемого знака после NFD (U+0304 макрон, U+0307 точка сверху).
    optionalMarks: ['ā', 'ǣ', 'ē', 'ī', 'ō', 'ū', 'ȳ', 'ċ', 'ġ'],
    // ð и þ в рукописях взаимозаменяемы; ƿ (винн) = w; ȝ (иоговая g рукописей/изданий) = g.
    // æ НЕ приравнивается к a или e: это отдельная фонема (dæġ ≠ dag-).
    equivalents: [['ð', 'þ'], ['ƿ', 'w'], ['ȝ', 'g']],
    script: null
  },
  skills: {
    'ang.orth.letters': { name: 'Буквы þ/ð, æ, ƿ; макроны и точки', unit: 'ang-u01' },
    'ang.orth.pron': { name: 'Произношение: ċ/ġ, sc, cg, озвончение f/s/þ', unit: 'ang-u01' },
    'ang.pron.personal': { name: 'Личные местоимения (включая двойственное)', unit: 'ang-u01' },
    'ang.verb.beon': { name: 'Wesan и bēon', unit: 'ang-u01' },
    'ang.syntax.neg': { name: 'Отрицание: ne, слитные формы, многократное', unit: 'ang-u01' },
    'ang.reading': { name: 'Чтение текстов', unit: 'ang-u01' },
    'ang.dem.se': { name: 'Указательное se, sēo, þæt', unit: 'ang-u02' },
    'ang.case.use': { name: 'Функции падежей', unit: 'ang-u02' },
    'ang.prep': { name: 'Предлоги и управление', unit: 'ang-u02' },
    'ang.dem.thes': { name: 'Указательное þes, þēos, þis', unit: 'ang-u02' },
    'ang.pron.interrog': { name: 'Вопросительные hwā, hwæt, hwilċ', unit: 'ang-u02' },
    'ang.syntax.rel': { name: 'Относительные: þe, se, se þe', unit: 'ang-u02' },
    'ang.noun.a.masc': { name: 'Мужские a-основы (stān, dæġ)', unit: 'ang-u03' },
    'ang.noun.a.neut': { name: 'Средние a-основы (scip, word)', unit: 'ang-u03' },
    'ang.noun.o': { name: 'Женские ō-основы (ġiefu, lār)', unit: 'ang-u03' },
    'ang.verb.weak.pres': { name: 'Слабые глаголы: настоящее время', unit: 'ang-u04' },
    'ang.verb.weak.pret': { name: 'Слабые глаголы: претерит и причастие', unit: 'ang-u04' },
    'ang.verb.weak3': { name: 'Слабые глаголы III класса', unit: 'ang-u04' },
    'ang.verb.imper': { name: 'Повелительное наклонение', unit: 'ang-u04' },
    'ang.verb.nonfinite': { name: 'Инфинитивы, причастия, перифрастические формы', unit: 'ang-u04' },
    'ang.adj.strong': { name: 'Сильное склонение прилагательных', unit: 'ang-u05' },
    'ang.adj.weak': { name: 'Слабое склонение прилагательных', unit: 'ang-u05' },
    'ang.adj.compar': { name: 'Степени сравнения', unit: 'ang-u05' },
    'ang.adv': { name: 'Наречия', unit: 'ang-u05' },
    'ang.num': { name: 'Числительные', unit: 'ang-u05' },
    'ang.noun.n': { name: 'Слабые существительные (n-основы)', unit: 'ang-u06' },
    'ang.noun.root': { name: 'Корневые основы и основы на -nd', unit: 'ang-u06' },
    'ang.noun.u': { name: 'u-основы', unit: 'ang-u06' },
    'ang.noun.r': { name: 'Основы на -r и s-основы', unit: 'ang-u06' },
    'ang.verb.strong.ablaut': { name: 'Аблаут и основные формы сильных глаголов', unit: 'ang-u07' },
    'ang.verb.strong.1-2': { name: 'Сильные глаголы I–II классов', unit: 'ang-u07' },
    'ang.verb.strong.3-5': { name: 'Сильные глаголы III–V классов', unit: 'ang-u07' },
    'ang.verb.strong.6-7': { name: 'Сильные глаголы VI–VII классов', unit: 'ang-u07' },
    'ang.verb.strong.pres': { name: 'Спряжение сильных глаголов (умлаут, претерит)', unit: 'ang-u07' },
    'ang.verb.verner': { name: 'Грамматическое чередование (закон Вернера)', unit: 'ang-u07' },
    'ang.verb.pretpres': { name: 'Претерито-презентные глаголы', unit: 'ang-u08' },
    'ang.verb.anomalous': { name: 'Аномальные глаголы: dōn, gān, willan', unit: 'ang-u08' },
    'ang.verb.subj': { name: 'Сослагательное наклонение', unit: 'ang-u08' },
    'ang.syntax.order': { name: 'Порядок слов: V2, глагол в конце придаточного', unit: 'ang-u08' },
    'ang.poetry': { name: 'Поэзия: аллитерация, кеннинги', unit: 'ang-u08' }
  },
  units: [
    { ...u01, exercises: u01ex },
    { ...u02, exercises: u02ex },
    { ...u03, exercises: u03ex },
    { ...u04, exercises: u04ex },
    { ...u05, exercises: u05ex },
    { ...u06, exercises: u06ex },
    { ...u07, exercises: u07ex },
    { ...u08, exercises: u08ex }
  ]
};

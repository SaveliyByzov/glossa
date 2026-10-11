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
  id: 'nb',
  name: 'Norsk bokmål',
  nameRu: 'Норвежский (букмол)',
  mode: 'review',
  level: 'A1–B1',
  keyboard: ['æ', 'ø', 'å'],
  answer: {
    ignoreCase: true,
    optionalMarks: ['é', 'è', 'ê', 'ó', 'ò', 'ô'],
    equivalents: [],
    script: null
  },
  skills: {
    'nb.noun.gender': { name: 'Род существительных (en/ei/et)', unit: 'nb-u01' },
    'nb.noun.def': { name: 'Определённая форма ед. ч.', unit: 'nb-u01' },
    'nb.noun.plural': { name: 'Множественное число', unit: 'nb-u01' },
    'nb.noun.irregular': { name: 'Нерегулярные существительные', unit: 'nb-u01' },
    'nb.noun.genitive': { name: 'Генитив: -s и til', unit: 'nb-u01' },
    'nb.pron.personal': { name: 'Личные местоимения', unit: 'nb-u02' },
    'nb.verb.present': { name: 'Презенс и инфинитив с å', unit: 'nb-u02' },
    'nb.syntax.v2': { name: 'Порядок слов V2, инверсия', unit: 'nb-u02' },
    'nb.syntax.negation': { name: 'Позиция ikke в главном предложении', unit: 'nb-u02' },
    'nb.syntax.questions': { name: 'Вопросы; ja / jo / nei', unit: 'nb-u02' },
    'nb.num.time': { name: 'Числа и время по часам', unit: 'nb-u02' },
    'nb.adj.agreement': { name: 'Согласование прилагательного', unit: 'nb-u03' },
    'nb.adj.definite': { name: 'Двойная определённость, указательные', unit: 'nb-u03' },
    'nb.pron.possessive': { name: 'Притяжательные местоимения', unit: 'nb-u03' },
    'nb.adj.comparison': { name: 'Степени сравнения', unit: 'nb-u03' },
    'nb.verb.weak': { name: 'Слабые глаголы: 4 класса', unit: 'nb-u04' },
    'nb.verb.perfect': { name: 'Перфект или претерит', unit: 'nb-u04' },
    'nb.verb.strong': { name: 'Сильные и неправильные глаголы', unit: 'nb-u04' },
    'nb.verb.modal': { name: 'Модальные глаголы', unit: 'nb-u05' },
    'nb.verb.future': { name: 'Выражение будущего', unit: 'nb-u05' },
    'nb.verb.imperative': { name: 'Императив', unit: 'nb-u05' },
    'nb.verb.reflexive': { name: 'Возвратные глаголы', unit: 'nb-u05' },
    'nb.pron.reflexive-poss': { name: 'sin или hans/hennes/deres', unit: 'nb-u05' },
    'nb.syntax.subclause': { name: 'Придаточные и правило BIFF', unit: 'nb-u06' },
    'nb.conj.time-cond': { name: 'når / da / hvis / om', unit: 'nb-u06' },
    'nb.syntax.relative': { name: 'Относительные придаточные (som)', unit: 'nb-u06' },
    'nb.syntax.indirect': { name: 'Косвенный вопрос; придаточное в начале', unit: 'nb-u06' },
    'nb.verb.s-passive': { name: 's-пассив', unit: 'nb-u07' },
    'nb.verb.bli-passive': { name: 'bli-пассив и состояние', unit: 'nb-u07' },
    'nb.verb.s-verbs': { name: 'Отложительные и взаимные s-глаголы', unit: 'nb-u07' },
    'nb.syntax.det': { name: 'Формальное det; der/det', unit: 'nb-u07' },
    'nb.prep.time': { name: 'Предлоги времени', unit: 'nb-u08' },
    'nb.prep.place': { name: 'Место и направление', unit: 'nb-u08' },
    'nb.verb.particle': { name: 'Фразовые глаголы', unit: 'nb-u08' },
    'nb.verb.pluperfect': { name: 'Плюсквамперфект', unit: 'nb-u08' },
    'nb.verb.conditional': { name: 'Ирреальные условия', unit: 'nb-u08' }
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

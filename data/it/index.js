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

// Упражнения (uNN.ex.js) пишет методолог; когда файл появится:
// import u01ex from './u01.ex.js';  →  { ...u01, exercises: u01ex }

export default {
  id: 'it',
  name: 'Italiano',
  nameRu: 'Итальянский',
  mode: 'review',
  level: 'A1–B2',
  keyboard: ['à', 'è', 'é', 'ì', 'ò', 'ù'],
  answer: {
    ignoreCase: true,
    optionalMarks: [],
    // è и é НЕ взаимозаменяемы глобально: знак на конечной гласной обязателен (e «и» ≠ è «есть»).
    // Ошибка в направлении знака (perchè вместо perché) ловится общим правилом «почти верно»
    // либо явным вариантом в answers упражнения.
    equivalents: [],
    script: null,
    // Расширение контракта (см. docs/linguistics/it.md, §5): апостроф после гласной в конце слова
    // как замена ударения (машинописная традиция: e' = è, perche' = perchè, piu' = più).
    // Применяется к вводу и к эталону одинаково. Если движок поле не знает — оно просто игнорируется.
    apostropheAccent: { "a'": 'à', "e'": 'è', "i'": 'ì', "o'": 'ò', "u'": 'ù' }
  },
  skills: {
    'it.noun.gender':        { name: 'Род существительных', unit: 'it-u01' },
    'it.noun.plural':        { name: 'Множественное число существительных', unit: 'it-u01' },
    'it.art.def':            { name: 'Определённый артикль', unit: 'it-u01' },
    'it.art.indef':          { name: 'Неопределённый артикль', unit: 'it-u01' },
    'it.adj.agree':          { name: 'Согласование и позиция прилагательных', unit: 'it-u01' },
    'it.verb.essere-avere':  { name: 'Essere и avere', unit: 'it-u01' },
    'it.ce-ci-sono':         { name: 'C’è / ci sono', unit: 'it-u01' },

    'it.pres.regular':       { name: 'Презенс: правильные глаголы', unit: 'it-u02' },
    'it.pres.isc':           { name: 'Презенс: глаголы на -isc-', unit: 'it-u02' },
    'it.pres.irregular':     { name: 'Презенс: неправильные глаголы', unit: 'it-u02' },
    'it.pres.modal':         { name: 'Модальные глаголы и sapere', unit: 'it-u02' },
    'it.pres.reflexive':     { name: 'Возвратные глаголы', unit: 'it-u02' },

    'it.prep.simple':        { name: 'Простые предлоги', unit: 'it-u03' },
    'it.prep.place':         { name: 'a / in с названиями мест', unit: 'it-u03' },
    'it.prep.articulated':   { name: 'Слитные предлоги', unit: 'it-u03' },
    'it.poss':               { name: 'Притяжательные', unit: 'it-u03' },
    'it.dem':                { name: 'Questo / quello', unit: 'it-u03' },
    'it.partitive':          { name: 'Партитив и неопределённое количество', unit: 'it-u03' },

    'it.pp.form':            { name: 'Passato prossimo: образование', unit: 'it-u04' },
    'it.pp.irregular':       { name: 'Неправильные причастия', unit: 'it-u04' },
    'it.pp.aux':             { name: 'Выбор essere / avere', unit: 'it-u04' },
    'it.pp.agree-subj':      { name: 'Согласование причастия с подлежащим', unit: 'it-u04' },

    'it.impf.form':          { name: 'Imperfetto: формы', unit: 'it-u05' },
    'it.impf.vs-pp':         { name: 'Imperfetto или passato prossimo', unit: 'it-u05' },
    'it.trapassato':         { name: 'Trapassato prossimo', unit: 'it-u05' },
    'it.gerund.progressive': { name: 'Stare + gerundio, stare per', unit: 'it-u05' },

    'it.pron.direct':        { name: 'Прямые местоимения и согласование причастия', unit: 'it-u06' },
    'it.pron.indirect':      { name: 'Косвенные местоимения', unit: 'it-u06' },
    'it.piacere':            { name: 'Piacere и подобные глаголы', unit: 'it-u06' },
    'it.pron.ci':            { name: 'Местоимение ci', unit: 'it-u06' },
    'it.pron.ne':            { name: 'Местоимение ne', unit: 'it-u06' },
    'it.pron.combined':      { name: 'Сочетания местоимений (glielo, me ne)', unit: 'it-u06' },
    'it.imperative':         { name: 'Императив', unit: 'it-u06' },
    'it.imperative.pron':    { name: 'Императив с местоимениями', unit: 'it-u06' },

    'it.fut.form':           { name: 'Futuro semplice', unit: 'it-u07' },
    'it.fut.anteriore':      { name: 'Futuro anteriore и эпистемический futuro', unit: 'it-u07' },
    'it.cond.form':          { name: 'Condizionale presente', unit: 'it-u07' },
    'it.cond.passato':       { name: 'Condizionale passato, будущее в прошедшем', unit: 'it-u07' },
    'it.subj.pres.form':     { name: 'Congiuntivo presente: формы', unit: 'it-u07' },
    'it.subj.triggers':      { name: 'Когда нужен congiuntivo', unit: 'it-u07' },
    'it.subj.passato':       { name: 'Congiuntivo passato', unit: 'it-u07' },

    'it.subj.impf':          { name: 'Congiuntivo imperfetto', unit: 'it-u08' },
    'it.subj.trap':          { name: 'Congiuntivo trapassato', unit: 'it-u08' },
    'it.concordanza':        { name: 'Согласование времён', unit: 'it-u08' },
    'it.hyp.period':         { name: 'Условные предложения (periodo ipotetico)', unit: 'it-u08' },
    'it.si.impers':          { name: 'Безличное si', unit: 'it-u08' },
    'it.si.passive':         { name: 'Пассивное si и пассив', unit: 'it-u08' },
    'it.passato-remoto':     { name: 'Passato remoto (распознавание)', unit: 'it-u08' }
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
}

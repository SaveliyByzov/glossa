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
  id: 'la',
  name: 'Lingua Latīna',
  nameRu: 'Латынь',
  mode: 'review',
  level: 'от основ до адаптированной классической прозы',
  keyboard: ['ā', 'ē', 'ī', 'ō', 'ū', 'ȳ'],
  answer: {
    ignoreCase: true,
    // макроны при вводе необязательны: ā → a и т. д.
    optionalMarks: ['ā', 'ē', 'ī', 'ō', 'ū', 'ȳ', 'Ā', 'Ē', 'Ī', 'Ō', 'Ū', 'Ȳ'],
    // курс пишет i и v; ввод j вместо i и u вместо v тоже принимается
    equivalents: [['j', 'i'], ['v', 'u']],
    script: null
  },
  skills: {
    'la.phon.stress': { name: 'Долготы и ударение', unit: 'la-u01' },
    'la.case.functions': { name: 'Функции падежей', unit: 'la-u01' },
    'la.noun.decl1': { name: '1-е склонение', unit: 'la-u01' },
    'la.noun.decl2': { name: '2-е склонение', unit: 'la-u01' },
    'la.verb.praes12': { name: 'Praesens 1–2 спряжений', unit: 'la-u01' },
    'la.verb.esse': { name: 'Глагол esse', unit: 'la-u01' },
    'la.adj.12': { name: 'Прилагательные 1–2 склонения, согласование', unit: 'la-u01' },
    'la.verb.praes34': { name: 'Praesens 3-го, 3-iō и 4-го спряжений', unit: 'la-u02' },
    'la.verb.imper': { name: 'Императив и запрет (nōlī + inf.)', unit: 'la-u02' },
    'la.verb.impf': { name: 'Imperfectum', unit: 'la-u02' },
    'la.verb.posse': { name: 'Глагол possum', unit: 'la-u02' },
    'la.verb.fut1': { name: 'Futurum I', unit: 'la-u02' },
    'la.noun.decl3cons': { name: '3-е склонение: согласный тип, род', unit: 'la-u03' },
    'la.noun.decl3i': { name: '3-е склонение: i-основы', unit: 'la-u03' },
    'la.prep': { name: 'Предлоги и их управление', unit: 'la-u03' },
    'la.case.abl': { name: 'Функции аблатива', unit: 'la-u03' },
    'la.syntax.placetime': { name: 'Место и время; локатив', unit: 'la-u03' },
    'la.verb.perfstem': { name: 'Типы основы перфекта', unit: 'la-u04' },
    'la.verb.perf': { name: 'Perfectum activi', unit: 'la-u04' },
    'la.verb.plpf': { name: 'Plusquamperfectum', unit: 'la-u04' },
    'la.verb.fut2': { name: 'Futurum II и относительное время', unit: 'la-u04' },
    'la.verb.irreg': { name: 'Неправильные глаголы: eō, ferō, volō, nōlō, mālō', unit: 'la-u04' },
    'la.pron.pers': { name: 'Личные и притяжательные местоимения', unit: 'la-u05' },
    'la.pron.refl': { name: 'Возвратность: suus vs eius', unit: 'la-u05' },
    'la.syntax.question': { name: 'Вопрос: -ne, nōnne, num', unit: 'la-u05' },
    'la.pron.dem': { name: 'Указательные местоимения', unit: 'la-u05' },
    'la.pron.rel': { name: 'Относительное местоимение quī', unit: 'la-u05' },
    'la.pron.interr': { name: 'Вопросительные и неопределённые местоимения', unit: 'la-u05' },
    'la.noun.decl4': { name: '4-е склонение', unit: 'la-u05' },
    'la.noun.decl5': { name: '5-е склонение', unit: 'la-u05' },
    'la.adj.3': { name: 'Прилагательные 3-го склонения', unit: 'la-u06' },
    'la.adj.comp': { name: 'Степени сравнения и конструкции сравнения', unit: 'la-u06' },
    'la.adv': { name: 'Наречия и их степени', unit: 'la-u06' },
    'la.num': { name: 'Числительные', unit: 'la-u06' },
    'la.adj.pronom': { name: 'Местоименные прилагательные (UNUS NAUTA)', unit: 'la-u06' },
    'la.verb.pass.inf': { name: 'Пассив системы инфекта', unit: 'la-u07' },
    'la.case.agent': { name: 'Деятель и орудие при пассиве', unit: 'la-u07' },
    'la.verb.pass.perf': { name: 'Пассив системы перфекта', unit: 'la-u07' },
    'la.verb.dep': { name: 'Отложительные и полуотложительные глаголы', unit: 'la-u07' },
    'la.part': { name: 'Причастия', unit: 'la-u07' },
    'la.syntax.ablabs': { name: 'Ablativus absolutus', unit: 'la-u07' },
    'la.verb.infin': { name: 'Инфинитивы', unit: 'la-u07' },
    'la.syntax.aci': { name: 'Accusativus cum infinitivo', unit: 'la-u07' },
    'la.syntax.nci': { name: 'Nominativus cum infinitivo', unit: 'la-u07' },
    'la.subj.forms': { name: 'Формы конъюнктива', unit: 'la-u08' },
    'la.subj.indep': { name: 'Независимый конъюнктив', unit: 'la-u08' },
    'la.syntax.cond': { name: 'Условные периоды', unit: 'la-u08' },
    'la.syntax.ut': { name: 'Придаточные с ut / nē / quīn', unit: 'la-u08' },
    'la.syntax.cum': { name: 'Союз cum с конъюнктивом', unit: 'la-u08' },
    'la.syntax.consec': { name: 'Consecutio temporum', unit: 'la-u08' },
    'la.syntax.indq': { name: 'Косвенный вопрос', unit: 'la-u08' },
    'la.gerund': { name: 'Герундий, герундив, описательное спряжение', unit: 'la-u08' }
  },
  units: [
    { ...u01, exercises: u01ex }, { ...u02, exercises: u02ex }, { ...u03, exercises: u03ex }, { ...u04, exercises: u04ex },
    { ...u05, exercises: u05ex }, { ...u06, exercises: u06ex }, { ...u07, exercises: u07ex }, { ...u08, exercises: u08ex }
  ]
};

export default {
  id: 'ang-u03',
  title: 'Stān, scip, lār',
  titleRu: 'Сильные существительные: a- и ō-основы',
  summary: 'Самые частотные типы склонения: мужские и средние a-основы, женские ō-основы. Чередование æ/a, синкопа, различие кратко- и долгосложных основ. Чтение — Англосаксонская хроника о Хенгесте и Хорсе.',
  lessons: [
    {
      id: 'ang-u03-l01',
      kind: 'grammar',
      title: 'Мужской род: stān, dæġ, ende',
      goals: ['Склонять мужские a-основы', 'Учитывать чередование æ/a (dæġ — dagas)', 'Узнавать синкопу (engel — englas)'],
      skills: ['ang.noun.a.masc'],
      theory: [
        { type: 'p', text: '«Сильное» склонение — исторически склонение на гласную основы (*-a-, *-ō-, *-i-, *-u-*). К a-основам принадлежит большинство существительных мужского и среднего рода.' },
        { type: 'table', caption: 'Мужские a-основы', head: ['', 'stān «камень»', 'dæġ «день»', 'ende «конец»'],
          rows: [
            ['ед. им.', 'stān', 'dæġ', 'ende'],
            ['вин.', 'stān', 'dæġ', 'ende'],
            ['род.', 'stān{{es}}', 'dæġ{{es}}', 'end{{es}}'],
            ['дат.', 'stān{{e}}', 'dæġ{{e}}', 'ende'],
            ['мн. им./вин.', 'stān{{as}}', 'dag{{as}}', 'end{{as}}'],
            ['род.', 'stān{{a}}', 'dag{{a}}', 'end{{a}}'],
            ['дат.', 'stān{{um}}', 'dag{{um}}', 'end{{um}}']
          ],
          note: 'Творительный ед. совпадает с дательным (stāne). ende — ja-основа: -e в им. ед., дальше как stān.' },
        { type: 'rule', text: 'Окончания мужских a-основ: **ед. — / — / -es / -e**, **мн. -as / -as / -a / -um**. Им. = вин. в обоих числах.' },
        { type: 'rule', text: 'Перед гласным заднего ряда (**a, o, u**) в следующем слоге **æ → a**: dæġ — **dagas, daga, dagum**; но dæġes, dæġe (перед e) сохраняют æ.' },
        { type: 'rule', text: '**Синкопа**: в двусложных словах с долгим первым слогом второй гласный выпадает перед окончанием, начинающимся с гласной: **engel → englas**, **dryhten → dryhtnes**. После краткого слога — нет: **heofon → heofonas**.' },
        { type: 'pitfall', text: '**here** «войско» — ja-основа с -ġ- в косвенных формах: herġes, herġe, herġas. **æt hām** «дома» — дательный без окончания (застывший местный падеж).' },
        { type: 'contrast', text: '**-as** мн. ч. — источник совр. английского -s (stones), а род. **-es** — притяжательного **’s** (the king’s). В русском им. и вин. неодушевлённых тоже совпадают (камень/камень), но у древнеанглийского это правило для всех a-основ, включая одушевлённые: **Hē ġeseah þone wer** «он увидел мужа».' },
        { type: 'tip', text: 'Нем. Stein, Steine — Tag, Tage; разница в том, что немецкий дал -e, а английский — -s.' }
      ],
      vocab: [
        { id: 'ang-stan', w: 'stān', ru: 'камень', pos: 'n', g: 'm', forms: 'stān, -es m. (a-основа)', ex: 'Se stān is heard.', exRu: 'Камень твёрд.', note: 'Совр. stone, нем. Stein.' },
        { id: 'ang-wulf', w: 'wulf', ru: 'волк', pos: 'n', g: 'm', forms: 'wulf, -es m. (a-основа)', ex: 'Þā wulfas wǣron on þǣm wuda.', exRu: 'Волки были в лесу.', note: null },
        { id: 'ang-hund', w: 'hund', ru: 'собака', pos: 'n', g: 'm', forms: 'hund, -es m. (a-основа)', ex: 'Se hund is mīn.', exRu: 'Это моя собака.', note: 'Совр. hound, нем. Hund. Не путать с hund n. «сто».' },
        { id: 'ang-wer', w: 'wer', ru: 'муж, мужчина', pos: 'n', g: 'm', forms: 'wer, -es m. (a-основа)', ex: 'Hē wæs wīs wer.', exRu: 'Он был мудрым мужем.', note: 'Ср. werewolf, лат. vir.' },
        { id: 'ang-dom', w: 'dōm', ru: 'суд, приговор; слава', pos: 'n', g: 'm', forms: 'dōm, -es m. (a-основа)', ex: 'Se cyning dēmde rihtne dōm.', exRu: 'Король вынес справедливый приговор.', note: 'Совр. doom; суффикс -dom (kingdom).' },
        { id: 'ang-ham', w: 'hām', ru: 'дом, родина', pos: 'n', g: 'm', forms: 'hām, -es m. (a-основа)', ex: 'Hē fōr hām.', exRu: 'Он поехал домой.', note: 'Вин. без предлога — «домой»; æt hām — «дома».' },
        { id: 'ang-ende', w: 'ende', ru: 'конец', pos: 'n', g: 'm', forms: 'ende, -es m. (ja-основа)', ex: 'æt þǣm ende', exRu: 'в конце', note: null },
        { id: 'ang-here', w: 'here', ru: 'войско (особ. вражеское, датское)', pos: 'n', g: 'm', forms: 'here, herġes m. (ja-основа; мн. herġas)', ex: 'Se here cōm on Englaland.', exRu: 'Войско пришло в Англию.', note: 'Нем. Heer. Своё войско — fierd, f.' },
        { id: 'ang-sith', w: 'sīþ', ru: 'путь, поход; раз', pos: 'n', g: 'm', forms: 'sīþ, -es m. (a-основа)', ex: 'ōþre sīþe', exRu: 'во второй раз', note: null },
        { id: 'ang-engel', w: 'engel', ru: 'ангел', pos: 'n', g: 'm', forms: 'engel, engles m. (a-основа; мн. englas)', ex: 'Godes englas', exRu: 'ангелы Божьи', note: 'Синкопа.' },
        { id: 'ang-dryhten', w: 'dryhten', ru: 'господь; повелитель', pos: 'n', g: 'm', forms: 'dryhten, dryhtnes m. (a-основа)', ex: 'Dryhten is gōd.', exRu: 'Господь благ.', note: 'Также drihten.' }
      ],
      text: null
    },
    {
      id: 'ang-u03-l02',
      kind: 'grammar',
      title: 'Средний род: scip и word',
      goals: ['Склонять средние a-основы', 'Выбирать -u или нулевое окончание во мн. ч.', 'Не путать средний и мужской род во мн. ч.'],
      skills: ['ang.noun.a.neut'],
      theory: [
        { type: 'table', caption: 'Средние a-основы', head: ['', 'scip «корабль»', 'word «слово»', 'fæt «сосуд»'],
          rows: [
            ['ед. им./вин.', 'scip', 'word', 'fæt'],
            ['род.', 'scip{{es}}', 'word{{es}}', 'fæt{{es}}'],
            ['дат.', 'scip{{e}}', 'word{{e}}', 'fæt{{e}}'],
            ['мн. им./вин.', 'scip{{u}}', 'word', 'fat{{u}}'],
            ['род.', 'scip{{a}}', 'word{{a}}', 'fat{{a}}'],
            ['дат.', 'scip{{um}}', 'word{{um}}', 'fat{{um}}']
          ] },
        { type: 'rule', text: 'Средний род отличается от мужского **только в им./вин. мн.**: кратко­сложные основы получают **-u** (scipu, fatu), долго­сложные — **нулевое окончание** (word, hūs, ġēar, wīf, land).' },
        { type: 'p', text: 'Слог долгий, если в нём долгий гласный (**hūs**) или краткий + два согласных (**word**, **land**). Двусложные с долгим первым слогом ведут себя как краткие: **hēafod → hēafdu**.' },
        { type: 'contrast', text: 'Как в русском и во всех индоевропейских языках, у среднего рода им. = вин. и в ед., и во мн. ч. (окно — окно, окна — окна).' },
        { type: 'pitfall', text: '**word** может быть ед. и мн. ч.: *þās word* «эти слова» — число видно только по указательному или глаголу. В поздних текстах встречается **-u/-o** и у долгих основ, а в XI в. — даже **-as** (wordas).' },
        { type: 'tip', text: 'Нулевое мн. ч. долгих средних — источник совр. **sheep — sheep**, **deer — deer** (dēor «зверь» — средний род).' }
      ],
      vocab: [
        { id: 'ang-word', w: 'word', ru: 'слово', pos: 'n', g: 'n', forms: 'word, -es n. (a-основа; мн. word)', ex: 'Hē spræc fēa word.', exRu: 'Он сказал немного слов.', note: null },
        { id: 'ang-bearn', w: 'bearn', ru: 'дитя, сын', pos: 'n', g: 'n', forms: 'bearn, -es n. (a-основа; мн. bearn)', ex: 'Godes bearn', exRu: 'Божьи дети', note: 'Шотл. bairn.' },
        { id: 'ang-deor', w: 'dēor', ru: 'зверь, животное', pos: 'n', g: 'n', forms: 'dēor, -es n. (a-основа; мн. dēor)', ex: 'Þā dēor wǣron on þǣm wuda.', exRu: 'Звери были в лесу.', note: 'Совр. deer, нем. Tier.' },
        { id: 'ang-hors', w: 'hors', ru: 'конь, лошадь', pos: 'n', g: 'n', forms: 'hors, -es n. (a-основа; мн. hors)', ex: 'Hē rād on his horse.', exRu: 'Он ехал на своём коне.', note: null },
        { id: 'ang-sweord', w: 'sweord', ru: 'меч', pos: 'n', g: 'n', forms: 'sweord, -es n. (a-основа; мн. sweord)', ex: 'Þæt sweord is scearp.', exRu: 'Меч острый.', note: 'Нем. Schwert.' },
        { id: 'ang-lif', w: 'līf', ru: 'жизнь', pos: 'n', g: 'n', forms: 'līf, -es n. (a-основа)', ex: 'ēċe līf', exRu: 'вечная жизнь', note: 'f в дат. līfe — [v].' },
        { id: 'ang-gold', w: 'gold', ru: 'золото', pos: 'n', g: 'n', forms: 'gold, -es n. (a-основа)', ex: 'Hē ġeaf him gold.', exRu: 'Он дал ему золото.', note: null },
        { id: 'ang-faet', w: 'fæt', ru: 'сосуд', pos: 'n', g: 'n', forms: 'fæt, -es n. (a-основа; мн. fatu)', ex: 'Þæt fæt is full.', exRu: 'Сосуд полон.', note: 'Совр. vat. Чередование æ/a.' },
        { id: 'ang-heafod', w: 'hēafod', ru: 'голова', pos: 'n', g: 'n', forms: 'hēafod, -es n. (a-основа; мн. hēafdu)', ex: 'Hē āhōf his hēafod.', exRu: 'Он поднял голову.', note: 'Совр. head.' },
        { id: 'ang-waeter', w: 'wæter', ru: 'вода', pos: 'n', g: 'n', forms: 'wæter, -es n. (a-основа; мн. wæteru)', ex: 'Se fisc is on þǣm wætere.', exRu: 'Рыба в воде.', note: null },
        { id: 'ang-treow', w: 'trēow', ru: 'дерево', pos: 'n', g: 'n', forms: 'trēow, -es n. (wa-основа; мн. trēow)', ex: 'under þǣm trēowe', exRu: 'под деревом', note: 'Совр. tree. Не путать с trēow f. «верность».' }
      ],
      text: null
    },
    {
      id: 'ang-u03-l03',
      kind: 'grammar',
      title: 'Женский род: ġiefu и lār',
      goals: ['Склонять женские ō-основы', 'Различать краткие (ġiefu) и долгие (lār) основы', 'Узнавать суффиксы -ung, -nes, -þu'],
      skills: ['ang.noun.o'],
      theory: [
        { type: 'table', caption: 'Женские ō-основы', head: ['', 'ġiefu «дар»', 'lār «учение»'],
          rows: [
            ['ед. им.', 'ġief{{u}}', 'lār'],
            ['вин.', 'ġief{{e}}', 'lār{{e}}'],
            ['род.', 'ġief{{e}}', 'lār{{e}}'],
            ['дат.', 'ġief{{e}}', 'lār{{e}}'],
            ['мн. им./вин.', 'ġief{{a}}, -e', 'lār{{a}}, -e'],
            ['род.', 'ġief{{a}} (-ena)', 'lār{{a}} (-ena)'],
            ['дат.', 'ġief{{um}}', 'lār{{um}}']
          ],
          note: 'Поздн. ġifu, ġyfu. Род. мн. -ena — по образцу слабого склонения.' },
        { type: 'rule', text: 'В ед. ч. всё, кроме им., оканчивается на **-e**. Краткие основы имеют **-u** в им. ед., долгие — нулевое окончание.' },
        { type: 'p', text: 'Сюда относятся продуктивные абстрактные суффиксы: **-ung/-ing** (leornung «учение», costnung), **-nes/-nis** (mildheortnes «милосердие»; род. -nesse, мн. -nessa), **-þu/-þ** (strengþu «сила», mǣġþ «род, племя»).' },
        { type: 'pitfall', text: 'Женские **i-основы** (cwēn, tīd, dǣd, wyrd) склоняются почти так же, но вин. ед. часто без окончания: **þā cwēn** — не *þā cwēne*. Различать их на практике помогает указательное: þā (вин. ж.) vs þǣre (род./дат. ж.).' },
        { type: 'contrast', text: 'Слияние трёх косвенных падежей в -e — как в русском «женском» склонении на -ь (ночь: ночи, ночи, ночи — род., дат., предл.). Различать падеж приходится по артиклю: **þǣre lāre** (род./дат.), **þā lāre** (вин.).' },
        { type: 'tip', text: 'lār → lore; sorg → sorrow; ċeaster → -chester, -caster (Winchester, Lancaster) < лат. castra.' }
      ],
      vocab: [
        { id: 'ang-lar', w: 'lār', ru: 'учение, наставление', pos: 'n', g: 'f', forms: 'lār, -e f. (ō-основа)', ex: 'for lāre', exRu: 'ради учения', note: 'Совр. lore, нем. Lehre.' },
        { id: 'ang-giefu', w: 'ġiefu', ru: 'дар; милость', pos: 'n', g: 'f', forms: 'ġiefu, -e f. (ō-основа)', ex: 'þurh Godes ġiefe', exRu: 'по милости Божией', note: 'Поздн. ġifu, ġyfu.' },
        { id: 'ang-lufu', w: 'lufu', ru: 'любовь', pos: 'n', g: 'f', forms: 'lufu, lufe (lufan) f. (ō-основа)', ex: 'for Godes lufan', exRu: 'ради любви Божией', note: 'Часть форм — по слабому типу.' },
        { id: 'ang-sawol', w: 'sāwol', ru: 'душа', pos: 'n', g: 'f', forms: 'sāwol, sāwle f. (ō-основа)', ex: 'for his sāwle', exRu: 'ради его души', note: 'Синкопа: sāwle. Совр. soul.' },
        { id: 'ang-stow', w: 'stōw', ru: 'место', pos: 'n', g: 'f', forms: 'stōw, -e f. (wō-основа)', ex: 'in þǣre stōwe', exRu: 'в том месте', note: 'В топонимах -stow (Bristol < Brycg-stōw).' },
        { id: 'ang-ar', w: 'ār', ru: 'честь; милость; имущество', pos: 'n', g: 'f', forms: 'ār, -e f. (ō-основа)', ex: 'Godes ār', exRu: 'милость Божья', note: 'Омонимы: ār n. «медь», ār f. «весло».' },
        { id: 'ang-sorg', w: 'sorg', ru: 'печаль, забота', pos: 'n', g: 'f', forms: 'sorg (sorh), -e f. (ō-основа)', ex: 'Him wæs miċel sorg.', exRu: 'Ему было очень горько.', note: 'Нем. Sorge.' },
        { id: 'ang-hwil', w: 'hwīl', ru: 'время, промежуток', pos: 'n', g: 'f', forms: 'hwīl, -e f. (ō-основа)', ex: 'ealle þā hwīle', exRu: 'всё то время', note: 'Совр. while; þā hwīle þe «пока».' },
        { id: 'ang-ceaster', w: 'ċeaster', ru: 'город (укреплённый)', pos: 'n', g: 'f', forms: 'ċeaster, -e f. (ō-основа)', ex: 'Hīe cōmon tō þǣre ċeastre.', exRu: 'Они пришли к городу.', note: '< лат. castra.' },
        { id: 'ang-leornung', w: 'leornung', ru: 'учение, учёба', pos: 'n', g: 'f', forms: 'leornung, -e f. (ō-основа)', ex: 'on leornunge', exRu: 'во время учения', note: 'От leornian.' },
        { id: 'ang-mildheortnes', w: 'mildheortnes', ru: 'милосердие', pos: 'n', g: 'f', forms: 'mildheortnes, -se f. (ō-основа; мн. -ssa)', ex: 'Godes mildheortnes', exRu: 'Божье милосердие', note: 'Калька лат. misericordia: mild + heort(e) + -nes.' }
      ],
      text: null
    },
    {
      id: 'ang-u03-l04',
      kind: 'reading',
      title: 'Хроника: Хенгест и Хорса (455, 457)',
      goals: ['Читать анналы Англосаксонской хроники', 'Узнавать падежи сильных существительных в тексте', 'Понимать неопределённо-личное man'],
      skills: ['ang.reading', 'ang.noun.a.masc', 'ang.case.use'],
      theory: [
        { type: 'p', text: 'Англосаксонская хроника — погодные записи, начатые при Альфреде (конец IX в.). Статья открывается словом **Hēr** «здесь (= в этот год)». Текст — по Паркеровской рукописи, нормализован.' },
        { type: 'rule', text: '**man** + глагол в 3 л. ед. — неопределённо-личная конструкция: **his brōþor Horsan man ofslōh** «его брата Хорсу убили» (букв. «убил кто-то»). Ср. нем. man.' },
        { type: 'p', text: 'Приложение стоит в том же падеже: **wiþ Wyrtgeorne þām cyninge** «против Вортигерна-короля» (дат.). **fēng tō rīċe** «взошёл на престол» (букв. «взялся за власть»). **fēower þūsend wera** — партитивный род. мн.' }
      ],
      vocab: [
        { id: 'ang-feohtan', w: 'feohtan', ru: 'сражаться', pos: 'v', forms: 'feohtan, feaht, fuhton, fohten (III кл.)', ex: 'Hīe fuhton wiþ þone here.', exRu: 'Они сражались с войском.', note: 'Нем. fechten.' },
        { id: 'ang-ofslean', w: 'ofslēan', ru: 'убить, сразить', pos: 'v', forms: 'ofslēan, ofslōg (-slōh), ofslōgon, ofslæġen (VI кл.)', ex: 'Man ofslōh þone cyning.', exRu: 'Короля убили.', note: 'Ср. slay.' },
        { id: 'ang-fon', w: 'fōn', ru: 'брать, хватать; fōn tō rīċe — взойти на престол', pos: 'v', forms: 'fōn, fēng, fēngon, fangen (VII кл.)', ex: 'Hē fēng tō rīċe.', exRu: 'Он взошёл на престол.', note: 'Стяжённый глагол (< *fanhan); нем. fangen.' },
        { id: 'ang-forlaetan', w: 'forlǣtan', ru: 'покидать, оставлять', pos: 'v', forms: 'forlǣtan, forlēt, forlēton, forlǣten (VII кл.)', ex: 'Hīe forlēton þæt land.', exRu: 'Они покинули страну.', note: null },
        { id: 'ang-fleon', w: 'flēon', ru: 'бежать, спасаться бегством', pos: 'v', forms: 'flēon, flēah, flugon, flogen (II кл.)', ex: 'Þā Brettas flugon.', exRu: 'Бритты бежали.', note: 'Стяжённый глагол; совр. flee.' },
        { id: 'ang-cwethan', w: 'cweþan', ru: 'говорить, сказать', pos: 'v', forms: 'cweþan, cwæþ, cwǣdon, cweden (V кл.)', ex: 'Þā cwæþ hē.', exRu: 'Тогда он сказал.', note: 'Чередование þ/d (закон Вернера). Ср. архаич. quoth.' },
        { id: 'ang-ege', w: 'eġe', ru: 'страх', pos: 'n', g: 'm', forms: 'eġe, -es m. (i-основа)', ex: 'mid miclum eġe', exRu: 'в великом страхе', note: null },
        { id: 'ang-thusend', w: 'þūsend', ru: 'тысяча', pos: 'num', g: 'n', forms: 'þūsend, -es n. (+ род.)', ex: 'fēower þūsend wera', exRu: 'четыре тысячи мужей', note: null },
        { id: 'ang-man', w: 'man', ru: '(неопр.-личн.) кто-то; «-ют»', pos: 'pron', forms: 'только им. ед.', ex: 'Man sæġde þæt…', exRu: 'Говорили, что…', note: 'Ср. нем. man.' }
      ],
      text: {
        title: 'Англосаксонская хроника, 455 и 457 (рук. A)',
        lines: [
          { t: 'Hēr Hengest and Horsa fuhton wiþ Wyrtgeorne þām cyninge in þǣre stōwe þe is ġecweden Ægelesþrep,', ru: 'В этот год Хенгест и Хорса сражались с королём Вортигерном в месте, что называется Эглесфреп (Эйлсфорд),' },
          { t: 'and his brōþor Horsan man ofslōh.', ru: 'и его брата Хорсу убили.' },
          { t: 'And æfter þām Hengest fēng tō rīċe and Æsc his sunu.', ru: 'И после этого Хенгест принял власть, и Эск, его сын.' },
          { t: 'Hēr Hengest and Æsc fuhton wiþ Brettas in þǣre stōwe þe is ġecweden Crecganford,', ru: 'В этот год Хенгест и Эск сражались с бриттами в месте, что называется Крекганфорд (Крейфорд),' },
          { t: 'and þǣr ofslōgon fēower þūsend wera.', ru: 'и там убили четыре тысячи мужей.' },
          { t: 'And þā Brettas þā forlēton Centlond and mid miclum eġe flugon tō Lundenbyriġ.', ru: 'И бритты тогда покинули Кент и в великом страхе бежали в Лондон.' }
        ]
      }
    }
  ]
};

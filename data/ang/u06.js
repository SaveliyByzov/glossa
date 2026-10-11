export default {
  id: 'ang-u06',
  title: 'Nama, fōt, sunu, fæder',
  titleRu: 'Слабые существительные и малые типы',
  summary: 'Слабое склонение (n-основы), корневые основы с умлаутом (mann — menn, fōt — fēt), u-основы, основы на -r и -nd, s-основы. Чтение — притча о блудном сыне.',
  lessons: [
    {
      id: 'ang-u06-l01',
      kind: 'grammar',
      title: 'Слабое склонение: nama, tunge, ēage',
      goals: ['Склонять слабые существительные трёх родов', 'Различать падежи по артиклю при окончании -an', 'Не путать слабые существительные и прилагательные'],
      skills: ['ang.noun.n'],
      theory: [
        { type: 'p', text: '**Слабое** склонение — исторически основы на *-n-*. Почти все косвенные формы оканчиваются на **-an**.' },
        { type: 'table', caption: 'n-основы', head: ['', 'nama m. «имя»', 'tunge f. «язык»', 'ēage n. «глаз»'],
          rows: [
            ['ед. им.', 'nam{{a}}', 'tung{{e}}', 'ēag{{e}}'],
            ['вин.', 'nam{{an}}', 'tung{{an}}', 'ēag{{e}}'],
            ['род.', 'nam{{an}}', 'tung{{an}}', 'ēag{{an}}'],
            ['дат.', 'nam{{an}}', 'tung{{an}}', 'ēag{{an}}'],
            ['мн. им./вин.', 'nam{{an}}', 'tung{{an}}', 'ēag{{an}}'],
            ['род.', 'nam{{ena}}', 'tung{{ena}}', 'ēag{{ena}}'],
            ['дат.', 'nam{{um}}', 'tung{{um}}', 'ēag{{um}}']
          ],
          note: 'Средний род — только ēage, ēare и wange «щека».' },
        { type: 'rule', text: 'Мужской род — **-a** в им. ед. (nama, guma, steorra, mōna); женский — **-e** (tunge, sunne, heorte, ċiriċe). Отличить слабое женское на -e от сильного на -e помогает род. ед.: **tungan**, но **endes**.' },
        { type: 'pitfall', text: 'Форма на **-an** — это вин., род., дат. ед. **и** им./вин. мн. Например, *þā naman* — мн. ч., *þone naman* — вин. ед., *þæs naman* — род. ед. Читайте артикль!' },
        { type: 'contrast', text: '**sunne** «солнце» — женского рода, **mōna** «луна» — мужского (как в немецком die Sonne, der Mond, и наоборот по сравнению с русским). Местоимения — **hēo** о солнце, **hē** о луне.' },
        { type: 'tip', text: 'Мн. -an дожило в **oxen** и в «двойных» мн. ч. children, brethren. Окончания слабого прилагательного (юнит 5) — те же самые.' }
      ],
      vocab: [
        { id: 'ang-guma', w: 'guma', ru: 'человек, муж (поэт.)', pos: 'n', g: 'm', forms: 'guma, -an m. (n-основа)', ex: 'Se guma wæs cēne.', exRu: 'Тот муж был смел.', note: 'Ср. bridegroom < brȳdguma.' },
        { id: 'ang-steorra', w: 'steorra', ru: 'звезда', pos: 'n', g: 'm', forms: 'steorra, -an m. (n-основа)', ex: 'Þā steorran scīnaþ.', exRu: 'Звёзды сияют.', note: 'Мужской род!' },
        { id: 'ang-mona', w: 'mōna', ru: 'луна', pos: 'n', g: 'm', forms: 'mōna, -an m. (n-основа)', ex: 'Se mōna is beorht.', exRu: 'Луна светла.', note: 'Мужской род, как нем. der Mond.' },
        { id: 'ang-sunne', w: 'sunne', ru: 'солнце', pos: 'n', g: 'f', forms: 'sunne, -an f. (n-основа)', ex: 'Sēo sunne scīnþ.', exRu: 'Солнце сияет.', note: 'Женский род, как нем. die Sonne.' },
        { id: 'ang-tunge', w: 'tunge', ru: 'язык (орган; речь)', pos: 'n', g: 'f', forms: 'tunge, -an f. (n-основа)', ex: 'on Engliscre tungan', exRu: 'на английском языке', note: null },
        { id: 'ang-heorte', w: 'heorte', ru: 'сердце', pos: 'n', g: 'f', forms: 'heorte, -an f. (n-основа)', ex: 'of ealre heortan', exRu: 'всем сердцем', note: 'Женский род, нем. das Herz — средний.' },
        { id: 'ang-cirice', w: 'ċiriċe', ru: 'церковь', pos: 'n', g: 'f', forms: 'ċiriċe, -an f. (n-основа)', ex: 'Hē ēode tō ċiriċan.', exRu: 'Он пошёл в церковь.', note: 'Поздн. ċyriċe; совр. church.' },
        { id: 'ang-eage', w: 'ēage', ru: 'глаз', pos: 'n', g: 'n', forms: 'ēage, -an n. (n-основа)', ex: 'mid his ēagum', exRu: 'своими глазами', note: 'Совр. eye, нем. Auge.' },
        { id: 'ang-eare', w: 'ēare', ru: 'ухо', pos: 'n', g: 'n', forms: 'ēare, -an n. (n-основа)', ex: 'Se þe ēaran hæbbe, ġehīere.', exRu: 'Имеющий уши да слышит.', note: null },
        { id: 'ang-wita', w: 'wita', ru: 'мудрец, советник', pos: 'n', g: 'm', forms: 'wita, -an m. (n-основа)', ex: 'þæs cyninges witan', exRu: 'советники короля', note: 'witena ġemōt — совет мудрецов (уитенагемот).' },
        { id: 'ang-bana', w: 'bana', ru: 'убийца, погибель', pos: 'n', g: 'm', forms: 'bana, -an m. (n-основа)', ex: 'Hē wæs his brōþor bana.', exRu: 'Он был убийцей своего брата.', note: 'Совр. bane.' }
      ],
      text: null
    },
    {
      id: 'ang-u06-l02',
      kind: 'grammar',
      title: 'Корневые основы: mann — menn, fōt — fēt',
      goals: ['Склонять корневые основы с i-умлаутом', 'Знать основы на -nd (frēond — frīend)', 'Понимать, откуда men, feet, geese'],
      skills: ['ang.noun.root'],
      theory: [
        { type: 'p', text: 'У **корневых** основ окончание присоединялось прямо к корню; в дат. ед. и им./вин. мн. стояло *-i*, вызвавшее **i-умлаут** корня: ō → ē, ā → ǣ, a → e, ū → ȳ, o → e.' },
        { type: 'table', caption: 'Корневые основы', head: ['', 'mann m.', 'fōt m.', 'bōc f.'],
          rows: [
            ['ед. им./вин.', 'mann', 'fōt', 'bōc'],
            ['род.', 'mann{{es}}', 'fōt{{es}}', 'bēċ, bōc{{e}}'],
            ['дат.', '{{menn}}', '{{fēt}}', '{{bēċ}}'],
            ['мн. им./вин.', '{{menn}}', '{{fēt}}', '{{bēċ}}'],
            ['род.', 'mann{{a}}', 'fōt{{a}}', 'bōc{{a}}'],
            ['дат.', 'mann{{um}}', 'fōt{{um}}', 'bōc{{um}}']
          ],
          note: 'Так же: tōþ — tēþ, gōs — gēs, mūs — mȳs, cū — cȳ, burg — byriġ; без умлаута: niht — niht.' },
        { type: 'rule', text: 'Умлаутная форма = **дат. ед.** и **им./вин. мн.**: *on þǣm fēt* «на ноге», *his fēt* «его ноги». У женских (bōc, burg, gōs) умлаут бывает и в род. ед.' },
        { type: 'rule', text: 'Основы на **-nd** (бывшие причастия): **frēond** «друг» — дат. ед. и им. мн. **frīend** (или по a-типу frēondas); **fēond** «враг» — **fīend**.' },
        { type: 'pitfall', text: '**wīfmann** «женщина» — **мужского** рода (по последнему компоненту mann): *se wīfmann*. А **wīf** — среднего. Грамматический род ≠ пол.' },
        { type: 'contrast', text: 'Чередование гласных при склонении — совершенно чуждое русскому явление; ближе всего немецкое Fuß — Füße, Buch — Bücher (тоже умлаут, но там оно маркирует мн. ч. вместе с окончанием).' },
        { type: 'tip', text: 'Совр. man — men, foot — feet, tooth — teeth, goose — geese, mouse — mice, (cow — kine) — это прямые наследники; book — books выровнено.' }
      ],
      vocab: [
        { id: 'ang-mann', w: 'mann', ru: 'человек; мужчина', pos: 'n', g: 'm', forms: 'mann, -es m. (корневая; дат. ед. и мн. menn)', ex: 'Ealle menn sindon dēadlīċe.', exRu: 'Все люди смертны.', note: 'Также monn.' },
        { id: 'ang-fot', w: 'fōt', ru: 'нога, стопа', pos: 'n', g: 'm', forms: 'fōt, -es m. (корневая; мн. fēt)', ex: 'Hē þwōh his fēt.', exRu: 'Он омыл свои ноги.', note: 'þwēan — VI кл. «мыть».' },
        { id: 'ang-toth', w: 'tōþ', ru: 'зуб', pos: 'n', g: 'm', forms: 'tōþ, -es m. (корневая; мн. tēþ)', ex: 'ēage for ēage, tōþ for tēþ', exRu: 'око за око, зуб за зуб', note: 'tēþ — дат. ед.' },
        { id: 'ang-boc', w: 'bōc', ru: 'книга', pos: 'n', g: 'f', forms: 'bōc, bēċ f. (корневая; мн. bēċ)', ex: 'Hē rǣdde þā bēċ.', exRu: 'Он читал книги.', note: 'Женский род (нем. das Buch — средний).' },
        { id: 'ang-mus', w: 'mūs', ru: 'мышь', pos: 'n', g: 'f', forms: 'mūs, -e f. (корневая; мн. mȳs)', ex: 'Þǣr wǣron mȳs.', exRu: 'Там были мыши.', note: null },
        { id: 'ang-gos', w: 'gōs', ru: 'гусь', pos: 'n', g: 'f', forms: 'gōs, -e f. (корневая; мн. gēs)', ex: 'twā gēs', exRu: 'два гуся', note: 'Женский род. g перед умлаутным ē — [g].' },
        { id: 'ang-burg', w: 'burg', ru: 'укреплённый город, крепость', pos: 'n', g: 'f', forms: 'burg, byriġ f. (корневая; мн. byriġ)', ex: 'on þǣre byriġ', exRu: 'в городе', note: 'Также burh; совр. borough, -bury.' },
        { id: 'ang-cu', w: 'cū', ru: 'корова', pos: 'n', g: 'f', forms: 'cū, cūe f. (корневая; дат. ед. и мн. cȳ)', ex: 'Hē hæfde þrēo cȳ.', exRu: 'У него было три коровы.', note: 'Архаич. мн. kine.' },
        { id: 'ang-freond', w: 'frēond', ru: 'друг', pos: 'n', g: 'm', forms: 'frēond, -es m. (nd-основа; мн. frīend, frēondas)', ex: 'Hē is mīn frēond.', exRu: 'Он мой друг.', note: 'Бывшее причастие «любящий».' },
        { id: 'ang-feond', w: 'fēond', ru: 'враг; дьявол', pos: 'n', g: 'm', forms: 'fēond, -es m. (nd-основа; мн. fīend)', ex: 'Hīe wǣron his fīend.', exRu: 'Они были его врагами.', note: 'Совр. fiend, нем. Feind.' },
        { id: 'ang-wifmann', w: 'wīfmann', ru: 'женщина', pos: 'n', g: 'm', forms: 'wīfmann, -es m. (корневая; мн. wīfmenn)', ex: 'Se wīfmann wæs wīs.', exRu: 'Женщина была мудрой.', note: 'Мужской род! Совр. woman — women.' }
      ],
      text: null
    },
    {
      id: 'ang-u06-l03',
      kind: 'grammar',
      title: 'u-основы, основы на -r, s-основы',
      goals: ['Склонять sunu и hand', 'Склонять термины родства (fæder, mōdor, brōþor)', 'Узнавать мн. ч. на -ru (ċildru, lambru)'],
      skills: ['ang.noun.u', 'ang.noun.r'],
      theory: [
        { type: 'table', caption: 'u-основы', head: ['', 'sunu m.', 'duru f.', 'hand f.'],
          rows: [
            ['ед. им./вин.', 'sun{{u}}', 'dur{{u}}', 'hand'],
            ['род.', 'sun{{a}}', 'dur{{a}}', 'hand{{a}}'],
            ['дат.', 'sun{{a}}', 'dur{{a}}', 'hand{{a}}'],
            ['мн. им./вин.', 'sun{{a}}', 'dur{{a}}', 'hand{{a}}'],
            ['род.', 'sun{{a}}', 'dur{{a}}', 'hand{{a}}'],
            ['дат.', 'sun{{um}}', 'dur{{um}}', 'hand{{um}}']
          ],
          note: 'Краткие основы — -u в им./вин. ед. (sunu, duru, wudu), долгие — без окончания (hand, feld). Многие слова колеблются между u- и a-типом: feld, род. felda или feldes.' },
        { type: 'rule', text: 'u-основы: **-a** почти везде, кроме им./вин. ед. и дат. мн. *twēġen suna* «два сына», *on wuda* «в лесу», *on felda* «в поле».' },
        { type: 'table', caption: 'Основы на -r (родство)', head: ['', 'fæder', 'mōdor', 'brōþor', 'dohtor'],
          rows: [
            ['ед. им./вин./род.', 'fæder', 'mōdor', 'brōþor', 'dohtor'],
            ['дат.', 'fæder', '{{mēder}}', '{{brēþer}}', '{{dehter}}'],
            ['мн. им./вин.', 'fæder{{as}}', 'mōdr{{u}}, -a', 'brōþor, brōþr{{u}}', 'dohtor, dohtr{{u}}'],
            ['род.', 'fæder{{a}}', 'mōdr{{a}}', 'brōþr{{a}}', 'dohtr{{a}}'],
            ['дат.', 'fæder{{um}}', 'mōdr{{um}}', 'brōþr{{um}}', 'dohtr{{um}}']
          ],
          note: 'sweostor «сестра» не меняется в ед. ч. (без умлаута); мн. sweostor, sweostra, sweostrum. У fæder встречается род. fæderes. Ед. ч. ġebrōþor «братья (во Христе)» — собир.' },
        { type: 'rule', text: '**Умлаут в дат. ед.** у mōdor, brōþor, dohtor: *tō his mēder* «к своей матери», *his brēþer* «его брату».' },
        { type: 'p', text: '**s-основы** (средний род): мн. ч. на **-ru**: **lamb — lambru**, **ċild — ċildru** (поздн.), **cealf — cealfru**, **ǣġ — ǣġru**. Отсюда совр. children (двойное мн.: -r- + -en).' },
        { type: 'contrast', text: 'Русские «мать — матери», «дочь — дочери» — та же индоевропейская основа на -r-, проявляющаяся в косвенных падежах; в древнеанглийском r видно во всех формах.' },
        { type: 'tip', text: 'brōþor — brother, Bruder, брат; mōdor — mother, Mutter, мать; dohtor — daughter, Tochter, дочь; sweostor — sister, Schwester, сестра.' }
      ],
      vocab: [
        { id: 'ang-sunu', w: 'sunu', ru: 'сын', pos: 'n', g: 'm', forms: 'sunu, suna m. (u-основа; мн. suna)', ex: 'Hē hæfde twēġen suna.', exRu: 'У него было два сына.', note: null },
        { id: 'ang-duru', w: 'duru', ru: 'дверь', pos: 'n', g: 'f', forms: 'duru, dura f. (u-основа)', ex: 'æt þǣre dura', exRu: 'у двери', note: 'Рус. дверь — родственно.' },
        { id: 'ang-hand', w: 'hand', ru: 'рука, кисть', pos: 'n', g: 'f', forms: 'hand, handa f. (u-основа)', ex: 'on his handa', exRu: 'в его руке; в его руки', note: 'Также hond.' },
        { id: 'ang-feld', w: 'feld', ru: 'поле', pos: 'n', g: 'm', forms: 'feld, felda / feldes m. (u-основа)', ex: 'Hē gǣþ tō felda.', exRu: 'Он идёт в поле.', note: null },
        { id: 'ang-wudu', w: 'wudu', ru: 'лес; дерево (материал)', pos: 'n', g: 'm', forms: 'wudu, wuda m. (u-основа)', ex: 'on þǣm wuda', exRu: 'в лесу', note: 'Совр. wood.' },
        { id: 'ang-faeder', w: 'fæder', ru: 'отец', pos: 'n', g: 'm', forms: 'fæder, fæder m. (r-основа; мн. fæderas)', ex: 'Fæder ūre', exRu: 'Отче наш', note: 'æ краткое.' },
        { id: 'ang-modor', w: 'mōdor', ru: 'мать', pos: 'n', g: 'f', forms: 'mōdor, дат. mēder f. (r-основа)', ex: 'Hē cwæþ tō his mēder.', exRu: 'Он сказал своей матери.', note: null },
        { id: 'ang-brothor', w: 'brōþor', ru: 'брат', pos: 'n', g: 'm', forms: 'brōþor, дат. brēþer m. (r-основа; мн. brōþor, brōþru)', ex: 'his brōþor Horsa', exRu: 'его брат Хорса', note: null },
        { id: 'ang-sweostor', w: 'sweostor', ru: 'сестра', pos: 'n', g: 'f', forms: 'sweostor f. (r-основа; неизм. в ед.)', ex: 'Hēo is mīn sweostor.', exRu: 'Она моя сестра.', note: 'Поздн. swustor.' },
        { id: 'ang-dohtor', w: 'dohtor', ru: 'дочь', pos: 'n', g: 'f', forms: 'dohtor, дат. dehter f. (r-основа)', ex: 'Hē sealde his dohtor þǣm cyninge.', exRu: 'Он отдал свою дочь королю.', note: null },
        { id: 'ang-lamb', w: 'lamb', ru: 'ягнёнок', pos: 'n', g: 'n', forms: 'lamb, -es n. (s-основа; мн. lambru)', ex: 'Godes lamb', exRu: 'Агнец Божий', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u06-l04',
      kind: 'reading',
      title: 'Блудный сын (Лк. 15:11–16)',
      goals: ['Читать евангельский текст', 'Узнавать формы sunu, fæder, mann в тексте', 'Заметить соотношение þā … þā'],
      skills: ['ang.reading', 'ang.noun.u', 'ang.noun.r', 'ang.noun.root'],
      theory: [
        { type: 'p', text: 'Западносаксонские Евангелия, поздние написания сохранены (syle, lybbende, swȳn, āmyrrede).' },
        { type: 'rule', text: '**Þā … þā**: когда þā открывает **придаточное**, глагол уходит в конец (*Þā hē hīe hæfde ealle āmyrrede*), а в **главном** þā сразу стоит глагол (*þā wearþ miċel hungor*): «когда он всё растратил, тогда случился великий голод».' },
        { type: 'p', text: '**twēġen suna** — вин. мн. u-основы; **tō his fæder** — дат. r-основы (без окончания); **burhsittendan men** — дат. ед. mann (умлаут); **þæt hē hēolde** — сослагательное цели «чтобы он пас»; **him man ne sealde** — «никто ему не давал».' }
      ],
      vocab: [
        { id: 'ang-sum', w: 'sum', ru: 'некий, какой-то; один из (+ род.)', pos: 'pron', forms: 'sum, sumne, sumes… (сильн.)', ex: 'sum mann', exRu: 'некий человек', note: 'Совр. some.' },
        { id: 'ang-dael', w: 'dǣl', ru: 'часть, доля', pos: 'n', g: 'm', forms: 'dǣl, -es m. (i-основа)', ex: 'mīnne dǣl', exRu: 'мою долю', note: 'Совр. deal, нем. Teil.' },
        { id: 'ang-aeht', w: 'ǣht', ru: 'имущество, владение', pos: 'n', g: 'f', forms: 'ǣht, -e f. (i-основа)', ex: 'Hē dǣlde his ǣhta.', exRu: 'Он разделил своё имение.', note: 'От āgan «владеть».' },
        { id: 'ang-gegaderian', w: 'ġegaderian', ru: 'собирать', pos: 'v', forms: 'ġegaderian, ġegaderode, ġegaderod (сл. II)', ex: 'Hē ġegaderode eall his þing.', exRu: 'Он собрал всё своё.', note: 'Совр. gather.' },
        { id: 'ang-forspillan', w: 'forspillan', ru: 'растрачивать, губить', pos: 'v', forms: 'forspillan, forspilde, forspilled (сл. I)', ex: 'Hē forspilde his ǣhta.', exRu: 'Он растратил своё имение.', note: 'Совр. spill.' },
        { id: 'ang-wraeclice', w: 'wræclīċe', ru: 'на чужбине, в изгнании', pos: 'adv', forms: null, ex: 'Hē fērde wræclīċe.', exRu: 'Он отправился на чужбину.', note: 'Ср. wræċċa «изгнанник» → wretch.' },
        { id: 'ang-hungor', w: 'hungor', ru: 'голод', pos: 'n', g: 'm', forms: 'hungor, hungres m. (a-основа)', ex: 'Þā wearþ miċel hungor.', exRu: 'Тогда настал великий голод.', note: 'Также hunger.' },
        { id: 'ang-swin', w: 'swīn', ru: 'свинья', pos: 'n', g: 'n', forms: 'swīn, -es n. (a-основа; мн. swīn)', ex: 'Hē hēold his swīn.', exRu: 'Он пас его свиней.', note: 'Поздн. swȳn. Совр. swine — без окончания во мн. ч.' },
        { id: 'ang-wamb', w: 'wamb', ru: 'живот, чрево', pos: 'n', g: 'f', forms: 'wamb, -e f. (ō-основа)', ex: 'his wambe ġefyllan', exRu: 'наполнить своё чрево', note: 'Совр. womb.' },
        { id: 'ang-waedla', w: 'wǣdla', ru: 'бедняк, нищий', pos: 'n', g: 'm', forms: 'wǣdla, -an m. (n-основа)', ex: 'Hē wearþ wǣdla.', exRu: 'Он стал нищим.', note: null }
      ],
      text: {
        title: 'Лк. 15:11–16 (западносаксонские Евангелия)',
        lines: [
          { t: 'Sōþlīċe sum mann hæfde twēġen suna.', ru: 'У одного человека было два сына.' },
          { t: 'Þā cwæþ se ġingra tō his fæder: «Fæder, syle mē mīnne dǣl mīnre ǣhte þe mē tō ġebyreþ.»', ru: 'И сказал младший отцу: «Отец, дай мне мою долю имения, которая мне причитается».' },
          { t: 'Þā dǣlde hē him his ǣhta.', ru: 'И он разделил им имение.' },
          { t: 'Þā æfter fēawum dagum eall his þing ġegaderode se ġingra sunu and fērde wræclīċe on feorlen rīċe,', ru: 'Через несколько дней младший сын, собрав всё своё, отправился на чужбину в далёкую страну' },
          { t: 'and forspilde þǣr his ǣhta, lybbende on his gǣlsan.', ru: 'и растратил там своё имение, живя распутно.' },
          { t: 'Þā hē hīe hæfde ealle āmyrrede, þā wearþ miċel hungor on þām rīċe, and hē wearþ wǣdla.', ru: 'Когда же он всё прожил, настал великий голод в той стране, и он стал нищим.' },
          { t: 'Þā fērde hē and folgode ānum burhsittendan men þæs rīċes;', ru: 'И он пошёл и пристал к одному из жителей той страны;' },
          { t: 'þā sende hē hine tō his tūne þæt hē hēolde his swȳn.', ru: 'тот послал его в своё поместье пасти свиней.' },
          { t: 'And hē ġewilnode his wambe ġefyllan of þām bēancoddum þe þā swȳn ǣton, and him man ne sealde.', ru: 'И он желал наполнить своё чрево стручками, которые ели свиньи, но никто ему не давал.' }
        ]
      }
    }
  ]
};

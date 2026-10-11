export default {
  id: 'ang-u02',
  title: 'Se, sēo, þæt',
  titleRu: 'Указательные местоимения и падежи',
  summary: 'Указательные se/sēo/þæt и þes/þēos/þis, функции четырёх падежей (и остатков творительного), предлоги с дательным и винительным, вопросительные местоимения. Чтение — «Отче наш».',
  lessons: [
    {
      id: 'ang-u02-l01',
      kind: 'grammar',
      title: 'Se, sēo, þæt',
      goals: ['Склонять se, sēo, þæt по родам и падежам', 'Определять род и падеж существительного по указательному', 'Знать творительный þȳ/þon'],
      skills: ['ang.dem.se'],
      theory: [
        { type: 'p', text: '**se, sēo, þæt** — указательное местоимение «тот, та, то». Оно же выполняет роль определённого артикля и часто — относительного местоимения «который». Именно по нему лучше всего виден род и падеж: окончания существительных во многом совпадают.' },
        { type: 'table', caption: 'se, sēo, þæt', head: ['', 'м.', 'ж.', 'ср.', 'мн. (все роды)'],
          rows: [
            ['им.', 'se', 'sēo', 'þæt', 'þā'],
            ['вин.', 'þon{{e}}', 'þā', 'þæt', 'þā'],
            ['род.', 'þæ{{s}}', 'þǣr{{e}}', 'þæ{{s}}', 'þār{{a}}'],
            ['дат.', 'þǣ{{m}}', 'þǣr{{e}}', 'þǣ{{m}}', 'þǣ{{m}}'],
            ['твор.', 'þȳ, þon', '(þǣre)', 'þȳ, þon', '(þǣm)']
          ],
          note: 'Поздние варианты: þām (= þǣm), þǣra (= þāra). Творительный есть только у м. и ср. ед.; в остальных клетках его заменяет дательный.' },
        { type: 'rule', text: 'Совпадения, которые надо держать в голове: **þā** — вин. ж. ед. и им./вин. мн.; **þǣre** — род. и дат. ж.; **þæs** и **þǣm** — общие для м. и ср.' },
        { type: 'examples', items: [
          { t: 'Se cyning and sēo cwēn', ru: 'король и королева' },
          { t: 'Hē ġeseah þone cyning.', ru: 'Он увидел короля.' },
          { t: 'Þæs cyninges hūs', ru: 'дом короля' },
          { t: 'Hē sealde þǣre cwēne þæt sweord.', ru: 'Он дал королеве меч.' },
          { t: 'Þȳ ġēare cōm se here.', ru: 'В тот год пришло (вражеское) войско.' }
        ] },
        { type: 'p', text: 'Застывшие обороты с творительным и дательным: **for þȳ**, **for þǣm (þe)** «потому что», **æfter þǣm** «после того», **þȳ ... þȳ** «чем... тем» (þȳ māre «тем больше»).' },
        { type: 'contrast', text: 'Русскому читателю se/sēo/þæt удобно воспринимать как «тот/та/то»: это не столько артикль, сколько указательное, и оно не обязательно — особенно в поэзии, где существительные чаще всего стоят без него.' },
        { type: 'pitfall', text: '**þæt** — не только «то» (ср. р.), но и союз «что, чтобы». Род. мн. **þāra** легко принять за им. мн. **þā**.' },
        { type: 'tip', text: 'þæt → that; þā → (те, и как источник) though/the; þȳ сохранилось в выражении *the more, the better* (þȳ māre…). Немецкий: der/die/das, dem, des, den ~ se/sēo/þæt, þǣm, þæs, þone.' }
      ],
      vocab: [
        { id: 'ang-se', w: 'se, sēo, þæt', ru: 'тот, та, то; определённый артикль; который', pos: 'pron', forms: 'þone, þæs, þǣm; мн. þā, þāra, þǣm', ex: 'Se cyning is wīs.', exRu: 'Король мудр.', note: null },
        { id: 'ang-cwen', w: 'cwēn', ru: 'королева, жена (короля)', pos: 'n', g: 'f', forms: 'cwēn, -e f. (i-основа)', ex: 'Sēo cwēn is hēr.', exRu: 'Королева здесь.', note: 'Совр. queen.' },
        { id: 'ang-wif', w: 'wīf', ru: 'женщина; жена', pos: 'n', g: 'n', forms: 'wīf, -es n. (a-основа; мн. wīf)', ex: 'Þæt wīf is gōd.', exRu: 'Эта женщина добрая.', note: 'Средний род! Ср. нем. das Weib. Местоимение — hit или hēo (по смыслу).' },
        { id: 'ang-hlaford', w: 'hlāford', ru: 'господин, лорд', pos: 'n', g: 'm', forms: 'hlāford, -es m. (a-основа)', ex: 'Ēalā lēof hlāford!', exRu: 'О дорогой господин!', note: '< hlāf-weard «хранитель хлеба».' },
        { id: 'ang-hlaefdige', w: 'hlǣfdiġe', ru: 'госпожа, леди', pos: 'n', g: 'f', forms: 'hlǣfdiġe, -an f. (n-основа)', ex: 'Sēo hlǣfdiġe is on þǣm hūse.', exRu: 'Госпожа в доме.', note: 'Слабое склонение (см. юнит 6).' },
        { id: 'ang-folc', w: 'folc', ru: 'народ, люди', pos: 'n', g: 'n', forms: 'folc, -es n. (a-основа; мн. folc)', ex: 'Þæt folc wæs on þǣre byriġ.', exRu: 'Народ был в городе.', note: 'Совр. folk, нем. Volk.' },
        { id: 'ang-land', w: 'land', ru: 'земля, страна', pos: 'n', g: 'n', forms: 'land (lond), -es n. (a-основа; мн. land)', ex: 'Þis land is miċel.', exRu: 'Эта страна велика.', note: 'Перед носовым a/o чередуются: land/lond, mann/monn.' },
        { id: 'ang-ealdormann', w: 'ealdormann', ru: 'олдермен, правитель области', pos: 'n', g: 'm', forms: 'ealdormann, -es m. (корневая основа; мн. ealdormenn)', ex: 'Se ealdormann fōr tō þǣm cyninge.', exRu: 'Олдермен поехал к королю.', note: 'Склоняется как mann.' },
        { id: 'ang-thegn', w: 'þeġn', ru: 'тэн, дружинник, слуга', pos: 'n', g: 'm', forms: 'þeġn, -es m. (a-основа)', ex: 'Se þeġn hīerþ his hlāforde.', exRu: 'Тэн повинуется своему господину.', note: 'Позднее þēn.' },
        { id: 'ang-ceorl', w: 'ċeorl', ru: 'свободный крестьянин; муж', pos: 'n', g: 'm', forms: 'ċeorl, -es m. (a-основа)', ex: 'Se ċeorl is on þǣm felda.', exRu: 'Крестьянин в поле.', note: 'Совр. churl, имя Charles — из родств. франкского слова.' }
      ],
      text: null
    },
    {
      id: 'ang-u02-l02',
      kind: 'grammar',
      title: 'Падежи и предлоги',
      goals: ['Определять функцию падежа в предложении', 'Выбирать дательный или винительный после on/in', 'Узнавать партитивный родительный'],
      skills: ['ang.case.use', 'ang.prep'],
      theory: [
        { type: 'table', caption: 'Основные функции падежей', head: ['падеж', 'функции', 'пример'],
          rows: [
            ['им.', 'подлежащее, именная часть, обращение', '**Se cyning** is wīs.'],
            ['вин.', 'прямое дополнение; длительность; направление после on/in', 'Hē ġeseah **þone cyning**; **ealne dæġ** «весь день»'],
            ['род.', 'принадлежность, часть целого, при некоторых глаголах и числительных', '**þæs cyninges** sunu; fela **manna** «много людей»'],
            ['дат.', 'косвенное дополнение; после большинства предлогов; при глаголах helpan, folgian, þancian', 'Hē sealde **þǣm munuce** hlāf.'],
            ['твор.', 'орудие, время (обычно уже = дат.)', '**þȳ ġēare** «в тот год»']
          ] },
        { type: 'rule', text: '**on / in + дат.** — где? (в доме), **on / in + вин.** — куда? (в дом). Так же **ofer** и **under**.' },
        { type: 'examples', items: [
          { t: 'Hē wæs on þǣre byriġ.', ru: 'Он был в городе.', note: 'дат.: место' },
          { t: 'Hē fōr on þā burg.', ru: 'Он отправился в город.', note: 'вин.: направление' },
          { t: 'Hīe fuhton wiþ þone here.', ru: 'Они сражались с (вражеским) войском.' },
          { t: 'Hē þancode Gode.', ru: 'Он поблагодарил Бога.', note: 'þancian + дат.' },
          { t: 'Hē sæt ealne dæġ æt hām.', ru: 'Он сидел весь день дома.', note: 'вин. длительности' }
        ] },
        { type: 'contrast', text: 'Почти точная параллель с русским **в/на + предл.** (где?) и **в/на + вин.** (куда?). Но в древнеанглийском большинство предлогов (**tō, mid, of, fram, æt, be, æfter**) требуют **дательного**, а не разных падежей, как в русском: **mid** «с» + дат., хотя по-русски «с» + твор.; **of** «из» + дат., хотя «из» + род.' },
        { type: 'pitfall', text: 'Партитивный родительный стоит там, где по-русски тоже родительный: **fela manna** «много людей», **hund scipa** «сто кораблей», **sum þāra** «один из них». Но при числительных 1–19 существительное обычно согласуется: **fīf scipu** «пять кораблей» (ср. рус. «пять кораблей» — род.!).' },
        { type: 'tip', text: '**tō** + дат. = to; **mid** ~ нем. mit + дат.; **of** = of/off; **fram** = from; **æt** = at; **wiþ** «против» — сохранилось в withstand, withhold.' }
      ],
      vocab: [
        { id: 'ang-on', w: 'on', ru: 'в, на (+ дат. где; + вин. куда)', pos: 'prep', forms: '+ дат. / вин.', ex: 'on þǣm hūse', exRu: 'в доме', note: null },
        { id: 'ang-in', w: 'in', ru: 'в (+ дат. / вин.)', pos: 'prep', forms: '+ дат. / вин.', ex: 'in Englalande', exRu: 'в Англии', note: 'В прозе on встречается чаще.' },
        { id: 'ang-to', w: 'tō', ru: 'к, в, до; (наречие) слишком', pos: 'prep', forms: '+ дат.', ex: 'Hē cōm tō þǣm cyninge.', exRu: 'Он пришёл к королю.', note: 'tō dæġ «сегодня».' },
        { id: 'ang-mid', w: 'mid', ru: 'с, вместе с; при помощи', pos: 'prep', forms: '+ дат. (твор.)', ex: 'mid his ġefērum', exRu: 'со своими товарищами', note: null },
        { id: 'ang-of', w: 'of', ru: 'из, от', pos: 'prep', forms: '+ дат.', ex: 'of þǣm lande', exRu: 'из той страны', note: null },
        { id: 'ang-fram', w: 'fram', ru: 'от, из', pos: 'prep', forms: '+ дат. (также from)', ex: 'fram Rōme', exRu: 'из Рима', note: null },
        { id: 'ang-aet', w: 'æt', ru: 'у, при, в', pos: 'prep', forms: '+ дат.', ex: 'æt hām', exRu: 'дома', note: 'hām в этом обороте без окончания.' },
        { id: 'ang-with', w: 'wiþ', ru: 'против; к, по направлению', pos: 'prep', forms: '+ вин. / дат. / род.', ex: 'Hīe fuhton wiþ þā Brettas.', exRu: 'Они сражались против бриттов.', note: null },
        { id: 'ang-ofer', w: 'ofer', ru: 'над, через, по; после', pos: 'prep', forms: '+ дат. / вин.', ex: 'ofer sǣ', exRu: 'за море; по морю', note: 'f = [v].' },
        { id: 'ang-under', w: 'under', ru: 'под', pos: 'prep', forms: '+ дат. / вин.', ex: 'under þǣm trēowe', exRu: 'под деревом', note: null },
        { id: 'ang-aefter', w: 'æfter', ru: 'после; вдоль, по', pos: 'prep', forms: '+ дат.', ex: 'æfter þǣm', exRu: 'после того', note: null },
        { id: 'ang-for', w: 'for', ru: 'ради, из-за; перед', pos: 'prep', forms: '+ дат. / вин.', ex: 'for Godes lufan', exRu: 'ради любви Божией', note: 'Не путать с fōr «поехал».' },
        { id: 'ang-thurh', w: 'þurh', ru: 'через, сквозь; посредством', pos: 'prep', forms: '+ вин.', ex: 'þurh Godes ġiefe', exRu: 'по милости Божией', note: 'Совр. through, нем. durch.' },
        { id: 'ang-be', w: 'be', ru: 'о, про; у, возле', pos: 'prep', forms: '+ дат.', ex: 'be þǣm cyninge', exRu: 'о короле', note: 'Ср. совр. by.' }
      ],
      text: null
    },
    {
      id: 'ang-u02-l03',
      kind: 'grammar',
      title: 'Þes, þēos, þis; вопросительные; þe',
      goals: ['Склонять þes, þēos, þis', 'Склонять hwā, hwæt', 'Узнавать относительную частицу þe и se þe'],
      skills: ['ang.dem.thes', 'ang.pron.interrog', 'ang.syntax.rel'],
      theory: [
        { type: 'table', caption: 'þes, þēos, þis «этот»', head: ['', 'м.', 'ж.', 'ср.', 'мн.'],
          rows: [
            ['им.', 'þes', 'þēos', 'þis', 'þās'],
            ['вин.', 'þis{{ne}}', 'þās', 'þis', 'þās'],
            ['род.', 'þiss{{es}}', 'þiss{{e}}', 'þiss{{es}}', 'þiss{{a}}'],
            ['дат.', 'þiss{{um}}', 'þiss{{e}}', 'þiss{{um}}', 'þiss{{um}}'],
            ['твор.', 'þȳs', '(þisse)', 'þȳs', '(þissum)']
          ],
          note: 'Окончания þisne, þisses, þissum совпадают с окончаниями сильного прилагательного (gōdne, gōdes, gōdum) — это пригодится в юните 5.' },
        { type: 'table', caption: 'hwā, hwæt «кто, что»', head: ['', 'м./ж.', 'ср.'],
          rows: [
            ['им.', 'hwā', 'hwæt'],
            ['вин.', 'hwone', 'hwæt'],
            ['род.', 'hwæs', 'hwæs'],
            ['дат.', 'hwǣm (hwām)', 'hwǣm (hwām)'],
            ['твор.', '—', 'hwȳ, hwon']
          ],
          note: 'Мн. ч. нет. hwȳ «почему» — застывший творительный («чем?»).' },
        { type: 'rule', text: 'Относительные предложения: неизменяемая частица **þe** (*se mann þe hēr wæs* «человек, который был здесь»), местоимение **se** (*se mann, se hēr wæs*) или их сочетание **se þe** (*se mann se þe hēr wæs*). При se/se þe падеж местоимения задаёт придаточное или главное предложение — в прозе бывает и так, и так.' },
        { type: 'examples', items: [
          { t: 'Þes mann is mīn frēond.', ru: 'Этот человек — мой друг.' },
          { t: 'Hwā is þes cniht?', ru: 'Кто этот юноша?' },
          { t: 'Hwæs sunu eart þū?', ru: 'Чей ты сын?' },
          { t: 'Fæder ūre, þū þe eart on heofonum', ru: 'Отче наш, сущий (букв. ты, который еси) на небесах' }
        ] },
        { type: 'contrast', text: 'Русское «который» склоняется всегда; древнеанглийское **þe** — никогда, как разговорное «что» в «человек, что был здесь». Падеж тогда восстанавливается по смыслу.' },
        { type: 'pitfall', text: '**þās** — им./вин. мн. и вин. ж. ед. «эту»; не путать с **þā** от se.' },
        { type: 'tip', text: 'hwā → who, hwæs → whose, hwǣm → whom; hwæt → what; hwȳ → why. Немецкий: wer, wessen, wem, wen.' }
      ],
      vocab: [
        { id: 'ang-thes', w: 'þes, þēos, þis', ru: 'этот, эта, это', pos: 'pron', forms: 'þisne, þisses, þissum; мн. þās, þissa, þissum', ex: 'Þis is gōd hūs.', exRu: 'Это хороший дом.', note: null },
        { id: 'ang-hwa', w: 'hwā, hwæt', ru: 'кто, что', pos: 'pron', forms: 'hwone, hwæs, hwǣm; твор. hwȳ', ex: 'Hwā eart þū?', exRu: 'Кто ты?', note: null },
        { id: 'ang-hwilc', w: 'hwilċ', ru: 'какой, который', pos: 'pron', forms: 'hwilċ, hwilċne, hwilċes… (как сильн. прил.); поздн. hwylċ', ex: 'Hwilċ cyning wæs hē?', exRu: 'Каким королём он был?', note: 'Совр. which.' },
        { id: 'ang-hu', w: 'hū', ru: 'как', pos: 'adv', forms: null, ex: 'Hū eart þū?', exRu: 'Как ты?', note: null },
        { id: 'ang-hwy', w: 'hwȳ', ru: 'почему', pos: 'adv', forms: 'тж. for hwȳ', ex: 'Hwȳ eart þū hēr?', exRu: 'Почему ты здесь?', note: 'Твор. от hwæt.' },
        { id: 'ang-hwider', w: 'hwider', ru: 'куда', pos: 'adv', forms: null, ex: 'Hwider færst þū?', exRu: 'Куда ты едешь?', note: 'Совр. whither.' },
        { id: 'ang-hwanon', w: 'hwanon', ru: 'откуда', pos: 'adv', forms: null, ex: 'Hwanon cōme þū?', exRu: 'Откуда ты пришёл?', note: 'Совр. whence.' },
        { id: 'ang-hwonne', w: 'hwonne', ru: 'когда (вопрос)', pos: 'adv', forms: null, ex: 'Hwonne cymþ hē?', exRu: 'Когда он придёт?', note: 'Ср. þonne «тогда, когда».' },
        { id: 'ang-the', w: 'þe', ru: 'который (неизменяемая частица)', pos: 'part', forms: 'тж. se þe, sēo þe, þæt þe', ex: 'se mann þe hēr wæs', exRu: 'человек, который был здесь', note: null },
        { id: 'ang-swilc', w: 'swilċ', ru: 'такой', pos: 'pron', forms: 'swilċ (как сильн. прил.); поздн. swylċ', ex: 'Swilċ mann is wīs.', exRu: 'Такой человек мудр.', note: 'Совр. such. swilċ … swilċ «такой … какой».' }
      ],
      text: null
    },
    {
      id: 'ang-u02-l04',
      kind: 'reading',
      title: '«Отче наш» (Мф. 6:9–13)',
      goals: ['Читать молитву в западносаксонском переводе', 'Узнавать падежи после предлогов', 'Заметить сослагательное желания и повелительное'],
      skills: ['ang.reading', 'ang.case.use', 'ang.syntax.rel'],
      theory: [
        { type: 'p', text: 'Текст — по западносаксонскому переводу Евангелий (конец X в.), с поздними написаниями **y** (syle, forġyf, ālȳs).' },
        { type: 'rule', text: 'Пожелания выражаются **сослагательным**: **sī** (от wesan) «да будет», **tōbecume** «да придёт», **ġewurþe** «да будет (свершится)». Просьбы — **повелительным**: **syle** «дай», **forġyf** «прости», **ālȳs** «избавь».' },
        { type: 'p', text: '**ūrum gyltendum** — дат. мн. причастия gyltend «согрешающий, должник» (ср. рус. «должникам нашим»): forġiefan требует дательного лица и винительного вещи.' }
      ],
      vocab: [
        { id: 'ang-heofon', w: 'heofon', ru: 'небо, небеса', pos: 'n', g: 'm', forms: 'heofon, -es m. (a-основа; мн. heofonas)', ex: 'on heofonum', exRu: 'на небесах', note: 'Совр. heaven.' },
        { id: 'ang-eorthe', w: 'eorþe', ru: 'земля', pos: 'n', g: 'f', forms: 'eorþe, -an f. (n-основа)', ex: 'on eorþan', exRu: 'на земле', note: 'Совр. earth, нем. Erde.' },
        { id: 'ang-rice', w: 'rīċe', ru: 'царство, власть', pos: 'n', g: 'n', forms: 'rīċe, -es n. (ja-основа)', ex: 'Tōbecume þīn rīċe.', exRu: 'Да приидет Царствие Твоё.', note: 'Нем. Reich.' },
        { id: 'ang-willa', w: 'willa', ru: 'воля, желание', pos: 'n', g: 'm', forms: 'willa, -an m. (n-основа)', ex: 'Ġewurþe þīn willa.', exRu: 'Да будет воля Твоя.', note: null },
        { id: 'ang-nama', w: 'nama', ru: 'имя', pos: 'n', g: 'm', forms: 'nama, -an m. (n-основа)', ex: 'Hwæt is þīn nama?', exRu: 'Как тебя зовут?', note: 'Нем. Name.' },
        { id: 'ang-gylt', w: 'gylt', ru: 'вина, грех, долг', pos: 'n', g: 'm', forms: 'gylt, -es m. (a-основа)', ex: 'Forġief ūs ūre gyltas.', exRu: 'Прости нам грехи наши.', note: 'Совр. guilt.' },
        { id: 'ang-forgiefan', w: 'forġiefan', ru: 'прощать; отдавать', pos: 'v', forms: 'forġiefan, forġeaf, forġēafon, forġiefen (V кл.)', ex: 'Wē forġiefaþ him.', exRu: 'Мы прощаем им.', note: 'Кому — дат., что — вин. Поздн. forġyfan.' },
        { id: 'ang-aliesan', w: 'ālīesan', ru: 'освобождать, избавлять', pos: 'v', forms: 'ālīesan, ālīesde, ālīesed (сл. I)', ex: 'Ālīes ūs of yfele.', exRu: 'Избавь нас от зла.', note: 'Поздн. ālȳsan.' },
        { id: 'ang-costnung', w: 'costnung', ru: 'искушение', pos: 'n', g: 'f', forms: 'costnung, -e f. (ō-основа)', ex: 'on costnunge', exRu: 'во искушение', note: '-ung — продуктивный суффикс отглагольных сущ. ж. р.' },
        { id: 'ang-yfel', w: 'yfel', ru: 'зло', pos: 'n', g: 'n', forms: 'yfel, yfles n. (a-основа)', ex: 'of yfele', exRu: 'от зла', note: 'Совр. evil, нем. Übel.' },
        { id: 'ang-sothlice', w: 'sōþlīċe', ru: 'воистину; (в начале фразы) же, ведь', pos: 'adv', forms: null, ex: 'Sōþlīċe hit wæs swā.', exRu: 'Воистину так и было.', note: 'Переводит лат. autem, vero, amen.' },
        { id: 'ang-swa', w: 'swā', ru: 'так; как', pos: 'adv', forms: 'swā swā «так же как»', ex: 'swā swā on heofonum', exRu: 'как и на небесах', note: 'Совр. so.' }
      ],
      text: {
        title: 'Fæder ūre (Мф. 6:9–13)',
        lines: [
          { t: 'Fæder ūre, þū þe eart on heofonum,', ru: 'Отче наш, сущий на небесах,' },
          { t: 'sī þīn nama ġehālgod.', ru: 'да святится имя Твоё (букв. да будет имя Твоё освящено).' },
          { t: 'Tōbecume þīn rīċe.', ru: 'Да придёт Царствие Твоё.' },
          { t: 'Ġewurþe þīn willa on eorþan swā swā on heofonum.', ru: 'Да будет воля Твоя на земле, как и на небесах.' },
          { t: 'Ūrne ġedæġhwāmlīcan hlāf syle ūs tō dæġ.', ru: 'Наш насущный (букв. ежедневный) хлеб дай нам сегодня.' },
          { t: 'And forġyf ūs ūre gyltas, swā swā wē forġyfaþ ūrum gyltendum.', ru: 'И прости нам наши долги, как и мы прощаем нашим должникам.' },
          { t: 'And ne ġelǣd þū ūs on costnunge, ac ālȳs ūs of yfele.', ru: 'И не введи нас во искушение, но избавь нас от лукавого (зла).' },
          { t: 'Sōþlīċe.', ru: 'Аминь (букв. воистину).' }
        ]
      }
    }
  ]
};

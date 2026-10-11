export default {
  id: 'ang-u05',
  title: 'Se gōda cyning',
  titleRu: 'Прилагательные и числительные',
  summary: 'Сильное и слабое склонение прилагательных и правило выбора между ними, степени сравнения и наречия, количественные слова и числительные. Чтение — притча о доме на камне.',
  lessons: [
    {
      id: 'ang-u05-l01',
      kind: 'grammar',
      title: 'Сильное склонение прилагательных',
      goals: ['Склонять сильное прилагательное (gōd)', 'Узнавать «местоименные» окончания -ne, -re, -ra', 'Знать, когда употребляется сильная форма'],
      skills: ['ang.adj.strong'],
      theory: [
        { type: 'rule', text: '**Сильное** склонение — когда перед прилагательным **нет** указательного или притяжательного местоимения, а также в именной части сказуемого: **gōd cyning** «добрый король», **se cyning is gōd** «король добр».' },
        { type: 'table', caption: 'gōd «добрый» — сильное склонение', head: ['', 'м.', 'ж.', 'ср.'],
          rows: [
            ['ед. им.', 'gōd', 'gōd', 'gōd'],
            ['вин.', 'gōd{{ne}}', 'gōd{{e}}', 'gōd'],
            ['род.', 'gōd{{es}}', 'gōd{{re}}', 'gōd{{es}}'],
            ['дат.', 'gōd{{um}}', 'gōd{{re}}', 'gōd{{um}}'],
            ['твор.', 'gōd{{e}}', 'gōd{{re}}', 'gōd{{e}}'],
            ['мн. им./вин.', 'gōd{{e}}', 'gōd{{a}}, -e', 'gōd'],
            ['род.', 'gōd{{ra}}', 'gōd{{ra}}', 'gōd{{ra}}'],
            ['дат.', 'gōd{{um}}', 'gōd{{um}}', 'gōd{{um}}']
          ],
          note: 'Кратко­сложные (til «хороший»): им. ед. ж. и им./вин. мн. ср. — tilu. В поздних текстах -e распространяется на все формы мн. ч.' },
        { type: 'p', text: 'Окончания смешанные: часть — как у существительных (-es, -e), часть — **местоименные**, как у se/þes: **-ne** (þone, þisne), **-re** (þǣre, þisse), **-ra** (þāra, þissa), **-um** (þissum).' },
        { type: 'rule', text: 'Синкопа в двусложных: **hāliġ → hālgum, hālge**; **miċel → miclum**; **fæġer → fæġrum** (но без синкопы перед согласным: hāliġne).' },
        { type: 'examples', items: [
          { t: 'Hē wæs gōd cyning.', ru: 'Он был добрым королём.' },
          { t: 'Hē ġeseah ealdne mann.', ru: 'Он увидел старого человека.' },
          { t: 'mid hālgum wordum', ru: 'святыми словами' },
          { t: 'Þā stānas sindon hearde and miċele.', ru: 'Камни твёрды и велики.' }
        ] },
        { type: 'tip', text: 'Сравните с немецким: **guter Wein, gutes Brot** — тоже местоименные окончания (dieser, dieses), когда нет артикля.' }
      ],
      vocab: [
        { id: 'ang-god-adj', w: 'gōd', ru: 'добрый, хороший', pos: 'adj', forms: 'сравн. betera (sēlra), превосх. betst (sēlest)', ex: 'Þæt wæs gōd cyning!', exRu: 'То был добрый король!', note: 'Не путать с god m. «бог».' },
        { id: 'ang-eald', w: 'eald', ru: 'старый', pos: 'adj', forms: 'сравн. ieldra, превосх. ieldest', ex: 'Se mann is eald.', exRu: 'Этот человек стар.', note: 'Поздн. yldra. Ср. elder, eldest.' },
        { id: 'ang-geong', w: 'ġeong', ru: 'молодой', pos: 'adj', forms: 'сравн. ġingra, превосх. ġingest', ex: 'Hē wæs ġeong.', exRu: 'Он был молод.', note: 'Совр. young.' },
        { id: 'ang-lang', w: 'lang', ru: 'длинный, долгий', pos: 'adj', forms: 'сравн. lengra, превосх. lengest', ex: 'lange hwīle', exRu: 'долгое время', note: 'Также long.' },
        { id: 'ang-strang', w: 'strang', ru: 'сильный', pos: 'adj', forms: 'сравн. strengra, превосх. strengest', ex: 'Se here wæs strang.', exRu: 'Войско было сильным.', note: 'Сущ. strengþu «сила».' },
        { id: 'ang-wis', w: 'wīs', ru: 'мудрый', pos: 'adj', forms: 'сравн. wīsra, превосх. wīsost', ex: 'Hēo is swīþe wīs.', exRu: 'Она очень мудра.', note: 'Совр. wise.' },
        { id: 'ang-earm', w: 'earm', ru: 'бедный, несчастный', pos: 'adj', forms: 'сравн. earmra, превосх. earmost', ex: 'earm ċeorl', exRu: 'бедный крестьянин', note: 'Нем. arm. Не путать с earm m. «рука».' },
        { id: 'ang-heard', w: 'heard', ru: 'твёрдый, суровый, храбрый', pos: 'adj', forms: 'сравн. heardra, превосх. heardost', ex: 'Se stān is heard.', exRu: 'Камень твёрд.', note: null },
        { id: 'ang-halig', w: 'hāliġ', ru: 'святой', pos: 'adj', forms: 'hāliġ, мн. hālge (синкопа)', ex: 'se hālga wer', exRu: 'святой муж', note: 'Совр. holy, нем. heilig.' },
        { id: 'ang-faeger', w: 'fæġer', ru: 'прекрасный', pos: 'adj', forms: 'сравн. fæġerra, превосх. fæġerest', ex: 'fæġer land', exRu: 'прекрасная страна', note: 'Совр. fair.' },
        { id: 'ang-deop', w: 'dēop', ru: 'глубокий', pos: 'adj', forms: 'сравн. dēopra, превосх. dēopost', ex: 'Þæt wæter is dēop.', exRu: 'Вода глубока.', note: null },
        { id: 'ang-wid', w: 'wīd', ru: 'широкий', pos: 'adj', forms: 'сравн. wīdra, превосх. wīdost; нареч. wīde', ex: 'wīde ġeond eorþan', exRu: 'широко по земле', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u05-l02',
      kind: 'grammar',
      title: 'Слабое склонение прилагательных',
      goals: ['Склонять слабое прилагательное (gōda)', 'Выбирать сильную или слабую форму', 'Не переносить сюда русские полные/краткие формы'],
      skills: ['ang.adj.weak'],
      theory: [
        { type: 'rule', text: '**Слабое** склонение — после **se, þes** и притяжательных (**mīn, þīn, his…**), в обращении, у сравнительной степени (всегда) и у порядковых числительных (кроме ōþer): **se gōda cyning**, **mīn lēofa sunu**, **ēalā lēofa hlāford!**' },
        { type: 'table', caption: 'gōd — слабое склонение', head: ['', 'м.', 'ж.', 'ср.'],
          rows: [
            ['ед. им.', 'gōd{{a}}', 'gōd{{e}}', 'gōd{{e}}'],
            ['вин.', 'gōd{{an}}', 'gōd{{an}}', 'gōd{{e}}'],
            ['род.', 'gōd{{an}}', 'gōd{{an}}', 'gōd{{an}}'],
            ['дат.', 'gōd{{an}}', 'gōd{{an}}', 'gōd{{an}}'],
            ['мн. им./вин.', 'gōd{{an}}', 'gōd{{an}}', 'gōd{{an}}'],
            ['род.', 'gōd{{ra}}, -ena', 'gōd{{ra}}, -ena', 'gōd{{ra}}, -ena'],
            ['дат.', 'gōd{{um}}', 'gōd{{um}}', 'gōd{{um}}']
          ],
          note: 'Окончания совпадают со слабыми существительными (nama, tunge, ēage — юнит 6). В поздних текстах дат. мн. часто -an.' },
        { type: 'examples', items: [
          { t: 'se gōda cyning', ru: 'добрый король' },
          { t: 'þǣm wīsan were', ru: 'мудрому мужу (дат.)' },
          { t: 'sēo ġeonge cwēn', ru: 'молодая королева' },
          { t: 'þæt hālge word', ru: 'святое слово', note: 'синкопа: hāliġ → hālge' },
          { t: 'mid þǣm strengran here', ru: 'с более сильным войском' }
        ] },
        { type: 'contrast', text: 'Соблазн отождествить сильное/слабое с русскими краткими/полными формами — **ложный друг**. Русская краткая форма — предикативная («король добр»), а древнеанглийская сильная — и предикативная, и атрибутивная (**gōd cyning**). Различие здесь — в **определённости**, как в немецком **ein guter Mann / der gute Mann**. Историческая перекличка есть (славянские полные формы когда-то возникли как определённые, из краткой формы + местоимение), но в современном русском это различие не про определённость.' },
        { type: 'pitfall', text: '**ōþer** «другой, второй», **eall**, **maniġ**, **ǣniġ** и притяжательные сами всегда склоняются **сильно**: *se ōþer dæġ*, *mīnne hlāf*. А вот прилагательное **после** них — слабое: *mīn lēofa sunu*.' },
        { type: 'tip', text: 'Мнемоника: где «работу» указания уже сделал артикль, прилагательному остаётся «слабое» -a/-e/-an.' }
      ],
      vocab: [
        { id: 'ang-dead', w: 'dēad', ru: 'мёртвый', pos: 'adj', forms: 'dēad; слаб. dēada', ex: 'Se cyning is dēad.', exRu: 'Король мёртв.', note: 'Сущ. dēaþ «смерть».' },
        { id: 'ang-blithe', w: 'blīþe', ru: 'радостный; милостивый', pos: 'adj', forms: 'blīþe (ja-основа)', ex: 'Hēo wæs blīþe.', exRu: 'Она была радостна.', note: 'Совр. blithe.' },
        { id: 'ang-cene', w: 'cēne', ru: 'смелый', pos: 'adj', forms: 'cēne (ja-основа); сравн. cēnra', ex: 'se cēna þeġn', exRu: 'смелый тэн', note: 'Совр. keen, нем. kühn.' },
        { id: 'ang-niwe', w: 'nīwe', ru: 'новый', pos: 'adj', forms: 'nīwe (ja-основа)', ex: 'nīwe scip', exRu: 'новый корабль', note: 'Поздн. nīwe, nēowe.' },
        { id: 'ang-rice-adj', w: 'rīċe', ru: 'могущественный; богатый', pos: 'adj', forms: 'rīċe (ja-основа)', ex: 'se rīċa mann', exRu: 'богатый человек', note: 'Ср. сущ. rīċe n. «царство». Совр. rich.' },
        { id: 'ang-soth', w: 'sōþ', ru: 'истинный; (сущ. n.) истина', pos: 'adj', forms: 'sōþ; слаб. sōþa', ex: 'Þæt is sōþ.', exRu: 'Это правда.', note: 'Совр. sooth, forsooth.' },
        { id: 'ang-leof', w: 'lēof', ru: 'милый, дорогой', pos: 'adj', forms: 'сравн. lēofra, превосх. lēofost', ex: 'Ēalā lēofa hlāford!', exRu: 'О дорогой господин!', note: 'Нем. lieb. Обращение — слабая форма.' },
        { id: 'ang-hwit', w: 'hwīt', ru: 'белый', pos: 'adj', forms: 'hwīt; слаб. hwīta', ex: 'se hwīta stān', exRu: 'белый камень', note: null },
        { id: 'ang-sweart', w: 'sweart', ru: 'чёрный, тёмный', pos: 'adj', forms: 'sweart; слаб. swearta', ex: 'sweart niht', exRu: 'тёмная ночь', note: 'Нем. schwarz.' },
        { id: 'ang-other', w: 'ōþer', ru: 'другой; второй', pos: 'adj', forms: 'ōþer, ōþerne, ōþres… (только сильн.)', ex: 'se ōþer dæġ', exRu: 'второй день', note: 'Всегда сильное склонение.' }
      ],
      text: null
    },
    {
      id: 'ang-u05-l03',
      kind: 'grammar',
      title: 'Степени сравнения, наречия, количество',
      goals: ['Образовывать сравнительную и превосходную степень', 'Знать супплетивные формы (gōd — betera — betst)', 'Образовывать наречия на -e и -līċe'],
      skills: ['ang.adj.compar', 'ang.adv'],
      theory: [
        { type: 'rule', text: 'Сравнительная степень — **-ra** (всегда слабое склонение: м. -ra, ж./ср. -re), превосходная — **-ost** или **-est** (часто с i-умлаутом): **earm — earmra — earmost**, **lang — lengra — lengest**.' },
        { type: 'table', caption: 'Неправильное сравнение', head: ['полож.', 'сравн.', 'превосх.', 'значение'],
          rows: [
            ['gōd', 'betera, sēlra', 'betst, sēlest', 'хороший'],
            ['yfel', 'wiersa', 'wierrest, wierst', 'плохой'],
            ['miċel', 'māra', 'mǣst', 'большой'],
            ['lȳtel', 'lǣssa', 'lǣst', 'маленький'],
            ['eald', 'ieldra', 'ieldest', 'старый'],
            ['ġeong', 'ġingra', 'ġingest', 'молодой'],
            ['hēah', 'hīerra', 'hīehst', 'высокий']
          ],
          note: 'Поздн. wyrsa, yldra, hȳrra, hȳhst.' },
        { type: 'rule', text: '«Чем» — **þonne** + тот же падеж (*hē is wīsra þonne iċ*) или дательный без союза (в поэзии). «Тем… чем»: **þȳ … þȳ**.' },
        { type: 'table', caption: 'Наречия', head: ['прил.', 'нареч.', 'сравн.', 'превосх.'],
          rows: [
            ['wīd', 'wīd{{e}}', 'wīd{{or}}', 'wīd{{ost}}'],
            ['sōþ', 'sōþ{{līċe}}', 'sōþlīc{{or}}', 'sōþlīc{{ost}}'],
            ['gōd', 'wel', 'bet', 'betst'],
            ['miċel', 'micl{{e}}', 'mā', 'mǣst'],
            ['lȳtel', 'lȳt', 'lǣs', 'lǣst']
          ] },
        { type: 'p', text: 'Количественные слова: **fela** «много» (неизменяемо + род.: *fela manna*), **maniġ** «многий» (согласуется: *maniġe menn*), **fēawe** «немногие», **eall** «весь», **ǣniġ** «какой-либо», **nān** «никакой» (< ne + ān).' },
        { type: 'contrast', text: 'Как русское «много людей», **fela** требует родительного; **maniġ** — согласуемое прилагательное, как «многие люди».' },
        { type: 'tip', text: 'betera/betst → better/best, wiersa → worse, māra/mǣst → more/most, lǣssa/lǣst → less/least, ieldra → elder.' }
      ],
      vocab: [
        { id: 'ang-micel', w: 'miċel', ru: 'большой, великий; много', pos: 'adj', forms: 'сравн. māra, превосх. mǣst; дат. мн. miclum', ex: 'Þǣr wæs miċel here.', exRu: 'Там было большое войско.', note: 'Поздн. myċel; совр. much.' },
        { id: 'ang-lytel', w: 'lȳtel', ru: 'маленький, малый', pos: 'adj', forms: 'сравн. lǣssa, превосх. lǣst', ex: 'lȳtle werede', exRu: 'с малым отрядом', note: 'Совр. little — less — least.' },
        { id: 'ang-yfel-adj', w: 'yfel', ru: 'плохой, злой', pos: 'adj', forms: 'сравн. wiersa, превосх. wierrest', ex: 'yfel mann', exRu: 'злой человек', note: 'Ср. сущ. yfel n. «зло».' },
        { id: 'ang-heah', w: 'hēah', ru: 'высокий', pos: 'adj', forms: 'сравн. hīerra, превосх. hīehst; косв. hēan-', ex: 'hēah munt', exRu: 'высокая гора', note: 'Совр. high, нем. hoch.' },
        { id: 'ang-eall', w: 'eall', ru: 'весь, все', pos: 'adj', forms: 'eall, ealne, ealles… (сильн.)', ex: 'ealle menn', exRu: 'все люди', note: 'Совр. all.' },
        { id: 'ang-manig', w: 'maniġ', ru: 'многий', pos: 'adj', forms: 'maniġ (сильн.); поздн. moniġ', ex: 'maniġe ġēar', exRu: 'много лет', note: 'Совр. many.' },
        { id: 'ang-fela', w: 'fela', ru: 'много (+ род.)', pos: 'adv', forms: 'неизменяемо', ex: 'fela manna', exRu: 'много людей', note: 'Нем. viel.' },
        { id: 'ang-feawe', w: 'fēawe', ru: 'немногие, мало', pos: 'adj', forms: 'мн. fēawe (fēa); дат. fēawum', ex: 'æfter fēawum dagum', exRu: 'через несколько дней', note: 'Совр. few.' },
        { id: 'ang-nan', w: 'nān', ru: 'никакой, ни один', pos: 'pron', forms: 'nān, nānne… (сильн.)', ex: 'Nān mann hit nyste.', exRu: 'Никто этого не знал.', note: '< ne + ān; совр. none, no.' },
        { id: 'ang-aenig', w: 'ǣniġ', ru: 'какой-либо, любой', pos: 'pron', forms: 'ǣniġ, ǣniġne… (сильн.)', ex: 'Hæfst þū ǣniġne ġefēran?', exRu: 'Есть ли у тебя какой-нибудь товарищ?', note: 'Совр. any.' },
        { id: 'ang-oft', w: 'oft', ru: 'часто', pos: 'adv', forms: 'сравн. oftor, превосх. oftost', ex: 'Hē cōm oft.', exRu: 'Он часто приходил.', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u05-l04',
      kind: 'grammar',
      title: 'Числительные',
      goals: ['Склонять ān, twēġen, þrīe', 'Строить сочетания с числительными 4–20+', 'Узнавать порядковые числительные'],
      skills: ['ang.num'],
      theory: [
        { type: 'p', text: '**ān** склоняется как сильное прилагательное (ānne, ānes, ānum…) и значит «один; некий»; слабое **āna** — «один, в одиночку». Неопределённого артикля нет, но ān и **sum** иногда близки к нему.' },
        { type: 'table', caption: 'twēġen «два», þrīe «три»', head: ['', 'м.', 'ж.', 'ср.'],
          rows: [
            ['им./вин.', 'twēġen', 'twā', 'tū, twā'],
            ['род.', 'twēġa, twēġra', 'twēġa, twēġra', 'twēġa, twēġra'],
            ['дат.', 'twǣm, twām', 'twǣm, twām', 'twǣm, twām'],
            ['им./вин.', 'þrīe', 'þrēo', 'þrēo'],
            ['род.', 'þrēora', 'þrēora', 'þrēora'],
            ['дат.', 'þrim', 'þrim', 'þrim']
          ],
          note: 'Поздн. þrȳ (= þrīe). Ср. рус. «два» (м., ср.) / «две» (ж.).' },
        { type: 'rule', text: '**4–19** при существительном обычно не склоняются (*fīf hlāfas*); **20 и больше** (twēntiġ, þrītiġ, hund, þūsend) — существительные с **родительным**: **twēntiġ wintra** «двадцать зим (= лет)».' },
        { type: 'table', caption: 'Порядковые', head: ['', 'порядковое'],
          rows: [
            ['1', 'forma, fyrmesta, ǣrest'],
            ['2', 'ōþer'],
            ['3', 'þridda'],
            ['4', 'fēorþa'],
            ['5', 'fīfta'],
            ['7', 'seofoþa'],
            ['10', 'tēoþa']
          ],
          note: 'Все порядковые, кроме ōþer, склоняются по слабому типу.' },
        { type: 'contrast', text: 'Как в русском, при 20+ — родительный (двадцать зим), но, в отличие от русского, при 5–19 существительное согласуется: *fīf hlāfas* (им. мн.), а не «пять хлебов» (род.).' },
        { type: 'tip', text: 'Годы в Хронике считают зимами: *hē rīcsode xxx wintra* «он правил 30 лет».' }
      ],
      vocab: [
        { id: 'ang-an', w: 'ān', ru: 'один; некий', pos: 'num', forms: 'ān, ānne, ānes, ānum (сильн.); āna «один, в одиночку»', ex: 'ān cyning', exRu: 'один король', note: 'Совр. one, a/an.' },
        { id: 'ang-twegen', w: 'twēġen', ru: 'два', pos: 'num', forms: 'twēġen m., twā f., tū n.; twēġa; twǣm', ex: 'twēġen suna', exRu: 'два сына', note: 'Совр. twain, two.' },
        { id: 'ang-thrie', w: 'þrīe', ru: 'три', pos: 'num', forms: 'þrīe m., þrēo f./n.; þrēora; þrim', ex: 'þrēo scipu', exRu: 'три корабля', note: null },
        { id: 'ang-feower', w: 'fēower', ru: 'четыре', pos: 'num', forms: 'обычно не склоняется', ex: 'fēower dagas', exRu: 'четыре дня', note: null },
        { id: 'ang-fif', w: 'fīf', ru: 'пять', pos: 'num', forms: 'обычно не склоняется', ex: 'fīf hlāfas', exRu: 'пять хлебов', note: null },
        { id: 'ang-siex', w: 'siex', ru: 'шесть', pos: 'num', forms: 'поздн. six, syx', ex: 'siex ġēar', exRu: 'шесть лет', note: null },
        { id: 'ang-seofon', w: 'seofon', ru: 'семь', pos: 'num', forms: 'обычно не склоняется', ex: 'seofon tīda', exRu: 'семь часов (служб)', note: null },
        { id: 'ang-eahta', w: 'eahta', ru: 'восемь', pos: 'num', forms: 'обычно не склоняется', ex: 'eahta scipu', exRu: 'восемь кораблей', note: 'h = [x]; нем. acht.' },
        { id: 'ang-nigon', w: 'nigon', ru: 'девять', pos: 'num', forms: 'обычно не склоняется', ex: 'nigon niht', exRu: 'девять ночей', note: null },
        { id: 'ang-tien', w: 'tīen', ru: 'десять', pos: 'num', forms: 'поздн. tȳn', ex: 'tīen menn', exRu: 'десять человек', note: '-tīene в 13–19: þrēotīene.' },
        { id: 'ang-endleofan', w: 'endleofan', ru: 'одиннадцать', pos: 'num', forms: 'обычно не склоняется', ex: 'endleofan cnihtas', exRu: 'одиннадцать юношей', note: 'Совр. eleven.' },
        { id: 'ang-twelf', w: 'twelf', ru: 'двенадцать', pos: 'num', forms: 'обычно не склоняется', ex: 'twelf apostolas', exRu: 'двенадцать апостолов', note: null },
        { id: 'ang-twentig', w: 'twēntiġ', ru: 'двадцать', pos: 'num', forms: '+ род.', ex: 'twēntiġ wintra', exRu: 'двадцать лет', note: null },
        { id: 'ang-hund-num', w: 'hund', ru: 'сто', pos: 'num', g: 'n', forms: 'hund n. (+ род.); также hundtēontiġ', ex: 'hund scipa', exRu: 'сто кораблей', note: 'Не путать с hund m. «собака».' }
      ],
      text: null
    },
    {
      id: 'ang-u05-l05',
      kind: 'reading',
      title: 'Притча о доме на камне (Мф. 7:24–27)',
      goals: ['Читать евангельскую притчу', 'Находить слабые прилагательные после артикля', 'Узнавать se в роли относительного'],
      skills: ['ang.reading', 'ang.adj.weak', 'ang.syntax.rel'],
      theory: [
        { type: 'p', text: 'Западносаксонские Евангелия, с поздними написаниями (ġehȳrþ; в рукописи также byþ).' },
        { type: 'rule', text: '**þǣm wīsan were**, **þǣm dysigan men** — слабые прилагательные после артикля, в дательном (ġelīċ «подобный» требует дательного). **se his hūs … ġetimbrode** — se в функции относительного «который».' },
        { type: 'p', text: '**biþ** (не is) — общая истина: «всякий, кто… — подобен». **mīne** во мн. ср. — позднее -e вместо нулевого окончания. **men** — дат. ед. от mann (юнит 6).' }
      ],
      vocab: [
        { id: 'ang-gelic', w: 'ġelīċ', ru: 'подобный, похожий (+ дат.)', pos: 'adj', forms: 'ġelīċ; слаб. ġelīca; нареч. ġelīċe', ex: 'Hē is his fæder ġelīċ.', exRu: 'Он похож на своего отца.', note: 'Совр. like, нем. gleich.' },
        { id: 'ang-getimbrian', w: 'ġetimbrian', ru: 'строить', pos: 'v', forms: 'ġetimbrian, ġetimbrode, ġetimbrod (сл. II)', ex: 'Hē ġetimbrode his hūs.', exRu: 'Он построил свой дом.', note: 'Ср. timber, нем. Zimmer.' },
        { id: 'ang-regn', w: 'reġn', ru: 'дождь', pos: 'n', g: 'm', forms: 'reġn, -es m. (a-основа)', ex: 'Þā cōm reġn.', exRu: 'Тогда пошёл дождь.', note: 'Позднее rēn.' },
        { id: 'ang-wind', w: 'wind', ru: 'ветер', pos: 'n', g: 'm', forms: 'wind, -es m. (a-основа)', ex: 'Þā blēowon windas.', exRu: 'Тогда подули ветры.', note: null },
        { id: 'ang-flod', w: 'flōd', ru: 'поток, наводнение; прилив', pos: 'n', g: 'm', forms: 'flōd, -es m./n. (a-основа)', ex: 'miċel flōd', exRu: 'большой поток', note: 'Совр. flood.' },
        { id: 'ang-dysig', w: 'dysiġ', ru: 'глупый', pos: 'adj', forms: 'dysiġ; слаб. dysiga', ex: 'se dysiga mann', exRu: 'глупый человек', note: 'Совр. dizzy.' },
        { id: 'ang-hryre', w: 'hryre', ru: 'падение, разрушение', pos: 'n', g: 'm', forms: 'hryre, -es m. (i-основа)', ex: 'His hryre wæs miċel.', exRu: 'Его падение было велико.', note: null },
        { id: 'ang-na', w: 'nā', ru: 'никак, нисколько, не', pos: 'adv', forms: 'тж. nō', ex: 'Hit nā ne fēoll.', exRu: 'Он ничуть не упал.', note: '< ne + ā «никогда». Совр. no.' }
      ],
      text: {
        title: 'Мф. 7:24–27 (западносаксонские Евангелия)',
        lines: [
          { t: 'Ǣlċ þāra þe þās mīne word ġehȳrþ and þā wyrċþ, biþ ġelīċ þǣm wīsan were,', ru: 'Всякий из тех, кто слышит эти мои слова и исполняет их, подобен мудрому мужу,' },
          { t: 'se his hūs ofer stān ġetimbrode.', ru: 'который построил свой дом на камне.' },
          { t: 'Þā cōm þǣr reġn and miċele flōd, and þǣr blēowon windas and āhruron on þæt hūs,', ru: 'Тогда пошёл дождь и пришли большие потоки, и подули ветры и обрушились на тот дом,' },
          { t: 'and hit nā ne fēoll: sōþlīċe hit wæs ofer stān ġetimbrod.', ru: 'и он не упал: ведь он был построен на камне.' },
          { t: 'And ǣlċ þāra þe ġehȳrþ þās mīne word and þā ne wyrċþ, se biþ ġelīċ þǣm dysigan men', ru: 'А всякий, кто слышит эти мои слова и не исполняет их, подобен глупому человеку,' },
          { t: 'þe his hūs ofer sandċeosol ġetimbrode.', ru: 'который построил свой дом на песке.' },
          { t: 'Þā rīnde hit, and þǣr cōmon flōd and blēowon windas and āhruron on þæt hūs,', ru: 'Тогда пошёл дождь, и пришли потоки, и подули ветры и обрушились на тот дом,' },
          { t: 'and þæt hūs fēoll, and his hryre wæs miċel.', ru: 'и дом упал, и падение его было велико.' }
        ]
      }
    }
  ]
};

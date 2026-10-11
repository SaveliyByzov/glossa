export default {
  id: 'ang-u01',
  title: 'Iċ eom, þū eart',
  titleRu: 'Звуки и буквы, личные местоимения, «быть»',
  summary: 'Нормализованная орфография и чтение, личные местоимения (включая двойственное число), два глагола «быть» — wesan и bēon. В конце — начало «Беседы» Эльфрика.',
  lessons: [
    {
      id: 'ang-u01-l01',
      kind: 'grammar',
      title: 'Буквы и звуки',
      goals: ['Читать þ/ð, æ, ċ, ġ, sc, cg', 'Различать долгие и краткие гласные', 'Знать правило озвончения f, s, þ'],
      skills: ['ang.orth.letters', 'ang.orth.pron'],
      theory: [
        { type: 'p', text: 'Курс опирается на **поздний западносаксонский** (язык Эльфрика, ок. 1000 г.) в нормализованной орфографии учебников: долгота гласных — макрон (**stān**), палатальные согласные — точка (**ċ**, **ġ**). В рукописях нет ни того, ни другого: там просто *stan, cild, dæg*.' },
        { type: 'table', caption: 'Особые буквы и сочетания', head: ['буква', 'звук', 'пример', 'потомок'],
          rows: [
            ['þ, ð', '[θ] / [ð]', 'þing, ōþer', 'thing, other'],
            ['æ / ǣ', '[æ] / [æː]', 'dæġ, sǣ', 'day, sea'],
            ['c', '[k]', 'cyning, cnēow', 'king, knee'],
            ['ċ', '[tʃ]', 'ċild, iċ', 'child, (I)'],
            ['g', '[g]; [ɣ] между гласными заднего ряда', 'gōd, dagas', 'good, days'],
            ['ġ', '[j]', 'ġēar, dæġ', 'year, day'],
            ['sc', '[ʃ]', 'scip, fisc', 'ship, fish'],
            ['cg', '[dʒ]', 'brycg, ecg', 'bridge, edge'],
            ['y / ȳ', '[y] / [yː] (как нем. ü)', 'cynn, fȳr', 'kin, fire'],
            ['ƿ (винн)', '[w]', 'ƿīf = wīf', 'wife']
          ],
          note: 'þ и ð в рукописях взаимозаменяемы: оба обозначают и [θ], и [ð]. В курсе принято: þ в начале слова, ð/þ внутри — но при вводе это одна буква. ƿ в изданиях обычно заменяют на w.' },
        { type: 'rule', text: '**f, s, þ** звонкие [v, z, ð] между звонкими звуками и глухие [f, s, θ] в начале, в конце слова и при удвоении: **ofer** [ˈover], **rīsan** [ˈriːzan], **ōþer** [ˈoːðer], но **fīf** [fiːf], **hūs** [huːs], **moþþe**.' },
        { type: 'rule', text: '**h** — [h] в начале слова, иначе [x] или [ç] (как нем. ach/ich): **niht** [niçt], **þōhte** [θoːxte]. В **hl-, hr-, hn-, hw-** h произносится: **hlāf**, **hring**, **hwæt**.' },
        { type: 'p', text: 'Произносятся все буквы: **cniht** [kniçt], **wrītan** [ˈwriːtan], удвоенные согласные долгие (**sittan** — [tː]), конечное **-e** читается: **sunne** [ˈsunːe].' },
        { type: 'rule', text: 'Ударение — на первом слоге корня. Глагольные приставки **ġe-, be-, for-, ā-, tō-** безударны: **ġe·hīeran**, **for·ġiefan**.' },
        { type: 'table', caption: 'Гласные', head: ['кратк.', 'долг.', 'пример'],
          rows: [
            ['a', 'ā', 'mann — stān'],
            ['æ', 'ǣ', 'dæġ — dǣd'],
            ['e', 'ē', 'helpan — cwēn'],
            ['i', 'ī', 'scip — wīf'],
            ['o', 'ō', 'god «бог» — gōd «добрый»'],
            ['u', 'ū', 'sunu — hūs'],
            ['y', 'ȳ', 'cynn — fȳr'],
            ['ea, eo, ie', 'ēa, ēo, īe', 'eald, heorte — ēage, dēop, hīeran']
          ],
          note: 'Долгота смыслоразличительна: god «бог» / gōd «добрый», for «для» / fōr «поехал».' },
        { type: 'pitfall', text: 'Палатальность ċ/ġ не выводится из современного написания. **cyning** — [k], потому что y здесь из u (по умлауту), а умлаутные гласные не палатализуют; **dæġ** — [j], но **dagas** — [ɣ].' },
        { type: 'p', text: 'Варианты **ie / y / i**: в учебной норме (и в словарных леммах курса) — **ie** раннего западносаксонского (**hīeran**, **ġiefan**); у Эльфрика и в поздних текстах — **y** или **i** (**hȳran**, **ġyfan**, **ġifan**). В текстах для чтения сохранены поздние написания.' },
        { type: 'tip', text: 'Звуковые соответствия-мнемоники: **ā → oa/o** (stān → stone, hām → home, bān → bone), **ċ → ch** (ċild → child), **ġ → y** (ġēar → year), **sc → sh** (scip → ship), **cg → dge** (brycg → bridge). Немецкий: stān ~ Stein, hām ~ Heim, dæġ ~ Tag, cniht ~ Knecht.' },
        { type: 'tip', text: 'Ввод: макроны и точки можно не ставить (stan = stān, cild = ċild), ð = þ, ƿ = w.' }
      ],
      vocab: [
        { id: 'ang-cild', w: 'ċild', ru: 'ребёнок', pos: 'n', g: 'n', forms: 'ċild, -es n. (a-основа; мн. ċild, позднее ċildru)', ex: 'Þæt ċild is ġeong.', exRu: 'Ребёнок юн.', note: 'Совр. child.' },
        { id: 'ang-cniht', w: 'cniht', ru: 'юноша, слуга', pos: 'n', g: 'm', forms: 'cniht, -es m. (a-основа)', ex: 'Se cniht is on þǣm hūse.', exRu: 'Слуга в доме.', note: 'Совр. knight, нем. Knecht.' },
        { id: 'ang-cyning', w: 'cyning', ru: 'король', pos: 'n', g: 'm', forms: 'cyning, -es m. (a-основа)', ex: 'Ælfred wæs cyning.', exRu: 'Альфред был королём.', note: 'c = [k]: y здесь умлаутный.' },
        { id: 'ang-daeg', w: 'dæġ', ru: 'день', pos: 'n', g: 'm', forms: 'dæġ, dæġes m. (a-основа; мн. dagas)', ex: 'Hit is dæġ.', exRu: 'Сейчас день.', note: 'Во мн. ч. — a и [ɣ]: dagas, daga, dagum.' },
        { id: 'ang-gear', w: 'ġēar', ru: 'год', pos: 'n', g: 'n', forms: 'ġēar, -es n. (a-основа; мн. ġēar)', ex: 'On þǣm ġēare cōm se cyning.', exRu: 'В тот год пришёл король.', note: 'Совр. year.' },
        { id: 'ang-thing', w: 'þing', ru: 'вещь, дело', pos: 'n', g: 'n', forms: 'þing, -es n. (a-основа; мн. þing)', ex: 'Þæt is gōd þing.', exRu: 'Это добрая вещь.', note: null },
        { id: 'ang-scip', w: 'scip', ru: 'корабль', pos: 'n', g: 'n', forms: 'scip, -es n. (a-основа; мн. scipu)', ex: 'Þæt scip is on sǣ.', exRu: 'Корабль в море.', note: 'sc = [ʃ]: ship, нем. Schiff.' },
        { id: 'ang-brycg', w: 'brycg', ru: 'мост', pos: 'n', g: 'f', forms: 'brycg, -e f. (ō-основа)', ex: 'Hē stōd on þǣre brycge.', exRu: 'Он стоял на мосту.', note: 'cg = [dʒ]: bridge.' },
        { id: 'ang-fisc', w: 'fisc', ru: 'рыба', pos: 'n', g: 'm', forms: 'fisc, -es m. (a-основа)', ex: 'Se fisc is on þǣm wætere.', exRu: 'Рыба в воде.', note: null },
        { id: 'ang-hlaf', w: 'hlāf', ru: 'хлеб, каравай', pos: 'n', g: 'm', forms: 'hlāf, -es m. (a-основа)', ex: 'Sele mē hlāf.', exRu: 'Дай мне хлеба.', note: 'Отсюда hlāford «господин» (< hlāf-weard «хранитель хлеба»), совр. loaf, lord.' },
        { id: 'ang-hus', w: 'hūs', ru: 'дом', pos: 'n', g: 'n', forms: 'hūs, -es n. (a-основа; мн. hūs)', ex: 'Þis is mīn hūs.', exRu: 'Это мой дом.', note: 's в конце — глухое [s].' },
        { id: 'ang-niht', w: 'niht', ru: 'ночь', pos: 'n', g: 'f', forms: 'niht, род. nihte f. (корневая основа; мн. niht)', ex: 'Hit wæs niht.', exRu: 'Была ночь.', note: 'h = [ç]: нем. Nacht, Nicht-.' }
      ],
      text: null
    },
    {
      id: 'ang-u01-l02',
      kind: 'grammar',
      title: 'Личные местоимения',
      goals: ['Склонять личные местоимения 1–3 л.', 'Узнавать двойственное число wit, ġit', 'Различать притяжательные mīn/þīn и неизменяемые his/hire/hiera'],
      skills: ['ang.pron.personal'],
      theory: [
        { type: 'p', text: 'Четыре падежа: именительный, винительный, родительный, дательный. У 1-го и 2-го лица кроме ед. и мн. есть **двойственное число** («мы двое», «вы двое»).' },
        { type: 'table', caption: '1-е лицо', head: ['', 'ед.', 'дв.', 'мн.'],
          rows: [
            ['им.', 'iċ', 'wit', 'wē'],
            ['вин.', 'mē', 'unc', 'ūs'],
            ['род.', 'mīn', 'uncer', 'ūre'],
            ['дат.', 'mē', 'unc', 'ūs']
          ],
          note: 'Архаичные/англские вин. mec, ūsic встречаются в поэзии.' },
        { type: 'table', caption: '2-е лицо', head: ['', 'ед.', 'дв.', 'мн.'],
          rows: [
            ['им.', 'þū', 'ġit', 'ġē'],
            ['вин.', 'þē', 'inc', 'ēow'],
            ['род.', 'þīn', 'incer', 'ēower'],
            ['дат.', 'þē', 'inc', 'ēow']
          ],
          note: 'В поэзии вин. þec, ēowic.' },
        { type: 'table', caption: '3-е лицо', head: ['', 'м.', 'ж.', 'ср.', 'мн.'],
          rows: [
            ['им.', 'hē', 'hēo', 'hit', 'hīe'],
            ['вин.', 'hin{{e}}', 'hīe', 'hit', 'hīe'],
            ['род.', 'hi{{s}}', 'hir{{e}}', 'hi{{s}}', 'hier{{a}}'],
            ['дат.', 'hi{{m}}', 'hir{{e}}', 'hi{{m}}', 'hi{{m}}']
          ],
          note: 'Поздние варианты: hī, hȳ (= hīe); heora, hyra (= hiera); heom (= him мн.); hyre (= hire).' },
        { type: 'rule', text: 'Местоимение 3-го л. согласуется с **грамматическим** родом: о мече (sweord n.) — **hit**, о солнце (sunne f.) — **hēo**, о камне (stān m.) — **hē**.' },
        { type: 'contrast', text: 'Как в русском: **mīn, þīn, ūre, ēower, uncer, incer** склоняются как прилагательные (мой, твой, наш), а **his, hire, hiera** — застывшие родительные, не склоняются: точно как русские **его, её, их**. Mīnne hlāf «мой хлеб» (вин. м.), но his hlāf «его хлеб» в любом падеже.' },
        { type: 'pitfall', text: 'Дат. **him** — одновременно «ему» (м., ср.) и «им» (мн.). А **hīe** — и «её» (вин.), и «они/их» (им./вин. мн.). Решает контекст и согласование глагола.' },
        { type: 'p', text: 'Особого возвратного местоимения («себя») нет: используются обычные формы, при необходимости с **self**: **hē lufaþ hine selfne** «он любит себя самого».' },
        { type: 'tip', text: 'him, his, hit — почти без изменений в совр. английском; hēo ушло, hīe/hiera/him вытеснены скандинавскими they/their/them.' }
      ],
      vocab: [
        { id: 'ang-ic', w: 'iċ', ru: 'я', pos: 'pron', forms: 'mē, mīn, mē', ex: 'Iċ eom munuc.', exRu: 'Я монах.', note: null },
        { id: 'ang-thu', w: 'þū', ru: 'ты', pos: 'pron', forms: 'þē, þīn, þē', ex: 'Hwæt eart þū?', exRu: 'Кто ты?', note: null },
        { id: 'ang-he', w: 'hē', ru: 'он', pos: 'pron', g: 'm', forms: 'hine, his, him', ex: 'Hē is cyning.', exRu: 'Он король.', note: null },
        { id: 'ang-heo', w: 'hēo', ru: 'она', pos: 'pron', g: 'f', forms: 'hīe, hire, hire', ex: 'Hēo is cwēn.', exRu: 'Она королева.', note: null },
        { id: 'ang-hit', w: 'hit', ru: 'оно; это', pos: 'pron', g: 'n', forms: 'hit, his, him', ex: 'Hit is gōd.', exRu: 'Это хорошо.', note: null },
        { id: 'ang-we', w: 'wē', ru: 'мы', pos: 'pron', forms: 'ūs, ūre, ūs', ex: 'Wē sindon hēr.', exRu: 'Мы здесь.', note: null },
        { id: 'ang-ge', w: 'ġē', ru: 'вы', pos: 'pron', forms: 'ēow, ēower, ēow', ex: 'Hwǣr sindon ġē?', exRu: 'Где вы?', note: null },
        { id: 'ang-hie', w: 'hīe', ru: 'они', pos: 'pron', forms: 'hīe, hiera, him', ex: 'Hīe wǣron on þǣm scipe.', exRu: 'Они были на корабле.', note: 'Поздн. hī, hȳ; heora; heom.' },
        { id: 'ang-wit', w: 'wit', ru: 'мы двое', pos: 'pron', forms: 'unc, uncer, unc', ex: 'Wit sindon ġebrōþor.', exRu: 'Мы (двое) братья.', note: 'Двойственное число.' },
        { id: 'ang-git', w: 'ġit', ru: 'вы двое', pos: 'pron', forms: 'inc, incer, inc', ex: 'Hwǣr wǣron ġit?', exRu: 'Где были вы (двое)?', note: 'Двойственное число.' },
        { id: 'ang-self', w: 'self', ru: 'сам', pos: 'pron', forms: 'self, selfa (слаб.); поздн. sylf', ex: 'Hē lufaþ hine selfne.', exRu: 'Он любит самого себя.', note: 'Склоняется как прилагательное.' },
        { id: 'ang-min', w: 'mīn', ru: 'мой', pos: 'pron', forms: 'mīn, mīnne, mīnes… (как сильное прил.)', ex: 'Þis is mīn hūs.', exRu: 'Это мой дом.', note: null },
        { id: 'ang-thin', w: 'þīn', ru: 'твой', pos: 'pron', forms: 'þīn, þīnne, þīnes… (как сильное прил.)', ex: 'Hwǣr is þīn hlāford?', exRu: 'Где твой господин?', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u01-l03',
      kind: 'grammar',
      title: 'Wesan и bēon: «быть»',
      goals: ['Спрягать wesan и bēon в настоящем', 'Знать претерит wæs/wǣron', 'Употреблять отрицательные формы nis, næs'],
      skills: ['ang.verb.beon', 'ang.syntax.neg'],
      theory: [
        { type: 'p', text: 'В настоящем времени у «быть» два набора форм — от **wesan** и от **bēon**. Претерит у них общий (от wesan).' },
        { type: 'table', caption: 'Изъявительное наклонение', head: ['', 'wesan (наст.)', 'bēon (наст.)', 'претерит'],
          rows: [
            ['iċ', 'eom', 'bēo', 'wæs'],
            ['þū', 'eart', 'bist', 'wǣre'],
            ['hē, hēo, hit', 'is', 'biþ', 'wæs'],
            ['wē, ġē, hīe', 'sindon, sint', 'bēoþ', 'wǣron']
          ],
          note: 'Поздние варианты: syndon, synd, synt; byþ. Обратите внимание: 2 л. ед. претерита — wǣre (с долгим ǣ, как во мн. ч.).' },
        { type: 'table', caption: 'Сослагательное и повелительное', head: ['', 'wesan', 'bēon', 'претерит'],
          rows: [
            ['сосл. ед.', 'sīe (sī, sȳ)', 'bēo', 'wǣre'],
            ['сосл. мн.', 'sīen', 'bēon', 'wǣren'],
            ['повел. ед.', 'wes', 'bēo', '—'],
            ['повел. мн.', 'wesaþ', 'bēoþ', '—']
          ] },
        { type: 'rule', text: '**wesan** — состояние сейчас: **Iċ eom hēr** «я здесь». **bēon** — общие истины, привычное и будущее: **Se winter biþ ċeald** «зима (всегда) холодна»; **Iċ bēo ġearu** «я буду готов».' },
        { type: 'rule', text: 'Отрицание **ne** стоит перед глаголом и сливается с некоторыми формами: **ne + eom → neom**, **ne + is → nis**, **ne + wæs → næs**, **ne + wǣron → nǣron**.' },
        { type: 'examples', items: [
          { t: 'Hēo is wīs.', ru: 'Она мудра.' },
          { t: 'Hwǣr wǣron ġē?', ru: 'Где вы были?' },
          { t: 'Nis hē hēr.', ru: 'Его здесь нет.' },
          { t: 'Hit biþ swīþe ċeald on wintra.', ru: 'Зимой бывает очень холодно.' }
        ] },
        { type: 'contrast', text: 'В отличие от русского, связка в настоящем не опускается: **Hē is cyning** — не «он король», а буквально «он есть король». Русское «есть» для общих истин («человек есть существо…») близко к функции bēon.' },
        { type: 'tip', text: 'eom — am, is — is, wæs — was, wǣron — were; bēon — be. Немецкий: bin, bist ~ bēo, bist.' },
        { type: 'pitfall', text: '**biþ** — не «бывает» в смысле повторяемости только: это и обычное будущее (у древнеанглийского нет особого будущего времени).' }
      ],
      vocab: [
        { id: 'ang-beon', w: 'bēon', ru: 'быть (обычно, в будущем)', pos: 'v', forms: 'bēo, bist, biþ; bēoþ; претерит wæs, wǣron', ex: 'Iċ bēo ġearu.', exRu: 'Я буду готов.', note: 'Аномальный глагол.' },
        { id: 'ang-wesan', w: 'wesan', ru: 'быть (сейчас)', pos: 'v', forms: 'eom, eart, is; sindon; претерит wæs, wǣron', ex: 'Iċ eom hēr.', exRu: 'Я здесь.', note: 'Аномальный глагол; формы наст. — от другого корня.' },
        { id: 'ang-ne', w: 'ne', ru: 'не (при глаголе)', pos: 'part', forms: 'сливается: nis, næs, neom, nǣron', ex: 'Iċ ne sprece.', exRu: 'Я не говорю.', note: null },
        { id: 'ang-nu', w: 'nū', ru: 'теперь, сейчас', pos: 'adv', forms: null, ex: 'Nū is hit niht.', exRu: 'Сейчас ночь.', note: 'Совр. now.' },
        { id: 'ang-her', w: 'hēr', ru: 'здесь; (в хронике) в этом году', pos: 'adv', forms: null, ex: 'Hēr is mīn hūs.', exRu: 'Вот мой дом.', note: 'Хроника начинает статьи с Hēr «здесь, в этот год».' },
        { id: 'ang-thaer', w: 'þǣr', ru: 'там; где (союз)', pos: 'adv', forms: null, ex: 'Hē wæs þǣr.', exRu: 'Он был там.', note: null },
        { id: 'ang-hwaer', w: 'hwǣr', ru: 'где', pos: 'adv', forms: null, ex: 'Hwǣr is se cyning?', exRu: 'Где король?', note: null },
        { id: 'ang-gea', w: 'ġēa', ru: 'да', pos: 'part', forms: 'также ġēse', ex: 'Ġēa, hlāford.', exRu: 'Да, господин.', note: null },
        { id: 'ang-nese', w: 'nese', ru: 'нет', pos: 'part', forms: 'также nā', ex: 'Nese, hlāford.', exRu: 'Нет, господин.', note: null },
        { id: 'ang-and', w: 'and', ru: 'и', pos: 'conj', forms: 'также ond; в рукописях знак ⁊', ex: 'Hē and hēo', exRu: 'Он и она', note: null },
        { id: 'ang-ac', w: 'ac', ru: 'но, а', pos: 'conj', forms: null, ex: 'Nis hē cyning, ac hē is cniht.', exRu: 'Он не король, а слуга.', note: 'После отрицания: «не… а…».' },
        { id: 'ang-swithe', w: 'swīþe', ru: 'очень; сильно', pos: 'adv', forms: 'сравн. swīþor', ex: 'Hēo is swīþe wīs.', exRu: 'Она очень мудра.', note: null },
        { id: 'ang-wel', w: 'wel', ru: 'хорошо', pos: 'adv', forms: 'сравн. bet, превосх. betst', ex: 'Hē spricþ wel.', exRu: 'Он хорошо говорит.', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u01-l04',
      kind: 'reading',
      title: 'Эльфрик, «Беседа»: начало',
      goals: ['Читать связный текст с подстрочником', 'Узнавать местоимения и формы «быть» в тексте', 'Заметить сокращение -aþ → -e перед wē/ġē'],
      skills: ['ang.reading', 'ang.pron.personal', 'ang.verb.beon'],
      theory: [
        { type: 'p', text: '«Беседа» (*Colloquium*) Эльфрика Эйншемского (ок. 1000 г.) — латинский учебный диалог учителя с учениками; в одной рукописи он снабжён древнеанглийской подстрочной глоссой. Ниже — эта глосса в нормализованном виде.' },
        { type: 'rule', text: 'Если местоимение **wē** или **ġē** стоит **после** глагола, окончание мн. ч. **-aþ** сокращается до **-e**: **ġē willaþ**, но **wille ġē?**; **wē rēċaþ**, но **rēċe wē**.' },
        { type: 'p', text: '**sīe** — сослагательное от «быть»: *būton hit riht sprǣċ sīe* «лишь бы это была правильная речь». **beswungen** — причастие от swingan «бить».' }
      ],
      vocab: [
        { id: 'ang-lareow', w: 'lārēow', ru: 'учитель', pos: 'n', g: 'm', forms: 'lārēow, -es m. (a-основа)', ex: 'Se lārēow tǣhte þā ċild.', exRu: 'Учитель учил детей.', note: '< lār «учение» + þēow «слуга».' },
        { id: 'ang-munuc', w: 'munuc', ru: 'монах', pos: 'n', g: 'm', forms: 'munuc, -es m. (a-основа)', ex: 'Iċ eom munuc.', exRu: 'Я монах.', note: '< лат. monachus.' },
        { id: 'ang-biddan', w: 'biddan', ru: 'просить, молить', pos: 'v', forms: 'biddan, bæd, bǣdon, beden (V кл.)', ex: 'Wē biddaþ þē.', exRu: 'Мы просим тебя.', note: 'Наст. с удвоением (-dd-), как sittan. Кого — вин., чего — род.' },
        { id: 'ang-taecan', w: 'tǣċan', ru: 'учить, показывать', pos: 'v', forms: 'tǣċan, tǣhte, tǣht (сл. I)', ex: 'Hē tǣċþ ūs sprecan.', exRu: 'Он учит нас говорить.', note: 'Совр. teach — taught.' },
        { id: 'ang-sprecan', w: 'sprecan', ru: 'говорить', pos: 'v', forms: 'sprecan, spræc, sprǣcon, sprecen (V кл.)', ex: 'Wē sprecaþ Englisc.', exRu: 'Мы говорим по-английски.', note: 'Поздн. также specan.' },
        { id: 'ang-spraec', w: 'sprǣċ', ru: 'речь, язык', pos: 'n', g: 'f', forms: 'sprǣċ, -e f. (ō-основа)', ex: 'Þæt is riht sprǣċ.', exRu: 'Это правильная речь.', note: null },
        { id: 'ang-willan', w: 'willan', ru: 'хотеть', pos: 'v', forms: 'wille, wilt, wile; willaþ; претерит wolde (аномальный)', ex: 'Hwæt wilt þū?', exRu: 'Чего ты хочешь?', note: 'Отриц. nyllan, nolde.' },
        { id: 'ang-riht', w: 'riht', ru: 'правильный, прямой; (сущ. n.) право', pos: 'adj', forms: 'riht; riht, -es n.', ex: 'Hit is riht.', exRu: 'Это правильно.', note: 'Совр. right, нем. recht.' },
        { id: 'ang-idel', w: 'īdel', ru: 'пустой, праздный', pos: 'adj', forms: 'īdel (мн. īdle)', ex: 'Þæt word is īdel.', exRu: 'Это слово пустое.', note: 'Совр. idle.' },
        { id: 'ang-aelc', w: 'ǣlċ', ru: 'каждый', pos: 'pron', forms: 'ǣlċ, ǣlċne, ǣlċes… (как сильное прил.)', ex: 'Ǣlċ mann hit wāt.', exRu: 'Всякий это знает.', note: 'Совр. each.' },
        { id: 'ang-tid', w: 'tīd', ru: 'время, час; церковная служба', pos: 'n', g: 'f', forms: 'tīd, -e f. (i-основа)', ex: 'On þǣre tīde', exRu: 'В то время', note: 'Совр. tide, нем. Zeit.' },
        { id: 'ang-eala', w: 'ēalā', ru: 'о! (обращение, восклицание)', pos: 'part', forms: null, ex: 'Ēalā lārēow!', exRu: 'О учитель!', note: null }
      ],
      text: {
        title: 'Ælfric, Colloquium (глосса), 1–7',
        lines: [
          { t: 'Wē ċildra biddaþ þē, ēalā lārēow, þæt þū tǣċe ūs sprecan,', ru: 'Мы, дети, просим тебя, о учитель, чтобы ты научил нас говорить (по-латыни),' },
          { t: 'forþām unġelǣrede wē sindon and ġewæmmodlīċe wē sprecaþ.', ru: 'потому что мы неучёные и говорим с ошибками.' },
          { t: 'Hwæt wille ġē sprecan?', ru: '— О чём вы хотите говорить?' },
          { t: 'Hwæt rēċe wē hwæt wē sprecan, būton hit riht sprǣċ sīe and behēfe, næs īdel oþþe fracod.', ru: '— Что нам за дело, о чём говорить, лишь бы речь была правильной и полезной, а не пустой или непристойной.' },
          { t: 'Wille ġē bēon beswungen on leornunge?', ru: '— Согласны ли вы, чтобы вас секли во время учения?' },
          { t: 'Lēofre is ūs bēon beswungen for lāre þonne hit ne cunnan.', ru: '— Нам милее быть битыми ради науки, чем не знать её.' },
          { t: 'Hwæt hæfst þū weorces?', ru: '— (Обращаясь к одному.) Каково твоё занятие? (букв. что ты имеешь из работы?)' },
          { t: 'Iċ eom ġeanwyrde munuc, and iċ singe ǣlċe dæġ seofon tīda mid ġebrōþrum.', ru: '— Я монах, принёсший обет, и каждый день пою семь служб с братией.' }
        ]
      }
    }
  ]
};

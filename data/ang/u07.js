export default {
  id: 'ang-u07',
  title: 'Rīdan, rād, ridon, riden',
  titleRu: 'Сильные глаголы: аблаут и семь классов',
  summary: 'Чередование гласных (аблаут) как основа сильного глагола, семь классов и их основные формы, спряжение в настоящем (умлаут во 2–3 л. ед.) и претерите, грамматическое чередование (закон Вернера). Чтение — Хроника о зиме 878 г.',
  lessons: [
    {
      id: 'ang-u07-l01',
      kind: 'grammar',
      title: 'Аблаут. Классы I и II',
      goals: ['Знать четыре основные формы сильного глагола', 'Узнавать ряды аблаута I и II класса', 'Восстанавливать формы по инфинитиву'],
      skills: ['ang.verb.strong.ablaut', 'ang.verb.strong.1-2'],
      theory: [
        { type: 'p', text: '**Сильные** глаголы образуют претерит не суффиксом, а **чередованием корневого гласного** (аблаутом). Нужно знать **четыре основные формы**: инфинитив — претерит ед. (1 и 3 л.) — претерит мн. — причастие II.' },
        { type: 'table', caption: 'Ряды аблаута', head: ['класс', 'инф.', 'прет. ед.', 'прет. мн.', 'прич. II'],
          rows: [
            ['I', 'r{{ī}}dan', 'r{{ā}}d', 'r{{i}}don', 'r{{i}}den'],
            ['II', 'b{{ēo}}dan', 'b{{ēa}}d', 'b{{u}}don', 'b{{o}}den'],
            ['III', 'b{{i}}ndan', 'b{{a}}nd', 'b{{u}}ndon', 'b{{u}}nden'],
            ['IV', 'b{{e}}ran', 'b{{æ}}r', 'b{{ǣ}}ron', 'b{{o}}ren'],
            ['V', 'spr{{e}}can', 'spr{{æ}}c', 'spr{{ǣ}}con', 'spr{{e}}cen'],
            ['VI', 'f{{a}}ran', 'f{{ō}}r', 'f{{ō}}ron', 'f{{a}}ren'],
            ['VII', 'h{{ā}}tan / h{{ea}}ldan', 'h{{ē}}t / h{{ēo}}ld', 'h{{ē}}ton / h{{ēo}}ldon', 'h{{ā}}ten / h{{ea}}lden']
          ],
          note: 'Класс VII — бывшие редуплицирующие: в претерите ē или ēo, причастие с гласным инфинитива.' },
        { type: 'rule', text: '**I класс**: ī — ā — i — i (rīdan, wrītan, drīfan). **II класс**: ēo (или ū) — ēa — u — o (bēodan, ċēosan; būgan, lūcan).' },
        { type: 'contrast', text: 'Аблаут знаком по русскому: **беру — сбор**, **теку — ток**, **везу — воз** — это то же индоевропейское чередование e/o, которое лежит в основе германских рядов (beran — bær восходит к *ber-/*bor-). Разница в том, что в германском аблаут стал грамматическим средством выражения времени.' },
        { type: 'pitfall', text: 'Претерит мн. и причастие I класса — с **кратким** i: ridon, riden (не *rīdon). Долгота здесь смыслоразличительна для формы.' },
        { type: 'tip', text: 'ride — rode — ridden, write — wrote — written, drive — drove — driven: совр. английский сохранил ряд I класса почти нетронутым. Нем. reiten — ritt — geritten, bieten — bot — geboten.' }
      ],
      vocab: [
        { id: 'ang-ridan', w: 'rīdan', ru: 'ехать верхом', pos: 'v', forms: 'rīdan, rād, ridon, riden (I кл.)', ex: 'Hē rād tō þǣre byriġ.', exRu: 'Он поехал верхом в город.', note: 'ġerīdan — «объехать, захватить».' },
        { id: 'ang-writan', w: 'wrītan', ru: 'писать', pos: 'v', forms: 'wrītan, wrāt, writon, writen (I кл.)', ex: 'Hē wrāt þās bōc.', exRu: 'Он написал эту книгу.', note: null },
        { id: 'ang-drifan', w: 'drīfan', ru: 'гнать', pos: 'v', forms: 'drīfan, drāf, drifon, drifen (I кл.)', ex: 'Hīe drifon þā oxan.', exRu: 'Они гнали быков.', note: 'f между гласными — [v].' },
        { id: 'ang-bidan', w: 'bīdan', ru: 'ждать (+ род.); оставаться', pos: 'v', forms: 'bīdan, bād, bidon, biden (I кл.)', ex: 'Hē bād þæs cyninges.', exRu: 'Он ждал короля.', note: 'Совр. bide, abide. ġebīdan — «дождаться».' },
        { id: 'ang-stigan', w: 'stīgan', ru: 'подниматься, всходить', pos: 'v', forms: 'stīgan, stāh, stigon, stigen (I кл.)', ex: 'Hē āstāh on heofonas.', exRu: 'Он вознёсся на небеса.', note: 'Нем. steigen. g → h в конце слова.' },
        { id: 'ang-scinan', w: 'scīnan', ru: 'сиять', pos: 'v', forms: 'scīnan, scān, scinon, scinen (I кл.)', ex: 'Sēo sunne scān.', exRu: 'Солнце сияло.', note: 'Совр. shine — shone.' },
        { id: 'ang-snithan', w: 'snīþan', ru: 'резать', pos: 'v', forms: 'snīþan, snāþ, snidon, sniden (I кл.)', ex: 'Hē snāþ þone hlāf.', exRu: 'Он резал хлеб.', note: 'þ/d — закон Вернера (урок 4).' },
        { id: 'ang-beodan', w: 'bēodan', ru: 'предлагать; приказывать', pos: 'v', forms: 'bēodan, bēad, budon, boden (II кл.)', ex: 'Se cyning bēad him friþ.', exRu: 'Король предложил им мир.', note: 'Совр. bid; нем. bieten.' },
        { id: 'ang-ceosan', w: 'ċēosan', ru: 'выбирать', pos: 'v', forms: 'ċēosan, ċēas, curon, coren (II кл.)', ex: 'Hīe curon hine tō cyninge.', exRu: 'Они избрали его королём.', note: 's/r — закон Вернера. Совр. choose.' },
        { id: 'ang-forleosan', w: 'forlēosan', ru: 'терять', pos: 'v', forms: 'forlēosan, forlēas, forluron, forloren (II кл.)', ex: 'Hē forlēas his līf.', exRu: 'Он потерял жизнь.', note: 'Совр. forlorn < forloren.' },
        { id: 'ang-bugan', w: 'būgan', ru: 'гнуться, склоняться; обращаться', pos: 'v', forms: 'būgan, bēag, bugon, bogen (II кл.)', ex: 'Hīe bugon tō him.', exRu: 'Они перешли на его сторону.', note: 'II кл. с ū в настоящем; совр. bow.' }
      ],
      text: null
    },
    {
      id: 'ang-u07-l02',
      kind: 'grammar',
      title: 'Классы III, IV, V',
      goals: ['Различать подтипы III класса (bindan, helpan, weorpan)', 'Различать IV и V класс по согласному после корня', 'Знать неправильные niman, cuman, sēon'],
      skills: ['ang.verb.strong.3-5'],
      theory: [
        { type: 'rule', text: '**III класс**: корень + **два согласных**. Гласные зависят от соседства: **i — a — u — u** перед носовым + согл. (bindan, band, bundon, bunden); **e — ea — u — o** перед l + согл. (helpan, healp, hulpon, holpen); **eo — ea — u — o** перед r/h + согл. (weorpan, wearp, wurpon, worpen; feohtan, feaht, fuhton, fohten).' },
        { type: 'rule', text: '**IV класс**: корень + **один сонорный** (l, r, m, n): e — æ — ǣ — **o** (beran, bær, bǣron, boren). **V класс**: корень + **один несонорный**: e — æ — ǣ — **e** (sprecan, spræc, sprǣcon, sprecen; ġiefan, ġeaf, ġēafon, ġiefen).' },
        { type: 'table', caption: 'Неправильные в IV–V классах', head: ['инф.', 'прет. ед.', 'прет. мн.', 'прич. II'],
          rows: [
            ['niman (IV)', 'nōm, nam', 'nōmon, nāmon', 'numen'],
            ['cuman (IV)', 'cōm, cwōm', 'cōmon, cwōmon', 'cumen'],
            ['etan (V)', 'ǣt', 'ǣton', 'eten'],
            ['sēon (V)', 'seah', 'sāwon', 'sewen'],
            ['sittan (V)', 'sæt', 'sǣton', 'seten'],
            ['biddan (V)', 'bæd', 'bǣdon', 'beden']
          ],
          note: 'sittan, biddan, licgan — V класс с удвоением в настоящем (бывшие j-презенсы). sēon — стяжённый (< *sehwan).' },
        { type: 'examples', items: [
          { t: 'Hīe fundon þone cyning.', ru: 'Они нашли короля.' },
          { t: 'Hē wearþ cyning.', ru: 'Он стал королём.' },
          { t: 'Þā cōm hē tō þǣm lande.', ru: 'Тогда он пришёл в ту страну.' },
          { t: 'Hīe sǣton on þǣre healle.', ru: 'Они сидели в зале.' }
        ] },
        { type: 'pitfall', text: '**weorþan** «становиться» (wearþ, wurdon, worden) и **weorpan** «бросать» (wearp, wurpon, worpen) различаются одной буквой. weorþan + прич. II — пассив: *hē wearþ ofslæġen* «он был убит».' },
        { type: 'tip', text: 'drink — drank — drunk, sing — sang — sung (III); bear — bore — borne (IV); give — gave — given (V); но help, find перешли или частично перешли к другим моделям.' }
      ],
      vocab: [
        { id: 'ang-bindan', w: 'bindan', ru: 'связывать', pos: 'v', forms: 'bindan, band, bundon, bunden (III кл.)', ex: 'Hīe bundon hine.', exRu: 'Они связали его.', note: null },
        { id: 'ang-findan', w: 'findan', ru: 'находить', pos: 'v', forms: 'findan, fand (funde), fundon, funden (III кл.)', ex: 'Hē fand þone stān.', exRu: 'Он нашёл камень.', note: null },
        { id: 'ang-drincan', w: 'drincan', ru: 'пить', pos: 'v', forms: 'drincan, dranc, druncon, druncen (III кл.)', ex: 'Hīe druncon wīn.', exRu: 'Они пили вино.', note: null },
        { id: 'ang-singan', w: 'singan', ru: 'петь', pos: 'v', forms: 'singan, sang, sungon, sungen (III кл.)', ex: 'Iċ singe seofon tīda.', exRu: 'Я пою семь служб.', note: null },
        { id: 'ang-helpan', w: 'helpan', ru: 'помогать (+ дат./род.)', pos: 'v', forms: 'helpan, healp, hulpon, holpen (III кл.)', ex: 'Hē healp þǣm earman men.', exRu: 'Он помог бедному человеку.', note: null },
        { id: 'ang-weorpan', w: 'weorpan', ru: 'бросать', pos: 'v', forms: 'weorpan, wearp, wurpon, worpen (III кл.)', ex: 'Hīe wurpon stānas.', exRu: 'Они бросали камни.', note: 'Нем. werfen.' },
        { id: 'ang-weorthan', w: 'weorþan', ru: 'становиться, делаться; случаться', pos: 'v', forms: 'weorþan, wearþ, wurdon, worden (III кл.)', ex: 'Þā wearþ miċel hungor.', exRu: 'Тогда случился великий голод.', note: 'þ/d — закон Вернера; нем. werden.' },
        { id: 'ang-beran', w: 'beran', ru: 'нести; рождать', pos: 'v', forms: 'beran, bær, bǣron, boren (IV кл.)', ex: 'Hē bær þæt sweord.', exRu: 'Он нёс меч.', note: 'Рус. беру — родственно.' },
        { id: 'ang-niman', w: 'niman', ru: 'брать', pos: 'v', forms: 'niman, nōm (nam), nōmon (nāmon), numen (IV кл.)', ex: 'Hīe nāmon herereaf.', exRu: 'Они взяли добычу.', note: 'Нем. nehmen.' },
        { id: 'ang-cuman', w: 'cuman', ru: 'приходить', pos: 'v', forms: 'cuman, cōm (cwōm), cōmon, cumen (IV кл.)', ex: 'Se here cōm tō Lundene.', exRu: 'Войско пришло к Лондону.', note: '3 л. ед. cymþ.' },
        { id: 'ang-giefan', w: 'ġiefan', ru: 'давать', pos: 'v', forms: 'ġiefan, ġeaf, ġēafon, ġiefen (V кл.)', ex: 'Hē ġeaf him gold.', exRu: 'Он дал ему золото.', note: 'Поздн. ġifan, ġyfan.' },
        { id: 'ang-etan', w: 'etan', ru: 'есть', pos: 'v', forms: 'etan, ǣt, ǣton, eten (V кл.)', ex: 'Þā swīn ǣton.', exRu: 'Свиньи ели.', note: 'Претерит ед. с долгим ǣ!' },
        { id: 'ang-seon', w: 'sēon', ru: 'видеть', pos: 'v', forms: 'sēon, seah, sāwon, sewen (V кл.)', ex: 'Hē seah þone wulf.', exRu: 'Он увидел волка.', note: 'Чаще ġesēon. Стяжённый.' },
        { id: 'ang-sittan', w: 'sittan', ru: 'сидеть', pos: 'v', forms: 'sittan, sæt, sǣton, seten (V кл.)', ex: 'Hē sæt æt hām.', exRu: 'Он сидел дома.', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u07-l03',
      kind: 'grammar',
      title: 'Классы VI и VII',
      goals: ['Знать ряд VI класса a — ō — ō — a', 'Узнавать претерит VII класса на ē/ēo', 'Знать hātan и форму hātte'],
      skills: ['ang.verb.strong.6-7'],
      theory: [
        { type: 'rule', text: '**VI класс**: a — ō — ō — a (faran, fōr, fōron, faren; standan, stōd, stōdon, standen). Варианты в настоящем: **scieppan, hebban** (с удвоением), **slēan** (стяжённый, < *slahan): slēan, slōg/slōh, slōgon, slæġen.' },
        { type: 'rule', text: '**VII класс** (бывшие редуплицирующие): претерит ед. и мн. — один гласный **ē** или **ēo**, причастие — гласный инфинитива.' },
        { type: 'table', caption: 'VII класс', head: ['тип', 'инф.', 'прет. ед.', 'прет. мн.', 'прич. II'],
          rows: [
            ['ē', 'hātan', 'hēt (heht)', 'hēton', 'hāten'],
            ['ē', 'lǣtan', 'lēt', 'lēton', 'lǣten'],
            ['ē', 'slǣpan', 'slēp', 'slēpon', 'slǣpen'],
            ['ē', 'fōn', 'fēng', 'fēngon', 'fangen'],
            ['ēo', 'healdan', 'hēold', 'hēoldon', 'healden'],
            ['ēo', 'feallan', 'fēoll', 'fēollon', 'feallen'],
            ['ēo', 'cnāwan', 'cnēow', 'cnēowon', 'cnāwen'],
            ['ēo', 'wēpan', 'wēop', 'wēopon', 'wōpen']
          ],
          note: 'heht — пережиток редупликации (*he-hāt). wēpan — причастие с ō.' },
        { type: 'rule', text: '**hātte** — единственный остаток синтетического пассива: «называется / назывался»: *sēo stōw hātte Æþelingaīeġ* «то место называется Ательни». hātan + инфинитив — «приказать»: *hē hēt hine ofslēan* «он велел его убить».' },
        { type: 'pitfall', text: '**fōr** (прет. faran «ехать») и **for** (предлог «ради») различаются только долготой; **fēoll** (feallan) и **fēol** «напильник» — тоже.' },
        { type: 'tip', text: 'hold — held, fall — fell, know — knew, blow — blew, grow — grew, let — let, sleep — slept (перешёл в слабые): VII класс по-прежнему узнаётся.' }
      ],
      vocab: [
        { id: 'ang-faran', w: 'faran', ru: 'ехать, идти, отправляться', pos: 'v', forms: 'faran, fōr, fōron, faren (VI кл.)', ex: 'Hē fōr ofer sǣ.', exRu: 'Он отправился за море.', note: 'Нем. fahren; совр. fare.' },
        { id: 'ang-standan', w: 'standan', ru: 'стоять', pos: 'v', forms: 'standan, stōd, stōdon, standen (VI кл.)', ex: 'Hē stōd on þǣre brycge.', exRu: 'Он стоял на мосту.', note: '3 л. ед. stent.' },
        { id: 'ang-scieppan', w: 'scieppan', ru: 'творить, создавать', pos: 'v', forms: 'scieppan, scōp, scōpon, scapen (VI кл.)', ex: 'God scōp heofon and eorþan.', exRu: 'Бог сотворил небо и землю.', note: 'Поздн. scyppan; ср. shape.' },
        { id: 'ang-hebban', w: 'hebban', ru: 'поднимать', pos: 'v', forms: 'hebban, hōf, hōfon, hafen (VI кл.)', ex: 'Hē hōf his hand.', exRu: 'Он поднял руку.', note: 'Совр. heave. Обычно āhebban.' },
        { id: 'ang-slean', w: 'slēan', ru: 'бить, ударять; убивать', pos: 'v', forms: 'slēan, slōg (slōh), slōgon, slæġen (VI кл.)', ex: 'Hē slōh þone wulf.', exRu: 'Он убил волка.', note: 'h/g — закон Вернера. Совр. slay.' },
        { id: 'ang-healdan', w: 'healdan', ru: 'держать, хранить; пасти', pos: 'v', forms: 'healdan, hēold, hēoldon, healden (VII кл.)', ex: 'Hē hēold þæt rīċe.', exRu: 'Он правил королевством.', note: null },
        { id: 'ang-feallan', w: 'feallan', ru: 'падать', pos: 'v', forms: 'feallan, fēoll, fēollon, feallen (VII кл.)', ex: 'Þæt hūs fēoll.', exRu: 'Дом упал.', note: null },
        { id: 'ang-cnawan', w: 'cnāwan', ru: 'знать, узнавать', pos: 'v', forms: 'cnāwan, cnēow, cnēowon, cnāwen (VII кл.)', ex: 'Hē cnēow hine.', exRu: 'Он узнал его.', note: 'Чаще ġecnāwan. kn- произносится.' },
        { id: 'ang-blawan', w: 'blāwan', ru: 'дуть', pos: 'v', forms: 'blāwan, blēow, blēowon, blāwen (VII кл.)', ex: 'Þā blēowon windas.', exRu: 'Тогда подули ветры.', note: null },
        { id: 'ang-hatan', w: 'hātan', ru: 'звать, называть; приказывать', pos: 'v', forms: 'hātan, hēt (heht), hēton, hāten (VII кл.); пасс. hātte', ex: 'Hē hēt hine cuman.', exRu: 'Он велел ему прийти.', note: 'Нем. heißen.' },
        { id: 'ang-laetan', w: 'lǣtan', ru: 'позволять, оставлять', pos: 'v', forms: 'lǣtan, lēt, lēton, lǣten (VII кл.)', ex: 'Lǣt hine gān.', exRu: 'Отпусти его.', note: 'Совр. let.' },
        { id: 'ang-slaepan', w: 'slǣpan', ru: 'спать', pos: 'v', forms: 'slǣpan, slēp, slēpon, slǣpen (VII кл.)', ex: 'Þæt ċild slēp.', exRu: 'Ребёнок спал.', note: 'Позднее слабый: slǣpte.' },
        { id: 'ang-wepan', w: 'wēpan', ru: 'плакать', pos: 'v', forms: 'wēpan, wēop, wēopon, wōpen (VII кл.)', ex: 'Hēo wēop biterlīċe.', exRu: 'Она горько плакала.', note: 'Совр. weep — wept.' }
      ],
      text: null
    },
    {
      id: 'ang-u07-l04',
      kind: 'grammar',
      title: 'Спряжение сильных глаголов. Закон Вернера',
      goals: ['Учитывать умлаут во 2–3 л. ед. настоящего', 'Образовывать 2 л. ед. претерита (ride, bǣre)', 'Узнавать грамматическое чередование s/r, þ/d, h/g'],
      skills: ['ang.verb.strong.pres', 'ang.verb.verner'],
      theory: [
        { type: 'table', caption: 'Настоящее время', head: ['', 'helpan', 'beran', 'faran', 'ċēosan', 'cuman'],
          rows: [
            ['iċ', 'help{{e}}', 'ber{{e}}', 'far{{e}}', 'ċēos{{e}}', 'cum{{e}}'],
            ['þū', '{{hi}}lpst', '{{bi}}rst', '{{fæ}}rst', '{{ċīe}}st', '{{cy}}mst'],
            ['hē', '{{hi}}lpþ', '{{bi}}rþ', '{{fæ}}rþ', '{{ċīe}}st', '{{cy}}mþ'],
            ['мн.', 'help{{aþ}}', 'ber{{aþ}}', 'far{{aþ}}', 'ċēos{{aþ}}', 'cum{{aþ}}']
          ],
          note: 'Встречаются и несинкопированные формы: bir(e)st, bir(e)þ.' },
        { type: 'rule', text: 'Во **2 и 3 л. ед.** настоящего — **умлаут** (e → i, a → æ, ēo → īe, ēa → īe, ā → ǣ, ō → ē, u → y) и обычно синкопа с ассимиляцией: **rīdan → rītt**, **bindan → bint**, **standan → stent**, **cweþan → cwiþþ**, **healdan → hielt**, **hātan → hǣt**.' },
        { type: 'table', caption: 'Претерит', head: ['', 'rīdan', 'bindan', 'ċēosan', 'beran'],
          rows: [
            ['iċ, hē', 'rād', 'band', 'ċēas', 'bær'],
            ['þū', 'rid{{e}}', 'bund{{e}}', 'cur{{e}}', 'bǣr{{e}}'],
            ['мн.', 'rid{{on}}', 'bund{{on}}', 'cur{{on}}', 'bǣr{{on}}'],
            ['сосл. ед.', 'rid{{e}}', 'bund{{e}}', 'cur{{e}}', 'bǣr{{e}}'],
            ['сосл. мн.', 'rid{{en}}', 'bund{{en}}', 'cur{{en}}', 'bǣr{{en}}']
          ] },
        { type: 'rule', text: '**2 л. ед. претерита** образуется от основы **мн. ч.** + **-e** (без -st!): þū ride, þū cure, þū bǣre. Сослагательное претерита — от той же основы.' },
        { type: 'rule', text: '**Грамматическое чередование** (закон Вернера): в прет. мн. и причастии **s → r**, **þ → d**, **h → g/w**: ċēosan — ċēas — **curon — coren**; snīþan — snāþ — **snidon — sniden**; weorþan — wearþ — **wurdon — worden**; slēan — slōh — **slōgon — slæġen**; sēon — seah — **sāwon**.' },
        { type: 'contrast', text: 'В русском тоже есть чередования в спряжении (пеку — печёшь, могу — можешь), но они зависят от окончания, а не от времени. Здесь же **умлаут** маркирует лицо (2–3 л. ед.), **аблаут** — время, **Вернер** — число в претерите.' },
        { type: 'tip', text: 'forlorn (< forloren) и was — were (wæs — wǣron, s/r) — следы закона Вернера в современном английском.' }
      ],
      vocab: [
        { id: 'ang-brecan', w: 'brecan', ru: 'ломать', pos: 'v', forms: 'brecan, bræc, brǣcon, brocen (IV кл.)', ex: 'Hīe brǣcon þone weall.', exRu: 'Они проломили стену.', note: 'IV кл., хотя после корня c (аналогия).' },
        { id: 'ang-stelan', w: 'stelan', ru: 'красть', pos: 'v', forms: 'stelan, stæl, stǣlon, stolen (IV кл.)', ex: 'Hē stæl þæt gold.', exRu: 'Он украл золото.', note: null },
        { id: 'ang-gieldan', w: 'ġieldan', ru: 'платить; воздавать', pos: 'v', forms: 'ġieldan, ġeald, guldon, golden (III кл.)', ex: 'Hīe guldon gafol.', exRu: 'Они платили дань.', note: 'Поздн. ġyldan. Нем. gelten.' },
        { id: 'ang-irnan', w: 'irnan', ru: 'бежать, течь', pos: 'v', forms: 'irnan, arn, urnon, urnen (III кл.)', ex: 'Þæt wæter arn.', exRu: 'Вода текла.', note: 'Метатеза (< rinnan); совр. run.' },
        { id: 'ang-beornan', w: 'beornan', ru: 'гореть', pos: 'v', forms: 'beornan, bearn, burnon, burnen (III кл.)', ex: 'Sēo burg bearn.', exRu: 'Город горел.', note: 'Также byrnan, barn.' },
        { id: 'ang-seothan', w: 'sēoþan', ru: 'варить', pos: 'v', forms: 'sēoþan, sēaþ, sudon, soden (II кл.)', ex: 'Hēo sēaþ þone mete.', exRu: 'Она варила еду.', note: 'þ/d; совр. seethe, sodden.' },
        { id: 'ang-wascan', w: 'wascan', ru: 'мыть', pos: 'v', forms: 'wascan, wōsc, wōscon, wascen (VI кл.)', ex: 'Hē wōsc his handa.', exRu: 'Он вымыл руки.', note: null },
        { id: 'ang-gewitan', w: 'ġewītan', ru: 'уходить, отходить; умирать', pos: 'v', forms: 'ġewītan, ġewāt, ġewiton, ġewiten (I кл.)', ex: 'Hē ġewāt of þisum līfe.', exRu: 'Он ушёл из этой жизни.', note: null },
        { id: 'ang-arisan', w: 'ārīsan', ru: 'вставать, подниматься', pos: 'v', forms: 'ārīsan, ārās, ārison, ārisen (I кл.)', ex: 'Þā ārās hē.', exRu: 'Тогда он встал.', note: 'Совр. arise — arose.' },
        { id: 'ang-weaxan', w: 'weaxan', ru: 'расти', pos: 'v', forms: 'weaxan, wēox, wēoxon, weaxen (VII кл.)', ex: 'Hē wēox under wolcnum.', exRu: 'Он рос под небесами.', note: 'Совр. wax (о луне).' }
      ],
      text: null
    },
    {
      id: 'ang-u07-l05',
      kind: 'reading',
      title: 'Хроника: зима 878 года',
      goals: ['Читать знаменитую статью об Альфреде', 'Определять класс и форму сильных глаголов', 'Узнавать согласование по смыслу с собирательным here'],
      skills: ['ang.reading', 'ang.verb.strong.ablaut', 'ang.verb.strong.pres'],
      theory: [
        { type: 'p', text: 'Датское войско внезапно нападает на Уэссекс в разгар Рождества; король Альфред скрывается в болотах Сомерсета, а весной строит укрепление в Ательни, откуда начинает войну, завершившуюся победой при Эдингтоне.' },
        { type: 'rule', text: '**Согласование по смыслу**: *se here* (ед.) — но *ġerīdon, ġesǣton, ādrǣfdon* (мн.): «войско» понимается как «они».' },
        { type: 'p', text: '**hine bestæl** — «прокрался» (возвратное употребление местоимения); **lȳtle werede** — дат.-твор. без предлога «с малым отрядом»; **þæs ōþres þone mǣstan dǣl** — партитивный род.; **him tō ġecierdon** — tō стоит после местоимения; **wæs winnende** — описательная форма «вёл войну».' }
      ],
      vocab: [
        { id: 'ang-bestelan', w: 'bestelan', ru: 'красться (с возвр. мест.)', pos: 'v', forms: 'bestelan, bestæl, bestǣlon, bestolen (IV кл.)', ex: 'Se here hine bestæl.', exRu: 'Войско прокралось.', note: null },
        { id: 'ang-winter', w: 'winter', ru: 'зима; (в счёте) год', pos: 'n', g: 'm', forms: 'winter, wintres m. (u-основа; дат. wintra, мн. winter)', ex: 'on midne winter', exRu: 'среди зимы', note: 'Годы считали зимами.' },
        { id: 'ang-gesittan', w: 'ġesittan', ru: 'занять, поселиться (в)', pos: 'v', forms: 'ġesittan, ġesæt, ġesǣton, ġeseten (V кл.)', ex: 'Hīe ġesǣton þæt land.', exRu: 'Они заняли ту страну.', note: null },
        { id: 'ang-adraefan', w: 'ādrǣfan', ru: 'изгонять', pos: 'v', forms: 'ādrǣfan, ādrǣfde, ādrǣfed (сл. I)', ex: 'Hīe ādrǣfdon þæt folc.', exRu: 'Они изгнали народ.', note: 'Каузатив к drīfan.' },
        { id: 'ang-gecierran', w: 'ġecierran', ru: 'обратиться, повернуть; подчиниться (+ tō)', pos: 'v', forms: 'ġecierran, ġecierde, ġecierred (сл. I)', ex: 'Hīe him tō ġecierdon.', exRu: 'Они им подчинились.', note: 'Поздн. ġecyrran.' },
        { id: 'ang-werod', w: 'werod', ru: 'отряд, дружина', pos: 'n', g: 'n', forms: 'werod, -es n. (a-основа)', ex: 'lȳtle werede', exRu: 'с малым отрядом', note: 'Также weorod.' },
        { id: 'ang-geweorc', w: 'ġeweorc', ru: 'укрепление; сооружение', pos: 'n', g: 'n', forms: 'ġeweorc, -es n. (a-основа)', ex: 'Hē worhte ġeweorc.', exRu: 'Он построил укрепление.', note: null },
        { id: 'ang-winnan', w: 'winnan', ru: 'бороться, воевать', pos: 'v', forms: 'winnan, wann, wunnon, wunnen (III кл.)', ex: 'Hē wæs winnende wiþ þone here.', exRu: 'Он воевал с войском.', note: 'Совр. win.' },
        { id: 'ang-eastron', w: 'Ēastron', ru: 'Пасха', pos: 'n', g: 'f', forms: 'Ēastron (дат. мн. от Ēastre, -an f.)', ex: 'on Ēastron', exRu: 'на Пасху', note: 'Совр. Easter.' },
        { id: 'ang-butan', w: 'būtan', ru: 'кроме; без; если не, лишь бы', pos: 'prep', forms: '+ дат.; как союз — + сосл.; также būton', ex: 'būtan þǣm cyninge', exRu: 'кроме короля', note: 'Совр. but.' }
      ],
      text: {
        title: 'Англосаксонская хроника, 878 (рук. A)',
        lines: [
          { t: 'Hēr hine bestæl se here on midne winter ofer twelftan niht tō Cippanhamme,', ru: 'В этот год (датское) войско прокралось среди зимы, после Двенадцатой ночи, к Чиппенхему,' },
          { t: 'and ġerīdon Westseaxna lond and ġesǣton,', ru: 'и они захватили землю западных саксов и заняли её,' },
          { t: 'and miċel þæs folces ofer sǣ ādrǣfdon,', ru: 'и многих из народа изгнали за море,' },
          { t: 'and þæs ōþres þone mǣstan dǣl hīe ġerīdon and him tō ġecierdon,', ru: 'а большую часть остальных покорили, и те им подчинились,' },
          { t: 'būton þām cyninge Ælfrede.', ru: '— кроме короля Альфреда.' },
          { t: 'And hē lȳtle werede unīeþelīċe æfter wudum fōr and on mōrfæstenum.', ru: 'А он с малым отрядом с трудом скитался по лесам и болотным укрытиям.' },
          { t: 'And þæs on Ēastron worhte Ælfred cyning lȳtle werede ġeweorc æt Æþelingaīeġe,', ru: 'А после того, на Пасху, король Альфред с малым отрядом построил укрепление в Ательни,' },
          { t: 'and of þām ġeweorce wæs winnende wiþ þone here.', ru: 'и из этого укрепления вёл войну с (датским) войском.' }
        ]
      }
    }
  ]
};

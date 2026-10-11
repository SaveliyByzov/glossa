export default {
  id: 'ang-u08',
  title: 'Iċ wāt, iċ mæġ, iċ sceal',
  titleRu: 'Претерито-презентные и аномальные глаголы, синтаксис, поэзия',
  summary: 'Претерито-презентные (witan, magan, sculan…) и аномальные (dōn, gān, willan) глаголы, сослагательное наклонение и его употребление, порядок слов и отрицание. Финал — начало «Беовульфа».',
  lessons: [
    {
      id: 'ang-u08-l01',
      kind: 'grammar',
      title: 'Претерито-презентные глаголы',
      goals: ['Спрягать witan, cunnan, magan, sculan, mōtan', 'Понимать происхождение этих глаголов', 'Различать значения mōtan и sculan'],
      skills: ['ang.verb.pretpres'],
      theory: [
        { type: 'p', text: '**Претерито-презентные** глаголы: их настоящее время по форме — старый сильный **претерит** (поэтому в 3 л. ед. нет -þ: *hē wāt*, как *hē rād*), а новый претерит — **слабый**, с дентальным суффиксом.' },
        { type: 'table', caption: 'Основные претерито-презентные', head: ['инф.', 'iċ / hē', 'þū', 'мн.', 'претерит', 'значение'],
          rows: [
            ['witan', 'wāt', 'wāst', 'witon', 'wiste, wisse', 'знать'],
            ['cunnan', 'cann', 'canst', 'cunnon', 'cūþe', 'уметь, знать'],
            ['magan', 'mæġ', 'meaht, miht', 'magon', 'meahte, mihte', 'мочь'],
            ['sculan', 'sceal', 'scealt', 'sculon', 'sceolde', 'быть должным'],
            ['mōtan', 'mōt', 'mōst', 'mōton', 'mōste', 'иметь право, мочь'],
            ['þurfan', 'þearf', 'þearft', 'þurfon', 'þorfte', 'нуждаться'],
            ['durran', 'dearr', 'dearst', 'durron', 'dorste', 'сметь'],
            ['āgan', 'āh', 'āhst', 'āgon', 'āhte', 'владеть'],
            ['ġemunan', 'ġeman', 'ġemanst', 'ġemunon', 'ġemunde', 'помнить'],
            ['unnan', 'ann', '—', 'unnon', 'ūþe', 'дарить, желать (+ род.)']
          ],
          note: 'Сосл. наст.: wite, cunne, mæġe, scyle, mōte, durre (ср. «iċ durre» в «Беседе»). Отриц.: nāt (= ne wāt), nyste, nāh, nāhte.' },
        { type: 'rule', text: 'Значения отличаются от современных потомков: **mōt** — «могу, мне позволено» (не «должен»!); **sceal** — «должен», иногда с оттенком будущего; **mæġ** — «могу, в силах» (ср. mæġen «сила»); **cann** — «знаю, умею».' },
        { type: 'examples', items: [
          { t: 'Iċ nāt hwæt þū sæġst.', ru: 'Я не знаю, что ты говоришь.' },
          { t: 'Ǣlċe dæġ iċ sceal erian fulne æcer.', ru: 'Каждый день я должен вспахать целый акр.' },
          { t: 'Mōt iċ gān?', ru: 'Можно мне пойти?' },
          { t: 'Hē ne mihte gān.', ru: 'Он не мог идти.' }
        ] },
        { type: 'contrast', text: '**wāt** — родственник русского **ведать**, и они устроены одинаково: старославянское **вѣдѣ** «я знаю» — тоже древняя форма перфекта в значении настоящего («я увидел» → «я знаю»).' },
        { type: 'pitfall', text: 'После этих глаголов инфинитив — без tō: *iċ sceal erian*, *hē mæġ gān*. Глагол движения часто опускается: *iċ sceal tō Rōme* «я должен (ехать) в Рим».' },
        { type: 'tip', text: 'cann → can, cūþe → could (l вставлено по аналогии с should), sceal → shall, sceolde → should, mæġ → may, mihte → might, mōste → must, āhte → ought, wāt → wot (архаич.).' }
      ],
      vocab: [
        { id: 'ang-witan', w: 'witan', ru: 'знать', pos: 'v', forms: 'wāt, wāst, wāt; witon; wiste (прет.-през.)', ex: 'Iċ wāt þæt hit sōþ is.', exRu: 'Я знаю, что это правда.', note: 'Отриц. nāt, nyste. Рус. ведать.' },
        { id: 'ang-cunnan', w: 'cunnan', ru: 'знать, уметь', pos: 'v', forms: 'cann, canst, cann; cunnon; cūþe (прет.-през.)', ex: 'Hē cann Lǣden.', exRu: 'Он знает латынь.', note: 'Прич. cūþ «известный» → uncouth.' },
        { id: 'ang-magan', w: 'magan', ru: 'мочь, быть в силах', pos: 'v', forms: 'mæġ, meaht, mæġ; magon; meahte / mihte (прет.-през.)', ex: 'Iċ ne mæġ.', exRu: 'Я не могу.', note: null },
        { id: 'ang-sculan', w: 'sculan', ru: 'быть должным', pos: 'v', forms: 'sceal, scealt, sceal; sculon; sceolde (прет.-през.)', ex: 'Þū scealt gān.', exRu: 'Ты должен идти.', note: null },
        { id: 'ang-motan', w: 'mōtan', ru: 'иметь право, мочь (с позволения)', pos: 'v', forms: 'mōt, mōst, mōt; mōton; mōste (прет.-през.)', ex: 'Mōt iċ sprecan?', exRu: 'Можно мне сказать?', note: 'Не «должен»!' },
        { id: 'ang-thurfan', w: 'þurfan', ru: 'нуждаться, иметь надобность', pos: 'v', forms: 'þearf, þearft, þearf; þurfon; þorfte (прет.-през.)', ex: 'Ne þearft þū þē ondrǣdan.', exRu: 'Тебе не нужно бояться.', note: 'Сущ. þearf «нужда».' },
        { id: 'ang-durran', w: 'durran', ru: 'сметь', pos: 'v', forms: 'dearr, dearst, dearr; durron; dorste (прет.-през.)', ex: 'Hē ne dorste sprecan.', exRu: 'Он не смел говорить.', note: 'Совр. dare — durst.' },
        { id: 'ang-agan', w: 'āgan', ru: 'владеть, иметь', pos: 'v', forms: 'āh, āhst, āh; āgon; āhte (прет.-през.)', ex: 'Hē āh miċel land.', exRu: 'Он владеет большими землями.', note: 'Прил. āgen «собственный» → own; āhte → ought.' },
        { id: 'ang-gemunan', w: 'ġemunan', ru: 'помнить', pos: 'v', forms: 'ġeman, ġemanst, ġeman; ġemunon; ġemunde (прет.-през.)', ex: 'Iċ ġeman þā dagas.', exRu: 'Я помню те дни.', note: 'Лат. memini — тоже перфект в значении настоящего.' },
        { id: 'ang-unnan', w: 'unnan', ru: 'дарить, жаловать; желать (+ род.)', pos: 'v', forms: 'ann; unnon; ūþe (прет.-през.)', ex: 'God ūþe him siġes.', exRu: 'Бог даровал ему победу.', note: 'В грамотах и завещаниях.' }
      ],
      text: null
    },
    {
      id: 'ang-u08-l02',
      kind: 'grammar',
      title: 'Аномальные глаголы и отрицание',
      goals: ['Спрягать dōn, gān, willan', 'Узнавать слитные отрицательные формы', 'Понимать многократное отрицание'],
      skills: ['ang.verb.anomalous', 'ang.syntax.neg'],
      theory: [
        { type: 'table', caption: 'dōn, gān, willan', head: ['', 'dōn «делать»', 'gān «идти»', 'willan «хотеть»'],
          rows: [
            ['iċ', 'dō', 'gā', 'wille'],
            ['þū', 'dēst', 'gǣst', 'wilt'],
            ['hē', 'dēþ', 'gǣþ', 'wile'],
            ['мн.', 'dōþ', 'gāþ', 'willaþ'],
            ['сосл. ед.', 'dō', 'gā', 'wille'],
            ['претерит', 'dyde', 'ēode', 'wolde'],
            ['прет. мн.', 'dydon', 'ēodon', 'woldon'],
            ['прич. II', 'ġedōn', 'ġegān', '—']
          ],
          note: 'ēode — супплетивный претерит (ср. рус. идти — шёл). О bēon/wesan см. юнит 1.' },
        { type: 'rule', text: '**ne** + глагол на гласный, h или w сливается: **nis** (ne is), **næs** (ne wæs), **nāt** (ne wāt), **nyste** (ne wiste), **næfþ, næfde** (ne hæfþ, ne hæfde), **nylle, nolde** (ne wille, ne wolde), **nāh** (ne āh).' },
        { type: 'rule', text: '**Многократное отрицание** не уничтожает, а усиливает: *Nān mann nyste nāht* «никто ничего не знал»; *ne … nǣfre* «никогда не»; *ne … ne* «ни … ни».' },
        { type: 'examples', items: [
          { t: 'Hē dyde swā swā se cyning hēt.', ru: 'Он сделал так, как велел король.' },
          { t: 'Hīe ēodon tō ċiriċan.', ru: 'Они пошли в церковь.' },
          { t: 'Uton gān hām.', ru: 'Пойдём домой.' },
          { t: 'Ne wolde hē nǣfre ġelīefan.', ru: 'Он никак не хотел поверить (букв. никогда не хотел).' }
        ] },
        { type: 'contrast', text: 'Многократное отрицание — **как в русском**: «никто ничего не знал». Здесь русскоязычному легче, чем носителю современного английского.' },
        { type: 'tip', text: 'dēþ → doth, gǣþ → goeth; nolde → «willy-nilly» (< will he, nill he).' }
      ],
      vocab: [
        { id: 'ang-don', w: 'dōn', ru: 'делать; класть; заставлять', pos: 'v', forms: 'dō, dēst, dēþ; dōþ; dyde; ġedōn (аномальный)', ex: 'Hwæt dēst þū?', exRu: 'Что ты делаешь?', note: null },
        { id: 'ang-gan', w: 'gān', ru: 'идти', pos: 'v', forms: 'gā, gǣst, gǣþ; gāþ; ēode; ġegān (аномальный)', ex: 'Iċ gā ūt.', exRu: 'Я выхожу.', note: 'Претерит супплетивный.' },
        { id: 'ang-nyllan', w: 'nyllan', ru: 'не хотеть', pos: 'v', forms: 'nylle, nylt, nyle; nyllaþ; nolde (аномальный)', ex: 'Hē nolde gān.', exRu: 'Он не хотел идти.', note: '< ne + willan.' },
        { id: 'ang-uton', w: 'uton', ru: 'давайте (+ инф.)', pos: 'part', forms: 'также wuton', ex: 'Uton gān.', exRu: 'Пойдёмте.', note: 'Застывшая форма (вероятно, сосл. от wītan «уходить»).' },
        { id: 'ang-naht', w: 'nāht', ru: 'ничто; нисколько', pos: 'pron', forms: 'также nāwiht, nōht', ex: 'Hē ne sæġde nāht.', exRu: 'Он ничего не сказал.', note: 'Совр. naught, not.' },
        { id: 'ang-naefre', w: 'nǣfre', ru: 'никогда', pos: 'adv', forms: null, ex: 'Ne cymþ hē nǣfre.', exRu: 'Он никогда не придёт.', note: '< ne + ǣfre.' },
        { id: 'ang-aefre', w: 'ǣfre', ru: 'всегда; когда-либо', pos: 'adv', forms: null, ex: 'Hē is ǣfre gōd.', exRu: 'Он всегда добр.', note: 'Совр. ever.' },
        { id: 'ang-giet', w: 'ġīet', ru: 'ещё; всё же', pos: 'adv', forms: 'поздн. ġȳt', ex: 'Hē is ġīet hēr.', exRu: 'Он ещё здесь.', note: 'Совр. yet.' },
        { id: 'ang-aer', w: 'ǣr', ru: 'раньше, прежде; (+ дат.) до', pos: 'adv', forms: 'сравн. ǣror, превосх. ǣrest', ex: 'swā wē ǣr sǣdon', exRu: 'как мы прежде сказали', note: 'ǣrest «впервые». Совр. ere.' },
        { id: 'ang-eft', w: 'eft', ru: 'снова; потом, обратно', pos: 'adv', forms: null, ex: 'Hē cōm eft.', exRu: 'Он пришёл снова.', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u08-l03',
      kind: 'grammar',
      title: 'Сослагательное наклонение',
      goals: ['Образовывать сослагательное настоящего и претерита', 'Употреблять его в косвенной речи, целевых, условных и уступительных', 'Узнавать сослагательное желания'],
      skills: ['ang.verb.subj'],
      theory: [
        { type: 'table', caption: 'Формы', head: ['', 'наст. ед.', 'наст. мн.', 'прет. ед.', 'прет. мн.'],
          rows: [
            ['слабый (hīeran)', 'hīer{{e}}', 'hīer{{en}}', 'hīerd{{e}}', 'hīerd{{en}}'],
            ['слабый II (lufian)', 'lufi{{e}}', 'lufi{{en}}', 'lufod{{e}}', 'lufod{{en}}'],
            ['сильный (rīdan)', 'rīd{{e}}', 'rīd{{en}}', 'rid{{e}}', 'rid{{en}}'],
            ['сильный (beran)', 'ber{{e}}', 'ber{{en}}', 'bǣr{{e}}', 'bǣr{{en}}'],
            ['wesan / bēon', 'sīe / bēo', 'sīen / bēon', 'wǣre', 'wǣren']
          ],
          note: 'Одна форма для всех лиц в каждом числе. Сосл. претерита сильных — от основы мн. ч. В поздних текстах -en пишется -on/-an.' },
        { type: 'rule', text: 'Главные употребления: **желание/побуждение** (*Sīe þīn nama ġehālgod*); **косвенная речь** (*Hē sæġde þæt hē wǣre cyning*); **цель** после þæt (*þæt hē hēolde his swīn*); **нереальное условие** — сосл. прет. (*ġif hē hēr wǣre…*); **уступка** после þēah (þe); **время** после ǣr (þām) þe «прежде чем»; **сравнение** после swilċe «как будто».' },
        { type: 'examples', items: [
          { t: 'God ūs ġehealde!', ru: 'Да хранит нас Бог!' },
          { t: 'Hē sæġde þæt se cyning dēad wǣre.', ru: 'Он сказал, что король мёртв.', note: 'косвенная речь' },
          { t: 'Þēah þe hē strang sīe, hē ne mæġ hit dōn.', ru: 'Хотя он и силён, он не может этого сделать.' },
          { t: 'Ġif iċ hit wiste, iċ hit sæġde.', ru: 'Если бы я это знал, я бы сказал.' },
          { t: 'Ǣr þām þe se dæġ cume', ru: 'прежде чем наступит день' }
        ] },
        { type: 'contrast', text: 'Русское «бы» охватывает только часть случаев (нереальное условие, «чтобы»). Сослагательное в косвенной речи по-русски не передаётся вовсе: «он сказал, что король мёртв» — изъявительное.' },
        { type: 'pitfall', text: 'После **ġif** с реальным условием — изъявительное: *ġif þū wilt, iċ cume* «если хочешь, я приду». Сослагательное прет. — только для нереального.' },
        { type: 'tip', text: 'Пережитки в совр. английском: *God save the King* (= God ġehealde), *if I were*, *be that as it may*.' }
      ],
      vocab: [
        { id: 'ang-thaet-conj', w: 'þæt', ru: 'что; чтобы (союз)', pos: 'conj', forms: 'тж. tō þām þæt «для того чтобы»', ex: 'Hē sæġde þæt hē cōme.', exRu: 'Он сказал, что придёт.', note: 'Омоним указательного þæt.' },
        { id: 'ang-gif', w: 'ġif', ru: 'если', pos: 'conj', forms: 'поздн. ġyf', ex: 'Ġif þū wilt, iċ cume.', exRu: 'Если хочешь, я приду.', note: 'Совр. if.' },
        { id: 'ang-theah', w: 'þēah', ru: 'хотя (+ сосл.); всё же', pos: 'conj', forms: 'þēah þe', ex: 'þēah þe hē wīs sīe', exRu: 'хотя он и мудр', note: 'Совр. though.' },
        { id: 'ang-aer-tham-the', w: 'ǣr þām þe', ru: 'прежде чем (+ сосл.)', pos: 'conj', forms: 'тж. ǣr', ex: 'ǣr þām þe hē fōre', exRu: 'прежде чем он уехал', note: null },
        { id: 'ang-oththaet', w: 'oþ þæt', ru: 'пока не, до тех пор пока', pos: 'conj', forms: 'тж. oþþæt', ex: 'Hē bād oþ þæt hē cōm.', exRu: 'Он ждал, пока тот не пришёл.', note: 'oþ «до» — предлог + вин.' },
        { id: 'ang-forthaem', w: 'forþām (þe)', ru: 'потому что', pos: 'conj', forms: 'тж. forþām, forþon, forþȳ', ex: 'forþām þe hē wæs wīs', exRu: 'потому что он был мудр', note: 'Как наречие — «поэтому».' },
        { id: 'ang-siththan', w: 'siþþan', ru: 'после того как; с тех пор как; (нареч.) потом', pos: 'conj', forms: 'поздн. syþþan', ex: 'siþþan hē cōm', exRu: 'после того как он пришёл', note: 'Совр. since.' },
        { id: 'ang-swilce-conj', w: 'swilċe', ru: 'как будто, словно (+ сосл.); также', pos: 'conj', forms: 'тж. swelċe, swylċe; ēac swilċe «также»', ex: 'swilċe hē slǣpe', exRu: 'словно он спит', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u08-l04',
      kind: 'grammar',
      title: 'Порядок слов',
      goals: ['Различать главные и придаточные по позиции глагола', 'Разрешать двусмысленность þā/þǣr/þonne', 'Узнавать порядок с местоименным дополнением'],
      skills: ['ang.syntax.order'],
      theory: [
        { type: 'rule', text: '**Главное предложение — глагол на втором месте (V2)**: *Se cyning fōr tō Rōme*. Если впереди наречие **þā, þǣr, þonne, nū** — инверсия: *Þā fōr se cyning tō Rōme* «тогда король поехал в Рим».' },
        { type: 'rule', text: '**Придаточное — глагол стремится в конец**: *þā se cyning tō Rōme fōr* «когда король поехал в Рим»; *þe his hūs ofer stān ġetimbrode*.' },
        { type: 'rule', text: '**Местоименное дополнение** обычно стоит перед глаголом даже в главном: *Hē hine ġeseah* «он его увидел»; *Se cyning him sealde gold*.' },
        { type: 'table', caption: 'Корреляты: главное или придаточное?', head: ['слово', 'главное (V перед S)', 'придаточное (V в конце)'],
          rows: [
            ['þā', 'Þā cōm hē «тогда он пришёл»', 'þā hē cōm «когда он пришёл»'],
            ['þǣr', 'Þǣr wæs hē «там он был»', 'þǣr hē wæs «где он был»'],
            ['þonne', 'Þonne gǣþ hē «тогда он идёт»', 'þonne hē gǣþ «когда он идёт»']
          ],
          note: 'Образец: Þā hē hīe hæfde ealle āmyrrede, þā wearþ miċel hungor (юнит 6).' },
        { type: 'p', text: '**Глагол на первом месте** — в вопросах (*Hæfst þū ǣniġne ġefēran?*), повелительных, при отрицании (*Ne mihte hē…*, *Nis hit swā stearc winter…*) и в живом повествовании (*Wæs hē swīþe wīs*).' },
        { type: 'contrast', text: 'Русский порядок свободен и служит актуальному членению; древнеанглийский тоже гибче современного английского, но **позиция глагола грамматична** — как в немецком (V2 в главном, глагол в конце придаточного).' },
        { type: 'pitfall', text: 'Не переводите автоматически þā как «тогда»: смотрите на позицию глагола. *Þā hē þæt ġehīerde, þā ārās hē* — «когда он это услышал, тогда он встал».' },
        { type: 'tip', text: 'Тот же принцип — в немецком: *Dann kam er* / *als er kam*.' }
      ],
      vocab: [
        { id: 'ang-tha-adv', w: 'þā', ru: 'тогда; (союз) когда', pos: 'adv', forms: 'þā … þā «когда … тогда»', ex: 'Þā cōm hē.', exRu: 'Тогда он пришёл.', note: 'Омоним форм se/sēo.' },
        { id: 'ang-thonne', w: 'þonne', ru: 'тогда (обычно), затем; когда (всякий раз); чем', pos: 'adv', forms: null, ex: 'māra þonne iċ', exRu: 'больше, чем я', note: 'Совр. then, than.' },
        { id: 'ang-hwaether', w: 'hwæþer', ru: 'который из двух; ли (в косв. вопросе)', pos: 'pron', forms: 'как сильное прил.', ex: 'Hē āscode hwæþer hē cōme.', exRu: 'Он спросил, придёт ли он.', note: 'Совр. whether.' },
        { id: 'ang-aegther', w: 'ǣġþer', ru: 'каждый из двух; ǣġþer ġe … ġe — и … и', pos: 'pron', forms: 'тж. ǣġhwæþer', ex: 'ǣġþer ġe menn ġe wīf', exRu: 'и мужчины, и женщины', note: 'Совр. either.' },
        { id: 'ang-nather', w: 'nāþer', ru: 'ни один из двух; nāþer ne … ne — ни … ни', pos: 'pron', forms: 'тж. nāwþer', ex: 'nāþer ne hē ne hēo', exRu: 'ни он, ни она', note: 'Совр. neither.' },
        { id: 'ang-aeghwilc', w: 'ǣġhwilċ', ru: 'каждый, всякий', pos: 'pron', forms: 'как сильное прил.; поздн. ǣġhwylċ', ex: 'ǣġhwilċ þāra', exRu: 'каждый из них', note: null },
        { id: 'ang-witodlice', w: 'witodlīċe', ru: 'воистину; же', pos: 'adv', forms: null, ex: 'Witodlīċe hē wæs gōd.', exRu: 'Воистину он был добр.', note: 'Переводит лат. autem.' },
        { id: 'ang-eornostlice', w: 'eornostlīċe', ru: 'итак, поэтому', pos: 'adv', forms: null, ex: 'Eornostlīċe ǣlċ þāra þe…', exRu: 'Итак, всякий, кто…', note: 'Переводит лат. ergo.' }
      ],
      text: null
    },
    {
      id: 'ang-u08-l05',
      kind: 'reading',
      title: '«Беовульф», строки 1–11',
      goals: ['Читать начало «Беовульфа» с подстрочником', 'Видеть аллитерацию и полустишия', 'Узнавать кеннинги и поэтическую лексику'],
      skills: ['ang.reading', 'ang.poetry'],
      theory: [
        { type: 'p', text: 'Стих — **аллитерационный**: строка из двух полустиший, связанных созвучием начальных согласных ударных слогов (все гласные аллитерируют друг с другом): ***G**ār-Dena — **ġ**ēardagum*; ***þ**ēodcyninga — **þ**rym*.' },
        { type: 'rule', text: '**Кеннинг** — описательное составное имя: **hronrād** «китовая дорога» = море; **meodosetl** «медовая скамья» = пиршественный зал, власть. **Вариация** — повтор одного понятия разными словами (*Gār-Dena … þēodcyninga*).' },
        { type: 'p', text: 'Поэтические особенности: слабые прилагательные без артикля, лексика, неизвестная прозе (ellen, frōfor, weorþmynd), англские и архаичные формы (**monegum** с o перед носовым, **egsode**). **ġefrūnon** — стяжённый вариант прет. мн. от ġefriġnan. **þæs** «за это»; **oþ þæt … scolde** «пока … не стал должен».' }
      ],
      vocab: [
        { id: 'ang-aetheling', w: 'æþeling', ru: 'князь, благородный муж', pos: 'n', g: 'm', forms: 'æþeling, -es m. (a-основа)', ex: 'þā æþelingas', exRu: 'те князья', note: 'Ср. нем. Adel.' },
        { id: 'ang-ellen', w: 'ellen', ru: 'доблесть, отвага', pos: 'n', g: 'n', forms: 'ellen, elnes n. (a-основа)', ex: 'ellen fremman', exRu: 'совершать подвиги', note: 'Поэт.' },
        { id: 'ang-eorl', w: 'eorl', ru: 'знатный воин; (поздн.) ярл', pos: 'n', g: 'm', forms: 'eorl, -es m. (a-основа)', ex: 'Hē egsode eorlas.', exRu: 'Он устрашал воинов.', note: 'Совр. earl.' },
        { id: 'ang-maegth', w: 'mǣġþ', ru: 'род, племя, народ', pos: 'n', g: 'f', forms: 'mǣġþ, -e f. (ō-основа)', ex: 'monegum mǣġþum', exRu: 'многим племенам', note: 'Не путать с mæġþ «дева».' },
        { id: 'ang-frofor', w: 'frōfor', ru: 'утешение, помощь', pos: 'n', g: 'f', forms: 'frōfor, frōfre f. (ō-основа)', ex: 'Hē þæs frōfre ġebād.', exRu: 'Он дождался за то утешения.', note: 'ġebīdan + род.' },
        { id: 'ang-wolcen', w: 'wolcen', ru: 'облако; мн. небеса', pos: 'n', g: 'n', forms: 'wolcen, wolcnes n. (a-основа; мн. wolcnu)', ex: 'under wolcnum', exRu: 'под небесами', note: 'Нем. Wolke; совр. welkin.' },
        { id: 'ang-thrym', w: 'þrymm', ru: 'сила, слава, величие', pos: 'n', g: 'm', forms: 'þrymm, -es m. (a-основа); тж. þrym', ex: 'þēodcyninga þrym', exRu: 'слава королей народа', note: 'Поэт.' },
        { id: 'ang-gefrignan', w: 'ġefriġnan', ru: 'узнать (из рассказа), услышать', pos: 'v', forms: 'ġefriġnan, ġefræġn, ġefrugnon (ġefrūnon), ġefrugnen (III кл.)', ex: 'Wē þæt ġefrūnon.', exRu: 'Мы об этом слышали.', note: 'Формула эпического зачина.' },
        { id: 'ang-geardagas', w: 'ġēardagas', ru: 'давние дни, былые времена', pos: 'n', g: 'm', forms: 'ġēardagas m. мн. (дат. ġēardagum)', ex: 'in ġēardagum', exRu: 'в давние дни', note: 'Совр. yore < ġēara.' },
        { id: 'ang-theod', w: 'þēod', ru: 'народ', pos: 'n', g: 'f', forms: 'þēod, -e f. (ō-основа)', ex: 'ofer ealle þēoda', exRu: 'над всеми народами', note: 'Ср. þēodcyning, нем. deutsch.' }
      ],
      text: {
        title: 'Beowulf, 1–11',
        lines: [
          { t: 'Hwæt! Wē Gār-Dena in ġēardagum,', ru: 'Внимайте! Мы о копьё-данах в давние дни,' },
          { t: 'þēodcyninga þrym ġefrūnon,', ru: 'о славе королей народа слышали,' },
          { t: 'hū þā æþelingas ellen fremedon.', ru: 'как те князья совершали подвиги.' },
          { t: 'Oft Scyld Scēfing sceaþena þrēatum,', ru: 'Часто Скильд Скевинг у отрядов врагов,' },
          { t: 'monegum mǣġþum meodosetla oftēah,', ru: 'у многих племён отнимал медовые скамьи,' },
          { t: 'egsode eorlas, syþþan ǣrest wearþ', ru: 'устрашал воинов, с тех пор как впервые был' },
          { t: 'fēasceaft funden; hē þæs frōfre ġebād,', ru: 'найден беспомощным; он за то утешения дождался:' },
          { t: 'wēox under wolcnum, weorþmyndum þāh,', ru: 'рос под небесами, процветал в почестях,' },
          { t: 'oþ þæt him ǣġhwylċ þāra ymbsittendra', ru: 'пока каждый из окрестных народов' },
          { t: 'ofer hronrāde hȳran scolde,', ru: 'за китовой дорогой не стал ему покоряться' },
          { t: 'gomban gyldan. Þæt wæs gōd cyning!', ru: 'и дань платить. То был добрый король!' }
        ]
      }
    }
  ]
};

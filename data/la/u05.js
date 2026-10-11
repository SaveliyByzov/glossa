export default {
  id: 'la-u05',
  title: 'Prōnōmina. Quārta et quīnta dēclīnātiō',
  titleRu: 'Местоимения. 4-е и 5-е склонения',
  summary: 'Личные, возвратные и притяжательные местоимения, указательные is/hic/ille/ipse/īdem, относительное и вопросительное; 4-е и 5-е склонения. Чтение — Евтропий о царях.',
  lessons: [
    {
      id: 'la-u05-l01',
      kind: 'grammar',
      title: 'Личные, возвратные и притяжательные местоимения',
      goals: ['Склонять ego, tū, suī', 'Различать suus и eius', 'Задавать вопросы с -ne, nōnne, num'],
      skills: ['la.pron.pers', 'la.pron.refl', 'la.syntax.question'],
      theory: [
        { type: 'table', head: ['Падеж', '1 sg.', '2 sg.', 'возвр.', '1 pl.', '2 pl.'],
          rows: [
            ['Nom.', 'ego', 'tū', '—', 'nōs', 'vōs'],
            ['Gen.', 'meī', 'tuī', 'suī', 'nostrum / nostrī', 'vestrum / vestrī'],
            ['Dat.', 'mihi', 'tibi', 'sibi', 'nōbīs', 'vōbīs'],
            ['Acc.', 'mē', 'tē', 'sē (sēsē)', 'nōs', 'vōs'],
            ['Abl.', 'mē', 'tē', 'sē (sēsē)', 'nōbīs', 'vōbīs']
          ],
          note: 'С cum — энклитически: mēcum, tēcum, sēcum, nōbīscum, vōbīscum. Gen. pl.: nostrum — партитивный (*ūnus nostrum* «один из нас»), nostrī — объектный (*memoria nostrī* «память о нас»).' },
        { type: 'p', text: 'Притяжательные: *meus, tuus, suus* (как bonus; Voc. m. sg. от meus — **mī**), *noster, vester* (как pulcher). Личного местоимения 3-го лица нет: его заменяет *is, ea, id* (урок 2).' },
        { type: 'rule', text: '**suī / suus** относятся к **подлежащему** предложения; если «его/её/их» указывает на кого-то другого — **eius, eōrum, eārum** (Gen. от is).' },
        { type: 'contrast', text: 'Почти как русское «свой»: *Caesar mīlitēs suōs laudat* — «хвалит своих воинов»; *Caesar mīlitēs eius laudat* — «его (другого) воинов». Но рус. «свой» — для всех лиц («люблю свою мать»), а латинское suus — только для 3-го: *Mātrem meam amō*.' },
        { type: 'h', text: 'Вопрос' },
        { type: 'table', head: ['Частица', 'Ожидаемый ответ', 'Пример'],
          rows: [
            ['-ne (энклитика)', 'нейтральный', 'Vidēsne? — Видишь?'],
            ['nōnne', '«да»', 'Nōnne vidēs? — Разве ты не видишь? (Ведь видишь?)'],
            ['num', '«нет»', 'Num vidēs? — Неужели ты видишь?']
          ],
          note: 'Ответ «да» — повтор глагола (*videō*) или *ita, sānē*; «нет» — *nōn (videō), minimē*.' },
        { type: 'pitfall', text: 'Местоимение-подлежащее при глаголе — знак логического ударения или противопоставления: *Ego laudō, tū vituperās* — «Я хвалю, а ты бранишь».' },
        { type: 'examples', items: [
          { t: 'Dā mihi librum tuum!', ru: 'Дай мне свою (твою) книгу!' },
          { t: 'Pater fīlium sēcum dūcit.', ru: 'Отец ведёт сына с собой.' },
          { t: 'Quid tibi vīs?', ru: 'Чего тебе надо? (букв. чего хочешь для себя?)' },
          { t: 'Ūnus nostrum mentītur.', ru: 'Один из нас лжёт.' }
        ] }
      ],
      vocab: [
        { id: 'la-ego', w: 'ego', ru: 'я', pos: 'pron', forms: 'ego, meī, mihi, mē, mē', ex: 'Ego et tū', exRu: 'я и ты', note: null },
        { id: 'la-tu', w: 'tū', ru: 'ты', pos: 'pron', forms: 'tū, tuī, tibi, tē, tē', ex: 'Et tū, Brūte?', exRu: 'И ты, Брут?', note: null },
        { id: 'la-nos', w: 'nōs', ru: 'мы', pos: 'pron', forms: 'nōs, nostrum/nostrī, nōbīs, nōs, nōbīs', ex: 'nōbīscum', exRu: 'с нами', note: null },
        { id: 'la-vos', w: 'vōs', ru: 'вы', pos: 'pron', forms: 'vōs, vestrum/vestrī, vōbīs, vōs, vōbīs', ex: 'Pāx vōbīscum.', exRu: 'Мир вам (с вами).', note: null },
        { id: 'la-sui', w: 'suī', ru: 'себя (возвр.)', pos: 'pron', forms: 'suī, sibi, sē, sē', ex: 'Sibi nocet.', exRu: 'Вредит себе.', note: 'Только 3-е лицо; относится к подлежащему.' },
        { id: 'la-meus', w: 'meus', ru: 'мой', pos: 'pron', forms: 'meus, -a, -um', ex: 'mī fīlī', exRu: 'сын мой (обращение)', note: 'Voc. m. sg. mī.' },
        { id: 'la-tuus', w: 'tuus', ru: 'твой', pos: 'pron', forms: 'tuus, -a, -um', ex: 'liber tuus', exRu: 'твоя книга', note: null },
        { id: 'la-suus', w: 'suus', ru: 'свой (3-е лицо)', pos: 'pron', forms: 'suus, -a, -um', ex: 'mīlitēs suī', exRu: 'свои воины', note: 'Ср. eius — «его» (не подлежащего).' },
        { id: 'la-vester', w: 'vester', ru: 'ваш', pos: 'pron', forms: 'vester, vestra, vestrum', ex: 'patria vestra', exRu: 'ваша родина', note: null },
        { id: 'la-inquam', w: 'inquam', ru: 'говорю (вводн.); inquit — говорит, сказал', pos: 'v', forms: 'inquam, inquis, inquit; inquiunt', ex: '«Venī», inquit.', exRu: '«Приди», — сказал он.', note: 'Недостаточный глагол; стоит внутри прямой речи.' },
        { id: 'la-ne2', w: '-ne', ru: 'ли (вопросительная энклитика)', pos: 'part', forms: null, ex: 'Vidēsne?', exRu: 'Видишь ли?', note: 'Присоединяется к первому слову вопроса.' },
        { id: 'la-nonne', w: 'nōnne', ru: 'разве не? (ожидается «да»)', pos: 'part', forms: null, ex: 'Nōnne vidēs?', exRu: 'Разве ты не видишь?', note: null },
        { id: 'la-num', w: 'num', ru: 'неужели? (ожидается «нет»); ли (в косв. вопросе)', pos: 'part', forms: null, ex: 'Num timēs?', exRu: 'Неужели ты боишься?', note: null },
        { id: 'la-quoque', w: 'quoque', ru: 'тоже, также', pos: 'adv', forms: null, ex: 'Ego quoque veniam.', exRu: 'Я тоже приду.', note: 'Ставится после выделяемого слова.' }
      ],
      text: null
    },
    {
      id: 'la-u05-l02',
      kind: 'grammar',
      title: 'Указательные местоимения',
      goals: ['Склонять is, hic, ille', 'Различать оттенки hic / iste / ille', 'Употреблять ipse и īdem'],
      skills: ['la.pron.dem'],
      theory: [
        { type: 'rule', text: 'Местоименное склонение: **Gen. sg. -īus** и **Dat. sg. -ī** для всех трёх родов; остальное — почти как bonus.' },
        { type: 'table', caption: 'is, ea, id — «он; этот, тот»', head: ['Падеж', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'],
          rows: [
            ['Nom.', 'is', 'ea', 'id', 'eī (iī)', 'eae', 'ea'],
            ['Gen.', 'eius', 'eius', 'eius', 'eōrum', 'eārum', 'eōrum'],
            ['Dat.', 'eī', 'eī', 'eī', 'eīs (iīs)', 'eīs (iīs)', 'eīs (iīs)'],
            ['Acc.', 'eum', 'eam', 'id', 'eōs', 'eās', 'ea'],
            ['Abl.', 'eō', 'eā', 'eō', 'eīs (iīs)', 'eīs (iīs)', 'eīs (iīs)']
          ] },
        { type: 'table', caption: 'hic, haec, hoc — «этот (здесь, мой)»', head: ['Падеж', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'],
          rows: [
            ['Nom.', 'hic', 'haec', 'hoc', 'hī', 'hae', 'haec'],
            ['Gen.', 'huius', 'huius', 'huius', 'hōrum', 'hārum', 'hōrum'],
            ['Dat.', 'huic', 'huic', 'huic', 'hīs', 'hīs', 'hīs'],
            ['Acc.', 'hunc', 'hanc', 'hoc', 'hōs', 'hās', 'haec'],
            ['Abl.', 'hōc', 'hāc', 'hōc', 'hīs', 'hīs', 'hīs']
          ] },
        { type: 'table', caption: 'ille, illa, illud — «тот (там)»', head: ['Падеж', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'],
          rows: [
            ['Nom.', 'ille', 'illa', 'illud', 'illī', 'illae', 'illa'],
            ['Gen.', 'illīus', 'illīus', 'illīus', 'illōrum', 'illārum', 'illōrum'],
            ['Dat.', 'illī', 'illī', 'illī', 'illīs', 'illīs', 'illīs'],
            ['Acc.', 'illum', 'illam', 'illud', 'illōs', 'illās', 'illa'],
            ['Abl.', 'illō', 'illā', 'illō', 'illīs', 'illīs', 'illīs']
          ],
          note: 'Так же iste, ista, istud и ipse, ipsa, **ipsum** (n. на -um!).' },
        { type: 'p', text: '**īdem, eadem, idem** «тот же самый» = is + -dem: eiusdem, eīdem, **eundem, eandem** (m → n перед d), eōdem; pl. eīdem (īdem), eaedem, eadem, **eōrundem**, eārundem, eīsdem.' },
        { type: 'table', head: ['Местоимение', 'Оттенок'],
          rows: [
            ['hic', 'близкое к говорящему; «последний названный»'],
            ['iste', 'близкое к собеседнику; в речах — презрительно: *iste* «этот (негодяй)»'],
            ['ille', 'далёкое; «первый названный»; знаменитый: *Alexander ille* «тот самый Александр»'],
            ['is', 'нейтральное «он, этот»; антецедент: *is, quī* «тот, кто»'],
            ['ipse', 'выделительное «сам»: *Caesar ipse* «сам Цезарь»']
          ] },
        { type: 'pitfall', text: '*ipse* ≠ возвратное *sē*: *ipse sē laudat* — «он сам себя хвалит». *hic* (местоим.) ≠ *hīc* (нареч.) «здесь».' },
        { type: 'contrast', text: 'В русском нет различия «этот (у меня) / этот (у тебя)»: латинское hic — iste — ille ближе к трёхступенчатой системе (ср. устар. *сей — тот — оный*).' },
        { type: 'examples', items: [
          { t: 'Hic liber meus est, ille tuus.', ru: 'Эта книга моя, та — твоя.' },
          { t: 'Eum nōn videō.', ru: 'Я его не вижу.' },
          { t: 'Caesar ipse vēnit.', ru: 'Пришёл сам Цезарь.' },
          { t: 'Eadem semper dīcit.', ru: 'Он всегда говорит одно и то же.' },
          { t: 'Ō tempora, ō mōrēs! Senātus haec intellegit, cōnsul videt; hic tamen vīvit.', ru: 'О времена, о нравы! Сенат это понимает, консул видит; а этот всё же жив. (Цицерон)' }
        ] }
      ],
      vocab: [
        { id: 'la-is', w: 'is', ru: 'он; этот, тот', pos: 'pron', forms: 'is, ea, id', ex: 'Eum laudō.', exRu: 'Хвалю его.', note: 'Gen. eius — «его, её».' },
        { id: 'la-hic', w: 'hic', ru: 'этот', pos: 'pron', forms: 'hic, haec, hoc', ex: 'hōc tempore', exRu: 'в это время', note: 'Ср. hīc «здесь».' },
        { id: 'la-ille', w: 'ille', ru: 'тот; он; знаменитый', pos: 'pron', forms: 'ille, illa, illud', ex: 'illō tempore', exRu: 'в то время', note: null },
        { id: 'la-iste', w: 'iste', ru: 'этот (твой); этот (презр.)', pos: 'pron', forms: 'iste, ista, istud', ex: 'Quid ista vult?', exRu: 'Чего хочет эта (твоя)?', note: null },
        { id: 'la-ipse', w: 'ipse', ru: 'сам; самый', pos: 'pron', forms: 'ipse, ipsa, ipsum', ex: 'Ipse dīxit.', exRu: 'Сам сказал.', note: 'n. ipsum.' },
        { id: 'la-idem', w: 'īdem', ru: 'тот же самый', pos: 'pron', forms: 'īdem, eadem, idem', ex: 'eōdem diē', exRu: 'в тот же день', note: 'Acc. eundem, eandem.' },
        { id: 'la-tam', w: 'tam', ru: 'так, столь (при прил./нареч.)', pos: 'adv', forms: null, ex: 'tam magnus', exRu: 'столь великий', note: 'tam … quam — так … как.' },
        { id: 'la-ita', w: 'ita', ru: 'так, таким образом; да', pos: 'adv', forms: null, ex: 'Ita est.', exRu: 'Так и есть.', note: null },
        { id: 'la-sic', w: 'sīc', ru: 'так', pos: 'adv', forms: null, ex: 'Sīc trānsit glōria mundī.', exRu: 'Так проходит слава мира.', note: null },
        { id: 'la-tantus', w: 'tantus', ru: 'столь великий, такой большой', pos: 'adj', forms: 'tantus, -a, -um', ex: 'tantum bellum', exRu: 'столь большая война', note: 'tantus … quantus — такой … какой.' },
        { id: 'la-enim', w: 'enim', ru: 'ведь, ибо', pos: 'conj', forms: null, ex: 'Hoc enim vērum est.', exRu: 'Ведь это правда.', note: 'Постпозитивный — на втором месте.' },
        { id: 'la-autem', w: 'autem', ru: 'же, а; однако', pos: 'conj', forms: null, ex: 'Ego autem nōn timeō.', exRu: 'Я же не боюсь.', note: 'Постпозитивный.' },
        { id: 'la-etiam', w: 'etiam', ru: 'также, даже; ещё', pos: 'adv', forms: null, ex: 'Etiam tū?', exRu: 'И ты тоже?', note: 'nōn sōlum … sed etiam — не только … но и.' }
      ],
      text: null
    },
    {
      id: 'la-u05-l03',
      kind: 'grammar',
      title: 'Относительное, вопросительное и неопределённые местоимения',
      goals: ['Склонять quī, quae, quod', 'Согласовывать относительное местоимение', 'Различать quis/quid и quī/quod; aliquis, quīdam, quisque'],
      skills: ['la.pron.rel', 'la.pron.interr'],
      theory: [
        { type: 'table', caption: 'quī, quae, quod — «который»', head: ['Падеж', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'],
          rows: [
            ['Nom.', 'quī', 'quae', 'quod', 'quī', 'quae', 'quae'],
            ['Gen.', 'cuius', 'cuius', 'cuius', 'quōrum', 'quārum', 'quōrum'],
            ['Dat.', 'cui', 'cui', 'cui', 'quibus', 'quibus', 'quibus'],
            ['Acc.', 'quem', 'quam', 'quod', 'quōs', 'quās', 'quae'],
            ['Abl.', 'quō', 'quā', 'quō', 'quibus', 'quibus', 'quibus']
          ] },
        { type: 'rule', text: 'Относительное местоимение согласуется с антецедентом в **роде и числе**, а **падеж** получает по своей роли в придаточном.' },
        { type: 'contrast', text: 'Точно как русское «который»: *puella, quam vidēs* — «девушка, которую ты видишь» (ж. р., ед. ч. — от *puella*; вин. п. — от *vidēs*).' },
        { type: 'p', text: 'Вопросительное **quis? quid?** «кто? что?» (Acc. quem? quid?; остальное как quī). Как прилагательное — **quī, quae, quod?** «какой?»: *Quī vir?* «Какой человек?»' },
        { type: 'table', caption: 'Неопределённые', head: ['Местоимение', 'Значение', 'Примечание'],
          rows: [
            ['aliquis, aliquid', 'кто-нибудь, что-нибудь', 'после sī, nisi, num, nē — просто **quis, quid**: *sī quis* «если кто»'],
            ['quīdam, quaedam, quiddam (adj. quoddam)', 'некий, некто (известный, но не названный)', 'Acc. quendam, quandam; Gen. pl. quōrundam'],
            ['quisque, quidque (adj. quodque)', 'каждый', 'обычно после sē, suus, превосходной степени: *suum cuique*'],
            ['quisquam, quidquam', 'кто-либо (в отрицании)', '*nec quisquam* — «и никто»']
          ] },
        { type: 'pitfall', text: '**Относительная связь** (relātīvus coniūnctīvus): в начале нового предложения quī = et is, quae = et ea: *Quae cum ita sint…* — «Раз дело обстоит так…» (букв. «Поскольку это так…»). Не переводите «который».' },
        { type: 'examples', items: [
          { t: 'Liber, {{quem}} legis, meus est.', ru: 'Книга, которую ты читаешь, — моя.' },
          { t: 'Hominēs, {{quōrum}} vīta brevis est…', ru: 'Люди, чья жизнь коротка…' },
          { t: '{{Quis}} es? {{Quid}} vīs?', ru: 'Кто ты? Чего хочешь?' },
          { t: 'Beātus ille, {{quī}} procul negōtiīs…', ru: 'Блажен тот, кто вдали от дел… (Гораций)' },
          { t: 'Suum {{cuique}}.', ru: 'Каждому своё.' }
        ] }
      ],
      vocab: [
        { id: 'la-qui', w: 'quī', ru: 'который; (вопр. прил.) какой?', pos: 'pron', forms: 'quī, quae, quod', ex: 'vir, quem vidēs', exRu: 'человек, которого ты видишь', note: null },
        { id: 'la-quis', w: 'quis', ru: 'кто? что?', pos: 'pron', forms: 'quis, quid', ex: 'Quis es?', exRu: 'Кто ты?', note: 'После sī, nisi, num, nē — «кто-нибудь».' },
        { id: 'la-aliquis', w: 'aliquis', ru: 'кто-нибудь, что-нибудь', pos: 'pron', forms: 'aliquis, aliquid', ex: 'Aliquid dīc!', exRu: 'Скажи что-нибудь!', note: 'Adj.: aliquī, aliqua, aliquod.' },
        { id: 'la-quidam', w: 'quīdam', ru: 'некий, некто; pl. некоторые', pos: 'pron', forms: 'quīdam, quaedam, quiddam (adj. quoddam)', ex: 'quīdam poēta', exRu: 'некий поэт', note: 'Acc. quendam, quandam.' },
        { id: 'la-quisque', w: 'quisque', ru: 'каждый', pos: 'pron', forms: 'quisque, quidque (adj. quodque)', ex: 'Suum cuique.', exRu: 'Каждому своё.', note: null },
        { id: 'la-cur', w: 'cūr', ru: 'почему?', pos: 'adv', forms: null, ex: 'Cūr venīs?', exRu: 'Почему ты приходишь?', note: null },
        { id: 'la-quando', w: 'quandō', ru: 'когда?', pos: 'adv', forms: null, ex: 'Quandō veniēs?', exRu: 'Когда придёшь?', note: 'sī quandō — если когда-нибудь.' },
        { id: 'la-quomodo', w: 'quōmodo', ru: 'как? каким образом?', pos: 'adv', forms: null, ex: 'Quōmodo valēs?', exRu: 'Как поживаешь?', note: 'Также раздельно: quō modō.' },
        { id: 'la-quam', w: 'quam', ru: 'как (насколько); чем (при сравн.)', pos: 'adv', forms: null, ex: 'Quam pulchra est!', exRu: 'Как она прекрасна!', note: 'quam + superl. — как можно…: quam celerrimē.' },
        { id: 'la-quo', w: 'quō', ru: 'куда?', pos: 'adv', forms: null, ex: 'Quō vādis?', exRu: 'Куда идёшь?', note: 'Также союз цели «чтобы тем…» (с compar.).' },
        { id: 'la-unde', w: 'unde', ru: 'откуда?', pos: 'adv', forms: null, ex: 'Unde venīs?', exRu: 'Откуда идёшь?', note: null },
        { id: 'la-nemo', w: 'nēmō', ru: 'никто', pos: 'pron', g: 'c', forms: 'nēmō, nūllīus, nēminī, nēminem, nūllō', ex: 'Nēmō venit.', exRu: 'Никто не пришёл.', note: 'Gen. и Abl. обычно от nūllus.' },
        { id: 'la-nihil', w: 'nihil', ru: 'ничто, ничего', pos: 'pron', g: 'n', forms: 'nihil (nīl), indecl.', ex: 'Nihil sciō.', exRu: 'Ничего не знаю.', note: 'nihil novī — ничего нового (Gen. partitivus).' }
      ],
      text: null
    },
    {
      id: 'la-u05-l04',
      kind: 'grammar',
      title: '4-е и 5-е склонения',
      goals: ['Склонять существительные на -us (-ūs) и -ū', 'Склонять rēs и diēs', 'Знать особенности domus'],
      skills: ['la.noun.decl4', 'la.noun.decl5'],
      theory: [
        { type: 'rule', text: '4-е склонение: Gen. sg. **-ūs**, основа на -u-; мужской род на -us (кроме manus, domus — f.), средний — на -ū. 5-е склонение: Gen. sg. **-ēī/-eī**, почти всё — женского рода (diēs обычно m.).' },
        { type: 'table', head: ['Падеж', 'manus f.', 'cornū n.', 'rēs f.', 'diēs m.'],
          rows: [
            ['Nom. sg.', 'man{{us}}', 'corn{{ū}}', 'r{{ēs}}', 'di{{ēs}}'],
            ['Gen.', 'man{{ūs}}', 'corn{{ūs}}', 'r{{eī}}', 'di{{ēī}}'],
            ['Dat.', 'man{{uī}}', 'corn{{ū}}', 'r{{eī}}', 'di{{ēī}}'],
            ['Acc.', 'man{{um}}', 'corn{{ū}}', 'r{{em}}', 'di{{em}}'],
            ['Abl.', 'man{{ū}}', 'corn{{ū}}', 'r{{ē}}', 'di{{ē}}'],
            ['Nom. pl.', 'man{{ūs}}', 'corn{{ua}}', 'r{{ēs}}', 'di{{ēs}}'],
            ['Gen.', 'man{{uum}}', 'corn{{uum}}', 'r{{ērum}}', 'di{{ērum}}'],
            ['Dat./Abl.', 'man{{ibus}}', 'corn{{ibus}}', 'r{{ēbus}}', 'di{{ēbus}}'],
            ['Acc.', 'man{{ūs}}', 'corn{{ua}}', 'r{{ēs}}', 'di{{ēs}}']
          ],
          note: 'В 5-м скл. -ēī после гласного (diēī, aciēī), -eī после согласного (reī, fideī, speī). Полное мн. ч. — только у rēs и diēs.' },
        { type: 'p', text: '**domus, -ūs f.** смешивает 4-е и 2-е склонения: Abl. sg. domō, Acc. pl. domōs (и domūs), Gen. pl. domuum/domōrum. Обстоятельства места — без предлога: **domī** «дома», **domum** «домой», **domō** «из дому».' },
        { type: 'pitfall', text: '*manus* (4 скл.) ≠ *dominus* (2 скл.): Gen. **manūs** «руки» — не Nom. pl. 2-го скл. Слово на -us: смотрите Gen. в словаре — -ī (2), -ūs (4), -is (3: corpus).' },
        { type: 'tip', text: '**rēs** — самое многозначное слово латыни: вещь, дело, событие, обстоятельство, имущество. *rēs pūblica* — государство, *rēs gestae* — деяния, *rēs mīlitāris* — военное дело, *rēs adversae/secundae* — несчастье/удача. Переводите по контексту.' },
        { type: 'examples', items: [
          { t: 'Senāt{{us}} populusque Rōmānus', ru: 'Сенат и народ римский (SPQR)' },
          { t: 'Manus man{{um}} lavat.', ru: 'Рука руку моет.' },
          { t: 'Caesar exercit{{um}} trāns flūmen dūxit.', ru: 'Цезарь перевёл войско через реку.' },
          { t: 'Carpe di{{em}}!', ru: 'Лови день! (Гораций)' },
          { t: 'Dum spīrō, spērō: magna est sp{{ēs}}.', ru: 'Пока дышу — надеюсь: надежда велика.' }
        ] }
      ],
      vocab: [
        { id: 'la-manus', w: 'manus', ru: 'рука, кисть; отряд', pos: 'n', g: 'f', forms: 'manus, -ūs f.', ex: 'Manus manum lavat.', exRu: 'Рука руку моет.', note: 'Женский род в 4-м склонении.' },
        { id: 'la-exercitus', w: 'exercitus', ru: 'войско, армия', pos: 'n', g: 'm', forms: 'exercitus, -ūs m.', ex: 'exercitum dūcere', exRu: 'вести войско', note: null },
        { id: 'la-senatus', w: 'senātus', ru: 'сенат', pos: 'n', g: 'm', forms: 'senātus, -ūs m.', ex: 'senātūs cōnsultum', exRu: 'постановление сената', note: null },
        { id: 'la-domus', w: 'domus', ru: 'дом', pos: 'n', g: 'f', forms: 'domus, -ūs f.', ex: 'domī et mīlitiae', exRu: 'в мирное и военное время (дома и на войне)', note: 'Loc. domī, Acc. domum (домой), Abl. domō.' },
        { id: 'la-cornu', w: 'cornū', ru: 'рог; фланг', pos: 'n', g: 'n', forms: 'cornū, -ūs n.', ex: 'dextrum cornū', exRu: 'правый фланг', note: null },
        { id: 'la-metus', w: 'metus', ru: 'страх', pos: 'n', g: 'm', forms: 'metus, -ūs m.', ex: 'metū', exRu: 'из страха', note: null },
        { id: 'la-casus', w: 'cāsus', ru: 'падение; случай; падеж', pos: 'n', g: 'm', forms: 'cāsus, -ūs m.', ex: 'cāsū', exRu: 'случайно', note: 'От cadō.' },
        { id: 'la-fructus', w: 'frūctus', ru: 'плод; доход, польза', pos: 'n', g: 'm', forms: 'frūctus, -ūs m.', ex: 'frūctūs terrae', exRu: 'плоды земли', note: null },
        { id: 'la-impetus', w: 'impetus', ru: 'натиск, нападение; порыв', pos: 'n', g: 'm', forms: 'impetus, -ūs m.', ex: 'impetum facere in hostēs', exRu: 'напасть на врагов', note: null },
        { id: 'la-res', w: 'rēs', ru: 'вещь, дело, обстоятельство', pos: 'n', g: 'f', forms: 'rēs, reī f.', ex: 'rēs pūblica', exRu: 'государство', note: null },
        { id: 'la-dies', w: 'diēs', ru: 'день; срок (f.)', pos: 'n', g: 'm', forms: 'diēs, diēī m.', ex: 'Carpe diem!', exRu: 'Лови день!', note: 'В значении «назначенный день, срок» — f.' },
        { id: 'la-fides', w: 'fidēs', ru: 'верность; доверие; честное слово', pos: 'n', g: 'f', forms: 'fidēs, fideī f.', ex: 'fidem servāre', exRu: 'хранить верность', note: null },
        { id: 'la-spes', w: 'spēs', ru: 'надежда', pos: 'n', g: 'f', forms: 'spēs, speī f.', ex: 'Spēs ultima dea.', exRu: 'Надежда — последняя богиня.', note: null },
        { id: 'la-acies', w: 'aciēs', ru: 'строй, боевая линия; острие', pos: 'n', g: 'f', forms: 'aciēs, aciēī f.', ex: 'aciem īnstruere', exRu: 'построить войско в боевой порядок', note: null },
        { id: 'la-publicus', w: 'pūblicus', ru: 'общественный, государственный', pos: 'adj', forms: 'pūblicus, -a, -um', ex: 'rēs pūblica', exRu: 'государство, республика', note: null }
      ],
      text: null
    },
    {
      id: 'la-u05-l05',
      kind: 'reading',
      title: 'Lectiō: Numa et Tullus (ex Eutropiō)',
      goals: ['Читать адаптированную историческую прозу', 'Отслеживать антецеденты hic, ille, quī, suus'],
      skills: ['la.pron.dem', 'la.pron.rel', 'la.pron.refl', 'la.noun.decl4'],
      theory: [
        { type: 'p', text: 'Евтропий, «Бревиарий» (I, 3–4), IV в. — сжатая и ясная проза, классический первый оригинальный текст. Пассивные формы оригинала заменены активными.' },
        { type: 'tip', text: '*nōn minus … quam* — «не меньше, чем»; *prōfuit* — perf. от prōsum (+ Dat.).' }
      ],
      vocab: [
        { id: 'la-annus', w: 'annus', ru: 'год', pos: 'n', g: 'm', forms: 'annus, -ī m.', ex: 'multōs annōs', exRu: 'много лет', note: null },
        { id: 'la-mos', w: 'mōs', ru: 'обычай; pl. нравы', pos: 'n', g: 'm', forms: 'mōs, mōris m.', ex: 'mōs maiōrum', exRu: 'обычай предков', note: null },
        { id: 'la-templum', w: 'templum', ru: 'храм', pos: 'n', g: 'n', forms: 'templum, -ī n.', ex: 'templa deōrum', exRu: 'храмы богов', note: null },
        { id: 'la-sacrum', w: 'sacrum', ru: 'святыня; pl. священнодействия, культ', pos: 'n', g: 'n', forms: 'sacrum, -ī n.', ex: 'sacra facere', exRu: 'совершать жертвоприношения', note: 'Прил. sacer, sacra, sacrum.' },
        { id: 'la-morbus', w: 'morbus', ru: 'болезнь', pos: 'n', g: 'm', forms: 'morbus, -ī m.', ex: 'morbō perīre', exRu: 'умереть от болезни', note: null },
        { id: 'la-prosum', w: 'prōsum', ru: 'быть полезным, помогать (+ Dat.)', pos: 'v', forms: 'prōsum, prōdesse, prōfuī, —', ex: 'Cīvitātī prōfuit.', exRu: 'Он принёс пользу государству.', note: 'prōd- перед гласным: prōdest.' },
        { id: 'la-regno', w: 'rēgnō', ru: 'царствовать', pos: 'v', forms: 'rēgnō, rēgnāre, rēgnāvī, rēgnātum', ex: 'Multōs annōs rēgnāvit.', exRu: 'Он царствовал много лет.', note: null },
        { id: 'la-civitas', w: 'cīvitās', ru: 'государство, община; гражданство', pos: 'n', g: 'f', forms: 'cīvitās, cīvitātis f.', ex: 'cīvitās Rōmāna', exRu: 'римское гражданство / государство', note: 'Gen. pl. cīvitātum (и -ium).' },
        { id: 'la-decedo', w: 'dēcēdō', ru: 'уходить; умирать', pos: 'v', forms: 'dēcēdō, dēcēdere, dēcessī, dēcessum', ex: 'Morbō dēcessit.', exRu: 'Умер от болезни.', note: null },
        { id: 'la-barbarus', w: 'barbarus', ru: 'варварский, дикий; subst. варвар', pos: 'adj', forms: 'barbarus, -a, -um', ex: 'gentēs barbarae', exRu: 'варварские племена', note: null },
        { id: 'la-fere', w: 'ferē', ru: 'почти; обычно', pos: 'adv', forms: null, ex: 'ferē omnēs', exRu: 'почти все', note: null }
      ],
      text: {
        title: 'Numa et Tullus (ad Eutropium I, 3–4)',
        lines: [
          { t: 'Post Rōmulum Numa Pompilius rēx fuit.', ru: 'После Ромула царём был Нума Помпилий.' },
          { t: 'Hic bellum nūllum gessit, sed nōn minus cīvitātī quam Rōmulus prōfuit.', ru: 'Он не вёл ни одной войны, но принёс государству не меньше пользы, чем Ромул.' },
          { t: 'Nam Rōmānīs lēgēs mōrēsque cōnstituit; illī enim propter bella iam ferē barbarī erant.', ru: 'Ведь он дал римлянам законы и нравы: те из-за войн уже почти одичали.' },
          { t: 'Multa quoque sacra ac templa Rōmae cōnstituit.', ru: 'Также он учредил в Риме множество культов и храмов.' },
          { t: 'Morbō dēcessit quadrāgēsimō et tertiō imperiī annō.', ru: 'Он умер от болезни на сорок третьем году правления.' },
          { t: 'Huic successit Tullus Hostīlius, quī bella iterum gessit et Albānōs vīcit.', ru: 'Ему наследовал Тулл Гостилий, который снова стал воевать и победил альбанцев.' },
          { t: 'Is urbem suam auxit et trīgintā duōs annōs rēgnāvit.', ru: 'Он расширил свой город и царствовал тридцать два года.' }
        ]
      }
    }
  ]
};

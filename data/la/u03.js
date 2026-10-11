export default {
  id: 'la-u03',
  title: 'Tertia dēclīnātiō. Praepositiōnēs',
  titleRu: '3-е склонение. Предлоги и функции аблатива',
  summary: 'Согласный и i-тип 3-го склонения, род по окончаниям, предлоги с Acc. и Abl., обстоятельства места и времени.',
  lessons: [
    {
      id: 'la-u03-l01',
      kind: 'grammar',
      title: '3-е склонение: согласный тип',
      goals: ['Находить основу по Gen. sg.', 'Склонять существительные согласного типа всех родов', 'Ориентироваться в роде по окончаниям'],
      skills: ['la.noun.decl3cons'],
      theory: [
        { type: 'rule', text: '3-е склонение: Gen. sg. **-is**. Nom. sg. часто «искажён» звуковыми изменениями, поэтому **основу берут из Gen.**: rēx, rēg-is; mīles, mīlit-is; corpus, corpor-is; nōmen, nōmin-is.' },
        { type: 'table', head: ['Падеж', 'rēx m.', 'mīles m.', 'corpus n.', 'nōmen n.'],
          rows: [
            ['Nom. sg.', 'rēx', 'mīles', 'corpus', 'nōmen'],
            ['Gen.', 'rēg{{is}}', 'mīlit{{is}}', 'corpor{{is}}', 'nōmin{{is}}'],
            ['Dat.', 'rēg{{ī}}', 'mīlit{{ī}}', 'corpor{{ī}}', 'nōmin{{ī}}'],
            ['Acc.', 'rēg{{em}}', 'mīlit{{em}}', 'corpus', 'nōmen'],
            ['Abl.', 'rēg{{e}}', 'mīlit{{e}}', 'corpor{{e}}', 'nōmin{{e}}'],
            ['Nom. pl.', 'rēg{{ēs}}', 'mīlit{{ēs}}', 'corpor{{a}}', 'nōmin{{a}}'],
            ['Gen.', 'rēg{{um}}', 'mīlit{{um}}', 'corpor{{um}}', 'nōmin{{um}}'],
            ['Dat./Abl.', 'rēg{{ibus}}', 'mīlit{{ibus}}', 'corpor{{ibus}}', 'nōmin{{ibus}}'],
            ['Acc.', 'rēg{{ēs}}', 'mīlit{{ēs}}', 'corpor{{a}}', 'nōmin{{a}}']
          ],
          note: 'Voc. = Nom. Мужской и женский род склоняются одинаково.' },
        { type: 'p', text: 'Откуда «искажения»: *rēg-s → rēx*, *mīlit-s → mīles*; в средних на -us (*corpus, tempus, genus*) s между гласными перешла в r (ротацизм): *corpos-is → corporis*.' },
        { type: 'table', caption: 'Род по окончанию Nom. sg. (основные тенденции)', head: ['Род', 'Окончания', 'Примеры'],
          rows: [
            ['m.', '-or (-ōris), -ō (лица), -er, -es (-itis)', 'labor, homō, pater, mīles'],
            ['f.', '-tās, -tūs, -tiō, -tūdō, -x, -s после согласного', 'cīvitās, virtūs, ōrātiō, lēx, urbs'],
            ['n.', '-men, -us (-oris/-eris), -e, -al, -ar, -ut', 'nōmen, corpus, mare, animal, caput']
          ],
          note: 'Это тенденции, а не законы: arbor «дерево» — f., dux, rēx — m. (по значению).' },
        { type: 'pitfall', text: '*corpus* — не 2-е склонение! Gen. corporis, Acc. corpus, pl. corpora. Окончание -us в Nom. ещё не говорит о склонении — смотрите Gen.' },
        { type: 'contrast', text: 'Похожая «скрытая основа» есть в русском: *имя — имени, время — времени, мать — матери*. Лат. *nōmen, nōminis* и рус. *имя, имени* — одно и то же индоевропейское чередование.' },
        { type: 'examples', items: [
          { t: 'Lēg{{ēs}} rēg{{is}} bonae sunt.', ru: 'Законы царя хороши.' },
          { t: 'Mīlit{{ēs}} duc{{em}} laudant.', ru: 'Воины хвалят полководца.' },
          { t: 'Nōmin{{a}} hominum', ru: 'имена людей' },
          { t: 'Mēns sāna in corpor{{e}} sānō.', ru: 'Здоровый дух в здоровом теле. (Ювенал)' }
        ] }
      ],
      vocab: [
        { id: 'la-rex', w: 'rēx', ru: 'царь', pos: 'n', g: 'm', forms: 'rēx, rēgis m.', ex: 'Rōmulus, rēx Rōmānōrum', exRu: 'Ромул, царь римлян', note: null },
        { id: 'la-lex', w: 'lēx', ru: 'закон', pos: 'n', g: 'f', forms: 'lēx, lēgis f.', ex: 'Dūra lēx, sed lēx.', exRu: 'Закон суров, но это закон.', note: null },
        { id: 'la-homo', w: 'homō', ru: 'человек', pos: 'n', g: 'm', forms: 'homō, hominis m.', ex: 'Homō sum.', exRu: 'Я человек.', note: 'Ср. vir — «мужчина, муж».' },
        { id: 'la-pater', w: 'pater', ru: 'отец; pl. сенаторы', pos: 'n', g: 'm', forms: 'pater, patris m.', ex: 'pater patriae', exRu: 'отец отечества', note: 'Gen. pl. patrum.' },
        { id: 'la-mater', w: 'māter', ru: 'мать', pos: 'n', g: 'f', forms: 'māter, mātris f.', ex: 'māter puerī', exRu: 'мать мальчика', note: null },
        { id: 'la-frater', w: 'frāter', ru: 'брат', pos: 'n', g: 'm', forms: 'frāter, frātris m.', ex: 'Rōmulus et Remus frātrēs sunt.', exRu: 'Ромул и Рем — братья.', note: null },
        { id: 'la-miles', w: 'mīles', ru: 'воин, солдат', pos: 'n', g: 'm', forms: 'mīles, mīlitis m.', ex: 'Mīlitēs pugnant.', exRu: 'Воины сражаются.', note: null },
        { id: 'la-dux', w: 'dux', ru: 'вождь, полководец', pos: 'n', g: 'm', forms: 'dux, ducis m.', ex: 'dux exercitūs', exRu: 'полководец войска', note: 'Краткое u (ср. dūcō).' },
        { id: 'la-vox', w: 'vōx', ru: 'голос; слово', pos: 'n', g: 'f', forms: 'vōx, vōcis f.', ex: 'Vōx populī, vōx Deī.', exRu: 'Глас народа — глас Божий.', note: null },
        { id: 'la-pax', w: 'pāx', ru: 'мир (не война)', pos: 'n', g: 'f', forms: 'pāx, pācis f.', ex: 'pācem petere', exRu: 'просить мира', note: null },
        { id: 'la-corpus', w: 'corpus', ru: 'тело', pos: 'n', g: 'n', forms: 'corpus, corporis n.', ex: 'in corpore sānō', exRu: 'в здоровом теле', note: null },
        { id: 'la-tempus', w: 'tempus', ru: 'время', pos: 'n', g: 'n', forms: 'tempus, temporis n.', ex: 'Tempus fugit.', exRu: 'Время бежит.', note: null },
        { id: 'la-nomen', w: 'nōmen', ru: 'имя, название', pos: 'n', g: 'n', forms: 'nōmen, nōminis n.', ex: 'nōmen urbis', exRu: 'название города', note: null },
        { id: 'la-caput', w: 'caput', ru: 'голова; глава; столица', pos: 'n', g: 'n', forms: 'caput, capitis n.', ex: 'caput mundī', exRu: 'столица мира', note: null },
        { id: 'la-virtus', w: 'virtūs', ru: 'доблесть, мужество; добродетель', pos: 'n', g: 'f', forms: 'virtūs, virtūtis f.', ex: 'virtūs mīlitum', exRu: 'доблесть воинов', note: null }
      ],
      text: null
    },
    {
      id: 'la-u03-l02',
      kind: 'grammar',
      title: '3-е склонение: i-основы',
      goals: ['Распознавать i-основы', 'Употреблять Gen. pl. -ium, Abl. sg. -ī у средних', 'Склонять mare, animal, vīs'],
      skills: ['la.noun.decl3i'],
      theory: [
        { type: 'rule', text: 'i-основы отличаются от согласных прежде всего **Gen. pl. -ium** (и у средних — Abl. sg. **-ī**, Nom./Acc. pl. **-ia**).' },
        { type: 'table', caption: 'Какие слова — i-основы', head: ['Тип', 'Признак', 'Примеры'],
          rows: [
            ['равносложные', 'Nom. -is/-ēs, слогов в Nom. и Gen. поровну', 'cīvis, cīvis; hostis; nāvis'],
            ['двусогласные', 'Nom. -s/-x, основа на два согласных', 'urbs, urb-is; mōns, mont-is; nox, noct-is'],
            ['средние', 'Nom. -e, -al, -ar', 'mare; animal; exemplar']
          ] },
        { type: 'table', head: ['Падеж', 'cīvis m.', 'urbs f.', 'mare n.', 'animal n.'],
          rows: [
            ['Nom. sg.', 'cīv{{is}}', 'urbs', 'mar{{e}}', 'animal'],
            ['Gen.', 'cīv{{is}}', 'urb{{is}}', 'mar{{is}}', 'animāl{{is}}'],
            ['Dat.', 'cīv{{ī}}', 'urb{{ī}}', 'mar{{ī}}', 'animāl{{ī}}'],
            ['Acc.', 'cīv{{em}}', 'urb{{em}}', 'mar{{e}}', 'animal'],
            ['Abl.', 'cīv{{e}}', 'urb{{e}}', 'mar{{ī}}', 'animāl{{ī}}'],
            ['Nom. pl.', 'cīv{{ēs}}', 'urb{{ēs}}', 'mar{{ia}}', 'animāl{{ia}}'],
            ['Gen.', 'cīv{{ium}}', 'urb{{ium}}', 'mar{{ium}}', 'animāl{{ium}}'],
            ['Dat./Abl.', 'cīv{{ibus}}', 'urb{{ibus}}', 'mar{{ibus}}', 'animāl{{ibus}}'],
            ['Acc.', 'cīv{{ēs}} (-īs)', 'urb{{ēs}} (-īs)', 'mar{{ia}}', 'animāl{{ia}}']
          ],
          note: 'Acc. pl. -īs у m./f. — частый вариант у Цезаря и Цицерона.' },
        { type: 'p', text: 'Чистые i-основы (Acc. **-im**, Abl. **-ī**): *turris, sitis, Tiberis* (in Tiberim). Неправильное **vīs** «сила»: Acc. vim, Abl. vī; pl. vīrēs, vīrium, vīribus — «силы».' },
        { type: 'pitfall', text: '*pater, māter, frāter* и *canis, iuvenis, senex* — исключения: равносложные, но Gen. pl. **-um**: patrum, mātrum, iuvenum, canum.' },
        { type: 'tip', text: 'На практике важны две вещи: узнать Gen. pl. на -ium и средний род на -ia; Abl. -e/-ī у m./f. почти всегда -e.' },
        { type: 'examples', items: [
          { t: 'Urbs magna et cīv{{ium}} plēna', ru: 'большой город, полный граждан' },
          { t: 'Nāv{{ēs}} in mar{{ī}} sunt.', ru: 'Корабли — в море.' },
          { t: 'Prīmā nocte hostēs veniunt.', ru: 'В начале ночи приходят враги.' },
          { t: 'Vīribus suīs cōnfīdunt.', ru: 'Они полагаются на свои силы.' }
        ] }
      ],
      vocab: [
        { id: 'la-civis', w: 'cīvis', ru: 'гражданин, гражданка', pos: 'n', g: 'c', forms: 'cīvis, cīvis m./f.', ex: 'Cīvis Rōmānus sum.', exRu: 'Я римский гражданин.', note: 'Gen. pl. cīvium.' },
        { id: 'la-hostis', w: 'hostis', ru: 'враг (внешний); pl. неприятель', pos: 'n', g: 'm', forms: 'hostis, hostis m.', ex: 'Hostēs fugiunt.', exRu: 'Враги бегут.', note: 'Ср. inimīcus — личный враг.' },
        { id: 'la-navis', w: 'nāvis', ru: 'корабль', pos: 'n', g: 'f', forms: 'nāvis, nāvis f.', ex: 'nāvis longa', exRu: 'военный корабль', note: 'Gen. pl. nāvium.' },
        { id: 'la-urbs', w: 'urbs', ru: 'город (особ. Рим)', pos: 'n', g: 'f', forms: 'urbs, urbis f.', ex: 'Urbs aeterna', exRu: 'Вечный город', note: 'Gen. pl. urbium.' },
        { id: 'la-mons', w: 'mōns', ru: 'гора', pos: 'n', g: 'm', forms: 'mōns, montis m.', ex: 'in monte', exRu: 'на горе', note: 'Gen. pl. montium.' },
        { id: 'la-pars', w: 'pars', ru: 'часть; сторона; pl. партия, роль', pos: 'n', g: 'f', forms: 'pars, partis f.', ex: 'magna pars', exRu: 'большая часть', note: 'Gen. pl. partium.' },
        { id: 'la-nox', w: 'nox', ru: 'ночь', pos: 'n', g: 'f', forms: 'nox, noctis f.', ex: 'nocte', exRu: 'ночью', note: 'Gen. pl. noctium.' },
        { id: 'la-mors', w: 'mors', ru: 'смерть', pos: 'n', g: 'f', forms: 'mors, mortis f.', ex: 'Mors certa, hōra incerta.', exRu: 'Смерть несомненна, час неизвестен.', note: null },
        { id: 'la-gens', w: 'gēns', ru: 'род; племя, народ', pos: 'n', g: 'f', forms: 'gēns, gentis f.', ex: 'gēns Iūlia', exRu: 'род Юлиев', note: null },
        { id: 'la-mare', w: 'mare', ru: 'море', pos: 'n', g: 'n', forms: 'mare, maris n.', ex: 'terrā marīque', exRu: 'на суше и на море', note: 'Abl. marī, pl. maria.' },
        { id: 'la-animal', w: 'animal', ru: 'живое существо, животное', pos: 'n', g: 'n', forms: 'animal, animālis n.', ex: 'Homō animal sociāle est.', exRu: 'Человек — существо общественное.', note: 'Abl. animālī, pl. animālia.' },
        { id: 'la-ignis', w: 'ignis', ru: 'огонь', pos: 'n', g: 'm', forms: 'ignis, ignis m.', ex: 'ferrō ignīque', exRu: 'огнём и мечом', note: 'Abl. igne и ignī.' },
        { id: 'la-finis', w: 'fīnis', ru: 'конец, граница; pl. территория', pos: 'n', g: 'm', forms: 'fīnis, fīnis m.', ex: 'fīnēs Helvētiōrum', exRu: 'земли гельветов', note: null },
        { id: 'la-vis', w: 'vīs', ru: 'сила, насилие; pl. силы', pos: 'n', g: 'f', forms: 'vīs, Acc. vim, Abl. vī; pl. vīrēs, vīrium f.', ex: 'vī et armīs', exRu: 'силой оружия', note: 'Не путать vīrēs «силы» и virī «мужи».' },
        { id: 'la-mens', w: 'mēns', ru: 'ум, разум; намерение', pos: 'n', g: 'f', forms: 'mēns, mentis f.', ex: 'Mēns sāna in corpore sānō.', exRu: 'Здоровый дух в здоровом теле.', note: null }
      ],
      text: null
    },
    {
      id: 'la-u03-l03',
      kind: 'grammar',
      title: 'Предлоги. Функции аблатива. Место и время',
      goals: ['Знать управление основных предлогов', 'Различать функции аблатива', 'Выражать «где? куда? откуда? когда? как долго?»'],
      skills: ['la.prep', 'la.case.abl', 'la.syntax.placetime'],
      theory: [
        { type: 'table', caption: 'Управление предлогов', head: ['Падеж', 'Предлоги'],
          rows: [
            ['Acc.', 'ad, ante, apud, contrā, inter, per, post, propter, trāns'],
            ['Abl.', 'ā/ab/abs, cum, dē, ē/ex, prō, prae, sine'],
            ['Acc. (куда?) / Abl. (где?)', 'in, sub']
          ],
          note: 'ā, ē — перед согласными; ab, ex — перед гласными и h (и часто перед согласными).' },
        { type: 'rule', text: '**in** + Acc. — направление («в, на» куда?): *in urbem* «в город»; **in** + Abl. — место («в, на» где?): *in urbe* «в городе».' },
        { type: 'contrast', text: 'Ровно как русское «в/на» + вин. (куда?) и + предл. (где?): *в город — в городе*. Только латинский «предложный» — это аблатив.' },
        { type: 'table', caption: 'Главные функции аблатива', head: ['Функция', 'Вопрос', 'Пример'],
          rows: [
            ['средство (īnstrūmentī)', 'чем?', 'gladiō pugnat — сражается мечом'],
            ['образ действия (modī)', 'как?', '(magnā) cum cūrā — с (большим) старанием'],
            ['совместность', 'с кем?', 'cum amīcīs — с друзьями'],
            ['место (locī)', 'где?', 'in urbe, terrā marīque'],
            ['время (temporis)', 'когда?', 'eō tempore, prīmā lūce, nocte'],
            ['отделение (sēparātiōnis)', 'откуда? от чего?', 'ab urbe, ex oppidō; cūrīs līberāre'],
            ['причина (causae)', 'из-за чего?', 'metū — из страха']
          ] },
        { type: 'pitfall', text: 'Средство — **без предлога**: *gladiō* «мечом», но совместность — **с cum**: *cum amīcō* «с другом». *Cum gladiō* — «с мечом (при себе)».' },
        { type: 'h', text: 'Названия городов, domus, rūs' },
        { type: 'table', head: ['Вопрос', 'Обычные слова', 'Города, domus, rūs'],
          rows: [
            ['куда?', 'in/ad + Acc.: in urbem', 'Acc. без предлога: Rōmam, Athēnās, domum, rūs'],
            ['откуда?', 'ā/ex + Abl.: ex urbe', 'Abl. без предлога: Rōmā, Athēnīs, domō, rūre'],
            ['где?', 'in + Abl.: in urbe', 'Locātīvus: Rōmae, Corinthī, Athēnīs, Carthāgine; domī, rūrī, humī']
          ],
          note: 'Locativus = Gen. sg. у слов 1–2 скл. (Rōmae, Corinthī), = Abl. во мн. ч. и в 3 скл. (Athēnīs, Carthāgine).' },
        { type: 'rule', text: 'Время: **Abl.** — «когда? в течение какого срока?» (*hōc annō, tribus diēbus*); **Acc.** — «как долго?» (*multōs annōs rēgnābat*).' },
        { type: 'tip', text: 'Мнемоника для аблативных предлогов: «ā, ab, abs, cum, dē, ē, ex, sine, prō, prae — с аблативом все».' },
        { type: 'examples', items: [
          { t: 'Caesar Rōm{{am}} venit.', ru: 'Цезарь приходит в Рим.' },
          { t: 'Rōm{{ae}} vīvit, nōn Athēn{{īs}}.', ru: 'Он живёт в Риме, а не в Афинах.' },
          { t: 'Per agrōs ad mare ambulant.', ru: 'Через поля они идут к морю.' },
          { t: 'Propter bellum domī manēmus.', ru: 'Из-за войны мы остаёмся дома.' },
          { t: 'Sine amīcīs vīta nōn est vīta.', ru: 'Без друзей жизнь — не жизнь.' }
        ] }
      ],
      vocab: [
        { id: 'la-in', w: 'in', ru: '+ Acc. в, на (куда?); против; + Abl. в, на (где?)', pos: 'prep', forms: 'in + Acc./Abl.', ex: 'in urbem — in urbe', exRu: 'в город — в городе', note: null },
        { id: 'la-ad', w: 'ad', ru: 'к, до; у, около; для', pos: 'prep', forms: 'ad + Acc.', ex: 'ad rīvum', exRu: 'к ручью', note: 'ad + gerundium/gerundīvum — цель.' },
        { id: 'la-ab', w: 'ā, ab', ru: 'от, из; (при пассиве) кем', pos: 'prep', forms: 'ā/ab + Abl.', ex: 'ab urbe conditā', exRu: 'от основания города', note: 'ā — перед согласными.' },
        { id: 'la-ex', w: 'ē, ex', ru: 'из; от; по, согласно', pos: 'prep', forms: 'ē/ex + Abl.', ex: 'ex oppidō', exRu: 'из города', note: 'ē — перед согласными.' },
        { id: 'la-de', w: 'dē', ru: 'о, об; с (сверху вниз); из', pos: 'prep', forms: 'dē + Abl.', ex: 'Dē bellō Gallicō', exRu: 'О Галльской войне', note: null },
        { id: 'la-cum', w: 'cum', ru: 'с (вместе с)', pos: 'prep', forms: 'cum + Abl.', ex: 'cum amīcīs', exRu: 'с друзьями', note: 'Энклитически при местоимениях: mēcum, tēcum, nōbīscum, quōcum. Союз cum — юнит 8.' },
        { id: 'la-sine', w: 'sine', ru: 'без', pos: 'prep', forms: 'sine + Abl.', ex: 'sine īrā et studiō', exRu: 'без гнева и пристрастия', note: null },
        { id: 'la-per', w: 'per', ru: 'через, сквозь; по; в течение; посредством', pos: 'prep', forms: 'per + Acc.', ex: 'per aspera ad astra', exRu: 'через тернии к звёздам', note: null },
        { id: 'la-ante', w: 'ante', ru: 'перед; до; adv. раньше', pos: 'prep', forms: 'ante + Acc.', ex: 'ante bellum', exRu: 'до войны', note: null },
        { id: 'la-post', w: 'post', ru: 'после; за, позади; adv. потом', pos: 'prep', forms: 'post + Acc.', ex: 'post bellum', exRu: 'после войны', note: null },
        { id: 'la-pro', w: 'prō', ru: 'за, в защиту; вместо; перед; соответственно', pos: 'prep', forms: 'prō + Abl.', ex: 'prō patriā', exRu: 'за родину', note: null },
        { id: 'la-sub', w: 'sub', ru: '+ Acc. под (куда?), к (о времени); + Abl. под (где?)', pos: 'prep', forms: 'sub + Acc./Abl.', ex: 'sub monte', exRu: 'у подножия горы', note: null },
        { id: 'la-inter', w: 'inter', ru: 'между, среди; во время', pos: 'prep', forms: 'inter + Acc.', ex: 'Inter arma silent lēgēs.', exRu: 'Среди оружия законы молчат.', note: 'inter sē — друг с другом.' },
        { id: 'la-propter', w: 'propter', ru: 'из-за, вследствие', pos: 'prep', forms: 'propter + Acc.', ex: 'propter metum', exRu: 'из-за страха', note: null },
        { id: 'la-trans', w: 'trāns', ru: 'через, по ту сторону', pos: 'prep', forms: 'trāns + Acc.', ex: 'trāns Rhēnum', exRu: 'за Рейном', note: null }
      ],
      text: null
    },
    {
      id: 'la-u03-l04',
      kind: 'reading',
      title: 'Lectiō: Rōmulus et Remus',
      goals: ['Читать рассказ в praesens historicum', 'Узнавать формы 3-го склонения и предложные обороты'],
      skills: ['la.noun.decl3cons', 'la.noun.decl3i', 'la.prep', 'la.case.abl'],
      theory: [
        { type: 'p', text: 'Римские историки часто рассказывают о прошлом в настоящем времени — **praesens historicum**; переводим настоящим или прошедшим. *suō* — «своим» (возвратное, юнит 5).' }
      ],
      vocab: [
        { id: 'la-flumen', w: 'flūmen', ru: 'река', pos: 'n', g: 'n', forms: 'flūmen, flūminis n.', ex: 'in flūmen', exRu: 'в реку', note: null },
        { id: 'la-ripa', w: 'rīpa', ru: 'берег (реки)', pos: 'n', g: 'f', forms: 'rīpa, -ae f.', ex: 'ad rīpam', exRu: 'к берегу', note: 'Морской берег — lītus, -oris n.' },
        { id: 'la-lupa', w: 'lupa', ru: 'волчица', pos: 'n', g: 'f', forms: 'lupa, -ae f.', ex: 'lupa Capitōlīna', exRu: 'Капитолийская волчица', note: null },
        { id: 'la-lac', w: 'lac', ru: 'молоко', pos: 'n', g: 'n', forms: 'lac, lactis n.', ex: 'lacte alere', exRu: 'вскармливать молоком', note: null },
        { id: 'la-alo', w: 'alō', ru: 'кормить, питать, растить', pos: 'v', forms: 'alō, alere, aluī, altum', ex: 'Lupa puerōs alit.', exRu: 'Волчица кормит мальчиков.', note: 'Супин также alitum.' },
        { id: 'la-invenio', w: 'inveniō', ru: 'находить', pos: 'v', forms: 'inveniō, invenīre, invēnī, inventum', ex: 'Viam inveniam.', exRu: 'Найду дорогу.', note: null },
        { id: 'la-pastor', w: 'pāstor', ru: 'пастух', pos: 'n', g: 'm', forms: 'pāstor, pāstōris m.', ex: 'pāstor Faustulus', exRu: 'пастух Фаустул', note: null },
        { id: 'la-uxor', w: 'uxor', ru: 'жена', pos: 'n', g: 'f', forms: 'uxor, uxōris f.', ex: 'cum uxōre', exRu: 'с женой', note: 'uxōrem dūcere — жениться.' },
        { id: 'la-condo', w: 'condō', ru: 'основывать; прятать', pos: 'v', forms: 'condō, condere, condidī, conditum', ex: 'urbem condere', exRu: 'основать город', note: 'ab urbe conditā — от основания Города.' },
        { id: 'la-occido', w: 'occīdō', ru: 'убивать', pos: 'v', forms: 'occīdō, occīdere, occīdī, occīsum', ex: 'Remum occīdit.', exRu: 'Убивает Рема.', note: 'Ср. occidō, occidere «падать, заходить (о солнце)» — краткое i.' },
        { id: 'la-appello', w: 'appellō', ru: 'называть; обращаться', pos: 'v', forms: 'appellō, appellāre, appellāvī, appellātum', ex: 'Urbem Rōmam appellat.', exRu: 'Называет город Римом.', note: 'Двойной Acc.' },
        { id: 'la-postea', w: 'posteā', ru: 'потом, впоследствии', pos: 'adv', forms: null, ex: 'Posteā vēnit.', exRu: 'Потом он пришёл.', note: null }
      ],
      text: {
        title: 'Rōmulus et Remus',
        lines: [
          { t: 'Rōmulus et Remus frātrēs sunt.', ru: 'Ромул и Рем — братья.' },
          { t: 'Amūlius rēx puerōs timet et in flūmen mittit.', ru: 'Царь Амулий боится мальчиков и бросает их в реку.' },
          { t: 'Sed aqua puerōs ad rīpam portat.', ru: 'Но вода выносит мальчиков к берегу.' },
          { t: 'Ibi lupa puerōs invenit et lacte alit.', ru: 'Там их находит волчица и вскармливает молоком.' },
          { t: 'Posteā pāstor Faustulus puerōs ad uxōrem portat.', ru: 'Потом пастух Фаустул относит мальчиков к жене.' },
          { t: 'Frātrēs, iam virī, Amūlium occīdunt.', ru: 'Братья, став уже мужами, убивают Амулия.' },
          { t: 'Tum in rīpā flūminis novam urbem condunt.', ru: 'Затем на берегу реки они основывают новый город.' },
          { t: 'Sed frātrēs dē nōmine urbis pugnant.', ru: 'Но братья спорят об имени города.' },
          { t: 'Rōmulus Remum occīdit et urbem ex nōmine suō Rōmam appellat.', ru: 'Ромул убивает Рема и называет город по своему имени Римом.' }
        ]
      }
    }
  ]
};

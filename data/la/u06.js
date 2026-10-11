export default {
  id: 'la-u06',
  title: 'Adiectīva tertiae dēclīnātiōnis. Gradūs comparātiōnis',
  titleRu: 'Прилагательные 3-го склонения. Степени сравнения',
  summary: 'Прилагательные 3-го склонения, сравнительная и превосходная степени, наречия, числительные и местоименные прилагательные. Чтение — начало «Записок о Галльской войне».',
  lessons: [
    {
      id: 'la-u06-l01',
      kind: 'grammar',
      title: 'Прилагательные 3-го склонения',
      goals: ['Различать прилагательные трёх, двух и одного окончания', 'Склонять их по i-типу (Abl. -ī, Gen. pl. -ium, n. pl. -ia)'],
      skills: ['la.adj.3'],
      theory: [
        { type: 'table', caption: 'Три типа по числу окончаний в Nom. sg.', head: ['Тип', 'Словарная форма', 'm. / f. / n.'],
          rows: [
            ['трёх окончаний', 'ācer, ācris, ācre', 'ācer / ācris / ācre'],
            ['двух окончаний', 'fortis, -e', 'fortis / fortis / forte'],
            ['одного окончания', 'ingēns, ingentis', 'ingēns (для всех родов)']
          ],
          note: 'У прилагательных одного окончания словарь даёт Gen. — по нему находим основу: fēlīx, fēlīc-is; vetus, veter-is.' },
        { type: 'table', head: ['Падеж', 'fortis m./f.', 'forte n.', 'ingēns m./f.', 'ingēns n.'],
          rows: [
            ['Nom. sg.', 'fort{{is}}', 'fort{{e}}', 'ingēns', 'ingēns'],
            ['Gen.', 'fort{{is}}', 'fort{{is}}', 'ingent{{is}}', 'ingent{{is}}'],
            ['Dat.', 'fort{{ī}}', 'fort{{ī}}', 'ingent{{ī}}', 'ingent{{ī}}'],
            ['Acc.', 'fort{{em}}', 'fort{{e}}', 'ingent{{em}}', 'ingēns'],
            ['Abl.', 'fort{{ī}}', 'fort{{ī}}', 'ingent{{ī}}', 'ingent{{ī}}'],
            ['Nom. pl.', 'fort{{ēs}}', 'fort{{ia}}', 'ingent{{ēs}}', 'ingent{{ia}}'],
            ['Gen.', 'fort{{ium}}', 'fort{{ium}}', 'ingent{{ium}}', 'ingent{{ium}}'],
            ['Dat./Abl.', 'fort{{ibus}}', 'fort{{ibus}}', 'ingent{{ibus}}', 'ingent{{ibus}}'],
            ['Acc.', 'fort{{ēs}} (-īs)', 'fort{{ia}}', 'ingent{{ēs}} (-īs)', 'ingent{{ia}}']
          ] },
        { type: 'rule', text: 'Прилагательные 3-го скл. — **i-основы**: Abl. sg. **-ī**, Gen. pl. **-ium**, n. pl. **-ia**. Исключения (согласный тип: Abl. -e, Gen. pl. -um, n. pl. -a): *vetus, dīves, pauper, prīnceps* и сравнительная степень.' },
        { type: 'p', text: '*celer, celeris, celere* сохраняет e (Gen. pl. celerum); *ācer, ācris, ācre* — теряет. Причастия praesentis (*amāns, amantis*) склоняются как ingēns, но в функции причастия имеют Abl. **-e**.' },
        { type: 'pitfall', text: 'Прилагательное 3-го скл. при существительном 1–2-го: *vir fortis, fēmina fortis, bellum forte* — окончания не «рифмуются», согласование только грамматическое. Abl.: *cum virō fortī*, не *fortō*.' },
        { type: 'tip', text: '*omnis* в ед. ч. — «всякий, каждый», во мн. ч. — «все»: *omnis homō* «всякий человек», *omnēs hominēs* «все люди».' },
        { type: 'examples', items: [
          { t: 'Fortūna fort{{ēs}} adiuvat.', ru: 'Судьба помогает храбрым.' },
          { t: 'Omn{{ia}} mea mēcum portō.', ru: 'Всё своё ношу с собой. (Биант у Цицерона)' },
          { t: 'Ars longa, vīta brev{{is}}.', ru: 'Искусство долговечно, жизнь коротка.' },
          { t: 'in ingent{{ī}} silvā', ru: 'в огромном лесу' }
        ] }
      ],
      vocab: [
        { id: 'la-acer', w: 'ācer', ru: 'острый; резкий, энергичный', pos: 'adj', forms: 'ācer, ācris, ācre', ex: 'ācre bellum', exRu: 'жестокая война', note: 'Нареч. ācriter.' },
        { id: 'la-celer', w: 'celer', ru: 'быстрый', pos: 'adj', forms: 'celer, celeris, celere', ex: 'equus celer', exRu: 'быстрый конь', note: 'e сохраняется; Gen. pl. celerum.' },
        { id: 'la-fortis', w: 'fortis', ru: 'сильный; храбрый', pos: 'adj', forms: 'fortis, -e', ex: 'vir fortis', exRu: 'храбрый муж', note: null },
        { id: 'la-omnis', w: 'omnis', ru: 'всякий, каждый; pl. все', pos: 'adj', forms: 'omnis, -e', ex: 'omnēs hominēs', exRu: 'все люди', note: null },
        { id: 'la-brevis', w: 'brevis', ru: 'короткий, краткий', pos: 'adj', forms: 'brevis, -e', ex: 'vīta brevis', exRu: 'краткая жизнь', note: null },
        { id: 'la-gravis', w: 'gravis', ru: 'тяжёлый; важный, серьёзный', pos: 'adj', forms: 'gravis, -e', ex: 'gravis morbus', exRu: 'тяжёлая болезнь', note: null },
        { id: 'la-levis', w: 'levis', ru: 'лёгкий (по весу); легкомысленный', pos: 'adj', forms: 'levis, -e', ex: 'levis armātūra', exRu: 'лёгкое вооружение', note: 'Ср. lēvis «гладкий».' },
        { id: 'la-facilis', w: 'facilis', ru: 'лёгкий, нетрудный', pos: 'adj', forms: 'facilis, -e', ex: 'Facile est.', exRu: 'Это легко.', note: 'Superl. facillimus.' },
        { id: 'la-difficilis', w: 'difficilis', ru: 'трудный', pos: 'adj', forms: 'difficilis, -e', ex: 'Nihil difficile amantī.', exRu: 'Для любящего нет ничего трудного.', note: 'Superl. difficillimus.' },
        { id: 'la-similis', w: 'similis', ru: 'похожий (+ Gen./Dat.)', pos: 'adj', forms: 'similis, -e', ex: 'patrī similis', exRu: 'похожий на отца', note: 'Superl. simillimus.' },
        { id: 'la-nobilis', w: 'nōbilis', ru: 'знаменитый; знатный', pos: 'adj', forms: 'nōbilis, -e', ex: 'nōbilis iuvenis', exRu: 'знатный юноша', note: null },
        { id: 'la-ingens', w: 'ingēns', ru: 'огромный', pos: 'adj', forms: 'ingēns, ingentis', ex: 'ingēns exercitus', exRu: 'огромное войско', note: null },
        { id: 'la-felix', w: 'fēlīx', ru: 'счастливый, удачливый', pos: 'adj', forms: 'fēlīx, fēlīcis', ex: 'Fēlīx, quī potuit rērum cognōscere causās.', exRu: 'Счастлив, кто смог познать причины вещей. (Вергилий)', note: null },
        { id: 'la-potens', w: 'potēns', ru: 'могущественный, сильный', pos: 'adj', forms: 'potēns, potentis', ex: 'rēx potēns', exRu: 'могущественный царь', note: null },
        { id: 'la-vetus', w: 'vetus', ru: 'старый, древний', pos: 'adj', forms: 'vetus, veteris', ex: 'vetus amīcus', exRu: 'старый друг', note: 'Согласный тип: Abl. vetere, Gen. pl. veterum, n. pl. vetera.' }
      ],
      text: null
    },
    {
      id: 'la-u06-l02',
      kind: 'grammar',
      title: 'Степени сравнения',
      goals: ['Образовывать comparativus и superlativus', 'Помнить супплетивные формы', 'Строить сравнение с quam и ablātīvus comparātiōnis'],
      skills: ['la.adj.comp'],
      theory: [
        { type: 'rule', text: 'Comparativus: основа + **-ior** (m./f.), **-ius** (n.), Gen. **-iōris**. Superlativus: основа + **-issimus, -a, -um**.' },
        { type: 'table', head: ['Положит.', 'Сравнит.', 'Превосх.'],
          rows: [
            ['clārus', 'clār{{ior}}, clār{{ius}}', 'clār{{issimus}}'],
            ['fortis', 'fort{{ior}}, fort{{ius}}', 'fort{{issimus}}'],
            ['fēlīx (fēlīc-)', 'fēlīc{{ior}}, fēlīc{{ius}}', 'fēlīc{{issimus}}'],
            ['pulcher, ācer, miser', 'pulchr{{ior}}, ācr{{ior}}, miser{{ior}}', 'pulcher{{rimus}}, ācer{{rimus}}, miser{{rimus}}'],
            ['facilis, difficilis, similis', 'facil{{ior}} …', 'facil{{limus}}, difficil{{limus}}, simil{{limus}}']
          ],
          note: '-limus — только у шести на -ilis: facilis, difficilis, similis, dissimilis, humilis, gracilis (но nōbilissimus, ūtilissimus).' },
        { type: 'table', caption: 'Comparativus склоняется по согласному типу', head: ['Падеж', 'm./f.', 'n.'],
          rows: [
            ['Nom.', 'fortior', 'fortius'],
            ['Gen.', 'fortiōr{{is}}', 'fortiōr{{is}}'],
            ['Dat.', 'fortiōr{{ī}}', 'fortiōr{{ī}}'],
            ['Acc.', 'fortiōr{{em}}', 'fortius'],
            ['Abl.', 'fortiōr{{e}}', 'fortiōr{{e}}'],
            ['Nom./Acc. pl.', 'fortiōr{{ēs}}', 'fortiōr{{a}}'],
            ['Gen. pl.', 'fortiōr{{um}}', 'fortiōr{{um}}'],
            ['Dat./Abl. pl.', 'fortiōr{{ibus}}', 'fortiōr{{ibus}}']
          ] },
        { type: 'table', caption: 'Супплетивные и неправильные', head: ['Положит.', 'Сравнит.', 'Превосх.'],
          rows: [
            ['bonus', 'melior, melius', 'optimus'],
            ['malus', 'peior, peius', 'pessimus'],
            ['magnus', 'maior, maius', 'maximus'],
            ['parvus', 'minor, minus', 'minimus'],
            ['multus', 'plūs (n.), pl. plūrēs, plūra', 'plūrimus'],
            ['(superus)', 'superior', 'suprēmus / summus'],
            ['(prae, prō)', 'prior', 'prīmus'],
            ['(prope)', 'propior', 'proximus']
          ] },
        { type: 'rule', text: 'Сравнение: **quam** + тот же падеж (*fortior quam Gāius*) или, без quam, **ablātīvus comparātiōnis** (*fortior Gāiō*). При превосходной — **genetīvus partītīvus**: *fortissimus omnium* «храбрейший из всех».' },
        { type: 'p', text: 'Comparativus без объекта сравнения — «слишком, довольно»: *senectūs est loquācior* «старость довольно болтлива». Superlativus без сравнения — элатив «очень»: *vir doctissimus* «весьма учёный муж». **quam + superl.** — «как можно…»: *quam maximae cōpiae* «как можно большие силы».' },
        { type: 'contrast', text: 'Русское «сильнее Гая» (род. п. без предлога) соответствует латинскому аблативу сравнения *fortior Gāiō* — разные падежи, но одна модель: сравнение без союза.' },
        { type: 'pitfall', text: '*plūs* в ед. ч. — существительное: *plūs pecūniae* «больше денег» (Gen.), а не прилагательное. *minus* — и n. от minor, и наречие «меньше».' },
        { type: 'examples', items: [
          { t: 'Lūx clār{{ior}} est quam nox.', ru: 'Свет ярче, чем ночь.' },
          { t: 'Nihil est virtūte pulchr{{ius}}.', ru: 'Нет ничего прекраснее доблести.' },
          { t: 'Iuppiter Optimus Maximus', ru: 'Юпитер Всеблагой Величайший' },
          { t: 'Hōrum omnium fort{{issimī}} sunt Belgae.', ru: 'Из всех них самые храбрые — белги. (Цезарь)' }
        ] }
      ],
      vocab: [
        { id: 'la-melior', w: 'melior', ru: 'лучший (сравн. к bonus)', pos: 'adj', forms: 'melior, melius (Gen. meliōris)', ex: 'meliōra videō', exRu: 'вижу лучшее', note: null },
        { id: 'la-optimus', w: 'optimus', ru: 'наилучший, превосходный', pos: 'adj', forms: 'optimus, -a, -um', ex: 'optimī cīvēs', exRu: 'лучшие граждане', note: null },
        { id: 'la-peior', w: 'peior', ru: 'худший (сравн. к malus)', pos: 'adj', forms: 'peior, peius (Gen. peiōris)', ex: 'peius malum', exRu: 'худшее зло', note: 'Первый слог долог по положению (pei-ior).' },
        { id: 'la-pessimus', w: 'pessimus', ru: 'наихудший', pos: 'adj', forms: 'pessimus, -a, -um', ex: 'Corruptiō optimī pessima.', exRu: 'Порча лучшего — наихудшая.', note: null },
        { id: 'la-maior', w: 'maior', ru: 'больший, старший; pl. предки', pos: 'adj', forms: 'maior, maius (Gen. maiōris)', ex: 'mōs maiōrum', exRu: 'обычай предков', note: null },
        { id: 'la-maximus', w: 'maximus', ru: 'величайший, наибольший', pos: 'adj', forms: 'maximus, -a, -um', ex: 'Pontifex Maximus', exRu: 'Великий понтифик', note: null },
        { id: 'la-minor', w: 'minor', ru: 'меньший, младший', pos: 'adj', forms: 'minor, minus (Gen. minōris)', ex: 'minor nātū', exRu: 'младший по возрасту', note: 'minus — также нареч. «меньше».' },
        { id: 'la-minimus', w: 'minimus', ru: 'наименьший', pos: 'adj', forms: 'minimus, -a, -um', ex: 'Dē minimīs nōn cūrat praetor.', exRu: 'Претор не занимается мелочами.', note: 'minimē — нисколько, отнюдь нет.' },
        { id: 'la-plus', w: 'plūs', ru: 'больше; pl. plūrēs — многие, большее число', pos: 'n', g: 'n', forms: 'plūs, plūris n.; pl. plūrēs, plūra', ex: 'plūs pecūniae', exRu: 'больше денег', note: 'В ед. ч. — существительное + Gen.' },
        { id: 'la-plurimus', w: 'plūrimus', ru: 'очень многий; pl. очень многие', pos: 'adj', forms: 'plūrimus, -a, -um', ex: 'plūrimī hominēs', exRu: 'очень многие люди', note: null },
        { id: 'la-summus', w: 'summus', ru: 'высший, самый верхний; величайший', pos: 'adj', forms: 'summus, -a, -um', ex: 'summus mōns', exRu: 'вершина горы', note: 'Как и medius, prīmus, extrēmus — часть предмета: summus mōns «вершина горы».' },
        { id: 'la-primus', w: 'prīmus', ru: 'первый', pos: 'adj', forms: 'prīmus, -a, -um', ex: 'prīmā lūce', exRu: 'на рассвете', note: 'prīmō — сначала; prīmum — впервые.' },
        { id: 'la-proximus', w: 'proximus', ru: 'ближайший; следующий', pos: 'adj', forms: 'proximus, -a, -um', ex: 'proximō diē', exRu: 'на следующий день', note: '+ Dat.: proximus Germānīs.' },
        { id: 'la-magis', w: 'magis', ru: 'больше, в большей степени', pos: 'adv', forms: null, ex: 'magis idōneus', exRu: 'более подходящий', note: 'Описательное сравнение при -eus, -ius: idōneus → magis idōneus.' }
      ],
      text: null
    },
    {
      id: 'la-u06-l03',
      kind: 'grammar',
      title: 'Наречия. Числительные. Местоименные прилагательные',
      goals: ['Образовывать наречия от прилагательных и их степени', 'Склонять ūnus, duo, trēs; употреблять mīlle/mīlia', 'Склонять «UNUS NAUTA»'],
      skills: ['la.adv', 'la.num', 'la.adj.pronom'],
      theory: [
        { type: 'table', caption: 'Наречия', head: ['Прилагательное', 'Наречие', 'Сравн. / превосх.'],
          rows: [
            ['1–2 скл.: lātus, miser', 'lāt{{ē}}, miser{{ē}}', 'lātius / lātissimē'],
            ['3 скл.: fortis, ācer, celer', 'fort{{iter}}, ācr{{iter}}, celer{{iter}}', 'fortius / fortissimē'],
            ['3 скл. на -ns: prūdēns', 'prūden{{ter}}', 'prūdentius / prūdentissimē'],
            ['неправильные: bonus, malus, facilis', 'bene, male, facile', 'melius / optimē; peius / pessimē; facilius / facillimē'],
            ['multus, magnus, parvus', 'multum, magnopere, paulum', 'plūs, magis / plūrimum, maximē; minus / minimē']
          ],
          note: 'Сравнительная степень наречия = n. sg. сравнительной степени прилагательного (fortius); превосходная — на -ē.' },
        { type: 'pitfall', text: '*bene, male* — с **кратким** e (в отличие от *lātē, miserē*). *facile* — наречие (n. sg. от facilis), а не «лёгкий» в Abl.' },
        { type: 'table', caption: 'Числительные', head: ['', 'Количественные', 'Порядковые'],
          rows: [
            ['1', 'ūnus, -a, -um', 'prīmus'],
            ['2', 'duo, duae, duo', 'secundus (alter)'],
            ['3', 'trēs, tria', 'tertius'],
            ['4', 'quattuor', 'quārtus'],
            ['5', 'quīnque', 'quīntus'],
            ['6', 'sex', 'sextus'],
            ['7', 'septem', 'septimus'],
            ['8', 'octō', 'octāvus'],
            ['9', 'novem', 'nōnus'],
            ['10', 'decem', 'decimus'],
            ['20', 'vīgintī', 'vīcēsimus'],
            ['100', 'centum', 'centēsimus'],
            ['1000', 'mīlle', 'mīllēsimus']
          ],
          note: 'Склоняются только 1–3, сотни (ducentī, -ae, -a…) и mīlia. Остальные несклоняемы.' },
        { type: 'table', caption: 'ūnus, duo, trēs', head: ['Падеж', 'ūnus (m./f./n.)', 'duo (m./f./n.)', 'trēs (m.f./n.)'],
          rows: [
            ['Nom.', 'ūnus, ūna, ūnum', 'duo, duae, duo', 'trēs, tria'],
            ['Gen.', 'ūnīus', 'duōrum, duārum, duōrum', 'trium'],
            ['Dat.', 'ūnī', 'duōbus, duābus, duōbus', 'tribus'],
            ['Acc.', 'ūnum, ūnam, ūnum', 'duōs (duo), duās, duo', 'trēs (trīs), tria'],
            ['Abl.', 'ūnō, ūnā, ūnō', 'duōbus, duābus, duōbus', 'tribus']
          ] },
        { type: 'rule', text: '**mīlle** — несклоняемое прилагательное: *mīlle mīlitēs*; **mīlia, mīlium** n. pl. — существительное с Gen.: *duo mīlia mīlitum* «две тысячи воинов».' },
        { type: 'rule', text: '**UNUS NAUTA** — ūnus, ūllus, nūllus, sōlus, neuter, alius, uter, tōtus, alter: местоименное склонение, **Gen. -īus, Dat. -ī** (*tōtīus Galliae, nūllī hominī*). alius: n. **aliud**, Gen. обычно alterīus.' },
        { type: 'tip', text: '*alius … alius* — «один … другой»; *aliī … aliī* — «одни … другие»; *alius aliud dīcit* — «каждый говорит своё». *alter … alter* — «один … другой (из двух)».' },
        { type: 'examples', items: [
          { t: 'Fortiter pugnāvērunt.', ru: 'Они храбро сражались.' },
          { t: 'Ūnus prō omnibus, omnēs prō ūnō.', ru: 'Один за всех, все за одного.' },
          { t: 'tōt{{īus}} Galliae', ru: 'всей Галлии' },
          { t: 'Aliī aliam in partem fūgērunt.', ru: 'Одни бежали в одну сторону, другие — в другую.' },
          { t: 'Caesar tria mīlia equitum mīsit.', ru: 'Цезарь послал три тысячи всадников.' }
        ] }
      ],
      vocab: [
        { id: 'la-unus', w: 'ūnus', ru: 'один; единственный', pos: 'num', forms: 'ūnus, -a, -um (Gen. ūnīus)', ex: 'ūnus ex multīs', exRu: 'один из многих', note: null },
        { id: 'la-duo', w: 'duo', ru: 'два', pos: 'num', forms: 'duo, duae, duo', ex: 'duo frātrēs', exRu: 'два брата', note: null },
        { id: 'la-tres', w: 'trēs', ru: 'три', pos: 'num', forms: 'trēs, tria (Gen. trium)', ex: 'trēs partēs', exRu: 'три части', note: null },
        { id: 'la-quattuor', w: 'quattuor', ru: 'четыре', pos: 'num', forms: 'indecl.', ex: 'quattuor annī', exRu: 'четыре года', note: null },
        { id: 'la-quinque', w: 'quīnque', ru: 'пять', pos: 'num', forms: 'indecl.', ex: 'quīnque diēs', exRu: 'пять дней', note: null },
        { id: 'la-decem', w: 'decem', ru: 'десять', pos: 'num', forms: 'indecl.', ex: 'decem mēnsēs', exRu: 'десять месяцев', note: null },
        { id: 'la-centum', w: 'centum', ru: 'сто', pos: 'num', forms: 'indecl.', ex: 'centum mīlitēs', exRu: 'сто воинов', note: null },
        { id: 'la-mille', w: 'mīlle', ru: 'тысяча; pl. mīlia — тысячи', pos: 'num', forms: 'mīlle indecl.; pl. mīlia, mīlium n.', ex: 'duo mīlia passuum', exRu: 'две мили (две тысячи шагов)', note: 'mīlia + Gen.' },
        { id: 'la-solus', w: 'sōlus', ru: 'один, единственный', pos: 'adj', forms: 'sōlus, -a, -um (Gen. sōlīus)', ex: 'sōlus omnium', exRu: 'единственный из всех', note: 'Ср. sōl, sōlis «солнце».' },
        { id: 'la-totus', w: 'tōtus', ru: 'весь, целый', pos: 'adj', forms: 'tōtus, -a, -um (Gen. tōtīus)', ex: 'tōta Gallia', exRu: 'вся Галлия', note: null },
        { id: 'la-alius', w: 'alius', ru: 'другой (из многих)', pos: 'adj', forms: 'alius, alia, aliud', ex: 'aliō diē', exRu: 'в другой день', note: 'n. aliud!' },
        { id: 'la-alter', w: 'alter', ru: 'другой (из двух), второй', pos: 'adj', forms: 'alter, altera, alterum (Gen. alterīus)', ex: 'alter ego', exRu: 'второе я', note: null },
        { id: 'la-nullus', w: 'nūllus', ru: 'никакой, ни один', pos: 'adj', forms: 'nūllus, -a, -um (Gen. nūllīus)', ex: 'Nūlla diēs sine līneā.', exRu: 'Ни дня без строчки.', note: null },
        { id: 'la-bene', w: 'bene', ru: 'хорошо', pos: 'adv', forms: 'melius, optimē', ex: 'Bene fēcistī.', exRu: 'Ты хорошо поступил.', note: 'Краткое e.' },
        { id: 'la-male', w: 'male', ru: 'плохо', pos: 'adv', forms: 'peius, pessimē', ex: 'male dīcere', exRu: 'злословить', note: 'Краткое e.' }
      ],
      text: null
    },
    {
      id: 'la-u06-l04',
      kind: 'reading',
      title: 'Lectiō: Gallia est omnis dīvīsa…',
      goals: ['Читать подлинный текст Цезаря (BG I, 1)', 'Узнавать превосходную степень и местоименные прилагательные'],
      skills: ['la.adj.3', 'la.adj.comp', 'la.adj.pronom', 'la.adv'],
      theory: [
        { type: 'p', text: 'Подлинный текст Цезаря (с макронами). Формы, которые ещё не проходили, — *dīvīsa est* «разделена», *appellantur* «называются» (пассив, юнит 7). Ниже — известные сентенции.' },
        { type: 'tip', text: '*quī ipsōrum linguā Celtae, nostrā Gallī appellantur* — после *nostrā* опущено *linguā*: латынь не повторяет то, что ясно из параллели.' }
      ],
      vocab: [
        { id: 'la-incolo', w: 'incolō', ru: 'населять, жить', pos: 'v', forms: 'incolō, incolere, incoluī, —', ex: 'trāns Rhēnum incolunt', exRu: 'живут за Рейном', note: null },
        { id: 'la-lingua', w: 'lingua', ru: 'язык', pos: 'n', g: 'f', forms: 'lingua, -ae f.', ex: 'linguā Latīnā', exRu: 'на латинском языке', note: null },
        { id: 'la-institutum', w: 'īnstitūtum', ru: 'установление, обычай', pos: 'n', g: 'n', forms: 'īnstitūtum, -ī n.', ex: 'īnstitūta maiōrum', exRu: 'установления предков', note: null },
        { id: 'la-differo', w: 'differō', ru: 'различаться; откладывать', pos: 'v', forms: 'differō, differre, distulī, dīlātum', ex: 'inter sē differunt', exRu: 'отличаются друг от друга', note: null },
        { id: 'la-propterea', w: 'proptereā', ru: 'поэтому; proptereā quod — потому что', pos: 'adv', forms: null, ex: 'proptereā quod longē absunt', exRu: 'потому что они далеко', note: null },
        { id: 'la-cultus', w: 'cultus', ru: 'образ жизни; обработка; почитание', pos: 'n', g: 'm', forms: 'cultus, -ūs m.', ex: 'cultus deōrum', exRu: 'почитание богов', note: null },
        { id: 'la-humanitas', w: 'hūmānitās', ru: 'человечность; образованность', pos: 'n', g: 'f', forms: 'hūmānitās, hūmānitātis f.', ex: 'cultus atque hūmānitās', exRu: 'образ жизни и культура', note: null },
        { id: 'la-provincia', w: 'prōvincia', ru: 'провинция; круг обязанностей', pos: 'n', g: 'f', forms: 'prōvincia, -ae f.', ex: 'prōvincia nostra', exRu: 'наша провинция (Нарбонская Галлия)', note: null },
        { id: 'la-mercator', w: 'mercātor', ru: 'купец, торговец', pos: 'n', g: 'm', forms: 'mercātor, mercātōris m.', ex: 'mercātōrēs Rōmānī', exRu: 'римские купцы', note: null },
        { id: 'la-ars', w: 'ars', ru: 'искусство, умение; наука', pos: 'n', g: 'f', forms: 'ars, artis f.', ex: 'Ars longa, vīta brevis.', exRu: 'Искусство долговечно, жизнь коротка.', note: 'Gen. pl. artium.' },
        { id: 'la-adiuvo', w: 'adiuvō', ru: 'помогать (+ Acc.)', pos: 'v', forms: 'adiuvō, adiuvāre, adiūvī, adiūtum', ex: 'Fortēs fortūna adiuvat.', exRu: 'Храбрым помогает судьба.', note: 'В отличие от русского — с Acc.' },
        { id: 'la-usus', w: 'ūsus', ru: 'употребление; опыт; польза', pos: 'n', g: 'm', forms: 'ūsus, -ūs m.', ex: 'Ūsus magister est optimus.', exRu: 'Опыт — лучший учитель.', note: 'ūsuī esse — быть полезным.' },
        { id: 'la-magister', w: 'magister', ru: 'учитель; начальник', pos: 'n', g: 'm', forms: 'magister, magistrī m.', ex: 'magister equitum', exRu: 'начальник конницы', note: null }
      ],
      text: {
        title: 'Dē bellō Gallicō I, 1 et sententiae',
        lines: [
          { t: 'Gallia est omnis dīvīsa in partēs trēs, quārum ūnam incolunt Belgae, aliam Aquītānī, tertiam quī ipsōrum linguā Celtae, nostrā Gallī appellantur.', ru: 'Галлия во всей своей совокупности разделена на три части: одну населяют белги, другую — аквитаны, третью — те, кто на их собственном языке зовутся кельтами, а на нашем — галлами.' },
          { t: 'Hī omnēs linguā, īnstitūtīs, lēgibus inter sē differunt.', ru: 'Все они отличаются друг от друга языком, обычаями и законами.' },
          { t: 'Hōrum omnium fortissimī sunt Belgae, proptereā quod ā cultū atque hūmānitāte prōvinciae longissimē absunt,', ru: 'Самые храбрые из всех них — белги, потому что они дальше всех от образа жизни и культуры Провинции,' },
          { t: 'minimēque ad eōs mercātōrēs saepe commeant,', ru: 'и купцы реже всего к ним наезжают,' },
          { t: 'proximīque sunt Germānīs, quī trāns Rhēnum incolunt, quibuscum continenter bellum gerunt.', ru: 'и они ближайшие соседи германцев, живущих за Рейном, с которыми постоянно ведут войну.' },
          { t: 'Ars longa, vīta brevis.', ru: 'Искусство долговечно, жизнь коротка.' },
          { t: 'Fortēs fortūna adiuvat.', ru: 'Храбрым помогает судьба. (Теренций)' },
          { t: 'Ūsus magister est optimus.', ru: 'Опыт — лучший учитель.' },
          { t: 'Nihil difficile amantī.', ru: 'Для любящего нет ничего трудного. (Цицерон)' }
        ]
      }
    }
  ]
};

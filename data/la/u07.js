export default {
  id: 'la-u07',
  title: 'Passīvum, dēpōnentia, participia, accūsātīvus cum īnfīnītīvō',
  titleRu: 'Пассив, отложительные глаголы, причастия, AcI',
  summary: 'Пассив системы инфекта и перфекта, отложительные и полуотложительные глаголы, причастия и ablātīvus absolūtus, инфинитивы и оборот accūsātīvus cum īnfīnītīvō. Чтение — Цезарь об Оргеториге.',
  lessons: [
    {
      id: 'la-u07-l01',
      kind: 'grammar',
      title: 'Пассив системы инфекта',
      goals: ['Образовывать пассив praesens, imperfectum, futurum I', 'Выражать деятеля и орудие', 'Спрягать fīō'],
      skills: ['la.verb.pass.inf', 'la.case.agent'],
      theory: [
        { type: 'rule', text: 'Пассивные личные окончания: **-r, -ris (-re), -tur, -mur, -minī, -ntur**. В 1 sg. -ō + r → -or, -m заменяется на -r: laudō → laudor, laudābam → laudābar.' },
        { type: 'table', caption: 'Praesens passīvī', head: ['Лицо', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['1 sg.', 'laud{{or}}', 'mone{{or}}', 'reg{{or}}', 'capi{{or}}', 'audi{{or}}'],
            ['2 sg.', 'laudā{{ris}}', 'monē{{ris}}', 'reg{{eris}}', 'cap{{eris}}', 'audī{{ris}}'],
            ['3 sg.', 'laudā{{tur}}', 'monē{{tur}}', 'reg{{itur}}', 'cap{{itur}}', 'audī{{tur}}'],
            ['1 pl.', 'laudā{{mur}}', 'monē{{mur}}', 'reg{{imur}}', 'cap{{imur}}', 'audī{{mur}}'],
            ['2 pl.', 'laudā{{minī}}', 'monē{{minī}}', 'reg{{iminī}}', 'cap{{iminī}}', 'audī{{minī}}'],
            ['3 pl.', 'lauda{{ntur}}', 'mone{{ntur}}', 'reg{{untur}}', 'capi{{untur}}', 'audi{{untur}}']
          ],
          note: 'Infīnītīvus praesentis passīvī: laudā**rī**, monē**rī**, audī**rī**; в III — только **-ī**: regī, capī.' },
        { type: 'table', caption: 'Imperfectum и futūrum I passīvī', head: ['Лицо', 'Impf. (все спр.)', 'Fut. I–II', 'Fut. III–IV'],
          rows: [
            ['1 sg.', 'laudā{{bar}}', 'laudā{{bor}}', 'reg{{ar}}'],
            ['2 sg.', 'laudā{{bāris}}', 'laudā{{beris}}', 'reg{{ēris}}'],
            ['3 sg.', 'laudā{{bātur}}', 'laudā{{bitur}}', 'reg{{ētur}}'],
            ['1 pl.', 'laudā{{bāmur}}', 'laudā{{bimur}}', 'reg{{ēmur}}'],
            ['2 pl.', 'laudā{{bāminī}}', 'laudā{{biminī}}', 'reg{{ēminī}}'],
            ['3 pl.', 'laudā{{bantur}}', 'laudā{{buntur}}', 'reg{{entur}}']
          ] },
        { type: 'pitfall', text: '*regeris* (praes., краткое e) ≠ *regēris* (fut., долгое ē); *laudāberis* (fut.) — с **e**, а не i. При вводе без макронов различает только контекст.' },
        { type: 'rule', text: 'Деятель-лицо — **ā/ab + Abl.** (ablātīvus auctōris): *ā Caesare*; орудие и причина — **Abl. без предлога**: *gladiō, metū*.' },
        { type: 'contrast', text: 'Русский выражает и деятеля, и орудие творительным: «убит врагом», «убит мечом». Латынь различает: *ab hoste* (лицо) — *gladiō* (вещь). Безличный пассив непереходных глаголов — как русское неопределённо-личное: *Pugnātur* «сражаются», *Ītur* «идут».' },
        { type: 'p', text: '**fīō, fierī, factus sum** «становиться, делаться; случаться» служит пассивом к faciō в системе инфекта: fīō, fīs, fit, fīmus, fītis, fīunt; impf. fīēbam; fut. fīam, fīēs; inf. **fierī** (i краткое перед -er).' },
        { type: 'examples', items: [
          { t: 'Urbs ab hostibus oppugn{{ātur}}.', ru: 'Город осаждается врагами.' },
          { t: 'Carthāgō ā Rōmānīs dēlē{{bitur}}.', ru: 'Карфаген будет разрушен римлянами.' },
          { t: 'Mīlitēs metū terr{{ēbantur}}.', ru: 'Воины были охвачены страхом.' },
          { t: 'Fīat lūx!', ru: 'Да будет свет!' },
          { t: 'Dūcunt volentem fāta, nōlentem trah{{unt}}.', ru: 'Желающего судьба ведёт, нежелающего — тащит. (Сенека)' }
        ] }
      ],
      vocab: [
        { id: 'la-fio', w: 'fīō', ru: 'становиться, делаться; случаться', pos: 'v', forms: 'fīō, fierī, factus sum', ex: 'Fīat lūx!', exRu: 'Да будет свет!', note: 'Пассив к faciō; fit, ut… — случается, что…' },
        { id: 'la-creo', w: 'creō', ru: 'создавать; избирать (должностных лиц)', pos: 'v', forms: 'creō, creāre, creāvī, creātum', ex: 'Cōnsulēs creantur.', exRu: 'Избираются консулы.', note: null },
        { id: 'la-deleo', w: 'dēleō', ru: 'разрушать, уничтожать', pos: 'v', forms: 'dēleō, dēlēre, dēlēvī, dēlētum', ex: 'Carthāgō dēlēta est.', exRu: 'Карфаген разрушен.', note: null },
        { id: 'la-terreo', w: 'terreō', ru: 'пугать, устрашать', pos: 'v', forms: 'terreō, terrēre, terruī, territum', ex: 'Nōn terreor.', exRu: 'Я не боюсь (меня не запугать).', note: null },
        { id: 'la-occupo', w: 'occupō', ru: 'захватывать, занимать', pos: 'v', forms: 'occupō, occupāre, occupāvī, occupātum', ex: 'Collis occupātur.', exRu: 'Холм занимается (войсками).', note: null },
        { id: 'la-traho', w: 'trahō', ru: 'тащить, тянуть; влечь', pos: 'v', forms: 'trahō, trahere, trāxī, tractum', ex: 'Trahimur omnēs studiō laudis.', exRu: 'Всех нас влечёт жажда славы. (Цицерон)', note: null },
        { id: 'la-iungo', w: 'iungō', ru: 'соединять, запрягать', pos: 'v', forms: 'iungō, iungere, iūnxī, iūnctum', ex: 'dextram dextrae iungere', exRu: 'пожать руку', note: null },
        { id: 'la-verto', w: 'vertō', ru: 'поворачивать, обращать', pos: 'v', forms: 'vertō, vertere, vertī, versum', ex: 'terga vertere', exRu: 'обратиться в бегство', note: null },
        { id: 'la-libero', w: 'līberō', ru: 'освобождать (+ Abl. от чего)', pos: 'v', forms: 'līberō, līberāre, līberāvī, līberātum', ex: 'patriam metū līberāre', exRu: 'освободить отечество от страха', note: null },
        { id: 'la-oppugno', w: 'oppugnō', ru: 'штурмовать, осаждать', pos: 'v', forms: 'oppugnō, oppugnāre, oppugnāvī, oppugnātum', ex: 'Oppidum oppugnātur.', exRu: 'Город штурмуют.', note: null },
        { id: 'la-obsideo', w: 'obsideō', ru: 'осаждать, блокировать', pos: 'v', forms: 'obsideō, obsidēre, obsēdī, obsessum', ex: 'Urbem obsidēbant.', exRu: 'Они осаждали город.', note: null },
        { id: 'la-vulnus', w: 'vulnus', ru: 'рана', pos: 'n', g: 'n', forms: 'vulnus, vulneris n.', ex: 'gravī vulnere', exRu: 'тяжёлой раной', note: null }
      ],
      text: null
    },
    {
      id: 'la-u07-l02',
      kind: 'grammar',
      title: 'Пассив системы перфекта. Отложительные глаголы',
      goals: ['Образовывать perf., plpf., fut. II passīvī', 'Узнавать и спрягать deponentia и semideponentia'],
      skills: ['la.verb.pass.perf', 'la.verb.dep'],
      theory: [
        { type: 'rule', text: 'Пассив перфекта — аналитический: **part. perf. pass. + формы esse**. Причастие согласуется с подлежащим в роде и числе.' },
        { type: 'table', head: ['Время', 'Форма', 'Перевод'],
          rows: [
            ['Perfectum', 'laudāt{{us}} (-a, -um) sum, es, est; laudāt{{ī}} (-ae, -a) sumus…', 'я был похвален, меня похвалили'],
            ['Plusquamperfectum', 'laudātus eram, erās…', 'я был похвален (раньше)'],
            ['Futūrum II', 'laudātus erō, eris…', 'я буду похвален (раньше другого)'],
            ['Inf. perf.', 'laudātus, -a, -um esse', 'быть похваленным']
          ] },
        { type: 'pitfall', text: '*Urbs capta est* — «город **был взят**» (perf.), а не «город есть взятый»: *est* здесь — часть составной формы. Ср. *urbs capta erat* — «город был взят (до того)».' },
        { type: 'h', text: 'Deponentia' },
        { type: 'rule', text: 'Отложительные глаголы (dēpōnentia) имеют **пассивные формы с активным значением**: *hortor* «ободряю», *sequor* «следую». Словарная форма — три формы: *hortor, hortārī, hortātus sum*.' },
        { type: 'table', head: ['Спр.', 'Praes. 1/2/3 sg.', 'Inf.', 'Perf.'],
          rows: [
            ['I', 'hort{{or}}, hortā{{ris}}, hortā{{tur}}', 'hortā{{rī}}', 'hortātus sum'],
            ['II', 'vere{{or}}, verē{{ris}}, verē{{tur}}', 'verē{{rī}}', 'veritus sum'],
            ['III', 'sequ{{or}}, sequ{{eris}}, sequ{{itur}}', 'sequ{{ī}}', 'secūtus sum'],
            ['III-iō', 'pati{{or}}, pat{{eris}}, pat{{itur}}', 'pat{{ī}}', 'passus sum'],
            ['IV', 'experi{{or}}, experī{{ris}}, experī{{tur}}', 'experī{{rī}}', 'expertus sum']
          ],
          note: 'Активные формы у deponentia всё же есть: part. praes. (*hortāns*), part. fut. (*hortātūrus*), герундий. Part. perf. имеет **активное** значение: *hortātus* «ободрив».' },
        { type: 'p', text: '**Полуотложительные** (sēmidēpōnentia): активны в инфекте, пассивны по форме в перфекте: *audeō, audēre, ausus sum* «сметь»; *gaudeō, gāvīsus sum* «радоваться»; *soleō, solitus sum* «иметь обыкновение»; *(cōn)fīdō, (cōn)fīsus sum* «доверять».' },
        { type: 'contrast', text: 'Сравните русские глаголы на -ся без пассивного значения: *бояться, надеяться, смеяться* — форма «возвратная», значение активное. Латинские *vereor, spērō*… — та же идея, но с полной пассивной парадигмой.' },
        { type: 'tip', text: '*ūtor, fruor, fungor, potior, vescor* управляют **аблативом**: *ūtī armīs* «пользоваться оружием», *potīrī imperiō* «овладеть властью».' },
        { type: 'examples', items: [
          { t: 'Caesar mīlitēs hortā{{tus}} est.', ru: 'Цезарь ободрил воинов.' },
          { t: 'Helvētiī ē fīnibus suīs ēgress{{ī}} sunt.', ru: 'Гельветы вышли из своих пределов.' },
          { t: 'Nāt{{us}} est Rōmae.', ru: 'Он родился в Риме.' },
          { t: 'Dum loquimur, fūgerit invida aetās.', ru: 'Пока мы говорим, убежит завистливое время. (Гораций)' }
        ] }
      ],
      vocab: [
        { id: 'la-loquor', w: 'loquor', ru: 'говорить', pos: 'v', forms: 'loquor, loquī, locūtus sum', ex: 'Latīnē loquitur.', exRu: 'Говорит по-латыни.', note: null },
        { id: 'la-sequor', w: 'sequor', ru: 'следовать', pos: 'v', forms: 'sequor, sequī, secūtus sum', ex: 'Mē sequiminī!', exRu: 'Следуйте за мной!', note: 'Переходный: + Acc.' },
        { id: 'la-hortor', w: 'hortor', ru: 'ободрять, побуждать', pos: 'v', forms: 'hortor, hortārī, hortātus sum', ex: 'Mīlitēs hortātur.', exRu: 'Он ободряет воинов.', note: '+ ut / nē.' },
        { id: 'la-conor', w: 'cōnor', ru: 'пытаться', pos: 'v', forms: 'cōnor, cōnārī, cōnātus sum', ex: 'Fugere cōnātī sunt.', exRu: 'Они попытались бежать.', note: null },
        { id: 'la-arbitror', w: 'arbitror', ru: 'полагать, считать', pos: 'v', forms: 'arbitror, arbitrārī, arbitrātus sum', ex: 'Sīc arbitror.', exRu: 'Так я полагаю.', note: '+ AcI.' },
        { id: 'la-videor', w: 'videor', ru: 'казаться; pass. быть видимым', pos: 'v', forms: 'videor, vidērī, vīsus sum', ex: 'Fēlīx esse vidētur.', exRu: 'Он кажется счастливым.', note: 'Nōminātīvus cum īnfīnītīvō; mihi vidētur — мне кажется, я решил.' },
        { id: 'la-vereor', w: 'vereor', ru: 'бояться; почитать', pos: 'v', forms: 'vereor, verērī, veritus sum', ex: 'Vereor, nē veniat.', exRu: 'Боюсь, что он придёт.', note: 'vereor nē — боюсь, что; vereor ut — боюсь, что не.' },
        { id: 'la-patior', w: 'patior', ru: 'терпеть; позволять', pos: 'v', forms: 'patior, patī, passus sum', ex: 'Nōn patiar.', exRu: 'Не допущу.', note: 'III-iō.' },
        { id: 'la-morior', w: 'morior', ru: 'умирать', pos: 'v', forms: 'morior, morī, mortuus sum', ex: 'Moritūrī tē salūtant.', exRu: 'Идущие на смерть приветствуют тебя.', note: 'Part. fut. moritūrus.' },
        { id: 'la-proficiscor', w: 'proficīscor', ru: 'отправляться', pos: 'v', forms: 'proficīscor, proficīscī, profectus sum', ex: 'In Galliam profectus est.', exRu: 'Он отправился в Галлию.', note: null },
        { id: 'la-utor', w: 'ūtor', ru: 'пользоваться (+ Abl.)', pos: 'v', forms: 'ūtor, ūtī, ūsus sum', ex: 'Occāsiōne ūtī', exRu: 'воспользоваться случаем', note: null },
        { id: 'la-nascor', w: 'nāscor', ru: 'рождаться', pos: 'v', forms: 'nāscor, nāscī, nātus sum', ex: 'Poētae nāscuntur, ōrātōrēs fīunt.', exRu: 'Поэтами рождаются, ораторами становятся.', note: null },
        { id: 'la-egredior', w: 'ēgredior', ru: 'выходить', pos: 'v', forms: 'ēgredior, ēgredī, ēgressus sum', ex: 'Ē nāvī ēgressus est.', exRu: 'Он сошёл с корабля.', note: 'III-iō.' },
        { id: 'la-audeo', w: 'audeō', ru: 'сметь, отваживаться', pos: 'v', forms: 'audeō, audēre, ausus sum', ex: 'Sapere audē!', exRu: 'Осмелься быть мудрым! (Гораций)', note: 'Полуотложительный.' },
        { id: 'la-gaudeo', w: 'gaudeō', ru: 'радоваться', pos: 'v', forms: 'gaudeō, gaudēre, gāvīsus sum', ex: 'Gaudeō tē valēre.', exRu: 'Рад, что ты здоров.', note: 'Полуотложительный.' }
      ],
      text: null
    },
    {
      id: 'la-u07-l03',
      kind: 'grammar',
      title: 'Причастия. Ablātīvus absolūtus',
      goals: ['Образовывать три причастия', 'Переводить participium coniūnctum', 'Распознавать и переводить ablātīvus absolūtus'],
      skills: ['la.part', 'la.syntax.ablabs'],
      theory: [
        { type: 'table', head: ['Причастие', 'Образование', 'Пример', 'Время относительно сказуемого'],
          rows: [
            ['praesentis āctīvī', 'основа praes. + -ns, -ntis', 'laudā{{ns}}, monē{{ns}}, reg{{ēns}}, capi{{ēns}}, audi{{ēns}}', 'одновременность'],
            ['perfectī passīvī', 'основа супина + -us, -a, -um', 'laudāt{{us}}, monit{{us}}, rēct{{us}}, capt{{us}}, audīt{{us}}', 'предшествование'],
            ['futūrī āctīvī', 'основа супина + -ūrus, -a, -um', 'laudāt{{ūrus}}, monit{{ūrus}}, rēct{{ūrus}}, capt{{ūrus}}, audīt{{ūrus}}', 'следование, намерение']
          ],
          note: 'От esse — только futūrus. Part. praes. склоняется как ingēns (Abl. -e в функции причастия, -ī — как прилагательное).' },
        { type: 'p', text: '**Participium coniūnctum** согласуется с членом предложения: *Mīlitēs hostem fugientem vīdērunt* «Воины увидели бегущего врага». Переводим причастием, деепричастием или придаточным.' },
        { type: 'rule', text: '**Ablātīvus absolūtus**: существительное/местоимение + причастие в **Abl.**, грамматически не связанные с остальным предложением. Переводим придаточным (когда, после того как, так как, хотя) или деепричастием.' },
        { type: 'table', head: ['Тип', 'Пример', 'Перевод'],
          rows: [
            ['с part. praes.', 'Caesare veniente hostēs fūgērunt.', 'Когда Цезарь подходил, враги бежали.'],
            ['с part. perf.', 'Urbe captā Caesar discessit.', 'После того как город был взят (взяв город), Цезарь ушёл.'],
            ['именной (без причастия)', 'Caesare duce; Cicerōne cōnsule; mē invītō', 'под командованием Цезаря; в консульство Цицерона; против моей воли']
          ] },
        { type: 'contrast', text: 'Русское деепричастие требует общего подлежащего: «Взяв город, Цезарь ушёл» — можно, потому что брал город сам Цезарь. Но *Sōle oriente proficīscimur* — «солнце восходит, а отправляемся мы»: деепричастие невозможно, нужен придаточный: «С восходом солнца (когда восходит солнце) мы отправляемся».' },
        { type: 'pitfall', text: 'Ablātīvus absolūtus не употребляется, если его «подлежащее» — член главного предложения: *Hostēs captōs interfēcit* (part. coniunctum), а не *hostibus captīs eōs interfēcit*.' },
        { type: 'tip', text: 'Алгоритм: видите существительное в Abl. + причастие в Abl. без предлога → выделите оборот в скобки, переведите главное, затем подберите союз по смыслу.' },
        { type: 'examples', items: [
          { t: 'Signō datō mīlitēs impetum fēcērunt.', ru: 'По данному сигналу воины пошли в атаку.' },
          { t: 'Caesar, proeliō factō, castra mōvit.', ru: 'Цезарь после сражения снялся с лагеря.' },
          { t: 'Avē, Imperātor, moritūrī tē salūtant!', ru: 'Здравствуй, император, идущие на смерть приветствуют тебя!' },
          { t: 'Prīmā lūce, equitibus praemissīs, Caesar profectus est.', ru: 'На рассвете, выслав вперёд конницу, Цезарь выступил.' }
        ] }
      ],
      vocab: [
        { id: 'la-interficio', w: 'interficiō', ru: 'убивать', pos: 'v', forms: 'interficiō, interficere, interfēcī, interfectum', ex: 'Ducem interfēcērunt.', exRu: 'Они убили вождя.', note: 'III-iō.' },
        { id: 'la-pervenio', w: 'perveniō', ru: 'достигать, прибывать', pos: 'v', forms: 'perveniō, pervenīre, pervēnī, perventum', ex: 'Ad flūmen pervēnērunt.', exRu: 'Они добрались до реки.', note: null },
        { id: 'la-convoco', w: 'convocō', ru: 'созывать', pos: 'v', forms: 'convocō, convocāre, convocāvī, convocātum', ex: 'Concilium convocāvit.', exRu: 'Он созвал совет.', note: null },
        { id: 'la-proelium', w: 'proelium', ru: 'сражение, битва', pos: 'n', g: 'n', forms: 'proelium, -iī n.', ex: 'proelium committere', exRu: 'завязать сражение', note: null },
        { id: 'la-signum', w: 'signum', ru: 'знак, сигнал; знамя', pos: 'n', g: 'n', forms: 'signum, -ī n.', ex: 'signō datō', exRu: 'по сигналу', note: null },
        { id: 'la-arma', w: 'arma', ru: 'оружие', pos: 'n', g: 'n', forms: 'arma, -ōrum n. pl.', ex: 'Arma virumque canō.', exRu: 'Битвы и мужа пою. (Вергилий)', note: 'Pluralia tantum.' },
        { id: 'la-equus', w: 'equus', ru: 'конь, лошадь', pos: 'n', g: 'm', forms: 'equus, -ī m.', ex: 'equō vehī', exRu: 'ехать верхом', note: null },
        { id: 'la-eques', w: 'eques', ru: 'всадник; pl. конница', pos: 'n', g: 'm', forms: 'eques, equitis m.', ex: 'equitēs praemittere', exRu: 'выслать вперёд конницу', note: null },
        { id: 'la-pedes', w: 'pedes', ru: 'пехотинец; pl. пехота', pos: 'n', g: 'm', forms: 'pedes, peditis m.', ex: 'peditēs et equitēs', exRu: 'пехота и конница', note: 'Ср. pēs, pedis «нога».' },
        { id: 'la-sol', w: 'sōl', ru: 'солнце', pos: 'n', g: 'm', forms: 'sōl, sōlis m.', ex: 'sōle oriente', exRu: 'на восходе солнца', note: null },
        { id: 'la-lux', w: 'lūx', ru: 'свет', pos: 'n', g: 'f', forms: 'lūx, lūcis f.', ex: 'prīmā lūce', exRu: 'на рассвете', note: null },
        { id: 'la-nuntius', w: 'nūntius', ru: 'вестник; известие', pos: 'n', g: 'm', forms: 'nūntius, -iī m.', ex: 'nūntiō acceptō', exRu: 'получив известие', note: null }
      ],
      text: null
    },
    {
      id: 'la-u07-l04',
      kind: 'grammar',
      title: 'Инфинитивы. Accūsātīvus и nōminātīvus cum īnfīnītīvō',
      goals: ['Образовывать 6 инфинитивов', 'Переводить AcI с правильным временем', 'Узнавать NcI при dīcitur, vidētur'],
      skills: ['la.verb.infin', 'la.syntax.aci', 'la.syntax.nci'],
      theory: [
        { type: 'table', head: ['', 'Āctīvum', 'Passīvum'],
          rows: [
            ['Praesēns', 'laudā{{re}}, reg{{ere}}', 'laudā{{rī}}, reg{{ī}}'],
            ['Perfectum', 'laudāv{{isse}}, rēx{{isse}}', 'laudāt{{um}} (-am, -um) esse'],
            ['Futūrum', 'laudāt{{ūrum}} (-am, -um) esse', 'laudātum īrī (редко)']
          ],
          note: 'esse: esse — fuisse — futūrum esse (= fore). Причастие в инфинитиве согласуется с подлежащим AcI: *Dīcit urbem captam esse*.' },
        { type: 'rule', text: '**AcI**: после глаголов речи, мысли, восприятия, чувства (dīcō, putō, sciō, videō, audiō, gaudeō…) и безличных (cōnstat, oportet, necesse est) подлежащее зависимого предложения стоит в **Acc.**, сказуемое — в **инфинитиве**. Переводим придаточным с «что».' },
        { type: 'table', caption: 'Время инфинитива — относительное', head: ['Инфинитив', 'Отношение', 'Dīcit… / Dīxit…'],
          rows: [
            ['praes.', 'одновременно', 'eum venīre — что он приходит / приходит (тогда)'],
            ['perf.', 'раньше', 'eum vēnisse — что он пришёл / пришёл (ранее)'],
            ['fut.', 'позже', 'eum ventūrum esse — что он придёт / придёт (потом)']
          ] },
        { type: 'rule', text: 'Возвратное **sē** в AcI указывает на подлежащее главного предложения: *Caesar dīxit sē ventūrum esse* «…что он (сам Цезарь) придёт»; *eum* — кто-то другой.' },
        { type: 'p', text: '**NcI**: при пассивных *dīcitur, putātur, trāditur, iubētur* и при *videor* подлежащее остаётся в **Nom.**: *Homērus caecus fuisse dīcitur* «Говорят, что Гомер был слеп»; *Vidēris esse fēlīx* «Ты, кажется, счастлив».' },
        { type: 'contrast', text: 'Зачаток AcI есть и в русском: «Считаю его честным», «Видел его бегущим». Но в латыни это регулярная конструкция с любым временем и залогом — союза «что» нет вовсе.' },
        { type: 'pitfall', text: 'Два Acc. при активном инфинитиве: *Dīcunt Rōmānōs Gallōs vīcisse* — по умолчанию первый Acc. — подлежащее («римляне победили галлов»). Двусмысленность — излюбленный приём оракулов: *Aiō tē, Aeacida, Rōmānōs vincere posse*.' },
        { type: 'examples', items: [
          { t: 'Sciō tē vērum dīcere.', ru: 'Я знаю, что ты говоришь правду.' },
          { t: 'Nūntiātum est hostēs advenīre.', ru: 'Пришло известие, что враги приближаются.' },
          { t: 'Spērō tē mox ventūrum esse.', ru: 'Надеюсь, что ты скоро придёшь.' },
          { t: 'Thalēs dīxit aquam esse initium rērum.', ru: 'Фалес сказал, что вода — начало всего.' },
          { t: 'Caesar dīxit sē Gallōs vīcisse.', ru: 'Цезарь сказал, что победил галлов.' }
        ] }
      ],
      vocab: [
        { id: 'la-nescio', w: 'nesciō', ru: 'не знать', pos: 'v', forms: 'nesciō, nescīre, nescīvī, nescītum', ex: 'Nesciō quid dīcās.', exRu: 'Не знаю, что ты говоришь.', note: 'nesciō quis — неизвестно кто, некто.' },
        { id: 'la-nego', w: 'negō', ru: 'отрицать; говорить, что не', pos: 'v', forms: 'negō, negāre, negāvī, negātum', ex: 'Negat sē vēnisse.', exRu: 'Он говорит, что не приходил.', note: 'negō = dīcō … nōn.' },
        { id: 'la-spero', w: 'spērō', ru: 'надеяться', pos: 'v', forms: 'spērō, spērāre, spērāvī, spērātum', ex: 'Dum spīrō, spērō.', exRu: 'Пока дышу — надеюсь.', note: '+ AcI с inf. fut.' },
        { id: 'la-censeo', w: 'cēnseō', ru: 'полагать; высказывать мнение (в сенате)', pos: 'v', forms: 'cēnseō, cēnsēre, cēnsuī, cēnsum', ex: 'Cēterum cēnseō Carthāginem esse dēlendam.', exRu: 'А впрочем, я полагаю, что Карфаген должен быть разрушен. (Катон)', note: null },
        { id: 'la-iudico', w: 'iūdicō', ru: 'судить; считать, признавать', pos: 'v', forms: 'iūdicō, iūdicāre, iūdicāvī, iūdicātum', ex: 'Eum hostem iūdicāvērunt.', exRu: 'Его объявили врагом.', note: null },
        { id: 'la-confido', w: 'cōnfīdō', ru: 'доверять (+ Dat.), полагаться (+ Abl.); быть уверенным', pos: 'v', forms: 'cōnfīdō, cōnfīdere, cōnfīsus sum', ex: 'Vīribus suīs cōnfīdunt.', exRu: 'Они полагаются на свои силы.', note: 'Полуотложительный.' },
        { id: 'la-verus', w: 'vērus', ru: 'истинный, настоящий', pos: 'adj', forms: 'vērus, -a, -um', ex: 'vērum dīcere', exRu: 'говорить правду', note: 'vērō — поистине; же (постпоз.).' },
        { id: 'la-certus', w: 'certus', ru: 'определённый, надёжный, верный', pos: 'adj', forms: 'certus, -a, -um', ex: 'Amīcus certus in rē incertā cernitur.', exRu: 'Верный друг познаётся в беде. (Энний)', note: 'certiōrem facere — известить.' },
        { id: 'la-sententia', w: 'sententia', ru: 'мнение; изречение; приговор', pos: 'n', g: 'f', forms: 'sententia, -ae f.', ex: 'Quot hominēs, tot sententiae.', exRu: 'Сколько людей, столько мнений. (Теренций)', note: null },
        { id: 'la-opinio', w: 'opīniō', ru: 'мнение, ожидание; репутация', pos: 'n', g: 'f', forms: 'opīniō, opīniōnis f.', ex: 'contrā opīniōnem', exRu: 'против ожидания', note: null },
        { id: 'la-oportet', w: 'oportet', ru: 'следует, надлежит (безл.)', pos: 'v', forms: 'oportet, oportēre, oportuit', ex: 'Tē venīre oportet.', exRu: 'Тебе следует прийти.', note: '+ AcI или inf.' },
        { id: 'la-constat', w: 'cōnstat', ru: 'известно, общепризнано (безл.)', pos: 'v', forms: 'cōnstat, cōnstāre, cōnstitit', ex: 'Cōnstat Homērum caecum fuisse.', exRu: 'Известно, что Гомер был слеп.', note: 'От cōnstō «стоять твёрдо; стоить».' },
        { id: 'la-necesse', w: 'necesse', ru: 'необходимо (necesse est)', pos: 'adj', forms: 'indecl.', ex: 'Nāvigāre necesse est, vīvere nōn est necesse.', exRu: 'Плавать необходимо, жить — не необходимо. (Помпей у Плутарха)', note: null }
      ],
      text: null
    },
    {
      id: 'la-u07-l05',
      kind: 'reading',
      title: 'Lectiō: Orgetorīx (Caesar, BG I, 2)',
      goals: ['Читать подлинного Цезаря', 'Находить ablātīvus absolūtus, участие причастий, косвенную речь'],
      skills: ['la.syntax.ablabs', 'la.part', 'la.syntax.aci', 'la.verb.pass.inf'],
      theory: [
        { type: 'p', text: 'Подлинный текст с небольшими сокращениями. *M. Messālā et M. Pīsōne cōnsulibus* — именной ablātīvus absolūtus (датировка: 61 г. до н. э.). *dītissimus* — superl. от dīves «богатый». *ut … exīrent* — придаточное цели с конъюнктивом (юнит 8). *perfacile esse…* — косвенная речь (AcI без вводящего глагола).' }
      ],
      vocab: [
        { id: 'la-apud', w: 'apud', ru: 'у, при, среди', pos: 'prep', forms: 'apud + Acc.', ex: 'apud Helvētiōs', exRu: 'у гельветов', note: 'apud Caesarem — у Цезаря (в доме, в лагере; в сочинении).' },
        { id: 'la-cupiditas', w: 'cupiditās', ru: 'страсть, жажда (+ Gen.)', pos: 'n', g: 'f', forms: 'cupiditās, cupiditātis f.', ex: 'rēgnī cupiditās', exRu: 'жажда царской власти', note: null },
        { id: 'la-regnum', w: 'rēgnum', ru: 'царская власть; царство', pos: 'n', g: 'n', forms: 'rēgnum, -ī n.', ex: 'rēgnum occupāre', exRu: 'захватить царскую власть', note: null },
        { id: 'la-consul', w: 'cōnsul', ru: 'консул', pos: 'n', g: 'm', forms: 'cōnsul, cōnsulis m.', ex: 'Cicerōne cōnsule', exRu: 'в консульство Цицерона', note: null },
        { id: 'la-coniuratio', w: 'coniūrātiō', ru: 'заговор', pos: 'n', g: 'f', forms: 'coniūrātiō, coniūrātiōnis f.', ex: 'coniūrātiōnem facere', exRu: 'составить заговор', note: null },
        { id: 'la-copia', w: 'cōpia', ru: 'изобилие, запас; pl. войска', pos: 'n', g: 'f', forms: 'cōpia, -ae f.', ex: 'cum omnibus cōpiīs', exRu: 'со всеми силами', note: null },
        { id: 'la-imperium', w: 'imperium', ru: 'власть, командование; держава', pos: 'n', g: 'n', forms: 'imperium, -iī n.', ex: 'imperium Rōmānum', exRu: 'Римская держава', note: null },
        { id: 'la-potior', w: 'potior', ru: 'овладевать (+ Abl.)', pos: 'v', forms: 'potior, potīrī, potītus sum', ex: 'imperiō potīrī', exRu: 'овладеть властью', note: 'Отложительный, IV спр.' },
        { id: 'la-praesto', w: 'praestō', ru: 'превосходить (+ Dat.); выказывать', pos: 'v', forms: 'praestō, praestāre, praestitī, praestitum', ex: 'virtūte omnibus praestāre', exRu: 'превосходить всех доблестью', note: null },
        { id: 'la-persuadeo', w: 'persuādeō', ru: 'убеждать (+ Dat.)', pos: 'v', forms: 'persuādeō, persuādēre, persuāsī, persuāsum', ex: 'Cīvitātī persuāsit.', exRu: 'Он убедил граждан.', note: 'persuādēre alicui ut… — уговорить сделать; + AcI — убедить в том, что…' },
        { id: 'la-locus', w: 'locus', ru: 'место; положение', pos: 'n', g: 'm', forms: 'locus, -ī m.; pl. loca, -ōrum n.', ex: 'locī nātūra', exRu: 'природа местности', note: 'Pl. n. loca — местность; m. locī — места в книге.' },
        { id: 'la-natura', w: 'nātūra', ru: 'природа; характер', pos: 'n', g: 'f', forms: 'nātūra, -ae f.', ex: 'nātūrā', exRu: 'от природы', note: null }
      ],
      text: {
        title: 'Orgetorīx (Dē bellō Gallicō I, 2)',
        lines: [
          { t: 'Apud Helvētiōs longē nōbilissimus fuit et dītissimus Orgetorīx.', ru: 'У гельветов самым знатным и богатым был Оргеториг.' },
          { t: 'Is, M. Messālā et M. Pīsōne cōnsulibus, rēgnī cupiditāte inductus coniūrātiōnem nōbilitātis fēcit', ru: 'Он в консульство Марка Мессалы и Марка Пизона, движимый жаждой царской власти, составил заговор знати' },
          { t: 'et cīvitātī persuāsit ut dē fīnibus suīs cum omnibus cōpiīs exīrent:', ru: 'и убедил граждан выселиться из своих пределов со всеми силами:' },
          { t: 'perfacile esse, cum virtūte omnibus praestārent, tōtīus Galliae imperiō potīrī.', ru: 'очень легко, мол, — поскольку они превосходят всех доблестью, — овладеть властью над всей Галлией.' },
          { t: 'Id hōc facilius iīs persuāsit, quod undique locī nātūrā Helvētiī continentur:', ru: 'Убедить их в этом было тем легче, что гельветы со всех сторон стеснены природой местности:' },
          { t: 'ūnā ex parte flūmine Rhēnō lātissimō atque altissimō, quī agrum Helvētium ā Germānīs dīvidit;', ru: 'с одной стороны — широчайшей и глубочайшей рекой Рейном, отделяющей землю гельветов от германцев;' },
          { t: 'alterā ex parte monte Iūrā altissimō, quī est inter Sēquanōs et Helvētiōs;', ru: 'с другой — высочайшим хребтом Юрой, что лежит между секванами и гельветами;' },
          { t: 'tertiā lacū Lemannō et flūmine Rhodanō, quī prōvinciam nostram ab Helvētiīs dīvidit.', ru: 'с третьей — Леманским озером и рекой Роданом, отделяющей нашу провинцию от гельветов.' }
        ]
      }
    }
  ]
};

export default {
  id: 'la-u08',
  title: 'Coniūnctīvus. Gerundium et gerundīvum',
  titleRu: 'Конъюнктив и придаточные. Герундий и герундив',
  summary: 'Формы конъюнктива и его независимые употребления, условные периоды, ut/nē, cum, косвенный вопрос, consecutio temporum, герундий и герундив. Чтение — первое письмо Сенеки к Луцилию.',
  lessons: [
    {
      id: 'la-u08-l01',
      kind: 'grammar',
      title: 'Конъюнктив: формы и независимые употребления',
      goals: ['Образовывать 4 времени конъюнктива в активе и пассиве', 'Распознавать побудительный, желательный, запретительный конъюнктив', 'Строить условные периоды'],
      skills: ['la.subj.forms', 'la.subj.indep', 'la.syntax.cond'],
      theory: [
        { type: 'rule', text: 'Praesēns coniūnctīvī: в I спряжении **-ē-** вместо ā, во всех остальных **-ā-**: laud**e**m, mone**a**m, reg**a**m, capi**a**m, audi**a**m. Imperfectum: **инфинитив praes. + окончания**: laudāre-m, regere-m, esse-m.' },
        { type: 'table', caption: 'Coniūnctīvus āctīvī (3 sg. / 1 sg.)', head: ['Спр.', 'Praes.', 'Impf.', 'Perf.', 'Plpf.'],
          rows: [
            ['I', 'laud{{em}}, laud{{et}}', 'laudā{{rem}}', 'laudāv{{erim}}', 'laudāv{{issem}}'],
            ['II', 'mone{{am}}, mone{{at}}', 'monē{{rem}}', 'monu{{erim}}', 'monu{{issem}}'],
            ['III', 'reg{{am}}, reg{{at}}', 'rege{{rem}}', 'rēx{{erim}}', 'rēx{{issem}}'],
            ['III-iō', 'capi{{am}}, capi{{at}}', 'cape{{rem}}', 'cēp{{erim}}', 'cēp{{issem}}'],
            ['IV', 'audi{{am}}, audi{{at}}', 'audī{{rem}}', 'audīv{{erim}}', 'audīv{{issem}}'],
            ['esse', 'sim, sit', 'essem', 'fuerim', 'fuissem']
          ],
          note: 'Окончания: -m, -s, -t, -mus, -tis, -nt (долгий гласный сокращается перед -m, -t, -nt). Perf.: -erim, -erīs, -erit, -erīmus, -erītis, -erint. Также possim, velim, nōlim, mālim, eam, feram; impf. possem, vellem, īrem, ferrem.' },
        { type: 'table', caption: 'Coniūnctīvus passīvī', head: ['Время', 'Форма'],
          rows: [
            ['Praes.', 'laud{{er}}, laud{{ēris}}, laud{{ētur}}…; reg{{ar}}, reg{{āris}}…'],
            ['Impf.', 'laudāre{{r}}, laudārē{{ris}}…; regere{{r}}…'],
            ['Perf.', 'laudātus sim, sīs, sit…'],
            ['Plpf.', 'laudātus essem, essēs…']
          ] },
        { type: 'pitfall', text: '*laudet* (coni. praes. I) похоже на *monet* (ind. praes. II), а *regam* — и fut. ind., и coni. praes. (1 sg.)! Спряжение — ключ к распознаванию.' },
        { type: 'table', caption: 'Независимый конъюнктив', head: ['Тип', 'Время', 'Пример'],
          rows: [
            ['побудительный (hortātīvus)', 'praes., 1 pl.', 'Gaudeāmus igitur! — Будем же веселиться!'],
            ['повелительный (iussīvus)', 'praes., 3 л.', 'Fīat iūstitia! — Да свершится правосудие!'],
            ['запретительный (prohibitīvus)', 'nē + perf.', 'Nē timueris! — Не бойся!'],
            ['желательный (optātīvus)', 'utinam + praes. (выполнимое) / impf. (невыполнимое сейчас) / plpf. (в прошлом)', 'Utinam veniat! — Хоть бы пришёл! Utinam adesset! — Если бы он был здесь!'],
            ['сомнительный (dubitātīvus)', 'praes. / impf.', 'Quid faciam? — Что мне делать?'],
            ['возможный (potentiālis)', 'praes. / perf.', 'Dīcat aliquis… — Кто-нибудь, пожалуй, скажет…']
          ] },
        { type: 'table', caption: 'Условные периоды', head: ['Тип', 'Формы', 'Пример'],
          rows: [
            ['реальный', 'indicātīvus', 'Sī hoc dīcis, errās. — Если ты так говоришь, ты ошибаешься.'],
            ['возможный', 'coni. praes. (perf.)', 'Sī hoc dīcās, errēs. — Если бы ты сказал так (вдруг), ты ошибся бы.'],
            ['нереальный в настоящем', 'coni. impf.', 'Sī hoc dīcerēs, errārēs. — Если бы ты так говорил (а ты не говоришь)…'],
            ['нереальный в прошлом', 'coni. plpf.', 'Sī tacuissēs, philosophus mānsissēs. — Если бы ты промолчал, остался бы философом.']
          ] },
        { type: 'contrast', text: 'Русское сослагательное «бы» одно на все случаи; латынь различает время нереальности: impf. — «сейчас», plpf. — «тогда». Отрицание при волевом конъюнктиве — **nē**, при прочих — nōn.' },
        { type: 'examples', items: [
          { t: 'Vīv{{āmus}}, mea Lesbia, atque am{{ēmus}}.', ru: 'Будем жить, моя Лесбия, и любить. (Катулл)' },
          { t: 'Utinam pater meus vīver{{et}}!', ru: 'Если бы мой отец был жив!' },
          { t: 'Nē dubitāveris!', ru: 'Не сомневайся!' },
          { t: 'Requiēscat in pāce.', ru: 'Да почиет в мире.' }
        ] }
      ],
      vocab: [
        { id: 'la-utinam', w: 'utinam', ru: 'о если бы, хоть бы', pos: 'part', forms: null, ex: 'Utinam veniat!', exRu: 'Хоть бы он пришёл!', note: 'Отрицание: utinam nē.' },
        { id: 'la-ut', w: 'ut', ru: '(+ coni.) чтобы; так что; (+ ind.) как; когда', pos: 'conj', forms: null, ex: 'Edimus, ut vīvāmus.', exRu: 'Мы едим, чтобы жить.', note: 'Также uti.' },
        { id: 'la-ne', w: 'nē', ru: 'чтобы не; (при глаг. страха) что; не (запрет)', pos: 'conj', forms: null, ex: 'Nē timueris!', exRu: 'Не бойся!', note: 'nē … quidem — даже не.' },
        { id: 'la-licet', w: 'licet', ru: 'можно, позволено (безл.); хотя (+ coni.)', pos: 'v', forms: 'licet, licēre, licuit', ex: 'Licet mihi abīre?', exRu: 'Мне можно уйти?', note: 'Quod licet Iovī, nōn licet bovī.' },
        { id: 'la-dum', w: 'dum', ru: 'пока, в то время как; (+ coni.) лишь бы', pos: 'conj', forms: null, ex: 'Dum spīrō, spērō.', exRu: 'Пока дышу — надеюсь.', note: 'dum «в то время как» + praes. ind. даже о прошлом.' },
        { id: 'la-quamquam', w: 'quamquam', ru: 'хотя', pos: 'conj', forms: null, ex: 'Quamquam fessī erant, pugnāvērunt.', exRu: 'Хотя они устали, они сражались.', note: '+ ind.; ср. quamvīs, cum + coni.' },
        { id: 'la-cum2', w: 'cum', ru: '(союз) когда; так как; хотя', pos: 'conj', forms: null, ex: 'Cum Caesar in Galliā esset…', exRu: 'Когда Цезарь был в Галлии…', note: 'Ср. предлог cum + Abl. «с».' },
        { id: 'la-quia', w: 'quia', ru: 'потому что', pos: 'conj', forms: null, ex: 'Crēdō, quia absurdum est.', exRu: 'Верую, ибо абсурдно.', note: null },
        { id: 'la-valeo', w: 'valeō', ru: 'быть здоровым, сильным; иметь силу', pos: 'v', forms: 'valeō, valēre, valuī, valitūrus', ex: 'Valē!', exRu: 'Будь здоров! Прощай!', note: 'Sī valēs, bene est — эпистолярная формула.' },
        { id: 'la-oro', w: 'ōrō', ru: 'просить, молить; говорить (речь)', pos: 'v', forms: 'ōrō, ōrāre, ōrāvī, ōrātum', ex: 'Ōrā et labōrā.', exRu: 'Молись и трудись.', note: 'ōrāre aliquem ut… — умолять кого-либо.' },
        { id: 'la-denique', w: 'dēnique', ru: 'наконец; одним словом', pos: 'adv', forms: null, ex: 'Dēnique vēnit.', exRu: 'Наконец он пришёл.', note: null },
        { id: 'la-forte', w: 'forte', ru: 'случайно', pos: 'adv', forms: null, ex: 'Forte erat in urbe.', exRu: 'Случайно он был в городе.', note: 'Abl. от fors «случай».' },
        { id: 'la-fortasse', w: 'fortasse', ru: 'возможно, пожалуй', pos: 'adv', forms: null, ex: 'Fortasse veniet.', exRu: 'Возможно, он придёт.', note: null }
      ],
      text: null
    },
    {
      id: 'la-u08-l02',
      kind: 'grammar',
      title: 'Придаточные с ut/nē и cum. Consecutio temporum',
      goals: ['Различать ut fināle, ut cōnsecūtīvum и дополнительное ut', 'Переводить cum historicum, causāle, concessīvum', 'Применять последовательность времён'],
      skills: ['la.syntax.ut', 'la.syntax.cum', 'la.syntax.consec'],
      theory: [
        { type: 'table', head: ['Тип', 'Союз / отрицание', 'Пример'],
          rows: [
            ['цели (fīnāle)', 'ut / nē', 'Venit, ut videat. — Пришёл, чтобы увидеть. Fūgit, nē caperētur. — Бежал, чтобы не попасть в плен.'],
            ['дополнительное (после просьбы, приказа, старания)', 'ut / nē', 'Imperāvit, ut venīrent. — Приказал, чтобы пришли. Cūrā, ut valeās. — Береги здоровье.'],
            ['следствия (cōnsecūtīvum)', 'ut / ut nōn', 'Tam fessus erat, ut dormīret. — Он так устал, что заснул.'],
            ['после глаголов страха', 'nē (что) / ut, nē nōn (что не)', 'Timeō, nē veniat. — Боюсь, что придёт.'],
            ['после nōn dubitō, nōn possum…', 'quīn', 'Nōn dubitō, quīn vērum dīcās. — Не сомневаюсь, что ты прав.']
          ] },
        { type: 'pitfall', text: '*Timeō, nē veniat* — «боюсь, **что** придёт» (а не «чтобы не»). Латинский nē здесь выражает нежелательность, отсюда противоположный русскому смысл.' },
        { type: 'tip', text: 'Следствие узнаётся по сигналу в главном: **tam, ita, sīc, tantus, tālis, adeō** … ut. Отрицание следствия — *ut nōn*, цели — *nē*.' },
        { type: 'table', caption: 'Союз cum + конъюнктив', head: ['Значение', 'Признак', 'Пример'],
          rows: [
            ['historicum («когда»)', 'impf./plpf. coni. в рассказе', 'Cum Caesar in Galliam vēnisset, Helvētiī lēgātōs mīsērunt. — Когда Цезарь прибыл в Галлию…'],
            ['causāle («так как»)', 'по смыслу; часто quae cum ita sint', 'Cum vīta brevis sit, properēmus. — Раз жизнь коротка, поспешим.'],
            ['concessīvum («хотя»)', 'в главном часто tamen', 'Cum dīves sit, tamen nōn est beātus. — Хотя он богат, он не счастлив.']
          ],
          note: 'Cum temporāle (точное время) — с индикативом: *cum vēnit* «когда (в тот момент) он пришёл».' },
        { type: 'rule', text: '**Consecutio temporum**: время конъюнктива в придаточном зависит от времени главного и от отношения действий.' },
        { type: 'table', head: ['Главное', 'Одновременно', 'Раньше', 'Позже'],
          rows: [
            ['первичное: praes., fut., imper.', 'coni. praes.', 'coni. perf.', '-ūrus sim'],
            ['историческое: impf., perf., plpf.', 'coni. impf.', 'coni. plpf.', '-ūrus essem']
          ],
          note: 'Rogō, quid faciās / fēcerīs / factūrus sīs. — Rogāvī, quid facerēs / fēcissēs / factūrus essēs.' },
        { type: 'contrast', text: 'Русский не согласует времена: «Он спросил, что я **делаю**». Латынь обязана сдвинуть: *Rogāvit, quid facerem* (impf.). При переводе на русский возвращаем «естественное» время.' },
        { type: 'examples', items: [
          { t: 'Edimus, ut vīv{{āmus}}, nōn vīvimus, ut ed{{āmus}}.', ru: 'Едим, чтобы жить, а не живём, чтобы есть.' },
          { t: 'Caesar mīlitēs hortātus est, nē timēr{{ent}}.', ru: 'Цезарь ободрил воинов, чтобы они не боялись.' },
          { t: 'Tanta vīs tempestātis fuit, ut nāvēs frang{{erentur}}.', ru: 'Сила бури была так велика, что корабли разбивались.' },
          { t: 'Quae cum ita s{{int}}, Catilīna, perge, quō coepistī.', ru: 'Раз так, Катилина, ступай, куда начал. (Цицерон)' }
        ] }
      ],
      vocab: [
        { id: 'la-impero', w: 'imperō', ru: 'приказывать (+ Dat., ut); повелевать', pos: 'v', forms: 'imperō, imperāre, imperāvī, imperātum', ex: 'Mīlitibus imperāvit, ut pugnārent.', exRu: 'Приказал воинам сражаться.', note: 'Ср. iubeō + AcI.' },
        { id: 'la-rogo', w: 'rogō', ru: 'просить; спрашивать', pos: 'v', forms: 'rogō, rogāre, rogāvī, rogātum', ex: 'Tē rogō, ut veniās.', exRu: 'Прошу тебя прийти.', note: 'Двойной Acc.: rogāre aliquem sententiam.' },
        { id: 'la-postulo', w: 'postulō', ru: 'требовать', pos: 'v', forms: 'postulō, postulāre, postulāvī, postulātum', ex: 'Obsidēs postulāvit.', exRu: 'Он потребовал заложников.', note: null },
        { id: 'la-curo', w: 'cūrō', ru: 'заботиться, позаботиться (ut)', pos: 'v', forms: 'cūrō, cūrāre, cūrāvī, cūrātum', ex: 'Cūrā, ut valeās.', exRu: 'Береги здоровье.', note: '+ gerundīvum: pontem faciendum cūrāvit — велел построить мост.' },
        { id: 'la-efficio', w: 'efficiō', ru: 'производить; добиваться (ut)', pos: 'v', forms: 'efficiō, efficere, effēcī, effectum', ex: 'Effēcit, ut lēx ferrētur.', exRu: 'Он добился, чтобы закон был предложен.', note: null },
        { id: 'la-accido', w: 'accidō', ru: 'случаться (accidit, ut — случилось, что)', pos: 'v', forms: 'accidō, accidere, accidī, —', ex: 'Accidit, ut esset lūna plēna.', exRu: 'Случилось так, что было полнолуние. (Цезарь)', note: 'ad + cadō.' },
        { id: 'la-prohibeo', w: 'prohibeō', ru: 'удерживать, не допускать', pos: 'v', forms: 'prohibeō, prohibēre, prohibuī, prohibitum', ex: 'Hostēs itinere prohibuit.', exRu: 'Он преградил врагам путь.', note: '+ Abl. sēparātiōnis; + inf. / quōminus.' },
        { id: 'la-impedio', w: 'impediō', ru: 'мешать, препятствовать', pos: 'v', forms: 'impediō, impedīre, impedīvī, impedītum', ex: 'Tempestās nōs impedit.', exRu: 'Буря нам мешает.', note: '+ nē / quōminus.' },
        { id: 'la-dubito', w: 'dubitō', ru: 'сомневаться; колебаться (+ inf.)', pos: 'v', forms: 'dubitō, dubitāre, dubitāvī, dubitātum', ex: 'Nōn dubitō, quīn veniat.', exRu: 'Не сомневаюсь, что он придёт.', note: null },
        { id: 'la-quin', w: 'quīn', ru: 'что (после отриц. сомнения); чтобы не', pos: 'conj', forms: null, ex: 'Fierī nōn potest, quīn…', exRu: 'Не может быть, чтобы не…', note: 'quīn etiam — более того.' },
        { id: 'la-adeo', w: 'adeō', ru: 'настолько, до такой степени', pos: 'adv', forms: null, ex: 'adeō fessus, ut…', exRu: 'настолько усталый, что…', note: 'Не путать с глаголом adeō, adīre «подходить».' },
        { id: 'la-ideo', w: 'ideō', ru: 'поэтому, потому', pos: 'adv', forms: null, ex: 'Ideō vēnī, ut tē vidērem.', exRu: 'Я для того пришёл, чтобы тебя увидеть.', note: null }
      ],
      text: null
    },
    {
      id: 'la-u08-l03',
      kind: 'grammar',
      title: 'Косвенный вопрос. Герундий и герундив',
      goals: ['Строить косвенный вопрос с конъюнктивом', 'Склонять герундий и заменять его герундивом', 'Переводить описательное спряжение с dat. auctōris'],
      skills: ['la.syntax.indq', 'la.gerund'],
      theory: [
        { type: 'rule', text: '**Косвенный вопрос**: вопросительное слово + **конъюнктив** по consecutio temporum. «Ли» — *num* или *-ne*; «ли … или» — **utrum … an**, *-ne … an*.' },
        { type: 'examples', items: [
          { t: 'Nesciō, quis s{{īs}}.', ru: 'Не знаю, кто ты.' },
          { t: 'Rogāvit, cūr vēn{{issem}}.', ru: 'Он спросил, почему я пришёл.' },
          { t: 'Quaerō, utrum vērum an falsum s{{it}}.', ru: 'Спрашиваю, правда это или ложь.' },
          { t: 'Dīc mihi, quid factūrus s{{īs}}.', ru: 'Скажи мне, что ты собираешься делать.' }
        ] },
        { type: 'h', text: 'Gerundium' },
        { type: 'table', caption: 'Герундий — отглагольное существительное (n., только sg.)', head: ['Падеж', 'Форма', 'Пример'],
          rows: [
            ['Nom.', '(инфинитив)', 'Legere iuvat. — Читать приятно.'],
            ['Gen.', 'lega{{ndī}}', 'ars legendī — искусство чтения; cupidus legendī'],
            ['Dat.', 'lege{{ndō}}', 'aptus legendō (редко)'],
            ['Acc.', 'ad lege{{ndum}}', 'ad legendum — для чтения, чтобы читать'],
            ['Abl.', 'lege{{ndō}}', 'Legendō discimus. — Читая, учимся.']
          ],
          note: 'Основа praes. + -nd- (I–II: laudandī, monendī; III: legendī; III-iō и IV: capiendī, audiendī).' },
        { type: 'rule', text: '**Gerundīvum** — пассивное отглагольное прилагательное на **-ndus, -a, -um** («тот, который должен быть…»). При дополнении герундий обычно заменяется герундивом, согласованным с этим дополнением: *cupidus urbem videndī* → **cupidus urbis videndae**; *ad pācem petendam*.' },
        { type: 'table', head: ['Цель', 'Конструкция', 'Пример'],
          rows: [
            ['ad + Acc.', 'ad + gerundīvum', 'ad urbem capiendam — чтобы взять город'],
            ['causā + Gen.', 'Gen. + causā (постпоз.)', 'pācis petendae causā — ради того, чтобы просить мира'],
            ['supīnum на -um', 'после глаголов движения', 'Lēgātī vēnērunt pācem petītum. — Послы пришли просить мира.']
          ] },
        { type: 'rule', text: '**Описательное спряжение пассива**: gerundīvum + esse — долженствование; деятель — **Dat. auctōris**: *Carthāgō dēlenda est* «Карфаген должен быть разрушен»; *Mihi legendum est* «Мне надо читать».' },
        { type: 'contrast', text: 'Русское «должен быть разрушен», «мне надо читать» — та же модель: дательный падеж лица + безличное долженствование. *Mihi est scrībendum* ≈ «мне писать».' },
        { type: 'pitfall', text: 'Gerundīvum — не причастие настоящего: *liber legendus* — «книга, которую следует прочесть», а не «читаемая книга». В имени *Amanda* («та, которую следует любить») — тот же герундив.' },
        { type: 'examples', items: [
          { t: 'Docendō discimus.', ru: 'Уча, мы учимся (сами).' },
          { t: 'Caesar pontem faciendum cūrāvit.', ru: 'Цезарь велел построить мост.' },
          { t: 'Nunc est bibendum.', ru: 'Теперь надо пить. (Гораций)' },
          { t: 'Dē gustibus nōn est disputandum.', ru: 'О вкусах не спорят.' }
        ] }
      ],
      vocab: [
        { id: 'la-utrum', w: 'utrum', ru: 'ли (utrum … an — ли … или)', pos: 'conj', forms: null, ex: 'Utrum vīvat an mortuus sit, nesciō.', exRu: 'Жив ли он или умер, не знаю.', note: null },
        { id: 'la-an', w: 'an', ru: 'или (в вопросе); ли', pos: 'conj', forms: null, ex: 'Vērum an falsum?', exRu: 'Правда или ложь?', note: 'haud sciō an — пожалуй.' },
        { id: 'la-gratia', w: 'grātia', ru: 'милость, благодарность; влияние', pos: 'n', g: 'f', forms: 'grātia, -ae f.', ex: 'grātiās agere', exRu: 'благодарить', note: 'Abl. grātiā + Gen. — ради: exemplī grātiā.' },
        { id: 'la-studium', w: 'studium', ru: 'рвение, стремление; занятие', pos: 'n', g: 'n', forms: 'studium, -iī n.', ex: 'studium discendī', exRu: 'стремление учиться', note: null },
        { id: 'la-cupidus', w: 'cupidus', ru: 'жаждущий, желающий (+ Gen.)', pos: 'adj', forms: 'cupidus, -a, -um', ex: 'cupidus rērum novārum', exRu: 'жаждущий переворота', note: null },
        { id: 'la-peritus', w: 'perītus', ru: 'опытный, сведущий (+ Gen.)', pos: 'adj', forms: 'perītus, -a, -um', ex: 'reī mīlitāris perītus', exRu: 'сведущий в военном деле', note: null },
        { id: 'la-facultas', w: 'facultās', ru: 'возможность; способность; pl. средства', pos: 'n', g: 'f', forms: 'facultās, facultātis f.', ex: 'facultās fugiendī', exRu: 'возможность бежать', note: null },
        { id: 'la-occasio', w: 'occāsiō', ru: 'удобный случай', pos: 'n', g: 'f', forms: 'occāsiō, occāsiōnis f.', ex: 'occāsiōnem pugnandī dare', exRu: 'дать повод к сражению', note: null },
        { id: 'la-potestas', w: 'potestās', ru: 'власть; возможность', pos: 'n', g: 'f', forms: 'potestās, potestātis f.', ex: 'potestātem facere', exRu: 'предоставить возможность', note: null },
        { id: 'la-oratio', w: 'ōrātiō', ru: 'речь; способ выражения', pos: 'n', g: 'f', forms: 'ōrātiō, ōrātiōnis f.', ex: 'ōrātiōnem habēre', exRu: 'произнести речь', note: 'ōrātiō oblīqua — косвенная речь.' },
        { id: 'la-legatus', w: 'lēgātus', ru: 'посол; легат (заместитель полководца)', pos: 'n', g: 'm', forms: 'lēgātus, -ī m.', ex: 'lēgātōs mittere', exRu: 'отправить послов', note: null },
        { id: 'la-pareo', w: 'pāreō', ru: 'повиноваться (+ Dat.)', pos: 'v', forms: 'pāreō, pārēre, pāruī, —', ex: 'Lēgibus pārēre', exRu: 'повиноваться законам', note: 'Ср. parō, parāre «готовить».' }
      ],
      text: null
    },
    {
      id: 'la-u08-l04',
      kind: 'reading',
      title: 'Lectiō: Seneca Lūcīliō suō salūtem',
      goals: ['Читать подлинную прозу Сенеки', 'Находить конъюнктив в относительных и следственных придаточных'],
      skills: ['la.subj.forms', 'la.syntax.ut', 'la.verb.fut2', 'la.verb.dep'],
      theory: [
        { type: 'p', text: 'Сенека, «Нравственные письма к Луцилию», 1, 1–3 (подлинный текст, с сокращениями). *quī … pōnat, aestimet, intellegat* — относительные придаточные с конъюнктивом (характеристика: «такого, кто бы…»). *complectere* — imper. от отложительного complector. *fiet ut … pendeās* — придаточное следствия; *iniēceris* — futurum II.' },
        { type: 'tip', text: '*vindicā tē tibi* — юридическая метафора: «заяви на себя права владельца», то есть «освободи себя для себя».' }
      ],
      vocab: [
        { id: 'la-vindico', w: 'vindicō', ru: 'заявлять права; освобождать; карать', pos: 'v', forms: 'vindicō, vindicāre, vindicāvī, vindicātum', ex: 'Vindicā tē tibi.', exRu: 'Освободи себя для себя.', note: null },
        { id: 'la-eripio', w: 'ēripiō', ru: 'вырывать, отнимать', pos: 'v', forms: 'ēripiō, ēripere, ēripuī, ēreptum', ex: 'Tempora ēripiuntur nōbīs.', exRu: 'Время у нас отнимают.', note: 'III-iō: ē + rapiō.' },
        { id: 'la-iactura', w: 'iactūra', ru: 'потеря, ущерб', pos: 'n', g: 'f', forms: 'iactūra, -ae f.', ex: 'turpissima iactūra', exRu: 'позорнейшая потеря', note: 'Букв. «выбрасывание (груза за борт)».' },
        { id: 'la-neglegentia', w: 'neglegentia', ru: 'небрежность', pos: 'n', g: 'f', forms: 'neglegentia, -ae f.', ex: 'per neglegentiam', exRu: 'по небрежности', note: null },
        { id: 'la-pretium', w: 'pretium', ru: 'цена; награда', pos: 'n', g: 'n', forms: 'pretium, -iī n.', ex: 'pretium pōnere', exRu: 'назначить цену', note: null },
        { id: 'la-aestimo', w: 'aestimō', ru: 'оценивать, ценить', pos: 'v', forms: 'aestimō, aestimāre, aestimāvī, aestimātum', ex: 'Diem aestimat.', exRu: 'Он ценит день.', note: 'magnī aestimāre — высоко ценить (Gen. pretiī).' },
        { id: 'la-cotidie', w: 'cotīdiē', ru: 'ежедневно', pos: 'adv', forms: null, ex: 'Cotīdiē morimur.', exRu: 'Мы умираем каждый день.', note: 'Также cottīdiē.' },
        { id: 'la-fallo', w: 'fallō', ru: 'обманывать; pass. ошибаться', pos: 'v', forms: 'fallō, fallere, fefellī, falsum', ex: 'In hōc fallimur.', exRu: 'В этом мы ошибаемся.', note: null },
        { id: 'la-aetas', w: 'aetās', ru: 'возраст; век, эпоха', pos: 'n', g: 'f', forms: 'aetās, aetātis f.', ex: 'aurea aetās', exRu: 'золотой век', note: null },
        { id: 'la-hora', w: 'hōra', ru: 'час', pos: 'n', g: 'f', forms: 'hōra, -ae f.', ex: 'omnēs hōrās', exRu: 'все часы', note: null },
        { id: 'la-complector', w: 'complector', ru: 'обнимать, охватывать', pos: 'v', forms: 'complector, complectī, complexus sum', ex: 'Omnēs hōrās complectere.', exRu: 'Держи в руках каждый час.', note: 'Отложительный.' },
        { id: 'la-pendeo', w: 'pendeō', ru: 'висеть; зависеть (ex + Abl.)', pos: 'v', forms: 'pendeō, pendēre, pependī, —', ex: 'ex crāstinō pendēre', exRu: 'зависеть от завтрашнего дня', note: null },
        { id: 'la-hodie', w: 'hodiē', ru: 'сегодня', pos: 'adv', forms: null, ex: 'Hodiē, nōn crās.', exRu: 'Сегодня, а не завтра.', note: 'Прил. hodiernus «сегодняшний», crāstinus «завтрашний».' },
        { id: 'la-ergo', w: 'ergō', ru: 'итак, следовательно', pos: 'conj', forms: null, ex: 'Cōgitō, ergō sum.', exRu: 'Мыслю, следовательно, существую. (Декарт)', note: null }
      ],
      text: {
        title: 'Seneca, Epistulae mōrālēs 1, 1–3',
        lines: [
          { t: 'Ita fac, mī Lūcīlī: vindicā tē tibi, et tempus quod adhūc aut auferēbātur aut subripiēbātur aut excidēbat collige et servā.', ru: 'Так и поступай, мой Луцилий: отвоюй себя для себя самого и береги и копи время, которое прежде у тебя отнимали, или похищали, или которое попусту ускользало.' },
          { t: 'Persuādē tibi hoc sīc esse ut scrībō: quaedam tempora ēripiuntur nōbīs, quaedam subdūcuntur, quaedam effluunt.', ru: 'Убеди себя, что всё так, как я пишу: часть времени у нас отбирают, часть похищают, часть утекает сама.' },
          { t: 'Turpissima tamen est iactūra quae per neglegentiam fit.', ru: 'Но позорнее всего потеря по нашей собственной небрежности.' },
          { t: 'Quem mihi dabis quī aliquod pretium temporī pōnat, quī diem aestimet, quī intellegat sē cotīdiē morī?', ru: 'Назовёшь ли ты мне такого, кто ценил бы время, кто знал бы цену дню, кто понимал бы, что умирает каждый день?' },
          { t: 'In hōc enim fallimur, quod mortem prōspicimus: magna pars eius iam praeteriit; quidquid aetātis retrō est, mors tenet.', ru: 'В том-то и беда наша, что смерть мы видим впереди; а большая её часть уже позади: сколько лет жизни минуло, все принадлежат смерти.' },
          { t: 'Fac ergō, mī Lūcīlī, quod facere tē scrībis: omnēs hōrās complectere.', ru: 'Поступай же так, мой Луцилий, как ты мне пишешь: держи в руках каждый час.' },
          { t: 'Sīc fiet ut minus ex crāstinō pendeās, sī hodiernō manum iniēceris.', ru: 'Так выйдет, что ты меньше будешь зависеть от завтрашнего дня, если наложишь руку на сегодняшний.' },
          { t: 'Dum differtur, vīta trānsit.', ru: 'Пока жизнь откладывают, она проходит.' }
        ]
      }
    }
  ]
};

export default {
  id: 'la-u01',
  title: 'Prīma et secunda dēclīnātiō. Praesēns',
  titleRu: '1-е и 2-е склонения. Настоящее время',
  summary: 'Долготы и ударение, система падежей, 1-е и 2-е склонения, прилагательные 1–2 склонения, praesens 1–2 спряжений и глагол esse.',
  lessons: [
    {
      id: 'la-u01-l01',
      kind: 'grammar',
      title: 'Долготы, ударение, падежи. 1-е склонение',
      goals: ['Читать с правильным ударением', 'Помнить функции шести падежей', 'Склонять существительные 1-го склонения'],
      skills: ['la.phon.stress', 'la.case.functions', 'la.noun.decl1'],
      theory: [
        { type: 'h', text: 'Долготы и ударение' },
        { type: 'p', text: 'Макрон (ā, ē, ī, ō, ū, ȳ) обозначает гласный, долгий **по природе**. Долгота различает формы: ros{{a}} (Nom.) — ros{{ā}} (Abl.), *legit* «читает» — *lēgit* «прочитал», *venit* «приходит» — *vēnit* «пришёл». Долготу «по положению» (гласный перед двумя согласными) макроном не отмечаем.' },
        { type: 'rule', text: 'Ударение: в двусложных словах — на первом слоге; в многосложных — на **предпоследнем**, если он долгий (по природе или по положению), иначе — на **третьем от конца**: a-**mī**-cus, pu-**el**-la, **do**-mi-nus, **pa**-tri-a.' },
        { type: 'tip', text: 'Энклитики -que, -ne, -ve переносят ударение на слог перед собой: pu-**er**-que, po-pu-**lus**-que.' },
        { type: 'h', text: 'Падежи' },
        { type: 'table', head: ['Падеж', 'Вопрос', 'Главные функции'],
          rows: [
            ['Nominātīvus', 'кто? что?', 'подлежащее, именная часть сказуемого'],
            ['Genetīvus', 'кого? чего?', 'принадлежность, часть целого, определение'],
            ['Datīvus', 'кому? чему?', 'адресат, интерес («для кого»)'],
            ['Accūsātīvus', 'кого? что? куда?', 'прямое дополнение, направление (с предлогами), протяжённость'],
            ['Ablātīvus', 'чем? где? когда? откуда?', 'средство, образ действия, место и время, отделение'],
            ['Vocātīvus', '—', 'обращение']
          ] },
        { type: 'contrast', text: 'Как в русском: падежи, нет артикля, свободный порядок слов. Отличие: латинский **аблатив** совмещает функции трёх древних падежей — творительного (чем?), местного (где?) и отложительного (откуда?).' },
        { type: 'h', text: '1-е склонение (основа на -ā)' },
        { type: 'table', caption: 'rosa, -ae f. — роза', head: ['Падеж', 'Sg.', 'Pl.'],
          rows: [
            ['Nom.', 'ros{{a}}', 'ros{{ae}}'],
            ['Gen.', 'ros{{ae}}', 'ros{{ārum}}'],
            ['Dat.', 'ros{{ae}}', 'ros{{īs}}'],
            ['Acc.', 'ros{{am}}', 'ros{{ās}}'],
            ['Abl.', 'ros{{ā}}', 'ros{{īs}}'],
            ['Voc.', 'ros{{a}}', 'ros{{ae}}']
          ],
          note: 'Словарная форма: Nom. sg. + окончание Gen. sg. + род. Окончание Gen. sg. **-ae** — признак 1-го склонения.' },
        { type: 'p', text: 'Почти все слова 1-го склонения — женского рода. Мужского — названия лиц мужского пола: *nauta* «моряк», *poēta* «поэт», *agricola* «земледелец», *scrība* «писец».' },
        { type: 'pitfall', text: '**-ae** = Gen. sg., Dat. sg. и Nom. pl.; **-īs** = Dat. и Abl. pl. Решает контекст и согласование. Nom. *-a* и Abl. *-ā* различаются только долготой.' },
        { type: 'examples', items: [
          { t: 'Glōria patri{{ae}}', ru: 'слава родины' },
          { t: 'Fīlia naut{{ae}} poēt{{ae}} rosās dat.', ru: 'Дочь моряка даёт поэту розы.', note: 'nautae — Gen., poētae — Dat.: порядок слов подсказывает, но решают глагол и смысл' },
          { t: 'Vīta fēmin{{ārum}}', ru: 'жизнь женщин' }
        ] }
      ],
      vocab: [
        { id: 'la-puella', w: 'puella', ru: 'девочка, девушка', pos: 'n', g: 'f', forms: 'puella, -ae f.', ex: 'Puella rosam portat.', exRu: 'Девочка несёт розу.', note: null },
        { id: 'la-femina', w: 'fēmina', ru: 'женщина', pos: 'n', g: 'f', forms: 'fēmina, -ae f.', ex: 'vīta fēminae', exRu: 'жизнь женщины', note: null },
        { id: 'la-filia', w: 'fīlia', ru: 'дочь', pos: 'n', g: 'f', forms: 'fīlia, -ae f.', ex: 'fīlia nautae', exRu: 'дочь моряка', note: 'Dat./Abl. pl. часто fīliābus (для отличия от fīliīs «сыновьям»).' },
        { id: 'la-terra', w: 'terra', ru: 'земля, страна', pos: 'n', g: 'f', forms: 'terra, -ae f.', ex: 'terra et aqua', exRu: 'земля и вода', note: null },
        { id: 'la-aqua', w: 'aqua', ru: 'вода', pos: 'n', g: 'f', forms: 'aqua, -ae f.', ex: 'aquam dare', exRu: 'дать воды', note: null },
        { id: 'la-via', w: 'via', ru: 'дорога, путь', pos: 'n', g: 'f', forms: 'via, -ae f.', ex: 'Via Appia', exRu: 'Аппиева дорога', note: null },
        { id: 'la-vita', w: 'vīta', ru: 'жизнь', pos: 'n', g: 'f', forms: 'vīta, -ae f.', ex: 'vīta poētae', exRu: 'жизнь поэта', note: null },
        { id: 'la-patria', w: 'patria', ru: 'родина, отечество', pos: 'n', g: 'f', forms: 'patria, -ae f.', ex: 'glōria patriae', exRu: 'слава отечества', note: 'Ударение: **pa**-tri-a (краткий предпоследний).' },
        { id: 'la-fortuna', w: 'fortūna', ru: 'судьба, удача; pl. имущество', pos: 'n', g: 'f', forms: 'fortūna, -ae f.', ex: 'Fortūna vitrea est.', exRu: 'Удача стеклянна (хрупка).', note: null },
        { id: 'la-gloria', w: 'glōria', ru: 'слава', pos: 'n', g: 'f', forms: 'glōria, -ae f.', ex: 'glōria poētārum', exRu: 'слава поэтов', note: null },
        { id: 'la-causa', w: 'causa', ru: 'причина; дело (судебное)', pos: 'n', g: 'f', forms: 'causa, -ae f.', ex: 'causa īrae', exRu: 'причина гнева', note: 'Abl. causā + Gen. — «ради»: honōris causā.' },
        { id: 'la-ira', w: 'īra', ru: 'гнев', pos: 'n', g: 'f', forms: 'īra, -ae f.', ex: 'īra fēminae', exRu: 'гнев женщины', note: null },
        { id: 'la-insula', w: 'īnsula', ru: 'остров', pos: 'n', g: 'f', forms: 'īnsula, -ae f.', ex: 'nautae īnsulae', exRu: 'моряки острова', note: null },
        { id: 'la-nauta', w: 'nauta', ru: 'моряк', pos: 'n', g: 'm', forms: 'nauta, -ae m.', ex: 'fīlia nautae', exRu: 'дочь моряка', note: 'Мужской род в 1-м склонении.' },
        { id: 'la-poeta', w: 'poēta', ru: 'поэт', pos: 'n', g: 'm', forms: 'poēta, -ae m.', ex: 'glōria poētae', exRu: 'слава поэта', note: null },
        { id: 'la-et', w: 'et', ru: 'и; даже', pos: 'conj', forms: null, ex: 'terra et aqua', exRu: 'земля и вода', note: 'et … et — и … и.' }
      ],
      text: null
    },
    {
      id: 'la-u01-l02',
      kind: 'grammar',
      title: '2-е склонение',
      goals: ['Склонять существительные на -us, -er, -um', 'Помнить правило среднего рода', 'Знать особые формы: fīlī, deus, vir'],
      skills: ['la.noun.decl2'],
      theory: [
        { type: 'rule', text: '2-е склонение: Gen. sg. **-ī**. Мужской род на -us и -er, средний — на -um.' },
        { type: 'table', head: ['Падеж', 'dominus m.', 'puer m.', 'ager m.', 'bellum n.'],
          rows: [
            ['Nom. sg.', 'domin{{us}}', 'puer', 'ager', 'bell{{um}}'],
            ['Gen.', 'domin{{ī}}', 'puer{{ī}}', 'agr{{ī}}', 'bell{{ī}}'],
            ['Dat.', 'domin{{ō}}', 'puer{{ō}}', 'agr{{ō}}', 'bell{{ō}}'],
            ['Acc.', 'domin{{um}}', 'puer{{um}}', 'agr{{um}}', 'bell{{um}}'],
            ['Abl.', 'domin{{ō}}', 'puer{{ō}}', 'agr{{ō}}', 'bell{{ō}}'],
            ['Voc.', 'domin{{e}}', 'puer', 'ager', 'bell{{um}}'],
            ['Nom. pl.', 'domin{{ī}}', 'puer{{ī}}', 'agr{{ī}}', 'bell{{a}}'],
            ['Gen.', 'domin{{ōrum}}', 'puer{{ōrum}}', 'agr{{ōrum}}', 'bell{{ōrum}}'],
            ['Dat./Abl.', 'domin{{īs}}', 'puer{{īs}}', 'agr{{īs}}', 'bell{{īs}}'],
            ['Acc.', 'domin{{ōs}}', 'puer{{ōs}}', 'agr{{ōs}}', 'bell{{a}}']
          ],
          note: 'Основу -er-слов смотри по Gen.: puer, puer-ī (e сохраняется), но ager, agr-ī; liber, libr-ī.' },
        { type: 'rule', text: 'Правило среднего рода (для всех склонений): Nom. = Acc. = Voc.; во мн. ч. они оканчиваются на **-a**.' },
        { type: 'p', text: 'Особые формы: *fīlius* — Voc. **fīlī**, Gen. fīliī/fīlī (так же имена на -ius: *Vergilī!*); *deus* — Voc. deus, Nom. pl. **dī** (deī), Dat./Abl. pl. **dīs** (deīs); *vir, virī* — «муж», склоняется как puer.' },
        { type: 'pitfall', text: '**-ī** — это Gen. sg. и Nom. pl. мужского рода; **-a** у среднего рода — Nom./Acc. pl., а не 1-е склонение: *bella* «войны», *dōna* «дары».' },
        { type: 'contrast', text: 'Русское «окно — окна» тоже различает Nom. sg./pl. окончаниями -о/-а: латинское bellum — bella устроено так же; средний род в обоих языках не различает Nom. и Acc.' },
        { type: 'examples', items: [
          { t: 'Domin{{us}} serv{{ō}} dōn{{um}} dat.', ru: 'Господин даёт рабу подарок.' },
          { t: 'Verb{{a}} amīc{{ōrum}}', ru: 'слова друзей' },
          { t: 'Et tū, Brūte?', ru: 'И ты, Брут?', note: 'Voc. на -e' }
        ] }
      ],
      vocab: [
        { id: 'la-dominus', w: 'dominus', ru: 'господин, хозяин', pos: 'n', g: 'm', forms: 'dominus, -ī m.', ex: 'servus dominī', exRu: 'раб господина', note: null },
        { id: 'la-servus', w: 'servus', ru: 'раб', pos: 'n', g: 'm', forms: 'servus, -ī m.', ex: 'servī et dominī', exRu: 'рабы и господа', note: null },
        { id: 'la-amicus', w: 'amīcus', ru: 'друг', pos: 'n', g: 'm', forms: 'amīcus, -ī m.', ex: 'amīcus poētae', exRu: 'друг поэта', note: 'Также прил. amīcus, -a, -um «дружественный».' },
        { id: 'la-populus', w: 'populus', ru: 'народ', pos: 'n', g: 'm', forms: 'populus, -ī m.', ex: 'senātus populusque Rōmānus', exRu: 'сенат и народ римский', note: 'Не путать с pōpulus, -ī f. «тополь».' },
        { id: 'la-animus', w: 'animus', ru: 'дух, душа, ум; намерение', pos: 'n', g: 'm', forms: 'animus, -ī m.', ex: 'animus virī', exRu: 'дух мужа', note: null },
        { id: 'la-deus', w: 'deus', ru: 'бог', pos: 'n', g: 'm', forms: 'deus, -ī m.', ex: 'dōna deōrum', exRu: 'дары богов', note: 'Nom. pl. dī (deī), Dat./Abl. pl. dīs (deīs), Voc. sg. deus.' },
        { id: 'la-vir', w: 'vir', ru: 'муж, мужчина', pos: 'n', g: 'm', forms: 'vir, virī m.', ex: 'virī et fēminae', exRu: 'мужчины и женщины', note: null },
        { id: 'la-puer', w: 'puer', ru: 'мальчик', pos: 'n', g: 'm', forms: 'puer, puerī m.', ex: 'puerī et puellae', exRu: 'мальчики и девочки', note: 'e сохраняется: puer-ī.' },
        { id: 'la-ager', w: 'ager', ru: 'поле; pl. земли, владения', pos: 'n', g: 'm', forms: 'ager, agrī m.', ex: 'agrī Rōmānōrum', exRu: 'земли римлян', note: 'e выпадает: agr-ī.' },
        { id: 'la-liber', w: 'liber', ru: 'книга', pos: 'n', g: 'm', forms: 'liber, librī m.', ex: 'librī poētae', exRu: 'книги поэта', note: 'Краткое i; ср. līber, -era, -erum «свободный».' },
        { id: 'la-filius', w: 'fīlius', ru: 'сын', pos: 'n', g: 'm', forms: 'fīlius, -iī m.', ex: 'fīlius dominī', exRu: 'сын господина', note: 'Voc. fīlī; Gen. sg. fīliī (fīlī).' },
        { id: 'la-bellum', w: 'bellum', ru: 'война', pos: 'n', g: 'n', forms: 'bellum, -ī n.', ex: 'bellum gerere', exRu: 'вести войну', note: null },
        { id: 'la-verbum', w: 'verbum', ru: 'слово', pos: 'n', g: 'n', forms: 'verbum, -ī n.', ex: 'verba amīcī', exRu: 'слова друга', note: null },
        { id: 'la-donum', w: 'dōnum', ru: 'дар, подарок', pos: 'n', g: 'n', forms: 'dōnum, -ī n.', ex: 'dōna deōrum', exRu: 'дары богов', note: null },
        { id: 'la-oppidum', w: 'oppidum', ru: 'город (укреплённый)', pos: 'n', g: 'n', forms: 'oppidum, -ī n.', ex: 'oppidum Gallōrum', exRu: 'город галлов', note: null },
        { id: 'la-consilium', w: 'cōnsilium', ru: 'совет, замысел, план', pos: 'n', g: 'n', forms: 'cōnsilium, -iī n.', ex: 'cōnsilium dominī', exRu: 'замысел господина', note: null }
      ],
      text: null
    },
    {
      id: 'la-u01-l03',
      kind: 'grammar',
      title: 'Praesens 1–2 спряжений. Глагол esse',
      goals: ['Спрягать глаголы на -āre и -ēre в praesens', 'Спрягать sum', 'Читать словарную статью глагола'],
      skills: ['la.verb.praes12', 'la.verb.esse'],
      theory: [
        { type: 'rule', text: 'Словарь даёт 4 основные формы: 1 sg. praes., инфинитив, 1 sg. perf., супин: *laudō, laudāre, laudāvī, laudātum*. Спряжение определяется по **инфинитиву**: -āre (I), -ēre (II), -ere (III), -īre (IV).' },
        { type: 'table', caption: 'Praesens indicātīvī āctīvī', head: ['Лицо', 'I: laudāre', 'II: monēre', 'esse'],
          rows: [
            ['1 sg.', 'laud{{ō}}', 'mone{{ō}}', 'sum'],
            ['2 sg.', 'laudā{{s}}', 'monē{{s}}', 'es'],
            ['3 sg.', 'lauda{{t}}', 'mone{{t}}', 'est'],
            ['1 pl.', 'laudā{{mus}}', 'monē{{mus}}', 'sumus'],
            ['2 pl.', 'laudā{{tis}}', 'monē{{tis}}', 'estis'],
            ['3 pl.', 'lauda{{nt}}', 'mone{{nt}}', 'sunt']
          ],
          note: 'Личные окончания: -ō/-m, -s, -t, -mus, -tis, -nt. В I спр. ā сливается с ō: *lauda-ō → laudō*.' },
        { type: 'pitfall', text: 'Долгий гласный сокращается перед конечными **-m, -t, -nt, -r** и перед другим гласным: laud**ā**s, но laud**a**t, laud**a**nt; mon**ē**s, но mon**e**ō, mon**e**t.' },
        { type: 'p', text: 'Отрицание *nōn* ставится перед глаголом. Глагол обычно стоит в конце предложения; личное местоимение-подлежащее опускается: *Laudō* «хвалю».' },
        { type: 'contrast', text: 'Как в русском, местоимение-подлежащее избыточно (окончание и так показывает лицо). В отличие от русского, связка *esse* в настоящем времени обязательна: *Vīta brevis est* — «Жизнь (есть) коротка».' },
        { type: 'tip', text: '*dō, dare* — исключение: краткое a везде, кроме dās и dā: *damus, datis, dare*.' },
        { type: 'examples', items: [
          { t: 'Servī dominum timent.', ru: 'Рабы боятся господина.' },
          { t: 'Poētam laudāmus.', ru: 'Мы хвалим поэта.' },
          { t: 'Nōn vidētis?', ru: 'Разве вы не видите? / Вы не видите?' },
          { t: 'Amīcī sumus.', ru: 'Мы друзья.' }
        ] }
      ],
      vocab: [
        { id: 'la-sum', w: 'sum', ru: 'быть, существовать', pos: 'v', forms: 'sum, esse, fuī, futūrus', ex: 'Amīcus sum.', exRu: 'Я друг.', note: 'Супина нет; fut. part. futūrus.' },
        { id: 'la-laudo', w: 'laudō', ru: 'хвалить', pos: 'v', forms: 'laudō, laudāre, laudāvī, laudātum', ex: 'Poētam laudant.', exRu: 'Они хвалят поэта.', note: null },
        { id: 'la-amo', w: 'amō', ru: 'любить', pos: 'v', forms: 'amō, amāre, amāvī, amātum', ex: 'Patriam amāmus.', exRu: 'Мы любим родину.', note: null },
        { id: 'la-voco', w: 'vocō', ru: 'звать, называть', pos: 'v', forms: 'vocō, vocāre, vocāvī, vocātum', ex: 'Dominus servum vocat.', exRu: 'Господин зовёт раба.', note: null },
        { id: 'la-do', w: 'dō', ru: 'давать', pos: 'v', forms: 'dō, dare, dedī, datum', ex: 'Dōna damus.', exRu: 'Мы даём подарки.', note: 'Краткое a: damus, datis, dare (но dās, dā).' },
        { id: 'la-sto', w: 'stō', ru: 'стоять', pos: 'v', forms: 'stō, stāre, stetī, statum', ex: 'In viā stat.', exRu: 'Стоит на дороге.', note: null },
        { id: 'la-video', w: 'videō', ru: 'видеть', pos: 'v', forms: 'videō, vidēre, vīdī, vīsum', ex: 'Īnsulam vidēmus.', exRu: 'Мы видим остров.', note: 'Passīvum videor — «кажусь».' },
        { id: 'la-habeo', w: 'habeō', ru: 'иметь, держать; считать', pos: 'v', forms: 'habeō, habēre, habuī, habitum', ex: 'Agrōs habet.', exRu: 'У него есть поля.', note: null },
        { id: 'la-moneo', w: 'moneō', ru: 'напоминать, предостерегать, советовать', pos: 'v', forms: 'moneō, monēre, monuī, monitum', ex: 'Amīcus mē monet.', exRu: 'Друг меня предостерегает.', note: null },
        { id: 'la-teneo', w: 'teneō', ru: 'держать, удерживать', pos: 'v', forms: 'teneō, tenēre, tenuī, tentum', ex: 'Librum teneō.', exRu: 'Я держу книгу.', note: null },
        { id: 'la-timeo', w: 'timeō', ru: 'бояться', pos: 'v', forms: 'timeō, timēre, timuī, —', ex: 'Īram deōrum timent.', exRu: 'Боятся гнева богов.', note: null },
        { id: 'la-debeo', w: 'dēbeō', ru: 'быть должным, быть обязанным', pos: 'v', forms: 'dēbeō, dēbēre, dēbuī, dēbitum', ex: 'Pecūniam dēbeō.', exRu: 'Я должен деньги.', note: '+ inf.: dēbeō labōrāre — я должен работать.' },
        { id: 'la-non', w: 'nōn', ru: 'не', pos: 'adv', forms: null, ex: 'Nōn timeō.', exRu: 'Не боюсь.', note: null },
        { id: 'la-sed', w: 'sed', ru: 'но, а', pos: 'conj', forms: null, ex: 'Nōn servus sed dominus.', exRu: 'Не раб, а господин.', note: null },
        { id: 'la-que', w: '-que', ru: 'и (энклитика)', pos: 'conj', forms: null, ex: 'senātus populusque', exRu: 'сенат и народ', note: 'Присоединяется ко второму слову: A Bque = A et B.' }
      ],
      text: null
    },
    {
      id: 'la-u01-l04',
      kind: 'grammar',
      title: 'Прилагательные 1–2 склонения',
      goals: ['Согласовывать прилагательное с существительным в роде, числе и падеже', 'Склонять прилагательные на -us и -er'],
      skills: ['la.adj.12'],
      theory: [
        { type: 'rule', text: 'Прилагательное согласуется с существительным в **роде, числе и падеже**, но не обязательно в окончании: *nauta bonus*, *agricola Rōmānus*.' },
        { type: 'table', caption: 'bonus, -a, -um', head: ['Падеж', 'm.', 'f.', 'n.'],
          rows: [
            ['Nom. sg.', 'bon{{us}}', 'bon{{a}}', 'bon{{um}}'],
            ['Gen.', 'bon{{ī}}', 'bon{{ae}}', 'bon{{ī}}'],
            ['Dat.', 'bon{{ō}}', 'bon{{ae}}', 'bon{{ō}}'],
            ['Acc.', 'bon{{um}}', 'bon{{am}}', 'bon{{um}}'],
            ['Abl.', 'bon{{ō}}', 'bon{{ā}}', 'bon{{ō}}'],
            ['Nom. pl.', 'bon{{ī}}', 'bon{{ae}}', 'bon{{a}}'],
            ['Gen.', 'bon{{ōrum}}', 'bon{{ārum}}', 'bon{{ōrum}}'],
            ['Dat./Abl.', 'bon{{īs}}', 'bon{{īs}}', 'bon{{īs}}'],
            ['Acc.', 'bon{{ōs}}', 'bon{{ās}}', 'bon{{a}}']
          ],
          note: 'Voc. m. sg.: bone.' },
        { type: 'p', text: 'Прилагательные на -er: одни сохраняют e (*līber, lībera, līberum; miser, misera, miserum*), другие теряют (*pulcher, pulchra, pulchrum; noster, nostra, nostrum*). Подсказка — форма женского рода в словаре.' },
        { type: 'pitfall', text: '*nauta bonus*, не *nauta bona*: окончание прилагательного определяется **родом** существительного, а не его склонением.' },
        { type: 'contrast', text: 'Как в русском: «старый слуга», «храбрый юноша» — прилагательное мужского рода при существительном на -а. Латынь ведёт себя так же: *poēta clārus*.' },
        { type: 'tip', text: 'Прилагательное часто стоит после существительного; препозиция подчёркивает признак: *magnum bellum* «большая (!) война».' },
        { type: 'examples', items: [
          { t: 'Poēta clār{{us}} est.', ru: 'Поэт знаменит.' },
          { t: 'Agrī lāt{{ī}} et pulchr{{ī}} sunt.', ru: 'Поля широки и прекрасны.' },
          { t: 'Populus Rōmān{{us}} bell{{a}} magn{{a}} gerit.', ru: 'Римский народ ведёт большие войны.' },
          { t: 'Patria nostr{{a}} lībera est.', ru: 'Наша родина свободна.' }
        ] }
      ],
      vocab: [
        { id: 'la-bonus', w: 'bonus', ru: 'хороший, добрый', pos: 'adj', forms: 'bonus, -a, -um', ex: 'vir bonus', exRu: 'хороший человек', note: 'Степени: melior, optimus.' },
        { id: 'la-malus', w: 'malus', ru: 'плохой, злой', pos: 'adj', forms: 'malus, -a, -um', ex: 'servus malus', exRu: 'дурной раб', note: 'Степени: peior, pessimus.' },
        { id: 'la-magnus', w: 'magnus', ru: 'большой, великий', pos: 'adj', forms: 'magnus, -a, -um', ex: 'magnum bellum', exRu: 'большая война', note: 'Степени: maior, maximus.' },
        { id: 'la-parvus', w: 'parvus', ru: 'малый, маленький', pos: 'adj', forms: 'parvus, -a, -um', ex: 'parva īnsula', exRu: 'маленький остров', note: 'Степени: minor, minimus.' },
        { id: 'la-multus', w: 'multus', ru: 'многий; pl. многие', pos: 'adj', forms: 'multus, -a, -um', ex: 'multī virī', exRu: 'многие мужи', note: 'Степени: plūs, plūrimus.' },
        { id: 'la-novus', w: 'novus', ru: 'новый', pos: 'adj', forms: 'novus, -a, -um', ex: 'liber novus', exRu: 'новая книга', note: null },
        { id: 'la-longus', w: 'longus', ru: 'длинный, долгий', pos: 'adj', forms: 'longus, -a, -um', ex: 'via longa', exRu: 'долгий путь', note: null },
        { id: 'la-latus', w: 'lātus', ru: 'широкий', pos: 'adj', forms: 'lātus, -a, -um', ex: 'agrī lātī', exRu: 'широкие поля', note: 'Не путать с latus, -eris n. «бок, сторона» и lātus — part. от ferō.' },
        { id: 'la-altus', w: 'altus', ru: 'высокий; глубокий', pos: 'adj', forms: 'altus, -a, -um', ex: 'aqua alta', exRu: 'глубокая вода', note: null },
        { id: 'la-pulcher', w: 'pulcher', ru: 'прекрасный, красивый', pos: 'adj', forms: 'pulcher, pulchra, pulchrum', ex: 'puella pulchra', exRu: 'красивая девушка', note: null },
        { id: 'la-liber2', w: 'līber', ru: 'свободный', pos: 'adj', forms: 'līber, lībera, līberum', ex: 'populus līber', exRu: 'свободный народ', note: 'Долгое ī; e сохраняется. Ср. liber, librī «книга». Pl. līberī, -ōrum m. — «дети».' },
        { id: 'la-miser', w: 'miser', ru: 'несчастный, жалкий', pos: 'adj', forms: 'miser, misera, miserum', ex: 'Ō miser puer!', exRu: 'О несчастный мальчик!', note: null },
        { id: 'la-noster', w: 'noster', ru: 'наш', pos: 'adj', forms: 'noster, nostra, nostrum', ex: 'patria nostra', exRu: 'наша родина', note: null },
        { id: 'la-romanus', w: 'Rōmānus', ru: 'римский; subst. римлянин', pos: 'adj', forms: 'Rōmānus, -a, -um', ex: 'populus Rōmānus', exRu: 'римский народ', note: null },
        { id: 'la-clarus', w: 'clārus', ru: 'ясный, светлый; знаменитый', pos: 'adj', forms: 'clārus, -a, -um', ex: 'poēta clārus', exRu: 'знаменитый поэт', note: null }
      ],
      text: null
    },
    {
      id: 'la-u01-l05',
      kind: 'reading',
      title: 'Lectiō: Italia et sententiae',
      goals: ['Читать связный текст на материале юнита', 'Узнавать известные сентенции'],
      skills: ['la.noun.decl1', 'la.noun.decl2', 'la.verb.praes12', 'la.adj.12'],
      theory: [
        { type: 'p', text: 'Перед чтением: найдите сначала сказуемое (обычно в конце), затем подлежащее в Nom., затем дополнения. Предлог *in* с аблативом — «в, на» (где?).' },
        { type: 'tip', text: '*Ubi bene, ibi patria* — эллипсис глагола *est*; в сентенциях связка часто опускается.' }
      ],
      vocab: [
        { id: 'la-agricola', w: 'agricola', ru: 'земледелец', pos: 'n', g: 'm', forms: 'agricola, -ae m.', ex: 'Agricola in agrō labōrat.', exRu: 'Земледелец трудится в поле.', note: 'Мужской род в 1-м склонении.' },
        { id: 'la-laboro', w: 'labōrō', ru: 'трудиться; страдать', pos: 'v', forms: 'labōrō, labōrāre, labōrāvī, labōrātum', ex: 'Servī labōrant.', exRu: 'Рабы трудятся.', note: null },
        { id: 'la-ambulo', w: 'ambulō', ru: 'гулять, ходить', pos: 'v', forms: 'ambulō, ambulāre, ambulāvī, ambulātum', ex: 'In viā ambulant.', exRu: 'Они гуляют по дороге.', note: null },
        { id: 'la-porto', w: 'portō', ru: 'нести, носить', pos: 'v', forms: 'portō, portāre, portāvī, portātum', ex: 'Aquam portat.', exRu: 'Несёт воду.', note: null },
        { id: 'la-erro', w: 'errō', ru: 'блуждать; ошибаться', pos: 'v', forms: 'errō, errāre, errāvī, errātum', ex: 'Errāre hūmānum est.', exRu: 'Человеку свойственно ошибаться.', note: null },
        { id: 'la-humanus', w: 'hūmānus', ru: 'человеческий; образованный', pos: 'adj', forms: 'hūmānus, -a, -um', ex: 'vīta hūmāna', exRu: 'человеческая жизнь', note: null },
        { id: 'la-vitreus', w: 'vitreus', ru: 'стеклянный', pos: 'adj', forms: 'vitreus, -a, -um', ex: 'Fortūna vitrea est.', exRu: 'Удача стеклянна.', note: null },
        { id: 'la-saepe', w: 'saepe', ru: 'часто', pos: 'adv', forms: null, ex: 'Saepe errāmus.', exRu: 'Мы часто ошибаемся.', note: null },
        { id: 'la-semper', w: 'semper', ru: 'всегда', pos: 'adv', forms: null, ex: 'Semper labōrat.', exRu: 'Он всегда трудится.', note: null },
        { id: 'la-nunc', w: 'nunc', ru: 'теперь, сейчас', pos: 'adv', forms: null, ex: 'Nunc labōrāmus.', exRu: 'Сейчас мы трудимся.', note: null },
        { id: 'la-ubi', w: 'ubi', ru: 'где; когда (conj.)', pos: 'adv', forms: null, ex: 'Ubi es?', exRu: 'Где ты?', note: 'Как союз с perf.: ubi vēnit — когда он пришёл.' },
        { id: 'la-ibi', w: 'ibi', ru: 'там', pos: 'adv', forms: null, ex: 'Ubi bene, ibi patria.', exRu: 'Где хорошо, там и родина.', note: null }
      ],
      text: {
        title: 'Italia',
        lines: [
          { t: 'Italia patria Rōmānōrum est.', ru: 'Италия — родина римлян.' },
          { t: 'Terra Italiae pulchra est; agrī lātī et multī sunt.', ru: 'Земля Италии прекрасна; поля широки и многочисленны.' },
          { t: 'Agricolae in agrīs labōrant, nautae in aquā sunt.', ru: 'Земледельцы трудятся в полях, моряки — на воде.' },
          { t: 'Puellae aquam portant, puerī in viā ambulant.', ru: 'Девочки носят воду, мальчики гуляют по дороге.' },
          { t: 'Rōmānī deōs timent et patriam amant.', ru: 'Римляне боятся богов и любят отечество.' },
          { t: 'Poētae glōriam populī Rōmānī laudant.', ru: 'Поэты восхваляют славу римского народа.' },
          { t: 'Sententiae: Errāre hūmānum est.', ru: 'Изречения: Человеку свойственно ошибаться.' },
          { t: 'Fortūna vitrea est.', ru: 'Удача стеклянна. (Публилий Сир)' },
          { t: 'Ubi bene, ibi patria.', ru: 'Где хорошо, там и родина.' }
        ]
      }
    }
  ]
};

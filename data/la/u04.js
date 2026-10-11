export default {
  id: 'la-u04',
  title: 'Perfectum et tempora perfectī',
  titleRu: 'Система перфекта. Неправильные глаголы',
  summary: 'Типы основы перфекта, perfectum, plusquamperfectum и futurum II, относительное время; глаголы eō, ferō, volō, nōlō, mālō и сложные с sum.',
  lessons: [
    {
      id: 'la-u04-l01',
      kind: 'grammar',
      title: 'Основа перфекта. Perfectum',
      goals: ['Узнавать 6 типов основы перфекта', 'Спрягать perfectum indicativi activi', 'Различать perfectum и imperfectum'],
      skills: ['la.verb.perfstem', 'la.verb.perf'],
      theory: [
        { type: 'rule', text: 'Основа перфекта берётся из **3-й словарной формы** без -ī: *laudāv-ī, mon-u-ī, dīx-ī*. Её надо учить вместе с глаголом — по praesens она предсказуема лишь отчасти.' },
        { type: 'table', caption: 'Типы основы перфекта', head: ['Тип', 'Примеры'],
          rows: [
            ['-v-', 'laudā-v-ī, dēlē-v-ī, audī-v-ī, petī-v-ī, cognō-v-ī'],
            ['-u-', 'mon-u-ī, hab-u-ī, pos-u-ī, al-u-ī'],
            ['-s- (часто с ассимиляцией)', 'dīxī (dīc-s-ī), rēxī, scrīpsī, mīsī, mānsī, gessī'],
            ['редупликация', 'de-dī, ste-tī, cu-currī, ce-cidī, pe-pulī, crē-didī'],
            ['удлинение корневого гласного', 'vēnī, vīdī, lēgī, ēgī, fēcī, cēpī, fūgī, vīcī'],
            ['без изменения основы', 'dēfendī, ostendī, vertī, respondī, statuī']
          ] },
        { type: 'table', caption: 'Perfectum indicātīvī āctīvī', head: ['Лицо', 'laudāre', 'venīre', 'esse'],
          rows: [
            ['1 sg.', 'laudāv{{ī}}', 'vēn{{ī}}', 'fu{{ī}}'],
            ['2 sg.', 'laudāv{{istī}}', 'vēn{{istī}}', 'fu{{istī}}'],
            ['3 sg.', 'laudāv{{it}}', 'vēn{{it}}', 'fu{{it}}'],
            ['1 pl.', 'laudāv{{imus}}', 'vēn{{imus}}', 'fu{{imus}}'],
            ['2 pl.', 'laudāv{{istis}}', 'vēn{{istis}}', 'fu{{istis}}'],
            ['3 pl.', 'laudāv{{ērunt}} (-ēre)', 'vēn{{ērunt}} (-ēre)', 'fu{{ērunt}} (-ēre)']
          ],
          note: 'Окончания одинаковы для всех глаголов. Стяжённые формы: laudāstī = laudāvistī, laudārunt = laudāvērunt, audiit = audīvit.' },
        { type: 'contrast', text: 'Perfectum ≈ русский **совершенный вид** прошедшего: *scrīpsit* «написал» — *scrībēbat* «писал». Кроме того, perfectum может обозначать результат в настоящем (perfectum praesēns): *cognōvī* «я узнал» → «я знаю», *meminī* «помню», *ōdī* «ненавижу».' },
        { type: 'pitfall', text: '-**ēre** в 3 pl. perf. (*vēnēre* = vēnērunt) легко принять за инфинитив II спряжения. Признак — основа перфекта: *vēn-*, *fēc-*.' },
        { type: 'tip', text: 'Пары, различаемые только долготой: *venit / vēnit, legit / lēgit, fugit / fūgit*; и формой основы: *capit / cēpit, facit / fēcit, agit / ēgit*.' },
        { type: 'examples', items: [
          { t: 'Vēn{{ī}}, vīd{{ī}}, vīc{{ī}}.', ru: 'Пришёл, увидел, победил. (Цезарь)' },
          { t: 'Hostēs fūg{{ērunt}}.', ru: 'Враги бежали.' },
          { t: 'Caesar oppidum cēp{{it}} et mūrum dēlēv{{it}}.', ru: 'Цезарь взял город и разрушил стену.' },
          { t: 'Fu{{imus}} Trōes.', ru: 'Были мы троянцами (нас больше нет). (Вергилий)' }
        ] }
      ],
      vocab: [
        { id: 'la-curro', w: 'currō', ru: 'бежать', pos: 'v', forms: 'currō, currere, cucurrī, cursum', ex: 'Ad urbem cucurrit.', exRu: 'Он побежал к городу.', note: 'Редупликация.' },
        { id: 'la-cado', w: 'cadō', ru: 'падать; гибнуть', pos: 'v', forms: 'cadō, cadere, cecidī, cāsum', ex: 'In proeliō cecidit.', exRu: 'Пал в бою.', note: 'Ср. caedō, cecīdī.' },
        { id: 'la-caedo', w: 'caedō', ru: 'рубить; убивать', pos: 'v', forms: 'caedō, caedere, cecīdī, caesum', ex: 'Hostēs caesī sunt.', exRu: 'Враги перебиты.', note: 'cecīdī «убил» ≠ cecidī «упал».' },
        { id: 'la-gero', w: 'gerō', ru: 'нести; вести; совершать', pos: 'v', forms: 'gerō, gerere, gessī, gestum', ex: 'bellum gerere', exRu: 'вести войну', note: 'rēs gestae — деяния.' },
        { id: 'la-cedo', w: 'cēdō', ru: 'уходить; уступать (+ Dat.)', pos: 'v', forms: 'cēdō, cēdere, cessī, cessum', ex: 'Cēdant arma togae.', exRu: 'Пусть оружие уступит тоге. (Цицерон)', note: null },
        { id: 'la-claudo', w: 'claudō', ru: 'закрывать, запирать', pos: 'v', forms: 'claudō, claudere, clausī, clausum', ex: 'Portās clausērunt.', exRu: 'Они заперли ворота.', note: null },
        { id: 'la-ostendo', w: 'ostendō', ru: 'показывать', pos: 'v', forms: 'ostendō, ostendere, ostendī, ostentum', ex: 'Viam ostendit.', exRu: 'Показал дорогу.', note: 'Супин также ostēnsum.' },
        { id: 'la-defendo', w: 'dēfendō', ru: 'защищать; отражать', pos: 'v', forms: 'dēfendō, dēfendere, dēfendī, dēfēnsum', ex: 'Urbem dēfendērunt.', exRu: 'Они защитили город.', note: null },
        { id: 'la-incipio', w: 'incipiō', ru: 'начинать', pos: 'v', forms: 'incipiō, incipere, incēpī, inceptum', ex: 'Bellum incipit.', exRu: 'Начинается война.', note: 'В перфекте чаще coepī, coepisse.' },
        { id: 'la-accipio', w: 'accipiō', ru: 'принимать, получать; узнавать', pos: 'v', forms: 'accipiō, accipere, accēpī, acceptum', ex: 'Litterās accēpī.', exRu: 'Я получил письмо.', note: null },
        { id: 'la-intellego', w: 'intellegō', ru: 'понимать', pos: 'v', forms: 'intellegō, intellegere, intellēxī, intellēctum', ex: 'Nunc intellegō.', exRu: 'Теперь понимаю.', note: null },
        { id: 'la-cogo', w: 'cōgō', ru: 'собирать; принуждать', pos: 'v', forms: 'cōgō, cōgere, coēgī, coāctum', ex: 'Exercitum coēgit.', exRu: 'Он собрал войско.', note: 'co- + agō.' },
        { id: 'la-tollo', w: 'tollō', ru: 'поднимать; уничтожать', pos: 'v', forms: 'tollō, tollere, sustulī, sublātum', ex: 'Manūs sustulērunt.', exRu: 'Они подняли руки.', note: 'Супплетивный перфект.' },
        { id: 'la-pello', w: 'pellō', ru: 'гнать, изгонять, отражать', pos: 'v', forms: 'pellō, pellere, pepulī, pulsum', ex: 'Hostēs pepulērunt.', exRu: 'Они отбросили врагов.', note: null },
        { id: 'la-pono', w: 'pōnō', ru: 'класть, ставить', pos: 'v', forms: 'pōnō, pōnere, posuī, positum', ex: 'Castra posuit.', exRu: 'Разбил лагерь.', note: 'Краткое o в perf. и супине.' }
      ],
      text: null
    },
    {
      id: 'la-u04-l02',
      kind: 'grammar',
      title: 'Plusquamperfectum и futurum II',
      goals: ['Образовывать plusquamperfectum и futurum II', 'Применять правило относительного времени', 'Не ставить plpf после postquam'],
      skills: ['la.verb.plpf', 'la.verb.fut2'],
      theory: [
        { type: 'rule', text: 'Обе формы строятся от **основы перфекта**: plusquamperfectum = основа + **-eram** (≈ imperfectum от sum); futurum II = основа + **-erō** (≈ futurum от sum, но 3 pl. **-erint**).' },
        { type: 'table', head: ['Лицо', 'Plusquamperfectum', 'Futūrum II'],
          rows: [
            ['1 sg.', 'laudāv{{eram}}', 'laudāv{{erō}}'],
            ['2 sg.', 'laudāv{{erās}}', 'laudāv{{eris}}'],
            ['3 sg.', 'laudāv{{erat}}', 'laudāv{{erit}}'],
            ['1 pl.', 'laudāv{{erāmus}}', 'laudāv{{erimus}}'],
            ['2 pl.', 'laudāv{{erātis}}', 'laudāv{{eritis}}'],
            ['3 pl.', 'laudāv{{erant}}', 'laudāv{{erint}}']
          ],
          note: 'От esse: fueram, fuerō. От possum: potueram, potuerō.' },
        { type: 'rule', text: '**Относительное время**: действие, предшествующее другому прошедшему, — plusquamperfectum; предшествующее будущему — futurum II.' },
        { type: 'contrast', text: 'Русский говорит «Если придёшь, увидишь» — простое будущее в обеих частях. Латынь строже: *Sī Rōmam vēneris, Forum vidēbis* — приход раньше, значит futurum II. Это одна из самых частых ошибок при переводе с русского.' },
        { type: 'pitfall', text: 'После **postquam, ubi, ut** («как только»), **simul atque** латынь ставит **perfectum**, а не plusquamperfectum: *Postquam Caesar vēnit, hostēs fūgērunt* — «После того как Цезарь пришёл…».' },
        { type: 'tip', text: 'Futurum II и perf. coniūnctīvī (юнит 8) совпадают почти во всём — различает только синтаксис.' },
        { type: 'examples', items: [
          { t: 'Hostēs iam discess{{erant}}, cum Caesar vēnit.', ru: 'Враги уже ушли, когда пришёл Цезарь.' },
          { t: 'Sī Rōmam vēn{{eris}}, Forum vidēbis.', ru: 'Если приедешь в Рим, увидишь Форум.' },
          { t: 'Quod prōmīs{{erat}}, nōn fēcit.', ru: 'Того, что обещал, он не сделал.' },
          { t: 'Nisi pācem petīv{{erint}}, bellum gerēmus.', ru: 'Если они не попросят мира, мы будем воевать.' }
        ] }
      ],
      vocab: [
        { id: 'la-statuo', w: 'statuō', ru: 'ставить; постановлять, решать', pos: 'v', forms: 'statuō, statuere, statuī, statūtum', ex: 'Bellum gerere statuit.', exRu: 'Он решил вести войну.', note: null },
        { id: 'la-constituo', w: 'cōnstituō', ru: 'устанавливать; решать', pos: 'v', forms: 'cōnstituō, cōnstituere, cōnstituī, cōnstitūtum', ex: 'Lēgēs cōnstituit.', exRu: 'Он установил законы.', note: '+ inf. — решить сделать.' },
        { id: 'la-promitto', w: 'prōmittō', ru: 'обещать', pos: 'v', forms: 'prōmittō, prōmittere, prōmīsī, prōmissum', ex: 'Auxilium prōmīsit.', exRu: 'Он обещал помощь.', note: null },
        { id: 'la-cupio', w: 'cupiō', ru: 'желать, жаждать', pos: 'v', forms: 'cupiō, cupere, cupīvī, cupītum', ex: 'Pācem cupimus.', exRu: 'Мы жаждем мира.', note: 'III-iō.' },
        { id: 'la-iacio', w: 'iaciō', ru: 'бросать', pos: 'v', forms: 'iaciō, iacere, iēcī, iactum', ex: 'Ālea iacta est.', exRu: 'Жребий брошен.', note: 'В сложных — -iciō: ēiciō, iniciō.' },
        { id: 'la-rapio', w: 'rapiō', ru: 'хватать, похищать', pos: 'v', forms: 'rapiō, rapere, rapuī, raptum', ex: 'Sabīnās rapuērunt.', exRu: 'Они похитили сабинянок.', note: null },
        { id: 'la-servo', w: 'servō', ru: 'спасать; сохранять, соблюдать', pos: 'v', forms: 'servō, servāre, servāvī, servātum', ex: 'Patriam servāvit.', exRu: 'Он спас отечество.', note: 'Ср. serviō, servīre «служить».' },
        { id: 'la-supero', w: 'superō', ru: 'превосходить; побеждать', pos: 'v', forms: 'superō, superāre, superāvī, superātum', ex: 'Hostēs superāvērunt.', exRu: 'Они одолели врагов.', note: null },
        { id: 'la-nuntio', w: 'nūntiō', ru: 'сообщать, извещать', pos: 'v', forms: 'nūntiō, nūntiāre, nūntiāvī, nūntiātum', ex: 'Victōriam nūntiāvit.', exRu: 'Он известил о победе.', note: '+ Acc. cum inf.' },
        { id: 'la-postquam', w: 'postquam', ru: 'после того как', pos: 'conj', forms: null, ex: 'Postquam vēnit, discessērunt.', exRu: 'После того как он пришёл, они ушли.', note: 'Обычно + perfectum.' },
        { id: 'la-antequam', w: 'antequam', ru: 'прежде чем', pos: 'conj', forms: null, ex: 'Antequam discēdis, venī ad mē.', exRu: 'Прежде чем уедешь, зайди ко мне.', note: 'Пишется и раздельно: ante … quam. Синоним priusquam.' },
        { id: 'la-si', w: 'sī', ru: 'если', pos: 'conj', forms: null, ex: 'Sī vīs pācem, parā bellum.', exRu: 'Хочешь мира — готовься к войне.', note: null },
        { id: 'la-nisi', w: 'nisi', ru: 'если не; кроме', pos: 'conj', forms: null, ex: 'Nisi vēneris, nōn vidēbis.', exRu: 'Если не придёшь, не увидишь.', note: 'nihil nisi — ничего, кроме.' }
      ],
      text: null
    },
    {
      id: 'la-u04-l03',
      kind: 'grammar',
      title: 'Неправильные глаголы: eō, ferō, volō',
      goals: ['Спрягать eō, ferō, volō, nōlō, mālō', 'Узнавать сложные глаголы от eō, ferō, sum'],
      skills: ['la.verb.irreg'],
      theory: [
        { type: 'table', caption: 'Praesens indicātīvī', head: ['Лицо', 'īre', 'ferre', 'velle', 'nōlle', 'mālle'],
          rows: [
            ['1 sg.', 'eō', 'ferō', 'volō', 'nōlō', 'mālō'],
            ['2 sg.', 'īs', 'fers', 'vīs', 'nōn vīs', 'māvīs'],
            ['3 sg.', 'it', 'fert', 'vult', 'nōn vult', 'māvult'],
            ['1 pl.', 'īmus', 'ferimus', 'volumus', 'nōlumus', 'mālumus'],
            ['2 pl.', 'ītis', 'fertis', 'vultis', 'nōn vultis', 'māvultis'],
            ['3 pl.', 'eunt', 'ferunt', 'volunt', 'nōlunt', 'mālunt']
          ],
          note: 'nōlō = nē + volō, mālō = magis + volō.' },
        { type: 'table', caption: 'Другие времена', head: ['Глагол', 'Impf.', 'Fut. I', 'Perf.', 'Imper.'],
          rows: [
            ['eō', 'ībam', 'ībō, ībis', 'iī (īvī), īstī, iit', 'ī, īte'],
            ['ferō', 'ferēbam', 'feram, ferēs', 'tulī', 'fer, ferte'],
            ['volō', 'volēbam', 'volam, volēs', 'voluī', '—'],
            ['nōlō', 'nōlēbam', 'nōlam, nōlēs', 'nōluī', 'nōlī, nōlīte']
          ] },
        { type: 'p', text: '*eō* — основа i-/e-: e- перед гласными (eō, eunt, eam), i- перед согласными (īs, ībam). *ferō* — III спряжение, но без соединительного гласного в fers, fert, fertis, ferre. Перфект и супин ferō — супплетивные: **tulī, lātum**.' },
        { type: 'table', caption: 'Сложные глаголы', head: ['Основа', 'Примеры'],
          rows: [
            ['eō', 'abeō, adeō, exeō, redeō, pereō, trānseō'],
            ['ferō', 'afferō (attulī, allātum), auferō (abstulī, ablātum), referō (rettulī, relātum), differō (distulī, dīlātum)'],
            ['sum', 'absum (āfuī), adsum, dēsum, praesum + Dat., prōsum (prōdes, prōdest) + Dat.']
          ] },
        { type: 'pitfall', text: '*vīs* «ты хочешь» ≠ *vīs* «сила»; *it* «идёт» ≠ *iit* «пошёл»; *fert* «несёт» ≠ *ferret* (impf. coni.).' },
        { type: 'examples', items: [
          { t: 'Quō vādis? — Rōmam eō.', ru: 'Куда идёшь? — Иду в Рим.' },
          { t: 'Caesar Rubicōnem trānsiit.', ru: 'Цезарь перешёл Рубикон.' },
          { t: 'Quī multum habet, plūs cupit; quod vult, nōn semper potest.', ru: 'Кто много имеет, хочет больше; чего хочет, не всегда может.' },
          { t: 'Nōlī mē tangere!', ru: 'Не прикасайся ко мне!' },
          { t: 'Mālō morī quam servīre.', ru: 'Предпочитаю умереть, чем быть рабом.' }
        ] }
      ],
      vocab: [
        { id: 'la-eo', w: 'eō', ru: 'идти', pos: 'v', forms: 'eō, īre, iī (īvī), itum', ex: 'Rōmam eō.', exRu: 'Иду в Рим.', note: null },
        { id: 'la-fero', w: 'ferō', ru: 'нести; переносить; сообщать', pos: 'v', forms: 'ferō, ferre, tulī, lātum', ex: 'Fortūnam ferō.', exRu: 'Переношу судьбу.', note: 'ferunt — «говорят, рассказывают».' },
        { id: 'la-volo', w: 'volō', ru: 'хотеть', pos: 'v', forms: 'volō, velle, voluī, —', ex: 'Quid vīs?', exRu: 'Чего ты хочешь?', note: 'Ср. volō, volāre «летать».' },
        { id: 'la-nolo', w: 'nōlō', ru: 'не хотеть', pos: 'v', forms: 'nōlō, nōlle, nōluī, —', ex: 'Nōlī timēre!', exRu: 'Не бойся!', note: 'nōlī/nōlīte + inf. — запрет.' },
        { id: 'la-malo', w: 'mālō', ru: 'предпочитать', pos: 'v', forms: 'mālō, mālle, māluī, —', ex: 'Mālō pācem quam bellum.', exRu: 'Предпочитаю мир войне.', note: 'mālō … quam.' },
        { id: 'la-redeo', w: 'redeō', ru: 'возвращаться', pos: 'v', forms: 'redeō, redīre, rediī, reditum', ex: 'Domum rediit.', exRu: 'Вернулся домой.', note: null },
        { id: 'la-exeo', w: 'exeō', ru: 'выходить', pos: 'v', forms: 'exeō, exīre, exiī, exitum', ex: 'Ex urbe exiit.', exRu: 'Вышел из города.', note: null },
        { id: 'la-pereo', w: 'pereō', ru: 'погибать', pos: 'v', forms: 'pereō, perīre, periī, peritum', ex: 'Multī periērunt.', exRu: 'Многие погибли.', note: null },
        { id: 'la-transeo', w: 'trānseō', ru: 'переходить', pos: 'v', forms: 'trānseō, trānsīre, trānsiī, trānsitum', ex: 'Flūmen trānsiērunt.', exRu: 'Они перешли реку.', note: null },
        { id: 'la-refero', w: 'referō', ru: 'относить назад; докладывать', pos: 'v', forms: 'referō, referre, rettulī, relātum', ex: 'Ad senātum rettulit.', exRu: 'Он доложил сенату.', note: 'pedem referre — отступать.' },
        { id: 'la-affero', w: 'afferō', ru: 'приносить; сообщать', pos: 'v', forms: 'afferō, afferre, attulī, allātum', ex: 'Nūntium attulit.', exRu: 'Принёс известие.', note: 'ad- + ferō.' },
        { id: 'la-absum', w: 'absum', ru: 'отсутствовать, быть далеко', pos: 'v', forms: 'absum, abesse, āfuī, —', ex: 'Longē absunt.', exRu: 'Они далеко.', note: null },
        { id: 'la-adsum', w: 'adsum', ru: 'присутствовать; помогать (+ Dat.)', pos: 'v', forms: 'adsum, adesse, adfuī, —', ex: 'Adsum!', exRu: 'Здесь! (на перекличке)', note: null }
      ],
      text: null
    },
    {
      id: 'la-u04-l04',
      kind: 'reading',
      title: 'Lectiō: Gāius Mūcius Scaevola',
      goals: ['Читать рассказ в перфекте', 'Различать perfectum и plusquamperfectum в тексте'],
      skills: ['la.verb.perf', 'la.verb.plpf', 'la.verb.irreg'],
      theory: [
        { type: 'p', text: 'Адаптация Ливия (II, 12). Подлинна реплика Муция *Rōmānus sum cīvis*. *quod* — союз «потому что». *Scaevola* — «Левша».' }
      ],
      vocab: [
        { id: 'la-castra', w: 'castra', ru: 'лагерь (военный)', pos: 'n', g: 'n', forms: 'castra, -ōrum n. pl.', ex: 'castra pōnere', exRu: 'разбить лагерь', note: 'Pluralia tantum; sg. castrum — «укрепление».' },
        { id: 'la-iuvenis', w: 'iuvenis', ru: 'юноша, молодой человек', pos: 'n', g: 'm', forms: 'iuvenis, iuvenis m.', ex: 'iuvenis Rōmānus', exRu: 'римский юноша', note: 'Gen. pl. iuvenum.' },
        { id: 'la-dextra', w: 'dextra', ru: 'правая рука', pos: 'n', g: 'f', forms: 'dextra, -ae f.', ex: 'dextram dare', exRu: 'подать правую руку (дать слово)', note: 'Также dextera; прил. dexter, -tra, -trum.' },
        { id: 'la-scriba', w: 'scrība', ru: 'писец', pos: 'n', g: 'm', forms: 'scrība, -ae m.', ex: 'scrībam occīdit', exRu: 'убил писца', note: null },
        { id: 'la-gladius', w: 'gladius', ru: 'меч', pos: 'n', g: 'm', forms: 'gladius, -iī m.', ex: 'Gladiō pugnat.', exRu: 'Сражается мечом.', note: null },
        { id: 'la-clam', w: 'clam', ru: 'тайно', pos: 'adv', forms: null, ex: 'Clam exiit.', exRu: 'Тайно вышел.', note: null },
        { id: 'la-dimitto', w: 'dīmittō', ru: 'отпускать, распускать', pos: 'v', forms: 'dīmittō, dīmittere, dīmīsī, dīmissum', ex: 'Captīvōs dīmīsit.', exRu: 'Отпустил пленных.', note: null },
        { id: 'la-amitto', w: 'āmittō', ru: 'терять, упускать', pos: 'v', forms: 'āmittō, āmittere, āmīsī, āmissum', ex: 'Occāsiōnem āmīsit.', exRu: 'Упустил случай.', note: null },
        { id: 'la-quod', w: 'quod', ru: 'потому что; что (то, что)', pos: 'conj', forms: null, ex: 'Laudō tē, quod vēnistī.', exRu: 'Хвалю тебя за то, что ты пришёл.', note: 'Омоним — n. от quī «который».' }
      ],
      text: {
        title: 'Gāius Mūcius Scaevola (ad Līvium)',
        lines: [
          { t: 'Porsenna, rēx Etrūscōrum, cum multīs mīlitibus ad urbem Rōmam vēnit.', ru: 'Порсенна, царь этрусков, подошёл со многими воинами к Риму.' },
          { t: 'Rōmānī diū urbem dēfendērunt.', ru: 'Римляне долго защищали город.' },
          { t: 'Tum Gāius Mūcius, iuvenis Rōmānus, clam in castra hostium iit.', ru: 'Тогда Гай Муций, римский юноша, тайно пробрался во вражеский лагерь.' },
          { t: 'Rēgem occīdere voluit, sed errāvit et scrībam prō rēge occīdit.', ru: 'Он хотел убить царя, но ошибся и вместо царя убил писца.' },
          { t: 'Mīlitēs Mūcium cēpērunt et ad rēgem dūxērunt.', ru: 'Воины схватили Муция и привели к царю.' },
          { t: 'Mūcius dextram in ignem posuit et dīxit: «Rōmānus sum cīvis. Nōn timeō.»', ru: 'Муций положил правую руку в огонь и сказал: «Я римский гражданин. Я не боюсь».' },
          { t: 'Rēx virtūtem iuvenis laudāvit et Mūcium līberum dīmīsit.', ru: 'Царь похвалил доблесть юноши и отпустил Муция на свободу.' },
          { t: 'Posteā Rōmānī Mūcium «Scaevolam» appellāvērunt, quod dextram in igne āmīserat.', ru: 'Впоследствии римляне прозвали Муция «Сцеволой» (Левшой), потому что он лишился правой руки в огне.' }
        ]
      }
    }
  ]
};

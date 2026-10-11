export default {
  id: 'la-u02',
  title: 'Tertia et quārta coniugātiō. Imperfectum, futūrum',
  titleRu: '3-е и 4-е спряжения. Имперфект и будущее I',
  summary: 'Все четыре спряжения в praesens и императиве, imperfectum и futurum I, глагол possum. Первое чтение — басня Федра в адаптации.',
  lessons: [
    {
      id: 'la-u02-l01',
      kind: 'grammar',
      title: '3-е и 4-е спряжения. Императив',
      goals: ['Различать спряжения по инфинитиву', 'Спрягать глаголы на -ere, -iō/-ere, -īre в praesens', 'Образовывать императив и запрет'],
      skills: ['la.verb.praes34', 'la.verb.imper'],
      theory: [
        { type: 'rule', text: 'Ключ — инфинитив: mon**ē**re (II, долгое ē) ≠ reg**e**re (III, краткое e). III спряжение: основа на согласный (или -u-), соединительный гласный **-i-** (перед -nt — **-u-**).' },
        { type: 'table', caption: 'Praesens indicātīvī āctīvī', head: ['Лицо', 'III: regere', 'III-iō: capere', 'IV: audīre'],
          rows: [
            ['1 sg.', 'reg{{ō}}', 'capi{{ō}}', 'audi{{ō}}'],
            ['2 sg.', 'reg{{is}}', 'cap{{is}}', 'audī{{s}}'],
            ['3 sg.', 'reg{{it}}', 'cap{{it}}', 'audi{{t}}'],
            ['1 pl.', 'reg{{imus}}', 'cap{{imus}}', 'audī{{mus}}'],
            ['2 pl.', 'reg{{itis}}', 'cap{{itis}}', 'audī{{tis}}'],
            ['3 pl.', 'reg{{unt}}', 'capi{{unt}}', 'audi{{unt}}']
          ],
          note: 'Смешанный тип (III-iō: capiō, faciō, fugiō, iaciō, rapiō, cupiō и их производные) спрягается как III, но перед гласным сохраняет -i-, как IV: capiō, capiunt, capiēbam.' },
        { type: 'tip', text: 'Как узнать III-iō? 1 sg. на -iō + инфинитив на краткое -ere: *capiō, capere*. Если инфинитив -īre — это IV: *audiō, audīre*.' },
        { type: 'h', text: 'Imperātīvus praesentis' },
        { type: 'table', head: ['', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['2 sg.', 'laud{{ā}}', 'mon{{ē}}', 'reg{{e}}', 'cap{{e}}', 'aud{{ī}}'],
            ['2 pl.', 'laud{{āte}}', 'mon{{ēte}}', 'reg{{ite}}', 'cap{{ite}}', 'aud{{īte}}']
          ],
          note: 'Без -e в ед. ч.: **dīc, dūc, fac, fer** (но dīcite, dūcite, facite, ferte). От esse: es, este.' },
        { type: 'rule', text: 'Запрет: **nōlī / nōlīte** + инфинитив: *Nōlī timēre!* — «Не бойся!»' },
        { type: 'pitfall', text: '*regit* «правит» (III) и *audit* «слышит» (IV) похожи, но во 2 sg. и 1–2 pl. в IV долгое ī: audīs, audīmus — regis, regimus.' },
        { type: 'examples', items: [
          { t: 'Puer librum leg{{it}}.', ru: 'Мальчик читает книгу.' },
          { t: 'Mīlitēs fugi{{unt}}.', ru: 'Воины бегут.' },
          { t: 'Audī, fīlī!', ru: 'Слушай, сын!' },
          { t: 'Dīc mihi!', ru: 'Скажи мне!' },
          { t: 'Nōlīte fugere!', ru: 'Не бегите!' }
        ] }
      ],
      vocab: [
        { id: 'la-duco', w: 'dūcō', ru: 'вести; считать', pos: 'v', forms: 'dūcō, dūcere, dūxī, ductum', ex: 'Exercitum dūcit.', exRu: 'Он ведёт войско.', note: 'Imper. dūc.' },
        { id: 'la-dico', w: 'dīcō', ru: 'говорить, сказать', pos: 'v', forms: 'dīcō, dīcere, dīxī, dictum', ex: 'Vērum dīcis.', exRu: 'Ты говоришь правду.', note: 'Imper. dīc.' },
        { id: 'la-ago', w: 'agō', ru: 'гнать; делать; вести (жизнь)', pos: 'v', forms: 'agō, agere, ēgī, āctum', ex: 'Grātiās agō.', exRu: 'Благодарю.', note: 'vītam agere — проводить жизнь.' },
        { id: 'la-mitto', w: 'mittō', ru: 'посылать; отпускать', pos: 'v', forms: 'mittō, mittere, mīsī, missum', ex: 'Servum mittit.', exRu: 'Посылает раба.', note: null },
        { id: 'la-scribo', w: 'scrībō', ru: 'писать', pos: 'v', forms: 'scrībō, scrībere, scrīpsī, scrīptum', ex: 'Librum scrībit.', exRu: 'Пишет книгу.', note: null },
        { id: 'la-lego', w: 'legō', ru: 'читать; собирать, выбирать', pos: 'v', forms: 'legō, legere, lēgī, lēctum', ex: 'Librōs legimus.', exRu: 'Мы читаем книги.', note: 'legit «читает» — lēgit «прочитал».' },
        { id: 'la-rego', w: 'regō', ru: 'править, направлять', pos: 'v', forms: 'regō, regere, rēxī, rēctum', ex: 'Populum regit.', exRu: 'Правит народом.', note: null },
        { id: 'la-vivo', w: 'vīvō', ru: 'жить', pos: 'v', forms: 'vīvō, vīvere, vīxī, vīctum', ex: 'Diū vīvit.', exRu: 'Долго живёт.', note: null },
        { id: 'la-capio', w: 'capiō', ru: 'брать, захватывать', pos: 'v', forms: 'capiō, capere, cēpī, captum', ex: 'Oppidum capiunt.', exRu: 'Они захватывают город.', note: 'III-iō.' },
        { id: 'la-facio', w: 'faciō', ru: 'делать', pos: 'v', forms: 'faciō, facere, fēcī, factum', ex: 'Quid facis?', exRu: 'Что ты делаешь?', note: 'III-iō; imper. fac; pass. fīō.' },
        { id: 'la-fugio', w: 'fugiō', ru: 'бежать, убегать; избегать', pos: 'v', forms: 'fugiō, fugere, fūgī, fugitum', ex: 'Servī fugiunt.', exRu: 'Рабы бегут.', note: 'III-iō.' },
        { id: 'la-audio', w: 'audiō', ru: 'слышать, слушать', pos: 'v', forms: 'audiō, audīre, audīvī, audītum', ex: 'Vōcem audiō.', exRu: 'Слышу голос.', note: null },
        { id: 'la-venio', w: 'veniō', ru: 'приходить', pos: 'v', forms: 'veniō, venīre, vēnī, ventum', ex: 'Amīcus venit.', exRu: 'Друг приходит.', note: 'venit «приходит» — vēnit «пришёл».' },
        { id: 'la-scio', w: 'sciō', ru: 'знать', pos: 'v', forms: 'sciō, scīre, scīvī, scītum', ex: 'Nihil sciō.', exRu: 'Ничего не знаю.', note: null },
        { id: 'la-sentio', w: 'sentiō', ru: 'чувствовать; полагать', pos: 'v', forms: 'sentiō, sentīre, sēnsī, sēnsum', ex: 'Dolōrem sentit.', exRu: 'Чувствует боль.', note: null }
      ],
      text: null
    },
    {
      id: 'la-u02-l02',
      kind: 'grammar',
      title: 'Imperfectum. Глагол possum',
      goals: ['Образовывать imperfectum всех спряжений', 'Спрягать sum и possum в praesens и imperfectum', 'Понимать видовое значение imperfectum'],
      skills: ['la.verb.impf', 'la.verb.posse'],
      theory: [
        { type: 'rule', text: 'Imperfectum = основа praesens + **-ba-** + окончания -m, -s, -t, -mus, -tis, -nt. В III и IV спряжениях перед -ba- стоит **-ē-** (III-iō и IV: **-iē-**).' },
        { type: 'table', caption: 'Imperfectum indicātīvī āctīvī', head: ['Лицо', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['1 sg.', 'laudā{{bam}}', 'monē{{bam}}', 'reg{{ēbam}}', 'capi{{ēbam}}', 'audi{{ēbam}}'],
            ['2 sg.', 'laudā{{bās}}', 'monē{{bās}}', 'reg{{ēbās}}', 'capi{{ēbās}}', 'audi{{ēbās}}'],
            ['3 sg.', 'laudā{{bat}}', 'monē{{bat}}', 'reg{{ēbat}}', 'capi{{ēbat}}', 'audi{{ēbat}}'],
            ['1 pl.', 'laudā{{bāmus}}', 'monē{{bāmus}}', 'reg{{ēbāmus}}', 'capi{{ēbāmus}}', 'audi{{ēbāmus}}'],
            ['2 pl.', 'laudā{{bātis}}', 'monē{{bātis}}', 'reg{{ēbātis}}', 'capi{{ēbātis}}', 'audi{{ēbātis}}'],
            ['3 pl.', 'laudā{{bant}}', 'monē{{bant}}', 'reg{{ēbant}}', 'capi{{ēbant}}', 'audi{{ēbant}}']
          ] },
        { type: 'table', caption: 'sum и possum', head: ['Лицо', 'sum praes.', 'sum impf.', 'possum praes.', 'possum impf.'],
          rows: [
            ['1 sg.', 'sum', 'er{{am}}', 'pos-sum', 'pot-eram'],
            ['2 sg.', 'es', 'er{{ās}}', 'pot-es', 'pot-erās'],
            ['3 sg.', 'est', 'er{{at}}', 'pot-est', 'pot-erat'],
            ['1 pl.', 'sumus', 'er{{āmus}}', 'pos-sumus', 'pot-erāmus'],
            ['2 pl.', 'estis', 'er{{ātis}}', 'pot-estis', 'pot-erātis'],
            ['3 pl.', 'sunt', 'er{{ant}}', 'pos-sunt', 'pot-erant']
          ],
          note: 'possum = pot- + sum; перед s — pos-. Инфинитив **posse**, perf. potuī.' },
        { type: 'contrast', text: 'Imperfectum ≈ русский **несовершенный вид** прошедшего: длительность, повторяемость, фон («делал, бывало делал»). Законченное однократное действие («сделал») передаёт perfectum (юнит 4).' },
        { type: 'pitfall', text: 'Не путать *erat* «был» (impf. от sum) с *erit* «будет» (fut.) — одна буква.' },
        { type: 'examples', items: [
          { t: 'Rōmānī saepe pugn{{ābant}}.', ru: 'Римляне часто сражались.' },
          { t: 'Puer librum leg{{ēbat}}, cum…', ru: 'Мальчик читал книгу, когда…' },
          { t: 'Venīre nōn poterat.', ru: 'Он не мог прийти.' },
          { t: 'Ōlim in īnsulā er{{ant}} multī servī.', ru: 'Некогда на острове было много рабов.' }
        ] }
      ],
      vocab: [
        { id: 'la-possum', w: 'possum', ru: 'мочь', pos: 'v', forms: 'possum, posse, potuī, —', ex: 'Venīre nōn possum.', exRu: 'Я не могу прийти.', note: 'pot- + sum.' },
        { id: 'la-maneo', w: 'maneō', ru: 'оставаться; ожидать', pos: 'v', forms: 'maneō, manēre, mānsī, mānsum', ex: 'Domī manet.', exRu: 'Остаётся дома.', note: null },
        { id: 'la-respondeo', w: 'respondeō', ru: 'отвечать', pos: 'v', forms: 'respondeō, respondēre, respondī, respōnsum', ex: 'Nihil respondet.', exRu: 'Ничего не отвечает.', note: null },
        { id: 'la-iubeo', w: 'iubeō', ru: 'приказывать, велеть', pos: 'v', forms: 'iubeō, iubēre, iussī, iussum', ex: 'Mīlitēs pugnāre iubet.', exRu: 'Велит воинам сражаться.', note: '+ Acc. cum inf.' },
        { id: 'la-moveo', w: 'moveō', ru: 'двигать; волновать', pos: 'v', forms: 'moveō, movēre, mōvī, mōtum', ex: 'Castra movent.', exRu: 'Снимаются с лагеря.', note: null },
        { id: 'la-pugno', w: 'pugnō', ru: 'сражаться', pos: 'v', forms: 'pugnō, pugnāre, pugnāvī, pugnātum', ex: 'Fortiter pugnābant.', exRu: 'Они храбро сражались.', note: null },
        { id: 'la-paro', w: 'parō', ru: 'готовить; приобретать', pos: 'v', forms: 'parō, parāre, parāvī, parātum', ex: 'Bellum parant.', exRu: 'Готовят войну.', note: null },
        { id: 'la-puto', w: 'putō', ru: 'думать, считать', pos: 'v', forms: 'putō, putāre, putāvī, putātum', ex: 'Eum amīcum putō.', exRu: 'Считаю его другом.', note: null },
        { id: 'la-exspecto', w: 'exspectō', ru: 'ждать', pos: 'v', forms: 'exspectō, exspectāre, exspectāvī, exspectātum', ex: 'Amīcum exspectābam.', exRu: 'Я ждал друга.', note: null },
        { id: 'la-tum', w: 'tum', ru: 'тогда; затем', pos: 'adv', forms: null, ex: 'Tum puer respondet.', exRu: 'Тогда мальчик отвечает.', note: null },
        { id: 'la-diu', w: 'diū', ru: 'долго', pos: 'adv', forms: null, ex: 'Diū pugnābant.', exRu: 'Долго сражались.', note: 'Comp. diūtius.' },
        { id: 'la-iam', w: 'iam', ru: 'уже; сейчас', pos: 'adv', forms: null, ex: 'Iam veniunt.', exRu: 'Они уже идут.', note: 'nōn iam — уже не.' },
        { id: 'la-olim', w: 'ōlim', ru: 'некогда, когда-то', pos: 'adv', forms: null, ex: 'Ōlim poēta erat.', exRu: 'Жил-был поэт.', note: null }
      ],
      text: null
    },
    {
      id: 'la-u02-l03',
      kind: 'grammar',
      title: 'Futurum I',
      goals: ['Образовывать будущее время двумя способами', 'Не путать fut. III–IV с praes. II'],
      skills: ['la.verb.fut1'],
      theory: [
        { type: 'rule', text: 'I и II спряжения: основа + **-b-** (bō, bis, bit, bimus, bitis, bunt). III и IV: **-a-** в 1 sg., далее **-ē-** (am, ēs, et, ēmus, ētis, ent).' },
        { type: 'table', caption: 'Futūrum I indicātīvī āctīvī', head: ['Лицо', 'I', 'II', 'III', 'III-iō / IV', 'esse'],
          rows: [
            ['1 sg.', 'laudā{{bō}}', 'monē{{bō}}', 'reg{{am}}', 'capi{{am}} / audi{{am}}', 'erō'],
            ['2 sg.', 'laudā{{bis}}', 'monē{{bis}}', 'reg{{ēs}}', 'capi{{ēs}} / audi{{ēs}}', 'eris'],
            ['3 sg.', 'laudā{{bit}}', 'monē{{bit}}', 'reg{{et}}', 'capi{{et}} / audi{{et}}', 'erit'],
            ['1 pl.', 'laudā{{bimus}}', 'monē{{bimus}}', 'reg{{ēmus}}', 'capi{{ēmus}} / audi{{ēmus}}', 'erimus'],
            ['2 pl.', 'laudā{{bitis}}', 'monē{{bitis}}', 'reg{{ētis}}', 'capi{{ētis}} / audi{{ētis}}', 'eritis'],
            ['3 pl.', 'laudā{{bunt}}', 'monē{{bunt}}', 'reg{{ent}}', 'capi{{ent}} / audi{{ent}}', 'erunt']
          ],
          note: 'possum: poterō, poteris, poterit… ; 3 pl. poterunt.' },
        { type: 'tip', text: 'Мнемоника: «В первых двух — **bo-bi-bu**, в двух последних — **a-e-e**».' },
        { type: 'pitfall', text: '*monēs* — praes. II («ты напоминаешь»), *regēs* — fut. III («ты будешь править»), *regis* — praes. III. Всегда проверяйте спряжение по инфинитиву, прежде чем узнавать время.' },
        { type: 'contrast', text: 'Futurum I видово нейтрально: *scrībam* — и «буду писать», и «напишу». Для действия, завершённого до другого будущего, латынь требует futurum II (юнит 4) — там, где русский обходится обычным будущим совершенного вида.' },
        { type: 'examples', items: [
          { t: 'Crās veni{{am}}.', ru: 'Завтра приду.' },
          { t: 'Gallōs vinc{{ēmus}}.', ru: 'Мы победим галлов.' },
          { t: 'Amīcum numquam relinqu{{am}}.', ru: 'Никогда не оставлю друга.' },
          { t: 'Mox laudā{{bit}} poētam.', ru: 'Скоро он похвалит поэта.' }
        ] }
      ],
      vocab: [
        { id: 'la-quaero', w: 'quaerō', ru: 'искать; спрашивать', pos: 'v', forms: 'quaerō, quaerere, quaesīvī, quaesītum', ex: 'Viam quaerimus.', exRu: 'Мы ищем дорогу.', note: 'quaerere ex/ab aliquō — спрашивать у кого-либо.' },
        { id: 'la-peto', w: 'petō', ru: 'стремиться к; просить; нападать', pos: 'v', forms: 'petō, petere, petīvī, petītum', ex: 'Rōmam petunt.', exRu: 'Направляются к Риму.', note: 'pācem ab aliquō petere — просить мира у кого-либо.' },
        { id: 'la-vinco', w: 'vincō', ru: 'побеждать', pos: 'v', forms: 'vincō, vincere, vīcī, victum', ex: 'Amor vincit omnia.', exRu: 'Любовь побеждает всё.', note: null },
        { id: 'la-relinquo', w: 'relinquō', ru: 'оставлять, покидать', pos: 'v', forms: 'relinquō, relinquere, relīquī, relictum', ex: 'Patriam relinquunt.', exRu: 'Покидают родину.', note: null },
        { id: 'la-cognosco', w: 'cognōscō', ru: 'узнавать; perf. знать', pos: 'v', forms: 'cognōscō, cognōscere, cognōvī, cognitum', ex: 'Vēritātem cognōscam.', exRu: 'Я узнаю истину.', note: 'cognōvī — «я узнал» = «я знаю».' },
        { id: 'la-discedo', w: 'discēdō', ru: 'уходить, удаляться', pos: 'v', forms: 'discēdō, discēdere, discessī, discessum', ex: 'Ab oppidō discēdunt.', exRu: 'Уходят от города.', note: null },
        { id: 'la-credo', w: 'crēdō', ru: 'верить, доверять (+ Dat.)', pos: 'v', forms: 'crēdō, crēdere, crēdidī, crēditum', ex: 'Tibi crēdō.', exRu: 'Я тебе верю.', note: 'Управляет дательным.' },
        { id: 'la-trado', w: 'trādō', ru: 'передавать, вручать; сообщать', pos: 'v', forms: 'trādō, trādere, trādidī, trāditum', ex: 'Librum amīcō trādit.', exRu: 'Передаёт книгу другу.', note: null },
        { id: 'la-cras', w: 'crās', ru: 'завтра', pos: 'adv', forms: null, ex: 'Crās veniam.', exRu: 'Завтра приду.', note: null },
        { id: 'la-mox', w: 'mox', ru: 'скоро, вскоре', pos: 'adv', forms: null, ex: 'Mox vidēbis.', exRu: 'Скоро увидишь.', note: null },
        { id: 'la-numquam', w: 'numquam', ru: 'никогда', pos: 'adv', forms: null, ex: 'Numquam fugiam.', exRu: 'Никогда не убегу.', note: null },
        { id: 'la-tamen', w: 'tamen', ru: 'однако, всё же', pos: 'adv', forms: null, ex: 'Tamen pugnābunt.', exRu: 'Всё же они будут сражаться.', note: null },
        { id: 'la-nam', w: 'nam', ru: 'ибо, ведь', pos: 'conj', forms: null, ex: 'Nam vērum dīcit.', exRu: 'Ведь он говорит правду.', note: 'Стоит на первом месте (ср. enim — на втором).' },
        { id: 'la-itaque', w: 'itaque', ru: 'итак, поэтому', pos: 'conj', forms: null, ex: 'Itaque discēdēmus.', exRu: 'Поэтому мы уйдём.', note: 'Ударение: **i**-ta-que.' }
      ],
      text: null
    },
    {
      id: 'la-u02-l04',
      kind: 'reading',
      title: 'Lectiō: Lupus et agnus',
      goals: ['Читать адаптированную басню', 'Различать praesens, imperfectum, futurum в тексте'],
      skills: ['la.verb.praes34', 'la.verb.impf', 'la.verb.fut1', 'la.verb.imper'],
      theory: [
        { type: 'p', text: 'Басня Федра (I, 1) в адаптации: оригинальные сенары упрощены, перфекты заменены на praesens и imperfectum. *superior / īnferior* — «выше / ниже по течению» (сравнительная степень, юнит 6).' }
      ],
      vocab: [
        { id: 'la-lupus', w: 'lupus', ru: 'волк', pos: 'n', g: 'm', forms: 'lupus, -ī m.', ex: 'Homō hominī lupus est.', exRu: 'Человек человеку волк.', note: null },
        { id: 'la-agnus', w: 'agnus', ru: 'ягнёнок', pos: 'n', g: 'm', forms: 'agnus, -ī m.', ex: 'agnus Deī', exRu: 'агнец Божий', note: null },
        { id: 'la-rivus', w: 'rīvus', ru: 'ручей', pos: 'n', g: 'm', forms: 'rīvus, -ī m.', ex: 'ad rīvum', exRu: 'к ручью', note: null },
        { id: 'la-turbo', w: 'turbō', ru: 'мутить, приводить в беспорядок', pos: 'v', forms: 'turbō, turbāre, turbāvī, turbātum', ex: 'Aquam turbās.', exRu: 'Ты мутишь воду.', note: null },
        { id: 'la-fluo', w: 'fluō', ru: 'течь', pos: 'v', forms: 'fluō, fluere, flūxī, flūxum', ex: 'Aqua fluit.', exRu: 'Вода течёт.', note: null },
        { id: 'la-clamo', w: 'clāmō', ru: 'кричать', pos: 'v', forms: 'clāmō, clāmāre, clāmāvī, clāmātum', ex: 'Lupus clāmat.', exRu: 'Волк кричит.', note: null },
        { id: 'la-iterum', w: 'iterum', ru: 'снова, во второй раз', pos: 'adv', forms: null, ex: 'Iterum veniet.', exRu: 'Он снова придёт.', note: null },
        { id: 'la-nondum', w: 'nōndum', ru: 'ещё не', pos: 'adv', forms: null, ex: 'Nōndum vīvēbam.', exRu: 'Меня ещё не было на свете.', note: null },
        { id: 'la-mensis', w: 'mēnsis', ru: 'месяц', pos: 'n', g: 'm', forms: 'mēnsis, mēnsis m.', ex: 'ante sex mēnsēs', exRu: 'шесть месяцев назад', note: '3-е склонение (юнит 3); Gen. pl. mēnsium.' },
        { id: 'la-devoro', w: 'dēvorō', ru: 'пожирать', pos: 'v', forms: 'dēvorō, dēvorāre, dēvorāvī, dēvorātum', ex: 'Agnum dēvorat.', exRu: 'Пожирает ягнёнка.', note: null },
        { id: 'la-fabula', w: 'fābula', ru: 'басня, рассказ; пьеса', pos: 'n', g: 'f', forms: 'fābula, -ae f.', ex: 'Fābula docet…', exRu: 'Басня учит…', note: null },
        { id: 'la-doceo', w: 'doceō', ru: 'учить, обучать', pos: 'v', forms: 'doceō, docēre, docuī, doctum', ex: 'Puerōs litterās docet.', exRu: 'Учит мальчиков грамоте.', note: 'Двойной Acc.: docēre aliquem aliquid.' },
        { id: 'la-opprimo', w: 'opprimō', ru: 'подавлять, угнетать; застигать', pos: 'v', forms: 'opprimō, opprimere, oppressī, oppressum', ex: 'Bonōs opprimunt.', exRu: 'Угнетают добрых.', note: null },
        { id: 'la-falsus', w: 'falsus', ru: 'ложный', pos: 'adj', forms: 'falsus, -a, -um', ex: 'falsae causae', exRu: 'ложные предлоги', note: 'Изначально part. от fallō.' },
        { id: 'la-longe', w: 'longē', ru: 'далеко; намного', pos: 'adv', forms: null, ex: 'longē īnferior', exRu: 'гораздо ниже', note: 'При сравн./превосх. степени — «намного».' }
      ],
      text: {
        title: 'Lupus et agnus (ad Phaedrum)',
        lines: [
          { t: 'Ad rīvum lupus et agnus veniunt.', ru: 'К ручью приходят волк и ягнёнок.' },
          { t: 'Superior stat lupus, longē īnferior agnus.', ru: 'Выше по течению стоит волк, гораздо ниже — ягнёнок.' },
          { t: 'Tum lupus clāmat: «Cūr aquam meam turbās?»', ru: 'Тогда волк кричит: «Почему ты мутишь мою воду?»' },
          { t: 'Agnus timet et respondet: «Quōmodo id faciō, lupe? Aqua ā tē ad mē fluit.»', ru: 'Ягнёнок боится и отвечает: «Как же я это делаю, волк? Вода течёт от тебя ко мне».' },
          { t: 'Lupus iterum clāmat: «Ante sex mēnsēs male dīcēbās dē mē!»', ru: 'Волк снова кричит: «Шесть месяцев назад ты дурно обо мне говорил!»' },
          { t: 'Agnus: «Tum nōndum vīvēbam.»', ru: 'Ягнёнок: «Тогда меня ещё не было на свете».' },
          { t: 'Lupus: «Pater tuus male dīcēbat! Itaque tē nunc dēvorābō.»', ru: 'Волк: «Твой отец дурно говорил! Поэтому я тебя сейчас съем».' },
          { t: 'Et agnum capit et dēvorat.', ru: 'И хватает ягнёнка, и пожирает.' },
          { t: 'Fābula docet: malī hominēs falsīs causīs bonōs opprimunt.', ru: 'Басня учит: дурные люди под ложными предлогами губят добрых.' }
        ]
      }
    }
  ]
};

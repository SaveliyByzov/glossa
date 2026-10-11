export default {
  id: 'it-u07',
  title: 'Futuro, condizionale, congiuntivo presente',
  titleRu: 'Будущее, кондиционал, сослагательное наклонение (настоящее)',
  summary: 'Futuro semplice и anteriore (включая эпистемическое употребление), condizionale presente и passato («будущее в прошедшем»), формы и триггеры congiuntivo presente и passato.',
  lessons: [
    {
      id: 'it-u07-l01',
      kind: 'grammar',
      title: 'Futuro semplice и anteriore',
      goals: ['Образовывать futuro, включая сокращённые основы (sarò, avrò, andrò, verrò)', 'Употреблять futuro для предположения', 'Употреблять futuro anteriore после quando / appena / dopo che'],
      skills: ['it.fut.form', 'it.fut.anteriore'],
      theory: [
        { type: 'table', caption: 'Futuro semplice', head: ['', 'parlare', 'prendere', 'dormire'],
          rows: [
            ['io', 'parl{{erò}}', 'prend{{erò}}', 'dorm{{irò}}'],
            ['tu', 'parl{{erai}}', 'prend{{erai}}', 'dorm{{irai}}'],
            ['lui / lei', 'parl{{erà}}', 'prend{{erà}}', 'dorm{{irà}}'],
            ['noi', 'parl{{eremo}}', 'prend{{eremo}}', 'dorm{{iremo}}'],
            ['voi', 'parl{{erete}}', 'prend{{erete}}', 'dorm{{irete}}'],
            ['loro', 'parl{{eranno}}', 'prend{{eranno}}', 'dorm{{iranno}}']
          ],
          note: '-are → -er-. Орфография: cercherò, pagherò; mangerò, comincerò (i исчезает).' },
        { type: 'table', caption: 'Неправильные основы (те же в condizionale)', head: ['тип', 'глаголы'],
          rows: [
            ['выпадение гласной', 'andare → andr-, avere → avr-, dovere → dovr-, potere → potr-, sapere → sapr-, vedere → vedr-, vivere → vivr-'],
            ['-rr-', 'venire → verr-, volere → vorr-, tenere → terr-, rimanere → rimarr-, bere → berr-'],
            ['сохраняют -a-', 'fare → far-, dare → dar-, stare → star-'],
            ['особая', 'essere → sar-']
          ] },
        { type: 'tip', text: 'Романское будущее — из перифразы «инфинитив + habeo»: cantare habeo → canterò. Окончания futuro — это бывшие формы avere: -ò, -ai, -à, -anno ~ ho, hai, ha, hanno.' },
        { type: 'rule', text: '**Эпистемический futuro** — предположение о настоящем: **Dov’è Luca? — Sarà a casa.** (Наверное, дома.) **Che ore sono? — Saranno le dieci.** Futuro anteriore — о прошлом: **Avrà perso il treno.** (Наверное, опоздал на поезд.)' },
        { type: 'rule', text: '**Futuro anteriore** = futuro от avere/essere + причастие: **avrò finito, sarò partito**. Будущее действие, предшествующее другому будущему: **Quando avrò finito, ti chiamerò.**' },
        { type: 'contrast', text: 'Как и в русском (и в отличие от английского), после **quando, se, appena** при отнесении к будущему стоит будущее время: **Quando arriverò, ti chiamerò** — Когда приеду, позвоню. Русский сов. вид «закончу» часто соответствует futuro anteriore.' },
        { type: 'pitfall', text: 'В разговорной речи ближайшее будущее чаще передаётся презенсом: **Domani vado a Roma.** Futuro — для менее определённых планов и предположений.' }
      ],
      vocab: [
        { id: 'it-domani', w: 'domani', ru: 'завтра', pos: 'adv', g: null, forms: null, ex: 'A domani!', exRu: 'До завтра!', note: 'dopodomani — послезавтра' },
        { id: 'it-prossimo', w: 'prossimo', ru: 'следующий; ближайший', pos: 'adj', g: null, forms: 'prossimo, -a, -i, -e', ex: 'L’anno prossimo andrò in Giappone.', exRu: 'В следующем году поеду в Японию.', note: 'ударение: pròssimo' },
        { id: 'it-futuro', w: 'futuro', ru: 'будущее', pos: 'n', g: 'm', forms: 'il futuro', ex: 'Chi sa cosa succederà in futuro?', exRu: 'Кто знает, что будет в будущем?', note: null },
        { id: 'it-probabilmente', w: 'probabilmente', ru: 'вероятно', pos: 'adv', g: null, forms: null, ex: 'Probabilmente pioverà.', exRu: 'Вероятно, пойдёт дождь.', note: null },
        { id: 'it-forse', w: 'forse', ru: 'может быть, возможно', pos: 'adv', g: null, forms: null, ex: 'Forse verrò anch’io.', exRu: 'Может быть, я тоже приду.', note: null },
        { id: 'it-sicuro', w: 'sicuro', ru: 'уверенный; безопасный', pos: 'adj', g: null, forms: 'sicuro, -a, -i, -e', ex: 'Sei sicuro?', exRu: 'Ты уверен?', note: null },
        { id: 'it-trasferirsi', w: 'trasferirsi', ru: 'переезжать', pos: 'v', g: null, forms: 'mi trasferisco; trasferito (essere)', ex: 'Ci trasferiremo a Milano.', exRu: 'Мы переедем в Милан.', note: '-isc-' },
        { id: 'it-laurearsi', w: 'laurearsi', ru: 'окончить университет', pos: 'v', g: null, forms: 'mi làureo; laureato (essere)', ex: 'Mi laureerò a giugno.', exRu: 'Я окончу университет в июне.', note: null },
        { id: 'it-cambiare', w: 'cambiare', ru: 'менять(ся)', pos: 'v', g: null, forms: 'cambio, cambi; cambiato (avere / essere)', ex: 'Le cose cambieranno.', exRu: 'Всё изменится.', note: null },
        { id: 'it-progetto', w: 'progetto', ru: 'проект, план', pos: 'n', g: 'm', forms: 'il progetto, -i', ex: 'Quali sono i tuoi progetti?', exRu: 'Какие у тебя планы?', note: null },
        { id: 'it-mese', w: 'mese', ru: 'месяц', pos: 'n', g: 'm', forms: 'il mese, -i', ex: 'Tra un mese.', exRu: 'Через месяц.', note: null },
        { id: 'it-viaggio', w: 'viaggio', ru: 'путешествие, поездка', pos: 'n', g: 'm', forms: 'il viaggio, i viaggi', ex: 'Buon viaggio!', exRu: 'Счастливого пути!', note: null }
      ],
      text: null
    },
    {
      id: 'it-u07-l02',
      kind: 'grammar',
      title: 'Condizionale presente и passato',
      goals: ['Образовывать condizionale presente и passato', 'Употреблять его для вежливости, совета, непроверенной информации', 'Передавать «будущее в прошедшем» через condizionale passato'],
      skills: ['it.cond.form', 'it.cond.passato'],
      theory: [
        { type: 'table', caption: 'Condizionale presente', head: ['', 'parlare', 'essere', 'volere'],
          rows: [
            ['io', 'parl{{erei}}', 'sarei', 'vorrei'],
            ['tu', 'parl{{eresti}}', 'saresti', 'vorresti'],
            ['lui / lei', 'parl{{erebbe}}', 'sarebbe', 'vorrebbe'],
            ['noi', 'parl{{eremmo}}', 'saremmo', 'vorremmo'],
            ['voi', 'parl{{ereste}}', 'sareste', 'vorreste'],
            ['loro', 'parl{{erebbero}}', 'sarebbero', 'vorrebbero']
          ],
          note: 'Основа та же, что у futuro (неправильные тоже). Condizionale passato = condizionale от avere/essere + причастие: **avrei parlato, sarei andato/-a**.' },
        { type: 'pitfall', text: '**parleremmo** (кондиционал, -mm-) ≠ **parleremo** (будущее, -m-). На слух различие — в долготе согласной.' },
        { type: 'table', caption: 'Употребление', head: ['функция', 'пример'],
          rows: [
            ['вежливая просьба', 'Vorrei un caffè. Potrebbe aiutarmi?'],
            ['совет', 'Dovresti dormire di più. — Тебе бы больше спать.'],
            ['желание / нереальное', 'Andrei volentieri in Sicilia. Sarei venuto, ma ero malato.'],
            ['непроверенная информация (СМИ)', 'Il ministro sarebbe a Parigi. — Министр, по имеющимся данным, в Париже.'],
            ['будущее в прошедшем', 'Ha detto che sarebbe venuto. — Он сказал, что придёт.']
          ] },
        { type: 'rule', text: '**Будущее в прошедшем** выражается **только condizionale passato**: **Mi ha promesso che mi avrebbe scritto** — обещал, что напишет. Не *mi scriverebbe (встречается в небрежной речи, но считается ошибкой) и не *mi scriverà (допустимо лишь если действие всё ещё в будущем относительно «сейчас»).' },
        { type: 'contrast', text: 'Русский в косвенной речи сохраняет время прямой речи («сказал, что придёт»), итальянский сдвигает его: будущее → condizionale passato. Это одна из самых устойчивых ошибок русскоязычных.' },
        { type: 'tip', text: 'Condizionale — из «инфинитив + *hebui» (perfectum от habere): canterei < cantare *hebui. Поэтому основа совпадает с futuro.' }
      ],
      vocab: [
        { id: 'it-volentieri', w: 'volentieri', ru: 'охотно, с удовольствием', pos: 'adv', g: null, forms: null, ex: 'Vieni? — Volentieri!', exRu: 'Придёшь? — С удовольствием!', note: null },
        { id: 'it-malato', w: 'malato', ru: 'больной', pos: 'adj', g: null, forms: 'malato, -a, -i, -e', ex: 'Sono malato da una settimana.', exRu: 'Я болею уже неделю.', note: null },
        { id: 'it-consiglio', w: 'consiglio', ru: 'совет', pos: 'n', g: 'm', forms: 'il consiglio, i consigli', ex: 'Ti do un consiglio.', exRu: 'Дам тебе совет.', note: 'consigliare — советовать' },
        { id: 'it-favore', w: 'favore', ru: 'одолжение, услуга', pos: 'n', g: 'm', forms: 'il favore, -i', ex: 'Mi faresti un favore?', exRu: 'Сделаешь мне одолжение?', note: 'per favore — пожалуйста' },
        { id: 'it-ministro', w: 'ministro', ru: 'министр', pos: 'n', g: 'm', forms: 'il ministro, -i', ex: 'Il ministro avrebbe dato le dimissioni.', exRu: 'Министр, по слухам, подал в отставку.', note: null },
        { id: 'it-promessa', w: 'promessa', ru: 'обещание', pos: 'n', g: 'f', forms: 'la promessa, -e', ex: 'Una promessa è una promessa.', exRu: 'Обещание есть обещание.', note: null },
        { id: 'it-piuttosto', w: 'piuttosto', ru: 'скорее; довольно', pos: 'adv', g: null, forms: null, ex: 'Preferirei piuttosto restare.', exRu: 'Я бы скорее остался.', note: 'piuttosto che — вместо того чтобы' },
        { id: 'it-davvero', w: 'davvero', ru: 'действительно, правда', pos: 'adv', g: null, forms: null, ex: 'Davvero? Non lo sapevo.', exRu: 'Правда? Я не знал.', note: null },
        { id: 'it-meglio', w: 'meglio', ru: 'лучше (наречие)', pos: 'adv', g: null, forms: null, ex: 'Sarebbe meglio aspettare.', exRu: 'Лучше было бы подождать.', note: 'adj. migliore' },
        { id: 'it-peggio', w: 'peggio', ru: 'хуже (наречие)', pos: 'adv', g: null, forms: null, ex: 'Potrebbe andare peggio.', exRu: 'Могло быть и хуже.', note: 'adj. peggiore' },
        { id: 'it-volere-bene', w: 'volere bene', ru: 'любить (близких, друзей)', pos: 'phr', g: null, forms: 'ti voglio bene', ex: 'Ti voglio bene, mamma.', exRu: 'Я люблю тебя, мама.', note: null },
        { id: 'it-dimissioni', w: 'dimissioni', ru: 'отставка', pos: 'n', g: 'f', forms: 'le dimissioni (pl.)', ex: 'Ha dato le dimissioni.', exRu: 'Он подал в отставку.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u07-l03',
      kind: 'grammar',
      title: 'Congiuntivo presente: формы',
      goals: ['Образовывать congiuntivo presente правильных глаголов', 'Выводить неправильные формы от 1 л. ед. ч. презенса', 'Знать essere, avere, sapere, dare, stare'],
      skills: ['it.subj.pres.form'],
      theory: [
        { type: 'table', caption: 'Congiuntivo presente', head: ['', 'parlare', 'prendere', 'dormire', 'capire'],
          rows: [
            ['che io', 'parl{{i}}', 'prend{{a}}', 'dorm{{a}}', 'cap{{isca}}'],
            ['che tu', 'parl{{i}}', 'prend{{a}}', 'dorm{{a}}', 'cap{{isca}}'],
            ['che lui / lei', 'parl{{i}}', 'prend{{a}}', 'dorm{{a}}', 'cap{{isca}}'],
            ['che noi', 'parl{{iamo}}', 'prend{{iamo}}', 'dorm{{iamo}}', 'cap{{iamo}}'],
            ['che voi', 'parl{{iate}}', 'prend{{iate}}', 'dorm{{iate}}', 'cap{{iate}}'],
            ['che loro', 'parl{{ino}}', 'prend{{ano}}', 'dorm{{ano}}', 'cap{{iscano}}']
          ],
          note: 'Три лица ед. ч. совпадают — при неясности добавляйте местоимение: che tu parli. noi = презенс; voi = -iate.' },
        { type: 'rule', text: 'Неправильные глаголы строят ед. ч. и 3 л. мн. ч. от основы **1 л. ед. ч. презенса**: vengo → **venga**, faccio → **faccia**, dico → **dica**, vado → **vada**, esco → **esca**, posso → **possa**, voglio → **voglia**, bevo → **beva**. noi/voi — от основы noi: veniamo → **veniate**, andiamo → **andiate**.' },
        { type: 'table', caption: 'Особые', head: ['', 'essere', 'avere', 'sapere', 'dare', 'stare', 'dovere'],
          rows: [
            ['io / tu / lui', 'sia', 'abbia', 'sappia', 'dia', 'stia', 'debba'],
            ['noi', 'siamo', 'abbiamo', 'sappiamo', 'diamo', 'stiamo', 'dobbiamo'],
            ['voi', 'siate', 'abbiate', 'sappiate', 'diate', 'stiate', 'dobbiate'],
            ['loro', 'siano', 'abbiano', 'sappiano', 'diano', 'stiano', 'debbano']
          ] },
        { type: 'tip', text: 'Правило «смены гласной»: у глаголов на -are в congiuntivo появляется -i-, у остальных -a- (ср. латинское amet / legat). Те же формы — вежливый императив: **Parli più piano, per favore.**' },
        { type: 'pitfall', text: 'Не путайте **abbiamo** (индикатив и конъюнктив совпадают) с **abbiate** (только конъюнктив; индикатив — avete).' }
      ],
      vocab: [
        { id: 'it-sperare', w: 'sperare', ru: 'надеяться', pos: 'v', g: null, forms: 'spero; sperato (avere)', ex: 'Spero che tu stia bene.', exRu: 'Надеюсь, у тебя всё хорошо.', note: '+ congiuntivo' },
        { id: 'it-bisognare', w: 'bisognare', ru: 'быть нужным (безл.)', pos: 'v', g: null, forms: 'bisogna (только 3 л.)', ex: 'Bisogna che tu venga.', exRu: 'Нужно, чтобы ты пришёл.', note: 'bisogna + inf. / che + congiuntivo' },
        { id: 'it-importante', w: 'importante', ru: 'важный', pos: 'adj', g: null, forms: 'importante, -i', ex: 'È importante che tu lo sappia.', exRu: 'Важно, чтобы ты это знал.', note: null },
        { id: 'it-necessario', w: 'necessario', ru: 'необходимый', pos: 'adj', g: null, forms: 'necessario, -a, necessari, -e', ex: 'Non è necessario.', exRu: 'Это не обязательно.', note: null },
        { id: 'it-possibile', w: 'possibile', ru: 'возможный', pos: 'adj', g: null, forms: 'possibile, -i', ex: 'È possibile che piova.', exRu: 'Возможно, пойдёт дождь.', note: null },
        { id: 'it-piano', w: 'piano', ru: 'медленно; тихо; (сущ.) этаж; план; фортепиано', pos: 'adv', g: null, forms: 'il piano, -i', ex: 'Parli più piano, per favore.', exRu: 'Говорите помедленнее, пожалуйста.', note: 'al terzo piano — на третьем этаже' },
        { id: 'it-permettere', w: 'permettere', ru: 'позволять', pos: 'v', g: null, forms: 'permetto; permesso (avere)', ex: 'Permette?', exRu: 'Разрешите?', note: null },
        { id: 'it-lingua', w: 'lingua', ru: 'язык', pos: 'n', g: 'f', forms: 'la lingua, -e', ex: 'Parla tre lingue.', exRu: 'Он говорит на трёх языках.', note: null },
        { id: 'it-esame', w: 'esame', ru: 'экзамен', pos: 'n', g: 'm', forms: 'l’esame, gli esami', ex: 'Spero che l’esame vada bene.', exRu: 'Надеюсь, экзамен пройдёт хорошо.', note: 'dare / superare un esame — сдавать / сдать' },
        { id: 'it-tranne', w: 'tranne', ru: 'кроме', pos: 'prep', g: null, forms: null, ex: 'Tutti tranne lui.', exRu: 'Все, кроме него.', note: null },
        { id: 'it-subito', w: 'subito', ru: 'сразу, немедленно', pos: 'adv', g: null, forms: null, ex: 'Vengo subito!', exRu: 'Сейчас приду!', note: 'ударение: sùbito' },
        { id: 'it-mamma', w: 'mamma', ru: 'мама', pos: 'n', g: 'f', forms: 'la mamma, -e', ex: 'Mamma mia!', exRu: 'Боже мой!', note: null }
      ],
      text: null
    },
    {
      id: 'it-u07-l04',
      kind: 'grammar',
      title: 'Триггеры congiuntivo и congiuntivo passato',
      goals: ['Распознавать глаголы и союзы, требующие congiuntivo', 'Заменять che + congiuntivo на di + инфинитив при совпадении подлежащих', 'Образовывать congiuntivo passato'],
      skills: ['it.subj.triggers', 'it.subj.passato'],
      theory: [
        { type: 'table', caption: 'Что требует congiuntivo', head: ['группа', 'примеры'],
          rows: [
            ['мнение, предположение', 'penso / credo / mi sembra / immagino che'],
            ['воля, желание, надежда', 'voglio / preferisco / spero / chiedo che'],
            ['эмоция', 'sono contento / mi dispiace / ho paura / mi stupisce che'],
            ['сомнение', 'dubito / non sono sicuro che; non so se (факульт.)'],
            ['безличные оценки', 'è importante / è necessario / è possibile / bisogna / è meglio che'],
            ['союзы', 'benché, sebbene, affinché, perché (= чтобы), prima che, senza che, a meno che, purché, a condizione che'],
            ['относительные', 'после превосходной степени и отрицания: È il libro più bello che io abbia mai letto. Non c’è nessuno che sappia…'],
            ['неопределённые', 'chiunque, qualunque, dovunque: Chiunque tu sia…']
          ] },
        { type: 'rule', text: 'Индикатив — после выражений уверенности и факта: **so che, è vero che, sono sicuro che, è chiaro che**, а также после **perché** (= потому что), **dopo che**, **mentre**.' },
        { type: 'rule', text: 'При одном подлежащем — **di + инфинитив**: **Penso di partire** (не *Penso che io parta). **Spero di vederti presto.** С volere и preferire — инфинитив без предлога: **Voglio partire.**' },
        { type: 'rule', text: '**Congiuntivo passato** = congiuntivo от avere/essere + причастие: **abbia finito, sia partito/-a**. Предшествование: **Penso che sia già partito** — думаю, он уже уехал.' },
        { type: 'contrast', text: 'Воля в русском тоже требует особой формы: «Хочу, **чтобы** ты пришёл» — **Voglio che tu venga**. Это хорошая опора. Но мнение по-русски выражается индикативом («думаю, что он дома»), а по-итальянски — конъюнктивом: **Penso che sia a casa**. Здесь русский подсказывает неправильно.' },
        { type: 'pitfall', text: '**perché** + индикатив = «потому что»; **perché** + congiuntivo = «чтобы»: Te lo dico **perché** tu lo **sappia** — Говорю, чтобы ты знал.' },
        { type: 'tip', text: 'В разговорной речи после penso che индикатив встречается, но в письменной и нормативной речи нужен congiuntivo — в упражнениях курс принимает только его.' }
      ],
      vocab: [
        { id: 'it-immaginare', w: 'immaginare', ru: 'представлять (себе)', pos: 'v', g: null, forms: 'immàgino; immaginato (avere)', ex: 'Immagino che tu sia stanco.', exRu: 'Представляю, как ты устал.', note: null },
        { id: 'it-dubitare', w: 'dubitare', ru: 'сомневаться', pos: 'v', g: null, forms: 'dùbito; dubitato (avere)', ex: 'Dubito che venga.', exRu: 'Сомневаюсь, что он придёт.', note: null },
        { id: 'it-dispiacere', w: 'dispiacere', ru: 'огорчать; быть жаль', pos: 'v', g: null, forms: 'mi dispiace; dispiaciuto (essere)', ex: 'Mi dispiace che tu parta.', exRu: 'Жаль, что ты уезжаешь.', note: 'Mi dispiace! — Простите / Мне жаль' },
        { id: 'it-contento', w: 'contento', ru: 'довольный, радостный', pos: 'adj', g: null, forms: 'contento, -a, -i, -e', ex: 'Sono contento che tu sia qui.', exRu: 'Я рад, что ты здесь.', note: null },
        { id: 'it-paura', w: 'paura', ru: 'страх', pos: 'n', g: 'f', forms: 'la paura, -e', ex: 'Ho paura che sia troppo tardi.', exRu: 'Боюсь, что слишком поздно.', note: 'avere paura di' },
        { id: 'it-benche', w: 'benché', ru: 'хотя', pos: 'conj', g: null, forms: 'syn. sebbene', ex: 'Benché sia tardi, resto.', exRu: 'Хотя уже поздно, я остаюсь.', note: '+ congiuntivo' },
        { id: 'it-affinche', w: 'affinché', ru: 'чтобы, для того чтобы', pos: 'conj', g: null, forms: null, ex: 'Parlo piano affinché tu capisca.', exRu: 'Говорю медленно, чтобы ты понял.', note: '+ congiuntivo' },
        { id: 'it-perche', w: 'perché', ru: 'почему; потому что; чтобы (+ congiuntivo)', pos: 'conj', g: null, forms: null, ex: 'Perché ridi? — Perché sono felice.', exRu: 'Почему ты смеёшься? — Потому что я счастлив.', note: null },
        { id: 'it-purche', w: 'purché', ru: 'лишь бы, при условии что', pos: 'conj', g: null, forms: null, ex: 'Vengo, purché tu guidi.', exRu: 'Приду, если только ты поведёшь машину.', note: '+ congiuntivo' },
        { id: 'it-chiunque', w: 'chiunque', ru: 'кто бы ни, любой', pos: 'pron', g: null, forms: null, ex: 'Chiunque può farlo.', exRu: 'Это может сделать любой.', note: null },
        { id: 'it-felice', w: 'felice', ru: 'счастливый', pos: 'adj', g: null, forms: 'felice, -i', ex: 'Sono felice che tu sia venuto.', exRu: 'Я счастлив, что ты пришёл.', note: null },
        { id: 'it-vero', w: 'vero', ru: 'настоящий, правдивый', pos: 'adj', g: null, forms: 'vero, -a, -i, -e', ex: 'È vero che parte domani.', exRu: 'Правда, что он уезжает завтра (индикатив!).', note: 'Vero? — Правда?' },
        { id: 'it-guidare', w: 'guidare', ru: 'водить (машину), вести', pos: 'v', g: null, forms: 'guido; guidato (avere)', ex: 'Sai guidare?', exRu: 'Ты умеешь водить?', note: null }
      ],
      text: null
    },
    {
      id: 'it-u07-l05',
      kind: 'reading',
      title: 'Lettera a un’amica',
      goals: ['Читать письмо с futuro, condizionale и congiuntivo', 'Находить триггеры congiuntivo в тексте'],
      skills: ['it.fut.form', 'it.cond.form', 'it.subj.triggers'],
      theory: [],
      vocab: [
        { id: 'it-lettera', w: 'lettera', ru: 'письмо; буква', pos: 'n', g: 'f', forms: 'la lettera, -e', ex: 'Ho ricevuto la tua lettera.', exRu: 'Я получила твоё письмо.', note: 'ударение: lèttera' },
        { id: 'it-ricevere', w: 'ricevere', ru: 'получать', pos: 'v', g: null, forms: 'ricevo; ricevuto (avere)', ex: 'Hai ricevuto la mia mail?', exRu: 'Ты получил моё письмо?', note: null },
        { id: 'it-caro', w: 'caro', ru: 'дорогой (милый; дорогостоящий)', pos: 'adj', g: null, forms: 'caro, -a, cari, care', ex: 'Cara Elena…', exRu: 'Дорогая Елена…', note: null },
        { id: 'it-ospite', w: 'ospite', ru: 'гость; хозяин (принимающий)', pos: 'n', g: 'c', forms: 'l’ospite, gli/le ospiti', ex: 'Sarai mia ospite.', exRu: 'Будешь моей гостьей.', note: 'ударение: òspite' },
        { id: 'it-abbraccio', w: 'abbraccio', ru: 'объятие', pos: 'n', g: 'm', forms: 'l’abbraccio, gli abbracci', ex: 'Un abbraccio forte!', exRu: 'Крепко обнимаю!', note: 'в конце письма' },
        { id: 'it-appartamento', w: 'appartamento', ru: 'квартира', pos: 'n', g: 'm', forms: 'l’appartamento, gli appartamenti', ex: 'L’appartamento è piccolo ma luminoso.', exRu: 'Квартира маленькая, но светлая.', note: null },
        { id: 'it-luminoso', w: 'luminoso', ru: 'светлый, яркий', pos: 'adj', g: null, forms: 'luminoso, -a, -i, -e', ex: 'Una stanza luminosa.', exRu: 'Светлая комната.', note: null },
        { id: 'it-stanza', w: 'stanza', ru: 'комната', pos: 'n', g: 'f', forms: 'la stanza, -e', ex: 'C’è una stanza per te.', exRu: 'Для тебя есть комната.', note: null }
      ],
      text: {
        title: 'Lettera a un’amica',
        lines: [
          { t: 'Cara Elena, spero che tu stia bene e che il nuovo lavoro ti piaccia.', ru: 'Дорогая Елена, надеюсь, у тебя всё хорошо и новая работа тебе нравится.' },
          { t: 'Io finalmente mi sono trasferita a Napoli: l’appartamento è piccolo ma luminoso.', ru: 'Я наконец переехала в Неаполь: квартира маленькая, но светлая.' },
          { t: 'Mi avevi detto che saresti venuta a trovarmi in primavera. È ancora vero?', ru: 'Ты говорила, что приедешь ко мне весной. Это ещё в силе?' },
          { t: 'Mi farebbe molto piacere! C’è una stanza per gli ospiti, quindi potresti restare quanto vuoi.', ru: 'Я была бы очень рада! Есть комната для гостей, так что можешь остаться сколько хочешь.' },
          { t: 'Quando arriverai, ti porterò a mangiare la pizza più buona che tu abbia mai assaggiato.', ru: 'Когда приедешь, я отведу тебя поесть самую вкусную пиццу, какую ты когда-либо пробовала.' },
          { t: 'Bisogna che tu mi dica presto le date, affinché io possa organizzarmi.', ru: 'Нужно, чтобы ты поскорее сообщила мне даты, чтобы я могла всё организовать.' },
          { t: 'Penso che maggio sia il mese migliore: non farà ancora troppo caldo.', ru: 'Думаю, май — лучший месяц: ещё не будет слишком жарко.' },
          { t: 'Scrivimi presto! Un abbraccio forte, Sara.', ru: 'Пиши скорее! Крепко обнимаю, Сара.' }
        ]
      }
    }
  ]
}

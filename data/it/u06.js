export default {
  id: 'it-u06',
  title: 'I pronomi atoni e l’imperativo',
  titleRu: 'Безударные местоимения (клитики) и императив',
  summary: 'Прямые и косвенные клитики, piacere, ci и ne, сочетания (glielo, me ne), императив и положение местоимений при нём.',
  lessons: [
    {
      id: 'it-u06-l01',
      kind: 'grammar',
      title: 'Прямые местоимения',
      goals: ['Употреблять mi, ti, lo, la, ci, vi, li, le', 'Ставить клитику перед глаголом или после инфинитива', 'Согласовывать причастие с lo / la / li / le'],
      skills: ['it.pron.direct'],
      theory: [
        { type: 'table', caption: 'Прямые клитики (винительный)', head: ['', 'ед. ч.', 'мн. ч.'],
          rows: [
            ['1 л.', 'mi — меня', 'ci — нас'],
            ['2 л.', 'ti — тебя', 'vi — вас'],
            ['3 л. м.', 'lo — его', 'li — их (м.)'],
            ['3 л. ж.', 'la — её; La — Вас', 'le — их (ж.)']
          ] },
        { type: 'rule', text: 'Клитика стоит **перед** спрягаемой формой (**Lo vedo**), но **присоединяется** к инфинитиву и герундию (**Voglio vederlo**, **vedendolo**). С модальными — оба варианта: **Lo voglio vedere = Voglio vederlo**.' },
        { type: 'rule', text: 'В passato prossimo **lo, la** перед гласной elide: **l’ho visto**. Причастие обязательно согласуется с **lo, la, li, le**: **L’ho vist{{a}}** (Maria), **Li ho comprat{{i}}**, **Le ho lett{{e}}**. С mi, ti, ci, vi согласование факультативно.' },
        { type: 'examples', items: [
          { t: 'Conosci Paolo? — Sì, lo conosco.', ru: 'Знаешь Паоло? — Да, знаю его.' },
          { t: 'Dove sono le chiavi? — Non le trovo.', ru: 'Где ключи? — Не могу их найти.' },
          { t: 'Hai visto i ragazzi? — Sì, li ho visti ieri.', ru: 'Ты видел ребят? — Да, видел их вчера.' },
          { t: 'Lo so. / Non lo so.', ru: 'Знаю. / Не знаю. (lo — нейтральное «это»)' }
        ] },
        { type: 'contrast', text: 'Русский часто опускает дополнение («Знаешь Паоло? — Знаю»), итальянский требует клитику: **Sì, lo conosco**. Без неё фраза звучит неполной.' },
        { type: 'pitfall', text: 'li и le перед avere не элидируются: **li ho visti**, не *l’ho visti.' }
      ],
      vocab: [
        { id: 'it-trovare', w: 'trovare', ru: 'находить', pos: 'v', g: null, forms: 'trovo; trovato (avere)', ex: 'Non trovo il telefono.', exRu: 'Не могу найти телефон.', note: 'andare a trovare qn — навестить' },
        { id: 'it-portare', w: 'portare', ru: 'приносить; носить; везти', pos: 'v', g: null, forms: 'porto; portato (avere)', ex: 'Porto io il vino.', exRu: 'Вино принесу я.', note: null },
        { id: 'it-invitare', w: 'invitare', ru: 'приглашать', pos: 'v', g: null, forms: 'invito; invitato (avere)', ex: 'Ti invito a cena.', exRu: 'Приглашаю тебя на ужин.', note: null },
        { id: 'it-aiutare', w: 'aiutare', ru: 'помогать', pos: 'v', g: null, forms: 'aiuto; aiutato (avere)', ex: 'Ti aiuto io.', exRu: 'Я тебе помогу.', note: 'переходный! aiutare qn — помогать кому (вин. п.)' },
        { id: 'it-ringraziare', w: 'ringraziare', ru: 'благодарить', pos: 'v', g: null, forms: 'ringrazio; ringraziato (avere)', ex: 'La ringrazio.', exRu: 'Благодарю Вас.', note: null },
        { id: 'it-salutare', w: 'salutare', ru: 'здороваться, прощаться; передавать привет', pos: 'v', g: null, forms: 'saluto; salutato (avere)', ex: 'Salutami tua madre!', exRu: 'Передай привет маме!', note: 'переходный' },
        { id: 'it-lasciare', w: 'lasciare', ru: 'оставлять; позволять', pos: 'v', g: null, forms: 'lascio, lasci; lasciato (avere)', ex: 'Lasciami in pace!', exRu: 'Оставь меня в покое!', note: null },
        { id: 'it-amare', w: 'amare', ru: 'любить', pos: 'v', g: null, forms: 'amo; amato (avere)', ex: 'Ti amo.', exRu: 'Я тебя люблю.', note: 'о друзьях/семье: ti voglio bene' },
        { id: 'it-capello', w: 'capello', ru: 'волос; (мн.) волосы', pos: 'n', g: 'm', forms: 'il capello, i capelli', ex: 'Ha i capelli lunghi.', exRu: 'У неё длинные волосы.', note: null },
        { id: 'it-occhiali', w: 'occhiali', ru: 'очки', pos: 'n', g: 'm', forms: 'gli occhiali (pl.)', ex: 'Dove ho messo gli occhiali?', exRu: 'Куда я положил очки?', note: null },
        { id: 'it-giornale', w: 'giornale', ru: 'газета', pos: 'n', g: 'm', forms: 'il giornale, -i', ex: 'L’hai letto, il giornale?', exRu: 'Ты читал газету?', note: 'ложный друг: не «журнал» (= rivista)' },
        { id: 'it-rivista', w: 'rivista', ru: 'журнал', pos: 'n', g: 'f', forms: 'la rivista, -e', ex: 'Leggo una rivista di moda.', exRu: 'Читаю модный журнал.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u06-l02',
      kind: 'grammar',
      title: 'Косвенные местоимения и piacere',
      goals: ['Употреблять mi, ti, gli, le, Le, ci, vi, gli', 'Строить фразы с piacere, mancare, sembrare в презенсе и прошедшем', 'Помнить расхождения в управлении с русским'],
      skills: ['it.pron.indirect', 'it.piacere'],
      theory: [
        { type: 'table', caption: 'Косвенные клитики (дательный)', head: ['', 'безударная', 'ударная'],
          rows: [
            ['мне', 'mi', 'a me'], ['тебе', 'ti', 'a te'], ['ему', 'gli', 'a lui'],
            ['ей / Вам', 'le / Le', 'a lei / a Lei'], ['нам', 'ci', 'a noi'], ['вам', 'vi', 'a voi'],
            ['им', 'gli (разг. и нейтр.), loro (книжн., после глагола)', 'a loro']
          ] },
        { type: 'rule', text: 'Косвенная клитика **не вызывает** согласования причастия: **Le ho telefonato** (ей), но **Le ho viste** (их, ж.) — разные le!' },
        { type: 'contrast', text: 'Управление не всегда совпадает с русским. **aiutare qn** — помогать кому (у нас дательный, у них прямое: **la aiuto**). **telefonare a qn** — звонить кому (совпадает: **gli telefono**). **chiedere a qn** — спрашивать кого (у нас винительный, у них косвенное: **gli chiedo**). **insegnare a qn** — учить кого.' },
        { type: 'h', text: 'Piacere' },
        { type: 'rule', text: 'Конструкция как в русском «мне нравится»: то, что нравится, — подлежащее; кто испытывает — дательный. **Mi piace la pizza. Mi piacciono gli spaghetti.** Прошедшее — с essere, причастие согласуется с подлежащим: **Mi è piaciut{{a}} la città. Mi sono piaciut{{i}} i film.**' },
        { type: 'examples', items: [
          { t: 'A Marco piace il calcio. = Gli piace il calcio.', ru: 'Марко нравится футбол.' },
          { t: 'Mi manchi.', ru: 'Я по тебе скучаю (букв. «ты мне недостаёшь»).' },
          { t: 'Mi sembra strano.', ru: 'Мне кажется странным.' },
          { t: 'Ti serve qualcosa? — No, mi basta questo.', ru: 'Тебе что-нибудь нужно? — Нет, мне хватит этого.' }
        ] },
        { type: 'pitfall', text: '**Mi manchi** = «я скучаю по тебе», а не «ты скучаешь по мне». Роли инвертированы по сравнению с русским «скучать».' },
        { type: 'tip', text: 'Ударная форма — для контраста и после предлогов: **A me piace, a lui no.** — Мне нравится, а ему нет. «Мне тоже» — **Anche a me**; «а мне нет» — **A me no**.' }
      ],
      vocab: [
        { id: 'it-piacere', w: 'piacere', ru: 'нравиться', pos: 'v', g: null, forms: 'piaccio, piace, piacciono; piaciuto (essere)', ex: 'Ti piace il jazz?', exRu: 'Тебе нравится джаз?', note: 'Piacere! — Очень приятно!' },
        { id: 'it-mancare', w: 'mancare', ru: 'недоставать, отсутствовать', pos: 'v', g: null, forms: 'manco, manchi; mancato (essere)', ex: 'Mi manca la mia famiglia.', exRu: 'Я скучаю по семье.', note: null },
        { id: 'it-sembrare', w: 'sembrare', ru: 'казаться', pos: 'v', g: null, forms: 'sembro; sembrato (essere)', ex: 'Sembra facile.', exRu: 'Кажется лёгким.', note: null },
        { id: 'it-bastare', w: 'bastare', ru: 'хватать, быть достаточным', pos: 'v', g: null, forms: 'basta; bastato (essere)', ex: 'Basta così, grazie.', exRu: 'Хватит, спасибо.', note: 'Basta! — Хватит!' },
        { id: 'it-servire', w: 'servire', ru: 'быть нужным; служить; подавать (еду)', pos: 'v', g: null, forms: 'servo; servito (essere / avere)', ex: 'A che cosa serve?', exRu: 'Для чего это нужно?', note: 'mi serve = мне нужно' },
        { id: 'it-regalare', w: 'regalare', ru: 'дарить', pos: 'v', g: null, forms: 'regalo; regalato (avere)', ex: 'Le ho regalato un libro.', exRu: 'Я подарил ей книгу.', note: null },
        { id: 'it-prestare', w: 'prestare', ru: 'одалживать (давать взаймы)', pos: 'v', g: null, forms: 'presto; prestato (avere)', ex: 'Mi presti la penna?', exRu: 'Одолжишь мне ручку?', note: 'взять взаймы — prendere in prestito' },
        { id: 'it-mandare', w: 'mandare', ru: 'посылать', pos: 'v', g: null, forms: 'mando; mandato (avere)', ex: 'Ti mando un messaggio.', exRu: 'Пришлю тебе сообщение.', note: null },
        { id: 'it-insegnare', w: 'insegnare', ru: 'преподавать, учить (кого-то)', pos: 'v', g: null, forms: 'insegno; insegnato (avere)', ex: 'Gli insegno l’italiano.', exRu: 'Я учу его итальянскому.', note: 'insegnare qc a qn' },
        { id: 'it-regalo', w: 'regalo', ru: 'подарок', pos: 'n', g: 'm', forms: 'il regalo, -i', ex: 'Che bel regalo!', exRu: 'Какой чудесный подарок!', note: null },
        { id: 'it-penna', w: 'penna', ru: 'ручка; перо', pos: 'n', g: 'f', forms: 'la penna, -e', ex: 'Hai una penna?', exRu: 'У тебя есть ручка?', note: null },
        { id: 'it-messaggio', w: 'messaggio', ru: 'сообщение', pos: 'n', g: 'm', forms: 'il messaggio, i messaggi', ex: 'Ho ricevuto il tuo messaggio.', exRu: 'Я получил твоё сообщение.', note: null },
        { id: 'it-strano', w: 'strano', ru: 'странный', pos: 'adj', g: null, forms: 'strano, -a, -i, -e', ex: 'Che strano!', exRu: 'Как странно!', note: null }
      ],
      text: null
    },
    {
      id: 'it-u06-l03',
      kind: 'grammar',
      title: 'Ci и ne',
      goals: ['Употреблять ci как местоименное наречие места и с pensare / credere', 'Употреблять ne с количеством и вместо di + сущ.', 'Знать metterci, volerci, andarsene'],
      skills: ['it.pron.ci', 'it.pron.ne'],
      theory: [
        { type: 'rule', text: '**ci** заменяет обстоятельство места (a/in + место) и дополнение с **a** при глаголах pensare a, credere a, riuscire a: **Vai a Roma? — Sì, ci vado domani. Ci penso io.**' },
        { type: 'rule', text: '**ne** заменяет: 1) существительное при количестве — **Quanti caffè bevi? — Ne bevo tre**; 2) дополнение с **di** — **Che ne pensi?** (di questo) — Что ты об этом думаешь?; **Ne parliamo domani**.' },
        { type: 'examples', items: [
          { t: 'Hai dei fratelli? — Sì, ne ho due. / No, non ne ho.', ru: 'У тебя есть братья? — Да, двое. / Нет.' },
          { t: 'Quante mele hai comprato? — Ne ho comprate cinque.', ru: 'Сколько яблок ты купил? — Пять (причастие согласуется с ne).' },
          { t: 'Ci vuole un’ora. / Ci vogliono due ore.', ru: 'Нужен час. / Нужно два часа (volerci: подлежащее — количество).' },
          { t: 'Ci metto mezz’ora per arrivare.', ru: 'У меня уходит полчаса на дорогу (metterci: подлежащее — человек).' },
          { t: 'Me ne vado!', ru: 'Я ухожу! (andarsene)' }
        ] },
        { type: 'contrast', text: 'Количественное ne не имеет русского аналога: «Сколько у тебя детей? — Двое» по-итальянски обязательно с ne: **Ne ho due**. Его пропуск — одна из самых заметных ошибок.' },
        { type: 'pitfall', text: '**Ci vuole** / **ci vogliono** согласуются с количеством (как piacere), а **ci metto, ci metti** — с человеком. Не *Ci vuole due ore.' }
      ],
      vocab: [
        { id: 'it-pensare', w: 'pensare', ru: 'думать', pos: 'v', g: null, forms: 'penso; pensato (avere)', ex: 'Ci penso io.', exRu: 'Я об этом позабочусь.', note: 'pensare a qc/qn — думать о; pensare di + inf. — собираться' },
        { id: 'it-credere', w: 'credere', ru: 'верить; полагать', pos: 'v', g: null, forms: 'credo; creduto (avere)', ex: 'Non ci credo!', exRu: 'Не верю!', note: 'credere a / in' },
        { id: 'it-riuscire', w: 'riuscire', ru: 'удаваться, суметь', pos: 'v', g: null, forms: 'riesco; riuscito (essere)', ex: 'Non ci riesco.', exRu: 'У меня не получается.', note: 'riuscire a + inf.' },
        { id: 'it-volerci', w: 'volerci', ru: 'требоваться (о времени, количестве)', pos: 'v', g: null, forms: 'ci vuole, ci vogliono; ci è voluto (essere)', ex: 'Ci vuole pazienza.', exRu: 'Нужно терпение.', note: null },
        { id: 'it-metterci', w: 'metterci', ru: 'тратить (время на что-л.)', pos: 'v', g: null, forms: 'ci metto; ci ho messo (avere)', ex: 'Quanto ci metti?', exRu: 'Сколько у тебя уйдёт времени?', note: null },
        { id: 'it-andarsene', w: 'andarsene', ru: 'уходить, уезжать (прочь)', pos: 'v', g: null, forms: 'me ne vado; me ne sono andato (essere)', ex: 'Ce ne andiamo.', exRu: 'Мы уходим.', note: null },
        { id: 'it-quanto', w: 'quanto', ru: 'сколько', pos: 'adv', g: null, forms: 'quanto, -a, -i, -e', ex: 'Quanti anni ha?', exRu: 'Сколько ему лет?', note: null },
        { id: 'it-pazienza', w: 'pazienza', ru: 'терпение', pos: 'n', g: 'f', forms: 'la pazienza', ex: 'Pazienza!', exRu: 'Что поделаешь!', note: null },
        { id: 'it-mezzo', w: 'mezzo', ru: 'половина; средство', pos: 'n', g: 'm', forms: 'il mezzo, -i; adj. mezzo, -a', ex: 'Mezz’ora. — I mezzi pubblici.', exRu: 'Полчаса. — Общественный транспорт.', note: 'le tre e mezzo/mezza — половина четвёртого' },
        { id: 'it-parere', w: 'parere', ru: 'мнение', pos: 'n', g: 'm', forms: 'il parere, -i', ex: 'Secondo il mio parere…', exRu: 'По моему мнению…', note: 'чаще: secondo me' },
        { id: 'it-secondo', w: 'secondo', ru: 'по (мнению), согласно; второй', pos: 'prep', g: null, forms: 'adj. secondo, -a, -i, -e', ex: 'Secondo me, ha ragione.', exRu: 'По-моему, он прав.', note: null },
        { id: 'it-cosa', w: 'cosa', ru: 'вещь, дело; что', pos: 'n', g: 'f', forms: 'la cosa, -e', ex: 'Cosa ne pensi?', exRu: 'Что ты об этом думаешь?', note: 'che cosa? / cosa? / che?' }
      ],
      text: null
    },
    {
      id: 'it-u06-l04',
      kind: 'grammar',
      title: 'Сочетания местоимений',
      goals: ['Строить me lo, te la, glielo, ce ne', 'Ставить сочетания при инфинитиве и в passato prossimo'],
      skills: ['it.pron.combined'],
      theory: [
        { type: 'table', caption: 'Косвенное + прямое / ne', head: ['', '+ lo', '+ la', '+ li', '+ le', '+ ne'],
          rows: [
            ['mi', 'me lo', 'me la', 'me li', 'me le', 'me ne'],
            ['ti', 'te lo', 'te la', 'te li', 'te le', 'te ne'],
            ['gli / le / Le', 'glielo', 'gliela', 'glieli', 'gliele', 'gliene'],
            ['ci', 'ce lo', 'ce la', 'ce li', 'ce le', 'ce ne'],
            ['vi', 've lo', 've la', 've li', 've le', 've ne'],
            ['si', 'se lo', 'se la', 'se li', 'se le', 'se ne']
          ],
          note: 'Порядок: косвенное (или si) → прямое / ne. mi, ti, ci, vi, si меняют -i на -e. gli и le сливаются в **glie-** и пишутся слитно.' },
        { type: 'rule', text: '**glielo** = «ему это», «ей это», «Вам это» — различие по роду адресата теряется. Причастие согласуется с прямым местоимением: **Gliel’ho detto. Glieli ho dati. Me l’ha regalat{{a}}** (la borsa).' },
        { type: 'examples', items: [
          { t: 'Mi presti la macchina? — Sì, te la presto.', ru: 'Одолжишь мне машину? — Да, одолжу.' },
          { t: 'Hai dato il libro a Maria? — Sì, gliel’ho dato.', ru: 'Ты отдал книгу Марии? — Да, отдал ей.' },
          { t: 'Te lo posso dire. = Posso dirtelo.', ru: 'Могу тебе это сказать.' },
          { t: 'Mi lavo le mani. → Me le lavo.', ru: 'Мою руки. → Мою их.' }
        ] },
        { type: 'pitfall', text: '*Gli lo do, *Le lo do — ошибки. Всегда **glielo do**. И не *mi lo: только **me lo**.' },
        { type: 'tip', text: 'При инфинитиве всё сочетание пишется слитно, а инфинитив теряет конечное -e: **dirtelo, darglielo, andarsene**.' }
      ],
      vocab: [
        { id: 'it-spiegare', w: 'spiegare', ru: 'объяснять', pos: 'v', g: null, forms: 'spiego, spieghi; spiegato (avere)', ex: 'Me lo spieghi?', exRu: 'Объяснишь мне это?', note: null },
        { id: 'it-mostrare', w: 'mostrare', ru: 'показывать', pos: 'v', g: null, forms: 'mostro; mostrato (avere)', ex: 'Te lo mostro.', exRu: 'Я тебе это покажу.', note: 'syn. far vedere' },
        { id: 'it-restituire', w: 'restituire', ru: 'возвращать (вещь)', pos: 'v', g: null, forms: 'restituisco; restituito (avere)', ex: 'Gliel’ho restituito ieri.', exRu: 'Я вернул ему это вчера.', note: '-isc-' },
        { id: 'it-promettere', w: 'promettere', ru: 'обещать', pos: 'v', g: null, forms: 'prometto; promesso (avere)', ex: 'Te lo prometto.', exRu: 'Обещаю тебе.', note: null },
        { id: 'it-ricordare', w: 'ricordare', ru: 'помнить; напоминать', pos: 'v', g: null, forms: 'ricordo; ricordato (avere)', ex: 'Me lo ricordi domani?', exRu: 'Напомнишь мне завтра?', note: 'ricordarsi di — вспоминать, не забывать' },
        { id: 'it-segreto', w: 'segreto', ru: 'секрет, тайна', pos: 'n', g: 'm', forms: 'il segreto, -i', ex: 'Te lo dico, ma è un segreto.', exRu: 'Скажу тебе, но это секрет.', note: null },
        { id: 'it-notizia', w: 'notizia', ru: 'новость', pos: 'n', g: 'f', forms: 'la notizia, -e', ex: 'Gliel’hai data, la notizia?', exRu: 'Ты сообщил ему новость?', note: 'le notizie — новости' },
        { id: 'it-indirizzo', w: 'indirizzo', ru: 'адрес', pos: 'n', g: 'm', forms: 'l’indirizzo, gli indirizzi', ex: 'Me lo scrivi, l’indirizzo?', exRu: 'Напишешь мне адрес?', note: null },
        { id: 'it-soldi', w: 'soldi', ru: 'деньги', pos: 'n', g: 'm', forms: 'i soldi (pl.)', ex: 'Te li restituisco domani.', exRu: 'Верну тебе их завтра.', note: 'книжн. il denaro' },
        { id: 'it-foto', w: 'foto', ru: 'фотография', pos: 'n', g: 'f', forms: 'la foto, le foto', ex: 'Me le mandi, le foto?', exRu: 'Пришлёшь мне фотографии?', note: 'сокр. от fotografia' },
        { id: 'it-chiedere-scusa', w: 'chiedere scusa', ru: 'просить прощения', pos: 'phr', g: null, forms: null, ex: 'Ti chiedo scusa.', exRu: 'Прошу у тебя прощения.', note: null },
        { id: 'it-regola', w: 'regola', ru: 'правило', pos: 'n', g: 'f', forms: 'la regola, -e', ex: 'Me la spieghi, questa regola?', exRu: 'Объяснишь мне это правило?', note: 'ударение: règola' }
      ],
      text: null
    },
    {
      id: 'it-u06-l05',
      kind: 'grammar',
      title: 'Императив и местоимения',
      goals: ['Образовывать императив tu / noi / voi / Lei', 'Строить отрицательный императив tu (non + инфинитив)', 'Присоединять клитики: dimmi, fallo, prendetela; Lei: mi dica'],
      skills: ['it.imperative', 'it.imperative.pron'],
      theory: [
        { type: 'table', caption: 'Imperativo', head: ['', 'parlare', 'prendere', 'sentire', 'finire'],
          rows: [
            ['tu', 'parl{{a}}!', 'prend{{i}}!', 'sent{{i}}!', 'fin{{isci}}!'],
            ['Lei', 'parl{{i}}!', 'prend{{a}}!', 'sent{{a}}!', 'fin{{isca}}!'],
            ['noi', 'parliamo!', 'prendiamo!', 'sentiamo!', 'finiamo!'],
            ['voi', 'parlate!', 'prendete!', 'sentite!', 'finite!']
          ],
          note: 'tu на -are → -a; остальные tu, noi, voi совпадают с презенсом. Формы Lei — это congiuntivo presente (юнит 7): гласная «меняется местами» (-are → -i, -ere/-ire → -a).' },
        { type: 'rule', text: 'Отрицание для tu: **non + инфинитив** — **Non parlare! Non preoccuparti!** Для остальных лиц — non + та же форма: Non parlate! Non parli!' },
        { type: 'table', caption: 'Неправильные', head: ['', 'tu', 'Lei'],
          rows: [
            ['andare', 'va’ / vai', 'vada'], ['fare', 'fa’ / fai', 'faccia'], ['dare', 'da’ / dai', 'dia'],
            ['stare', 'sta’ / stai', 'stia'], ['dire', 'di’', 'dica'], ['venire', 'vieni', 'venga'],
            ['essere', 'sii', 'sia'], ['avere', 'abbi', 'abbia']
          ] },
        { type: 'rule', text: 'При tu, noi, voi клитики присоединяются: **Prendilo! Diamoci del tu! Ditemi!** После односложных va’, fa’, da’, sta’, di’ согласная клитики удваивается: **dimmi, fallo, dammelo, vacci, stammi bene** (кроме gli: **digli, dagli**). При Lei клитика стоит **перед** глаголом: **Mi dica! Si accomodi!**' },
        { type: 'examples', items: [
          { t: 'Dimmi la verità!', ru: 'Скажи мне правду!' },
          { t: 'Non farlo! = Non lo fare!', ru: 'Не делай этого! (в отрицании оба порядка)' },
          { t: 'Scusi, signora, mi può aiutare?', ru: 'Извините, синьора, Вы можете мне помочь?' },
          { t: 'Si accomodi, prego.', ru: 'Присаживайтесь, пожалуйста.' }
        ] },
        { type: 'pitfall', text: '**Scusa!** (tu) vs **Scusi!** (Lei). А *Non parla! — это не запрет, а утверждение «он не говорит».' }
      ],
      vocab: [
        { id: 'it-scusare', w: 'scusare', ru: 'извинять', pos: 'v', g: null, forms: 'scuso; scusato (avere); imp. scusa! scusi!', ex: 'Scusi, dov’è il bagno?', exRu: 'Извините, где туалет?', note: null },
        { id: 'it-accomodarsi', w: 'accomodarsi', ru: 'располагаться, садиться', pos: 'v', g: null, forms: 'mi accòmodo; accomodato (essere)', ex: 'Si accomodi!', exRu: 'Проходите, садитесь!', note: null },
        { id: 'it-preoccuparsi', w: 'preoccuparsi', ru: 'беспокоиться', pos: 'v', g: null, forms: 'mi preòccupo; preoccupato (essere)', ex: 'Non preoccuparti!', exRu: 'Не волнуйся!', note: null },
        { id: 'it-girare', w: 'girare', ru: 'поворачивать; вращать; снимать (фильм)', pos: 'v', g: null, forms: 'giro; girato (avere / essere)', ex: 'Giri a destra.', exRu: 'Поверните направо.', note: null },
        { id: 'it-attraversare', w: 'attraversare', ru: 'пересекать, переходить', pos: 'v', g: null, forms: 'attraverso; attraversato (avere)', ex: 'Attraversa la piazza.', exRu: 'Перейди площадь.', note: null },
        { id: 'it-sbrigarsi', w: 'sbrigarsi', ru: 'торопиться', pos: 'v', g: null, forms: 'mi sbrigo, ti sbrighi; sbrigato (essere)', ex: 'Sbrigati!', exRu: 'Поторопись!', note: null },
        { id: 'it-smettere', w: 'smettere', ru: 'переставать, прекращать', pos: 'v', g: null, forms: 'smetto; smesso (avere)', ex: 'Smettila!', exRu: 'Прекрати!', note: 'smettere di + inf.' },
        { id: 'it-destra', w: 'destra', ru: 'право, правая сторона', pos: 'n', g: 'f', forms: 'la destra', ex: 'A destra.', exRu: 'Направо / справа.', note: null },
        { id: 'it-sinistra', w: 'sinistra', ru: 'лево, левая сторона', pos: 'n', g: 'f', forms: 'la sinistra', ex: 'A sinistra.', exRu: 'Налево / слева.', note: null },
        { id: 'it-dritto', w: 'dritto', ru: 'прямо; прямой', pos: 'adv', g: null, forms: 'adj. dritto, -a; syn. diritto', ex: 'Vada sempre dritto.', exRu: 'Идите всё время прямо.', note: null },
        { id: 'it-piazza', w: 'piazza', ru: 'площадь', pos: 'n', g: 'f', forms: 'la piazza, -e', ex: 'Ci vediamo in piazza.', exRu: 'Встретимся на площади.', note: null },
        { id: 'it-verita', w: 'verità', ru: 'правда, истина', pos: 'n', g: 'f', forms: 'la verità, le verità', ex: 'Dimmi la verità.', exRu: 'Скажи мне правду.', note: null },
        { id: 'it-prego', w: 'prego', ru: 'пожалуйста (в ответ на спасибо; приглашение)', pos: 'part', g: null, forms: null, ex: 'Grazie! — Prego!', exRu: 'Спасибо! — Пожалуйста!', note: 'просьба — per favore' }
      ],
      text: null
    }
  ]
}

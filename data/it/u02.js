export default {
  id: 'it-u02',
  title: 'Il presente',
  titleRu: 'Настоящее время',
  summary: 'Три спряжения, глаголы на -isc-, частотные неправильные глаголы, модальные и возвратные глаголы.',
  lessons: [
    {
      id: 'it-u02-l01',
      kind: 'grammar',
      title: 'Три спряжения',
      goals: ['Спрягать глаголы на -are, -ere, -ire', 'Помнить об орфографии -care/-gare, -ciare/-giare', 'Ставить ударение в 3 л. мн. ч.'],
      skills: ['it.pres.regular'],
      theory: [
        { type: 'table', caption: 'Presente indicativo', head: ['', 'parlare', 'prendere', 'dormire'],
          rows: [
            ['io', 'parl{{o}}', 'prend{{o}}', 'dorm{{o}}'],
            ['tu', 'parl{{i}}', 'prend{{i}}', 'dorm{{i}}'],
            ['lui / lei', 'parl{{a}}', 'prend{{e}}', 'dorm{{e}}'],
            ['noi', 'parl{{iamo}}', 'prend{{iamo}}', 'dorm{{iamo}}'],
            ['voi', 'parl{{ate}}', 'prend{{ete}}', 'dorm{{ite}}'],
            ['loro', 'parl{{ano}}', 'prend{{ono}}', 'dorm{{ono}}']
          ],
          note: 'Окончания io, tu, noi общие для всех спряжений; -iamo — всегда.' },
        { type: 'rule', text: 'В 3 л. мн. ч. ударение падает на тот же слог, что и в 1 л. ед. ч.: **pàrlo → pàrlano**, **àbito → àbitano**, а не *parlàno.' },
        { type: 'h', text: 'Орфография' },
        { type: 'examples', items: [
          { t: 'cercare: cerco, cer{{chi}}, cer{{chiamo}}', ru: 'h сохраняет [k]' },
          { t: 'pagare: pago, pa{{ghi}}, pa{{ghiamo}}', ru: 'h сохраняет [g]' },
          { t: 'mangiare: mangio, mang{{i}}, mang{{iamo}}', ru: 'i не удваивается (не *mangii)' },
          { t: 'studiare: studio, stud{{i}}, stud{{iamo}}', ru: 'то же' }
        ] },
        { type: 'pitfall', text: 'В -ere написание не меняется, а произношение меняется: **leggo** [ɡ] — **leggi** [dʒ]; **conosco** [sk] — **conosci** [ʃ].' },
        { type: 'contrast', text: 'Как и в русском, презенс выражает и текущее действие, и ближайшее будущее: **Domani parto** — завтра уезжаю. И, как в русском (в отличие от английского), длящееся с прошлого действие — в презенсе с **da**: **Studio l’italiano da tre anni** — учу итальянский три года.' }
      ],
      vocab: [
        { id: 'it-parlare', w: 'parlare', ru: 'говорить', pos: 'v', g: null, forms: 'parlo; parlato (avere)', ex: 'Parli italiano?', exRu: 'Ты говоришь по-итальянски?', note: null },
        { id: 'it-abitare', w: 'abitare', ru: 'жить, проживать', pos: 'v', g: null, forms: 'àbito; abitato (avere)', ex: 'Abito a Torino.', exRu: 'Я живу в Турине.', note: null },
        { id: 'it-lavorare', w: 'lavorare', ru: 'работать', pos: 'v', g: null, forms: 'lavoro; lavorato (avere)', ex: 'Lavoro in banca.', exRu: 'Я работаю в банке.', note: null },
        { id: 'it-mangiare', w: 'mangiare', ru: 'есть, кушать', pos: 'v', g: null, forms: 'mangio, mangi; mangiato (avere)', ex: 'Mangiamo alle otto.', exRu: 'Едим в восемь.', note: null },
        { id: 'it-cercare', w: 'cercare', ru: 'искать', pos: 'v', g: null, forms: 'cerco, cerchi; cercato (avere)', ex: 'Cerco le chiavi.', exRu: 'Ищу ключи.', note: 'cercare di + inf. — пытаться' },
        { id: 'it-pagare', w: 'pagare', ru: 'платить', pos: 'v', g: null, forms: 'pago, paghi; pagato (avere)', ex: 'Pago io.', exRu: 'Я плачу.', note: null },
        { id: 'it-studiare', w: 'studiare', ru: 'учить, изучать, учиться', pos: 'v', g: null, forms: 'studio, studi; studiato (avere)', ex: 'Studio storia.', exRu: 'Я изучаю историю.', note: null },
        { id: 'it-prendere', w: 'prendere', ru: 'брать; садиться на (транспорт); заказывать', pos: 'v', g: null, forms: 'prendo; preso (avere)', ex: 'Prendo un caffè.', exRu: 'Я возьму кофе.', note: null },
        { id: 'it-leggere', w: 'leggere', ru: 'читать', pos: 'v', g: null, forms: 'leggo, leggi; letto (avere)', ex: 'Leggi il giornale?', exRu: 'Ты читаешь газету?', note: null },
        { id: 'it-scrivere', w: 'scrivere', ru: 'писать', pos: 'v', g: null, forms: 'scrivo; scritto (avere)', ex: 'Scrivo una lettera.', exRu: 'Я пишу письмо.', note: null },
        { id: 'it-vivere', w: 'vivere', ru: 'жить', pos: 'v', g: null, forms: 'vivo; vissuto (essere/avere)', ex: 'Viviamo in campagna.', exRu: 'Мы живём за городом.', note: null },
        { id: 'it-dormire', w: 'dormire', ru: 'спать', pos: 'v', g: null, forms: 'dormo; dormito (avere)', ex: 'Dormo poco.', exRu: 'Я мало сплю.', note: null },
        { id: 'it-partire', w: 'partire', ru: 'уезжать, отправляться', pos: 'v', g: null, forms: 'parto; partito (essere)', ex: 'Il treno parte alle sei.', exRu: 'Поезд отправляется в шесть.', note: null },
        { id: 'it-sentire', w: 'sentire', ru: 'слышать; чувствовать', pos: 'v', g: null, forms: 'sento; sentito (avere)', ex: 'Non sento niente.', exRu: 'Ничего не слышу.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u02-l02',
      kind: 'grammar',
      title: 'Глаголы на -isc-',
      goals: ['Спрягать capire, finire, preferire', 'Отличать -isc- глаголы от dormire-типа'],
      skills: ['it.pres.isc'],
      theory: [
        { type: 'table', caption: 'capire', head: ['', 'presente'],
          rows: [
            ['io', 'cap{{isco}}'], ['tu', 'cap{{isci}}'], ['lui / lei', 'cap{{isce}}'],
            ['noi', 'cap{{iamo}}'], ['voi', 'cap{{ite}}'], ['loro', 'cap{{iscono}}']
          ],
          note: 'Инфикс -isc- — в 1–3 л. ед. ч. и 3 л. мн. ч. (под ударением); noi и voi — без него.' },
        { type: 'rule', text: 'Произношение: **-isco, -iscono** — [sk]; **-isci, -isce** — [ʃ].' },
        { type: 'p', text: 'Тип -isc- (большинство глаголов на -ire): capire, finire, preferire, pulire, spedire, costruire, suggerire, sparire. Без -isc-: dormire, partire, sentire, aprire, offrire, seguire, servire. Принадлежность надо запоминать.' },
        { type: 'tip', text: 'Это латинский инхоатив -sc- (flor-esc-ere «расцветать»), который в итальянском утратил значение и стал чисто формальным наращением.' },
        { type: 'examples', items: [
          { t: 'Non capisco.', ru: 'Не понимаю.' },
          { t: 'A che ora finisci?', ru: 'Во сколько ты заканчиваешь?' },
          { t: 'Preferiamo il tè.', ru: 'Мы предпочитаем чай.' }
        ] },
        { type: 'pitfall', text: '*capiscete, *finisciamo — ошибка: в noi/voi инфикса нет.' }
      ],
      vocab: [
        { id: 'it-capire', w: 'capire', ru: 'понимать', pos: 'v', g: null, forms: 'capisco; capito (avere)', ex: 'Capisci l’inglese?', exRu: 'Ты понимаешь по-английски?', note: '-isc-' },
        { id: 'it-finire', w: 'finire', ru: 'заканчивать(ся)', pos: 'v', g: null, forms: 'finisco; finito (avere / essere)', ex: 'Finisco il lavoro alle cinque.', exRu: 'Заканчиваю работу в пять.', note: '-isc-; переход. → avere, неперех. → essere' },
        { id: 'it-preferire', w: 'preferire', ru: 'предпочитать', pos: 'v', g: null, forms: 'preferisco; preferito (avere)', ex: 'Preferisco restare a casa.', exRu: 'Предпочитаю остаться дома.', note: '-isc-' },
        { id: 'it-pulire', w: 'pulire', ru: 'чистить, убирать', pos: 'v', g: null, forms: 'pulisco; pulito (avere)', ex: 'Il sabato pulisco la casa.', exRu: 'По субботам убираю дом.', note: '-isc-' },
        { id: 'it-spedire', w: 'spedire', ru: 'отправлять (почтой)', pos: 'v', g: null, forms: 'spedisco; spedito (avere)', ex: 'Spedisco un pacco.', exRu: 'Отправляю посылку.', note: '-isc-' },
        { id: 'it-costruire', w: 'costruire', ru: 'строить', pos: 'v', g: null, forms: 'costruisco; costruito (avere)', ex: 'Costruiscono un ponte.', exRu: 'Строят мост.', note: '-isc-' },
        { id: 'it-suggerire', w: 'suggerire', ru: 'советовать, подсказывать', pos: 'v', g: null, forms: 'suggerisco; suggerito (avere)', ex: 'Che cosa suggerisci?', exRu: 'Что посоветуешь?', note: '-isc-' },
        { id: 'it-aprire', w: 'aprire', ru: 'открывать', pos: 'v', g: null, forms: 'apro; aperto (avere)', ex: 'Apro la finestra.', exRu: 'Открываю окно.', note: 'без -isc-' },
        { id: 'it-offrire', w: 'offrire', ru: 'предлагать; угощать', pos: 'v', g: null, forms: 'offro; offerto (avere)', ex: 'Offro io!', exRu: 'Я угощаю!', note: 'без -isc-' },
        { id: 'it-seguire', w: 'seguire', ru: 'следовать; посещать (курс)', pos: 'v', g: null, forms: 'seguo; seguito (avere)', ex: 'Seguo un corso d’italiano.', exRu: 'Хожу на курс итальянского.', note: 'без -isc-' },
        { id: 'it-finestra', w: 'finestra', ru: 'окно', pos: 'n', g: 'f', forms: 'la finestra, -e', ex: 'La finestra è aperta.', exRu: 'Окно открыто.', note: null },
        { id: 'it-te', w: 'tè', ru: 'чай', pos: 'n', g: 'm', forms: 'il tè, i tè', ex: 'Un tè, per favore.', exRu: 'Чай, пожалуйста.', note: 'с ударением (te — «тебя»)' },
        { id: 'it-corso', w: 'corso', ru: 'курс; проспект', pos: 'n', g: 'm', forms: 'il corso, -i', ex: 'Il corso dura un mese.', exRu: 'Курс длится месяц.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u02-l03',
      kind: 'grammar',
      title: 'Неправильные глаголы',
      goals: ['Спрягать andare, fare, dare, stare, dire, venire, uscire, bere, tenere, rimanere', 'Различать essere и stare'],
      skills: ['it.pres.irregular'],
      theory: [
        { type: 'table', caption: 'Самые частые', head: ['', 'andare', 'fare', 'dare', 'stare', 'dire'],
          rows: [
            ['io', 'vado', 'faccio', 'do', 'sto', 'dico'],
            ['tu', 'vai', 'fai', 'dai', 'stai', 'dici'],
            ['lui / lei', 'va', 'fa', 'dà', 'sta', 'dice'],
            ['noi', 'andiamo', 'facciamo', 'diamo', 'stiamo', 'diciamo'],
            ['voi', 'andate', 'fate', 'date', 'state', 'dite'],
            ['loro', 'vanno', 'fanno', 'danno', 'stanno', 'dicono']
          ],
          note: '**dà** «даёт» пишется с ударением, чтобы отличить от предлога **da**. va, fa, sta — без ударения.' },
        { type: 'table', caption: 'Модель с -g- (vengo, tengo…)', head: ['', 'venire', 'uscire', 'bere', 'rimanere'],
          rows: [
            ['io', 'ven{{g}}o', 'esco', 'bevo', 'riman{{g}}o'],
            ['tu', 'vieni', 'esci', 'bevi', 'rimani'],
            ['lui / lei', 'viene', 'esce', 'beve', 'rimane'],
            ['noi', 'veniamo', 'usciamo', 'beviamo', 'rimaniamo'],
            ['voi', 'venite', 'uscite', 'bevete', 'rimanete'],
            ['loro', 'ven{{g}}ono', 'escono', 'bevono', 'riman{{g}}ono']
          ],
          note: 'Так же tenere: tengo, tieni, tiene, teniamo, tenete, tengono. uscire: e- под ударением, u- без ударения. bere < bevere (основа bev-).' },
        { type: 'rule', text: '**stare** — «находиться, пребывать, чувствовать себя»: **Come stai? — Sto bene.** **essere** — «быть (кем/каким)», локализация предметов: **Dov’è la stazione?**' },
        { type: 'examples', items: [
          { t: 'Andiamo a Roma in treno.', ru: 'Едем в Рим на поезде.' },
          { t: 'Che tempo fa? — Fa bel tempo.', ru: 'Какая погода? — Хорошая.' },
          { t: 'Stasera sto a casa.', ru: 'Сегодня вечером я дома (остаюсь дома).' },
          { t: 'Vengo anch’io!', ru: 'Я тоже иду (с вами)!' }
        ] },
        { type: 'pitfall', text: '«Я иду к тебе» — **Vengo da te**, а не *Vado da te: venire — движение к собеседнику (или вместе с ним), andare — в другое место.' }
      ],
      vocab: [
        { id: 'it-andare', w: 'andare', ru: 'идти, ехать', pos: 'v', g: null, forms: 'vado; andato (essere)', ex: 'Vado al lavoro.', exRu: 'Иду на работу.', note: null },
        { id: 'it-fare', w: 'fare', ru: 'делать', pos: 'v', g: null, forms: 'faccio; fatto (avere)', ex: 'Che cosa fai?', exRu: 'Что ты делаешь?', note: null },
        { id: 'it-dare', w: 'dare', ru: 'давать', pos: 'v', g: null, forms: 'do, dai, dà; dato (avere)', ex: 'Mi dai il sale?', exRu: 'Дашь мне соль?', note: null },
        { id: 'it-stare', w: 'stare', ru: 'находиться; чувствовать себя', pos: 'v', g: null, forms: 'sto; stato (essere)', ex: 'Come stai?', exRu: 'Как дела?', note: 'причастие совпадает с essere' },
        { id: 'it-dire', w: 'dire', ru: 'говорить, сказать', pos: 'v', g: null, forms: 'dico; detto (avere)', ex: 'Che cosa dici?', exRu: 'Что ты говоришь?', note: null },
        { id: 'it-venire', w: 'venire', ru: 'приходить, приезжать', pos: 'v', g: null, forms: 'vengo, vieni; venuto (essere)', ex: 'Vieni con noi?', exRu: 'Пойдёшь с нами?', note: null },
        { id: 'it-uscire', w: 'uscire', ru: 'выходить', pos: 'v', g: null, forms: 'esco, esci; uscito (essere)', ex: 'Esco alle otto.', exRu: 'Выхожу в восемь.', note: null },
        { id: 'it-bere', w: 'bere', ru: 'пить', pos: 'v', g: null, forms: 'bevo; bevuto (avere)', ex: 'Non bevo alcol.', exRu: 'Я не пью алкоголь.', note: null },
        { id: 'it-tenere', w: 'tenere', ru: 'держать', pos: 'v', g: null, forms: 'tengo, tieni; tenuto (avere)', ex: 'Tieni!', exRu: 'Держи!', note: null },
        { id: 'it-rimanere', w: 'rimanere', ru: 'оставаться', pos: 'v', g: null, forms: 'rimango; rimasto (essere)', ex: 'Rimango qui.', exRu: 'Я остаюсь здесь.', note: null },
        { id: 'it-tempo', w: 'tempo', ru: 'время; погода', pos: 'n', g: 'm', forms: 'il tempo, -i', ex: 'Non ho tempo.', exRu: 'У меня нет времени.', note: 'che tempo fa? — какая погода?' },
        { id: 'it-treno', w: 'treno', ru: 'поезд', pos: 'n', g: 'm', forms: 'il treno, -i', ex: 'Prendo il treno delle sette.', exRu: 'Сажусь на поезд в семь.', note: null },
        { id: 'it-bene', w: 'bene', ru: 'хорошо', pos: 'adv', g: null, forms: null, ex: 'Sto bene, grazie.', exRu: 'У меня всё хорошо, спасибо.', note: 'il bene — добро' },
        { id: 'it-stasera', w: 'stasera', ru: 'сегодня вечером', pos: 'adv', g: null, forms: null, ex: 'Stasera esco.', exRu: 'Сегодня вечером я иду гулять.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u02-l04',
      kind: 'grammar',
      title: 'Модальные и возвратные глаголы',
      goals: ['Спрягать volere, potere, dovere, sapere', 'Различать sapere / potere / conoscere', 'Спрягать возвратные глаголы и ставить si-местоимение'],
      skills: ['it.pres.modal', 'it.pres.reflexive'],
      theory: [
        { type: 'table', caption: 'Модальные + sapere', head: ['', 'volere', 'potere', 'dovere', 'sapere'],
          rows: [
            ['io', 'voglio', 'posso', 'devo', 'so'],
            ['tu', 'vuoi', 'puoi', 'devi', 'sai'],
            ['lui / lei', 'vuole', 'può', 'deve', 'sa'],
            ['noi', 'vogliamo', 'possiamo', 'dobbiamo', 'sappiamo'],
            ['voi', 'volete', 'potete', 'dovete', 'sapete'],
            ['loro', 'vogliono', 'possono', 'devono', 'sanno']
          ] },
        { type: 'rule', text: '**sapere** — знать (факт) и уметь (навык): **So nuotare** — я умею плавать. **potere** — иметь возможность/разрешение. **conoscere** — быть знакомым (с человеком, местом).' },
        { type: 'table', caption: 'Возвратный глагол lavarsi', head: ['', 'presente'],
          rows: [
            ['io', '{{mi}} lavo'], ['tu', '{{ti}} lavi'], ['lui / lei', '{{si}} lava'],
            ['noi', '{{ci}} laviamo'], ['voi', '{{vi}} lavate'], ['loro', '{{si}} lavano']
          ] },
        { type: 'rule', text: 'Местоимение стоит перед спрягаемым глаголом, но присоединяется к инфинитиву. С модальным — два равноправных варианта: **Mi devo alzare = Devo alzarmi**.' },
        { type: 'contrast', text: 'Возвратные глаголы похожи на русские на -ся: **mi lavo** — моюсь, **ci vediamo** — увидимся (взаимность). Но соответствие не полное: **studiare** — учиться (не возвратный), **laurearsi** — окончить университет (возвратный). Части тела — с артиклем, не с притяжательным: **Mi lavo le mani** — мою руки.' },
        { type: 'examples', items: [
          { t: 'Come ti chiami? — Mi chiamo Anna.', ru: 'Как тебя зовут? — Меня зовут Анна.' },
          { t: 'Non posso venire, devo lavorare.', ru: 'Не могу прийти, должен работать.' },
          { t: 'Conosci Marco? Sai dove abita?', ru: 'Ты знаешь Марко? Знаешь, где он живёт?' }
        ] }
      ],
      vocab: [
        { id: 'it-volere', w: 'volere', ru: 'хотеть', pos: 'v', g: null, forms: 'voglio, vuoi; voluto (avere)', ex: 'Vuoi un caffè?', exRu: 'Хочешь кофе?', note: null },
        { id: 'it-potere', w: 'potere', ru: 'мочь', pos: 'v', g: null, forms: 'posso, puoi, può; potuto (avere)', ex: 'Posso entrare?', exRu: 'Можно войти?', note: null },
        { id: 'it-dovere', w: 'dovere', ru: 'быть должным', pos: 'v', g: null, forms: 'devo, dobbiamo; dovuto (avere)', ex: 'Devo andare.', exRu: 'Мне надо идти.', note: null },
        { id: 'it-sapere', w: 'sapere', ru: 'знать; уметь', pos: 'v', g: null, forms: 'so, sai, sa; saputo (avere)', ex: 'Non lo so.', exRu: 'Не знаю.', note: null },
        { id: 'it-conoscere', w: 'conoscere', ru: 'знать (быть знакомым)', pos: 'v', g: null, forms: 'conosco, conosci; conosciuto (avere)', ex: 'Conosco bene Roma.', exRu: 'Я хорошо знаю Рим.', note: null },
        { id: 'it-chiamarsi', w: 'chiamarsi', ru: 'называться, зваться', pos: 'v', g: null, forms: 'mi chiamo; chiamato (essere)', ex: 'Come si chiama?', exRu: 'Как Вас зовут?', note: null },
        { id: 'it-alzarsi', w: 'alzarsi', ru: 'вставать', pos: 'v', g: null, forms: 'mi alzo; alzato (essere)', ex: 'Mi alzo alle sette.', exRu: 'Встаю в семь.', note: null },
        { id: 'it-svegliarsi', w: 'svegliarsi', ru: 'просыпаться', pos: 'v', g: null, forms: 'mi sveglio; svegliato (essere)', ex: 'Mi sveglio presto.', exRu: 'Я просыпаюсь рано.', note: null },
        { id: 'it-lavarsi', w: 'lavarsi', ru: 'мыться', pos: 'v', g: null, forms: 'mi lavo; lavato (essere)', ex: 'Mi lavo i denti.', exRu: 'Чищу зубы.', note: null },
        { id: 'it-vestirsi', w: 'vestirsi', ru: 'одеваться', pos: 'v', g: null, forms: 'mi vesto; vestito (essere)', ex: 'Mi vesto in fretta.', exRu: 'Быстро одеваюсь.', note: null },
        { id: 'it-divertirsi', w: 'divertirsi', ru: 'развлекаться, весело проводить время', pos: 'v', g: null, forms: 'mi diverto; divertito (essere)', ex: 'Ci divertiamo molto.', exRu: 'Нам очень весело.', note: null },
        { id: 'it-sentirsi', w: 'sentirsi', ru: 'чувствовать себя', pos: 'v', g: null, forms: 'mi sento; sentito (essere)', ex: 'Non mi sento bene.', exRu: 'Я плохо себя чувствую.', note: null },
        { id: 'it-presto', w: 'presto', ru: 'рано; скоро', pos: 'adv', g: null, forms: null, ex: 'A presto!', exRu: 'До скорого!', note: null }
      ],
      text: null
    },
    {
      id: 'it-u02-l05',
      kind: 'reading',
      title: 'La giornata di Giulia',
      goals: ['Читать связный текст в презенсе', 'Узнавать возвратные и неправильные глаголы в контексте'],
      skills: ['it.pres.regular', 'it.pres.irregular', 'it.pres.reflexive'],
      theory: [],
      vocab: [
        { id: 'it-mattina', w: 'mattina', ru: 'утро', pos: 'n', g: 'f', forms: 'la mattina, -e', ex: 'La mattina bevo un caffè.', exRu: 'По утрам пью кофе.', note: 'la mattina — по утрам' },
        { id: 'it-colazione', w: 'colazione', ru: 'завтрак', pos: 'n', g: 'f', forms: 'la colazione, -i', ex: 'Faccio colazione al bar.', exRu: 'Завтракаю в баре.', note: 'fare colazione' },
        { id: 'it-ufficio', w: 'ufficio', ru: 'офис, контора', pos: 'n', g: 'm', forms: 'l’ufficio, gli uffici', ex: 'Vado in ufficio a piedi.', exRu: 'Хожу в офис пешком.', note: null },
        { id: 'it-collega', w: 'collega', ru: 'коллега', pos: 'n', g: 'c', forms: 'il / la collega; i colleghi, le colleghe', ex: 'I miei colleghi sono simpatici.', exRu: 'Мои коллеги симпатичные.', note: null },
        { id: 'it-pranzo', w: 'pranzo', ru: 'обед', pos: 'n', g: 'm', forms: 'il pranzo, -i', ex: 'Il pranzo è all’una.', exRu: 'Обед в час.', note: 'pranzare — обедать' },
        { id: 'it-cena', w: 'cena', ru: 'ужин', pos: 'n', g: 'f', forms: 'la cena, -e', ex: 'La cena è pronta.', exRu: 'Ужин готов.', note: 'cenare — ужинать' },
        { id: 'it-sera', w: 'sera', ru: 'вечер', pos: 'n', g: 'f', forms: 'la sera, -e', ex: 'La sera leggo.', exRu: 'По вечерам читаю.', note: null },
        { id: 'it-di-solito', w: 'di solito', ru: 'обычно', pos: 'phr', g: null, forms: null, ex: 'Di solito ceno tardi.', exRu: 'Обычно я поздно ужинаю.', note: null },
        { id: 'it-tardi', w: 'tardi', ru: 'поздно', pos: 'adv', g: null, forms: null, ex: 'È tardi.', exRu: 'Поздно.', note: null }
      ],
      text: {
        title: 'La giornata di Giulia',
        lines: [
          { t: 'Giulia abita a Bologna e lavora in un ufficio in centro.', ru: 'Джулия живёт в Болонье и работает в офисе в центре.' },
          { t: 'La mattina si sveglia alle sette, si lava e si veste in fretta.', ru: 'Утром она просыпается в семь, умывается и быстро одевается.' },
          { t: 'Di solito fa colazione al bar: prende un cappuccino e un cornetto.', ru: 'Обычно она завтракает в баре: берёт капучино и круассан.' },
          { t: 'Va in ufficio a piedi, perché non è lontano.', ru: 'В офис она ходит пешком, потому что это недалеко.' },
          { t: 'A pranzo mangia con i colleghi; qualche volta escono insieme.', ru: 'В обед ест с коллегами; иногда они выходят вместе.' },
          { t: 'Finisce di lavorare alle sei e torna a casa in autobus.', ru: 'Заканчивает работать в шесть и возвращается домой на автобусе.' },
          { t: 'La sera cena tardi, legge un libro o guarda un film.', ru: 'Вечером она поздно ужинает, читает книгу или смотрит фильм.' },
          { t: 'Il venerdì sera esce con gli amici e si diverte molto.', ru: 'В пятницу вечером она встречается с друзьями и отлично проводит время.' },
          { t: '«Sono stanca, ma sto bene», dice Giulia.', ru: '«Я устала, но у меня всё хорошо», — говорит Джулия.' }
        ]
      }
    }
  ]
}

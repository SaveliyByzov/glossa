export default {
  id: 'it-u05',
  title: 'L’imperfetto e il trapassato',
  titleRu: 'Imperfetto, trapassato prossimo, stare + gerundio',
  summary: 'Формы imperfetto, противопоставление imperfetto / passato prossimo (с параллелью и расхождениями с русским видом), предпрошедшее время и прогрессив.',
  lessons: [
    {
      id: 'it-u05-l01',
      kind: 'grammar',
      title: 'Imperfetto: формы и значения',
      goals: ['Образовывать imperfetto, включая essere, fare, dire, bere', 'Использовать imperfetto для привычки, описания, фона'],
      skills: ['it.impf.form'],
      theory: [
        { type: 'table', caption: 'Imperfetto indicativo', head: ['', 'parlare', 'prendere', 'dormire', 'essere'],
          rows: [
            ['io', 'parl{{avo}}', 'prend{{evo}}', 'dorm{{ivo}}', 'ero'],
            ['tu', 'parl{{avi}}', 'prend{{evi}}', 'dorm{{ivi}}', 'eri'],
            ['lui / lei', 'parl{{ava}}', 'prend{{eva}}', 'dorm{{iva}}', 'era'],
            ['noi', 'parl{{avamo}}', 'prend{{evamo}}', 'dorm{{ivamo}}', 'eravamo'],
            ['voi', 'parl{{avate}}', 'prend{{evate}}', 'dorm{{ivate}}', 'eravate'],
            ['loro', 'parl{{avano}}', 'prend{{evano}}', 'dorm{{ivano}}', 'erano']
          ],
          note: 'Ударение в 3 л. мн. ч. — на гласную суффикса: parlàvano, prendévano. Глаголы на -isc- в imperfetto без инфикса: capivo.' },
        { type: 'rule', text: 'Неправильных форм мало, и они строятся от старой (латинской) основы: **fare → facevo** (facere), **dire → dicevo** (dicere), **bere → bevevo** (bevere), **tradurre → traducevo**, **porre → ponevo**.' },
        { type: 'table', caption: 'Значения', head: ['значение', 'пример'],
          rows: [
            ['повторяющееся, привычное', 'Da bambino giocavo a calcio. — В детстве я играл в футбол.'],
            ['описание, состояние', 'La casa era grande e c’erano molti alberi.'],
            ['время, возраст, погода', 'Erano le otto; avevo dieci anni; pioveva.'],
            ['фон, процесс в момент другого события', 'Mentre leggevo, è suonato il telefono.'],
            ['вежливость', 'Volevo un caffè, per favore.']
          ] },
        { type: 'tip', text: '**Mentre** + imperfetto (процесс), **quando** + passato prossimo (событие): Mentre cucinavo, è arrivato Paolo.' }
      ],
      vocab: [
        { id: 'it-giocare', w: 'giocare', ru: 'играть', pos: 'v', g: null, forms: 'gioco, giochi; giocato (avere)', ex: 'I bambini giocano in giardino.', exRu: 'Дети играют в саду.', note: 'giocare a calcio; играть на инструменте — suonare' },
        { id: 'it-suonare', w: 'suonare', ru: 'звонить, звучать; играть (на инструменте)', pos: 'v', g: null, forms: 'suono; suonato (avere / essere)', ex: 'Suona il pianoforte.', exRu: 'Он играет на фортепиано.', note: 'il telefono è suonato / ha suonato' },
        { id: 'it-mentre', w: 'mentre', ru: 'пока, в то время как', pos: 'conj', g: null, forms: null, ex: 'Mentre dormivo, ha nevicato.', exRu: 'Пока я спал, выпал снег.', note: null },
        { id: 'it-piovere', w: 'piovere', ru: 'идти (о дожде)', pos: 'v', g: null, forms: 'piove; piovuto (essere / avere)', ex: 'Pioveva tutto il giorno.', exRu: 'Весь день шёл дождь.', note: 'безличный' },
        { id: 'it-bambino', w: 'bambino', ru: 'ребёнок, мальчик', pos: 'n', g: 'm', forms: 'il bambino, -i; la bambina, -e', ex: 'Da bambino ero timido.', exRu: 'В детстве я был застенчивым.', note: 'da bambino — в детстве' },
        { id: 'it-giardino', w: 'giardino', ru: 'сад', pos: 'n', g: 'm', forms: 'il giardino, -i', ex: 'C’era un giardino dietro la casa.', exRu: 'За домом был сад.', note: null },
        { id: 'it-calcio', w: 'calcio', ru: 'футбол; пинок; кальций', pos: 'n', g: 'm', forms: 'il calcio', ex: 'Giocavamo a calcio ogni giorno.', exRu: 'Мы каждый день играли в футбол.', note: null },
        { id: 'it-estate', w: 'estate', ru: 'лето', pos: 'n', g: 'f', forms: 'l’estate, le estati', ex: 'D’estate andavamo al mare.', exRu: 'Летом мы ездили на море.', note: 'ж. р.' },
        { id: 'it-inverno', w: 'inverno', ru: 'зима', pos: 'n', g: 'm', forms: 'l’inverno, gli inverni', ex: 'D’inverno faceva freddo.', exRu: 'Зимой было холодно.', note: null },
        { id: 'it-ogni', w: 'ogni', ru: 'каждый', pos: 'adj', g: null, forms: 'неизм., + ед. ч.', ex: 'Ogni giorno.', exRu: 'Каждый день.', note: null },
        { id: 'it-spesso', w: 'spesso', ru: 'часто', pos: 'adv', g: null, forms: null, ex: 'Andavo spesso dai nonni.', exRu: 'Я часто бывал у бабушки с дедушкой.', note: null },
        { id: 'it-tranquillo', w: 'tranquillo', ru: 'спокойный', pos: 'adj', g: null, forms: 'tranquillo, -a, -i, -e', ex: 'Era un paese tranquillo.', exRu: 'Это был спокойный городок.', note: 'Tranquillo! — Не волнуйся!' },
        { id: 'it-timido', w: 'timido', ru: 'застенчивый, робкий', pos: 'adj', g: null, forms: 'timido, -a, -i, -e', ex: 'Era una ragazza timida.', exRu: 'Она была застенчивой девушкой.', note: 'ударение: tìmido' }
      ],
      text: null
    },
    {
      id: 'it-u05-l02',
      kind: 'grammar',
      title: 'Imperfetto или passato prossimo?',
      goals: ['Выбирать время по типу ситуации (событие / фон / привычка)', 'Понимать, где параллель с русским видом работает, а где нет', 'Знать сдвиги значения у sapere, conoscere, dovere, potere'],
      skills: ['it.impf.vs-pp'],
      theory: [
        { type: 'rule', text: '**Passato prossimo** — событие как целое, ограниченное во времени (началось и закончилось, даже если длилось долго). **Imperfetto** — ситуация «изнутри», без границ: процесс, состояние, повторение, фон.' },
        { type: 'contrast', text: 'Удобная первая опора: imperfetto ≈ несовершенный вид в процессном и многократном значении (**leggevo** — читал, бывало читал), passato prossimo ≈ совершенный вид (**ho letto** — прочитал). Но это лишь эвристика: итальянское противопоставление — временно-аспектуальное и касается только прошлого, а русский вид — лексико-грамматический и охватывает все времена.' },
        { type: 'h', text: 'Где параллель ломается' },
        { type: 'examples', items: [
          { t: 'Ho vissuto a Roma per dieci anni.', ru: 'Я жил (несов.!) в Риме десять лет. Ограниченный срок → passato prossimo.' },
          { t: 'Ieri ho lavorato tutto il giorno.', ru: 'Вчера я весь день работал (несов.). Период закрыт.' },
          { t: 'Hai letto «I promessi sposi»? — Sì, l’ho letto.', ru: 'Ты читал «Обручённых»? — Да, читал. Общефактическое несов. ↔ passato prossimo.' },
          { t: 'Sono stato tre volte a Venezia.', ru: 'Я был (бывал) в Венеции три раза. Подсчитанное повторение → passato prossimo.' }
        ] },
        { type: 'pitfall', text: 'Указание на длительность (**per due ore, tutto il giorno, dal 2010 al 2015**) или число раз почти всегда требует passato prossimo — даже когда русский ставит несовершенный вид.' },
        { type: 'table', caption: 'Сдвиг лексического значения', head: ['глагол', 'imperfetto', 'passato prossimo'],
          rows: [
            ['conoscere', 'conoscevo Anna — я был знаком с Анной', 'ho conosciuto Anna — я познакомился с Анной'],
            ['sapere', 'sapevo — знал', 'ho saputo — узнал'],
            ['dovere', 'dovevo partire — должен был уехать (уехал ли — неясно)', 'sono dovuto partire — пришлось уехать (и уехал)'],
            ['potere', 'potevo venire — мог прийти (неизвестно, пришёл ли)', 'ho potuto venire — смог прийти (и пришёл)'],
            ['volere', 'volevo dirti — я хотел тебе сказать', 'ho voluto dirti — я решил/настоял сказать']
          ] },
        { type: 'tip', text: 'Проверка: если можно ответить на вопрос «и что потом?» — событие (passato prossimo). Если это «декорация» к событию — imperfetto.' }
      ],
      vocab: [
        { id: 'it-improvvisamente', w: 'improvvisamente', ru: 'внезапно', pos: 'adv', g: null, forms: 'syn. all’improvviso', ex: 'Improvvisamente è andata via la luce.', exRu: 'Внезапно отключили свет.', note: null },
        { id: 'it-luce', w: 'luce', ru: 'свет', pos: 'n', g: 'f', forms: 'la luce, -i', ex: 'Accendi la luce!', exRu: 'Включи свет!', note: null },
        { id: 'it-accendere', w: 'accendere', ru: 'зажигать, включать', pos: 'v', g: null, forms: 'accendo; acceso (avere)', ex: 'Ho acceso la TV.', exRu: 'Я включил телевизор.', note: null },
        { id: 'it-spegnere', w: 'spegnere', ru: 'гасить, выключать', pos: 'v', g: null, forms: 'spengo, spegni; spento (avere)', ex: 'Spegni il telefono, per favore.', exRu: 'Выключи телефон, пожалуйста.', note: null },
        { id: 'it-incontrare', w: 'incontrare', ru: 'встречать', pos: 'v', g: null, forms: 'incontro; incontrato (avere)', ex: 'Ho incontrato Sara al bar.', exRu: 'Я встретил Сару в баре.', note: null },
        { id: 'it-telefono', w: 'telefono', ru: 'телефон', pos: 'n', g: 'm', forms: 'il telefono, -i', ex: 'Il telefono squillava.', exRu: 'Звонил телефон.', note: 'ударение: telèfono' },
        { id: 'it-strada', w: 'strada', ru: 'улица; дорога', pos: 'n', g: 'f', forms: 'la strada, -e', ex: 'Camminavo per strada.', exRu: 'Я шёл по улице.', note: null },
        { id: 'it-notte', w: 'notte', ru: 'ночь', pos: 'n', g: 'f', forms: 'la notte, -i', ex: 'Era notte.', exRu: 'Была ночь.', note: null },
        { id: 'it-giorno', w: 'giorno', ru: 'день', pos: 'n', g: 'm', forms: 'il giorno, -i', ex: 'Tutto il giorno.', exRu: 'Весь день.', note: null },
        { id: 'it-improvviso', w: 'improvviso', ru: 'внезапный', pos: 'adj', g: null, forms: 'improvviso, -a, -i, -e', ex: 'Una visita improvvisa.', exRu: 'Неожиданный визит.', note: null },
        { id: 'it-sorpresa', w: 'sorpresa', ru: 'сюрприз; удивление', pos: 'n', g: 'f', forms: 'la sorpresa, -e', ex: 'Che sorpresa!', exRu: 'Какой сюрприз!', note: null },
        { id: 'it-all-improvviso', w: 'all’improvviso', ru: 'вдруг', pos: 'phr', g: null, forms: null, ex: 'All’improvviso ha cominciato a piovere.', exRu: 'Вдруг пошёл дождь.', note: null },
        { id: 'it-cominciare', w: 'cominciare', ru: 'начинать(ся)', pos: 'v', g: null, forms: 'comincio, cominci; cominciato (avere / essere)', ex: 'Il concerto è cominciato.', exRu: 'Концерт начался.', note: 'cominciare a + inf.' }
      ],
      text: null
    },
    {
      id: 'it-u05-l03',
      kind: 'grammar',
      title: 'Trapassato prossimo и stare + gerundio',
      goals: ['Образовывать trapassato prossimo', 'Выражать предшествование в прошлом', 'Образовывать герундий и прогрессив stare + gerundio, stare per'],
      skills: ['it.trapassato', 'it.gerund.progressive'],
      theory: [
        { type: 'rule', text: '**Trapassato prossimo** = imperfetto от avere/essere + причастие: **avevo mangiato, ero partito/-a**. Выражает действие, предшествующее другому прошедшему.' },
        { type: 'examples', items: [
          { t: 'Quando sono arrivato alla stazione, il treno era già partito.', ru: 'Когда я пришёл на вокзал, поезд уже ушёл.' },
          { t: 'Non avevo mai visto il mare prima.', ru: 'Я раньше никогда не видел моря.' },
          { t: 'Mi ha detto che aveva perso le chiavi.', ru: 'Он сказал мне, что потерял ключи.' }
        ] },
        { type: 'contrast', text: 'В русском плюсквамперфекта нет: предшествование передаётся контекстом и словом «уже». В итальянском trapassato в таких случаях практически обязателен: *Quando sono arrivato, il treno è già partito — ошибка.' },
        { type: 'h', text: 'Gerundio и прогрессив' },
        { type: 'table', head: ['инфинитив', 'gerundio'],
          rows: [
            ['parl{{are}}', 'parl{{ando}}'],
            ['prend{{ere}}', 'prend{{endo}}'],
            ['dorm{{ire}}', 'dorm{{endo}}'],
            ['fare, dire, bere', 'facendo, dicendo, bevendo']
          ] },
        { type: 'rule', text: '**stare + gerundio** — действие в процессе в данный момент: **Sto lavorando** — я (как раз сейчас) работаю; **Stavo uscendo quando hai chiamato.** Только в простых временах: *sono stato leggendo — невозможно. **stare per + infinito** — «вот-вот, собираться»: **Sto per uscire.**' },
        { type: 'pitfall', text: 'Прогрессив факультативен: «Что ты делаешь?» — и **Che fai?**, и **Che stai facendo?**. Не используйте его для состояний: *sto sapendo, *sto avendo.' }
      ],
      vocab: [
        { id: 'it-prima', w: 'prima', ru: 'раньше, сначала; до (prima di)', pos: 'adv', g: null, forms: 'prima di + сущ./inf.', ex: 'Prima di partire, chiamami.', exRu: 'Перед отъездом позвони мне.', note: null },
        { id: 'it-dopo', w: 'dopo', ru: 'потом, после', pos: 'adv', g: null, forms: 'dopo + сущ.; dopo aver + причастие', ex: 'Dopo cena usciamo.', exRu: 'После ужина выйдем.', note: null },
        { id: 'it-poi', w: 'poi', ru: 'потом, затем', pos: 'adv', g: null, forms: null, ex: 'Prima mangio, poi studio.', exRu: 'Сначала поем, потом позанимаюсь.', note: null },
        { id: 'it-chiamare', w: 'chiamare', ru: 'звать; звонить', pos: 'v', g: null, forms: 'chiamo; chiamato (avere)', ex: 'Ti chiamo stasera.', exRu: 'Позвоню тебе вечером.', note: null },
        { id: 'it-dimenticare', w: 'dimenticare', ru: 'забывать', pos: 'v', g: null, forms: 'dimèntico, dimentichi; dimenticato (avere)', ex: 'Avevo dimenticato il passaporto.', exRu: 'Я забыл паспорт (до того).', note: 'также dimenticarsi di' },
        { id: 'it-passaporto', w: 'passaporto', ru: 'паспорт', pos: 'n', g: 'm', forms: 'il passaporto, -i', ex: 'Ecco il mio passaporto.', exRu: 'Вот мой паспорт.', note: null },
        { id: 'it-volo', w: 'volo', ru: 'рейс, полёт', pos: 'n', g: 'm', forms: 'il volo, -i', ex: 'Il volo era già partito.', exRu: 'Рейс уже улетел.', note: null },
        { id: 'it-aspettare', w: 'aspettare', ru: 'ждать', pos: 'v', g: null, forms: 'aspetto; aspettato (avere)', ex: 'Ti sto aspettando!', exRu: 'Я тебя жду!', note: 'переходный: aspettare qn (без предлога)' },
        { id: 'it-cucinare', w: 'cucinare', ru: 'готовить (еду)', pos: 'v', g: null, forms: 'cucino; cucinato (avere)', ex: 'Sto cucinando.', exRu: 'Я готовлю.', note: null },
        { id: 'it-pronto', w: 'pronto', ru: 'готовый; алло', pos: 'adj', g: null, forms: 'pronto, -a, -i, -e', ex: 'Pronto? Chi parla?', exRu: 'Алло? Кто говорит?', note: null },
        { id: 'it-finalmente', w: 'finalmente', ru: 'наконец', pos: 'adv', g: null, forms: null, ex: 'Finalmente sei arrivato!', exRu: 'Наконец-то ты пришёл!', note: 'ложный друг: не «финально» (= alla fine)' },
        { id: 'it-adesso', w: 'adesso', ru: 'сейчас', pos: 'adv', g: null, forms: 'syn. ora', ex: 'Adesso sto lavorando.', exRu: 'Сейчас я работаю.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u05-l04',
      kind: 'reading',
      title: 'La casa dei nonni',
      goals: ['Читать воспоминание, где чередуются imperfetto и passato prossimo', 'Объяснять выбор времени в каждом предложении'],
      skills: ['it.impf.vs-pp', 'it.trapassato'],
      theory: [],
      vocab: [
        { id: 'it-campagna', w: 'campagna', ru: 'сельская местность; кампания', pos: 'n', g: 'f', forms: 'la campagna, -e', ex: 'Vivono in campagna.', exRu: 'Они живут за городом.', note: 'ложный друг: не «компания» (= la compagnia)' },
        { id: 'it-cane', w: 'cane', ru: 'собака', pos: 'n', g: 'm', forms: 'il cane, -i', ex: 'Il cane abbaiava.', exRu: 'Собака лаяла.', note: null },
        { id: 'it-gatto', w: 'gatto', ru: 'кот, кошка', pos: 'n', g: 'm', forms: 'il gatto, -i', ex: 'Il gatto dorme.', exRu: 'Кот спит.', note: null },
        { id: 'it-raccontare', w: 'raccontare', ru: 'рассказывать', pos: 'v', g: null, forms: 'racconto; raccontato (avere)', ex: 'Il nonno raccontava storie.', exRu: 'Дедушка рассказывал истории.', note: null },
        { id: 'it-storia', w: 'storia', ru: 'история; рассказ', pos: 'n', g: 'f', forms: 'la storia, -e', ex: 'È una storia vera.', exRu: 'Это правдивая история.', note: null },
        { id: 'it-cielo', w: 'cielo', ru: 'небо', pos: 'n', g: 'm', forms: 'il cielo, -i', ex: 'Il cielo era pieno di stelle.', exRu: 'Небо было полно звёзд.', note: null },
        { id: 'it-stella', w: 'stella', ru: 'звезда', pos: 'n', g: 'f', forms: 'la stella, -e', ex: 'Guarda le stelle!', exRu: 'Посмотри на звёзды!', note: null },
        { id: 'it-ricordo', w: 'ricordo', ru: 'воспоминание; сувенир', pos: 'n', g: 'm', forms: 'il ricordo, -i', ex: 'Un bel ricordo.', exRu: 'Хорошее воспоминание.', note: 'ricordare — помнить' }
      ],
      text: {
        title: 'La casa dei nonni',
        lines: [
          { t: 'Quando ero piccola, passavo ogni estate dai nonni, in campagna.', ru: 'Когда я была маленькой, я проводила каждое лето у бабушки с дедушкой, за городом.' },
          { t: 'La casa era vecchia, ma molto grande, e dietro c’era un giardino pieno di alberi.', ru: 'Дом был старым, но очень большим, а за ним был сад, полный деревьев.' },
          { t: 'La mattina aiutavo la nonna in cucina; il pomeriggio giocavo con il cane.', ru: 'По утрам я помогала бабушке на кухне, днём играла с собакой.' },
          { t: 'La sera il nonno ci raccontava storie di guerra e guardavamo le stelle.', ru: 'Вечерами дедушка рассказывал нам истории о войне, и мы смотрели на звёзды.' },
          { t: 'Un’estate, però, è successa una cosa strana.', ru: 'Но однажды летом случилось странное.' },
          { t: 'Una notte stavo dormendo quando ho sentito un rumore in giardino.', ru: 'Однажды ночью я спала, когда услышала шум в саду.' },
          { t: 'Sono scesa piano piano e ho aperto la porta.', ru: 'Я тихонько спустилась и открыла дверь.' },
          { t: 'Era il cane: aveva trovato un piccolo gatto e lo portava in casa.', ru: 'Это была собака: она нашла маленького котёнка и несла его в дом.' },
          { t: 'Da quel giorno il gatto è rimasto con noi per quindici anni.', ru: 'С того дня кот прожил с нами пятнадцать лет.' }
        ]
      }
    }
  ]
}

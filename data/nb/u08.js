export default {
  id: 'nb-u08',
  title: 'Tid, sted og det hypotetiske',
  titleRu: 'Время, место и гипотетичность',
  summary: 'Предлоги и обороты времени, предлоги места и наречия места/направления, фразовые глаголы, плюсквамперфект и ирреальные условные предложения.',
  lessons: [
    {
      id: 'nb-u08-l01',
      kind: 'grammar',
      title: 'Предлоги времени',
      goals: ['Выбирать i, på, om, for … siden в выражениях времени', 'Различать «в этот сезон» и «обычно в этот сезон»'],
      skills: ['nb.prep.time'],
      theory: [
        { type: 'table', head: ['Выражение', 'Значение', 'Пример'], rows: [
          ['i + день / сезон', 'этот (ближайший, только что прошедший)', 'i dag, i kveld, i sommer, i år, i fjor'],
          ['om + сезон / часть суток', 'обычно, регулярно', 'om sommeren, om morgenen, om kvelden'],
          ['på + день недели', 'в (ближайший) день', 'på mandag, på fredag'],
          ['på + мн. / om + опред.', 'по (дням)', 'på mandager, om mandagen'],
          ['i + месяц, год', 'в', 'i mai, i 1990'],
          ['den + дата', 'число', 'den 17. mai'],
          ['om + период', 'через (в будущем)', 'om to dager, om en time'],
          ['for … siden', 'назад', 'for tre år siden'],
          ['i + период', 'в течение', 'Jeg bodde der i fem år.'],
          ['på + период', 'за (срок выполнения); в отриц. — давно', 'på to timer; ikke på lenge'],
          ['siden', 'с (момента)', 'siden 2020'],
          ['fra … til', 'с … до', 'fra ni til fire']
        ] },
        { type: 'rule', text: '**i sommer** = этим летом (ближайшим или только что прошедшим) — **om sommeren** = летом вообще, каждое лето.' },
        { type: 'contrast', text: '«Через два дня» — *om to dager* (не ✗ *etter to dager*, это «спустя два дня» в рассказе о прошлом). «Два дня назад» — *for to dager siden*. «Я живу здесь пять лет» — *Jeg har bodd her i fem år* (перфект!).' },
        { type: 'pitfall', text: '*i natt* — и «сегодня ночью», и «прошлой ночью» — решает контекст и время глагола: *I natt sov jeg dårlig / I natt skal jeg sove godt.*' },
        { type: 'examples', items: [
          { t: 'Om vinteren er det mørkt nesten hele døgnet.', ru: 'Зимой темно почти круглые сутки.' },
          { t: 'Vi reiser til Spania i jula.', ru: 'На Рождество мы едем в Испанию.' },
          { t: 'Jeg har ikke sett henne på lenge.', ru: 'Я давно её не видел.' },
          { t: 'Hun flyttet hit for to måneder siden.', ru: 'Она переехала сюда два месяца назад.' }
        ] },
        { type: 'tip', text: 'Сезоны: *vår, sommer, høst, vinter* — со строчной буквы, как и месяцы и дни недели.' }
      ],
      vocab: [
        { id: 'nb-måned', w: 'måned', ru: 'месяц', pos: 'n', g: 'm', forms: 'måneden, måneder, månedene', ex: 'Jeg har bodd her i tre måneder.', exRu: 'Я живу здесь три месяца.', note: 'd не произносится.' },
        { id: 'nb-døgn', w: 'døgn', ru: 'сутки', pos: 'n', g: 'n', forms: 'døgnet, døgn, døgnene', ex: 'Butikken er åpen hele døgnet.', exRu: 'Магазин открыт круглосуточно.', note: 'Нет в английском, но есть в русском!' },
        { id: 'nb-vår-season', w: 'vår', ru: 'весна', pos: 'n', g: 'm', forms: 'våren, vårer, vårene', ex: 'Om våren blir dagene lengre.', exRu: 'Весной дни становятся длиннее.', note: 'Омоним: vår — наш.' },
        { id: 'nb-høst', w: 'høst', ru: 'осень', pos: 'n', g: 'm', forms: 'høsten, høster, høstene', ex: 'I høst skal jeg begynne å studere.', exRu: 'Этой осенью я начну учиться.', note: null },
        { id: 'nb-vinter', w: 'vinter', ru: 'зима', pos: 'n', g: 'm', forms: 'vinteren, vintrer, vintrene', ex: 'Om vinteren går vi på ski.', exRu: 'Зимой мы катаемся на лыжах.', note: 'Синкопа: vintrer.' },
        { id: 'nb-jul', w: 'jul', ru: 'Рождество', pos: 'n', g: 'f', forms: 'jula', ex: 'God jul!', exRu: 'С Рождеством!', note: 'Допустимо: julen. i jula — на Рождество.' },
        { id: 'nb-tidlig', w: 'tidlig', ru: 'ранний; рано', pos: 'adj', g: null, forms: 'tidlig, tidlige', ex: 'Jeg står opp tidlig.', exRu: 'Я встаю рано.', note: 'i morgen tidlig — завтра утром.' },
        { id: 'nb-sent', w: 'sent', ru: 'поздно', pos: 'adv', g: null, forms: null, ex: 'Det er for sent nå.', exRu: 'Теперь уже слишком поздно.', note: 'komme for sent — опоздать.' },
        { id: 'nb-om-prep', w: 'om', ru: 'через (о времени); о (теме)', pos: 'prep', g: null, forms: null, ex: 'Toget går om ti minutter.', exRu: 'Поезд уходит через десять минут.', note: 'snakke om — говорить о; om sommeren — летом.' },
        { id: 'nb-i', w: 'i', ru: 'в', pos: 'prep', g: null, forms: null, ex: 'Hun bor i Oslo.', exRu: 'Она живёт в Осло.', note: 'Также «в течение»: i to år.' },
        { id: 'nb-på', w: 'på', ru: 'на; в', pos: 'prep', g: null, forms: null, ex: 'Vi ses på mandag.', exRu: 'Увидимся в понедельник.', note: 'Самый многозначный предлог: på jobb, på norsk, på to timer.' },
        { id: 'nb-for-siden', w: 'for … siden', ru: '… назад', pos: 'phr', g: null, forms: null, ex: 'Vi møttes for ti år siden.', exRu: 'Мы познакомились десять лет назад.', note: 'С претеритом.' }
      ],
      text: null
    },
    {
      id: 'nb-u08-l02',
      kind: 'grammar',
      title: 'Место и направление',
      goals: ['Выбирать i или på с названиями мест', 'Различать наречия направления и местонахождения (hjem/hjemme)', 'Употреблять hos и til'],
      skills: ['nb.prep.place'],
      theory: [
        { type: 'table', caption: 'i или på?', head: ['', 'i', 'på'], rows: [
          ['география', 'страны, большинство городов: i Norge, i Oslo', 'острова и ряд норвежских городов: på Island, på Hamar, på Lillehammer'],
          ['помещения', 'закрытое пространство: i stua, i butikken, i bilen', 'некоторые комнаты: på kjøkkenet, på badet, på rommet'],
          ['учреждения', '—', 'på jobb, på skolen, på kontoret, på sykehuset, på kino'],
          ['природа', 'i skogen, i byen', 'på fjellet, på landet, på stranda']
        ], note: 'Многое лексикализовано — учите словосочетание целиком.' },
        { type: 'table', caption: 'Куда? — Где?', head: ['Куда (направление)', 'Где (место)', 'Перевод'], rows: [
          ['hjem', 'hjemme', 'домой — дома'],
          ['ut', 'ute', 'наружу — снаружи, на улице'],
          ['inn', 'inne', 'внутрь — внутри, в помещении'],
          ['opp', 'oppe', 'наверх — наверху'],
          ['ned', 'nede', 'вниз — внизу'],
          ['hit', 'her', 'сюда — здесь'],
          ['dit', 'der', 'туда — там'],
          ['bort', 'borte', 'прочь — вдали; нет на месте']
        ] },
        { type: 'rule', text: 'Глаголы движения (*gå, komme, reise, dra*) — с формой направления; *være, bo, sitte, bli* — с формой места: *Jeg går hjem. Jeg er hjemme.*' },
        { type: 'p', text: '**hos** — «у кого-то» (место): *hos legen, hos meg*. Направление — *til*: *Jeg går til legen. Kom til meg!*' },
        { type: 'contrast', text: 'Здесь русская система — прямой союзник: «домой / дома», «куда / где», «сюда / здесь» полностью соответствуют *hjem / hjemme, hit / her*. Сложность только в i/på.' },
        { type: 'pitfall', text: '✗ *Jeg er hjem*, ✗ *Kom her!* — правильно *Jeg er hjemme*, *Kom hit!*' },
        { type: 'examples', items: [
          { t: 'Barna leker ute.', ru: 'Дети играют на улице.' },
          { t: 'Skal vi gå ut og spise?', ru: 'Сходим куда-нибудь поесть?' },
          { t: 'Han bor oppe på loftet.', ru: 'Он живёт наверху, на чердаке.' },
          { t: 'Jeg var hos tannlegen i går.', ru: 'Вчера я был у зубного врача.' }
        ] }
      ],
      vocab: [
        { id: 'nb-hjem', w: 'hjem', ru: 'домой', pos: 'adv', g: null, forms: null, ex: 'Når kommer du hjem?', exRu: 'Когда ты придёшь домой?', note: 'Также сущ. et hjem — дом, жилище.' },
        { id: 'nb-hjemme', w: 'hjemme', ru: 'дома', pos: 'adv', g: null, forms: null, ex: 'Er mamma hjemme?', exRu: 'Мама дома?', note: null },
        { id: 'nb-ut', w: 'ut', ru: 'наружу, на улицу', pos: 'adv', g: null, forms: null, ex: 'Skal vi gå ut?', exRu: 'Выйдем на улицу?', note: null },
        { id: 'nb-ute', w: 'ute', ru: 'снаружи, на улице', pos: 'adv', g: null, forms: null, ex: 'Det er kaldt ute.', exRu: 'На улице холодно.', note: null },
        { id: 'nb-inn', w: 'inn', ru: 'внутрь', pos: 'adv', g: null, forms: null, ex: 'Kom inn!', exRu: 'Входи!', note: null },
        { id: 'nb-inne', w: 'inne', ru: 'внутри, в помещении', pos: 'adv', g: null, forms: null, ex: 'Barna er inne i dag.', exRu: 'Дети сегодня дома (в помещении).', note: null },
        { id: 'nb-opp', w: 'opp', ru: 'вверх, наверх', pos: 'adv', g: null, forms: null, ex: 'Vi gikk opp på fjellet.', exRu: 'Мы поднялись на гору.', note: null },
        { id: 'nb-oppe', w: 'oppe', ru: 'наверху', pos: 'adv', g: null, forms: null, ex: 'Er du oppe ennå?', exRu: 'Ты ещё не спишь?', note: 'Также «бодрствующий, на ногах».' },
        { id: 'nb-ned', w: 'ned', ru: 'вниз', pos: 'adv', g: null, forms: null, ex: 'Kom ned!', exRu: 'Спускайся!', note: null },
        { id: 'nb-nede', w: 'nede', ru: 'внизу', pos: 'adv', g: null, forms: null, ex: 'Bilen står nede i garasjen.', exRu: 'Машина стоит внизу в гараже.', note: null },
        { id: 'nb-hit', w: 'hit', ru: 'сюда', pos: 'adv', g: null, forms: null, ex: 'Kom hit!', exRu: 'Иди сюда!', note: null },
        { id: 'nb-dit', w: 'dit', ru: 'туда', pos: 'adv', g: null, forms: null, ex: 'Vi drar dit i morgen.', exRu: 'Мы поедем туда завтра.', note: null },
        { id: 'nb-hos', w: 'hos', ru: 'у (кого-то)', pos: 'prep', g: null, forms: null, ex: 'Jeg bor hos foreldrene mine.', exRu: 'Я живу у родителей.', note: 'Направление — til: til legen.' },
        { id: 'nb-kontor', w: 'kontor', ru: 'офис, кабинет', pos: 'n', g: 'n', forms: 'kontoret, kontorer, kontorene', ex: 'Hun er på kontoret.', exRu: 'Она в офисе.', note: 'Мн. ч. также kontor.' }
      ],
      text: null
    },
    {
      id: 'nb-u08-l03',
      kind: 'grammar',
      title: 'Фразовые глаголы',
      goals: ['Понимать и употреблять частотные фразовые глаголы', 'Ставить ikke и местоимение-дополнение перед частицей'],
      skills: ['nb.verb.particle'],
      theory: [
        { type: 'rule', text: 'Фразовый глагол = глагол + **ударная частица** (*opp, av, på, ut, fram*). Значение часто не выводится из частей: *stå opp* — вставать (с постели), *se ut* — выглядеть, *gi opp* — сдаваться.' },
        { type: 'table', caption: 'Порядок слов', head: ['Случай', 'Пример'], rows: [
          ['ikke — перед частицей', 'Han står ikke opp før ti.'],
          ['существительное — обычно после частицы', 'Slå av lyset!'],
          ['безударное местоимение — перед частицей', 'Slå det av!'],
          ['перфект', 'Har du funnet ut hva det koster?'],
          ['придаточное (BIFF)', '…fordi hun ikke står opp.']
        ] },
        { type: 'contrast', text: 'Норвежская частица делает работу русской приставки: *stå opp* — вс-тать, *slå av* — вы-ключить, *finne ut* — вы-яснить. Пара *ta på seg* (надеть, действие) — *ha på seg* (быть одетым во что-то) соответствует «надеть — носить».' },
        { type: 'pitfall', text: 'Частица не отрывается без нужды: ✗ *Han står opp ikke*. И не путайте *slå på* «включить» с *slå på noe* «ударить по чему-то» — ударение во фразовом глаголе на частице.' },
        { type: 'examples', items: [
          { t: 'Når står du opp?', ru: 'Когда ты встаёшь?' },
          { t: 'Hun tok på seg jakka og gikk.', ru: 'Она надела куртку и ушла.' },
          { t: 'Du ser trøtt ut.', ru: 'Ты выглядишь усталым.' },
          { t: 'Pass på barna!', ru: 'Присмотри за детьми!' }
        ] }
      ],
      vocab: [
        { id: 'nb-stå-opp', w: 'stå opp', ru: 'вставать (с постели)', pos: 'v', g: null, forms: 'står opp, sto opp, har stått opp', ex: 'Jeg står opp klokka sju.', exRu: 'Я встаю в семь.', note: null },
        { id: 'nb-slå-på', w: 'slå på', ru: 'включать', pos: 'v', g: null, forms: 'slår på, slo på, har slått på', ex: 'Kan du slå på lyset?', exRu: 'Можешь включить свет?', note: null },
        { id: 'nb-slå-av', w: 'slå av', ru: 'выключать', pos: 'v', g: null, forms: 'slår av, slo av, har slått av', ex: 'Slå av mobilen, er du snill.', exRu: 'Выключи, пожалуйста, мобильный.', note: null },
        { id: 'nb-ta-på-seg', w: 'ta på seg', ru: 'надевать', pos: 'v', g: null, forms: 'tar på seg, tok på seg, har tatt på seg', ex: 'Ta på deg lua!', exRu: 'Надень шапку!', note: 'Действие. Состояние — ha på seg.' },
        { id: 'nb-ha-på-seg', w: 'ha på seg', ru: 'быть одетым в, носить', pos: 'v', g: null, forms: 'har på seg, hadde på seg, har hatt på seg', ex: 'Hun hadde på seg en rød kjole.', exRu: 'На ней было красное платье.', note: null },
        { id: 'nb-se-ut', w: 'se ut', ru: 'выглядеть', pos: 'v', g: null, forms: 'ser ut, så ut, har sett ut', ex: 'Det ser ut som det blir regn.', exRu: 'Похоже, будет дождь.', note: null },
        { id: 'nb-finne-ut', w: 'finne ut', ru: 'выяснять', pos: 'v', g: null, forms: 'finner ut, fant ut, har funnet ut', ex: 'Jeg må finne ut når toget går.', exRu: 'Мне нужно выяснить, когда уходит поезд.', note: null },
        { id: 'nb-gi-opp', w: 'gi opp', ru: 'сдаваться, бросать', pos: 'v', g: null, forms: 'gir opp, ga opp, har gitt opp', ex: 'Ikke gi opp!', exRu: 'Не сдавайся!', note: null },
        { id: 'nb-komme-fram', w: 'komme fram', ru: 'добираться, прибывать', pos: 'v', g: null, forms: 'kommer fram, kom fram, har kommet fram', ex: 'Ring når du kommer fram!', exRu: 'Позвони, когда доберёшься!', note: 'Допустимо: frem.' },
        { id: 'nb-holde-på', w: 'holde på', ru: 'заниматься, быть в процессе', pos: 'v', g: null, forms: 'holder på, holdt på, har holdt på', ex: 'Hva holder du på med?', exRu: 'Чем ты занимаешься?', note: 'holde på å + инф. — как раз делать; чуть не.' },
        { id: 'nb-legge-merke-til', w: 'legge merke til', ru: 'замечать', pos: 'v', g: null, forms: 'legger merke til, la merke til, har lagt merke til', ex: 'Jeg la ikke merke til ham.', exRu: 'Я его не заметил.', note: null },
        { id: 'nb-passe-på', w: 'passe på', ru: 'присматривать, следить', pos: 'v', g: null, forms: 'passer på, passet på, har passet på', ex: 'Kan du passe på barna?', exRu: 'Можешь присмотреть за детьми?', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u08-l04',
      kind: 'grammar',
      title: 'Плюсквамперфект и ирреальные условия',
      goals: ['Образовывать плюсквамперфект', 'Строить ирреальные условные предложения настоящего и прошлого', 'Употреблять вежливое skulle gjerne'],
      skills: ['nb.verb.pluperfect', 'nb.verb.conditional'],
      theory: [
        { type: 'rule', text: 'Плюсквамперфект = **hadde** + причастие II — действие раньше другого прошедшего: *Da vi kom, **hadde** filmen allerede **begynt**.*' },
        { type: 'table', caption: 'Условные предложения', head: ['Тип', 'Придаточное', 'Главное'], rows: [
          ['реальное', 'Hvis det regner,', 'blir vi hjemme.'],
          ['ирреальное (наст.)', 'Hvis jeg var rik,', 'ville jeg kjøpe ei hytte.'],
          ['ирреальное (прош.)', 'Hvis jeg hadde visst det,', 'ville jeg ha kommet. / hadde jeg kommet.']
        ], note: 'Вместо ville можно skulle: …skulle jeg kjøpe ei hytte.' },
        { type: 'p', text: 'Ирреальное условие без *hvis* — с инверсией: *Var jeg rik, ville jeg…* / *Hadde jeg visst det, hadde jeg kommet.*' },
        { type: 'p', text: 'Вежливость и пожелания: *Jeg skulle gjerne hatt en kaffe* (= *skulle gjerne ha hatt*) — «Я бы хотел кофе». *Bare jeg hadde mer tid!* — «Если бы у меня было больше времени!»' },
        { type: 'contrast', text: 'Русское «бы» + прошедшее служит и для настоящего, и для прошлого («Если бы я знал, я бы пришёл» — сейчас или тогда?). Норвежский различает: *Hvis jeg visste…* (сейчас) — *Hvis jeg hadde visst…* (тогда). Плюсквамперфекта в русском нет — его заменяет «уже».' },
        { type: 'pitfall', text: 'В придаточном с *hvis* не ставится *ville*: ✗ *Hvis jeg ville være rik* → *Hvis jeg var rik*. Форма *var* — одна для всех лиц.' },
        { type: 'examples', items: [
          { t: 'Etter at hun hadde spist, la hun seg.', ru: 'Поев, она легла спать.' },
          { t: 'Hvis jeg hadde mer tid, skulle jeg lære islandsk.', ru: 'Будь у меня больше времени, я бы выучил исландский.' },
          { t: 'Hadde vi tatt toget, hadde vi vært der nå.', ru: 'Если бы мы поехали на поезде, уже были бы на месте.' },
          { t: 'I så fall må vi gå nå.', ru: 'В таком случае нам надо идти сейчас.' }
        ] }
      ],
      vocab: [
        { id: 'nb-penger', w: 'penger', ru: 'деньги', pos: 'n', g: 'm', forms: 'pengene', ex: 'Jeg har ikke penger.', exRu: 'У меня нет денег.', note: 'Обычно только мн. ч.' },
        { id: 'nb-rik', w: 'rik', ru: 'богатый', pos: 'adj', g: null, forms: 'rikt, rike', ex: 'Hvis jeg var rik, ville jeg reise jorda rundt.', exRu: 'Если бы я был богат, я бы объехал весь мир.', note: null },
        { id: 'nb-fattig', w: 'fattig', ru: 'бедный', pos: 'adj', g: null, forms: 'fattig, fattige', ex: 'Norge var et fattig land før.', exRu: 'Раньше Норвегия была бедной страной.', note: 'Бедняжка (жалость) — stakkars.' },
        { id: 'nb-ønske', w: 'ønske', ru: 'желать', pos: 'v', g: null, forms: 'ønsker, ønsket, har ønsket', ex: 'Jeg ønsker deg lykke til!', exRu: 'Желаю тебе удачи!', note: null },
        { id: 'nb-ønske-n', w: 'ønske', ru: 'желание', pos: 'n', g: 'n', forms: 'ønsket, ønsker, ønskene', ex: 'Har du noen ønsker til bursdagen?', exRu: 'Есть пожелания ко дню рождения?', note: null },
        { id: 'nb-drømme', w: 'drømme', ru: 'мечтать; видеть сон', pos: 'v', g: null, forms: 'drømmer, drømte, har drømt', ex: 'Jeg drømmer om ei hytte ved sjøen.', exRu: 'Я мечтаю о домике у моря.', note: 'drømme om — мечтать о.' },
        { id: 'nb-angre', w: 'angre', ru: 'сожалеть, раскаиваться', pos: 'v', g: null, forms: 'angrer, angret, har angret', ex: 'Jeg angrer på at jeg ikke kom.', exRu: 'Жалею, что не пришёл.', note: 'angre på — сожалеть о.' },
        { id: 'nb-heldig', w: 'heldig', ru: 'везучий; удачный', pos: 'adj', g: null, forms: 'heldig, heldige', ex: 'Du var heldig!', exRu: 'Тебе повезло!', note: null },
        { id: 'nb-i-så-fall', w: 'i så fall', ru: 'в таком случае', pos: 'phr', g: null, forms: null, ex: 'I så fall kommer jeg også.', exRu: 'В таком случае я тоже приду.', note: null },
        { id: 'nb-ellers', w: 'ellers', ru: 'иначе; в остальном', pos: 'adv', g: null, forms: null, ex: 'Skynd deg, ellers kommer vi for sent!', exRu: 'Поторопись, иначе опоздаем!', note: 'Ellers takk — спасибо, больше ничего не нужно.' },
        { id: 'nb-uansett', w: 'uansett', ru: 'в любом случае; независимо от', pos: 'adv', g: null, forms: null, ex: 'Vi går på tur uansett vær.', exRu: 'Мы идём в поход при любой погоде.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u08-l05',
      kind: 'reading',
      title: 'Friluftsliv',
      goals: ['Читать связный текст уровня B1 с опорой на всю грамматику курса'],
      skills: ['nb.prep.time', 'nb.prep.place', 'nb.verb.conditional', 'nb.syntax.det'],
      theory: [
        { type: 'p', text: 'Итоговый текст. Отметьте: *om vinteren / om sommeren*, *ute i naturen*, *det finnes*, ирреальное условие *hvis du hadde bodd … ville du ha kost deg*. *man* — обобщённо-личное местоимение («человек, люди»).' }
      ],
      vocab: [
        { id: 'nb-friluftsliv', w: 'friluftsliv', ru: 'отдых на природе', pos: 'n', g: 'n', forms: 'friluftslivet', ex: 'Friluftsliv er viktig for nordmenn.', exRu: 'Отдых на природе важен для норвежцев.', note: 'Реалия.' },
        { id: 'nb-allemannsrett', w: 'allemannsrett', ru: 'право свободного доступа к природе', pos: 'n', g: 'm', forms: 'allemannsretten', ex: 'Allemannsretten gjelder i hele Norge.', exRu: 'Право свободного доступа действует по всей Норвегии.', note: 'Реалия.' },
        { id: 'nb-telt', w: 'telt', ru: 'палатка', pos: 'n', g: 'n', forms: 'teltet, telt, teltene', ex: 'Vi sov i telt.', exRu: 'Мы спали в палатке.', note: null },
        { id: 'nb-gå-på-ski', w: 'gå på ski', ru: 'кататься на лыжах', pos: 'phr', g: null, forms: null, ex: 'Nordmenn er født med ski på beina.', exRu: 'Норвежцы рождаются с лыжами на ногах.', note: 'Шутливая поговорка.' },
        { id: 'nb-tur', w: 'tur', ru: 'прогулка, поход, поездка', pos: 'n', g: 'm', forms: 'turen, turer, turene', ex: 'Skal vi gå en tur?', exRu: 'Пойдём погуляем?', note: 'God tur! — Счастливого пути!' },
        { id: 'nb-kose-seg', w: 'kose seg', ru: 'хорошо проводить время, наслаждаться уютом', pos: 'v', g: null, forms: 'koser seg, koste seg, har kost seg', ex: 'Kos deg!', exRu: 'Хорошо тебе провести время!', note: null },
        { id: 'nb-koselig', w: 'koselig', ru: 'уютный, приятный', pos: 'adj', g: null, forms: 'koselig, koselige', ex: 'Så koselig det er her!', exRu: 'Как здесь уютно!', note: 'Ключевое слово норвежской культуры.' }
      ],
      text: {
        title: 'Friluftsliv',
        lines: [
          { t: 'Nordmenn er glade i å være ute i naturen, uansett vær.', ru: 'Норвежцы любят бывать на природе в любую погоду.' },
          { t: 'Dette kalles friluftsliv.', ru: 'Это называется «friluftsliv».' },
          { t: 'Allemannsretten gir alle rett til å gå i skog og fjell, også på privat grunn.', ru: 'Право свободного доступа позволяет всем ходить по лесам и горам, в том числе по частной земле.' },
          { t: 'Man kan til og med sette opp telt for en natt eller to, hvis man er minst 150 meter fra nærmeste hus.', ru: 'Можно даже поставить палатку на ночь-другую, если находишься не ближе 150 метров от ближайшего дома.' },
          { t: 'Om vinteren går mange på ski, og om sommeren drar de på tur i fjellet.', ru: 'Зимой многие катаются на лыжах, а летом ходят в походы в горы.' },
          { t: 'Etter en lang tur er det koselig å sitte rundt bålet og grille pølser.', ru: 'После долгого похода приятно посидеть у костра и пожарить сосиски.' },
          { t: 'Det finnes et gammelt ordtak: «Det finnes ikke dårlig vær, bare dårlige klær.»', ru: 'Есть старая поговорка: «Не бывает плохой погоды, бывает плохая одежда».' },
          { t: 'Har du noen gang sovet i telt?', ru: 'Ты когда-нибудь спал в палатке?' },
          { t: 'Hvis du hadde bodd i Norge, ville du sikkert også ha kost deg på tur!', ru: 'Если бы ты жил в Норвегии, ты бы тоже наверняка полюбил походы!' }
        ]
      }
    }
  ]
};

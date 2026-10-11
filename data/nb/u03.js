export default {
  id: 'nb-u03',
  title: 'Adjektiv og determinativer',
  titleRu: 'Прилагательное, указательные и притяжательные',
  summary: 'Согласование прилагательного (-t, -e), слабая форма и двойная определённость (den store bilen), указательные и притяжательные местоимения, степени сравнения.',
  lessons: [
    {
      id: 'nb-u03-l01',
      kind: 'grammar',
      title: 'Согласование прилагательного',
      goals: ['Согласовывать прилагательное с родом и числом', 'Знать группы без -t и неизменяемые прилагательные', 'Склонять liten'],
      skills: ['nb.adj.agreement'],
      theory: [
        { type: 'rule', text: 'Неопределённая (сильная) форма: основа при en/ei — +{{t}} при et — +{{e}} во мн. ч.: en stor bil, ei stor bok, et stor{{t}} hus, stor{{e}} biler.' },
        { type: 'table', caption: 'Типы согласования', head: ['Тип', 'en / ei', 'et', 'мн.'], rows: [
          ['основной', 'stor', 'stor{{t}}', 'stor{{e}}'],
          ['на ударный гласный', 'ny', 'ny{{tt}}', 'ny{{e}}'],
          ['на -ig / -lig', 'viktig', 'viktig', 'viktig{{e}}'],
          ['на -sk', 'norsk', 'norsk', 'norsk{{e}}'],
          ['гласный + t', 'hvit', 'hvi{{tt}}', 'hvit{{e}}'],
          ['согласный + t', 'kort', 'kort', 'kort{{e}}'],
          ['на -el / -en / -er', 'gammel', 'gammel{{t}}', 'gaml{{e}}'],
          ['на -m после краткого', 'morsom', 'morsom{{t}}', 'morsom{{me}}'],
          ['неизменяемые', 'bra', 'bra', 'bra']
        ], note: 'Неизменяемы также: moderne, stille, gratis, ekte, bra.' },
        { type: 'p', text: 'Те же формы — в предикативе: *Huset er stort. Bilene er nye. Boka er god.*' },
        { type: 'table', caption: 'liten «маленький»', head: ['м.', 'ж.', 'ср.', 'мн.', 'опред.'], rows: [
          ['liten', 'lita', 'lite', 'små', 'lille (мн. små)']
        ], note: 'С ж. р. допустимо liten: ei liten jente.' },
        { type: 'contrast', text: 'Как русская краткая форма в предикативе («дом велик»), норвежское прилагательное согласуется и в атрибутивной, и в предикативной позиции — но только по роду и числу, падежей нет.' },
        { type: 'pitfall', text: '✗ *viktigt*, ✗ *norskt*: прилагательные на *-ig* и *-sk* в среднем роде не меняются — *et viktig spørsmål, et norsk ord*.' },
        { type: 'tip', text: '*god — godt*: d не произносится, -t звучит: [gut]. *Godt nytt år!*' },
        { type: 'examples', items: [
          { t: 'Vi har et nytt hus og to gamle biler.', ru: 'У нас новый дом и две старые машины.' },
          { t: 'Kaffen er varm, men vannet er kaldt.', ru: 'Кофе горячий, а вода холодная.' },
          { t: 'Det er et lite land med mange små byer.', ru: 'Это маленькая страна со множеством маленьких городов.' }
        ] }
      ],
      vocab: [
        { id: 'nb-stor', w: 'stor', ru: 'большой', pos: 'adj', g: null, forms: 'stort, store', ex: 'Huset er stort.', exRu: 'Дом большой.', note: 'Сравн.: større, størst.' },
        { id: 'nb-liten', w: 'liten', ru: 'маленький', pos: 'adj', g: null, forms: 'lita (ж.), lite (ср.), små (мн.), lille (опред.)', ex: 'Vi bor i et lite hus.', exRu: 'Мы живём в маленьком доме.', note: 'Сравн.: mindre, minst.' },
        { id: 'nb-ny', w: 'ny', ru: 'новый', pos: 'adj', g: null, forms: 'nytt, nye', ex: 'Godt nytt år!', exRu: 'С Новым годом!', note: null },
        { id: 'nb-gammel', w: 'gammel', ru: 'старый', pos: 'adj', g: null, forms: 'gammelt, gamle', ex: 'Hvor gammel er du?', exRu: 'Сколько тебе лет?', note: 'Сравн.: eldre, eldst.' },
        { id: 'nb-god', w: 'god', ru: 'хороший; вкусный', pos: 'adj', g: null, forms: 'godt, gode', ex: 'Maten er god.', exRu: 'Еда вкусная.', note: 'Сравн.: bedre, best.' },
        { id: 'nb-fin', w: 'fin', ru: 'красивый, хороший, славный', pos: 'adj', g: null, forms: 'fint, fine', ex: 'Det er fint vær i dag.', exRu: 'Сегодня хорошая погода.', note: null },
        { id: 'nb-ung', w: 'ung', ru: 'молодой', pos: 'adj', g: null, forms: 'ungt, unge', ex: 'Hun er ung og sterk.', exRu: 'Она молодая и сильная.', note: 'Сравн.: yngre, yngst.' },
        { id: 'nb-varm', w: 'varm', ru: 'тёплый, горячий', pos: 'adj', g: null, forms: 'varmt, varme', ex: 'Det er varmt i dag.', exRu: 'Сегодня тепло.', note: null },
        { id: 'nb-kald', w: 'kald', ru: 'холодный', pos: 'adj', g: null, forms: 'kaldt, kalde', ex: 'Vinteren er lang og kald.', exRu: 'Зима долгая и холодная.', note: null },
        { id: 'nb-dyr', w: 'dyr', ru: 'дорогой (о цене)', pos: 'adj', g: null, forms: 'dyrt, dyre', ex: 'Norge er et dyrt land.', exRu: 'Норвегия — дорогая страна.', note: 'Омоним: et dyr — животное. «Дорогой» (милый) — kjær.' },
        { id: 'nb-billig', w: 'billig', ru: 'дешёвый', pos: 'adj', g: null, forms: 'billig, billige', ex: 'Billettene er billige.', exRu: 'Билеты дешёвые.', note: 'На -ig: ср. р. без -t.' },
        { id: 'nb-norsk', w: 'norsk', ru: 'норвежский; норвежский язык', pos: 'adj', g: null, forms: 'norsk, norske', ex: 'Jeg snakker litt norsk.', exRu: 'Я немного говорю по-норвежски.', note: 'Со строчной буквы. На -sk: ср. р. без -t.' },
        { id: 'nb-morsom', w: 'morsom', ru: 'весёлый, забавный, интересный', pos: 'adj', g: null, forms: 'morsomt, morsomme', ex: 'Det var en morsom film.', exRu: 'Это был смешной фильм.', note: 'Удвоение m перед -e: morsomme.' }
      ],
      text: null
    },
    {
      id: 'nb-u03-l02',
      kind: 'grammar',
      title: 'Двойная определённость и указательные',
      goals: ['Строить группу den/det/de + прилагательное-e + существительное с суффиксом', 'Употреблять denne/dette/disse', 'Знать исключения hele, neste'],
      skills: ['nb.adj.definite'],
      theory: [
        { type: 'rule', text: 'Слабая (определённая) форма прилагательного — **-e во всех родах и числах**. Перед ней ставится предпозитивный артикль **den / det / de**, а существительное сохраняет суффикс: двойная определённость.' },
        { type: 'table', head: ['', 'Неопределённо', 'Определённо'], rows: [
          ['м.', 'en stor bil', '{{den}} stor{{e}} bil{{en}}'],
          ['ж.', 'ei stor bok', '{{den}} stor{{e}} bok{{a}}'],
          ['ср.', 'et stort hus', '{{det}} stor{{e}} hus{{et}}'],
          ['мн.', 'store biler', '{{de}} stor{{e}} bil{{ene}}']
        ], note: 'liten → den lille gutten, det lille huset, de små barna.' },
        { type: 'h', text: 'Указательные' },
        { type: 'table', head: ['', 'этот', 'тот'], rows: [
          ['м./ж.', 'denne bilen', 'den bilen'],
          ['ср.', 'dette huset', 'det huset'],
          ['мн.', 'disse bøkene', 'de bøkene']
        ], note: 'После указательных — тоже определённая форма: denne nye bilen.' },
        { type: 'p', text: 'Исключения: *hele* «весь» — с суффиксом, но без артикля: *hele dagen, hele året*. *neste* «следующий», *forrige* «прошлый» — без артикля и без суффикса: *neste uke, forrige år*.' },
        { type: 'contrast', text: 'В русском «эта большая машина» хватает одного указателя. В букмоле определённость маркируется дважды: *den* + *bilen*. (В датском суффикса здесь нет — *den store bil* — поэтому в старых текстах встречается датская модель.)' },
        { type: 'pitfall', text: '✗ *den store bil* и ✗ *store bilen* — в современном букмоле ошибка в обычной речи. Правильно: *den store bilen*.' },
        { type: 'examples', items: [
          { t: 'Den røde bilen er ny.', ru: 'Красная машина новая.' },
          { t: 'Det gamle huset ligger ved sjøen.', ru: 'Старый дом стоит у моря.' },
          { t: 'Liker du disse hvite koppene?', ru: 'Тебе нравятся эти белые чашки?' },
          { t: 'Hun sover hele dagen.', ru: 'Она спит весь день.' }
        ] },
        { type: 'tip', text: 'Цвета: *blå — blått — blå (blåe)*, *grønn — grønt — grønne* (nn → n перед t), *rød — rødt — røde*.' }
      ],
      vocab: [
        { id: 'nb-denne', w: 'denne', ru: 'этот, эта', pos: 'pron', g: null, forms: 'dette (ср.), disse (мн.)', ex: 'Denne boka er god.', exRu: 'Эта книга хорошая.', note: '+ определённая форма существительного.' },
        { id: 'nb-hvit', w: 'hvit', ru: 'белый', pos: 'adj', g: null, forms: 'hvitt, hvite', ex: 'Huset er hvitt.', exRu: 'Дом белый.', note: null },
        { id: 'nb-svart', w: 'svart', ru: 'чёрный', pos: 'adj', g: null, forms: 'svart, svarte', ex: 'Jeg drikker kaffen svart.', exRu: 'Я пью кофе чёрным.', note: 'Согласный + t: ср. р. без изменений.' },
        { id: 'nb-rød', w: 'rød', ru: 'красный', pos: 'adj', g: null, forms: 'rødt, røde', ex: 'Den røde bilen er ny.', exRu: 'Красная машина новая.', note: null },
        { id: 'nb-blå', w: 'blå', ru: 'синий, голубой', pos: 'adj', g: null, forms: 'blått, blå', ex: 'Himmelen er blå.', exRu: 'Небо голубое.', note: 'Мн. ч. и слабая форма также blåe.' },
        { id: 'nb-grønn', w: 'grønn', ru: 'зелёный', pos: 'adj', g: null, forms: 'grønt, grønne', ex: 'Det grønne huset er vårt.', exRu: 'Зелёный дом — наш.', note: 'nn → n перед t.' },
        { id: 'nb-gul', w: 'gul', ru: 'жёлтый', pos: 'adj', g: null, forms: 'gult, gule', ex: 'Bananene er gule.', exRu: 'Бананы жёлтые.', note: null },
        { id: 'nb-lang', w: 'lang', ru: 'длинный, долгий', pos: 'adj', g: null, forms: 'langt, lange', ex: 'Det er en lang dag.', exRu: 'Это длинный день.', note: 'Сравн.: lengre, lengst.' },
        { id: 'nb-kort', w: 'kort', ru: 'короткий', pos: 'adj', g: null, forms: 'kort, korte', ex: 'Håret hennes er kort.', exRu: 'У неё короткие волосы.', note: 'Омоним: et kort — карточка, открытка.' },
        { id: 'nb-hel', w: 'hel', ru: 'целый, весь', pos: 'adj', g: null, forms: 'helt, hele', ex: 'Hun sover hele dagen.', exRu: 'Она спит весь день.', note: 'hele + опред. форма без артикля: hele året.' },
        { id: 'nb-neste', w: 'neste', ru: 'следующий', pos: 'adj', g: null, forms: null, ex: 'Vi reiser neste uke.', exRu: 'Мы уезжаем на следующей неделе.', note: 'Без артикля и суффикса: neste uke.' },
        { id: 'nb-samme', w: 'samme', ru: 'тот же самый', pos: 'adj', g: null, forms: null, ex: 'Vi bor i samme by.', exRu: 'Мы живём в одном и том же городе.', note: 'Неизменяемо: den samme boka / samme dag.' }
      ],
      text: null
    },
    {
      id: 'nb-u03-l03',
      kind: 'grammar',
      title: 'Притяжательные местоимения',
      goals: ['Согласовывать min/mi/mitt/mine', 'Ставить притяжательное после существительного в определённой форме', 'Знать неизменяемые hans, hennes, deres'],
      skills: ['nb.pron.possessive'],
      theory: [
        { type: 'table', head: ['', 'м. (en)', 'ж. (ei)', 'ср. (et)', 'мн.'], rows: [
          ['мой', 'min', 'mi', 'mitt', 'mine'],
          ['твой', 'din', 'di', 'ditt', 'dine'],
          ['его / её', 'hans / hennes', 'hans / hennes', 'hans / hennes', 'hans / hennes'],
          ['наш', 'vår', 'vår', 'vårt', 'våre'],
          ['ваш / их', 'deres', 'deres', 'deres', 'deres']
        ], note: 'Возвратное sin/si/sitt/sine — в юните 5.' },
        { type: 'rule', text: 'Нейтральный порядок — притяжательное **после** существительного в **определённой** форме: bil{{en}} min, bok{{a}} mi, hus{{et}} mitt, bil{{ene}} mine. Препозиция (*min bil*) — с **неопределённой** формой; она звучит выделительно или книжно.' },
        { type: 'examples', items: [
          { t: 'Bilen min er gammel.', ru: 'Моя машина старая.' },
          { t: 'Det er min bil, ikke din!', ru: 'Это моя машина, а не твоя!', note: 'логическое ударение → препозиция' },
          { t: 'Hvor er nøklene dine?', ru: 'Где твои ключи?' },
          { t: 'Foreldrene hennes bor i Bodø.', ru: 'Её родители живут в Будё.' },
          { t: 'Den nye leiligheten vår er lys.', ru: 'Наша новая квартира светлая.', note: 'двойная определённость + постпозиция' }
        ] },
        { type: 'p', text: 'Женские формы *mi, di* употребляются с формой на *-a*: *boka mi*. С допустимой формой на *-en* — мужские: *boken min*.' },
        { type: 'contrast', text: 'Как и в русском: *min/mi/mitt/mine* согласуются с обладаемым (мой/моя/моё/мои), а *hans, hennes, deres* неизменяемы (как «его, её, их»).' },
        { type: 'pitfall', text: '✗ *min bilen*, ✗ *bil min*: перед существительным — неопределённая форма, после — определённая.' },
        { type: 'tip', text: 'С названиями родства часто встречается постпозиция без суффикса: *far min, mor mi, bror min* — это нормально.' }
      ],
      vocab: [
        { id: 'nb-min', w: 'min', ru: 'мой', pos: 'pron', g: null, forms: 'mi (ж.), mitt (ср.), mine (мн.)', ex: 'Bilen min er gammel.', exRu: 'Моя машина старая.', note: null },
        { id: 'nb-din', w: 'din', ru: 'твой', pos: 'pron', g: null, forms: 'di (ж.), ditt (ср.), dine (мн.)', ex: 'Er dette boka di?', exRu: 'Это твоя книга?', note: null },
        { id: 'nb-hans', w: 'hans', ru: 'его', pos: 'pron', g: null, forms: null, ex: 'Kona hans heter Liv.', exRu: 'Его жену зовут Лив.', note: 'Неизменяемо.' },
        { id: 'nb-hennes', w: 'hennes', ru: 'её', pos: 'pron', g: null, forms: null, ex: 'Mannen hennes er lege.', exRu: 'Её муж — врач.', note: 'Неизменяемо.' },
        { id: 'nb-vår', w: 'vår', ru: 'наш', pos: 'pron', g: null, forms: 'vår (ж.), vårt (ср.), våre (мн.)', ex: 'Huset vårt er lite.', exRu: 'Наш дом маленький.', note: 'Омоним: en vår — весна.' },
        { id: 'nb-deres', w: 'deres', ru: 'ваш; их', pos: 'pron', g: null, forms: null, ex: 'Hvor er barna deres?', exRu: 'Где ваши (их) дети?', note: 'Неизменяемо.' },
        { id: 'nb-venninne', w: 'venninne', ru: 'подруга', pos: 'n', g: 'f', forms: 'venninna, venninner, venninnene', ex: 'Venninna mi heter Siri.', exRu: 'Мою подругу зовут Сири.', note: 'Допустимо: venninnen.' },
        { id: 'nb-onkel', w: 'onkel', ru: 'дядя', pos: 'n', g: 'm', forms: 'onkelen, onkler, onklene', ex: 'Onkelen min bor i Alta.', exRu: 'Мой дядя живёт в Альте.', note: 'Синкопа: onkler.' },
        { id: 'nb-tante', w: 'tante', ru: 'тётя', pos: 'n', g: 'f', forms: 'tanta, tanter, tantene', ex: 'Tanta mi er lærer.', exRu: 'Моя тётя — учительница.', note: 'Допустимо: tanten.' },
        { id: 'nb-besteforeldre', w: 'besteforeldre', ru: 'бабушка и дедушка', pos: 'n', g: null, forms: 'besteforeldrene', ex: 'Besteforeldrene våre bor på landet.', exRu: 'Наши бабушка и дедушка живут в деревне.', note: 'Только мн. ч.' },
        { id: 'nb-kjæreste', w: 'kjæreste', ru: 'возлюбленный, -ая; парень/девушка', pos: 'n', g: 'm', forms: 'kjæresten, kjærester, kjærestene', ex: 'Har du kjæreste?', exRu: 'У тебя есть парень (девушка)?', note: 'Общий род для обоих полов.' },
        { id: 'nb-navn', w: 'navn', ru: 'имя, название', pos: 'n', g: 'n', forms: 'navnet, navn, navnene', ex: 'Hva er navnet ditt?', exRu: 'Как тебя зовут?', note: null },
        { id: 'nb-adresse', w: 'adresse', ru: 'адрес', pos: 'n', g: 'm', forms: 'adressen, adresser, adressene', ex: 'Hva er adressen din?', exRu: 'Какой у тебя адрес?', note: 'С двумя d и двумя s.' }
      ],
      text: null
    },
    {
      id: 'nb-u03-l04',
      kind: 'grammar',
      title: 'Степени сравнения',
      goals: ['Образовывать сравнительную и превосходную степень', 'Знать супплетивные и умлаутные формы', 'Строить сравнения с enn, like … som, så … som'],
      skills: ['nb.adj.comparison'],
      theory: [
        { type: 'rule', text: 'Сравнительная: {{-ere}}, превосходная: {{-est}}: varm — varm{{ere}} — varm{{est}}. Прилагательные на **-ig / -lig** получают в превосходной только {{-st}}: billig — billig{{ere}} — billig{{st}}.' },
        { type: 'table', caption: 'Правильные', head: ['Положит.', 'Сравн.', 'Превосх.'], rows: [
          ['varm', 'varm{{ere}}', 'varm{{est}}'],
          ['dyr', 'dyr{{ere}}', 'dyr{{est}}'],
          ['billig', 'billig{{ere}}', 'billig{{st}}'],
          ['vakker', 'vakr{{ere}}', 'vakr{{est}}'],
          ['enkel', 'enkl{{ere}}', 'enkl{{est}}']
        ], note: 'На -el/-er/-en — синкопа: vakker → vakrere.' },
        { type: 'table', caption: 'Неправильные', head: ['Положит.', 'Сравн.', 'Превосх.'], rows: [
          ['god / bra', 'bedre', 'best'],
          ['dårlig', 'verre (dårligere)', 'verst (dårligst)'],
          ['stor', 'større', 'størst'],
          ['liten', 'mindre', 'minst'],
          ['gammel', 'eldre', 'eldst'],
          ['ung', 'yngre', 'yngst'],
          ['lang', 'lengre', 'lengst'],
          ['tung', 'tyngre', 'tyngst'],
          ['mange', 'flere', 'flest'],
          ['mye', 'mer', 'mest'],
          ['få', 'færre', 'færrest']
        ] },
        { type: 'p', text: 'Длинные прилагательные и причастия — аналитически: *mer interessant, mest praktisk*.' },
        { type: 'p', text: 'Превосходная в определённой форме получает **-e**: *den størst{{e}} byen, det best{{e}} huset, de billigst{{e}} billettene*. В предикативе — без -e: *Denne byen er størst.*' },
        { type: 'examples', items: [
          { t: 'Oslo er større enn Bergen.', ru: 'Осло больше Бергена.' },
          { t: 'Hun er like gammel som meg.', ru: 'Она того же возраста, что и я.' },
          { t: 'Han er ikke så høy som broren.', ru: 'Он не такой высокий, как брат.' },
          { t: 'Jo før, jo bedre.', ru: 'Чем раньше, тем лучше.' }
        ] },
        { type: 'contrast', text: 'Умлаут в сравнительной — германское наследие: *stor — større, ung — yngre, lang — lengre*, ср. нем. *groß — größer, jung — jünger, lang — länger*; *gammel — eldre* — от другого корня, ср. англ. *old — elder*.' },
        { type: 'pitfall', text: '«Чем» — **enn** (не *en*!). «Такой же, как» — **like … som**, а не ✗ *like … enn*.' },
        { type: 'tip', text: '*mer* — с несчётными (*mer vann*), *flere* — со счётными (*flere bøker*). То же для *mye / mange*.' }
      ],
      vocab: [
        { id: 'nb-høy', w: 'høy', ru: 'высокий; громкий', pos: 'adj', g: null, forms: 'høyt, høye; høyere, høyest', ex: 'Galdhøpiggen er Norges høyeste fjell.', exRu: 'Гальдхёпигген — самая высокая гора Норвегии.', note: null },
        { id: 'nb-lav', w: 'lav', ru: 'низкий', pos: 'adj', g: null, forms: 'lavt, lave; lavere, lavest', ex: 'Prisene er lavere i dag.', exRu: 'Сегодня цены ниже.', note: null },
        { id: 'nb-tung', w: 'tung', ru: 'тяжёлый', pos: 'adj', g: null, forms: 'tungt, tunge; tyngre, tyngst', ex: 'Denne boka er tyngre enn den andre.', exRu: 'Эта книга тяжелее, чем другая.', note: 'Умлаут: tyngre.' },
        { id: 'nb-lett', w: 'lett', ru: 'лёгкий', pos: 'adj', g: null, forms: 'lett, lette; lettere, lettest', ex: 'Norsk er ikke så lett.', exRu: 'Норвежский не такой уж лёгкий.', note: null },
        { id: 'nb-sterk', w: 'sterk', ru: 'сильный; крепкий', pos: 'adj', g: null, forms: 'sterkt, sterke; sterkere, sterkest', ex: 'Kaffen er veldig sterk.', exRu: 'Кофе очень крепкий.', note: null },
        { id: 'nb-dårlig', w: 'dårlig', ru: 'плохой', pos: 'adj', g: null, forms: 'dårlig, dårlige; verre/dårligere, verst/dårligst', ex: 'Været er verre i dag.', exRu: 'Сегодня погода хуже.', note: 'Jeg føler meg dårlig — мне нехорошо.' },
        { id: 'nb-vanskelig', w: 'vanskelig', ru: 'трудный', pos: 'adj', g: null, forms: 'vanskelig, vanskelige; vanskeligere, vanskeligst', ex: 'Grammatikken er ikke vanskelig.', exRu: 'Грамматика несложная.', note: 'Превосх. на -st.' },
        { id: 'nb-enkel', w: 'enkel', ru: 'простой', pos: 'adj', g: null, forms: 'enkelt, enkle; enklere, enklest', ex: 'Det er den enkleste løsningen.', exRu: 'Это самое простое решение.', note: 'Синкопа: enkle, enklere.' },
        { id: 'nb-interessant', w: 'interessant', ru: 'интересный', pos: 'adj', g: null, forms: 'interessant, interessante; mer interessant, mest interessant', ex: 'Boka er mer interessant enn filmen.', exRu: 'Книга интереснее фильма.', note: null },
        { id: 'nb-mange', w: 'mange', ru: 'много, многие (счётн.)', pos: 'pron', g: null, forms: 'flere, flest', ex: 'Mange nordmenn har hytte.', exRu: 'У многих норвежцев есть дача.', note: null },
        { id: 'nb-mye', w: 'mye', ru: 'много (несчётн.)', pos: 'pron', g: null, forms: 'mer, mest', ex: 'Han drikker mye kaffe.', exRu: 'Он пьёт много кофе.', note: 'Также «намного»: mye bedre.' },
        { id: 'nb-få-adj', w: 'få', ru: 'немногие, мало (счётн.)', pos: 'adj', g: null, forms: 'færre, færrest', ex: 'Få turister kommer hit om vinteren.', exRu: 'Зимой сюда приезжает мало туристов.', note: 'Омоним глагола få «получать».' }
      ],
      text: null
    },
    {
      id: 'nb-u03-l05',
      kind: 'reading',
      title: 'To byer',
      goals: ['Узнавать степени сравнения и двойную определённость в тексте'],
      skills: ['nb.adj.comparison', 'nb.adj.definite', 'nb.adj.agreement'],
      theory: [
        { type: 'p', text: 'Найдите в тексте все сравнительные и превосходные формы и обратите внимание на двойную определённость: *de gamle trehusene*. Глагол *synes* «считать» подробно — в юните 7.' }
      ],
      vocab: [
        { id: 'nb-hav', w: 'hav', ru: 'море, океан', pos: 'n', g: 'n', forms: 'havet, hav, havene', ex: 'Huset ligger ved havet.', exRu: 'Дом стоит у моря.', note: 'Внутреннее море, озеро — sjø.' },
        { id: 'nb-hovedstad', w: 'hovedstad', ru: 'столица', pos: 'n', g: 'm', forms: 'hovedstaden, hovedsteder, hovedstedene', ex: 'Oslo er Norges hovedstad.', exRu: 'Осло — столица Норвегии.', note: 'Умлаут во мн. ч.: -steder.' },
        { id: 'nb-vakker', w: 'vakker', ru: 'красивый', pos: 'adj', g: null, forms: 'vakkert, vakre; vakrere, vakrest', ex: 'Naturen er vakker.', exRu: 'Природа красивая.', note: 'Синкопа: vakre.' },
        { id: 'nb-kjent', w: 'kjent', ru: 'известный, знакомый', pos: 'adj', g: null, forms: 'kjent, kjente', ex: 'Bryggen er kjent i hele verden.', exRu: 'Брюгген известен во всём мире.', note: null },
        { id: 'nb-del', w: 'del', ru: 'часть', pos: 'n', g: 'm', forms: 'delen, deler, delene', ex: 'Den eldste delen av byen er Bryggen.', exRu: 'Самая старая часть города — Брюгген.', note: null },
        { id: 'nb-mild', w: 'mild', ru: 'мягкий (о климате, вкусе)', pos: 'adj', g: null, forms: 'mildt, milde', ex: 'Vinteren er mild i Bergen.', exRu: 'Зима в Бергене мягкая.', note: null }
      ],
      text: {
        title: 'To byer',
        lines: [
          { t: 'Oslo er hovedstaden og den største byen i Norge.', ru: 'Осло — столица и самый большой город Норвегии.' },
          { t: 'Bergen er mindre, men mange synes at Bergen er vakrere.', ru: 'Берген меньше, но многие считают, что Берген красивее.' },
          { t: 'Bergen ligger mellom fjellene og havet.', ru: 'Берген лежит между горами и морем.' },
          { t: 'I Bergen regner det mye mer enn i Oslo.', ru: 'В Бергене дождь идёт гораздо чаще, чем в Осло.' },
          { t: 'Men vintrene er mildere der.', ru: 'Зато зимы там мягче.' },
          { t: 'Den mest kjente delen av Bergen er Bryggen.', ru: 'Самая известная часть Бергена — Брюгген.' },
          { t: 'De gamle trehusene på Bryggen er røde, gule og hvite.', ru: 'Старые деревянные дома Брюггена красные, жёлтые и белые.' },
          { t: 'Oslo har flere museer, flere butikker og flere mennesker.', ru: 'В Осло больше музеев, больше магазинов и больше людей.' },
          { t: 'Trondheim er Norges tredje største by.', ru: 'Тронхейм — третий по величине город Норвегии.' },
          { t: 'Hvilken by liker du best?', ru: 'Какой город тебе нравится больше всего?' }
        ]
      }
    }
  ]
};

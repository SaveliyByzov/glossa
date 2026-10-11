export default {
  id: 'nb-u05',
  title: 'Modalverb, framtid, imperativ og refleksiver',
  titleRu: 'Модальные глаголы, будущее, императив, возвратность',
  summary: 'Модальные глаголы с инфинитивом без å, способы выразить будущее, императив, возвратные глаголы и разграничение sin / hans.',
  lessons: [
    {
      id: 'nb-u05-l01',
      kind: 'grammar',
      title: 'Модальные глаголы',
      goals: ['Знать формы kunne, ville, skulle, måtte, burde', 'Употреблять инфинитив без å после модальных', 'Различать må ikke и trenger ikke'],
      skills: ['nb.verb.modal'],
      theory: [
        { type: 'table', head: ['Инфинитив', 'Презенс', 'Претерит', 'Перфект', 'Значение'], rows: [
          ['kunne', 'kan', 'kunne', 'har kunnet', 'мочь, уметь'],
          ['ville', 'vil', 'ville', 'har villet', 'хотеть'],
          ['skulle', 'skal', 'skulle', 'har skullet', 'собираться; должен (по плану)'],
          ['måtte', 'må', 'måtte', 'har måttet', 'должен, вынужден'],
          ['burde', 'bør', 'burde', 'har burdet', 'следует'],
          ['få', 'får', 'fikk', 'har fått', 'можно, разрешено']
        ], note: 'Презенс модальных — без -r (кроме får).' },
        { type: 'rule', text: 'После модального глагола — инфинитив **без å**: *Jeg kan komme. Vi må gå.* Сравни: *Jeg liker å gå. Jeg prøver å komme.*' },
        { type: 'p', text: 'Модальный глагол — финитный, поэтому он занимает позицию V2, а ikke стоит после него: *Jeg kan ikke komme. I dag må jeg jobbe.* При направлении глагол движения часто опускается: *Jeg må hjem. Vi skal til Bergen.*' },
        { type: 'contrast', text: '*må ikke* = «нельзя» (запрет), а «не обязан, не нужно» — *trenger ikke (å)*: *Du må ikke røyke her* — здесь нельзя курить; *Du trenger ikke å komme* — тебе не обязательно приходить. Русское «не должен» двусмысленно — норвежский различает.' },
        { type: 'pitfall', text: '*vil* — это «хочу», а **не** англ. *will*: *Jeg vil reise* = «я хочу поехать». Будущее — *skal* или *kommer til å* (следующий урок).' },
        { type: 'tip', text: 'Вежливость растёт с претеритом: *Kan du hjelpe meg? → Kunne du hjelpe meg?* *Jeg vil ha … → Jeg vil gjerne ha …* *Får jeg …?* — «Можно мне …?»' },
        { type: 'examples', items: [
          { t: 'Hun kan tre språk.', ru: 'Она знает три языка.', note: 'kan как полнозначный глагол' },
          { t: 'Jeg måtte jobbe hele helga.', ru: 'Мне пришлось работать все выходные.' },
          { t: 'Du burde lese denne boka.', ru: 'Тебе стоило бы прочитать эту книгу.' },
          { t: 'Får jeg sitte her?', ru: 'Можно мне здесь сесть?' }
        ] }
      ],
      vocab: [
        { id: 'nb-kunne', w: 'kunne', ru: 'мочь; уметь; знать (язык)', pos: 'v', g: null, forms: 'kan, kunne, har kunnet', ex: 'Jeg kan ikke komme i dag.', exRu: 'Я не могу прийти сегодня.', note: 'Hun kan norsk — она знает норвежский.' },
        { id: 'nb-ville', w: 'ville', ru: 'хотеть', pos: 'v', g: null, forms: 'vil, ville, har villet', ex: 'Jeg vil bli lege.', exRu: 'Я хочу стать врачом.', note: 'Не будущее! vil gjerne — хотел бы.' },
        { id: 'nb-skulle', w: 'skulle', ru: 'собираться; быть должным (по плану)', pos: 'v', g: null, forms: 'skal, skulle, har skullet', ex: 'Vi skal reise i morgen.', exRu: 'Мы уезжаем завтра.', note: null },
        { id: 'nb-måtte', w: 'måtte', ru: 'быть должным, вынужденным', pos: 'v', g: null, forms: 'må, måtte, har måttet', ex: 'Jeg må gå nå.', exRu: 'Мне нужно идти.', note: 'må ikke — нельзя.' },
        { id: 'nb-burde', w: 'burde', ru: 'следовать (должен бы)', pos: 'v', g: null, forms: 'bør, burde, har burdet', ex: 'Du bør hvile litt.', exRu: 'Тебе следует немного отдохнуть.', note: null },
        { id: 'nb-trenge', w: 'trenge', ru: 'нуждаться', pos: 'v', g: null, forms: 'trenger, trengte, har trengt', ex: 'Du trenger ikke å komme.', exRu: 'Тебе не обязательно приходить.', note: 'trenger ikke (å) — не нужно, не обязан.' },
        { id: 'nb-få-lov-til', w: 'få lov til', ru: 'получить разрешение, иметь право', pos: 'phr', g: null, forms: null, ex: 'Får jeg lov til å sitte her?', exRu: 'Можно мне здесь сесть?', note: 'Du får ikke lov til det — тебе это не разрешено.' },
        { id: 'nb-ha-lyst-til', w: 'ha lyst til', ru: 'хотеть, иметь желание', pos: 'phr', g: null, forms: null, ex: 'Har du lyst til å gå på kino?', exRu: 'Хочешь пойти в кино?', note: 'ha lyst på + сущ.: Jeg har lyst på is.' },
        { id: 'nb-svømme', w: 'svømme', ru: 'плавать', pos: 'v', g: null, forms: 'svømmer, svømte, har svømt', ex: 'Kan du svømme?', exRu: 'Ты умеешь плавать?', note: 'mm → m перед t.' },
        { id: 'nb-kjøre', w: 'kjøre', ru: 'вести (машину), ехать (на машине)', pos: 'v', g: null, forms: 'kjører, kjørte, har kjørt', ex: 'Hun kjører bil til jobben.', exRu: 'Она ездит на работу на машине.', note: null },
        { id: 'nb-sykle', w: 'sykle', ru: 'ездить на велосипеде', pos: 'v', g: null, forms: 'sykler, syklet, har syklet', ex: 'Vi sykler til skolen.', exRu: 'Мы ездим в школу на велосипеде.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u05-l02',
      kind: 'grammar',
      title: 'Как выразить будущее',
      goals: ['Выбирать между skal, kommer til å, vil и презенсом', 'Употреблять skulle как «будущее в прошедшем»'],
      skills: ['nb.verb.future', 'nb.verb.modal'],
      theory: [
        { type: 'rule', text: 'Отдельной формы будущего времени нет — средство выбирается **по смыслу**.' },
        { type: 'table', head: ['Средство', 'Смысл', 'Пример'], rows: [
          ['skal + инф.', 'план, намерение, договорённость', 'Vi skal reise til Bergen i morgen.'],
          ['kommer til å + инф.', 'прогноз, то, что не зависит от воли', 'Det kommer til å regne.'],
          ['vil + инф.', 'прогноз (книжно, чаще 3-е лицо)', 'Prisene vil stige.'],
          ['презенс + обстоятельство', 'ближайшее будущее, расписание', 'Toget går klokka åtte. Jeg ringer deg i morgen.'],
          ['blir', 'будущее от «быть»', 'Det blir fint vær i morgen.']
        ] },
        { type: 'p', text: '«Будущее в прошедшем» и несостоявшийся план — *skulle*: *Vi skulle reise i går, men det snødde.* — Мы собирались уехать вчера, но шёл снег.' },
        { type: 'contrast', text: 'Русское будущее совершенного вида чаще всего передаётся просто презенсом: «Я позвоню завтра» → *Jeg ringer i morgen*. Норвежский презенс охотно обозначает будущее, если есть временной ориентир.' },
        { type: 'pitfall', text: 'Для прогноза погоды не годится *skal*, если вы не пересказываете чужие слова: *Det skal regne* значит «говорят / обещают, что будет дождь». Нейтрально: *Det kommer til å regne / Det blir regn*.' },
        { type: 'tip', text: '*Hvor skal du?* — «Куда ты (идёшь / едешь)?» — глагол движения после *skal* опускается.' }
      ],
      vocab: [
        { id: 'nb-snart', w: 'snart', ru: 'скоро', pos: 'adv', g: null, forms: null, ex: 'Vi ses snart!', exRu: 'Скоро увидимся!', note: null },
        { id: 'nb-senere', w: 'senere', ru: 'позже', pos: 'adv', g: null, forms: null, ex: 'Jeg ringer deg senere.', exRu: 'Я позвоню тебе позже.', note: null },
        { id: 'nb-etterpå', w: 'etterpå', ru: 'потом, после этого', pos: 'adv', g: null, forms: null, ex: 'Først spiser vi, etterpå går vi en tur.', exRu: 'Сначала поедим, потом погуляем.', note: null },
        { id: 'nb-regne', w: 'regne', ru: 'идти (о дожде); считать', pos: 'v', g: null, forms: 'regner, regnet, har regnet', ex: 'Det kommer til å regne i morgen.', exRu: 'Завтра будет дождь.', note: 'Безличное: det regner.' },
        { id: 'nb-snø', w: 'snø', ru: 'идти (о снеге)', pos: 'v', g: null, forms: 'snør, snødde, har snødd', ex: 'Det snør!', exRu: 'Идёт снег!', note: 'Существительное: snø (м.) — snøen.' },
        { id: 'nb-vær', w: 'vær', ru: 'погода', pos: 'n', g: 'n', forms: 'været', ex: 'Hvordan blir været i morgen?', exRu: 'Какая погода будет завтра?', note: 'Без мн. ч. Омоним: vær! — будь!' },
        { id: 'nb-bestemme', w: 'bestemme', ru: 'решать, определять', pos: 'v', g: null, forms: 'bestemmer, bestemte, har bestemt', ex: 'Vi har bestemt oss.', exRu: 'Мы приняли решение.', note: 'bestemme seg — решиться.' },
        { id: 'nb-håpe', w: 'håpe', ru: 'надеяться', pos: 'v', g: null, forms: 'håper, håpet, har håpet', ex: 'Jeg håper at du kommer.', exRu: 'Надеюсь, что ты придёшь.', note: null },
        { id: 'nb-plan', w: 'plan', ru: 'план', pos: 'n', g: 'm', forms: 'planen, planer, planene', ex: 'Har du noen planer for helga?', exRu: 'У тебя есть планы на выходные?', note: null },
        { id: 'nb-tenke', w: 'tenke', ru: 'думать (процесс)', pos: 'v', g: null, forms: 'tenker, tenkte, har tenkt', ex: 'Jeg tenker på deg.', exRu: 'Я думаю о тебе.', note: 'tenke å + инф. — собираться: Jeg tenker å reise.' },
        { id: 'nb-feire', w: 'feire', ru: 'праздновать', pos: 'v', g: null, forms: 'feirer, feiret, har feiret', ex: 'Vi feirer bursdagen hans på lørdag.', exRu: 'Мы празднуем его день рождения в субботу.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u05-l03',
      kind: 'grammar',
      title: 'Императив и вежливость',
      goals: ['Образовывать императив от любого глагола', 'Строить отрицательный императив', 'Знать формулы вежливости'],
      skills: ['nb.verb.imperative'],
      theory: [
        { type: 'rule', text: 'Императив = **основа** = инфинитив без конечного безударного *-e*: kast{{e}} → *kast!*, les{{e}} → *les!*. Инфинитивы на ударный гласный не меняются: *gå! se! ta! bo!*' },
        { type: 'table', head: ['Инфинитив', 'Императив', 'Комментарий'], rows: [
          ['kaste', 'kast!', ''],
          ['skrive', 'skriv!', ''],
          ['gå', 'gå!', 'без изменений'],
          ['komme', 'kom!', '-mm на конце слова → -m'],
          ['glemme', 'glem!', '-mm → -m'],
          ['spille', 'spill!', 'll сохраняется'],
          ['være', 'vær!', ''],
          ['åpne', 'åpne!', 'группа pn в конце невозможна → -e остаётся'],
          ['sykle', 'sykle!', 'то же']
        ] },
        { type: 'p', text: 'Отрицание — *ikke* **перед** глаголом: *Ikke gå! Ikke glem nøklene!*' },
        { type: 'p', text: 'Голый императив звучит прямо. Смягчение: *…, er du snill / vær så snill*; ещё вежливее — вопрос: *Kan du lukke døra? Kunne du hjelpe meg?*' },
        { type: 'contrast', text: 'Русский императив различает «иди / идите»; норвежский — одна форма для всех.' },
        { type: 'pitfall', text: '✗ *komm!*, ✗ *glemm!*: в конце слова *-mm* пишется *-m*. Но *ll, nn, ss* сохраняются: *spill! finn! kyss!*' },
        { type: 'tip', text: '*Vær så god* — «пожалуйста» при предложении (вот, возьмите; прошу к столу). *Vær så snill* — «пожалуйста» при просьбе. После еды: *Takk for maten!*' }
      ],
      vocab: [
        { id: 'nb-lukke', w: 'lukke', ru: 'закрывать', pos: 'v', g: null, forms: 'lukker, lukket, har lukket', ex: 'Lukk døra, er du snill.', exRu: 'Закрой, пожалуйста, дверь.', note: null },
        { id: 'nb-sende', w: 'sende', ru: 'посылать, отправлять', pos: 'v', g: null, forms: 'sender, sendte, har sendt', ex: 'Send meg en melding!', exRu: 'Пришли мне сообщение!', note: null },
        { id: 'nb-ringe', w: 'ringe', ru: 'звонить', pos: 'v', g: null, forms: 'ringer, ringte, har ringt', ex: 'Ring meg i kveld!', exRu: 'Позвони мне вечером!', note: 'ringe til noen — звонить кому-то.' },
        { id: 'nb-vise', w: 'vise', ru: 'показывать', pos: 'v', g: null, forms: 'viser, viste, har vist', ex: 'Kan du vise meg veien?', exRu: 'Можешь показать мне дорогу?', note: null },
        { id: 'nb-passe', w: 'passe', ru: 'подходить (по размеру, времени)', pos: 'v', g: null, forms: 'passer, passet, har passet', ex: 'Skoene passer ikke.', exRu: 'Туфли не подходят.', note: 'passe på — присматривать (юнит 8).' },
        { id: 'nb-vær-så-snill', w: 'vær så snill', ru: 'пожалуйста (просьба)', pos: 'phr', g: null, forms: null, ex: 'Hjelp meg, vær så snill!', exRu: 'Помогите мне, пожалуйста!', note: 'Также: er du snill.' },
        { id: 'nb-vær-så-god', w: 'vær så god', ru: 'пожалуйста (предлагая), прошу', pos: 'phr', g: null, forms: null, ex: 'Vær så god, her er kaffen.', exRu: 'Пожалуйста, вот ваш кофе.', note: 'Также пишется слитно: værsågod.' },
        { id: 'nb-unnskyld', w: 'unnskyld', ru: 'извините', pos: 'phr', g: null, forms: null, ex: 'Unnskyld, hvor er stasjonen?', exRu: 'Извините, где вокзал?', note: 'Императив от unnskylde.' },
        { id: 'nb-takk', w: 'takk', ru: 'спасибо', pos: 'phr', g: null, forms: null, ex: 'Takk for maten!', exRu: 'Спасибо за еду!', note: 'Mange takk / tusen takk — большое спасибо.' },
        { id: 'nb-forsiktig', w: 'forsiktig', ru: 'осторожный', pos: 'adj', g: null, forms: 'forsiktig, forsiktige', ex: 'Kjør forsiktig!', exRu: 'Езжай осторожно!', note: null },
        { id: 'nb-rolig', w: 'rolig', ru: 'спокойный', pos: 'adj', g: null, forms: 'rolig, rolige', ex: 'Ta det rolig!', exRu: 'Спокойно! Не торопись!', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u05-l04',
      kind: 'grammar',
      title: 'Возвратные глаголы; sin или hans',
      goals: ['Спрягать возвратные глаголы', 'Выбирать sin/si/sitt/sine или hans/hennes/deres'],
      skills: ['nb.verb.reflexive', 'nb.pron.reflexive-poss'],
      theory: [
        { type: 'table', caption: 'vaske seg «мыться»', head: ['Лицо', 'Форма'], rows: [
          ['jeg', 'vasker {{meg}}'],
          ['du', 'vasker {{deg}}'],
          ['han / hun', 'vasker {{seg}}'],
          ['vi', 'vasker {{oss}}'],
          ['dere', 'vasker {{dere}}'],
          ['de', 'vasker {{seg}}']
        ] },
        { type: 'rule', text: '**seg** — только в 3-м лице (ед. и мн.); в 1-м и 2-м лице — обычные объектные местоимения.' },
        { type: 'p', text: 'Многие русские глаголы на *-ся* соответствуют возвратным: *sette seg, legge seg, glede seg, føle seg, gifte seg*. Но не все: *begynne* «начинаться», *le* «смеяться» — без *seg*. И наоборот: *skynde seg* «спешить», *kjede seg* «скучать» — возвратные.' },
        { type: 'h', text: 'sin / si / sitt / sine' },
        { type: 'rule', text: '**sin/si/sitt/sine** «свой» — только когда обладатель — **подлежащее 3-го лица той же клаузы**. В остальных случаях — *hans, hennes, deres*.' },
        { type: 'examples', items: [
          { t: 'Per tar bilen sin.', ru: 'Пер берёт свою машину.' },
          { t: 'Per tar bilen hans.', ru: 'Пер берёт его машину (другого человека).' },
          { t: 'Kari ringer mora si.', ru: 'Кари звонит своей маме.' },
          { t: 'De besøker foreldrene sine.', ru: 'Они навещают своих родителей.' },
          { t: 'Jeg tok boka mi.', ru: 'Я взял свою книгу.', note: '1-е лицо → mi, не si' }
        ] },
        { type: 'contrast', text: 'Русское «свой» употребляется при любом лице; норвежское *sin* — только при 3-м. «Я взял свою книгу» → *Jeg tok boka mi*; «Ты видел свою сестру?» → *Så du søstera di?*' },
        { type: 'pitfall', text: '*sin* не может входить в само подлежащее: ✗ *Per og kona si kommer* → *Per og kona hans kommer*; ✗ *Bilen sin er ny* → *Bilen hans er ny*.' },
        { type: 'tip', text: 'В придаточном *sin* относится к подлежащему придаточного: *Per sier at Ola har solgt bilen sin* — машину Улы.' }
      ],
      vocab: [
        { id: 'nb-sette-seg', w: 'sette seg', ru: 'садиться', pos: 'v', g: null, forms: 'setter seg, satte seg, har satt seg', ex: 'Sett deg!', exRu: 'Садись!', note: null },
        { id: 'nb-legge-seg', w: 'legge seg', ru: 'ложиться (спать)', pos: 'v', g: null, forms: 'legger seg, la seg, har lagt seg', ex: 'Jeg legger meg klokka elleve.', exRu: 'Я ложусь в одиннадцать.', note: null },
        { id: 'nb-glede-seg', w: 'glede seg', ru: 'радоваться (предстоящему)', pos: 'v', g: null, forms: 'gleder seg, gledet seg, har gledet seg', ex: 'Jeg gleder meg til ferien!', exRu: 'Жду не дождусь отпуска!', note: 'glede seg til — предвкушать; glede seg over — радоваться чему-то.' },
        { id: 'nb-skynde-seg', w: 'skynde seg', ru: 'спешить', pos: 'v', g: null, forms: 'skynder seg, skyndte seg, har skyndt seg', ex: 'Skynd deg!', exRu: 'Поторопись!', note: null },
        { id: 'nb-føle-seg', w: 'føle seg', ru: 'чувствовать себя', pos: 'v', g: null, forms: 'føler seg, følte seg, har følt seg', ex: 'Jeg føler meg ikke bra.', exRu: 'Я неважно себя чувствую.', note: null },
        { id: 'nb-gifte-seg', w: 'gifte seg', ru: 'жениться, выходить замуж', pos: 'v', g: null, forms: 'gifter seg, giftet seg, har giftet seg', ex: 'De giftet seg i fjor.', exRu: 'Они поженились в прошлом году.', note: 'gifte seg med noen.' },
        { id: 'nb-kle-på-seg', w: 'kle på seg', ru: 'одеваться', pos: 'v', g: null, forms: 'kler på seg, kledde på seg, har kledd på seg', ex: 'Barna kler på seg.', exRu: 'Дети одеваются.', note: null },
        { id: 'nb-interessere-seg', w: 'interessere seg', ru: 'интересоваться', pos: 'v', g: null, forms: 'interesserer seg, interesserte seg, har interessert seg', ex: 'Hun interesserer seg for historie.', exRu: 'Она интересуется историей.', note: '+ for.' },
        { id: 'nb-kjede-seg', w: 'kjede seg', ru: 'скучать (от безделья)', pos: 'v', g: null, forms: 'kjeder seg, kjedet seg, har kjedet seg', ex: 'Jeg kjeder meg.', exRu: 'Мне скучно.', note: 'Скучать по кому-то — savne.' },
        { id: 'nb-sin', w: 'sin', ru: 'свой (при подлежащем 3-го лица)', pos: 'pron', g: null, forms: 'si (ж.), sitt (ср.), sine (мн.)', ex: 'Per tar bilen sin.', exRu: 'Пер берёт свою машину.', note: null },
        { id: 'nb-seg', w: 'seg', ru: 'себя (3-е лицо)', pos: 'pron', g: null, forms: null, ex: 'Han vasker seg.', exRu: 'Он умывается.', note: 'Только 3-е лицо.' },
        { id: 'nb-egen', w: 'egen', ru: 'собственный', pos: 'adj', g: null, forms: 'eget (ср.), egne (мн. и слаб.)', ex: 'Hun har sitt eget rom.', exRu: 'У неё своя комната.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u05-l05',
      kind: 'reading',
      title: 'Planer for helga',
      goals: ['Узнавать модальные, будущее, императив и sin в диалоге'],
      skills: ['nb.verb.modal', 'nb.verb.future', 'nb.verb.imperative', 'nb.pron.reflexive-poss'],
      theory: [
        { type: 'p', text: 'Диалог двух подруг. Отметьте: *skal* — план, *kommer til å* — прогноз, *må/vil/kan* + инфинитив без *å*, императивы *kom!, ikke glem!*, а также *vennene sine* — «своих друзей».' }
      ],
      vocab: [
        { id: 'nb-helg', w: 'helg', ru: 'выходные', pos: 'n', g: 'f', forms: 'helga, helger, helgene', ex: 'God helg!', exRu: 'Хороших выходных!', note: 'Допустимо: helgen. i helga — на выходных.' },
        { id: 'nb-bursdag', w: 'bursdag', ru: 'день рождения', pos: 'n', g: 'm', forms: 'bursdagen, bursdager, bursdagene', ex: 'Gratulerer med dagen!', exRu: 'С днём рождения!', note: 'Hun har bursdag i dag — у неё сегодня день рождения.' },
        { id: 'nb-gave', w: 'gave', ru: 'подарок', pos: 'n', g: 'm', forms: 'gaven, gaver, gavene', ex: 'Takk for gaven!', exRu: 'Спасибо за подарок!', note: null },
        { id: 'nb-fest', w: 'fest', ru: 'вечеринка, праздник', pos: 'n', g: 'm', forms: 'festen, fester, festene', ex: 'Skal du på fest i kveld?', exRu: 'Ты идёшь сегодня на вечеринку?', note: null },
        { id: 'nb-invitere', w: 'invitere', ru: 'приглашать', pos: 'v', g: null, forms: 'inviterer, inviterte, har invitert', ex: 'Hun har invitert alle vennene sine.', exRu: 'Она пригласила всех своих друзей.', note: 'Глаголы на -ere — класс -te.' },
        { id: 'nb-bake', w: 'bake', ru: 'печь', pos: 'v', g: null, forms: 'baker, bakte, har bakt', ex: 'Jeg må bake ei kake.', exRu: 'Мне нужно испечь торт.', note: null }
      ],
      text: {
        title: 'Planer for helga',
        lines: [
          { t: '– Hva skal du gjøre i helga, Nina?', ru: '— Что ты будешь делать на выходных, Нина?' },
          { t: '– Søstera mi har bursdag på lørdag, så vi skal feire bursdagen hennes.', ru: '— У моей сестры в субботу день рождения, так что мы будем его праздновать.' },
          { t: '– Jeg må bake ei kake, og jeg vil kjøpe en gave til henne.', ru: '— Мне нужно испечь торт, и я хочу купить ей подарок.' },
          { t: '– Hva vil du gi henne?', ru: '— Что ты хочешь ей подарить?' },
          { t: '– Kanskje ei bok. Hun interesserer seg for historie.', ru: '— Может быть, книгу. Она интересуется историей.' },
          { t: '– Skal dere ha fest?', ru: '— У вас будет вечеринка?' },
          { t: '– Ja, hun har invitert alle vennene sine. Det kommer til å bli morsomt!', ru: '— Да, она пригласила всех своих друзей. Будет весело!' },
          { t: '– Kan jeg hjelpe deg med kaka?', ru: '— Можно я помогу тебе с тортом?' },
          { t: '– Ja, gjerne! Kom til meg klokka ti. Og ikke glem å kjøpe egg!', ru: '— Да, с удовольствием! Приходи ко мне в десять. И не забудь купить яйца!' },
          { t: '– Greit. Vi ses!', ru: '— Договорились. Увидимся!' }
        ]
      }
    }
  ]
};

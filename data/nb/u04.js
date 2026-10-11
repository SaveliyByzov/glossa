export default {
  id: 'nb-u04',
  title: 'Fortid: preteritum og perfektum',
  titleRu: 'Прошедшие времена: претерит и перфект',
  summary: 'Четыре класса слабых глаголов, разграничение претерита и перфекта, самые частотные сильные глаголы и ряды аблаута, «неправильные слабые» глаголы.',
  lessons: [
    {
      id: 'nb-u04-l01',
      kind: 'grammar',
      title: 'Слабые глаголы: четыре класса',
      goals: ['Образовывать претерит и причастие слабых глаголов', 'Относить глагол к классу -et, -te, -de, -dde'],
      skills: ['nb.verb.weak'],
      theory: [
        { type: 'rule', text: 'Слабые глаголы образуют претерит и причастие II **суффиксом**. Претерит не меняется по лицам: *jeg/du/de kastet*.' },
        { type: 'table', caption: 'Четыре класса', head: ['Класс', 'Инфинитив', 'Претерит', 'Перфект', 'Типично для'], rows: [
          ['1', 'kaste', 'kast{{et}}', 'har kast{{et}}', 'основа на группу согласных: snakke, vente, huske, åpne'],
          ['2', 'lese', 'les{{te}}', 'har les{{t}}', 'основа на одну согласную, а также ll, mm, nn, ng: kjøpe, spille, glemme'],
          ['3', 'prøve', 'prøv{{de}}', 'har prøv{{d}}', 'основа на v, g или дифтонг: leve, bygge, leie'],
          ['4', 'bo', 'bo{{dde}}', 'har bo{{dd}}', 'односложные на ударный гласный: tro, nå, bety']
        ], note: 'Классы 1 и 2 — самые многочисленные. Допустимо -a вместо -et: kasta, har kasta.' },
        { type: 'p', text: 'Распределение — ориентир, а не закон: *lage — laget, betale — betalte, begynne — begynte*. Новый глагол проверяйте по словарю; заимствования на *-ere* всегда идут по классу 2: *reparere — reparerte*.' },
        { type: 'p', text: 'Двойная согласная перед *t* упрощается: *spille → spilte → har spilt*, *glemme → glemte*, *kjenne → kjente*.' },
        { type: 'examples', items: [
          { t: 'I går snakket vi lenge.', ru: 'Вчера мы долго разговаривали.' },
          { t: 'Hun kjøpte en ny sykkel.', ru: 'Она купила новый велосипед.' },
          { t: 'Vi prøvde å ringe deg.', ru: 'Мы пытались тебе позвонить.' },
          { t: 'De bodde i Bergen i fem år.', ru: 'Они жили в Бергене пять лет.' }
        ] },
        { type: 'contrast', text: 'Это германский дентальный претерит (англ. *-ed*, нем. *-te*). В отличие от русского «читал/читала/читали», норвежский претерит не согласуется ни в роде, ни в числе: одна форма на всех.' },
        { type: 'pitfall', text: '✗ *spillte*, ✗ *glemmte*: двойная согласная перед *-te* пишется одной буквой.' }
      ],
      vocab: [
        { id: 'nb-vente', w: 'vente', ru: 'ждать', pos: 'v', g: null, forms: 'venter, ventet, har ventet', ex: 'Vi venter på bussen.', exRu: 'Мы ждём автобус.', note: 'vente på noe — ждать чего-то.' },
        { id: 'nb-huske', w: 'huske', ru: 'помнить', pos: 'v', g: null, forms: 'husker, husket, har husket', ex: 'Husker du meg?', exRu: 'Ты меня помнишь?', note: null },
        { id: 'nb-åpne', w: 'åpne', ru: 'открывать', pos: 'v', g: null, forms: 'åpner, åpnet, har åpnet', ex: 'Butikken åpnet klokka ni.', exRu: 'Магазин открылся в девять.', note: null },
        { id: 'nb-lage', w: 'lage', ru: 'делать, готовить (еду)', pos: 'v', g: null, forms: 'lager, laget, har laget', ex: 'Han laget middag i går.', exRu: 'Вчера он приготовил ужин.', note: 'lage mat — готовить еду. Допустимо: lagde, har lagd.' },
        { id: 'nb-vaske', w: 'vaske', ru: 'мыть, стирать', pos: 'v', g: null, forms: 'vasker, vasket, har vasket', ex: 'Jeg har vasket bilen.', exRu: 'Я помыл машину.', note: null },
        { id: 'nb-kjøpe', w: 'kjøpe', ru: 'покупать', pos: 'v', g: null, forms: 'kjøper, kjøpte, har kjøpt', ex: 'Hun kjøpte brød og melk.', exRu: 'Она купила хлеб и молоко.', note: null },
        { id: 'nb-betale', w: 'betale', ru: 'платить', pos: 'v', g: null, forms: 'betaler, betalte, har betalt', ex: 'Kan jeg betale med kort?', exRu: 'Можно расплатиться картой?', note: null },
        { id: 'nb-reise', w: 'reise', ru: 'ехать, путешествовать', pos: 'v', g: null, forms: 'reiser, reiste, har reist', ex: 'Vi reiste til Italia i fjor.', exRu: 'В прошлом году мы ездили в Италию.', note: 'Перфект также er reist.' },
        { id: 'nb-spille', w: 'spille', ru: 'играть (в игру, на инструменте)', pos: 'v', g: null, forms: 'spiller, spilte, har spilt', ex: 'Han spiller gitar.', exRu: 'Он играет на гитаре.', note: 'll → l перед t. Играть (о детях) — leke.' },
        { id: 'nb-glemme', w: 'glemme', ru: 'забывать', pos: 'v', g: null, forms: 'glemmer, glemte, har glemt', ex: 'Jeg glemte nøklene.', exRu: 'Я забыл ключи.', note: 'Императив: glem!' },
        { id: 'nb-prøve', w: 'prøve', ru: 'пробовать; примерять', pos: 'v', g: null, forms: 'prøver, prøvde, har prøvd', ex: 'Vil du prøve?', exRu: 'Хочешь попробовать?', note: null },
        { id: 'nb-leve', w: 'leve', ru: 'жить (существовать)', pos: 'v', g: null, forms: 'lever, levde, har levd', ex: 'Ibsen levde på 1800-tallet.', exRu: 'Ибсен жил в XIX веке.', note: 'Проживать где-то — bo.' },
        { id: 'nb-tro', w: 'tro', ru: 'верить; полагать', pos: 'v', g: null, forms: 'tror, trodde, har trodd', ex: 'Jeg tror det blir regn.', exRu: 'Думаю, будет дождь.', note: 'Сравни synes и tenke — юнит 7.' },
        { id: 'nb-bety', w: 'bety', ru: 'значить, означать', pos: 'v', g: null, forms: 'betyr, betydde, har betydd', ex: 'Hva betyr dette ordet?', exRu: 'Что значит это слово?', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u04-l02',
      kind: 'grammar',
      title: 'Перфект или претерит?',
      goals: ['Образовывать перфект har + причастие', 'Выбирать между перфектом и претеритом', 'Ставить ikke и наречия в перфекте'],
      skills: ['nb.verb.perfect'],
      theory: [
        { type: 'rule', text: 'Перфект = **har** + причастие II для всех лиц: *jeg har spist, vi har bodd*. Ikke и наречия — между *har* и причастием: *Jeg har ikke spist. Hun har allerede reist.*' },
        { type: 'table', head: ['Претерит', 'Перфект'], rows: [
          ['привязан к моменту в прошлом (i går, i 2015, da)', 'связь с настоящим; время не названо'],
          ['Jeg var i Tromsø i fjor.', 'Jeg har vært i Tromsø.'],
          ['закончившийся период: Jeg bodde i Oslo i to år.', 'длится до сих пор: Jeg har bodd i Oslo i to år.'],
          ['цепочка событий в рассказе', 'опыт: Har du noen gang sett nordlys?']
        ] },
        { type: 'contrast', text: 'Норвежские времена не соответствуют русскому виду. «Я прочитал книгу» — это и *Jeg leste boka* (вчера, в отпуске), и *Jeg har lest boka* (уже, результат налицо). «Я живу здесь пять лет» — по-норвежски **перфект**: *Jeg har bodd her i fem år*.' },
        { type: 'p', text: 'С глаголами движения и изменения состояния допустимо *er* вместо *har*: *Hun er reist. Han er blitt lærer.* Вариант с *har* всегда правилен.' },
        { type: 'pitfall', text: '✗ *Jeg har vært i Bergen i fjor*: при указании конкретного времени в прошлом нужен претерит — *Jeg var i Bergen i fjor*.' },
        { type: 'examples', items: [
          { t: 'Har du lest boka? – Nei, ikke ennå.', ru: '— Ты прочитал книгу? — Нет, ещё нет.' },
          { t: 'Jeg leste den i ferien.', ru: 'Я прочитал её в отпуске.' },
          { t: 'Toget har nettopp gått.', ru: 'Поезд только что ушёл.' },
          { t: 'Vi har kjent hverandre lenge.', ru: 'Мы давно знаем друг друга.' }
        ] },
        { type: 'tip', text: 'Сигналы перфекта: *allerede, ennå, nettopp, aldri, noen gang, lenge, siden*. Сигналы претерита: *i går, i fjor, forrige uke, da, for … siden*.' }
      ],
      vocab: [
        { id: 'nb-i-går', w: 'i går', ru: 'вчера', pos: 'adv', g: null, forms: null, ex: 'I går var det kaldt.', exRu: 'Вчера было холодно.', note: null },
        { id: 'nb-i-fjor', w: 'i fjor', ru: 'в прошлом году', pos: 'adv', g: null, forms: null, ex: 'I fjor bodde vi i Tromsø.', exRu: 'В прошлом году мы жили в Тромсё.', note: 'i fjor sommer — прошлым летом.' },
        { id: 'nb-allerede', w: 'allerede', ru: 'уже', pos: 'adv', g: null, forms: null, ex: 'Hun har allerede spist.', exRu: 'Она уже поела.', note: null },
        { id: 'nb-ennå', w: 'ennå', ru: 'ещё; пока (ещё)', pos: 'adv', g: null, forms: null, ex: 'Jeg har ikke lest boka ennå.', exRu: 'Я ещё не прочитал книгу.', note: 'ikke ennå — ещё нет. Вариант: enda.' },
        { id: 'nb-nettopp', w: 'nettopp', ru: 'только что; именно', pos: 'adv', g: null, forms: null, ex: 'Toget har nettopp gått.', exRu: 'Поезд только что ушёл.', note: null },
        { id: 'nb-lenge', w: 'lenge', ru: 'долго, давно', pos: 'adv', g: null, forms: null, ex: 'Har du ventet lenge?', exRu: 'Ты долго ждал?', note: null },
        { id: 'nb-siden', w: 'siden', ru: 'с (какого-то времени); назад', pos: 'prep', g: null, forms: null, ex: 'Jeg har bodd her siden 2020.', exRu: 'Я живу здесь с 2020 года.', note: 'for to år siden — два года назад. Как союз — юнит 6.' },
        { id: 'nb-gang', w: 'gang', ru: 'раз; коридор', pos: 'n', g: 'm', forms: 'gangen, ganger, gangene', ex: 'Jeg har vært i Norge tre ganger.', exRu: 'Я был в Норвегии три раза.', note: 'en gang — однажды; noen gang — когда-либо.' },
        { id: 'nb-tidligere', w: 'tidligere', ru: 'раньше, прежде', pos: 'adv', g: null, forms: null, ex: 'Tidligere bodde hun i Bergen.', exRu: 'Раньше она жила в Бергене.', note: null },
        { id: 'nb-forrige', w: 'forrige', ru: 'прошлый, предыдущий', pos: 'adj', g: null, forms: null, ex: 'Forrige uke var jeg syk.', exRu: 'На прошлой неделе я болел.', note: 'Без артикля и суффикса: forrige uke.' },
        { id: 'nb-flytte', w: 'flytte', ru: 'переезжать; передвигать', pos: 'v', g: null, forms: 'flytter, flyttet, har flyttet', ex: 'Vi flyttet til Oslo i 2019.', exRu: 'Мы переехали в Осло в 2019 году.', note: null },
        { id: 'nb-begynne', w: 'begynne', ru: 'начинать(ся)', pos: 'v', g: null, forms: 'begynner, begynte, har begynt', ex: 'Filmen begynner klokka åtte.', exRu: 'Фильм начинается в восемь.', note: 'Класс -te несмотря на nn.' },
        { id: 'nb-slutte', w: 'slutte', ru: 'заканчивать(ся); бросать', pos: 'v', g: null, forms: 'slutter, sluttet, har sluttet', ex: 'Han har sluttet å røyke.', exRu: 'Он бросил курить.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u04-l03',
      kind: 'grammar',
      title: 'Сильные глаголы: самые частотные',
      goals: ['Знать формы 16 самых частотных сильных и неправильных глаголов'],
      skills: ['nb.verb.strong'],
      theory: [
        { type: 'rule', text: 'Сильные глаголы меняют корневой гласный (**аблаут**) и в претерите **не имеют суффикса**: *gå — gikk, se — så, ta — tok*. Причастие оканчивается на *-t* или *-et*.' },
        { type: 'table', head: ['Инфинитив', 'Презенс', 'Претерит', 'Перфект'], rows: [
          ['være', 'er', 'var', 'har vært'],
          ['ha', 'har', 'hadde', 'har hatt'],
          ['gå', 'går', 'gikk', 'har gått'],
          ['komme', 'kommer', 'kom', 'har kommet'],
          ['se', 'ser', 'så', 'har sett'],
          ['få', 'får', 'fikk', 'har fått'],
          ['gi', 'gir', 'ga', 'har gitt'],
          ['ta', 'tar', 'tok', 'har tatt'],
          ['si', 'sier', 'sa', 'har sagt'],
          ['gjøre', 'gjør', 'gjorde', 'har gjort'],
          ['vite', 'vet', 'visste', 'har visst'],
          ['bli', 'blir', 'ble', 'har blitt'],
          ['sitte', 'sitter', 'satt', 'har sittet'],
          ['ligge', 'ligger', 'lå', 'har ligget'],
          ['stå', 'står', 'sto', 'har stått'],
          ['sove', 'sover', 'sov', 'har sovet']
        ], note: 'Допустимо: gav, blei, stod. ha, gjøre, si, vite формально неправильные слабые, но учатся вместе с сильными.' },
        { type: 'contrast', text: 'Тот же германский аблаут, что в англ. *see — saw, sit — sat*, нем. *sehen — sah, sitzen — saß*. Русскому видовому противопоставлению он не соответствует: *gikk* — и «шёл», и «пошёл», и «ходил».' },
        { type: 'examples', items: [
          { t: 'Vi gikk på kino i går.', ru: 'Вчера мы ходили в кино.' },
          { t: 'Hun fikk en gave av mora si.', ru: 'Она получила подарок от мамы.' },
          { t: 'Hva sa han? – Jeg vet ikke, jeg hørte det ikke.', ru: '— Что он сказал? — Не знаю, я не слышал.' },
          { t: 'Han ble lege i fjor.', ru: 'В прошлом году он стал врачом.' }
        ] },
        { type: 'tip', text: '*vite* — знать факт (*Jeg vet det*), *kjenne* — знать человека или место (*Jeg kjenner ham*), *kunne* — уметь, владеть (*Hun kan norsk*).' }
      ],
      vocab: [
        { id: 'nb-gå', w: 'gå', ru: 'идти (пешком); уходить, отправляться', pos: 'v', g: null, forms: 'går, gikk, har gått', ex: 'Jeg går på jobb hver dag.', exRu: 'Я каждый день хожу на работу.', note: 'О транспорте: Toget går klokka fem — поезд отходит в пять.' },
        { id: 'nb-se', w: 'se', ru: 'видеть; смотреть', pos: 'v', g: null, forms: 'ser, så, har sett', ex: 'Har du sett filmen?', exRu: 'Ты смотрел фильм?', note: 'se på — смотреть на.' },
        { id: 'nb-få', w: 'få', ru: 'получать; мочь (с разрешения)', pos: 'v', g: null, forms: 'får, fikk, har fått', ex: 'Jeg fikk et brev i dag.', exRu: 'Я получил сегодня письмо.', note: 'Får jeg …? — Можно мне …?' },
        { id: 'nb-gi', w: 'gi', ru: 'давать', pos: 'v', g: null, forms: 'gir, ga, har gitt', ex: 'Hun ga meg ei bok.', exRu: 'Она дала мне книгу.', note: 'Претерит также gav.' },
        { id: 'nb-ta', w: 'ta', ru: 'брать', pos: 'v', g: null, forms: 'tar, tok, har tatt', ex: 'Vi tok toget til Bergen.', exRu: 'Мы поехали в Берген на поезде.', note: null },
        { id: 'nb-si', w: 'si', ru: 'сказать, говорить', pos: 'v', g: null, forms: 'sier, sa, har sagt', ex: 'Hva sa du?', exRu: 'Что ты сказал?', note: null },
        { id: 'nb-gjøre', w: 'gjøre', ru: 'делать', pos: 'v', g: null, forms: 'gjør, gjorde, har gjort', ex: 'Hva gjør du i kveld?', exRu: 'Что ты делаешь сегодня вечером?', note: null },
        { id: 'nb-vite', w: 'vite', ru: 'знать (факт)', pos: 'v', g: null, forms: 'vet, visste, har visst', ex: 'Jeg vet ikke.', exRu: 'Я не знаю.', note: 'Знать человека — kjenne.' },
        { id: 'nb-bli', w: 'bli', ru: 'становиться; оставаться', pos: 'v', g: null, forms: 'blir, ble, har blitt', ex: 'Hun ble lege.', exRu: 'Она стала врачом.', note: 'Претерит также blei; перфект также er blitt. Вспомогательный глагол пассива — юнит 7.' },
        { id: 'nb-sitte', w: 'sitte', ru: 'сидеть', pos: 'v', g: null, forms: 'sitter, satt, har sittet', ex: 'Katten sitter på stolen.', exRu: 'Кошка сидит на стуле.', note: 'Не путать с sette — ставить, сажать.' },
        { id: 'nb-ligge', w: 'ligge', ru: 'лежать; находиться', pos: 'v', g: null, forms: 'ligger, lå, har ligget', ex: 'Bergen ligger på Vestlandet.', exRu: 'Берген находится в Западной Норвегии.', note: 'Не путать с legge — класть.' },
        { id: 'nb-stå', w: 'stå', ru: 'стоять', pos: 'v', g: null, forms: 'står, sto, har stått', ex: 'Hva står det i avisa?', exRu: 'Что пишут в газете?', note: 'Претерит также stod. Det står — написано.' },
        { id: 'nb-sove', w: 'sove', ru: 'спать', pos: 'v', g: null, forms: 'sover, sov, har sovet', ex: 'Sov du godt?', exRu: 'Хорошо спал?', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u04-l04',
      kind: 'grammar',
      title: 'Ряды аблаута и «неправильные слабые»',
      goals: ['Группировать сильные глаголы по рядам аблаута', 'Знать неправильные слабые глаголы', 'Различать ligge/legge и sitte/sette'],
      skills: ['nb.verb.strong'],
      theory: [
        { type: 'table', caption: 'Основные ряды', head: ['Ряд', 'Инфинитив', 'Претерит', 'Причастие'], rows: [
          ['i — e — e/i', 'skrive', 'skr{{e}}v', 'skr{{e}}vet'],
          ['', 'bite', 'b{{e}}t', 'b{{i}}tt'],
          ['y — ø/øy — o/ø', 'fly', 'fl{{øy}}', 'fl{{øy}}et'],
          ['', 'fryse', 'fr{{ø}}s', 'fr{{o}}sset'],
          ['i — a — u', 'drikke', 'dr{{a}}kk', 'dr{{u}}kket'],
          ['', 'finne', 'f{{a}}nt', 'f{{u}}nnet'],
          ['', 'synge', 's{{a}}ng', 's{{u}}nget'],
          ['', 'vinne', 'v{{a}}nt', 'v{{u}}nnet'],
          ['', 'hjelpe', 'hj{{a}}lp', 'hj{{u}}lpet'],
          ['', 'treffe', 'tr{{a}}ff', 'tr{{u}}ffet'],
          ['e — a — å', 'bære', 'b{{a}}r', 'b{{å}}ret'],
          ['', 'stjele', 'stj{{a}}l', 'stj{{å}}let'],
          ['a — o — a', 'dra', 'dr{{o}}', 'dr{{a}}tt'],
          ['прочие', 'falle', 'falt', 'falt'],
          ['', 'holde', 'holdt', 'holdt'],
          ['', 'slå', 'slo', 'slått'],
          ['', 'la', 'lot', 'latt']
        ], note: 'Допустимы претериты на -ei: skreiv, beit.' },
        { type: 'h', text: 'Неправильные слабые глаголы' },
        { type: 'table', head: ['Инфинитив', 'Претерит', 'Перфект'], rows: [
          ['legge', 'la', 'har lagt'],
          ['sette', 'satte', 'har satt'],
          ['selge', 'solgte', 'har solgt'],
          ['spørre', 'spurte', 'har spurt'],
          ['fortelle', 'fortalte', 'har fortalt'],
          ['velge', 'valgte', 'har valgt'],
          ['telle', 'talte', 'har talt']
        ], note: 'Суффикс как у слабых, но с чередованием гласного (германский «обратный умлаут»).' },
        { type: 'contrast', text: 'Ряд i — a — u — прямая родня англ. *drink — drank — drunk, sing — sang — sung* и нем. *trinken — trank — getrunken* (III класс германских сильных глаголов). Пары *ligge/legge, sitte/sette* устроены как русские «лежать/класть, сидеть/сажать»: каузативы.' },
        { type: 'pitfall', text: '*satt* — это и претерит от *sitte* (сидел), и причастие от *sette* (поставил): *Han satt der* — он сидел там; *Han har satt koppen der* — он поставил туда чашку. *lå* (лежал) ≠ *la* (положил).' },
        { type: 'examples', items: [
          { t: 'Hun la boka på bordet, og der lå den hele dagen.', ru: 'Она положила книгу на стол, и там она пролежала весь день.' },
          { t: 'Vi fant ikke veien, men en mann hjalp oss.', ru: 'Мы не нашли дорогу, но нам помог какой-то мужчина.' },
          { t: 'De har solgt huset og flyttet til byen.', ru: 'Они продали дом и переехали в город.' }
        ] }
      ],
      vocab: [
        { id: 'nb-finne', w: 'finne', ru: 'находить', pos: 'v', g: null, forms: 'finner, fant, har funnet', ex: 'Jeg finner ikke nøklene mine.', exRu: 'Я не могу найти ключи.', note: null },
        { id: 'nb-hjelpe', w: 'hjelpe', ru: 'помогать', pos: 'v', g: null, forms: 'hjelper, hjalp, har hjulpet', ex: 'Kan du hjelpe meg?', exRu: 'Можешь мне помочь?', note: 'Прямое дополнение: hjelpe meg (рус. «мне»).' },
        { id: 'nb-treffe', w: 'treffe', ru: 'встречать; попадать', pos: 'v', g: null, forms: 'treffer, traff, har truffet', ex: 'Jeg traff en gammel venn i byen.', exRu: 'Я встретил в городе старого друга.', note: null },
        { id: 'nb-synge', w: 'synge', ru: 'петь', pos: 'v', g: null, forms: 'synger, sang, har sunget', ex: 'Barna synger en sang.', exRu: 'Дети поют песню.', note: null },
        { id: 'nb-vinne', w: 'vinne', ru: 'выигрывать, побеждать', pos: 'v', g: null, forms: 'vinner, vant, har vunnet', ex: 'Norge vant gull i langrenn.', exRu: 'Норвегия выиграла золото в лыжных гонках.', note: null },
        { id: 'nb-fly', w: 'fly', ru: 'летать, лететь', pos: 'v', g: null, forms: 'flyr, fløy, har fløyet', ex: 'Vi fløy til Tromsø.', exRu: 'Мы полетели в Тромсё.', note: 'Омоним: et fly — самолёт.' },
        { id: 'nb-dra', w: 'dra', ru: 'ехать, уезжать; тянуть', pos: 'v', g: null, forms: 'drar, dro, har dratt', ex: 'Vi drar på hytta i helga.', exRu: 'На выходных мы едем на дачу.', note: null },
        { id: 'nb-legge', w: 'legge', ru: 'класть', pos: 'v', g: null, forms: 'legger, la, har lagt', ex: 'Hun la boka på bordet.', exRu: 'Она положила книгу на стол.', note: 'legge seg — ложиться.' },
        { id: 'nb-sette', w: 'sette', ru: 'ставить, сажать', pos: 'v', g: null, forms: 'setter, satte, har satt', ex: 'Han satte koppen på bordet.', exRu: 'Он поставил чашку на стол.', note: 'sette seg — садиться.' },
        { id: 'nb-selge', w: 'selge', ru: 'продавать', pos: 'v', g: null, forms: 'selger, solgte, har solgt', ex: 'De har solgt huset.', exRu: 'Они продали дом.', note: null },
        { id: 'nb-spørre', w: 'spørre', ru: 'спрашивать', pos: 'v', g: null, forms: 'spør, spurte, har spurt', ex: 'Kan jeg spørre om noe?', exRu: 'Можно кое о чём спросить?', note: 'Презенс без -r: spør.' },
        { id: 'nb-fortelle', w: 'fortelle', ru: 'рассказывать', pos: 'v', g: null, forms: 'forteller, fortalte, har fortalt', ex: 'Fortell meg om familien din!', exRu: 'Расскажи мне о своей семье!', note: null },
        { id: 'nb-velge', w: 'velge', ru: 'выбирать', pos: 'v', g: null, forms: 'velger, valgte, har valgt', ex: 'Hvilken bok valgte du?', exRu: 'Какую книгу ты выбрал?', note: null },
        { id: 'nb-holde', w: 'holde', ru: 'держать', pos: 'v', g: null, forms: 'holder, holdt, har holdt', ex: 'Hun holder barnet i armene.', exRu: 'Она держит ребёнка на руках.', note: 'holde på med — заниматься чем-то.' }
      ],
      text: null
    },
    {
      id: 'nb-u04-l05',
      kind: 'reading',
      title: 'Ferien i fjor',
      goals: ['Узнавать претерит сильных и слабых глаголов в повествовании', 'Видеть переход от претерита к перфекту'],
      skills: ['nb.verb.strong', 'nb.verb.weak', 'nb.verb.perfect'],
      theory: [
        { type: 'p', text: 'Рассказ о прошлом ведётся в претерите (*dro, fløy, leide, sov, gikk*), а итоговые фразы о связи с настоящим — в перфекте (*har aldri sett, har kommet hjem*). *hadde bodd* — плюсквамперфект (юнит 8).' }
      ],
      vocab: [
        { id: 'nb-sommer', w: 'sommer', ru: 'лето', pos: 'n', g: 'm', forms: 'sommeren, somrer, somrene', ex: 'I sommer skal vi til Lofoten.', exRu: 'Этим летом мы поедем на Лофотены.', note: 'Синкопа и упрощение mm: somrer.' },
        { id: 'nb-fjell', w: 'fjell', ru: 'гора', pos: 'n', g: 'n', forms: 'fjellet, fjell, fjellene', ex: 'Vi gikk på tur i fjellet.', exRu: 'Мы ходили в поход в горы.', note: 'på fjellet / i fjellet — в горах.' },
        { id: 'nb-natur', w: 'natur', ru: 'природа', pos: 'n', g: 'm', forms: 'naturen', ex: 'Norsk natur er vakker.', exRu: 'Норвежская природа красива.', note: 'Обычно без мн. ч.' },
        { id: 'nb-liv', w: 'liv', ru: 'жизнь', pos: 'n', g: 'n', forms: 'livet, liv, livene', ex: 'Han har bodd her hele livet.', exRu: 'Он прожил здесь всю жизнь.', note: null },
        { id: 'nb-leie', w: 'leie', ru: 'арендовать, снимать', pos: 'v', g: null, forms: 'leier, leide, har leid', ex: 'Vi leide en bil.', exRu: 'Мы взяли машину напрокат.', note: 'Класс -de (дифтонг).' },
        { id: 'nb-tilbake', w: 'tilbake', ru: 'назад, обратно', pos: 'adv', g: null, forms: null, ex: 'Når kommer du tilbake?', exRu: 'Когда ты вернёшься?', note: null }
      ],
      text: {
        title: 'Ferien i fjor',
        lines: [
          { t: 'I fjor sommer dro vi til Nord-Norge.', ru: 'Прошлым летом мы ездили в Северную Норвегию.' },
          { t: 'Vi fløy fra Oslo til Tromsø og leide en bil der.', ru: 'Мы прилетели из Осло в Тромсё и взяли там машину напрокат.' },
          { t: 'Det var lyst hele natta, så vi sov dårlig.', ru: 'Всю ночь было светло, поэтому мы плохо спали.' },
          { t: 'En dag gikk vi på tur i fjellet og så havet langt der nede.', ru: 'Однажды мы пошли в горы и увидели далеко внизу море.' },
          { t: 'Vi traff en eldre mann som fortalte om livet i nord.', ru: 'Мы встретили пожилого мужчину, который рассказал о жизни на севере.' },
          { t: 'Han hadde bodd i Tromsø hele livet.', ru: 'Он прожил в Тромсё всю жизнь.' },
          { t: 'Vi har aldri sett så vakker natur!', ru: 'Мы никогда не видели такой красивой природы!' },
          { t: 'Nå har vi kommet hjem, men vi har allerede bestemt oss:', ru: 'Теперь мы вернулись домой, но уже решили:' },
          { t: 'neste sommer reiser vi tilbake.', ru: 'следующим летом мы поедем туда снова.' }
        ]
      }
    }
  ]
};

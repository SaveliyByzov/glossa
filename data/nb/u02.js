export default {
  id: 'nb-u02',
  title: 'Presens og ordstilling',
  titleRu: 'Презенс и порядок слов V2',
  summary: 'Личные местоимения, презенс (одна форма на -r), правило второго места глагола, инверсия, позиция ikke, вопросы и ответы ja/jo/nei, числа и время по часам.',
  lessons: [
    {
      id: 'nb-u02-l01',
      kind: 'grammar',
      title: 'Местоимения и презенс',
      goals: ['Употреблять личные местоимения в субъектной и объектной форме', 'Образовывать презенс', 'Употреблять инфинитив с å'],
      skills: ['nb.pron.personal', 'nb.verb.present'],
      theory: [
        { type: 'table', caption: 'Личные местоимения', head: ['Лицо', 'Субъект', 'Объект', 'Перевод'], rows: [
          ['1 ед.', 'jeg', 'meg', 'я — меня/мне'],
          ['2 ед.', 'du', 'deg', 'ты — тебя/тебе'],
          ['3 ед. м.', 'han', 'ham', 'он — его/ему'],
          ['3 ед. ж.', 'hun', 'henne', 'она — её/ей'],
          ['3 ед. (вещь)', 'den / det', 'den / det', 'он, она, оно'],
          ['1 мн.', 'vi', 'oss', 'мы — нас/нам'],
          ['2 мн.', 'dere', 'dere', 'вы — вас/вам'],
          ['3 мн.', 'de', 'dem', 'они — их/им']
        ], note: 'Объектное han вместо ham допустимо и принимается в ответах.' },
        { type: 'p', text: 'О предметах: **den** — для слов общего рода (en/ei), **det** — для слов среднего рода (et): *Bilen? Den er ny. Huset? Det er stort.* Вежливое *De* устарело: в современном норвежском всем говорят *du*.' },
        { type: 'rule', text: 'Презенс = инфинитив + {{r}}, **одна форма для всех лиц**: jeg snakke{{r}}, du snakke{{r}}, vi snakke{{r}}, de snakke{{r}}. Инфинитив на ударный гласный: bo → bo{{r}}, forstå → forstå{{r}}.' },
        { type: 'table', caption: 'Неправильный презенс', head: ['Инфинитив', 'Презенс', 'Значение'], rows: [
          ['være', '{{er}}', 'быть'],
          ['gjøre', 'gjø{{r}}', 'делать'],
          ['vite', '{{vet}}', 'знать'],
          ['si', 'si{{er}}', 'сказать'],
          ['spørre', 'spø{{r}}', 'спрашивать']
        ], note: 'Модальные kan, vil, skal, må — в юните 5.' },
        { type: 'p', text: 'Инфинитив употребляется с частицей **å** (произносится [o]): *å lese, å bo*. *Jeg liker å lese.* — Я люблю читать.' },
        { type: 'contrast', text: 'Личных окончаний нет — лицо выражает только местоимение, поэтому подлежащее **обязательно**: «Читаю» → *Jeg leser*, а не ✗ *Leser*. Одна форма *er* соответствует русским «есть/являюсь/находится» и не опускается: *Han er lærer* — «Он учитель».' },
        { type: 'pitfall', text: '*de* [di] «они» vs *dem* [dem] «их»: *De bor her. Jeg kjenner dem.* Не путайте также *de* и *det*.' },
        { type: 'examples', items: [
          { t: 'Jeg heter Anna. Jeg er fra Russland.', ru: 'Меня зовут Анна. Я из России.' },
          { t: 'Hun snakker norsk, og han forstår henne.', ru: 'Она говорит по-норвежски, и он её понимает.' },
          { t: 'Vi bor i Oslo. Hvor bor dere?', ru: 'Мы живём в Осло. Где живёте вы?' },
          { t: 'Jeg vet ikke hva han sier.', ru: 'Я не знаю, что он говорит.' }
        ] }
      ],
      vocab: [
        { id: 'nb-være', w: 'være', ru: 'быть', pos: 'v', g: null, forms: 'er, var, har vært', ex: 'Jeg er fra Russland.', exRu: 'Я из России.', note: 'Императив: vær!' },
        { id: 'nb-ha', w: 'ha', ru: 'иметь', pos: 'v', g: null, forms: 'har, hadde, har hatt', ex: 'Vi har en hund.', exRu: 'У нас есть собака.', note: 'Русское «у меня есть» → jeg har.' },
        { id: 'nb-hete', w: 'hete', ru: 'называться, зваться', pos: 'v', g: null, forms: 'heter, het, har hett', ex: 'Hva heter du?', exRu: 'Как тебя зовут?', note: 'Сильный глагол: het.' },
        { id: 'nb-bo', w: 'bo', ru: 'жить, проживать', pos: 'v', g: null, forms: 'bor, bodde, har bodd', ex: 'Hun bor i Trondheim.', exRu: 'Она живёт в Тронхейме.', note: 'Только «проживать»; «жить» (существовать) — leve.' },
        { id: 'nb-snakke', w: 'snakke', ru: 'говорить, разговаривать', pos: 'v', g: null, forms: 'snakker, snakket, har snakket', ex: 'Snakker du norsk?', exRu: 'Ты говоришь по-норвежски?', note: null },
        { id: 'nb-forstå', w: 'forstå', ru: 'понимать', pos: 'v', g: null, forms: 'forstår, forsto, har forstått', ex: 'Jeg forstår ikke.', exRu: 'Я не понимаю.', note: 'Претерит также forstod.' },
        { id: 'nb-lese', w: 'lese', ru: 'читать', pos: 'v', g: null, forms: 'leser, leste, har lest', ex: 'Hun leser ei bok.', exRu: 'Она читает книгу.', note: null },
        { id: 'nb-skrive', w: 'skrive', ru: 'писать', pos: 'v', g: null, forms: 'skriver, skrev, har skrevet', ex: 'Han skriver et brev.', exRu: 'Он пишет письмо.', note: 'Претерит также skreiv.' },
        { id: 'nb-spise', w: 'spise', ru: 'есть, кушать', pos: 'v', g: null, forms: 'spiser, spiste, har spist', ex: 'Vi spiser frokost klokka sju.', exRu: 'Мы завтракаем в семь.', note: null },
        { id: 'nb-drikke', w: 'drikke', ru: 'пить', pos: 'v', g: null, forms: 'drikker, drakk, har drukket', ex: 'Drikker du kaffe?', exRu: 'Ты пьёшь кофе?', note: 'Сильный глагол: drakk — drukket.' },
        { id: 'nb-jobbe', w: 'jobbe', ru: 'работать', pos: 'v', g: null, forms: 'jobber, jobbet, har jobbet', ex: 'Hun jobber på et sykehus.', exRu: 'Она работает в больнице.', note: 'Синоним: arbeide (arbeider, arbeidet).' },
        { id: 'nb-komme', w: 'komme', ru: 'приходить, приезжать', pos: 'v', g: null, forms: 'kommer, kom, har kommet', ex: 'Hvor kommer du fra?', exRu: 'Откуда ты?', note: 'Перфект также er kommet. Императив: kom!' },
        { id: 'nb-like', w: 'like', ru: 'нравиться, любить', pos: 'v', g: null, forms: 'liker, likte, har likt', ex: 'Jeg liker å lese.', exRu: 'Я люблю читать.', note: 'Jeg liker kaffe — мне нравится кофе (подлежащее — тот, кто любит).' },
        { id: 'nb-lære', w: 'lære', ru: 'учить(ся); обучать', pos: 'v', g: null, forms: 'lærer, lærte, har lært', ex: 'Jeg lærer norsk.', exRu: 'Я учу норвежский.', note: 'Hun lærer meg norsk — она учит меня норвежскому.' }
      ],
      text: null
    },
    {
      id: 'nb-u02-l02',
      kind: 'grammar',
      title: 'Порядок слов V2 и отрицание',
      goals: ['Ставить финитный глагол на второе место', 'Делать инверсию после обстоятельства в начале фразы', 'Ставить ikke и наречия после финитного глагола'],
      skills: ['nb.syntax.v2', 'nb.syntax.negation'],
      theory: [
        { type: 'rule', text: 'В главном предложении **финитный (спрягаемый) глагол всегда на втором месте**. Если первое место занято не подлежащим, подлежащее встаёт **после** глагола (инверсия).' },
        { type: 'table', caption: 'Схема главного предложения', head: ['Позиция 1', 'Глагол', 'Подлежащее', 'Наречие', 'Остальное'], rows: [
          ['Jeg', 'spiser', '—', 'ikke', 'fisk i dag.'],
          ['I dag', 'spiser', 'jeg', 'ikke', 'fisk.'],
          ['Fisk', 'spiser', 'jeg', 'ikke', '.'],
          ['Nå', 'har', 'vi', 'ikke', 'tid.'],
          ['Hun', 'kan', '—', 'ikke', 'komme i morgen.']
        ], note: 'В позиции 1 стоит ровно один член предложения: подлежащее, дополнение, обстоятельство или целое придаточное.' },
        { type: 'rule', text: '**ikke** и другие сентенциальные наречия (*alltid, aldri, ofte, også, bare, gjerne*) стоят **сразу после финитного глагола** (при инверсии — после подлежащего). При двучленном сказуемом — между вспомогательным и смысловым глаголом: *Jeg kan ikke komme.*' },
        { type: 'examples', items: [
          { t: 'Jeg drikker ikke kaffe.', ru: 'Я не пью кофе.' },
          { t: 'I morgen reiser vi til Bergen.', ru: 'Завтра мы едем в Берген.', note: 'обстоятельство в позиции 1 → инверсия' },
          { t: 'Han spiser aldri fisk.', ru: 'Он никогда не ест рыбу.' },
          { t: 'Nå bor jeg ikke i Oslo.', ru: 'Сейчас я не живу в Осло.' },
          { t: 'Jeg kjenner ham ikke.', ru: 'Я его не знаю.', note: 'безударное местоимение-дополнение встаёт перед ikke' }
        ] },
        { type: 'contrast', text: 'Русский порядок свободен, а «не» стоит прямо перед глаголом: «Сегодня я не ем рыбу». По-норвежски: *I dag spiser jeg ikke fisk* — глагол на 2-м месте, подлежащее за ним, ikke после них.' },
        { type: 'pitfall', text: '✗ *I dag jeg spiser* — самая частая ошибка (русский и английский порядок). ✗ *Jeg ikke spiser* — так бывает только в придаточном (юнит 6).' },
        { type: 'tip', text: 'Союзы *og, men, eller, for, så* не занимают позицию 1: *…, men i dag spiser jeg fisk.* Наречие *kanskje* может стоять в начале и без инверсии: *Kanskje kommer han* = *Kanskje han kommer*.' }
      ],
      vocab: [
        { id: 'nb-ikke', w: 'ikke', ru: 'не, нет', pos: 'adv', g: null, forms: null, ex: 'Jeg forstår ikke.', exRu: 'Я не понимаю.', note: 'Ответ «нет» — nei.' },
        { id: 'nb-nå', w: 'nå', ru: 'сейчас, теперь', pos: 'adv', g: null, forms: null, ex: 'Nå bor jeg i Oslo.', exRu: 'Сейчас я живу в Осло.', note: null },
        { id: 'nb-i-dag', w: 'i dag', ru: 'сегодня', pos: 'adv', g: null, forms: null, ex: 'I dag er det mandag.', exRu: 'Сегодня понедельник.', note: 'Пишется раздельно.' },
        { id: 'nb-i-morgen', w: 'i morgen', ru: 'завтра', pos: 'adv', g: null, forms: null, ex: 'I morgen jobber jeg ikke.', exRu: 'Завтра я не работаю.', note: 'Пишется раздельно. Не путать с om morgenen — по утрам.' },
        { id: 'nb-ofte', w: 'ofte', ru: 'часто', pos: 'adv', g: null, forms: null, ex: 'Vi går ofte på kino.', exRu: 'Мы часто ходим в кино.', note: null },
        { id: 'nb-alltid', w: 'alltid', ru: 'всегда', pos: 'adv', g: null, forms: null, ex: 'Hun kommer alltid for sent.', exRu: 'Она всегда опаздывает.', note: null },
        { id: 'nb-aldri', w: 'aldri', ru: 'никогда', pos: 'adv', g: null, forms: null, ex: 'Han drikker aldri kaffe.', exRu: 'Он никогда не пьёт кофе.', note: 'Без ikke! Двойного отрицания нет.' },
        { id: 'nb-også', w: 'også', ru: 'тоже, также', pos: 'adv', g: null, forms: null, ex: 'Jeg snakker også engelsk.', exRu: 'Я также говорю по-английски.', note: null },
        { id: 'nb-bare', w: 'bare', ru: 'только; просто', pos: 'adv', g: null, forms: null, ex: 'Jeg har bare ti kroner.', exRu: 'У меня только десять крон.', note: null },
        { id: 'nb-kanskje', w: 'kanskje', ru: 'может быть', pos: 'adv', g: null, forms: null, ex: 'Kanskje kommer hun i morgen.', exRu: 'Может быть, она придёт завтра.', note: 'Допустим и прямой порядок: Kanskje hun kommer.' },
        { id: 'nb-gjerne', w: 'gjerne', ru: 'охотно, с удовольствием', pos: 'adv', g: null, forms: null, ex: 'Jeg vil gjerne ha en kaffe.', exRu: 'Я бы хотел кофе.', note: 'Смягчает просьбу: vil gjerne — хотел бы.' },
        { id: 'nb-sammen', w: 'sammen', ru: 'вместе', pos: 'adv', g: null, forms: null, ex: 'Vi spiser middag sammen.', exRu: 'Мы ужинаем вместе.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u02-l03',
      kind: 'grammar',
      title: 'Вопросы и ответы: ja, nei, jo',
      goals: ['Строить общие и специальные вопросы', 'Отвечать jo на отрицательный вопрос', 'Оставлять предлог в конце вопроса'],
      skills: ['nb.syntax.questions', 'nb.syntax.v2'],
      theory: [
        { type: 'rule', text: '**Общий вопрос**: финитный глагол на первом месте — *Snakker du norsk?* *Har du tid?*' },
        { type: 'rule', text: '**Специальный вопрос**: вопросительное слово + глагол + подлежащее (то же V2) — *Hvor bor du?* *Hva gjør dere i dag?*' },
        { type: 'table', caption: 'Вопросительные слова (hv-ord)', head: ['Слово', 'Значение', 'Пример'], rows: [
          ['hva', 'что', 'Hva gjør du?'],
          ['hvem', 'кто', 'Hvem er det?'],
          ['hvor', 'где, куда', 'Hvor bor du?'],
          ['hvor … fra', 'откуда', 'Hvor kommer du fra?'],
          ['hvordan', 'как', 'Hvordan har du det?'],
          ['hvorfor', 'почему', 'Hvorfor lærer du norsk?'],
          ['når', 'когда', 'Når kommer bussen?'],
          ['hvilken / hvilket / hvilke', 'какой, который', 'Hvilket språk snakker du?'],
          ['hvor mye / hvor mange', 'сколько', 'Hvor mange barn har du?'],
          ['hvor gammel', 'сколько лет', 'Hvor gammel er du?']
        ] },
        { type: 'p', text: 'Если вопросительное слово само является подлежащим, инверсии нет: *Hvem kommer i dag? Hva skjer?*' },
        { type: 'h', text: 'Ответы ja, nei, jo' },
        { type: 'rule', text: 'На **отрицательный** вопрос положительный ответ — **jo**: — *Kommer du ikke?* — *Jo, jeg kommer.* (— *Nei, jeg kommer ikke.*)' },
        { type: 'contrast', text: 'По-русски «Ты не придёшь? — Да» двусмысленно. Норвежское *jo* (как нем. *doch*, фр. *si*) однозначно возражает против отрицания.' },
        { type: 'pitfall', text: 'Предлог остаётся **в конце**: *Hvor kommer du fra? Hvem snakker du med?* Конструкция ✗ *Med hvem snakker du?* звучит книжно-неестественно.' },
        { type: 'tip', text: '*hvilken* согласуется с существительным: *hvilken bil / hvilken bok, hvilket hus, hvilke bøker*. *Hvor mye* — с несчётными (*Hvor mye koster det?*), *hvor mange* — со счётными.' }
      ],
      vocab: [
        { id: 'nb-hva', w: 'hva', ru: 'что', pos: 'pron', g: null, forms: null, ex: 'Hva gjør du?', exRu: 'Что ты делаешь?', note: null },
        { id: 'nb-hvem', w: 'hvem', ru: 'кто', pos: 'pron', g: null, forms: null, ex: 'Hvem er det?', exRu: 'Кто это?', note: null },
        { id: 'nb-hvor', w: 'hvor', ru: 'где; куда', pos: 'adv', g: null, forms: null, ex: 'Hvor bor du?', exRu: 'Где ты живёшь?', note: 'Также «как, насколько»: hvor gammel, hvor mye.' },
        { id: 'nb-hvordan', w: 'hvordan', ru: 'как', pos: 'adv', g: null, forms: null, ex: 'Hvordan har du det?', exRu: 'Как дела?', note: null },
        { id: 'nb-hvorfor', w: 'hvorfor', ru: 'почему, зачем', pos: 'adv', g: null, forms: null, ex: 'Hvorfor lærer du norsk?', exRu: 'Почему ты учишь норвежский?', note: null },
        { id: 'nb-når', w: 'når', ru: 'когда (вопрос)', pos: 'adv', g: null, forms: null, ex: 'Når kommer bussen?', exRu: 'Когда придёт автобус?', note: 'Как союз — юнит 6.' },
        { id: 'nb-hvilken', w: 'hvilken', ru: 'какой, который', pos: 'pron', g: null, forms: 'hvilket (ср.), hvilke (мн.)', ex: 'Hvilket språk snakker du?', exRu: 'На каком языке ты говоришь?', note: null },
        { id: 'nb-hvor-mye', w: 'hvor mye', ru: 'сколько (несчётн.)', pos: 'phr', g: null, forms: null, ex: 'Hvor mye koster det?', exRu: 'Сколько это стоит?', note: null },
        { id: 'nb-hvor-mange', w: 'hvor mange', ru: 'сколько (счётн.)', pos: 'phr', g: null, forms: null, ex: 'Hvor mange barn har du?', exRu: 'Сколько у тебя детей?', note: null },
        { id: 'nb-ja', w: 'ja', ru: 'да', pos: 'part', g: null, forms: null, ex: 'Ja, takk!', exRu: 'Да, спасибо!', note: null },
        { id: 'nb-nei', w: 'nei', ru: 'нет', pos: 'part', g: null, forms: null, ex: 'Nei, takk.', exRu: 'Нет, спасибо.', note: null },
        { id: 'nb-jo', w: 'jo', ru: 'да (в ответ на отриц. вопрос); ведь', pos: 'part', g: null, forms: null, ex: '– Har du ikke tid? – Jo, litt.', exRu: '— У тебя нет времени? — Да есть, немного.', note: 'Как нем. doch.' }
      ],
      text: null
    },
    {
      id: 'nb-u02-l04',
      kind: 'vocab',
      title: 'Числа, дни и время',
      goals: ['Называть числа до 1000 и порядковые', 'Говорить, который час', 'Называть дни недели'],
      skills: ['nb.num.time'],
      theory: [
        { type: 'table', caption: 'Количественные числительные', head: ['', 'Формы'], rows: [
          ['0–5', 'null, en (ei/ett), to, tre, fire, fem'],
          ['6–10', 'seks, sju, åtte, ni, ti'],
          ['11–15', 'elleve, tolv, tretten, fjorten, femten'],
          ['16–20', 'seksten, sytten, atten, nitten, tjue'],
          ['десятки', 'tretti, førti, femti, seksti, sytti, åtti, nitti'],
          ['100 / 1000', 'hundre (ett hundre), tusen (ett tusen)']
        ], note: 'Допустимо: syv, tyve. 21 = tjueen (основная система); старая «en og tjue» тоже правильна.' },
        { type: 'p', text: 'Порядковые: *første, andre, tredje, fjerde, femte, sjette, sjuende, åttende, niende, tiende*. На письме — с точкой: *17. mai* = *den syttende mai*. *andre* значит также «другой».' },
        { type: 'table', caption: 'Который час? — Hva er klokka?', head: ['Время', 'Klokka er …'], rows: [
          ['3:00', 'tre'],
          ['3:05', 'fem over tre'],
          ['3:15', 'kvart over tre'],
          ['3:20', 'ti på halv fire'],
          ['3:25', 'fem på halv fire'],
          ['3:30', 'halv fire'],
          ['3:35', 'fem over halv fire'],
          ['3:40', 'ti over halv fire'],
          ['3:45', 'kvart på fire'],
          ['3:50', 'ti på fire']
        ] },
        { type: 'contrast', text: '*halv fire* = 3:30, как рус. «половина четвёртого». А вот отсчёт от получаса (*fem på halv fire* = 3:25, «за пять до половины четвёртого») для русского непривычен.' },
        { type: 'pitfall', text: '*halv tre* — это **2:30**, а не 3:30 (ср. англ. *half past three*).' },
        { type: 'p', text: 'Дни недели (пишутся со строчной): *mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag*. *på mandag* — в (ближайший) понедельник; *på mandager / om mandagen* — по понедельникам.' },
        { type: 'tip', text: 'Официальное время — 24-часовое, через точку: *klokka 14.30* (fjorten tretti).' }
      ],
      vocab: [
        { id: 'nb-klokke', w: 'klokke', ru: 'часы; колокол', pos: 'n', g: 'f', forms: 'klokka, klokker, klokkene', ex: 'Hva er klokka?', exRu: 'Который час?', note: 'Допустимо: klokken. Klokka er fem — сейчас пять.' },
        { id: 'nb-time', w: 'time', ru: 'час (60 минут); урок', pos: 'n', g: 'm', forms: 'timen, timer, timene', ex: 'Filmen varer i to timer.', exRu: 'Фильм длится два часа.', note: 'Не англ. time! Время — tid.' },
        { id: 'nb-minutt', w: 'minutt', ru: 'минута', pos: 'n', g: 'n', forms: 'minuttet, minutter, minuttene', ex: 'Bussen kommer om fem minutter.', exRu: 'Автобус придёт через пять минут.', note: null },
        { id: 'nb-kvarter', w: 'kvarter', ru: 'четверть часа', pos: 'n', g: 'n', forms: 'kvarteret, kvarter, kvarterene', ex: 'Jeg kommer om et kvarter.', exRu: 'Я приду через четверть часа.', note: 'Во времени по часам — kvart: kvart over / kvart på.' },
        { id: 'nb-halv', w: 'halv', ru: 'половинный, пол-', pos: 'adj', g: null, forms: 'halvt, halve', ex: 'Klokka er halv åtte.', exRu: 'Сейчас половина восьмого (7:30).', note: null },
        { id: 'nb-sju', w: 'sju', ru: 'семь', pos: 'num', g: null, forms: null, ex: 'Klokka er sju.', exRu: 'Сейчас семь часов.', note: 'Допустимо: syv.' },
        { id: 'nb-tjue', w: 'tjue', ru: 'двадцать', pos: 'num', g: null, forms: null, ex: 'Hun er tjue år.', exRu: 'Ей двадцать лет.', note: 'Допустимо: tyve. 21 — tjueen.' },
        { id: 'nb-hundre', w: 'hundre', ru: 'сто', pos: 'num', g: null, forms: null, ex: 'Det koster hundre kroner.', exRu: 'Это стоит сто крон.', note: null },
        { id: 'nb-tusen', w: 'tusen', ru: 'тысяча', pos: 'num', g: null, forms: null, ex: 'Tusen takk!', exRu: 'Большое спасибо!', note: null },
        { id: 'nb-første', w: 'første', ru: 'первый', pos: 'num', g: null, forms: null, ex: 'Det er første gang jeg er her.', exRu: 'Я здесь впервые.', note: null },
        { id: 'nb-andre', w: 'andre', ru: 'второй; другой', pos: 'num', g: null, forms: null, ex: 'Vi bor i andre etasje.', exRu: 'Мы живём на втором этаже.', note: 'Как «другие»: andre mennesker.' },
        { id: 'nb-mandag', w: 'mandag', ru: 'понедельник', pos: 'n', g: 'm', forms: 'mandagen, mandager, mandagene', ex: 'På mandag begynner skolen.', exRu: 'В понедельник начинается школа.', note: 'Дни недели — со строчной буквы.' }
      ],
      text: null
    },
    {
      id: 'nb-u02-l05',
      kind: 'reading',
      title: 'En vanlig dag',
      goals: ['Следить за инверсией после обстоятельств времени', 'Понимать время по часам в тексте'],
      skills: ['nb.syntax.v2', 'nb.syntax.negation', 'nb.num.time'],
      theory: [
        { type: 'p', text: 'Почти каждое предложение начинается с обстоятельства времени — и сразу за ним идёт глагол, а потом подлежащее: *Klokka kvart over sju **tar hun** bussen.* Фразовые глаголы *står opp* «встаёт», *legger seg* «ложится» разберём позже.' }
      ],
      vocab: [
        { id: 'nb-buss', w: 'buss', ru: 'автобус', pos: 'n', g: 'm', forms: 'bussen, busser, bussene', ex: 'Jeg tar bussen til jobben.', exRu: 'Я езжу на работу на автобусе.', note: 'Ta bussen — ехать на автобусе.' },
        { id: 'nb-elev', w: 'elev', ru: 'ученик, школьник', pos: 'n', g: 'm', forms: 'eleven, elever, elevene', ex: 'Elevene er i klasserommet.', exRu: 'Ученики в классе.', note: null },
        { id: 'nb-middag', w: 'middag', ru: 'обед-ужин (главная горячая еда дня)', pos: 'n', g: 'm', forms: 'middagen, middager, middagene', ex: 'Vi spiser middag klokka fem.', exRu: 'Мы обедаем в пять.', note: 'Едят около 16–18 ч; обед в полдень — lunsj.' },
        { id: 'nb-ettermiddag', w: 'ettermiddag', ru: 'вторая половина дня', pos: 'n', g: 'm', forms: 'ettermiddagen, ettermiddager, ettermiddagene', ex: 'Om ettermiddagen er hun fri.', exRu: 'После обеда она свободна.', note: null },
        { id: 'nb-kveld', w: 'kveld', ru: 'вечер', pos: 'n', g: 'm', forms: 'kvelden, kvelder, kveldene', ex: 'God kveld!', exRu: 'Добрый вечер!', note: 'Om kvelden — вечером (обычно); i kveld — сегодня вечером.' },
        { id: 'nb-morgen', w: 'morgen', ru: 'утро', pos: 'n', g: 'm', forms: 'morgenen, morgener, morgenene', ex: 'God morgen!', exRu: 'Доброе утро!', note: 'i morgen — завтра; i morges — сегодня утром.' }
      ],
      text: {
        title: 'En vanlig dag',
        lines: [
          { t: 'Kari bor i Oslo. Hun er lærer.', ru: 'Кари живёт в Осло. Она учительница.' },
          { t: 'Hver dag står hun opp klokka halv sju.', ru: 'Каждый день она встаёт в половине седьмого.' },
          { t: 'Hun drikker kaffe og spiser brød med ost.', ru: 'Она пьёт кофе и ест хлеб с сыром.' },
          { t: 'Klokka kvart over sju tar hun bussen til jobben.', ru: 'В четверть восьмого она едет на автобусе на работу.' },
          { t: 'På skolen snakker hun med elevene.', ru: 'В школе она разговаривает с учениками.' },
          { t: 'Om ettermiddagen er hun fri.', ru: 'После обеда она свободна.' },
          { t: 'Da leser hun ei bok eller går en tur.', ru: 'Тогда она читает книгу или гуляет.' },
          { t: 'Spiser hun middag hjemme? Ja, hun spiser alltid middag hjemme.', ru: 'Обедает ли она дома? Да, она всегда обедает дома.' },
          { t: 'Om kvelden ser hun på TV, men ikke lenge.', ru: 'Вечером она смотрит телевизор, но недолго.' },
          { t: 'Er hun ikke trøtt? Jo, og klokka elleve legger hun seg.', ru: 'Разве она не устала? Устала, и в одиннадцать она ложится спать.' }
        ]
      }
    }
  ]
};

export default {
  id: 'nb-u06',
  title: 'Leddsetninger',
  titleRu: 'Придаточные предложения',
  summary: 'Подчинительные союзы и правило BIFF (ikke перед финитным глаголом), når/da/hvis/om, относительные придаточные с som, косвенный вопрос и придаточное в начале фразы.',
  lessons: [
    {
      id: 'nb-u06-l01',
      kind: 'grammar',
      title: 'Придаточное и правило BIFF',
      goals: ['Строить придаточные с at, fordi, selv om, siden', 'Ставить ikke перед финитным глаголом в придаточном', 'Различать подчинительное fordi и сочинительное for'],
      skills: ['nb.syntax.subclause'],
      theory: [
        { type: 'rule', text: 'В придаточном **нет V2**: союз — подлежащее — (наречие) — финитный глагол. Инверсии не бывает.' },
        { type: 'table', caption: 'Схема придаточного', head: ['Союз', 'Подлежащее', 'Наречие', 'Финитный глагол', 'Остальное'], rows: [
          ['at', 'han', 'ikke', 'kommer', 'i dag'],
          ['fordi', 'jeg', 'alltid', 'drikker', 'kaffe om morgenen'],
          ['selv om', 'hun', 'ikke', 'har', 'tid'],
          ['at', 'vi', 'aldri', 'har', 'vært i Tromsø']
        ] },
        { type: 'rule', text: '**BIFF**: **B**isetning — **I**kke **F**oran **F**initt verb. В придаточном *ikke* и сентенциальные наречия (*alltid, aldri, ofte, også, bare, kanskje*) стоят **перед** финитным глаголом.' },
        { type: 'examples', items: [
          { t: 'Jeg vet at han ikke kommer.', ru: 'Я знаю, что он не придёт.' },
          { t: 'Hun er glad fordi hun ikke må jobbe i morgen.', ru: 'Она рада, потому что ей не надо завтра работать.' },
          { t: 'Han sier at han aldri har vært i Norge.', ru: 'Он говорит, что никогда не был в Норвегии.' },
          { t: 'Jeg tror (at) det blir fint vær.', ru: 'Думаю, будет хорошая погода.', note: 'at после глаголов речи и мысли можно опустить' }
        ] },
        { type: 'p', text: 'Сочинительные союзы **og, men, eller, for, så** соединяют главные предложения — порядок обычный, V2: *Jeg blir hjemme, for jeg er syk* (ср. *…fordi jeg er syk*). *Det regnet, så vi ble hjemme.*' },
        { type: 'contrast', text: 'Здесь русская интуиция помогает: «…потому что я **не** пью» = *fordi jeg **ikke** drikker* — отрицание прямо перед глаголом. Ошибаются обычно, перенося в придаточное порядок главного предложения.' },
        { type: 'pitfall', text: '✗ *…fordi jeg drikker ikke kaffe* — порядок главного предложения. В разговорной речи встречается, но в письменной норме — *fordi jeg ikke drikker kaffe*.' },
        { type: 'tip', text: 'Наречие *så* «потом, тогда» в начале фразы вызывает инверсию (*Så gikk vi hjem*), а союз *så* «так что» — нет (*…, så vi gikk hjem*).' }
      ],
      vocab: [
        { id: 'nb-at', w: 'at', ru: 'что (союз)', pos: 'conj', g: null, forms: null, ex: 'Jeg vet at du har rett.', exRu: 'Я знаю, что ты прав.', note: 'Часто опускается: Jeg tror (at) …' },
        { id: 'nb-fordi', w: 'fordi', ru: 'потому что', pos: 'conj', g: null, forms: null, ex: 'Jeg blir hjemme fordi jeg er syk.', exRu: 'Я остаюсь дома, потому что болею.', note: 'Подчинительный: BIFF.' },
        { id: 'nb-selv-om', w: 'selv om', ru: 'хотя, даже если', pos: 'conj', g: null, forms: null, ex: 'Vi går ut selv om det regner.', exRu: 'Мы идём гулять, хотя идёт дождь.', note: null },
        { id: 'nb-siden-conj', w: 'siden', ru: 'так как; с тех пор как', pos: 'conj', g: null, forms: null, ex: 'Siden du er her, kan du hjelpe meg.', exRu: 'Раз уж ты здесь, можешь мне помочь.', note: 'Как предлог — «с»: siden 2020.' },
        { id: 'nb-for-conj', w: 'for', ru: 'ибо, ведь (сочинительный)', pos: 'conj', g: null, forms: null, ex: 'Jeg tar bussen, for bilen er på verkstedet.', exRu: 'Я еду на автобусе, ведь машина в ремонте.', note: 'После for — порядок главного предложения.' },
        { id: 'nb-men', w: 'men', ru: 'но, а', pos: 'conj', g: null, forms: null, ex: 'Hun er trøtt, men glad.', exRu: 'Она устала, но рада.', note: null },
        { id: 'nb-eller', w: 'eller', ru: 'или', pos: 'conj', g: null, forms: null, ex: 'Vil du ha kaffe eller te?', exRu: 'Хочешь кофе или чай?', note: null },
        { id: 'nb-så-conj', w: 'så', ru: 'так что, поэтому', pos: 'conj', g: null, forms: null, ex: 'Det regnet, så vi ble hjemme.', exRu: 'Шёл дождь, поэтому мы остались дома.', note: 'Наречие så «потом» вызывает инверсию: Så gikk vi.' },
        { id: 'nb-mene', w: 'mene', ru: 'считать; иметь в виду', pos: 'v', g: null, forms: 'mener, mente, har ment', ex: 'Hva mener du?', exRu: 'Что ты имеешь в виду?', note: null },
        { id: 'nb-syk', w: 'syk', ru: 'больной', pos: 'adj', g: null, forms: 'sykt, syke', ex: 'Hun er syk i dag.', exRu: 'Она сегодня болеет.', note: 'Разг. sykt — «жутко, очень».' },
        { id: 'nb-sliten', w: 'sliten', ru: 'уставший', pos: 'adj', g: null, forms: 'slitent, slitne', ex: 'Jeg er så sliten!', exRu: 'Я так устал!', note: 'Синкопа: slitne. Синоним: trøtt.' }
      ],
      text: null
    },
    {
      id: 'nb-u06-l02',
      kind: 'grammar',
      title: 'Когда, если, пока: når, da, hvis, om',
      goals: ['Различать når и da', 'Различать hvis и om', 'Употреблять mens, før, etter at, så snart'],
      skills: ['nb.conj.time-cond', 'nb.syntax.subclause'],
      theory: [
        { type: 'table', head: ['Союз', 'Значение', 'Пример'], rows: [
          ['når', 'когда: настоящее, будущее, повторяющееся в прошлом', 'Når jeg kommer hjem, lager jeg mat.'],
          ['da', 'когда: однократное событие или период в прошлом', 'Da jeg var barn, bodde jeg i Murmansk.'],
          ['hvis / om', 'если', 'Hvis det regner, blir vi hjemme.'],
          ['om', 'ли (косвенный вопрос)', 'Jeg vet ikke om han kommer.'],
          ['mens', 'пока, в то время как', 'Han leste avisa mens hun laget middag.'],
          ['før', 'до того как, прежде чем', 'Vask hendene før du spiser!'],
          ['etter at', 'после того как', 'Etter at vi hadde spist, gikk vi en tur.'],
          ['så snart', 'как только', 'Ring meg så snart du er ferdig.']
        ] },
        { type: 'rule', text: '**da** — одно событие (или один период) в прошлом; **når** — всё остальное, в том числе повторяющееся в прошлом: *Når vi var på hytta, badet vi hver dag* (каждый раз, когда).' },
        { type: 'contrast', text: 'Русскому «когда» соответствуют два союза (*når / da*), русскому «если» — *hvis* или *om*, а «ли» — тоже *om*. Ориентир — немецкие *wenn / als*: *når* ≈ *wenn*, *da* ≈ *als*.' },
        { type: 'pitfall', text: '✗ *Når jeg var fem år, flyttet vi* — однократное событие: *Da jeg var fem år, flyttet vi*. ✗ *Jeg vet ikke hvis han kommer* — «ли» передаётся только *om*.' },
        { type: 'tip', text: '*før* и *etter* — также предлоги (*før middag, etter jobben*); как союзы: *før* — без изменений, а «после того как» — *etter at*.' }
      ],
      vocab: [
        { id: 'nb-når-conj', w: 'når', ru: 'когда (союз; наст., буд., повтор.)', pos: 'conj', g: null, forms: null, ex: 'Når jeg kommer hjem, lager jeg mat.', exRu: 'Когда я прихожу домой, я готовлю еду.', note: null },
        { id: 'nb-da', w: 'da', ru: 'когда (однократно в прошлом); тогда', pos: 'conj', g: null, forms: null, ex: 'Da jeg var barn, bodde jeg i Murmansk.', exRu: 'Когда я был ребёнком, я жил в Мурманске.', note: 'Наречие da — «тогда».' },
        { id: 'nb-hvis', w: 'hvis', ru: 'если', pos: 'conj', g: null, forms: null, ex: 'Hvis det regner, blir vi hjemme.', exRu: 'Если пойдёт дождь, мы останемся дома.', note: null },
        { id: 'nb-om-conj', w: 'om', ru: 'ли; если', pos: 'conj', g: null, forms: null, ex: 'Jeg vet ikke om han kommer.', exRu: 'Я не знаю, придёт ли он.', note: 'Как предлог — юнит 8.' },
        { id: 'nb-før-conj', w: 'før', ru: 'прежде чем, до того как', pos: 'conj', g: null, forms: null, ex: 'Vask hendene før du spiser!', exRu: 'Помой руки, прежде чем есть!', note: 'Также наречие «раньше» и предлог «до».' },
        { id: 'nb-etter-at', w: 'etter at', ru: 'после того как', pos: 'conj', g: null, forms: null, ex: 'Etter at vi hadde spist, gikk vi en tur.', exRu: 'Поев, мы пошли гулять.', note: null },
        { id: 'nb-mens', w: 'mens', ru: 'пока, в то время как', pos: 'conj', g: null, forms: null, ex: 'Han leste avisa mens hun laget middag.', exRu: 'Он читал газету, пока она готовила ужин.', note: null },
        { id: 'nb-så-snart', w: 'så snart', ru: 'как только', pos: 'conj', g: null, forms: null, ex: 'Ring meg så snart du er ferdig.', exRu: 'Позвони мне, как только закончишь.', note: null },
        { id: 'nb-frokost', w: 'frokost', ru: 'завтрак', pos: 'n', g: 'm', forms: 'frokosten, frokoster, frokostene', ex: 'Hva spiser du til frokost?', exRu: 'Что ты ешь на завтрак?', note: 'til frokost — на завтрак.' },
        { id: 'nb-våkne', w: 'våkne', ru: 'просыпаться', pos: 'v', g: null, forms: 'våkner, våknet, har våknet', ex: 'Jeg våknet klokka seks.', exRu: 'Я проснулся в шесть.', note: null },
        { id: 'nb-ferdig', w: 'ferdig', ru: 'готовый, законченный', pos: 'adj', g: null, forms: 'ferdig, ferdige', ex: 'Er du ferdig?', exRu: 'Ты закончил?', note: 'ferdig med noe — закончил что-то.' }
      ],
      text: null
    },
    {
      id: 'nb-u06-l03',
      kind: 'grammar',
      title: 'Относительные придаточные: som',
      goals: ['Строить относительные придаточные с som', 'Опускать som-дополнение', 'Ставить предлог в конец придаточного'],
      skills: ['nb.syntax.relative'],
      theory: [
        { type: 'rule', text: 'Относительное местоимение **som** — одно для всех родов, чисел, лиц и предметов: *mannen som…, boka som…, husene som…*' },
        { type: 'p', text: '*som* в роли **дополнения** можно опустить: *Boka (som) jeg leser, er spennende.* *som* в роли **подлежащего** опускать нельзя: *Mannen som bor her, er lege.*' },
        { type: 'rule', text: 'Предлог уходит **в конец** придаточного: *huset (som) jeg bor i*, *byen (som) hun kommer fra*, *mannen (som) jeg snakket med*.' },
        { type: 'p', text: 'О месте — также *der / hvor*: *byen der (hvor) jeg bor*. «То, что» — *det som*; «всё, что» — *alt (som)*: *Det som skjedde, var trist. Alt han sier, er sant.*' },
        { type: 'examples', items: [
          { t: 'Kvinna som sitter der, er naboen min.', ru: 'Женщина, которая там сидит, — моя соседка.' },
          { t: 'Filmen (som) vi så i går, var dårlig.', ru: 'Фильм, который мы смотрели вчера, был плохой.' },
          { t: 'Dette er stolen (som) jeg alltid sitter på.', ru: 'Это стул, на котором я всегда сижу.' },
          { t: 'Har du noe (som) jeg kan lese?', ru: 'У тебя есть что-нибудь почитать?' }
        ] },
        { type: 'contrast', text: 'Русское «который» склоняется и тянет за собой предлог: «дом, **в котором** я живу». Норвежское *som* неизменяемо, а предлог остаётся у глагола: *huset jeg bor **i***. В придаточном действует BIFF: *filmen som jeg ikke har sett*.' },
        { type: 'pitfall', text: '✗ *huset i som jeg bor*, ✗ *alt hva han sier* — так нельзя. Правильно: *huset (som) jeg bor i*, *alt (som) han sier*.' },
        { type: 'tip', text: 'Тест: если сразу после *som* стоит подлежащее (*jeg, han, Per*), значит *som* — дополнение и его можно опустить.' }
      ],
      vocab: [
        { id: 'nb-som', w: 'som', ru: 'который; как', pos: 'pron', g: null, forms: null, ex: 'Mannen som bor her, er lege.', exRu: 'Мужчина, который здесь живёт, — врач.', note: 'Также «как»: like stor som, som barn.' },
        { id: 'nb-alt', w: 'alt', ru: 'всё', pos: 'pron', g: null, forms: null, ex: 'Alt er bra.', exRu: 'Всё хорошо.', note: 'alle — все (люди).' },
        { id: 'nb-noe', w: 'noe', ru: 'что-то, что-нибудь; немного', pos: 'pron', g: null, forms: null, ex: 'Vil du ha noe å drikke?', exRu: 'Хочешь что-нибудь выпить?', note: null },
        { id: 'nb-noen', w: 'noen', ru: 'кто-то; какие-то, несколько', pos: 'pron', g: null, forms: null, ex: 'Er det noen hjemme?', exRu: 'Есть кто-нибудь дома?', note: null },
        { id: 'nb-ingen', w: 'ingen', ru: 'никто; никакой', pos: 'pron', g: null, forms: null, ex: 'Det er ingen her.', exRu: 'Здесь никого нет.', note: 'Без ikke!' },
        { id: 'nb-ingenting', w: 'ingenting', ru: 'ничего', pos: 'pron', g: null, forms: null, ex: 'Jeg forstår ingenting.', exRu: 'Я ничего не понимаю.', note: 'Без ikke! Двойного отрицания нет.' },
        { id: 'nb-menneske', w: 'menneske', ru: 'человек', pos: 'n', g: 'n', forms: 'mennesket, mennesker, menneskene', ex: 'Det bor over fem millioner mennesker i Norge.', exRu: 'В Норвегии живёт более пяти миллионов человек.', note: 'Средний род!' },
        { id: 'nb-nabo', w: 'nabo', ru: 'сосед', pos: 'n', g: 'm', forms: 'naboen, naboer, naboene', ex: 'Naboen vår er hyggelig.', exRu: 'Наш сосед приятный.', note: null },
        { id: 'nb-kollega', w: 'kollega', ru: 'коллега', pos: 'n', g: 'm', forms: 'kollegaen, kolleger, kollegene', ex: 'Kollegene mine er fra hele verden.', exRu: 'Мои коллеги со всего мира.', note: 'Мн. ч. также kollegaer.' },
        { id: 'nb-sted', w: 'sted', ru: 'место', pos: 'n', g: 'n', forms: 'stedet, steder, stedene', ex: 'Dette er et fint sted.', exRu: 'Это красивое место.', note: 'Свободное место (для сидения) — plass.' },
        { id: 'nb-skje', w: 'skje', ru: 'происходить', pos: 'v', g: null, forms: 'skjer, skjedde, har skjedd', ex: 'Hva skjer?', exRu: 'Что происходит?', note: null },
        { id: 'nb-kjenne', w: 'kjenne', ru: 'знать (человека, место); чувствовать', pos: 'v', g: null, forms: 'kjenner, kjente, har kjent', ex: 'Kjenner du naboen din?', exRu: 'Ты знаешь своего соседа?', note: 'Знать факт — vite.' }
      ],
      text: null
    },
    {
      id: 'nb-u06-l04',
      kind: 'grammar',
      title: 'Косвенный вопрос; придаточное в начале',
      goals: ['Строить косвенные вопросы с прямым порядком', 'Добавлять som после вопросительного слова-подлежащего', 'Делать инверсию после придаточного в позиции 1'],
      skills: ['nb.syntax.indirect', 'nb.syntax.subclause', 'nb.syntax.v2'],
      theory: [
        { type: 'rule', text: 'Косвенный вопрос — это придаточное: порядок **прямой** (по BIFF). *Hvor bor du?* → *Jeg vet ikke hvor du bor.* Общий вопрос вводится союзом **om**: *Kommer han?* → *Jeg lurer på om han kommer.*' },
        { type: 'rule', text: 'Если вопросительное слово — **подлежащее**, после него добавляется **som**: *Hvem kommer?* → *Jeg vet ikke hvem **som** kommer. Hva skjedde?* → *Hun spurte hva **som** skjedde.*' },
        { type: 'h', text: 'Придаточное в позиции 1' },
        { type: 'rule', text: 'Придаточное в начале фразы занимает **позицию 1** — поэтому в главном предложении **инверсия**: *Når jeg kommer hjem, **spiser jeg**.*' },
        { type: 'table', head: ['Позиция 1', 'Глагол', 'Подлежащее', 'Наречие', 'Остальное'], rows: [
          ['Når jeg kommer hjem,', 'spiser', 'jeg', '—', 'middag.'],
          ['Hvis det regner,', 'går', 'vi', 'ikke', 'ut.'],
          ['Selv om hun er sliten,', 'vil', 'hun', 'gjerne', 'bli med.']
        ] },
        { type: 'contrast', text: 'По-русски «Не знаю, где он живёт» сохраняет порядок вопроса, а «придёт ли он» требует частицы. По-норвежски: *hvor han bor* (прямой порядок), *om han kommer* («ли» = *om*).' },
        { type: 'pitfall', text: '✗ *Jeg vet ikke hvor bor han.* ✗ *Når jeg kommer hjem, jeg spiser.* ✗ *Jeg vet ikke hvem kommer* (нужно *hvem som kommer*).' },
        { type: 'tip', text: 'Вежливый вопрос через косвенный: *Kan du si meg hvor stasjonen er?* — «Не подскажете, где вокзал?»' }
      ],
      vocab: [
        { id: 'nb-lure', w: 'lure', ru: 'задаваться вопросом (lure på); обманывать', pos: 'v', g: null, forms: 'lurer, lurte, har lurt', ex: 'Jeg lurer på om hun kommer.', exRu: 'Интересно, придёт ли она.', note: 'lure på — интересоваться, задумываться.' },
        { id: 'nb-forklare', w: 'forklare', ru: 'объяснять', pos: 'v', g: null, forms: 'forklarer, forklarte, har forklart', ex: 'Kan du forklare hva dette betyr?', exRu: 'Можешь объяснить, что это значит?', note: null },
        { id: 'nb-skjønne', w: 'skjønne', ru: 'понимать (разг.)', pos: 'v', g: null, forms: 'skjønner, skjønte, har skjønt', ex: 'Jeg skjønner ikke hvorfor han er sint.', exRu: 'Не понимаю, почему он злится.', note: null },
        { id: 'nb-svar', w: 'svar', ru: 'ответ', pos: 'n', g: 'n', forms: 'svaret, svar, svarene', ex: 'Takk for svaret!', exRu: 'Спасибо за ответ!', note: 'Глагол: svare (svarer, svarte, har svart).' },
        { id: 'nb-stasjon', w: 'stasjon', ru: 'станция, вокзал', pos: 'n', g: 'm', forms: 'stasjonen, stasjoner, stasjonene', ex: 'Kan du si meg hvor stasjonen er?', exRu: 'Не подскажете, где вокзал?', note: 'på stasjonen — на вокзале.' },
        { id: 'nb-vei', w: 'vei', ru: 'дорога, путь', pos: 'n', g: 'm', forms: 'veien, veier, veiene', ex: 'Vet du veien?', exRu: 'Ты знаешь дорогу?', note: null },
        { id: 'nb-sikker', w: 'sikker', ru: 'уверенный; надёжный, безопасный', pos: 'adj', g: null, forms: 'sikkert, sikre', ex: 'Er du sikker på det?', exRu: 'Ты в этом уверен?', note: 'sikkert — наверняка.' },
        { id: 'nb-enig', w: 'enig', ru: 'согласный', pos: 'adj', g: null, forms: 'enig, enige', ex: 'Jeg er enig med deg.', exRu: 'Я с тобой согласен.', note: 'Русское «согласен» — прилагательное с være.' },
        { id: 'nb-mulig', w: 'mulig', ru: 'возможный', pos: 'adj', g: null, forms: 'mulig, mulige', ex: 'Er det mulig å parkere her?', exRu: 'Здесь можно припарковаться?', note: null },
        { id: 'nb-beskjed', w: 'beskjed', ru: 'сообщение, известие', pos: 'n', g: 'm', forms: 'beskjeden, beskjeder, beskjedene', ex: 'Gi meg beskjed når du kommer.', exRu: 'Дай мне знать, когда придёшь.', note: 'gi beskjed — сообщить.' }
      ],
      text: null
    },
    {
      id: 'nb-u06-l05',
      kind: 'reading',
      title: 'Hvorfor jeg lærer norsk',
      goals: ['Узнавать все типы придаточных и инверсию после них'],
      skills: ['nb.syntax.subclause', 'nb.conj.time-cond', 'nb.syntax.relative', 'nb.syntax.indirect'],
      theory: [
        { type: 'p', text: 'Найдите в тексте: косвенный вопрос (*hvorfor jeg lærer*), *da* для однократного события, относительное *som*, BIFF (*som ikke snakker*), инверсию после придаточного (*Når jeg leser…, forstår jeg*).' }
      ],
      vocab: [
        { id: 'nb-grunn', w: 'grunn', ru: 'причина; основание; почва', pos: 'n', g: 'm', forms: 'grunnen, grunner, grunnene', ex: 'Av hvilken grunn?', exRu: 'По какой причине?', note: null },
        { id: 'nb-kultur', w: 'kultur', ru: 'культура', pos: 'n', g: 'm', forms: 'kulturen, kulturer, kulturene', ex: 'Hun er interessert i norsk kultur.', exRu: 'Она интересуется норвежской культурой.', note: null },
        { id: 'nb-bestefar', w: 'bestefar', ru: 'дедушка', pos: 'n', g: 'm', forms: 'bestefaren, bestefedre, bestefedrene', ex: 'Bestefaren min var sjømann.', exRu: 'Мой дедушка был моряком.', note: 'Также morfar / farfar — дедушка по матери / по отцу.' },
        { id: 'nb-bestemor', w: 'bestemor', ru: 'бабушка', pos: 'n', g: 'f', forms: 'bestemora, bestemødre, bestemødrene', ex: 'Bestemor baker de beste kakene.', exRu: 'Бабушка печёт лучшие пироги.', note: 'Допустимо: bestemoren. Также mormor / farmor.' },
        { id: 'nb-forelske-seg', w: 'forelske seg', ru: 'влюбляться', pos: 'v', g: null, forms: 'forelsker seg, forelsket seg, har forelsket seg', ex: 'Hun forelsket seg i en nordmann.', exRu: 'Она влюбилась в норвежца.', note: '+ i.' },
        { id: 'nb-stemme', w: 'stemme', ru: 'быть верным; голосовать', pos: 'v', g: null, forms: 'stemmer, stemte, har stemt', ex: 'Det stemmer!', exRu: 'Верно!', note: 'Сущ.: en stemme — голос.' }
      ],
      text: {
        title: 'Hvorfor jeg lærer norsk',
        lines: [
          { t: 'Mange spør meg hvorfor jeg lærer norsk.', ru: 'Многие спрашивают меня, почему я учу норвежский.' },
          { t: 'Det er flere grunner.', ru: 'Причин несколько.' },
          { t: 'Da jeg var tjue år, reiste jeg til Norge for første gang.', ru: 'Когда мне было двадцать, я впервые поехал в Норвегию.' },
          { t: 'Jeg forelsket meg i landet fordi naturen var så vakker.', ru: 'Я влюбился в эту страну, потому что природа была такой красивой.' },
          { t: 'Bestefaren min, som var sjømann, fortalte ofte om Norge.', ru: 'Мой дедушка, который был моряком, часто рассказывал о Норвегии.' },
          { t: 'Han sa at nordmenn er rolige mennesker som ikke snakker mye.', ru: 'Он говорил, что норвежцы — спокойные люди, которые мало говорят.' },
          { t: 'Jeg vet ikke om det stemmer, men jeg vil gjerne finne det ut.', ru: 'Не знаю, правда ли это, но я хотел бы это выяснить.' },
          { t: 'Når jeg leser norske bøker, forstår jeg mer av kulturen.', ru: 'Когда я читаю норвежские книги, я лучше понимаю культуру.' },
          { t: 'Selv om grammatikken ikke alltid er lett, synes jeg at språket er vakkert.', ru: 'Хотя грамматика не всегда простая, я считаю, что язык красивый.' },
          { t: 'Hvis alt går bra, skal jeg flytte til Bergen neste år.', ru: 'Если всё пойдёт хорошо, в следующем году я перееду в Берген.' }
        ]
      }
    }
  ]
};

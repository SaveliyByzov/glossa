export default {
  id: 'it-u04',
  title: 'Il passato prossimo',
  titleRu: 'Passato prossimo',
  summary: 'Образование passato prossimo, неправильные причастия, выбор вспомогательного глагола essere / avere и согласование причастия с подлежащим.',
  lessons: [
    {
      id: 'it-u04-l01',
      kind: 'grammar',
      title: 'Образование: avere + причастие',
      goals: ['Образовывать правильные причастия на -ato, -uto, -ito', 'Строить passato prossimo с avere', 'Ставить già, mai, ancora, appena между вспомогательным и причастием'],
      skills: ['it.pp.form'],
      theory: [
        { type: 'table', caption: 'Правильные причастия', head: ['инфинитив', 'причастие'],
          rows: [
            ['parl{{are}}', 'parl{{ato}}'],
            ['vend{{ere}}', 'vend{{uto}}'],
            ['dorm{{ire}}', 'dorm{{ito}}'],
            ['cap{{ire}}', 'cap{{ito}}']
          ] },
        { type: 'table', caption: 'Passato prossimo с avere', head: ['', 'mangiare'],
          rows: [
            ['io', 'ho mangiato'], ['tu', 'hai mangiato'], ['lui / lei', 'ha mangiato'],
            ['noi', 'abbiamo mangiato'], ['voi', 'avete mangiato'], ['loro', 'hanno mangiato']
          ],
          note: 'С avere причастие не согласуется с подлежащим: Maria ha mangiato.' },
        { type: 'rule', text: 'Passato prossimo — основное прошедшее время разговорной речи для законченных событий: **Ieri ho visto un film.** В северной и центральной Италии оно практически вытеснило из речи passato remoto.' },
        { type: 'examples', items: [
          { t: 'Hai già mangiato? — No, non ho ancora mangiato.', ru: 'Ты уже поел? — Нет, ещё не ел.' },
          { t: 'Non ho mai visto Venezia.', ru: 'Я никогда не видел Венецию.' },
          { t: 'Ho appena finito.', ru: 'Я только что закончил.' }
        ] },
        { type: 'rule', text: 'Наречия **già, mai, ancora, appena, sempre** обычно стоят между вспомогательным глаголом и причастием.' },
        { type: 'pitfall', text: 'Двойное отрицание обязательно: **Non ho mai…**, **Non ho visto nessuno**, **Non ho fatto niente** — как в русском «ничего не сделал».' }
      ],
      vocab: [
        { id: 'it-ieri', w: 'ieri', ru: 'вчера', pos: 'adv', g: null, forms: null, ex: 'Ieri ho lavorato molto.', exRu: 'Вчера я много работал.', note: 'l’altro ieri — позавчера' },
        { id: 'it-scorso', w: 'scorso', ru: 'прошлый', pos: 'adj', g: null, forms: 'scorso, -a, -i, -e', ex: 'La settimana scorsa.', exRu: 'На прошлой неделе.', note: null },
        { id: 'it-settimana', w: 'settimana', ru: 'неделя', pos: 'n', g: 'f', forms: 'la settimana, -e', ex: 'Una settimana fa.', exRu: 'Неделю назад.', note: null },
        { id: 'it-gia', w: 'già', ru: 'уже', pos: 'adv', g: null, forms: null, ex: 'Ho già pagato.', exRu: 'Я уже заплатил.', note: null },
        { id: 'it-ancora', w: 'ancora', ru: 'ещё', pos: 'adv', g: null, forms: null, ex: 'Non ho ancora deciso.', exRu: 'Я ещё не решил.', note: 'ударение: àncora (l’àncora — якорь, то же написание)' },
        { id: 'it-mai', w: 'mai', ru: 'никогда; когда-либо', pos: 'adv', g: null, forms: null, ex: 'Sei mai stato in Sicilia?', exRu: 'Ты когда-нибудь был на Сицилии?', note: 'non… mai' },
        { id: 'it-appena', w: 'appena', ru: 'только что; как только', pos: 'adv', g: null, forms: null, ex: 'È appena uscito.', exRu: 'Он только что вышел.', note: null },
        { id: 'it-sempre', w: 'sempre', ru: 'всегда', pos: 'adv', g: null, forms: null, ex: 'Ho sempre amato il mare.', exRu: 'Я всегда любил море.', note: null },
        { id: 'it-niente', w: 'niente', ru: 'ничто, ничего', pos: 'pron', g: null, forms: 'syn. nulla', ex: 'Non ho fatto niente.', exRu: 'Я ничего не сделал.', note: null },
        { id: 'it-nessuno', w: 'nessuno', ru: 'никто; ни один', pos: 'pron', g: null, forms: 'nessuno, -a; adj. nessun', ex: 'Non ho visto nessuno.', exRu: 'Я никого не видел.', note: null },
        { id: 'it-vendere', w: 'vendere', ru: 'продавать', pos: 'v', g: null, forms: 'vendo; venduto (avere)', ex: 'Hanno venduto la casa.', exRu: 'Они продали дом.', note: null },
        { id: 'it-ascoltare', w: 'ascoltare', ru: 'слушать', pos: 'v', g: null, forms: 'ascolto; ascoltato (avere)', ex: 'Abbiamo ascoltato un concerto.', exRu: 'Мы слушали концерт.', note: 'переходный: ascoltare la radio (без предлога)' },
        { id: 'it-guardare', w: 'guardare', ru: 'смотреть', pos: 'v', g: null, forms: 'guardo; guardato (avere)', ex: 'Ho guardato la partita.', exRu: 'Я смотрел матч.', note: null },
        { id: 'it-telefonare', w: 'telefonare', ru: 'звонить (по телефону)', pos: 'v', g: null, forms: 'telèfono; telefonato (avere)', ex: 'Ho telefonato a Luca.', exRu: 'Я позвонил Луке.', note: 'telefonare a qn' }
      ],
      text: null
    },
    {
      id: 'it-u04-l02',
      kind: 'grammar',
      title: 'Неправильные причастия',
      goals: ['Знать ~30 частотных неправильных причастий', 'Опираться на группы -so, -to, -sto'],
      skills: ['it.pp.irregular'],
      theory: [
        { type: 'table', caption: 'Группы неправильных причастий', head: ['тип', 'примеры'],
          rows: [
            ['-tto', 'fare → fa{{tto}}, dire → de{{tto}}, scrivere → scri{{tto}}, leggere → le{{tto}}, rompere → ro{{tto}}, tradurre → trado{{tto}}'],
            ['-so', 'prendere → pre{{so}}, mettere → me{{sso}}, chiudere → chiu{{so}}, decidere → deci{{so}}, spendere → spe{{so}}, perdere → per{{so}}, scendere → sce{{so}}, ridere → ri{{so}}, accendere → acce{{so}}'],
            ['-sto', 'vedere → vi{{sto}}, chiedere → chie{{sto}}, rispondere → rispo{{sto}}, rimanere → rima{{sto}}'],
            ['-rto', 'aprire → ape{{rto}}, offrire → offe{{rto}}, morire → mo{{rto}}'],
            ['-nto', 'vincere → vi{{nto}}, spegnere → spe{{nto}}, piangere → pia{{nto}}'],
            ['прочие', 'essere → stato, nascere → nato, venire → venuto, vivere → vissuto, bere → bevuto, scegliere → scelto, succedere → successo, conoscere → conosciuto']
          ] },
        { type: 'tip', text: 'Большинство этих форм восходят к латинским сильным супинным основам: factum → fatto, dictum → detto, scriptum → scritto, positum/missum → messo. Если вы знаете латынь, причастие часто угадывается.' },
        { type: 'examples', items: [
          { t: 'Che cosa hai detto?', ru: 'Что ты сказал?' },
          { t: 'Abbiamo preso un taxi.', ru: 'Мы взяли такси.' },
          { t: 'Ho perso il portafoglio.', ru: 'Я потерял кошелёк.' },
          { t: 'Chi ha vinto?', ru: 'Кто выиграл?' }
        ] },
        { type: 'pitfall', text: '*Ho prenduto, *ho metuto, *ho apruto — типичные ошибки по аналогии с правильными. Также не путайте **letto** (прочитанный; кровать) и **detto** (сказанный).' }
      ],
      vocab: [
        { id: 'it-mettere', w: 'mettere', ru: 'класть, ставить; надевать', pos: 'v', g: null, forms: 'metto; messo (avere)', ex: 'Dove hai messo le chiavi?', exRu: 'Куда ты положил ключи?', note: null },
        { id: 'it-chiudere', w: 'chiudere', ru: 'закрывать', pos: 'v', g: null, forms: 'chiudo; chiuso (avere)', ex: 'Ho chiuso la porta.', exRu: 'Я закрыл дверь.', note: null },
        { id: 'it-decidere', w: 'decidere', ru: 'решать', pos: 'v', g: null, forms: 'decido; deciso (avere)', ex: 'Abbiamo deciso di partire.', exRu: 'Мы решили уехать.', note: 'decidere di + inf.' },
        { id: 'it-perdere', w: 'perdere', ru: 'терять; опаздывать (на транспорт)', pos: 'v', g: null, forms: 'perdo; perso / perduto (avere)', ex: 'Ho perso il treno.', exRu: 'Я опоздал на поезд.', note: null },
        { id: 'it-spendere', w: 'spendere', ru: 'тратить', pos: 'v', g: null, forms: 'spendo; speso (avere)', ex: 'Quanto hai speso?', exRu: 'Сколько ты потратил?', note: null },
        { id: 'it-vedere', w: 'vedere', ru: 'видеть', pos: 'v', g: null, forms: 'vedo; visto (avere)', ex: 'Hai visto Marco?', exRu: 'Ты видел Марко?', note: null },
        { id: 'it-chiedere', w: 'chiedere', ru: 'спрашивать; просить', pos: 'v', g: null, forms: 'chiedo; chiesto (avere)', ex: 'Ho chiesto un’informazione.', exRu: 'Я навёл справку.', note: 'chiedere a qn — спросить кого-то' },
        { id: 'it-rispondere', w: 'rispondere', ru: 'отвечать', pos: 'v', g: null, forms: 'rispondo; risposto (avere)', ex: 'Non ha risposto.', exRu: 'Он не ответил.', note: 'rispondere a qn/qc' },
        { id: 'it-scegliere', w: 'scegliere', ru: 'выбирать', pos: 'v', g: null, forms: 'scelgo, scegli; scelto (avere)', ex: 'Hai scelto?', exRu: 'Ты выбрал?', note: null },
        { id: 'it-vincere', w: 'vincere', ru: 'побеждать, выигрывать', pos: 'v', g: null, forms: 'vinco, vinci; vinto (avere)', ex: 'L’Italia ha vinto.', exRu: 'Италия выиграла.', note: null },
        { id: 'it-rompere', w: 'rompere', ru: 'ломать, разбивать', pos: 'v', g: null, forms: 'rompo; rotto (avere)', ex: 'Ho rotto un bicchiere.', exRu: 'Я разбил стакан.', note: null },
        { id: 'it-porta', w: 'porta', ru: 'дверь', pos: 'n', g: 'f', forms: 'la porta, -e', ex: 'Chiudi la porta!', exRu: 'Закрой дверь!', note: null },
        { id: 'it-portafoglio', w: 'portafoglio', ru: 'кошелёк, бумажник', pos: 'n', g: 'm', forms: 'il portafoglio, i portafogli', ex: 'Il portafoglio è vuoto.', exRu: 'Кошелёк пуст.', note: null },
        { id: 'it-bicchiere', w: 'bicchiere', ru: 'стакан, бокал', pos: 'n', g: 'm', forms: 'il bicchiere, -i', ex: 'Un bicchiere d’acqua.', exRu: 'Стакан воды.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u04-l03',
      kind: 'grammar',
      title: 'Essere или avere?',
      goals: ['Выбирать вспомогательный глагол', 'Согласовывать причастие с подлежащим при essere', 'Знать глаголы с двумя вспомогательными'],
      skills: ['it.pp.aux', 'it.pp.agree-subj'],
      theory: [
        { type: 'rule', text: '**avere** — все переходные глаголы (с прямым дополнением) и часть непереходных (dormire, lavorare, camminare, viaggiare, ridere, piangere). **essere** — непереходные глаголы движения к цели и изменения состояния, глаголы состояния, все возвратные и essere/stare/piacere.' },
        { type: 'table', caption: 'Частые глаголы с essere', head: ['группа', 'глаголы'],
          rows: [
            ['движение/направление', 'andare, venire, arrivare, partire, entrare, uscire, tornare, cadere'],
            ['изменение состояния', 'nascere, morire, diventare, crescere'],
            ['пребывание', 'essere, stare, restare, rimanere'],
            ['«дательные»', 'piacere, sembrare, mancare, bastare, servire, succedere, costare'],
            ['возвратные', 'alzarsi, svegliarsi, divertirsi, sentirsi…']
          ] },
        { type: 'table', caption: 'Согласование при essere', head: ['', 'andare'],
          rows: [
            ['io', 'sono andat{{o}} / andat{{a}}'], ['tu', 'sei andat{{o}} / andat{{a}}'], ['lui / lei', 'è andat{{o}} / andat{{a}}'],
            ['noi', 'siamo andat{{i}} / andat{{e}}'], ['voi', 'siete andat{{i}} / andat{{e}}'], ['loro', 'sono andat{{i}} / andat{{e}}']
          ] },
        { type: 'p', text: 'Филологически: essere получают неаккузативные глаголы (подлежащее — «претерпевающий», как прямое дополнение: il treno è arrivato), avere — неэргативные (подлежащее — деятель: ho dormito, ho lavorato).' },
        { type: 'examples', items: [
          { t: 'Ho finito il lavoro. — Il film è finito.', ru: 'Я закончил работу (перех.) — Фильм закончился (неперех.).' },
          { t: 'Ho salito le scale. — Sono salito al terzo piano.', ru: 'Я поднялся по лестнице (перех.) — Я поднялся на третий этаж.' },
          { t: 'Ho corso per un’ora. — Sono corso a casa.', ru: 'Бегал час (процесс) — Побежал домой (цель).' },
          { t: 'Ho cambiato casa. — Marco è cambiato molto.', ru: 'Я переехал (сменил дом) — Марко очень изменился.' }
        ] },
        { type: 'rule', text: 'Модальный глагол может брать вспомогательный от инфинитива: **Sono dovuto partire** / **Ho dovuto partire** (оба нормативны; первое — более книжное). Но **Ho dovuto lavorare** — только avere.' },
        { type: 'pitfall', text: 'Русскоязычные часто ставят avere везде: *Ho andato. Проверочный вопрос: может ли у глагола быть прямое дополнение? Нет + движение/изменение → essere. **vivere** допускает оба: ho vissuto / sono vissuto.' }
      ],
      vocab: [
        { id: 'it-arrivare', w: 'arrivare', ru: 'прибывать, приходить', pos: 'v', g: null, forms: 'arrivo; arrivato (essere)', ex: 'Siamo arrivati tardi.', exRu: 'Мы приехали поздно.', note: null },
        { id: 'it-tornare', w: 'tornare', ru: 'возвращаться', pos: 'v', g: null, forms: 'torno; tornato (essere)', ex: 'Quando sei tornata?', exRu: 'Когда ты вернулась?', note: null },
        { id: 'it-entrare', w: 'entrare', ru: 'входить', pos: 'v', g: null, forms: 'entro; entrato (essere)', ex: 'È entrato senza bussare.', exRu: 'Он вошёл без стука.', note: null },
        { id: 'it-cadere', w: 'cadere', ru: 'падать', pos: 'v', g: null, forms: 'cado; caduto (essere)', ex: 'È caduta dalla bici.', exRu: 'Она упала с велосипеда.', note: null },
        { id: 'it-nascere', w: 'nascere', ru: 'рождаться', pos: 'v', g: null, forms: 'nasco; nato (essere)', ex: 'Sono nato a Kazan.', exRu: 'Я родился в Казани.', note: null },
        { id: 'it-morire', w: 'morire', ru: 'умирать', pos: 'v', g: null, forms: 'muoio, muori; morto (essere)', ex: 'Dante è morto a Ravenna.', exRu: 'Данте умер в Равенне.', note: null },
        { id: 'it-diventare', w: 'diventare', ru: 'становиться', pos: 'v', g: null, forms: 'divento; diventato (essere)', ex: 'È diventata medico.', exRu: 'Она стала врачом.', note: null },
        { id: 'it-restare', w: 'restare', ru: 'оставаться', pos: 'v', g: null, forms: 'resto; restato (essere)', ex: 'Siamo restati a casa.', exRu: 'Мы остались дома.', note: null },
        { id: 'it-succedere', w: 'succedere', ru: 'случаться', pos: 'v', g: null, forms: 'succede; successo (essere)', ex: 'Che cosa è successo?', exRu: 'Что случилось?', note: null },
        { id: 'it-costare', w: 'costare', ru: 'стоить', pos: 'v', g: null, forms: 'costa; costato (essere)', ex: 'Quanto è costato?', exRu: 'Сколько это стоило?', note: null },
        { id: 'it-salire', w: 'salire', ru: 'подниматься; садиться (в транспорт)', pos: 'v', g: null, forms: 'salgo, sali; salito (essere / avere)', ex: 'Sono salito sul treno.', exRu: 'Я сел в поезд.', note: 'перех. (salire le scale) → avere' },
        { id: 'it-scendere', w: 'scendere', ru: 'спускаться; выходить (из транспорта)', pos: 'v', g: null, forms: 'scendo; sceso (essere / avere)', ex: 'Scendo alla prossima fermata.', exRu: 'Выхожу на следующей остановке.', note: null },
        { id: 'it-correre', w: 'correre', ru: 'бегать, бежать', pos: 'v', g: null, forms: 'corro; corso (avere / essere)', ex: 'Ho corso dieci chilometri.', exRu: 'Я пробежал десять километров.', note: null },
        { id: 'it-camminare', w: 'camminare', ru: 'ходить, гулять пешком', pos: 'v', g: null, forms: 'cammino; camminato (avere)', ex: 'Abbiamo camminato tanto.', exRu: 'Мы много ходили.', note: 'неперех., но avere' },
        { id: 'it-viaggiare', w: 'viaggiare', ru: 'путешествовать', pos: 'v', g: null, forms: 'viaggio; viaggiato (avere)', ex: 'Ho viaggiato molto.', exRu: 'Я много путешествовал.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u04-l04',
      kind: 'reading',
      title: 'Un weekend a Firenze',
      goals: ['Читать рассказ в passato prossimo', 'Замечать выбор essere / avere и согласование'],
      skills: ['it.pp.aux', 'it.pp.irregular', 'it.pp.agree-subj'],
      theory: [],
      vocab: [
        { id: 'it-weekend', w: 'weekend', ru: 'выходные', pos: 'n', g: 'm', forms: 'il weekend, i weekend', ex: 'Buon weekend!', exRu: 'Хороших выходных!', note: 'также il fine settimana' },
        { id: 'it-albergo', w: 'albergo', ru: 'гостиница', pos: 'n', g: 'm', forms: 'l’albergo, gli alberghi', ex: 'L’albergo è vicino al Duomo.', exRu: 'Гостиница рядом с собором.', note: null },
        { id: 'it-museo', w: 'museo', ru: 'музей', pos: 'n', g: 'm', forms: 'il museo, -i', ex: 'Il museo è chiuso il lunedì.', exRu: 'Музей закрыт по понедельникам.', note: null },
        { id: 'it-fila', w: 'fila', ru: 'очередь; ряд', pos: 'n', g: 'f', forms: 'la fila, -e', ex: 'Abbiamo fatto la fila.', exRu: 'Мы отстояли очередь.', note: 'fare la fila' },
        { id: 'it-quadro', w: 'quadro', ru: 'картина', pos: 'n', g: 'm', forms: 'il quadro, -i', ex: 'Un quadro di Botticelli.', exRu: 'Картина Боттичелли.', note: null },
        { id: 'it-ponte', w: 'ponte', ru: 'мост', pos: 'n', g: 'm', forms: 'il ponte, -i', ex: 'Il Ponte Vecchio.', exRu: 'Понте-Веккьо (Старый мост).', note: null },
        { id: 'it-tramonto', w: 'tramonto', ru: 'закат', pos: 'n', g: 'm', forms: 'il tramonto, -i', ex: 'Che bel tramonto!', exRu: 'Какой красивый закат!', note: null },
        { id: 'it-stanchezza', w: 'stanchezza', ru: 'усталость', pos: 'n', g: 'f', forms: 'la stanchezza', ex: 'Morivo di stanchezza.', exRu: 'Я умирал от усталости.', note: null }
      ],
      text: {
        title: 'Un weekend a Firenze',
        lines: [
          { t: 'Sabato mattina io e Chiara siamo partite presto da Milano.', ru: 'В субботу утром мы с Кьярой рано выехали из Милана.' },
          { t: 'Siamo arrivate a Firenze alle dieci e abbiamo lasciato le valigie in albergo.', ru: 'Мы приехали во Флоренцию в десять и оставили чемоданы в гостинице.' },
          { t: 'Agli Uffizi abbiamo fatto un’ora di fila, ma ne è valsa la pena.', ru: 'В Уффици мы отстояли час в очереди, но оно того стоило.' },
          { t: 'Abbiamo visto i quadri di Botticelli e Chiara ha comprato un libro sul Rinascimento.', ru: 'Мы видели картины Боттичелли, а Кьяра купила книгу о Возрождении.' },
          { t: 'Per pranzo abbiamo mangiato una ribollita in una piccola trattoria.', ru: 'На обед мы съели риболлиту в маленькой траттории.' },
          { t: 'Il pomeriggio siamo salite a Piazzale Michelangelo e siamo rimaste lì fino al tramonto.', ru: 'Днём мы поднялись на площадь Микеланджело и оставались там до заката.' },
          { t: 'La sera siamo tornate in albergo stanchissime.', ru: 'Вечером мы вернулись в гостиницу смертельно уставшими.' },
          { t: 'Domenica abbiamo passeggiato sul Ponte Vecchio e poi siamo ripartite.', ru: 'В воскресенье мы погуляли по Понте-Веккьо, а потом уехали обратно.' }
        ]
      }
    }
  ]
}

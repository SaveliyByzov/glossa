export default {
  id: 'it-u01',
  title: 'Il nome, l’articolo, l’aggettivo',
  titleRu: 'Существительное, артикль, прилагательное',
  summary: 'Род и число существительных, определённый и неопределённый артикль, согласование прилагательных, essere и avere.',
  lessons: [
    {
      id: 'it-u01-l01',
      kind: 'grammar',
      title: 'Род и число существительных',
      goals: ['Определять род по окончанию и знать главные исключения', 'Образовывать мн. ч., включая -co/-go, -ca/-ga и неизменяемые'],
      skills: ['it.noun.gender', 'it.noun.plural'],
      theory: [
        { type: 'rule', text: 'Два рода — мужской и женский; среднего нет. Основная модель: **-o** (м.) → **-i**, **-a** (ж.) → **-e**, **-e** (м. или ж.) → **-i**.' },
        { type: 'table', caption: 'Основные типы', head: ['', 'ед. ч.', 'мн. ч.'],
          rows: [
            ['м. на -o', 'il libr{{o}}', 'i libr{{i}}'],
            ['ж. на -a', 'la cas{{a}}', 'le cas{{e}}'],
            ['м. на -e', 'il pan{{e}}', 'i pan{{i}}'],
            ['ж. на -e', 'la chiav{{e}}', 'le chiav{{i}}'],
            ['м. на -a', 'il problem{{a}}', 'i problem{{i}}']
          ],
          note: 'Род существительных на -e надо запоминать вместе со словом. Подсказки: -ore — обычно м. (il fiore, il dottore), -ione — обычно ж. (la lezione, la stazione).' },
        { type: 'h', text: 'Неизменяемые во мн. ч.' },
        { type: 'p', text: 'Не меняются: слова с ударением на последнем слоге (**la città → le città**), односложные (**il re → i re**), иностранные (**il film → i film**, **lo sport → gli sport**), сокращённые (**la foto → le foto**, **il cinema → i cinema**), на -i (**la crisi → le crisi**). Число видно только по артиклю.' },
        { type: 'h', text: 'Орфография: -co/-go, -ca/-ga' },
        { type: 'table', head: ['тип', 'ед. ч.', 'мн. ч.'],
          rows: [
            ['-ca, -ga (всегда)', 'l’amica, la riga', 'le ami{{che}}, le ri{{ghe}}'],
            ['-co, -go, ударение на предпоследнем', 'il gioco, il lago', 'i gio{{chi}}, i la{{ghi}}'],
            ['-co, -go, ударение на третьем от конца', 'il mèdico, lo psicòlogo', 'i medi{{ci}}, gli psicolo{{gi}}'],
            ['исключения', 'l’amico, il greco, il nemico', 'gli ami{{ci}}, i gre{{ci}}, i nemi{{ci}}']
          ],
          note: 'Буквы h сохраняют твёрдое [k]/[g] перед i, e.' },
        { type: 'h', text: 'Неправильные формы' },
        { type: 'examples', items: [
          { t: 'l’uomo → gli uomini', ru: 'человек, мужчина → люди, мужчины' },
          { t: 'la mano → le mani', ru: 'рука (кисть) — женский род на -o' },
          { t: 'l’uovo → le uova', ru: 'яйцо → яйца: мн. ч. женского рода на -a' },
          { t: 'il braccio → le braccia; il dito → le dita', ru: 'рука → руки; палец → пальцы' }
        ] },
        { type: 'tip', text: 'Формы **le uova, le braccia, le dita** — реликт латинского среднего рода мн. ч. на -a (ova, bracchia, digita). Отсюда «женское» согласование: le uova so{{no}} fresch{{e}}.' },
        { type: 'contrast', text: 'Род в итальянском и русском часто не совпадает: **il latte** (м.) — молоко (ср.), **la frutta** (ж., собир. ед. ч.) — фрукты, **il mare** — море. Не переносите русский род.' },
        { type: 'pitfall', text: 'Слова на -ista имеют общий род: **il turista / la turista**, но мн. ч. различается: **i turisti / le turiste**.' }
      ],
      vocab: [
        { id: 'it-libro', w: 'libro', ru: 'книга', pos: 'n', g: 'm', forms: 'il libro, -i', ex: 'Il libro è sul tavolo.', exRu: 'Книга на столе.', note: null },
        { id: 'it-casa', w: 'casa', ru: 'дом', pos: 'n', g: 'f', forms: 'la casa, -e', ex: 'La casa è grande.', exRu: 'Дом большой.', note: 'a casa — дома / домой' },
        { id: 'it-pane', w: 'pane', ru: 'хлеб', pos: 'n', g: 'm', forms: 'il pane, -i', ex: 'Il pane è fresco.', exRu: 'Хлеб свежий.', note: null },
        { id: 'it-chiave', w: 'chiave', ru: 'ключ', pos: 'n', g: 'f', forms: 'la chiave, -i', ex: 'Dov’è la chiave?', exRu: 'Где ключ?', note: null },
        { id: 'it-problema', w: 'problema', ru: 'проблема', pos: 'n', g: 'm', forms: 'il problema, i problemi', ex: 'Non è un problema.', exRu: 'Это не проблема.', note: 'м. р. на -a (греч. -ma)' },
        { id: 'it-citta', w: 'città', ru: 'город', pos: 'n', g: 'f', forms: 'la città, le città', ex: 'Roma è una città antica.', exRu: 'Рим — древний город.', note: 'неизменяемое' },
        { id: 'it-uomo', w: 'uomo', ru: 'человек; мужчина', pos: 'n', g: 'm', forms: 'l’uomo, gli uomini', ex: 'Quell’uomo è mio zio.', exRu: 'Тот мужчина — мой дядя.', note: null },
        { id: 'it-donna', w: 'donna', ru: 'женщина', pos: 'n', g: 'f', forms: 'la donna, -e', ex: 'La donna legge.', exRu: 'Женщина читает.', note: null },
        { id: 'it-mano', w: 'mano', ru: 'рука (кисть)', pos: 'n', g: 'f', forms: 'la mano, le mani', ex: 'Ho le mani fredde.', exRu: 'У меня холодные руки.', note: 'ж. р. на -o' },
        { id: 'it-uovo', w: 'uovo', ru: 'яйцо', pos: 'n', g: 'm', forms: 'l’uovo, le uova (ж.)', ex: 'Compro sei uova.', exRu: 'Я покупаю шесть яиц.', note: null },
        { id: 'it-amico', w: 'amico', ru: 'друг', pos: 'n', g: 'm', forms: 'l’amico, gli amici; l’amica, le amiche', ex: 'Marco è un amico.', exRu: 'Марко — друг.', note: 'amici — исключение (не *amichi)' },
        { id: 'it-medico', w: 'medico', ru: 'врач', pos: 'n', g: 'm', forms: 'il medico, i medici', ex: 'Il medico arriva alle nove.', exRu: 'Врач приходит в девять.', note: 'ударение: mèdico' },
        { id: 'it-film', w: 'film', ru: 'фильм', pos: 'n', g: 'm', forms: 'il film, i film', ex: 'Stasera guardiamo un film.', exRu: 'Сегодня вечером смотрим фильм.', note: 'неизменяемое' },
        { id: 'it-lezione', w: 'lezione', ru: 'урок, занятие', pos: 'n', g: 'f', forms: 'la lezione, -i', ex: 'La lezione comincia alle dieci.', exRu: 'Урок начинается в десять.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u01-l02',
      kind: 'grammar',
      title: 'Определённый артикль',
      goals: ['Выбирать il / lo / l’ / la / i / gli / le по началу слова', 'Знать, где итальянский требует артикль, а русский его не имеет'],
      skills: ['it.art.def'],
      theory: [
        { type: 'table', caption: 'Определённый артикль', head: ['', 'м. ед.', 'м. мн.', 'ж. ед.', 'ж. мн.'],
          rows: [
            ['перед согласной', '{{il}} libro', '{{i}} libri', '{{la}} casa', '{{le}} case'],
            ['s + согл., z, gn, ps, x, y', '{{lo}} studente, {{lo}} zio', '{{gli}} studenti, {{gli}} zii', '{{la}} scuola', '{{le}} scuole'],
            ['перед гласной', '{{l’}}amico', '{{gli}} amici', '{{l’}}amica', '{{le}} amiche']
          ] },
        { type: 'rule', text: 'Артикль выбирается по **первому звуку следующего слова**, а не существительного: **lo** studente, но **il** bravo studente; **gli** amici, но **i** miei amici.' },
        { type: 'h', text: 'Когда артикль нужен' },
        { type: 'examples', items: [
          { t: 'Amo la musica.', ru: 'Я люблю музыку (обобщённое значение).' },
          { t: 'L’Italia è bella.', ru: 'Италия красива (страны — с артиклем).' },
          { t: 'Roma è la capitale.', ru: 'Рим — столица (города — без артикля).' },
          { t: 'Il signor Rossi non c’è.', ru: 'Синьора Росси нет (титул + фамилия — с артиклем).' },
          { t: 'Sono le tre.', ru: 'Три часа (le [ore] tre).' }
        ] },
        { type: 'contrast', text: 'В русском артикля нет, поэтому главная ошибка — пропуск: *Amo musica. По-итальянски существительное в роли подлежащего или дополнения почти всегда с детерминатором (артикль, указательное, притяжательное).' },
        { type: 'pitfall', text: 'При обращении артикль не ставится: **Buongiorno, signor Rossi!** — но **Il signor Rossi** è qui.' },
        { type: 'tip', text: 'il/lo/la — из латинского указательного ILLE, ILLUM, ILLA (ср. франц. le/la, исп. el/la).' }
      ],
      vocab: [
        { id: 'it-studente', w: 'studente', ru: 'студент', pos: 'n', g: 'm', forms: 'lo studente, gli studenti; la studentessa, -e', ex: 'Lo studente studia.', exRu: 'Студент учится.', note: null },
        { id: 'it-zio', w: 'zio', ru: 'дядя', pos: 'n', g: 'm', forms: 'lo zio, gli zii; la zia, le zie', ex: 'Lo zio abita a Napoli.', exRu: 'Дядя живёт в Неаполе.', note: null },
        { id: 'it-scuola', w: 'scuola', ru: 'школа', pos: 'n', g: 'f', forms: 'la scuola, -e', ex: 'La scuola è chiusa.', exRu: 'Школа закрыта.', note: null },
        { id: 'it-specchio', w: 'specchio', ru: 'зеркало', pos: 'n', g: 'm', forms: 'lo specchio, gli specchi', ex: 'Lo specchio è rotto.', exRu: 'Зеркало разбито.', note: null },
        { id: 'it-zaino', w: 'zaino', ru: 'рюкзак', pos: 'n', g: 'm', forms: 'lo zaino, gli zaini', ex: 'Lo zaino è pesante.', exRu: 'Рюкзак тяжёлый.', note: null },
        { id: 'it-albero', w: 'albero', ru: 'дерево', pos: 'n', g: 'm', forms: 'l’albero, gli alberi', ex: 'L’albero è alto.', exRu: 'Дерево высокое.', note: 'ударение: àlbero' },
        { id: 'it-acqua', w: 'acqua', ru: 'вода', pos: 'n', g: 'f', forms: 'l’acqua, -e', ex: 'L’acqua è fredda.', exRu: 'Вода холодная.', note: null },
        { id: 'it-ora', w: 'ora', ru: 'час; время', pos: 'n', g: 'f', forms: 'l’ora, -e', ex: 'Che ora è? — Sono le due.', exRu: 'Который час? — Два.', note: 'adv. ora — сейчас' },
        { id: 'it-musica', w: 'musica', ru: 'музыка', pos: 'n', g: 'f', forms: 'la musica', ex: 'Amo la musica italiana.', exRu: 'Люблю итальянскую музыку.', note: null },
        { id: 'it-signore', w: 'signore', ru: 'господин, синьор', pos: 'n', g: 'm', forms: 'il signore, -i; signor + фамилия', ex: 'Il signor Bianchi è medico.', exRu: 'Господин Бьянки — врач.', note: 'перед именем усечение: signor' },
        { id: 'it-signora', w: 'signora', ru: 'госпожа, синьора', pos: 'n', g: 'f', forms: 'la signora, -e', ex: 'Buonasera, signora!', exRu: 'Добрый вечер, синьора!', note: null },
        { id: 'it-paese', w: 'paese', ru: 'страна; деревня, городок', pos: 'n', g: 'm', forms: 'il paese, -i', ex: 'È un paese piccolo.', exRu: 'Это маленький городок.', note: null },
        { id: 'it-lavoro', w: 'lavoro', ru: 'работа', pos: 'n', g: 'm', forms: 'il lavoro, -i', ex: 'Il lavoro è interessante.', exRu: 'Работа интересная.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u01-l03',
      kind: 'grammar',
      title: 'Неопределённый артикль и прилагательное',
      goals: ['Выбирать un / uno / una / un’', 'Согласовывать прилагательные в роде и числе', 'Понимать позицию прилагательного и формы bello, buono'],
      skills: ['it.art.indef', 'it.adj.agree'],
      theory: [
        { type: 'table', caption: 'Неопределённый артикль', head: ['', 'м.', 'ж.'],
          rows: [
            ['перед согласной', '{{un}} libro', '{{una}} casa'],
            ['s + согл., z, gn, ps', '{{uno}} studente', '{{una}} studentessa'],
            ['перед гласной', '{{un}} amico', '{{un’}}amica']
          ] },
        { type: 'pitfall', text: 'Апостроф только в женском роде: **un’amica**, но **un amico**: un — усечение (troncamento), которое апострофом не обозначается, а un’ — элизия una.' },
        { type: 'h', text: 'Прилагательные' },
        { type: 'table', head: ['тип', 'м. ед.', 'ж. ед.', 'м. мн.', 'ж. мн.'],
          rows: [
            ['-o / -a', 'nuov{{o}}', 'nuov{{a}}', 'nuov{{i}}', 'nuov{{e}}'],
            ['-e', 'grand{{e}}', 'grand{{e}}', 'grand{{i}}', 'grand{{i}}']
          ],
          note: 'При подлежащих разного рода — м. р. мн. ч.: Marco e Anna sono stanch{{i}}.' },
        { type: 'rule', text: 'Обычная позиция — **после** существительного: una macchina rossa. Перед ним стоят частые оценочные (bello, buono, brutto, grande, piccolo, nuovo, vecchio, bravo), причём позиция может менять смысл.' },
        { type: 'examples', items: [
          { t: 'un uomo grande — un grande uomo', ru: 'крупный мужчина — великий человек' },
          { t: 'un amico vecchio — un vecchio amico', ru: 'пожилой друг — давний друг' },
          { t: 'un bel libro, un bell’albero, una bella casa, dei bei libri, dei begli occhi', ru: 'bello перед сущ. изменяется как определённый артикль' },
          { t: 'un buon vino, un buono studente, una buona idea', ru: 'buono перед сущ. — как неопределённый артикль' }
        ] },
        { type: 'contrast', text: 'Порядок «прилагательное + существительное» в русском нейтрален, в итальянском это обычно маркированная, оценочная позиция.' }
      ],
      vocab: [
        { id: 'it-nuovo', w: 'nuovo', ru: 'новый', pos: 'adj', g: null, forms: 'nuovo, -a, -i, -e', ex: 'Ho un telefono nuovo.', exRu: 'У меня новый телефон.', note: null },
        { id: 'it-vecchio', w: 'vecchio', ru: 'старый', pos: 'adj', g: null, forms: 'vecchio, -a, vecchi, vecchie', ex: 'È un vecchio amico.', exRu: 'Это давний друг.', note: null },
        { id: 'it-grande', w: 'grande', ru: 'большой; великий', pos: 'adj', g: null, forms: 'grande, -i', ex: 'Milano è una città grande.', exRu: 'Милан — большой город.', note: null },
        { id: 'it-piccolo', w: 'piccolo', ru: 'маленький', pos: 'adj', g: null, forms: 'piccolo, -a, -i, -e', ex: 'Abito in un piccolo paese.', exRu: 'Я живу в маленьком городке.', note: 'ударение: pìccolo' },
        { id: 'it-bello', w: 'bello', ru: 'красивый', pos: 'adj', g: null, forms: 'bello, -a, -i, -e; перед сущ.: bel, bell’, bei, begli', ex: 'Che bel tempo!', exRu: 'Какая хорошая погода!', note: null },
        { id: 'it-buono', w: 'buono', ru: 'хороший; вкусный', pos: 'adj', g: null, forms: 'buono, -a, -i, -e; перед сущ.: buon', ex: 'Questa pizza è buona.', exRu: 'Эта пицца вкусная.', note: null },
        { id: 'it-brutto', w: 'brutto', ru: 'некрасивый; плохой', pos: 'adj', g: null, forms: 'brutto, -a, -i, -e', ex: 'Oggi fa brutto tempo.', exRu: 'Сегодня плохая погода.', note: null },
        { id: 'it-bravo', w: 'bravo', ru: 'умелый, хороший (о человеке)', pos: 'adj', g: null, forms: 'bravo, -a, -i, -e', ex: 'È una brava insegnante.', exRu: 'Она хорошая учительница.', note: 'не «храбрый»! (храбрый — coraggioso)' },
        { id: 'it-giovane', w: 'giovane', ru: 'молодой', pos: 'adj', g: null, forms: 'giovane, -i', ex: 'Mio padre è ancora giovane.', exRu: 'Мой отец ещё молод.', note: 'ударение: giòvane' },
        { id: 'it-stanco', w: 'stanco', ru: 'усталый', pos: 'adj', g: null, forms: 'stanco, -a, stanchi, stanche', ex: 'Siamo stanchi.', exRu: 'Мы устали.', note: null },
        { id: 'it-rosso', w: 'rosso', ru: 'красный', pos: 'adj', g: null, forms: 'rosso, -a, -i, -e', ex: 'Una macchina rossa.', exRu: 'Красная машина.', note: null },
        { id: 'it-macchina', w: 'macchina', ru: 'машина, автомобиль', pos: 'n', g: 'f', forms: 'la macchina, -e', ex: 'La macchina è nuova.', exRu: 'Машина новая.', note: 'ударение: màcchina' },
        { id: 'it-idea', w: 'idea', ru: 'идея', pos: 'n', g: 'f', forms: 'l’idea, -e', ex: 'Che buona idea!', exRu: 'Какая хорошая идея!', note: null },
        { id: 'it-occhio', w: 'occhio', ru: 'глаз', pos: 'n', g: 'm', forms: 'l’occhio, gli occhi', ex: 'Ha gli occhi azzurri.', exRu: 'У неё голубые глаза.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u01-l04',
      kind: 'grammar',
      title: 'Essere, avere, c’è / ci sono',
      goals: ['Спрягать essere и avere в презенсе', 'Строить фразы с avere fame, avere … anni', 'Различать c’è / ci sono и ecco'],
      skills: ['it.verb.essere-avere', 'it.ce-ci-sono'],
      theory: [
        { type: 'table', caption: 'Presente', head: ['', 'essere', 'avere'],
          rows: [
            ['io', 'sono', 'ho'],
            ['tu', 'sei', 'hai'],
            ['lui / lei / Lei', 'è', 'ha'],
            ['noi', 'siamo', 'abbiamo'],
            ['voi', 'siete', 'avete'],
            ['loro', 'sono', 'hanno']
          ],
          note: 'h в ho, hai, ha, hanno не читается и только отличает их от o «или», a (предлог), anno «год».' },
        { type: 'rule', text: 'Подлежащее-местоимение обычно опускается: форма глагола и так однозначна (**Sono russo**). Вежливое обращение — **Lei** (3 л. ед. ч.): **Lei è italiano?** — Вы итальянец?' },
        { type: 'contrast', text: 'В отличие от русского, связка в настоящем времени обязательна: **Marco è medico** — Марко врач. Возраст и физические состояния выражаются через avere: **Ho trent’anni** — мне тридцать лет; **Ho fame** — я голоден.' },
        { type: 'examples', items: [
          { t: 'Ho fame / sete / sonno / freddo / caldo.', ru: 'Я голоден / хочу пить / хочу спать / мне холодно / жарко.' },
          { t: 'Hai ragione, ho torto.', ru: 'Ты прав, я неправ.' },
          { t: 'Ho bisogno di aiuto.', ru: 'Мне нужна помощь.' },
          { t: 'C’è un bar qui vicino? — Sì, ci sono due bar.', ru: 'Здесь рядом есть бар? — Да, есть два бара.' },
          { t: 'Ecco il treno!', ru: 'Вот поезд!' }
        ] },
        { type: 'p', text: '**C’è / ci sono** — «есть, имеется, находится» (экзистенциальное). **Ecco** — указательное «вот», без глагола.' },
        { type: 'pitfall', text: '«Мне холодно» — **Ho freddo**, а не *Sono freddo (это значит «я холодный (по характеру)»).' }
      ],
      vocab: [
        { id: 'it-essere', w: 'essere', ru: 'быть', pos: 'v', g: null, forms: 'sono, sei, è…; stato (essere)', ex: 'Sono di Mosca.', exRu: 'Я из Москвы.', note: null },
        { id: 'it-avere', w: 'avere', ru: 'иметь', pos: 'v', g: null, forms: 'ho, hai, ha…; avuto (avere)', ex: 'Ho due fratelli.', exRu: 'У меня два брата.', note: null },
        { id: 'it-fame', w: 'fame', ru: 'голод', pos: 'n', g: 'f', forms: 'la fame', ex: 'Hai fame?', exRu: 'Ты голоден?', note: 'avere fame' },
        { id: 'it-sete', w: 'sete', ru: 'жажда', pos: 'n', g: 'f', forms: 'la sete', ex: 'Ho sete.', exRu: 'Хочу пить.', note: 'avere sete' },
        { id: 'it-freddo', w: 'freddo', ru: 'холодный; холод', pos: 'adj', g: null, forms: 'freddo, -a, -i, -e', ex: 'Ho freddo.', exRu: 'Мне холодно.', note: 'avere freddo; fa freddo — на улице холодно' },
        { id: 'it-caldo', w: 'caldo', ru: 'тёплый, жаркий; жара', pos: 'adj', g: null, forms: 'caldo, -a, -i, -e', ex: 'Oggi fa caldo.', exRu: 'Сегодня жарко.', note: null },
        { id: 'it-ragione', w: 'ragione', ru: 'разум; правота', pos: 'n', g: 'f', forms: 'la ragione, -i', ex: 'Hai ragione.', exRu: 'Ты прав.', note: 'avere ragione / torto' },
        { id: 'it-bisogno', w: 'bisogno', ru: 'потребность', pos: 'n', g: 'm', forms: 'il bisogno, -i', ex: 'Ho bisogno di te.', exRu: 'Ты мне нужен.', note: 'avere bisogno di' },
        { id: 'it-anno', w: 'anno', ru: 'год', pos: 'n', g: 'm', forms: 'l’anno, gli anni', ex: 'Quanti anni hai?', exRu: 'Сколько тебе лет?', note: null },
        { id: 'it-ecco', w: 'ecco', ru: 'вот', pos: 'adv', g: null, forms: null, ex: 'Ecco la chiave.', exRu: 'Вот ключ.', note: null },
        { id: 'it-qui', w: 'qui', ru: 'здесь', pos: 'adv', g: null, forms: 'qui / qua', ex: 'Sono qui.', exRu: 'Я здесь.', note: 'без ударения!' },
        { id: 'it-vicino', w: 'vicino', ru: 'близкий; рядом', pos: 'adj', g: null, forms: 'vicino, -a, -i, -e; adv. vicino (a)', ex: 'La stazione è vicino.', exRu: 'Вокзал рядом.', note: 'il vicino — сосед' },
        { id: 'it-anche', w: 'anche', ru: 'тоже, также', pos: 'adv', g: null, forms: null, ex: 'Anch’io ho fame.', exRu: 'Я тоже голоден.', note: 'anch’io' },
        { id: 'it-molto', w: 'molto', ru: 'очень; много', pos: 'adv', g: null, forms: 'adj. molto, -a, -i, -e', ex: 'Sono molto stanco. Ho molti amici.', exRu: 'Я очень устал. У меня много друзей.', note: 'наречие неизменяемо, прилагательное согласуется' }
      ],
      text: null
    }
  ]
}

export default {
  id: 'it-u08',
  title: 'Congiuntivo imperfetto, periodo ipotetico, si, passato remoto',
  titleRu: 'Congiuntivo imperfetto, условные периоды, si, passato remoto',
  summary: 'Congiuntivo imperfetto и trapassato, согласование времён, три типа условных предложений, безличное и пассивное si, пассив, passato remoto для чтения.',
  lessons: [
    {
      id: 'it-u08-l01',
      kind: 'grammar',
      title: 'Congiuntivo imperfetto, trapassato и согласование времён',
      goals: ['Образовывать congiuntivo imperfetto и trapassato', 'Выбирать время придаточного по времени главного (concordanza dei tempi)', 'Употреблять vorrei che и come se'],
      skills: ['it.subj.impf', 'it.subj.trap', 'it.concordanza'],
      theory: [
        { type: 'table', caption: 'Congiuntivo imperfetto', head: ['', 'parlare', 'prendere', 'dormire', 'essere'],
          rows: [
            ['che io', 'parl{{assi}}', 'prend{{essi}}', 'dorm{{issi}}', 'fossi'],
            ['che tu', 'parl{{assi}}', 'prend{{essi}}', 'dorm{{issi}}', 'fossi'],
            ['che lui / lei', 'parl{{asse}}', 'prend{{esse}}', 'dorm{{isse}}', 'fosse'],
            ['che noi', 'parl{{assimo}}', 'prend{{essimo}}', 'dorm{{issimo}}', 'fossimo'],
            ['che voi', 'parl{{aste}}', 'prend{{este}}', 'dorm{{iste}}', 'foste'],
            ['che loro', 'parl{{assero}}', 'prend{{essero}}', 'dorm{{issero}}', 'fossero']
          ],
          note: 'Неправильные: **dare → dessi, stare → stessi**; fare → facessi, dire → dicessi, bere → bevessi (старая основа, как в imperfetto). avere — правильный: avessi.' },
        { type: 'rule', text: '**Congiuntivo trapassato** = congiuntivo imperfetto от avere/essere + причастие: **avessi parlato, fossi andato/-a**.' },
        { type: 'table', caption: 'Concordanza dei tempi (с congiuntivo)', head: ['главное', 'одновременность', 'предшествование', 'следование'],
          rows: [
            ['настоящее / будущее: Penso che…', 'venga', 'sia venuto', 'venga / verrà'],
            ['прошедшее: Pensavo che…', 'venisse', 'fosse venuto', 'sarebbe venuto']
          ],
          note: 'В плане прошлого следование передаётся condizionale passato — и с congiuntivo-триггерами, и с индикативными (Sapevo che sarebbe venuto).' },
        { type: 'rule', text: 'После **condizionale** желания — congiuntivo imperfetto: **Vorrei che tu venissi** (не *venga). После **come se** — всегда imperfetto/trapassato: **Parla come se fosse il capo.**' },
        { type: 'examples', items: [
          { t: 'Credevo che tu fossi a Roma.', ru: 'Я думал, что ты в Риме.' },
          { t: 'Non sapevo che si fossero sposati.', ru: 'Я не знал, что они поженились.' },
          { t: 'Magari fosse vero!', ru: 'Если бы это было правдой! (желание — imperfetto)' }
        ] },
        { type: 'contrast', text: 'Русский не знает согласования времён: «Я думал, что ты в Риме» — настоящее время внутри прошедшего. Итальянский сдвигает: **Credevo che tu fossi a Roma**. Буквальная калька *Credevo che tu sia a Roma — ошибка.' }
      ],
      vocab: [
        { id: 'it-magari', w: 'magari', ru: 'может быть; хоть бы, если бы', pos: 'adv', g: null, forms: null, ex: 'Magari fossi in vacanza!', exRu: 'Вот бы я был в отпуске!', note: 'в ответ: Magari! — Хорошо бы!' },
        { id: 'it-come-se', w: 'come se', ru: 'как будто', pos: 'conj', g: null, forms: null, ex: 'Mi guarda come se non mi conoscesse.', exRu: 'Он смотрит на меня так, будто не знает меня.', note: '+ congiuntivo imperfetto / trapassato' },
        { id: 'it-temere', w: 'temere', ru: 'бояться, опасаться', pos: 'v', g: null, forms: 'temo; temuto (avere)', ex: 'Temevo che non venissi.', exRu: 'Я боялся, что ты не придёшь.', note: null },
        { id: 'it-aspettarsi', w: 'aspettarsi', ru: 'ожидать (предполагать)', pos: 'v', g: null, forms: 'mi aspetto; aspettato (essere)', ex: 'Non me lo aspettavo.', exRu: 'Я этого не ожидал.', note: null },
        { id: 'it-pretendere', w: 'pretendere', ru: 'требовать; притязать', pos: 'v', g: null, forms: 'pretendo; preteso (avere)', ex: 'Pretende che tutti lo ascoltino.', exRu: 'Он требует, чтобы все его слушали.', note: 'ложный друг: не «притворяться» (= fingere)' },
        { id: 'it-fingere', w: 'fingere', ru: 'притворяться', pos: 'v', g: null, forms: 'fingo, fingi; finto (avere)', ex: 'Finge di dormire.', exRu: 'Он притворяется, что спит.', note: null },
        { id: 'it-sposarsi', w: 'sposarsi', ru: 'жениться, выходить замуж', pos: 'v', g: null, forms: 'mi sposo; sposato (essere)', ex: 'Si sono sposati a maggio.', exRu: 'Они поженились в мае.', note: 'sposare qn — жениться на ком-то' },
        { id: 'it-capo', w: 'capo', ru: 'начальник, шеф; голова', pos: 'n', g: 'm', forms: 'il capo, -i', ex: 'Il mio capo è severo.', exRu: 'Мой начальник строгий.', note: null },
        { id: 'it-desiderare', w: 'desiderare', ru: 'желать', pos: 'v', g: null, forms: 'desìdero; desiderato (avere)', ex: 'Desidera altro?', exRu: 'Желаете что-нибудь ещё?', note: null },
        { id: 'it-nonostante', w: 'nonostante', ru: 'несмотря на (то что)', pos: 'conj', g: null, forms: 'nonostante + сущ. / che + congiuntivo', ex: 'Nonostante piovesse, siamo usciti.', exRu: 'Несмотря на дождь, мы вышли.', note: null },
        { id: 'it-sognare', w: 'sognare', ru: 'мечтать; видеть во сне', pos: 'v', g: null, forms: 'sogno; sognato (avere)', ex: 'Sognavo che tu tornassi.', exRu: 'Я мечтал, чтобы ты вернулся.', note: 'sognare di + inf.' },
        { id: 'it-severo', w: 'severo', ru: 'строгий', pos: 'adj', g: null, forms: 'severo, -a, -i, -e', ex: 'Un professore severo.', exRu: 'Строгий преподаватель.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u08-l02',
      kind: 'grammar',
      title: 'Periodo ipotetico',
      goals: ['Строить условные предложения реального, возможного и нереального типа', 'Строить смешанные периоды', 'Никогда не ставить condizionale после se (условного)'],
      skills: ['it.hyp.period'],
      theory: [
        { type: 'table', caption: 'Три типа', head: ['тип', 'se + …', 'главное', 'пример'],
          rows: [
            ['I — реальный', 'indicativo (presente / futuro)', 'indicativo / imperativo', 'Se piove, resto a casa.'],
            ['II — возможный / нереальный в настоящем', 'congiuntivo imperfetto', 'condizionale presente', 'Se avessi tempo, viaggerei di più.'],
            ['III — нереальный в прошлом', 'congiuntivo trapassato', 'condizionale passato', 'Se avessi studiato, avrei superato l’esame.']
          ] },
        { type: 'rule', text: 'Смешанные периоды: прошлое условие → настоящий результат: **Se avessi studiato medicina, ora sarei medico.** Постоянное условие → прошлый результат: **Se fossi più attento, non avresti fatto quell’errore.**' },
        { type: 'contrast', text: 'Русский ставит «бы» в обе части: «Если бы у меня было время, я бы путешествовал». Итальянский различает: **se** + congiuntivo, главное — condizionale. Калька *Se avrei tempo — грубая ошибка.' },
        { type: 'pitfall', text: 'Condizionale после se возможен только в косвенном вопросе (se = «ли»): **Non so se verrebbe** — Не знаю, пришёл бы он (или нет). В условном se — никогда.' },
        { type: 'tip', text: 'В разговорной речи III тип часто заменяется двойным imperfetto: **Se lo sapevo, non venivo** = Se l’avessi saputo, non sarei venuto. Узнавайте, но в письме используйте норму.' }
      ],
      vocab: [
        { id: 'it-se', w: 'se', ru: 'если; ли', pos: 'conj', g: null, forms: null, ex: 'Se vuoi, vengo.', exRu: 'Если хочешь, приду.', note: 'sé (с ударением) — себя' },
        { id: 'it-ricco', w: 'ricco', ru: 'богатый', pos: 'adj', g: null, forms: 'ricco, -a, ricchi, ricche', ex: 'Se fossi ricco, comprerei una barca.', exRu: 'Будь я богат, купил бы лодку.', note: null },
        { id: 'it-povero', w: 'povero', ru: 'бедный', pos: 'adj', g: null, forms: 'povero, -a, -i, -e', ex: 'Povero ragazzo!', exRu: 'Бедный парень!', note: 'ударение: pòvero' },
        { id: 'it-superare', w: 'superare', ru: 'преодолевать; сдать (экзамен); обгонять', pos: 'v', g: null, forms: 'supero; superato (avere)', ex: 'Ho superato l’esame!', exRu: 'Я сдал экзамен!', note: 'ударение: sùpero' },
        { id: 'it-mondo', w: 'mondo', ru: 'мир (вселенная)', pos: 'n', g: 'm', forms: 'il mondo, -i', ex: 'Farei il giro del mondo.', exRu: 'Я бы объехал весь мир.', note: 'мир (покой) — la pace' },
        { id: 'it-errore', w: 'errore', ru: 'ошибка', pos: 'n', g: 'm', forms: 'l’errore, gli errori', ex: 'Ho fatto un errore.', exRu: 'Я сделал ошибку.', note: 'syn. lo sbaglio' },
        { id: 'it-attento', w: 'attento', ru: 'внимательный', pos: 'adj', g: null, forms: 'attento, -a, -i, -e', ex: 'Stai attento!', exRu: 'Осторожно! / Будь внимателен!', note: null },
        { id: 'it-accettare', w: 'accettare', ru: 'принимать, соглашаться', pos: 'v', g: null, forms: 'accetto; accettato (avere)', ex: 'Se me lo offrissero, accetterei.', exRu: 'Если бы мне это предложили, я бы согласился.', note: null },
        { id: 'it-rifiutare', w: 'rifiutare', ru: 'отказываться, отклонять', pos: 'v', g: null, forms: 'rifiuto; rifiutato (avere)', ex: 'Ha rifiutato l’offerta.', exRu: 'Он отклонил предложение.', note: 'rifiutarsi di + inf.' },
        { id: 'it-occasione', w: 'occasione', ru: 'случай, возможность', pos: 'n', g: 'f', forms: 'l’occasione, -i', ex: 'Se avessi l’occasione, partirei.', exRu: 'Будь у меня возможность, я бы уехал.', note: 'ложный друг: не «оказия»; d’occasione — подержанный' },
        { id: 'it-pentirsi', w: 'pentirsi', ru: 'раскаиваться, жалеть', pos: 'v', g: null, forms: 'mi pento; pentito (essere)', ex: 'Te ne pentirai!', exRu: 'Ты об этом пожалеешь!', note: 'pentirsi di' },
        { id: 'it-barca', w: 'barca', ru: 'лодка', pos: 'n', g: 'f', forms: 'la barca, le barche', ex: 'Andiamo in barca.', exRu: 'Поплывём на лодке.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u08-l03',
      kind: 'grammar',
      title: 'Si impersonale, si passivante, пассив',
      goals: ['Различать безличное и пассивное si и согласовывать глагол', 'Строить ci si и сложные времена с si', 'Образовывать пассив с essere, venire, andare'],
      skills: ['it.si.impers', 'it.si.passive'],
      theory: [
        { type: 'rule', text: '**Si impersonale**: si + глагол в 3 л. ед. ч. — неопределённо-личное «люди, все»: **In Italia si mangia bene. Si dice che…** Именная часть — во мн. ч.: **Quando si è giovani…**. С возвратным глаголом — **ci si**: **Ci si alza presto.**' },
        { type: 'rule', text: '**Si passivante**: при переходном глаголе с дополнением глагол согласуется с ним как с подлежащим: **Si vende una casa. Si vendono case.** В сложных временах — essere и согласование: **Si sono vendute molte case.**' },
        { type: 'contrast', text: 'Прямая параллель с русским пассивом на -ся: **Si vendono case** — Продаются дома; **Qui si parla italiano** — Здесь говорят по-итальянски. Согласование глагола с «дополнением» по-русски так же обязательно: дома продаю**тся**.' },
        { type: 'table', caption: 'Пассив', head: ['конструкция', 'значение', 'пример'],
          rows: [
            ['essere + причастие (+ da)', 'нейтральный пассив, состояние', 'Il libro è stato scritto da Calvino.'],
            ['venire + причастие', 'процесс, только простые времена', 'La porta viene chiusa alle dieci.'],
            ['andare + причастие', 'долженствование', 'Il modulo va compilato in stampatello. — Бланк следует заполнить печатными буквами.']
          ],
          note: 'Причастие согласуется с подлежащим: La lettera è stat{{a}} spedit{{a}}.' },
        { type: 'pitfall', text: 'В сложных временах si impersonale всегда с essere: **Si è parlato molto** (глагол с avere → причастие на -o); **Si è arrivati tardi** (глагол с essere → причастие во мн. ч.).' }
      ],
      vocab: [
        { id: 'it-affittare', w: 'affittare', ru: 'сдавать / снимать в аренду', pos: 'v', g: null, forms: 'affitto; affittato (avere)', ex: 'Si affittano camere.', exRu: 'Сдаются комнаты.', note: null },
        { id: 'it-vietato', w: 'vietato', ru: 'запрещённый', pos: 'adj', g: null, forms: 'vietato, -a, -i, -e (vietare)', ex: 'Vietato fumare.', exRu: 'Курить запрещено.', note: null },
        { id: 'it-fumare', w: 'fumare', ru: 'курить', pos: 'v', g: null, forms: 'fumo; fumato (avere)', ex: 'Qui non si fuma.', exRu: 'Здесь не курят.', note: null },
        { id: 'it-modulo', w: 'modulo', ru: 'бланк, анкета', pos: 'n', g: 'm', forms: 'il modulo, -i', ex: 'Il modulo va firmato.', exRu: 'Бланк нужно подписать.', note: 'ударение: mòdulo' },
        { id: 'it-compilare', w: 'compilare', ru: 'заполнять (бланк)', pos: 'v', g: null, forms: 'compilo; compilato (avere)', ex: 'Compili questo modulo, per favore.', exRu: 'Заполните этот бланк, пожалуйста.', note: null },
        { id: 'it-firmare', w: 'firmare', ru: 'подписывать', pos: 'v', g: null, forms: 'firmo; firmato (avere)', ex: 'Firmi qui.', exRu: 'Подпишите здесь.', note: null },
        { id: 'it-prenotare', w: 'prenotare', ru: 'бронировать', pos: 'v', g: null, forms: 'prenòto; prenotato (avere)', ex: 'Si consiglia di prenotare.', exRu: 'Рекомендуется бронировать.', note: null },
        { id: 'it-ristorante', w: 'ristorante', ru: 'ресторан', pos: 'n', g: 'm', forms: 'il ristorante, -i', ex: 'In questo ristorante si mangia bene.', exRu: 'В этом ресторане хорошо кормят.', note: null },
        { id: 'it-camera', w: 'camera', ru: 'комната, номер; палата', pos: 'n', g: 'f', forms: 'la camera, -e', ex: 'Una camera doppia.', exRu: 'Двухместный номер.', note: 'ложный друг: не «камера» (фотоаппарат — la macchina fotografica); ударение: càmera' },
        { id: 'it-scrittore', w: 'scrittore', ru: 'писатель', pos: 'n', g: 'm', forms: 'lo scrittore, gli scrittori; la scrittrice, -i', ex: 'Calvino è uno scrittore famoso.', exRu: 'Кальвино — известный писатель.', note: null },
        { id: 'it-famoso', w: 'famoso', ru: 'знаменитый', pos: 'adj', g: null, forms: 'famoso, -a, -i, -e', ex: 'Una piazza famosa.', exRu: 'Знаменитая площадь.', note: null },
        { id: 'it-si-dice', w: 'si dice', ru: 'говорят', pos: 'phr', g: null, forms: 'si dice che + congiuntivo / indicativo', ex: 'Si dice che sia molto ricco.', exRu: 'Говорят, он очень богат.', note: null }
      ],
      text: null
    },
    {
      id: 'it-u08-l04',
      kind: 'grammar',
      title: 'Passato remoto (для чтения)',
      goals: ['Узнавать формы passato remoto правильных глаголов', 'Узнавать сильные формы по модели 1–3–6 (feci, fece, fecero)', 'Понимать, где passato remoto употребляется'],
      skills: ['it.passato-remoto'],
      theory: [
        { type: 'table', caption: 'Правильные', head: ['', 'parlare', 'credere', 'dormire'],
          rows: [
            ['io', 'parl{{ai}}', 'cred{{ei}} / cred{{etti}}', 'dorm{{ii}}'],
            ['tu', 'parl{{asti}}', 'cred{{esti}}', 'dorm{{isti}}'],
            ['lui / lei', 'parl{{ò}}', 'cred{{é}} / cred{{ette}}', 'dorm{{ì}}'],
            ['noi', 'parl{{ammo}}', 'cred{{emmo}}', 'dorm{{immo}}'],
            ['voi', 'parl{{aste}}', 'cred{{este}}', 'dorm{{iste}}'],
            ['loro', 'parl{{arono}}', 'cred{{erono}} / cred{{ettero}}', 'dorm{{irono}}']
          ] },
        { type: 'rule', text: 'Сильные (неправильные) глаголы меняют основу только в **1 л. ед., 3 л. ед. и 3 л. мн.** («1–3–6»); остальные формы — правильные от основы инфинитива: **fare: feci, facesti, fece, facemmo, faceste, fecero**.' },
        { type: 'table', caption: 'Частые сильные формы (1 л. ед. — 3 л. ед.)', head: ['инфинитив', 'io', 'lui / lei', 'loro'],
          rows: [
            ['essere', 'fui', 'fu', 'furono'], ['avere', 'ebbi', 'ebbe', 'ebbero'],
            ['dire', 'dissi', 'disse', 'dissero'], ['venire', 'venni', 'venne', 'vennero'],
            ['vedere', 'vidi', 'vide', 'videro'], ['prendere', 'presi', 'prese', 'presero'],
            ['scrivere', 'scrissi', 'scrisse', 'scrissero'], ['nascere', 'nacqui', 'nacque', 'nacquero'],
            ['volere', 'volli', 'volle', 'vollero'], ['sapere', 'seppi', 'seppe', 'seppero'],
            ['dare', 'diedi', 'diede', 'diedero'], ['stare', 'stetti', 'stette', 'stettero']
          ],
          note: 'essere — полностью неправильный: fui, fosti, fu, fummo, foste, furono.' },
        { type: 'p', text: 'Употребление: литературное повествование, история, биографии, сказки; в южных регионах — и в разговорной речи. На севере в речи заменяется passato prossimo. Для курса достаточно уверенно **узнавать** формы.' },
        { type: 'tip', text: 'Для латиниста: сильные формы — это прямые наследники латинского перфекта: fēcit → fece, dīxit → disse, vīdit → vide, vēnit → venne, habuit → ebbe.' },
        { type: 'pitfall', text: 'Ударение: **parlò, dormì, credé** — на окончании (знак обязателен); **parlàrono** — на третьем слоге от конца.' }
      ],
      vocab: [
        { id: 'it-secolo', w: 'secolo', ru: 'век, столетие', pos: 'n', g: 'm', forms: 'il secolo, -i', ex: 'Nel Trecento, cioè nel XIV secolo.', exRu: 'В Треченто, то есть в XIV веке.', note: 'ударение: sècolo' },
        { id: 'it-guerra', w: 'guerra', ru: 'война', pos: 'n', g: 'f', forms: 'la guerra, -e', ex: 'La guerra finì nel 1945.', exRu: 'Война закончилась в 1945 году.', note: null },
        { id: 'it-re', w: 're', ru: 'король, царь', pos: 'n', g: 'm', forms: 'il re, i re', ex: 'Il re morì giovane.', exRu: 'Король умер молодым.', note: 'la regina — королева' },
        { id: 'it-poeta', w: 'poeta', ru: 'поэт', pos: 'n', g: 'm', forms: 'il poeta, i poeti; la poetessa', ex: 'Il poeta nacque a Firenze.', exRu: 'Поэт родился во Флоренции.', note: 'м. р. на -a' },
        { id: 'it-opera', w: 'opera', ru: 'произведение; опера', pos: 'n', g: 'f', forms: 'l’opera, -e', ex: 'Scrisse molte opere.', exRu: 'Он написал много произведений.', note: 'ударение: òpera' },
        { id: 'it-scoprire', w: 'scoprire', ru: 'открывать (обнаруживать)', pos: 'v', g: null, forms: 'scopro; scoperto (avere); p. r. scoprii', ex: 'Colombo scoprì l’America nel 1492.', exRu: 'Колумб открыл Америку в 1492 году.', note: null },
        { id: 'it-esilio', w: 'esilio', ru: 'изгнание, ссылка', pos: 'n', g: 'm', forms: 'l’esilio', ex: 'Dante morì in esilio.', exRu: 'Данте умер в изгнании.', note: null },
        { id: 'it-scoppiare', w: 'scoppiare', ru: 'взрываться; разразиться', pos: 'v', g: null, forms: 'scoppio; scoppiato (essere)', ex: 'Scoppiò la guerra.', exRu: 'Разразилась война.', note: null },
        { id: 'it-popolo', w: 'popolo', ru: 'народ', pos: 'n', g: 'm', forms: 'il popolo, -i', ex: 'Il popolo si ribellò.', exRu: 'Народ восстал.', note: 'ударение: pòpolo' },
        { id: 'it-conquistare', w: 'conquistare', ru: 'завоёвывать', pos: 'v', g: null, forms: 'conquisto; conquistato (avere)', ex: 'I Romani conquistarono la Gallia.', exRu: 'Римляне завоевали Галлию.', note: null },
        { id: 'it-cioe', w: 'cioè', ru: 'то есть', pos: 'conj', g: null, forms: null, ex: 'Arrivo dopodomani, cioè giovedì.', exRu: 'Приеду послезавтра, то есть в четверг.', note: null },
        { id: 'it-potere-n', w: 'potere', ru: 'власть', pos: 'n', g: 'm', forms: 'il potere, -i', ex: 'Prese il potere nel 1922.', exRu: 'Он захватил власть в 1922 году.', note: 'омоним глагола potere' }
      ],
      text: null
    },
    {
      id: 'it-u08-l05',
      kind: 'reading',
      title: 'La leggenda di Roma',
      goals: ['Читать повествование в passato remoto', 'Отличать passato remoto (события) от imperfetto (фон) и trapassato'],
      skills: ['it.passato-remoto', 'it.si.passive'],
      theory: [],
      vocab: [
        { id: 'it-leggenda', w: 'leggenda', ru: 'легенда', pos: 'n', g: 'f', forms: 'la leggenda, -e', ex: 'Secondo la leggenda…', exRu: 'Согласно легенде…', note: null },
        { id: 'it-fondare', w: 'fondare', ru: 'основывать', pos: 'v', g: null, forms: 'fondo; fondato (avere)', ex: 'Roma fu fondata nel 753 a.C.', exRu: 'Рим был основан в 753 г. до н. э.', note: 'a.C. = avanti Cristo' },
        { id: 'it-gemello', w: 'gemello', ru: 'близнец', pos: 'n', g: 'm', forms: 'il gemello, -i; la gemella, -e', ex: 'Sono gemelli.', exRu: 'Они близнецы.', note: null },
        { id: 'it-lupo', w: 'lupo', ru: 'волк', pos: 'n', g: 'm', forms: 'il lupo, -i; la lupa, -e', ex: 'La lupa allattò i gemelli.', exRu: 'Волчица вскормила близнецов.', note: null },
        { id: 'it-riva', w: 'riva', ru: 'берег', pos: 'n', g: 'f', forms: 'la riva, -e', ex: 'Sulla riva del fiume.', exRu: 'На берегу реки.', note: null },
        { id: 'it-fiume', w: 'fiume', ru: 'река', pos: 'n', g: 'm', forms: 'il fiume, -i', ex: 'Il Tevere è un fiume.', exRu: 'Тибр — река.', note: 'м. р.!' },
        { id: 'it-pastore', w: 'pastore', ru: 'пастух; пастор', pos: 'n', g: 'm', forms: 'il pastore, -i', ex: 'Un pastore trovò i bambini.', exRu: 'Пастух нашёл детей.', note: null },
        { id: 'it-uccidere', w: 'uccidere', ru: 'убивать', pos: 'v', g: null, forms: 'uccido; ucciso (avere); p. r. uccisi, uccise', ex: 'Romolo uccise Remo.', exRu: 'Ромул убил Рема.', note: null },
        { id: 'it-crescere', w: 'crescere', ru: 'расти; растить', pos: 'v', g: null, forms: 'cresco; cresciuto (essere / avere); p. r. crebbi, crebbe', ex: 'Sono cresciuto in campagna.', exRu: 'Я вырос за городом.', note: 'неперех. → essere, перех. → avere' },
        { id: 'it-nome', w: 'nome', ru: 'имя; название', pos: 'n', g: 'm', forms: 'il nome, -i', ex: 'Qual è il tuo nome?', exRu: 'Как тебя зовут?', note: 'il cognome — фамилия' }
      ],
      text: {
        title: 'La leggenda di Roma',
        lines: [
          { t: 'Secondo la leggenda, Romolo e Remo erano figli di Rea Silvia e del dio Marte.', ru: 'Согласно легенде, Ромул и Рем были сыновьями Реи Сильвии и бога Марса.' },
          { t: 'Il re Amulio, che aveva preso il trono con la forza, temeva i due gemelli.', ru: 'Царь Амулий, захвативший трон силой, боялся близнецов.' },
          { t: 'Per questo ordinò che fossero gettati nel Tevere.', ru: 'Поэтому он приказал бросить их в Тибр.' },
          { t: 'Ma la cesta si fermò sulla riva, dove una lupa trovò i bambini e li allattò.', ru: 'Но корзина остановилась у берега, где волчица нашла детей и вскормила их.' },
          { t: 'Poco dopo un pastore, Faustolo, li prese con sé e li crebbe come figli suoi.', ru: 'Вскоре пастух Фаустул взял их к себе и вырастил как своих сыновей.' },
          { t: 'Quando diventarono adulti, i fratelli decisero di fondare una città.', ru: 'Когда братья выросли, они решили основать город.' },
          { t: 'Non riuscirono però a mettersi d’accordo sul luogo, e tra loro nacque una lite.', ru: 'Однако они не смогли договориться о месте, и между ними вспыхнула ссора.' },
          { t: 'Romolo tracciò un solco sul Palatino; Remo lo superò con un salto per deriderlo, e Romolo lo uccise.', ru: 'Ромул провёл борозду на Палатине; Рем в насмешку перепрыгнул её, и Ромул убил его.' },
          { t: 'Così, nel 753 a.C., fu fondata la città che dal suo nome si chiamò Roma.', ru: 'Так в 753 году до н. э. был основан город, который по его имени назвали Римом.' }
        ]
      }
    }
  ]
}

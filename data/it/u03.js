export default {
  id: 'it-u03',
  title: 'Preposizioni, possessivi, dimostrativi',
  titleRu: 'Предлоги, притяжательные и указательные',
  summary: 'Простые предлоги и их значения, слитные предлоги (preposizioni articolate), a / in с названиями мест, притяжательные, questo / quello и партитив.',
  lessons: [
    {
      id: 'it-u03-l01',
      kind: 'grammar',
      title: 'Простые предлоги',
      goals: ['Знать основные значения di, a, da, in, con, su, per, tra/fra', 'Выбирать a или in с названиями мест', 'Переводить «через» и «у (кого-то)»'],
      skills: ['it.prep.simple', 'it.prep.place'],
      theory: [
        { type: 'table', caption: 'Ключевые значения', head: ['предлог', 'значение', 'пример'],
          rows: [
            ['di', 'принадлежность, материал, происхождение', 'il libro di Marco; Sono di Milano.'],
            ['a', 'город (где/куда), время, + инфинитив', 'Abito a Roma. Vado a Roma. alle otto; Vado a dormire.'],
            ['da', 'откуда; к кому/у кого; с какого времени', 'Vengo da Londra. Vado dal medico. da lunedì'],
            ['in', 'страна, регион; транспорт; помещения', 'in Italia, in treno, in ufficio'],
            ['con', 'с (кем/чем)', 'con gli amici'],
            ['su', 'на (поверхности); о (теме)', 'sul tavolo; un libro su Dante'],
            ['per', 'для; ради; в течение; в направлении', 'per te; per due ore; il treno per Napoli'],
            ['tra / fra', 'между; через (о будущем)', 'tra Roma e Napoli; tra due ore']
          ] },
        { type: 'rule', text: 'Города и маленькие острова — **a** (и где, и куда): **a Roma, a Capri**. Страны, регионы, большие острова — **in**: **in Italia, in Toscana, in Sicilia**.' },
        { type: 'contrast', text: '«Через два часа» — **tra due ore** (не *dopo due ore в значении отсчёта от «сейчас»). «У врача / к врачу» — **dal medico**; «у меня (дома)» — **da me**: da = франц. chez. «Два часа назад» — **due ore fa** (fa ставится после).' },
        { type: 'examples', items: [
          { t: 'Vado a casa / in centro / in banca / a piedi.', ru: 'Иду домой / в центр / в банк / пешком.' },
          { t: 'Andiamo da Paolo stasera.', ru: 'Сегодня вечером идём к Паоло.' },
          { t: 'Una macchina da scrivere; occhiali da sole.', ru: 'Пишущая машинка; солнцезащитные очки (da — назначение).' },
          { t: 'Da bambino abitavo a Genova.', ru: 'В детстве я жил в Генуе.' }
        ] },
        { type: 'pitfall', text: 'Транспорт — **in**: in treno, in macchina, in aereo; но **a piedi** (пешком), **a cavallo**.' }
      ],
      vocab: [
        { id: 'it-di', w: 'di', ru: 'из (происхождение); принадлежность (род. п.)', pos: 'prep', g: null, forms: 'd’ перед гласной (иногда)', ex: 'È la macchina di mio padre.', exRu: 'Это машина моего отца.', note: null },
        { id: 'it-a', w: 'a', ru: 'в, на (направление, место — города); к', pos: 'prep', g: null, forms: 'ad перед a- (необяз.)', ex: 'Vado a Firenze.', exRu: 'Еду во Флоренцию.', note: null },
        { id: 'it-da', w: 'da', ru: 'от, из; к (лицу), у (лица); с (времени)', pos: 'prep', g: null, forms: null, ex: 'Vengo dalla stazione.', exRu: 'Я иду с вокзала.', note: 'не путать с dà «даёт»' },
        { id: 'it-in', w: 'in', ru: 'в (страна, помещение); на (транспорт)', pos: 'prep', g: null, forms: null, ex: 'Vivo in Italia.', exRu: 'Я живу в Италии.', note: null },
        { id: 'it-con', w: 'con', ru: 'с', pos: 'prep', g: null, forms: null, ex: 'Esco con Laura.', exRu: 'Я гуляю с Лаурой.', note: null },
        { id: 'it-su', w: 'su', ru: 'на; о', pos: 'prep', g: null, forms: null, ex: 'Il gatto è sul letto.', exRu: 'Кот на кровати.', note: null },
        { id: 'it-per', w: 'per', ru: 'для; в течение; в (направлении)', pos: 'prep', g: null, forms: null, ex: 'Questo è per te.', exRu: 'Это для тебя.', note: null },
        { id: 'it-tra', w: 'tra / fra', ru: 'между; через (о времени)', pos: 'prep', g: null, forms: null, ex: 'Arrivo tra dieci minuti.', exRu: 'Приду через десять минут.', note: 'tra и fra взаимозаменяемы' },
        { id: 'it-fa', w: 'fa', ru: 'тому назад', pos: 'adv', g: null, forms: null, ex: 'Tre giorni fa.', exRu: 'Три дня назад.', note: 'ставится после выражения времени' },
        { id: 'it-piede', w: 'piede', ru: 'нога (ступня)', pos: 'n', g: 'm', forms: 'il piede, -i', ex: 'Vado a piedi.', exRu: 'Иду пешком.', note: null },
        { id: 'it-centro', w: 'centro', ru: 'центр', pos: 'n', g: 'm', forms: 'il centro, -i', ex: 'Abito in centro.', exRu: 'Я живу в центре.', note: null },
        { id: 'it-banca', w: 'banca', ru: 'банк', pos: 'n', g: 'f', forms: 'la banca, le banche', ex: 'La banca chiude alle quattro.', exRu: 'Банк закрывается в четыре.', note: null },
        { id: 'it-aereo', w: 'aereo', ru: 'самолёт', pos: 'n', g: 'm', forms: 'l’aereo, gli aerei', ex: 'Viaggio in aereo.', exRu: 'Путешествую на самолёте.', note: null },
        { id: 'it-minuto', w: 'minuto', ru: 'минута', pos: 'n', g: 'm', forms: 'il minuto, -i', ex: 'Un minuto, per favore!', exRu: 'Минуточку, пожалуйста!', note: null }
      ],
      text: null
    },
    {
      id: 'it-u03-l02',
      kind: 'grammar',
      title: 'Слитные предлоги',
      goals: ['Образовывать del, allo, nell’, sulle и т. д.', 'Знать, когда предлог стоит с артиклем, а когда без'],
      skills: ['it.prep.articulated'],
      theory: [
        { type: 'table', caption: 'Preposizioni articolate', head: ['', 'il', 'lo', 'l’', 'la', 'i', 'gli', 'le'],
          rows: [
            ['di', 'del', 'dello', 'dell’', 'della', 'dei', 'degli', 'delle'],
            ['a', 'al', 'allo', 'all’', 'alla', 'ai', 'agli', 'alle'],
            ['da', 'dal', 'dallo', 'dall’', 'dalla', 'dai', 'dagli', 'dalle'],
            ['in', 'nel', 'nello', 'nell’', 'nella', 'nei', 'negli', 'nelle'],
            ['su', 'sul', 'sullo', 'sull’', 'sulla', 'sui', 'sugli', 'sulle']
          ],
          note: 'di → de-, in → ne-. con + il = col (возможно, но сейчас обычно пишут con il); per, tra, fra не сливаются.' },
        { type: 'rule', text: 'Слияние обязательно: если существительному нужен артикль, предлог di, a, da, in, su сливается с ним. Никогда *di il, *a le.' },
        { type: 'p', text: 'Устойчивые сочетания без артикля: **a casa, a scuola, a teatro, a letto, in ufficio, in banca, in centro, in cucina, in biblioteca, in montagna**. С артиклем: **al cinema, al mare, al bar, allo stadio, alla stazione, all’università**. Это лексикализовано — запоминайте парами.' },
        { type: 'examples', items: [
          { t: 'in Italia — nell’Italia del Nord', ru: 'в Италии — в Северной Италии (с определением появляется артикль)' },
          { t: 'Le chiavi sono nella borsa.', ru: 'Ключи в сумке.' },
          { t: 'Il treno arriva alle 8.15.', ru: 'Поезд прибывает в 8:15 (alle [ore]).' },
          { t: 'Torno dalle vacanze.', ru: 'Возвращаюсь из отпуска.' }
        ] },
        { type: 'pitfall', text: 'Время — **a + артикль**: alle tre, all’una, a mezzogiorno (без артикля), a mezzanotte.' }
      ],
      vocab: [
        { id: 'it-borsa', w: 'borsa', ru: 'сумка; биржа', pos: 'n', g: 'f', forms: 'la borsa, -e', ex: 'Dov’è la mia borsa?', exRu: 'Где моя сумка?', note: null },
        { id: 'it-tavolo', w: 'tavolo', ru: 'стол', pos: 'n', g: 'm', forms: 'il tavolo, -i', ex: 'Il libro è sul tavolo.', exRu: 'Книга на столе.', note: 'ударение: tàvolo' },
        { id: 'it-cinema', w: 'cinema', ru: 'кино, кинотеатр', pos: 'n', g: 'm', forms: 'il cinema, i cinema', ex: 'Andiamo al cinema?', exRu: 'Пойдём в кино?', note: 'сокр. от cinematografo' },
        { id: 'it-mare', w: 'mare', ru: 'море', pos: 'n', g: 'm', forms: 'il mare, -i', ex: 'D’estate andiamo al mare.', exRu: 'Летом ездим на море.', note: null },
        { id: 'it-montagna', w: 'montagna', ru: 'гора; горы (как место отдыха)', pos: 'n', g: 'f', forms: 'la montagna, -e', ex: 'Vado in montagna.', exRu: 'Еду в горы.', note: null },
        { id: 'it-stazione', w: 'stazione', ru: 'вокзал, станция', pos: 'n', g: 'f', forms: 'la stazione, -i', ex: 'Ci vediamo alla stazione.', exRu: 'Встретимся на вокзале.', note: null },
        { id: 'it-universita', w: 'università', ru: 'университет', pos: 'n', g: 'f', forms: 'l’università, le università', ex: 'Studio all’università.', exRu: 'Учусь в университете.', note: null },
        { id: 'it-cucina', w: 'cucina', ru: 'кухня', pos: 'n', g: 'f', forms: 'la cucina, -e', ex: 'Mamma è in cucina.', exRu: 'Мама на кухне.', note: null },
        { id: 'it-biblioteca', w: 'biblioteca', ru: 'библиотека', pos: 'n', g: 'f', forms: 'la biblioteca, le biblioteche', ex: 'Studio in biblioteca.', exRu: 'Занимаюсь в библиотеке.', note: 'ложный друг: libreria — книжный магазин' },
        { id: 'it-libreria', w: 'libreria', ru: 'книжный магазин; книжный шкаф', pos: 'n', g: 'f', forms: 'la libreria, -e', ex: 'Compro il libro in libreria.', exRu: 'Покупаю книгу в книжном.', note: 'не «библиотека»!' },
        { id: 'it-letto', w: 'letto', ru: 'кровать', pos: 'n', g: 'm', forms: 'il letto, -i', ex: 'Vado a letto.', exRu: 'Иду спать (ложусь).', note: null },
        { id: 'it-vacanza', w: 'vacanza', ru: 'отпуск, каникулы', pos: 'n', g: 'f', forms: 'la vacanza, -e', ex: 'Sono in vacanza.', exRu: 'Я в отпуске.', note: 'часто мн. ч.: le vacanze' },
        { id: 'it-mezzogiorno', w: 'mezzogiorno', ru: 'полдень', pos: 'n', g: 'm', forms: 'il mezzogiorno', ex: 'Pranziamo a mezzogiorno.', exRu: 'Обедаем в полдень.', note: 'il Mezzogiorno — юг Италии' }
      ],
      text: null
    },
    {
      id: 'it-u03-l03',
      kind: 'grammar',
      title: 'Притяжательные',
      goals: ['Склонять il mio, la tua, i suoi…', 'Опускать артикль с названиями родственников', 'Передавать русское «свой»'],
      skills: ['it.poss'],
      theory: [
        { type: 'table', caption: 'Притяжательные (с артиклем)', head: ['', 'м. ед.', 'ж. ед.', 'м. мн.', 'ж. мн.'],
          rows: [
            ['io', 'il mio', 'la mia', 'i miei', 'le mie'],
            ['tu', 'il tuo', 'la tua', 'i tuoi', 'le tue'],
            ['lui / lei / Lei', 'il suo', 'la sua', 'i suoi', 'le sue'],
            ['noi', 'il nostro', 'la nostra', 'i nostri', 'le nostre'],
            ['voi', 'il vostro', 'la vostra', 'i vostri', 'le vostre'],
            ['loro', 'il loro', 'la loro', 'i loro', 'le loro']
          ],
          note: 'Притяжательное согласуется с обладаемым, а не с обладателем: **la sua macchina** — его/её машина.' },
        { type: 'rule', text: 'С существительными родства в ед. ч. без определений артикль опускается: **mia madre, tuo fratello, sua sorella**. Но: **i miei fratelli** (мн. ч.), **la mia sorella maggiore** (определение), **la mia mamma** (ласкательное), **la loro madre** (loro — всегда с артиклем).' },
        { type: 'contrast', text: 'В итальянском нет «свой»: **Marco ama sua moglie** — Марко любит свою жену (или его жену — по контексту). Для однозначности: **la propria moglie**. Кроме того, «я ищу свои ключи» обычно просто **Cerco le chiavi** — притяжательное часто опускают, если обладатель очевиден.' },
        { type: 'pitfall', text: '**suo** = и «его», и «её», и вежливое «Ваш» (**Suo**): Signora, questo è il Suo ombrello? — Синьора, это Ваш зонт?' }
      ],
      vocab: [
        { id: 'it-madre', w: 'madre', ru: 'мать', pos: 'n', g: 'f', forms: 'la madre, -i', ex: 'Mia madre è insegnante.', exRu: 'Моя мать — учительница.', note: 'разг. la mamma' },
        { id: 'it-padre', w: 'padre', ru: 'отец', pos: 'n', g: 'm', forms: 'il padre, -i', ex: 'Suo padre è medico.', exRu: 'Его отец — врач.', note: 'разг. il papà' },
        { id: 'it-fratello', w: 'fratello', ru: 'брат', pos: 'n', g: 'm', forms: 'il fratello, -i', ex: 'Ho un fratello.', exRu: 'У меня есть брат.', note: 'i fratelli — братья; братья и сёстры' },
        { id: 'it-sorella', w: 'sorella', ru: 'сестра', pos: 'n', g: 'f', forms: 'la sorella, -e', ex: 'Mia sorella vive a Parigi.', exRu: 'Моя сестра живёт в Париже.', note: null },
        { id: 'it-figlio', w: 'figlio', ru: 'сын; (мн.) дети', pos: 'n', g: 'm', forms: 'il figlio, i figli; la figlia, le figlie', ex: 'Hanno due figli.', exRu: 'У них двое детей.', note: null },
        { id: 'it-marito', w: 'marito', ru: 'муж', pos: 'n', g: 'm', forms: 'il marito, -i', ex: 'Suo marito è di Napoli.', exRu: 'Её муж из Неаполя.', note: null },
        { id: 'it-moglie', w: 'moglie', ru: 'жена', pos: 'n', g: 'f', forms: 'la moglie, le mogli', ex: 'Mia moglie lavora molto.', exRu: 'Моя жена много работает.', note: null },
        { id: 'it-genitori', w: 'genitori', ru: 'родители', pos: 'n', g: 'm', forms: 'i genitori (ед. il genitore)', ex: 'I miei genitori abitano in campagna.', exRu: 'Мои родители живут за городом.', note: null },
        { id: 'it-nonno', w: 'nonno', ru: 'дедушка', pos: 'n', g: 'm', forms: 'il nonno, -i; la nonna, -e', ex: 'Mio nonno ha novant’anni.', exRu: 'Моему дедушке девяносто лет.', note: 'i nonni — бабушка и дедушка' },
        { id: 'it-famiglia', w: 'famiglia', ru: 'семья', pos: 'n', g: 'f', forms: 'la famiglia, -e', ex: 'La mia famiglia è numerosa.', exRu: 'У меня большая семья.', note: null },
        { id: 'it-proprio', w: 'proprio', ru: 'свой, собственный; (adv.) именно, действительно', pos: 'adj', g: null, forms: 'proprio, -a, -i, -e', ex: 'È proprio vero.', exRu: 'Это действительно так.', note: null },
        { id: 'it-ombrello', w: 'ombrello', ru: 'зонт', pos: 'n', g: 'm', forms: 'l’ombrello, gli ombrelli', ex: 'Prendi l’ombrello!', exRu: 'Возьми зонт!', note: null },
        { id: 'it-maggiore', w: 'maggiore', ru: 'старший; больший', pos: 'adj', g: null, forms: 'maggiore, -i', ex: 'Mio fratello maggiore.', exRu: 'Мой старший брат.', note: 'minore — младший' }
      ],
      text: null
    },
    {
      id: 'it-u03-l04',
      kind: 'grammar',
      title: 'Questo, quello и партитив',
      goals: ['Склонять quello по модели артикля', 'Выражать неопределённое количество: del pane, dei libri, qualche, un po’ di'],
      skills: ['it.dem', 'it.partitive'],
      theory: [
        { type: 'table', caption: 'quello перед существительным', head: ['', 'м. ед.', 'м. мн.', 'ж. ед.', 'ж. мн.'],
          rows: [
            ['перед согласной', 'quel libro', 'quei libri', 'quella casa', 'quelle case'],
            ['s + согл., z…', 'quello studente', 'quegli studenti', 'quella scuola', 'quelle scuole'],
            ['перед гласной', 'quell’albero', 'quegli alberi', 'quell’idea', 'quelle idee']
          ],
          note: 'quello = quel + артикль: il → quel, lo → quello, i → quei, gli → quegli. Как bello. **questo** изменяется просто: questo, questa, questi, queste (quest’ перед гласной — необязательно).' },
        { type: 'rule', text: 'Самостоятельно (без существительного) — полные формы: **Quale vuoi? — Quello.** / **Quelli sono miei.**' },
        { type: 'h', text: 'Партитив' },
        { type: 'rule', text: '**di + определённый артикль** = «некоторое количество»: **del pane** — хлеба, **dell’acqua** — воды, **dei libri** — (несколько) книг. Во мн. ч. это фактически мн. ч. неопределённого артикля.' },
        { type: 'examples', items: [
          { t: 'Vuoi del vino?', ru: 'Хочешь вина?' },
          { t: 'Ho comprato delle mele.', ru: 'Я купил яблок.' },
          { t: 'Ho qualche amico a Milano.', ru: 'У меня есть несколько друзей в Милане (qualche + ед. ч.!).' },
          { t: 'Prendo un po’ di zucchero.', ru: 'Возьму немного сахара.' },
          { t: 'Non ho pane.', ru: 'У меня нет хлеба (в отрицании партитив обычно опускают).' }
        ] },
        { type: 'contrast', text: 'Партитив соответствует русскому родительному части: «налей воды» — **versa dell’acqua**. Но в итальянском это не падеж, а предлог + артикль.' },
        { type: 'pitfall', text: '**qualche** всегда с ед. ч., хотя значит «несколько»: qualche giorno, qualche volta. Не *qualche giorni. Синоним с мн. ч.: **alcuni giorni, alcune volte**.' }
      ],
      vocab: [
        { id: 'it-questo', w: 'questo', ru: 'этот', pos: 'pron', g: null, forms: 'questo, -a, -i, -e', ex: 'Questa è mia sorella.', exRu: 'Это моя сестра.', note: null },
        { id: 'it-quello', w: 'quello', ru: 'тот', pos: 'pron', g: null, forms: 'quel, quello, quell’, quella; quei, quegli, quelle', ex: 'Quel ragazzo è simpatico.', exRu: 'Тот парень симпатичный.', note: null },
        { id: 'it-qualche', w: 'qualche', ru: 'несколько; какой-нибудь', pos: 'adj', g: null, forms: 'неизм., + ед. ч.', ex: 'Qualche volta vado in piscina.', exRu: 'Иногда хожу в бассейн.', note: null },
        { id: 'it-alcuni', w: 'alcuni', ru: 'некоторые, несколько', pos: 'adj', g: null, forms: 'alcuni, alcune', ex: 'Alcuni studenti sono assenti.', exRu: 'Некоторые студенты отсутствуют.', note: null },
        { id: 'it-po', w: 'un po’', ru: 'немного', pos: 'phr', g: null, forms: 'un po’ di + сущ.', ex: 'Parlo un po’ d’italiano.', exRu: 'Я немного говорю по-итальянски.', note: 'po’ = poco (с апострофом, не *pò)' },
        { id: 'it-vino', w: 'vino', ru: 'вино', pos: 'n', g: 'm', forms: 'il vino, -i', ex: 'Un bicchiere di vino rosso.', exRu: 'Бокал красного вина.', note: null },
        { id: 'it-mela', w: 'mela', ru: 'яблоко', pos: 'n', g: 'f', forms: 'la mela, -e', ex: 'Mangio una mela.', exRu: 'Ем яблоко.', note: null },
        { id: 'it-zucchero', w: 'zucchero', ru: 'сахар', pos: 'n', g: 'm', forms: 'lo zucchero', ex: 'Il caffè senza zucchero.', exRu: 'Кофе без сахара.', note: 'ударение: zùcchero' },
        { id: 'it-latte', w: 'latte', ru: 'молоко', pos: 'n', g: 'm', forms: 'il latte', ex: 'Il latte è nel frigo.', exRu: 'Молоко в холодильнике.', note: 'м. р.!' },
        { id: 'it-formaggio', w: 'formaggio', ru: 'сыр', pos: 'n', g: 'm', forms: 'il formaggio, i formaggi', ex: 'Vuoi del formaggio?', exRu: 'Хочешь сыра?', note: null },
        { id: 'it-ragazzo', w: 'ragazzo', ru: 'парень; (мн.) ребята', pos: 'n', g: 'm', forms: 'il ragazzo, -i; la ragazza, -e', ex: 'Ciao, ragazzi!', exRu: 'Привет, ребята!', note: 'il mio ragazzo — мой парень' },
        { id: 'it-volta', w: 'volta', ru: 'раз', pos: 'n', g: 'f', forms: 'la volta, -e', ex: 'Due volte al giorno.', exRu: 'Два раза в день.', note: null },
        { id: 'it-comprare', w: 'comprare', ru: 'покупать', pos: 'v', g: null, forms: 'compro; comprato (avere)', ex: 'Compro del pane.', exRu: 'Покупаю хлеб.', note: null }
      ],
      text: null
    }
  ]
}

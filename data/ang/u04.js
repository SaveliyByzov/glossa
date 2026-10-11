export default {
  id: 'ang-u04',
  title: 'Iċ lufie, iċ hīere',
  titleRu: 'Слабые глаголы',
  summary: 'Настоящее время, претерит на дентальный суффикс, причастия и инфинитивы слабых глаголов трёх классов; повелительное наклонение, перифрастические времена. Чтение — пахарь из «Беседы» Эльфрика.',
  lessons: [
    {
      id: 'ang-u04-l01',
      kind: 'grammar',
      title: 'Настоящее время: классы I и II',
      goals: ['Спрягать слабые глаголы I и II класса в настоящем', 'Учитывать удвоение согласного в I классе (fremman — fremest)', 'Знать синкопу и ассимиляцию во 2–3 л. ед.'],
      skills: ['ang.verb.weak.pres'],
      theory: [
        { type: 'p', text: '**Слабые** глаголы образуют претерит с помощью дентального суффикса **-de/-te** (как совр. -ed, нем. -te). Три класса: **I** (с i-умлаутом корня, часто с удвоением: fremman, hīeran, nerian), **II** (на **-ian**, претерит **-ode**: lufian), **III** (четыре глагола: habban, libban, secgan, hycgan).' },
        { type: 'table', caption: 'Настоящее время', head: ['', 'fremman «совершать»', 'hīeran «слышать»', 'nerian «спасать»', 'lufian «любить»'],
          rows: [
            ['iċ', 'fremm{{e}}', 'hīer{{e}}', 'neri{{e}}', 'lufi{{e}}'],
            ['þū', 'frem{{est}}', 'hīer{{st}}', 'ner{{est}}', 'luf{{ast}}'],
            ['hē, hēo, hit', 'frem{{eþ}}', 'hīer{{þ}}', 'ner{{eþ}}', 'luf{{aþ}}'],
            ['wē, ġē, hīe', 'fremm{{aþ}}', 'hīer{{aþ}}', 'neri{{aþ}}', 'lufi{{aþ}}'],
            ['сосл. ед.', 'fremm{{e}}', 'hīer{{e}}', 'neri{{e}}', 'lufi{{e}}'],
            ['сосл. мн.', 'fremm{{en}}', 'hīer{{en}}', 'neri{{en}}', 'lufi{{en}}']
          ],
          note: 'Во мн. ч. одна форма для всех лиц. Перед местоимением wē/ġē -aþ → -e: fremme wē.' },
        { type: 'rule', text: 'I класс, краткая основа: удвоенный согласный (или -ri-) там, где окончание начиналось с *-j-: **1 л. ед., мн. ч., инфинитив** (fremme, fremmaþ, fremman); во **2–3 л. ед.** — одиночный: **fremest, fremeþ**.' },
        { type: 'rule', text: 'I класс, долгая основа: во 2–3 л. ед. гласный окончания выпадает (**hīerst, hīerþ**, **dēmst, dēmþ**), а **d/t + þ → t(t)**: sendan → **sent**, lǣdan → **lǣt**, settan → **set(t)**.' },
        { type: 'rule', text: 'II класс: **-i-** в 1 л. ед., мн. ч. и инфинитиве (lufie, lufiaþ, lufian); во 2–3 л. ед. — **-ast, -aþ** без i.' },
        { type: 'examples', items: [
          { t: 'Iċ hīere þīne stefne.', ru: 'Я слышу твой голос.' },
          { t: 'Se lārēow lǣrþ þā ċild.', ru: 'Учитель учит детей.' },
          { t: 'God lufaþ ūs.', ru: 'Бог любит нас.' },
          { t: 'Hwǣr wunaþ ġē?', ru: 'Где вы живёте?' }
        ] },
        { type: 'contrast', text: 'Видовых пар, как в русском, нет: **iċ lǣre** — и «учу», и «научу». Настоящее время часто выражает будущее (особой формы будущего нет).' },
        { type: 'tip', text: '3 л. ед. **-þ** дожило до библейского *loveth, heareth*, позже вытеснено северным -s.' }
      ],
      vocab: [
        { id: 'ang-fremman', w: 'fremman', ru: 'совершать, делать', pos: 'v', forms: 'fremman, fremede, fremed (сл. I)', ex: 'Hīe fremmaþ gōd.', exRu: 'Они творят добро.', note: null },
        { id: 'ang-nerian', w: 'nerian', ru: 'спасать', pos: 'v', forms: 'nerian, nerede, nered (сл. I)', ex: 'God nereþ ūs.', exRu: 'Бог спасает нас.', note: 'Нем. nähren (родств.).' },
        { id: 'ang-hieran', w: 'hīeran', ru: 'слышать; слушаться (+ дат.)', pos: 'v', forms: 'hīeran, hīerde, hīered (сл. I)', ex: 'Iċ hīere þē.', exRu: 'Я слышу тебя.', note: 'Поздн. hȳran. Совр. hear, нем. hören.' },
        { id: 'ang-deman', w: 'dēman', ru: 'судить', pos: 'v', forms: 'dēman, dēmde, dēmed (сл. I)', ex: 'God dēmþ ealle menn.', exRu: 'Бог судит всех людей.', note: 'От dōm (умлаут ō → ē). Совр. deem.' },
        { id: 'ang-laeran', w: 'lǣran', ru: 'учить, наставлять', pos: 'v', forms: 'lǣran, lǣrde, lǣred (сл. I)', ex: 'Hē lǣrþ þā cnihtas.', exRu: 'Он наставляет юношей.', note: 'От lār; нем. lehren.' },
        { id: 'ang-laedan', w: 'lǣdan', ru: 'вести', pos: 'v', forms: 'lǣdan, lǣdde, lǣded (сл. I)', ex: 'Hē lǣt þone here.', exRu: 'Он ведёт войско.', note: '3 л. ед. lǣt (< lǣdeþ). Совр. lead.' },
        { id: 'ang-sendan', w: 'sendan', ru: 'посылать', pos: 'v', forms: 'sendan, sende, sended / send (сл. I)', ex: 'Se cyning sent ǣrendracan.', exRu: 'Король посылает гонцов.', note: '3 л. ед. sent.' },
        { id: 'ang-settan', w: 'settan', ru: 'ставить, сажать; устанавливать', pos: 'v', forms: 'settan, sette, seted / sett (сл. I)', ex: 'Hē sette þone stān.', exRu: 'Он поставил камень.', note: null },
        { id: 'ang-lufian', w: 'lufian', ru: 'любить', pos: 'v', forms: 'lufian, lufode, lufod (сл. II)', ex: 'Iċ lufie mīnne fæder.', exRu: 'Я люблю своего отца.', note: null },
        { id: 'ang-wunian', w: 'wunian', ru: 'жить, пребывать', pos: 'v', forms: 'wunian, wunode, wunod (сл. II)', ex: 'Hē wunaþ on þǣre byriġ.', exRu: 'Он живёт в городе.', note: 'Нем. wohnen.' },
        { id: 'ang-thancian', w: 'þancian', ru: 'благодарить (+ дат.)', pos: 'v', forms: 'þancian, þancode, þancod (сл. II)', ex: 'Wē þanciaþ Gode.', exRu: 'Мы благодарим Бога.', note: 'Кого — дат., за что — род.' },
        { id: 'ang-leornian', w: 'leornian', ru: 'учиться, изучать', pos: 'v', forms: 'leornian, leornode, leornod (сл. II)', ex: 'Þā ċild leorniaþ Lǣden.', exRu: 'Дети учат латынь.', note: 'Совр. learn.' }
      ],
      text: null
    },
    {
      id: 'ang-u04-l02',
      kind: 'grammar',
      title: 'Претерит и причастие II',
      goals: ['Образовывать претерит на -de/-ede/-ode/-te', 'Знать неправильные глаголы I класса (sēċan — sōhte)', 'Образовывать причастие II с ġe-'],
      skills: ['ang.verb.weak.pret'],
      theory: [
        { type: 'table', caption: 'Претерит', head: ['', 'fremman', 'hīeran', 'lufian'],
          rows: [
            ['iċ', 'frem{{ede}}', 'hīer{{de}}', 'luf{{ode}}'],
            ['þū', 'frem{{edest}}', 'hīer{{dest}}', 'luf{{odest}}'],
            ['hē', 'frem{{ede}}', 'hīer{{de}}', 'luf{{ode}}'],
            ['мн.', 'frem{{edon}}', 'hīer{{don}}', 'luf{{odon}}'],
            ['сосл. ед. / мн.', 'fremede / -en', 'hīerde / -en', 'lufode / -en'],
            ['причастие II', '(ġe)frem{{ed}}', '(ġe)hīer{{ed}}', '(ġe)luf{{od}}']
          ],
          note: 'Поздн. -odon может писаться -edon, -adon.' },
        { type: 'rule', text: 'I класс: краткая основа → **-ede** (fremede, nerede), долгая → **-de** (hīerde, dēmde). После глухого согласного **-de → -te**: cyssan → **cyste**, mētan → **mētte**, dyppan → **dypte**. II класс — всегда **-ode**.' },
        { type: 'rule', text: 'Причастие II обычно с приставкой **ġe-** (ġehīered, ġelufod); у глаголов с безударной приставкой (be-, for-, ā-) её нет.' },
        { type: 'table', caption: 'Неправильные глаголы I класса', head: ['инфинитив', 'претерит', 'причастие', 'значение'],
          rows: [
            ['sēċan', 'sōhte', 'sōht', 'искать'],
            ['tǣċan', 'tǣhte', 'tǣht', 'учить'],
            ['þenċan', 'þōhte', 'þōht', 'думать'],
            ['bringan', 'brōhte', 'brōht', 'приносить'],
            ['bycgan', 'bohte', 'boht', 'покупать'],
            ['wyrċan', 'worhte', 'worht', 'делать, строить'],
            ['sellan', 'sealde', 'seald', 'давать, продавать'],
            ['tellan', 'tealde', 'teald', 'считать, рассказывать']
          ],
          note: 'В претерите нет умлаута, который есть в настоящем (так называемый «обратный умлаут»).' },
        { type: 'contrast', text: 'Перфектив/имперфектив не различаются: **hē sōhte** — и «искал», и «поискал». Приставка ġe- у глаголов иногда даёт значение результата (**ġesēċan** «найти, посетить»), но это не системный вид, как в русском.' },
        { type: 'tip', text: 'Эти глаголы почти без изменений дожили до совр. английского: seek — sought, think — thought, bring — brought, buy — bought, work — wrought, sell — sold, tell — told, teach — taught.' },
        { type: 'pitfall', text: '**sealde** — от sellan «давать», не от *sealdan. **þōhte** (þenċan «думать») и **þūhte** (þynċan «казаться») — разные глаголы: *mē þūhte* «мне казалось».' }
      ],
      vocab: [
        { id: 'ang-secan', w: 'sēċan', ru: 'искать; посещать', pos: 'v', forms: 'sēċan, sōhte, sōht (сл. I)', ex: 'Hīe sōhton þone cyning.', exRu: 'Они искали короля.', note: 'Совр. seek — sought.' },
        { id: 'ang-thencan', w: 'þenċan', ru: 'думать, намереваться', pos: 'v', forms: 'þenċan, þōhte, þōht (сл. I)', ex: 'Hē þōhte þæt hē cōme.', exRu: 'Он думал, что придёт.', note: null },
        { id: 'ang-bringan', w: 'bringan', ru: 'приносить, приводить', pos: 'v', forms: 'bringan, brōhte, brōht (сл. I; реже сильн. brang)', ex: 'Hē brōhte hlāf.', exRu: 'Он принёс хлеб.', note: null },
        { id: 'ang-bycgan', w: 'bycgan', ru: 'покупать', pos: 'v', forms: 'bycgan, bohte, boht (сл. I)', ex: 'Hē bohte hors.', exRu: 'Он купил коня.', note: 'cg = [dʒ].' },
        { id: 'ang-wyrcan', w: 'wyrċan', ru: 'делать, строить, исполнять', pos: 'v', forms: 'wyrċan, worhte, worht (сл. I)', ex: 'Hīe worhton ġeweorc.', exRu: 'Они построили укрепление.', note: 'Совр. work — wrought.' },
        { id: 'ang-sellan', w: 'sellan', ru: 'давать; продавать', pos: 'v', forms: 'sellan, sealde, seald (сл. I)', ex: 'Hē sealde him þæt sweord.', exRu: 'Он дал ему меч.', note: 'Повел. sele (поздн. syle).' },
        { id: 'ang-tellan', w: 'tellan', ru: 'считать; рассказывать', pos: 'v', forms: 'tellan, tealde, teald (сл. I)', ex: 'Hē tealde þā scipu.', exRu: 'Он пересчитал корабли.', note: null },
        { id: 'ang-cyssan', w: 'cyssan', ru: 'целовать', pos: 'v', forms: 'cyssan, cyste, cyssed (сл. I)', ex: 'Hē cyste his sunu.', exRu: 'Он поцеловал сына.', note: '-te после глухого.' },
        { id: 'ang-metan', w: 'mētan', ru: 'встречать, находить', pos: 'v', forms: 'mētan, mētte, mēted (сл. I)', ex: 'Hē mētte his frēond.', exRu: 'Он встретил своего друга.', note: 'Не путать с metan (V кл.) «мерить».' },
        { id: 'ang-geliefan', w: 'ġelīefan', ru: 'верить (+ дат.; on + вин.)', pos: 'v', forms: 'ġelīefan, ġelīefde, ġelīefed (сл. I)', ex: 'Iċ ġelīefe on God.', exRu: 'Я верую в Бога.', note: 'Поздн. ġelȳfan. Нем. glauben.' },
        { id: 'ang-daelan', w: 'dǣlan', ru: 'делить, раздавать', pos: 'v', forms: 'dǣlan, dǣlde, dǣled (сл. I)', ex: 'Hē dǣlde his ǣhta.', exRu: 'Он разделил своё имущество.', note: 'Совр. deal.' },
        { id: 'ang-feran', w: 'fēran', ru: 'идти, ехать, отправляться', pos: 'v', forms: 'fēran, fērde, fēred (сл. I)', ex: 'Hē fērde tō Rōme.', exRu: 'Он отправился в Рим.', note: null }
      ],
      text: null
    },
    {
      id: 'ang-u04-l03',
      kind: 'grammar',
      title: 'III класс, повелительное, инфинитивы и причастия',
      goals: ['Спрягать habban, libban, secgan, hycgan', 'Образовывать повелительное наклонение', 'Узнавать склоняемый инфинитив и перифрастические времена'],
      skills: ['ang.verb.weak3', 'ang.verb.imper', 'ang.verb.nonfinite'],
      theory: [
        { type: 'table', caption: 'Слабые глаголы III класса', head: ['', 'habban «иметь»', 'libban «жить»', 'secgan «говорить»', 'hycgan «думать»'],
          rows: [
            ['iċ', 'hæbbe', 'libbe', 'secge', 'hycge'],
            ['þū', 'hæfst', 'leofast', 'sæġst', 'hogast'],
            ['hē', 'hæfþ', 'leofaþ', 'sæġþ', 'hogaþ'],
            ['мн.', 'habbaþ', 'libbaþ', 'secgaþ', 'hycgaþ'],
            ['претерит', 'hæfde', 'lifde', 'sæġde', 'hogde'],
            ['причастие II', 'hæfd', 'lifd', 'sæġd', 'hogd'],
            ['повел. ед.', 'hafa', 'leofa', 'sæġe', 'hoga']
          ],
          note: 'Поздн.: hafast, hafaþ; leofode, lifode (по II классу). Отриц.: nabban, næfþ, næfde.' },
        { type: 'table', caption: 'Повелительное наклонение', head: ['', 'ед.', 'мн.'],
          rows: [
            ['I кл., краткая основа', 'frem{{e}}, ner{{e}}', 'fremm{{aþ}}, neri{{aþ}}'],
            ['I кл., долгая основа', 'hīer, dēm', 'hīer{{aþ}}, dēm{{aþ}}'],
            ['II кл.', 'luf{{a}}', 'lufi{{aþ}}'],
            ['сильные', 'rīd, ber, help', 'rīd{{aþ}}, ber{{aþ}}']
          ],
          note: 'Призыв «давайте…» — uton + инфинитив: uton gān «пойдёмте».' },
        { type: 'rule', text: 'Инфинитив на **-an** (lufian, hīeran) — после модальных глаголов и глаголов движения. **Склоняемый инфинитив** — **tō + -enne** (tō hīerenne, tō lufienne): цель или долженствование: **Hē cōm tō hīerenne** «он пришёл послушать»; **Þæt is tō witenne** «это следует знать».' },
        { type: 'rule', text: '**Причастие I** — на **-ende** (lufiende, hīerende), склоняется как прилагательное. **Перфект/плюсквамперфект**: **habban + прич. II** (*hē hæfde ġedōn* «он сделал»), у непереходных глаголов движения — **bēon/wesan + прич. II** (*hē wæs ġecumen* «он пришёл»). **Пассив**: **bēon/wesan/weorþan + прич. II** (*hē wæs ofslæġen* «он был убит»).' },
        { type: 'contrast', text: 'Русское «-ющий» и древнеанглийское -ende — оба полноценные склоняемые причастия, но аналитического перфекта в русском нет: *hē hæfde ġedōn* соответствует простому «он сделал (уже)».' },
        { type: 'pitfall', text: 'В **sæġst, sæġþ, sæġde** — æ и палатальный ġ, а в **secgan, secge** — e и cg [dʒ]: это одна основа с чередованием.' }
      ],
      vocab: [
        { id: 'ang-habban', w: 'habban', ru: 'иметь', pos: 'v', forms: 'habban, hæfde, hæfd (сл. III)', ex: 'Iċ hæbbe twēġen suna.', exRu: 'У меня двое сыновей.', note: 'Отриц. nabban.' },
        { id: 'ang-libban', w: 'libban', ru: 'жить', pos: 'v', forms: 'libban, lifde (leofode), lifd (сл. III)', ex: 'Hē leofaþ on sibbe.', exRu: 'Он живёт в мире.', note: null },
        { id: 'ang-secgan', w: 'secgan', ru: 'говорить, рассказывать', pos: 'v', forms: 'secgan, sæġde, sæġd (сл. III)', ex: 'Hwæt sæġst þū?', exRu: 'Что скажешь ты?', note: 'Совр. say — said.' },
        { id: 'ang-hycgan', w: 'hycgan', ru: 'думать, замышлять', pos: 'v', forms: 'hycgan, hogde, hogd (сл. III)', ex: 'Hwæt hogast þū?', exRu: 'Что ты замышляешь?', note: 'Чаще в поэзии.' },
        { id: 'ang-andswarian', w: 'andswarian', ru: 'отвечать (+ дат.)', pos: 'v', forms: 'andswarian, andswarode, andswarod (сл. II)', ex: 'Hē andswarode him.', exRu: 'Он ответил ему.', note: 'Приставка and- ударна в существительном andswaru.' },
        { id: 'ang-ascian', w: 'āscian', ru: 'спрашивать', pos: 'v', forms: 'āscian, āscode, āscod (сл. II)', ex: 'Hē āscode hine.', exRu: 'Он спросил его.', note: 'Поздн. āxian (метатеза; ср. диал. ax).' },
        { id: 'ang-bodian', w: 'bodian', ru: 'возвещать, проповедовать', pos: 'v', forms: 'bodian, bodode, bodod (сл. II)', ex: 'Hē bodode Godes word.', exRu: 'Он проповедовал слово Божье.', note: null },
        { id: 'ang-folgian', w: 'folgian', ru: 'следовать (+ дат.)', pos: 'v', forms: 'folgian, folgode, folgod (сл. II)', ex: 'Hīe folgodon him.', exRu: 'Они последовали за ним.', note: 'Совр. follow.' },
        { id: 'ang-locian', w: 'lōcian', ru: 'смотреть', pos: 'v', forms: 'lōcian, lōcode, lōcod (сл. II)', ex: 'Lōca nū!', exRu: 'Смотри же!', note: 'Совр. look.' },
        { id: 'ang-hopian', w: 'hopian', ru: 'надеяться', pos: 'v', forms: 'hopian, hopode, hopod (сл. II)', ex: 'Wē hopiaþ tō Gode.', exRu: 'Мы уповаем на Бога.', note: 'hopian tō + дат. «уповать на».' }
      ],
      text: null
    },
    {
      id: 'ang-u04-l04',
      kind: 'reading',
      title: 'Эльфрик, «Беседа»: пахарь',
      goals: ['Читать диалог с подстрочником', 'Находить слабые глаголы и определять класс', 'Узнавать дательный самостоятельный'],
      skills: ['ang.reading', 'ang.verb.weak.pres', 'ang.verb.weak.pret'],
      theory: [
        { type: 'p', text: 'Учитель расспрашивает учеников о ремёслах: пахарь, пастух, охотник, рыбак... Ниже — первая сцена, в нормализованной орфографии глоссы.' },
        { type: 'rule', text: '**Дательный самостоятельный** — калька латинского ablativus absolutus: *ġeiukodan oxan and ġefæstnodon sceare and cultre mid þǣre sylh* «запрягши быков и прикрепив лемех и резак к плугу» (букв. «запряжённым быкам и прикреплённым лемеху и резаку»).' },
        { type: 'p', text: '**deorfe** — от deorfan (III кл.) «трудиться»; **þȳwende** — причастие I от þȳwan «гнать»; **durre** — сосл. от durran «сметь»; **sceal** — «должен» (sculan, юнит 8); **sylh** — дат. от sulh f. «плуг».' }
      ],
      vocab: [
        { id: 'ang-yrthling', w: 'yrþling', ru: 'пахарь', pos: 'n', g: 'm', forms: 'yrþling, -es m. (a-основа)', ex: 'Se yrþling ereþ.', exRu: 'Пахарь пашет.', note: 'От erian.' },
        { id: 'ang-oxa', w: 'oxa', ru: 'бык, вол', pos: 'n', g: 'm', forms: 'oxa, -an m. (n-основа; мн. oxan)', ex: 'Hē drīfþ þā oxan.', exRu: 'Он гонит быков.', note: 'Мн. oxan → совр. oxen.' },
        { id: 'ang-aecer', w: 'æcer', ru: 'пашня, поле; акр', pos: 'n', g: 'm', forms: 'æcer, æcres m. (a-основа)', ex: 'fulne æcer', exRu: 'целый акр', note: 'Нем. Acker.' },
        { id: 'ang-weorc', w: 'weorc', ru: 'работа, дело', pos: 'n', g: 'n', forms: 'weorc, -es n. (a-основа)', ex: 'Hū beġǣst þū þīn weorc?', exRu: 'Как ты исполняешь свою работу?', note: 'Нем. Werk.' },
        { id: 'ang-gefera', w: 'ġefēra', ru: 'спутник, товарищ', pos: 'n', g: 'm', forms: 'ġefēra, -an m. (n-основа)', ex: 'mid his ġefērum', exRu: 'со своими товарищами', note: 'Букв. «попутчик», от fēran.' },
        { id: 'ang-cnapa', w: 'cnapa', ru: 'мальчик, слуга', pos: 'n', g: 'm', forms: 'cnapa, -an m. (n-основа)', ex: 'Iċ hæbbe sumne cnapan.', exRu: 'У меня есть один мальчик.', note: 'Нем. Knabe; совр. knave.' },
        { id: 'ang-erian', w: 'erian', ru: 'пахать', pos: 'v', forms: 'erian, erede, ered (сл. I)', ex: 'Iċ sceal erian.', exRu: 'Я должен пахать.', note: null },
        { id: 'ang-lutian', w: 'lūtian', ru: 'прятаться, таиться', pos: 'v', forms: 'lūtian, lūtode, lūtod (сл. II)', ex: 'Hē lūtode æt hām.', exRu: 'Он прятался дома.', note: null },
        { id: 'ang-ut', w: 'ūt', ru: 'наружу, вон', pos: 'adv', forms: 'ūte «снаружи»', ex: 'Iċ gā ūt.', exRu: 'Я выхожу.', note: 'Совр. out, нем. aus.' },
        { id: 'ang-thearle', w: 'þearle', ru: 'сильно, крайне', pos: 'adv', forms: null, ex: 'Þearle iċ deorfe.', exRu: 'Я тружусь очень тяжко.', note: null }
      ],
      text: {
        title: 'Ælfric, Colloquium (глосса): пахарь',
        lines: [
          { t: 'Hwæt sæġst þū, yrþling? Hū beġǣst þū weorc þīn?', ru: 'Что скажешь ты, пахарь? Как ты исполняешь свою работу?' },
          { t: 'Ēalā, lēof hlāford, þearle iċ deorfe.', ru: '— О, милый господин, я тружусь очень тяжко.' },
          { t: 'Iċ gā ūt on dæġrǣd, þȳwende oxan tō felda, and iugie hīe tō sylh.', ru: 'Я выхожу на рассвете, гоню быков в поле и запрягаю их в плуг.' },
          { t: 'Nis hit swā stearc winter þæt iċ durre lūtian æt hām for eġe hlāfordes mīnes,', ru: 'Нет такой суровой зимы, чтобы я осмелился отсиживаться дома из страха перед моим господином,' },
          { t: 'ac ġeiukodan oxan and ġefæstnodon sceare and cultre mid þǣre sylh,', ru: 'но, запрягши быков и прикрепив к плугу лемех и резак,' },
          { t: 'ǣlċe dæġ iċ sceal erian fulne æcer oþþe māre.', ru: 'каждый день я должен вспахать целый акр или больше.' },
          { t: 'Hæfst þū ǣniġne ġefēran?', ru: '— Есть ли у тебя какой-нибудь помощник?' },
          { t: 'Iċ hæbbe sumne cnapan þȳwende oxan mid gādīsene, þe ēac swilċe nū hās is for ċyle and hrēame.', ru: '— У меня есть мальчик, что погоняет быков стрекалом; он тоже теперь охрип от холода и крика.' }
        ]
      }
    }
  ]
};

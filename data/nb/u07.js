export default {
  id: 'nb-u07',
  title: 'Passiv, s-verb og det-konstruksjoner',
  titleRu: 'Пассив, s-глаголы и конструкции с det',
  summary: 's-пассив и bli-пассив, состояние с være + причастие, отложительные и взаимные глаголы на -s (synes, finnes, møtes), формальное подлежащее det и презентативные конструкции.',
  lessons: [
    {
      id: 'nb-u07-l01',
      kind: 'grammar',
      title: 's-пассив',
      goals: ['Образовывать s-пассив от инфинитива и презенса', 'Употреблять s-пассив после модальных, в объявлениях и инструкциях'],
      skills: ['nb.verb.s-passive'],
      theory: [
        { type: 'rule', text: 's-пассив = инфинитив + {{s}}: male → male{{s}}, selge → selge{{s}}, skrive → skrive{{s}}. Эта форма служит и инфинитивом, и презенсом пассива.' },
        { type: 'table', head: ['Актив', 's-пассив'], rows: [
          ['De selger leiligheten.', 'Leiligheten selge{{s}}.'],
          ['Man må reparere bilen.', 'Bilen må repareres.'],
          ['Vi serverer frokost fra klokka sju.', 'Frokost serveres fra klokka sju.'],
          ['Man snakker norsk her.', 'Her snakkes det norsk.']
        ], note: 'Претерит s-пассива (byggdes) — книжный и редкий; для прошлого используйте bli-пассив.' },
        { type: 'p', text: 'Типичные сферы: **после модальных** (*må, kan, skal, bør* + инфинитив на -s), **общие и повторяющиеся** ситуации, **объявления, вывески, инструкции**: *Leilighet selges. Billetter kan kjøpes på nettet. Butikken stenges klokka åtte.*' },
        { type: 'contrast', text: 'Русское «-ся» в пассивном значении («дом продаётся», «билеты продаются в кассе») — близкий аналог s-пассива. Но не всякий русский глагол на -ся пассивен, и не всякий норвежский на -s (юнит 7, урок 3).' },
        { type: 'pitfall', text: 'Глаголы с презенсом на *-r* от инфинитива без -e: s прибавляется к инфинитиву, а не к презенсу: ✗ *forbyrs* → *forbys*.' },
        { type: 'examples', items: [
          { t: 'Røyking er forbudt. Det må ikke røykes her.', ru: 'Курение запрещено. Здесь нельзя курить.' },
          { t: 'Huset skal males i sommer.', ru: 'Дом будут красить этим летом.' },
          { t: 'Denne regelen brukes ofte.', ru: 'Это правило часто используется.' }
        ] },
        { type: 'tip', text: 'Агенс при s-пассиве почти не выражают; если нужно назвать деятеля — лучше bli-пассив с *av* или актив.' }
      ],
      vocab: [
        { id: 'nb-bygge', w: 'bygge', ru: 'строить', pos: 'v', g: null, forms: 'bygger, bygde, har bygd', ex: 'Her skal det bygges en ny skole.', exRu: 'Здесь будут строить новую школу.', note: 'Допустимо: bygget, har bygget.' },
        { id: 'nb-reparere', w: 'reparere', ru: 'ремонтировать', pos: 'v', g: null, forms: 'reparerer, reparerte, har reparert', ex: 'Bilen må repareres.', exRu: 'Машину нужно отремонтировать.', note: null },
        { id: 'nb-stenge', w: 'stenge', ru: 'закрывать (учреждение, дорогу)', pos: 'v', g: null, forms: 'stenger, stengte, har stengt', ex: 'Butikken stenges klokka åtte.', exRu: 'Магазин закрывается в восемь.', note: 'Дверь, окно — lukke.' },
        { id: 'nb-bruke', w: 'bruke', ru: 'использовать; тратить', pos: 'v', g: null, forms: 'bruker, brukte, har brukt', ex: 'Dette ordet brukes ofte.', exRu: 'Это слово часто используется.', note: 'bruke tid/penger på — тратить время/деньги на.' },
        { id: 'nb-servere', w: 'servere', ru: 'подавать (еду)', pos: 'v', g: null, forms: 'serverer, serverte, har servert', ex: 'Frokost serveres fra klokka sju.', exRu: 'Завтрак подаётся с семи часов.', note: null },
        { id: 'nb-røyke', w: 'røyke', ru: 'курить', pos: 'v', g: null, forms: 'røyker, røykte, har røykt', ex: 'Det må ikke røykes her.', exRu: 'Здесь нельзя курить.', note: null },
        { id: 'nb-forby', w: 'forby', ru: 'запрещать', pos: 'v', g: null, forms: 'forbyr, forbød, har forbudt', ex: 'Røyking er forbudt.', exRu: 'Курение запрещено.', note: 'Сильный глагол (как by — bød — budt).' },
        { id: 'nb-regel', w: 'regel', ru: 'правило', pos: 'n', g: 'm', forms: 'regelen, regler, reglene', ex: 'Det finnes mange regler.', exRu: 'Существует много правил.', note: 'Синкопа: regler. Som regel — как правило.' },
        { id: 'nb-skilt', w: 'skilt', ru: 'вывеска, табличка, знак', pos: 'n', g: 'n', forms: 'skiltet, skilt, skiltene', ex: 'Hva står det på skiltet?', exRu: 'Что написано на табличке?', note: null },
        { id: 'nb-annonse', w: 'annonse', ru: 'объявление, реклама', pos: 'n', g: 'm', forms: 'annonsen, annonser, annonsene', ex: 'Jeg leste annonsen i avisa.', exRu: 'Я прочитал объявление в газете.', note: null },
        { id: 'nb-butikk', w: 'butikk', ru: 'магазин', pos: 'n', g: 'm', forms: 'butikken, butikker, butikkene', ex: 'Butikken er åpen til ti.', exRu: 'Магазин открыт до десяти.', note: 'Не magasin (= журнал)!' },
        { id: 'nb-åpen', w: 'åpen', ru: 'открытый', pos: 'adj', g: null, forms: 'åpent, åpne', ex: 'Vinduet er åpent.', exRu: 'Окно открыто.', note: 'Синкопа: åpne.' }
      ],
      text: null
    },
    {
      id: 'nb-u07-l02',
      kind: 'grammar',
      title: 'bli-пассив и состояние',
      goals: ['Образовывать bli-пассив во всех временах', 'Вводить агенс предлогом av', 'Различать bli + причастие (процесс) и være + причастие (состояние)'],
      skills: ['nb.verb.bli-passive'],
      theory: [
        { type: 'rule', text: 'bli-пассив = **bli** + причастие II: *blir malt* (презенс), *ble malt* (претерит), *har blitt malt / er blitt malt* (перфект). Деятель вводится предлогом **av**.' },
        { type: 'table', head: ['Время', 'Пассив', 'Перевод'], rows: [
          ['презенс', 'Huset blir malt.', 'Дом красят.'],
          ['претерит', 'Huset ble malt i fjor.', 'Дом покрасили в прошлом году.'],
          ['перфект', 'Huset har blitt malt.', 'Дом (уже) покрашен.'],
          ['с модальным', 'Huset skal bli malt.', 'Дом будут красить.']
        ] },
        { type: 'p', text: '**s- или bli-?** bli-пассив — конкретное событие, процесс, особенно в прошлом; s-пассив — общее правило, после модальных. *Bilen ble stjålet i går* (событие) — *Biler må låses* (правило).' },
        { type: 'p', text: '**være + причастие** обозначает состояние-результат: *Butikken er stengt. Døra er låst. Boka er oversatt til russisk.* Ср. *Butikken blir stengt klokka åtte* — процесс.' },
        { type: 'examples', items: [
          { t: '«Skrik» ble malt av Edvard Munch i 1893.', ru: '«Крик» был написан Эдвардом Мунком в 1893 году.' },
          { t: 'Maleriet ble stjålet i 2004.', ru: 'Картина была украдена в 2004 году.' },
          { t: 'To personer ble skadet i ulykka.', ru: 'Два человека пострадали в аварии.' },
          { t: 'Hun har blitt ansatt som lege.', ru: 'Её взяли на работу врачом.' }
        ] },
        { type: 'contrast', text: 'Русское «был написан» (быть + краткое причастие) — это скорее *ble skrevet* (событие), а «написан» в смысле «готов» — *er skrevet*. Русская неопределённо-личная конструкция («дом покрасили») по-норвежски часто передаётся пассивом.' },
        { type: 'pitfall', text: 'Причастие в пассиве в современном букмоле обычно не согласуется: *Husene ble solgt.* Перфект пассива — *har blitt* или *er blitt*, но не ✗ *har vært malt* в значении «покрасили».' }
      ],
      vocab: [
        { id: 'nb-oppdage', w: 'oppdage', ru: 'обнаруживать, открывать', pos: 'v', g: null, forms: 'oppdager, oppdaget, har oppdaget', ex: 'Feilen ble oppdaget i går.', exRu: 'Ошибку обнаружили вчера.', note: null },
        { id: 'nb-skade', w: 'skade', ru: 'повреждать, ранить', pos: 'v', g: null, forms: 'skader, skadet, har skadet', ex: 'Ingen ble skadet.', exRu: 'Никто не пострадал.', note: 'Сущ. en skade — повреждение, травма.' },
        { id: 'nb-stjele', w: 'stjele', ru: 'красть', pos: 'v', g: null, forms: 'stjeler, stjal, har stjålet', ex: 'Sykkelen min ble stjålet.', exRu: 'У меня украли велосипед.', note: 'Ряд e — a — å.' },
        { id: 'nb-ansette', w: 'ansette', ru: 'нанимать, брать на работу', pos: 'v', g: null, forms: 'ansetter, ansatte, har ansatt', ex: 'Hun ble ansatt i fjor.', exRu: 'Её приняли на работу в прошлом году.', note: 'en ansatt — сотрудник.' },
        { id: 'nb-male', w: 'male', ru: 'красить; рисовать (красками)', pos: 'v', g: null, forms: 'maler, malte, har malt', ex: 'Huset ble malt i fjor.', exRu: 'Дом покрасили в прошлом году.', note: 'Омоним: male — молоть.' },
        { id: 'nb-maleri', w: 'maleri', ru: 'картина (живопись)', pos: 'n', g: 'n', forms: 'maleriet, malerier, maleriene', ex: 'Maleriet henger i Munchmuseet.', exRu: 'Картина висит в музее Мунка.', note: 'Суффикс -eri → средний род.' },
        { id: 'nb-politi', w: 'politi', ru: 'полиция', pos: 'n', g: 'n', forms: 'politiet', ex: 'Ring politiet!', exRu: 'Звони в полицию!', note: 'Средний род! en politi — полицейский (разг.).' },
        { id: 'nb-tyv', w: 'tyv', ru: 'вор', pos: 'n', g: 'm', forms: 'tyven, tyver, tyvene', ex: 'Tyven ble tatt av politiet.', exRu: 'Вора поймала полиция.', note: null },
        { id: 'nb-ulykke', w: 'ulykke', ru: 'несчастный случай, авария', pos: 'n', g: 'f', forms: 'ulykka, ulykker, ulykkene', ex: 'Det skjedde en ulykke på veien.', exRu: 'На дороге произошла авария.', note: 'Допустимо: ulykken.' },
        { id: 'nb-sykehus', w: 'sykehus', ru: 'больница', pos: 'n', g: 'n', forms: 'sykehuset, sykehus, sykehusene', ex: 'Han ble kjørt til sykehuset.', exRu: 'Его отвезли в больницу.', note: 'på sykehuset — в больнице.' },
        { id: 'nb-lege', w: 'lege', ru: 'врач', pos: 'n', g: 'm', forms: 'legen, leger, legene', ex: 'Jeg må gå til legen.', exRu: 'Мне нужно сходить к врачу.', note: 'hos legen — у врача.' }
      ],
      text: null
    },
    {
      id: 'nb-u07-l03',
      kind: 'grammar',
      title: 's-глаголы: synes, finnes, møtes',
      goals: ['Знать формы отложительных глаголов', 'Употреблять взаимные s-глаголы', 'Различать synes, tro и tenke'],
      skills: ['nb.verb.s-verbs'],
      theory: [
        { type: 'rule', text: 'Некоторые глаголы существуют **только** с -s и не являются пассивом (отложительные, *deponens*): *synes, finnes, trives, lykkes*. Другие на -s выражают **взаимность**: *møtes, ses, snakkes, slåss*.' },
        { type: 'table', head: ['Инфинитив', 'Презенс', 'Претерит', 'Перфект', 'Значение'], rows: [
          ['synes', 'synes', 'syntes', 'har syntes', 'считать, полагать'],
          ['finnes', 'finnes', 'fantes', 'har funnes', 'существовать, иметься'],
          ['trives', 'trives', 'trivdes', 'har trivdes', 'хорошо себя чувствовать, прижиться'],
          ['lykkes', 'lykkes', 'lyktes', 'har lyktes', 'удаваться'],
          ['møtes', 'møtes', 'møttes', 'har møttes', 'встречаться (друг с другом)'],
          ['slåss', 'slåss', 'sloss', 'har slåss', 'драться']
        ], note: 'Презенс synes — допустимо syns.' },
        { type: 'h', text: '«Думать»: synes, tro, tenke' },
        { type: 'table', head: ['Глагол', 'Смысл', 'Пример'], rows: [
          ['synes', 'мнение на основе собственного опыта', 'Jeg synes filmen var bra.'],
          ['tro', 'предположение, вера (без опыта)', 'Jeg tror det blir regn.'],
          ['tenke', 'процесс мышления; намерение', 'Jeg tenker på deg. Jeg tenker å reise.']
        ] },
        { type: 'contrast', text: 'Русское «думать» покрывает все три глагола. Как и русское *-ся* («бояться», «нравиться»), норвежское *-s* не всегда значит пассив: *Vi møtes i morgen* — «Мы встречаемся завтра».' },
        { type: 'pitfall', text: '✗ *Jeg tror at filmen var bra*, если вы фильм видели, — тут нужно *synes*. ✗ *Jeg synes det blir regn* — прогноз без опыта: *tror*.' },
        { type: 'examples', items: [
          { t: 'Hvordan trives du i Norge?', ru: 'Как тебе живётся в Норвегии?' },
          { t: 'Det finnes ikke dårlig vær, bare dårlige klær.', ru: 'Не бывает плохой погоды, бывает плохая одежда.' },
          { t: 'Vi møttes på et kurs i Bergen.', ru: 'Мы познакомились на курсах в Бергене.' },
          { t: 'Vi ses i morgen!', ru: 'Увидимся завтра!' }
        ] }
      ],
      vocab: [
        { id: 'nb-synes', w: 'synes', ru: 'считать, находить (по опыту)', pos: 'v', g: null, forms: 'synes, syntes, har syntes', ex: 'Jeg synes boka er spennende.', exRu: 'По-моему, книга интересная.', note: 'Допустимо: syns.' },
        { id: 'nb-finnes', w: 'finnes', ru: 'существовать, иметься', pos: 'v', g: null, forms: 'finnes, fantes, har funnes', ex: 'Det finnes mange fjorder i Norge.', exRu: 'В Норвегии много фьордов.', note: 'Обычно с формальным det.' },
        { id: 'nb-trives', w: 'trives', ru: 'чувствовать себя хорошо, прижиться', pos: 'v', g: null, forms: 'trives, trivdes, har trivdes', ex: 'Jeg trives godt på jobben.', exRu: 'Мне нравится на работе.', note: null },
        { id: 'nb-lykkes', w: 'lykkes', ru: 'удаваться, добиваться успеха', pos: 'v', g: null, forms: 'lykkes, lyktes, har lyktes', ex: 'Han lyktes med planen sin.', exRu: 'Его план удался.', note: 'Lykke til! — Удачи!' },
        { id: 'nb-møtes', w: 'møtes', ru: 'встречаться (друг с другом)', pos: 'v', g: null, forms: 'møtes, møttes, har møttes', ex: 'Vi møtes utenfor kinoen.', exRu: 'Встречаемся у кинотеатра.', note: 'Ср. møte noen — встретить кого-то.' },
        { id: 'nb-slåss', w: 'slåss', ru: 'драться', pos: 'v', g: null, forms: 'slåss, sloss, har slåss', ex: 'Guttene slåss i skolegården.', exRu: 'Мальчики дерутся в школьном дворе.', note: null },
        { id: 'nb-vi-ses', w: 'vi ses', ru: 'увидимся', pos: 'phr', g: null, forms: null, ex: 'Vi ses i morgen!', exRu: 'Увидимся завтра!', note: 'Также vi sees.' },
        { id: 'nb-vi-snakkes', w: 'vi snakkes', ru: 'созвонимся, поговорим (позже)', pos: 'phr', g: null, forms: null, ex: 'Ha det, vi snakkes!', exRu: 'Пока, созвонимся!', note: null },
        { id: 'nb-høres-ut', w: 'høres ut', ru: 'звучать, казаться (на слух)', pos: 'phr', g: null, forms: null, ex: 'Det høres bra ut!', exRu: 'Звучит отлично!', note: null },
        { id: 'nb-glad-i', w: 'være glad i', ru: 'любить', pos: 'phr', g: null, forms: null, ex: 'Jeg er glad i deg.', exRu: 'Я тебя люблю.', note: 'glad — рад; glad i — любить (людей, еду, занятия).' },
        { id: 'nb-fornøyd', w: 'fornøyd', ru: 'довольный', pos: 'adj', g: null, forms: 'fornøyd, fornøyde', ex: 'Er du fornøyd med jobben?', exRu: 'Ты доволен работой?', note: '+ med.' }
      ],
      text: null
    },
    {
      id: 'nb-u07-l04',
      kind: 'grammar',
      title: 'Формальное det; der или det',
      goals: ['Употреблять формальное подлежащее det', 'Строить презентативные предложения с неопределённым подлежащим', 'Строить выделительные конструкции det er … som'],
      skills: ['nb.syntax.det'],
      theory: [
        { type: 'rule', text: 'В норвежском предложении **подлежащее обязательно**. Если смыслового подлежащего нет или оно «новое» (неопределённое), место занимает формальное **det**.' },
        { type: 'table', head: ['Тип', 'Пример', 'Перевод'], rows: [
          ['погода, время', 'Det regner. Det er sent.', 'Идёт дождь. Поздно.'],
          ['презентативное', 'Det sitter en katt på taket.', 'На крыше сидит кошка.'],
          ['существование', 'Det finnes mange fjorder.', 'Существует много фьордов.'],
          ['подлежащее-инфинитив/придаточное', 'Det er vanskelig å lære norsk.', 'Учить норвежский трудно.'],
          ['пассив', 'Det ble sagt at …', 'Было сказано, что …'],
          ['выделение', 'Det var Per som ringte.', 'Звонил именно Пер.']
        ] },
        { type: 'rule', text: 'Презентативное *det*: смысловое подлежащее **неопределённое** и стоит после глагола: *Det står en mann ved døra* (не ✗ *Det står mannen…*). Глаголы: *være, stå, sitte, ligge, komme, bo, finnes*.' },
        { type: 'p', text: '**der** — наречие «там» (место), пара к *dit* «туда» и *her* «здесь». Как формальное подлежащее *der* — датская норма, в букмоле ошибка.' },
        { type: 'contrast', text: 'Русские безличные и бытийные предложения обходятся без подлежащего: «Холодно», «На столе лежит книга». По-норвежски: *Det er kaldt. Det ligger ei bok på bordet.*' },
        { type: 'pitfall', text: '✗ *Der er en bok på bordet* (датский) → *Det er ei bok på bordet*. ✗ *Er kaldt* → *Det er kaldt*.' },
        { type: 'examples', items: [
          { t: 'Det er mange mennesker i køen.', ru: 'В очереди много людей.' },
          { t: 'Det mangler en stol her.', ru: 'Здесь не хватает стула.' },
          { t: 'Er det noen plass ledig?', ru: 'Есть свободное место?' },
          { t: 'Det var her vi møttes.', ru: 'Именно здесь мы познакомились.' }
        ] }
      ],
      vocab: [
        { id: 'nb-her', w: 'her', ru: 'здесь, тут', pos: 'adv', g: null, forms: null, ex: 'Bor du her?', exRu: 'Ты здесь живёшь?', note: 'Направление «сюда» — hit.' },
        { id: 'nb-der', w: 'der', ru: 'там', pos: 'adv', g: null, forms: null, ex: 'Der borte er stasjonen.', exRu: 'Вон там вокзал.', note: 'Направление «туда» — dit. Не формальное подлежащее!' },
        { id: 'nb-tak', w: 'tak', ru: 'крыша; потолок', pos: 'n', g: 'n', forms: 'taket, tak, takene', ex: 'Det sitter en katt på taket.', exRu: 'На крыше сидит кошка.', note: null },
        { id: 'nb-vegg', w: 'vegg', ru: 'стена', pos: 'n', g: 'm', forms: 'veggen, vegger, veggene', ex: 'Det henger et bilde på veggen.', exRu: 'На стене висит картина.', note: null },
        { id: 'nb-gulv', w: 'gulv', ru: 'пол', pos: 'n', g: 'n', forms: 'gulvet, gulv, gulvene', ex: 'Det ligger klær på gulvet.', exRu: 'На полу лежит одежда.', note: null },
        { id: 'nb-hylle', w: 'hylle', ru: 'полка', pos: 'n', g: 'f', forms: 'hylla, hyller, hyllene', ex: 'Det står mange bøker i hylla.', exRu: 'На полке стоит много книг.', note: 'Допустимо: hyllen.' },
        { id: 'nb-skap', w: 'skap', ru: 'шкаф', pos: 'n', g: 'n', forms: 'skapet, skap, skapene', ex: 'Koppene står i skapet.', exRu: 'Чашки стоят в шкафу.', note: 'kjøleskap — холодильник.' },
        { id: 'nb-lampe', w: 'lampe', ru: 'лампа', pos: 'n', g: 'f', forms: 'lampa, lamper, lampene', ex: 'Lampa står på bordet.', exRu: 'Лампа стоит на столе.', note: 'Допустимо: lampen.' },
        { id: 'nb-kø', w: 'kø', ru: 'очередь', pos: 'n', g: 'm', forms: 'køen, køer, køene', ex: 'Det er lang kø i butikken.', exRu: 'В магазине длинная очередь.', note: 'stå i kø — стоять в очереди.' },
        { id: 'nb-plass', w: 'plass', ru: 'место; площадь', pos: 'n', g: 'm', forms: 'plassen, plasser, plassene', ex: 'Er denne plassen ledig?', exRu: 'Это место свободно?', note: 'Сравни: et sted — место (пункт).' },
        { id: 'nb-mangle', w: 'mangle', ru: 'не хватать, недоставать', pos: 'v', g: null, forms: 'mangler, manglet, har manglet', ex: 'Det mangler en stol.', exRu: 'Не хватает стула.', note: 'Jeg mangler penger — мне не хватает денег.' }
      ],
      text: null
    },
    {
      id: 'nb-u07-l05',
      kind: 'reading',
      title: 'Første uke på jobben',
      goals: ['Узнавать пассив, s-глаголы и конструкции с det в тексте'],
      skills: ['nb.verb.s-passive', 'nb.verb.bli-passive', 'nb.verb.s-verbs', 'nb.syntax.det'],
      theory: [
        { type: 'p', text: 'Найдите: презентативное *det* (*Det jobber over hundre mennesker*), s-пассив (*serveres*), bli-пассив (*ble jeg invitert*), s-глаголы (*trives, finnes, møtes, høres … ut*).' }
      ],
      vocab: [
        { id: 'nb-lunsj', w: 'lunsj', ru: 'обед (в середине дня), ланч', pos: 'n', g: 'm', forms: 'lunsjen, lunsjer, lunsjene', ex: 'Vi spiser lunsj klokka halv tolv.', exRu: 'Мы обедаем в половине двенадцатого.', note: null },
        { id: 'nb-pause', w: 'pause', ru: 'перерыв', pos: 'n', g: 'm', forms: 'pausen, pauser, pausene', ex: 'Skal vi ta en pause?', exRu: 'Сделаем перерыв?', note: null },
        { id: 'nb-matpakke', w: 'matpakke', ru: 'бутерброды с собой (на обед)', pos: 'n', g: 'f', forms: 'matpakka, matpakker, matpakkene', ex: 'De fleste har med seg matpakke.', exRu: 'Большинство приносит с собой бутерброды.', note: 'Допустимо: matpakken. Реалия.' },
        { id: 'nb-dugnad', w: 'dugnad', ru: 'субботник, совместная бесплатная работа', pos: 'n', g: 'm', forms: 'dugnaden, dugnader, dugnadene', ex: 'På lørdag er det dugnad i borettslaget.', exRu: 'В субботу в жилкооперативе субботник.', note: 'Реалия.' },
        { id: 'nb-uformell', w: 'uformell', ru: 'неформальный', pos: 'adj', g: null, forms: 'uformelt, uformelle', ex: 'Tonen på jobben er uformell.', exRu: 'Атмосфера на работе неформальная.', note: 'll → l перед t.' },
        { id: 'nb-sjef', w: 'sjef', ru: 'начальник', pos: 'n', g: 'm', forms: 'sjefen, sjefer, sjefene', ex: 'Sjefen min heter Morten.', exRu: 'Моего начальника зовут Мортен.', note: null }
      ],
      text: {
        title: 'Første uke på jobben',
        lines: [
          { t: 'Jeg har nettopp begynt i en ny jobb i Stavanger.', ru: 'Я только что вышел на новую работу в Ставангере.' },
          { t: 'Det jobber over hundre mennesker på kontoret.', ru: 'В офисе работает больше ста человек.' },
          { t: 'Kollegene mine er hyggelige, og jeg trives godt.', ru: 'Мои коллеги приятные, и мне здесь хорошо.' },
          { t: 'Klokka halv tolv er det lunsj.', ru: 'В половине двенадцатого — обед.' },
          { t: 'De fleste har med seg matpakke.', ru: 'Большинство приносит с собой бутерброды.' },
          { t: 'Kaffe serveres hele dagen, og det finnes alltid frukt på kjøkkenet.', ru: 'Кофе подают весь день, и на кухне всегда есть фрукты.' },
          { t: 'Tonen er uformell: alle sier du til hverandre, også til sjefen.', ru: 'Атмосфера неформальная: все говорят друг другу «ты», даже начальнику.' },
          { t: 'I går ble jeg invitert på dugnad i borettslaget.', ru: 'Вчера меня пригласили на субботник в жилкооперативе.' },
          { t: 'Alle naboene møtes ute på lørdag og rydder sammen.', ru: 'В субботу все соседи собираются во дворе и вместе наводят порядок.' },
          { t: 'Det høres litt rart ut, men jeg gleder meg!', ru: 'Звучит немного странно, но я жду этого с нетерпением!' }
        ]
      }
    }
  ]
};

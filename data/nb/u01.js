export default {
  id: 'nb-u01',
  title: 'Substantiv: kjønn, bestemthet og flertall',
  titleRu: 'Существительное: род, определённость, множественное число',
  summary: 'Три рода (en/ei/et), суффиксальный определённый артикль, множественное число и нерегулярные формы, генитив на -s. Основа всей именной группы.',
  lessons: [
    {
      id: 'nb-u01-l01',
      kind: 'grammar',
      title: 'Три рода: en, ei, et',
      goals: ['Различать мужской, женский и средний род по артиклю', 'Понимать факультативность женского рода в букмоле', 'Различать артикль et и числительное ett'],
      skills: ['nb.noun.gender'],
      theory: [
        { type: 'h', text: 'Неопределённый артикль' },
        { type: 'table', head: ['Род', 'Артикль', 'Пример', 'Перевод'], rows: [
          ['мужской (hankjønn)', 'en', 'en bil', 'машина'],
          ['женский (hunkjønn)', 'ei', 'ei jente', 'девочка'],
          ['средний (intetkjønn)', 'et', 'et hus', 'дом']
        ], note: 'Артикль стоит перед словом, как англ. a/an, и указывает на «какой-то, один из».' },
        { type: 'rule', text: 'Существительное запоминается **только вместе с артиклем**: не «bil», а «en bil»; не «hus», а «et hus».' },
        { type: 'p', text: 'Женский род в букмоле **факультативен**: любое слово ж. р. можно употребить с *en* (*en jente, en bok*) — это правильно. Обратное невозможно: *ei* при слове мужского рода — ошибка. Поэтому на практике система двоякая: общий род (en/ei) против среднего (et). В курсе основной считается трёхродовая норма (*ei bok — boka*), а формы с *en* принимаются как равноправные.' },
        { type: 'examples', items: [
          { t: 'en mann og ei kvinne', ru: 'мужчина и женщина' },
          { t: 'en gutt og ei jente', ru: 'мальчик и девочка' },
          { t: 'et barn og et hus', ru: 'ребёнок и дом', note: 'barn — средний род, как рус. «дитя»' }
        ] },
        { type: 'contrast', text: 'Род почти не совпадает с русским: *en bil* (м.) — «машина» (ж.), *et hus* (ср.) — «дом» (м.), *ei dør* (ж.) — «дверь» (ж.). Совпадает обычно только естественный пол: *en mann, ei kvinne*. Не переносите русский род — учите артикль.' },
        { type: 'tip', text: 'Около трёх четвертей существительных — общего рода. Суффиксы-подсказки: *-het, -sjon* → en (*en leilighet, en stasjon*); *-ing/-ning* → en или ei; *-eri, -ment, -um* → et (*et bakeri, et dokument, et museum*).' },
        { type: 'pitfall', text: 'Числительное «один» в среднем роде пишется **ett** (две t): *ett hus* «один дом», но артикль — *et hus* «(какой-то) дом». В м. р. *en* = и артикль, и числительное.' }
      ],
      vocab: [
        { id: 'nb-mann', w: 'mann', ru: 'мужчина; муж', pos: 'n', g: 'm', forms: 'mannen, menn, mennene', ex: 'Mannen heter Ola.', exRu: 'Мужчину зовут Ула.', note: 'Умлаут во мн. ч.: menn. Mannen min — мой муж.' },
        { id: 'nb-kvinne', w: 'kvinne', ru: 'женщина', pos: 'n', g: 'f', forms: 'kvinna, kvinner, kvinnene', ex: 'Kvinna er fra Bergen.', exRu: 'Женщина из Бергена.', note: 'Допустимо: en kvinne, kvinnen.' },
        { id: 'nb-jente', w: 'jente', ru: 'девочка, девушка', pos: 'n', g: 'f', forms: 'jenta, jenter, jentene', ex: 'Jenta heter Ingrid.', exRu: 'Девочку зовут Ингрид.', note: 'Допустимо: en jente, jenten.' },
        { id: 'nb-gutt', w: 'gutt', ru: 'мальчик, парень', pos: 'n', g: 'm', forms: 'gutten, gutter, guttene', ex: 'Gutten er sju år.', exRu: 'Мальчику семь лет.', note: null },
        { id: 'nb-barn', w: 'barn', ru: 'ребёнок', pos: 'n', g: 'n', forms: 'barnet, barn, barna', ex: 'Barna leker ute.', exRu: 'Дети играют на улице.', note: 'Опред. мн. barna (допустимо barnene). Неопр. мн. без окончания.' },
        { id: 'nb-bil', w: 'bil', ru: 'машина, автомобиль', pos: 'n', g: 'm', forms: 'bilen, biler, bilene', ex: 'Bilen er ny.', exRu: 'Машина новая.', note: null },
        { id: 'nb-hus', w: 'hus', ru: 'дом', pos: 'n', g: 'n', forms: 'huset, hus, husene', ex: 'Huset ligger ved sjøen.', exRu: 'Дом стоит у моря.', note: 'Односложное et-слово: мн. ч. без окончания.' },
        { id: 'nb-bok', w: 'bok', ru: 'книга', pos: 'n', g: 'f', forms: 'boka, bøker, bøkene', ex: 'Boka ligger på bordet.', exRu: 'Книга лежит на столе.', note: 'Допустимо: en bok, boken. Умлаут во мн. ч.' },
        { id: 'nb-dør', w: 'dør', ru: 'дверь', pos: 'n', g: 'f', forms: 'døra, dører, dørene', ex: 'Døra er åpen.', exRu: 'Дверь открыта.', note: 'Допустимо: døren.' },
        { id: 'nb-bord', w: 'bord', ru: 'стол', pos: 'n', g: 'n', forms: 'bordet, bord, bordene', ex: 'Maten står på bordet.', exRu: 'Еда стоит на столе.', note: 'Конечное d не произносится.' },
        { id: 'nb-stol', w: 'stol', ru: 'стул', pos: 'n', g: 'm', forms: 'stolen, stoler, stolene', ex: 'Stolen står ved vinduet.', exRu: 'Стул стоит у окна.', note: 'Не «стол»! Стол — et bord.' },
        { id: 'nb-by', w: 'by', ru: 'город', pos: 'n', g: 'm', forms: 'byen, byer, byene', ex: 'Bergen er en by i Norge.', exRu: 'Берген — город в Норвегии.', note: null }
      ],
      text: null
    },
    {
      id: 'nb-u01-l02',
      kind: 'grammar',
      title: 'Определённая форма единственного числа',
      goals: ['Образовывать определённую форму ед. ч. всех трёх родов', 'Различать употребление неопределённой и определённой формы'],
      skills: ['nb.noun.def', 'nb.noun.gender'],
      theory: [
        { type: 'rule', text: 'Определённый артикль — **суффикс**: en bil → bil{{en}}, ei bok → bok{{a}}, et hus → hus{{et}}.' },
        { type: 'table', caption: 'Определённая форма ед. ч.', head: ['Род', 'Неопр.', 'Опред.', 'Суффикс'], rows: [
          ['м.', 'en bil', 'bil{{en}}', '-en'],
          ['ж.', 'ei bok', 'bok{{a}}', '-a (допуст. -en)'],
          ['ср.', 'et hus', 'hus{{et}}', '-et'],
          ['м. на -e', 'en skole', 'skole{{n}}', '-n'],
          ['ж. на -e', 'ei jente', 'jent{{a}}', '-e → -a'],
          ['ср. на -e', 'et eple', 'eple{{t}}', '-t']
        ], note: 'Конечное -t в -et не произносится: huset звучит примерно как «хю́се».' },
        { type: 'p', text: 'Слова на безударное *-e* добавляют только *-n* / *-t*. В женском роде *-e* заменяется на *-a*: *ei kake → kaka, ei uke → uka*. При допустимой мужской форме: *kaken, uken*.' },
        { type: 'examples', items: [
          { t: 'Jeg har en bil. Bilen er ny.', ru: 'У меня есть машина. Машина новая.', note: 'сначала новое (en bil), потом уже известное (bilen)' },
          { t: 'Det er ei kake på bordet. Kaka er god.', ru: 'На столе торт. Торт вкусный.' },
          { t: 'Kan du lukke døra?', ru: 'Можешь закрыть дверь?', note: 'единственная дверь в ситуации → определённая форма' },
          { t: 'Jeg drikker kaffe.', ru: 'Я пью кофе.', note: 'вещество в общем смысле — без артикля' }
        ] },
        { type: 'contrast', text: 'Русский не различает «какой-то / тот самый» грамматически, норвежский различает всегда. Ориентир — английские *a/the*, только *the* приклеено к концу слова. Где по-русски можно сказать «этот» или «тот самый», почти всегда нужна определённая форма.' },
        { type: 'tip', text: 'Определённая форма нужна, если предмет уже упоминался, единственный в ситуации (*døra, sola, kjøkkenet*) или известен обоим собеседникам.' },
        { type: 'pitfall', text: 'Не путайте **bil{{en}}** «машина (эта)» и **bil{{er}}** «машины». Окончание -en — определённость, -er — множественное число.' }
      ],
      vocab: [
        { id: 'nb-dag', w: 'dag', ru: 'день', pos: 'n', g: 'm', forms: 'dagen, dager, dagene', ex: 'God dag!', exRu: 'Добрый день!', note: null },
        { id: 'nb-uke', w: 'uke', ru: 'неделя', pos: 'n', g: 'f', forms: 'uka, uker, ukene', ex: 'Uka har sju dager.', exRu: 'В неделе семь дней.', note: 'Допустимо: uken.' },
        { id: 'nb-år', w: 'år', ru: 'год', pos: 'n', g: 'n', forms: 'året, år, årene', ex: 'Godt nytt år!', exRu: 'С Новым годом!', note: 'Hun er ti år. — Ей десять лет.' },
        { id: 'nb-kopp', w: 'kopp', ru: 'чашка', pos: 'n', g: 'm', forms: 'koppen, kopper, koppene', ex: 'Koppen står på bordet.', exRu: 'Чашка стоит на столе.', note: null },
        { id: 'nb-glass', w: 'glass', ru: 'стакан; стекло', pos: 'n', g: 'n', forms: 'glasset, glass, glassene', ex: 'Et glass vann, takk.', exRu: 'Стакан воды, пожалуйста.', note: null },
        { id: 'nb-eple', w: 'eple', ru: 'яблоко', pos: 'n', g: 'n', forms: 'eplet, epler, eplene', ex: 'Jeg spiser et eple.', exRu: 'Я ем яблоко.', note: null },
        { id: 'nb-kake', w: 'kake', ru: 'торт, пирог; печенье', pos: 'n', g: 'f', forms: 'kaka, kaker, kakene', ex: 'Kaka er god.', exRu: 'Торт вкусный.', note: 'Допустимо: kaken.' },
        { id: 'nb-brød', w: 'brød', ru: 'хлеб', pos: 'n', g: 'n', forms: 'brødet, brød, brødene', ex: 'Brødet er ferskt.', exRu: 'Хлеб свежий.', note: 'Et brød — буханка хлеба.' },
        { id: 'nb-ost', w: 'ost', ru: 'сыр', pos: 'n', g: 'm', forms: 'osten, oster, ostene', ex: 'Brunost er en norsk ost.', exRu: 'Брюност — норвежский сыр.', note: null },
        { id: 'nb-melk', w: 'melk', ru: 'молоко', pos: 'n', g: 'f', forms: 'melka', ex: 'Melka står i kjøleskapet.', exRu: 'Молоко стоит в холодильнике.', note: 'Допустимо: melken. Обычно без мн. ч.' },
        { id: 'nb-vann', w: 'vann', ru: 'вода; озеро', pos: 'n', g: 'n', forms: 'vannet, vann, vannene', ex: 'Vannet er kaldt.', exRu: 'Вода холодная.', note: null },
        { id: 'nb-kaffe', w: 'kaffe', ru: 'кофе', pos: 'n', g: 'm', forms: 'kaffen', ex: 'Kaffen er varm.', exRu: 'Кофе горячий.', note: 'Обычно без мн. ч. Род мужской, как и в рус. норме.' }
      ],
      text: null
    },
    {
      id: 'nb-u01-l03',
      kind: 'grammar',
      title: 'Множественное число',
      goals: ['Образовывать неопределённую и определённую форму мн. ч.', 'Знать особые типы: односложные et-слова, слова на -er, синкопу'],
      skills: ['nb.noun.plural'],
      theory: [
        { type: 'rule', text: 'Основной тип для всех родов: неопр. мн. {{-er}}, опред. мн. {{-ene}}: bil{{er}} — bil{{ene}}, jent{{er}} — jent{{ene}}, epl{{er}} — epl{{ene}}.' },
        { type: 'table', caption: 'Четыре формы существительного', head: ['', 'Неопр. ед.', 'Опред. ед.', 'Неопр. мн.', 'Опред. мн.'], rows: [
          ['м.', 'en bil', 'bil{{en}}', 'bil{{er}}', 'bil{{ene}}'],
          ['ж.', 'ei jente', 'jent{{a}}', 'jente{{r}}', 'jent{{ene}}'],
          ['ср. многослож.', 'et eple', 'eple{{t}}', 'eple{{r}}', 'epl{{ene}}'],
          ['ср. односл.', 'et hus', 'hus{{et}}', 'hus', 'hus{{ene}}'],
          ['лица на -er', 'en lærer', 'lærer{{en}}', 'lærer{{e}}', 'lærer{{ne}}'],
          ['особый', 'et barn', 'barn{{et}}', 'barn', 'barn{{a}}']
        ] },
        { type: 'rule', text: 'Односложные слова **среднего рода** в неопр. мн. ч. **не получают окончания**: et hus — to hus, et år — fem år, et ord — mange ord.' },
        { type: 'p', text: '**Названия лиц на -er** (*lærer, arbeider*): мн. ч. *-e*, опред. мн. *-ne*: *lærere — lærerne*.' },
        { type: 'p', text: '**Синкопа**: безударное *-e-* в слогах *-el, -er, -en* выпадает перед окончанием: *en sykkel — sykler — syklene, en nøkkel — nøkler, en vinter — vintrer*. При этом двойная согласная может упроститься: *en sommer — somrer*.' },
        { type: 'examples', items: [
          { t: 'Vi har to biler og tre sykler.', ru: 'У нас две машины и три велосипеда.' },
          { t: 'Husene i byen er gamle.', ru: 'Дома в городе старые.' },
          { t: 'Lærerne er på skolen.', ru: 'Учителя в школе.' },
          { t: 'Barna gjør lekser.', ru: 'Дети делают уроки.' }
        ] },
        { type: 'contrast', text: 'Падежей нет, а тип мн. ч. почти один (-er/-ene) — проще, чем в русском. Главное исключение — нулевое окончание у односложных et-слов, чего в русском нет (ср. только «пять человек»).' },
        { type: 'tip', text: 'Слова на *-e* просто добавляют *-r*: *en skole — skoler, et bilde — bilder*. Слова на ударный гласный — *-er*: *en by — byer*.' },
        { type: 'pitfall', text: '✗ *huser*, ✗ *årer* — ошибка; правильно: *hus, år*. Зато многосложное среднего рода — с окончанием: *vinduer, epler, bilder*.' }
      ],
      vocab: [
        { id: 'nb-lærer', w: 'lærer', ru: 'учитель', pos: 'n', g: 'm', forms: 'læreren, lærere, lærerne', ex: 'Læreren snakker norsk.', exRu: 'Учитель говорит по-норвежски.', note: 'Тип на -er: lærere — lærerne.' },
        { id: 'nb-student', w: 'student', ru: 'студент', pos: 'n', g: 'm', forms: 'studenten, studenter, studentene', ex: 'Studentene leser mye.', exRu: 'Студенты много читают.', note: null },
        { id: 'nb-venn', w: 'venn', ru: 'друг', pos: 'n', g: 'm', forms: 'vennen, venner, vennene', ex: 'Vennene mine bor i Oslo.', exRu: 'Мои друзья живут в Осло.', note: null },
        { id: 'nb-sykkel', w: 'sykkel', ru: 'велосипед', pos: 'n', g: 'm', forms: 'sykkelen, sykler, syklene', ex: 'Syklene står ute.', exRu: 'Велосипеды стоят на улице.', note: 'Синкопа: sykler.' },
        { id: 'nb-nøkkel', w: 'nøkkel', ru: 'ключ', pos: 'n', g: 'm', forms: 'nøkkelen, nøkler, nøklene', ex: 'Hvor er nøklene?', exRu: 'Где ключи?', note: 'Синкопа: nøkler.' },
        { id: 'nb-språk', w: 'språk', ru: 'язык (речь)', pos: 'n', g: 'n', forms: 'språket, språk, språkene', ex: 'Norsk er et nordisk språk.', exRu: 'Норвежский — скандинавский язык.', note: 'Язык как орган — ei tunge.' },
        { id: 'nb-land', w: 'land', ru: 'страна; суша', pos: 'n', g: 'n', forms: 'landet, land, landene', ex: 'Norge er et langt land.', exRu: 'Норвегия — длинная страна.', note: 'På landet — в деревне, за городом.' },
        { id: 'nb-ord', w: 'ord', ru: 'слово', pos: 'n', g: 'n', forms: 'ordet, ord, ordene', ex: 'Hva betyr ordet «hytte»?', exRu: 'Что значит слово «hytte»?', note: null },
        { id: 'nb-bilde', w: 'bilde', ru: 'картинка, фото, картина', pos: 'n', g: 'n', forms: 'bildet, bilder, bildene', ex: 'Bildet henger på veggen.', exRu: 'Картина висит на стене.', note: null },
        { id: 'nb-vindu', w: 'vindu', ru: 'окно', pos: 'n', g: 'n', forms: 'vinduet, vinduer, vinduene', ex: 'Vinduet er åpent.', exRu: 'Окно открыто.', note: null },
        { id: 'nb-spørsmål', w: 'spørsmål', ru: 'вопрос', pos: 'n', g: 'n', forms: 'spørsmålet, spørsmål, spørsmålene', ex: 'Jeg har et spørsmål.', exRu: 'У меня есть вопрос.', note: 'Сложное слово: род и мн. ч. — по последней части (et mål).' },
        { id: 'nb-skole', w: 'skole', ru: 'школа', pos: 'n', g: 'm', forms: 'skolen, skoler, skolene', ex: 'Barna går på skolen.', exRu: 'Дети ходят в школу.', note: 'På skolen — в школе.' },
        { id: 'nb-lekse', w: 'lekse', ru: 'домашнее задание', pos: 'n', g: 'f', forms: 'leksa, lekser, leksene', ex: 'Barna gjør lekser.', exRu: 'Дети делают домашние задания.', note: 'Допустимо: leksen. Gjøre lekser — делать уроки.' }
      ],
      text: null
    },
    {
      id: 'nb-u01-l04',
      kind: 'grammar',
      title: 'Нерегулярные существительные и генитив',
      goals: ['Знать существительные с умлаутом и нулевым мн. ч.', 'Строить генитив на -s и оборот с til'],
      skills: ['nb.noun.irregular', 'nb.noun.genitive'],
      theory: [
        { type: 'h', text: 'Умлаут во множественном числе' },
        { type: 'table', head: ['Неопр. ед.', 'Опред. ед.', 'Неопр. мн.', 'Опред. мн.'], rows: [
          ['en mann', 'mannen', 'm{{e}}nn', 'm{{e}}nnene'],
          ['ei bok', 'boka', 'b{{ø}}ker', 'b{{ø}}kene'],
          ['en fot', 'foten', 'f{{ø}}tter', 'f{{ø}}ttene'],
          ['ei hånd', 'hånda', 'h{{e}}nder', 'h{{e}}ndene'],
          ['ei tann', 'tanna', 't{{e}}nner', 't{{e}}nnene'],
          ['ei natt', 'natta', 'n{{e}}tter', 'n{{e}}ttene'],
          ['en far', 'faren', 'f{{e}}dre', 'f{{e}}drene'],
          ['ei mor', 'mora', 'm{{ø}}dre', 'm{{ø}}drene'],
          ['en bror', 'broren', 'br{{ø}}dre', 'br{{ø}}drene'],
          ['ei datter', 'dattera', 'd{{ø}}tre', 'd{{ø}}trene'],
          ['ei søster', 'søstera', 'søstre', 'søstrene'],
          ['et øye', 'øyet', 'øyne', 'øynene']
        ], note: 'Ж. р.: допустимы формы boken, hånden, moren, datteren, søsteren и т. д.' },
        { type: 'contrast', text: 'Это общегерманский умлаут — ср. нем. *Mann — Männer, Buch — Bücher*, англ. *foot — feet, man — men*. Филологу удобно запоминать гнездом.' },
        { type: 'p', text: '**Без окончания во мн. ч.** (кроме односложных et-слов): *en ting — ting, en sko — sko, en feil — feil*, а также сложные на *-mann*: *en nordmann — nordmenn*.' },
        { type: 'h', text: 'Генитив' },
        { type: 'rule', text: 'Генитив образуется прибавлением **-s без апострофа**: Per{{s}} bil, Norge{{s}} hovedstad. Существительное после генитива стоит **в неопределённой форме**.' },
        { type: 'examples', items: [
          { t: 'Pers bil er gammel.', ru: 'Машина Пера старая.' },
          { t: 'Norges hovedstad er Oslo.', ru: 'Столица Норвегии — Осло.' },
          { t: "Lars' sykkel står ute.", ru: 'Велосипед Ларса стоит на улице.', note: 'имя на -s → апостроф' },
          { t: 'Bilen til Per er gammel.', ru: 'Машина Пера старая.', note: 'разговорный и очень частый оборот с til; здесь — определённая форма' }
        ] },
        { type: 'pitfall', text: '✗ *Pers bilen* — ошибка: после генитива артикль-суффикс не ставится (как в англ. *Peter\'s car*, а не *the car*). Но в обороте с *til* — наоборот, определённая форма: *bil{{en}} til Per*.' },
        { type: 'tip', text: 'В разговорной речи встречается «garpegenitiv»: *Per sin bil* — узнавайте, но в письменных ответах используйте *Pers bil* или *bilen til Per*.' }
      ],
      vocab: [
        { id: 'nb-far', w: 'far', ru: 'отец', pos: 'n', g: 'm', forms: 'faren, fedre, fedrene', ex: 'Faren min heter Arne.', exRu: 'Моего отца зовут Арне.', note: null },
        { id: 'nb-mor', w: 'mor', ru: 'мать', pos: 'n', g: 'f', forms: 'mora, mødre, mødrene', ex: 'Mora mi er lege.', exRu: 'Моя мама — врач.', note: 'Допустимо: moren.' },
        { id: 'nb-bror', w: 'bror', ru: 'брат', pos: 'n', g: 'm', forms: 'broren, brødre, brødrene', ex: 'Jeg har to brødre.', exRu: 'У меня два брата.', note: null },
        { id: 'nb-søster', w: 'søster', ru: 'сестра', pos: 'n', g: 'f', forms: 'søstera, søstre, søstrene', ex: 'Søstera mi bor i Tromsø.', exRu: 'Моя сестра живёт в Тромсё.', note: 'Допустимо: søsteren.' },
        { id: 'nb-datter', w: 'datter', ru: 'дочь', pos: 'n', g: 'f', forms: 'dattera, døtre, døtrene', ex: 'De har tre døtre.', exRu: 'У них три дочери.', note: 'Допустимо: datteren.' },
        { id: 'nb-sønn', w: 'sønn', ru: 'сын', pos: 'n', g: 'm', forms: 'sønnen, sønner, sønnene', ex: 'Sønnen heter Even.', exRu: 'Сына зовут Эвен.', note: null },
        { id: 'nb-foreldre', w: 'foreldre', ru: 'родители', pos: 'n', g: null, forms: 'foreldrene', ex: 'Foreldrene mine bor på landet.', exRu: 'Мои родители живут в деревне.', note: 'Только мн. ч.' },
        { id: 'nb-fot', w: 'fot', ru: 'нога (стопа)', pos: 'n', g: 'm', forms: 'foten, føtter, føttene', ex: 'Føttene mine er kalde.', exRu: 'У меня замёрзли ноги.', note: 'Til fots — пешком.' },
        { id: 'nb-hånd', w: 'hånd', ru: 'рука (кисть)', pos: 'n', g: 'f', forms: 'hånda, hender, hendene', ex: 'Vask hendene!', exRu: 'Помой руки!', note: 'Допустимо: hånden; вариант написания hand.' },
        { id: 'nb-tann', w: 'tann', ru: 'зуб', pos: 'n', g: 'f', forms: 'tanna, tenner, tennene', ex: 'Jeg pusser tennene.', exRu: 'Я чищу зубы.', note: 'Допустимо: tannen.' },
        { id: 'nb-øye', w: 'øye', ru: 'глаз', pos: 'n', g: 'n', forms: 'øyet, øyne, øynene', ex: 'Hun har blå øyne.', exRu: 'У неё голубые глаза.', note: null },
        { id: 'nb-ting', w: 'ting', ru: 'вещь', pos: 'n', g: 'm', forms: 'tingen, ting, tingene', ex: 'Jeg har mange ting.', exRu: 'У меня много вещей.', note: 'Мн. ч. без окончания.' },
        { id: 'nb-nordmann', w: 'nordmann', ru: 'норвежец', pos: 'n', g: 'm', forms: 'nordmannen, nordmenn, nordmennene', ex: 'Nordmenn går ofte på tur.', exRu: 'Норвежцы часто ходят в походы.', note: 'Пишется с маленькой буквы.' },
        { id: 'nb-natt', w: 'natt', ru: 'ночь', pos: 'n', g: 'f', forms: 'natta, netter, nettene', ex: 'God natt!', exRu: 'Спокойной ночи!', note: 'Допустимо: natten.' }
      ],
      text: null
    },
    {
      id: 'nb-u01-l05',
      kind: 'reading',
      title: 'Familien Hansen',
      goals: ['Узнавать род и определённость в связном тексте', 'Замечать переход «новое → известное» (en hund → hunden)'],
      skills: ['nb.noun.gender', 'nb.noun.def', 'nb.noun.plural'],
      theory: [
        { type: 'p', text: 'Обратите внимание: каждый предмет сначала вводится с неопределённым артиклем (*en leilighet, en hund*), а затем упоминается в определённой форме (*leiligheten, hunden*). Глаголы в презенсе (*bor, har, heter*) разберём в юните 2.' }
      ],
      vocab: [
        { id: 'nb-kone', w: 'kone', ru: 'жена', pos: 'n', g: 'f', forms: 'kona, koner, konene', ex: 'Kona hans heter Liv.', exRu: 'Его жену зовут Лив.', note: 'Допустимо: konen.' },
        { id: 'nb-familie', w: 'familie', ru: 'семья', pos: 'n', g: 'm', forms: 'familien, familier, familiene', ex: 'Familien er stor.', exRu: 'Семья большая.', note: null },
        { id: 'nb-hund', w: 'hund', ru: 'собака', pos: 'n', g: 'm', forms: 'hunden, hunder, hundene', ex: 'Hunden heter Bamse.', exRu: 'Собаку зовут Бамсе.', note: null },
        { id: 'nb-katt', w: 'katt', ru: 'кошка, кот', pos: 'n', g: 'm', forms: 'katten, katter, kattene', ex: 'Katten sover.', exRu: 'Кошка спит.', note: null },
        { id: 'nb-leilighet', w: 'leilighet', ru: 'квартира', pos: 'n', g: 'm', forms: 'leiligheten, leiligheter, leilighetene', ex: 'Leiligheten har tre rom.', exRu: 'В квартире три комнаты.', note: 'Слова на -het — мужского рода.' },
        { id: 'nb-rom', w: 'rom', ru: 'комната; пространство', pos: 'n', g: 'n', forms: 'rommet, rom, rommene', ex: 'Rommet er lite.', exRu: 'Комната маленькая.', note: 'Удвоение m перед окончанием: rommet.' },
        { id: 'nb-kjøkken', w: 'kjøkken', ru: 'кухня', pos: 'n', g: 'n', forms: 'kjøkkenet, kjøkken, kjøkkenene', ex: 'Vi spiser på kjøkkenet.', exRu: 'Мы едим на кухне.', note: 'Мн. ч. также kjøkkener. На кухне — på kjøkkenet.' }
      ],
      text: {
        title: 'Familien Hansen',
        lines: [
          { t: 'Dette er Ola Hansen. Ola er nordmann.', ru: 'Это Ула Хансен. Ула — норвежец.' },
          { t: 'Han bor i en leilighet i Bergen.', ru: 'Он живёт в квартире в Бергене.' },
          { t: 'Leiligheten har tre rom og et kjøkken.', ru: 'В квартире три комнаты и кухня.' },
          { t: 'Ola har ei kone og to barn: en sønn og ei datter.', ru: 'У Улы есть жена и двое детей: сын и дочь.' },
          { t: 'Kona heter Liv. Sønnen heter Even, og dattera heter Ingrid.', ru: 'Жену зовут Лив. Сына зовут Эвен, а дочь — Ингрид.' },
          { t: 'Familien har en hund og to katter.', ru: 'У семьи есть собака и две кошки.' },
          { t: 'Hunden heter Bamse. Kattene heter Pus og Mons.', ru: 'Собаку зовут Бамсе. Кошек зовут Пус и Мунс.' },
          { t: 'Om kvelden sitter familien på kjøkkenet.', ru: 'Вечером семья сидит на кухне.' },
          { t: 'Ola og Liv drikker kaffe, og barna drikker melk.', ru: 'Ула и Лив пьют кофе, а дети пьют молоко.' },
          { t: 'Bøkene til barna ligger på bordet.', ru: 'Книги детей лежат на столе.' }
        ]
      }
    }
  ]
};

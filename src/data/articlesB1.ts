/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article } from '../types';

export const B1_ARTICLES: Article[] = [
  {
    id: 'b1-urban-green',
    title: 'Pocket Parks: How Small Green Spaces Transform Busy Cities',
    subtitle: 'Urban planners are turning forgotten parking spots and alleyways into peaceful miniature sanctuaries.',
    level: 'B1',
    category: 'Environment',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Focuses on functional descriptive vocabulary, civic spaces, and accessible cause-and-effect transitions.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-teal-900',
    paragraphs: [
      'In crowded cities like Tokyo, London, and New York, finding quiet open space can be surprisingly difficult. Land is expensive, and most streets are full of cars and tall concrete buildings. To solve this problem, architects are designing "pocket parks" — tiny public gardens created in abandoned alleyways, former parking spots, or empty corners between buildings.',
      'Although pocket parks are compact, their positive impact on local neighborhoods is enormous. Recent studies show that spending just twenty minutes near green plants significantly reduces everyday stress and lowers blood pressure. Furthermore, pocket parks encourage friendly social interaction among neighbors who would otherwise rush past each other.',
      'These miniature green zones also play a crucial role in cooling down urban environments. Concrete and asphalt absorb huge amounts of heat during hot summer days, creating what scientists call "heat islands." By planting native trees, grass, and flowering shrubs, cities can effectively lower temperatures on surrounding streets.',
      'Many communities participate actively in building and maintaining these small gardens. Volunteers plant flowers, water trees, and organize weekend reading clubs. In this way, pocket parks not only beautify dull concrete streets, but also foster a strong sense of belonging for residents of all ages.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-1',
        word: 'abandoned',
        phonetic: '/əˈbæn.dənd/',
        partOfSpeech: 'adjective',
        definition: 'Tashlab ketilgan, qarovsiz qolgan; hech kim foydalanmaydigan yoki yashamaydigan.',
        cefrLevel: 'B1',
        exampleSentence: 'The old factory was abandoned twenty years ago and now houses artist studios.',
        collocations: ['abandoned building', 'abandoned vehicle', 'abandoned site'],
        synonyms: ['deserted', 'neglected', 'empty'],
        antonyms: ['occupied', 'maintained']
      },
      {
        id: 'v-b1-2',
        word: 'compact',
        phonetic: '/kəmˈpækt/',
        partOfSpeech: 'adjective',
        definition: 'Ixcham, kichik hajmli; juda kam joy egallaydigan va tartibli joylashgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Pocket parks are compact, but they provide plenty of comfortable benches.',
        collocations: ['compact design', 'compact space', 'compact size'],
        synonyms: ['small', 'efficient', 'condensed'],
        antonyms: ['sprawling', 'expansive']
      },
      {
        id: 'v-b1-3',
        word: 'enormous',
        phonetic: '/ɪˈnɔː.məs/',
        partOfSpeech: 'adjective',
        definition: 'Juda katta, ulkan, beqiyos (hajmi, miqdori yoki ta’sir darajasi jihatidan).',
        cefrLevel: 'B1',
        exampleSentence: 'The community garden had an enormous influence on local wildlife.',
        collocations: ['enormous impact', 'enormous amount', 'enormous potential'],
        synonyms: ['huge', 'vast', 'massive'],
        antonyms: ['tiny', 'negligible']
      },
      {
        id: 'v-b1-4',
        word: 'foster',
        phonetic: '/ˈfɒs.tər/',
        partOfSpeech: 'verb',
        definition: 'Rivojlantirishga yordam bermoq, rag‘batlantirmoq, mustahkamlamoq (masalan, do‘stlik yoki hamjihatlikni).',
        cefrLevel: 'B1',
        exampleSentence: 'Shared neighborhood spaces foster friendship between young and elderly residents.',
        collocations: ['foster a sense of belonging', 'foster cooperation', 'foster community'],
        synonyms: ['nurture', 'promote', 'cultivate'],
        antonyms: ['discourage', 'hinder']
      },
      {
        id: 'v-b1-5',
        word: 'crucial',
        phonetic: '/ˈkruː.ʃəl/',
        partOfSpeech: 'adjective',
        definition: 'O‘ta muhim, hal qiluvchi; muvaffaqiyat uchun juda zarur bo‘lgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Urban trees play a crucial role in lowering summer temperatures.',
        collocations: ['crucial role', 'crucial factor', 'crucial importance'],
        synonyms: ['vital', 'essential', 'critical'],
        antonyms: ['unimportant', 'trivial']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-1',
          targetWord: 'compact',
          question: 'In the article, the word "compact" describes pocket parks as:',
          options: [
            'Very expensive to construct and maintain',
            'Small in size and neatly fitted into tight spaces',
            'Noisy and difficult for older people to access',
            'Dangerous during stormy weather conditions'
          ],
          correctIndex: 1,
          explanation: '"Compact" means taking up very little physical space, perfectly describing pocket parks tucked into alleys.'
        },
        {
          id: 'mc-b1-2',
          targetWord: 'foster',
          question: 'Which of the following phrases is closest in meaning to "foster a sense of belonging"?',
          options: [
            'Destroy trust among neighbors',
            'Encourage and develop feelings of connection',
            'Measure neighborhood satisfaction with surveys',
            'Charge residents an admission fee'
          ],
          correctIndex: 1,
          explanation: 'To "foster" means to encourage or nurture the steady growth of positive relationships.'
        },
        {
          id: 'mc-b1-3',
          targetWord: 'crucial',
          question: 'If something plays a "crucial role", it means:',
          options: [
            'It is fun but entirely optional',
            'It is absolutely essential and decisive for success',
            'It is outdated and should be replaced',
            'It requires a lot of electricity'
          ],
          correctIndex: 1,
          explanation: '"Crucial" highlights vital importance — without it, the desired result cannot be achieved.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-1',
          sentenceWithBlank: 'The city council decided to turn the _____ car park into a pleasant community park.',
          targetWord: 'abandoned',
          hint: 'Adjective meaning left empty and neglected',
          options: ['abandoned', 'fostered', 'compact', 'crucial']
        },
        {
          id: 'cl-b1-2',
          sentenceWithBlank: 'Regular physical exercise plays a _____ role in maintaining good mental health.',
          targetWord: 'crucial',
          hint: 'Adjective meaning essential or vitally important',
          options: ['compact', 'crucial', 'abandoned', 'enormous']
        },
        {
          id: 'cl-b1-3',
          sentenceWithBlank: 'The architects designed a _____ kitchen that fits comfortably into a micro-apartment.',
          targetWord: 'compact',
          hint: 'Adjective meaning space-saving and neatly arranged',
          options: ['enormous', 'compact', 'abandoned', 'foster']
        }
      ],
      matching: {
        id: 'mat-b1-1',
        instructions: 'Match each target vocabulary word to its natural collocation:',
        pairs: [
          { id: 'p1', term: 'foster', match: 'a sense of belonging' },
          { id: 'p2', term: 'abandoned', match: 'industrial site' },
          { id: 'p3', term: 'crucial', match: 'role in climate resilience' },
          { id: 'p4', term: 'enormous', match: 'impact on mental health' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-b1-1',
          promptSentence: 'Spending time in nature can significantly reduce our _____ levels after a busy day at work. (STRESSFUL)',
          rootWord: 'stressful',
          correctAnswer: 'stress',
          hint: 'Change the adjective into a noun',
          explanation: '"Stress" is the noun referring to physical or mental tension.'
        },
        {
          id: 'wf-b1-2',
          promptSentence: 'Pocket parks are an _____ way to cool down hot city streets during July. (EFFECT)',
          rootWord: 'effect',
          correctAnswer: 'effective',
          hint: 'Transform noun into an adjective',
          explanation: '"Effective" means producing the intended or desired outcome.'
        }
      ]
    }
  },
  {
    id: 'b1-sleep-habits',
    title: 'The Science of Rest: Why Consistent Sleep Routines Matter',
    subtitle: 'Research reveals that going to bed at the exact same hour is far more beneficial than sleeping in on weekends.',
    level: 'B1',
    category: 'Psychology & Mind',
    readTime: '3 min read',
    wordCount: 310,
    cefrSummary: 'Everyday biological rhythms, simple advice structures, and common health terminology.',
    themeColor: 'blue',
    gradientFrom: 'from-blue-950',
    gradientTo: 'to-indigo-900',
    paragraphs: [
      'Almost everyone experiences fatigue after a demanding week of work or school. When Saturday arrives, the temptation to stay in bed until noon is strong. However, sleep specialists explain that changing your wake-up time by more than two hours disrupts your internal body clock, leaving you feeling sluggish on Monday morning.',
      'Our bodies operate on a 24-hour cycle known as the circadian rhythm. This natural biological clock regulates hormone production, body temperature, and digestion. When you maintain a consistent schedule, your brain begins releasing melatonin — the hormone that makes you sleepy — at the same time every evening.',
      'In contrast, irregular sleeping patterns can weaken the immune system and impair concentration. People who constantly shift their sleep schedule often struggle with mood swings and food cravings. Fortunately, establishing a relaxing bedtime routine can dramatically improve sleep quality without requiring medication.',
      'Experts suggest turning off electronic screens thirty minutes before sleeping. Blue light emitted by smartphones tricks the brain into thinking it is still daytime. Replacing screen time with reading a printed book or listening to gentle acoustic music helps your mind unwind and guarantees a truly refreshing night.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-6',
        word: 'fatigue',
        phonetic: '/fəˈtiːɡ/',
        partOfSpeech: 'noun',
        definition: 'Qattiq charchoq, holsizlik, darmonsizlik (jismoniy yoki aqliy mehnatdan keyingi kuchli toliqish).',
        cefrLevel: 'B1',
        exampleSentence: 'Drivers should pull over immediately if they start experiencing severe fatigue.',
        collocations: ['suffer from fatigue', 'mental fatigue', 'combat fatigue'],
        synonyms: ['exhaustion', 'tiredness', 'weariness'],
        antonyms: ['vitality', 'energy']
      },
      {
        id: 'v-b1-7',
        word: 'disrupt',
        phonetic: '/dɪsˈrʌpt/',
        partOfSpeech: 'verb',
        definition: 'Buzmoq, izdan chiqarmoq; biror jarayon yoki tartibning normal davom etishiga xalaqit bermoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Loud construction noise can disrupt a student’s ability to concentrate.',
        collocations: ['disrupt the cycle', 'disrupt normal routine', 'disrupt sleep'],
        synonyms: ['disturb', 'interfere with', 'throw into disorder'],
        antonyms: ['stabilize', 'support']
      },
      {
        id: 'v-b1-8',
        word: 'consistent',
        phonetic: '/kənˈsɪs.tənt/',
        partOfSpeech: 'adjective',
        definition: 'Doimiy, muntazam, barqaror; har doim bir xil tartibda davom etadigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Consistent daily practice is the quickest path to fluency in a second language.',
        collocations: ['consistent schedule', 'consistent effort', 'consistent results'],
        synonyms: ['steady', 'regular', 'reliable'],
        antonyms: ['erratic', 'inconsistent']
      },
      {
        id: 'v-b1-9',
        word: 'impair',
        phonetic: '/ɪmˈpeər/',
        partOfSpeech: 'verb',
        definition: 'Susaytirmoq, zarar yetkazmoq, yomonlashtirmoq (diqqat, xotira yoki qobiliyatni).',
        cefrLevel: 'B1',
        exampleSentence: 'Lack of proper rest can seriously impair reaction time on the highway.',
        collocations: ['impair judgment', 'impair memory', 'impair performance'],
        synonyms: ['diminish', 'damage', 'weaken'],
        antonyms: ['enhance', 'improve']
      },
      {
        id: 'v-b1-10',
        word: 'unwind',
        phonetic: '/ʌnˈwaɪnd/',
        partOfSpeech: 'verb',
        definition: 'Dam olmoq, charchoqni yozmoq; ishdan so‘ng asabni tinchlantirib bo‘shashmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Drinking chamomile tea and listening to jazz helps her unwind in the evening.',
        collocations: ['unwind after work', 'unwind before bed', 'time to unwind'],
        synonyms: ['relax', 'decompress', 'chill out'],
        antonyms: ['stress', 'tense up']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-4',
          targetWord: 'impair',
          question: 'If poor sleep "impairs" your concentration, what does it do?',
          options: [
            'It sharpens your attention span',
            'It damages or weakens your ability to focus',
            'It makes you memorize information permanently',
            'It changes your eye color'
          ],
          correctIndex: 1,
          explanation: '"To impair" means to weaken or damage a faculty or skill, such as memory or vision.'
        },
        {
          id: 'mc-b1-5',
          targetWord: 'consistent',
          question: 'A "consistent schedule" is one that:',
          options: [
            'Changes unexpectedly every two days',
            'Remains regular, reliable, and predictable over time',
            'Requires waking up at midnight',
            'Is managed exclusively by an employer'
          ],
          correctIndex: 1,
          explanation: '"Consistent" means steady, unchanging in quality or standard over time.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-4',
          sentenceWithBlank: 'Drinking coffee late in the evening will _____ your body’s natural rest cycle.',
          targetWord: 'disrupt',
          hint: 'Verb meaning to disturb or interrupt normal order',
          options: ['disrupt', 'unwind', 'impair', 'foster']
        },
        {
          id: 'cl-b1-5',
          sentenceWithBlank: 'After completing the difficult exam, the students took a long walk to _____.',
          targetWord: 'unwind',
          hint: 'Verb meaning to relax and release tension',
          options: ['unwind', 'impair', 'disrupt', 'fatigue']
        }
      ],
      matching: {
        id: 'mat-b1-2',
        instructions: 'Match each vocabulary term with its opposite (antonym):',
        pairs: [
          { id: 'p5', term: 'consistent', match: 'erratic and unpredictable' },
          { id: 'p6', term: 'fatigue', match: 'vitality and high energy' },
          { id: 'p7', term: 'impair', match: 'strengthen and enhance' },
          { id: 'p8', term: 'unwind', match: 'tense up under pressure' }
        ]
      }
    }
  },
  {
    id: 'b1-silk-road-history',
    title: 'The Ancient Silk Road: How Trade Connected East and West',
    subtitle: 'Long before airplanes and the internet, camel caravans carried silk, spices, paper, and ideas across thousands of kilometers.',
    level: 'B1',
    category: 'History & Civilizations',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Historical trade narratives, past-tense storytelling, and cultural exchange vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-950',
    gradientTo: 'to-stone-900',
    paragraphs: [
      'Over two thousand years ago, there was no single highway connecting China to the Mediterranean Sea. Instead, merchants traveled along a vast network of desert tracks and mountain passes that historians later named the "Silk Road." Very few traders made the entire seven-thousand-kilometer journey themselves; instead, goods were passed from one middleman to the next in bustling market cities like Samarkand and Bukhara.',
      'The route took its name from Chinese silk, a fabric that Roman aristocrats prized because it was simultaneously lightweight, soft, and strong. In exchange for silk, porcelain, and tea moving westward, caravans heading east carried horses, glassware, wool carpets, and precious stones. To survive harsh sandstorms and bandits, merchants traveled together in large camel caravans.',
      'Yet physical merchandise was not the only thing that traveled along the Silk Road. Travellers also exchanged scientific knowledge, musical instruments, and technologies such as papermaking and gunpowder. Languages, recipes, and artistic styles blended wherever merchants stopped to rest.',
      'When ocean navigation improved in the fifteenth century, sea routes gradually replaced the slower overland trails. Even so, the Silk Road permanently shaped human history by proving that trade and curiosity could link distant civilizations.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-11',
        word: 'merchant',
        phonetic: '/ˈmɜː.tʃənt/',
        partOfSpeech: 'noun',
        definition: 'Savdogar, tijoratchi (katta miqdorda yoki davlatlar o‘rtasida mol sotib oluvchi va sotuvchi shaxs).',
        cefrLevel: 'B1',
        exampleSentence: 'Silk Road merchants traded Chinese porcelain for Roman glass and horses.',
        collocations: ['wealthy merchant', 'foreign merchant', 'merchant caravan'],
        synonyms: ['trader', 'dealer', 'vendor']
      },
      {
        id: 'v-b1-12',
        word: 'bustling',
        phonetic: '/ˈbʌs.lɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Gavjum, serharakat, qaynoq hayotga to‘la (odamlar va faoliyat bilan to‘lgan joy).',
        cefrLevel: 'B1',
        exampleSentence: 'Samarkand was a bustling market town where travelers from ten countries met.',
        collocations: ['bustling market', 'bustling city', 'bustling streets'],
        synonyms: ['lively', 'vibrant', 'busy'],
        antonyms: ['deserted', 'quiet']
      },
      {
        id: 'v-b1-13',
        word: 'prize',
        phonetic: '/praɪz/',
        partOfSpeech: 'verb',
        definition: 'Yuksak qadrlamoq, ardoqlamoq (noyob, foydali yoki go‘zal bo‘lgani uchun).',
        cefrLevel: 'B1',
        exampleSentence: 'Ancient rulers prized silk because no other fabric was as light and smooth.',
        collocations: ['highly prized', 'prize above all', 'prized possession'],
        synonyms: ['treasure', 'cherish', 'value'],
        antonyms: ['neglect', 'disregard']
      },
      {
        id: 'v-b1-14',
        word: 'harsh',
        phonetic: '/hɑːʃ/',
        partOfSpeech: 'adjective',
        definition: 'Qattiq, shafqatsiz, og‘ir (ayniqsa ob-havo yoki yashash sharoiti haqida).',
        cefrLevel: 'B1',
        exampleSentence: 'Camels were essential for crossing the harsh desert climate of Central Asia.',
        collocations: ['harsh climate', 'harsh winter', 'harsh conditions'],
        synonyms: ['severe', 'extreme', 'unforgiving'],
        antonyms: ['mild', 'gentle']
      },
      {
        id: 'v-b1-15',
        word: 'blend',
        phonetic: '/blend/',
        partOfSpeech: 'verb',
        definition: 'Aralashmoq, uyg‘unlashmoq; turli narsalarning birlashib yaxlit holga kelishi.',
        cefrLevel: 'B1',
        exampleSentence: 'Along the trade routes, Greek and Persian artistic traditions began to blend.',
        collocations: ['blend together', 'blend cultures', 'seamless blend'],
        synonyms: ['mix', 'combine', 'merge'],
        antonyms: ['separate', 'divide']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-6',
          targetWord: 'bustling',
          question: 'When Samarkand is described as a "bustling market city", what was it like?',
          options: [
            'Empty and completely silent',
            'Full of lively crowds, busy traders, and energetic activity',
            'Covered in deep snow all year round',
            'Closed to foreign visitors'
          ],
          correctIndex: 1,
          explanation: '"Bustling" means full of busy, energetic movement and people.'
        },
        {
          id: 'mc-b1-7',
          targetWord: 'prize',
          question: 'Why did Roman aristocrats "prize" Chinese silk?',
          options: [
            'They valued it very highly because it was rare, soft, and strong',
            'They gave it away as a free prize in sporting games',
            'They used it to build stone bridges',
            'They thought it was too cheap to wear'
          ],
          correctIndex: 0,
          explanation: 'As a verb, to "prize" something means to treasure or value it greatly.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-6',
          sentenceWithBlank: 'Caravans needed extra water to survive the _____ summer heat of the Taklamakan Desert.',
          targetWord: 'harsh',
          hint: 'Adjective meaning severe and difficult to survive',
          options: ['harsh', 'bustling', 'compact', 'consistent']
        },
        {
          id: 'cl-b1-7',
          sentenceWithBlank: 'A Venetian _____ traveled to Asia to buy spices, silk, and precious gems.',
          targetWord: 'merchant',
          hint: 'Noun meaning a person who buys and sells goods across regions',
          options: ['merchant', 'fatigue', 'unwind', 'foster']
        }
      ],
      matching: {
        id: 'mat-b1-3',
        instructions: 'Match each B1 history vocabulary word with its meaning:',
        pairs: [
          { id: 'p-b1-9', term: 'merchant', match: 'person who buys and trades goods' },
          { id: 'p-b1-10', term: 'bustling', match: 'full of lively crowds and busy activity' },
          { id: 'p-b1-11', term: 'harsh', match: 'severe and difficult to survive in' },
          { id: 'p-b1-12', term: 'blend', match: 'mix and combine different styles together' }
        ]
      }
    }
  },
  {
    id: 'b1-honeybee-waggle-dance',
    title: 'The Secret Language of Honeybees: How Insects Share Maps by Dancing',
    subtitle: 'When a scout bee discovers a field of wildflowers, she returns to the dark hive and performs a precise figure-eight dance.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Natural science observations, animal behavior verbs, and clear directional explanations.',
    themeColor: 'teal',
    gradientFrom: 'from-teal-950',
    gradientTo: 'to-emerald-900',
    paragraphs: [
      'A single honeybee colony contains up to fifty thousand workers, and to survive the winter they must collect nectar from millions of blossoms. Because patches of wildflowers bloom for only a few days at a time, bees cannot waste energy searching randomly in every direction. Instead, they rely on one of the most remarkable communication systems in the natural world.',
      'Austrian biologist Karl von Frisch discovered this secret by painting tiny colored dots on individual bees and watching them through a glass-walled hive. When a "scout" bee finds a rich source of nectar, she flies back to the hive and performs what scientists call the "waggle dance." Walking in a figure-eight pattern on the vertical honeycomb, she shakes her abdomen rapidly during the straight middle run.',
      'Astonishingly, the angle of her dance tells the other bees the exact direction of the flowers relative to the position of the sun. If she dances straight upward, the flowers are directly toward the sun; if she dances at forty-five degrees to the right, the food lies forty-five degrees to the right of the sun. Furthermore, the duration of her waggle tells her sisters how far away the flowers are.',
      'Surrounding bees also smell the scent of the flower petals clinging to the dancer’s body. Armed with direction, distance, and scent, the foragers fly straight to the meadow within minutes.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-16',
        word: 'colony',
        phonetic: '/ˈkɒl.ə.ni/',
        partOfSpeech: 'noun',
        definition: 'Koloniya, oila, to‘da (birga yashaydigan asalarilar, chumolilar yoki qushlarning katta guruhi).',
        cefrLevel: 'B1',
        exampleSentence: 'Every bee in the colony has a specific job, from cleaning the hive to gathering nectar.',
        collocations: ['bee colony', 'ant colony', 'entire colony'],
        synonyms: ['community', 'swarm', 'hive']
      },
      {
        id: 'v-b1-17',
        word: 'randomly',
        phonetic: '/ˈræn.dəm.li/',
        partOfSpeech: 'adverb',
        definition: 'Tasodifiy ravishda, aniq reja yoki tartibsiz, tavakkaliga.',
        cefrLevel: 'B1',
        exampleSentence: 'Rather than flying randomly, forager bees follow precise directions from scouts.',
        collocations: ['search randomly', 'chosen randomly', 'move randomly'],
        synonyms: ['aimlessly', 'by chance', 'haphazardly'],
        antonyms: ['systematically', 'deliberately']
      },
      {
        id: 'v-b1-18',
        word: 'precise',
        phonetic: '/prɪˈsaɪs/',
        partOfSpeech: 'adjective',
        definition: 'Aniq, bexato, har bir detaligacha to‘g‘ri ko‘rsatilgan.',
        cefrLevel: 'B1',
        exampleSentence: 'The waggle dance gives other bees precise information about where to find food.',
        collocations: ['precise location', 'precise angle', 'precise instructions'],
        synonyms: ['exact', 'accurate', 'specific'],
        antonyms: ['vague', 'approximate']
      },
      {
        id: 'v-b1-19',
        word: 'duration',
        phonetic: '/djʊəˈreɪ.ʃən/',
        partOfSpeech: 'noun',
        definition: 'Davomiylik; biror harakat yoki hodisaning qancha vaqt davom etishi.',
        cefrLevel: 'B1',
        exampleSentence: 'The duration of the bee’s dance indicates the distance to the flower patch.',
        collocations: ['short duration', 'total duration', 'for the duration of'],
        synonyms: ['length', 'span', 'period']
      },
      {
        id: 'v-b1-20',
        word: 'scent',
        phonetic: '/sent/',
        partOfSpeech: 'noun',
        definition: 'Yoqimli hid, ifor, bo‘y (gullar yoki o‘simliklarning tabiiy hidi).',
        cefrLevel: 'B1',
        exampleSentence: 'Bees recognize the sweet scent of lavender clinging to the scout’s wings.',
        collocations: ['sweet scent', 'faint scent', 'follow a scent'],
        synonyms: ['fragrance', 'aroma', 'smell']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-8',
          targetWord: 'precise',
          question: 'When the article says the bee performs a "precise" dance, what does "precise" mean?',
          options: [
            'Confusing and hard to see',
            'Exact and accurate in its details',
            'Slow and lazy',
            'Performed only once a year'
          ],
          correctIndex: 1,
          explanation: '"Precise" means exact and accurate, allowing other bees to find the exact meadow.'
        },
        {
          id: 'mc-b1-9',
          targetWord: 'duration',
          question: 'What does the "duration" of the waggle dance measure?',
          options: [
            'How long in time the bee shakes her body during the dance',
            'How many wings the bee has',
            'The color of the honey',
            'The temperature outside the hive'
          ],
          correctIndex: 0,
          explanation: '"Duration" refers to the length of time that an action continues.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-8',
          sentenceWithBlank: 'Instead of searching _____ across the countryside, bees fly directly to blooming fields.',
          targetWord: 'randomly',
          hint: 'Adverb meaning without a plan or pattern',
          options: ['randomly', 'precisely', 'harshly', 'consistently']
        },
        {
          id: 'cl-b1-9',
          sentenceWithBlank: 'A healthy honeybee _____ can produce several kilograms of honey during spring.',
          targetWord: 'colony',
          hint: 'Noun meaning a large community of insects living together',
          options: ['colony', 'duration', 'scent', 'merchant']
        }
      ],
      matching: {
        id: 'mat-b1-4',
        instructions: 'Match each B1 nature vocabulary word with its definition:',
        pairs: [
          { id: 'p-b1-13', term: 'colony', match: 'large group of insects living together' },
          { id: 'p-b1-14', term: 'randomly', match: 'without any definite plan or pattern' },
          { id: 'p-b1-15', term: 'precise', match: 'exact and accurate in detail' },
          { id: 'p-b1-16', term: 'scent', match: 'natural smell or fragrance of a flower' }
        ]
      }
    }
  },
  {
    id: 'b1-printing-press-gutenberg',
    title: 'Gutenberg’s Printing Press: The Machine That Democratized Reading',
    subtitle: 'Before 1450, a single book took months to copy by hand and cost as much as a small farm. One invention changed everything.',
    level: 'B1',
    category: 'History & Civilizations',
    readTime: '3 min read',
    wordCount: 315,
    cefrSummary: 'Historical inventions, cause-and-effect milestones, and literacy vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-950',
    paragraphs: [
      'In medieval Europe, books were rare luxury items. Every single page had to be copied by hand by scribes working in monasteries with quill pens and ink. Because a single volume took months to complete, only kings, wealthy nobles, and large churches could afford to own a library. Ordinary townspeople rarely held a book in their entire lives.',
      'Around 1450 in Mainz, Germany, a goldsmith named Johannes Gutenberg combined several existing technologies into a revolutionary mechanical printing press. Using his knowledge of metalworking, he cast individual metal letters — called "movable type" — that could be arranged into words, coated with oil-based ink, pressed onto paper, and then rearranged to print the next page.',
      'The speed of production astonished Europe. A workshop using Gutenberg’s press could print more pages in a single afternoon than a scribe could copy in an entire year. Within five decades, printing presses had spread to over two hundred cities, and the price of books dropped by eighty percent.',
      'As affordable books flooded marketplaces, literacy rates rose rapidly among merchants, artisans, and students. Scientists could share astronomical tables without copying errors, and ordinary citizens could read pamphlets in their everyday spoken languages rather than only in Latin.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-21',
        word: 'afford',
        phonetic: '/əˈfɔːd/',
        partOfSpeech: 'verb',
        definition: 'Qurbi yetmoq; biror narsani sotib olishga puli yoki moddiy imkoniyati yetarli bo‘lmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Before the printing press, ordinary workers could not afford to buy books.',
        collocations: ['can afford', 'afford to buy', 'hardly afford'],
        synonyms: ['pay for', 'manage']
      },
      {
        id: 'v-b1-22',
        word: 'revolutionary',
        phonetic: '/ˌrev.əˈluː.ʃən.ər.i/',
        partOfSpeech: 'adjective',
        definition: 'Inqilobiy; tubdan o‘zgarish yasaydigan, butunlay yangicha.',
        cefrLevel: 'B1',
        exampleSentence: 'Movable metal type was a revolutionary invention for sharing human knowledge.',
        collocations: ['revolutionary invention', 'revolutionary idea', 'revolutionary change'],
        synonyms: ['groundbreaking', 'transformative', 'pioneering']
      },
      {
        id: 'v-b1-23',
        word: 'astonish',
        phonetic: '/əˈstɒn.ɪʃ/',
        partOfSpeech: 'verb',
        definition: 'Hayratda qoldirmoq, juda qattiq ajablantirmoq, lol qoldirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'The speed and clarity of the printed pages astonished scholars across Europe.',
        collocations: ['astonish observers', 'truly astonish', 'astonished by'],
        synonyms: ['amaze', 'astound', 'stagger']
      },
      {
        id: 'v-b1-24',
        word: 'literacy',
        phonetic: '/ˈlɪt.ər.ə.si/',
        partOfSpeech: 'noun',
        definition: 'Savodxonlik; o‘qish va yozishni bilish qobiliyati.',
        cefrLevel: 'B1',
        exampleSentence: 'Cheaper books led to a dramatic rise in public literacy during the sixteenth century.',
        collocations: ['literacy rate', 'promote literacy', 'basic literacy'],
        synonyms: ['reading ability', 'education']
      },
      {
        id: 'v-b1-25',
        word: 'ordinary',
        phonetic: '/ˈɔː.dən.ri/',
        partOfSpeech: 'adjective',
        definition: 'Oddiy, kundalik; maxsus imtiyozga ega bo‘lmagan (oddiy xalq yoki odatiy narsa).',
        cefrLevel: 'B1',
        exampleSentence: 'Printed pamphlets allowed ordinary citizens to read news in their own language.',
        collocations: ['ordinary people', 'ordinary citizens', 'ordinary life'],
        synonyms: ['everyday', 'common', 'average'],
        antonyms: ['privileged', 'extraordinary']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-10',
          targetWord: 'literacy',
          question: 'When the article states that "literacy rates rose rapidly", what increased?',
          options: [
            'The price of paper and ink',
            'The percentage of people who knew how to read and write',
            'The number of handwritten Latin manuscripts',
            'The weight of metal printing machines'
          ],
          correctIndex: 1,
          explanation: '"Literacy" is the ability to read and write.'
        },
        {
          id: 'mc-b1-11',
          targetWord: 'revolutionary',
          question: 'Why was Gutenberg’s press described as "revolutionary"?',
          options: [
            'Because it completely and dramatically changed how information was produced and shared',
            'Because it had large wooden wheels that turned in circles',
            'Because it was used only by soldiers',
            'Because it broke down after printing one book'
          ],
          correctIndex: 0,
          explanation: '"Revolutionary" describes an innovation that causes a sweeping, fundamental transformation.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-10',
          sentenceWithBlank: 'In 1400, handwritten books were so expensive that only wealthy nobles could _____ them.',
          targetWord: 'afford',
          hint: 'Verb meaning to have enough money to pay for something',
          options: ['afford', 'astonish', 'blend', 'prize']
        },
        {
          id: 'cl-b1-11',
          sentenceWithBlank: 'Instead of writing only for scholars, authors began printing stories for _____ townspeople.',
          targetWord: 'ordinary',
          hint: 'Adjective meaning everyday or common people',
          options: ['ordinary', 'revolutionary', 'precise', 'harsh']
        }
      ],
      matching: {
        id: 'mat-b1-5',
        instructions: 'Match each vocabulary word to its natural collocation:',
        pairs: [
          { id: 'p-b1-17', term: 'afford', match: 'to buy expensive books' },
          { id: 'p-b1-18', term: 'revolutionary', match: 'mechanical invention' },
          { id: 'p-b1-19', term: 'public', match: 'literacy rates across Europe' },
          { id: 'p-b1-20', term: 'ordinary', match: 'citizens and shopkeepers' }
        ]
      }
    }
  },
  {
    id: 'b1-bilingual-brain',
    title: 'Learning a Second Language: How It Shapes Everyday Thinking',
    subtitle: 'Speaking more than one language does far more than help you order food on holiday — it trains your brain to multitask.',
    level: 'B1',
    category: 'Psychology & Mind',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Language learning vocabulary, cognitive benefits, and clear cause-and-effect explanations.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-950',
    gradientTo: 'to-blue-900',
    paragraphs: [
      'Many people study a foreign language for practical reasons, such as passing a university exam, applying for an international job, or communicating while traveling. However, brain researchers have discovered that learning a second language also provides remarkable mental exercise that benefits you even when you are speaking your native tongue.',
      'When a bilingual person speaks, both languages remain active inside the brain at the same time. To choose the right word without accidentally mixing vocabularies, the brain must constantly filter out distractions. This daily mental workout strengthens the prefrontal cortex — the area responsible for problem-solving, switching between tasks, and paying attention.',
      'Interestingly, people often notice that they think more carefully when making decisions in a second language. Because reading or listening in a foreign language requires extra mental effort, we rely less on quick emotional reactions and evaluate choices more logically.',
      'Best of all, these cognitive advantages are not limited to people who grew up speaking two languages from childhood. Adults who begin studying a new language in their thirties, fifties, or seventies still build stronger neural connections and keep their memories sharp as they grow older.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-26',
        word: 'practical',
        phonetic: '/ˈpræk.tɪ.kəl/',
        partOfSpeech: 'adjective',
        definition: 'Amaliy, foydali; nazariy emas, balki kundalik hayotda real foyda beradigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Learning how to read train timetables is a very practical skill for travelers.',
        collocations: ['practical reasons', 'practical advice', 'practical experience'],
        synonyms: ['useful', 'functional', 'sensible'],
        antonyms: ['theoretical', 'impractical']
      },
      {
        id: 'v-b1-27',
        word: 'distraction',
        phonetic: '/dɪˈstræk.ʃən/',
        partOfSpeech: 'noun',
        definition: 'Chalg‘ituvchi narsa; diqqatni bir joyga jamlashga xalaqit beradigan omil.',
        cefrLevel: 'B1',
        exampleSentence: 'Turning off phone notifications removes a major distraction while studying.',
        collocations: ['filter out distractions', 'constant distraction', 'avoid distractions'],
        synonyms: ['interruption', 'disturbance']
      },
      {
        id: 'v-b1-28',
        word: 'evaluate',
        phonetic: '/ɪˈvæl.ju.eɪt/',
        partOfSpeech: 'verb',
        definition: 'Baholamoq, sinchiklab tahlil qilmoq (biror narsaning qiymati, ahamiyati yoki sifatini o‘lchamoq).',
        cefrLevel: 'B1',
        exampleSentence: 'Thinking in a second language helps people evaluate financial risks more calmly.',
        collocations: ['evaluate choices', 'evaluate options', 'carefully evaluate'],
        synonyms: ['assess', 'judge', 'weigh']
      },
      {
        id: 'v-b1-29',
        word: 'advantage',
        phonetic: '/ədˈvɑːn.tɪdʒ/',
        partOfSpeech: 'noun',
        definition: 'Ustunlik, afzallik, foyda (boshqalarga nisbatan qulayroq imkoniyat).',
        cefrLevel: 'B1',
        exampleSentence: 'Speaking two languages gives job applicants a clear advantage in tourism.',
        collocations: ['clear advantage', 'cognitive advantage', 'take advantage of'],
        synonyms: ['benefit', 'asset', 'edge'],
        antonyms: ['disadvantage', 'drawback']
      },
      {
        id: 'v-b1-30',
        word: 'sharp',
        phonetic: '/ʃɑːp/',
        partOfSpeech: 'adjective',
        definition: 'O‘tkir, ziyrak, tetik (aql va xotira haqida — tez ilg‘aydigan va aniq eslab qoladigan).',
        cefrLevel: 'B1',
        exampleSentence: 'Solving crossword puzzles and reading daily help keep your memory sharp.',
        collocations: ['keep memory sharp', 'sharp mind', 'sharp focus'],
        synonyms: ['alert', 'quick-witted', 'keen'],
        antonyms: ['dull', 'sluggish']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-12',
          targetWord: 'evaluate',
          question: 'When the article says learners "evaluate choices more logically", what does "evaluate" mean?',
          options: [
            'Ignore a problem until it disappears',
            'Carefully judge and weigh different options before deciding',
            'Translate a sentence word by word using a dictionary',
            'Speak as quickly as possible'
          ],
          correctIndex: 1,
          explanation: '"Evaluate" means to assess or consider the value and consequences of options carefully.'
        },
        {
          id: 'mc-b1-13',
          targetWord: 'sharp',
          question: 'In the phrase "keep their memories sharp", what does "sharp" mean?',
          options: [
            'Pointed like a knife',
            'Mentally alert, clear, and quick to remember',
            'Painful or uncomfortable',
            'Strict and unfriendly'
          ],
          correctIndex: 1,
          explanation: 'When describing the mind or memory, "sharp" means mentally agile and alert.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-12',
          sentenceWithBlank: 'Studying in a quiet library helps students avoid noisy _____.',
          targetWord: 'distraction',
          hint: 'Noun meaning something that pulls your attention away',
          options: ['distraction', 'advantage', 'literacy', 'colony']
        },
        {
          id: 'cl-b1-13',
          sentenceWithBlank: 'Knowing how to cook healthy meals on a budget is a very _____ life skill.',
          targetWord: 'practical',
          hint: 'Adjective meaning useful in real everyday situations',
          options: ['practical', 'sharp', 'ordinary', 'compact']
        }
      ],
      matching: {
        id: 'mat-b1-6',
        instructions: 'Match each vocabulary word with its meaning:',
        pairs: [
          { id: 'p-b1-21', term: 'practical', match: 'useful in real-world everyday situations' },
          { id: 'p-b1-22', term: 'distraction', match: 'something that interrupts concentration' },
          { id: 'p-b1-23', term: 'evaluate', match: 'carefully judge or assess options' },
          { id: 'p-b1-24', term: 'advantage', match: 'a helpful benefit or favorable position' }
        ]
      }
    }
  },
  {
    id: 'b1-solar-desalination',
    title: 'Turning Seawater into Drinking Water Using Sunlight',
    subtitle: 'Coastal communities in dry regions are using solar-powered filters to produce clean fresh water without burning fossil fuels.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '3 min read',
    wordCount: 315,
    cefrSummary: 'Water science, clean technology vocabulary, and environmental problem-solving.',
    themeColor: 'blue',
    gradientFrom: 'from-blue-950',
    gradientTo: 'to-cyan-900',
    paragraphs: [
      'Although water covers more than seventy percent of the Earth’s surface, over ninety-seven percent of it is salty ocean water that humans cannot drink or use to water crops. Meanwhile, millions of people living along sunny, arid coastlines suffer from severe freshwater shortages when rivers dry up during summer.',
      'For decades, coastal cities have used "desalination" plants to remove salt from seawater. Traditional plants work either by boiling seawater into steam or by forcing it through ultra-fine membranes under high pressure. While effective, these factories consume huge amounts of electricity, which is often generated by burning oil or natural gas.',
      'Recently, engineers have developed compact solar-powered desalination units designed for small islands and rural villages. Solar panels on the roof power high-pressure pumps during the sunniest hours of the day, storing clean drinking water in insulated tanks rather than using expensive batteries.',
      'Each unit can purify enough water for three thousand residents every day. By combining abundant coastal sunshine with seawater filtration, dry regions can secure a reliable water supply without polluting the atmosphere.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-31',
        word: 'arid',
        phonetic: '/ˈær.ɪd/',
        partOfSpeech: 'adjective',
        definition: 'Qurg‘oqchil, suvsiz; yomg‘ir juda kam yog‘adigan quruq iqlim yoki hudud.',
        cefrLevel: 'B1',
        exampleSentence: 'Solar desalination is ideal for arid coastal regions where rainfall is rare.',
        collocations: ['arid climate', 'arid region', 'arid desert'],
        synonyms: ['parched', 'dry', 'waterless'],
        antonyms: ['humid', 'wet', 'fertile']
      },
      {
        id: 'v-b1-32',
        word: 'shortage',
        phonetic: '/ˈʃɔː.tɪdʒ/',
        partOfSpeech: 'noun',
        definition: 'Tanqislik, yetishmovchilik (odamlarga zarur bo‘lgan narsaning yetarli emasligi).',
        cefrLevel: 'B1',
        exampleSentence: 'Hotter summers have caused serious water shortages across the Mediterranean.',
        collocations: ['water shortage', 'severe shortage', 'food shortage'],
        synonyms: ['scarcity', 'lack', 'deficit'],
        antonyms: ['surplus', 'abundance']
      },
      {
        id: 'v-b1-33',
        word: 'remove',
        phonetic: '/rɪˈmuːv/',
        partOfSpeech: 'verb',
        definition: 'Olib tashlamoq, ajratib olmoq, yo‘qotmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Special filters remove salt and minerals from ocean water.',
        collocations: ['remove salt', 'remove impurities', 'completely remove'],
        synonyms: ['extract', 'eliminate', 'take out']
      },
      {
        id: 'v-b1-34',
        word: 'purify',
        phonetic: '/ˈpjʊə.rɪ.faɪ/',
        partOfSpeech: 'verb',
        definition: 'Tozalamoq; suv yoki havoni zararli va iflos moddalardan xoli qilib toza holga keltirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Campers use portable filters to purify river water before drinking it.',
        collocations: ['purify water', 'purify air', 'naturally purify'],
        synonyms: ['cleanse', 'filter', 'decontaminate'],
        antonyms: ['pollute', 'contaminate']
      },
      {
        id: 'v-b1-35',
        word: 'abundant',
        phonetic: '/əˈbʌn.dənt/',
        partOfSpeech: 'adjective',
        definition: 'Mo‘l-ko‘l, serob; juda katta miqdorda mavjud bo‘lgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Desert coastlines have abundant sunshine throughout the entire year.',
        collocations: ['abundant sunshine', 'abundant supply', 'abundant energy'],
        synonyms: ['plentiful', 'ample', 'rich'],
        antonyms: ['scarce', 'rare']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-14',
          targetWord: 'arid',
          question: 'What is an "arid" region like?',
          options: [
            'Extremely dry with very little rainfall',
            'Covered in thick tropical rainforests',
            'Freezing cold with glaciers',
            'Flooded by heavy monsoon rains'
          ],
          correctIndex: 0,
          explanation: '"Arid" describes a dry climate or landscape that receives minimal rain.'
        },
        {
          id: 'mc-b1-15',
          targetWord: 'abundant',
          question: 'When the text says desert coastlines have "abundant sunshine", it means:',
          options: [
            'Sunshine is very rare and only appears in winter',
            'There is a plentiful, large supply of sunshine',
            'The sun is blocked by thick fog',
            'Solar panels cannot work there'
          ],
          correctIndex: 1,
          explanation: '"Abundant" means existing in large, plentiful quantities.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-14',
          sentenceWithBlank: 'Many islands face a severe freshwater _____ during the busy summer tourist season.',
          targetWord: 'shortage',
          hint: 'Noun meaning a lack of something needed',
          options: ['shortage', 'colony', 'literacy', 'duration']
        },
        {
          id: 'cl-b1-15',
          sentenceWithBlank: 'Wetland plants naturally help _____ rainwater before it flows into underground lakes.',
          targetWord: 'purify',
          hint: 'Verb meaning to clean and remove harmful substances',
          options: ['purify', 'afford', 'astonish', 'impair']
        }
      ],
      matching: {
        id: 'mat-b1-7',
        instructions: 'Match each B1 science word with its opposite (antonym):',
        pairs: [
          { id: 'p-b1-25', term: 'arid', match: 'wet, humid, and rainy' },
          { id: 'p-b1-26', term: 'shortage', match: 'plentiful surplus and excess' },
          { id: 'p-b1-27', term: 'purify', match: 'pollute and contaminate' },
          { id: 'p-b1-28', term: 'abundant', match: 'scarce and hard to find' }
        ]
      }
    }
  },
  {
    id: 'b1-vertical-farming',
    title: 'Growing Upward: How Indoor Farms Bring Fresh Lettuce to Winter Cities',
    subtitle: 'Using LED lights and stacked shelves, indoor agriculture produces fresh vegetables inside city warehouses all year round.',
    level: 'B1',
    category: 'Technology & Innovation',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Food production, agricultural technology, and environmental resource comparisons.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-stone-900',
    paragraphs: [
      'During cold winter months in northern countries, most fresh tomatoes, herbs, and salad leaves in supermarkets have traveled thousands of kilometers by truck or airplane. By the time these vegetables reach your plate, they have lost much of their flavor and nutritional value. To solve this problem, agricultural engineers are building "vertical farms" inside city warehouses.',
      'Instead of planting seeds in wide outdoor fields, vertical farmers grow crops in tall stacked trays reaching up to the ceiling. Rather than relying on sunlight and rain, these indoor farms use energy-efficient LED lights and nutrient-rich water mist. Because the temperature and humidity are controlled by computers, farmers can harvest crisp lettuce twelve months a year regardless of snowstorms or droughts outside.',
      'Surprisingly, vertical farming uses up to ninety-five percent less water than traditional farming because the water is recycled in a closed loop. Furthermore, since the plants grow indoors without wild insects, farmers never need to spray chemical pesticides.',
      'Although indoor farms require significant electricity to power the lamps, locating them next to supermarkets cuts transportation pollution dramatically. For rapidly growing cities, vertical agriculture offers a reliable way to supply fresh local greens in every season.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-36',
        word: 'nutritional',
        phonetic: '/njuːˈtrɪʃ.ən.əl/',
        partOfSpeech: 'adjective',
        definition: 'Ozuqaviy; organizmni sog‘lom saqlaydigan vitamin va foydali moddalarga oid.',
        cefrLevel: 'B1',
        exampleSentence: 'Freshly picked spinach has higher nutritional value than vegetables stored for weeks.',
        collocations: ['nutritional value', 'nutritional content', 'nutritional benefits'],
        synonyms: ['nourishing', 'healthy', 'dietary']
      },
      {
        id: 'v-b1-37',
        word: 'harvest',
        phonetic: '/ˈhɑː.vɪst/',
        partOfSpeech: 'verb',
        definition: 'Hosilni yig‘ib olmoq; pishib yetilgan ekin yoki meva-sabzavotlarni terib olmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Indoor farmers can harvest fresh basil every three weeks throughout the year.',
        collocations: ['harvest crops', 'harvest vegetables', 'ready to harvest'],
        synonyms: ['gather', 'pick', 'reap']
      },
      {
        id: 'v-b1-38',
        word: 'drought',
        phonetic: '/draʊt/',
        partOfSpeech: 'noun',
        definition: 'Qurg‘oqchilik; uzoq vaqt yomg‘ir yog‘masligi natijasida yuzaga keladigan suv tanqisligi.',
        cefrLevel: 'B1',
        exampleSentence: 'Severe summer drought damaged outdoor wheat fields across the region.',
        collocations: ['severe drought', 'prolonged drought', 'survive a drought'],
        synonyms: ['dry spell', 'water shortage'],
        antonyms: ['flood', 'deluge']
      },
      {
        id: 'v-b1-39',
        word: 'pesticide',
        phonetic: '/ˈpes.tɪ.saɪd/',
        partOfSpeech: 'noun',
        definition: 'Pestitsid; ekinlarga zarar yetkazuvchi hasharotlarga qarshi sepiladigan kimyoviy vosita.',
        cefrLevel: 'B1',
        exampleSentence: 'Because indoor farms are sealed against bugs, lettuce can be grown without chemical pesticides.',
        collocations: ['chemical pesticide', 'spray pesticides', 'pesticide-free'],
        synonyms: ['insecticide', 'crop spray']
      },
      {
        id: 'v-b1-40',
        word: 'supply',
        phonetic: '/səˈplaɪ/',
        partOfSpeech: 'verb',
        definition: 'Ta’minlamoq, yetkazib bermoq (odamlar yoki do‘konlarni zarur mahsulotlar bilan).',
        cefrLevel: 'B1',
        exampleSentence: 'The warehouse farm supplies twenty neighborhood grocery stores with fresh herbs.',
        collocations: ['supply fresh food', 'supply electricity', 'reliable supply'],
        synonyms: ['provide', 'deliver', 'furnish']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-16',
          targetWord: 'harvest',
          question: 'What does it mean when farmers "harvest" lettuce?',
          options: [
            'They plant tiny seeds in soil',
            'They pick and gather the fully grown plants when they are ready to eat',
            'They turn on the purple LED lamps',
            'They recycle water through a filter'
          ],
          correctIndex: 1,
          explanation: 'To "harvest" means to gather ripe crops once they have finished growing.'
        },
        {
          id: 'mc-b1-17',
          targetWord: 'drought',
          question: 'Why are indoor vertical farms unaffected by "drought"?',
          options: [
            'Because a drought is a long period without rain, and indoor farms recycle water in a closed system',
            'Because a drought only happens inside greenhouses',
            'Because lettuce does not need any water to grow',
            'Because vertical farms are built underwater'
          ],
          correctIndex: 0,
          explanation: '"Drought" refers to a prolonged lack of rainfall, which does not impact climate-controlled indoor farms.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-16',
          sentenceWithBlank: 'Washing fruit carefully removes dust and any remaining chemical _____.',
          targetWord: 'pesticide',
          hint: 'Noun meaning chemical spray used against insects',
          options: ['pesticide', 'drought', 'shortage', 'colony']
        },
        {
          id: 'cl-b1-17',
          sentenceWithBlank: 'Freezing berries immediately after picking helps preserve their _____ value.',
          targetWord: 'nutritional',
          hint: 'Adjective relating to healthy vitamins and food quality',
          options: ['nutritional', 'abundant', 'arid', 'compact']
        }
      ],
      matching: {
        id: 'mat-b1-8',
        instructions: 'Match each agricultural word with its definition:',
        pairs: [
          { id: 'p-b1-29', term: 'nutritional', match: 'relating to vitamins and healthy food value' },
          { id: 'p-b1-30', term: 'harvest', match: 'gather ripe crops when ready to eat' },
          { id: 'p-b1-31', term: 'drought', match: 'long period with little or no rainfall' },
          { id: 'p-b1-32', term: 'supply', match: 'provide stores or people with needed goods' }
        ]
      }
    }
  },
  {
    id: 'b1-bionic-limbs-3d-printing',
    title: '3D-Printed Prosthetics: Custom Artificial Hands for Growing Children',
    subtitle: 'Affordable 3D printers allow engineers and volunteers to design lightweight, colorful prosthetic arms at a fraction of the traditional cost.',
    level: 'B1',
    category: 'Technology & Innovation',
    readTime: '3 min read',
    wordCount: 315,
    cefrSummary: 'Medical engineering, accessible design vocabulary, and human-interest technology.',
    themeColor: 'indigo',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'For an adult who loses an arm or leg, a traditional medical prosthetic limb can cost thousands of euros and take weeks to manufacture by hand. For families with young children, the challenge is even greater: because children grow so quickly, they outgrow an artificial hand every twelve to eighteen months. As a result, many families cannot afford to replace them regularly.',
      'Over the past decade, 3D printing technology has offered a practical and inspiring solution. Using a desktop 3D printer and rolls of strong, recyclable plastic filament, engineers and hobbyists can print all the fingers, joints, and palm pieces of a mechanical hand in less than twenty-four hours for under fifty euros.',
      'When the child bends their wrist or elbow, strong nylon cords inside the 3D-printed hand pull the fingers closed, allowing them to grip a water bottle, hold a paintbrush, or ride a bicycle. When the child grows taller next year, a larger size can simply be printed from the same digital file.',
      'Even better, children can customize the appearance of their prosthetic arm. Instead of hiding a plain flesh-colored device under long sleeves, kids often choose bright superhero colors or glow-in-the-dark patterns that make them feel proud and confident among their classmates.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-41',
        word: 'artificial',
        phonetic: '/ˌɑː.tɪˈfɪʃ.əl/',
        partOfSpeech: 'adjective',
        definition: 'Sun’iy; tabiiy emas, balki inson tomonidan tabiiy narsaga o‘xshatib yasalgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Engineers designed an artificial hand that bends when the wearer moves their wrist.',
        collocations: ['artificial limb', 'artificial light', 'artificial intelligence'],
        synonyms: ['man-made', 'synthetic', 'manufactured'],
        antonyms: ['natural', 'genuine']
      },
      {
        id: 'v-b1-42',
        word: 'outgrow',
        phonetic: '/ˌaʊtˈɡrəʊ/',
        partOfSpeech: 'verb',
        definition: 'Bo‘yi o‘sib sig‘may qolmoq (ulg‘aygan sari kiyim, poyabzal yoki buyumning kichiklik qilib qolishi).',
        cefrLevel: 'B1',
        exampleSentence: 'Young children outgrow their shoes and coats almost every year.',
        collocations: ['quickly outgrow', 'outgrow clothes', 'outgrow a size'],
        synonyms: ['grow too big for']
      },
      {
        id: 'v-b1-43',
        word: 'grip',
        phonetic: '/ɡrɪp/',
        partOfSpeech: 'verb',
        definition: 'Mahkam ushlamoq, qo‘l bilan qattiq tutmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Rubber fingertips help the mechanical hand grip smooth objects like a glass cup.',
        collocations: ['grip tightly', 'grip the handlebars', 'firm grip'],
        synonyms: ['grasp', 'hold', 'clutch'],
        antonyms: ['release', 'drop']
      },
      {
        id: 'v-b1-44',
        word: 'customize',
        phonetic: '/ˈkʌs.tə.maɪz/',
        partOfSpeech: 'verb',
        definition: 'Moslashtirmoq; biror buyumning ko‘rinishi yoki tuzilishini shaxsiy xohish va didga qarab o‘zgartirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Children love to customize their 3D-printed hands with their favorite colors.',
        collocations: ['customize the design', 'easily customize', 'customize settings'],
        synonyms: ['personalize', 'tailor', 'adapt']
      },
      {
        id: 'v-b1-45',
        word: 'confident',
        phonetic: '/ˈkɒn.fɪ.dənt/',
        partOfSpeech: 'adjective',
        definition: 'O‘ziga ishongan, dadil; tortinmaydigan va uyalmaydigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Wearing a colorful superhero arm helped the boy feel confident on his first day of school.',
        collocations: ['feel confident', 'confident smile', 'self-confident'],
        synonyms: ['assured', 'proud', 'poised'],
        antonyms: ['insecure', 'timid']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-18',
          targetWord: 'outgrow',
          question: 'Why do children "outgrow" a prosthetic hand every year or two?',
          options: [
            'Because their bodies grow larger as they get older, making the old size too small',
            'Because plastic melts in the rain',
            'Because they forget where they left it',
            'Because the colors fade in sunlight'
          ],
          correctIndex: 0,
          explanation: 'To "outgrow" something means to grow physically too large for it.'
        },
        {
          id: 'mc-b1-19',
          targetWord: 'customize',
          question: 'When children "customize" their 3D-printed arm, what do they do?',
          options: [
            'They personalize its colors and style to match their own personality',
            'They return it to the hospital',
            'They pay customs tax at the airport',
            'They hide it inside a backpack'
          ],
          correctIndex: 0,
          explanation: 'To "customize" means to tailor or personalize something for an individual.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-18',
          sentenceWithBlank: 'Strong cords inside the fingers allow the wearer to _____ a bicycle handlebar firmly.',
          targetWord: 'grip',
          hint: 'Verb meaning to hold onto something tightly',
          options: ['grip', 'outgrow', 'customize', 'purify']
        },
        {
          id: 'cl-b1-19',
          sentenceWithBlank: 'Practicing her speech in front of friends made her feel much more _____ on stage.',
          targetWord: 'confident',
          hint: 'Adjective meaning self-assured and not shy',
          options: ['confident', 'artificial', 'arid', 'abundant']
        }
      ],
      matching: {
        id: 'mat-b1-9',
        instructions: 'Match each B1 technology word with its definition:',
        pairs: [
          { id: 'p-b1-33', term: 'artificial', match: 'made by humans to copy something natural' },
          { id: 'p-b1-34', term: 'outgrow', match: 'become too big for clothes or equipment' },
          { id: 'p-b1-35', term: 'grip', match: 'hold onto an object firmly with the hand' },
          { id: 'p-b1-36', term: 'customize', match: 'personalize colors or design to fit someone' }
        ]
      }
    }
  },
  {
    id: 'b1-rosetta-stone',
    title: 'Unlocking Ancient Egypt: How the Rosetta Stone Solved the Hieroglyphic Mystery',
    subtitle: 'For over a thousand years, no one on Earth could read the picture writing carved onto Egyptian temples—until a broken black stone was found in 1799.',
    level: 'B1',
    category: 'History & Civilizations',
    readTime: '3 min read',
    wordCount: 330,
    cefrSummary: 'Historical narrative using past tenses, time expressions, and B1 archaeology and language vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-900',
    gradientTo: 'to-stone-900',
    paragraphs: [
      'For more than three thousand years, ancient Egyptians recorded their royal history, religious prayers, and daily trade using hieroglyphs—an intricate system of symbols showing birds, tools, eyes, and geometric shapes. However, after Egypt came under foreign rule in the fourth century CE, knowledge of how to read these symbols gradually disappeared. For the next fourteen hundred years, travellers stared at temple walls in amazement without understanding a single sentence.',
      'The breakthrough began in 1799 near the Egyptian port town of Rashid, known to Europeans as Rosetta. While repairing an old fort, soldiers uncovered a heavy slab of dark rock carved with three bands of writing in three different scripts: formal Egyptian hieroglyphs at the top, everyday Egyptian script in the middle, and ancient Greek at the bottom.',
      'Because nineteenth-century European scholars could still read ancient Greek easily, they quickly realized that all three sections contained the exact same royal message written by priests in 196 BCE. The stone was essentially a dictionary waiting to be solved.',
      'Even with this clue, decoding the top section took more than twenty years. Many scholars mistakenly believed each picture stood for a whole idea rather than a sound. Finally, in 1822, a young French linguist named Jean-François Champollion proved that hieroglyphs combined spoken sounds with visual symbols—allowing historians to read thousands of ancient texts once again.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-46',
        word: 'symbol',
        phonetic: '/ˈsɪm.bəl/',
        partOfSpeech: 'noun',
        definition: 'Belgi, ramz, timsol (biror fikr, tovush yoki narsani ifodalovchi tasvir yoki shakl).',
        cefrLevel: 'B1',
        exampleSentence: 'Ancient Egyptians carved symbols of birds and animals onto stone walls.',
        collocations: ['ancient symbol', 'visual symbol', 'represent a symbol'],
        synonyms: ['sign', 'character', 'emblem']
      },
      {
        id: 'v-b1-47',
        word: 'breakthrough',
        phonetic: '/ˈbreɪk.θruː/',
        partOfSpeech: 'noun',
        definition: 'Muhim kashfiyot, katta yutuq (uzoq yillik muammoni hal qilishga yordam bergan burilish nuqtasi).',
        cefrLevel: 'B1',
        exampleSentence: 'Finding the Rosetta Stone was a major breakthrough for historians.',
        collocations: ['major breakthrough', 'scientific breakthrough', 'make a breakthrough'],
        synonyms: ['discovery', 'advance', 'leap forward']
      },
      {
        id: 'v-b1-48',
        word: 'uncover',
        phonetic: '/ʌnˈkʌv.ər/',
        partOfSpeech: 'verb',
        definition: 'Topib olmoq, ochmoq (yer ostida ko‘milgan yoki yashirinib yotgan narsani topmoq).',
        cefrLevel: 'B1',
        exampleSentence: 'Workers uncovered a Roman coin while digging the foundation for a new school.',
        collocations: ['uncover a treasure', 'uncover evidence', 'accidentally uncover'],
        synonyms: ['discover', 'unearth', 'expose'],
        antonyms: ['bury', 'hide']
      },
      {
        id: 'v-b1-49',
        word: 'decode',
        phonetic: '/diːˈkəʊd/',
        partOfSpeech: 'verb',
        definition: 'Ma’nosini yechmoq, o‘qib tushunmoq (sirli xabar yoki noma’lum yozuv tizimini).',
        cefrLevel: 'B1',
        exampleSentence: 'It took more than twenty years to decode the hieroglyphs on the Rosetta Stone.',
        collocations: ['decode a message', 'decode ancient writing', 'successfully decode'],
        synonyms: ['decipher', 'translate', 'solve'],
        antonyms: ['encode']
      },
      {
        id: 'v-b1-50',
        word: 'mistakenly',
        phonetic: '/mɪˈsteɪ.kən.li/',
        partOfSpeech: 'adverb',
        definition: 'Yanglishib, xato qilib, noto‘g‘ri fikrga asoslanib.',
        cefrLevel: 'B1',
        exampleSentence: 'Early researchers mistakenly assumed that hieroglyphs had no spoken sounds.',
        collocations: ['mistakenly believe', 'mistakenly assume', 'mistakenly think'],
        synonyms: ['incorrectly', 'wrongly', 'by mistake'],
        antonyms: ['correctly', 'accurately']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-20',
          targetWord: 'breakthrough',
          question: 'Why was the discovery of the Rosetta Stone called a "breakthrough"?',
          options: [
            'Because it finally gave scholars the key to solving a 1,400-year-old mystery',
            'Because the stone broke into three pieces when soldiers dropped it',
            'Because it was used to build a stronger castle wall',
            'Because it was written in modern English'
          ],
          correctIndex: 0,
          explanation: 'A "breakthrough" is a crucial discovery that overcomes a major obstacle.'
        },
        {
          id: 'mc-b1-21',
          targetWord: 'decode',
          question: 'What did Jean-François Champollion manage to "decode" in 1822?',
          options: [
            'The meaning and sound system of Egyptian hieroglyphs',
            'A modern computer password',
            'A map of the Silk Road',
            'The recipe for Roman concrete'
          ],
          correctIndex: 0,
          explanation: 'To "decode" means to figure out the meaning of an unknown script or code.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-20',
          sentenceWithBlank: 'Archaeologists _____ an ancient mosaic floor buried beneath the town square.',
          targetWord: 'uncovered',
          hint: 'Found something hidden underground (past tense)',
          options: ['uncovered', 'decoded', 'outgrew', 'gripped']
        },
        {
          id: 'cl-b1-21',
          sentenceWithBlank: 'Many tourists _____ believe that Sydney is the capital of Australia.',
          targetWord: 'mistakenly',
          hint: 'Wrongly or based on an error',
          options: ['mistakenly', 'randomly', 'confident', 'arid']
        }
      ],
      matching: {
        id: 'mat-b1-10',
        instructions: 'Match each B1 history word with its definition:',
        pairs: [
          { id: 'p-b1-37', term: 'symbol', match: 'a sign or picture that represents a sound or idea' },
          { id: 'p-b1-38', term: 'breakthrough', match: 'an important discovery that solves a problem' },
          { id: 'p-b1-39', term: 'uncover', match: 'dig up or find something that was hidden' },
          { id: 'p-b1-40', term: 'decode', match: 'work out the meaning of an unfamiliar script' }
        ]
      }
    }
  },
  {
    id: 'b1-migratory-birds-compass',
    title: 'Nature’s Built-In Compass: How Migratory Birds Navigate Across Continents',
    subtitle: 'Every autumn, millions of songbirds fly thousands of kilometers across oceans and deserts—returning to the exact same tree without a map.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Wildlife biology, seasonal journeys, and B1 directional and sensory vocabulary.',
    themeColor: 'cyan',
    gradientFrom: 'from-sky-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Every autumn, as days grow shorter and insects become scarce in northern forests, billions of birds embark on an extraordinary journey. Tiny Arctic terns, swallows, and warblers—some weighing no more than a coin—fly thousands of kilometers south to spend the winter in warmer regions. Even more remarkably, young birds making the trip for the very first time often travel alone at night and still reach their destination.',
      'How do birds find their way across featureless oceans without getting lost? Biologists have discovered that migratory birds rely on multiple navigation tools at once. During the day, they use the position of the sun as a sky compass, adjusting their direction as the sun moves across the horizon. At night, night-flying songbirds orient themselves by watching how stars rotate around the North Star.',
      'When thick clouds hide both the sun and the stars, birds switch to an even more surprising sixth sense: they can detect the Earth’s invisible magnetic field. Special light-sensitive proteins inside a bird’s eyes react to magnetic lines, allowing the bird to "see" whether it is heading toward the pole or the equator.',
      'Once a bird gets close to its winter home, familiar landmarks—such as coastlines, mountain ridges, and even distinct smells carried by the wind—guide it back to the exact branch it left the year before.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-51',
        word: 'destination',
        phonetic: '/ˌdes.tɪˈneɪ.ʃən/',
        partOfSpeech: 'noun',
        definition: 'Manzil, boriladigan joy — inson yoki narsa yo‘l olgan yakuniy joy.',
        cefrLevel: 'B1',
        exampleSentence: 'After flying for three weeks across Europe and the Sahara, the swallows reached their winter destination.',
        collocations: ['reach a destination', 'final destination', 'popular destination'],
        synonyms: ['goal', 'end point', 'landing place']
      },
      {
        id: 'v-b1-52',
        word: 'rely',
        phonetic: '/rɪˈlaɪ/',
        partOfSpeech: 'verb',
        definition: 'Tayanmoq, ishonmoq — kimdir yoki nimadir to‘g‘ri ishlashiga suyanmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Migratory birds rely on the sun, stars, and magnetic fields to find their way.',
        collocations: ['rely on', 'heavily rely on', 'rely upon'],
        synonyms: ['depend on', 'count on', 'trust']
      },
      {
        id: 'v-b1-53',
        word: 'horizon',
        phonetic: '/həˈraɪ.zən/',
        partOfSpeech: 'noun',
        definition: 'Ufq — uzoqda yer yoki dengiz osmon bilan tutashgandek ko‘rinadigan chiziq.',
        cefrLevel: 'B1',
        exampleSentence: 'Sailors watched the sun sink slowly below the western horizon.',
        collocations: ['on the horizon', 'above the horizon', 'distant horizon'],
        synonyms: ['skyline']
      },
      {
        id: 'v-b1-54',
        word: 'detect',
        phonetic: '/dɪˈtekt/',
        partOfSpeech: 'verb',
        definition: 'Payqamoq, sezmoq, aniqlamoq — ko‘rish yoki sezish qiyin bo‘lgan narsani topmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Many migratory birds can detect the Earth’s invisible magnetic field.',
        collocations: ['detect a signal', 'detect changes', 'easily detect'],
        synonyms: ['sense', 'notice', 'spot']
      },
      {
        id: 'v-b1-55',
        word: 'landmark',
        phonetic: '/ˈlænd.mɑːk/',
        partOfSpeech: 'noun',
        definition: 'Mo‘ljal, taniqli belgi — qayerda ekaningizni bilishga yordam beradigan yirik bino yoki tabiiy obyekt.',
        cefrLevel: 'B1',
        exampleSentence: 'Rivers, coastlines, and tall mountain peaks serve as visual landmarks for migrating flocks.',
        collocations: ['familiar landmark', 'famous landmark', 'visual landmark'],
        synonyms: ['guidepost', 'monument', 'marker']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-22',
          targetWord: 'detect',
          question: 'How do birds keep flying in the right direction when thick clouds hide the sun and stars?',
          options: [
            'They can detect (sense) the Earth’s magnetic field using special proteins in their eyes.',
            'They land on ships and wait for spring.',
            'They follow airplanes across the ocean.',
            'They stop flying until the clouds disappear.'
          ],
          correctIndex: 0,
          explanation: 'To "detect" means to sense or notice something that is not easily visible.'
        },
        {
          id: 'mc-b1-23',
          targetWord: 'landmark',
          question: 'Which of the following is an example of a natural "landmark" mentioned in the article?',
          options: [
            'A coastline or mountain ridge that helps a bird recognize where it is',
            'An invisible magnetic wave',
            'A bird’s wing feathers',
            'A strong gust of wind'
          ],
          correctIndex: 0,
          explanation: 'A "landmark" is a visible feature on the ground used for navigation.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-22',
          sentenceWithBlank: 'Before smartphones were invented, drivers had to _____ on paper road maps.',
          targetWord: 'rely',
          hint: 'Depend on (used with "on")',
          options: ['rely', 'detect', 'decode', 'uncover']
        },
        {
          id: 'cl-b1-23',
          sentenceWithBlank: 'Even after a two-hour flight delay, the passengers arrived safely at their _____.',
          targetWord: 'destination',
          hint: 'The place someone is traveling to',
          options: ['destination', 'horizon', 'landmark', 'breakthrough']
        }
      ],
      matching: {
        id: 'mat-b1-11',
        instructions: 'Match each B1 navigation word with its meaning:',
        pairs: [
          { id: 'p-b1-41', term: 'destination', match: 'the place where a traveler is going' },
          { id: 'p-b1-42', term: 'rely', match: 'depend on something to work well' },
          { id: 'p-b1-43', term: 'horizon', match: 'the line where the sky meets the earth or sea' },
          { id: 'p-b1-44', term: 'landmark', match: 'a recognizable feature that shows where you are' }
        ]
      }
    }
  },
  {
    id: 'b1-power-of-habit-loops',
    title: 'The Habit Loop: How Small Daily Cues Shape Our Automatic Behavior',
    subtitle: 'Almost forty percent of what we do every day is not a conscious decision—it is an automatic habit saved by the brain to conserve energy.',
    level: 'B1',
    category: 'Psychology & Mind',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Everyday psychology, behavioral routines, and practical B1 self-improvement vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Think about how you tied your shoes, brushed your teeth, or made your morning cup of coffee today. You probably completed those actions without thinking about each step. Psychologists estimate that roughly forty percent of our daily actions are not deliberate choices at all—they are automatic habits.',
      'Why does the brain turn repeated actions into habits? The answer is energy efficiency. Making conscious decisions requires a lot of mental effort. By storing routine behaviors in a deeper part of the brain called the basal ganglia, your mind frees up attention so you can focus on new problems while your hands make breakfast on autopilot.',
      'Every habit follows a simple three-part loop: a trigger, a routine, and a reward. For example, feeling bored in the afternoon (the trigger) might cause you to open social media on your phone (the routine), which gives your brain a quick burst of entertainment (the reward). Over time, simply seeing the phone on your desk automatically triggers the urge to scroll.',
      'Because the brain never truly deletes old habit pathways, breaking an unwanted habit is much easier when you keep the same trigger and reward but replace the middle routine. If afternoon stress makes you reach for sugary snacks, taking a five-minute walk outside with a friend can satisfy the need for a break in a healthier way.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-56',
        word: 'conscious',
        phonetic: '/ˈkɒn.ʃəs/',
        partOfSpeech: 'adjective',
        definition: 'Ongli, o‘ylab qilingan — avtomatik ravishda emas, balki to‘liq anglab va o‘ylab bajarilgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Making conscious decisions all day requires a lot of mental energy.',
        collocations: ['conscious decision', 'conscious effort', 'fully conscious'],
        synonyms: ['deliberate', 'intentional', 'aware'],
        antonyms: ['automatic', 'unconscious']
      },
      {
        id: 'v-b1-57',
        word: 'routine',
        phonetic: '/ruːˈtiːn/',
        partOfSpeech: 'noun',
        definition: 'Kundalik tartib, odatiy ishlar — har kuni belgilangan tartibda bajariladigan ishlar ketma-ketligi.',
        cefrLevel: 'B1',
        exampleSentence: 'Every habit consists of a trigger, a routine, and a reward.',
        collocations: ['daily routine', 'morning routine', 'follow a routine'],
        synonyms: ['habit', 'pattern', 'schedule']
      },
      {
        id: 'v-b1-58',
        word: 'trigger',
        phonetic: '/ˈtrɪɡ.ər/',
        partOfSpeech: 'verb',
        definition: 'Qo‘zg‘atmoq, turtki bo‘lmoq — biror javob reaksiyasi, his-tuyg‘u yoki odatning boshlanishiga sabab bo‘lmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Simply seeing your phone on the desk can trigger the urge to check messages.',
        collocations: ['trigger a habit', 'trigger a memory', 'trigger a reaction'],
        synonyms: ['set off', 'spark', 'prompt']
      },
      {
        id: 'v-b1-59',
        word: 'urge',
        phonetic: '/ɜːdʒ/',
        partOfSpeech: 'noun',
        definition: 'Kuchli xohish, ichki undov — biror narsani qilishga bo‘lgan to‘satdan paydo bo‘luvchi kuchli istak.',
        cefrLevel: 'B1',
        exampleSentence: 'When he felt the urge to check his phone during study hours, he drank a glass of water instead.',
        collocations: ['strong urge', 'resist the urge', 'sudden urge'],
        synonyms: ['impulse', 'desire', 'craving']
      },
      {
        id: 'v-b1-60',
        word: 'satisfy',
        phonetic: '/ˈsæt.ɪs.faɪ/',
        partOfSpeech: 'verb',
        definition: 'Qondirmoq, mamnun qilmoq — ehtiyoj, istak yoki talabni to‘liq bajarib ko‘ngilni to‘ldirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'A short walk outside can satisfy your brain’s need for an afternoon break.',
        collocations: ['satisfy a need', 'satisfy curiosity', 'satisfy hunger'],
        synonyms: ['fulfill', 'meet', 'quench']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-24',
          targetWord: 'conscious',
          question: 'What is the difference between a "conscious" decision and a habit?',
          options: [
            'A conscious decision requires active awareness and thought, while a habit happens automatically.',
            'A conscious decision only happens while you are sleeping.',
            'A habit takes ten times more mental energy than a conscious decision.',
            'There is no difference between them.'
          ],
          correctIndex: 0,
          explanation: '"Conscious" actions are done with deliberate thought and attention.'
        },
        {
          id: 'mc-b1-25',
          targetWord: 'urge',
          question: 'What does it mean to "resist the urge" to check your phone?',
          options: [
            'To stop yourself from acting on a sudden impulse or desire to look at the screen',
            'To buy a brand-new phone charger',
            'To turn up the ringtone volume',
            'To send ten text messages at once'
          ],
          correctIndex: 0,
          explanation: 'An "urge" is a strong sudden impulse or desire to do something.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-24',
          sentenceWithBlank: 'The smell of fresh popcorn at the cinema always _____ a desire to buy a snack.',
          targetWord: 'triggers',
          hint: 'Sets off or starts a reaction (third-person singular)',
          options: ['triggers', 'satisfies', 'decodes', 'uncovers']
        },
        {
          id: 'cl-b1-25',
          sentenceWithBlank: 'Going for a twenty-minute jog is part of her morning _____.',
          targetWord: 'routine',
          hint: 'Regular daily sequence of actions',
          options: ['routine', 'horizon', 'destination', 'symbol']
        }
      ],
      matching: {
        id: 'mat-b1-12',
        instructions: 'Match each B1 psychology word with its definition:',
        pairs: [
          { id: 'p-b1-45', term: 'conscious', match: 'done with deliberate thought and awareness' },
          { id: 'p-b1-46', term: 'routine', match: 'a regular way of doing everyday tasks' },
          { id: 'p-b1-47', term: 'urge', match: 'a strong sudden impulse or desire' },
          { id: 'p-b1-48', term: 'satisfy', match: 'fulfill a need or desire completely' }
        ]
      }
    }
  },
  {
    id: 'b1-drone-medical-delivery',
    title: 'Flying Pharmacies: How Delivery Drones Reach Remote Mountain Clinics',
    subtitle: 'When heavy rains wash out dirt roads in rural regions, small electric aircraft can deliver life-saving vaccines and blood supplies in minutes.',
    level: 'B1',
    category: 'Technology & Innovation',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Modern aviation, healthcare logistics, and B1 technology and transport vocabulary.',
    themeColor: 'purple',
    gradientFrom: 'from-purple-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'In many mountainous countries, rural health clinics are separated from central hospitals by winding dirt roads and steep river valleys. During the rainy season, mudslides and floods frequently block these roads for days. Even in dry weather, driving a single box of vaccines or emergency blood supplies up into the hills can take four hours—and many medicines spoil if they get too warm along the way.',
      'In 2016, the East African nation of Rwanda partnered with aviation engineers to launch the world’s first national drone delivery network for medicine. Today, when a rural doctor needs a rare blood type or a rabies vaccine, they simply send a text message to a central distribution hub.',
      'Within minutes, technicians pack the medicine inside a padded box attached to a small parachute and load it into the belly of a battery-powered winged drone. Launched from a rail into the sky, the aircraft flies autonomously at over one hundred kilometers per hour, guided by GPS satellites high above the muddy roads.',
      'When the drone arrives over the village clinic, it slows down, drops the package gently by parachute into a designated landing yard, and flies straight back to base to recharge its battery. Trips that once took half a day by truck now take less than thirty minutes—saving thousands of lives every year.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-61',
        word: 'remote',
        phonetic: '/rɪˈməʊt/',
        partOfSpeech: 'adjective',
        definition: 'Olis, chekka, uzoq — katta shaharlar va asosiy yo‘llardan uzoqda joylashgan, borish qiyin bo‘lgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Electric drones deliver emergency medicine to remote mountain villages.',
        collocations: ['remote village', 'remote clinic', 'remote island'],
        synonyms: ['isolated', 'distant', 'out-of-the-way'],
        antonyms: ['central', 'nearby']
      },
      {
        id: 'v-b1-62',
        word: 'spoil',
        phonetic: '/spɔɪl/',
        partOfSpeech: 'verb',
        definition: 'Aynimoq, buzilmoq, yaroqsiz holga kelmoq — (ayniqsa oziq-ovqat yoki dori-darmon) issiqda o‘z sifatini yo‘qotmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Vaccines will spoil quickly if they are not kept inside a cold box.',
        collocations: ['spoil in the heat', 'quickly spoil', 'prevent food from spoiling'],
        synonyms: ['go bad', 'ruin', 'decay'],
        antonyms: ['preserve']
      },
      {
        id: 'v-b1-63',
        word: 'launch',
        phonetic: '/lɔːntʃ/',
        partOfSpeech: 'verb',
        definition: 'Uchirmoq, ishga tushirmoq — uchish apparati, raketa yoki yangi loyihani ilk bor harakatga keltirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Technicians launch the winged drone from a metal rail into the sky.',
        collocations: ['launch a drone', 'launch a network', 'launch into the sky'],
        synonyms: ['send off', 'start', 'introduce']
      },
      {
        id: 'v-b1-64',
        word: 'autonomously',
        phonetic: '/ɔːˈtɒn.ə.məs.li/',
        partOfSpeech: 'adverb',
        definition: 'Mustaqil ravishda, avtonom tarzda — inson boshqaruvisiz avtomatik tarzda harakatlanib.',
        cefrLevel: 'B1',
        exampleSentence: 'Guided by GPS, the delivery drone flies autonomously to the mountain clinic.',
        collocations: ['fly autonomously', 'operate autonomously', 'drive autonomously'],
        synonyms: ['independently', 'automatically'],
        antonyms: ['manually']
      },
      {
        id: 'v-b1-65',
        word: 'recharge',
        phonetic: '/ˌriːˈtʃɑːdʒ/',
        partOfSpeech: 'verb',
        definition: 'Qayta quvvatlamoq (zaryadlamoq) — batareyani elektr energiyasi bilan qaytadan to‘ldirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'After dropping off the package, the drone returns to base to recharge its battery.',
        collocations: ['recharge a battery', 'quickly recharge', 'recharge overnight'],
        synonyms: ['power up', 'refill'],
        antonyms: ['drain']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-26',
          targetWord: 'remote',
          question: 'Why are delivery drones especially helpful for "remote" clinics?',
          options: [
            'Because remote clinics are far from cities and hard to reach quickly by road',
            'Because remote clinics are located next door to big airports',
            'Because remote clinics do not have any patients',
            'Because trucks are not allowed to carry medicine'
          ],
          correctIndex: 0,
          explanation: '"Remote" describes places that are far away from major population centers and roads.'
        },
        {
          id: 'mc-b1-27',
          targetWord: 'spoil',
          question: 'What happens to vaccines if they "spoil" during a slow truck journey?',
          options: [
            'They get too warm and lose their medical effectiveness',
            'They become twice as strong',
            'They freeze into solid ice',
            'They multiply inside the box'
          ],
          correctIndex: 0,
          explanation: 'When food or medicine "spoils", it goes bad and can no longer be safely used.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-26',
          sentenceWithBlank: 'Remember to _____ your bicycle lights before riding home in the dark.',
          targetWord: 'recharge',
          hint: 'Fill a battery with electricity again',
          options: ['recharge', 'spoil', 'launch', 'rely']
        },
        {
          id: 'cl-b1-27',
          sentenceWithBlank: 'The hospital plans to _____ a new mobile health service for rural communities next month.',
          targetWord: 'launch',
          hint: 'Start an aircraft or an important new project',
          options: ['launch', 'spoil', 'detect', 'satisfy']
        }
      ],
      matching: {
        id: 'mat-b1-13',
        instructions: 'Match each B1 technology word with its definition:',
        pairs: [
          { id: 'p-b1-49', term: 'remote', match: 'far away from cities and difficult to reach' },
          { id: 'p-b1-50', term: 'spoil', match: 'go bad or lose effectiveness in the heat' },
          { id: 'p-b1-51', term: 'autonomously', match: 'automatically without a human pilot' },
          { id: 'p-b1-52', term: 'recharge', match: 'restore electric power to a battery' }
        ]
      }
    }
  },
  {
    id: 'b1-coral-reef-restoration',
    title: 'Underwater Gardens: How Marine Biologists Help Damaged Coral Reefs Recover',
    subtitle: 'Although coral reefs cover less than one percent of the ocean floor, they shelter a quarter of all marine species. Now scuba divers are planting new coral nurseries.',
    level: 'B1',
    category: 'Environment',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Marine conservation, ocean ecosystems, and B1 environmental restoration vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-teal-900',
    gradientTo: 'to-emerald-950',
    paragraphs: [
      'At first glance, a coral reef looks like a colorful pile of underwater rocks and plants. In reality, corals are colonies of thousands of tiny animals called polyps that build hard limestone skeletons around themselves. Over centuries, these skeletons grow together into massive reefs that protect coastlines from storm waves and provide shelter for twenty-five percent of all ocean fish.',
      'Corals get their brilliant colors—and most of their food—from microscopic algae living inside their tissues. However, when ocean temperatures rise even two degrees Celsius above normal for several weeks, stressed corals expel these algae and turn stark white. This dangerous condition is known as "coral bleaching." If the water stays warm for too long, the bleached coral starves.',
      'To help damaged reefs recover, marine biologists and local scuba divers have created underwater coral nurseries. Divers collect small, healthy fragments of coral that survived recent heatwaves—because those survivors are naturally more tolerant of warm water—and hang them on underwater "trees" made of plastic pipes.',
      'Suspended above the sandy sea floor where predators cannot reach them, the coral fragments grow rapidly. After six to twelve months, divers attach the young corals back onto damaged reefs using marine cement, bringing fish, sea turtles, and vibrant color back to the coastline.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-66',
        word: 'shelter',
        phonetic: '/ˈʃel.tər/',
        partOfSpeech: 'noun',
        definition: 'Boshpana, pana joy — insonlar yoki hayvonlarni xavf-xatar va yomon ob-havodan himoya qiluvchi joy.',
        cefrLevel: 'B1',
        exampleSentence: 'Coral reefs provide shelter for a quarter of all marine species.',
        collocations: ['provide shelter', 'find shelter', 'safe shelter'],
        synonyms: ['refuge', 'protection', 'sanctuary']
      },
      {
        id: 'v-b1-67',
        word: 'shallow',
        phonetic: '/ˈʃæl.əʊ/',
        partOfSpeech: 'adjective',
        definition: 'Sayoz, chuqur bo‘lmagan — suv yuzasidan tubigacha bo‘lgan masofasi qisqa bo‘lgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Most tropical coral reefs grow in warm, shallow coastal waters where sunlight can reach them.',
        collocations: ['shallow water', 'shallow sea', 'shallow lagoon'],
        synonyms: ['ankle-deep', 'surface-level'],
        antonyms: ['deep']
      },
      {
        id: 'v-b1-68',
        word: 'survive',
        phonetic: '/səˈvaɪv/',
        partOfSpeech: 'verb',
        definition: 'Omon qolmoq, tirik qolmoq — xavfli yoki og‘ir sharoitlarga qaramay yashashda davom etmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Divers collect fragments of coral that survived recent ocean heatwaves.',
        collocations: ['survive a heatwave', 'barely survive', 'manage to survive'],
        synonyms: ['endure', 'pull through', 'live on'],
        antonyms: ['perish', 'die']
      },
      {
        id: 'v-b1-69',
        word: 'fragment',
        phonetic: '/ˈfræɡ.mənt/',
        partOfSpeech: 'noun',
        definition: 'Bo‘lak, parcha, siniq — kattaroq narsadan ajralib yoki sinib tushgan kichik qism.',
        cefrLevel: 'B1',
        exampleSentence: 'Even a finger-sized fragment of healthy coral can grow into a new colony.',
        collocations: ['small fragment', 'coral fragment', 'broken fragment'],
        synonyms: ['piece', 'shard', 'chunk'],
        antonyms: ['whole']
      },
      {
        id: 'v-b1-70',
        word: 'attach',
        phonetic: '/əˈtætʃ/',
        partOfSpeech: 'verb',
        definition: 'Mahkamlamoq, biriktirmoq, ulamoq — bir narsani ikkinchisiga mustahkam qilib yopishtirmoq yoki bog‘lamoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Divers attach the young corals onto rocky reefs using special underwater cement.',
        collocations: ['attach to', 'firmly attach', 'attach a label'],
        synonyms: ['fasten', 'fix', 'connect'],
        antonyms: ['detach', 'remove']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-28',
          targetWord: 'survive',
          question: 'Why do marine biologists choose coral fragments that "survived" recent heatwaves?',
          options: [
            'Because those corals proved they can stay alive in warmer water',
            'Because bleached white coral grows faster than healthy coral',
            'Because those corals do not need sunlight',
            'Because fish do not swim near them'
          ],
          correctIndex: 0,
          explanation: 'To "survive" means to stay alive through a dangerous event such as a heatwave.'
        },
        {
          id: 'mc-b1-29',
          targetWord: 'fragment',
          question: 'What is a "coral fragment"?',
          options: [
            'A small piece broken or cut from a larger coral colony',
            'A species of brightly colored reef fish',
            'A scuba diver’s oxygen tank',
            'A type of underwater camera'
          ],
          correctIndex: 0,
          explanation: 'A "fragment" is a small piece separated from a larger object.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-28',
          sentenceWithBlank: 'Tangled mangrove roots provide safe _____ for baby fish hiding from sharks.',
          targetWord: 'shelter',
          hint: 'Protection or a safe place to hide',
          options: ['shelter', 'fragment', 'urge', 'horizon']
        },
        {
          id: 'cl-b1-29',
          sentenceWithBlank: 'Before sending the email, make sure you _____ the PDF worksheet.',
          targetWord: 'attach',
          hint: 'Fasten or connect something to another thing',
          options: ['attach', 'survive', 'spoil', 'recharge']
        }
      ],
      matching: {
        id: 'mat-b1-14',
        instructions: 'Match each B1 marine biology word with its meaning:',
        pairs: [
          { id: 'p-b1-53', term: 'shelter', match: 'a safe place that protects animals from danger' },
          { id: 'p-b1-54', term: 'survive', match: 'stay alive despite difficult conditions' },
          { id: 'p-b1-55', term: 'fragment', match: 'a small piece broken off from something larger' },
          { id: 'p-b1-56', term: 'attach', match: 'fasten or join one object firmly to another' }
        ]
      }
    }
  },
  {
    id: 'b1-viking-longships-history',
    title: 'Masters of the Northern Seas: Why Viking Longships Were Ahead of Their Time',
    subtitle: 'A thousand years ago, Scandinavian shipbuilders designed flexible wooden vessels that could cross stormy oceans and sail straight up shallow rivers.',
    level: 'B1',
    category: 'History & Civilizations',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Maritime history, engineering design, and B1 comparative and descriptive vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-800',
    gradientTo: 'to-amber-950',
    paragraphs: [
      'Between the eighth and eleventh centuries, Scandinavian sailors—known to history as Vikings—travelled farther than almost any other people in Europe. They crossed the freezing North Atlantic to settle in Iceland and Greenland, reached the coast of North America five hundred years before Columbus, and traded silver and furs down the great rivers of eastern Europe all the way to Constantinople.',
      'The secret behind these remarkable voyages was a masterpiece of wooden engineering: the Viking longship. Unlike heavy medieval cargo ships that needed deep harbors, a longship was long, narrow, and extraordinarily light. Its hull sat so high in the water that it could glide through rivers only one meter deep and be pulled straight onto a sandy beach without a dock.',
      'Shipbuilders achieved this strength and lightness by splitting oak logs along the natural grain of the wood and overlapping the planks with iron nails. Because the wooden hull was flexible rather than stiff, it bent slightly with giant ocean waves instead of cracking apart in a storm.',
      'Longships also had a symmetrical design, meaning the front and back of the boat were shaped identically. If a crew encountered pack ice or a narrow river bend, they did not need to turn the ship around—they simply reversed the oars and rowed in the opposite direction.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-71',
        word: 'voyage',
        phonetic: '/ˈvɔɪ.ɪdʒ/',
        partOfSpeech: 'noun',
        definition: 'Dengiz sayohati, uzoq safar — kema orqali dengizda (yoki fazoda) amalga oshiriladigan uzoq safar.',
        cefrLevel: 'B1',
        exampleSentence: 'Viking sailors made daring voyages across the stormy North Atlantic.',
        collocations: ['ocean voyage', 'long voyage', 'maiden voyage'],
        synonyms: ['journey', 'expedition', 'crossing']
      },
      {
        id: 'v-b1-72',
        word: 'narrow',
        phonetic: '/ˈnær.əʊ/',
        partOfSpeech: 'adjective',
        definition: 'Tor, ensiz — ikki cheti orasidagi masofa qisqa bo‘lgan, keng bo‘lmagan.',
        cefrLevel: 'B1',
        exampleSentence: 'The long, narrow shape of the ship allowed it to cut quickly through the waves.',
        collocations: ['narrow river', 'narrow street', 'long and narrow'],
        synonyms: ['slender', 'thin', 'tight'],
        antonyms: ['wide', 'broad']
      },
      {
        id: 'v-b1-73',
        word: 'flexible',
        phonetic: '/ˈflek.sə.bəl/',
        partOfSpeech: 'adjective',
        definition: 'Egiluvchan, moslashuvchan — sinmasdan oson egila oladigan yoki sharoitga moslashadigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Because the oak hull was flexible, it rode over huge ocean swells without snapping.',
        collocations: ['flexible wood', 'flexible schedule', 'highly flexible'],
        synonyms: ['bendable', 'supple', 'adaptable'],
        antonyms: ['stiff', 'rigid']
      },
      {
        id: 'v-b1-74',
        word: 'encounter',
        phonetic: '/ɪnˈkaʊn.tər/',
        partOfSpeech: 'verb',
        definition: 'Duch kelmoq, to‘qnash kelmoq — kutilmagan narsa, ayniqsa qiyinchilik yoki xavf bilan yuzlashmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Sailors often encountered thick fog and floating ice near Greenland.',
        collocations: ['encounter difficulties', 'encounter a storm', 'unexpectedly encounter'],
        synonyms: ['come across', 'face', 'meet']
      },
      {
        id: 'v-b1-75',
        word: 'reverse',
        phonetic: '/rɪˈvɜːs/',
        partOfSpeech: 'verb',
        definition: 'Teskari tomonga o‘zgartirmoq, ortga burmoq — yo‘nalish yoki tartibni qarama-qarshi tomonga aylantirmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Rowers could reverse direction in seconds without turning the boat around.',
        collocations: ['reverse direction', 'reverse the oars', 'reverse a decision'],
        synonyms: ['turn back', 'invert', 'switch']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-30',
          targetWord: 'flexible',
          question: 'Why was it an advantage that the wooden hull of a Viking longship was "flexible"?',
          options: [
            'It could bend slightly with powerful ocean waves instead of cracking apart',
            'It could fold up and fit inside a sailor’s pocket',
            'It sank to the bottom of the sea during storms',
            'It never needed oars or a sail'
          ],
          correctIndex: 0,
          explanation: '"Flexible" means able to bend without breaking.'
        },
        {
          id: 'mc-b1-31',
          targetWord: 'voyage',
          question: 'What is a "voyage"?',
          options: [
            'A long journey by ship across the sea',
            'A type of iron nail used in shipbuilding',
            'A short walk to the neighborhood market',
            'An oak forest in Scandinavia'
          ],
          correctIndex: 0,
          explanation: 'A "voyage" is a long trip, especially by sea.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-30',
          sentenceWithBlank: 'The mountain path became so _____ that hikers had to walk in a single line.',
          targetWord: 'narrow',
          hint: 'Not wide from side to side',
          options: ['narrow', 'flexible', 'remote', 'conscious']
        },
        {
          id: 'cl-b1-31',
          sentenceWithBlank: 'If you _____ any unfamiliar words while reading, click on them to see the definition.',
          targetWord: 'encounter',
          hint: 'Come across or meet unexpectedly',
          options: ['encounter', 'reverse', 'launch', 'spoil']
        }
      ],
      matching: {
        id: 'mat-b1-15',
        instructions: 'Match each B1 maritime history word with its definition:',
        pairs: [
          { id: 'p-b1-57', term: 'voyage', match: 'a long journey across the sea' },
          { id: 'p-b1-58', term: 'narrow', match: 'having only a small distance from side to side' },
          { id: 'p-b1-59', term: 'flexible', match: 'able to bend easily without breaking' },
          { id: 'p-b1-60', term: 'reverse', match: 'move or turn in the opposite direction' }
        ]
      }
    }
  },
  {
    id: 'b1-bioluminescence-ocean',
    title: 'Living Light: Why Deep-Sea Creatures Glow in the Dark',
    subtitle: 'From fireflies in summer gardens to lanternfish in the deep ocean, thousands of species produce their own chemical light without generating heat.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Marine biology, natural phenomena, and B1 descriptive science vocabulary.',
    themeColor: 'cyan',
    gradientFrom: 'from-blue-950',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'Walk through a warm meadow on a summer evening and you may see fireflies flashing soft yellow-green lights among the trees. While glowing insects are relatively rare on land, in the deep ocean the ability to make light—known as "bioluminescence"—is the rule rather than the exception. Below two hundred meters, where sunlight disappears completely, more than seventy-five percent of sea creatures produce their own light.',
      'Unlike an old-fashioned electric bulb, which wastes most of its energy as heat, living light is "cold light." Inside a glowing jellyfish or squid, two natural chemicals mix together with oxygen to produce a bright blue-green glow without warming the animal’s body at all.',
      'Why do so many ocean animals glow in the dark? Some predators, such as the deep-sea anglerfish, dangle a glowing rod in front of their mouths to attract curious fish within biting distance. Other creatures use light for self-defense: when startled by a hunter, certain shrimp squirt a cloud of glowing blue liquid—like dazzling ink—that blinds the attacker while the shrimp escapes into the darkness.',
      'Even more cleverly, many small fish have light organs along their bellies. When a predator looks up from deeper water, the glowing belly matches the faint moonlight filtering down from above, making the fish’s shadow invisible.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-76',
        word: 'glow',
        phonetic: '/ɡləʊ/',
        partOfSpeech: 'verb',
        definition: 'Nur taratmoq, porlamoq — qorong‘ida sokin va mayin yorug‘lik sochib turmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Deep-sea jellyfish glow with a bright blue-green light.',
        collocations: ['glow in the dark', 'glow softly', 'faint glow'],
        synonyms: ['shine', 'gleam', 'radiate']
      },
      {
        id: 'v-b1-77',
        word: 'attract',
        phonetic: '/əˈtrækt/',
        partOfSpeech: 'verb',
        definition: 'Jalb qilmoq, o‘ziga tortmoq — qiziqish yoki e’tibor uyg‘otib yaqinroqqa chorlamoq.',
        cefrLevel: 'B1',
        exampleSentence: 'The anglerfish uses a glowing lure to attract smaller fish toward its jaws.',
        collocations: ['attract prey', 'attract attention', 'attract insects'],
        synonyms: ['draw in', 'lure', 'entice'],
        antonyms: ['repel', 'scare away']
      },
      {
        id: 'v-b1-78',
        word: 'defense',
        phonetic: '/dɪˈfens/',
        partOfSpeech: 'noun',
        definition: 'Himoya, mudofaa — hujum yoki xavfdan o‘zini asrash uchun qilinadigan harakat yoki vosita.',
        cefrLevel: 'B1',
        exampleSentence: 'Some deep-sea shrimp use a flash of bright light as a form of self-defense.',
        collocations: ['self-defense', 'natural defense', 'line of defense'],
        synonyms: ['protection', 'shield', 'security'],
        antonyms: ['attack', 'offense']
      },
      {
        id: 'v-b1-79',
        word: 'escape',
        phonetic: '/ɪˈskeɪp/',
        partOfSpeech: 'verb',
        definition: 'Qochib qutulmoq — xavf-xatardan yoki yirtqichdan eson-omon uzoqlashmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'A sudden flash of light confuses the predator while the squid escapes.',
        collocations: ['escape from danger', 'narrowly escape', 'manage to escape'],
        synonyms: ['flee', 'get away', 'break free'],
        antonyms: ['capture', 'trap']
      },
      {
        id: 'v-b1-80',
        word: 'invisible',
        phonetic: '/ɪnˈvɪz.ə.bəl/',
        partOfSpeech: 'adjective',
        definition: 'Ko‘rinmas — ko‘z bilan ko‘rib yoki ilg‘ab bo‘lmaydigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Matching the faint light from above makes the fish’s shadow nearly invisible.',
        collocations: ['nearly invisible', 'invisible to the eye', 'become invisible'],
        synonyms: ['unseen', 'camouflaged', 'hidden'],
        antonyms: ['visible', 'obvious']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-32',
          targetWord: 'attract',
          question: 'How does the deep-sea anglerfish use its glowing rod?',
          options: [
            'To attract curious smaller fish close enough to catch them',
            'To warm up the freezing ocean water around its fins',
            'To read underwater maps',
            'To help coral reefs grow'
          ],
          correctIndex: 0,
          explanation: 'To "attract" means to draw something closer by catching its interest.'
        },
        {
          id: 'mc-b1-33',
          targetWord: 'invisible',
          question: 'Why do some fish have glowing organs along their bellies?',
          options: [
            'To match the light from above so their dark shadow becomes invisible to predators below',
            'To make themselves heavier so they sink faster',
            'To scare away whales with loud noises',
            'To boil the water around them'
          ],
          correctIndex: 0,
          explanation: '"Invisible" means impossible to see.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-32',
          sentenceWithBlank: 'A porcupine’s sharp quills are an effective _____ against hungry foxes.',
          targetWord: 'defense',
          hint: 'Protection against attack',
          options: ['defense', 'voyage', 'fragment', 'routine']
        },
        {
          id: 'cl-b1-33',
          sentenceWithBlank: 'After absorbing sunlight all afternoon, the stickers on the bedroom ceiling _____ in the dark.',
          targetWord: 'glow',
          hint: 'Shine softly in the dark',
          options: ['glow', 'attract', 'reverse', 'spoil']
        }
      ],
      matching: {
        id: 'mat-b1-16',
        instructions: 'Match each B1 nature word with its meaning:',
        pairs: [
          { id: 'p-b1-61', term: 'glow', match: 'shine with a soft, steady light in the dark' },
          { id: 'p-b1-62', term: 'attract', match: 'draw something closer by catching its attention' },
          { id: 'p-b1-63', term: 'defense', match: 'protection against predators or danger' },
          { id: 'p-b1-64', term: 'invisible', match: 'impossible to see with the eyes' }
        ]
      }
    }
  },
  {
    id: 'b1-curiosity-memory-psychology',
    title: 'The Curiosity Effect: Why Asking Questions Helps You Remember Almost Anything',
    subtitle: 'Brain scans show that when you are genuinely curious about a question, your brain primes itself to remember not only the answer—but random facts you see along the way.',
    level: 'B1',
    category: 'Psychology & Mind',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Learning strategies, memory psychology, and B1 academic study vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-violet-900',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'Every student knows the feeling: you can read a textbook chapter about a boring topic three times and forget the main dates by the next morning, yet you effortlessly remember every detail of a mystery novel or your favorite sport. To understand why, neuroscientists at the University of California, Davis asked volunteers to rate how curious they felt about hundreds of trivia questions before scanning their brains.',
      'While inside the brain scanner, participants saw a trivia question, waited fourteen seconds for the answer, and were briefly shown an unrelated photograph of a stranger’s face during the wait. Later that day, researchers tested the volunteers on both the trivia answers and the strangers’ faces.',
      'As expected, people remembered the answers to questions that had sparked their curiosity far better than questions they found dull. Surprisingly, however, they also remembered the random faces shown while they were waiting for a curious answer! Once curiosity was switched on, the brain acted like a whirlpool that sucked in all surrounding information.',
      'Brain scans revealed why: feeling curious releases dopamine—a chemical messenger linked to reward and motivation—which strengthens connections in the hippocampus, the brain’s memory center. Before studying a difficult chapter, turning the headings into puzzle questions you genuinely want to solve can make learning twice as effective.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-81',
        word: 'curious',
        phonetic: '/ˈkjʊə.ri.əs/',
        partOfSpeech: 'adjective',
        definition: 'Qiziquvchan, bilishga intiluvchan — biror narsaning javobini bilishga yoki o‘rganishga juda qiziqadigan.',
        cefrLevel: 'B1',
        exampleSentence: 'When you feel genuinely curious about a question, your brain remembers the answer much longer.',
        collocations: ['feel curious', 'curious about', 'naturally curious'],
        synonyms: ['inquisitive', 'interested', 'eager to learn'],
        antonyms: ['indifferent', 'uninterested']
      },
      {
        id: 'v-b1-82',
        word: 'effortlessly',
        phonetic: '/ˈef.ət.ləs.li/',
        partOfSpeech: 'adverb',
        definition: 'Qiyinchiliksiz, bemalol, osonlik bilan — deyarli kuch yoki mashaqqat sarflamasdan.',
        cefrLevel: 'B1',
        exampleSentence: 'Fans often remember sports statistics effortlessly while struggling with history dates.',
        collocations: ['remember effortlessly', 'glide effortlessly', 'speak effortlessly'],
        synonyms: ['easily', 'smoothly', 'naturally']
      },
      {
        id: 'v-b1-83',
        word: 'dull',
        phonetic: '/dʌl/',
        partOfSpeech: 'adjective',
        definition: 'Zerikarli, qiziq bo‘lmagan — hayajon yoki qiziqish uyg‘otmaydigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Students quickly forgot facts from chapters they found dull.',
        collocations: ['dull lecture', 'dull topic', 'never a dull moment'],
        synonyms: ['boring', 'tedious', 'uninteresting'],
        antonyms: ['fascinating', 'exciting']
      },
      {
        id: 'v-b1-84',
        word: 'motivation',
        phonetic: '/ˌməʊ.tɪˈveɪ.ʃən/',
        partOfSpeech: 'noun',
        definition: 'Motivatsiya, ishtiyoq, ichki turtki — maqsadga erishish yoki astoydil ishlash uchun bo‘lgan kuchli xohish.',
        cefrLevel: 'B1',
        exampleSentence: 'Setting clear daily goals increases a learner’s motivation.',
        collocations: ['strong motivation', 'lose motivation', 'boost motivation'],
        synonyms: ['drive', 'enthusiasm', 'ambition']
      },
      {
        id: 'v-b1-85',
        word: 'effective',
        phonetic: '/ɪˈfek.tɪv/',
        partOfSpeech: 'adjective',
        definition: 'Samarali, foydali — kutilgan yoki ko‘zlangan ijobiy natijani beradigan.',
        cefrLevel: 'B1',
        exampleSentence: 'Asking yourself questions before reading is an effective study method.',
        collocations: ['highly effective', 'effective method', 'effective solution'],
        synonyms: ['successful', 'productive', 'useful'],
        antonyms: ['ineffective', 'useless']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-34',
          targetWord: 'curious',
          question: 'What surprising discovery did the UC Davis researchers make about "curious" participants?',
          options: [
            'They remembered not only the trivia answers, but also unrelated faces shown while they were curious',
            'They forgot their own phone numbers after leaving the scanner',
            'They remembered dull questions better than interesting ones',
            'They fell asleep inside the brain scanner'
          ],
          correctIndex: 0,
          explanation: 'Being "curious" puts the brain’s memory center into a state that absorbs surrounding details too.'
        },
        {
          id: 'mc-b1-35',
          targetWord: 'dull',
          question: 'In the sentence "questions they found dull", what does "dull" mean?',
          options: [
            'Boring and uninteresting',
            'Extremely difficult to pronounce',
            'Written in capital letters',
            'Exciting and surprising'
          ],
          correctIndex: 0,
          explanation: '"Dull" means boring or lacking interest.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-34',
          sentenceWithBlank: 'Studying for twenty minutes every day is much more _____ than cramming the night before an exam.',
          targetWord: 'effective',
          hint: 'Successful in producing good results',
          options: ['effective', 'dull', 'invisible', 'narrow']
        },
        {
          id: 'cl-b1-35',
          sentenceWithBlank: 'Practicing with a friend helps keep your _____ high when learning a new sport.',
          targetWord: 'motivation',
          hint: 'Enthusiasm and drive to keep working toward a goal',
          options: ['motivation', 'defense', 'voyage', 'shelter']
        }
      ],
      matching: {
        id: 'mat-b1-17',
        instructions: 'Match each B1 learning word with its definition:',
        pairs: [
          { id: 'p-b1-65', term: 'curious', match: 'eager to learn or find out the answer' },
          { id: 'p-b1-66', term: 'effortlessly', match: 'easily without needing hard struggle' },
          { id: 'p-b1-67', term: 'dull', match: 'boring and not interesting' },
          { id: 'p-b1-68', term: 'effective', match: 'successful in achieving the desired result' }
        ]
      }
    }
  },
  {
    id: 'b1-sodium-ion-batteries',
    title: 'Batteries Made from Table Salt: A Cheaper Way to Store Clean Energy',
    subtitle: 'Lithium powers our phones and laptops, but it is expensive and rare. Engineers are now building rechargeable batteries using ordinary sodium from sea salt.',
    level: 'B1',
    category: 'Technology & Innovation',
    readTime: '3 min read',
    wordCount: 320,
    cefrSummary: 'Clean energy technology, chemical resources, and B1 comparison vocabulary.',
    themeColor: 'purple',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-purple-950',
    paragraphs: [
      'Open almost any smartphone, laptop, or electric car today and you will find a rechargeable lithium-ion battery inside. Lithium is the lightest metal on the periodic table, which makes it ideal for packing a lot of electrical energy into a small, lightweight space. However, lithium is only mined in a few countries, and global demand has pushed prices up.',
      'To build a cheaper and greener alternative, battery scientists have looked one row down on the periodic table to lithium’s chemical cousin: sodium. Unlike lithium, sodium is one of the most common elements on Earth—it is the main ingredient in ordinary table salt and ocean water, meaning it can be found almost everywhere for pennies.',
      'Because sodium atoms are slightly larger and heavier than lithium atoms, a sodium-ion battery holds about twenty percent less energy for the same weight. That makes sodium less suitable for long-range airplanes or ultra-thin smartphones, where every gram matters.',
      'For city commuter cars, electric scooters, and giant battery stations that store solar power for neighborhoods, however, weight is far less important than cost and safety. Even better, sodium batteries work reliably in freezing winter temperatures and do not overheat easily—offering a safe, affordable partner to lithium.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-86',
        word: 'alternative',
        phonetic: '/ɒlˈtɜː.nə.tɪv/',
        partOfSpeech: 'noun',
        definition: 'Muqobil variant, o‘rinbosar — boshqa bir narsaning o‘rniga tanlash yoki ishlatish mumkin bo‘lgan vosita.',
        cefrLevel: 'B1',
        exampleSentence: 'Sodium batteries offer a cheaper alternative to lithium for storing solar power.',
        collocations: ['cheaper alternative', 'green alternative', 'viable alternative'],
        synonyms: ['option', 'substitute', 'replacement']
      },
      {
        id: 'v-b1-87',
        word: 'ingredient',
        phonetic: '/ɪnˈɡriː.di.ənt/',
        partOfSpeech: 'noun',
        definition: 'Tarkibiy qism, masalliq — biror narsani hosil qilish uchun qo‘shiladigan modda yoki qism.',
        cefrLevel: 'B1',
        exampleSentence: 'Sodium is the main ingredient in ordinary table salt.',
        collocations: ['main ingredient', 'key ingredient', 'natural ingredient'],
        synonyms: ['component', 'element', 'part']
      },
      {
        id: 'v-b1-88',
        word: 'suitable',
        phonetic: '/ˈsuː.tə.bəl/',
        partOfSpeech: 'adjective',
        definition: 'Mos, munosib, to‘g‘ri keladigan — muayyan maqsad yoki vaziyat uchun qulay va ma’qul bo‘lgan.',
        cefrLevel: 'B1',
        exampleSentence: 'Sodium batteries are very suitable for city buses and solar power stations.',
        collocations: ['suitable for', 'more suitable', 'perfectly suitable'],
        synonyms: ['appropriate', 'fitting', 'well-suited'],
        antonyms: ['unsuitable', 'inappropriate']
      },
      {
        id: 'v-b1-89',
        word: 'overheat',
        phonetic: '/ˌəʊ.vəˈhiːt/',
        partOfSpeech: 'verb',
        definition: 'Haddan tashqari qizib ketmoq — xavfli darajada qizimoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Leaving a laptop in direct summer sunlight can cause its battery to overheat.',
        collocations: ['begin to overheat', 'prevent from overheating', 'easily overheat'],
        synonyms: ['get too hot'],
        antonyms: ['cool down']
      },
      {
        id: 'v-b1-90',
        word: 'affordable',
        phonetic: '/əˈfɔː.də.bəl/',
        partOfSpeech: 'adjective',
        definition: 'Hamyonbop, arzon — ko‘pchilik sotib olishga qurbi yetadigan darajada maqbul narxli.',
        cefrLevel: 'B1',
        exampleSentence: 'Using sea salt helps manufacturers build more affordable electric scooters.',
        collocations: ['affordable price', 'affordable energy', 'keep costs affordable'],
        synonyms: ['inexpensive', 'budget-friendly', 'reasonable'],
        antonyms: ['expensive', 'costly']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-36',
          targetWord: 'suitable',
          question: 'Why are sodium batteries especially "suitable" for solar power stations on the ground?',
          options: [
            'Because stationary power stations do not need to be carried around, so low cost matters more than light weight',
            'Because solar stations fly high in the sky',
            'Because sodium only works inside smartphones',
            'Because lithium cannot store electricity from solar panels'
          ],
          correctIndex: 0,
          explanation: '"Suitable" means right or appropriate for a specific purpose.'
        },
        {
          id: 'mc-b1-37',
          targetWord: 'alternative',
          question: 'What does it mean that sodium is an "alternative" to lithium?',
          options: [
            'It is another material that engineers can use instead of lithium',
            'It is another name for the exact same metal',
            'It is ten times rarer than gold',
            'It can only be mined on the moon'
          ],
          correctIndex: 0,
          explanation: 'An "alternative" is a different choice or substitute.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-36',
          sentenceWithBlank: 'Cycling to work is a healthy _____ to sitting in morning traffic.',
          targetWord: 'alternative',
          hint: 'Another option you can choose instead',
          options: ['alternative', 'ingredient', 'motivation', 'defense']
        },
        {
          id: 'cl-b1-37',
          sentenceWithBlank: 'Cooling fans inside a desktop computer prevent the processor from _____.',
          targetWord: 'overheating',
          hint: 'Becoming dangerously hot (-ing form)',
          options: ['overheating', 'glowing', 'escaping', 'spoiling']
        }
      ],
      matching: {
        id: 'mat-b1-18',
        instructions: 'Match each B1 technology word with its definition:',
        pairs: [
          { id: 'p-b1-69', term: 'alternative', match: 'an option you can use instead of something else' },
          { id: 'p-b1-70', term: 'ingredient', match: 'one of the substances combined to make something' },
          { id: 'p-b1-71', term: 'suitable', match: 'right or appropriate for a particular purpose' },
          { id: 'p-b1-72', term: 'affordable', match: 'reasonably priced so most people can buy it' }
        ]
      }
    }
  },
  {
    id: 'b1-music-brain-neuroscience',
    title: 'Your Brain on Music: Why a Favorite Song Can Instantly Change Your Mood',
    subtitle: 'Listening to music lights up more areas of the human brain at once than almost any other human activity—from movement centers to deep memory networks.',
    level: 'B1',
    category: 'Neuroscience & Politics',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Accessible neuroscience of music, emotional responses, and B1 brain and health vocabulary.',
    themeColor: 'rose',
    gradientFrom: 'from-rose-900',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'Have you ever heard an old song on the radio and immediately remembered the exact summer afternoon when you first listened to it years ago? Or noticed your foot tapping automatically to a drumbeat before you even paid attention to the melody? When neuroscientists scan people’s brains while they listen to music, the whole brain lights up like a fireworks display.',
      'Unlike spoken language, which is processed mainly in specific language areas, music activates the auditory cortex (which hears sound), the motor cortex (which coordinates rhythm and movement), the limbic system (which controls emotion), and the hippocampus (which stores personal memories) all at the same time.',
      'Because musical rhythm is so closely linked to the brain’s movement centers, hospitals now use music therapy to help patients recover after brain injuries. People with Parkinson’s disease or stroke damage who struggle to walk smoothly on a quiet floor can often take steady, balanced steps when a clear musical beat plays in the room.',
      'Similarly, songs stored in long-term musical memory often remain safe even when patients suffer from memory loss in old age. Playing a familiar childhood melody can calm anxiety, spark conversation, and reconnect patients with cherished memories.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-91',
        word: 'melody',
        phonetic: '/ˈmel.ə.di/',
        partOfSpeech: 'noun',
        definition: 'Ohang, kuy — qo‘shiq yoki musiqa asarining xirgoyi qilib aytish mumkin bo‘lgan asosiy ohangi.',
        cefrLevel: 'B1',
        exampleSentence: 'Playing a familiar childhood melody can bring back vivid memories.',
        collocations: ['familiar melody', 'catchy melody', 'simple melody'],
        synonyms: ['tune', 'song', 'air']
      },
      {
        id: 'v-b1-92',
        word: 'coordinate',
        phonetic: '/kəʊˈɔː.dɪ.neɪt/',
        partOfSpeech: 'verb',
        definition: 'Muvofiqlashtirmoq, uyg‘unlashtirmoq — tana a’zolari yoki guruh qismlarini birgalikda ravon ishlashini ta’minlamoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Playing the piano teaches the brain to coordinate both hands at the same time.',
        collocations: ['coordinate movement', 'coordinate hands', 'closely coordinate'],
        synonyms: ['synchronize', 'organize', 'harmonize']
      },
      {
        id: 'v-b1-93',
        word: 'recover',
        phonetic: '/rɪˈkʌv.ər/',
        partOfSpeech: 'verb',
        definition: 'Sog‘aymoq, tiklanmoq — kasallik yoki jarohatdan keyin yana avvalgi sog‘lom holatga qaytmoq.',
        cefrLevel: 'B1',
        exampleSentence: 'Hospitals use rhythmic music therapy to help patients recover after a stroke.',
        collocations: ['recover from an injury', 'fully recover', 'help patients recover'],
        synonyms: ['heal', 'get well', 'recuperate']
      },
      {
        id: 'v-b1-94',
        word: 'steady',
        phonetic: '/ˈsted.i/',
        partOfSpeech: 'adjective',
        definition: 'Bir maromdagi, barqaror, tekis — qaltiramaydigan yoki to‘satdan o‘zgarib ketmaydigan.',
        cefrLevel: 'B1',
        exampleSentence: 'A clear drumbeat helps patients walk with steady, balanced steps.',
        collocations: ['steady beat', 'steady steps', 'steady progress'],
        synonyms: ['regular', 'even', 'stable'],
        antonyms: ['unsteady', 'shaky']
      },
      {
        id: 'v-b1-95',
        word: 'anxiety',
        phonetic: '/æŋˈzaɪ.ə.ti/',
        partOfSpeech: 'noun',
        definition: 'Xavotir, bezovtalik, tashvish — biror narsa haqida asabiylashish yoki ichki noqulaylik hissi.',
        cefrLevel: 'B1',
        exampleSentence: 'Listening to calm acoustic music before surgery can reduce a patient’s anxiety.',
        collocations: ['reduce anxiety', 'calm anxiety', 'feel anxiety'],
        synonyms: ['nervousness', 'worry', 'stress'],
        antonyms: ['calmness', 'peace']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-38',
          targetWord: 'steady',
          question: 'How does playing a musical beat help patients who have trouble walking?',
          options: [
            'The rhythm helps their motor cortex take steady, even steps',
            'The music makes the hospital floor softer',
            'The melody teaches them how to sing in Italian',
            'The sound makes them run as fast as athletes'
          ],
          correctIndex: 0,
          explanation: '"Steady" means regular, balanced, and not shaky.'
        },
        {
          id: 'mc-b1-39',
          targetWord: 'anxiety',
          question: 'What does it mean that familiar music can "calm anxiety"?',
          options: [
            'It helps reduce feelings of nervousness, worry, and stress',
            'It makes people feel more impatient',
            'It increases the volume of the radio',
            'It erases childhood memories'
          ],
          correctIndex: 0,
          explanation: '"Anxiety" is a feeling of nervousness or worry.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-38',
          sentenceWithBlank: 'Doctors told the runner to rest for two weeks so his knee could fully _____.',
          targetWord: 'recover',
          hint: 'Get better after an injury',
          options: ['recover', 'coordinate', 'glow', 'overheat']
        },
        {
          id: 'cl-b1-39',
          sentenceWithBlank: 'Even though I forgot the words to the song, I could still hum the _____.',
          targetWord: 'melody',
          hint: 'The main tune of a song',
          options: ['melody', 'anxiety', 'ingredient', 'alternative']
        }
      ],
      matching: {
        id: 'mat-b1-19',
        instructions: 'Match each B1 brain & music word with its definition:',
        pairs: [
          { id: 'p-b1-73', term: 'melody', match: 'the main tune of a song that you can hum' },
          { id: 'p-b1-74', term: 'coordinate', match: 'make different body parts work together smoothly' },
          { id: 'p-b1-75', term: 'recover', match: 'return to good health after an injury' },
          { id: 'p-b1-76', term: 'anxiety', match: 'a feeling of nervousness or worry' }
        ]
      }
    }
  },
  {
    id: 'b1-cashless-society-economics',
    title: 'The Rise of Cashless Payments: What Happens When Coins and Notes Disappear?',
    subtitle: 'In countries from Sweden to South Korea, most people now buy everything from bus tickets to morning coffee by tapping a card or phone.',
    level: 'B1',
    category: 'Modern Economics',
    readTime: '3 min read',
    wordCount: 325,
    cefrSummary: 'Everyday economics, digital banking, and B1 consumer finance vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-900',
    paragraphs: [
      'Ten years ago, leaving home without a wallet full of paper banknotes and metal coins meant you could not buy a bus ticket or a loaf of bread. Today, in cities from Stockholm and London to Seoul, many cafes and shops display small signs at the counter reading "Card or mobile payment only." In Sweden, fewer than one in ten retail purchases now involve physical cash.',
      'For both shopkeepers and customers, digital payments offer clear convenience. Paying with a contactless card or smartphone takes less than two seconds, eliminates the need to count out small change, and means stores do not have to pay security guards to transport heavy bags of cash to the bank every evening.',
      'However, behavioral economists have noticed an important psychological side effect: people tend to spend more money when they pay digitally. Handing over physical banknotes triggers a slight feeling of loss—what psychologists call the "pain of paying"—whereas tapping a phone screen feels almost invisible until the monthly bank statement arrives.',
      'Going completely cashless also creates challenges for elderly citizens who do not use smartphones, and for entire cities when power outages or internet failures temporarily shut down card machines. For that reason, central banks in several countries now require supermarkets and pharmacies to keep accepting cash as a reliable backup.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-96',
        word: 'purchase',
        phonetic: '/ˈpɜː.tʃəs/',
        partOfSpeech: 'noun',
        definition: 'Xarid — sotib olingan narsa yoki sotib olish jarayoni.',
        cefrLevel: 'B1',
        exampleSentence: 'In Sweden, fewer than ten percent of everyday purchases involve paper cash.',
        collocations: ['everyday purchase', 'make a purchase', 'online purchase'],
        synonyms: ['transaction', 'buy', 'acquisition']
      },
      {
        id: 'v-b1-97',
        word: 'convenience',
        phonetic: '/kənˈviː.ni.əns/',
        partOfSpeech: 'noun',
        definition: 'Qulaylik — vaqt va kuchni tejaydigan oson hamda qulay sharoit.',
        cefrLevel: 'B1',
        exampleSentence: 'Customers love the convenience of paying for train tickets with a tap of their phone.',
        collocations: ['for convenience', 'modern convenience', 'offer convenience'],
        synonyms: ['ease', 'simplicity', 'handiness'],
        antonyms: ['inconvenience', 'hassle']
      },
      {
        id: 'v-b1-98',
        word: 'eliminate',
        phonetic: '/iˈlɪm.ɪ.neɪt/',
        partOfSpeech: 'verb',
        definition: 'Bartaraf etmoq, yo‘qotmoq — biror narsani butunlay olib tashlamoq, unga ehtiyoj qoldirmaslik.',
        cefrLevel: 'B1',
        exampleSentence: 'Contactless cards eliminate the need to carry heavy coins in your pocket.',
        collocations: ['eliminate the need', 'eliminate errors', 'completely eliminate'],
        synonyms: ['remove', 'get rid of', 'cut out']
      },
      {
        id: 'v-b1-99',
        word: 'temporarily',
        phonetic: '/ˈtem.pər.ər.əl.i/',
        partOfSpeech: 'adverb',
        definition: 'Vaqtinchalik — ma’lum bir qisqa muddatga, doimiy emas.',
        cefrLevel: 'B1',
        exampleSentence: 'An internet outage temporarily stopped the supermarket’s card machines from working.',
        collocations: ['temporarily closed', 'temporarily shut down', 'temporarily unavailable'],
        synonyms: ['briefly', 'for a short time'],
        antonyms: ['permanently', 'forever']
      },
      {
        id: 'v-b1-100',
        word: 'backup',
        phonetic: '/ˈbæk.ʌp/',
        partOfSpeech: 'noun',
        definition: 'Zaxira (ehtiyot chorasi) — asosiy tizim ishlamay qolganda foydalanish uchun tayyorlab qo‘yilgan qo‘shimcha reja yoki vosita.',
        cefrLevel: 'B1',
        exampleSentence: 'Carrying a twenty-euro note in your pocket is a useful backup if your phone battery dies.',
        collocations: ['reliable backup', 'backup plan', 'keep as a backup'],
        synonyms: ['reserve', 'fallback', 'spare']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-40',
          targetWord: 'convenience',
          question: 'Why have digital payments become so popular with shoppers and stores?',
          options: [
            'Because of their convenience—they are fast, easy, and save time at the checkout',
            'Because tapping a phone gives you free groceries',
            'Because paper banknotes weigh fifty kilograms each',
            'Because banks banned all credit cards'
          ],
          correctIndex: 0,
          explanation: '"Convenience" refers to how easy and time-saving something is to use.'
        },
        {
          id: 'mc-b1-41',
          targetWord: 'backup',
          question: 'Why do central banks want grocery stores to keep accepting cash as a "backup"?',
          options: [
            'So people can still buy food if a power cut or internet failure stops digital card machines',
            'Because coins can be melted to make batteries',
            'Because smartphones do not work during the daytime',
            'So cashiers can practice counting to one thousand'
          ],
          correctIndex: 0,
          explanation: 'A "backup" is a reserve system used when the primary system fails.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-40',
          sentenceWithBlank: 'The bridge was _____ closed for two hours while workers cleared fallen tree branches.',
          targetWord: 'temporarily',
          hint: 'For a short time; not permanently',
          options: ['temporarily', 'effortlessly', 'autonomously', 'mistakenly']
        },
        {
          id: 'cl-b1-41',
          sentenceWithBlank: 'Using digital tickets helped the cinema _____ long paper queues at the entrance.',
          targetWord: 'eliminate',
          hint: 'Get rid of completely',
          options: ['eliminate', 'recover', 'coordinate', 'attract']
        }
      ],
      matching: {
        id: 'mat-b1-20',
        instructions: 'Match each B1 everyday economics word with its definition:',
        pairs: [
          { id: 'p-b1-77', term: 'purchase', match: 'something you buy in a shop or online' },
          { id: 'p-b1-78', term: 'convenience', match: 'the quality of being easy and saving time' },
          { id: 'p-b1-79', term: 'eliminate', match: 'remove or get rid of something completely' },
          { id: 'p-b1-80', term: 'backup', match: 'an extra plan or supply ready if the main one fails' }
        ]
      }
    }
  },
  {
    id: 'b1-uzbek-silk-road-caravans',
    title: 'Crossroads of Trade: How Caravans Connected Ancient Samarkand and Bukhara',
    subtitle: 'Long before cargo planes and trains, camel caravans carried silk, paper, and astronomical ideas across Central Asia.',
    level: 'B1',
    category: 'History & Civilizations',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 410,
    cefrSummary: 'Historical trade, Silk Road heritage, and B1 travel and commerce vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-900',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Tiled madrasahs and ancient trading domes still stand in the historic centers of Samarkand and Bukhara.',
    paragraphs: [
      'For more than a thousand years, the cities of Samarkand and Bukhara stood at the center of the Silk Road. This famous network was not a single paved highway, but a collection of desert tracks and mountain passes linking China with the Mediterranean Sea. Every spring, long caravans of camels loaded with silk, spices, glass, and porcelain set out across the dry plains of Central Asia.',
      'Traveling between oasis cities was dangerous and exhausting. Merchants faced sandstorms, freezing mountain nights, and severe water shortages. To protect travelers and encourage commerce, local rulers built sturdy stone inns called caravanserais along the main routes. Each inn was spaced about one day’s walk apart so traders could rest safely behind high walls.',
      'Inside a caravanserai, merchants from Persia, India, China, and Italy fed their animals in the courtyard and slept in small rooms upstairs. As they shared evening meals, they did more than exchange goods. They also shared recipes, musical instruments, medical knowledge, and methods for making durable paper.',
      'This constant cultural exchange turned Samarkand and Bukhara into vibrant centers of science and architecture. Even after ocean ships eventually replaced desert caravans as the main way to transport cargo, the magnificent blue domes and marketplaces of Central Asia remained lasting monuments to international cooperation.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-101',
        word: 'merchant',
        partOfSpeech: 'noun',
        phonetic: '/ˈmɜːtʃənt/',
        definition: 'Savdogar, tijoratchi — tovarlarni katta miqdorda sotib olib, boshqa joylarda sotadigan kishi.',
        contextSentence: 'Merchants faced sandstorms, freezing mountain nights, and severe water shortages.',
        exampleSentence: 'The silk merchant traveled from Samarkand to Istanbul twice a year.',
        synonyms: ['trader', 'dealer', 'vendor'],
        collocations: ['wealthy merchant', 'foreign merchant', 'merchant ship'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-102',
        word: 'commerce',
        partOfSpeech: 'noun',
        phonetic: '/ˈkɒmɜːs/',
        definition: 'Tijorat, savdo-sotiq — mamlakatlar yoki shaharlar o‘rtasida tovar va xizmatlarni sotib olish hamda sotish faoliyati.',
        contextSentence: 'To protect travelers and encourage commerce, local rulers built sturdy stone inns called caravanserais along the main routes.',
        exampleSentence: 'Railways and ports helped international commerce grow rapidly in the nineteenth century.',
        synonyms: ['trade', 'business', 'traffic'],
        collocations: ['international commerce', 'electronic commerce', 'encourage commerce'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-103',
        word: 'sturdy',
        partOfSpeech: 'adjective',
        phonetic: '/ˈstɜːdi/',
        definition: 'Baquvvat, mustahkam — kuchli qurilgan va osonlikcha sinmaydigan yoki buzilmaydigan.',
        contextSentence: 'To protect travelers and encourage commerce, local rulers built sturdy stone inns called caravanserais along the main routes.',
        exampleSentence: 'You need sturdy hiking boots before walking across rocky mountain trails.',
        synonyms: ['strong', 'solid', 'robust'],
        collocations: ['sturdy walls', 'sturdy shoes', 'sturdy table'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-104',
        word: 'exchange',
        partOfSpeech: 'verb',
        phonetic: '/ɪksˈtʃeɪndʒ/',
        definition: 'Almashmoq, ayirboshlamoq — biror narsani berib, evaziga boshqa narsa olmoq.',
        contextSentence: 'As they shared evening meals, they did more than exchange goods.',
        exampleSentence: 'Students from the two universities meet every Friday to exchange language tips.',
        synonyms: ['swap', 'trade', 'share'],
        collocations: ['exchange goods', 'exchange ideas', 'exchange currency'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-105',
        word: 'cargo',
        partOfSpeech: 'noun',
        phonetic: '/ˈkɑːɡəʊ/',
        definition: 'Yuk — kema, samolyot, poyezd yoki karvon orqali tashiladigan tovarlar.',
        contextSentence: 'Even after ocean ships eventually replaced desert caravans as the main way to transport cargo, the magnificent blue domes and marketplaces of Central Asia remained lasting monuments to international cooperation.',
        exampleSentence: 'The ship arrived at the harbor carrying a heavy cargo of grain and timber.',
        synonyms: ['freight', 'load', 'shipment'],
        collocations: ['heavy cargo', 'transport cargo', 'cargo ship'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-42',
          targetWord: 'commerce',
          question: 'Why did local rulers build stone caravanserais along the Silk Road?',
          options: [
            'To protect travelers and encourage commerce between cities',
            'To stop foreign merchants from entering the country',
            'To store ocean ships during the winter months',
            'To hide secret recipes from neighboring towns'
          ],
          correctIndex: 0,
          explanation: '"Commerce" means trade—the buying and selling of goods across regions.'
        },
        {
          id: 'mc-b1-43',
          targetWord: 'cargo',
          question: 'What does "cargo" refer to in the final paragraph?',
          options: [
            'Goods and products carried by ships, trains, or caravans',
            'A traditional musical instrument played in Bukhara',
            'The blue tiles used on historic domes',
            'A map of desert water wells'
          ],
          correctIndex: 0,
          explanation: '"Cargo" refers to goods transported in bulk by vehicles, ships, or pack animals.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-42',
          sentenceWithBlank: 'The carpenter built a _____ oak bench that lasted in the garden for thirty years.',
          targetWord: 'sturdy',
          hint: 'Strong and solidly built',
          options: ['sturdy', 'fragile', 'temporary', 'artificial']
        },
        {
          id: 'cl-b1-43',
          sentenceWithBlank: 'At the conference, scientists from twelve countries met to _____ research findings.',
          targetWord: 'exchange',
          hint: 'Give and receive in return',
          options: ['exchange', 'eliminate', 'abandon', 'postpone']
        }
      ],
      matching: {
        id: 'mat-b1-21',
        instructions: 'Match each B1 Silk Road history word with its definition:',
        pairs: [
          { id: 'p-b1-81', term: 'merchant', match: 'a person who buys and sells goods for trade' },
          { id: 'p-b1-82', term: 'commerce', match: 'the activity of buying and selling on a large scale' },
          { id: 'p-b1-83', term: 'sturdy', match: 'strongly built and not easily damaged' },
          { id: 'p-b1-84', term: 'cargo', match: 'goods carried by a ship, aircraft, or caravan' }
        ]
      }
    }
  },
  {
    id: 'b1-bilingual-brain-benefits',
    title: 'Two Languages, One Mind: How Learning a Second Language Shapes the Brain',
    subtitle: 'Neuroscientists have found that switching between two languages strengthens attention and problem-solving skills.',
    level: 'B1',
    category: 'Psychology & Mind',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 405,
    cefrSummary: 'Everyday neuroscience, language learning habits, and B1 focus vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-900',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Reading and practicing a second language gives the brain a daily mental workout.',
    paragraphs: [
      'When you learn a new language, you do much more than memorize lists of words and grammar rules. Brain scans show that speaking two languages regularly changes how different parts of the brain communicate with one another. Just as lifting weights makes your muscles stronger, switching between languages exercises the brain networks responsible for focus.',
      'Every time a bilingual person wants to say a word, both languages become active in the mind at once. The brain must quickly select the right word in one language while holding back the other language. Because this mental selection happens hundreds of times every day, bilingual speakers become very skilled at ignoring distractions in noisy environments.',
      'Researchers have also discovered that people who use two languages often find it easier to switch between different tasks at school or work. For example, they can move from writing an email to solving a math problem without losing their concentration. Even beginners who study a foreign language for thirty minutes a day start to see improvements in memory.',
      'Finally, lifelong language learning protects the brain as people grow older. Medical studies suggest that adults who speak more than one language stay mentally sharp several years longer than those who only speak one. It is never too late to start learning a new language and enjoy these lasting mental rewards.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-106',
        word: 'memorize',
        partOfSpeech: 'verb',
        phonetic: '/ˈmeməraɪz/',
        definition: 'Yodlamoq, xotirada saqlab qolmoq — biror ma’lumotni keyinchalik yoddan aytib bera oladigan darajada o‘rganmoq.',
        contextSentence: 'When you learn a new language, you do much more than memorize lists of words and grammar rules.',
        exampleSentence: 'Actors have to memorize dozens of pages of dialogue before opening night.',
        synonyms: ['learn by heart', 'remember', 'retain'],
        collocations: ['memorize words', 'memorize a poem', 'memorize phone numbers'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-107',
        word: 'select',
        partOfSpeech: 'verb',
        phonetic: '/sɪˈlekt/',
        definition: 'Tanlamoq, saralab olmoq — bir nechta variant orasidan eng mosini yoki eng yaxshisini tanlab olmoq.',
        contextSentence: 'The brain must quickly select the right word in one language while holding back the other language.',
        exampleSentence: 'Please select your preferred delivery date before completing the order.',
        synonyms: ['choose', 'pick', 'opt for'],
        collocations: ['carefully select', 'select the right word', 'select a winner'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-108',
        word: 'distraction',
        partOfSpeech: 'noun',
        phonetic: '/dɪˈstrækʃn/',
        definition: 'Chalg‘ituvchi narsa — diqqatni jamlashga xalaqit beradigan shovqin, xabar yoki hodisa.',
        contextSentence: 'Because this mental selection happens hundreds of times every day, bilingual speakers become very skilled at ignoring distractions in noisy environments.',
        exampleSentence: 'Turning off phone notifications removes a major distraction while studying.',
        synonyms: ['interruption', 'disturbance', 'interference'],
        collocations: ['ignore distractions', 'avoid distractions', 'constant distraction'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-109',
        word: 'concentration',
        partOfSpeech: 'noun',
        phonetic: '/ˌkɒnsnˈtreɪʃn/',
        definition: 'Diqqatni jamlash, e’tibor — barcha fikr va diqqatni bitta ishga qaratish qobiliyati.',
        contextSentence: 'For example, they can move from writing an email to solving a math problem without losing their concentration.',
        exampleSentence: 'Playing chess requires deep concentration and patience.',
        synonyms: ['focus', 'attention', 'attentiveness'],
        collocations: ['lose concentration', 'deep concentration', 'improve concentration'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-110',
        word: 'reward',
        partOfSpeech: 'noun',
        phonetic: '/rɪˈwɔːd/',
        definition: 'Mukofot, samara — mehnat, harakat yoki yaxshi ish evaziga olinadigan foyda yoki rag‘bat.',
        contextSentence: 'It is never too late to start learning a new language and enjoy these lasting mental rewards.',
        exampleSentence: 'Seeing her students pass the exam was the greatest reward for her hard work.',
        synonyms: ['benefit', 'prize', 'return'],
        collocations: ['mental reward', 'financial reward', 'reap the rewards'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-44',
          targetWord: 'distraction',
          question: 'Why are bilingual speakers often good at ignoring "distractions"?',
          options: [
            'Because their brains practice choosing one language while blocking out the other every day',
            'Because they always wear headphones in public places',
            'Because they never use computers or mobile phones',
            'Because they only study in completely dark rooms'
          ],
          correctIndex: 0,
          explanation: 'A "distraction" is something that pulls your attention away from what you are doing.'
        },
        {
          id: 'mc-b1-45',
          targetWord: 'concentration',
          question: 'What does losing your "concentration" mean?',
          options: [
            'Becoming unable to keep your mind focused on the task in front of you',
            'Forgetting your house keys on the kitchen table',
            'Speaking louder than everyone else in a room',
            'Finishing your homework earlier than expected'
          ],
          correctIndex: 0,
          explanation: '"Concentration" is the ability to direct all your mental effort toward a single activity.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-44',
          sentenceWithBlank: 'Instead of trying to _____ fifty words in one night, review ten words every morning.',
          targetWord: 'memorize',
          hint: 'Learn so that you remember it exactly',
          options: ['memorize', 'postpone', 'eliminate', 'rescue']
        },
        {
          id: 'cl-b1-45',
          sentenceWithBlank: 'The library is my favorite place to study because there are very few _____ there.',
          targetWord: 'distractions',
          hint: 'Things that take your attention away from work',
          options: ['distractions', 'rewards', 'merchants', 'Harvests']
        }
      ],
      matching: {
        id: 'mat-b1-22',
        instructions: 'Match each B1 psychology and learning word with its definition:',
        pairs: [
          { id: 'p-b1-85', term: 'memorize', match: 'learn something carefully so you can remember it later' },
          { id: 'p-b1-86', term: 'select', match: 'choose the best option from a group' },
          { id: 'p-b1-87', term: 'distraction', match: 'something that stops you from paying attention' },
          { id: 'p-b1-88', term: 'reward', match: 'a benefit or prize received for hard work' }
        ]
      }
    }
  },
  {
    id: 'b1-solar-water-desalination',
    title: 'Drinking the Sea: How Solar Energy Turns Saltwater into Fresh Water',
    subtitle: 'Dry coastal towns are using sunlight to produce clean drinking water without burning fossil fuels.',
    level: 'B1',
    category: 'Technology & Innovation',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 412,
    cefrSummary: 'Clean water technology, solar energy, and B1 environmental vocabulary.',
    themeColor: 'sky',
    gradientFrom: 'from-sky-900',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Solar panels along sunny coastlines provide clean electricity for modern water treatment plants.',
    paragraphs: [
      'Oceans cover more than seventy percent of the Earth’s surface, yet millions of people living near the coast suffer from severe freshwater shortages. Seawater contains far too much salt for humans to drink or for farmers to use on ordinary crops. For decades, removing salt from ocean water required enormous amounts of electricity produced by burning coal or gas.',
      'Today, engineers have developed a cleaner solution by combining water treatment plants with solar power. Coastal deserts receive abundant sunshine almost every day of the year. By installing rows of solar panels next to the sea, communities can capture energy from the sun and use it to pump seawater through ultra-fine filters.',
      'These special filters have microscopic holes that allow pure water molecules to pass through while blocking salt and minerals. A single solar-powered plant in Kenya now supplies clean drinking water to more than thirty thousand residents every day. Local families no longer have to walk for hours to collect muddy water from distant rivers.',
      'Engineers are also finding clever ways to handle the leftover salt so it does not harm marine life when returned to the ocean. As solar equipment becomes cheaper and more efficient, sunlight-powered water plants could soon protect dry regions around the world from future droughts.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-111',
        word: 'shortage',
        partOfSpeech: 'noun',
        phonetic: '/ˈʃɔːtɪdʒ/',
        definition: 'Tanqislik, yetishmovchilik — zarur bo‘lgan narsaning yetarli miqdorda bo‘lmasligi holati.',
        contextSentence: 'Oceans cover more than seventy percent of the Earth’s surface, yet millions of people living near the coast suffer from severe freshwater shortages.',
        exampleSentence: 'Low rainfall this spring caused a serious water shortage across the southern provinces.',
        synonyms: ['lack', 'scarcity', 'deficiency'],
        collocations: ['water shortage', 'food shortage', 'severe shortage'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-112',
        word: 'abundant',
        partOfSpeech: 'adjective',
        phonetic: '/əˈbʌndənt/',
        definition: 'Mo‘l-ko‘l, serob — juda ko‘p miqdorda mavjud bo‘lgan, yetarlidan ham ortiq.',
        contextSentence: 'Coastal deserts receive abundant sunshine almost every day of the year.',
        exampleSentence: 'Wild berries are abundant in the forest during late summer.',
        synonyms: ['plentiful', 'ample', 'rich'],
        collocations: ['abundant sunshine', 'abundant supply', 'abundant natural resources'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-113',
        word: 'capture',
        partOfSpeech: 'verb',
        phonetic: '/ˈkæptʃə(r)/',
        definition: 'Tutib qolmoq, yig‘ib olmoq — energiya, suv yoki yorug‘likni foydalanish maqsadida ushlab qolmoq.',
        contextSentence: 'By installing rows of solar panels next to the sea, communities can capture energy from the sun and use it to pump seawater through ultra-fine filters.',
        exampleSentence: 'Rainwater barrels capture water from the roof so we can water the garden later.',
        synonyms: ['catch', 'collect', 'trap'],
        collocations: ['capture energy', 'capture rainwater', 'capture attention'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-114',
        word: 'resident',
        partOfSpeech: 'noun',
        phonetic: '/ˈrezɪdənt/',
        definition: 'Mahalliy aholi vakili, yashovchi — muayyan shahar, qishloq yoki hududda doimiy yashaydigan inson.',
        contextSentence: 'A single solar-powered plant in Kenya now supplies clean drinking water to more than thirty thousand residents every day.',
        exampleSentence: 'Local residents volunteered on Saturday to plant fifty trees in the neighborhood park.',
        synonyms: ['inhabitant', 'citizen', 'local'],
        collocations: ['local residents', 'city residents', 'permanent resident'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-115',
        word: 'drought',
        partOfSpeech: 'noun',
        phonetic: '/draʊt/',
        definition: 'Qurg‘oqchilik — uzoq vaqt davomida yomg‘ir yog‘masligi oqibatida suvning juda kamayib ketishi.',
        contextSentence: 'As solar equipment becomes cheaper and more efficient, sunlight-powered water plants could soon protect dry regions around the world from future droughts.',
        exampleSentence: 'Many farmers switched to drip irrigation to save their fruit trees during the summer drought.',
        synonyms: ['dry spell', 'water scarcity', 'arid period'],
        collocations: ['severe drought', 'prolonged drought', 'survive a drought'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-46',
          targetWord: 'abundant',
          question: 'Why are coastal deserts ideal locations for solar water plants?',
          options: [
            'Because they receive abundant sunshine—plenty of bright sunlight—almost every day',
            'Because ocean water near deserts has no salt in it',
            'Because it rains heavily every afternoon in the desert',
            'Because solar panels only work in freezing temperatures'
          ],
          correctIndex: 0,
          explanation: '"Abundant" means existing in very large quantities; plentiful.'
        },
        {
          id: 'mc-b1-47',
          targetWord: 'drought',
          question: 'What is a "drought"?',
          options: [
            'A long period of very little or no rain that causes a lack of water',
            'A powerful ocean wave caused by strong winds',
            'A machine that filters salt out of seawater',
            'A type of solar panel installed on rooftops'
          ],
          correctIndex: 0,
          explanation: 'A "drought" is a prolonged period of abnormally low rainfall leading to a shortage of water.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-46',
          sentenceWithBlank: 'A sudden _____ of skilled drivers caused delays on several city bus routes.',
          targetWord: 'shortage',
          hint: 'A situation where there is not enough of something',
          options: ['shortage', 'reward', 'cargo', 'commerce']
        },
        {
          id: 'cl-b1-47',
          sentenceWithBlank: 'Town _____ gathered at the community hall to vote on the new bicycle lane project.',
          targetWord: 'residents',
          hint: 'People who live in a particular place',
          options: ['residents', 'distractions', 'merchants', 'ancestors']
        }
      ],
      matching: {
        id: 'mat-b1-23',
        instructions: 'Match each B1 water and energy word with its definition:',
        pairs: [
          { id: 'p-b1-89', term: 'shortage', match: 'a situation in which there is not enough of something needed' },
          { id: 'p-b1-90', term: 'abundant', match: 'available in large quantities; plentiful' },
          { id: 'p-b1-91', term: 'capture', match: 'collect and store energy or water for use' },
          { id: 'p-b1-92', term: 'drought', match: 'a long period without rain that dries up land and rivers' }
        ]
      }
    }
  },
  {
    id: 'b1-migratory-birds-navigation',
    title: 'Compasses in the Sky: How Migratory Birds Find Their Way Across Continents',
    subtitle: 'Every autumn, millions of birds fly thousands of kilometers without getting lost—guided by the sun, stars, and Earth’s magnetic field.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 415,
    cefrSummary: 'Wildlife migration, natural navigation, and B1 nature vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-900',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Migratory birds travel along ancient sky highways connecting northern breeding grounds with warmer winter habitats.',
    paragraphs: [
      'Every autumn, as days grow shorter and insects disappear in northern countries, millions of birds prepare for an incredible journey. Swallows, storks, and cranes fly thousands of kilometers south to spend the winter in warmer regions where food is easy to find. Then, when spring arrives, they return to the exact same trees and rooftops where they built their nests the year before.',
      'For centuries, scientists wondered how birds navigate across oceans and deserts without maps or road signs. Research shows that birds actually use several natural compasses at the same time. During the day, they track the position of the sun in the sky and recognize familiar landmarks such as coastlines, mountain ranges, and wide rivers.',
      'At night, songbirds look up at the stars and orient themselves around the North Star. Even more remarkably, when thick clouds hide the sky, birds can sense the Earth’s invisible magnetic field. Special proteins inside a bird’s eyes react to magnetic lines, helping the bird tell north from south even in total darkness.',
      'Along their journey, flocks depend on wetlands and lakes as resting stations where they can drink water and restore their energy. Protecting these natural stopover sites is essential so that migratory birds can continue completing their ancient journeys every year.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-116',
        word: 'navigate',
        partOfSpeech: 'verb',
        phonetic: '/ˈnævɪɡeɪt/',
        definition: 'Yo‘l topmoq, yo‘nalishni aniqlamoq — bir joydan ikkinchi joyga to‘g‘ri yo‘nalishni topib harakatlanmoq.',
        contextSentence: 'For centuries, scientists wondered how birds navigate across oceans and deserts without maps or road signs.',
        exampleSentence: 'Early sailors used the stars to navigate across the open ocean at night.',
        synonyms: ['find the way', 'steer', 'guide'],
        collocations: ['navigate across oceans', 'navigate safely', 'navigate by the stars'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-117',
        word: 'landmark',
        partOfSpeech: 'noun',
        phonetic: '/ˈlændmɑːk/',
        definition: 'Mo‘ljal, taniqli belgi — uzoqdan ko‘rinib turadigan va yo‘lni topishga yordam beradigan tog‘, daryo yoki bino.',
        contextSentence: 'During the day, they track the position of the sun in the sky and recognize familiar landmarks such as coastlines, mountain ranges, and wide rivers.',
        exampleSentence: 'The old television tower is a famous landmark that can be seen from across the city.',
        synonyms: ['guidepost', 'monument', 'marker'],
        collocations: ['familiar landmark', 'historic landmark', 'natural landmark'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-118',
        word: 'invisible',
        partOfSpeech: 'adjective',
        phonetic: '/ɪnˈvɪzəbl/',
        definition: 'Ko‘rinmas — oddiy ko‘z bilan ko‘rib bo‘lmaydigan.',
        contextSentence: 'Even more remarkably, when thick clouds hide the sky, birds can sense the Earth’s invisible magnetic field.',
        exampleSentence: 'Although wind is invisible, we can see its power when tree branches bend.',
        synonyms: ['unseen', 'imperceptible', 'hidden'],
        collocations: ['invisible magnetic field', 'invisible to the eye', 'nearly invisible'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-119',
        word: 'flock',
        partOfSpeech: 'noun',
        phonetic: '/flɒk/',
        definition: 'Gala, poda — birgalikda uchadigan yoki oziqlanadigan qushlar (yoki qo‘ylar) to‘dasi.',
        contextSentence: 'Along their journey, flocks depend on wetlands and lakes as resting stations where they can drink water and restore their energy.',
        exampleSentence: 'A large flock of wild geese flew in a V-shape across the autumn sky.',
        synonyms: ['group', 'flight', 'herd'],
        collocations: ['flock of birds', 'migrating flock', 'large flock'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-120',
        word: 'restore',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈstɔː(r)/',
        definition: 'Tiklamoq, qayta tiklamoq — yo‘qotilgan kuch, quvvat yoki avvalgi holatni qayta joyiga keltirmoq.',
        contextSentence: 'Along their journey, flocks depend on wetlands and lakes as resting stations where they can drink water and restore their energy.',
        exampleSentence: 'A warm meal and eight hours of sleep helped restore the hikers’ strength.',
        synonyms: ['recover', 'renew', 'rebuild'],
        collocations: ['restore energy', 'restore health', 'restore order'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-48',
          targetWord: 'navigate',
          question: 'How do songbirds "navigate" when thick clouds cover the sun and stars?',
          options: [
            'They sense the Earth’s invisible magnetic field to tell north from south',
            'They wait on the ground until summer returns',
            'They follow airplanes flying between airports',
            'They only fly in circles over the same forest'
          ],
          correctIndex: 0,
          explanation: 'To "navigate" means to plan and direct the course of a journey.'
        },
        {
          id: 'mc-b1-49',
          targetWord: 'landmark',
          question: 'Which of the following is an example of a natural "landmark" mentioned in the article?',
          options: [
            'A mountain range or a wide river that birds recognize from the air',
            'A magnetic protein inside a bird’s eye',
            'A warm breeze blowing from the south',
            'An insect hiding under tree bark'
          ],
          correctIndex: 0,
          explanation: 'A "landmark" is an easily recognized feature of a landscape that helps travelers know where they are.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-48',
          sentenceWithBlank: 'Bacteria and viruses are _____ without a powerful microscope.',
          targetWord: 'invisible',
          hint: 'Impossible to see with the naked eye',
          options: ['invisible', 'abundant', 'sturdy', 'portable']
        },
        {
          id: 'cl-b1-49',
          sentenceWithBlank: 'Workers spent three summers planting reeds to _____ the damaged wetland.',
          targetWord: 'restore',
          hint: 'Bring back to a healthy condition',
          options: ['restore', 'memorize', 'exchange', 'select']
        }
      ],
      matching: {
        id: 'mat-b1-24',
        instructions: 'Match each B1 nature and migration word with its definition:',
        pairs: [
          { id: 'p-b1-93', term: 'navigate', match: 'find the right way across a long distance' },
          { id: 'p-b1-94', term: 'landmark', match: 'a well-known mountain, river, or building that helps you know where you are' },
          { id: 'p-b1-95', term: 'flock', match: 'a group of birds flying or feeding together' },
          { id: 'p-b1-96', term: 'restore', match: 'bring back lost energy, health, or condition' }
        ]
      }
    }
  },
  {
    id: 'b1-repair-cafes-circular-economy',
    title: 'Fix It Together: Why Neighborhood Repair Cafes Are Growing Worldwide',
    subtitle: 'Instead of throwing away broken toasters, bicycles, and jackets, neighbors are meeting at local cafes to fix them for free.',
    level: 'B1',
    category: 'Environment',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 408,
    cefrSummary: 'Community sustainability, reducing waste, and B1 household vocabulary.',
    themeColor: 'teal',
    gradientFrom: 'from-teal-900',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Skilled volunteers help visitors mend household appliances and electronics at community repair events.',
    paragraphs: [
      'In many modern homes, when a kettle stops heating or a wooden chair loses a leg, the easiest choice is to throw it in the trash and buy a new one. Every year, millions of tons of repairable household items end up in landfills simply because fixing them costs too much or people no longer know how to use basic tools.',
      'In 2009, a journalist in Amsterdam started the first Repair Cafe to change this habit. The idea was simple: once a month, a community center sets up tables with screwdrivers, sewing machines, glue, and soldering irons. Local volunteers—including retired electricians, tailors, and mechanics—sit down with visitors to fix their broken belongings free of charge.',
      'Unlike a normal repair shop where you drop off an item and leave, visitors at a Repair Cafe stay and help with the work. An electrician might show a student how to replace a damaged plug, or a seamstress might teach a teenager how to sew a torn backpack zipper. In this way, practical skills are passed from one generation to the next.',
      'Today, there are more than two thousand Repair Cafes across Europe, Asia, and the Americas. By extending the life of everyday objects, these friendly gatherings save families money, reduce waste, and bring neighbors closer together over a cup of tea.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-121',
        word: 'appliance',
        partOfSpeech: 'noun',
        phonetic: '/əˈplaɪəns/',
        definition: 'Maishiy texnika, jihoz — uyda ovqat pishirish yoki tozalash kabi ishlar uchun ishlatiladigan elektr qurilma.',
        contextSentence: 'Skilled volunteers help visitors mend household appliances and electronics at community repair events.',
        exampleSentence: 'Modern kitchen appliances like washing machines and refrigerators use less electricity than older models.',
        synonyms: ['device', 'machine', 'gadget'],
        collocations: ['household appliance', 'kitchen appliance', 'electrical appliance'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-122',
        word: 'landfill',
        partOfSpeech: 'noun',
        phonetic: '/ˈlændfɪl/',
        definition: 'Chiqindixona — shahar chiqindilari olib borib ko‘miladigan maxsus ajratilgan joy.',
        contextSentence: 'Every year, millions of tons of repairable household items end up in landfills simply because fixing them costs too much or people no longer know how to use basic tools.',
        exampleSentence: 'Recycling paper and glass keeps thousands of tons of rubbish out of the local landfill.',
        synonyms: ['dump', 'waste site', 'rubbish tip'],
        collocations: ['end up in a landfill', 'reduce landfill waste', 'local landfill'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-123',
        word: 'volunteer',
        partOfSpeech: 'noun',
        phonetic: '/ˌvɒlənˈtɪə(r)/',
        definition: 'Ko‘ngilli — haq olmasdan, o‘z xohishi bilan boshqalarga yoki jamiyatga yordam beradigan inson.',
        contextSentence: 'Local volunteers—including retired electricians, tailors, and mechanics—sit down with visitors to fix their broken belongings free of charge.',
        exampleSentence: 'More than forty volunteers helped clean the riverbank last Sunday morning.',
        synonyms: ['helper', 'unpaid worker', 'supporter'],
        collocations: ['local volunteer', 'skilled volunteer', 'volunteer work'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-124',
        word: 'belongings',
        partOfSpeech: 'noun',
        phonetic: '/bɪˈlɒŋɪŋz/',
        definition: 'Shaxsiy buyumlar, mol-mulk — insonga tegishli bo‘lgan ko‘chma narsa va buyumlar.',
        contextSentence: 'Local volunteers—including retired electricians, tailors, and mechanics—sit down with visitors to fix their broken belongings free of charge.',
        exampleSentence: 'Passengers were asked to take all their personal belongings with them when leaving the train.',
        synonyms: ['possessions', 'items', 'things'],
        collocations: ['personal belongings', 'broken belongings', 'pack your belongings'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-125',
        word: 'extend',
        partOfSpeech: 'verb',
        phonetic: '/ɪkˈstend/',
        definition: 'Uzaytirmoq — biror narsaning davomiyligini, xizmat muddatini yoki uzunligini oshirmoq.',
        contextSentence: 'By extending the life of everyday objects, these friendly gatherings save families money, reduce waste, and bring neighbors closer together over a cup of tea.',
        exampleSentence: 'Regular oil changes can extend the life of a car engine by many years.',
        synonyms: ['lengthen', 'prolong', 'increase'],
        collocations: ['extend the life', 'extend a deadline', 'extend a visit'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-50',
          targetWord: 'volunteer',
          question: 'How is a Repair Cafe different from a normal commercial repair shop?',
          options: [
            'Skilled volunteers help visitors fix their items for free and teach them how to do it',
            'Customers must leave their items for six months and pay a high fee',
            'Only brand-new items still in their boxes are accepted',
            'Visitors are not allowed to watch how the repair is done'
          ],
          correctIndex: 0,
          explanation: 'A "volunteer" offers their time and skills freely to help others without payment.'
        },
        {
          id: 'mc-b1-51',
          targetWord: 'extend',
          question: 'What does "extending the life of everyday objects" mean?',
          options: [
            'Making household items last and work for a longer period of time',
            'Throwing items into a landfill as quickly as possible',
            'Painting small objects so they look bigger',
            'Buying two of the same toaster at the supermarket'
          ],
          correctIndex: 0,
          explanation: 'To "extend" the life of an object means to make it usable for longer.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-50',
          sentenceWithBlank: 'Please check that you have all your personal _____ before stepping off the airport bus.',
          targetWord: 'belongings',
          hint: 'The things that you own and carry with you',
          options: ['belongings', 'shortages', 'landmarks', 'flocks']
        },
        {
          id: 'cl-b1-51',
          sentenceWithBlank: 'Composting kitchen scraps keeps organic waste out of the city _____.',
          targetWord: 'landfill',
          hint: 'A site where rubbish is buried in the ground',
          options: ['landfill', 'appliance', 'reward', 'concentration']
        }
      ],
      matching: {
        id: 'mat-b1-25',
        instructions: 'Match each B1 sustainability word with its definition:',
        pairs: [
          { id: 'p-b1-97', term: 'appliance', match: 'a machine such as a toaster or kettle used in the home' },
          { id: 'p-b1-98', term: 'landfill', match: 'a place where waste materials are buried under the ground' },
          { id: 'p-b1-99', term: 'volunteer', match: 'someone who works to help the community without being paid' },
          { id: 'p-b1-100', term: 'extend', match: 'make something last longer or become larger' }
        ]
      }
    }
  },
  {
    id: 'b1-history-of-paper-samarkand',
    title: 'From Mulberry Bark to Books: How Samarkand Paper Changed World History',
    subtitle: 'For centuries, the finest paper in the world was handmade in water-powered mills along the Siyob River in Samarkand.',
    level: 'B1',
    category: 'History & Civilizations',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 414,
    cefrSummary: 'Samarkand craftsmanship, history of books, and B1 cultural vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-900',
    heroImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Traditional artisans in Konigil village near Samarkand still produce smooth, long-lasting paper from mulberry bark.',
    paragraphs: [
      'Before paper became common across the world, recording knowledge was expensive and difficult. In ancient Egypt, scribes wrote on fragile papyrus reeds, while European monks copied books onto parchment made from animal skins. A single parchment book could require the skins of more than a hundred sheep, making books rare treasures that only kings and wealthy libraries could afford.',
      'In the eighth century, artisans in Samarkand learned the craft of papermaking from Chinese craftsmen and improved it using local materials. Instead of bamboo, Samarkand papermakers boiled the soft inner bark of mulberry trees and used water-powered wooden hammers along the Siyob River to beat the fibers into a smooth pulp.',
      'After lifting thin sheets of pulp on mesh screens and drying them in the sun, craftsmen polished each sheet with a smooth agate stone. This special polishing technique prevented ink from soaking in too deeply, giving Samarkand paper a silky surface that lasted for centuries without turning yellow or tearing.',
      'Thanks to abundant and affordable Samarkand paper, scholars across Central Asia and the Middle East wrote thousands of books on mathematics, astronomy, medicine, and poetry. Soon, this papermaking knowledge spread to Spain and Italy, laying the foundation for modern printing and public education worldwide.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-126',
        word: 'fragile',
        partOfSpeech: 'adjective',
        phonetic: '/ˈfrædʒaɪl/',
        definition: 'Mo‘rt, nozik — osonlikcha sinadigan, yirtiladigan yoki shikastlanadigan.',
        contextSentence: 'In ancient Egypt, scribes wrote on fragile papyrus reeds, while European monks copied books onto parchment made from animal skins.',
        exampleSentence: 'The museum keeps fragile glass bowls inside locked display cases.',
        synonyms: ['delicate', 'breakable', 'weak'],
        collocations: ['fragile glass', 'fragile paper', 'fragile ecosystem'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-127',
        word: 'afford',
        partOfSpeech: 'verb',
        phonetic: '/əˈfɔːd/',
        definition: 'Qurbi yetmoq, sotib olishga imkoni bo‘lmoq — biror narsani sotib olish uchun yetarli pulga ega bo‘lmoq.',
        contextSentence: 'A single parchment book could require the skins of more than a hundred sheep, making books rare treasures that only kings and wealthy libraries could afford.',
        exampleSentence: 'When laptops became cheaper, many more students could afford to buy one for college.',
        synonyms: ['pay for', 'manage financially', 'bear the cost'],
        collocations: ['can afford', 'hardly afford', 'afford to buy'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-128',
        word: 'artisan',
        partOfSpeech: 'noun',
        phonetic: '/ˌɑːtɪˈzæn/',
        definition: 'Hunarmand, usta — qo‘l mehnati bilan sifatli buyumlar yasaydigan mohir usta.',
        contextSentence: 'In the eighth century, artisans in Samarkand learned the craft of papermaking from Chinese craftsmen and improved it using local materials.',
        exampleSentence: 'Local artisans in Rishtan are famous for painting beautiful blue ceramic plates by hand.',
        synonyms: ['craftsperson', 'maker', 'skilled worker'],
        collocations: ['skilled artisan', 'local artisan', 'traditional artisan'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-129',
        word: 'surface',
        partOfSpeech: 'noun',
        phonetic: '/ˈsɜːfɪs/',
        definition: 'Yuza, sirt — biror narsaning ustki yoki tashqi qismi.',
        contextSentence: 'This special polishing technique prevented ink from soaking in too deeply, giving Samarkand paper a silky surface that lasted for centuries without turning yellow or tearing.',
        exampleSentence: 'Wipe the wooden surface of the desk with a dry cloth after painting.',
        synonyms: ['top', 'outside', 'exterior'],
        collocations: ['smooth surface', 'silky surface', 'Earth’s surface'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-130',
        word: 'foundation',
        partOfSpeech: 'noun',
        phonetic: '/faʊnˈdeɪʃn/',
        definition: 'Poydevor, asos — keyingi rivojlanish, bino yoki g‘oya tayanadigan eng asosiy negiz.',
        contextSentence: 'Soon, this papermaking knowledge spread to Spain and Italy, laying the foundation for modern printing and public education worldwide.',
        exampleSentence: 'Strong reading habits in primary school build a solid foundation for lifelong learning.',
        synonyms: ['basis', 'groundwork', 'base'],
        collocations: ['lay the foundation', 'solid foundation', 'strong foundation'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-52',
          targetWord: 'afford',
          question: 'Why could only kings and wealthy libraries "afford" books made of parchment?',
          options: [
            'Because making a single parchment book required the skins of over a hundred sheep, making it extremely expensive',
            'Because sheep only lived in one small village in Europe',
            'Because nobody knew how to read before the nineteenth century',
            'Because parchment melted whenever it touched water'
          ],
          correctIndex: 0,
          explanation: 'To "afford" something means to have enough money to pay for it.'
        },
        {
          id: 'mc-b1-53',
          targetWord: 'surface',
          question: 'Why did Samarkand artisans polish each sheet of paper with a smooth stone?',
          options: [
            'To give the paper a smooth, silky surface so ink would not soak in too deeply',
            'To make the paper heavier than stone',
            'To turn the paper dark blue',
            'To break the paper into tiny pieces'
          ],
          correctIndex: 0,
          explanation: 'The "surface" is the flat outer layer of the paper where ink is written.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-52',
          sentenceWithBlank: 'The box was marked "_____" because it contained antique porcelain teacups.',
          targetWord: 'fragile',
          hint: 'Easily broken or damaged',
          options: ['fragile', 'sturdy', 'abundant', 'invisible']
        },
        {
          id: 'cl-b1-53',
          sentenceWithBlank: 'Al-Khwarizmi’s treatises on algebra laid the _____ for modern computer science.',
          targetWord: 'foundation',
          hint: 'The base on which something new develops',
          options: ['foundation', 'landfill', 'distraction', 'shortage']
        }
      ],
      matching: {
        id: 'mat-b1-26',
        instructions: 'Match each B1 history and craft word with its definition:',
        pairs: [
          { id: 'p-b1-101', term: 'fragile', match: 'delicate and easily broken or torn' },
          { id: 'p-b1-102', term: 'afford', match: 'have enough money to buy or pay for something' },
          { id: 'p-b1-103', term: 'artisan', match: 'a skilled craftsperson who makes things by hand' },
          { id: 'p-b1-104', term: 'foundation', match: 'the basic idea or structure from which something grows' }
        ]
      }
    }
  },
  {
    id: 'b1-body-clock-circadian-rhythm',
    title: 'Your Internal Clock: Why Morning Sunlight Helps You Sleep Better at Night',
    subtitle: 'Inside every human brain is a twenty-four-hour timer that controls energy, hunger, and sleep—and natural light sets it.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 406,
    cefrSummary: 'Circadian rhythms, healthy daily routines, and B1 health vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Spending fifteen minutes outside in the morning sunlight signals the brain that the day has begun.',
    paragraphs: [
      'Have you ever noticed that you feel hungry at almost the same hour every day, or that your eyes grow heavy at a regular time each night? This happens because your body follows an internal twenty-four-hour schedule known as the circadian rhythm. Even without a wristwatch, a tiny group of cells inside your brain keeps track of day and night.',
      'To stay accurate, this internal clock relies on external signals from the environment, especially natural sunlight. When bright morning light enters your eyes, it sends a clear signal to your brain to stop producing sleep hormones and increase your body temperature and alertness. Even on a cloudy morning, outdoor daylight is much brighter than indoor office lamps.',
      'Furthermore, stepping outside for fifteen minutes shortly after waking up starts a countdown timer in your brain. About fourteen to sixteen hours after seeing morning light, your body naturally begins releasing melatonin, the hormone that helps you fall asleep smoothly at night.',
      'On the other hand, staring at bright phone or laptop screens late at night confuses the brain into thinking it is still daytime. By getting natural light in the morning and dimming indoor lights an hour before bed, you can keep your body clock balanced and wake up feeling refreshed.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-131',
        word: 'internal',
        partOfSpeech: 'adjective',
        phonetic: '/ɪnˈtɜːnl/',
        definition: 'Ichki — tana, tashkilot yoki biror narsaning ichida joylashgan yoki sodir bo‘ladigan.',
        contextSentence: 'This happens because your body follows an internal twenty-four-hour schedule known as the circadian rhythm.',
        exampleSentence: 'Mammals can keep their internal body temperature steady even in winter.',
        synonyms: ['inner', 'inside', 'interior'],
        collocations: ['internal clock', 'internal organs', 'internal temperature'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-132',
        word: 'signal',
        partOfSpeech: 'noun',
        phonetic: '/ˈsɪɡnəl/',
        definition: 'Belgi, ishora — biror xabar beruvchi yoki harakat boshlashga undovchi tovush, yorug‘lik yoki axborot.',
        contextSentence: 'When bright morning light enters your eyes, it sends a clear signal to your brain to stop producing sleep hormones and increase your body temperature and alertness.',
        exampleSentence: 'When the referee blew the whistle, it was the signal for the match to begin.',
        synonyms: ['sign', 'cue', 'message'],
        collocations: ['clear signal', 'send a signal', 'traffic signal'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-133',
        word: 'alertness',
        partOfSpeech: 'noun',
        phonetic: '/əˈlɜːtnəs/',
        definition: 'Tetiklik, hushyorlik — uyg‘oq, diqqatli va tez fikrlashga tayyor bo‘lish holati.',
        contextSentence: 'When bright morning light enters your eyes, it sends a clear signal to your brain to stop producing sleep hormones and increase your body temperature and alertness.',
        exampleSentence: 'A short walk in the fresh air improved the driver’s alertness during the long trip.',
        synonyms: ['wakefulness', 'sharpness', 'attentiveness'],
        collocations: ['mental alertness', 'increase alertness', 'high alertness'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-134',
        word: 'confuse',
        partOfSpeech: 'verb',
        phonetic: '/kənˈfjuːz/',
        definition: 'Chalg‘itmoq, adashtirmoq — tushunishni qiyinlashtirmoq yoki noto‘g‘ri xulosaga olib kelmoq.',
        contextSentence: 'On the other hand, staring at bright phone or laptop screens late at night confuses the brain into thinking it is still daytime.',
        exampleSentence: 'The two twin brothers look so similar that they often confuse their teachers.',
        synonyms: ['puzzle', 'mislead', 'mix up'],
        collocations: ['confuse the brain', 'easily confused', 'confuse visitors'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-135',
        word: 'refreshed',
        partOfSpeech: 'adjective',
        phonetic: '/rɪˈfreʃt/',
        definition: 'Tetiklashgan, dam olgan — uyqu yoki hordiqdan keyin o‘zini yangi kuchga to‘lgan his qiladigan.',
        contextSentence: 'By getting natural light in the morning and dimming indoor lights an hour before bed, you can keep your body clock balanced and wake up feeling refreshed.',
        exampleSentence: 'After a cool shower and a glass of water, the runners felt completely refreshed.',
        synonyms: ['rested', 'energized', 'revived'],
        collocations: ['feel refreshed', 'wake up refreshed', 'completely refreshed'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-54',
          targetWord: 'signal',
          question: 'What "signal" does bright morning sunlight send to your brain?',
          options: [
            'It tells the brain to stop making sleep hormones and increase daytime alertness',
            'It tells the body to go back to sleep immediately',
            'It makes your internal clock run backward',
            'It lowers your body temperature for hibernation'
          ],
          correctIndex: 0,
          explanation: 'A "signal" is a message or cue that triggers a specific response.'
        },
        {
          id: 'mc-b1-55',
          targetWord: 'confuse',
          question: 'Why does looking at bright screens late at night "confuse" the brain?',
          options: [
            'The bright light tricks the brain into thinking it is still daytime',
            'The screen makes the room too cold to sleep',
            'Phones absorb all the oxygen in the bedroom',
            'Screens turn off the sun the next morning'
          ],
          correctIndex: 0,
          explanation: 'To "confuse" means to cause something to react wrongly by giving misleading information.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-54',
          sentenceWithBlank: 'After sleeping well in the quiet mountain cabin, everyone woke up feeling _____.',
          targetWord: 'refreshed',
          hint: 'Full of energy again after resting',
          options: ['refreshed', 'fragile', 'invisible', 'temporary']
        },
        {
          id: 'cl-b1-55',
          sentenceWithBlank: 'Drinking enough water during exams helps students maintain their mental _____.',
          targetWord: 'alertness',
          hint: 'The state of being awake and able to think quickly',
          options: ['alertness', 'shortage', 'landfill', 'cargo']
        }
      ],
      matching: {
        id: 'mat-b1-27',
        instructions: 'Match each B1 health and body-clock word with its definition:',
        pairs: [
          { id: 'p-b1-105', term: 'internal', match: 'located or happening inside the body' },
          { id: 'p-b1-106', term: 'signal', match: 'a sign or message that tells the brain to act' },
          { id: 'p-b1-107', term: 'alertness', match: 'being fully awake and paying close attention' },
          { id: 'p-b1-108', term: 'refreshed', match: 'feeling rested and full of new energy' }
        ]
      }
    }
  },
  {
    id: 'b1-sponge-cities-flood-control',
    title: 'Sponge Cities: How Urban Parks and Rain Gardens Prevent Flooding',
    subtitle: 'Instead of covering every street in concrete, modern cities are using soil, trees, and ponds to soak up heavy rain.',
    level: 'B1',
    category: 'Environment',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 410,
    cefrSummary: 'Green urban planning, flood prevention, and B1 environment vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-teal-900',
    heroImage: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Green parks and sunken rain gardens absorb stormwater during heavy downpours and store it for dry months.',
    paragraphs: [
      'In most big cities, roads, parking lots, and sidewalks are covered with hard concrete and asphalt. When a heavy rainstorm hits, water cannot sink into the ground. Instead, millions of liters of rainwater rush across the streets at once, overwhelming underground pipes and causing dangerous floods.',
      'To solve this problem, urban planners in China, Europe, and North America are redesigning neighborhoods as "sponge cities." Just like a kitchen sponge absorbs spilled water on a table, a sponge city uses natural landscapes to soak up rain where it falls. Concrete pavements are replaced with porous bricks that let water trickle down into the soil below.',
      'Designers also build sunken rain gardens along roadsides and turn empty lots into small wetlands filled with native plants. During a storm, these green spaces hold excess rainwater and slow down its movement. At the same time, plant roots and layers of sand naturally filter out street dust and oil before the water reaches local rivers.',
      'Later, during hot summer weeks, the stored water evaporates slowly from the soil and trees, cooling down the surrounding neighborhood. Sponge cities prove that working with nature is often smarter and safer than fighting against it.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-136',
        word: 'absorb',
        partOfSpeech: 'verb',
        phonetic: '/əbˈzɔːb/',
        definition: 'Shimib olmoq, o‘ziga tortmoq — suyuqlik, issiqlik yoki energiyani o‘z ichiga singdirib olmoq.',
        contextSentence: 'Just like a kitchen sponge absorbs spilled water on a table, a sponge city uses natural landscapes to soak up rain where it falls.',
        exampleSentence: 'Dry soil and tree roots absorb rainwater much faster than hard pavement.',
        synonyms: ['soak up', 'take in', 'sponge up'],
        collocations: ['absorb water', 'absorb heat', 'absorb shock'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-137',
        word: 'pavement',
        partOfSpeech: 'noun',
        phonetic: '/ˈpeɪvmənt/',
        definition: 'Yo‘lak, asfalt qoplama — piyodalar yurishi yoki transport harakati uchun tosh va asfalt yotqizilgan qattiq yo‘l.',
        contextSentence: 'Concrete pavements are replaced with porous bricks that let water trickle down into the soil below.',
        exampleSentence: 'Cafes placed small tables and chairs along the wide pavement in front of the square.',
        synonyms: ['sidewalk', 'footpath', 'road surface'],
        collocations: ['concrete pavement', 'wet pavement', 'walk on the pavement'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-138',
        word: 'excess',
        partOfSpeech: 'adjective',
        phonetic: '/ˈekses/',
        definition: 'Ortiqcha, me’yordan ko‘p — keragidan yoki odatdagidan ko‘proq bo‘lgan miqdor.',
        contextSentence: 'During a storm, these green spaces hold excess rainwater and slow down its movement.',
        exampleSentence: 'Airlines charge an extra fee if passengers carry excess baggage.',
        synonyms: ['extra', 'surplus', 'leftover'],
        collocations: ['excess water', 'excess weight', 'remove excess'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-139',
        word: 'evaporate',
        partOfSpeech: 'verb',
        phonetic: '/ɪˈvæpəreɪt/',
        definition: 'Bug‘lanmoq — suyuqlikning issiqlik ta’sirida bug‘ga aylanib havoga ko‘tarilishi.',
        contextSentence: 'Later, during hot summer weeks, the stored water evaporates slowly from the soil and trees, cooling down the surrounding neighborhood.',
        exampleSentence: 'Puddles on the playground evaporate quickly when the afternoon sun comes out.',
        synonyms: ['vaporize', 'dry up', 'turn to steam'],
        collocations: ['evaporate quickly', 'water evaporates', 'evaporate into the air'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-140',
        word: 'surrounding',
        partOfSpeech: 'adjective',
        phonetic: '/səˈraʊndɪŋ/',
        definition: 'Atrofdagi, tevarak-atrofdagi — biror joyning yaqinida va atrofida joylashgan.',
        contextSentence: 'Later, during hot summer weeks, the stored water evaporates slowly from the soil and trees, cooling down the surrounding neighborhood.',
        exampleSentence: 'From the top of the hill, visitors can see the lake and the surrounding mountains.',
        synonyms: ['nearby', 'neighboring', 'adjacent'],
        collocations: ['surrounding neighborhood', 'surrounding area', 'surrounding countryside'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-56',
          targetWord: 'absorb',
          question: 'Why are these green urban designs called "sponge cities"?',
          options: [
            'Because their parks, soil, and special bricks absorb rainwater just like a sponge',
            'Because all the buildings are made of soft yellow rubber',
            'Because they are built on the bottom of the ocean',
            'Because residents wash the streets with soap every morning'
          ],
          correctIndex: 0,
          explanation: 'To "absorb" means to soak up liquid easily.'
        },
        {
          id: 'mc-b1-57',
          targetWord: 'evaporate',
          question: 'How does stored rainwater help cool down a sponge city during hot summer weeks?',
          options: [
            'It evaporates slowly from the soil and trees, lowering the air temperature',
            'It freezes into solid blocks of ice on the streets',
            'It pushes hot air into underground pipes',
            'It turns the concrete pavements white'
          ],
          correctIndex: 0,
          explanation: 'When water "evaporates" (turns from liquid into vapor), it cools the surrounding air.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-56',
          sentenceWithBlank: 'Use a paper towel to blot any _____ oil from the top of the soup.',
          targetWord: 'excess',
          hint: 'More than what is needed or usual',
          options: ['excess', 'internal', 'fragile', 'sturdy']
        },
        {
          id: 'cl-b1-57',
          sentenceWithBlank: 'Farmers from the _____ villages bring fresh melons and apricots to the city market every morning.',
          targetWord: 'surrounding',
          hint: 'Located all around a place',
          options: ['surrounding', 'invisible', 'refreshed', 'abundant']
        }
      ],
      matching: {
        id: 'mat-b1-28',
        instructions: 'Match each B1 urban environment word with its definition:',
        pairs: [
          { id: 'p-b1-109', term: 'absorb', match: 'soak up liquid or take in energy' },
          { id: 'p-b1-110', term: 'pavement', match: 'the hard surface of a sidewalk or road' },
          { id: 'p-b1-111', term: 'excess', match: 'an amount that is more than necessary' },
          { id: 'p-b1-112', term: 'evaporate', match: 'change from liquid water into invisible vapor' }
        ]
      }
    }
  },
  {
    id: 'b1-parallax-how-we-measure-stars',
    title: 'Measuring the Stars: How Astronomers Know How Far Away Distant Suns Are',
    subtitle: 'No spacecraft has ever visited another star, yet scientists can measure their distance using simple geometry and a clever visual trick.',
    level: 'B1',
    category: 'Science & Nature',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 412,
    cefrSummary: 'Observational astronomy, measuring star distances, and B1 science vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-slate-950',
    gradientTo: 'to-indigo-900',
    heroImage: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Observatories capture images of the night sky six months apart to measure the tiny shift of nearby stars.',
    paragraphs: [
      'When you look up at the night sky, all the stars appear to be painted on the inside of a flat dark bowl. In reality, some stars are relatively close neighbors, while others are thousands of times farther away. Since we cannot stretch a measuring tape across space, how do astronomers calculate the exact distance to a star?',
      'You can test their main method right now by holding one finger in front of your nose. Close your left eye and look at your finger against the wall behind it; then switch eyes. Your finger appears to jump from side to side against the background wall, even though you did not move your hand. Move your finger farther away from your face, and that jump becomes much smaller.',
      'Astronomers use this exact effect, called parallax, on a giant scale. Instead of blinking two eyes a few centimeters apart, they take a photograph of a star in January and another photograph in July, when the Earth has traveled to the opposite side of the Sun. By measuring the tiny angle that the star shifts against faraway background galaxies, scientists can calculate its distance using school geometry.',
      'Throughout history, observatories—including the famous fifteenth-century observatory of Ulugh Beg in Samarkand—measured the angles of stars with remarkable precision. Today, space telescopes measure the positions of over a billion stars, creating an accurate three-dimensional map of our galaxy.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-141',
        word: 'calculate',
        partOfSpeech: 'verb',
        phonetic: '/ˈkælkjuleɪt/',
        definition: 'Hisoblamoq, hisob-kitob qilmoq — matematik amallar va o‘lchovlar yordamida aniq miqdorni topmoq.',
        contextSentence: 'Since we cannot stretch a measuring tape across space, how do astronomers calculate the exact distance to a star?',
        exampleSentence: 'Engineers calculate how much weight a bridge can safely support before construction begins.',
        synonyms: ['compute', 'work out', 'measure'],
        collocations: ['calculate the distance', 'calculate the cost', 'accurately calculate'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-142',
        word: 'background',
        partOfSpeech: 'noun',
        phonetic: '/ˈbækɡraʊnd/',
        definition: 'Orqa fon, orqa plan — asosiy narsaning orqasida ko‘rinib turadigan manzara yoki qism.',
        contextSentence: 'Your finger appears to jump from side to side against the background wall, even though you did not move your hand.',
        exampleSentence: 'In the family photo, snow-covered mountains can be seen in the background.',
        synonyms: ['backdrop', 'distance', 'rear'],
        collocations: ['in the background', 'background galaxies', 'against the background'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-143',
        word: 'opposite',
        partOfSpeech: 'adjective',
        phonetic: '/ˈɒpəzɪt/',
        definition: 'Qarama-qarshi, ro‘paradagi — boshqa tomonda yoki teskari yo‘nalishda joylashgan.',
        contextSentence: 'Instead of blinking two eyes a few centimeters apart, they take a photograph of a star in January and another photograph in July, when the Earth has traveled to the opposite side of the Sun.',
        exampleSentence: 'The library and the post office stand on opposite sides of the main street.',
        synonyms: ['facing', 'contrary', 'reverse'],
        collocations: ['opposite side', 'opposite direction', 'completely opposite'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-144',
        word: 'shift',
        partOfSpeech: 'verb',
        phonetic: '/ʃɪft/',
        definition: 'Siljimoq, o‘rnini o‘zgartirmoq — bir joydan yoki holatdan biroz boshqa tomonga ko‘chmoq.',
        contextSentence: 'By measuring the tiny angle that the star shifts against faraway background galaxies, scientists can calculate its distance using school geometry.',
        exampleSentence: 'Desert sand dunes slowly shift their position whenever strong winds blow.',
        synonyms: ['move', 'slide', 'change position'],
        collocations: ['shift position', 'slightly shift', 'shift direction'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-145',
        word: 'precision',
        partOfSpeech: 'noun',
        phonetic: '/prɪˈsɪʒn/',
        definition: 'Aniqlik, juda yuqori aniqlik — xatosiz va nihoyatda sinchkovlik bilan bajarilgan o‘lchov yoki ish.',
        contextSentence: 'Throughout history, observatories—including the famous fifteenth-century observatory of Ulugh Beg in Samarkand—measured the angles of stars with remarkable precision.',
        exampleSentence: 'Watchmakers assemble tiny gears with great precision.',
        synonyms: ['accuracy', 'exactness', 'care'],
        collocations: ['remarkable precision', 'great precision', 'measure with precision'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-58',
          targetWord: 'opposite',
          question: 'Why do astronomers take one photo of a star in January and another in July?',
          options: [
            'Because in six months the Earth moves to the opposite side of the Sun, giving two wide viewpoints',
            'Because stars only shine during January and July',
            'Because telescopes freeze during the spring and autumn months',
            'Because the Sun turns off for one week every July'
          ],
          correctIndex: 0,
          explanation: '"Opposite" means located across from something on the other side.'
        },
        {
          id: 'mc-b1-59',
          targetWord: 'precision',
          question: 'What was Ulugh Beg’s fifteenth-century observatory in Samarkand famous for?',
          options: [
            'Measuring the angles and positions of stars with remarkable precision (accuracy)',
            'Launching the first artificial satellite into orbit',
            'Building glass microscopes to study ocean bacteria',
            'Predicting volcanic eruptions in South America'
          ],
          correctIndex: 0,
          explanation: '"Precision" is the quality of being exact and accurate in measurement.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-58',
          sentenceWithBlank: 'Can you _____ how many hours it will take to drive 360 kilometers at 90 kilometers per hour?',
          targetWord: 'calculate',
          hint: 'Find the answer using numbers and math',
          options: ['calculate', 'absorb', 'confuse', 'evaporate']
        },
        {
          id: 'cl-b1-59',
          sentenceWithBlank: 'If you look closely at the painting, you can see a small sailboat in the _____.',
          targetWord: 'background',
          hint: 'The part of a picture behind the main objects',
          options: ['background', 'pavement', 'appliance', 'foundation']
        }
      ],
      matching: {
        id: 'mat-b1-29',
        instructions: 'Match each B1 astronomy and measurement word with its definition:',
        pairs: [
          { id: 'p-b1-113', term: 'calculate', match: 'work out a number or distance using mathematics' },
          { id: 'p-b1-114', term: 'background', match: 'the part of a view or scene behind the main objects' },
          { id: 'p-b1-115', term: 'shift', match: 'move slightly from one position to another' },
          { id: 'p-b1-116', term: 'precision', match: 'the quality of being exact and accurate' }
        ]
      }
    }
  },
  {
    id: 'b1-psychology-of-habit-stacking',
    title: 'Small Steps, Big Changes: How "Habit Stacking" Makes New Routines Stick',
    subtitle: 'Psychologists say the easiest way to build a new daily habit is to attach it to something you already do automatically.',
    level: 'B1',
    category: 'Psychology & Mind',
    readTime: '5 min read',
    readingTimeMinutes: 5,
    wordCount: 408,
    cefrSummary: 'Building daily study habits, behavioral psychology, and B1 self-improvement vocabulary.',
    themeColor: 'violet',
    gradientFrom: 'from-violet-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Linking five minutes of vocabulary review to your morning tea turns learning into an automatic daily routine.',
    paragraphs: [
      'At the start of a new year or school semester, many people set ambitious goals. Someone might promise to read for an hour every evening, exercise five times a week, or learn thirty new English words a day. Sadly, within two or three weeks, most of these big plans fade away when work gets busy or motivation drops.',
      'Behavioral psychologists explain that relying on willpower alone rarely works for long. Instead, the secret to lasting change is to start tiny and connect your new habit to an existing routine that you already do every day without thinking. Researchers call this simple method "habit stacking."',
      'Every morning and evening, your brain follows automatic chains of behavior, such as brushing your teeth, boiling water for tea, or putting on your shoes. To use habit stacking, you simply link a two-minute action to one of those solid anchors. For example: "After I pour my morning cup of tea, I will review five English flashcards in my notebook."',
      'Because the first action is already automatic, it acts as a natural reminder for the new behavior. Once a small habit becomes effortless, you can gradually increase the time you spend on it. Over a full year, five consistent minutes every single day achieves far more than an occasional burst of effort.'
    ],
    targetVocabulary: [
      {
        id: 'v-b1-146',
        word: 'ambitious',
        partOfSpeech: 'adjective',
        phonetic: '/æmˈbɪʃəs/',
        definition: 'Ulkan maqsadli, katta rejali — erishish uchun ko‘p kuch va mehnat talab qiladigan.',
        contextSentence: 'At the start of a new year or school semester, many people set ambitious goals.',
        exampleSentence: 'The city announced an ambitious plan to plant one million trees in five years.',
        synonyms: ['bold', 'challenging', 'grand'],
        collocations: ['ambitious goal', 'ambitious project', 'ambitious student'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-147',
        word: 'motivation',
        partOfSpeech: 'noun',
        phonetic: '/ˌməʊtɪˈveɪʃn/',
        definition: 'Motivatsiya, ishtiyoq — biror ishni bajarishga bo‘lgan ichki xohish va intilish.',
        contextSentence: 'Sadly, within two or three weeks, most of these big plans fade away when work gets busy or motivation drops.',
        exampleSentence: 'Studying with a friend helped keep his motivation high throughout the course.',
        synonyms: ['drive', 'enthusiasm', 'inspiration'],
        collocations: ['lose motivation', 'strong motivation', 'increase motivation'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-148',
        word: 'automatic',
        partOfSpeech: 'adjective',
        phonetic: '/ˌɔːtəˈmætɪk/',
        definition: 'Avtomatik, o‘z-o‘zidan bajariladigan — uzoq o‘ylanmasdan, odat bo‘lib qolgani uchun beixtiyor bajariladigan.',
        contextSentence: 'Every morning and evening, your brain follows automatic chains of behavior, such as brushing your teeth, boiling water for tea, or putting on your shoes.',
        exampleSentence: 'After years of practice, shifting gears in a car becomes completely automatic.',
        synonyms: ['habitual', 'natural', 'unconscious'],
        collocations: ['automatic habit', 'become automatic', 'automatic response'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-149',
        word: 'reminder',
        partOfSpeech: 'noun',
        phonetic: '/rɪˈmaɪndə(r)/',
        definition: 'Eslatma — bajarilishi kerak bo‘lgan ishni yodga soladigan xabar, belgi yoki hodisa.',
        contextSentence: 'Because the first action is already automatic, it acts as a natural reminder for the new behavior.',
        exampleSentence: 'She left her umbrella by the front door as a reminder to take it to work.',
        synonyms: ['prompt', 'cue', 'note'],
        collocations: ['natural reminder', 'helpful reminder', 'daily reminder'],
        cefrLevel: 'B1'
      },
      {
        id: 'v-b1-150',
        word: 'gradually',
        partOfSpeech: 'adverb',
        phonetic: '/ˈɡrædʒuəli/',
        definition: 'Asta-sekin, bosqichma-bosqich — birdaniga emas, vaqt o‘tishi bilan oz-ozdan o‘zgarib boradigan tarzda.',
        contextSentence: 'Once a small habit becomes effortless, you can gradually increase the time you spend on it.',
        exampleSentence: 'After recovering from his knee injury, the runner gradually increased his distance each week.',
        synonyms: ['step by step', 'little by little', 'slowly'],
        collocations: ['gradually increase', 'gradually improve', 'change gradually'],
        cefrLevel: 'B1'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b1-60',
          targetWord: 'reminder',
          question: 'How does "habit stacking" help you remember to do a new habit?',
          options: [
            'An existing daily action—like pouring morning tea—acts as a natural reminder to start the new habit',
            'You hire someone to call your phone every ten minutes',
            'You only practice the habit once a year on your birthday',
            'You wait until you have three free hours on the weekend'
          ],
          correctIndex: 0,
          explanation: 'A "reminder" is something that causes you to remember to do an action.'
        },
        {
          id: 'mc-b1-61',
          targetWord: 'gradually',
          question: 'What does the article recommend doing once a tiny two-minute habit becomes easy?',
          options: [
            'Gradually increase the time you spend on it step by step',
            'Stop doing the habit immediately',
            'Try to study for ten hours without sleeping',
            'Delete all the words from your vocabulary notebook'
          ],
          correctIndex: 0,
          explanation: '"Gradually" means slowly and steadily over a period of time.'
        }
      ],
      cloze: [
        {
          id: 'cl-b1-60',
          sentenceWithBlank: 'In spring, the days _____ become warmer and longer as summer approaches.',
          targetWord: 'gradually',
          hint: 'Slowly, little by little over time',
          options: ['gradually', 'temporarily', 'effortlessly', 'mistakenly']
        },
        {
          id: 'cl-b1-61',
          sentenceWithBlank: 'Setting clear weekly goals helped the team keep their _____ high all winter.',
          targetWord: 'motivation',
          hint: 'Eagerness and willingness to do something',
          options: ['motivation', 'precision', 'pavement', 'shortage']
        }
      ],
      matching: {
        id: 'mat-b1-30',
        instructions: 'Match each B1 habit and psychology word with its definition:',
        pairs: [
          { id: 'p-b1-117', term: 'ambitious', match: 'requiring a lot of effort and aiming for a big result' },
          { id: 'p-b1-118', term: 'motivation', match: 'the inner drive and enthusiasm to achieve a goal' },
          { id: 'p-b1-119', term: 'reminder', match: 'something that helps you remember to do a task' },
          { id: 'p-b1-120', term: 'gradually', match: 'slowly and step by step over a period of time' }
        ]
      }
    }
  }
];



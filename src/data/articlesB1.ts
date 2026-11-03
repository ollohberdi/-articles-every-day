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
        definition: 'Left behind and no longer used, cared for, or occupied by anyone.',
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
        definition: 'Closely and neatly packed together; taking up very little physical space.',
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
        definition: 'Extremely large in size, quantity, scale, or degree.',
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
        definition: 'To encourage the development or growth of ideas, relationships, or feelings.',
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
        definition: 'Extremely important or necessary for the success of something.',
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
        definition: 'Extreme tiredness or exhaustion resulting from mental or physical exertion.',
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
        definition: 'To interrupt the normal progress, order, or smooth operation of an activity or system.',
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
        definition: 'Always behaving or happening in a similar, reliable, or predictable way.',
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
        definition: 'To damage, weaken, or reduce the quality, strength, or ability of something.',
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
        definition: 'To relax and stop feeling tense or anxious after working hard.',
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
        definition: 'A person whose job is to buy and sell goods, especially in large quantities or between different countries.',
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
        definition: 'Full of busy, energetic activity and crowds of people moving around.',
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
        definition: 'To value something very highly because it is rare, useful, or beautiful.',
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
        definition: 'Unpleasantly rough, severe, or difficult to survive in, especially weather or living conditions.',
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
        definition: 'To mix two or more different things together so they combine into a harmonious whole.',
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
        definition: 'A large group of insects, birds, or animals of the same type living closely together.',
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
        definition: 'Without any definite plan, aim, or pattern; by chance.',
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
        definition: 'Exact, accurate, and clearly defined in every detail.',
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
        definition: 'The length of time that something lasts or continues.',
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
        definition: 'A pleasant natural smell produced by flowers, plants, or animals.',
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
        definition: 'To have enough money to buy or pay for something.',
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
        definition: 'Involving or causing a complete, dramatic change in the way things are done.',
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
        definition: 'To surprise or impress someone very greatly.',
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
        definition: 'The ability to read and write.',
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
        definition: 'Normal, everyday, and not special or belonging to a privileged elite.',
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
        definition: 'Relating to real situations and useful results rather than theories or ideas.',
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
        definition: 'Something that prevents someone from giving their full attention to what they are doing.',
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
        definition: 'To judge or calculate the quality, importance, or value of something carefully.',
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
        definition: 'A condition or circumstance that puts one in a favorable or superior position.',
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
        definition: 'Quick to notice, understand, or react to things; mentally alert and clear.',
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
        definition: 'Having very little or no rain; extremely dry so that few plants can grow.',
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
        definition: 'A situation in which there is not enough of something that people need.',
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
        definition: 'To take something away or separate it from where it was.',
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
        definition: 'To make water, air, or a substance clean and safe by removing dirty or harmful parts.',
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
        definition: 'Existing or available in large quantities; more than enough.',
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
        definition: 'Relating to the vitamins, minerals, and substances in food that keep the body healthy.',
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
        definition: 'To pick and collect crops or plants when they are fully grown and ready to eat.',
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
        definition: 'A long period of time when there is little or no rain, causing water shortages.',
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
        definition: 'A chemical substance used to kill insects and small animals that destroy crops.',
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
        definition: 'To provide people or organizations with something that they need or want.',
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
        definition: 'Made by humans rather than occurring naturally, often designed to copy something natural.',
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
        definition: 'To grow too big for clothes, shoes, or equipment as you get older.',
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
        definition: 'To hold onto something tightly and firmly with your hand.',
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
        definition: 'To change the way something looks or works so that it fits a specific person’s wishes.',
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
        definition: 'Feeling sure about your own abilities, appearance, or value; not shy or embarrassed.',
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
        definition: 'A mark, sign, or picture that represents an idea, sound, or object.',
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
        definition: 'An important discovery or development that helps solve a long-standing problem.',
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
        definition: 'To find something that was hidden or buried under the ground.',
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
        definition: 'To find the meaning of a secret message or an unfamiliar writing system.',
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
        definition: 'In a way that is wrong or based on an incorrect belief.',
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
        definition: 'The place to which someone or something is going or being sent.',
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
        definition: 'To depend on or trust someone or something to work properly.',
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
        definition: 'The line in the distance where the earth or sea seems to meet the sky.',
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
        definition: 'To notice or discover something that is faint, hidden, or difficult to perceive.',
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
        definition: 'A large, easily recognizable building or natural feature that helps you know where you are.',
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
        definition: 'Done with full awareness and deliberate thought rather than automatically.',
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
        definition: 'A regular, fixed way of doing things in everyday life.',
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
        definition: 'To cause a reaction, feeling, or automatic behavior to start.',
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
        definition: 'A strong sudden wish or impulse to do something.',
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
        definition: 'To fulfill a need, desire, or expectation so that nothing more is wanted.',
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
        definition: 'Far away from large towns, cities, or main roads; difficult to reach.',
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
        definition: 'To go bad, decay, or lose effectiveness (especially food or medicine).',
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
        definition: 'To send an aircraft, rocket, or new project into action for the first time.',
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
        definition: 'Automatically and independently, without a human pilot controlling every movement.',
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
        definition: 'To fill a battery with electrical energy again after it has been used.',
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
        definition: 'A safe place that protects people or animals from danger, predators, or bad weather.',
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
        definition: 'Not deep; having only a short distance from the water surface to the bottom.',
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
        definition: 'To continue to live or exist despite dangerous or difficult conditions.',
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
        definition: 'A small piece or part that has broken off from something larger.',
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
        definition: 'To fasten, join, or connect one thing firmly to another.',
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
        definition: 'A long journey, especially by ship across the sea or in space.',
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
        definition: 'Measuring only a small distance from one side to the other; not wide.',
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
        definition: 'Able to bend easily without breaking.',
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
        definition: 'To meet or experience something unexpected, especially a difficulty or danger.',
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
        definition: 'To change to the opposite direction or order.',
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
        definition: 'To shine with a steady, soft light in the dark.',
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
        definition: 'To pull someone or something closer by exciting interest or attention.',
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
        definition: 'Action or behavior used to protect oneself from attack or harm.',
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
        definition: 'To get away safely from danger or from a predator.',
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
        definition: 'Impossible to see with the eyes.',
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
        definition: 'Eager to know, learn, or discover the answer to something.',
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
        definition: 'In an easy way that requires very little hard work or struggle.',
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
        definition: 'Not interesting or exciting; boring.',
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
        definition: 'Enthusiasm and willingness to work hard or achieve a goal.',
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
        definition: 'Successful in producing the desired or intended result.',
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
        definition: 'Something you can choose or use instead of something else.',
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
        definition: 'One of the substances or parts that are combined to make something.',
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
        definition: 'Right or appropriate for a particular purpose, person, or situation.',
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
        definition: 'To become dangerously hot.',
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
        definition: 'Inexpensive and reasonably priced so that ordinary people can buy it.',
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
        definition: 'The main tune of a song or piece of music that you can hum or sing.',
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
        definition: 'To make different parts of the body or a group work together smoothly.',
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
        definition: 'To get better and return to normal health or strength after an illness or injury.',
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
        definition: 'Regular, even, and balanced; not shaking or changing suddenly.',
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
        definition: 'A feeling of worry, nervousness, or unease about something.',
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
        definition: 'Something that you buy, or the act of buying something.',
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
        definition: 'The quality of being easy, quick, and saving time or effort.',
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
        definition: 'To remove or get rid of something completely so it is no longer needed.',
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
        definition: 'For a limited period of time; not permanently.',
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
        definition: 'An extra plan, system, or supply kept ready in case the main one fails.',
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
  }
];


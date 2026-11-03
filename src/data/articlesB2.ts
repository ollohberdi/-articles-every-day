import { Article } from '../types';

export const B2_ARTICLES: Article[] = [
  {
    id: 'b2-roman-concrete-history',
    title: 'The Secret of Self-Healing Roman Concrete: Why Ancient Harbors Outlast Modern Bridges',
    subtitle: 'Chemists have finally discovered why two-thousand-year-old Roman sea walls grow stronger under crashing waves while modern steel-reinforced concrete crumbles within decades.',
    level: 'B2',
    category: 'History & Civilizations',
    readTime: '6 min read',
    wordCount: 540,
    cefrSummary: 'Uses passive constructions, cause-and-effect clauses, and upper-intermediate scientific and historical vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-800',
    gradientTo: 'to-stone-900',
    paragraphs: [
      'Walk along the Italian coastline today and you can still see massive concrete harbors built during the reign of Roman emperors two millennia ago. Despite being battered relentlessly by saltwater waves, these ancient structures remain remarkably intact. By contrast, modern Portland cement structures exposed to marine environments often begin to deteriorate within fifty years because seawater corrodes their internal steel reinforcement.',
      'For decades, engineers assumed that Roman concrete survived simply because ancient builders mixed volcanic ash from Pozzuoli with lime and rubble. However, high-resolution electron microscopy recently revealed a second, crucial technique that historians had overlooked. Rather than slaking their lime with water ahead of time, Roman masons mixed quicklime directly with volcanic ash at extreme temperatures—a process known as "hot mixing."',
      'This hot-mixing method left tiny, brittle white chunks of calcium—called lime clasts—embedded throughout the finished walls. Previously, modern researchers dismissed these white fragments as evidence of sloppy mixing or poor quality control. In reality, those microscopic pockets of reactive calcium serve as a built-in reservoir for self-repair.',
      'Whenever tiny cracks inevitably form inside the concrete, rainwater or seawater seeps into the fissures and dissolves the calcium-rich clasts. The resulting chemical solution recrystallizes along the crack, sealing the gap before the damage can spread or compromise the structure. When MIT researchers replicated this ancient recipe in the laboratory, their concrete samples healed half-millimeter cracks completely within two weeks.',
      'Adopting Roman chemistry could have profound implications for contemporary construction. Cement manufacturing currently accounts for roughly eight percent of global carbon dioxide emissions. Extending the lifespan of bridges, sea walls, and highways by adopting self-healing mineral formulas would dramatically reduce the need for frequent demolition and reconstruction.'
    ],
    targetVocabulary: [
      {
        id: 'b2-rc-1',
        word: 'intact',
        phonetic: '/ɪnˈtækt/',
        partOfSpeech: 'adjective',
        definition: 'Complete and in its original state; not damaged or broken.',
        cefrLevel: 'B2',
        exampleSentence: 'Despite being battered relentlessly by saltwater waves, these ancient structures remain remarkably intact.',
        collocations: ['remain intact', 'survive intact', 'keep intact'],
        synonyms: ['undamaged', 'whole', 'unbroken'],
        antonyms: ['ruined', 'damaged']
      },
      {
        id: 'b2-rc-2',
        word: 'deteriorate',
        phonetic: '/dɪˈtɪəriəreɪt/',
        partOfSpeech: 'verb',
        definition: 'To become progressively worse or weaker over time.',
        cefrLevel: 'B2',
        exampleSentence: 'Modern concrete structures exposed to marine environments often begin to deteriorate within fifty years.',
        collocations: ['rapidly deteriorate', 'begin to deteriorate', 'deteriorating condition'],
        synonyms: ['degrade', 'decay', 'decline'],
        antonyms: ['improve', 'strengthen']
      },
      {
        id: 'b2-rc-3',
        word: 'overlook',
        phonetic: '/ˌəʊvəˈlʊk/',
        partOfSpeech: 'verb',
        definition: 'To fail to notice or consider something important.',
        cefrLevel: 'B2',
        exampleSentence: 'High-resolution microscopy recently revealed a crucial technique that historians had overlooked.',
        collocations: ['easily overlooked', 'overlook a detail', 'tend to overlook'],
        synonyms: ['miss', 'neglect', 'disregard'],
        antonyms: ['notice', 'recognize']
      },
      {
        id: 'b2-rc-4',
        word: 'dismiss',
        phonetic: '/dɪsˈmɪs/',
        partOfSpeech: 'verb',
        definition: 'To treat an idea or observation as unworthy of serious consideration.',
        cefrLevel: 'B2',
        exampleSentence: 'Modern researchers dismissed these white fragments as evidence of sloppy mixing.',
        collocations: ['dismiss as', 'quickly dismiss', 'dismiss the idea'],
        synonyms: ['reject', 'discount', 'brush aside'],
        antonyms: ['accept', 'embrace']
      },
      {
        id: 'b2-rc-5',
        word: 'compromise',
        phonetic: '/ˈkɒmprəmaɪz/',
        partOfSpeech: 'verb',
        definition: 'To weaken, harm, or expose something to danger.',
        cefrLevel: 'B2',
        exampleSentence: 'The chemical solution seals the gap before the damage can spread or compromise the structure.',
        collocations: ['compromise safety', 'compromise the structure', 'severely compromised'],
        synonyms: ['weaken', 'undermine', 'jeopardize'],
        antonyms: ['protect', 'reinforce']
      },
      {
        id: 'b2-rc-6',
        word: 'implication',
        phonetic: '/ˌɪmplɪˈkeɪʃn/',
        partOfSpeech: 'noun',
        definition: 'A possible future effect or result of an action or discovery.',
        cefrLevel: 'B2',
        exampleSentence: 'Adopting Roman chemistry could have profound implications for contemporary construction.',
        collocations: ['profound implications', 'practical implications', 'far-reaching implications'],
        synonyms: ['consequence', 'ramification', 'outcome']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-rc-1',
          targetWord: 'dismiss',
          question: 'Why did earlier scientists "dismiss" the white calcium chunks inside Roman concrete?',
          options: [
            'They assumed the chunks were merely a sign of careless mixing rather than a deliberate feature.',
            'They proved the chunks were added during twentieth-century restorations.',
            'They believed the chunks made the concrete too heavy to transport.'
          ],
          correctIndex: 0,
          explanation: '"Dismiss as" means to reject something as unimportant or mistaken.'
        },
        {
          id: 'mc-b2-rc-2',
          targetWord: 'compromise',
          question: 'In the sentence "sealing the gap before the damage can compromise the structure," what does "compromise" mean?',
          options: [
            'Reach a polite agreement between two builders',
            'Weaken or threaten the stability of the wall',
            'Measure the exact height of the harbor'
          ],
          correctIndex: 1,
          explanation: 'When used with safety, health, or structures, "compromise" means to weaken or endanger.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-rc-1',
          sentenceWithBlank: 'Without regular maintenance, the wooden bridge began to _____ in the damp climate.',
          targetWord: 'deteriorate',
          hint: 'To become progressively worse or decay',
          options: ['deteriorate', 'overlook', 'dismiss', 'intact']
        },
        {
          id: 'cl-b2-rc-2',
          sentenceWithBlank: 'Amazingly, the pottery jars inside the sunken ship were found completely _____.',
          targetWord: 'intact',
          hint: 'Undamaged and whole',
          options: ['intact', 'compromised', 'overlooked', 'dismissed']
        }
      ],
      matching: {
        id: 'ma-b2-rc-1',
        instructions: 'Match each B2 vocabulary word with its definition.',
        pairs: [
          { id: 'p1', term: 'intact', match: 'Complete and undamaged' },
          { id: 'p2', term: 'deteriorate', match: 'Become progressively worse over time' },
          { id: 'p3', term: 'overlook', match: 'Fail to notice something important' },
          { id: 'p4', term: 'implication', match: 'A likely future consequence or effect' }
        ]
      }
    }
  },
  {
    id: 'b2-deep-sea-vents',
    title: 'Life in the Pitch-Black Ocean: How Deep-Sea Hydrothermal Vents Changed Biology',
    subtitle: 'Two miles beneath the ocean surface, boiling mineral chimneys support thriving ecosystems that do not rely on sunlight at all.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Features complex relative clauses, scientific process explanations, and upper-intermediate academic vocabulary.',
    themeColor: 'cyan',
    gradientFrom: 'from-cyan-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Until the late 1970s, textbooks stated with absolute certainty that all complex life on Earth depended on sunlight. Plants and algae capture solar energy through photosynthesis, forming the foundation of every food chain—or so biologists believed. The deep ocean floor, shrouded in perpetual darkness and crushing pressure, was assumed to be a mostly barren desert populated only by scavengers feeding on organic debris drifting down from above.',
      'That assumption was shattered in 1977 when geologists aboard the submersible Alvin explored the Galápagos Rift, more than two thousand meters below the Pacific surface. Expecting lifeless volcanic rock, the crew instead encountered towering mineral chimneys spewing superheated, mineral-rich black water. Clustering around these hydrothermal vents were dense colonies of giant red-plumed tube worms, blind white crabs, and ghostly vent fish.',
      'How could such an abundant ecosystem thrive without a single ray of sunlight? Subsequent analysis revealed that the base of the food web consisted of specialized bacteria capable of chemosynthesis. Instead of using light, these microbes extract energy by oxidizing hydrogen sulfide—a compound that is highly toxic to most surface organisms—and converting dissolved carbon into organic nutrients.',
      'The giant tube worms, which lack mouths and digestive tracts altogether, survive through an extraordinary symbiotic relationship with these bacteria. Billions of chemosynthetic microbes live inside a specialized organ within the worm, manufacturing food in exchange for shelter and a steady supply of oxygen and sulfide from the worm’s bright red gills.',
      'Beyond transforming marine biology, the discovery of hydrothermal vents reshaped planetary science. Astrobiologists now view icy moons such as Jupiter’s Europa and Saturn’s Enceladus—both of which harbor subsurface oceans heated by tidal friction—as prime candidates for extraterrestrial life.'
    ],
    targetVocabulary: [
      {
        id: 'b2-dv-1',
        word: 'perpetual',
        phonetic: '/pəˈpetʃuəl/',
        partOfSpeech: 'adjective',
        definition: 'Continuing forever or for a very long time without stopping.',
        cefrLevel: 'B2',
        exampleSentence: 'The deep ocean floor, shrouded in perpetual darkness, was assumed to be a barren desert.',
        collocations: ['perpetual darkness', 'perpetual motion', 'in a state of perpetual'],
        synonyms: ['unending', 'continuous', 'constant'],
        antonyms: ['temporary', 'brief']
      },
      {
        id: 'b2-dv-2',
        word: 'barren',
        phonetic: '/ˈbærən/',
        partOfSpeech: 'adjective',
        definition: 'Unable to support vegetation or abundant life; empty and lifeless.',
        cefrLevel: 'B2',
        exampleSentence: 'The deep ocean floor was assumed to be a mostly barren desert.',
        collocations: ['barren landscape', 'barren desert', 'barren rock'],
        synonyms: ['lifeless', 'desolate', 'sterile'],
        antonyms: ['fertile', 'lush']
      },
      {
        id: 'b2-dv-3',
        word: 'abundant',
        phonetic: '/əˈbʌndənt/',
        partOfSpeech: 'adjective',
        definition: 'Existing or available in large quantities; plentiful.',
        cefrLevel: 'B2',
        exampleSentence: 'How could such an abundant ecosystem thrive without a single ray of sunlight?',
        collocations: ['abundant supply', 'abundant wildlife', 'abundant evidence'],
        synonyms: ['plentiful', 'rich', 'copious'],
        antonyms: ['scarce', 'sparse']
      },
      {
        id: 'b2-dv-4',
        word: 'subsequent',
        phonetic: '/ˈsʌbsɪkwənt/',
        partOfSpeech: 'adjective',
        definition: 'Happening or coming after something else.',
        cefrLevel: 'B2',
        exampleSentence: 'Subsequent analysis revealed that the base of the food web consisted of specialized bacteria.',
        collocations: ['subsequent events', 'subsequent analysis', 'in subsequent years'],
        synonyms: ['following', 'later', 'ensuing'],
        antonyms: ['previous', 'prior']
      },
      {
        id: 'b2-dv-5',
        word: 'toxic',
        phonetic: '/ˈtɒksɪk/',
        partOfSpeech: 'adjective',
        definition: 'Poisonous and capable of causing severe harm or death.',
        cefrLevel: 'B2',
        exampleSentence: 'These microbes extract energy from hydrogen sulfide—a compound that is highly toxic to most surface organisms.',
        collocations: ['highly toxic', 'toxic chemicals', 'toxic fumes'],
        synonyms: ['poisonous', 'venomous', 'hazardous'],
        antonyms: ['harmless', 'non-toxic']
      },
      {
        id: 'b2-dv-6',
        word: 'harbor',
        phonetic: '/ˈhɑːbə(r)/',
        partOfSpeech: 'verb',
        definition: 'To contain or provide a home or shelter for something.',
        cefrLevel: 'B2',
        exampleSentence: 'Icy moons such as Europa and Enceladus harbor subsurface oceans heated by tidal friction.',
        collocations: ['harbor life', 'harbor doubts', 'harbor subsurface oceans'],
        synonyms: ['contain', 'shelter', 'host']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-dv-1',
          targetWord: 'barren',
          question: 'Why did biologists once think the deep ocean floor was "barren"?',
          options: [
            'Because no sunlight reaches that depth to power photosynthesis.',
            'Because underwater volcanoes boiled away all the seawater.',
            'Because fishing nets had removed all the fish.'
          ],
          correctIndex: 0,
          explanation: '"Barren" means lifeless or unable to support much life.'
        },
        {
          id: 'mc-b2-dv-2',
          targetWord: 'subsequent',
          question: 'What does "subsequent analysis" mean in the article?',
          options: [
            'Research conducted before the submarine dive took place',
            'Scientific testing carried out after the initial discovery',
            'An analysis that failed to produce any clear results'
          ],
          correctIndex: 1,
          explanation: '"Subsequent" means occurring or coming after a previous event.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-dv-1',
          sentenceWithBlank: 'Cave-dwelling fish evolve in _____ darkness and often lose their eyesight completely.',
          targetWord: 'perpetual',
          hint: 'Unending or constant',
          options: ['perpetual', 'subsequent', 'abundant', 'toxic']
        },
        {
          id: 'cl-b2-dv-2',
          sentenceWithBlank: 'Astronomers are searching for exoplanets that might _____ liquid water on their surfaces.',
          targetWord: 'harbor',
          hint: 'Contain or provide a home for',
          options: ['harbor', 'deteriorate', 'dismiss', 'overlook']
        }
      ],
      matching: {
        id: 'ma-b2-dv-1',
        instructions: 'Match each vocabulary word with its meaning.',
        pairs: [
          { id: 'p1', term: 'perpetual', match: 'Continuing forever without stopping' },
          { id: 'p2', term: 'barren', match: 'Lifeless and unable to support vegetation' },
          { id: 'p3', term: 'abundant', match: 'Existing in large, plentiful quantities' },
          { id: 'p4', term: 'subsequent', match: 'Happening after a previous event' }
        ]
      }
    }
  },
  {
    id: 'b2-confirmation-bias',
    title: 'Echo Chambers and Confirmation Bias: Why We Prefer Comforting Myths to Hard Facts',
    subtitle: 'Cognitive psychologists explain why intelligent people instinctively filter out evidence that challenges their existing beliefs.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '6 min read',
    wordCount: 525,
    cefrSummary: 'Explores psychological mechanisms using contrast connectors, abstract nouns, and B2 analytical verbs.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-800',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Most of us like to imagine that we form our opinions like impartial judges: we gather the available facts, weigh both sides of an argument, and arrive at a logical conclusion. Decades of experimental psychology, however, tell a very different story. In practice, the human mind behaves far more like a defense lawyer whose primary goal is to protect a verdict that has already been reached.',
      'This mental shortcut is known as confirmation bias—the tendency to search for, interpret, and recall information in a way that reinforces our preexisting beliefs. When people encounter a scientific study that supports their viewpoint, they usually accept its methodology at face value. Yet when presented with equally rigorous research that contradicts their stance, they scrutinize every footnote in search of a flaw.',
      'Evolutionary psychologists suggest that confirmation bias was not a design flaw in early human cognition. Living in small hunter-gatherer bands, our ancestors depended on social cohesion for survival. Being cast out of the tribe was far more dangerous than holding an inaccurate belief about the natural world, so human reasoning evolved to win arguments and signal loyalty to the group.',
      'In the digital era, however, recommendation algorithms amplify this ancient instinct to dangerous levels. Social media platforms quickly learn which headlines provoke engagement and surround users with like-minded voices—creating digital echo chambers where dissenting perspectives rarely penetrate.',
      'Overcoming confirmation bias requires deliberate intellectual humility. Psychologists recommend a technique called "considering the opposite": actively listing the strongest possible arguments against your own position and asking what specific evidence would compel you to change your mind.'
    ],
    targetVocabulary: [
      {
        id: 'b2-cb-1',
        word: 'impartial',
        phonetic: '/ɪmˈpɑːʃl/',
        partOfSpeech: 'adjective',
        definition: 'Treating all rivals or disputants equally; fair and unbiased.',
        cefrLevel: 'B2',
        exampleSentence: 'Most of us like to imagine that we form our opinions like impartial judges.',
        collocations: ['impartial judge', 'impartial advice', 'remain impartial'],
        synonyms: ['unbiased', 'neutral', 'objective'],
        antonyms: ['biased', 'prejudiced']
      },
      {
        id: 'b2-cb-2',
        word: 'reinforce',
        phonetic: '/ˌriːɪnˈfɔːs/',
        partOfSpeech: 'verb',
        definition: 'To strengthen or support an existing feeling, idea, or structure.',
        cefrLevel: 'B2',
        exampleSentence: 'Confirmation bias is the tendency to recall information in a way that reinforces our preexisting beliefs.',
        collocations: ['reinforce beliefs', 'reinforce a stereotype', 'mutually reinforcing'],
        synonyms: ['strengthen', 'bolster', 'fortify'],
        antonyms: ['undermine', 'weaken']
      },
      {
        id: 'b2-cb-3',
        word: 'contradict',
        phonetic: '/ˌkɒntrəˈdɪkt/',
        partOfSpeech: 'verb',
        definition: 'To assert the opposite of a statement or be in conflict with existing evidence.',
        cefrLevel: 'B2',
        exampleSentence: 'When presented with rigorous research that contradicts their stance, they scrutinize every footnote.',
        collocations: ['directly contradict', 'contradict the evidence', 'contradict oneself'],
        synonyms: ['conflict with', 'challenge', 'refute'],
        antonyms: ['confirm', 'corroborate']
      },
      {
        id: 'b2-cb-4',
        word: 'scrutinize',
        phonetic: '/ˈskruːtənaɪz/',
        partOfSpeech: 'verb',
        definition: 'To examine or inspect something very closely and critically.',
        cefrLevel: 'B2',
        exampleSentence: 'They scrutinize every footnote in search of a flaw.',
        collocations: ['closely scrutinize', 'scrutinize the data', 'carefully scrutinized'],
        synonyms: ['inspect', 'examine', 'analyze'],
        antonyms: ['glance at', 'skim']
      },
      {
        id: 'b2-cb-5',
        word: 'amplify',
        phonetic: '/ˈæmplɪfaɪ/',
        partOfSpeech: 'verb',
        definition: 'To increase the strength, intensity, or impact of something.',
        cefrLevel: 'B2',
        exampleSentence: 'In the digital era, recommendation algorithms amplify this ancient instinct.',
        collocations: ['amplify the effect', 'amplify voices', 'further amplify'],
        synonyms: ['magnify', 'intensify', 'heighten'],
        antonyms: ['dampen', 'reduce']
      },
      {
        id: 'b2-cb-6',
        word: 'compel',
        phonetic: '/kəmˈpel/',
        partOfSpeech: 'verb',
        definition: 'To force or strongly persuade someone to do something.',
        cefrLevel: 'B2',
        exampleSentence: 'Ask what specific evidence would compel you to change your mind.',
        collocations: ['compel someone to', 'feel compelled', 'legally compelled'],
        synonyms: ['force', 'oblige', 'drive']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-cb-1',
          targetWord: 'impartial',
          question: 'What does it mean to act like an "impartial judge"?',
          options: [
            'To evaluate evidence fairly without favoring one side in advance',
            'To make a decision as quickly as possible without reading reports',
            'To defend your friends regardless of the facts'
          ],
          correctIndex: 0,
          explanation: '"Impartial" means fair, neutral, and free from bias.'
        },
        {
          id: 'mc-b2-cb-2',
          targetWord: 'scrutinize',
          question: 'How do people react when a study "contradicts" their beliefs?',
          options: [
            'They immediately share it on social media.',
            'They scrutinize it closely to find weaknesses in its methods.',
            'They accept its conclusions without question.'
          ],
          correctIndex: 1,
          explanation: 'To "scrutinize" means to inspect critically and in great detail.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-cb-1',
          sentenceWithBlank: 'The witness’s second statement seemed to _____ what she had told the police earlier.',
          targetWord: 'contradict',
          hint: 'Conflict with or say the opposite of',
          options: ['contradict', 'reinforce', 'amplify', 'compel']
        },
        {
          id: 'cl-b2-cb-2',
          sentenceWithBlank: 'Social media algorithms often _____ emotional headlines because outrage keeps users scrolling.',
          targetWord: 'amplify',
          hint: 'Increase the strength or reach of',
          options: ['amplify', 'scrutinize', 'contradict', 'impartial']
        }
      ],
      matching: {
        id: 'ma-b2-cb-1',
        instructions: 'Match each B2 psychology term with its definition.',
        pairs: [
          { id: 'p1', term: 'impartial', match: 'Fair, neutral, and unbiased' },
          { id: 'p2', term: 'reinforce', match: 'Strengthen an existing idea or belief' },
          { id: 'p3', term: 'scrutinize', match: 'Examine critically and in detail' },
          { id: 'p4', term: 'compel', match: 'Strongly persuade or force someone to act' }
        ]
      }
    }
  },
  {
    id: 'b2-renewable-grid-storage',
    title: 'Solving the Intermittency Problem: Gravity Batteries and the Future Energy Grid',
    subtitle: 'Because the sun does not always shine and the wind does not always blow, engineers are turning to abandoned mine shafts and molten salt to store clean power.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '6 min read',
    wordCount: 535,
    cefrSummary: 'Presents technical problems and engineering solutions using B2 cause-and-effect structures.',
    themeColor: 'purple',
    gradientFrom: 'from-purple-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Over the past decade, the cost of generating electricity from solar panels and wind turbines has plummeted, making renewable energy cheaper than coal or natural gas in most parts of the world. Yet transitioning to a fully decarbonized grid faces a stubborn obstacle known as intermittency: solar output peaks at midday and drops to zero at night, while wind speeds fluctuate unpredictably from week to week.',
      'When renewable generation exceeds immediate household demand, grid operators are sometimes forced to curtail production—essentially switching off wind turbines so the electrical grid does not overload. Conversely, during calm winter evenings when heating demand surges, utilities often fire up fossil-fuel power plants to prevent blackouts.',
      'Lithium-ion battery farms can smooth out short-term fluctuations lasting a few hours, but they remain expensive to manufacture at the massive scale required for multi-day storage. Moreover, mining lithium, cobalt, and nickel raises significant environmental and supply-chain concerns.',
      'To overcome these limitations, engineers are reviving a remarkably simple physical principle: gravity. Pumped-storage hydropower—which uses surplus electricity to pump water uphill into a mountain reservoir and releases it through turbines when power is needed—already accounts for over ninety percent of global grid storage. Where mountains and water are scarce, startups are now winching massive multi-ton concrete blocks up tall towers or down decommissioned mine shafts.',
      'Alongside gravity systems, thermal batteries are gaining traction. By using excess solar electricity to heat insulated tanks of molten salt or crushed volcanic rock to over a thousand degrees Celsius, utilities can store vast quantities of energy for days and convert that heat back into steam-driven electricity whenever demand peaks.'
    ],
    targetVocabulary: [
      {
        id: 'b2-rg-1',
        word: 'plummet',
        phonetic: '/ˈplʌmɪt/',
        partOfSpeech: 'verb',
        definition: 'To fall or drop straight down at high speed and by a large amount.',
        cefrLevel: 'B2',
        exampleSentence: 'Over the past decade, the cost of generating electricity from solar panels has plummeted.',
        collocations: ['prices plummeted', 'plummet to record lows', 'sharply plummet'],
        synonyms: ['plunge', 'tumble', 'nosedive'],
        antonyms: ['soar', 'surge']
      },
      {
        id: 'b2-rg-2',
        word: 'fluctuate',
        phonetic: '/ˈflʌktʃueɪt/',
        partOfSpeech: 'verb',
        definition: 'To rise and fall irregularly in number, amount, or intensity.',
        cefrLevel: 'B2',
        exampleSentence: 'Wind speeds fluctuate unpredictably from week to week.',
        collocations: ['fluctuate wildly', 'fluctuate between', 'seasonal fluctuations'],
        synonyms: ['vary', 'oscillate', 'shift'],
        antonyms: ['stabilize', 'remain steady']
      },
      {
        id: 'b2-rg-3',
        word: 'exceed',
        phonetic: '/ɪkˈsiːd/',
        partOfSpeech: 'verb',
        definition: 'To be greater in number, size, or amount than something else.',
        cefrLevel: 'B2',
        exampleSentence: 'When renewable generation exceeds immediate household demand, grid operators must store the surplus.',
        collocations: ['exceed expectations', 'exceed demand', 'far exceed'],
        synonyms: ['surpass', 'outstrip', 'top'],
        antonyms: ['fall short of', 'lag behind']
      },
      {
        id: 'b2-rg-4',
        word: 'surge',
        phonetic: '/sɜːdʒ/',
        partOfSpeech: 'verb',
        definition: 'To increase suddenly and powerfully.',
        cefrLevel: 'B2',
        exampleSentence: 'During calm winter evenings when heating demand surges, utilities need reliable backup power.',
        collocations: ['demand surges', 'prices surge', 'sudden surge'],
        synonyms: ['soar', 'spike', 'escalate'],
        antonyms: ['plummet', 'drop']
      },
      {
        id: 'b2-rg-5',
        word: 'surplus',
        phonetic: '/ˈsɜːpləs/',
        partOfSpeech: 'noun',
        definition: 'An amount of something left over when requirements have been met; an excess.',
        cefrLevel: 'B2',
        exampleSentence: 'Pumped-storage hydropower uses surplus electricity to pump water uphill into a reservoir.',
        collocations: ['surplus electricity', 'trade surplus', 'energy surplus'],
        synonyms: ['excess', 'oversupply', 'remainder'],
        antonyms: ['shortage', 'deficit']
      },
      {
        id: 'b2-rg-6',
        word: 'scarce',
        phonetic: '/skeəs/',
        partOfSpeech: 'adjective',
        definition: 'Insufficient for the demand; hard to find or in short supply.',
        cefrLevel: 'B2',
        exampleSentence: 'Where mountains and water are scarce, startups are winching concrete blocks down mine shafts.',
        collocations: ['scarce resources', 'increasingly scarce', 'water is scarce'],
        synonyms: ['rare', 'limited', 'sparse'],
        antonyms: ['abundant', 'plentiful']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-rg-1',
          targetWord: 'fluctuate',
          question: 'Why does wind energy require grid storage?',
          options: [
            'Because wind speeds fluctuate unpredictably rather than staying constant.',
            'Because wind turbines only operate during summer afternoons.',
            'Because wind electricity cannot travel through copper wires.'
          ],
          correctIndex: 0,
          explanation: '"Fluctuate" means to rise and fall irregularly.'
        },
        {
          id: 'mc-b2-rg-2',
          targetWord: 'surplus',
          question: 'What is "surplus electricity"?',
          options: [
            'Electricity generated by burning coal during a power outage',
            'Extra electricity left over after current household and industrial demand is met',
            'Electricity that is lost as heat inside old transformers'
          ],
          correctIndex: 1,
          explanation: 'A "surplus" is an excess amount remaining after current needs are satisfied.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-rg-1',
          sentenceWithBlank: 'Thanks to factory automation, the price of solar panels has _____ by more than eighty percent.',
          targetWord: 'plummeted',
          hint: 'Fallen sharply (past participle of plummet)',
          options: ['plummeted', 'surged', 'fluctuated', 'exceeded']
        },
        {
          id: 'cl-b2-rg-2',
          sentenceWithBlank: 'In desert regions where freshwater is _____, cities rely on desalination plants.',
          targetWord: 'scarce',
          hint: 'In short supply; hard to find',
          options: ['scarce', 'surplus', 'abundant', 'intact']
        }
      ],
      matching: {
        id: 'ma-b2-rg-1',
        instructions: 'Match each energy and economics term with its definition.',
        pairs: [
          { id: 'p1', term: 'plummet', match: 'Fall or drop sharply and rapidly' },
          { id: 'p2', term: 'fluctuate', match: 'Rise and fall irregularly' },
          { id: 'p3', term: 'surge', match: 'Increase suddenly and powerfully' },
          { id: 'p4', term: 'surplus', match: 'An extra amount left over after needs are met' }
        ]
      }
    }
  },
  {
    id: 'b2-rewilding-ecosystems',
    title: 'Trophic Cascades: How Reintroducing Wolves Reshaped Yellowstone’s Rivers',
    subtitle: 'When apex predators return to a damaged landscape, they trigger a chain reaction that restores forests, wetlands, and even riverbanks.',
    level: 'B2',
    category: 'Environment',
    readTime: '6 min read',
    wordCount: 520,
    cefrSummary: 'Uses ecological cause-and-effect chains, participle clauses, and B2 environmental vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-800',
    gradientTo: 'to-teal-950',
    paragraphs: [
      'When gray wolves were eradicated from Yellowstone National Park in the 1920s, park managers believed they were protecting prized elk herds and neighbouring cattle ranches. Over the following seven decades, however, the absence of an apex predator set off a slow ecological unraveling. Without wolves to hunt them, elk populations multiplied rapidly and lingered all winter along river valleys, browsing young willow, aspen, and cottonwood shoots down to bare soil.',
      'As streamside trees disappeared, songbirds lost their nesting habitat and beaver colonies vanished because they lacked willow branches to build dams. Without beaver ponds to slow seasonal snowmelt, rivers cut deeper, straighter channels and eroded their banks, turning lush floodplains into dry grassland.',
      'In 1995, conservation biologists took the bold step of reintroducing forty-one wild wolves from Canada back into Yellowstone. What followed became a classic textbook example of a "trophic cascade"—an ecological chain reaction that ripples downward from the top of the food chain.',
      'Not only did the wolves reduce the oversized elk population, they fundamentally altered elk behavior. Recognizing that narrow river gorges were ambush zones, herds began avoiding valley bottoms and stayed on the move. Freed from constant grazing pressure, willow and aspen groves regenerated along the streambanks within a decade.',
      'As the trees recovered, beavers returned to construct dams that created calm marshlands for otters, amphibians, and juvenile trout. Meanwhile, tangled tree roots stabilized the soil and reduced riverbank erosion. Yellowstone demonstrated that apex predators are keystone species whose presence maintains the balance of an entire landscape.'
    ],
    targetVocabulary: [
      {
        id: 'b2-rw-1',
        word: 'eradicate',
        phonetic: '/ɪˈrædɪkeɪt/',
        partOfSpeech: 'verb',
        definition: 'To destroy or get rid of something completely.',
        cefrLevel: 'B2',
        exampleSentence: 'When gray wolves were eradicated from Yellowstone in the 1920s, managers thought they were protecting elk.',
        collocations: ['completely eradicate', 'eradicate a disease', 'eradicate predators'],
        synonyms: ['eliminate', 'wipe out', 'exterminate'],
        antonyms: ['reintroduce', 'preserve']
      },
      {
        id: 'b2-rw-2',
        word: 'linger',
        phonetic: '/ˈlɪŋɡə(r)/',
        partOfSpeech: 'verb',
        definition: 'To stay in a place longer than necessary or expected.',
        cefrLevel: 'B2',
        exampleSentence: 'Elk populations multiplied and lingered all winter along river valleys.',
        collocations: ['linger in the valley', 'lingering effect', 'linger longer'],
        synonyms: ['remain', 'loiter', 'stay'],
        antonyms: ['depart', 'flee']
      },
      {
        id: 'b2-rw-3',
        word: 'erode',
        phonetic: '/ɪˈrəʊd/',
        partOfSpeech: 'verb',
        definition: 'To gradually wear away soil, rock, or confidence through wind, water, or pressure.',
        cefrLevel: 'B2',
        exampleSentence: 'Without beaver ponds to slow snowmelt, rivers cut deeper channels and eroded their banks.',
        collocations: ['erode riverbanks', 'soil erosion', 'gradually erode'],
        synonyms: ['wear away', 'wash away', 'undermine'],
        antonyms: ['stabilize', 'build up']
      },
      {
        id: 'b2-rw-4',
        word: 'alter',
        phonetic: '/ˈɔːltə(r)/',
        partOfSpeech: 'verb',
        definition: 'To change the character, appearance, or behavior of something.',
        cefrLevel: 'B2',
        exampleSentence: 'Not only did the wolves reduce the elk population, they fundamentally altered elk behavior.',
        collocations: ['fundamentally alter', 'alter behavior', 'alter the course'],
        synonyms: ['modify', 'transform', 'shift'],
        antonyms: ['preserve', 'maintain']
      },
      {
        id: 'b2-rw-5',
        word: 'regenerate',
        phonetic: '/rɪˈdʒenəreɪt/',
        partOfSpeech: 'verb',
        definition: 'To grow back or be restored to a healthy state after damage.',
        cefrLevel: 'B2',
        exampleSentence: 'Freed from constant grazing pressure, willow and aspen groves regenerated along the streambanks.',
        collocations: ['naturally regenerate', 'regenerate forests', 'tissue regeneration'],
        synonyms: ['recover', 'regrow', 'revive'],
        antonyms: ['degrade', 'wither']
      },
      {
        id: 'b2-rw-6',
        word: 'stabilize',
        phonetic: '/ˈsteɪbəlaɪz/',
        partOfSpeech: 'verb',
        definition: 'To make or become steady, firm, and unlikely to change or collapse.',
        cefrLevel: 'B2',
        exampleSentence: 'Tangled tree roots stabilized the soil and reduced riverbank erosion.',
        collocations: ['stabilize the soil', 'stabilize the economy', 'help stabilize'],
        synonyms: ['steady', 'secure', 'anchor'],
        antonyms: ['destabilize', 'erode']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-rw-1',
          targetWord: 'eradicate',
          question: 'What happened to Yellowstone’s gray wolves in the 1920s?',
          options: [
            'They were eradicated—completely wiped out from the park.',
            'They migrated south to Mexico for warmer winters.',
            'They learned to eat willow branches instead of elk.'
          ],
          correctIndex: 0,
          explanation: '"Eradicate" means to eliminate or wipe out completely.'
        },
        {
          id: 'mc-b2-rw-2',
          targetWord: 'stabilize',
          question: 'How did regrowing willow and aspen trees affect the rivers?',
          options: [
            'Their roots stabilized the soil and prevented the riverbanks from washing away.',
            'Their leaves blocked all sunlight from reaching the trout.',
            'They caused the rivers to dry up during summer.'
          ],
          correctIndex: 0,
          explanation: 'To "stabilize" soil means to hold it firmly in place so it does not erode.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-rw-1',
          sentenceWithBlank: 'Global vaccination campaigns successfully _____ smallpox in the twentieth century.',
          targetWord: 'eradicated',
          hint: 'Wiped out completely (past tense)',
          options: ['eradicated', 'regenerated', 'lingered', 'eroded']
        },
        {
          id: 'cl-b2-rw-2',
          sentenceWithBlank: 'Once cattle were fenced away from the hillside, native wildflowers began to _____.',
          targetWord: 'regenerate',
          hint: 'Grow back after damage',
          options: ['regenerate', 'erode', 'linger', 'eradicate']
        }
      ],
      matching: {
        id: 'ma-b2-rw-1',
        instructions: 'Match each ecological verb with its definition.',
        pairs: [
          { id: 'p1', term: 'eradicate', match: 'Destroy or eliminate completely' },
          { id: 'p2', term: 'erode', match: 'Gradually wear away soil or rock' },
          { id: 'p3', term: 'regenerate', match: 'Grow back or recover after damage' },
          { id: 'p4', term: 'stabilize', match: 'Make firm, steady, and secure' }
        ]
      }
    }
  },
  {
    id: 'b2-neuroplasticity',
    title: 'The Adaptable Brain: How Adult Neuroplasticity Rewires Neural Pathways',
    subtitle: 'For over a century, neurologists believed the adult brain was fixed in stone. Modern brain imaging proves our neural circuits reorganize throughout life.',
    level: 'B2',
    category: 'Neuroscience & Politics',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Uses B2 academic neuroscience vocabulary and contrast structures comparing past dogma with modern findings.',
    themeColor: 'indigo',
    gradientFrom: 'from-blue-900',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'Throughout most of the twentieth century, medical students were taught a discouraging rule: once human beings reach adulthood, the architecture of the brain becomes permanently fixed. According to this view, each region of the cortex was hardwired like a circuit board to perform a single task, and any neurons lost to stroke or injury could never be replaced or compensated for.',
      'Over the past three decades, functional MRI scanners have overturned that rigid dogma. Neuroscientists now know that the adult brain possesses a remarkable capacity called neuroplasticity—the ability to reorganize its structure, strengthen active synapses, and forge entirely new neural pathways in response to learning, experience, or physical trauma.',
      'One of the most famous demonstrations of adult neuroplasticity involved London’s black-cab drivers. Before earning a license, trainees spend up to four years memorizing "The Knowledge"—a labyrinth of twenty-five thousand streets and thousands of landmarks without consulting a map. Brain scans revealed that veteran cabbies had a significantly enlarged posterior hippocampus, the brain region responsible for spatial navigation, compared with bus drivers who followed fixed routes.',
      'Neuroplasticity also plays a vital role in clinical rehabilitation. When a stroke damages the motor cortex that controls a patient’s right arm, intensive physical therapy can train adjacent, healthy brain regions to take over the lost function. The principle governing this recovery is often summarized as "neurons that fire together, wire together."',
      'However, plasticity is a two-way street. Just as deliberate practice strengthens neural networks, chronic stress or lack of mental stimulation causes unused connections to weaken—a process known as synaptic pruning. Keeping the adult brain resilient requires novelty: mastering a musical instrument, learning a second language, or navigating unfamiliar environments.'
    ],
    targetVocabulary: [
      {
        id: 'b2-np-1',
        word: 'rigid',
        phonetic: '/ˈrɪdʒɪd/',
        partOfSpeech: 'adjective',
        definition: 'Unable to bend or be forced out of shape; not flexible or adaptable.',
        cefrLevel: 'B2',
        exampleSentence: 'Functional MRI scanners have overturned that rigid dogma.',
        collocations: ['rigid dogma', 'rigid rules', 'rigid structure'],
        synonyms: ['inflexible', 'fixed', 'stiff'],
        antonyms: ['flexible', 'adaptable']
      },
      {
        id: 'b2-np-2',
        word: 'compensate',
        phonetic: '/ˈkɒmpenseɪt/',
        partOfSpeech: 'verb',
        definition: 'To make up for a weakness, loss, or injury by developing strength elsewhere.',
        cefrLevel: 'B2',
        exampleSentence: 'Doctors once believed lost neurons could never be replaced or compensated for.',
        collocations: ['compensate for', 'compensate for the loss', 'fully compensate'],
        synonyms: ['make up for', 'offset', 'counterbalance']
      },
      {
        id: 'b2-np-3',
        word: 'forge',
        phonetic: '/fɔːdʒ/',
        partOfSpeech: 'verb',
        definition: 'To create something strong, enduring, or successful through effort.',
        cefrLevel: 'B2',
        exampleSentence: 'The brain can forge entirely new neural pathways in response to learning.',
        collocations: ['forge new pathways', 'forge an alliance', 'forge ahead'],
        synonyms: ['build', 'create', 'establish'],
        antonyms: ['sever', 'break']
      },
      {
        id: 'b2-np-4',
        word: 'adjacent',
        phonetic: '/əˈdʒeɪsnt/',
        partOfSpeech: 'adjective',
        definition: 'Located next to or adjoining something else.',
        cefrLevel: 'B2',
        exampleSentence: 'Intensive physical therapy can train adjacent, healthy brain regions to take over.',
        collocations: ['adjacent region', 'adjacent room', 'immediately adjacent to'],
        synonyms: ['neighboring', 'adjoining', 'next-door'],
        antonyms: ['distant', 'remote']
      },
      {
        id: 'b2-np-5',
        word: 'chronic',
        phonetic: '/ˈkrɒnɪk/',
        partOfSpeech: 'adjective',
        definition: 'Persisting for a long time or constantly recurring.',
        cefrLevel: 'B2',
        exampleSentence: 'Chronic stress or lack of mental stimulation causes unused connections to weaken.',
        collocations: ['chronic stress', 'chronic illness', 'chronic shortage'],
        synonyms: ['persistent', 'long-term', 'ongoing'],
        antonyms: ['acute', 'temporary']
      },
      {
        id: 'b2-np-6',
        word: 'resilient',
        phonetic: '/rɪˈzɪliənt/',
        partOfSpeech: 'adjective',
        definition: 'Able to withstand or recover quickly from difficult conditions or damage.',
        cefrLevel: 'B2',
        exampleSentence: 'Keeping the adult brain resilient requires novelty and mental challenge.',
        collocations: ['remain resilient', 'highly resilient', 'resilient network'],
        synonyms: ['adaptable', 'tough', 'robust'],
        antonyms: ['fragile', 'vulnerable']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-np-1',
          targetWord: 'adjacent',
          question: 'How does the brain recover movement after a stroke damages part of the motor cortex?',
          options: [
            'Adjacent (neighboring) healthy brain areas learn to take over the lost function.',
            'The patient stops moving the arm permanently.',
            'The spinal cord grows a second brain.'
          ],
          correctIndex: 0,
          explanation: '"Adjacent" means next to or neighboring.'
        },
        {
          id: 'mc-b2-np-2',
          targetWord: 'chronic',
          question: 'What is the difference between "chronic stress" and brief stress?',
          options: [
            'Chronic stress lasts for a long time and repeatedly returns.',
            'Chronic stress only happens during exams.',
            'Chronic stress improves memory and focus.'
          ],
          correctIndex: 0,
          explanation: '"Chronic" describes a condition that persists over a long period.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-np-1',
          sentenceWithBlank: 'Blind musicians often develop extraordinary hearing to _____ for the absence of sight.',
          targetWord: 'compensate',
          hint: 'Make up for a loss or weakness',
          options: ['compensate', 'forge', 'linger', 'erode']
        },
        {
          id: 'cl-b2-np-2',
          sentenceWithBlank: 'Every time you practice a new language, your neurons _____ stronger connections.',
          targetWord: 'forge',
          hint: 'Create or build something strong',
          options: ['forge', 'compensate', 'deteriorate', 'contradict']
        }
      ],
      matching: {
        id: 'ma-b2-np-1',
        instructions: 'Match each neuroscience vocabulary item with its meaning.',
        pairs: [
          { id: 'p1', term: 'rigid', match: 'Inflexible and unable to change' },
          { id: 'p2', term: 'compensate', match: 'Make up for a loss or weakness' },
          { id: 'p3', term: 'adjacent', match: 'Located next to or neighboring' },
          { id: 'p4', term: 'resilient', match: 'Able to recover quickly from difficulty' }
        ]
      }
    }
  },
  {
    id: 'b2-voter-decision-neuroscience',
    title: 'Emotions at the Ballot Box: What Brain Scans Reveal About Political Persuasion',
    subtitle: 'Political scientists and neuroscientists are collaborating to understand why campaign slogans appeal to the brain’s threat and reward centers before rational analysis even begins.',
    level: 'B2',
    category: 'Neuroscience & Politics',
    readTime: '6 min read',
    wordCount: 525,
    cefrSummary: 'Combines political science and neuroscience terminology with B2 analytical sentence structures.',
    themeColor: 'rose',
    gradientFrom: 'from-rose-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Classical democratic theory assumes that voters evaluate political candidates much like careful consumers comparing household appliances: they read policy proposals, weigh economic track records, and cast their ballots for the platform that best serves the public interest. Yet when neuroscientists place voters inside functional MRI scanners during election seasons, a far more emotional picture emerges.',
      'Before a voter’s prefrontal cortex—the brain region responsible for logical deliberation—finishes evaluating a policy claim, deeper structures in the limbic system have already reacted. Within milliseconds of seeing a candidate’s face or hearing a partisan slogan, the amygdala and insula fire in patterns associated with threat detection, group pride, or moral disgust.',
      'In a landmark study at the University of Southern California, researchers scanned participants while challenging their deeply held political convictions with factual counterarguments. Surprisingly, the challenges activated the brain’s default mode network and amygdala in the exact same way that physical threats or personal insults do. Because the brain treats political identity as an extension of the self, conceding a political point feels neurologically painful.',
      'Campaign strategists have long exploited these emotional triggers intuitively. Negative advertisements framed around fear or loss reliably capture attention because the human brain evolved a strong "negativity bias"—paying far closer attention to potential dangers than to gradual improvements.',
      'Does this mean rational political debate is impossible? Not at all. Neuroscientists have found that when arguments are framed around shared values rather than partisan attacks, threat responses in the amygdala subside, allowing the prefrontal cortex to engage thoughtfully with new policies.'
    ],
    targetVocabulary: [
      {
        id: 'b2-vp-1',
        word: 'deliberation',
        phonetic: '/dɪˌlɪbəˈreɪʃn/',
        partOfSpeech: 'noun',
        definition: 'Long and careful consideration or discussion before reaching a decision.',
        cefrLevel: 'B2',
        exampleSentence: 'Before the prefrontal cortex—the region responsible for logical deliberation—finishes evaluating a claim, deeper structures react.',
        collocations: ['careful deliberation', 'logical deliberation', 'after much deliberation'],
        synonyms: ['consideration', 'reflection', 'thought'],
        antonyms: ['impulse', 'haste']
      },
      {
        id: 'b2-vp-2',
        word: 'partisan',
        phonetic: '/ˌpɑːtɪˈzæn/',
        partOfSpeech: 'adjective',
        definition: 'Strongly supporting one political party or faction, often without fair consideration of others.',
        cefrLevel: 'B2',
        exampleSentence: 'When arguments are framed around shared values rather than partisan attacks, threat responses subside.',
        collocations: ['partisan politics', 'partisan slogan', 'fiercely partisan'],
        synonyms: ['biased', 'one-sided', 'sectarian'],
        antonyms: ['impartial', 'bipartisan']
      },
      {
        id: 'b2-vp-3',
        word: 'conviction',
        phonetic: '/kənˈvɪkʃn/',
        partOfSpeech: 'noun',
        definition: 'A firmly held belief or opinion.',
        cefrLevel: 'B2',
        exampleSentence: 'Researchers scanned participants while challenging their deeply held political convictions.',
        collocations: ['deeply held conviction', 'moral conviction', 'speak with conviction'],
        synonyms: ['belief', 'principle', 'certainty'],
        antonyms: ['doubt', 'uncertainty']
      },
      {
        id: 'b2-vp-4',
        word: 'concede',
        phonetic: '/kənˈsiːd/',
        partOfSpeech: 'verb',
        definition: 'To admit that something is true or valid after first denying or resisting it.',
        cefrLevel: 'B2',
        exampleSentence: 'Because the brain treats political identity as part of the self, conceding a point feels painful.',
        collocations: ['concede a point', 'concede defeat', 'reluctantly concede'],
        synonyms: ['admit', 'acknowledge', 'grant'],
        antonyms: ['deny', 'dispute']
      },
      {
        id: 'b2-vp-5',
        word: 'exploit',
        phonetic: '/ɪkˈsplɔɪt/',
        partOfSpeech: 'verb',
        definition: 'To make use of a situation or vulnerability in a way considered unfair or manipulative.',
        cefrLevel: 'B2',
        exampleSentence: 'Campaign strategists have long exploited these emotional triggers intuitively.',
        collocations: ['exploit fears', 'exploit a weakness', 'unfairly exploit'],
        synonyms: ['manipulate', 'take advantage of', 'capitalize on']
      },
      {
        id: 'b2-vp-6',
        word: 'subside',
        phonetic: '/səbˈsaɪd/',
        partOfSpeech: 'verb',
        definition: 'To become less intense, violent, or severe.',
        cefrLevel: 'B2',
        exampleSentence: 'Threat responses in the amygdala subside, allowing the prefrontal cortex to engage.',
        collocations: ['gradually subside', 'fears subside', 'storm subsided'],
        synonyms: ['diminish', 'ease', 'abate'],
        antonyms: ['intensify', 'escalate']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-vp-1',
          targetWord: 'concede',
          question: 'Why do people find it difficult to "concede" a point in a heated political argument?',
          options: [
            'Because the brain processes challenges to political identity almost like a personal threat.',
            'Because voters never remember the names of political parties.',
            'Because the prefrontal cortex is too large to process language.'
          ],
          correctIndex: 0,
          explanation: 'To "concede" a point means to admit that the other person’s argument is valid.'
        },
        {
          id: 'mc-b2-vp-2',
          targetWord: 'subside',
          question: 'What happens when threat responses in the amygdala "subside"?',
          options: [
            'They calm down and become less intense, allowing rational thought.',
            'They double in strength and block memory.',
            'They cause the voter to leave the room immediately.'
          ],
          correctIndex: 0,
          explanation: '"Subside" means to calm down or become less intense.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-vp-1',
          sentenceWithBlank: 'After hours of careful _____, the jury finally reached a unanimous verdict.',
          targetWord: 'deliberation',
          hint: 'Careful consideration and discussion',
          options: ['deliberation', 'conviction', 'partisan', 'surplus']
        },
        {
          id: 'cl-b2-vp-2',
          sentenceWithBlank: 'Effective leaders try to bridge _____ divides rather than pit citizens against one another.',
          targetWord: 'partisan',
          hint: 'Biased toward one political party',
          options: ['partisan', 'impartial', 'chronic', 'barren']
        }
      ],
      matching: {
        id: 'ma-b2-vp-1',
        instructions: 'Match each political neuroscience term with its definition.',
        pairs: [
          { id: 'p1', term: 'deliberation', match: 'Careful consideration before making a decision' },
          { id: 'p2', term: 'conviction', match: 'A firmly held belief or principle' },
          { id: 'p3', term: 'concede', match: 'Admit that an opposing point is valid' },
          { id: 'p4', term: 'subside', match: 'Become less intense or calm down' }
        ]
      }
    }
  },
  {
    id: 'b2-four-day-workweek',
    title: 'Redefining Productivity: Economic Lessons from the Global Four-Day Workweek Trials',
    subtitle: 'When dozens of companies cut working hours by twenty percent without reducing pay, economists expected output to drop. The data told a surprising story.',
    level: 'B2',
    category: 'Modern Economics',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Uses B2 workplace and economic vocabulary, data comparisons, and concession clauses.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-800',
    gradientTo: 'to-amber-950',
    paragraphs: [
      'For nearly a century, the forty-hour, five-day workweek has been treated as an economic law of nature. Introduced by industrialists like Henry Ford in the 1920s, the schedule was designed for factory assembly lines where output was directly proportional to the number of hours machines were running. In the modern knowledge economy, however, spending forty hours at a desk rarely translates into forty hours of focused output.',
      'Between 2022 and 2024, researchers at Cambridge and Boston College coordinated the world’s largest trials of a four-day workweek across the United Kingdom, North America, and Oceania. More than sixty companies followed the "100-80-100" model: employees received one hundred percent of their usual salary for working eighty percent of their previous hours, provided they maintained one hundred percent of their productivity.',
      'Before the trial began, skeptics predicted that compressing the schedule would either hurt company revenue or force staff to work frantically under unbearable pressure. Instead, corporate revenue across participating firms rose slightly compared with the previous year, while staff turnover dropped by more than fifty percent.',
      'How did teams accomplish the same volume of work in thirty-two hours? Rather than typing faster, organizations eliminated unproductive habits that had accumulated over years. Managers shortened or canceled routine status meetings, designated uninterrupted "deep work" blocks, and replaced chaotic email chains with clear project checklists.',
      'Of course, shortening the workweek is not effortless for every sector. Hospitals, public transit agencies, and manufacturing plants that operate around the clock must hire additional shift workers to cover the gap. Even so, over ninety percent of the companies that participated in the trials chose to make the four-day schedule permanent, concluding that well-rested employees make fewer costly mistakes.'
    ],
    targetVocabulary: [
      {
        id: 'b2-fd-1',
        word: 'proportional',
        phonetic: '/prəˈpɔːʃənl/',
        partOfSpeech: 'adjective',
        definition: 'Corresponding in size, degree, or amount to something else.',
        cefrLevel: 'B2',
        exampleSentence: 'On factory assembly lines, output was directly proportional to the number of hours machines ran.',
        collocations: ['directly proportional to', 'proportional share', 'inversely proportional'],
        synonyms: ['corresponding', 'commensurate', 'relative'],
        antonyms: ['disproportionate']
      },
      {
        id: 'b2-fd-2',
        word: 'skeptic',
        phonetic: '/ˈskeptɪk/',
        partOfSpeech: 'noun',
        definition: 'A person inclined to question or doubt accepted opinions or new proposals.',
        cefrLevel: 'B2',
        exampleSentence: 'Before the trial began, skeptics predicted that compressing the schedule would hurt revenue.',
        collocations: ['convince skeptics', 'prove skeptics wrong', 'climate skeptic'],
        synonyms: ['doubter', 'critic', 'cynic'],
        antonyms: ['advocate', 'believer']
      },
      {
        id: 'b2-fd-3',
        word: 'turnover',
        phonetic: '/ˈtɜːnəʊvə(r)/',
        partOfSpeech: 'noun',
        definition: 'The rate at which employees leave a workforce and are replaced.',
        cefrLevel: 'B2',
        exampleSentence: 'Corporate revenue rose slightly, while staff turnover dropped by more than fifty percent.',
        collocations: ['staff turnover', 'high turnover rate', 'reduce turnover'],
        synonyms: ['attrition', 'churn'],
        antonyms: ['retention']
      },
      {
        id: 'b2-fd-4',
        word: 'accumulate',
        phonetic: '/əˈkjuːmjəleɪt/',
        partOfSpeech: 'verb',
        definition: 'To gradually gather or build up over time.',
        cefrLevel: 'B2',
        exampleSentence: 'Organizations eliminated unproductive habits that had accumulated over years.',
        collocations: ['gradually accumulate', 'accumulate wealth', 'accumulate evidence'],
        synonyms: ['build up', 'amass', 'collect'],
        antonyms: ['dissipate', 'scatter']
      },
      {
        id: 'b2-fd-5',
        word: 'designate',
        phonetic: '/ˈdezɪɡneɪt/',
        partOfSpeech: 'verb',
        definition: 'To officially set aside or choose something for a specific purpose.',
        cefrLevel: 'B2',
        exampleSentence: 'Managers designated uninterrupted "deep work" blocks each morning.',
        collocations: ['designate time', 'officially designate', 'designated area'],
        synonyms: ['assign', 'allocate', 'earmark']
      },
      {
        id: 'b2-fd-6',
        word: 'permanent',
        phonetic: '/ˈpɜːmənənt/',
        partOfSpeech: 'adjective',
        definition: 'Lasting or intended to last indefinitely without change.',
        cefrLevel: 'B2',
        exampleSentence: 'Over ninety percent of the companies chose to make the four-day schedule permanent.',
        collocations: ['make permanent', 'permanent shift', 'permanent position'],
        synonyms: ['lasting', 'enduring', 'indefinite'],
        antonyms: ['temporary', 'provisional']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-fd-1',
          targetWord: 'turnover',
          question: 'What does it mean that "staff turnover dropped by more than fifty percent"?',
          options: [
            'Far fewer employees quit their jobs during the trial.',
            'Employees worked fifty percent fewer hours.',
            'Company profits fell by half.'
          ],
          correctIndex: 0,
          explanation: '"Staff turnover" refers to the rate at which employees resign and need to be replaced.'
        },
        {
          id: 'mc-b2-fd-2',
          targetWord: 'designate',
          question: 'How did managers protect employees’ focus during the four-day week?',
          options: [
            'They designated quiet mornings specifically for uninterrupted work.',
            'They scheduled twice as many video calls.',
            'They required employees to answer emails at midnight.'
          ],
          correctIndex: 0,
          explanation: 'To "designate" means to officially set aside for a specific purpose.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-fd-1',
          sentenceWithBlank: 'High employee _____ is expensive because companies must constantly recruit and train replacements.',
          targetWord: 'turnover',
          hint: 'The rate at which workers leave a company',
          options: ['turnover', 'deliberation', 'surplus', 'conviction']
        },
        {
          id: 'cl-b2-fd-2',
          sentenceWithBlank: 'Without regular cleaning, dust and clutter quickly _____ in an office.',
          targetWord: 'accumulate',
          hint: 'Build up gradually over time',
          options: ['accumulate', 'designate', 'concede', 'subside']
        }
      ],
      matching: {
        id: 'ma-b2-fd-1',
        instructions: 'Match each workplace and economics word with its definition.',
        pairs: [
          { id: 'p1', term: 'proportional', match: 'Corresponding in size or amount to something else' },
          { id: 'p2', term: 'turnover', match: 'Rate at which employees leave a workforce' },
          { id: 'p3', term: 'accumulate', match: 'Gradually gather or build up over time' },
          { id: 'p4', term: 'designate', match: 'Set aside or choose for a specific purpose' }
        ]
      }
    }
  },
  {
    id: 'b2-antikythera-mechanism',
    title: 'The Ancient Greek Computer: How the Antikythera Mechanism Predicted Eclipses',
    subtitle: 'Pulled from a Roman shipwreck off a Greek island in 1901, a corroded lump of bronze turned out to be a two-thousand-year-old astronomical calculator.',
    level: 'B2',
    category: 'History & Civilizations',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Uses passive discovery narratives, past modals of deduction, and B2 historical and mechanical vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-900',
    gradientTo: 'to-stone-900',
    paragraphs: [
      'In the spring of 1901, Greek sponge divers sheltering from a storm near the tiny island of Antikythera discovered the wreck of an ancient Roman cargo ship that had sunk around 65 BCE. Alongside marble statues, glass bowls, and bronze coins, divers brought up a shoebox-sized lump of corroded green bronze encrusted with barnacles. At first, museum curators paid little attention to the fragile object until it split open as it dried, revealing dozens of finely cut bronze gearwheels.',
      'For decades, historians struggled to make sense of the artifact, which seemed impossibly advanced for the ancient world. Clockwork gearing of such complexity was not supposed to have existed until medieval European cathedral clocks were built fourteen hundred years later. Only in the early twenty-first century, when researchers scanned the fragments using high-resolution three-dimensional X-ray tomography, did the full sophistication of the "Antikythera Mechanism" come to light.',
      'Constructed by Greek astronomers around the second century BCE, the device was a hand-cranked mechanical computer. By turning a wooden knob on the side, a user rotated at least thirty interlocking bronze gears that simultaneously calculated the phases of the Moon, the positions of the five planets known in antiquity, and the exact four-year cycle of the Olympic Games.',
      'Most impressively, a spiral dial on the back tracked the Saros cycle—allowing ancient astronomers to predict solar and lunar eclipses decades in advance, including whether the Moon would appear blood-red or partially shadowed. Because the Moon’s orbit around the Earth is slightly elliptical rather than a perfect circle, the mechanism even used a clever pin-and-slot gear to speed up and slow down the lunar pointer.',
      'How such advanced engineering knowledge vanished after the fall of the Hellenistic kingdoms remains one of history’s most intriguing puzzles. The Antikythera Mechanism proves that ancient Greek science was not purely philosophical; its workshops produced precision instruments that rivaled early modern clockmaking.'
    ],
    targetVocabulary: [
      {
        id: 'b2-am-1',
        word: 'corrode',
        phonetic: '/kəˈrəʊd/',
        partOfSpeech: 'verb',
        definition: 'To slowly destroy or damage metal through chemical reactions with water, salt, or air.',
        cefrLevel: 'B2',
        exampleSentence: 'Two thousand years on the seabed had badly corroded the bronze gears.',
        collocations: ['badly corroded', 'corrode metal', 'saltwater corrodes'],
        synonyms: ['rust', 'erode', 'eat away'],
        antonyms: ['preserve', 'protect']
      },
      {
        id: 'b2-am-2',
        word: 'sophistication',
        phonetic: '/səˌfɪstɪˈkeɪʃn/',
        partOfSpeech: 'noun',
        definition: 'The quality of being highly developed, complex, and cleverly designed.',
        cefrLevel: 'B2',
        exampleSentence: 'X-ray scans revealed the full sophistication of the ancient Greek mechanism.',
        collocations: ['technical sophistication', 'remarkable sophistication', 'level of sophistication'],
        synonyms: ['complexity', 'refinement', 'ingenuity'],
        antonyms: ['simplicity', 'crudeness']
      },
      {
        id: 'b2-am-3',
        word: 'simultaneously',
        phonetic: '/ˌsɪmlˈteɪniəsli/',
        partOfSpeech: 'adverb',
        definition: 'Happening or done at the exact same time.',
        cefrLevel: 'B2',
        exampleSentence: 'Turning the handle rotated thirty bronze gears that simultaneously tracked the Sun, Moon, and planets.',
        collocations: ['occur simultaneously', 'simultaneously calculate', 'work simultaneously'],
        synonyms: ['at the same time', 'concurrently', 'together']
      },
      {
        id: 'b2-am-4',
        word: 'intriguing',
        phonetic: '/ɪnˈtriːɡɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Arousing great curiosity or interest, especially because it is unusual or mysterious.',
        cefrLevel: 'B2',
        exampleSentence: 'How such engineering knowledge vanished remains one of history’s most intriguing puzzles.',
        collocations: ['intriguing puzzle', 'intriguing question', 'find intriguing'],
        synonyms: ['fascinating', 'compelling', 'captivating'],
        antonyms: ['tedious', 'dull']
      },
      {
        id: 'b2-am-5',
        word: 'rival',
        phonetic: '/ˈraɪvl/',
        partOfSpeech: 'verb',
        definition: 'To be as good, impressive, or advanced as someone or something else.',
        cefrLevel: 'B2',
        exampleSentence: 'Ancient Greek workshops produced precision instruments that rivaled early modern clockmaking.',
        collocations: ['rival modern technology', 'closely rival', 'few can rival'],
        synonyms: ['match', 'equal', 'compete with']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-am-1',
          targetWord: 'sophistication',
          question: 'Why were historians shocked by the "sophistication" of the Antikythera Mechanism?',
          options: [
            'Because its complex interlocking gears were far more advanced than anything previously known from antiquity.',
            'Because it was made of lightweight plastic.',
            'Because it was powered by solar batteries.'
          ],
          correctIndex: 0,
          explanation: '"Sophistication" refers to advanced complexity and clever engineering.'
        },
        {
          id: 'mc-b2-am-2',
          targetWord: 'simultaneously',
          question: 'What does it mean that the gears calculated several astronomical cycles "simultaneously"?',
          options: [
            'It calculated all of them at the exact same time with a single turn of the handle.',
            'It required a different machine for each planet.',
            'It only worked during a solar eclipse.'
          ],
          correctIndex: 0,
          explanation: '"Simultaneously" means happening at the exact same moment.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-am-1',
          sentenceWithBlank: 'Unless iron bridges are painted regularly, damp sea air will quickly _____ the metal.',
          targetWord: 'corrode',
          hint: 'Destroy metal through chemical reaction with air or water',
          options: ['corrode', 'rival', 'accumulate', 'subside']
        },
        {
          id: 'cl-b2-am-2',
          sentenceWithBlank: 'The archaeologist raised an _____ possibility: what if the two cities were connected by a canal?',
          targetWord: 'intriguing',
          hint: 'Fascinating and sparking curiosity',
          options: ['intriguing', 'simultaneously', 'permanent', 'partisan']
        }
      ],
      matching: {
        id: 'ma-b2-am-1',
        instructions: 'Match each B2 history vocabulary word with its definition.',
        pairs: [
          { id: 'p1', term: 'corrode', match: 'Slowly damage metal through chemical reaction' },
          { id: 'p2', term: 'sophistication', match: 'High level of complexity and clever design' },
          { id: 'p3', term: 'simultaneously', match: 'Happening at the exact same time' },
          { id: 'p4', term: 'rival', match: 'Be just as impressive or advanced as something else' }
        ]
      }
    }
  },
  {
    id: 'b2-library-of-alexandria',
    title: 'The Great Library of Alexandria: How the Ancient World Tried to Collect All Knowledge',
    subtitle: 'Funded by Egypt’s Ptolemaic kings, the ancient world’s most famous research institute even searched foreign ships in the harbor to copy their books.',
    level: 'B2',
    category: 'History & Civilizations',
    readTime: '6 min read',
    wordCount: 525,
    cefrSummary: 'Contrasts historical myth with reality using B2 academic verbs and cause-and-effect structures.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-900',
    paragraphs: [
      'Shortly after the death of Alexander the Great in 323 BCE, one of his generals, Ptolemy I Soter, became ruler of Egypt and launched an ambitious project in his new capital city of Alexandria. Rather than building only palaces and fortresses, Ptolemy founded the Mouseion—a royal research institute dedicated to the nine Muses of the arts and sciences—at the heart of which stood the Great Library of Alexandria.',
      'The goal of the library’s directors was breathtakingly bold: to collect a copy of every scroll ever written in the known world. Royal agents were sent with bags of silver to book markets in Athens and Rhodes, while harbor customs officials were ordered to search every merchant vessel that docked in Alexandria. Any papyrus scrolls found on board were confiscated and taken to royal scribes, who copied them word for word; the Library kept the original manuscripts and returned the fresh copies to the ship captains.',
      'At its peak, the Great Library housed hundreds of thousands of scrolls and attracted the sharpest minds of the Mediterranean. Working within its halls, the geographer Eratosthenes calculated the circumference of the Earth to within two percent of its true size, while Euclid compiled the geometric principles still taught in classrooms today.',
      'Popular legend claims that the entire Library vanished in a single catastrophic fire when Julius Caesar besieged Alexandria in 48 BCE. Modern historians, however, emphasize that the institution’s decline was gradual rather than sudden. Although Caesar’s harbor fire destroyed a warehouse of scrolls near the docks, scholarly work continued in Alexandria’s sister library at the Serapeum temple for centuries.',
      'What ultimately doomed the Great Library was not a single match, but political instability and budget cuts under later Roman emperors. Because papyrus scrolls decay in humid air unless recopied every few generations, neglect proved just as destructive as fire.'
    ],
    targetVocabulary: [
      {
        id: 'b2-la-1',
        word: 'ambitious',
        phonetic: '/æmˈbɪʃəs/',
        partOfSpeech: 'adjective',
        definition: 'Requiring great effort, resources, and determination to achieve.',
        cefrLevel: 'B2',
        exampleSentence: 'Ptolemy launched an ambitious project to gather every book in the known world.',
        collocations: ['ambitious project', 'ambitious goal', 'overly ambitious'],
        synonyms: ['bold', 'grand', 'aspiring'],
        antonyms: ['modest', 'unambitious']
      },
      {
        id: 'b2-la-2',
        word: 'confiscate',
        phonetic: '/ˈkɒnfɪskeɪt/',
        partOfSpeech: 'verb',
        definition: 'To officially take away private property using legal or royal authority.',
        cefrLevel: 'B2',
        exampleSentence: 'Any papyrus scrolls found on ships were confiscated so royal scribes could copy them.',
        collocations: ['confiscate property', 'confiscate goods', 'temporarily confiscate'],
        synonyms: ['seize', 'impound', 'take away'],
        antonyms: ['return', 'restore']
      },
      {
        id: 'b2-la-3',
        word: 'compile',
        phonetic: '/kəmˈpaɪl/',
        partOfSpeech: 'verb',
        definition: 'To collect information from various sources and arrange it into a book, list, or report.',
        cefrLevel: 'B2',
        exampleSentence: 'Euclid compiled the geometric principles that are still taught in schools today.',
        collocations: ['compile a list', 'compile data', 'carefully compile'],
        synonyms: ['assemble', 'gather', 'put together']
      },
      {
        id: 'b2-la-4',
        word: 'catastrophic',
        phonetic: '/ˌkætəˈstrɒfɪk/',
        partOfSpeech: 'adjective',
        definition: 'Involving or causing sudden, terrible damage or ruin.',
        cefrLevel: 'B2',
        exampleSentence: 'Popular legend claims the Library vanished in a single catastrophic fire.',
        collocations: ['catastrophic fire', 'catastrophic failure', 'catastrophic consequences'],
        synonyms: ['disastrous', 'devastating', 'ruinous']
      },
      {
        id: 'b2-la-5',
        word: 'neglect',
        phonetic: '/nɪˈɡlekt/',
        partOfSpeech: 'noun',
        definition: 'The state of not receiving proper care, funding, or maintenance over time.',
        cefrLevel: 'B2',
        exampleSentence: 'Because papyrus scrolls decay unless recopied, neglect proved just as destructive as fire.',
        collocations: ['years of neglect', 'suffer from neglect', 'benign neglect'],
        synonyms: ['abandonment', 'disregard', 'inattention'],
        antonyms: ['care', 'maintenance']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-la-1',
          targetWord: 'confiscate',
          question: 'What did customs officials in Alexandria do when they "confiscated" books from ships?',
          options: [
            'They officially seized the scrolls so royal scribes could copy them for the Library.',
            'They burned the books on the beach.',
            'They paid the sailors to throw the scrolls into the sea.'
          ],
          correctIndex: 0,
          explanation: 'To "confiscate" means to seize or take away items by official authority.'
        },
        {
          id: 'mc-b2-la-2',
          targetWord: 'neglect',
          question: 'According to modern historians, why did "neglect" destroy so many ancient texts?',
          options: [
            'Because papyrus scrolls crumble in damp air if no one funds scribes to recopy them.',
            'Because the scrolls were stolen by pirates.',
            'Because ancient ink was invisible in sunlight.'
          ],
          correctIndex: 0,
          explanation: '"Neglect" is the failure to care for or maintain something properly.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-la-1',
          sentenceWithBlank: 'It took the lexicographer ten years to _____ the first comprehensive dictionary of the language.',
          targetWord: 'compile',
          hint: 'Gather and arrange information into a book',
          options: ['compile', 'confiscate', 'corrode', 'rival']
        },
        {
          id: 'cl-b2-la-2',
          sentenceWithBlank: 'The city council unveiled an _____ plan to make all public transport emission-free by 2030.',
          targetWord: 'ambitious',
          hint: 'Bold and requiring great effort',
          options: ['ambitious', 'catastrophic', 'intriguing', 'partisan']
        }
      ],
      matching: {
        id: 'ma-b2-la-1',
        instructions: 'Match each B2 vocabulary word with its meaning.',
        pairs: [
          { id: 'p1', term: 'ambitious', match: 'Requiring great effort and determination' },
          { id: 'p2', term: 'confiscate', match: 'Officially seize private property by authority' },
          { id: 'p3', term: 'compile', match: 'Gather information and arrange it into a book or list' },
          { id: 'p4', term: 'neglect', match: 'Failure to provide proper care or maintenance' }
        ]
      }
    }
  },
  {
    id: 'b2-wood-wide-web-fungi',
    title: 'The Wood Wide Web: How Underground Fungal Networks Connect Forest Trees',
    subtitle: 'Beneath the forest floor, microscopic fungal threads link the roots of trees—allowing oaks, pines, and birches to trade nutrients and chemical warnings.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Explains biological symbiosis using B2 ecological vocabulary and figurative comparisons.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-900',
    gradientTo: 'to-stone-900',
    paragraphs: [
      'Walk through an old-growth forest and each towering oak, fir, or birch appears to be an independent competitor fighting its neighbours for sunlight and soil moisture. Over the past three decades, however, forest ecologists led by Suzanne Simard have uncovered a hidden subterranean partnership that challenges this purely competitive view of nature.',
      'Pick up a handful of rich forest soil and you are holding kilometers of gossamer-thin white threads called mycelium—the underground body of fungi. These fungal threads wrap around and penetrate the root tips of trees, forming an intimate partnership known as a mycorrhizal network, affectionately nicknamed the "Wood Wide Web."',
      'The relationship is a classic biological bargain. Fungi cannot perform photosynthesis because they live underground in the dark, so they depend on trees for sugar-rich carbon. In return, the microscopic fungal threads spread far wider than tree roots ever could, dissolving nitrogen, phosphorus, and water from tiny rock pores and delivering those essential minerals back to the tree.',
      'More remarkably still, radioactive carbon-tracing experiments have shown that trees use these fungal pipelines to transfer resources to one another. In summer, when leafy birch trees are in full leaf, they send surplus carbon underground to shaded fir seedlings; in autumn, after the birches drop their leaves, the evergreen firs return the favor.',
      'Even chemical warning signals travel through the network. When caterpillars attack the leaves of one Douglas fir, the injured tree releases defensive compounds down through its roots into the fungal web, prompting neighboring trees to start producing bitter insect-repelling chemicals before the pests even reach them.'
    ],
    targetVocabulary: [
      {
        id: 'b2-ww-1',
        word: 'subterranean',
        phonetic: '/ˌsʌbtəˈreɪniən/',
        partOfSpeech: 'adjective',
        definition: 'Existing, occurring, or operating under the surface of the earth.',
        cefrLevel: 'B2',
        exampleSentence: 'Forest ecologists uncovered a hidden subterranean partnership beneath the soil.',
        collocations: ['subterranean network', 'subterranean river', 'subterranean cave'],
        synonyms: ['underground', 'buried', 'subsurface'],
        antonyms: ['surface', 'aboveground']
      },
      {
        id: 'b2-ww-2',
        word: 'penetrate',
        phonetic: '/ˈpenɪtreɪt/',
        partOfSpeech: 'verb',
        definition: 'To pass into or through something, often through tiny openings.',
        cefrLevel: 'B2',
        exampleSentence: 'Microscopic fungal threads penetrate the outer layer of tree root tips.',
        collocations: ['penetrate the soil', 'penetrate deeply', 'sunlight penetrates'],
        synonyms: ['pierce', 'enter', 'permeate']
      },
      {
        id: 'b2-ww-3',
        word: 'mutual',
        phonetic: '/ˈmjuːtʃuəl/',
        partOfSpeech: 'adjective',
        definition: 'Shared by two or more parties and beneficial to both sides.',
        cefrLevel: 'B2',
        exampleSentence: 'Trees and fungi rely on a mutual exchange of sugars and minerals.',
        collocations: ['mutual benefit', 'mutual support', 'mutual respect'],
        synonyms: ['shared', 'reciprocal', 'joint'],
        antonyms: ['one-sided']
      },
      {
        id: 'b2-ww-4',
        word: 'transfer',
        phonetic: '/trænsˈfɜː(r)/',
        partOfSpeech: 'verb',
        definition: 'To move something—such as energy, nutrients, or money—from one place or host to another.',
        cefrLevel: 'B2',
        exampleSentence: 'Mature trees use fungal pipelines to transfer carbon to shaded seedlings.',
        collocations: ['transfer nutrients', 'transfer energy', 'directly transfer'],
        synonyms: ['pass on', 'convey', 'transmit']
      },
      {
        id: 'b2-ww-5',
        word: 'prompt',
        phonetic: '/prɒmpt/',
        partOfSpeech: 'verb',
        definition: 'To cause or encourage someone or something to take action.',
        cefrLevel: 'B2',
        exampleSentence: 'Chemical signals travel through the fungal web, prompting neighboring trees to produce defenses.',
        collocations: ['prompt action', 'prompt a response', 'prompt neighbours to'],
        synonyms: ['trigger', 'spur', 'induce']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-ww-1',
          targetWord: 'subterranean',
          question: 'Where does a "subterranean" fungal network live?',
          options: [
            'Underground, beneath the surface of the forest floor',
            'High up in the topmost branches of oak trees',
            'Floating on the surface of lakes'
          ],
          correctIndex: 0,
          explanation: '"Subterranean" means underground.'
        },
        {
          id: 'mc-b2-ww-2',
          targetWord: 'prompt',
          question: 'What happens when chemical alarm signals from an injured tree "prompt" neighboring trees?',
          options: [
            'The signals cause the neighboring trees to start making bitter chemicals to defend against insects.',
            'The neighboring trees drop all their leaves immediately.',
            'The fungi stop absorbing water.'
          ],
          correctIndex: 0,
          explanation: 'To "prompt" means to trigger or stimulate an action or response.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-ww-1',
          sentenceWithBlank: 'The trade agreement was designed for the _____ benefit of both countries.',
          targetWord: 'mutual',
          hint: 'Shared and helpful to both sides',
          options: ['mutual', 'subterranean', 'catastrophic', 'ambitious']
        },
        {
          id: 'cl-b2-ww-2',
          sentenceWithBlank: 'Thick forest canopies block ninety percent of sunlight before it can _____ to the ground.',
          targetWord: 'penetrate',
          hint: 'Pass through or into',
          options: ['penetrate', 'compile', 'confiscate', 'corrode']
        }
      ],
      matching: {
        id: 'ma-b2-ww-1',
        instructions: 'Match each B2 ecology term with its definition.',
        pairs: [
          { id: 'p1', term: 'subterranean', match: 'Existing beneath the surface of the earth' },
          { id: 'p2', term: 'penetrate', match: 'Pass into or through something' },
          { id: 'p3', term: 'mutual', match: 'Shared and beneficial to both sides' },
          { id: 'p4', term: 'prompt', match: 'Cause or encourage a reaction to happen' }
        ]
      }
    }
  },
  {
    id: 'b2-james-webb-telescope',
    title: 'Looking Back to the Cosmic Dawn: How the James Webb Telescope Captures Ancient Starlight',
    subtitle: 'Orbiting a million miles from Earth behind a tennis-court-sized sunshield, humanity’s most powerful space observatory sees through cosmic dust.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '6 min read',
    wordCount: 535,
    cefrSummary: 'Explains physics and astronomy concepts using B2 cause-and-effect clauses and precision adjectives.',
    themeColor: 'cyan',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-cyan-950',
    paragraphs: [
      'In astronomy, looking farther out into space is literally the same as looking further back in time. Because light travels at a finite speed, sunlight takes eight minutes to reach Earth, light from the nearest star beyond our solar system takes four years, and light from distant galaxies travels for billions of years before hitting a telescope mirror. To see the very first stars that ignited after the Big Bang, astronomers built the James Webb Space Telescope (JWST).',
      'Even the famous Hubble Space Telescope could not spot those earliest galaxies because the universe itself is expanding. As ancient starlight travels across expanding space for thirteen billion years, its waves are stretched out—shifting from visible light into longer, invisible infrared wavelengths. Detecting faint infrared heat from the edge of the cosmos required a telescope that was both enormous and freezing cold.',
      'Because the telescope’s six-and-a-half-meter golden mirror was too wide to fit inside any rocket nose cone, engineers designed it like a piece of origami: eighteen hexagonal segments folded up for launch in December 2021 and unfolded in space with microscopic precision.',
      'To prevent the heat of the Sun, Earth, and Moon from blinding its sensitive infrared cameras, Webb orbits a point one and a half million kilometers from Earth and unfurled a five-layer sunshield the size of a tennis court. Behind that shield, the telescope operates at minus 220 degrees Celsius.',
      'Since sending back its first images, Webb has exceeded expectations—peering through thick clouds of cosmic dust to watch newborn stars form and analyzing the chemical atmospheres of distant exoplanets for water vapor and carbon dioxide.'
    ],
    targetVocabulary: [
      {
        id: 'b2-jw-1',
        word: 'finite',
        phonetic: '/ˈfaɪnaɪt/',
        partOfSpeech: 'adjective',
        definition: 'Having limits or bounds; not infinite.',
        cefrLevel: 'B2',
        exampleSentence: 'Because light travels at a finite speed, starlight takes years to reach our eyes.',
        collocations: ['finite speed', 'finite resources', 'finite amount'],
        synonyms: ['limited', 'measurable', 'bounded'],
        antonyms: ['infinite', 'endless']
      },
      {
        id: 'b2-jw-2',
        word: 'ignite',
        phonetic: '/ɪɡˈnaɪt/',
        partOfSpeech: 'verb',
        definition: 'To catch fire, begin to burn, or start shining brightly.',
        cefrLevel: 'B2',
        exampleSentence: 'Astronomers wanted to see the very first stars that ignited after the Big Bang.',
        collocations: ['stars ignite', 'ignite a fire', 'ignite debate'],
        synonyms: ['light up', 'catch fire', 'spark'],
        antonyms: ['extinguish', 'burn out']
      },
      {
        id: 'b2-jw-3',
        word: 'faint',
        phonetic: '/feɪnt/',
        partOfSpeech: 'adjective',
        definition: 'Barely perceptible; very weak or dim in light, sound, or smell.',
        cefrLevel: 'B2',
        exampleSentence: 'Detecting faint infrared heat from the edge of the cosmos required a giant mirror.',
        collocations: ['faint light', 'faint signal', 'faint glow'],
        synonyms: ['dim', 'weak', 'indistinct'],
        antonyms: ['bright', 'strong']
      },
      {
        id: 'b2-jw-4',
        word: 'unfurl',
        phonetic: '/ˌʌnˈfɜːl/',
        partOfSpeech: 'verb',
        definition: 'To unroll, spread out, or open something that was folded or rolled up.',
        cefrLevel: 'B2',
        exampleSentence: 'The spacecraft unfurled a five-layer sunshield the size of a tennis court.',
        collocations: ['unfurl a sail', 'unfurl a sunshield', 'slowly unfurl'],
        synonyms: ['unfold', 'spread out', 'open'],
        antonyms: ['fold up', 'roll up']
      },
      {
        id: 'b2-jw-5',
        word: 'peer',
        phonetic: '/pɪə(r)/',
        partOfSpeech: 'verb',
        definition: 'To look closely or carefully at something, especially when it is hard to see clearly.',
        cefrLevel: 'B2',
        exampleSentence: 'Webb peers through thick clouds of cosmic dust to watch newborn stars form.',
        collocations: ['peer through', 'peer into the darkness', 'peer closely'],
        synonyms: ['gaze', 'squint', 'look closely']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-jw-1',
          targetWord: 'finite',
          question: 'Why does looking far into space mean looking back in time?',
          options: [
            'Because light travels at a finite (limited) speed, so light from distant stars takes years to arrive.',
            'Because clocks run backward in space.',
            'Because mirrors slow down time.'
          ],
          correctIndex: 0,
          explanation: '"Finite" means having a fixed, measurable limit rather than being instantaneous or infinite.'
        },
        {
          id: 'mc-b2-jw-2',
          targetWord: 'unfurl',
          question: 'Why did the James Webb Telescope need to "unfurl" its mirror and sunshield in space?',
          options: [
            'Because they were too wide to fit inside the rocket unless folded up for launch.',
            'Because solar wind blew them shut.',
            'Because astronauts had to paint them in orbit.'
          ],
          correctIndex: 0,
          explanation: 'To "unfurl" means to unfold or spread out from a rolled or folded state.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-jw-1',
          sentenceWithBlank: 'Earth’s supply of fresh groundwater is _____, so we must not waste it.',
          targetWord: 'finite',
          hint: 'Limited; not endless',
          options: ['finite', 'faint', 'mutual', 'subterranean']
        },
        {
          id: 'cl-b2-jw-2',
          sentenceWithBlank: 'Even with binoculars, the distant comet appeared as only a _____ smudge of light.',
          targetWord: 'faint',
          hint: 'Very dim and barely visible',
          options: ['faint', 'finite', 'ambitious', 'catastrophic']
        }
      ],
      matching: {
        id: 'ma-b2-jw-1',
        instructions: 'Match each B2 astronomy term with its definition.',
        pairs: [
          { id: 'p1', term: 'finite', match: 'Having limits; not infinite' },
          { id: 'p2', term: 'ignite', match: 'Begin to burn or shine brightly' },
          { id: 'p3', term: 'faint', match: 'Very dim or weak and hard to detect' },
          { id: 'p4', term: 'unfurl', match: 'Unfold or spread out from a folded state' }
        ]
      }
    }
  },
  {
    id: 'b2-bystander-effect-psychology',
    title: 'The Bystander Effect: Why People Are Less Likely to Help When a Crowd Is Watching',
    subtitle: 'Social psychologists discovered a surprising rule of human behavior: the more witnesses present during an emergency, the longer it takes for anyone to act.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '6 min read',
    wordCount: 525,
    cefrSummary: 'Examines social psychology experiments using B2 conditional structures and behavioral vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Imagine walking down a quiet street alone when you see a cyclist slip on wet pavement and twist their ankle. Almost without hesitation, you would stop to ask if they need an ambulance. Now imagine witnessing the exact same accident on a crowded city square surrounded by fifty other pedestrians. Common sense suggests that with fifty people present, someone will help immediately. Yet social psychology shows that the opposite often happens.',
      'In the late 1960s, psychologists Bibb Latané and John Darley conducted a series of famous experiments to test how group size affects helping behavior. In one study, college students sat in a waiting room filling out a questionnaire when harmless artificial smoke began pouring through a wall vent. When a student was alone in the room, seventy-five percent walked out to report the smoke within two minutes. When three students waited together, however, only thirty-eight percent reported it—even when the room grew so smoky they had to wave the fumes away from their faces.',
      'This phenomenon—known as the "bystander effect"—is driven by two psychological mechanisms. The first is "diffusion of responsibility": when dozens of people witness an emergency, each individual feels less personal obligation to act, assuming that someone else has already called for help or knows first aid.',
      'The second mechanism is "pluralistic ignorance." In an ambiguous situation, humans instinctively glance at the faces of people around them to gauge how serious the problem is. Because everyone in a crowd tries to appear calm and composed in public, onlookers misread each other’s calm expressions as proof that nothing is wrong.',
      'Fortunately, simply knowing about the bystander effect makes you far less likely to fall into the trap. Emergency trainers also teach a practical rule if you ever need help in a crowd: instead of shouting "Somebody call an ambulance!", point directly at one specific person and say, "You in the blue jacket—please call an ambulance right now."'
    ],
    targetVocabulary: [
      {
        id: 'b2-be-1',
        word: 'hesitation',
        phonetic: '/ˌhezɪˈteɪʃn/',
        partOfSpeech: 'noun',
        definition: 'A pause or delay before doing something because of uncertainty or doubt.',
        cefrLevel: 'B2',
        exampleSentence: 'When alone on a quiet street, most people stop to help without hesitation.',
        collocations: ['without hesitation', 'moment of hesitation', 'slight hesitation'],
        synonyms: ['reluctance', 'delay', 'uncertainty']
      },
      {
        id: 'b2-be-2',
        word: 'obligation',
        phonetic: '/ˌɒblɪˈɡeɪʃn/',
        partOfSpeech: 'noun',
        definition: 'A moral or legal duty to do something.',
        cefrLevel: 'B2',
        exampleSentence: 'In a large crowd, each individual feels less personal obligation to act.',
        collocations: ['moral obligation', 'personal obligation', 'sense of obligation'],
        synonyms: ['duty', 'responsibility', 'commitment']
      },
      {
        id: 'b2-be-3',
        word: 'gauge',
        phonetic: '/ɡeɪdʒ/',
        partOfSpeech: 'verb',
        definition: 'To judge, estimate, or measure a situation or people’s feelings.',
        cefrLevel: 'B2',
        exampleSentence: 'Humans instinctively glance at others to gauge how serious a problem is.',
        collocations: ['gauge a reaction', 'gauge the severity', 'accurately gauge'],
        synonyms: ['assess', 'judge', 'estimate']
      },
      {
        id: 'b2-be-4',
        word: 'composed',
        phonetic: '/kəmˈpəʊzd/',
        partOfSpeech: 'adjective',
        definition: 'Having one’s feelings and expression under control; calm and self-possessed.',
        cefrLevel: 'B2',
        exampleSentence: 'Because everyone in a crowd tries to appear calm and composed, onlookers assume nothing is wrong.',
        collocations: ['calm and composed', 'remain composed', 'look composed'],
        synonyms: ['calm', 'collected', 'poised'],
        antonyms: ['panicked', 'flustered']
      },
      {
        id: 'b2-be-5',
        word: 'misread',
        phonetic: '/ˌmɪsˈriːd/',
        partOfSpeech: 'verb',
        definition: 'To interpret a situation, expression, or signal incorrectly.',
        cefrLevel: 'B2',
        exampleSentence: 'Onlookers misread each other’s calm expressions as proof that there is no emergency.',
        collocations: ['misread the situation', 'misread a signal', 'completely misread'],
        synonyms: ['misinterpret', 'misjudge', 'misunderstand']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-be-1',
          targetWord: 'obligation',
          question: 'What is "diffusion of responsibility" during an emergency in a crowd?',
          options: [
            'Each person feels less personal obligation (duty) to step in because they assume someone else will do it.',
            'Everyone calls the police at the exact same second.',
            'People forget how to use their phones.'
          ],
          correctIndex: 0,
          explanation: 'An "obligation" is a sense of moral duty or responsibility to act.'
        },
        {
          id: 'mc-b2-be-2',
          targetWord: 'gauge',
          question: 'Why do people look at strangers’ faces when smoke enters a room?',
          options: [
            'To gauge (judge) from others’ reactions whether the situation is a real emergency',
            'To memorize their faces for a memory test',
            'To see who brought the smoke machine'
          ],
          correctIndex: 0,
          explanation: 'To "gauge" a situation means to assess or judge it.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-be-1',
          sentenceWithBlank: 'When the lifeguard saw the swimmer struggling, she dived into the water without _____.',
          targetWord: 'hesitation',
          hint: 'A pause caused by doubt or uncertainty',
          options: ['hesitation', 'obligation', 'neglect', 'sophistication']
        },
        {
          id: 'cl-b2-be-2',
          sentenceWithBlank: 'Even when the microphone stopped working on live television, the news presenter remained calm and _____.',
          targetWord: 'composed',
          hint: 'Calm and in control of emotions',
          options: ['composed', 'faint', 'finite', 'mutual']
        }
      ],
      matching: {
        id: 'ma-b2-be-1',
        instructions: 'Match each B2 psychology word with its definition.',
        pairs: [
          { id: 'p1', term: 'hesitation', match: 'A pause before acting due to uncertainty' },
          { id: 'p2', term: 'obligation', match: 'A moral or legal duty to do something' },
          { id: 'p3', term: 'gauge', match: 'Judge or estimate the seriousness of a situation' },
          { id: 'p4', term: 'misread', match: 'Interpret a signal or situation incorrectly' }
        ]
      }
    }
  },
  {
    id: 'b2-sunk-cost-fallacy',
    title: 'The Sunk Cost Fallacy: Why It Is So Hard to Walk Away from a Bad Investment',
    subtitle: 'From sitting through a terrible movie to pouring billions into failing megaprojects, humans hate admitting that past time or money is gone forever.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Behavioral economics and decision-making psychology using B2 conditionals and analytical vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-slate-800',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'Suppose you paid fifty euros for a non-refundable ticket to an outdoor concert. On the evening of the show, a freezing rainstorm hits the city and you catch a mild cold. Staying home in a warm bed would clearly make you happier than standing in the mud for three hours—and the fifty euros is already spent whether you go or not. Yet most people still zip up their raincoats and go, telling themselves, "I can’t waste the ticket."',
      'Economists call past expenses that cannot be recovered "sunk costs." Rational decision-making requires ignoring sunk costs completely and weighing only the future costs and benefits of a choice. Human beings, however, routinely fall victim to the "sunk cost fallacy": we continue investing time, money, or energy into a failing endeavor simply because we have already invested so much.',
      'This cognitive trap shows up everywhere in daily life. Diners overeat at buffets after they are already full just to "get their money’s worth"; readers slog through the final three hundred pages of a boring novel because they already read the first two hundred; and professionals stay for years in unfulfilling careers because they spent four years earning a specific degree.',
      'At the governmental and corporate level, the sunk cost fallacy is often called the "Concorde effect," named after the supersonic airliner jointly funded by Britain and France in the 1960s. Long after both governments realized the noisy, fuel-hungry jet would never make a commercial profit, politicians kept pouring billions more into the project because neither country wanted to admit that the earlier spending had been in vain.',
      'How can we free ourselves from this mental trap? Behavioral psychologists suggest asking a simple question whenever you feel stuck: "If I were starting from scratch today with zero past investment, would I still choose to enter this project?" If the answer is no, walking away is not quitting—it is cutting your losses.'
    ],
    targetVocabulary: [
      {
        id: 'b2-sc-1',
        word: 'endeavor',
        phonetic: '/ɪnˈdevə(r)/',
        partOfSpeech: 'noun',
        definition: 'An attempt to achieve a goal; a serious enterprise or project.',
        cefrLevel: 'B2',
        exampleSentence: 'We continue investing time or money into a failing endeavor simply because we already started.',
        collocations: ['scientific endeavor', 'failing endeavor', 'joint endeavor'],
        synonyms: ['undertaking', 'venture', 'enterprise']
      },
      {
        id: 'b2-sc-2',
        word: 'slog',
        phonetic: '/slɒɡ/',
        partOfSpeech: 'verb',
        definition: 'To work or walk doggedly and slowly through something difficult or tedious.',
        cefrLevel: 'B2',
        exampleSentence: 'Readers slog through the final three hundred pages of a boring novel.',
        collocations: ['slog through', 'slog away', 'uphill slog'],
        synonyms: ['plod', 'trudge', 'grind']
      },
      {
        id: 'b2-sc-3',
        word: 'unfulfilling',
        phonetic: '/ˌʌnfʊlˈfɪlɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Failing to make someone feel satisfied, purposeful, or happy.',
        cefrLevel: 'B2',
        exampleSentence: 'Some professionals stay for years in unfulfilling careers because of their past degree.',
        collocations: ['unfulfilling job', 'unfulfilling career', 'emotionally unfulfilling'],
        synonyms: ['unsatisfying', 'unrewarding', 'empty'],
        antonyms: ['fulfilling', 'rewarding']
      },
      {
        id: 'b2-sc-4',
        word: 'in vain',
        phonetic: '/ɪn veɪn/',
        partOfSpeech: 'phrase',
        definition: 'Without success or a positive result; wasted.',
        cefrLevel: 'B2',
        exampleSentence: 'Neither government wanted to admit that the earlier spending had been in vain.',
        collocations: ['all in vain', 'try in vain', 'efforts were in vain'],
        synonyms: ['uselessly', 'fruitlessly', 'for nothing']
      },
      {
        id: 'b2-sc-5',
        word: 'from scratch',
        phonetic: '/frɒm skrætʃ/',
        partOfSpeech: 'phrase',
        definition: 'From the very beginning, without using anything prepared or invested earlier.',
        cefrLevel: 'B2',
        exampleSentence: 'Ask yourself: "If I were starting from scratch today, would I still choose this project?"',
        collocations: ['start from scratch', 'build from scratch', 'bake from scratch'],
        synonyms: ['from the beginning', 'from zero']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-sc-1',
          targetWord: 'in vain',
          question: 'Why did politicians keep funding the Concorde airplane long after they knew it would lose money?',
          options: [
            'They did not want to admit that the billions already spent had been in vain (wasted without success).',
            'They thought the airplane could fly to Mars.',
            'They had forgotten how much money was in the bank.'
          ],
          correctIndex: 0,
          explanation: '"In vain" means without success or for nothing.'
        },
        {
          id: 'mc-b2-sc-2',
          targetWord: 'from scratch',
          question: 'What does it mean to "start from scratch"?',
          options: [
            'To begin completely from zero, with no prior investment',
            'To scratch your head when you are confused',
            'To finish a project ahead of schedule'
          ],
          correctIndex: 0,
          explanation: '"From scratch" is an essential B2 idiom meaning from the very beginning.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-sc-1',
          sentenceWithBlank: 'After her laptop crashed without a backup, she had to rewrite the entire essay _____.',
          targetWord: 'from scratch',
          hint: 'Idiom meaning from the very beginning',
          options: ['from scratch', 'in vain', 'hesitation', 'obligation']
        },
        {
          id: 'cl-b2-sc-2',
          sentenceWithBlank: 'Rescue teams searched the mountain all night, but their efforts were _____—the climbers had already walked down the other side.',
          targetWord: 'in vain',
          hint: 'Idiom meaning without success or result',
          options: ['in vain', 'from scratch', 'composed', 'mutual']
        }
      ],
      matching: {
        id: 'ma-b2-sc-1',
        instructions: 'Match each B2 psychology word or idiom with its meaning.',
        pairs: [
          { id: 'p1', term: 'endeavor', match: 'A serious attempt, venture, or project' },
          { id: 'p2', term: 'slog', match: 'Work slowly and doggedly through something tedious' },
          { id: 'p3', term: 'in vain', match: 'Without success or positive result' },
          { id: 'p4', term: 'from scratch', match: 'From the very beginning with no prior work' }
        ]
      }
    }
  },
  {
    id: 'b2-mrna-vaccine-platform',
    title: 'Software for the Immune System: How mRNA Technology Transformed Modern Medicine',
    subtitle: 'Decades of quiet laboratory perseverance turned fragile messenger RNA molecules into a programmable platform against viruses and even cancer.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '6 min read',
    wordCount: 535,
    cefrSummary: 'Explains biotechnology and medical history using B2 scientific verbs and contrast structures.',
    themeColor: 'purple',
    gradientFrom: 'from-purple-900',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'Traditional vaccines—used since the nineteenth century to conquer diseases like polio and measles—work by injecting a weakened or inactivated version of a virus into the body. While highly effective, growing billions of doses of live virus inside chicken eggs or giant bioreactors takes months or even years. When a new virus emerges or mutates rapidly, traditional manufacturing struggles to keep pace.',
      'Beginning in the 1990s, biochemist Katalin Karikó and immunologist Drew Weissman pursued a radically different approach at the University of Pennsylvania: messenger RNA (mRNA). Inside every living cell, DNA acts like a master library of blueprints, while mRNA serves as a temporary photocopy that carries instructions to the cell’s protein-making factories and then dissolves within days.',
      'In theory, if scientists could inject synthetic mRNA carrying the recipe for a harmless piece of a virus’s outer coat, human cells would briefly manufacture that protein themselves—training the immune system to recognize the real invader without ever exposing the patient to the virus. For years, however, grant committees rejected Karikó’s proposals because injected synthetic mRNA triggered dangerous inflammation and was destroyed by the body before cells could read it.',
      'In 2005, Karikó and Weissman discovered the missing key: swapping a single chemical building block inside the mRNA strand allowed the molecule to slip past the body’s alarm sensors undetected. Wrapped inside microscopic droplets of protective fat, the modified mRNA worked like plug-and-play software for the immune system—earning the pair the 2023 Nobel Prize in Medicine.',
      'Today, researchers are adapting mRNA technology far beyond seasonal viruses. In clinical trials for skin and pancreatic cancer, doctors sequence a patient’s tumor and design a personalized mRNA vaccine that teaches the patient’s own immune cells to hunt down remaining cancer cells.'
    ],
    targetVocabulary: [
      {
        id: 'b2-mr-1',
        word: 'mutate',
        phonetic: '/mjuːˈteɪt/',
        partOfSpeech: 'verb',
        definition: 'To undergo a change in genetic structure, creating a new variant.',
        cefrLevel: 'B2',
        exampleSentence: 'When a virus mutates rapidly, traditional vaccine manufacturing struggles to keep pace.',
        collocations: ['mutate rapidly', 'virus mutates', 'genetic mutation'],
        synonyms: ['change', 'alter', 'evolve']
      },
      {
        id: 'b2-mr-2',
        word: 'pursue',
        phonetic: '/pəˈsjuː/',
        partOfSpeech: 'verb',
        definition: 'To continue investigating, working toward, or trying to achieve a goal over time.',
        cefrLevel: 'B2',
        exampleSentence: 'Karikó and Weissman pursued a radically different approach using messenger RNA.',
        collocations: ['pursue an approach', 'pursue research', 'pursue a career'],
        synonyms: ['follow', 'strive for', 'investigate']
      },
      {
        id: 'b2-mr-3',
        word: 'synthetic',
        phonetic: '/sɪnˈθetɪk/',
        partOfSpeech: 'adjective',
        definition: 'Produced by chemical synthesis in a laboratory rather than occurring naturally.',
        cefrLevel: 'B2',
        exampleSentence: 'Injected synthetic mRNA carries the recipe for a harmless piece of a virus.',
        collocations: ['synthetic molecule', 'synthetic material', 'synthetic rubber'],
        synonyms: ['lab-grown', 'artificial', 'man-made'],
        antonyms: ['natural', 'organic']
      },
      {
        id: 'b2-mr-4',
        word: 'undetected',
        phonetic: '/ˌʌndɪˈtektɪd/',
        partOfSpeech: 'adjective',
        definition: 'Not noticed, discovered, or caught by sensors or guards.',
        cefrLevel: 'B2',
        exampleSentence: 'Swapping a single chemical building block allowed the molecule to slip past alarm sensors undetected.',
        collocations: ['slip past undetected', 'remain undetected', 'go undetected'],
        synonyms: ['unnoticed', 'unseen', 'hidden'],
        antonyms: ['detected', 'spotted']
      },
      {
        id: 'b2-mr-5',
        word: 'adapt',
        phonetic: '/əˈdæpt/',
        partOfSpeech: 'verb',
        definition: 'To modify or adjust a technology or method for a new use or purpose.',
        cefrLevel: 'B2',
        exampleSentence: 'Researchers are adapting mRNA technology to treat skin and pancreatic cancer.',
        collocations: ['adapt technology', 'adapt to change', 'easily adapted'],
        synonyms: ['modify', 'tailor', 'repurpose']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-mr-1',
          targetWord: 'synthetic',
          question: 'What is "synthetic" mRNA?',
          options: [
            'mRNA assembled chemically in a laboratory rather than extracted from a living animal',
            'A virus grown inside chicken eggs',
            'A type of antibiotic pill made from mold'
          ],
          correctIndex: 0,
          explanation: '"Synthetic" means produced artificially by chemical synthesis in a lab.'
        },
        {
          id: 'mc-b2-mr-2',
          targetWord: 'undetected',
          question: 'How did Karikó and Weissman’s 2005 discovery stop the body from destroying injected mRNA?',
          options: [
            'A small chemical change let the mRNA enter cells undetected without triggering inflammation.',
            'They froze the patient’s arm with ice.',
            'They removed all white blood cells from the body.'
          ],
          correctIndex: 0,
          explanation: '"Undetected" means without being noticed or flagged as a threat.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-mr-1',
          sentenceWithBlank: 'Influenza viruses _____ every winter, which is why doctors update the flu shot annually.',
          targetWord: 'mutate',
          hint: 'Change genetically over time',
          options: ['mutate', 'pursue', 'gauge', 'slog']
        },
        {
          id: 'cl-b2-mr-2',
          sentenceWithBlank: 'Despite early setbacks, the young scientist decided to _____ her hypothesis.',
          targetWord: 'pursue',
          hint: 'Continue working toward or investigating',
          options: ['pursue', 'mutate', 'unfurl', 'corrode']
        }
      ],
      matching: {
        id: 'ma-b2-mr-1',
        instructions: 'Match each B2 biotechnology word with its definition.',
        pairs: [
          { id: 'p1', term: 'mutate', match: 'Undergo a change in genetic structure' },
          { id: 'p2', term: 'pursue', match: 'Continue working toward a goal over time' },
          { id: 'p3', term: 'synthetic', match: 'Produced in a laboratory rather than naturally' },
          { id: 'p4', term: 'undetected', match: 'Not noticed or caught by sensors' }
        ]
      }
    }
  },
  {
    id: 'b2-quantum-computing-basics',
    title: 'Beyond Ones and Zeros: How Quantum Computers Solve Problems Supercomputers Cannot Touch',
    subtitle: 'By harnessing the strange rules of subatomic physics, quantum processors can explore millions of molecular combinations at once.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Demystifies computing physics using B2 analogies, contrast clauses, and technical vocabulary.',
    themeColor: 'purple',
    gradientFrom: 'from-indigo-950',
    gradientTo: 'to-purple-900',
    paragraphs: [
      'Every computer you have ever used—from a pocket calculator to the fastest supercomputer—processes information in the exact same way. Inside its silicon chip, billions of microscopic switches called transistors flip either off or on, representing a 0 or a 1. Whether you are editing a photo, streaming a movie, or training an artificial intelligence model, the machine breaks the task down into long chains of binary bits.',
      'Classical computers are extraordinarily fast at arithmetic, yet they hit a wall when asked to simulate complex molecules or optimize global logistics networks with billions of variables. Testing every possible arrangement of electrons in a medium-sized medicine molecule one by one would take a conventional supercomputer longer than the age of the universe.',
      'Quantum computers replace standard bits with "quantum bits," or qubits, made from individual atoms, ions, or superconducting circuits cooled to near absolute zero. Thanks to a quantum property called superposition, a qubit does not have to choose between being solely a 0 or a 1; until it is measured, it can exist in a fluid combination of both states at once.',
      'Even more powerfully, a phenomenon called entanglement links multiple qubits together so that changing the state of one instantaneously influences its partners. Whereas a classical computer with a mouse in a maze must try one corridor after another until it finds the exit, a quantum computer acts like a wave of water flooding every corridor of the maze simultaneously.',
      'Quantum machines will never replace your laptop for writing emails or browsing the web. Instead, physicists expect them to work alongside classical computers to design better fertilizer catalysts, discover new battery materials, and model complex financial risks.'
    ],
    targetVocabulary: [
      {
        id: 'b2-qc-1',
        word: 'conventional',
        phonetic: '/kənˈvenʃənl/',
        partOfSpeech: 'adjective',
        definition: 'Following the standard, traditional, or usual method.',
        cefrLevel: 'B2',
        exampleSentence: 'Simulating complex molecules would take a conventional supercomputer thousands of years.',
        collocations: ['conventional computer', 'conventional wisdom', 'conventional methods'],
        synonyms: ['standard', 'traditional', 'ordinary'],
        antonyms: ['unconventional', 'novel']
      },
      {
        id: 'b2-qc-2',
        word: 'simulate',
        phonetic: '/ˈsɪmjuleɪt/',
        partOfSpeech: 'verb',
        definition: 'To imitate the behavior or conditions of a real process using a computer model.',
        cefrLevel: 'B2',
        exampleSentence: 'Classical computers struggle to simulate how electrons interact inside complex molecules.',
        collocations: ['simulate molecules', 'simulate flight conditions', 'computer simulation'],
        synonyms: ['model', 'imitate', 'replicate']
      },
      {
        id: 'b2-qc-3',
        word: 'optimize',
        phonetic: '/ˈɒptɪmaɪz/',
        partOfSpeech: 'verb',
        definition: 'To make a system, route, or design as effective and efficient as possible.',
        cefrLevel: 'B2',
        exampleSentence: 'Airlines use algorithms to optimize flight schedules and fuel consumption.',
        collocations: ['optimize performance', 'optimize routes', 'fully optimize'],
        synonyms: ['streamline', 'maximize', 'refine']
      },
      {
        id: 'b2-qc-4',
        word: 'solely',
        phonetic: '/ˈsəʊlli/',
        partOfSpeech: 'adverb',
        definition: 'Only and not involving anything or anyone else; exclusively.',
        cefrLevel: 'B2',
        exampleSentence: 'A qubit does not have to choose between being solely a zero or a one.',
        collocations: ['rely solely on', 'solely responsible', 'based solely on'],
        synonyms: ['exclusively', 'entirely', 'merely']
      },
      {
        id: 'b2-qc-5',
        word: 'instantaneously',
        phonetic: '/ˌɪnstənˈteɪniəsli/',
        partOfSpeech: 'adverb',
        definition: 'Happening immediately, without any noticeable delay.',
        cefrLevel: 'B2',
        exampleSentence: 'Entanglement links qubits together so that changing one instantaneously influences its partners.',
        collocations: ['react instantaneously', 'instantaneously transmit', 'almost instantaneously'],
        synonyms: ['immediately', 'instantly', 'at once'],
        antonyms: ['gradually', 'eventually']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-qc-1',
          targetWord: 'simulate',
          question: 'Why do chemists want to use quantum computers to "simulate" molecules?',
          options: [
            'So they can model how new medicines or battery materials behave before making them in a lab',
            'So they can play video games at higher resolution',
            'So they can send emails without an internet connection'
          ],
          correctIndex: 0,
          explanation: 'To "simulate" means to create an accurate computer model of a real-world system.'
        },
        {
          id: 'mc-b2-qc-2',
          targetWord: 'conventional',
          question: 'What is a "conventional" computer in this article?',
          options: [
            'A standard, traditional computer that uses binary 0 and 1 transistors',
            'A computer built during the Roman Empire',
            'A quantum processor cooled to absolute zero'
          ],
          correctIndex: 0,
          explanation: '"Conventional" means standard, traditional, or currently established.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-qc-1',
          sentenceWithBlank: 'Delivery companies use software to _____ their truck routes and save fuel.',
          targetWord: 'optimize',
          hint: 'Make a system as efficient as possible',
          options: ['optimize', 'simulate', 'mutate', 'corrode']
        },
        {
          id: 'cl-b2-qc-2',
          sentenceWithBlank: 'You should never judge a job applicant _____ by the university they attended.',
          targetWord: 'solely',
          hint: 'Only; exclusively',
          options: ['solely', 'instantaneously', 'simultaneously', 'in vain']
        }
      ],
      matching: {
        id: 'ma-b2-qc-1',
        instructions: 'Match each B2 computing word with its definition.',
        pairs: [
          { id: 'p1', term: 'conventional', match: 'Following the standard or traditional method' },
          { id: 'p2', term: 'simulate', match: 'Model a real-world process on a computer' },
          { id: 'p3', term: 'optimize', match: 'Make a system as effective and efficient as possible' },
          { id: 'p4', term: 'solely', match: 'Exclusively; involving nothing else' }
        ]
      }
    }
  },
  {
    id: 'b2-sponge-cities-flooding',
    title: 'Sponge Cities: Replacing Concrete Pavements with Wetlands to Absorb Extreme Rain',
    subtitle: 'Instead of fighting stormwater with taller concrete walls and wider sewer pipes, urban architects are redesigning streets to soak up rain like a natural forest.',
    level: 'B2',
    category: 'Environment',
    readTime: '6 min read',
    wordCount: 525,
    cefrSummary: 'Urban planning and climate adaptation using B2 contrast structures and environmental engineering vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-teal-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'For over a century, modern cities were engineered with a single goal whenever rain fell from the sky: get rid of the water as fast as possible. Streets, parking lots, and rooftops were sealed beneath waterproof asphalt and concrete, funneling rainwater into underground concrete pipes and dumping it straight into rivers. During heavy cloudbursts, however, water cannot sink into paved ground, causing storm drains to overflow and submerge subway stations and neighborhoods.',
      'Making matters worse, sealing the soil creates a paradoxical cycle: the same cities that suffer from flash floods during monsoon weeks often experience severe groundwater shortages and scorching heatwaves during dry months because no rainwater was stored in the earth below.',
      'Pioneered by Chinese landscape architect Kongjian Yu and adopted in cities from Wuhan and Rotterdam to Copenhagen, the "Sponge City" movement turns traditional flood engineering on its head. Rather than treating rainwater as waste to be expelled, a sponge city is designed to slow down, absorb, filter, and store up to seventy percent of its rainfall.',
      'To achieve this, engineers replace solid asphalt sidewalks with permeable paving stones that allow water to trickle down into gravel beds beneath the street. Along riverbanks, vertical concrete walls are demolished and replaced with terraced wetland parks planted with native reeds. During heavy storms, these sunken parks act as temporary retention basins that safely hold millions of liters of floodwater.',
      'As the storm passes, wetland plants naturally filter out road pollutants while the stored water slowly replenishes underground aquifers—cooling the city through evaporation in summer and turning ugly drainage ditches into thriving green habitats.'
    ],
    targetVocabulary: [
      {
        id: 'b2-sp-1',
        word: 'submerge',
        phonetic: '/səbˈmɜːdʒ/',
        partOfSpeech: 'verb',
        definition: 'To cover completely with water; to flood.',
        cefrLevel: 'B2',
        exampleSentence: 'When storm drains overflow, floodwaters can submerge streets and subway stations.',
        collocations: ['completely submerge', 'submerge streets', 'partially submerged'],
        synonyms: ['flood', 'inundate', 'sink'],
        antonyms: ['drain', 'uncover']
      },
      {
        id: 'b2-sp-2',
        word: 'permeable',
        phonetic: '/ˈpɜːmiəbl/',
        partOfSpeech: 'adjective',
        definition: 'Allowing liquids or gases to pass through tiny pores or openings.',
        cefrLevel: 'B2',
        exampleSentence: 'Engineers replace solid asphalt with permeable paving stones that let rainwater soak into the ground.',
        collocations: ['permeable pavement', 'permeable soil', 'highly permeable'],
        synonyms: ['porous', 'absorbent'],
        antonyms: ['waterproof', 'impermeable']
      },
      {
        id: 'b2-sp-3',
        word: 'demolish',
        phonetic: '/dɪˈmɒlɪʃ/',
        partOfSpeech: 'verb',
        definition: 'To pull or knock down a building or wall completely.',
        cefrLevel: 'B2',
        exampleSentence: 'Along riverbanks, vertical concrete walls are demolished and replaced with wetland parks.',
        collocations: ['demolish a wall', 'demolish an old building', 'completely demolish'],
        synonyms: ['tear down', 'knock down', 'bulldoze'],
        antonyms: ['construct', 'erect']
      },
      {
        id: 'b2-sp-4',
        word: 'retention',
        phonetic: '/rɪˈtenʃn/',
        partOfSpeech: 'noun',
        definition: 'The continued holding, keeping, or storing of something (such as water, heat, or memory).',
        cefrLevel: 'B2',
        exampleSentence: 'Sunken parks act as temporary retention basins that safely hold floodwater.',
        collocations: ['water retention', 'retention basin', 'memory retention'],
        synonyms: ['storage', 'holding', 'preservation'],
        antonyms: ['release', 'loss']
      },
      {
        id: 'b2-sp-5',
        word: 'replenish',
        phonetic: '/rɪˈplenɪʃ/',
        partOfSpeech: 'verb',
        definition: 'To fill something up again; to restore a supply to its former level.',
        cefrLevel: 'B2',
        exampleSentence: 'Stored rainwater slowly sinks down and replenishes underground aquifers.',
        collocations: ['replenish groundwater', 'replenish supplies', 'naturally replenish'],
        synonyms: ['refill', 'restore', 'top up'],
        antonyms: ['deplete', 'exhaust']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-sp-1',
          targetWord: 'permeable',
          question: 'How does "permeable" pavement help prevent street flooding?',
          options: [
            'It has tiny pores and gaps that allow rainwater to soak down into the soil beneath the street.',
            'It heats up the road so rainwater boils away instantly.',
            'It blocks all water from touching the ground.'
          ],
          correctIndex: 0,
          explanation: '"Permeable" materials allow liquid to pass through them.'
        },
        {
          id: 'mc-b2-sp-2',
          targetWord: 'replenish',
          question: 'What happens when wetland parks "replenish" underground aquifers?',
          options: [
            'They refill underground water reserves that had been used up during dry months.',
            'They pump salty ocean water into city pipes.',
            'They empty the river into the sea.'
          ],
          correctIndex: 0,
          explanation: 'To "replenish" means to refill or restore a depleted supply.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-sp-1',
          sentenceWithBlank: 'The city decided to _____ the abandoned concrete factory and turn the land into a public park.',
          targetWord: 'demolish',
          hint: 'Knock down or tear down a structure',
          options: ['demolish', 'submerge', 'replenish', 'simulate']
        },
        {
          id: 'cl-b2-sp-2',
          sentenceWithBlank: 'Autumn rains helped _____ the mountain reservoirs after a long, dry summer.',
          targetWord: 'replenish',
          hint: 'Refill or restore to its previous level',
          options: ['replenish', 'submerge', 'demolish', 'optimize']
        }
      ],
      matching: {
        id: 'ma-b2-sp-1',
        instructions: 'Match each B2 environmental engineering word with its definition.',
        pairs: [
          { id: 'p1', term: 'submerge', match: 'Cover completely with water' },
          { id: 'p2', term: 'permeable', match: 'Allowing liquids to pass through tiny openings' },
          { id: 'p3', term: 'demolish', match: 'Tear or knock down a building or wall' },
          { id: 'p4', term: 'replenish', match: 'Refill or restore a used supply' }
        ]
      }
    }
  },
  {
    id: 'b2-adolescent-brain-risk',
    title: 'Inside the Teenage Brain: Why Risk-Taking Peaks Before the Prefrontal Cortex Matures',
    subtitle: 'Longitudinal MRI studies reveal that the human brain develops from back to front—creating a temporary gap between emotional reward centers and impulse control.',
    level: 'B2',
    category: 'Neuroscience & Politics',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Explains developmental neuroscience using B2 comparative clauses and psychological terminology.',
    themeColor: 'indigo',
    gradientFrom: 'from-blue-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Parents have wondered for centuries why intelligent, thoughtful teenagers—who understand the rules of safety just as well as adults in a quiet classroom—sometimes make impulsive, high-risk decisions when out with their friends on a Friday night. For a long time, popular culture blamed teenage behavior simply on "raging hormones." Over the past twenty years, however, longitudinal MRI studies have revealed a far clearer neurological explanation.',
      'Contrary to the old belief that brain growth finishes in early childhood, the human brain undergoes a massive wave of remodeling during adolescence that continues until roughly age twenty-five. Crucially, different regions of the brain do not mature on the same schedule; instead, brain development proceeds gradually from the back of the head toward the front.',
      'The limbic system—an evolutionary ancient set of deep structures that processes emotion, social rewards, and novelty—becomes hypersensitive during early puberty. When a teenager’s peers are watching, the brain’s dopamine reward center fires far more strongly than it does in either a ten-year-old child or a thirty-year-old adult. Winning social approval from friends feels intensely rewarding.',
      'Meanwhile, the prefrontal cortex—the executive control center right behind the forehead that weighs long-term consequences and puts the brakes on reckless impulses—is the very last part of the brain to finish wiring itself. Neuroscientist Laurence Steinberg compares the adolescent brain to a sports car with a powerful, turbocharged engine (the reward system) and brakes that are still under construction (the prefrontal cortex).',
      'Evolutionary biologists point out that this temporary mismatch served a vital purpose: in every mammal species, adolescents must summon the courage to leave the safety of their parents’ nest, explore unfamiliar territory, and build alliances with peers. Channeling that natural appetite for novelty into sports, music, travel, or creative leadership turns teenage brain chemistry into a superpower.'
    ],
    targetVocabulary: [
      {
        id: 'b2-ab-1',
        word: 'impulsive',
        phonetic: '/ɪmˈpʌlsɪv/',
        partOfSpeech: 'adjective',
        definition: 'Acting suddenly without thinking carefully about the consequences first.',
        cefrLevel: 'B2',
        exampleSentence: 'Teenagers sometimes make impulsive decisions when surrounded by their friends.',
        collocations: ['impulsive decision', 'impulsive behavior', 'act impulsively'],
        synonyms: ['rash', 'spontaneous', 'hasty'],
        antonyms: ['cautious', 'deliberate']
      },
      {
        id: 'b2-ab-2',
        word: 'mature',
        phonetic: '/məˈtʃʊə(r)/',
        partOfSpeech: 'verb',
        definition: 'To become fully developed physically, biologically, or emotionally.',
        cefrLevel: 'B2',
        exampleSentence: 'Different regions of the human brain do not mature on the exact same schedule.',
        collocations: ['fully mature', 'slowly mature', 'prefrontal cortex matures'],
        synonyms: ['develop', 'ripen', 'grow up']
      },
      {
        id: 'b2-ab-3',
        word: 'peer',
        phonetic: '/pɪə(r)/',
        partOfSpeech: 'noun',
        definition: 'A person of the same age, status, or social group as you.',
        cefrLevel: 'B2',
        exampleSentence: 'When a teenager’s peers are watching, the brain’s reward center fires strongly.',
        collocations: ['peer pressure', 'approval from peers', 'group of peers'],
        synonyms: ['classmate', 'contemporary', 'equal']
      },
      {
        id: 'b2-ab-4',
        word: 'reckless',
        phonetic: '/ˈrekləs/',
        partOfSpeech: 'adjective',
        definition: 'Showing a lack of care about danger or the possible results of one’s actions.',
        cefrLevel: 'B2',
        exampleSentence: 'The prefrontal cortex puts the brakes on reckless impulses.',
        collocations: ['reckless driving', 'reckless impulse', 'reckless behavior'],
        synonyms: ['careless', 'irresponsible', 'foolhardy'],
        antonyms: ['prudent', 'careful']
      },
      {
        id: 'b2-ab-5',
        word: 'channel',
        phonetic: '/ˈtʃænl/',
        partOfSpeech: 'verb',
        definition: 'To direct energy, emotion, or resources toward a particular constructive purpose.',
        cefrLevel: 'B2',
        exampleSentence: 'Schools can help students channel their appetite for novelty into sports, music, or science.',
        collocations: ['channel energy into', 'channel enthusiasm', 'positively channel'],
        synonyms: ['direct', 'focus', 'guide']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-ab-1',
          targetWord: 'impulsive',
          question: 'Why does the "sports car" analogy explain "impulsive" teenage behavior?',
          options: [
            'Because the emotional reward system (engine) develops years earlier than the prefrontal cortex (brakes) that stops hasty actions.',
            'Because teenagers do not know the rules of safety when they are in a quiet room.',
            'Because the prefrontal cortex shrinks at age fifteen.'
          ],
          correctIndex: 0,
          explanation: '"Impulsive" means acting on sudden urges without weighing long-term consequences.'
        },
        {
          id: 'mc-b2-ab-2',
          targetWord: 'channel',
          question: 'What does it mean to "channel" a teenager’s desire for excitement into sports or music?',
          options: [
            'To direct that natural energy toward a positive, creative activity',
            'To forbid teenagers from leaving the house',
            'To watch a television channel about sports'
          ],
          correctIndex: 0,
          explanation: 'As a verb, "channel" means to direct energy or emotion toward a constructive goal.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-ab-1',
          sentenceWithBlank: 'Driving at high speed on icy winter roads is _____ and puts everyone in danger.',
          targetWord: 'reckless',
          hint: 'Ignoring danger and consequences',
          options: ['reckless', 'permeable', 'conventional', 'composed']
        },
        {
          id: 'cl-b2-ab-2',
          sentenceWithBlank: 'Adolescents care deeply about how they are viewed by their _____ at school.',
          targetWord: 'peers',
          hint: 'People of the same age group (plural)',
          options: ['peers', 'skeptics', 'endeavors', 'obligations']
        }
      ],
      matching: {
        id: 'ma-b2-ab-1',
        instructions: 'Match each B2 neuroscience and behavior word with its definition.',
        pairs: [
          { id: 'p1', term: 'impulsive', match: 'Acting suddenly without thinking of consequences' },
          { id: 'p2', term: 'mature', match: 'Become fully developed physically or biologically' },
          { id: 'p3', term: 'reckless', match: 'Ignoring danger or the safety of others' },
          { id: 'p4', term: 'channel', match: 'Direct energy or emotion toward a positive goal' }
        ]
      }
    }
  },
  {
    id: 'b2-ranked-choice-voting',
    title: 'Rethinking the Ballot: How Ranked-Choice Voting Changes Political Campaigns',
    subtitle: 'In traditional elections, a candidate can win even if sixty percent of voters dislike them. Political scientists are testing a simple ballot reform that rewards consensus.',
    level: 'B2',
    category: 'Neuroscience & Politics',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Political science and electoral systems explained with B2 conditionals and cause-and-effect vocabulary.',
    themeColor: 'rose',
    gradientFrom: 'from-rose-950',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'In many democracies, elections are decided by a rule called "first-past-the-post": every voter marks a single X next to one candidate’s name, and whichever candidate receives the largest number of votes wins—even if they fall far short of a fifty-percent majority. When only two candidates are running, this system works simply enough. When four or five candidates compete, however, it produces a well-known distortion called the "spoiler effect."',
      'Suppose two moderate candidates with similar ideas split sixty percent of the vote equally (thirty percent each), while a polarizing candidate on the fringe wins forty percent. Under first-past-the-post rules, the candidate with forty percent wins the seat, even though sixty percent of the electorate strongly preferred a moderate alternative. Fearing that a vote for a smaller party will be "wasted," citizens often vote strategically against a candidate they dislike rather than for a leader they genuinely admire.',
      'To solve this problem, countries such as Australia and Ireland—along with dozens of cities and states in the United States—use "ranked-choice voting" (also known as instant-runoff voting). Instead of picking only one name, voters rank candidates in order of preference: 1st choice, 2nd choice, 3rd choice, and so on.',
      'If one candidate wins more than fifty percent of first-choice votes right away, the election is over. If no one reaches fifty percent, the candidate in last place is eliminated, and anyone who voted for that last-place candidate has their ballot automatically transferred to their second choice. This round-by-round tally continues until one candidate secures a true majority.',
      'Beyond eliminating wasted votes, ranked-choice voting changes how politicians behave on the campaign trail. Because candidates need second- and third-choice support from their rivals’ voters to win, they have a strong incentive to avoid personal mudslinging and build broader coalitions.'
    ],
    targetVocabulary: [
      {
        id: 'b2-rv-1',
        word: 'majority',
        phonetic: '/məˈdʒɒrəti/',
        partOfSpeech: 'noun',
        definition: 'More than half of the total number of votes or people in a group.',
        cefrLevel: 'B2',
        exampleSentence: 'The tally continues until one candidate secures a true majority of over fifty percent.',
        collocations: ['clear majority', 'win a majority', 'vast majority'],
        synonyms: ['more than half', 'bulk'],
        antonyms: ['minority']
      },
      {
        id: 'b2-rv-2',
        word: 'polarizing',
        phonetic: '/ˈpəʊləraɪzɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Causing people to divide into two sharply opposing, hostile groups.',
        cefrLevel: 'B2',
        exampleSentence: 'A polarizing candidate can win a crowded election with only forty percent of the vote.',
        collocations: ['polarizing figure', 'polarizing issue', 'deeply polarizing'],
        synonyms: ['divisive', 'controversial'],
        antonyms: ['unifying', 'consensus-building']
      },
      {
        id: 'b2-rv-3',
        word: 'electorate',
        phonetic: '/ɪˈlektərət/',
        partOfSpeech: 'noun',
        definition: 'All the citizens in a country or area who are entitled to vote in an election.',
        cefrLevel: 'B2',
        exampleSentence: 'Sixty percent of the electorate preferred a moderate alternative.',
        collocations: ['appeal to the electorate', 'mood of the electorate', 'broad electorate'],
        synonyms: ['voters', 'voting public', 'citizens']
      },
      {
        id: 'b2-rv-4',
        word: 'incentive',
        phonetic: '/ɪnˈsentɪv/',
        partOfSpeech: 'noun',
        definition: 'A reward or reason that encourages someone to behave in a particular way.',
        cefrLevel: 'B2',
        exampleSentence: 'Candidates have a strong incentive to avoid personal attacks and appeal to second-choice voters.',
        collocations: ['strong incentive', 'financial incentive', 'create an incentive'],
        synonyms: ['motivation', 'encouragement', 'inducement'],
        antonyms: ['deterrent', 'disincentive']
      },
      {
        id: 'b2-rv-5',
        word: 'coalition',
        phonetic: '/ˌkəʊəˈlɪʃn/',
        partOfSpeech: 'noun',
        definition: 'An alliance of different groups, parties, or voters working together toward a common goal.',
        cefrLevel: 'B2',
        exampleSentence: 'Ranked-choice voting encourages leaders to build broader coalitions across the community.',
        collocations: ['build a coalition', 'governing coalition', 'broad coalition'],
        synonyms: ['alliance', 'partnership', 'union']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-rv-1',
          targetWord: 'incentive',
          question: 'Why does ranked-choice voting give politicians an "incentive" to be more polite to rival candidates?',
          options: [
            'Because they want rival supporters to rank them as their 2nd choice on the ballot.',
            'Because rude candidates are fined ten thousand dollars.',
            'Because ranked-choice elections do not allow television ads.'
          ],
          correctIndex: 0,
          explanation: 'An "incentive" is a motivating reason or reward for acting a certain way.'
        },
        {
          id: 'mc-b2-rv-2',
          targetWord: 'polarizing',
          question: 'What is a "polarizing" politician?',
          options: [
            'A figure who divides voters into two strongly opposing camps of admirers and critics',
            'A politician who campaigns near the North Pole',
            'A candidate whom every single voter agrees with'
          ],
          correctIndex: 0,
          explanation: '"Polarizing" means dividing people into sharply opposing sides.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-rv-1',
          sentenceWithBlank: 'Government tax rebates provide a financial _____ for homeowners to install solar panels.',
          targetWord: 'incentive',
          hint: 'A reward or reason that encourages an action',
          options: ['incentive', 'electorate', 'coalition', 'retention']
        },
        {
          id: 'cl-b2-rv-2',
          sentenceWithBlank: 'Because no single party won over half the seats in parliament, three parties formed a governing _____.',
          targetWord: 'coalition',
          hint: 'An alliance of parties working together',
          options: ['coalition', 'majority', 'obligation', 'hesitation']
        }
      ],
      matching: {
        id: 'ma-b2-rv-1',
        instructions: 'Match each B2 political science term with its definition.',
        pairs: [
          { id: 'p1', term: 'majority', match: 'More than fifty percent of the total votes' },
          { id: 'p2', term: 'polarizing', match: 'Dividing people into sharply opposing camps' },
          { id: 'p3', term: 'electorate', match: 'All the citizens eligible to vote in an election' },
          { id: 'p4', term: 'incentive', match: 'A reason or reward that encourages specific behavior' }
        ]
      }
    }
  },
  {
    id: 'b2-supply-chain-just-in-time',
    title: 'The End of Just-in-Time Manufacturing: Why Global Factories Are Stockpiling Parts Again',
    subtitle: 'For forty years, corporations cut costs by keeping warehouses nearly empty. Recent global disruptions taught executives that lean supply chains can be dangerously fragile.',
    level: 'B2',
    category: 'Modern Economics',
    readTime: '6 min read',
    wordCount: 530,
    cefrSummary: 'Global trade and industrial economics using B2 contrast connectors and business vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Pioneered by Japanese automaker Toyota in the 1970s and later adopted by almost every multinational corporation on Earth, "Just-in-Time" (JIT) manufacturing was hailed for decades as the gold standard of industrial efficiency. Under a Just-in-Time system, a car or electronics factory does not pay to store thousands of spare microchips, brakes, or screens in giant warehouses. Instead, suppliers deliver the exact number of parts onto the factory floor just hours before they are bolted onto the assembly line.',
      'During decades of calm global trade and predictable shipping schedules, this lean strategy saved companies billions of dollars in storage costs. However, it rested on a risky assumption: that container ships, ports, and distant factories would never be disrupted at the same time.',
      'Between 2020 and 2023, that assumption collided with reality. Pandemic factory shutdowns, a giant container ship wedged sideways across the Suez Canal for six days, and extreme droughts restricting cargo traffic through the Panama Canal exposed how vulnerable ultra-lean supply chains had become. Automakers were forced to leave tens of thousands of nearly finished cars sitting in parking lots simply because they lacked a single two-dollar computer chip.',
      'In response, corporate economists are shifting from "Just-in-Time" toward a more cautious philosophy nicknamed "Just-in-Case." Companies are now deliberately stockpiling critical components, signing contracts with backup suppliers in multiple countries, and moving factories closer to their home markets—a trend known as "nearshoring."',
      'Holding extra inventory and diversifying suppliers inevitably adds a few percentage points to manufacturing costs. Yet executives have concluded that paying a small insurance premium every year is far cheaper than watching an entire assembly line grind to a halt during the next unexpected crisis.'
    ],
    targetVocabulary: [
      {
        id: 'b2-jit-1',
        word: 'disrupt',
        phonetic: '/dɪsˈrʌpt/',
        partOfSpeech: 'verb',
        definition: 'To interrupt the normal progress or operation of a system by causing a disturbance.',
        cefrLevel: 'B2',
        exampleSentence: 'Just-in-Time manufacturing assumed that shipping schedules would never be disrupted.',
        collocations: ['disrupt supply chains', 'severely disrupt', 'disrupt traffic'],
        synonyms: ['interrupt', 'disturb', 'throw into chaos']
      },
      {
        id: 'b2-jit-2',
        word: 'vulnerable',
        phonetic: '/ˈvʌlnərəbl/',
        partOfSpeech: 'adjective',
        definition: 'Exposed to the possibility of being harmed, damaged, or disrupted.',
        cefrLevel: 'B2',
        exampleSentence: 'Global shipping delays exposed how vulnerable ultra-lean supply chains had become.',
        collocations: ['vulnerable to disruption', 'leave vulnerable', 'highly vulnerable'],
        synonyms: ['exposed', 'susceptible', 'defenseless'],
        antonyms: ['resilient', 'protected']
      },
      {
        id: 'b2-jit-3',
        word: 'stockpile',
        phonetic: '/ˈstɒkpaɪl/',
        partOfSpeech: 'verb',
        definition: 'To accumulate and store a large reserve of goods or materials for future emergencies.',
        cefrLevel: 'B2',
        exampleSentence: 'Companies are now deliberately stockpiling critical computer chips and raw materials.',
        collocations: ['stockpile parts', 'stockpile emergency supplies', 'build a stockpile'],
        synonyms: ['hoard', 'store up', 'amass']
      },
      {
        id: 'b2-jit-4',
        word: 'inventory',
        phonetic: '/ˈɪnvəntri/',
        partOfSpeech: 'noun',
        definition: 'The complete stock of raw materials, parts, or finished goods held by a business.',
        cefrLevel: 'B2',
        exampleSentence: 'Holding extra inventory in warehouses adds slightly to manufacturing costs.',
        collocations: ['extra inventory', 'warehouse inventory', 'manage inventory'],
        synonyms: ['stock', 'supplies', 'reserves']
      },
      {
        id: 'b2-jit-5',
        word: 'grind to a halt',
        phonetic: '/ɡraɪnd tu ə hɔːlt/',
        partOfSpeech: 'phrase',
        definition: 'To slowly lose momentum and stop working or moving completely.',
        cefrLevel: 'B2',
        exampleSentence: 'Running out of a two-dollar microchip can cause an entire car factory to grind to a halt.',
        collocations: ['grind to a halt', 'production ground to a halt', 'traffic ground to a halt'],
        synonyms: ['stop completely', 'come to a standstill']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-jit-1',
          targetWord: 'stockpile',
          question: 'How does the "Just-in-Case" strategy differ from "Just-in-Time"?',
          options: [
            'Companies stockpile (store extra reserves of) essential parts in warehouses in case of shipping delays.',
            'Companies close all their warehouses and order parts only once a year.',
            'Companies stop using ships and transport cars by bicycle.'
          ],
          correctIndex: 0,
          explanation: 'To "stockpile" means to build up a reserve supply of essential goods.'
        },
        {
          id: 'mc-b2-jit-2',
          targetWord: 'grind to a halt',
          question: 'What happened when car factories lacked a single two-dollar computer chip?',
          options: [
            'Their assembly lines ground to a halt—stopping production completely.',
            'They sold the cars without engines.',
            'They doubled the speed of their conveyor belts.'
          ],
          correctIndex: 0,
          explanation: '"Grind to a halt" is a high-frequency B2 idiom meaning to come to a complete standstill.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-jit-1',
          sentenceWithBlank: 'Coastal towns that rely on a single power line are _____ to blackouts during winter storms.',
          targetWord: 'vulnerable',
          hint: 'Exposed to harm or disruption',
          options: ['vulnerable', 'permeable', 'impulsive', 'polarizing']
        },
        {
          id: 'cl-b2-jit-2',
          sentenceWithBlank: 'Before winter arrives, road maintenance crews _____ thousands of tons of rock salt.',
          targetWord: 'stockpile',
          hint: 'Store up a large reserve for future need',
          options: ['stockpile', 'demolish', 'submerge', 'channel']
        }
      ],
      matching: {
        id: 'ma-b2-jit-1',
        instructions: 'Match each B2 supply-chain term or idiom with its definition.',
        pairs: [
          { id: 'p1', term: 'vulnerable', match: 'Exposed to the risk of harm or disruption' },
          { id: 'p2', term: 'stockpile', match: 'Store up a large reserve of essential supplies' },
          { id: 'p3', term: 'inventory', match: 'The stock of parts or goods held in a warehouse' },
          { id: 'p4', term: 'grind to a halt', match: 'Come to a complete stop or standstill' }
        ]
      }
    }
  }
];


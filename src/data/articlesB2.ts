import { Article } from '../types';
import { B2_PRO_BATCH_1 } from './articlesB2ProBatch1';
import { B2_PRO_BATCH_2 } from './articlesB2ProBatch2';

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
  },
  {
    id: 'b2-ulugh-beg-observatory-legacy',
    title: 'Starlight Over Samarkand: How Ulugh Beg’s Observatory Mapped the Heavens',
    subtitle: 'In the 1420s, a mathematician-king built the largest astronomical instrument in the world and measured the length of a year to within seconds.',
    level: 'B2',
    category: 'History & Civilizations',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 510,
    cefrSummary: 'Scientific history, observational precision, and B2 academic vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-950',
    gradientTo: 'to-amber-950',
    heroImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The underground marble arc of Ulugh Beg’s sextant in Samarkand allowed astronomers to measure celestial angles with unprecedented accuracy.',
    paragraphs: [
      'Two centuries before Galileo pointed a telescope at the night sky, a hill overlooking Samarkand hosted the most advanced scientific institute on Earth. Its founder, Ulugh Beg, was the grandson of the conqueror Timur, yet his deepest passion was not military conquest but spherical trigonometry and observational astronomy. In 1420, he invited dozens of leading mathematicians and astronomers to his capital to correct errors in ancient Greek and Arabic star tables.',
      'Researchers soon realized that small handheld brass instruments bent slightly under their own weight, distorting measurements by fractions of a degree. To overcome this limitation, Ulugh Beg’s team carved a colossal curved trench deep into solid bedrock and lined it with polished marble plates. This forty-meter-radius arc, known as the Fakhri sextant, functioned like a giant underground protractor.',
      'At noon each day, a beam of sunlight passed through a tiny opening in the observatory’s high dome and fell onto the graduated marble steps in the dark chamber below. By tracking the exact position of this spot of light throughout the seasons, astronomers calculated the tilt of the Earth’s axis and determined the length of the tropical year to within less than a minute of modern atomic measurements.',
      'Working night after night for nearly two decades, the Samarkand scholars compiled the Zij-i Sultani, a comprehensive catalog listing the coordinates of nearly one thousand stars. When copies of this masterwork eventually reached Istanbul, Oxford, and Venice, its empirical rigor helped inspire the European scientific revolution.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-ubo-1',
        word: 'distort',
        partOfSpeech: 'verb',
        phonetic: '/dɪˈstɔːt/',
        definition: 'To twist or change the shape, appearance, or accuracy of something so that it is no longer true or exact.',
        contextSentence: 'Researchers soon realized that small handheld brass instruments bent slightly under their own weight, distorting measurements by fractions of a degree.',
        exampleSentence: 'Curved mirrors distort your reflection by making you look taller or wider than you really are.',
        synonyms: ['warp', 'skew', 'misrepresent'],
        collocations: ['distort measurements', 'distort the truth', 'distort an image'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-ubo-2',
        word: 'overcome',
        partOfSpeech: 'verb',
        phonetic: '/ˌəʊvəˈkʌm/',
        definition: 'To successfully deal with or defeat a problem, obstacle, or limitation.',
        contextSentence: 'To overcome this limitation, Ulugh Beg’s team carved a colossal curved trench deep into solid bedrock and lined it with polished marble plates.',
        exampleSentence: 'Engineers had to overcome severe freezing temperatures while building the mountain tunnel.',
        synonyms: ['conquer', 'surmount', 'resolve'],
        collocations: ['overcome a limitation', 'overcome obstacles', 'overcome fear'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-ubo-3',
        word: 'colossal',
        partOfSpeech: 'adjective',
        phonetic: '/kəˈlɒsl/',
        definition: 'Extremely large or grand in size, scale, or degree.',
        contextSentence: 'To overcome this limitation, Ulugh Beg’s team carved a colossal curved trench deep into solid bedrock and lined it with polished marble plates.',
        exampleSentence: 'Constructing the hydroelectric dam required a colossal amount of concrete and steel.',
        synonyms: ['immense', 'gigantic', 'vast'],
        collocations: ['colossal scale', 'colossal structure', 'colossal effort'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-ubo-4',
        word: 'compile',
        partOfSpeech: 'verb',
        phonetic: '/kəmˈpaɪl/',
        definition: 'To collect information from different observations or sources and arrange it into a list, book, or report.',
        contextSentence: 'Working night after night for nearly two decades, the Samarkand scholars compiled the Zij-i Sultani, a comprehensive catalog listing the coordinates of nearly one thousand stars.',
        exampleSentence: 'Lexicographers spend years reading newspapers and books to compile a modern dictionary.',
        synonyms: ['assemble', 'gather', 'put together'],
        collocations: ['compile a catalog', 'compile data', 'compile a report'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-ubo-5',
        word: 'comprehensive',
        partOfSpeech: 'adjective',
        phonetic: '/ˌkɒmprɪˈhensɪv/',
        definition: 'Complete and including all or nearly all elements, details, or aspects of a subject.',
        contextSentence: 'Working night after night for nearly two decades, the Samarkand scholars compiled the Zij-i Sultani, a comprehensive catalog listing the coordinates of nearly one thousand stars.',
        exampleSentence: 'The safety inspector carried out a comprehensive review of every bridge in the province.',
        synonyms: ['thorough', 'complete', 'all-inclusive'],
        collocations: ['comprehensive catalog', 'comprehensive study', 'comprehensive guide'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-ubo-1',
          targetWord: 'distort',
          question: 'Why did Ulugh Beg’s astronomers stop relying on small handheld brass instruments?',
          options: [
            'Because small metal tools bent slightly under their own weight, distorting the accuracy of star measurements.',
            'Because brass melted whenever sunlight touched it.',
            'Because handheld instruments could only measure the Moon.',
            'Because marble was lighter to carry in a pocket than brass.'
          ],
          correctIndex: 0,
          explanation: 'To "distort" means to warp or alter something so that it becomes inaccurate.'
        },
        {
          id: 'mc-b2-ubo-2',
          targetWord: 'compile',
          question: 'What did the Samarkand astronomers do over nearly two decades of nightly observations?',
          options: [
            'They compiled the Zij-i Sultani, gathering and organizing the coordinates of nearly a thousand stars.',
            'They demolished the observatory to build a harbor.',
            'They hid their findings so no other scientist could read them.'
          ],
          correctIndex: 0,
          explanation: 'To "compile" means to collect and systematically arrange data into a catalog or volume.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-ubo-1',
          sentenceWithBlank: 'Before buying an older house, it is wise to pay for a _____ inspection of the roof, wiring, and plumbing.',
          targetWord: 'comprehensive',
          hint: 'Thorough and covering all important details',
          options: ['comprehensive', 'vulnerable', 'impulsive', 'fragile']
        },
        {
          id: 'cl-b2-ubo-2',
          sentenceWithBlank: 'With daily practice and a supportive coach, she managed to _____ her fear of speaking in public.',
          targetWord: 'overcome',
          hint: 'Successfully defeat or deal with a difficulty',
          options: ['overcome', 'distort', 'stockpile', 'submerge']
        }
      ],
      matching: {
        id: 'ma-b2-ubo-1',
        instructions: 'Match each B2 historical science word with its English definition.',
        pairs: [
          { id: 'p1', term: 'distort', match: 'Twist or alter something so it becomes inaccurate' },
          { id: 'p2', term: 'overcome', match: 'Successfully deal with a problem or obstacle' },
          { id: 'p3', term: 'compile', match: 'Gather information and arrange it into a catalog or list' },
          { id: 'p4', term: 'comprehensive', match: 'Complete and covering nearly every detail of a subject' }
        ]
      }
    }
  },
  {
    id: 'b2-aral-sea-saxaul-afforestation',
    title: 'Planting a Forest on a Seabed: How Saxaul Trees Are Healing the Aralikum Desert',
    subtitle: 'Where fishing boats once sailed, ecologists and local communities are planting millions of drought-resistant shrubs to hold back toxic dust storms.',
    level: 'B2',
    category: 'Environment',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 515,
    cefrSummary: 'Ecological restoration in Central Asia and B2 environmental cause-and-effect vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Hardy desert shrubs stabilize shifting sands and create sheltered micro-habitats across the dried seabed.',
    paragraphs: [
      'In the middle of the twentieth century, the Aral Sea was the fourth-largest inland lake on the planet, supporting thriving fishing ports and moderating the climate of Central Asia. However, after massive irrigation canals diverted the waters of the Amu Darya and Syr Darya rivers across millions of hectares of cotton fields, the sea shrank dramatically. In its place emerged the Aralikum—the world’s youngest salt desert.',
      'As the water retreated, it left behind a crusty plain of sand mixed with salt and agricultural chemicals. Whenever fierce steppe winds swept across the exposed seabed, they lifted millions of tons of salty dust into the atmosphere, damaging crops and threatening public health hundreds of kilometers away.',
      'While restoring the entire inland sea is impossible in the short term, forestry scientists in Uzbekistan and Kazakhstan have launched an ambitious ecological intervention. Every winter and spring, fleets of tractors and aircraft sow seeds of the black saxaul—a remarkable native desert shrub capable of thriving in salty, bone-dry soil where few other plants can survive.',
      'As saxaul saplings take root, their deep root networks anchor the loose sand and reduce wind speed near the ground. A single mature saxaul bush can trap several tons of blowing dust around its base, gradually allowing native grasses, lizards, and birds to return to the once-barren landscape.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-asa-1',
        word: 'divert',
        partOfSpeech: 'verb',
        phonetic: '/daɪˈvɜːt/',
        definition: 'To cause water, traffic, or resources to change direction and flow along a different route.',
        contextSentence: 'However, after massive irrigation canals diverted the waters of the Amu Darya and Syr Darya rivers across millions of hectares of cotton fields, the sea shrank dramatically.',
        exampleSentence: 'Police had to divert traffic onto side streets while workers repaired the main bridge.',
        synonyms: ['redirect', 'reroute', 'channel'],
        collocations: ['divert water', 'divert rivers', 'divert traffic'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-asa-2',
        word: 'retreat',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈtriːt/',
        definition: 'To move back or withdraw from a previous position or level.',
        contextSentence: 'As the water retreated, it left behind a crusty plain of sand mixed with salt and agricultural chemicals.',
        exampleSentence: 'Mountain glaciers have retreated rapidly over the past fifty years due to warmer summers.',
        synonyms: ['recede', 'withdraw', 'pull back'],
        collocations: ['water retreated', 'glaciers retreat', 'forced to retreat'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-asa-3',
        word: 'intervention',
        partOfSpeech: 'noun',
        phonetic: '/ˌɪntəˈvenʃn/',
        definition: 'Intentional action taken to improve a difficult situation or prevent a problem from getting worse.',
        contextSentence: 'While restoring the entire inland sea is impossible in the short term, forestry scientists in Uzbekistan and Kazakhstan have launched an ambitious ecological intervention.',
        exampleSentence: 'Early medical intervention can prevent minor health issues from becoming serious illnesses.',
        synonyms: ['action', 'involvement', 'measure'],
        collocations: ['ecological intervention', 'early intervention', 'government intervention'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-asa-4',
        word: 'anchor',
        partOfSpeech: 'verb',
        phonetic: '/ˈæŋkə(r)/',
        definition: 'To hold something firmly in place so that it cannot move or blow away.',
        contextSentence: 'As saxaul saplings take root, their deep root networks anchor the loose sand and reduce wind speed near the ground.',
        exampleSentence: 'Steel cables anchor the suspension bridge securely to the rocky cliffs on both sides.',
        synonyms: ['secure', 'fasten', 'stabilize'],
        collocations: ['anchor the sand', 'anchor firmly', 'anchor in place'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-asa-5',
        word: 'barren',
        partOfSpeech: 'adjective',
        phonetic: '/ˈbærən/',
        definition: 'Too poor, dry, or damaged to produce vegetation or support much life.',
        contextSentence: 'A single mature saxaul bush can trap several tons of blowing dust around its base, gradually allowing native grasses, lizards, and birds to return to the once-barren landscape.',
        exampleSentence: 'After volcanic ash weathered into rich soil, green ferns began covering the barren lava fields.',
        synonyms: ['desolate', 'sterile', 'infertile'],
        collocations: ['barren landscape', 'barren land', 'barren desert'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-asa-1',
          targetWord: 'anchor',
          question: 'How do saxaul shrubs stop toxic dust storms from rising off the dried seabed?',
          options: [
            'Their deep roots anchor the loose sand and trap blowing dust around their stems.',
            'Their leaves release millions of liters of freshwater into the lake.',
            'They grow tall enough to block clouds in the upper atmosphere.'
          ],
          correctIndex: 0,
          explanation: 'To "anchor" something means to hold it firmly in place so it cannot shift.'
        },
        {
          id: 'mc-b2-asa-2',
          targetWord: 'divert',
          question: 'Why did the Aral Sea shrink during the second half of the twentieth century?',
          options: [
            'Because huge irrigation canals diverted the rivers that fed the sea toward agricultural fields.',
            'Because an earthquake drained the water into an underground cave.',
            'Because local fishermen caught too many fish.'
          ],
          correctIndex: 0,
          explanation: 'To "divert" a river means to change its natural course so the water flows elsewhere.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-asa-1',
          sentenceWithBlank: 'By adding compost and planting clover, the farmers transformed the _____ hillside into a productive orchard.',
          targetWord: 'barren',
          hint: 'Unable to support plants or crops',
          options: ['barren', 'colossal', 'comprehensive', 'lucid']
        },
        {
          id: 'cl-b2-asa-2',
          sentenceWithBlank: 'When the floodwaters finally began to _____, emergency crews inspected the damaged roads.',
          targetWord: 'retreat',
          hint: 'Move back or drop to a lower level',
          options: ['retreat', 'compile', 'distort', 'stockpile']
        }
      ],
      matching: {
        id: 'ma-b2-asa-1',
        instructions: 'Match each B2 environmental restoration term with its definition.',
        pairs: [
          { id: 'p1', term: 'divert', match: 'Redirect water or traffic along a different course' },
          { id: 'p2', term: 'retreat', match: 'Move back or withdraw from a previous position' },
          { id: 'p3', term: 'anchor', match: 'Hold loose soil or an object firmly in place' },
          { id: 'p4', term: 'barren', match: 'Too dry or poor to support trees and crops' }
        ]
      }
    }
  },
  {
    id: 'b2-sodium-ion-batteries-grid',
    title: 'Power from Table Salt: Why Sodium-Ion Batteries Are Joining the Clean Energy Grid',
    subtitle: 'Lithium powers almost every smartphone and laptop on Earth, but a cheaper battery made from ordinary sodium could transform renewable energy storage.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 505,
    cefrSummary: 'Clean energy storage, materials chemistry, and B2 engineering vocabulary.',
    themeColor: 'sky',
    gradientFrom: 'from-slate-950',
    gradientTo: 'to-sky-950',
    heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Large stationary battery banks store solar power generated at noon so homes have electricity after sunset.',
    paragraphs: [
      'Over the past thirty years, lithium-ion batteries have revolutionized portable electronics and electric vehicles. Because lithium is the lightest metal on the periodic table, it packs a huge amount of energy into a compact space. However, lithium is mined in only a handful of countries, and refining it requires vast quantities of water and energy, making supply chains vulnerable to price spikes.',
      'To build a truly sustainable electricity grid, engineers need gigantic battery banks that can store solar power during sunny afternoons and release it at night. For a stationary battery the size of a shipping container sitting next to a wind farm, being ultra-lightweight is far less important than being affordable, safe, and made from widely available materials.',
      'Enter the sodium-ion battery. Sodium sits directly below lithium on the periodic table and behaves in a remarkably similar way chemically, yet it is more than a thousand times more abundant in the Earth’s crust and oceans. Derived from ordinary rock salt or seawater, sodium costs a fraction of the price of battery-grade lithium and eliminates the need for scarce metals like cobalt.',
      'Furthermore, sodium-ion batteries perform reliably in freezing winter weather and pose a much lower risk of catching fire if punctured. While lithium will remain the top choice for long-range electric cars and slim smartphones, sodium batteries are rapidly becoming a practical backbone for renewable power grids worldwide.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-sib-1',
        word: 'compact',
        partOfSpeech: 'adjective',
        phonetic: '/kəmˈpækt/',
        definition: 'Closely and neatly packed together into a small space.',
        contextSentence: 'Because lithium is the lightest metal on the periodic table, it packs a huge amount of energy into a compact space.',
        exampleSentence: 'The folding bicycle is so compact that it fits easily under an office desk.',
        synonyms: ['small', 'space-saving', 'dense'],
        collocations: ['compact space', 'compact design', 'compact car'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-sib-2',
        word: 'stationary',
        partOfSpeech: 'adjective',
        phonetic: '/ˈsteɪʃənri/',
        definition: 'Not moving or not intended to be moved from one place to another.',
        contextSentence: 'For a stationary battery the size of a shipping container sitting next to a wind farm, being ultra-lightweight is far less important than being affordable, safe, and made from widely available materials.',
        exampleSentence: 'Never step off a train until it is completely stationary at the platform.',
        synonyms: ['fixed', 'immobile', 'static'],
        collocations: ['stationary battery', 'remain stationary', 'stationary vehicle'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-sib-3',
        word: 'derive',
        partOfSpeech: 'verb',
        phonetic: '/dɪˈraɪv/',
        definition: 'To obtain or produce a substance, idea, or word from a specific source or origin.',
        contextSentence: 'Derived from ordinary rock salt or seawater, sodium costs a fraction of the price of battery-grade lithium and eliminates the need for scarce metals like cobalt.',
        exampleSentence: 'The medicine aspirin was originally derived from the bark of willow trees.',
        synonyms: ['obtain', 'extract', 'originate from'],
        collocations: ['derived from', 'derive energy from', 'derive benefit'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-sib-4',
        word: 'scarce',
        partOfSpeech: 'adjective',
        phonetic: '/skeəs/',
        definition: 'Available only in very small quantities and difficult to find.',
        contextSentence: 'Derived from ordinary rock salt or seawater, sodium costs a fraction of the price of battery-grade lithium and eliminates the need for scarce metals like cobalt.',
        exampleSentence: 'Fresh green vegetables were scarce in northern towns during the winter before modern greenhouses.',
        synonyms: ['rare', 'in short supply', 'limited'],
        collocations: ['scarce metals', 'scarce resources', 'increasingly scarce'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-sib-5',
        word: 'backbone',
        partOfSpeech: 'noun',
        phonetic: '/ˈbækbəʊn/',
        definition: 'The central and most important part of a system, organization, or structure that gives it strength.',
        contextSentence: 'While lithium will remain the top choice for long-range electric cars and slim smartphones, sodium batteries are rapidly becoming a practical backbone for renewable power grids worldwide.',
        exampleSentence: 'Family-owned farms form the backbone of the region’s agricultural economy.',
        synonyms: ['foundation', 'core', 'mainstay'],
        collocations: ['backbone of the system', 'form the backbone', 'economic backbone'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-sib-1',
          targetWord: 'stationary',
          question: 'Why does the extra weight of sodium-ion batteries not matter for power-grid storage?',
          options: [
            'Because grid batteries are stationary—they sit fixed in one place next to solar or wind farms.',
            'Because sodium batteries float in the air like balloons.',
            'Because grid batteries are only used once and then thrown away.'
          ],
          correctIndex: 0,
          explanation: '"Stationary" means fixed in one spot and not meant to be carried around.'
        },
        {
          id: 'mc-b2-sib-2',
          targetWord: 'scarce',
          question: 'Why are battery manufacturers looking for alternatives to lithium and cobalt?',
          options: [
            'Because those metals are relatively scarce and mined in only a few regions.',
            'Because lithium cannot store electricity.',
            'Because seawater contains no sodium.'
          ],
          correctIndex: 0,
          explanation: '"Scarce" means rare or in short supply compared with demand.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-sib-1',
          sentenceWithBlank: 'Many everyday English scientific terms are _____ from ancient Greek and Latin roots.',
          targetWord: 'derived',
          hint: 'Obtained or developed from a source',
          options: ['derived', 'diverted', 'anchored', 'retreated']
        },
        {
          id: 'cl-b2-sib-2',
          sentenceWithBlank: 'High-speed rail lines have become the _____ of intercity travel across much of Europe and East Asia.',
          targetWord: 'backbone',
          hint: 'The central supporting structure of a system',
          options: ['backbone', 'inventory', 'intervention', 'shortage']
        }
      ],
      matching: {
        id: 'ma-b2-sib-1',
        instructions: 'Match each B2 clean-tech vocabulary word with its definition.',
        pairs: [
          { id: 'p1', term: 'compact', match: 'Neatly packed into a small, space-saving form' },
          { id: 'p2', term: 'stationary', match: 'Fixed in one location and not moving' },
          { id: 'p3', term: 'scarce', match: 'Rare and available only in small amounts' },
          { id: 'p4', term: 'backbone', match: 'The central foundation that supports an entire system' }
        ]
      }
    }
  },
  {
    id: 'b2-metacognition-illusion-of-competence',
    title: 'The Illusion of Knowing: Why Highlighting Textbooks Rarely Leads to Mastery',
    subtitle: 'Cognitive scientists warn that feeling familiar with a page of notes is not the same as being able to recall the information in an exam.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 512,
    cefrSummary: 'Metacognition, memory retrieval strategies, and B2 cognitive psychology vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Closing the book and testing yourself from memory builds far stronger neural pathways than passive rereading.',
    paragraphs: [
      'Walk into any university library during exam week and you will see students reading the same chapter for the third or fourth time, marking nearly every sentence with bright yellow and pink highlighters. As their eyes glide smoothly over the familiar paragraphs, students experience a comforting sense of fluency. They feel certain they know the material—until they sit down in the exam hall and their mind goes blank.',
      'Psychologists call this trap the "illusion of competence." It happens because the human brain frequently confuses recognition with retrieval. Recognizing a definition when it is sitting right in front of your eyes requires very little mental effort; retrieving that same concept from memory without any visual cues is a completely different cognitive skill.',
      'To build durable knowledge, learners need to practice metacognition—the ability to monitor and evaluate their own understanding honestly. Instead of passively rereading notes, effective students close the book after finishing a section and attempt to explain the main ideas aloud or write down a summary from scratch.',
      'At first, this self-testing feels slow, frustrating, and mentally demanding. Yet neuroscientists refer to this struggle as a "desirable difficulty." Every time you force your brain to reconstruct an answer from memory, even if you make a mistake and have to check the page afterward, you reinforce the neural pathways that make future recall fast and reliable.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-mic-1',
        word: 'illusion',
        partOfSpeech: 'noun',
        phonetic: '/ɪˈluːʒn/',
        definition: 'A false impression or belief that makes something seem true or real when it is not.',
        contextSentence: 'Psychologists call this trap the "illusion of competence."',
        exampleSentence: 'Mirrors on the walls gave the small café the illusion of being twice as wide.',
        synonyms: ['misconception', 'mirage', 'false impression'],
        collocations: ['illusion of competence', 'optical illusion', 'create the illusion'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mic-2',
        word: 'retrieval',
        partOfSpeech: 'noun',
        phonetic: '/rɪˈtriːvl/',
        definition: 'The process of finding and bringing back information stored in your memory or in a computer.',
        contextSentence: 'It happens because the human brain frequently confuses recognition with retrieval.',
        exampleSentence: 'Practicing flashcards strengthens memory retrieval much better than staring at a vocabulary list.',
        synonyms: ['recall', 'recovery', 'recollection'],
        collocations: ['memory retrieval', 'information retrieval', 'active retrieval'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mic-3',
        word: 'evaluate',
        partOfSpeech: 'verb',
        phonetic: '/ɪˈvæljueɪt/',
        definition: 'To judge or assess the quality, importance, or effectiveness of something carefully.',
        contextSentence: 'To build durable knowledge, learners need to practice metacognition—the ability to monitor and evaluate their own understanding honestly.',
        exampleSentence: 'After the pilot project ended, the city council met to evaluate its results.',
        synonyms: ['assess', 'judge', 'appraise'],
        collocations: ['evaluate understanding', 'carefully evaluate', 'evaluate performance'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mic-4',
        word: 'passively',
        partOfSpeech: 'adverb',
        phonetic: '/ˈpæsɪvli/',
        definition: 'In a way that accepts or watches what happens without taking an active part or making mental effort.',
        contextSentence: 'Instead of passively rereading notes, effective students close the book after finishing a section and attempt to explain the main ideas aloud or write down a summary from scratch.',
        exampleSentence: 'Listening passively to a lecture without taking notes makes it easy to forget the key points.',
        synonyms: ['inactively', 'inertly', 'unthinkingly'],
        collocations: ['passively reread', 'watch passively', 'sit passively'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mic-5',
        word: 'reinforce',
        partOfSpeech: 'verb',
        phonetic: '/ˌriːɪnˈfɔːs/',
        definition: 'To make a structure, habit, idea, or memory stronger by adding support or repeating practice.',
        contextSentence: 'Every time you force your brain to reconstruct an answer from memory, even if you make a mistake and have to check the page afterward, you reinforce the neural pathways that make future recall fast and reliable.',
        exampleSentence: 'Quizzes at the end of each article reinforce the new vocabulary you just read.',
        synonyms: ['strengthen', 'fortify', 'consolidate'],
        collocations: ['reinforce neural pathways', 'reinforce learning', 'reinforce a wall'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-mic-1',
          targetWord: 'illusion',
          question: 'What is the "illusion of competence" described by psychologists?',
          options: [
            'The false belief that you have mastered a topic simply because the text looks familiar when you reread it.',
            'The ability to memorize an entire textbook after reading it once.',
            'A visual trick used by artists to draw three-dimensional buildings.'
          ],
          correctIndex: 0,
          explanation: 'An "illusion" is a deceptive appearance or false belief.'
        },
        {
          id: 'mc-b2-mic-2',
          targetWord: 'retrieval',
          question: 'How does active "retrieval" differ from simple recognition?',
          options: [
            'Retrieval requires pulling an answer out of your own memory without looking at the page.',
            'Retrieval means highlighting every sentence with three different colors.',
            'Retrieval means copying definitions word for word from a dictionary.'
          ],
          correctIndex: 0,
          explanation: '"Retrieval" is the act of recalling stored information from memory.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-mic-1',
          sentenceWithBlank: 'Engineers used extra steel beams to _____ the old bridge before allowing heavy trucks across.',
          targetWord: 'reinforce',
          hint: 'Make stronger and more durable',
          options: ['reinforce', 'distort', 'retreat', 'divert']
        },
        {
          id: 'cl-b2-mic-2',
          sentenceWithBlank: 'Good teachers use short weekly quizzes to _____ how well students have understood the lesson.',
          targetWord: 'evaluate',
          hint: 'Assess or judge carefully',
          options: ['evaluate', 'compile', 'stockpile', 'overcome']
        }
      ],
      matching: {
        id: 'ma-b2-mic-1',
        instructions: 'Match each B2 cognitive psychology term with its definition.',
        pairs: [
          { id: 'p1', term: 'illusion', match: 'A false impression or mistaken belief' },
          { id: 'p2', term: 'retrieval', match: 'The act of recalling stored information from memory' },
          { id: 'p3', term: 'evaluate', match: 'Assess or judge the quality of something carefully' },
          { id: 'p4', term: 'reinforce', match: 'Make a memory, idea, or structure stronger' }
        ]
      }
    }
  },
  {
    id: 'b2-biomimicry-nature-inspired-engineering',
    title: 'Blueprints from Evolution: How a Kingfisher’s Beak Redesigned High-Speed Trains',
    subtitle: 'When Japanese bullet trains created deafening sonic booms inside tunnels, an engineer who watched birds found the solution.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 508,
    cefrSummary: 'Biomimicry, evolutionary adaptation, and B2 applied science vocabulary.',
    themeColor: 'teal',
    gradientFrom: 'from-teal-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The streamlined nose cone of modern bullet trains was modeled directly on the splashless beak of the kingfisher bird.',
    paragraphs: [
      'In the 1990s, railway engineers in Japan faced a baffling acoustic problem. Their newest bullet trains could travel at nearly three hundred kilometers per hour, but whenever a train entered a narrow mountain tunnel, its rounded front pushed a wall of compressed air ahead of it. When that pressure wave burst out the far end of the tunnel, it produced a thunderous boom that woke residents half a kilometer away.',
      'Fortunately, the chief engineer leading the redesign, Eiji Nakatsu, was also an avid birdwatcher. One morning, he thought about the kingfisher—a small colorful bird that dives at high speed from tree branches into rivers to catch fish, entering the denser medium of water with barely a splash.',
      'Nakatsu’s team tested scale models of different train noses in wind tunnels and discovered that a fifteen-meter-long nose shaped like a kingfisher’s wedge-like beak sliced smoothly through tunnel air instead of compressing it. When the redesigned train entered service, it eliminated the tunnel boom, consumed fifteen percent less electricity, and traveled ten percent faster.',
      'This approach—studying biological adaptations that have been refined over millions of years of evolution to solve human engineering challenges—is known as biomimicry. From wind turbine blades modeled on humpback whale flippers to hospital surfaces patterned after bacteria-repelling sharkskin, nature’s library continues to inspire cleaner and quieter technology.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-bne-1',
        word: 'baffling',
        partOfSpeech: 'adjective',
        phonetic: '/ˈbæflɪŋ/',
        definition: 'Extremely confusing or difficult to understand or solve.',
        contextSentence: 'In the 1990s, railway engineers in Japan faced a baffling acoustic problem.',
        exampleSentence: 'Detectives spent months investigating the baffling disappearance of the painting.',
        synonyms: ['puzzling', 'perplexing', 'mystifying'],
        collocations: ['baffling problem', 'baffling mystery', 'completely baffling'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-bne-2',
        word: 'compress',
        partOfSpeech: 'verb',
        phonetic: '/kəmˈpres/',
        definition: 'To press or squeeze something into a smaller space so that it becomes denser or under higher pressure.',
        contextSentence: 'Their newest bullet trains could travel at nearly three hundred kilometers per hour, but whenever a train entered a narrow mountain tunnel, its rounded front pushed a wall of compressed air ahead of it.',
        exampleSentence: 'Software programs can compress large video files so they are easier to send by email.',
        synonyms: ['squeeze', 'condense', 'compact'],
        collocations: ['compressed air', 'compress a file', 'compress gas'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-bne-3',
        word: 'avid',
        partOfSpeech: 'adjective',
        phonetic: '/ˈævɪd/',
        definition: 'Having or showing a keen interest and enthusiastic dedication to a hobby or activity.',
        contextSentence: 'Fortunately, the chief engineer leading the redesign, Eiji Nakatsu, was also an avid birdwatcher.',
        exampleSentence: 'As an avid reader of historical fiction, she visits the town library twice a week.',
        synonyms: ['keen', 'enthusiastic', 'passionate'],
        collocations: ['avid reader', 'avid birdwatcher', 'avid supporter'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-bne-4',
        word: 'adaptation',
        partOfSpeech: 'noun',
        phonetic: '/ˌædæpˈteɪʃn/',
        definition: 'A special physical feature or behavior that has evolved to help a plant or animal survive in its environment.',
        contextSentence: 'This approach—studying biological adaptations that have been refined over millions of years of evolution to solve human engineering challenges—is known as biomimicry.',
        exampleSentence: 'Thick white fur is a vital adaptation that keeps Arctic foxes warm and camouflaged in the snow.',
        synonyms: ['modification', 'trait', 'evolutionary feature'],
        collocations: ['biological adaptation', 'evolutionary adaptation', 'remarkable adaptation'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-bne-5',
        word: 'repel',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈpel/',
        definition: 'To drive away, keep off, or stop a substance or pest from attaching to a surface.',
        contextSentence: 'From wind turbine blades modeled on humpback whale flippers to hospital surfaces patterned after bacteria-repelling sharkskin, nature’s library continues to inspire cleaner and quieter technology.',
        exampleSentence: 'This waterproof jacket is treated with a natural wax that repels rain.',
        synonyms: ['ward off', 'keep away', 'resist'],
        collocations: ['repel water', 'repel insects', 'repel bacteria'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-bne-1',
          targetWord: 'compress',
          question: 'What caused the loud boom when early bullet trains entered narrow tunnels?',
          options: [
            'The train’s rounded front compressed the air ahead of it into a high-pressure wave.',
            'The train’s wheels struck sparks against the steel rails.',
            'The driver sounded a giant horn inside every tunnel.'
          ],
          correctIndex: 0,
          explanation: 'To "compress" air means to squeeze it into a smaller space, increasing its pressure.'
        },
        {
          id: 'mc-b2-bne-2',
          targetWord: 'adaptation',
          question: 'In biology, what is an "adaptation"?',
          options: [
            'A physical feature or behavior that helps a living organism survive in its environment.',
            'A blueprint drawn by a railway engineer.',
            'A tunnel drilled through solid mountain rock.'
          ],
          correctIndex: 0,
          explanation: 'An "adaptation" is an evolved trait suited to an organism’s habitat.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-bne-1',
          sentenceWithBlank: 'Planting marigolds around tomato beds helps _____ garden pests naturally without chemical sprays.',
          targetWord: 'repel',
          hint: 'Keep away or drive back',
          options: ['repel', 'compress', 'compile', 'evaluate']
        },
        {
          id: 'cl-b2-bne-2',
          sentenceWithBlank: 'My grandfather is an _____ chess player who studies classic tournament games every evening.',
          targetWord: 'avid',
          hint: 'Very enthusiastic and keen',
          options: ['avid', 'barren', 'stationary', 'scarce']
        }
      ],
      matching: {
        id: 'ma-b2-bne-1',
        instructions: 'Match each B2 biomimicry vocabulary word with its definition.',
        pairs: [
          { id: 'p1', term: 'baffling', match: 'Extremely puzzling and hard to explain' },
          { id: 'p2', term: 'compress', match: 'Squeeze air or material into a smaller, denser space' },
          { id: 'p3', term: 'avid', match: 'Showing enthusiastic interest in an activity or hobby' },
          { id: 'p4', term: 'repel', match: 'Drive away or prevent water, pests, or bacteria from sticking' }
        ]
      }
    }
  },
  {
    id: 'b2-geothermal-district-heating',
    title: 'Heat Beneath Our Feet: How Cities Are Tapping Earth’s Deep Warmth',
    subtitle: 'Just a few kilometers below the surface, rocks stay hot all year round—offering a steady source of clean heating for entire cities.',
    level: 'B2',
    category: 'Environment',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 504,
    cefrSummary: 'Geothermal district heating, urban decarbonization, and B2 energy vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-950',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Geothermal plants circulate water through deep underground rock layers to heat homes without burning gas.',
    paragraphs: [
      'When people think of renewable energy, they usually picture wind turbines spinning on hilltops or solar panels gleaming on roofs. Both technologies generate clean electricity, yet both share an obvious drawback: the wind does not always blow, and the sun sets every evening. Heating millions of apartments during dark, windless winter nights remains one of the hardest challenges of the clean energy transition.',
      'Beneath the ground, however, lies an immense thermal reservoir that never turns off. Regardless of how cold the air is in January, rock layers two to three kilometers underground remain warm year-round, heated by the natural decay of minerals deep inside the Earth. For decades, Iceland has used this geothermal energy to heat ninety percent of its homes and even keep city sidewalks free of snow.',
      'You do not need active volcanoes to harvest underground warmth. Using drilling techniques originally developed by the oil industry, cities like Munich and Paris are drilling pairs of deep wells into warm underground aquifers. One well pumps naturally hot water up to the surface, where a heat exchanger transfers its warmth into insulated pipes that run beneath neighborhood streets.',
      'Once the water has warmed thousands of radiators and domestic hot-water tanks, the cooled water is pumped back down the second well to be reheated by the rocks in a continuous closed loop. Because the system emits virtually no carbon dioxide and occupies very little surface land, geothermal district heating is emerging as a quiet giant of urban decarbonization.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-gdh-1',
        word: 'drawback',
        partOfSpeech: 'noun',
        phonetic: '/ˈdrɔːbæk/',
        definition: 'A disadvantage or negative feature that makes something less acceptable or effective.',
        contextSentence: 'Both technologies generate clean electricity, yet both share an obvious drawback: the wind does not always blow, and the sun sets every evening.',
        exampleSentence: 'The main drawback of living in the city center is the noise from late-night traffic.',
        synonyms: ['disadvantage', 'downside', 'limitation'],
        collocations: ['obvious drawback', 'main drawback', 'minor drawback'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-gdh-2',
        word: 'reservoir',
        partOfSpeech: 'noun',
        phonetic: '/ˈrezəvwɑː(r)/',
        definition: 'A large natural or artificial supply, reserve, or lake of water, heat, or energy.',
        contextSentence: 'Beneath the ground, however, lies an immense thermal reservoir that never turns off.',
        exampleSentence: 'Melting mountain snow fills the reservoir that supplies drinking water to the valley.',
        synonyms: ['store', 'reserve', 'basin'],
        collocations: ['thermal reservoir', 'underground reservoir', 'water reservoir'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-gdh-3',
        word: 'insulated',
        partOfSpeech: 'adjective',
        phonetic: '/ˈɪnsjuleɪtɪd/',
        definition: 'Covered or protected with a material that prevents heat, cold, or sound from escaping or entering.',
        contextSentence: 'One well pumps naturally hot water up to the surface, where a heat exchanger transfers its warmth into insulated pipes that run beneath neighborhood streets.',
        exampleSentence: 'Well-insulated walls and double-glazed windows keep houses warm in winter and cool in summer.',
        synonyms: ['protected', 'shielded', 'lined'],
        collocations: ['insulated pipes', 'well-insulated home', 'insulated jacket'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-gdh-4',
        word: 'continuous',
        partOfSpeech: 'adjective',
        phonetic: '/kənˈtɪnjuəs/',
        definition: 'Happening or operating without any interruption, pause, or break.',
        contextSentence: 'Once the water has warmed thousands of radiators and domestic hot-water tanks, the cooled water is pumped back down the second well to be reheated by the rocks in a continuous closed loop.',
        exampleSentence: 'The hospital relies on backup generators to guarantee a continuous supply of electricity.',
        synonyms: ['unbroken', 'constant', 'nonstop'],
        collocations: ['continuous loop', 'continuous supply', 'continuous improvement'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-gdh-5',
        word: 'virtually',
        partOfSpeech: 'adverb',
        phonetic: '/ˈvɜːtʃuəli/',
        definition: 'Almost completely; for all practical purposes.',
        contextSentence: 'Because the system emits virtually no carbon dioxide and occupies very little surface land, geothermal district heating is emerging as a quiet giant of urban decarbonization.',
        exampleSentence: 'High-speed fiber cables have made delays in international video calls virtually unnoticeable.',
        synonyms: ['nearly', 'practically', 'almost'],
        collocations: ['virtually no', 'virtually impossible', 'virtually identical'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-gdh-1',
          targetWord: 'drawback',
          question: 'What is the main "drawback" of wind and solar energy mentioned in the first paragraph?',
          options: [
            'They depend on the weather and time of day, whereas heating is needed even on dark, windless nights.',
            'They produce more carbon dioxide than coal power plants.',
            'They only work near active volcanoes.'
          ],
          correctIndex: 0,
          explanation: 'A "drawback" is a disadvantage or limitation.'
        },
        {
          id: 'mc-b2-gdh-2',
          targetWord: 'insulated',
          question: 'Why does a geothermal district heating system use "insulated" underground pipes?',
          options: [
            'To keep the hot water from losing its heat as it travels beneath city streets to apartment buildings.',
            'To allow tree roots to drink the hot water on the way.',
            'To cool the water down to freezing before it reaches homes.'
          ],
          correctIndex: 0,
          explanation: '"Insulated" pipes are wrapped in protective material that prevents heat loss.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-gdh-1',
          sentenceWithBlank: 'After the new tram line opened, traffic jams on the main avenue _____ disappeared.',
          targetWord: 'virtually',
          hint: 'Almost completely; practically',
          options: ['virtually', 'passively', 'temporarily', 'gradually']
        },
        {
          id: 'cl-b2-gdh-2',
          sentenceWithBlank: 'A _____ flow of cool water keeps the factory’s cutting machines from overheating.',
          targetWord: 'continuous',
          hint: 'Happening without stopping or interruption',
          options: ['continuous', 'baffling', 'scarce', 'barren']
        }
      ],
      matching: {
        id: 'ma-b2-gdh-1',
        instructions: 'Match each B2 geothermal energy word with its definition.',
        pairs: [
          { id: 'p1', term: 'drawback', match: 'A disadvantage or negative feature' },
          { id: 'p2', term: 'reservoir', match: 'A large natural or artificial reserve of water or heat' },
          { id: 'p3', term: 'insulated', match: 'Wrapped in material that prevents heat from escaping' },
          { id: 'p4', term: 'virtually', match: 'Almost completely; practically' }
        ]
      }
    }
  },
  {
    id: 'b2-paradox-of-choice-consumers',
    title: 'Too Many Options: How Endless Choice Leads to Decision Fatigue',
    subtitle: 'We assume that having fifty varieties of jam or a hundred streaming shows makes us happier, but behavioral experiments reveal the opposite.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 510,
    cefrSummary: 'Behavioral economics, consumer decision-making, and B2 analytical vocabulary.',
    themeColor: 'violet',
    gradientFrom: 'from-violet-950',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Supermarket aisles packed with dozens of nearly identical products can overwhelm shoppers rather than empower them.',
    paragraphs: [
      'In modern consumer societies, freedom is often equated with the number of options on a shelf. Walk into a large supermarket and you will confront twenty-eight types of toothpaste, forty brands of cereal, and dozens of olive oils. Online marketplaces multiply those numbers into the thousands. Conventional economic theory assumes that more choice is always better because it allows every individual to find their exact preference.',
      'Yet a famous field experiment conducted by psychologists Sheena Iyengar and Mark Lepper challenged this assumption. On one Saturday at an upscale grocery store, researchers set up a tasting booth displaying twenty-four flavors of gourmet jam. On the following Saturday, the booth offered only six flavors. Although the large display attracted more curious passersby, shoppers who saw only six jars were ten times more likely to actually buy a jar.',
      'Psychologists explain that when human beings face an overwhelming array of options, two negative reactions occur. First, comparing dozens of small differences drains mental energy, leading to decision paralysis—so people walk away empty-handed or spend an entire evening scrolling through movie menus without watching anything.',
      'Second, even when we do make a choice from fifty options, we often feel less satisfied afterward. Our minds cannot help imagining that one of the forty-nine alternatives we rejected might have been slightly better. Setting personal limits—such as comparing no more than three options for everyday purchases—frees up time and leaves us much happier with what we choose.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-poc-1',
        word: 'equate',
        partOfSpeech: 'verb',
        phonetic: '/ɪˈkweɪt/',
        definition: 'To consider one thing to be the same as or equal to another thing.',
        contextSentence: 'In modern consumer societies, freedom is often equated with the number of options on a shelf.',
        exampleSentence: 'It is a mistake to equate a high price tag with superior durability.',
        synonyms: ['identify', 'associate', 'treat as equal'],
        collocations: ['equate with', 'often equated', 'mistakenly equate'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-poc-2',
        word: 'assumption',
        partOfSpeech: 'noun',
        phonetic: '/əˈsʌmpʃn/',
        definition: 'A belief or idea that is accepted as true without solid proof.',
        contextSentence: 'Yet a famous field experiment conducted by psychologists Sheena Iyengar and Mark Lepper challenged this assumption.',
        exampleSentence: 'Our travel plans were based on the assumption that the mountain pass would be open in May.',
        synonyms: ['supposition', 'belief', 'premise'],
        collocations: ['challenge an assumption', 'common assumption', 'underlying assumption'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-poc-3',
        word: 'overwhelming',
        partOfSpeech: 'adjective',
        phonetic: '/ˌəʊvəˈwelmɪŋ/',
        definition: 'So large, intense, or confusing that it is difficult to deal with.',
        contextSentence: 'Psychologists explain that when human beings face an overwhelming array of options, two negative reactions occur.',
        exampleSentence: 'Moving to a huge metropolis for the first time can be an overwhelming experience.',
        synonyms: ['staggering', 'daunting', 'excessive'],
        collocations: ['overwhelming array', 'overwhelming majority', 'feel overwhelming'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-poc-4',
        word: 'paralysis',
        partOfSpeech: 'noun',
        phonetic: '/pəˈræləsɪs/',
        definition: 'A state of being unable to act, move, or make a decision.',
        contextSentence: 'First, comparing dozens of small differences drains mental energy, leading to decision paralysis—so people walk away empty-handed or spend an entire evening scrolling through movie menus without watching anything.',
        exampleSentence: 'Too many conflicting reports caused policy paralysis at the committee meeting.',
        synonyms: ['inaction', 'standstill', 'freeze'],
        collocations: ['decision paralysis', 'analysis paralysis', 'cause paralysis'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-poc-5',
        word: 'reject',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈdʒekt/',
        definition: 'To refuse to accept, choose, or use something.',
        contextSentence: 'Our minds cannot help imagining that one of the forty-nine alternatives we rejected might have been slightly better.',
        exampleSentence: 'The quality control inspector rejected three batches of glass bottles because of tiny cracks.',
        synonyms: ['turn down', 'decline', 'dismiss'],
        collocations: ['reject an alternative', 'reject a proposal', 'firmly reject'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-poc-1',
          targetWord: 'paralysis',
          question: 'What is "decision paralysis" in the jam-tasting experiment?',
          options: [
            'Becoming so mentally tired from comparing twenty-four flavors that shoppers walk away without buying any jam.',
            'Buying all twenty-four jars of jam at once.',
            'Tasting one flavor and immediately deciding to buy ten jars.'
          ],
          correctIndex: 0,
          explanation: '"Decision paralysis" is the inability to choose because the number of options is too exhausting to compare.'
        },
        {
          id: 'mc-b2-poc-2',
          targetWord: 'assumption',
          question: 'Which "assumption" did the jam experiment challenge?',
          options: [
            'The belief that offering customers more choices always leads to more sales and greater satisfaction.',
            'The idea that people enjoy eating jam on toast.',
            'The belief that grocery stores are busier on Saturdays.'
          ],
          correctIndex: 0,
          explanation: 'An "assumption" is something taken for granted as true without testing it.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-poc-1',
          sentenceWithBlank: 'On her first day at the hospital, the new nurse found the number of computer forms _____.',
          targetWord: 'overwhelming',
          hint: 'Too much to process or handle easily',
          options: ['overwhelming', 'insulated', 'stationary', 'compact']
        },
        {
          id: 'cl-b2-poc-2',
          sentenceWithBlank: 'Many people mistakenly _____ being busy all day with being productive.',
          targetWord: 'equate',
          hint: 'Consider one thing to be equal to another',
          options: ['equate', 'repel', 'compress', 'retreat']
        }
      ],
      matching: {
        id: 'ma-b2-poc-1',
        instructions: 'Match each B2 consumer psychology word with its definition.',
        pairs: [
          { id: 'p1', term: 'equate', match: 'Consider one thing to be the same as another' },
          { id: 'p2', term: 'assumption', match: 'A belief accepted as true without proof' },
          { id: 'p3', term: 'overwhelming', match: 'So large or intense that it is hard to cope with' },
          { id: 'p4', term: 'paralysis', match: 'An inability to take action or make a choice' }
        ]
      }
    }
  },
  {
    id: 'b2-microgrids-energy-resilience',
    title: 'Islands of Light: How Community Microgrids Keep Power Flowing During Disasters',
    subtitle: 'When severe storms knock down long-distance transmission towers, neighborhood solar-and-battery networks can disconnect and run on their own.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 506,
    cefrSummary: 'Decentralized microgrids, infrastructure resilience, and B2 systems vocabulary.',
    themeColor: 'sky',
    gradientFrom: 'from-sky-950',
    gradientTo: 'to-slate-950',
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Decentralized microgrids combine rooftop solar panels and local battery storage to protect hospitals and towns from wide-scale blackouts.',
    paragraphs: [
      'Twentieth-century electricity networks were built around a centralized model: a few enormous coal, gas, or hydro power plants generated electricity and sent it hundreds of kilometers along high-voltage overhead wires to homes and factories. While this system worked efficiently in calm weather, it created a single point of failure. If an ice storm or wildfire knocked down one major transmission line, an entire city could plunge into darkness.',
      'To make critical infrastructure more resilient, engineers are now dividing giant power grids into smaller, self-sufficient neighborhoods called microgrids. A typical microgrid connects a hospital, a university campus, or a small town to its own local solar arrays, wind turbines, and stationary battery banks, all managed by smart digital controllers.',
      'Under normal conditions, a microgrid stays connected to the national grid, buying and selling electricity just like any other customer. However, the moment sensors detect a failure on the main regional network, automated switches disconnect the local neighborhood in milliseconds—a process engineers call "islanding."',
      'Operating as an independent energy island, the microgrid keeps hospital operating rooms, water pumps, and emergency shelters running smoothly until repair crews fix the damaged highway lines. In remote mountain villages across Central Asia and island communities in the Pacific, standalone microgrids are also bringing clean, reliable twenty-four-hour electricity to places the national grid never reached.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-mer-1',
        word: 'centralized',
        partOfSpeech: 'adjective',
        phonetic: '/ˈsentrəlaɪzd/',
        definition: 'Controlled or produced from a single central place rather than spread across many local sites.',
        contextSentence: 'Twentieth-century electricity networks were built around a centralized model: a few enormous coal, gas, or hydro power plants generated electricity and sent it hundreds of kilometers along high-voltage overhead wires to homes and factories.',
        exampleSentence: 'The company replaced its centralized warehouse with five smaller regional distribution hubs.',
        synonyms: ['concentrated', 'unified', 'consolidated'],
        collocations: ['centralized model', 'centralized system', 'centralized control'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mer-2',
        word: 'plunge',
        partOfSpeech: 'verb',
        phonetic: '/plʌndʒ/',
        definition: 'To fall or be thrown suddenly and dramatically into a particular state or lower level.',
        contextSentence: 'If an ice storm or wildfire knocked down one major transmission line, an entire city could plunge into darkness.',
        exampleSentence: 'When the main fuse blew during the thunderstorm, the entire theater plunged into darkness.',
        synonyms: ['drop', 'dive', 'descend suddenly'],
        collocations: ['plunge into darkness', 'temperatures plunged', 'plunge into crisis'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mer-3',
        word: 'resilient',
        partOfSpeech: 'adjective',
        phonetic: '/rɪˈzɪliənt/',
        definition: 'Able to withstand or recover quickly from difficult conditions, shocks, or disruptions.',
        contextSentence: 'To make critical infrastructure more resilient, engineers are now dividing giant power grids into smaller, self-sufficient neighborhoods called microgrids.',
        exampleSentence: 'Planting a mix of tree species makes a forest much more resilient to pests and drought.',
        synonyms: ['tough', 'adaptable', 'hardy'],
        collocations: ['more resilient', 'resilient infrastructure', 'resilient community'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mer-4',
        word: 'self-sufficient',
        partOfSpeech: 'adjective',
        phonetic: '/ˌself səˈfɪʃnt/',
        definition: 'Able to provide everything you need on your own without depending on outside help.',
        contextSentence: 'To make critical infrastructure more resilient, engineers are now dividing giant power grids into smaller, self-sufficient neighborhoods called microgrids.',
        exampleSentence: 'With solar panels on the roof and a deep well in the yard, the mountain cabin is completely self-sufficient.',
        synonyms: ['independent', 'self-supporting', 'autonomous'],
        collocations: ['self-sufficient neighborhood', 'become self-sufficient', 'self-sufficient in energy'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mer-5',
        word: 'standalone',
        partOfSpeech: 'adjective',
        phonetic: '/ˈstændələʊn/',
        definition: 'Operating independently on its own without needing to be connected to a larger system.',
        contextSentence: 'In remote mountain villages across Central Asia and island communities in the Pacific, standalone microgrids are also bringing clean, reliable twenty-four-hour electricity to places the national grid never reached.',
        exampleSentence: 'The dictionary app works as a standalone program even when your phone has no internet connection.',
        synonyms: ['independent', 'self-contained', 'separate'],
        collocations: ['standalone microgrid', 'standalone system', 'standalone building'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-mer-1',
          targetWord: 'resilient',
          question: 'Why do microgrids make a city’s power supply more "resilient"?',
          options: [
            'Because neighborhoods can disconnect from damaged long-distance lines and keep critical services running on local solar and battery power.',
            'Because microgrids use taller wooden poles that never fall down.',
            'Because microgrids stop winter storms from happening.'
          ],
          correctIndex: 0,
          explanation: '"Resilient" means able to withstand shocks and continue functioning or recover quickly.'
        },
        {
          id: 'mc-b2-mer-2',
          targetWord: 'self-sufficient',
          question: 'What happens when a microgrid switches into "islanding" mode?',
          options: [
            'It becomes temporarily self-sufficient, generating and managing its own electricity without outside help.',
            'It shuts off all electricity to hospitals and water pumps.',
            'It moves onto a ship in the middle of the ocean.'
          ],
          correctIndex: 0,
          explanation: '"Self-sufficient" means able to meet one’s own needs without external support.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-mer-1',
          sentenceWithBlank: 'When a falling tree branch snapped the overhead cable, the whole street _____ into darkness.',
          targetWord: 'plunged',
          hint: 'Fell suddenly into a state',
          options: ['plunged', 'equated', 'evaluated', 'compiled']
        },
        {
          id: 'cl-b2-mer-2',
          sentenceWithBlank: 'Unlike older _____ computer networks where one broken server stopped the whole office, cloud systems spread data across many locations.',
          targetWord: 'centralized',
          hint: 'Controlled from one single center',
          options: ['centralized', 'resilient', 'avid', 'baffling']
        }
      ],
      matching: {
        id: 'ma-b2-mer-1',
        instructions: 'Match each B2 energy systems term with its definition.',
        pairs: [
          { id: 'p1', term: 'centralized', match: 'Controlled or supplied from one single central place' },
          { id: 'p2', term: 'plunge', match: 'Fall suddenly into darkness or a lower level' },
          { id: 'p3', term: 'resilient', match: 'Able to withstand shocks and recover quickly' },
          { id: 'p4', term: 'self-sufficient', match: 'Able to supply one’s own needs without outside help' }
        ]
      }
    }
  },
  {
    id: 'b2-mycorrhizal-fungi-wood-wide-web',
    title: 'The Underground Market: How Fungi and Trees Trade Nutrients Beneath the Forest Floor',
    subtitle: 'Beneath every healthy woodland lies a microscopic network of fungal threads that swaps soil minerals for sugars made by trees.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 512,
    cefrSummary: 'Forest symbiosis, mycorrhizal networks, and B2 biological vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-teal-950',
    heroImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'One cubic centimeter of forest soil can contain several kilometers of microscopic fungal threads linking tree roots together.',
    paragraphs: [
      'When we walk through a forest, we see individual oak, pine, and birch trees standing several meters apart, seemingly competing with one another for sunlight and water. Yet if you could look beneath the fallen leaves with a microscope, you would discover that almost ninety percent of land plants are connected to vast underground fungal networks known as mycorrhizae.',
      'Mushrooms are merely the seasonal fruit of these fungi; the main organism consists of miles of hair-thin white threads called hyphae that wrap around and penetrate tree roots. Because fungal threads are much thinner than the finest tree root, they can squeeze into tiny pores inside rocks and clay, extracting scarce phosphorus and nitrogen that trees could never reach on their own.',
      'In return for these essential minerals, trees pay the fungi with carbon-rich sugars produced in their leaves through photosynthesis. Biologists describe this partnership as a mutually beneficial biological marketplace: a tree may deliver up to thirty percent of the sugar it manufactures down to its fungal partners in exchange for soil nutrients.',
      'Even more remarkably, these underground networks link multiple trees together, allowing older, sun-drenched trees to transfer surplus carbon and water to shaded seedlings on the forest floor. Furthermore, when caterpillars attack one tree’s leaves, chemical warning signals travel through the fungal threads to neighboring trees, prompting them to produce bitter defensive compounds before the insects arrive.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-mfw-1',
        word: 'penetrate',
        partOfSpeech: 'verb',
        phonetic: '/ˈpenɪtreɪt/',
        definition: 'To pass into or go through something, especially when it is solid or tightly packed.',
        contextSentence: 'Mushrooms are merely the seasonal fruit of these fungi; the main organism consists of miles of hair-thin white threads called hyphae that wrap around and penetrate tree roots.',
        exampleSentence: 'Heavy rain took several hours to penetrate the dry crust of the desert soil.',
        synonyms: ['pierce', 'enter', 'permeate'],
        collocations: ['penetrate roots', 'penetrate deep into', 'penetrate the surface'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mfw-2',
        word: 'extract',
        partOfSpeech: 'verb',
        phonetic: '/ɪkˈstrækt/',
        definition: 'To remove, draw out, or obtain a substance from inside something else.',
        contextSentence: 'Because fungal threads are much thinner than the finest tree root, they can squeeze into tiny pores inside rocks and clay, extracting scarce phosphorus and nitrogen that trees could never reach on their own.',
        exampleSentence: 'Bees visit thousands of blossoms to extract sweet nectar for making honey.',
        synonyms: ['draw out', 'obtain', 'pull out'],
        collocations: ['extract minerals', 'extract oil', 'extract information'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mfw-3',
        word: 'mutually',
        partOfSpeech: 'adverb',
        phonetic: '/ˈmjuːtʃuəli/',
        definition: 'Felt, done, or shared by two or more parties toward each other equally.',
        contextSentence: 'Biologists describe this partnership as a mutually beneficial biological marketplace: a tree may deliver up to thirty percent of the sugar it manufactures down to its fungal partners in exchange for soil nutrients.',
        exampleSentence: 'The two universities signed a mutually beneficial agreement to share laboratory equipment.',
        synonyms: ['jointly', 'reciprocally', 'equally'],
        collocations: ['mutually beneficial', 'mutually agreed', 'mutually supportive'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mfw-4',
        word: 'surplus',
        partOfSpeech: 'noun',
        phonetic: '/ˈsɜːpləs/',
        definition: 'An amount of something that is left over after all immediate needs have been met.',
        contextSentence: 'Even more remarkably, these underground networks link multiple trees together, allowing older, sun-drenched trees to transfer surplus carbon and water to shaded seedlings on the forest floor.',
        exampleSentence: 'The village solar cooperative sells its electricity surplus back to the regional power grid.',
        synonyms: ['excess', 'leftover', 'extra supply'],
        collocations: ['surplus carbon', 'food surplus', 'trade surplus'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-mfw-5',
        word: 'prompt',
        partOfSpeech: 'verb',
        phonetic: '/prɒmpt/',
        definition: 'To cause or encourage someone or something to take a particular action.',
        contextSentence: 'Furthermore, when caterpillars attack one tree’s leaves, chemical warning signals travel through the fungal threads to neighboring trees, prompting them to produce bitter defensive compounds before the insects arrive.',
        exampleSentence: 'Rising fuel prices prompted many commuters to switch from driving cars to riding electric trains.',
        synonyms: ['trigger', 'stimulate', 'motivate'],
        collocations: ['prompt action', 'prompt them to produce', 'prompt a review'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-mfw-1',
          targetWord: 'mutually',
          question: 'Why do biologists call the relationship between trees and mycorrhizal fungi "mutually beneficial"?',
          options: [
            'Because both partners gain something essential: fungi give trees soil minerals, and trees give fungi sugars.',
            'Because fungi destroy tree roots to steal all their water.',
            'Because trees only grow where no fungi exist.'
          ],
          correctIndex: 0,
          explanation: '"Mutually beneficial" means helpful and advantageous to both sides involved.'
        },
        {
          id: 'mc-b2-mfw-2',
          targetWord: 'prompt',
          question: 'What do chemical warning signals traveling through fungal networks "prompt" neighboring trees to do?',
          options: [
            'They cause neighboring trees to start producing bitter defensive chemicals before insects reach them.',
            'They cause all the trees in the forest to drop their leaves in July.',
            'They make the trees stop performing photosynthesis.'
          ],
          correctIndex: 0,
          explanation: 'To "prompt" means to trigger or cause a response.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-mfw-1',
          sentenceWithBlank: 'In years with abundant rain, farmers store their grain _____ in dry silos for future winters.',
          targetWord: 'surplus',
          hint: 'Amount left over after current needs are met',
          options: ['surplus', 'paralysis', 'drawback', 'illusion']
        },
        {
          id: 'cl-b2-mfw-2',
          sentenceWithBlank: 'Cold-pressing is the best method to _____ pure olive oil without using chemical solvents.',
          targetWord: 'extract',
          hint: 'Draw out or obtain from a source',
          options: ['extract', 'plunge', 'equate', 'reject']
        }
      ],
      matching: {
        id: 'ma-b2-mfw-1',
        instructions: 'Match each B2 forest ecology word with its definition.',
        pairs: [
          { id: 'p1', term: 'penetrate', match: 'Pass into or squeeze through a solid material' },
          { id: 'p2', term: 'extract', match: 'Draw out or obtain a substance from a source' },
          { id: 'p3', term: 'surplus', match: 'An extra amount left over after needs are met' },
          { id: 'p4', term: 'prompt', match: 'Trigger or cause someone or something to act' }
        ]
      }
    }
  },
  {
    id: 'b2-predictive-maintenance-smart-sensors',
    title: 'Listening to Bridges: How Smart Sensors Spot Structural Fatigue Before Failure',
    subtitle: 'Instead of waiting for visible cracks to appear on highway bridges or wind turbines, engineers now use vibration sensors to diagnose hidden wear early.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '7 min read',
    readingTimeMinutes: 7,
    wordCount: 508,
    cefrSummary: 'Predictive maintenance, structural engineering, and B2 technical vocabulary.',
    themeColor: 'indigo',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-indigo-950',
    heroImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Tiny wireless sensors attached to steel beams monitor vibrations and temperature shifts twenty-four hours a day.',
    paragraphs: [
      'For more than a century, maintaining public infrastructure followed two basic schedules: either repair a bridge after a visible crack appeared, or shut it down at fixed calendar intervals so inspectors with binoculars and hammers could check every bolt by hand. Both approaches are expensive, and neither guarantees that a hidden internal flaw will be caught between inspections.',
      'Every time a heavy freight train rumbles across a steel bridge or a gust of wind bends a turbine blade, the structure vibrates at a specific natural frequency—much like a plucked guitar string produces a distinct musical note. Even if a bridge looks completely intact on the outside, a microscopic crack or a loosening joint inside a support beam subtly alters that vibration pattern.',
      'Today, civil engineers attach networks of matchbox-sized wireless sensors to bridges, tunnels, and railway tracks. Powered by tiny solar cells or the kinetic vibrations of passing traffic itself, these sensors continuously record acceleration, tilt, and strain, transmitting the data to engineers’ computers in real time.',
      'This strategy, known as predictive maintenance, allows cities to pinpoint a weakening component months before it becomes hazardous. By replacing a single worn bearing during a scheduled two-hour overnight window, maintenance teams prevent catastrophic collapses, avoid weeks of traffic disruption, and extend the safe lifespan of aging bridges by decades.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-pms-1',
        word: 'flaw',
        partOfSpeech: 'noun',
        phonetic: '/flɔː/',
        definition: 'A defect, crack, or weakness in a material, structure, or plan.',
        contextSentence: 'Both approaches are expensive, and neither guarantees that a hidden internal flaw will be caught between inspections.',
        exampleSentence: 'X-ray scanners can detect a tiny flaw inside a jet engine turbine blade.',
        synonyms: ['defect', 'imperfection', 'weakness'],
        collocations: ['internal flaw', 'structural flaw', 'design flaw'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-pms-2',
        word: 'intact',
        partOfSpeech: 'adjective',
        phonetic: '/ɪnˈtækt/',
        definition: 'Complete and undamaged; not broken or harmed.',
        contextSentence: 'Even if a bridge looks completely intact on the outside, a microscopic crack or a loosening joint inside a support beam subtly alters that vibration pattern.',
        exampleSentence: 'Remarkably, the twelfth-century brick minaret remained intact after the earthquake.',
        synonyms: ['undamaged', 'whole', 'unbroken'],
        collocations: ['completely intact', 'remain intact', 'survive intact'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-pms-3',
        word: 'subtly',
        partOfSpeech: 'adverb',
        phonetic: '/ˈsʌtli/',
        definition: 'In a delicate or slight way that is difficult to notice immediately.',
        contextSentence: 'Even if a bridge looks completely intact on the outside, a microscopic crack or a loosening joint inside a support beam subtly alters that vibration pattern.',
        exampleSentence: 'The lighting in the gallery changes subtly throughout the afternoon to match the outdoor sky.',
        synonyms: ['slightly', 'faintly', 'delicately'],
        collocations: ['subtly alter', 'change subtly', 'subtly different'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-pms-4',
        word: 'pinpoint',
        partOfSpeech: 'verb',
        phonetic: '/ˈpɪnpɔɪnt/',
        definition: 'To find or identify the exact location or cause of something with high accuracy.',
        contextSentence: 'This strategy, known as predictive maintenance, allows cities to pinpoint a weakening component months before it becomes hazardous.',
        exampleSentence: 'Acoustic microphones helped plumbers pinpoint the exact spot where the underground water pipe was leaking.',
        synonyms: ['locate exactly', 'identify', 'home in on'],
        collocations: ['pinpoint the cause', 'pinpoint the location', 'pinpoint a problem'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-pms-5',
        word: 'hazardous',
        partOfSpeech: 'adjective',
        phonetic: '/ˈhæzədəs/',
        definition: 'Dangerous and involving a significant risk to people’s safety or health.',
        contextSentence: 'This strategy, known as predictive maintenance, allows cities to pinpoint a weakening component months before it becomes hazardous.',
        exampleSentence: 'Freezing rain made driving conditions along the mountain highway extremely hazardous.',
        synonyms: ['dangerous', 'risky', 'unsafe'],
        collocations: ['become hazardous', 'hazardous conditions', 'hazardous waste'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-pms-1',
          targetWord: 'pinpoint',
          question: 'How do vibration sensors help civil engineers maintain bridges?',
          options: [
            'They allow engineers to pinpoint the exact location of a weakening beam months before a visible crack appears.',
            'They paint the bridge automatically every spring.',
            'They stop heavy freight trains from crossing the river.'
          ],
          correctIndex: 0,
          explanation: 'To "pinpoint" means to locate or identify something with exact precision.'
        },
        {
          id: 'mc-b2-pms-2',
          targetWord: 'intact',
          question: 'What does it mean if a bridge looks "intact" on the outside?',
          options: [
            'It appears whole and undamaged on the surface.',
            'It has already collapsed into the river.',
            'It is still under construction and missing its roadway.'
          ],
          correctIndex: 0,
          explanation: '"Intact" means whole and not visibly damaged.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-pms-1',
          sentenceWithBlank: 'Used batteries and old paint cans should be taken to a special collection point for _____ household waste.',
          targetWord: 'hazardous',
          hint: 'Dangerous to safety or the environment',
          options: ['hazardous', 'intact', 'centralized', 'standalone']
        },
        {
          id: 'cl-b2-pms-2',
          sentenceWithBlank: 'The software crash was caused by a tiny _____ in the program’s date-calculation code.',
          targetWord: 'flaw',
          hint: 'A defect, mistake, or weakness',
          options: ['flaw', 'surplus', 'reservoir', 'assumption']
        }
      ],
      matching: {
        id: 'ma-b2-pms-1',
        instructions: 'Match each B2 engineering vocabulary word with its definition.',
        pairs: [
          { id: 'p1', term: 'flaw', match: 'A defect, crack, or hidden weakness' },
          { id: 'p2', term: 'intact', match: 'Whole and undamaged' },
          { id: 'p3', term: 'pinpoint', match: 'Find or identify an exact location or cause' },
          { id: 'p4', term: 'hazardous', match: 'Dangerous to health or physical safety' }
        ]
      }
    }
  },
  ...B2_PRO_BATCH_1,
  ...B2_PRO_BATCH_2
];



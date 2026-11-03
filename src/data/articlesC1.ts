import { Article } from '../types';

export const C1_ARTICLES: Article[] = [
  {
    id: 'c1-bronze-age-collapse',
    title: 'The Fragility of Early Globalization: What Triggered the Late Bronze Age Collapse?',
    subtitle: 'Around 1177 BCE, a sophisticated network of Mediterranean superpowers disintegrated within a single generation—offering a sobering lesson on interconnected supply chains.',
    level: 'C1',
    category: 'History & Civilizations',
    readTime: '8 min read',
    wordCount: 640,
    cefrSummary: 'Written in natural C1 long-form journalism style with inversion, nuanced hedging, and high-utility advanced vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-900',
    gradientTo: 'to-stone-950',
    paragraphs: [
      'During the fourteenth and thirteenth centuries BCE, the eastern Mediterranean was bound together by a remarkably cosmopolitan web of diplomacy and trade. Pharaohs in Egypt, Hittite kings in Anatolia, Mycenaean warlords in Greece, and rulers in Cyprus and Babylon exchanged royal marriages, polite diplomatic letters, and shipwrecks’ worth of raw materials. Because bronze—the strategic metal required for weapons and farm tools alike—demanded alloying abundant copper from Cyprus with scarce tin mined as far away as Afghanistan or Cornwall, no single empire could afford to be self-sufficient.',
      'Yet within the span of roughly fifty years around 1177 BCE, this thriving international order unraveled completely. Palaces from Mycenae to Ugarit were burned to the ground; literacy vanished across mainland Greece for four centuries; and long-distance trade routes contracted so sharply that historians still refer to the aftermath as a Greek Dark Age.',
      'For generations, archaeologists searched for a single culprit—most famously the mysterious "Sea Peoples," coastal raiders depicted on Egyptian temple reliefs. Modern interdisciplinary evidence, however, points to a far more plausible explanation: a "perfect storm" of compounding crises that overwhelmed a tightly coupled system.',
      'Pollen cores extracted from ancient lake beds and fossilized tree rings reveal that a prolonged megadrought gripped the eastern Mediterranean for more than a century, triggering widespread crop failures and famine. At the same time, geological faults along the Aegean and Levant produced a cluster of destructive earthquakes, while desperate climate refugees and opportunistic pirates disrupted maritime commerce.',
      'Had any one of these shocks occurred in isolation, the great Bronze Age empires might well have weathered it. What proved fatal was their very interdependence: when grain shipments faltered and tin routes were severed, centralized palace economies lacked the flexibility to improvise. The Late Bronze Age collapse stands as an enduring reminder that efficiency and resilience are rarely the same thing.'
    ],
    targetVocabulary: [
      {
        id: 'c1-ba-1',
        word: 'unravel',
        phonetic: '/ʌnˈrævl/',
        partOfSpeech: 'verb',
        definition: 'To begin to fail, fall apart, or stop functioning as a coherent system.',
        cefrLevel: 'C1',
        exampleSentence: 'Within the span of roughly fifty years around 1177 BCE, this thriving international order unraveled completely.',
        collocations: ['quickly unravel', 'begin to unravel', 'threaten to unravel'],
        synonyms: ['disintegrate', 'collapse', 'fall apart'],
        antonyms: ['consolidate', 'coalesce']
      },
      {
        id: 'c1-ba-2',
        word: 'culprit',
        phonetic: '/ˈkʌlprɪt/',
        partOfSpeech: 'noun',
        definition: 'The cause of a problem, defect, or crisis.',
        cefrLevel: 'C1',
        exampleSentence: 'For generations, archaeologists searched for a single culprit behind the collapse.',
        collocations: ['main culprit', 'likely culprit', 'identify the culprit'],
        synonyms: ['cause', 'catalyst', 'offender']
      },
      {
        id: 'c1-ba-3',
        word: 'plausible',
        phonetic: '/ˈplɔːzəbl/',
        partOfSpeech: 'adjective',
        definition: 'Seeming reasonable, probable, or believable based on the evidence.',
        cefrLevel: 'C1',
        exampleSentence: 'Modern interdisciplinary evidence points to a far more plausible explanation.',
        collocations: ['plausible explanation', 'entirely plausible', 'sound plausible'],
        synonyms: ['credible', 'believable', 'convincing'],
        antonyms: ['implausible', 'far-fetched']
      },
      {
        id: 'c1-ba-4',
        word: 'compound',
        phonetic: '/kəmˈpaʊnd/',
        partOfSpeech: 'verb',
        definition: 'To make a problem or difficulty worse by adding further negative factors.',
        cefrLevel: 'C1',
        exampleSentence: 'A "perfect storm" of compounding crises overwhelmed a tightly coupled system.',
        collocations: ['compound the problem', 'compounding crises', 'further compounded by'],
        synonyms: ['exacerbate', 'aggravate', 'intensify'],
        antonyms: ['alleviate', 'mitigate']
      },
      {
        id: 'c1-ba-5',
        word: 'weather',
        phonetic: '/ˈweðə(r)/',
        partOfSpeech: 'verb',
        definition: 'To come safely through a difficult period, crisis, or storm.',
        cefrLevel: 'C1',
        exampleSentence: 'Had any one of these shocks occurred in isolation, the empires might well have weathered it.',
        collocations: ['weather the storm', 'weather a crisis', 'weather the downturn'],
        synonyms: ['survive', 'withstand', 'endure'],
        antonyms: ['succumb to', 'collapse under']
      },
      {
        id: 'c1-ba-6',
        word: 'falter',
        phonetic: '/ˈfɔːltə(r)/',
        partOfSpeech: 'verb',
        definition: 'To lose strength, momentum, or effectiveness; to begin to fail.',
        cefrLevel: 'C1',
        exampleSentence: 'When grain shipments faltered and tin routes were severed, palace economies could not improvise.',
        collocations: ['economy falters', 'shipments faltered', 'never falter'],
        synonyms: ['stumble', 'waver', 'weaken'],
        antonyms: ['thrive', 'accelerate']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-ba-1',
          targetWord: 'compound',
          question: 'What does the phrase "compounding crises" mean in the context of the Bronze Age collapse?',
          options: [
            'Multiple disasters occurring together and making each other’s impact much worse',
            'Crises that were confined to a single walled palace compound',
            'Minor disagreements that were quickly resolved through diplomacy'
          ],
          correctIndex: 0,
          explanation: 'As a C1 verb, "compound" means to worsen an existing problem by adding new difficulties.'
        },
        {
          id: 'mc-c1-ba-2',
          targetWord: 'weather',
          question: 'In "the empires might well have weathered it," what does "weathered" mean?',
          options: [
            'Predicted the exact rainfall using astronomy',
            'Survived and come safely through the crisis',
            'Eroded into dust because of strong winds'
          ],
          correctIndex: 1,
          explanation: 'To "weather" a crisis or storm means to endure it and survive intact.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-ba-1',
          sentenceWithBlank: 'Supply chain bottlenecks were further _____ by a sudden strike at the country’s largest port.',
          targetWord: 'compounded',
          hint: 'Made worse by adding another problem (past participle)',
          options: ['compounded', 'weathered', 'faltered', 'unraveled']
        },
        {
          id: 'cl-c1-ba-2',
          sentenceWithBlank: 'Without a clear enforcement mechanism, the fragile peace treaty began to _____ within months.',
          targetWord: 'unravel',
          hint: 'Fall apart or stop functioning',
          options: ['unravel', 'weather', 'compound', 'plausible']
        }
      ],
      matching: {
        id: 'ma-c1-ba-1',
        instructions: 'Match each C1 vocabulary item with its natural meaning.',
        pairs: [
          { id: 'p1', term: 'unravel', match: 'Fall apart or stop functioning as a system' },
          { id: 'p2', term: 'plausible', match: 'Credible and reasonable given the evidence' },
          { id: 'p3', term: 'compound', match: 'Make a bad situation worse by adding new problems' },
          { id: 'p4', term: 'weather', match: 'Come safely through a crisis or storm' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-ba-1',
          promptSentence: 'The defense lawyer dismissed the witness’s story as completely _____ (PLAUSIBLE).',
          rootWord: 'PLAUSIBLE',
          correctAnswer: 'implausible',
          hint: 'Add a negative prefix meaning "not believable"',
          explanation: 'Adding the prefix "im-" forms the negative adjective "implausible".'
        }
      ]
    }
  },
  {
    id: 'c1-crispr-gene-editing',
    title: 'The CRISPR Dilemma: Healing Inherited Disease Without Crossing Ethical Boundaries',
    subtitle: 'Gene-editing tools have already cured patients of sickle-cell disease, yet the prospect of altering traits that pass to future generations raises profound moral questions.',
    level: 'C1',
    category: 'Science & Nature',
    readTime: '8 min read',
    wordCount: 650,
    cefrSummary: 'Demonstrates natural C1 scientific journalism, distinguishing technical nuances with clear, idiomatic precision.',
    themeColor: 'cyan',
    gradientFrom: 'from-teal-900',
    gradientTo: 'to-slate-950',
    paragraphs: [
      'When biochemists Jennifer Doudna and Emmanuelle Charpentier demonstrated in 2012 that a bacterial defense mechanism called CRISPR-Cas9 could be programmed to cut DNA at virtually any chosen sequence, they handed medicine the equivalent of a molecular word processor. Within little more than a decade, what began as a laboratory curiosity had become an approved clinical therapy capable of curing patients born with debilitating blood disorders such as sickle-cell disease and beta-thalassemia.',
      'To understand why CRISPR generates both celebration and unease, bioethicists draw a sharp distinction between two categories of genetic intervention. "Somatic" gene editing modifies cells—such as bone marrow or liver tissue—inside an existing patient; any genetic changes die with that individual. "Germline" editing, by contrast, alters the DNA of early embryos, eggs, or sperm, meaning that every edit—along with any unintended error—is passed down to all subsequent generations.',
      'On the surface, the case for germline editing can sound compelling: why merely treat a fatal hereditary illness in one generation if we could eradicate it from a family line forever? In practice, however, human biology is rarely so straightforward. Many genes are pleiotropic—a single gene influences multiple unrelated traits. Deleting a genetic variant to lower the risk of one disease can inadvertently heighten susceptibility to another.',
      'Equally troubling is the social dimension. Once fertility clinics possess the ability to edit embryos for medical prevention, drawing a firm regulatory line between therapy and enhancement becomes notoriously difficult. In a competitive society, wealthy parents might feel pressured to pay for genetic upgrades promised to boost height, memory, or longevity—entrenching biological inequality alongside economic disparity.',
      'For now, an international consensus holds that germline editing remains too unpredictable for clinical use. The challenge facing regulators is how to foster life-saving somatic treatments without opening the door to a genetic arms race.'
    ],
    targetVocabulary: [
      {
        id: 'c1-cr-1',
        word: 'debilitating',
        phonetic: '/dɪˈbɪlɪteɪtɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Making someone physically or mentally very weak; severely impairing daily life.',
        cefrLevel: 'C1',
        exampleSentence: 'CRISPR has become an approved therapy capable of curing patients born with debilitating blood disorders.',
        collocations: ['debilitating disease', 'debilitating pain', 'severely debilitating'],
        synonyms: ['crippling', 'incapacitating', 'weakening'],
        antonyms: ['invigorating', 'restorative']
      },
      {
        id: 'c1-cr-2',
        word: 'compelling',
        phonetic: '/kəmˈpelɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Convincing, persuasive, and difficult to resist or ignore.',
        cefrLevel: 'C1',
        exampleSentence: 'On the surface, the case for germline editing can sound compelling.',
        collocations: ['compelling argument', 'compelling evidence', 'compelling case'],
        synonyms: ['persuasive', 'convincing', 'cogent'],
        antonyms: ['unconvincing', 'weak']
      },
      {
        id: 'c1-cr-3',
        word: 'inadvertently',
        phonetic: '/ˌɪnədˈvɜːtntli/',
        partOfSpeech: 'adverb',
        definition: 'Without intention; accidentally or unknowingly.',
        cefrLevel: 'C1',
        exampleSentence: 'Deleting a genetic variant to lower the risk of one disease can inadvertently heighten susceptibility to another.',
        collocations: ['inadvertently cause', 'inadvertently reveal', 'inadvertently trigger'],
        synonyms: ['unintentionally', 'accidentally', 'unwittingly'],
        antonyms: ['deliberately', 'intentionally']
      },
      {
        id: 'c1-cr-4',
        word: 'susceptibility',
        phonetic: '/səˌseptəˈbɪləti/',
        partOfSpeech: 'noun',
        definition: 'The state of being likely or liable to be harmed or affected by a particular condition.',
        cefrLevel: 'C1',
        exampleSentence: 'Deleting a variant can inadvertently heighten susceptibility to another illness.',
        collocations: ['heighten susceptibility', 'genetic susceptibility', 'susceptibility to infection'],
        synonyms: ['vulnerability', 'predisposition', 'sensitivity'],
        antonyms: ['immunity', 'resistance']
      },
      {
        id: 'c1-cr-5',
        word: 'entrench',
        phonetic: '/ɪnˈtrentʃ/',
        partOfSpeech: 'verb',
        definition: 'To establish an attitude, habit, or inequality so firmly that change becomes very difficult.',
        cefrLevel: 'C1',
        exampleSentence: 'Costly genetic upgrades could entrench biological inequality alongside economic disparity.',
        collocations: ['entrench inequality', 'deeply entrenched', 'entrench power'],
        synonyms: ['cement', 'embed', 'ingrain'],
        antonyms: ['dismantle', 'uproot']
      },
      {
        id: 'c1-cr-6',
        word: 'disparity',
        phonetic: '/dɪˈspærəti/',
        partOfSpeech: 'noun',
        definition: 'A great and often unfair difference between two or more groups.',
        cefrLevel: 'C1',
        exampleSentence: 'Genetic upgrades could entrench biological inequality alongside economic disparity.',
        collocations: ['economic disparity', 'wealth disparity', 'growing disparity'],
        synonyms: ['inequality', 'gap', 'imbalance'],
        antonyms: ['parity', 'equality']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-cr-1',
          targetWord: 'inadvertently',
          question: 'Why are scientists cautious about deleting a gene that has multiple functions?',
          options: [
            'Because doing so might inadvertently (unintentionally) increase a person’s risk of catching another disease.',
            'Because CRISPR enzymes only work in cold temperatures.',
            'Because somatic edits are passed down to grandchildren.'
          ],
          correctIndex: 0,
          explanation: '"Inadvertently" means unintentionally or without realizing the side effect.'
        },
        {
          id: 'mc-c1-cr-2',
          targetWord: 'entrench',
          question: 'What does it mean that commercial embryo editing could "entrench" inequality?',
          options: [
            'It could lock inequality firmly into place so that it becomes almost impossible to reverse.',
            'It could eliminate the gap between rich and poor families.',
            'It could make medical treatments free for everyone.'
          ],
          correctIndex: 0,
          explanation: 'To "entrench" something means to establish it so deeply that it is extremely hard to change.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-cr-1',
          sentenceWithBlank: 'The prosecutor presented such _____ evidence that the jury reached a verdict in under an hour.',
          targetWord: 'compelling',
          hint: 'Strongly convincing and persuasive',
          options: ['compelling', 'debilitating', 'plausible', 'scarce']
        },
        {
          id: 'cl-c1-cr-2',
          sentenceWithBlank: 'Public health officials are working to narrow the stark _____ in life expectancy between wealthy and deprived neighborhoods.',
          targetWord: 'disparity',
          hint: 'An unfair gap or difference between groups',
          options: ['disparity', 'susceptibility', 'culprit', 'turnover']
        }
      ],
      matching: {
        id: 'ma-c1-cr-1',
        instructions: 'Match each C1 bioethics vocabulary word with its meaning.',
        pairs: [
          { id: 'p1', term: 'debilitating', match: 'Causing severe physical or mental weakness' },
          { id: 'p2', term: 'compelling', match: 'Powerfully convincing and persuasive' },
          { id: 'p3', term: 'inadvertently', match: 'Unintentionally or by accident' },
          { id: 'p4', term: 'entrench', match: 'Establish so firmly that change is very difficult' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-cr-1',
          promptSentence: 'Lack of sleep leaves the immune system far more _____ (SUSCEPTIBILITY) to winter viruses.',
          rootWord: 'SUSCEPTIBILITY',
          correctAnswer: 'susceptible',
          hint: 'Change the noun into its adjective form',
          explanation: 'The adjective form of "susceptibility" is "susceptible".'
        }
      ]
    }
  },
  {
    id: 'c1-eyewitness-memory-psychology',
    title: 'The Fallibility of Human Memory: Why Confident Eyewitnesses Frequently Get It Wrong',
    subtitle: 'We tend to think of memory as a video camera recording events on a hard drive. Cognitive psychology shows that remembering is actually an act of reconstruction.',
    level: 'C1',
    category: 'Psychology & Mind',
    readTime: '8 min read',
    wordCount: 645,
    cefrSummary: 'Uses natural C1 argumentative flow, precise psychological verbs, and clear legal-scientific examples.',
    themeColor: 'indigo',
    gradientFrom: 'from-indigo-900',
    gradientTo: 'to-slate-950',
    paragraphs: [
      'Few moments in a courtroom are more persuasive than a poised eyewitness pointing across the room and declaring, "I will never forget that face." For centuries, Anglo-American law treated sincere eyewitness testimony as the gold standard of criminal evidence. Yet when the Innocence Project began using DNA testing in the 1990s to re-examine wrongful convictions across the United States, a sobering pattern emerged: mistaken eyewitness identification had contributed to roughly seventy percent of those false verdicts.',
      'These witnesses were rarely lying. Rather, they were victims of a fundamental misunderstanding of how human memory operates. Intuitively, most people assume that the brain records experiences like a digital video camera, storing files that can later be replayed without alteration. Cognitive psychologists, led by pioneers such as Elizabeth Loftus, have demonstrated that memory is far closer to a Wikipedia page: every time we retrieve a memory, we subtly edit it before saving it again.',
      'Even a single verb in a post-event question can distort what a witness remembers seeing. In a classic experiment, participants watched film clips of traffic accidents and were then asked how fast the cars were going when they either "hit" or "smashed into" each other. Not only did the "smashed" group estimate significantly higher speeds, but a week later they were more than twice as likely to recall seeing broken glass at the scene—even though the film contained no broken glass at all.',
      'In real police investigations, subtle cues can be even more influential. If a detective administering a photo lineup inadvertently nods or says "Good, you spotted the suspect," the witness’s confidence inflates dramatically by the time the case reaches trial. Juries then mistake that courtroom confidence for accuracy.',
      'Recognizing the malleability of memory has prompted major policing reforms. Many jurisdictions now require "double-blind" lineups—in which the officer showing the photographs does not know which person is the suspect—alongside rules instructing detectives to record a witness’s certainty immediately, before subsequent feedback can contaminate it.'
    ],
    targetVocabulary: [
      {
        id: 'c1-em-1',
        word: 'sobering',
        phonetic: '/ˈsəʊbərɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Making you feel serious, thoughtful, and aware of an unpleasant reality.',
        cefrLevel: 'C1',
        exampleSentence: 'When DNA testing re-examined wrongful convictions, a sobering pattern emerged.',
        collocations: ['sobering thought', 'sobering reality', 'sobering reminder'],
        synonyms: ['serious', 'humbling', 'thought-provoking'],
        antonyms: ['reassuring', 'comforting']
      },
      {
        id: 'c1-em-2',
        word: 'alteration',
        phonetic: '/ˌɔːltəˈreɪʃn/',
        partOfSpeech: 'noun',
        definition: 'A change or modification made to something.',
        cefrLevel: 'C1',
        exampleSentence: 'People assume the brain stores files that can later be replayed without alteration.',
        collocations: ['without alteration', 'minor alteration', 'undergo alteration'],
        synonyms: ['modification', 'revision', 'adjustment'],
        antonyms: ['preservation']
      },
      {
        id: 'c1-em-3',
        word: 'distort',
        phonetic: '/dɪˈstɔːt/',
        partOfSpeech: 'verb',
        definition: 'To twist or change facts, memories, or shapes so that they are no longer accurate.',
        cefrLevel: 'C1',
        exampleSentence: 'Even a single verb in a post-event question can distort what a witness remembers seeing.',
        collocations: ['distort memory', 'distort the truth', 'badly distorted'],
        synonyms: ['warp', 'misrepresent', 'skew'],
        antonyms: ['clarify', 'preserve']
      },
      {
        id: 'c1-em-4',
        word: 'inflate',
        phonetic: '/ɪnˈfleɪt/',
        partOfSpeech: 'verb',
        definition: 'To exaggerate or artificially increase the size, importance, or confidence of something.',
        cefrLevel: 'C1',
        exampleSentence: 'The witness’s confidence inflates dramatically by the time the case reaches trial.',
        collocations: ['artificially inflate', 'inflate confidence', 'inflated expectations'],
        synonyms: ['exaggerate', 'boost', 'swell'],
        antonyms: ['deflate', 'diminish']
      },
      {
        id: 'c1-em-5',
        word: 'malleability',
        phonetic: '/ˌmæliəˈbɪləti/',
        partOfSpeech: 'noun',
        definition: 'The quality of being easily influenced, shaped, or changed by outside pressures.',
        cefrLevel: 'C1',
        exampleSentence: 'Recognizing the malleability of memory has prompted major policing reforms.',
        collocations: ['malleability of memory', 'psychological malleability', 'remarkable malleability'],
        synonyms: ['pliability', 'impressionability', 'flexibility'],
        antonyms: ['rigidity', 'permanence']
      },
      {
        id: 'c1-em-6',
        word: 'contaminate',
        phonetic: '/kənˈtæmɪneɪt/',
        partOfSpeech: 'verb',
        definition: 'To make something impure, unreliable, or spoiled by introducing outside influences.',
        cefrLevel: 'C1',
        exampleSentence: 'Detectives record certainty immediately, before subsequent feedback can contaminate it.',
        collocations: ['contaminate evidence', 'contaminate memory', 'contaminated water'],
        synonyms: ['taint', 'corrupt', 'pollute'],
        antonyms: ['purify', 'safeguard']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-em-1',
          targetWord: 'malleability',
          question: 'Why does the author compare human memory to a Wikipedia page rather than a video camera?',
          options: [
            'To illustrate the malleability of memory—how easily it can be edited each time we recall it.',
            'To show that human memory requires an internet connection.',
            'To argue that witnesses deliberately lie in court.'
          ],
          correctIndex: 0,
          explanation: '"Malleability" refers to how easily something can be reshaped or influenced.'
        },
        {
          id: 'mc-c1-em-2',
          targetWord: 'contaminate',
          question: 'How can a detective’s casual praise "contaminate" an eyewitness’s testimony?',
          options: [
            'It taints the witness’s original memory by artificially boosting their certainty before trial.',
            'It erases the witness’s memory of their own name.',
            'It makes the photographs fade in the light.'
          ],
          correctIndex: 0,
          explanation: 'In legal and scientific contexts, "contaminate" means to compromise the purity or reliability of evidence.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-em-1',
          sentenceWithBlank: 'Leading questions during an interview can easily _____ a child’s recollection of events.',
          targetWord: 'distort',
          hint: 'Twist or change so it is no longer accurate',
          options: ['distort', 'inflate', 'weather', 'falter']
        },
        {
          id: 'cl-c1-em-2',
          sentenceWithBlank: 'The audit revealed a _____ truth: nearly a third of the emergency funds had been misspent.',
          targetWord: 'sobering',
          hint: 'Making you feel serious and aware of a hard reality',
          options: ['sobering', 'compelling', 'plausible', 'debilitating']
        }
      ],
      matching: {
        id: 'ma-c1-em-1',
        instructions: 'Match each C1 memory and psychology term with its definition.',
        pairs: [
          { id: 'p1', term: 'sobering', match: 'Making you feel serious about an unpleasant reality' },
          { id: 'p2', term: 'distort', match: 'Twist or misrepresent facts or memories' },
          { id: 'p3', term: 'malleability', match: 'Quality of being easily shaped or influenced' },
          { id: 'p4', term: 'contaminate', match: 'Taint or spoil evidence with outside influence' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-em-1',
          promptSentence: 'Children’s memories are notoriously _____ (MALLEABILITY) when adults ask suggestive questions.',
          rootWord: 'MALLEABILITY',
          correctAnswer: 'malleable',
          hint: 'Convert the noun into an adjective',
          explanation: 'The adjective form of "malleability" is "malleable".'
        }
      ]
    }
  },
  {
    id: 'c1-automation-paradox-tech',
    title: 'The Automation Paradox: Why Smarter Algorithms Make Human Judgment More Critical Than Ever',
    subtitle: 'As aviation, medicine, and finance hand routine decisions over to software, human operators face a counterintuitive trap: the rarer errors become, the harder they are to catch.',
    level: 'C1',
    category: 'Technology & Innovation',
    readTime: '8 min read',
    wordCount: 640,
    cefrSummary: 'Presents a classic C1 cognitive-engineering argument with idiomatic collocations and nuanced cause-and-effect.',
    themeColor: 'purple',
    gradientFrom: 'from-purple-950',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'In 1983, the British psychologist Lisanne Bainbridge published a paper titled "Ironies of Automation" that remains essential reading for modern software engineers. Her central insight was deceptively simple: the more reliable an automated system becomes, the less practice human operators get at controlling the task manually—yet the moments when the software finally fails are precisely the complex emergencies that require peak human skill.',
      'This dilemma is known today as the automation paradox. When an autopilot flies a commercial airliner smoothly for thousands of hours, or an AI diagnostic tool flags routine X-rays with ninety-nine percent accuracy, human supervisors naturally grow complacent. Attention wanders, manual reflexes atrophy, and operators begin to trust the screen even when subtle warning signs suggest something is amiss.',
      'Worse still, when an automated system encounters an unfamiliar edge case and abruptly hands control back to the human in the loop, the operator must diagnose a crisis they did not see developing. Aviation investigators have documented accidents in which pilots, startled by a sudden sensor malfunction at high altitude, struggled for crucial seconds simply to reconstruct what the flight computer had been trying to do.',
      'A similar dynamic is now unfolding across hospitals, financial trading desks, and autonomous vehicles. Radiologists assisted by algorithms can become reluctant to overrule a computer’s recommendation, fearing legal scrutiny if they disagree with the machine and turn out to be wrong. Instead of combining the best of human intuition and machine speed, poorly designed automation can leave humans with the worst of both worlds: tedious monitoring followed by sudden panic.',
      'Solving the automation paradox does not mean abandoning smart technology. Rather, human-factors engineers argue for "cooperative automation"—systems that keep operators actively engaged, explain their reasoning transparently, and require professionals to practice manual skills regularly so their expertise never goes rusty.'
    ],
    targetVocabulary: [
      {
        id: 'c1-ap-1',
        word: 'counterintuitive',
        phonetic: '/ˌkaʊntərɪnˈtjuːɪtɪv/',
        partOfSpeech: 'adjective',
        definition: 'Contrary to what common sense or intuition would lead you to expect.',
        cefrLevel: 'C1',
        exampleSentence: 'Human operators face a counterintuitive trap: the rarer errors become, the harder they are to catch.',
        collocations: ['seemingly counterintuitive', 'counterintuitive result', 'counterintuitive finding'],
        synonyms: ['paradoxical', 'unexpected', 'surprising'],
        antonyms: ['intuitive', 'obvious']
      },
      {
        id: 'c1-ap-2',
        word: 'complacent',
        phonetic: '/kəmˈpleɪsnt/',
        partOfSpeech: 'adjective',
        definition: 'Unaware of or unconcerned about potential danger because of an overly comfortable feeling of security.',
        cefrLevel: 'C1',
        exampleSentence: 'When an AI tool flags X-rays with ninety-nine percent accuracy, human supervisors naturally grow complacent.',
        collocations: ['grow complacent', 'become complacent', 'complacent attitude'],
        synonyms: ['overconfident', 'unvigilant', 'careless'],
        antonyms: ['vigilant', 'alert']
      },
      {
        id: 'c1-ap-3',
        word: 'atrophy',
        phonetic: '/ˈætrəfi/',
        partOfSpeech: 'verb',
        definition: 'To gradually weaken or waste away through lack of use.',
        cefrLevel: 'C1',
        exampleSentence: 'Attention wanders, manual reflexes atrophy, and operators begin to trust the screen blindly.',
        collocations: ['skills atrophy', 'muscles atrophy', 'gradually atrophy'],
        synonyms: ['wither', 'decline', 'deteriorate'],
        antonyms: ['strengthen', 'flourish']
      },
      {
        id: 'c1-ap-4',
        word: 'amiss',
        phonetic: '/əˈmɪs/',
        partOfSpeech: 'adjective',
        definition: 'Not quite right; inappropriate, faulty, or out of order.',
        cefrLevel: 'C1',
        exampleSentence: 'Operators trust the screen even when subtle warning signs suggest something is amiss.',
        collocations: ['something is amiss', 'sense something amiss', 'nothing amiss'],
        synonyms: ['wrong', 'awry', 'faulty']
      },
      {
        id: 'c1-ap-5',
        word: 'reluctant',
        phonetic: '/rɪˈlʌktənt/',
        partOfSpeech: 'adjective',
        definition: 'Unwilling and hesitant; disinclined to do something.',
        cefrLevel: 'C1',
        exampleSentence: 'Radiologists can become reluctant to overrule a computer’s recommendation.',
        collocations: ['reluctant to overrule', 'deeply reluctant', 'reluctant agreement'],
        synonyms: ['hesitant', 'unwilling', 'loath'],
        antonyms: ['eager', 'willing']
      },
      {
        id: 'c1-ap-6',
        word: 'scrutiny',
        phonetic: '/ˈskruːtəni/',
        partOfSpeech: 'noun',
        definition: 'Critical observation or detailed examination.',
        cefrLevel: 'C1',
        exampleSentence: 'Doctors may fear legal scrutiny if they disagree with the machine and turn out to be wrong.',
        collocations: ['legal scrutiny', 'public scrutiny', 'come under scrutiny'],
        synonyms: ['inspection', 'investigation', 'examination'],
        antonyms: ['neglect', 'oversight']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-ap-1',
          targetWord: 'complacent',
          question: 'Why do operators tend to grow "complacent" when working with highly reliable software?',
          options: [
            'Because thousands of hours of smooth operation lull them into a false sense of security.',
            'Because the software forces them to solve math problems every minute.',
            'Because they dislike using computers.'
          ],
          correctIndex: 0,
          explanation: '"Complacent" means overly relaxed and unconcerned about potential risks because things have gone smoothly.'
        },
        {
          id: 'mc-c1-ap-2',
          targetWord: 'atrophy',
          question: 'What happens when a pilot’s manual flying skills "atrophy"?',
          options: [
            'They gradually weaken and lose sharpness from lack of regular practice.',
            'They improve automatically while the autopilot is engaged.',
            'They win an aviation safety award.'
          ],
          correctIndex: 0,
          explanation: 'To "atrophy" means to waste away or weaken due to disuse.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-ap-1',
          sentenceWithBlank: 'After three consecutive championship titles, the coaching staff warned the players not to become _____.',
          targetWord: 'complacent',
          hint: 'Overly comfortable and less alert to competition or danger',
          options: ['complacent', 'reluctant', 'counterintuitive', 'sobering']
        },
        {
          id: 'cl-c1-ap-2',
          sentenceWithBlank: 'The company’s environmental claims came under intense _____ from independent journalists.',
          targetWord: 'scrutiny',
          hint: 'Close, critical examination',
          options: ['scrutiny', 'malleability', 'disparity', 'alteration']
        }
      ],
      matching: {
        id: 'ma-c1-ap-1',
        instructions: 'Match each C1 vocabulary item with its definition.',
        pairs: [
          { id: 'p1', term: 'counterintuitive', match: 'Contrary to what common sense would suggest' },
          { id: 'p2', term: 'complacent', match: 'Unvigilant due to a false sense of security' },
          { id: 'p3', term: 'atrophy', match: 'Weaken or waste away from lack of use' },
          { id: 'p4', term: 'scrutiny', match: 'Close, critical examination or inspection' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-ap-1',
          promptSentence: 'After years of strong sales, _____ (COMPLACENT) in the boardroom blinded the firm to new competitors.',
          rootWord: 'COMPLACENT',
          correctAnswer: 'complacency',
          hint: 'Change the adjective into an abstract noun',
          explanation: 'The noun form of "complacent" is "complacency".'
        }
      ]
    }
  },
  {
    id: 'c1-outrage-neuroscience-politics',
    title: 'The Neuroscience of Political Polarization: Why Outrage Spreads Faster Than Nuance',
    subtitle: 'Social psychologists and neuroscientists have traced how moral indignation hijacks the brain’s reward circuitry—and why digital platforms turn civic debate into tribal warfare.',
    level: 'C1',
    category: 'Neuroscience & Politics',
    readTime: '8 min read',
    wordCount: 650,
    cefrSummary: 'Integrates neuroscience and political analysis in natural, engaging C1 prose.',
    themeColor: 'rose',
    gradientFrom: 'from-rose-950',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Open almost any political thread online and you will notice an immediate asymmetry: measured, nuanced explanations rarely travel far, whereas posts dripping with moral outrage accumulate thousands of shares within minutes. When researchers at New York University analyzed millions of social media messages concerning gun control, climate policy, and elections, they calculated that every single moral-emotional word added to a post increased its diffusion within a political group by roughly twenty percent.',
      'To understand why indignation is so contagious, neuroscientists look to the evolutionary function of moral emotions. In small ancestral communities, expressing outrage at someone who cheated the group served two purposes: it deterred future rule-breakers and signaled the speaker’s own trustworthiness to neighbours. Brain-imaging studies show that condemning a perceived wrongdoer activates not only threat centers like the amygdala, but also the striatum—a key hub in the brain’s dopamine reward pathway.',
      'In face-to-face life, however, righteous anger carries social costs. Confronting a neighbour or colleague in person risks awkwardness, retaliation, or discovering that the situation was more complicated than it first appeared. Those natural brakes kept everyday outrage in check.',
      'Digital platforms strip away those friction points while supercharging the social rewards. When a user posts a scathing denunciation of a political opponent online, they rarely encounter the target directly; instead, they receive immediate validation in the form of "likes" and reposts from their own camp. Over time, this feedback loop conditions users to express ever sharper hostility—a process psychologists call operant conditioning.',
      'The casualty of this outrage economy is nuance. Complex policy trade-offs—where every solution involves costs as well as benefits—cannot easily be compressed into a righteous thirty-second clip. Rebuilding healthier democratic habits requires recognizing when our own reward circuits are being baited.'
    ],
    targetVocabulary: [
      {
        id: 'c1-op-1',
        word: 'nuance',
        phonetic: '/ˈnjuːɑːns/',
        partOfSpeech: 'noun',
        definition: 'Subtle distinction, complexity, or shade of meaning that avoids oversimplification.',
        cefrLevel: 'C1',
        exampleSentence: 'The casualty of this outrage economy is nuance.',
        collocations: ['lack nuance', 'subtle nuance', 'appreciate the nuance'],
        synonyms: ['subtlety', 'complexity', 'refinement'],
        antonyms: ['oversimplification']
      },
      {
        id: 'c1-op-2',
        word: 'indignation',
        phonetic: '/ˌɪndɪɡˈneɪʃn/',
        partOfSpeech: 'noun',
        definition: 'Anger or annoyance provoked by what is perceived as unfair or immoral treatment.',
        cefrLevel: 'C1',
        exampleSentence: 'To understand why indignation is so contagious, neuroscientists look to evolution.',
        collocations: ['moral indignation', 'righteous indignation', 'express indignation'],
        synonyms: ['outrage', 'resentment', 'wrath'],
        antonyms: ['composure', 'indifference']
      },
      {
        id: 'c1-op-3',
        word: 'deter',
        phonetic: '/dɪˈtɜː(r)/',
        partOfSpeech: 'verb',
        definition: 'To discourage someone from doing something by instilling doubt or fear of the consequences.',
        cefrLevel: 'C1',
        exampleSentence: 'Expressing outrage at someone who cheated the group deterred future rule-breakers.',
        collocations: ['deter rule-breakers', 'deter crime', 'fail to deter'],
        synonyms: ['discourage', 'prevent', 'dissuade'],
        antonyms: ['encourage', 'incite']
      },
      {
        id: 'c1-op-4',
        word: 'scathing',
        phonetic: '/ˈskeɪðɪŋ/',
        partOfSpeech: 'adjective',
        definition: 'Witheringly scornful; severely critical.',
        cefrLevel: 'C1',
        exampleSentence: 'When a user posts a scathing denunciation of a political opponent, they receive immediate validation.',
        collocations: ['scathing criticism', 'scathing report', 'scathing attack'],
        synonyms: ['blistering', 'harsh', 'biting'],
        antonyms: ['flattering', 'mild']
      },
      {
        id: 'c1-op-5',
        word: 'validation',
        phonetic: '/ˌvælɪˈdeɪʃn/',
        partOfSpeech: 'noun',
        definition: 'Recognition or affirmation that a person’s feelings or opinions are worthwhile and approved by others.',
        cefrLevel: 'C1',
        exampleSentence: 'They receive immediate validation in the form of likes and reposts from their own camp.',
        collocations: ['seek validation', 'social validation', 'immediate validation'],
        synonyms: ['approval', 'affirmation', 'endorsement'],
        antonyms: ['rejection', 'disapproval']
      },
      {
        id: 'c1-op-6',
        word: 'casualty',
        phonetic: '/ˈkæʒuəlti/',
        partOfSpeech: 'noun',
        definition: 'A person or thing badly affected, damaged, or lost as a result of an event or trend.',
        cefrLevel: 'C1',
        exampleSentence: 'The casualty of this outrage economy is nuance.',
        collocations: ['first casualty', 'inevitable casualty', 'become a casualty of'],
        synonyms: ['victim', 'loss', 'sacrifice']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-op-1',
          targetWord: 'indignation',
          question: 'What is "moral indignation"?',
          options: [
            'Anger triggered by seeing something that feels unfair, unethical, or wrong',
            'A calm agreement between two opposing political parties',
            'A lack of interest in current events'
          ],
          correctIndex: 0,
          explanation: '"Indignation" is anger aroused by something perceived as unjust or unworthy.'
        },
        {
          id: 'mc-c1-op-2',
          targetWord: 'casualty',
          question: 'When the author writes "The casualty of this outrage economy is nuance," how is "casualty" being used?',
          options: [
            'Metaphorically, to mean that careful, balanced thinking is what gets destroyed or lost',
            'Literally, to refer to hospital patients injured in traffic accidents',
            'To describe a casual, informal style of writing'
          ],
          correctIndex: 0,
          explanation: 'At C1 level, "casualty" is often used figuratively for a value or quality that suffers or disappears during a crisis.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-op-1',
          sentenceWithBlank: 'The parliamentary committee published a _____ assessment of how the ministry handled the crisis.',
          targetWord: 'scathing',
          hint: 'Severely and sharply critical',
          options: ['scathing', 'complacent', 'plausible', 'reluctant']
        },
        {
          id: 'cl-c1-op-2',
          sentenceWithBlank: 'Heavy fines are intended to _____ factories from dumping untreated waste into rivers.',
          targetWord: 'deter',
          hint: 'Discourage through fear of consequences',
          options: ['deter', 'distort', 'entrench', 'inflate']
        }
      ],
      matching: {
        id: 'ma-c1-op-1',
        instructions: 'Match each C1 vocabulary item with its definition.',
        pairs: [
          { id: 'p1', term: 'nuance', match: 'Subtle complexity or shade of meaning' },
          { id: 'p2', term: 'indignation', match: 'Anger provoked by perceived unfairness' },
          { id: 'p3', term: 'deter', match: 'Discourage someone from acting by warning of consequences' },
          { id: 'p4', term: 'scathing', match: 'Severely and sharply critical' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-op-1',
          promptSentence: 'Public policy problems require a _____ (NUANCE) approach rather than simple slogans.',
          rootWord: 'NUANCE',
          correctAnswer: 'nuanced',
          hint: 'Change the noun into an adjective meaning "showing subtle appreciation of complexity"',
          explanation: 'Adding "-d" to "nuance" creates the adjective "nuanced".'
        }
      ]
    }
  },
  {
    id: 'c1-algorithmic-governance-politics',
    title: 'When Algorithms Make Public Policy: The Quiet Crisis of Democratic Accountability',
    subtitle: 'Governments worldwide now use automated scoring systems to allocate welfare, grade exams, and predict crime—often without citizens knowing how the rules were written.',
    level: 'C1',
    category: 'Neuroscience & Politics',
    readTime: '8 min read',
    wordCount: 645,
    cefrSummary: 'Examines public policy and legal accountability using natural C1 political journalism.',
    themeColor: 'indigo',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-indigo-950',
    paragraphs: [
      'When a parliament passes a controversial tax law or a city council cuts bus routes, voters know whom to blame. Elected officials must debate the measure in public, publish the text of the statute, and defend their choices at the next election. Over the past decade, however, a quiet shift has taken place across modern bureaucracies: consequential decisions about who receives disability benefits, which families are investigated for tax fraud, and how school-leaving grades are awarded are increasingly delegated to proprietary algorithms.',
      'For cash-strapped public agencies, the appeal of automated decision-making is obvious. Software can process tens of thousands of applications overnight, promise uniform consistency, and drape tough political choices in a comforting cloak of mathematical objectivity.',
      'Yet when those algorithms go wrong, the human consequences can be devastating. In the Netherlands, an automated risk-scoring system known as SyRI flagged thousands of low-income parents—often those with dual nationality—as likely childcare-benefit fraudsters, plunging innocent families into bankruptcy and eventually forcing the Dutch cabinet to resign in 2021. Similarly, when British exam regulators used an algorithm to assign school grades during the 2020 pandemic, the formula systematically downgraded high-achieving students from state schools while boosting pupils at small private schools.',
      'The core problem is not merely technical error, but an erosion of accountability. Because many public-sector algorithms are purchased from private software vendors, their source code is frequently shielded from public inspection by commercial trade-secret laws. A citizen denied housing support or flagged by predictive policing software cannot cross-examine a black box.',
      'Legal scholars argue that democratic legitimacy requires "algorithmic due process": mandatory public audits before any high-stakes model is deployed, plain-language explanations for every automated refusal, and an unconditional right to appeal to an empowered human decision-maker.'
    ],
    targetVocabulary: [
      {
        id: 'c1-ag-1',
        word: 'consequential',
        phonetic: '/ˌkɒnsɪˈkwenʃl/',
        partOfSpeech: 'adjective',
        definition: 'Having important, far-reaching effects on people’s lives or the future.',
        cefrLevel: 'C1',
        exampleSentence: 'Consequential decisions about who receives disability benefits are increasingly delegated to algorithms.',
        collocations: ['consequential decision', 'highly consequential', 'politically consequential'],
        synonyms: ['significant', 'far-reaching', 'momentous'],
        antonyms: ['trivial', 'inconsequential']
      },
      {
        id: 'c1-ag-2',
        word: 'delegate',
        phonetic: '/ˈdelɪɡeɪt/',
        partOfSpeech: 'verb',
        definition: 'To entrust a task, responsibility, or decision to another person or system.',
        cefrLevel: 'C1',
        exampleSentence: 'Decisions about welfare and school grades are increasingly delegated to proprietary algorithms.',
        collocations: ['delegate authority', 'delegate decisions', 'delegate responsibility'],
        synonyms: ['entrust', 'hand over', 'assign'],
        antonyms: ['retain']
      },
      {
        id: 'c1-ag-3',
        word: 'proprietary',
        phonetic: '/prəˈpraɪətəri/',
        partOfSpeech: 'adjective',
        definition: 'Owned privately by a company and protected as a commercial secret.',
        cefrLevel: 'C1',
        exampleSentence: 'Public decisions are delegated to proprietary algorithms whose code is hidden from voters.',
        collocations: ['proprietary software', 'proprietary algorithm', 'proprietary technology'],
        synonyms: ['private', 'patented', 'closed-source'],
        antonyms: ['open-source', 'public']
      },
      {
        id: 'c1-ag-4',
        word: 'accountability',
        phonetic: '/əˌkaʊntəˈbɪləti/',
        partOfSpeech: 'noun',
        definition: 'The obligation of officials or institutions to explain their actions and accept responsibility for mistakes.',
        cefrLevel: 'C1',
        exampleSentence: 'The core problem is not merely technical error, but an erosion of accountability.',
        collocations: ['democratic accountability', 'public accountability', 'demand accountability'],
        synonyms: ['answerability', 'responsibility', 'transparency'],
        antonyms: ['impunity']
      },
      {
        id: 'c1-ag-5',
        word: 'shield',
        phonetic: '/ʃiːld/',
        partOfSpeech: 'verb',
        definition: 'To protect or hide someone or something from scrutiny, danger, or criticism.',
        cefrLevel: 'C1',
        exampleSentence: 'Their source code is frequently shielded from public inspection by trade-secret laws.',
        collocations: ['shield from scrutiny', 'shield from inspection', 'carefully shielded'],
        synonyms: ['protect', 'insulate', 'conceal'],
        antonyms: ['expose']
      },
      {
        id: 'c1-ag-6',
        word: 'legitimacy',
        phonetic: '/lɪˈdʒɪtɪməsi/',
        partOfSpeech: 'noun',
        definition: 'The quality of being accepted by citizens as fair, lawful, and rightful.',
        cefrLevel: 'C1',
        exampleSentence: 'Legal scholars argue that democratic legitimacy requires algorithmic due process.',
        collocations: ['democratic legitimacy', 'political legitimacy', 'undermine legitimacy'],
        synonyms: ['validity', 'authority', 'lawfulness']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-ag-1',
          targetWord: 'proprietary',
          question: 'Why is it difficult for citizens to inspect the code of "proprietary" government algorithms?',
          options: [
            'Because private vendors own the software and claim the code is a protected trade secret.',
            'Because the code is written in ancient Latin.',
            'Because the government deletes the software every evening.'
          ],
          correctIndex: 0,
          explanation: '"Proprietary" software is privately owned and legally protected from public disclosure.'
        },
        {
          id: 'mc-c1-ag-2',
          targetWord: 'accountability',
          question: 'What does an "erosion of accountability" mean in public administration?',
          options: [
            'A situation where no official takes clear responsibility or answers to the public when mistakes happen',
            'A new accounting system that calculates taxes faster',
            'An increase in voter turnout during local elections'
          ],
          correctIndex: 0,
          explanation: '"Accountability" is the duty to explain decisions and take responsibility for their outcomes.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-ag-1',
          sentenceWithBlank: 'Effective leaders know which routine tasks to _____ and which strategic decisions to handle personally.',
          targetWord: 'delegate',
          hint: 'Entrust or hand over to someone else',
          options: ['delegate', 'shield', 'deter', 'falter']
        },
        {
          id: 'cl-c1-ag-2',
          sentenceWithBlank: 'Secret courts undermine the public _____ of the justice system.',
          targetWord: 'legitimacy',
          hint: 'Acceptance as fair, lawful, and rightful',
          options: ['legitimacy', 'indignation', 'malleability', 'disparity']
        }
      ],
      matching: {
        id: 'ma-c1-ag-1',
        instructions: 'Match each governance and policy term with its definition.',
        pairs: [
          { id: 'p1', term: 'consequential', match: 'Having major, far-reaching effects' },
          { id: 'p2', term: 'proprietary', match: 'Privately owned and protected as a trade secret' },
          { id: 'p3', term: 'accountability', match: 'Obligation to explain actions and accept responsibility' },
          { id: 'p4', term: 'shield', match: 'Protect or hide from outside inspection' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-ag-1',
          promptSentence: 'In a healthy democracy, public officials must remain _____ (ACCOUNTABILITY) to the citizens they serve.',
          rootWord: 'ACCOUNTABILITY',
          correctAnswer: 'accountable',
          hint: 'Convert the noun into an adjective',
          explanation: 'The adjective form of "accountability" is "accountable".'
        }
      ]
    }
  },
  {
    id: 'c1-predictive-brain-neuroscience',
    title: 'The Predictive Brain: How Prior Expectations Shape Conscious Perception',
    subtitle: 'Your brain locked inside a dark skull does not passively wait for sights and sounds to arrive. Instead, it constantly guesses what is out there—and uses your senses only to check its mistakes.',
    level: 'C1',
    category: 'Neuroscience & Politics',
    readTime: '8 min read',
    wordCount: 640,
    cefrSummary: 'Explains contemporary neuroscience (predictive processing) in lucid, accessible C1 prose without artificial jargon.',
    themeColor: 'indigo',
    gradientFrom: 'from-violet-950',
    gradientTo: 'to-slate-900',
    paragraphs: [
      'Take a moment to consider the predicament of your brain. Sealed inside a silent, pitch-black vault of bone, it never experiences light, sound waves, or textures directly. All it ever receives are streams of electrical pulses traveling along nerve fibers from your eyes, ears, and skin. How does the brain transform those ambiguous electrical crackles into the vivid, seamless world you see around you?',
      'For decades, textbook neuroscience described perception as a one-way assembly line: light hits the retina, simple features like edges and colors are detected in the back of the brain, and higher cortical areas gradually piece those fragments together into a recognizable face or coffee cup. Yet anatomical studies revealed a puzzling fact that didn’t fit this bottom-up story: in the visual cortex, far more nerve fibers carry signals "backward"—from higher thinking centers toward the sensory entry points—than carry raw data inward from the eyes.',
      'To explain this wiring, computational neuroscientists developed the theory of "predictive processing." Rather than passively waiting for sensory input, the brain acts as a tireless hypothesis generator. Drawing on a lifetime of past experience, higher brain regions continuously broadcast top-down predictions about what you are about to see, hear, and feel. Incoming signals from the senses are used primarily to flag "prediction errors"—surprising details that failed to match the brain’s expectation.',
      'Everyday life is full of clues to this predictive machinery. It explains why you can easily understand a friend speaking in a noisy café (your brain fills in the missing syllables from context), why you briefly feel the phantom lurch of a broken escalator even when it is standing still, and why optical illusions are impossible to "unsee" once your visual system settles on a best guess.',
      'Predictive processing also sheds new light on medicine and mental health. Placebo pain relief works in part because strong expectations of recovery dampen incoming pain signals in the spinal cord, whereas conditions like chronic anxiety may stem from a brain that assigns excessive weight to false alarms.'
    ],
    targetVocabulary: [
      {
        id: 'c1-pb-1',
        word: 'predicament',
        phonetic: '/prɪˈdɪkəmənt/',
        partOfSpeech: 'noun',
        definition: 'A difficult, puzzling, or challenging situation.',
        cefrLevel: 'C1',
        exampleSentence: 'Take a moment to consider the predicament of your brain, sealed inside a dark skull.',
        collocations: ['curious predicament', 'find oneself in a predicament', 'escape a predicament'],
        synonyms: ['dilemma', 'quandary', 'plight']
      },
      {
        id: 'c1-pb-2',
        word: 'ambiguous',
        phonetic: '/æmˈbɪɡjuəs/',
        partOfSpeech: 'adjective',
        definition: 'Open to more than one interpretation; not having one obvious meaning.',
        cefrLevel: 'C1',
        exampleSentence: 'How does the brain transform those ambiguous electrical crackles into a vivid world?',
        collocations: ['ambiguous signal', 'deliberately ambiguous', 'remain ambiguous'],
        synonyms: ['unclear', 'equivocal', 'vague'],
        antonyms: ['unambiguous', 'clear-cut']
      },
      {
        id: 'c1-pb-3',
        word: 'seamless',
        phonetic: '/ˈsiːmləs/',
        partOfSpeech: 'adjective',
        definition: 'Smooth and continuous, with no apparent gaps, interruptions, or rough transitions.',
        cefrLevel: 'C1',
        exampleSentence: 'The brain transforms electrical pulses into the vivid, seamless world you see around you.',
        collocations: ['seamless transition', 'seamless experience', 'appear seamless'],
        synonyms: ['smooth', 'uninterrupted', 'Effortless'],
        antonyms: ['disjointed', 'fragmented']
      },
      {
        id: 'c1-pb-4',
        word: 'passively',
        phonetic: '/ˈpæsɪvli/',
        partOfSpeech: 'adverb',
        definition: 'Without active participation, resistance, or initiative.',
        cefrLevel: 'C1',
        exampleSentence: 'Rather than passively waiting for sensory input, the brain acts as a hypothesis generator.',
        collocations: ['passively wait', 'passively accept', 'sit passively'],
        synonyms: ['idly', 'submissively'],
        antonyms: ['actively']
      },
      {
        id: 'c1-pb-5',
        word: 'dampen',
        phonetic: '/ˈdæmpən/',
        partOfSpeech: 'verb',
        definition: 'To make a signal, feeling, or reaction less strong or intense.',
        cefrLevel: 'C1',
        exampleSentence: 'Strong expectations of recovery can dampen incoming pain signals in the spinal cord.',
        collocations: ['dampen signals', 'dampen enthusiasm', 'dampen demand'],
        synonyms: ['reduce', 'muffle', 'curb'],
        antonyms: ['amplify', 'heighten']
      },
      {
        id: 'c1-pb-6',
        word: 'stem from',
        phonetic: '/stem frɒm/',
        partOfSpeech: 'phrase',
        definition: 'To originate in or be caused by something.',
        cefrLevel: 'C1',
        exampleSentence: 'Chronic anxiety may stem from a brain that assigns excessive weight to false alarms.',
        collocations: ['stem from a misunderstanding', 'largely stem from', 'problems stemming from'],
        synonyms: ['arise from', 'originate in', 'result from']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-pb-1',
          targetWord: 'ambiguous',
          question: 'Why does the author describe raw sensory signals from the eyes and ears as "ambiguous"?',
          options: [
            'Because raw electrical nerve pulses can be interpreted in multiple ways without prior context.',
            'Because the optic nerve only works during daylight.',
            'Because humans have weaker eyesight than birds.'
          ],
          correctIndex: 0,
          explanation: '"Ambiguous" means open to more than one interpretation or unclear on its own.'
        },
        {
          id: 'mc-c1-pb-2',
          targetWord: 'dampen',
          question: 'How do placebo treatments help reduce pain according to predictive processing?',
          options: [
            'Expectations of relief help dampen (reduce the intensity of) pain signals traveling up the spinal cord.',
            'They cause the patient to fall asleep immediately.',
            'They repair broken bones within minutes.'
          ],
          correctIndex: 0,
          explanation: 'To "dampen" a signal or emotion means to lessen its strength or intensity.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-pb-1',
          sentenceWithBlank: 'The contract wording was so _____ that both companies interpreted the deadline differently.',
          targetWord: 'ambiguous',
          hint: 'Open to more than one interpretation',
          options: ['ambiguous', 'seamless', 'scathing', 'consequential']
        },
        {
          id: 'cl-c1-pb-2',
          sentenceWithBlank: 'Higher interest rates are designed to _____ consumer borrowing and cool down inflation.',
          targetWord: 'dampen',
          hint: 'Reduce the intensity or strength of',
          options: ['dampen', 'inflate', 'compound', 'entrench']
        }
      ],
      matching: {
        id: 'ma-c1-pb-1',
        instructions: 'Match each C1 vocabulary item with its definition.',
        pairs: [
          { id: 'p1', term: 'predicament', match: 'A difficult or puzzling situation' },
          { id: 'p2', term: 'ambiguous', match: 'Open to more than one interpretation' },
          { id: 'p3', term: 'seamless', match: 'Smooth and continuous without noticeable gaps' },
          { id: 'p4', term: 'dampen', match: 'Make a signal or feeling less intense' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-pb-1',
          promptSentence: 'To avoid legal disputes, engineers must eliminate any _____ (AMBIGUOUS) in the safety manual.',
          rootWord: 'AMBIGUOUS',
          correctAnswer: 'ambiguity',
          hint: 'Change the adjective into a singular abstract noun',
          explanation: 'The noun form of "ambiguous" is "ambiguity".'
        }
      ]
    }
  },
  {
    id: 'c1-beyond-gdp-economics',
    title: 'Beyond GDP: Why National Output No Longer Captures Real Economic Prosperity',
    subtitle: 'Gross Domestic Product was invented in the 1930s to measure wartime factory output. Even its creator warned against mistaking it for a measure of human well-being.',
    level: 'C1',
    category: 'Modern Economics',
    readTime: '8 min read',
    wordCount: 645,
    cefrSummary: 'Features natural C1 economic commentary (*Economist* style), contrasting statistical metrics with lived reality.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-950',
    paragraphs: [
      'Every three months, financial markets and government ministries hold their breath for a single statistic: Gross Domestic Product. If GDP ticks upward by half a percent, politicians celebrate a thriving economy; if it shrinks for two consecutive quarters, headlines declare a recession. Yet few citizens realize that the economist who designed modern national income accounting, Nobel laureate Simon Kuznets, explicitly warned the US Congress in 1934 that "the welfare of a nation can scarcely be inferred from a measurement of national income."',
      'Kuznets’s caution made perfect sense given what GDP actually counts. Designed during the Great Depression and refined during the Second World War, GDP tallies the total market value of all goods and services bought and sold within a country’s borders. It is a superb gauge of industrial mobilization, but a deeply flawed proxy for human flourishing.',
      'Consider what the metric leaves out—and what it perversely rewards. When a parent stays home to care for an elderly relative or volunteers at a community library, no money changes hands, so GDP registers zero value. Conversely, when a hurricane flattens a coastal town or traffic congestion forces commuters to burn millions of extra gallons of fuel, the resulting construction contracts and gasoline sales show up in national accounts as a welcome economic boom.',
      'Nor does GDP say anything about how prosperity is distributed or whether growth is eating away at future foundations. A country can post impressive GDP gains by clear-cutting its ancient forests or allowing all new income to flow to the wealthiest one percent while median household living standards stagnate.',
      'In response, economists and statistical agencies are developing broader dashboards—from the United Nations’ Human Development Index to "natural capital" accounts that deduct environmental depletion alongside machine depreciation. Nobody suggests abolishing GDP altogether, but dethroning it as the sole compass of public policy is long overdue.'
    ],
    targetVocabulary: [
      {
        id: 'c1-bg-1',
        word: 'infer',
        phonetic: '/ɪnˈfɜː(r)/',
        partOfSpeech: 'verb',
        definition: 'To deduce or conclude information from evidence and reasoning rather than from explicit statements.',
        cefrLevel: 'C1',
        exampleSentence: 'Kuznets warned that the welfare of a nation can scarcely be inferred from national income.',
        collocations: ['infer from', 'reasonably infer', 'wrongly infer'],
        synonyms: ['deduce', 'conclude', 'gather']
      },
      {
        id: 'c1-bg-2',
        word: 'tally',
        phonetic: '/ˈtæli/',
        partOfSpeech: 'verb',
        definition: 'To calculate or count the total number or value of something.',
        cefrLevel: 'C1',
        exampleSentence: 'GDP tallies the total market value of all goods and services bought and sold.',
        collocations: ['tally the cost', 'tally votes', 'final tally'],
        synonyms: ['count', 'total', 'add up']
      },
      {
        id: 'c1-bg-3',
        word: 'proxy',
        phonetic: '/ˈprɒksi/',
        partOfSpeech: 'noun',
        definition: 'A figure or indicator used to represent the value of something else that is harder to measure directly.',
        cefrLevel: 'C1',
        exampleSentence: 'GDP is a superb gauge of industrial output, but a deeply flawed proxy for human flourishing.',
        collocations: ['flawed proxy', 'useful proxy for', 'serve as a proxy'],
        synonyms: ['substitute', 'stand-in', 'indicator']
      },
      {
        id: 'c1-bg-4',
        word: 'perversely',
        phonetic: '/pəˈvɜːsli/',
        partOfSpeech: 'adverb',
        definition: 'In a way that is contrary to what is reasonable, expected, or desirable.',
        cefrLevel: 'C1',
        exampleSentence: 'Consider what the metric leaves out—and what it perversely rewards.',
        collocations: ['perversely reward', 'perversely incentivize', 'behave perversely'],
        synonyms: ['paradoxically', 'absurdly', 'contrarily']
      },
      {
        id: 'c1-bg-5',
        word: 'stagnate',
        phonetic: '/stæɡˈneɪt/',
        partOfSpeech: 'verb',
        definition: 'To stop developing, growing, or progressing.',
        cefrLevel: 'C1',
        exampleSentence: 'A country can post GDP gains while median household living standards stagnate.',
        collocations: ['wages stagnate', 'economy stagnates', 'living standards stagnate'],
        synonyms: ['stall', 'flatline', 'languish'],
        antonyms: ['flourish', 'boom']
      },
      {
        id: 'c1-bg-6',
        word: 'depletion',
        phonetic: '/dɪˈpliːʃn/',
        partOfSpeech: 'noun',
        definition: 'The reduction in the quantity or supply of a resource until very little remains.',
        cefrLevel: 'C1',
        exampleSentence: 'Natural capital accounts deduct environmental depletion alongside machine depreciation.',
        collocations: ['resource depletion', 'environmental depletion', 'ozone depletion'],
        synonyms: ['exhaustion', 'draining', 'consumption'],
        antonyms: ['replenishment', 'restoration']
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-c1-bg-1',
          targetWord: 'proxy',
          question: 'What does the author mean by calling GDP a "flawed proxy for human flourishing"?',
          options: [
            'It is an imperfect stand-in measure that does not accurately reflect how well people are actually living.',
            'It is an illegal tax collected by foreign governments.',
            'It is a secret formula that only central bankers are allowed to see.'
          ],
          correctIndex: 0,
          explanation: 'In economics and science, a "proxy" is an indirect metric used to stand in for something harder to measure.'
        },
        {
          id: 'mc-c1-bg-2',
          targetWord: 'stagnate',
          question: 'If median household wages "stagnate" for a decade, what happens to them?',
          options: [
            'They stay flat and fail to grow.',
            'They double every two years.',
            'They are paid in gold coins instead of paper money.'
          ],
          correctIndex: 0,
          explanation: 'To "stagnate" means to stop growing or progressing.'
        }
      ],
      cloze: [
        {
          id: 'cl-c1-bg-1',
          sentenceWithBlank: 'Scientists use the width of ancient tree rings as a reliable _____ for historical rainfall.',
          targetWord: 'proxy',
          hint: 'An indirect indicator or stand-in measure',
          options: ['proxy', 'casualty', 'predicament', 'culprit']
        },
        {
          id: 'cl-c1-bg-2',
          sentenceWithBlank: 'Overfishing has led to the rapid _____ of cod stocks in the North Atlantic.',
          targetWord: 'depletion',
          hint: 'Reduction of a resource until little remains',
          options: ['depletion', 'legitimacy', 'validation', 'indignation']
        }
      ],
      matching: {
        id: 'ma-c1-bg-1',
        instructions: 'Match each C1 macroeconomics term with its definition.',
        pairs: [
          { id: 'p1', term: 'infer', match: 'Deduce or conclude from evidence' },
          { id: 'p2', term: 'proxy', match: 'Indirect indicator used to represent something harder to measure' },
          { id: 'p3', term: 'stagnate', match: 'Stop growing, developing, or progressing' },
          { id: 'p4', term: 'depletion', match: 'Reduction of a natural resource supply' }
        ]
      },
      wordFormation: [
        {
          id: 'wf-c1-bg-1',
          promptSentence: 'Decades of wage _____ (STAGNATE) left many working families feeling excluded from national growth.',
          rootWord: 'STAGNATE',
          correctAnswer: 'stagnation',
          hint: 'Convert the verb into an abstract noun',
          explanation: 'The noun form of "stagnate" is "stagnation".'
        }
      ]
    }
  }
];

import { Article } from '../types';

export const B2_PRO_BATCH_2: Article[] = [
  {
    id: 'b2-submarine-fiber-optic-cables',
    title: 'The Glass Threads on the Ocean Floor: How Undersea Cables Carry 99% of Global Internet Traffic',
    subtitle: 'We talk about "the cloud" and satellites in space, yet almost every international email, video call, and bank transfer travels through garden-hose-sized cables on the seabed.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 462,
    cefrSummary: 'Global telecommunications, optical physics, and B2 infrastructure vocabulary.',
    themeColor: 'blue',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-blue-950',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'More than 1.4 million kilometers of fiber-optic cables snake across underwater mountains and abyssal plains to link the world’s continents.',
    paragraphs: [
      'When you send a message from Tashkent to London or stream a video stored on a server across the Atlantic, it is easy to imagine the data bouncing off a satellite high in outer space. In reality, satellites carry less than one percent of international internet traffic. The remaining ninety-nine percent travels at the bottom of the ocean through a hidden network of roughly five hundred submarine fiber-optic cables resting on the dark seabed.',
      'Why do telecommunications companies go to the trouble of laying cables across five-kilometer-deep ocean trenches when satellites are already orbiting overhead? The answer comes down to bandwidth and latency. Radio signals sent to a geostationary satellite must travel thirty-six thousand kilometers up into space and thirty-six thousand kilometers back down, creating a noticeable quarter-second delay. By contrast, laser pulses traveling through hair-thin strands of pure glass inside an undersea cable cross the Atlantic in just sixty milliseconds while carrying thousands of times more data per second.',
      'Surprisingly, a deep-sea internet cable is only about as thick as a garden hose. At its core sit between four and twenty-four pairs of glass optical fibers, wrapped in layers of steel wire, copper tubing (which carries high-voltage electricity to power underwater signal amplifiers every eighty kilometers), and waterproof polyethylene plastic. Near shallow coastlines—where ship anchors, fishing trawlers, and coastal currents pose a constant hazard—the cable is armored in heavy steel and buried beneath the seafloor by underwater plows.',
      'Because modern banking, aviation, and cloud computing depend on this physical lifeline, network engineers design the global grid with built-in redundancy. Around the world, specialized repair ships wait on twenty-four-hour standby; whenever an undersea earthquake or a dragging anchor snaps a cable, traffic is automatically rerouted along neighboring cables within milliseconds while a crew sails out, hooks the severed ends from the ocean floor, and splices the glass fibers back together at sea.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-226',
        word: 'seabed',
        partOfSpeech: 'noun',
        phonetic: '/ˈsiːbed/',
        definition: 'The solid ground or floor at the bottom of the ocean.',
        contextSentence: 'The remaining ninety-nine percent travels at the bottom of the ocean through a hidden network of roughly five hundred submarine fiber-optic cables resting on the dark seabed.',
        exampleSentence: 'Remotely operated submarines mapped the volcanic ridges along the Pacific seabed.',
        synonyms: ['ocean floor', 'seafloor', 'sea bottom'],
        collocations: ['deep seabed', 'rest on the seabed', 'across the seabed'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-227',
        word: 'latency',
        partOfSpeech: 'noun',
        phonetic: '/ˈleɪtənsi/',
        definition: 'The time delay between when a signal or command is sent and when it is received across a network.',
        contextSentence: 'Why do telecommunications companies go to the trouble of laying cables across five-kilometer-deep ocean trenches when satellites are already orbiting overhead? The answer comes down to bandwidth and latency.',
        exampleSentence: 'Low network latency is essential for live video calls and remote surgical robots.',
        synonyms: ['delay', 'lag', 'response time'],
        collocations: ['low latency', 'reduce latency', 'network latency'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-228',
        word: 'hazard',
        partOfSpeech: 'noun',
        phonetic: '/ˈhæzəd/',
        definition: 'A source of danger or a potential risk that can cause damage or harm.',
        contextSentence: 'Near shallow coastlines—where ship anchors, fishing trawlers, and coastal currents pose a constant hazard—the cable is armored in heavy steel.',
        exampleSentence: 'Floating icebergs posed a serious hazard to early twentieth-century passenger ships.',
        synonyms: ['danger', 'threat', 'peril'],
        collocations: ['pose a hazard', 'safety hazard', 'natural hazard'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-229',
        word: 'redundancy',
        partOfSpeech: 'noun',
        phonetic: '/rɪˈdʌndənsi/',
        definition: 'The inclusion of extra backup components or pathways in an engineering system so it keeps working if one part fails.',
        contextSentence: 'Because modern banking, aviation, and cloud computing depend on this physical lifeline, network engineers design the global grid with built-in redundancy.',
        exampleSentence: 'Commercial airliners have triple redundancy in their flight computers for maximum safety.',
        synonyms: ['backup capacity', 'fail-safe design'],
        collocations: ['built-in redundancy', 'system redundancy', 'network redundancy'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-230',
        word: 'sever',
        partOfSpeech: 'verb',
        phonetic: '/ˈsevə(r)/',
        definition: 'To cut off or break something completely into two separate parts.',
        contextSentence: 'Whenever an undersea earthquake or a dragging anchor snaps a cable, a crew sails out, hooks the severed ends from the ocean floor, and splices the glass fibers back together at sea.',
        exampleSentence: 'A falling pine tree severed the overhead power line during the blizzard.',
        synonyms: ['cut through', 'break', 'disconnect'],
        collocations: ['sever a cable', 'severed ends', 'sever connections'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-91',
          targetWord: 'latency',
          question: 'Why do undersea fiber-optic cables carry 99% of international internet traffic instead of satellites in space?',
          options: [
            'Because laser pulses in glass cables travel a much shorter distance with far lower latency and thousands of times greater data capacity than satellite radio signals.',
            'Because satellites only work during daylight hours.',
            'Because radio waves cannot travel through outer space.',
            'Because laying cables across the ocean is free of charge.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 2 explains that undersea fiber-optic cables offer dramatically lower latency (60 ms across the Atlantic vs. ~250 ms via geostationary satellite) and thousands of times higher bandwidth.'
        },
        {
          id: 'mc-b2-92',
          targetWord: 'redundancy',
          question: 'Why doesn’t the internet crash completely whenever a ship anchor or undersea earthquake breaks a submarine cable?',
          options: [
            'Because the global grid is built with redundancy, automatically rerouting data along neighboring cables while repair ships splice the severed line.',
            'Because glass cables are stronger than diamond and can never break.',
            'Because scuba divers swim down five kilometers to hold the ends together.',
            'Because all international traffic immediately shuts down for a month.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that built-in redundancy allows traffic to be rerouted along neighboring cables within milliseconds while repair ships fix the severed line.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-91',
          sentenceWithBlank: 'Dragging ship anchors in shallow coastal waters pose the greatest _____ to undersea communication lines.',
          targetWord: 'hazard',
          hint: 'A source of danger or physical risk',
          options: ['hazard', 'latency', 'redundancy', 'seabed']
        },
        {
          id: 'cl-b2-92',
          sentenceWithBlank: 'Hospital power systems are engineered with backup generators to ensure full _____ during severe storms.',
          targetWord: 'redundancy',
          hint: 'Backup pathways or components so a system keeps working if one part fails',
          options: ['redundancy', 'latency', 'seabed', 'sever']
        }
      ],
      matching: {
        id: 'ma-b2-46',
        instructions: 'Match each B2 telecommunications word with its definition:',
        pairs: [
          { id: 'p-b2-181', term: 'seabed', match: 'The solid floor at the bottom of the ocean' },
          { id: 'p-b2-182', term: 'latency', match: 'The time delay between sending and receiving a data signal' },
          { id: 'p-b2-183', term: 'redundancy', match: 'Backup pathways built into a system so it continues working if one part fails' },
          { id: 'p-b2-184', term: 'sever', match: 'Cut or break a cable or connection completely in two' }
        ]
      }
    }
  },
  {
    id: 'b2-bystander-effect-diffusion-responsibility',
    title: 'The Bystander Paradox: Why You Are More Likely to Receive Help from One Stranger Than from a Crowd',
    subtitle: 'Social psychologists John Darley and Bibb Latané proved that the presence of dozens of witnesses can freeze everyone into inaction—and showed how to break the spell.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 459,
    cefrSummary: 'Social psychology, emergency behavior, and B2 behavioral vocabulary.',
    themeColor: 'violet',
    gradientFrom: 'from-violet-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Addressing one specific person directly in a crowd removes ambiguity and turns a passive onlooker into an active helper.',
    paragraphs: [
      'Suppose your bicycle tire slips on a wet city street and you fall hard onto the pavement, twisting your ankle. Would you rather be on a quiet side street with just one pedestrian walking past, or in a crowded town square surrounded by fifty people? Intuitively, almost everyone assumes that a large crowd offers safety in numbers. Yet decades of social psychology research prove the exact opposite: the more witnesses present at an emergency, the less likely any single individual is to step forward and help.',
      'In 1968, psychologists John Darley and Bibb Latané tested this counterintuitive behavior in a series of famous experiments at Columbia University. In one study, students sat in small private booths discussing university life over an intercom system. Suddenly, one participant—actually a pre-recorded actor—sounded as if he were suffering a severe medical seizure and cried out for help. When a student believed they were the only person listening on the intercom, eighty-five percent rushed out of their booth within seconds to get assistance. When they believed four other students were also listening on the line, only thirty-one percent went for help.',
      'Darley and Latané identified two psychological forces behind this "bystander effect." The first is social proof in ambiguous situations. Most real-life emergencies do not start with a clear alarm; a man slumped on a park bench might be having a heart attack, or he might simply be taking a nap. While deciding what is happening, people glance at the faces of strangers around them. Because everyone tries to look calm in public, everyone misinterprets everyone else’s calm face as proof that nothing is wrong.',
      'The second force is the "diffusion of responsibility." When you are the lone witness to an accident, hundred percent of the moral duty to intervene rests on your shoulders. In a crowd of fifty people, that feeling of personal duty is divided into tiny fragments—everyone assumes that someone else has already called an ambulance or knows first aid. Fortunately, the bystander effect is easy to defeat once you know its rules. If you ever need help in a crowd, never shout "Somebody help!" Instead, point directly at one specific person, make eye contact, and say, "You in the blue jacket—please call an ambulance right now." By removing ambiguity and assigning personal responsibility, you instantly break the spell.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-231',
        word: 'witness',
        partOfSpeech: 'noun',
        phonetic: '/ˈwɪtnəs/',
        definition: 'A person who sees an event, accident, or crime happen with their own eyes.',
        contextSentence: 'Yet decades of social psychology research prove the exact opposite: the more witnesses present at an emergency, the less likely any single individual is to step forward and help.',
        exampleSentence: 'Police interviewed three witnesses who saw the delivery truck hit the traffic light.',
        synonyms: ['onlooker', 'bystander', 'observer'],
        collocations: ['lone witness', 'eyewitness account', 'witness to an accident'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-232',
        word: 'counterintuitive',
        partOfSpeech: 'adjective',
        phonetic: '/ˌkaʊntərɪnˈtjuːɪtɪv/',
        definition: 'Contrary to what common sense or everyday intuition would lead you to expect.',
        contextSentence: 'In 1968, psychologists John Darley and Bibb Latané tested this counterintuitive behavior in a series of famous experiments at Columbia University.',
        exampleSentence: 'It seems counterintuitive, but slowing down slightly in heavy traffic can actually help everyone reach their destination faster.',
        synonyms: ['paradoxical', 'unexpected', 'surprising'],
        collocations: ['counterintuitive result', 'seem counterintuitive', 'counterintuitive finding'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-233',
        word: 'ambiguous',
        partOfSpeech: 'adjective',
        phonetic: '/æmˈbɪɡjuəs/',
        definition: 'Open to more than one interpretation; not clear or definite in meaning.',
        contextSentence: 'The first is social proof in ambiguous situations.',
        exampleSentence: 'Because the road sign was ambiguous, several drivers turned down the wrong lane.',
        synonyms: ['unclear', 'uncertain', 'vague'],
        collocations: ['ambiguous situation', 'ambiguous message', 'remain ambiguous'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-234',
        word: 'misinterpret',
        partOfSpeech: 'verb',
        phonetic: '/ˌmɪsɪnˈtɜːprɪt/',
        definition: 'To understand or explain an action, signal, or statement incorrectly.',
        contextSentence: 'Because everyone tries to look calm in public, everyone misinterprets everyone else’s calm face as proof that nothing is wrong.',
        exampleSentence: 'Without tone of voice, it is easy to misinterpret a short text message as rude.',
        synonyms: ['misread', 'misunderstand', 'misjudge'],
        collocations: ['misinterpret a signal', 'easily misinterpreted', 'misinterpret silence'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-235',
        word: 'intervene',
        partOfSpeech: 'verb',
        phonetic: '/ˌɪntəˈviːn/',
        definition: 'To step in and take action in a difficult situation in order to prevent harm or change the outcome.',
        contextSentence: 'When you are the lone witness to an accident, a hundred percent of the moral duty to intervene rests on your shoulders.',
        exampleSentence: 'The referee had to intervene quickly when the two players began arguing.',
        synonyms: ['step in', 'get involved', 'take action'],
        collocations: ['duty to intervene', 'intervene quickly', 'hesitate to intervene'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-93',
          targetWord: 'ambiguous',
          question: 'Why does looking at other people’s calm faces in a crowd often stop bystanders from reacting to an emergency?',
          options: [
            'Because when a situation is ambiguous, everyone tries to look calm while checking others’ reactions, causing everyone to misinterpret the crowd’s calmness as proof that nothing is wrong.',
            'Because people in crowds are unable to hear loud noises.',
            'Because strangers in cities always know one another personally.',
            'Because ambulances automatically arrive without anyone calling.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 3 explains that in ambiguous situations, people look at others for cues and misinterpret their calm expressions as proof that there is no real emergency.'
        },
        {
          id: 'mc-b2-94',
          targetWord: 'intervene',
          question: 'According to psychologists, what is the most effective way to get help if you are injured in a crowded public place?',
          options: [
            'Point directly at one specific person, make eye contact, and give them a clear instruction such as calling an ambulance.',
            'Shout "Somebody help!" at the sky without looking at anyone.',
            'Wait quietly until the crowd leaves the square.',
            'Ask all fifty people to vote on who should call the doctor.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that singling out one specific person ("You in the blue jacket—please call an ambulance") removes diffusion of responsibility and gets immediate action.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-93',
          sentenceWithBlank: 'When smoke began drifting under the hallway door, the situation was too _____ for the students to know whether it was a real fire or burnt toast.',
          targetWord: 'ambiguous',
          hint: 'Unclear and open to more than one interpretation',
          options: ['ambiguous', 'witness', 'intervene', 'misinterpret']
        },
        {
          id: 'cl-b2-94',
          sentenceWithBlank: 'Training workshops teach students how to _____ safely when they see someone being bullied or experiencing a medical crisis.',
          targetWord: 'intervene',
          hint: 'Step in and take action to prevent harm',
          options: ['intervene', 'counterintuitive', 'witness', 'ambiguous']
        }
      ],
      matching: {
        id: 'ma-b2-47',
        instructions: 'Match each B2 social psychology word with its definition:',
        pairs: [
          { id: 'p-b2-185', term: 'witness', match: 'A person who sees an event or emergency happen firsthand' },
          { id: 'p-b2-186', term: 'counterintuitive', match: 'Contrary to what common sense or intuition would expect' },
          { id: 'p-b2-187', term: 'ambiguous', match: 'Unclear and open to more than one interpretation' },
          { id: 'p-b2-188', term: 'intervene', match: 'Step in and take action to help or prevent harm' }
        ]
      }
    }
  },
  {
    id: 'b2-al-khwarizmi-house-of-wisdom-algebra',
    title: 'From Khwarazm to the Algorithm: How a Ninth-Century Scholar Invented the Language of Computing',
    subtitle: 'Every time you search the web or unlock a smartphone, you are relying on mathematical methods written down twelve hundred years ago by Muhammad ibn Musa al-Khwarizmi.',
    level: 'B2',
    category: 'History & Civilizations',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 466,
    cefrSummary: 'History of mathematics, Central Asian scholarship, and B2 academic vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-stone-900',
    gradientTo: 'to-amber-900',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Born in the oasis region of Khwarazm in modern-day Uzbekistan, Al-Khwarizmi gave the world both the discipline of algebra and the concept of the step-by-step algorithm.',
    paragraphs: [
      'Every day, billions of people interact with "algorithms"—the step-by-step mathematical instructions that guide search engines, route GPS maps, and encrypt digital banking. Few users realize that the very word "algorithm" is the Latinized version of the name of a ninth-century Central Asian mathematician: Muhammad ibn Musa al-Khwarizmi, born around 780 CE in the fertile oasis region of Khwarazm, in present-day Uzbekistan.',
      'As a young scholar of extraordinary talent, Al-Khwarizmi traveled to Baghdad to work at the Bayt al-Hikma, or House of Wisdom—an international academy where astronomers, translators, and mathematicians studied Greek, Sanskrit, and Persian manuscripts. Around 820 CE, he wrote a groundbreaking treatise titled Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala ("The Compendious Book on Calculation by Completion and Balancing"). When European scholars translated this book into Latin three centuries later, they took the Arabic word al-jabr from its title and turned it into the English word "algebra."',
      'What made Al-Khwarizmi’s book revolutionary was its systematic approach. Earlier mathematicians in Greece, India, and Babylon had solved individual equations as isolated puzzles. Al-Khwarizmi, by contrast, treated linear and quadratic equations as a unified science. Writing entirely in clear prose without modern symbols like x or y, he showed how any complex problem—from dividing a family inheritance to measuring the area of an irregular canal or calculating commercial profit—could be reduced to one of six standard forms and solved through a repeatable sequence of balancing steps.',
      'In a second influential treatise, Al-Khwarizmi introduced the Hindu-Arabic decimal system—using the digits 1 through 9 together with the revolutionary symbol zero—to the Middle East and later to Europe. Before his work spread, European merchants still multiplied and divided using clumsy Roman numerals (like MMXXIV) and counting boards. By combining place-value decimal numbers with systematic step-by-step procedures, Al-Khwarizmi laid the intellectual foundation for both modern engineering and the digital computer.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-236',
        word: 'encrypt',
        partOfSpeech: 'verb',
        phonetic: '/ɪnˈkrɪpt/',
        definition: 'To convert digital information or messages into a secret mathematical code to prevent unauthorized access.',
        contextSentence: 'Every day, billions of people interact with "algorithms"—the step-by-step mathematical instructions that guide search engines, route GPS maps, and encrypt digital banking.',
        exampleSentence: 'Messaging apps encrypt your conversations so that only the person receiving them can read the text.',
        synonyms: ['encode', 'cipher', 'scramble'],
        collocations: ['encrypt data', 'encrypted message', 'encrypt digital banking'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-237',
        word: 'treatise',
        partOfSpeech: 'noun',
        phonetic: '/ˈtriːtɪs/',
        definition: 'A formal, systematic written work that deals in depth with a scientific, mathematical, or philosophical subject.',
        contextSentence: 'Around 820 CE, he wrote a groundbreaking treatise titled Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala.',
        exampleSentence: 'Ibn Sina’s medical treatise was used as a standard textbook in universities for five hundred years.',
        synonyms: ['monograph', 'scholarly book', 'dissertation'],
        collocations: ['scientific treatise', 'write a treatise', 'influential treatise'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-238',
        word: 'systematic',
        partOfSpeech: 'adjective',
        phonetic: '/ˌsɪstəˈmætɪk/',
        definition: 'Done according to a fixed, logical, and organized plan or method rather than randomly.',
        contextSentence: 'What made Al-Khwarizmi’s book revolutionary was its systematic approach.',
        exampleSentence: 'Researchers conducted a systematic review of fifty clinical trials before publishing their findings.',
        synonyms: ['methodical', 'structured', 'orderly'],
        collocations: ['systematic approach', 'systematic method', 'systematic study'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-239',
        word: 'inheritance',
        partOfSpeech: 'noun',
        phonetic: '/ɪnˈherɪtəns/',
        definition: 'Money, land, or property that is passed down to family members after a person dies.',
        contextSentence: 'He showed how any complex problem—from dividing a family inheritance to measuring the area of an irregular canal—could be reduced to one of six standard forms.',
        exampleSentence: 'Ancient legal codes required precise fractions to divide a family inheritance fairly among heirs.',
        synonyms: ['bequest', 'legacy', 'estate'],
        collocations: ['family inheritance', 'divide an inheritance', 'receive an inheritance'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-240',
        word: 'clumsy',
        partOfSpeech: 'adjective',
        phonetic: '/ˈklʌmzi/',
        definition: 'Awkward, inefficient, and difficult to use or handle smoothly.',
        contextSentence: 'Before his work spread, European merchants still multiplied and divided using clumsy Roman numerals (like MMXXIV) and counting boards.',
        exampleSentence: 'Early portable computers were heavy, clumsy machines compared to today’s thin tablets.',
        synonyms: ['unwieldy', 'awkward', 'cumbersome'],
        collocations: ['clumsy system', 'clumsy tool', 'slow and clumsy'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-95',
          targetWord: 'systematic',
          question: 'How did Al-Khwarizmi’s treatise on algebra differ from earlier mathematical writings?',
          options: [
            'Instead of solving isolated puzzles, he developed a systematic method that reduced any linear or quadratic problem to one of six standard forms with repeatable balancing steps.',
            'He wrote his entire book in modern computer programming code.',
            'He forbade merchants from using numbers larger than one hundred.',
            'He only studied geometry and refused to solve equations.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 3 explains that Al-Khwarizmi treated equations as a unified, systematic science, reducing any problem to six standard forms with repeatable steps.'
        },
        {
          id: 'mc-b2-96',
          targetWord: 'clumsy',
          question: 'Why was Al-Khwarizmi’s treatise on the Hindu-Arabic decimal system and zero so transformative for commerce and science?',
          options: [
            'It replaced clumsy Roman numerals with a place-value decimal system that made complex multiplication, division, and step-by-step calculation fast and practical.',
            'It eliminated the need to write down numbers in business contracts.',
            'It made counting boards mandatory in every European market.',
            'It replaced the base-ten system with a base-three system.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that introducing digits 1–9 and zero replaced clumsy Roman numerals with a place-value decimal system.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-95',
          sentenceWithBlank: 'In his famous ninth-century mathematical _____, Al-Khwarizmi demonstrated how to balance both sides of an equation.',
          targetWord: 'treatise',
          hint: 'A formal scholarly book on a specific scientific subject',
          options: ['treatise', 'inheritance', 'clumsy', 'encrypt']
        },
        {
          id: 'cl-b2-96',
          sentenceWithBlank: 'Modern banking websites use complex mathematical algorithms to _____ customer passwords and credit card numbers.',
          targetWord: 'encrypt',
          hint: 'Convert data into a secure secret code',
          options: ['encrypt', 'clumsy', 'treatise', 'inheritance']
        }
      ],
      matching: {
        id: 'ma-b2-48',
        instructions: 'Match each B2 history of science vocabulary word with its definition:',
        pairs: [
          { id: 'p-b2-189', term: 'encrypt', match: 'Convert digital data into a secret mathematical code for security' },
          { id: 'p-b2-190', term: 'treatise', match: 'A formal, in-depth written work on a scientific or scholarly topic' },
          { id: 'p-b2-191', term: 'systematic', match: 'Done according to a fixed, logical, and organized method' },
          { id: 'p-b2-192', term: 'inheritance', match: 'Property or money passed down to family members after a death' }
        ]
      }
    }
  },
  {
    id: 'b2-biochar-ancient-amazonian-terra-preta',
    title: 'Black Gold of the Amazon: How Ancient Charcoal Soil Traps Carbon for a Thousand Years',
    subtitle: 'Natural rainforest soil is surprisingly poor, yet Indigenous farmers two millennia ago engineered dark, self-renewing earth that climate scientists are now racing to copy.',
    level: 'B2',
    category: 'Environment',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 460,
    cefrSummary: 'Soil chemistry, climate carbon removal, and B2 agricultural vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Rich in porous charcoal known as biochar, ancient Amazonian "terra preta" soils remain fertile centuries after they were created.',
    paragraphs: [
      'Because the Amazon rainforest is bursting with giant trees and lush green vines, visitors often assume that the soil beneath the jungle must be the richest earth on the planet. In reality, most natural tropical soil is pale, acidic, and surprisingly infertile. Warm, heavy rains fall almost daily, causing essential minerals like nitrogen, phosphorus, and potassium to leach rapidly out of the top layer of dirt before crop roots can absorb them.',
      'For decades, archaeologists believed that this poor soil prevented large farming civilizations from developing in the ancient Amazon basin. Starting in the late twentieth century, however, researchers mapping sites along the Amazon River uncovered hundreds of large patches of deep, jet-black soil that local farmers call terra preta do índio—"dark earth of the Indians." Up to two meters deep and still astonishingly fertile today, these soils were not formed by geology; they were deliberately created by Indigenous communities between five hundred and two thousand five hundred years ago.',
      'The secret ingredient inside terra preta is what modern scientists call "biochar." Instead of burning cleared brush, crop stalks, and food scraps in open fires that turn wood into gray ash and smoke, ancient Amazonians smoldered their organic waste in covered pits with very little oxygen—a process known as pyrolysis. This slow heating transforms plant material into porous black charcoal packed with millions of microscopic honeycombed chambers.',
      'When mixed into poor soil alongside compost, fish bones, and manure, biochar acts like an indestructible coral reef for beneficial soil life. Its microscopic pores soak up water and hold onto fertilizer nutrients so heavy rains cannot wash them away, while providing a permanent shelter for helpful fungi and bacteria. Equally important for the twenty-first century, whereas rotting plants release their carbon back into the atmosphere as carbon dioxide within a year or two, locking plant waste into biochar sequesters that carbon safely underground for over a thousand years.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-241',
        word: 'infertile',
        partOfSpeech: 'adjective',
        phonetic: '/ɪnˈfɜːtaɪl/',
        definition: 'Unable to support strong plant growth because the soil lacks essential nutrients.',
        contextSentence: 'In reality, most natural tropical soil is pale, acidic, and surprisingly infertile.',
        exampleSentence: 'Years of overgrazing left the hillside dry and infertile.',
        synonyms: ['barren', 'unproductive', 'nutrient-poor'],
        collocations: ['infertile soil', 'infertile land', 'render soil infertile'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-242',
        word: 'leach',
        partOfSpeech: 'verb',
        phonetic: '/liːtʃ/',
        definition: 'To dissolve and wash soluble minerals or chemicals out of soil as rainwater drains through it.',
        contextSentence: 'Warm, heavy rains fall almost daily, causing essential minerals like nitrogen, phosphorus, and potassium to leach rapidly out of the top layer of dirt.',
        exampleSentence: 'Without deep plant roots, heavy winter rains can leach nitrates out of farmland into nearby streams.',
        synonyms: ['wash out', 'drain away', 'percolate out'],
        collocations: ['leach out of the soil', 'leach nutrients', 'rapidly leach'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-243',
        word: 'smolder',
        partOfSpeech: 'verb',
        phonetic: '/ˈsməʊldə(r)/',
        definition: 'To burn slowly with smoke and heat but without open flames, usually in low-oxygen conditions.',
        contextSentence: 'Instead of burning cleared brush in open fires, ancient Amazonians smoldered their organic waste in covered pits with very little oxygen.',
        exampleSentence: 'Even after the campfire flames went out, the thick oak logs continued to smolder under the ashes.',
        synonyms: ['burn slowly', 'char', 'glow without flame'],
        collocations: ['smolder slowly', 'smoldering embers', 'smolder in a pit'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-244',
        word: 'charcoal',
        partOfSpeech: 'noun',
        phonetic: '/ˈtʃɑːkəʊl/',
        definition: 'A porous black solid form of carbon made by heating wood or plant matter in the absence of air.',
        contextSentence: 'This slow heating transforms plant material into porous black charcoal packed with millions of microscopic honeycombed chambers.',
        exampleSentence: 'Activated charcoal filters are used in water pitchers to remove unpleasant tastes and odors.',
        synonyms: ['carbonized wood', 'biochar'],
        collocations: ['porous charcoal', 'wood charcoal', 'charcoal filter'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-245',
        word: 'sequester',
        partOfSpeech: 'verb',
        phonetic: '/sɪˈkwestə(r)/',
        definition: 'To capture and store carbon dioxide or another substance so that it cannot escape into the atmosphere.',
        contextSentence: 'Whereas rotting plants release their carbon back into the atmosphere as carbon dioxide within a year or two, locking plant waste into biochar sequesters that carbon safely underground for over a thousand years.',
        exampleSentence: 'Healthy peat bogs and old-growth forests sequester billions of tons of carbon.',
        synonyms: ['lock away', 'store permanently', 'capture'],
        collocations: ['sequester carbon', 'sequester underground', 'carbon sequestration'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-97',
          targetWord: 'leach',
          question: 'Why is natural, untreated soil in the Amazon rainforest surprisingly infertile for growing crops?',
          options: [
            'Because daily heavy tropical rains quickly leach essential minerals like nitrogen and phosphorus out of the topsoil.',
            'Because it never rains in the Amazon basin.',
            'Because the soil is frozen solid for half the year.',
            'Because there are no trees or plants anywhere in the region.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 1 explains that warm, heavy daily rains cause essential minerals to leach rapidly out of the top layer of tropical soil.'
        },
        {
          id: 'mc-b2-98',
          targetWord: 'sequester',
          question: 'Why are climate scientists as interested in biochar as agricultural scientists are?',
          options: [
            'Because turning crop waste into porous charcoal both enriches poor soil and sequesters carbon safely underground for over a thousand years instead of releasing it into the air.',
            'Because burning forests in open flames cools the atmosphere.',
            'Because biochar can be burned inside car engines instead of gasoline.',
            'Because biochar prevents all plants from growing.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that biochar acts like a sponge for nutrients and water while sequestering carbon underground for over a millennium.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-97',
          sentenceWithBlank: 'Adding porous biochar helps sandy soil hold onto minerals that would otherwise _____ away during heavy downpours.',
          targetWord: 'leach',
          hint: 'Wash or drain out of soil with passing water',
          options: ['leach', 'smolder', 'infertile', 'charcoal']
        },
        {
          id: 'cl-b2-98',
          sentenceWithBlank: 'Restoring coastal kelp beds and mangroves is one of the fastest natural ways to _____ atmospheric carbon.',
          targetWord: 'sequester',
          hint: 'Capture and lock away carbon long-term',
          options: ['sequester', 'infertile', 'smolder', 'leach']
        }
      ],
      matching: {
        id: 'ma-b2-49',
        instructions: 'Match each B2 soil science and climate word with its definition:',
        pairs: [
          { id: 'p-b2-193', term: 'infertile', match: 'Nutrient-poor and unable to support healthy crop growth' },
          { id: 'p-b2-194', term: 'leach', match: 'Dissolve and wash minerals out of soil as rainwater drains through' },
          { id: 'p-b2-195', term: 'charcoal', match: 'Porous black carbon produced by heating wood with very little oxygen' },
          { id: 'p-b2-196', term: 'sequester', match: 'Capture and store carbon long-term so it cannot enter the atmosphere' }
        ]
      }
    }
  },
  {
    id: 'b2-vestibular-system-motion-sickness',
    title: 'Sensory Conflict: Why Reading in a Moving Car Makes Your Brain Think It Has Been Poisoned',
    subtitle: 'Motion sickness seems like a pointless design flaw in the human body—until evolutionary biologists trace it back to an ancient defense reflex.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 458,
    cefrSummary: 'Human physiology, evolutionary biology, and B2 neuroscience vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-900',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Looking out at the distant horizon synchronizes your eyes with the balance organs in your inner ear, stopping motion sickness before it starts.',
    paragraphs: [
      'For millions of passengers, opening a book or scrolling through a phone in the back seat of a moving car leads within minutes to cold sweats, dizziness, and waves of nausea. At first glance, motion sickness makes no biological sense: why would sitting comfortably inside a car, train, or boat make a healthy person feel terribly ill? Neuroscientists explain that the culprit is a sudden disagreement between two of the body’s most important navigation systems.',
      'Every second you are awake, your brain calculates your movement by comparing signals from your eyes with signals from your vestibular system—a set of tiny fluid-filled loops and gravity sensors tucked deep inside your inner ear. When you walk or run, both systems agree: your eyes see the scenery moving past, and the fluid in your inner ear sloshes to confirm that your body is accelerating. When you look down at a motionless book inside a moving car, however, your eyes report that you are sitting completely still, while your inner ear feels every turn, bump, and brake.',
      'Why does this sensory mismatch trigger nausea rather than just mild confusion? Evolutionary biologists point out that for ninety-nine percent of human existence, cars, boats, and virtual-reality headsets did not exist. In the natural world, there was only one situation in which a person’s eyes and inner ears ever sent conflicting motion reports to the brain: when that person had accidentally eaten neurotoxins from poisonous berries, spoiled meat, or toxic mushrooms.',
      'Over millions of years, the human brain evolved a simple survival rule: if the eyes and the inner ear suddenly contradict each other, assume the body has ingested a dangerous toxin and empty the stomach immediately. Understanding this ancient reflex explains why drivers almost never get car sick—because their eyes are fixed on the moving road ahead, matching what their inner ears feel. If nausea strikes during a journey, putting away your phone and gazing straight out the front windshield at the distant horizon brings your eyes and inner ears back into harmony.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-246',
        word: 'nausea',
        partOfSpeech: 'noun',
        phonetic: '/ˈnɔːziə/',
        definition: 'An uncomfortable sickness in the stomach accompanied by the feeling that you might vomit.',
        contextSentence: 'For millions of passengers, opening a book or scrolling through a phone in the back seat of a moving car leads within minutes to cold sweats, dizziness, and waves of nausea.',
        exampleSentence: 'Rough ocean waves caused several passengers on the ferry to experience nausea.',
        synonyms: ['queasiness', 'stomach sickness', 'motion sickness'],
        collocations: ['waves of nausea', 'trigger nausea', 'relieve nausea'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-247',
        word: 'culprit',
        partOfSpeech: 'noun',
        phonetic: '/ˈkʌlprɪt/',
        definition: 'The cause of a problem, defect, or unwanted effect (or a person responsible for an offense).',
        contextSentence: 'Neuroscientists explain that the culprit is a sudden disagreement between two of the body’s most important navigation systems.',
        exampleSentence: 'After testing the water pipes, engineers found that a worn rubber valve was the culprit behind the leak.',
        synonyms: ['cause', 'source of the problem', 'offender'],
        collocations: ['main culprit', 'real culprit', 'identify the culprit'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-248',
        word: 'mismatch',
        partOfSpeech: 'noun',
        phonetic: '/ˈmɪsmætʃ/',
        definition: 'A failure of two things, signals, or reports to correspond or agree with each other.',
        contextSentence: 'Why does this sensory mismatch trigger nausea rather than just mild confusion?',
        exampleSentence: 'There was a clear mismatch between the company’s ambitious sales forecast and actual customer demand.',
        synonyms: ['discrepancy', 'inconsistency', 'conflict'],
        collocations: ['sensory mismatch', 'clear mismatch', 'mismatch between'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-249',
        word: 'toxin',
        partOfSpeech: 'noun',
        phonetic: '/ˈtɒksɪn/',
        definition: 'A poisonous substance, especially one produced naturally by plants, bacteria, or animals.',
        contextSentence: 'Over millions of years, the human brain evolved a simple survival rule: if the eyes and the inner ear suddenly contradict each other, assume the body has ingested a dangerous toxin.',
        exampleSentence: 'Certain wild mushrooms contain a powerful toxin that attacks the liver.',
        synonyms: ['poison', 'venom', 'contaminant'],
        collocations: ['dangerous toxin', 'natural toxin', 'flush out toxins'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-250',
        word: 'horizon',
        partOfSpeech: 'noun',
        phonetic: '/həˈraɪzn/',
        definition: 'The distant line where the Earth’s surface (or the sea) appears to meet the sky.',
        contextSentence: 'If nausea strikes during a journey, putting away your phone and gazing straight out the front windshield at the distant horizon brings your eyes and inner ears back into harmony.',
        exampleSentence: 'Sailors watched the sun sink slowly below the western horizon.',
        synonyms: ['skyline', 'distant view'],
        collocations: ['distant horizon', 'on the horizon', 'gaze at the horizon'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-99',
          targetWord: 'mismatch',
          question: 'What sensory mismatch occurs when you read a book or look at a phone inside a moving car?',
          options: [
            'Your eyes look at the motionless page and tell the brain you are sitting still, while fluid in your inner ear feels the car turning, accelerating, and braking.',
            'Your ears hear the car engine while your eyes are closed.',
            'Your hands feel cold while your feet feel warm.',
            'Your inner ear stops working whenever you sit in a vehicle.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 2 explains that looking at a still page tells your eyes you are stationary while your inner ear’s vestibular system senses the vehicle’s motion.'
        },
        {
          id: 'mc-b2-100',
          targetWord: 'toxin',
          question: 'Why did the human brain evolve to respond to conflicting eye and inner-ear signals with nausea?',
          options: [
            'Because before vehicles existed, conflicting sensory reports almost always meant a person had ingested a neurotoxin or poison that needed to be expelled from the stomach.',
            'Because ancient humans rode in wooden carts every day.',
            'Because nausea makes people run faster away from predators.',
            'Because the stomach controls human eyesight.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 3 and 4 explain that in nature, conflicting eye and inner-ear signals were a sign of neurotoxin poisoning, so the brain evolved to empty the stomach as a defense.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-99',
          sentenceWithBlank: 'Stepping out onto the boat deck and focusing your eyes on the distant _____ quickly calms motion sickness.',
          targetWord: 'horizon',
          hint: 'The distant line where the sea or land meets the sky',
          options: ['horizon', 'toxin', 'culprit', 'nausea']
        },
        {
          id: 'cl-b2-100',
          sentenceWithBlank: 'A _____ between the virtual movement on the headset screen and the player’s stationary body caused dizziness.',
          targetWord: 'mismatch',
          hint: 'A failure of two signals or things to agree with each other',
          options: ['mismatch', 'toxin', 'horizon', 'culprit']
        }
      ],
      matching: {
        id: 'ma-b2-50',
        instructions: 'Match each B2 physiology and neuroscience word with its definition:',
        pairs: [
          { id: 'p-b2-197', term: 'nausea', match: 'A feeling of sickness in the stomach with an urge to vomit' },
          { id: 'p-b2-198', term: 'culprit', match: 'The underlying cause or source of a problem' },
          { id: 'p-b2-199', term: 'mismatch', match: 'A conflict or lack of agreement between two signals' },
          { id: 'p-b2-200', term: 'toxin', match: 'A poisonous substance produced by plants, bacteria, or animals' }
        ]
      }
    }
  },
  {
    id: 'b2-induced-demand-highway-expansion',
    title: 'Induced Demand: Why Adding More Lanes to a Busy Highway Rarely Solves Traffic',
    subtitle: 'Urban planners have spent billions widening congested freeways—only to discover that new asphalt attracts new cars until the road is just as full as before.',
    level: 'B2',
    category: 'Modern Economics',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 463,
    cefrSummary: 'Urban economics, transportation planning, and B2 policy vocabulary.',
    themeColor: 'teal',
    gradientFrom: 'from-teal-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Like a gas expanding to fill its container, commuter traffic consistently expands to fill newly added highway lanes within a few years.',
    paragraphs: [
      'When a four-lane urban highway becomes choked with bumper-to-bumper traffic every morning and evening, the solution seems obvious: spend money to widen the road to six, eight, or even ten lanes. Yet across decades of highway expansions in cities from Los Angeles and Houston to London and Tokyo, transportation economists have documented a stubborn pattern. Within two to five years of a widened freeway opening, rush-hour delays return to the exact same level as before—only now with twice as many cars stuck in the jam.',
      'Economists call this phenomenon "induced demand." In any market, when you lower the cost of a good, people consume more of it. On a road network, the main "price" of driving is not fuel or tolls, but the time and frustration spent sitting in congestion. When a highway is jammed, that time cost stays high enough to persuade thousands of people to take the metro, carpool with colleagues, travel before 7 a.m., or shop closer to home.',
      'The moment a city opens four shiny new highway lanes, traffic speeds up temporarily—lowering the time cost of driving alone at 8 a.m. Almost immediately, commuters who had been taking the train switch back to their cars, people who used to wait until 10 a.m. start driving during rush hour, and families move to new suburbs farther away. As urban economist Gilles Duranton and Matthew Turner demonstrated in their landmark study of American cities, vehicle kilometers traveled increase in almost exact one-to-one proportion to newly built highway lane-kilometers.',
      'Even more remarkably, the effect also works in reverse—a process planners call "reduced demand." When cities like Seoul, Paris, and San Francisco demolished elevated urban freeways and replaced them with riverside parks, tree-lined boulevards, and high-frequency rail lines, critics predicted traffic Armageddon. Instead, much of the former car traffic simply evaporated as people adjusted their routes, used public transit, or combined errands. True congestion relief, economists conclude, comes not from pouring wider rivers of asphalt, but from offering reliable alternatives to driving alone.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-251',
        word: 'congestion',
        partOfSpeech: 'noun',
        phonetic: '/kənˈdʒestʃən/',
        definition: 'Overcrowding on roads or in a network that slows movement to a crawl.',
        contextSentence: 'On a road network, the main "price" of driving is not fuel or tolls, but the time and frustration spent sitting in congestion.',
        exampleSentence: 'Expanding the metro network significantly reduced morning traffic congestion in the city center.',
        synonyms: ['gridlock', 'traffic jam', 'overcrowding'],
        collocations: ['traffic congestion', 'congestion relief', 'ease congestion'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-252',
        word: 'Temporarily',
        partOfSpeech: 'adverb',
        phonetic: '/ˈtemprərəli/',
        definition: 'For a limited period of time only; not permanently.',
        contextSentence: 'The moment a city opens four shiny new highway lanes, traffic speeds up temporarily—lowering the time cost of driving alone at 8 a.m.',
        exampleSentence: 'The bridge was closed temporarily for two days while workers repainted the steel arches.',
        synonyms: ['briefly', 'for the time being', 'short-term'],
        collocations: ['speed up temporarily', 'temporarily closed', 'temporarily relieve'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-253',
        word: 'commuter',
        partOfSpeech: 'noun',
        phonetic: '/kəˈmjuːtə(r)/',
        definition: 'A person who travels regularly between their home and their place of work or study.',
        contextSentence: 'Almost immediately, commuters who had been taking the train switch back to their cars.',
        exampleSentence: 'Thousands of daily commuters use the high-speed suburban train to reach their offices.',
        synonyms: ['daily traveler', 'passenger'],
        collocations: ['daily commuter', 'morning commuters', 'commuter train'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-254',
        word: 'proportion',
        partOfSpeech: 'noun',
        phonetic: '/prəˈpɔːʃn/',
        definition: 'A comparative relationship in size, amount, or degree between two quantities.',
        contextSentence: 'Vehicle kilometers traveled increase in almost exact one-to-one proportion to newly built highway lane-kilometers.',
        exampleSentence: 'A worker’s bonus increases in direct proportion to the number of projects completed.',
        synonyms: ['ratio', 'scale', 'correlation'],
        collocations: ['in direct proportion to', 'one-to-one proportion', 'large proportion'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-255',
        word: 'demolish',
        partOfSpeech: 'verb',
        phonetic: '/dɪˈmɒlɪʃ/',
        definition: 'To pull or knock down a building, bridge, or highway completely.',
        contextSentence: 'When cities like Seoul, Paris, and San Francisco demolished elevated urban freeways and replaced them with riverside parks, critics predicted traffic Armageddon.',
        exampleSentence: 'The city voted to demolish the unsafe concrete overpass and build a green pedestrian boulevard.',
        synonyms: ['tear down', 'raze', 'dismantle'],
        collocations: ['demolish a freeway', 'demolish an old building', 'completely demolished'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-101',
          targetWord: 'congestion',
          question: 'Why does widening a congested urban highway usually fail to eliminate rush-hour traffic jams for long?',
          options: [
            'Because faster speeds temporarily lower the time cost of driving, attracting train riders, off-peak drivers, and new suburban trips until the new lanes fill up ("induced demand").',
            'Because construction workers leave their trucks parked in the new lanes forever.',
            'Because wider roads force cars to drive at twenty kilometers per hour.',
            'Because fewer people live in cities after a highway is widened.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 2 and 3 explain that opening new lanes lowers the time cost of driving at rush hour, inducing new car trips until congestion returns.'
        },
        {
          id: 'mc-b2-102',
          targetWord: 'demolish',
          question: 'What happened in cities like Seoul and San Francisco when they demolished elevated urban freeways and invested in parks and public transit?',
          options: [
            'Instead of causing permanent gridlock, much of the car traffic disappeared as commuters switched to transit, adjusted routes, or combined trips.',
            'Every business in the city center had to close within a month.',
            'Cars drove across the grass in the new parks.',
            'Traffic speeds dropped to zero across the entire country.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that "reduced demand" occurred: much of the former car traffic evaporated as people switched to public transit or adjusted their travel.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-101',
          sentenceWithBlank: 'Charging a small peak-hour toll on downtown bridges helped cut morning traffic _____ by twenty percent.',
          targetWord: 'congestion',
          hint: 'Overcrowding of vehicles that slows traffic to a crawl',
          options: ['congestion', 'commuter', 'demolish', 'proportion']
        },
        {
          id: 'cl-b2-102',
          sentenceWithBlank: 'Studies show that highway traffic grows in direct _____ to the number of new lanes added.',
          targetWord: 'proportion',
          hint: 'A comparative ratio or relationship between two amounts',
          options: ['proportion', 'demolish', 'commuter', 'temporarily']
        }
      ],
      matching: {
        id: 'ma-b2-51',
        instructions: 'Match each B2 urban economics word with its definition:',
        pairs: [
          { id: 'p-b2-201', term: 'congestion', match: 'Severe overcrowding on roads that slows traffic down' },
          { id: 'p-b2-202', term: 'commuter', match: 'A person who travels regularly between home and work' },
          { id: 'p-b2-203', term: 'proportion', match: 'A comparative ratio or relationship between two quantities' },
          { id: 'p-b2-204', term: 'demolish', match: 'Pull or tear down a structure completely' }
        ]
      }
    }
  },
  {
    id: 'b2-tardigrades-cryptobiosis-survival',
    title: 'The Indestructible Water Bear: How Microscopic Tardigrades Survive Space Vacuum and Boiling Heat',
    subtitle: 'Smaller than a grain of salt, eight-legged tardigrades can lose ninety-nine percent of their body water, turn into glass, and wake up decades later.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 461,
    cefrSummary: 'Extremophile biology, biochemistry, and B2 scientific vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Studying how tardigrades protect their cells without water is helping biochemists develop vaccines that do not need refrigeration.',
    paragraphs: [
      'You do not need to travel to the deep ocean or an active volcano to find the toughest animal on Earth; you probably walked past thousands of them this morning. Living quietly in the damp green moss on brick walls, tree bark, and garden roofs is a plump, eight-legged creature half a millimeter long called the tardigrade, or "water bear." Under a microscope, tardigrades look like harmless gummy bears paddling slowly through drops of dew. Yet they can survive conditions that would kill almost every other living thing in seconds.',
      'In laboratory tests, tardigrades have endured temperatures as cold as minus 272 degrees Celsius—just one degree above absolute zero—and as hot as 150 degrees Celsius. In 2007, the European Space Agency launched three thousand tardigrades into orbit on the outside of a satellite, exposing them for ten days to the airless vacuum of space and intense solar ultraviolet radiation. When returned to Earth and placed in water, many of the tiny animals crawled away unharmed and laid healthy eggs.',
      'How did a moss-dwelling creature evolve superpowers capable of surviving outer space? The explanation lies in their everyday habitat. A patch of moss on a sunny roof dries out completely every time the sun comes out. For any normal aquatic animal, drying out is fatal because cell membranes tear apart and vital proteins unfold when water disappears. When a tardigrade senses drought, however, it pulls in its eight legs, expels almost ninety-nine percent of the water from its body, and curls into a dry husk called a "tun."',
      'In this state—known as cryptobiosis, or "hidden life"—the tardigrade’s metabolism drops to less than 0.01 percent of normal, making it clinically indistinguishable from death. As its cells dehydrate, the tardigrade floods them with unique flexible proteins that solidify into a clear, non-crystalline biological glass. This internal glass cage locks every DNA strand and cell membrane safely in place so they cannot shatter or melt. Decades later, a single drop of rain dissolves the glass and revives the water bear within an hour—a trick biochemists are now copying to store life-saving vaccines as dry powder without refrigerators.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-256',
        word: 'endure',
        partOfSpeech: 'verb',
        phonetic: '/ɪnˈdjʊə(r)/',
        definition: 'To suffer through or withstand extreme, painful, or difficult conditions without being destroyed.',
        contextSentence: 'In laboratory tests, tardigrades have endured temperatures as cold as minus 272 degrees Celsius and as hot as 150 degrees Celsius.',
        exampleSentence: 'Desert cacti can endure months of scorching heat without a single drop of rain.',
        synonyms: ['withstand', 'survive', 'tolerate'],
        collocations: ['endure extreme temperatures', 'endure hardship', 'able to endure'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-257',
        word: 'fatal',
        partOfSpeech: 'adjective',
        phonetic: '/ˈfeɪtl/',
        definition: 'Causing death, or leading to complete ruin and failure.',
        contextSentence: 'For any normal aquatic animal, drying out is fatal because cell membranes tear apart and vital proteins unfold when water disappears.',
        exampleSentence: 'Without antibiotics, a simple bacterial blood infection was often fatal.',
        synonyms: ['deadly', 'lethal', 'mortal'],
        collocations: ['prove fatal', 'fatal dose', 'fatal error'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-258',
        word: 'metabolism',
        partOfSpeech: 'noun',
        phonetic: '/məˈtæbəlɪzəm/',
        definition: 'The chemical processes inside a living organism that convert food and oxygen into energy to keep cells alive.',
        contextSentence: 'In this state—known as cryptobiosis—the tardigrade’s metabolism drops to less than 0.01 percent of normal.',
        exampleSentence: 'Hibernating bears slow their metabolism dramatically to survive the long winter without eating.',
        synonyms: ['cellular energy process', 'bodily chemistry'],
        collocations: ['slow down metabolism', 'high metabolism', 'cellular metabolism'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-259',
        word: 'dehydrate',
        partOfSpeech: 'verb',
        phonetic: '/ˌdiːhaɪˈdreɪt/',
        definition: 'To lose a large amount of water from the body or from cells; to dry out.',
        contextSentence: 'As its cells dehydrate, the tardigrade floods them with unique flexible proteins that solidify into a clear, non-crystalline biological glass.',
        exampleSentence: 'Runners must drink fluids regularly during a summer marathon so they do not dehydrate.',
        synonyms: ['dry out', 'desiccate', 'lose moisture'],
        collocations: ['cells dehydrate', 'severely dehydrated', 'dehydrate food'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-260',
        word: 'revive',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈvaɪv/',
        definition: 'To bring a person, organism, or practice back to life, consciousness, or active strength.',
        contextSentence: 'Decades later, a single drop of rain dissolves the glass and revives the water bear within an hour.',
        exampleSentence: 'A cool spring rain shower quickly revived the wilted garden flowers.',
        synonyms: ['resuscitate', 'reawaken', 'restore to life'],
        collocations: ['revive an organism', 'quickly revive', 'revive a tradition'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-103',
          targetWord: 'dehydrate',
          question: 'How does a tardigrade protect its DNA and cell membranes when its mossy habitat dries out completely?',
          options: [
            'It expels almost all its water, slows its metabolism to near zero, and floods its cells with special proteins that form a protective biological glass cage.',
            'It grows wings and flies to the nearest lake.',
            'It burrows fifty meters deep into solid granite rock.',
            'It turns its outer skin into a hard steel shell.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 3 and 4 explain that as a tardigrade dehydrates into a "tun," its cells produce unique proteins that vitrify into a protective biological glass.'
        },
        {
          id: 'mc-b2-104',
          targetWord: 'revive',
          question: 'How are medical researchers applying the tardigrade’s glass-forming protein trick to human healthcare?',
          options: [
            'They are copying the proteins to preserve vaccines and medicines in a dry state so they can be transported worldwide without refrigeration.',
            'They are sending human doctors into outer space without spacesuits.',
            'They are freezing hospital patients to minus 270 degrees Celsius.',
            'They are feeding moss to patients with colds.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 states that biochemists are copying tardigrade proteins to store life-saving vaccines as dry powder without needing refrigerators.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-103',
          sentenceWithBlank: 'During winter hibernation, a ground squirrel’s heart rate and _____ drop to a tiny fraction of their summer levels.',
          targetWord: 'metabolism',
          hint: 'The chemical processes in a living body that convert food into energy',
          options: ['metabolism', 'fatal', 'endure', 'revive']
        },
        {
          id: 'cl-b2-104',
          sentenceWithBlank: 'Even after thirty years in a frozen dry state, a few drops of water were enough to _____ the microscopic water bears.',
          targetWord: 'revive',
          hint: 'Bring back to active life or consciousness',
          options: ['revive', 'fatal', 'dehydrate', 'metabolism']
        }
      ],
      matching: {
        id: 'ma-b2-52',
        instructions: 'Match each B2 biology vocabulary word with its definition:',
        pairs: [
          { id: 'p-b2-205', term: 'endure', match: 'Withstand extreme or difficult conditions without being destroyed' },
          { id: 'p-b2-206', term: 'fatal', match: 'Causing death or complete destruction' },
          { id: 'p-b2-207', term: 'metabolism', match: 'The chemical processes that keep living cells energized and alive' },
          { id: 'p-b2-208', term: 'revive', match: 'Bring a dormant organism back to active life' }
        ]
      }
    }
  },
  {
    id: 'b2-confirmation-bias-scientific-method',
    title: 'Echo Chambers in the Mind: Why Our Brains Search for Evidence That Agrees with Us',
    subtitle: 'Long before social media algorithms, cognitive psychologist Peter Wason proved that human beings naturally test rules by looking only for confirmation.',
    level: 'B2',
    category: 'Psychology & Mind',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 460,
    cefrSummary: 'Critical thinking, philosophy of science, and B2 analytical vocabulary.',
    themeColor: 'violet',
    gradientFrom: 'from-violet-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The core discipline of science is trying to disprove your own favorite hypothesis rather than only collecting examples that support it.',
    paragraphs: [
      'In 1960, the British psychologist Peter Wason gave university students a deceptively simple puzzle. He wrote the number sequence "2 – 4 – 6" on a chalkboard and told the students that the three numbers followed a secret rule he had in mind. Their job was to discover the rule by proposing their own three-number sequences; each time, Wason would tell them whether their sequence obeyed the rule, and once they felt certain, they could announce the answer.',
      'Almost every student started by forming an immediate hypothesis: "The numbers go up by two each time." To test this idea, they proposed sequences like "8 – 10 – 12," "20 – 22 – 24," and "100 – 102 – 104." Every time, Wason smiled and said, "Yes, that follows the rule." Confident that they had proven their theory three times in a row, the students announced that the rule was "even numbers increasing by two." They were wrong. Wason’s secret rule was simply "any three numbers in ascending order." A sequence like "1 – 2 – 3" or "5 – 17 – 400" also obeyed the rule, yet almost nobody tried a sequence like "1 – 2 – 3" that could have disproved their initial guess.',
      'Wason had demonstrated what psychologists call "confirmation bias"—the deep-seated human tendency to search for, notice, and remember information that supports what we already believe while ignoring or dismissing evidence that contradicts it. When we accept an agreeable claim, we ask ourselves, "Can I believe this?" When we encounter an inconvenient fact that challenges our opinion, we suddenly become strict detectives and scrutinize every detail, asking, "Must I believe this?"',
      'As the philosopher Karl Popper argued, confirmation bias is the single greatest obstacle to clear thinking, which is why the scientific method is designed specifically to fight it. A scientist cannot prove that "all swans are white" simply by photographing ten thousand white swans; the real test of a scientific theory is actively searching for a black swan that would falsify it. In everyday life, whenever you feel hundred percent certain about a business plan, health trend, or political claim, the wisest habit is to pause and ask: "What evidence would prove my favorite theory wrong?"'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-261',
        word: 'hypothesis',
        partOfSpeech: 'noun',
        phonetic: '/haɪˈpɒθəsɪs/',
        definition: 'A proposed explanation or educated guess made on limited evidence as a starting point for further testing.',
        contextSentence: 'Almost every student started by forming an immediate hypothesis: "The numbers go up by two each time."',
        exampleSentence: 'The biologists designed an experiment to test their hypothesis about how bees recognize flowers.',
        synonyms: ['working theory', 'proposition', 'supposition'],
        collocations: ['form a hypothesis', 'test a hypothesis', 'working hypothesis'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-262',
        word: 'ascending',
        partOfSpeech: 'adjective',
        phonetic: '/əˈsendɪŋ/',
        definition: 'Going up or increasing in size, value, or order from lowest to highest.',
        contextSentence: 'Wason’s secret rule was simply "any three numbers in ascending order."',
        exampleSentence: 'The online catalog lists the apartments in ascending order of monthly rent.',
        synonyms: ['rising', 'increasing', 'upward'],
        collocations: ['in ascending order', 'ascending sequence', 'ascending scale'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-263',
        word: 'disprove',
        partOfSpeech: 'verb',
        phonetic: '/ˌdɪsˈpruːv/',
        definition: 'To show through evidence or testing that a theory, belief, or hypothesis is false.',
        contextSentence: 'Almost nobody tried a sequence like "1 – 2 – 3" that could have disproved their initial guess.',
        exampleSentence: 'Astronomical observations by Galileo helped disprove the belief that the sun orbited the Earth.',
        synonyms: ['refute', 'falsify', 'debunk'],
        collocations: ['disprove a theory', 'disprove a claim', 'attempt to disprove'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-264',
        word: 'contradict',
        partOfSpeech: 'verb',
        phonetic: '/ˌkɒntrəˈdɪkt/',
        definition: 'To state the opposite of or be in direct conflict with an existing belief, statement, or piece of evidence.',
        contextSentence: 'Confirmation bias is the deep-seated human tendency to search for information that supports what we already believe while ignoring evidence that contradicts it.',
        exampleSentence: 'The new satellite temperature measurements directly contradict the old weather forecast model.',
        synonyms: ['conflict with', 'go against', 'refute'],
        collocations: ['contradict a belief', 'directly contradict', 'contradicting evidence'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-265',
        word: 'scrutinize',
        partOfSpeech: 'verb',
        phonetic: '/ˈskruːtənaɪz/',
        definition: 'To examine or inspect something very closely, critically, and thoroughly.',
        contextSentence: 'When we encounter an inconvenient fact that challenges our opinion, we suddenly become strict detectives and scrutinize every detail.',
        exampleSentence: 'Auditors scrutinize the company’s financial records every December to check for errors.',
        synonyms: ['inspect closely', 'examine critically', 'analyze'],
        collocations: ['closely scrutinize', 'scrutinize every detail', 'scrutinize evidence'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-105',
          targetWord: 'disprove',
          question: 'Why did most students fail to discover Peter Wason’s "2 – 4 – 6" number rule?',
          options: [
            'Because they only tested sequences like "8 – 10 – 12" that confirmed their initial guess, rather than testing sequences like "1 – 2 – 3" that could disprove it.',
            'Because Wason changed the secret rule every thirty seconds.',
            'Because the students did not know how to add even numbers.',
            'Because Wason refused to answer their questions.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 2 explains that students only proposed examples that matched their "even numbers increasing by two" hypothesis instead of testing sequences that could disprove it.'
        },
        {
          id: 'mc-b2-106',
          targetWord: 'scrutinize',
          question: 'How does the scientific method protect researchers against confirmation bias?',
          options: [
            'It requires scientists to actively design experiments that try to falsify or disprove their own hypothesis rather than merely collecting supportive examples.',
            'It allows scientists to ignore any data that contradicts their theory.',
            'It forbids researchers from forming hypotheses before an experiment.',
            'It relies on public opinion polls to decide which theories are true.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that Karl Popper and the scientific method emphasize falsification—actively testing for evidence that would disprove a hypothesis.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-105',
          sentenceWithBlank: 'A good detective does not ignore clues that _____ their favorite suspect’s story.',
          targetWord: 'contradict',
          hint: 'Conflict with or go directly against',
          options: ['contradict', 'ascending', 'hypothesis', 'scrutinize']
        },
        {
          id: 'cl-b2-106',
          sentenceWithBlank: 'Before a new medical treatment is approved, independent panels _____ the clinical trial data for any hidden side effects.',
          targetWord: 'scrutinize',
          hint: 'Examine very closely and critically',
          options: ['scrutinize', 'ascending', 'disprove', 'hypothesis']
        }
      ],
      matching: {
        id: 'ma-b2-53',
        instructions: 'Match each B2 critical thinking word with its definition:',
        pairs: [
          { id: 'p-b2-209', term: 'hypothesis', match: 'A proposed explanation made as a starting point for scientific testing' },
          { id: 'p-b2-210', term: 'disprove', match: 'Show through evidence that a theory or guess is false' },
          { id: 'p-b2-211', term: 'contradict', match: 'Be in direct conflict with or state the opposite of a claim' },
          { id: 'p-b2-212', term: 'scrutinize', match: 'Examine or inspect something very closely and critically' }
        ]
      }
    }
  },
  {
    id: 'b2-heat-pumps-thermodynamics-refrigerators',
    title: 'Running a Refrigerator in Reverse: How Heat Pumps Extract Warmth from Freezing Winter Air',
    subtitle: 'It sounds impossible that air at minus ten degrees Celsius contains useful heat—yet modern heat pumps harvest it to deliver three times more warmth than electric heaters.',
    level: 'B2',
    category: 'Technology & Innovation',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 462,
    cefrSummary: 'Thermodynamics, clean energy technology, and B2 engineering vocabulary.',
    themeColor: 'blue',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-blue-950',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'By moving existing thermal energy rather than burning fuel to create new heat, air-source heat pumps achieve remarkable efficiency even in snowy climates.',
    paragraphs: [
      'If you touch the back of your kitchen refrigerator, you will feel warm air rising from the dark metal coils—even though the inside of the fridge is chilled to four degrees Celsius. A refrigerator does not magically destroy heat; instead, it uses a circulating liquid to pull warmth out of your milk and vegetables and dump that warmth into your kitchen. An air-source heat pump—now rapidly replacing gas boilers across Europe, North America, and East Asia—is simply a refrigerator running in reverse.',
      'Many homeowners ask an understandable question: how can a machine pull warmth out of outdoor air on a freezing January night when the thermometer reads minus ten degrees Celsius? To a physicist, air at minus ten degrees is still full of thermal energy, because molecules do not stop vibrating completely until they reach absolute zero—minus 273 degrees Celsius. To capture that outdoor heat, a heat pump circulates a special fluid called a refrigerant that boils at an extremely low temperature, around minus forty degrees Celsius.',
      'Even when the winter air outside is well below freezing, it is still much warmer than the icy liquid refrigerant flowing through the outdoor coils. As the outdoor fan blows winter air across the pipes, the refrigerant absorbs thermal energy from the breeze and boils into a gas. Next, an electric compressor squeezes that gas tightly into a smaller volume. Just as a bicycle pump grows hot in your hand when you pump up a tire, compressing the gas raises its temperature to over fifty degrees Celsius.',
      'The hot, pressurized gas is then piped indoors, where it releases its warmth into the house’s radiators or underfloor heating pipes before cooling back into a liquid and returning outside to repeat the cycle. Because the electricity is used only to move existing heat from outdoors to indoors rather than generating heat from scratch like a glowing toaster wire, a heat pump delivers three to four units of warmth for every one unit of electricity it consumes—and in summer, the valve simply reverses direction to work as an air conditioner.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-266',
        word: 'circulate',
        partOfSpeech: 'verb',
        phonetic: '/ˈsɜːkjəleɪt/',
        definition: 'To move continuously through a closed system of pipes, channels, or blood vessels.',
        contextSentence: 'To capture that outdoor heat, a heat pump circulates a special fluid called a refrigerant that boils at an extremely low temperature.',
        exampleSentence: 'Hot water circulates through pipes beneath the bathroom tiles to warm the floor.',
        synonyms: ['flow continuously', 'cycle', 'move around'],
        collocations: ['circulate fluid', 'circulate through pipes', 'blood circulates'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-267',
        word: 'refrigerant',
        partOfSpeech: 'noun',
        phonetic: '/rɪˈfrɪdʒərənt/',
        definition: 'A specialized chemical fluid used in heat pumps, refrigerators, and air conditioners that boils at a very low temperature to transfer heat.',
        contextSentence: 'To capture that outdoor heat, a heat pump circulates a special fluid called a refrigerant that boils at an extremely low temperature.',
        exampleSentence: 'Modern eco-friendly refrigerants transfer heat efficiently without harming the ozone layer.',
        synonyms: ['cooling fluid', 'heat-transfer liquid'],
        collocations: ['liquid refrigerant', 'circulate refrigerant', 'eco-friendly refrigerant'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-268',
        word: 'compress',
        partOfSpeech: 'verb',
        phonetic: '/kəmˈpres/',
        definition: 'To squeeze or press a gas or material into a smaller volume under high pressure.',
        contextSentence: 'Just as a bicycle pump grows hot in your hand when you pump up a tire, compressing the gas raises its temperature to over fifty degrees Celsius.',
        exampleSentence: 'Scuba divers carry metal tanks filled with compressed air on their backs.',
        synonyms: ['pressurize', 'squeeze', 'condense'],
        collocations: ['compress a gas', 'compressed air', 'tightly compress'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-269',
        word: 'transfer',
        partOfSpeech: 'verb',
        phonetic: '/trænsˈfɜː(r)/',
        definition: 'To move heat, energy, money, or data from one place or medium to another.',
        contextSentence: 'Because the electricity is used only to move existing heat from outdoors to indoors rather than generating heat from scratch, a heat pump transfers three to four units of warmth for every unit of electricity.',
        exampleSentence: 'Copper pans transfer heat from the stove burner to the food much faster than glass dishes.',
        synonyms: ['convey', 'move across', 'transmit'],
        collocations: ['transfer heat', 'transfer energy', 'efficiently transfer'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-270',
        word: 'reverse',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈvɜːs/',
        definition: 'To change the direction, order, or operation of a process to its exact opposite.',
        contextSentence: 'In summer, the valve simply reverses direction to work as an air conditioner.',
        exampleSentence: 'Tidal power turbines reverse their blades every six hours as the ocean tide changes direction.',
        synonyms: ['invert', 'turn around', 'switch backward'],
        collocations: ['reverse direction', 'reverse the process', 'run in reverse'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-107',
          targetWord: 'refrigerant',
          question: 'How is an outdoor heat pump unit able to absorb heat from winter air that is at minus ten degrees Celsius?',
          options: [
            'It circulates a liquid refrigerant that is even colder (around minus forty degrees Celsius), so thermal energy naturally flows from the winter air into the fluid and boils it into a gas.',
            'It burns wood pellets inside the outdoor fan to warm the air first.',
            'It only turns on during sunny July afternoons.',
            'It uses mirrors to focus starlight onto the roof.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 2 and 3 explain that because the refrigerant boils around -40°C, air at -10°C is much warmer than the fluid and causes it to boil into a gas.'
        },
        {
          id: 'mc-b2-108',
          targetWord: 'compress',
          question: 'Why does a heat pump deliver three to four times more heat energy than a standard plug-in electric heater using the same amount of electricity?',
          options: [
            'Because it uses electricity only to move and compress existing outdoor heat rather than creating heat from scratch with a glowing wire.',
            'Because it creates new electricity out of cold water.',
            'Because electric heaters actually cool rooms down.',
            'Because heat pumps do not use any electricity at all.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that moving existing heat from outdoors to indoors takes three to four times less electricity than generating heat from scratch.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-107',
          sentenceWithBlank: 'When the electric pump begins to _____ the vapor into a narrow chamber, the gas temperature rises above fifty degrees.',
          targetWord: 'compress',
          hint: 'Squeeze a gas into a smaller space under high pressure',
          options: ['compress', 'reverse', 'refrigerant', 'circulate']
        },
        {
          id: 'cl-b2-108',
          sentenceWithBlank: 'During July heatwaves, the heat pump can _____ its cycle to pull heat out of the bedrooms and expel it outdoors.',
          targetWord: 'reverse',
          hint: 'Switch a process to run in the opposite direction',
          options: ['reverse', 'refrigerant', 'compress', 'transfer']
        }
      ],
      matching: {
        id: 'ma-b2-54',
        instructions: 'Match each B2 thermodynamics and engineering word with its definition:',
        pairs: [
          { id: 'p-b2-213', term: 'circulate', match: 'Flow continuously through a closed loop of pipes' },
          { id: 'p-b2-214', term: 'refrigerant', match: 'A fluid with a very low boiling point used to absorb and move heat' },
          { id: 'p-b2-215', term: 'compress', match: 'Squeeze a gas into a smaller volume under pressure' },
          { id: 'p-b2-216', term: 'reverse', match: 'Change the direction or operation of a system to its opposite' }
        ]
      }
    }
  },
  {
    id: 'b2-polynesian-wayfinding-star-compass',
    title: 'Navigating the Largest Ocean Without Instruments: The Science of Polynesian Wayfinding',
    subtitle: 'Centuries before European mariners crossed the Atlantic, Polynesian navigators sailed thousands of kilometers across the Pacific using stars, ocean swells, and seabirds.',
    level: 'B2',
    category: 'History & Civilizations',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 465,
    cefrSummary: 'Maritime history, observational physics, and B2 cultural and geographical vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-900',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Master wayfinders read subtle changes in ocean swells, star rising points, and cloud reflections to pinpoint tiny islands across millions of square kilometers of open sea.',
    paragraphs: [
      'The Pacific Ocean covers nearly a third of the Earth’s surface—an expanse of water larger than all the world’s continents combined. Yet more than a thousand years ago, long before the invention of the magnetic compass, the sextant, or the marine chronometer, Polynesian voyagers in double-hulled wooden canoes explored and settled almost every habitable island across a triangle stretching from Hawaii in the north to New Zealand in the southwest and Easter Island in the southeast.',
      'For a long time, some European historians claimed that Polynesians must have drifted onto these islands by accident during storms. In 1976, the Micronesian master navigator Mau Piailug disproved that theory forever by guiding the traditional voyaging canoe Hōkūleʻa more than four thousand kilometers from Hawaii to Tahiti without using a single map, compass, wristwatch, or modern instrument. The journey revealed the extraordinary scientific precision of traditional Polynesian wayfinding.',
      'At night, a wayfinder relies on a mental "star compass" dividing the horizon into thirty-two houses. Because stars near the celestial equator rise at a fixed point in the east and set at a fixed point in the west, the navigator memorizes the rising and setting points of more than two hundred stars. As one guide star climbs too high in the night sky, the wayfinder switches to the next star rising on the exact same bearing. When thick clouds hide the stars or the sun climbs high at midday, the navigator shifts attention from the sky to the water beneath the canoe.',
      'Unlike choppy surface waves kicked up by local gusts of wind, deep ocean swells are long, steady rolling waves generated by distant trade winds that travel thousands of kilometers in a consistent direction. By sitting or lying quietly on the wooden hull, a master navigator feels three or four different swell patterns rocking the canoe and steers at a fixed angle to them. When an island lies fifty kilometers ahead—still invisible below the horizon—the swells bend, or refract, around the hidden landmass and bounce faint echo waves back toward the canoe, while white terns flying out to fish at dawn and returning to their nests at dusk point the way to shore.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-271',
        word: 'expanse',
        partOfSpeech: 'noun',
        phonetic: '/ɪkˈspæns/',
        definition: 'A wide, continuous, and open area of sea, land, or sky.',
        contextSentence: 'The Pacific Ocean covers nearly a third of the Earth’s surface—an expanse of water larger than all the world’s continents combined.',
        exampleSentence: 'Looking out the train window, passengers saw a vast expanse of golden wheat fields.',
        synonyms: ['stretch', 'vast area', 'sweep'],
        collocations: ['vast expanse', 'expanse of water', 'open expanse'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-272',
        word: 'habitable',
        partOfSpeech: 'adjective',
        phonetic: '/ˈhæbɪtəbl/',
        definition: 'Suitable and safe for human beings to live in, providing fresh water and food.',
        contextSentence: 'Polynesian voyagers in double-hulled wooden canoes explored and settled almost every habitable island across a triangle stretching from Hawaii to New Zealand.',
        exampleSentence: 'Astronomers search for planets orbiting in the habitable zone where liquid water can exist.',
        synonyms: ['livable', 'inhabitable', 'hospitable'],
        collocations: ['habitable island', 'habitable planet', 'remain habitable'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-273',
        word: 'bearing',
        partOfSpeech: 'noun',
        phonetic: '/ˈbeərɪŋ/',
        definition: 'The compass direction or line of travel from one point toward a destination.',
        contextSentence: 'As one guide star climbs too high in the night sky, the wayfinder switches to the next star rising on the exact same bearing.',
        exampleSentence: 'The captain kept the ship on a steady southwest bearing throughout the night.',
        synonyms: ['direction', 'heading', 'course'],
        collocations: ['compass bearing', 'steady bearing', 'lose one’s bearings'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-274',
        word: 'swell',
        partOfSpeech: 'noun',
        phonetic: '/swel/',
        definition: 'A series of long, regular rolling ocean waves generated by distant wind systems that travel unbroken across the open sea.',
        contextSentence: 'Unlike choppy surface waves kicked up by local gusts of wind, deep ocean swells are long, steady rolling waves generated by distant trade winds.',
        exampleSentence: 'Even on a calm, windless afternoon, a gentle ocean swell rocked the fishing boat.',
        synonyms: ['rolling wave', 'ocean undulation'],
        collocations: ['ocean swell', 'deep swell', 'swell pattern'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-275',
        word: 'refract',
        partOfSpeech: 'verb',
        phonetic: '/rɪˈfrækt/',
        definition: 'To cause a wave of water, light, or sound to bend and change direction when it passes around an obstacle or enters shallow water.',
        contextSentence: 'When an island lies fifty kilometers ahead—still invisible below the horizon—the swells bend, or refract, around the hidden landmass.',
        exampleSentence: 'A glass prism refracts white sunlight into a band of rainbow colors.',
        synonyms: ['bend', 'deflect', 'curve'],
        collocations: ['refract around an island', 'refract light', 'refracted wave'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-109',
          targetWord: 'swell',
          question: 'How does a Polynesian wayfinder stay on course during cloudy days when the sun and stars are hidden?',
          options: [
            'By feeling the steady direction of deep ocean swells rolling beneath the canoe hull and steering at a consistent angle to them.',
            'By dropping an anchor to the bottom of the five-kilometer-deep ocean.',
            'By following modern container ships across the Pacific.',
            'By waiting on a sandbar until winter ends.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that deep ocean swells travel in a consistent direction from distant trade winds, allowing navigators to feel the swells against the canoe hull and hold their heading.'
        },
        {
          id: 'mc-b2-110',
          targetWord: 'refract',
          question: 'How can a master navigator tell that an island is fifty kilometers ahead before it is even visible on the horizon?',
          options: [
            'Ocean swells bend (refract) and bounce echo waves off the unseen island, and land-nesting seabirds like white terns fly out at dawn and return toward the island at dusk.',
            'The ocean water turns bright red within fifty kilometers of any island.',
            'The navigator hears people talking on the beach from fifty kilometers away.',
            'The water temperature rises by twenty degrees near land.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that ocean swells refract and reflect off unseen islands while land-roosting seabirds fly out to fish at dawn and return toward shore at dusk.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-109',
          sentenceWithBlank: 'Across the vast _____ of the Pacific Ocean, tiny coral atolls are separated by hundreds of kilometers of open water.',
          targetWord: 'expanse',
          hint: 'A wide, continuous open area of sea or land',
          options: ['expanse', 'refract', 'habitable', 'bearing']
        },
        {
          id: 'cl-b2-110',
          sentenceWithBlank: 'By aligning the canoe’s prow with a rising star on the eastern horizon, the navigator maintained an accurate _____.',
          targetWord: 'bearing',
          hint: 'A specific direction or line of travel',
          options: ['bearing', 'habitable', 'refract', 'expanse']
        }
      ],
      matching: {
        id: 'ma-b2-55',
        instructions: 'Match each B2 navigation and oceanography word with its definition:',
        pairs: [
          { id: 'p-b2-217', term: 'expanse', match: 'A wide, continuous open area of sea, land, or sky' },
          { id: 'p-b2-218', term: 'habitable', match: 'Suitable and safe for human beings to live in' },
          { id: 'p-b2-219', term: 'swell', match: 'A long, steady rolling ocean wave generated by distant trade winds' },
          { id: 'p-b2-220', term: 'refract', match: 'Cause a water or light wave to bend around an obstacle' }
        ]
      }
    }
  },
  {
    id: 'b2-mycorrhizal-carbon-sink-fungi',
    title: 'The Underground Carbon Bank: Why Protecting Soil Fungi Is Essential for Climate Stability',
    subtitle: 'Plants pump a third of the carbon they capture from the air directly into underground fungal networks—creating one of Earth’s largest hidden carbon vaults.',
    level: 'B2',
    category: 'Environment',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 459,
    cefrSummary: 'Climate ecology, soil biology, and B2 environmental science vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Global soil studies show that mycorrhizal fungi beneath forests and grasslands receive more than thirteen billion tons of carbon dioxide from plants every year.',
    paragraphs: [
      'When climate discussions turn to nature-based solutions, almost all attention focuses on what we can see above the ground: tree trunks, branches, and green leaves. Yet Earth’s largest land-based carbon reservoir is not the trees themselves, but the soil beneath our feet. Globally, soil holds about three times more carbon than all living plants and trees combined—and recent research reveals that microscopic underground fungi are the chief bankers moving that carbon into the ground.',
      'For more than four hundred million years, around eighty-five percent of all land plants—from wheat and wildflowers to giant pine trees—have lived in a symbiotic partnership with mycorrhizal fungi. During photosynthesis, plants draw carbon dioxide out of the atmosphere and use sunlight to turn it into carbon-rich sugars and fats. Remarkably, plants do not keep all of that food for themselves: they allocate up to thirty percent of their carbon directly down into their roots to feed the fungal threads woven around them.',
      'In a landmark 2023 study published in Current Biology, an international team of researchers calculated just how huge this underground carbon transfer really is. Every single year, land plants pump roughly thirteen billion tons of carbon dioxide equivalent into mycorrhizal fungi—an amount equal to more than a third of all annual global fossil-fuel emissions. The fungi use this carbon to build sprawling mineral-hunting networks and coat soil particles in a sticky protein called glomalin, locking carbon into stable crumbs of earth for decades.',
      'Unfortunately, modern industrial land use has been tearing up this underground carbon bank. Deep mechanical plowing, heavy chemical fertilizers, and clear-cutting forests slice through fungal filaments and expose buried soil carbon to oxygen, releasing it back into the sky. By shifting toward "no-till" agriculture—planting seeds directly into undisturbed stubble—and protecting old-growth forest soils, farmers and foresters can preserve these fungal networks, boosting crop resilience against drought while keeping billions of tons of carbon safely underground.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-276',
        word: 'reservoir',
        partOfSpeech: 'noun',
        phonetic: '/ˈrezəvwɑː(r)/',
        definition: 'A large natural or artificial storage place where water, carbon, or another resource is held in reserve.',
        contextSentence: 'Yet Earth’s largest land-based carbon reservoir is not the trees themselves, but the soil beneath our feet.',
        exampleSentence: 'Deep oceans act as a massive reservoir that absorbs heat and carbon dioxide from the atmosphere.',
        synonyms: ['storehouse', 'repository', 'bank'],
        collocations: ['carbon reservoir', 'natural reservoir', 'water reservoir'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-277',
        word: 'symbiotic',
        partOfSpeech: 'adjective',
        phonetic: '/ˌsɪmbaɪˈɒtɪk/',
        definition: 'Involving a close, long-term biological relationship between two different organisms from which both benefit.',
        contextSentence: 'For more than four hundred million years, around eighty-five percent of all land plants have lived in a symbiotic partnership with mycorrhizal fungi.',
        exampleSentence: 'Clownfish and sea anemones share a symbiotic relationship on tropical coral reefs.',
        synonyms: ['mutually beneficial', 'cooperative', 'interdependent'],
        collocations: ['symbiotic partnership', 'symbiotic relationship', 'symbiotic fungi'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-278',
        word: 'allocate',
        partOfSpeech: 'verb',
        phonetic: '/ˈæləkeɪt/',
        definition: 'To distribute or assign a specific share of resources, energy, or money for a particular purpose.',
        contextSentence: 'Remarkably, plants do not keep all of that food for themselves: they allocate up to thirty percent of their carbon directly down into their roots to feed the fungal threads.',
        exampleSentence: 'The city council voted to allocate twenty percent of the transport budget to new bicycle lanes.',
        synonyms: ['assign', 'allot', 'distribute'],
        collocations: ['allocate resources', 'allocate carbon', 'allocate funds'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-279',
        word: 'undisturbed',
        partOfSpeech: 'adjective',
        phonetic: '/ˌʌndɪˈstɜːbd/',
        definition: 'Not touched, dug up, or interfered with; left in its natural state.',
        contextSentence: 'By shifting toward "no-till" agriculture—planting seeds directly into undisturbed stubble—farmers can preserve these fungal networks.',
        exampleSentence: 'Leaving forest soil undisturbed allows delicate fungal filaments to grow for decades.',
        synonyms: ['untouched', 'intact', 'unplowed'],
        collocations: ['undisturbed soil', 'remain undisturbed', 'leave undisturbed'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-280',
        word: 'resilience',
        partOfSpeech: 'noun',
        phonetic: '/rɪˈzɪliəns/',
        definition: 'The capacity of an ecosystem, crop, or person to withstand stress and recover quickly from difficult conditions.',
        contextSentence: 'Farmers and foresters can preserve these fungal networks, boosting crop resilience against drought while keeping billions of tons of carbon safely underground.',
        exampleSentence: 'Diverse native forests show much greater resilience after summer droughts than single-species plantations.',
        synonyms: ['toughness', 'adaptability', 'hardiness'],
        collocations: ['crop resilience', 'resilience against drought', 'ecological resilience'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-111',
          targetWord: 'allocate',
          question: 'How does carbon from the atmosphere end up inside underground mycorrhizal fungi?',
          options: [
            'Plants capture carbon dioxide during photosynthesis, turn it into sugars and fats, and allocate up to thirty percent of that carbon down through their roots to feed their fungal partners.',
            'Fungi climb up to the tops of trees to breathe air directly.',
            'Rain washes coal dust down into the forest floor.',
            'Fungi only absorb carbon when trees die and burn.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 2 explains that plants convert atmospheric CO2 into sugars and fats and allocate up to 30% of that carbon to the mycorrhizal fungi around their roots.'
        },
        {
          id: 'mc-b2-112',
          targetWord: 'undisturbed',
          question: 'Why does "no-till" agriculture help both farmers and the global climate?',
          options: [
            'Leaving soil undisturbed preserves underground fungal filaments that lock carbon in the ground and improve crop resilience during droughts.',
            'It requires farmers to plow their fields five times every winter.',
            'It kills all soil bacteria so weeds cannot grow.',
            'It uses ten times more chemical fertilizer than conventional plowing.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that planting seeds into undisturbed soil preserves fungal filaments, keeping carbon locked underground and boosting crop resilience against drought.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-111',
          sentenceWithBlank: 'Trees and underground fungi form a _____ relationship in which sugars are traded for essential soil minerals.',
          targetWord: 'symbiotic',
          hint: 'Mutually beneficial between two different living organisms',
          options: ['symbiotic', 'undisturbed', 'reservoir', 'allocate']
        },
        {
          id: 'cl-b2-112',
          sentenceWithBlank: 'Healthy soil organic matter increases a farm’s _____ during years of unpredictable rainfall.',
          targetWord: 'resilience',
          hint: 'The ability to withstand stress and recover from harsh conditions',
          options: ['resilience', 'allocate', 'symbiotic', 'undisturbed']
        }
      ],
      matching: {
        id: 'ma-b2-56',
        instructions: 'Match each B2 ecology and climate word with its definition:',
        pairs: [
          { id: 'p-b2-221', term: 'reservoir', match: 'A large natural storage place where carbon or water is held' },
          { id: 'p-b2-222', term: 'symbiotic', match: 'Involving a close biological partnership that benefits both organisms' },
          { id: 'p-b2-223', term: 'allocate', match: 'Assign or distribute a share of resources for a specific purpose' },
          { id: 'p-b2-224', term: 'resilience', match: 'The ability to withstand shock or drought and recover quickly' }
        ]
      }
    }
  },
  {
    id: 'b2-anchoring-bias-price-negotiations',
    title: 'The Power of the First Number: How Anchoring Bias Shapes Prices, Salaries, and Verdicts',
    subtitle: 'Even when we know a starting number is completely random, our brains use it as a gravitational anchor when judging value.',
    level: 'B2',
    category: 'Modern Economics',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 461,
    cefrSummary: 'Behavioral economics, negotiation psychology, and B2 business vocabulary.',
    themeColor: 'teal',
    gradientFrom: 'from-teal-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Whether on a restaurant menu or in a real-estate negotiation, the very first price put on the table pulls all subsequent estimates toward it.',
    paragraphs: [
      'In 1974, Nobel Prize-winning psychologists Amos Tversky and Daniel Kahneman conducted one of the strangest experiments in behavioral economics. They invited volunteers to watch a spinning wheel of fortune marked with numbers from zero to one hundred. Unknown to the participants, the researchers had rigged the wheel so that it always stopped on either the number 10 or the number 65. After the wheel stopped, the researchers asked each participant a completely unrelated geography question: "What percentage of countries in the United Nations are African nations?"',
      'Logically, a random number on a carnival wheel has nothing to do with African geography. Yet the wheel’s number exerted a powerful pull on people’s answers. Participants who saw the wheel stop on 10 guessed, on average, that twenty-five percent of UN members were African countries. Participants who saw the wheel stop on 65 guessed an average of forty-five percent. Tversky and Kahneman named this mental phenomenon the "anchoring effect."',
      'Anchoring happens because the human brain rarely knows the exact absolute value of a house, a winter coat, or a fair annual salary. Instead, when we have to make an estimate, our mind latches onto the first number presented to us as a starting benchmark and adjusts upward or downward from there—almost always adjusting too little. Even when an initial number is completely arbitrary, it acts like a heavy ship’s anchor that keeps our final judgment from drifting far away.',
      'Retailers and negotiators use anchoring every day. When a clothing store prints "Original Price: $200 — Sale Price: $95" on a jacket tag, the $200 anchor makes $95 feel like a bargain, whereas a simple "$95" tag on the exact same jacket might feel expensive. Similarly, restaurants often place one very expensive dish at the top of a menu not because they expect many guests to order it, but because it makes every other dish below it look reasonably priced. To counteract anchoring in a salary or property negotiation, experts recommend doing independent market research ahead of time and putting your own well-researched benchmark on the table first—or explicitly rejecting an extreme opening offer before continuing the discussion.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-281',
        word: 'exert',
        partOfSpeech: 'verb',
        phonetic: '/ɪɡˈzɜːt/',
        definition: 'To apply or bring to bear a force, influence, or pressure on something.',
        contextSentence: 'Yet the wheel’s number exerted a powerful pull on people’s answers.',
        exampleSentence: 'The moon’s gravity exerts a steady pull on Earth’s oceans, creating the daily tides.',
        synonyms: ['exercise', 'apply', 'wield'],
        collocations: ['exert a pull', 'exert influence', 'exert pressure'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-282',
        word: 'benchmark',
        partOfSpeech: 'noun',
        phonetic: '/ˈbentʃmɑːk/',
        definition: 'A standard or reference point against which other prices, performances, or estimates are compared and judged.',
        contextSentence: 'When we have to make an estimate, our mind latches onto the first number presented to us as a starting benchmark and adjusts upward or downward from there.',
        exampleSentence: 'The survey of regional tech companies served as a useful benchmark for setting engineering salaries.',
        synonyms: ['reference point', 'standard', 'yardstick'],
        collocations: ['starting benchmark', 'serve as a benchmark', 'industry benchmark'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-283',
        word: 'arbitrary',
        partOfSpeech: 'adjective',
        phonetic: '/ˈɑːbɪtrəri/',
        definition: 'Based on random chance or personal whim rather than reason, evidence, or an objective system.',
        contextSentence: 'Even when an initial number is completely arbitrary, it acts like a heavy ship’s anchor that keeps our final judgment from drifting far away.',
        exampleSentence: 'Choosing the project deadline by picking a date off the calendar at random felt completely arbitrary.',
        synonyms: ['random', 'unfounded', 'capricious'],
        collocations: ['completely arbitrary', 'arbitrary number', 'arbitrary decision'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-284',
        word: 'bargain',
        partOfSpeech: 'noun',
        phonetic: '/ˈbɑːɡən/',
        definition: 'Something offered or bought for much less than its usual or expected price; a very good deal.',
        contextSentence: 'When a clothing store prints "Original Price: $200 — Sale Price: $95" on a jacket tag, the $200 anchor makes $95 feel like a bargain.',
        exampleSentence: 'At ten dollars for three hardcover novels, the bookshop sale was a real bargain.',
        synonyms: ['good deal', 'steal', 'great value'],
        collocations: ['feel like a bargain', 'great bargain', 'bargain price'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-285',
        word: 'counteract',
        partOfSpeech: 'verb',
        phonetic: '/ˌkaʊntərˈækt/',
        definition: 'To act against an unwanted force or bias in order to reduce or neutralize its effect.',
        contextSentence: 'To counteract anchoring in a salary or property negotiation, experts recommend doing independent market research ahead of time.',
        exampleSentence: 'Stretching and standing up every hour helps counteract the physical strain of sitting at a desk.',
        synonyms: ['offset', 'neutralize', 'counterbalance'],
        collocations: ['counteract a bias', 'counteract the effect', 'help counteract'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-113',
          targetWord: 'arbitrary',
          question: 'What did Tversky and Kahneman’s wheel-of-fortune experiment prove about human judgment?',
          options: [
            'Even a completely arbitrary, random number (like 10 or 65 on a wheel) unconsciously pulls people’s subsequent numerical estimates toward it.',
            'People only trust numbers that are printed in official geography textbooks.',
            'Spinning wheels help students remember exact United Nations statistics.',
            'Mathematicians are never influenced by starting prices.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 1–3 show that even an obviously random number on a rigged wheel acted as an anchor that shifted participants’ estimates from 25% to 45%.'
        },
        {
          id: 'mc-b2-114',
          targetWord: 'counteract',
          question: 'Why do restaurants often place one very expensive dish at the very top of a menu?',
          options: [
            'Because that high price acts as a mental anchor that makes all the other dishes below it look reasonably priced by comparison.',
            'Because waiters are only paid when someone buys the most expensive dish.',
            'Because guests always read menus from bottom to top.',
            'To discourage customers from ordering food.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that a high-priced item at the top of a menu sets a high anchor, making the rest of the dishes appear much more affordable.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-113',
          sentenceWithBlank: 'Before entering the salary negotiation, she researched average industry pay so she would have an objective _____.',
          targetWord: 'benchmark',
          hint: 'A standard reference point used for comparison',
          options: ['benchmark', 'arbitrary', 'exert', 'bargain']
        },
        {
          id: 'cl-b2-114',
          sentenceWithBlank: 'Writing down the true market value of a used car before visiting the dealership helps _____ the seller’s high opening price.',
          targetWord: 'counteract',
          hint: 'Neutralize or act against an unwanted influence',
          options: ['counteract', 'arbitrary', 'bargain', 'exert']
        }
      ],
      matching: {
        id: 'ma-b2-57',
        instructions: 'Match each B2 behavioral economics word with its definition:',
        pairs: [
          { id: 'p-b2-225', term: 'exert', match: 'Apply a force, pull, or influence on something' },
          { id: 'p-b2-226', term: 'benchmark', match: 'A standard reference point against which other values are compared' },
          { id: 'p-b2-227', term: 'arbitrary', match: 'Based on random chance rather than reason or objective evidence' },
          { id: 'p-b2-228', term: 'counteract', match: 'Act against a bias or force to neutralize its effect' }
        ]
      }
    }
  },
  {
    id: 'b2-crispr-gene-drives-malaria-mosquitoes',
    title: 'Rewriting Inheritance: Can Genetic Engineering Disarm the World’s Deadliest Insect?',
    subtitle: 'Instead of spraying swamps with chemical insecticides, biologists are testing a genetic tool that spreads malaria resistance through wild mosquito populations.',
    level: 'B2',
    category: 'Science & Nature',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 463,
    cefrSummary: 'Biotechnology, public health ethics, and B2 genetics vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Inside high-containment laboratories, geneticists study whether modified mosquitoes can block the malaria parasite without disrupting food webs.',
    paragraphs: [
      'When people are asked to name the most dangerous animal on Earth, they usually think of sharks, venomous snakes, or lions. In reality, the deadliest creature by far is a tiny insect weighing less than three milligrams: the female Anopheles mosquito. While there are over three thousand species of mosquitoes worldwide, only a small handful of Anopheles species carry the microscopic Plasmodium parasite that causes human malaria—an illness that still claims more than six hundred thousand lives each year, mostly young children.',
      'For decades, public health campaigns fought malaria with bed nets, drainage projects, and chemical insecticides. Gradually, however, mosquitoes have evolved resistance to common chemical sprays, while the malaria parasite itself has developed resistance to several drugs. Faced with stalling progress, molecular biologists turned to a revolutionary tool called a "CRISPR gene drive" that alters how traits pass from parents to offspring.',
      'Under normal Mendelian genetics, when one parent carries a modified gene and mates with a wild partner, their offspring have only a fifty percent chance of inheriting that gene. Over many generations in the wild, an artificial trait usually dilutes and disappears. A CRISPR gene drive breaks this fifty-fifty rule. It packages a protective gene—such as an antibody that blocks the malaria parasite inside the mosquito’s gut—together with a tiny molecular scissors enzyme. When a modified mosquito mates with a wild one, the gene drive automatically copies and pastes itself onto the partner’s chromosome as well, ensuring that nearly ninety-nine percent of all offspring inherit the anti-malaria trait.',
      'In secure indoor cage trials, a few dozen gene-drive mosquitoes introduced into a large wild population spread malaria resistance through the entire colony within ten generations. Yet because releasing a self-spreading gene into nature could be difficult to recall, scientists and bioethicists are proceeding with extreme caution. Before any open-air field trial takes place, researchers are testing "reversal drives" that act as a genetic undo button and consulting local communities to ensure strong ecological safeguards.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-286',
        word: 'parasite',
        partOfSpeech: 'noun',
        phonetic: '/ˈpærəsaɪt/',
        definition: 'An organism that lives inside or on another living host and feeds at the host’s expense, often causing disease.',
        contextSentence: 'Only a small handful of Anopheles species carry the microscopic Plasmodium parasite that causes human malaria.',
        exampleSentence: 'Boiling drinking water on camping trips kills microscopic parasites that cause stomach illness.',
        synonyms: ['pathogen', 'host-dependent organism'],
        collocations: ['malaria parasite', 'microscopic parasite', 'transmit a parasite'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-287',
        word: 'offspring',
        partOfSpeech: 'noun',
        phonetic: '/ˈɒfsprɪŋ/',
        definition: 'The young or children produced by human, animal, or plant parents.',
        contextSentence: 'Faced with stalling progress, molecular biologists turned to a revolutionary tool called a "CRISPR gene drive" that alters how traits pass from parents to offspring.',
        exampleSentence: 'Sea turtles return to the exact beach where they hatched to lay eggs and produce their own offspring.',
        synonyms: ['progeny', 'young', 'descendants'],
        collocations: ['pass to offspring', 'healthy offspring', 'produce offspring'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-288',
        word: 'inherit',
        partOfSpeech: 'verb',
        phonetic: '/ɪnˈherɪt/',
        definition: 'To receive a genetic characteristic, physical trait, or condition from one’s parents.',
        contextSentence: 'When a modified mosquito mates with a wild one, the gene drive automatically copies and pastes itself onto the partner’s chromosome, ensuring that nearly ninety-nine percent of all offspring inherit the anti-malaria trait.',
        exampleSentence: 'Children inherit half of their chromosomes from their mother and half from their father.',
        synonyms: ['receive genetically', 'acquire from parents'],
        collocations: ['inherit a gene', 'inherit a trait', 'inherited condition'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-289',
        word: 'dilute',
        partOfSpeech: 'verb',
        phonetic: '/daɪˈluːt/',
        definition: 'To make a liquid, gene pool, or effect weaker and less concentrated by mixing it with something else.',
        contextSentence: 'Over many generations in the wild, an artificial trait usually dilutes and disappears.',
        exampleSentence: 'You should dilute the concentrated lemon juice with three parts cold water before drinking it.',
        synonyms: ['weaken', 'thin out', 'water down'],
        collocations: ['dilute a solution', 'dilute an effect', 'gradually dilute'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-290',
        word: 'safeguard',
        partOfSpeech: 'noun',
        phonetic: '/ˈseɪfɡɑːd/',
        definition: 'A rule, technical measure, or precaution designed to protect against danger, misuse, or unintended harm.',
        contextSentence: 'Before any open-air field trial takes place, researchers are testing "reversal drives" that act as a genetic undo button and consulting local communities to ensure strong ecological safeguards.',
        exampleSentence: 'Strict laboratory safeguards prevent experimental bacteria from escaping into the outside air.',
        synonyms: ['precaution', 'protective measure', 'safety check'],
        collocations: ['ecological safeguard', 'strict safeguards', 'put safeguards in place'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-115',
          targetWord: 'inherit',
          question: 'How does a CRISPR gene drive differ from normal Mendelian inheritance?',
          options: [
            'Instead of only 50% of offspring inheriting a trait, the gene drive copies itself onto the partner chromosome so that nearly 99% of offspring inherit the anti-malaria gene.',
            'It prevents mosquitoes from ever laying eggs.',
            'It turns mosquitoes into honeybees after three generations.',
            'It only passes traits to 1% of the offspring.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 3 explains that whereas normal inheritance passes a modified gene to 50% of offspring, a CRISPR gene drive copies and pastes itself so ~99% of offspring inherit the trait.'
        },
        {
          id: 'mc-b2-116',
          targetWord: 'safeguard',
          question: 'Why are scientists developing "reversal drives" and testing gene drives in sealed indoor cages before any outdoor release?',
          options: [
            'To establish strong ecological safeguards and a genetic "undo button" because a self-spreading gene could be difficult to recall once released into nature.',
            'Because modified mosquitoes cannot fly in outdoor sunlight.',
            'Because indoor cages make mosquitoes grow ten times larger.',
            'Because malaria only exists inside laboratories.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 4 explains that because a self-spreading gene is hard to recall once in the wild, researchers are testing "reversal drives" and ecological safeguards in sealed indoor cages first.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-115',
          sentenceWithBlank: 'By equipping mosquitoes with antibodies that block the malaria _____, scientists can stop the insect from spreading disease without wiping out the species.',
          targetWord: 'parasite',
          hint: 'An organism that lives inside a host and causes disease',
          options: ['parasite', 'safeguard', 'dilute', 'inherit']
        },
        {
          id: 'cl-b2-116',
          sentenceWithBlank: 'Multiple digital _____ were installed to ensure that patient medical records remain private.',
          targetWord: 'safeguards',
          hint: 'Protective measures or precautions against harm',
          options: ['safeguards', 'offspring', 'parasites', 'dilute']
        }
      ],
      matching: {
        id: 'ma-b2-58',
        instructions: 'Match each B2 genetics and bioethics word with its definition:',
        pairs: [
          { id: 'p-b2-229', term: 'parasite', match: 'An organism that lives inside a host and feeds at its expense' },
          { id: 'p-b2-230', term: 'offspring', match: 'The young produced by animal, plant, or human parents' },
          { id: 'p-b2-231', term: 'inherit', match: 'Receive a genetic trait or characteristic from one’s parents' },
          { id: 'p-b2-232', term: 'safeguard', match: 'A protective rule or technical measure designed to prevent harm' }
        ]
      }
    }
  },
  {
    id: 'b2-kintsugi-japanese-art-of-repair',
    title: 'Golden Seams: How the Japanese Art of Kintsugi Turns Broken Pottery into Priceless Heirlooms',
    subtitle: 'Rather than hiding cracks with invisible glue or throwing chipped bowls away, a five-hundred-year-old craft highlights fractures with powdered gold.',
    level: 'B2',
    category: 'Culture & Language',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 458,
    cefrSummary: 'Cultural philosophy, traditional craftsmanship, and B2 descriptive vocabulary.',
    themeColor: 'amber',
    gradientFrom: 'from-amber-900',
    gradientTo: 'to-stone-900',
    heroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'In kintsugi, every fracture line is illuminated with natural urushi lacquer dusted in pure gold or silver, making no two repaired bowls alike.',
    paragraphs: [
      'In most parts of the world, when a favorite ceramic teacup slips from your hand and shatters on the kitchen floor, only two outcomes are possible. Either you sweep the broken shards into the rubbish bin, or you spend an afternoon trying to glue the pieces back together with transparent adhesive, hoping that no one will notice the crack. In fifteenth-century Japan, however, artisans developed a radically different response to broken objects: an art form called kintsugi, which translates literally as "golden joinery."',
      'According to historical tradition, kintsugi began when the Japanese shogun Ashikaga Yoshimasa sent a cracked Chinese celadon tea bowl back to China to be repaired. When the bowl returned held together with ugly metal staples, the disappointed ruler asked Japanese craftsmen to find a more respectful solution. Rather than attempting to conceal the damage, the artisans mended the ceramic fragments with urushi—a strong, food-safe natural lacquer made from tree sap—and dusted the wet seams with fine powdered gold before polishing them to a warm glow.',
      'The result transformed how collectors looked at the vessel. Instead of pretending the accident had never happened, the golden veins celebrated the bowl’s survival, turning a damaged piece of pottery into a one-of-a-kind work of art that was even more valuable than before it broke. Kintsugi is deeply rooted in the Japanese aesthetic philosophy of wabi-sabi, which finds beauty not in mass-produced, flawless perfection, but in the natural marks of age, wear, and impermanence.',
      'In recent years, kintsugi has inspired psychologists, environmentalists, and designers far beyond Japan. In an era of disposable fast fashion and electronics designed to be discarded at the first scratch, kintsugi offers a powerful model of careful stewardship and repair. For psychologists, the golden seams also serve as a visual metaphor for human emotional recovery: after a person passes through failure, loss, or illness, true strength comes not from hiding our scars and pretending to be unbroken, but from embracing how we healed.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-291',
        word: 'shatter',
        partOfSpeech: 'verb',
        phonetic: '/ˈʃætə(r)/',
        definition: 'To break suddenly and violently into many small, sharp pieces.',
        contextSentence: 'When a favorite ceramic teacup slips from your hand and shatters on the kitchen floor, only two outcomes are possible.',
        exampleSentence: 'The baseball struck the greenhouse window and caused the glass pane to shatter.',
        synonyms: ['smash', 'splinter', 'break into shards'],
        collocations: ['shatter on the floor', 'shatter into pieces', 'shattered glass'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-292',
        word: 'conceal',
        partOfSpeech: 'verb',
        phonetic: '/kənˈsiːl/',
        definition: 'To hide something carefully so that it cannot be seen or noticed by others.',
        contextSentence: 'Rather than attempting to conceal the damage, the artisans mended the ceramic fragments with urushi and dusted the wet seams with fine powdered gold.',
        exampleSentence: 'A fresh coat of white paint helped conceal the old pencil marks on the wall.',
        synonyms: ['hide', 'cover up', 'disguise'],
        collocations: ['conceal the damage', 'attempt to conceal', 'conceal a flaw'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-293',
        word: 'flawless',
        partOfSpeech: 'adjective',
        phonetic: '/ˈflɔːləs/',
        definition: 'Without any mistakes, cracks, or imperfections; completely perfect.',
        contextSentence: 'Kintsugi is deeply rooted in the Japanese aesthetic philosophy of wabi-sabi, which finds beauty not in mass-produced, flawless perfection, but in the natural marks of age, wear, and impermanence.',
        exampleSentence: 'The concert pianist gave a flawless performance of Chopin’s nocturnes.',
        synonyms: ['impeccable', 'perfect', 'unblemished'],
        collocations: ['flawless perfection', 'flawless surface', 'flawless performance'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-294',
        word: 'discard',
        partOfSpeech: 'verb',
        phonetic: '/dɪˈskɑːd/',
        definition: 'To throw something away or get rid of it because it is no longer wanted or considered useful.',
        contextSentence: 'In an era of disposable fast fashion and electronics designed to be discarded at the first scratch, kintsugi offers a powerful model of careful stewardship and repair.',
        exampleSentence: 'Consumers discard millions of working smartphones every year simply to upgrade to a newer model.',
        synonyms: ['throw away', 'dispose of', 'cast aside'],
        collocations: ['discard broken items', 'quickly discarded', 'discard electronics'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-295',
        word: 'embrace',
        partOfSpeech: 'verb',
        phonetic: '/ɪmˈbreɪs/',
        definition: 'To accept an idea, change, or reality willingly and enthusiastically.',
        contextSentence: 'True strength comes not from hiding our scars and pretending to be unbroken, but from embracing how we healed.',
        exampleSentence: 'Many traditional bookshops have embraced online ordering to reach readers in smaller towns.',
        synonyms: ['welcome', 'accept wholeheartedly', 'adopt'],
        collocations: ['embrace change', 'embrace a philosophy', 'willingly embrace'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-117',
          targetWord: 'conceal',
          question: 'How does traditional Japanese kintsugi differ from ordinary Western ceramic repair?',
          options: [
            'Instead of using clear glue to conceal cracks, artisans mend the pieces with natural lacquer dusted in powdered gold to highlight the fracture lines as part of the bowl’s history.',
            'Artisans melt the broken bowl down into liquid clay and mold a brand-new bowl.',
            'They staple the broken pieces together with heavy iron wire.',
            'They paint the entire bowl black so the cracks cannot be seen.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 2 and 3 explain that kintsugi highlights fracture lines with urushi lacquer and powdered gold rather than trying to conceal the damage.'
        },
        {
          id: 'mc-b2-118',
          targetWord: 'flawless',
          question: 'What does the Japanese aesthetic philosophy of wabi-sabi celebrate?',
          options: [
            'The beauty found in natural aging, repair, and impermanence rather than mass-produced, flawless perfection.',
            'Throwing away any household object the moment it gets a tiny scratch.',
            'Using only plastic dishes that can never break.',
            'Keeping ceramic bowls locked in dark boxes so nobody ever touches them.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 3 states that wabi-sabi finds beauty not in mass-produced, flawless perfection, but in the natural marks of age, wear, and impermanence.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-117',
          sentenceWithBlank: 'Tempered safety glass in car windshields is designed not to _____ into sharp daggers during an accident.',
          targetWord: 'shatter',
          hint: 'Break suddenly into many sharp pieces',
          options: ['shatter', 'conceal', 'embrace', 'flawless']
        },
        {
          id: 'cl-b2-118',
          sentenceWithBlank: 'Rather than trying to _____ his nervous accent, the speaker smiled and shared the story of how he learned English.',
          targetWord: 'conceal',
          hint: 'Hide or keep out of sight',
          options: ['conceal', 'discard', 'shatter', 'flawless']
        }
      ],
      matching: {
        id: 'ma-b2-59',
        instructions: 'Match each B2 culture and design vocabulary word with its definition:',
        pairs: [
          { id: 'p-b2-233', term: 'shatter', match: 'Break suddenly into many small sharp pieces' },
          { id: 'p-b2-234', term: 'conceal', match: 'Hide something carefully so it is not noticed' },
          { id: 'p-b2-235', term: 'flawless', match: 'Completely perfect and free of any defects or cracks' },
          { id: 'p-b2-236', term: 'discard', match: 'Throw away something because it is no longer wanted' }
        ]
      }
    }
  },
  {
    id: 'b2-urban-canyons-nighttime-heat-islands',
    title: 'Why Concrete Cities Refuse to Cool at Night: The Physics of Urban Heat Islands',
    subtitle: 'On a calm summer midnight, a city center can be seven degrees hotter than the countryside just ten kilometers away—and street geometry is a major reason why.',
    level: 'B2',
    category: 'Environment',
    readTime: '6 min read',
    readingTimeMinutes: 6,
    wordCount: 463,
    cefrSummary: 'Urban climatology, thermodynamics, and B2 environmental engineering vocabulary.',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-slate-900',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f30bc42237?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'High-albedo white rooftops, shade canopies, and permeable green streets help modern cities release trapped daytime heat after sunset.',
    paragraphs: [
      'As the sun sets on a clear July evening, meadows, forests, and farmland outside a city begin cooling down almost immediately. Within two hours of sunset, a country road feels refreshingly cool. Walk through the downtown streets of a large metropolis at the exact same hour, however, and you can feel heat radiating off the brick walls and asphalt pavements well past midnight. Meteorologists call this sharp temperature gap—which often leaves city centers five to seven degrees Celsius warmer than surrounding rural areas at night—the "urban heat island" effect.',
      'Why do cities hold onto heat like giant brick ovens? The first factor is a physical property called albedo, which measures how much incoming sunlight a surface reflects back into space. Pale surfaces have a high albedo, while dark surfaces have a low albedo. Because city roofs, parking lots, and roads are covered in dark tar and asphalt, they absorb up to ninety percent of the sun’s energy all afternoon, storing it deep inside heavy stone and concrete.',
      'The second culprit is the three-dimensional geometry of city streets, which physicists call "urban canyons." In an open rural field, when the ground radiates infrared heat upward at night, that heat escapes straight into the cold night sky. On a narrow street flanked by tall apartment or office buildings, however, heat radiating out of the pavement strikes the walls of the buildings across the street and bounces back and forth inside the canyon, unable to escape upward. At the same time, rows of tall buildings block cool evening breezes, while thousands of air-conditioning units pump indoor heat directly out onto the street.',
      'Because extreme nighttime heat prevents the human heart and nervous system from recovering during sleep, urban heat islands are a serious public health hazard. Fortunately, cities are fighting back with smart materials and green geometry. In cities from Athens and Los Angeles to Tokyo, painting dark flat roofs with super-white reflective coatings lowers roof surface temperatures by up to twenty-five degrees Celsius in the afternoon sun. Combined with street trees whose leafy canopies shade asphalt before it can heat up, these simple redesigns are helping concrete cities breathe and cool down after dark.'
    ],
    targetVocabulary: [
      {
        id: 'v-b2-296',
        word: 'radiate',
        partOfSpeech: 'verb',
        phonetic: '/ˈreɪdieɪt/',
        definition: 'To send out heat or light waves in all directions from a warm or glowing surface.',
        contextSentence: 'Walk through the downtown streets of a large metropolis at the exact same hour, however, and you can feel heat radiating off the brick walls and asphalt pavements well past midnight.',
        exampleSentence: 'The dark stone courtyard continued to radiate warmth for hours after the sun went down.',
        synonyms: ['emit', 'give off', 'throw out'],
        collocations: ['radiate heat', 'radiate warmth', 'radiate upward'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-297',
        word: 'metropolis',
        partOfSpeech: 'noun',
        phonetic: '/məˈtrɒpəlɪs/',
        definition: 'A very large, densely populated, and important city.',
        contextSentence: 'Walk through the downtown streets of a large metropolis at the exact same hour, however, and you can feel heat radiating off the brick walls.',
        exampleSentence: 'Tokyo is a bustling metropolis with one of the most efficient rail networks in the world.',
        synonyms: ['major city', 'megacity', 'urban center'],
        collocations: ['large metropolis', 'modern metropolis', 'bustling metropolis'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-298',
        word: 'flank',
        partOfSpeech: 'verb',
        phonetic: '/flæŋk/',
        definition: 'To stand or be positioned along both sides of something, such as buildings lining a street.',
        contextSentence: 'On a narrow street flanked by tall apartment or office buildings, however, heat radiating out of the pavement strikes the walls of the buildings across the street.',
        exampleSentence: 'The grand avenue leading to the museum is flanked by rows of ancient plane trees.',
        synonyms: ['border', 'line', 'stand on either side of'],
        collocations: ['flanked by tall buildings', 'flanked by trees', 'flank the avenue'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-299',
        word: 'reflective',
        partOfSpeech: 'adjective',
        phonetic: '/rɪˈflektɪv/',
        definition: 'Capable of bouncing light or heat waves back off a surface rather than absorbing them.',
        contextSentence: 'In cities from Athens and Los Angeles to Tokyo, painting dark flat roofs with super-white reflective coatings lowers roof surface temperatures by up to twenty-five degrees Celsius.',
        exampleSentence: 'Cyclists wear jackets with reflective silver strips so car headlights spot them at night.',
        synonyms: ['light-bouncing', 'high-albedo', 'mirror-like'],
        collocations: ['reflective coating', 'reflective surface', 'highly reflective'],
        cefrLevel: 'B2'
      },
      {
        id: 'v-b2-300',
        word: 'coating',
        partOfSpeech: 'noun',
        phonetic: '/ˈkəʊtɪŋ/',
        definition: 'A thin layer of paint, mineral, or protective material spread over a surface.',
        contextSentence: 'Painting dark flat roofs with super-white reflective coatings lowers roof surface temperatures by up to twenty-five degrees Celsius.',
        exampleSentence: 'A waterproof wax coating protects the canvas tent from heavy mountain rain.',
        synonyms: ['layer', 'surface film', 'finish'],
        collocations: ['reflective coating', 'protective coating', 'thin coating'],
        cefrLevel: 'B2'
      }
    ],
    exercises: {
      multipleChoice: [
        {
          id: 'mc-b2-119',
          targetWord: 'radiate',
          question: 'Why does heat trapped in a narrow street flanked by tall buildings ("an urban canyon") fail to cool down quickly at night?',
          options: [
            'Because infrared heat radiating out of the pavement hits the tall building walls across the street and bounces back and forth rather than escaping straight into the night sky.',
            'Because tall buildings generate volcanic heat from their foundations.',
            'Because clouds only form over narrow streets at midnight.',
            'Because asphalt absorbs cold air and turns it into fire.'
          ],
          correctIndex: 0,
          explanation: 'Paragraph 3 explains that in an urban canyon, infrared heat radiating from the street strikes neighboring building walls and bounces back and forth instead of escaping into the sky.'
        },
        {
          id: 'mc-b2-120',
          targetWord: 'reflective',
          question: 'How do high-albedo white roof coatings and street tree canopies reduce the urban heat island effect?',
          options: [
            'Reflective white coatings bounce up to ninety percent of sunlight back into space and leafy tree canopies shade dark asphalt before it can absorb heat.',
            'White paint freezes rainwater into snow during July.',
            'Tree canopies block heat from leaving the city at night.',
            'They increase the amount of solar energy absorbed by concrete.'
          ],
          correctIndex: 0,
          explanation: 'Paragraphs 2 and 4 explain that high-albedo reflective white roof coatings bounce sunlight back into space while tree canopies shade dark asphalt so it never heats up.'
        }
      ],
      cloze: [
        {
          id: 'cl-b2-119',
          sentenceWithBlank: 'After baking in the afternoon sun, the dark brick wall continued to _____ heat into the bedroom all night.',
          targetWord: 'radiate',
          hint: 'Send out heat or light waves from a surface',
          options: ['radiate', 'flank', 'metropolis', 'coating']
        },
        {
          id: 'cl-b2-120',
          sentenceWithBlank: 'Applying a white, highly _____ _____ to the school roof cut summer air-conditioning use by thirty percent.',
          targetWord: 'reflective',
          hint: 'Bouncing sunlight and heat back rather than absorbing it',
          options: ['reflective', 'metropolis', 'flank', 'radiate']
        }
      ],
      matching: {
        id: 'ma-b2-60',
        instructions: 'Match each B2 urban climate vocabulary word with its definition:',
        pairs: [
          { id: 'p-b2-237', term: 'radiate', match: 'Emit or send out heat or light waves from a warm surface' },
          { id: 'p-b2-238', term: 'metropolis', match: 'A very large, densely populated, and important city' },
          { id: 'p-b2-239', term: 'reflective', match: 'Bouncing light or heat waves off a surface rather than absorbing them' },
          { id: 'p-b2-240', term: 'coating', match: 'A thin layer of paint or protective material spread over a surface' }
        ]
      }
    }
  }
];

// 30-question EVІ-style test with Hero Reading on Daniel Negreanu

const STORY_TEXT = `There are poker players who simply follow the math, and then there are those who seem to see directly into your soul. Daniel Negreanu belongs firmly in the second category. When I think about a person whose mindset I admire, it is not a traditional scientist or athlete, but a man sitting at the felt, calmly counting chips and reading faces.

Negreanu's story does not begin under the bright lights of Las Vegas, but in small, smoky backrooms of Toronto, where underground games ran until sunrise. As a teenager, Daniel skipped classes not out of laziness, but because he was obsessed with understanding how people think when money and ego are on the line. Those early games were chaotic and risky, yet this is where he built the foundation of his success — by watching, listening and decoding every tiny hesitation and nervous smile.

What fascinates me most about Negreanu is his almost supernatural ability to "read" opponents. He does not rely only on the cards or the odds; he reads the story that a person tells with their body language, their betting patterns, even the way they breathe. Time after time, he calmly predicts an opponent's exact hand, turning the cards face up just to prove his point. That is not luck. That is a lifetime of disciplined observation combined with remarkable emotional intelligence.

Behind this magic is cold, precise mathematics. Negreanu calculates risk in real time: the size of the pot, the probability of each possible hand, the expected value of every decision. He is not a gambler in the romantic sense — he is an investor in information. Every chip he pushes forward is a carefully measured bet on what he believes another human being is capable of doing under pressure.

What I admire even more is his psychological resilience. Poker is a brutal game. You can make the correct decision and still lose everything because of one unfortunate card on the river. Negreanu has faced huge losses and painful downswings on the biggest stages, yet he returns to the table with the same calm smile and focused eyes. He accepts that variance and stress are part of the job — and chooses discipline over drama.

His path from underground rooms in Toronto to the most prestigious tournaments in the world is not just a story about money. It is a story about growth. Along the way, he learned to manage his ego, control his emotions, and treat opponents with respect, even when millions of dollars were at stake. Today, he is known not only as a legend of poker, but also as a mentor who openly shares his thought process so that others can learn.

Daniel Negreanu inspires me because he proves that true mastery lives where psychology, mathematics and self-control meet. He shows that success is not about being fearless, but about understanding your fears and making clear decisions despite them. In a world full of noise and emotion, his ability to stay calm, analyse risk and read people so deeply is the kind of superpower I dream of developing in my own life.`;

const ACADEMIC_TEXT = `The ability to make sound decisions under conditions of uncertainty is one of the most valuable cognitive skills a person can develop. In competitive environments where outcomes depend not only on strategy but also on the unpredictable behaviour of others, this skill becomes especially critical. Psychologists who study high-stakes professions — from surgery to financial trading and competitive gaming — have consistently found that the most successful performers share a remarkable capacity for mental clarity precisely when pressure is greatest.

A key finding in this field concerns the role of pattern recognition. Experienced decision-makers do not analyse each new situation from scratch; instead, they draw on thousands of previous encounters to identify familiar structures within complex data. This allows them to act rapidly without sacrificing accuracy — a phenomenon researchers call "expert intuition". Unlike impulsive guesswork, expert intuition is the product of deliberate practice accumulated over years of experience, not an innate natural gift that some people simply possess.

However, even expert intuition must be supported by systematic self-regulation. The ability to recognise and manage one's emotional responses — particularly in the wake of loss or failure — is central to sustained high performance. Studies consistently show that those who maintain emotional balance after setbacks are significantly more likely to make rational, well-reasoned decisions rather than reactive, impulsive ones driven by frustration or the desire for quick revenge.

Elite performance in high-pressure fields rarely results from a single outstanding talent. It emerges instead from the integration of analytical thinking, emotional awareness, and disciplined practice over time. The most successful competitors are not those who avoid risk entirely, but those who have learned to assess it precisely, respond to it calmly, and adapt effectively when outcomes fall short of expectations. This combination — and not any one ability in isolation — defines what experts call true mastery.`;

const GAPFILL_TEXT_1 = `Success in high-stakes competitive games requires far more than a thorough knowledge of the rules. Players who reach elite level are distinguished (17)___ their ability to remain composed under extreme psychological pressure. The best competitors treat every move as an opportunity to gather (18)___ about their opponents, carefully studying patterns of behaviour, timing, and subtle physical cues. They also demonstrate strong self-awareness, identifying their own tendencies and working to (19)___ any habits that might make them predictable. Developing this level of skill demands years of deliberate practice and a genuine willingness to (20)___ from both victories and defeats. In this respect, the discipline (21)___ of elite performers in competitive games is no different from that seen in top athletes or surgeons. Ultimately, it is mental endurance and the ability to make clear decisions (22)___ pressure that separate good players from truly exceptional ones.`;

const GAPFILL_TEXT_2 = `Emotional intelligence is broadly defined as the (23)___ to identify and manage one's own emotions and those of others. In high-pressure environments, this skill frequently proves far more decisive than technical expertise (24)___. Research consistently shows that individuals with higher emotional intelligence make fewer impulsive errors, particularly in (25)___ of stress or uncertainty. This quality is closely linked to strong communication, effective leadership, and the ability to (26)___ lasting trust with others. Unlike many technical competencies, however, emotional intelligence cannot be acquired simply by reading theory; it develops (27)___ through lived experience and honest self-reflection. Those who invest in building this capacity tend to find that it enhances their performance (28)___ all areas of professional and personal life. For this reason, many researchers now (29)___ that emotional intelligence may be a stronger predictor of long-term success than traditional measures of cognitive ability. The practical (30)___ of this research is clear: investing in self-awareness is among the most effective steps a person can take towards sustained excellence.`;

const questions = [
  // SECTION A: Daniel Negreanu Hero Reading (Q1–5)
  {
    id: 1,
    section: "A",
    sectionTitle: "Hero Reading — Daniel Negreanu",
    type: "reading",
    text: STORY_TEXT,
    question: "According to the text, what was Daniel Negreanu mainly obsessed with as a teenager in Toronto?",
    options: [
      "Learning card tricks and casino marketing",
      "Understanding how people think under pressure",
      "Travelling to Las Vegas every weekend",
      "Collecting poker chips from famous casinos"
    ],
    correct: 1
  },
  {
    id: 2,
    section: "A",
    sectionTitle: "Hero Reading — Daniel Negreanu",
    type: "reading",
    text: STORY_TEXT,
    question: "What combination best explains Negreanu's famous ability to 'read' opponents?",
    options: [
      "Luck and aggressive bluffing",
      "Fast reflexes and strong memory",
      "Disciplined observation and emotional intelligence",
      "High charisma and loud table talk"
    ],
    correct: 2
  },
  {
    id: 3,
    section: "A",
    sectionTitle: "Hero Reading — Daniel Negreanu",
    type: "reading",
    text: STORY_TEXT,
    question: "In the text, which aspect of Negreanu's approach is linked directly to mathematics?",
    options: [
      "The way he chooses opponents before a tournament",
      "His habit of telling jokes to relax the table",
      "His practice of calculating risk and expected value in real time",
      "His ability to predict how famous commentators will react"
    ],
    correct: 2
  },
  {
    id: 4,
    section: "A",
    sectionTitle: "Hero Reading — Daniel Negreanu",
    type: "reading",
    text: STORY_TEXT,
    question: "What does the author suggest about Negreanu's attitude to stress and downswings in poker?",
    options: [
      "He avoids high-pressure situations whenever possible.",
      "He blames bad luck loudly and often.",
      "He accepts variance and chooses discipline over drama.",
      "He stops playing for long periods after every big loss."
    ],
    correct: 2
  },
  {
    id: 5,
    section: "A",
    sectionTitle: "Hero Reading — Daniel Negreanu",
    type: "reading",
    text: STORY_TEXT,
    question: "Which lesson does the author say Negreanu's story teaches about real success?",
    options: [
      "Success means never being afraid at all.",
      "Success is guaranteed if you play enough hands.",
      "Success belongs only to people with natural talent.",
      "Success comes from managing fear and making clear decisions despite it."
    ],
    correct: 3
  },

  // SECTION B: Matching / Academic text (Q6–11)
  {
    id: 6,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "The text below has four paragraphs. Match each paragraph with the most suitable heading.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the first paragraph about mental clarity and decision-making under pressure?",
    options: [
      "Clarity under pressure",
      "The science of expert intuition",
      "Recovering from loss",
      "The anatomy of elite performance"
    ],
    correct: 0
  },
  {
    id: 7,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Match each paragraph with the most suitable heading.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the paragraph about how experienced performers use past experience to act quickly and accurately?",
    options: [
      "Clarity under pressure",
      "The science of expert intuition",
      "Recovering from loss",
      "The anatomy of elite performance"
    ],
    correct: 1
  },
  {
    id: 8,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Match each paragraph with the most suitable heading.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the paragraph about managing emotional responses after failure or setbacks?",
    options: [
      "Clarity under pressure",
      "The science of expert intuition",
      "Recovering from loss",
      "The anatomy of elite performance"
    ],
    correct: 2
  },
  {
    id: 9,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Match each paragraph with the most suitable heading.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the paragraph about mastery emerging from a combination of different skills?",
    options: [
      "Clarity under pressure",
      "The science of expert intuition",
      "Recovering from loss",
      "The anatomy of elite performance"
    ],
    correct: 3
  },
  {
    id: 10,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Choose the correct paragraph.",
    text: ACADEMIC_TEXT,
    question: "Which paragraph states that expert intuition is the product of deliberate practice over years, not a natural gift?",
    options: [
      "Paragraph 1",
      "Paragraph 2",
      "Paragraph 3",
      "Paragraph 4"
    ],
    correct: 1
  },
  {
    id: 11,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Choose the correct paragraph.",
    text: ACADEMIC_TEXT,
    question: "Which paragraph argues that elite performance results from combining multiple abilities rather than a single outstanding talent?",
    options: [
      "Paragraph 1",
      "Paragraph 2",
      "Paragraph 3",
      "Paragraph 4"
    ],
    correct: 3
  },

  // SECTION C: Grammar & Vocabulary (Q12–16)
  {
    id: 12,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the correct word to complete the sentence:\n\nNegreanu's remarkable success is largely _______ to his ability to read opponents and manage pressure.",
    options: [
      "attributed",
      "dedicated",
      "applied",
      "referred"
    ],
    correct: 0
  },
  {
    id: 13,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the correct form:\n\nIf Negreanu _______ the opponent's bluff sooner, he would have won a much larger pot.",
    options: [
      "recognised",
      "had recognised",
      "has recognised",
      "would recognise"
    ],
    correct: 1
  },
  {
    id: 14,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Which option does NOT collocate correctly with the word 'decision'?",
    options: [
      "make a decision",
      "take a decision",
      "reach a decision",
      "do a decision"
    ],
    correct: 3
  },
  {
    id: 15,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the correct preposition:\n\nHis reputation as a world-class player rests _______ years of disciplined observation and emotional self-control.",
    options: [
      "in",
      "on",
      "at",
      "for"
    ],
    correct: 1
  },
  {
    id: 16,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the option that best replaces the underlined word:\n\nNegreanu's ability to stay calm during a crisis was described as remarkable 'composure'.",
    options: [
      "the ability to think faster than others",
      "a state of visible nervousness and tension",
      "calmness and self-control in difficult situations",
      "a strategy for confusing opponents"
    ],
    correct: 2
  },

  // SECTION D: Gap-Filling 1 (Q17–22)
  {
    id: 17,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 17,
    question: "Players who reach elite level are distinguished (17)___ their ability to remain composed under pressure.",
    options: ["by", "for", "with", "through"],
    correct: 0
  },
  {
    id: 18,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 18,
    question: "The best competitors treat every move as an opportunity to gather (18)___ about their opponents.",
    options: ["information", "data", "facts", "A & B are both correct"],
    correct: 3
  },
  {
    id: 19,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 19,
    question: "They work to (19)___ any habits that might make them predictable.",
    options: ["eliminate", "reduce", "avoid", "overcome"],
    correct: 0
  },
  {
    id: 20,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 20,
    question: "Developing elite skill demands a genuine willingness to (20)___ from both victories and defeats.",
    options: ["gain", "learn", "benefit", "improve"],
    correct: 1
  },
  {
    id: 21,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 21,
    question: "The discipline (21)___ of elite performers in competitive games is no different from that of top athletes.",
    options: ["needed", "demanded", "required", "A & C are both correct"],
    correct: 3
  },
  {
    id: 22,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 22,
    question: "The ability to make clear decisions (22)___ pressure separates good players from truly exceptional ones.",
    options: ["in", "with", "under", "through"],
    correct: 2
  },

  // SECTION D: Gap-Filling 2 (Q23–30)
  {
    id: 23,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 23,
    question: "Emotional intelligence is defined as the (23)___ to identify and manage one's own emotions and those of others.",
    options: ["ability", "capacity", "skill", "A & B are both correct"],
    correct: 3
  },
  {
    id: 24,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 24,
    question: "This skill frequently proves far more decisive than technical expertise (24)___.",
    options: ["alone", "only", "itself", "on its own"],
    correct: 0
  },
  {
    id: 25,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 25,
    question: "Individuals with higher emotional intelligence make fewer impulsive errors, particularly in (25)___ of stress.",
    options: ["times", "moments", "periods", "all of the above"],
    correct: 3
  },
  {
    id: 26,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 26,
    question: "This quality is closely linked to strong communication and the ability to (26)___ lasting trust with others.",
    options: ["build", "establish", "create", "all of the above"],
    correct: 3
  },
  {
    id: 27,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 27,
    question: "Emotional intelligence cannot be acquired simply by reading theory; it develops (27)___ through lived experience.",
    options: ["slowly", "gradually", "naturally", "A & B are both correct"],
    correct: 1
  },
  {
    id: 28,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 28,
    question: "Those who invest in this capacity find that it enhances their performance (28)___ all areas of life.",
    options: ["in", "across", "through", "throughout"],
    correct: 1
  },
  {
    id: 29,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 29,
    question: "Many researchers now (29)___ that emotional intelligence may predict long-term success better than cognitive ability.",
    options: ["suggest", "argue", "maintain", "all of the above"],
    correct: 3
  },
  {
    id: 30,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 30,
    question: "The practical (30)___ of this research is clear: investing in self-awareness leads to sustained excellence.",
    options: ["conclusion", "implication", "lesson", "all of the above"],
    correct: 3
  }
];

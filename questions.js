// 30-question EVІ-style test with Hero Reading on Daniel Negreanu

const STORY_TEXT = `There are poker players who simply follow the math, and then there are those who seem to see directly into your soul. Daniel Negreanu belongs firmly in the second category. When I think about a person whose mindset I admire, it is not a traditional scientist or athlete, but a man sitting at the felt, calmly counting chips and reading faces.

Negreanu’s story does not begin under the bright lights of Las Vegas, but in small, smoky backrooms of Toronto, where underground games ran until sunrise. As a teenager, Daniel skipped classes not out of laziness, but because he was obsessed with understanding how people think when money and ego are on the line. Those early games were chaotic and risky, yet this is where he built the foundation of his success — by watching, listening and decoding every tiny hesitation and nervous smile.

What fascinates me most about Negreanu is his almost supernatural ability to “read” opponents. He does not rely only on the cards or the odds; he reads the story that a person tells with their body language, their betting patterns, even the way they breathe. Time after time, he calmly predicts an opponent’s exact hand, turning the cards face up just to prove his point. That is not luck. That is a lifetime of disciplined observation combined with remarkable emotional intelligence.

Behind this magic is cold, precise mathematics. Negreanu calculates risk in real time: the size of the pot, the probability of each possible hand, the expected value of every decision. He is not a gambler in the romantic sense — he is an investor in information. Every chip he pushes forward is a carefully measured bet on what he believes another human being is capable of doing under pressure.

What I admire even more is his psychological resilience. Poker is a brutal game. You can make the correct decision and still lose everything because of one unfortunate card on the river. Negreanu has faced huge losses and painful downswings on the biggest stages, yet he returns to the table with the same calm smile and focused eyes. He accepts that variance and stress are part of the job — and chooses discipline over drama.

His path from underground rooms in Toronto to the most prestigious tournaments in the world is not just a story about money. It is a story about growth. Along the way, he learned to manage his ego, control his emotions, and treat opponents with respect, even when millions of dollars were at stake. Today, he is known not only as a legend of poker, but also as a mentor who openly shares his thought process so that others can learn.

Daniel Negreanu inspires me because he proves that true mastery lives where psychology, mathematics and self-control meet. He shows that success is not about being fearless, but about understanding your fears and making clear decisions despite them. In a world full of noise and emotion, his ability to stay calm, analyse risk and read people so deeply is the kind of superpower I dream of developing in my own life.`;

const ACADEMIC_TEXT = `The relationship between academic pressure and student mental health has become one of the most urgent concerns in higher education today. Research consistently shows that university students face significantly higher rates of anxiety and depression compared to their non-student peers of the same age.

A key contributing factor is the transition from secondary school, where students are guided step by step, to university, where self-direction becomes essential. Many students arrive at university expecting the same structured environment they experienced before and are unprepared for the independence that higher education demands.

Furthermore, the pressure to perform well in competitive graduate admission processes — such as standardised entrance examinations — adds considerable psychological weight to students who are already managing heavy coursework. These exams often require months of dedicated preparation alongside regular academic obligations.

Institutions are increasingly responding by expanding access to mental health services, peer support networks, and academic counselling. However, experts argue that these measures treat symptoms rather than causes. A more fundamental shift is needed: one that values student wellbeing as part of educational success, not in opposition to it.`;

const GAPFILL_TEXT_1 = `Modern universities are increasingly expected to produce graduates who are not only knowledgeable in their fields but also equipped (1)___ a wide range of transferable skills. Critical thinking, communication, and the ability to work effectively in teams are now (2)___ as essential as subject-specific expertise. Employers frequently (3)___ that new graduates lack practical skills despite holding strong academic credentials. In response, many institutions have begun to (4)___ work placement programmes and project-based learning (5)___ their core curriculum. These changes reflect a broader recognition that the (6)___ of higher education extends well beyond the lecture hall.`;

const GAPFILL_TEXT_2 = `Learning a foreign language as an adult is often described as one of the most rewarding yet (7)___ pursuits a person can (8)___. Unlike children, who acquire language through natural immersion, adults must (9)___ on deliberate study and consistent practice. Research (10)___ that motivation plays a critical role in determining success: those who have clear, personal reasons for learning a language tend to make (11)___ faster progress than those studying out of obligation. Regular exposure to authentic materials — films, podcasts, and conversations with (12)___ speakers — has been shown to accelerate vocabulary acquisition and improve overall (13)___ significantly. The key, most experts (14)___, is not perfect grammar but confident, consistent use.`;

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
    question: "What combination best explains Negreanu’s famous ability to “read” opponents?",
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
    question: "In the text, which aspect of Negreanu’s approach is linked directly to mathematics?",
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
    question: "What does the author suggest about Negreanu’s attitude to stress and downswings in poker?",
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
    question: "Which lesson does the author say Negreanu’s story teaches about real success?",
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
    instruction: "The text below has several paragraphs. Match each paragraph with the most suitable heading.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the first paragraph about mental health and academic pressure?",
    options: [
      "The hidden cost of high expectations",
      "From dependence to self-reliance",
      "Testing under pressure",
      "Treating symptoms, not causes"
    ],
    correct: 0
  },
  {
    id: 7,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Match paragraphs with headings.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the paragraph describing the move from school to self-directed university learning?",
    options: [
      "The hidden cost of high expectations",
      "From dependence to self-reliance",
      "Testing under pressure",
      "Treating symptoms, not causes"
    ],
    correct: 1
  },
  {
    id: 8,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Match paragraphs with headings.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the paragraph about graduate entrance exams and psychological weight?",
    options: [
      "The hidden cost of high expectations",
      "From dependence to self-reliance",
      "Testing under pressure",
      "Treating symptoms, not causes"
    ],
    correct: 2
  },
  {
    id: 9,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Match paragraphs with headings.",
    text: ACADEMIC_TEXT,
    question: "Which heading best matches the paragraph about universities expanding support without changing the system itself?",
    options: [
      "The hidden cost of high expectations",
      "From dependence to self-reliance",
      "Testing under pressure",
      "Treating symptoms, not causes"
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
    question: "Which paragraph mentions that standardised entrance exams require months of preparation alongside regular studies?",
    options: [
      "Paragraph 1",
      "Paragraph 2",
      "Paragraph 3",
      "Paragraph 4"
    ],
    correct: 2
  },
  {
    id: 11,
    section: "B",
    sectionTitle: "Matching — Academic Text",
    type: "matching",
    instruction: "Choose the correct paragraph.",
    text: ACADEMIC_TEXT,
    question: "Which paragraph suggests that current solutions deal more with consequences than root causes?",
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
    question: "Choose the correct word to complete the sentence:\n\nThe committee decided to _______ the decision until more evidence was available.",
    options: [
      "postpone",
      "cancel",
      "prevent",
      "avoid"
    ],
    correct: 0
  },
  {
    id: 13,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the correct form:\n\nBy the time she arrives, we _______ for three hours.",
    options: [
      "will wait",
      "are waiting",
      "will have been waiting",
      "have waited"
    ],
    correct: 2
  },
  {
    id: 14,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the word that does NOT collocate with 'research':",
    options: [
      "conduct research",
      "carry out research",
      "do research",
      "make a research"
    ],
    correct: 3
  },
  {
    id: 15,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the correct preposition:\n\nThe study was based _______ data collected over five years.",
    options: [
      "in",
      "at",
      "on",
      "for"
    ],
    correct: 2
  },
  {
    id: 16,
    section: "C",
    sectionTitle: "Grammar & Vocabulary",
    type: "multiple_choice",
    question: "Choose the option that best replaces the underlined word:\n\nThe results were 'ambiguous' and required further interpretation.",
    options: [
      "clear and definitive",
      "open to more than one interpretation",
      "completely incorrect",
      "widely accepted"
    ],
    correct: 1
  },

  // SECTION D: Gap-Filling 1 (Q17–22)
  {
    id: 17,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 1,
    question: "Modern universities are expected to produce graduates equipped (1)___ a wide range of skills.",
    options: ["for", "with", "by", "to"],
    correct: 1
  },
  {
    id: 18,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 2,
    question: "Critical thinking and communication are now (2)___ as essential as expertise.",
    options: ["regarded", "looked", "seen", "A & C are both correct"],
    correct: 3
  },
  {
    id: 19,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 3,
    question: "Employers frequently (3)___ that new graduates lack practical skills.",
    options: ["complain", "argue", "suggest", "A & B are both correct"],
    correct: 3
  },
  {
    id: 20,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 4,
    question: "Many institutions have begun to (4)___ work placement programmes.",
    options: ["introduce", "integrate", "add", "include"],
    correct: 1
  },
  {
    id: 21,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 5,
    question: "Project-based learning has been integrated (5)___ the core curriculum.",
    options: ["in", "on", "into", "within"],
    correct: 2
  },
  {
    id: 22,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_1,
    gapNumber: 6,
    question: "These changes reflect recognition that the (6)___ of higher education extends beyond the lecture hall.",
    options: ["aim", "purpose", "value", "B & C are both correct"],
    correct: 3
  },

  // SECTION D: Gap-Filling 2 (Q23–30)
  {
    id: 23,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 7,
    question: "Language learning is described as one of the most rewarding yet (7)___ pursuits.",
    options: ["challenging", "difficult", "demanding", "A & C are both correct"],
    correct: 3
  },
  {
    id: 24,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 8,
    question: "It is one of the most rewarding pursuits a person can (8)___.",
    options: ["make", "do", "undertake", "try"],
    correct: 2
  },
  {
    id: 25,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 9,
    question: "Unlike children, adults must (9)___ on deliberate study.",
    options: ["rely", "depend", "count", "A & B are both correct"],
    correct: 3
  },
  {
    id: 26,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 10,
    question: "Research (10)___ that motivation plays a critical role.",
    options: ["shows", "suggests", "indicates", "all of the above"],
    correct: 3
  },
  {
    id: 27,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 11,
    question: "Those with personal reasons tend to make (11)___ faster progress.",
    options: ["considerably", "significantly", "notably", "A & B are both correct"],
    correct: 3
  },
  {
    id: 28,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 12,
    question: "Conversations with (12)___ speakers accelerate vocabulary acquisition.",
    options: ["native", "fluent", "proficient", "experienced"],
    correct: 0
  },
  {
    id: 29,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 13,
    question: "Exposure to authentic materials improves overall (13)___ significantly.",
    options: ["fluency", "competence", "proficiency", "B & C are both correct"],
    correct: 3
  },
  {
    id: 30,
    section: "D",
    sectionTitle: "Gap-Filling",
    type: "gap_fill",
    textDisplay: GAPFILL_TEXT_2,
    gapNumber: 14,
    question: "The key, most experts (14)___, is not perfect grammar but confident use.",
    options: ["argue", "agree", "insist", "suggest"],
    correct: 1
  }
];


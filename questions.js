// EVI-Style English Test — Daniel Negreanu Edition

/* ─── TASK 1: Matching Headings ─── */

const STORY_TEXT = `1. Long before Daniel Negreanu's name appeared on tournament broadcast screens in Las Vegas, he was earning his craft in the underground card rooms of Toronto. As a teenager, he skipped school to play in games that ran through the night, studying every player who sat down across from him. These were not glamorous settings — smoky basements and back rooms where mistakes carried a real cost. Yet for Negreanu, this was his classroom: the place where he first understood that the psychology of a player mattered as much as the strength of their cards.

2. In time, Negreanu developed a skill that professional players struggle to explain: the ability to read opponents with near-impossible accuracy. Seated across from a stranger, he watches the way they breathe when they raise, the brief hesitation before a call, the micro-expressions that pass across a face in a fraction of a second. This is not a party trick. It is a deep, disciplined understanding of human behaviour under pressure — refined over thousands of hours at the table.

3. Behind every intuitive move lies cold, precise mathematics. Negreanu calculates pot odds, hand probabilities and expected value in real time, and does so while appearing completely relaxed. He does not think of himself as a gambler in the traditional sense. Instead, he approaches each decision as a calculated investment: a bet made under uncertainty, using incomplete information, with the discipline of someone who knows that sound process matters more than any individual result.

4. What truly separates Negreanu from simply talented players is his capacity to recover. In 2020, he accepted a heads-up challenge against online specialist Doug Polk and lost more than $1.2 million over 25,000 hands. For many players, such a defeat would be career-defining in the worst sense. For Negreanu, it was material — a painful but valuable source of information about the gaps in his game. He returned, studied, and continued competing at the highest level.

5. In recent years, Negreanu has invested as much energy in developing other players as in pursuing his own titles. He coaches individuals online, produces educational video content, and speaks openly about the psychological pressures of professional competition. His six World Series of Poker bracelets and two Player of the Year titles are significant achievements, but many in the poker world believe his greatest contribution will ultimately be the players he has shaped and inspired.`;

/* ─── TASK 2: Multiple Choice ─── */

const TASK2_TEXT = `From Toronto to the World Stage

Daniel Negreanu turned professional in the late 1990s, relocating from Toronto to Las Vegas with modest savings and an enormous appetite for competition. For the first few years, progress was slow and financial pressure was constant. The transition from underground cash games — where stakes were modest and opponents predictable — to the televised tournament circuit required significant adaptation. Negreanu studied relentlessly, seeking out stronger competition and forcing himself to confront weaknesses he would have preferred to ignore.

His breakthrough arrived at the 2004 World Series of Poker, when he won two bracelets in a single calendar year — a rare achievement that placed him among the elite of the game. Card Player Magazine named him Player of the Year, an award he has subsequently earned six times, a record in the sport. Over the following decade, he accumulated a further four WSOP bracelets across multiple disciplines, demonstrating that his success was not confined to a single format.

Negreanu's playing philosophy centres on a strategy he calls "small ball" — making smaller, more frequent bets and calls rather than committing large sums early. This approach is designed to keep pots manageable and extract maximum information from opponents before committing significant chips. It is a style that rewards patience and observation over aggression, and critics who have dismissed it as passive have found it considerably more difficult to exploit in practice than in theory.

Despite a painful and public loss to online specialist Doug Polk in 2020, Negreanu has remained one of the most prominent figures in professional poker. He has embraced digital platforms, building a large following on social media and YouTube, where he discusses hand histories and strategy in accessible terms. For a generation of players who learned the game online rather than in physical card rooms, Negreanu represents a bridge between two very different eras of the sport.`;

/* ─── TASK 3: Vocabulary ─── */

const VOCAB_TEXT = `The Psychology of the Perfect Poker Player

Competitive poker at the highest level demands far more than an (11)___ understanding of the rules and card probabilities. Players like Daniel Negreanu have demonstrated that genuine mastery requires the ability to (12)___ emotional signals in real time — reading hesitation, aggression, and false confidence as reliably as most people read text. This capacity for observation is not (13)___; it develops gradually through thousands of hours of deliberate exposure to high-pressure situations.

Negreanu's (14)___ in the poker world rests on his extraordinary talent for predicting opponents' hands before the cards are revealed. He has made this skill a signature element of his game, frequently (15)___ his prediction aloud at the table. Critics have occasionally dismissed such behaviour as performance, but the regularity and (16)___ of his predictions have made that argument difficult to sustain over time.

What makes elite-level players like Negreanu so difficult to (17)___ is their ability to combine mathematical precision with psychological adaptability. Where lesser players become (18)___ by a bad run of cards, Negreanu treats short-term variance as an unavoidable feature of the game rather than a personal attack. This emotional (19)___ allows him to maintain consistent decision quality even in deeply unfavourable circumstances. The result is a player who, even in defeat, (20)___ valuable information for future encounters.`;

/* ─── TASK 4: Grammar ─── */

const GRAMMAR_TEXT = `A Legacy Written at the Table

Daniel Negreanu (21)___ professional poker since the late 1990s, and in that time he (22)___ one of the most decorated players in the history of the World Series of Poker. Born in Toronto to Romanian immigrant parents, he (23)___ in a city with a thriving underground card scene, which gave him access to high-quality competition long before he turned professional.

His success has not (24)___ without personal cost. In 2020, he accepted a challenge from online specialist Doug Polk, (25)___ had been a vocal critic of his game for several years. By the end of the 25,000-hand match, Negreanu (26)___ over $1.2 million — a loss that was documented publicly and discussed widely across the poker community. Had he (27)___ the match, it would have confirmed his dominance across both live and online formats. Instead, the defeat exposed weaknesses that he subsequently worked hard to address.

Despite this setback, Negreanu's standing in the game (28)___ largely intact. He avoided (29)___ the media's attention and focused entirely on rebuilding his game. His six World Series of Poker bracelets — won across multiple formats and decades — (30)___ a career of extraordinary consistency and adaptability.`;

/* ─── Headings A–H shared across Task 1 ─── */

const HEADINGS = [
  "A — Finding strength after a costly defeat",
  "B — The numbers that drive every decision",
  "C — An educator as much as a champion",
  "D — A classroom without walls or teachers",
  "E — Seeing what others cannot see",
  "F — Mastering the art of the bluff",
  "G — Earning respect through charitable work",
  "H — Rising to fame through television exposure"
];

const questions = [

  // ═══ TASK 1: Matching Headings (Q1–5) ═══
  {
    id: 1,
    section: "A",
    sectionTitle: "Task 1 — Matching Headings",
    type: "matching_headings",
    text: STORY_TEXT,
    instruction: "Read the text. Match each paragraph (1–5) to the most suitable heading (A–H). There are three headings you do NOT need to use.",
    question: "Which heading (A–H) best matches Paragraph 1?",
    options: HEADINGS,
    correct: 3
  },
  {
    id: 2,
    section: "A",
    sectionTitle: "Task 1 — Matching Headings",
    type: "matching_headings",
    text: STORY_TEXT,
    instruction: "Match each paragraph (1–5) to the most suitable heading (A–H). There are three headings you do NOT need to use.",
    question: "Which heading (A–H) best matches Paragraph 2?",
    options: HEADINGS,
    correct: 4
  },
  {
    id: 3,
    section: "A",
    sectionTitle: "Task 1 — Matching Headings",
    type: "matching_headings",
    text: STORY_TEXT,
    instruction: "Match each paragraph (1–5) to the most suitable heading (A–H). There are three headings you do NOT need to use.",
    question: "Which heading (A–H) best matches Paragraph 3?",
    options: HEADINGS,
    correct: 1
  },
  {
    id: 4,
    section: "A",
    sectionTitle: "Task 1 — Matching Headings",
    type: "matching_headings",
    text: STORY_TEXT,
    instruction: "Match each paragraph (1–5) to the most suitable heading (A–H). There are three headings you do NOT need to use.",
    question: "Which heading (A–H) best matches Paragraph 4?",
    options: HEADINGS,
    correct: 0
  },
  {
    id: 5,
    section: "A",
    sectionTitle: "Task 1 — Matching Headings",
    type: "matching_headings",
    text: STORY_TEXT,
    instruction: "Match each paragraph (1–5) to the most suitable heading (A–H). There are three headings you do NOT need to use.",
    question: "Which heading (A–H) best matches Paragraph 5?",
    options: HEADINGS,
    correct: 2
  },

  // ═══ TASK 2: Multiple Choice (Q6–10) ═══
  {
    id: 6,
    section: "B",
    sectionTitle: "Task 2 — Multiple Choice",
    type: "reading",
    text: TASK2_TEXT,
    question: "What difficulty did Negreanu face when he first moved to Las Vegas?",
    options: [
      "He was unable to obtain a professional competition licence.",
      "He lacked the financial backing to enter major tournaments.",
      "He had to adapt from underground cash games to the tournament circuit.",
      "He struggled because he had no formal coaching or training."
    ],
    correct: 2
  },
  {
    id: 7,
    section: "B",
    sectionTitle: "Task 2 — Multiple Choice",
    type: "reading",
    text: TASK2_TEXT,
    question: "According to the text, what made Negreanu's 2004 World Series performance particularly notable?",
    options: [
      "He won the Main Event for the first time in his career.",
      "He earned two WSOP bracelets in the same calendar year.",
      "He was officially sponsored by Card Player Magazine.",
      "He defeated Doug Polk in a high-profile heads-up match."
    ],
    correct: 1
  },
  {
    id: 8,
    section: "B",
    sectionTitle: "Task 2 — Multiple Choice",
    type: "reading",
    text: TASK2_TEXT,
    question: "What is the main principle behind Negreanu's 'small ball' strategy?",
    options: [
      "Placing large bets early to intimidate opponents into folding.",
      "Avoiding all high-risk situations in order to preserve chips.",
      "Gathering information through smaller, more frequent bets and calls.",
      "Specialising in a single format to maximise win rate."
    ],
    correct: 2
  },
  {
    id: 9,
    section: "B",
    sectionTitle: "Task 2 — Multiple Choice",
    type: "reading",
    text: TASK2_TEXT,
    question: "What role does the text say Negreanu plays for younger players?",
    options: [
      "He runs a certified poker school with formal qualifications.",
      "He connects the era of live poker with the era of online play.",
      "He sponsors emerging players through his personal foundation.",
      "He organises charity tournaments to fund young professionals."
    ],
    correct: 1
  },
  {
    id: 10,
    section: "B",
    sectionTitle: "Task 2 — Multiple Choice",
    type: "reading",
    text: TASK2_TEXT,
    question: "Which of the following best describes the main theme of the text?",
    options: [
      "Negreanu's transition from amateur to professional and his lasting influence.",
      "The controversy surrounding Negreanu's unconventional playing style.",
      "Why underground poker produces better players than tournament circuits.",
      "How social media permanently changed professional poker competition."
    ],
    correct: 0
  },

  // ═══ TASK 3: Vocabulary (Q11–20) ═══
  {
    id: 11,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 11,
    question: "Competitive poker demands far more than an (11)___ understanding of the rules and card probabilities.",
    options: ["adequate", "excellent", "expert", "instinctive"],
    correct: 0
  },
  {
    id: 12,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 12,
    question: "Genuine mastery requires the ability to (12)___ emotional signals in real time.",
    options: ["produce", "ignore", "interpret", "broadcast"],
    correct: 2
  },
  {
    id: 13,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 13,
    question: "This capacity for observation is not (13)___; it develops gradually through deliberate exposure.",
    options: ["trained", "instinctive", "reliable", "transferable"],
    correct: 1
  },
  {
    id: 14,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 14,
    question: "Negreanu's (14)___ in the poker world rests on his extraordinary talent for predicting opponents' hands.",
    options: ["popularity", "status", "reputation", "authority"],
    correct: 2
  },
  {
    id: 15,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 15,
    question: "He has made this skill a signature element, frequently (15)___ his prediction aloud at the table.",
    options: ["writing", "announcing", "hiding", "confirming"],
    correct: 1
  },
  {
    id: 16,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 16,
    question: "The regularity and (16)___ of his predictions have made any criticism difficult to sustain.",
    options: ["accuracy", "timing", "volume", "frequency"],
    correct: 0
  },
  {
    id: 17,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 17,
    question: "What makes elite-level players like Negreanu so difficult to (17)___ is their combination of skills.",
    options: ["train", "beat", "watch", "analyse"],
    correct: 1
  },
  {
    id: 18,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 18,
    question: "Where lesser players become (18)___ by a bad run of cards, Negreanu treats variance as inevitable.",
    options: ["paralysed", "energised", "discouraged", "confused"],
    correct: 2
  },
  {
    id: 19,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 19,
    question: "This emotional (19)___ allows him to maintain consistent decision quality in unfavourable circumstances.",
    options: ["intelligence", "instability", "resilience", "expression"],
    correct: 2
  },
  {
    id: 20,
    section: "C",
    sectionTitle: "Task 3 — Vocabulary",
    type: "vocab_gap",
    textDisplay: VOCAB_TEXT,
    gapNumber: 20,
    question: "The result is a player who, even in defeat, (20)___ valuable information for future encounters.",
    options: ["rejects", "collects", "invents", "hides"],
    correct: 1
  },

  // ═══ TASK 4: Grammar (Q21–30) ═══
  {
    id: 21,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 21,
    question: "Daniel Negreanu (21)___ professional poker since the late 1990s.",
    options: ["plays", "played", "has played", "was playing"],
    correct: 2
  },
  {
    id: 22,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 22,
    question: "In that time he (22)___ one of the most decorated players in the history of the WSOP.",
    options: ["becomes", "became", "was becoming", "has become"],
    correct: 3
  },
  {
    id: 23,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 23,
    question: "Born in Toronto to Romanian immigrant parents, he (23)___ in a city with a thriving underground card scene.",
    options: ["grew up", "grows up", "has grown up", "was growing"],
    correct: 0
  },
  {
    id: 24,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 24,
    question: "His success has not (24)___ without personal cost.",
    options: ["arrived", "come", "happened", "gone"],
    correct: 1
  },
  {
    id: 25,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 25,
    question: "He accepted a challenge from Doug Polk, (25)___ had been a vocal critic of his game for several years.",
    options: ["that", "whose", "who", "which"],
    correct: 2
  },
  {
    id: 26,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 26,
    question: "By the end of the 25,000-hand match, Negreanu (26)___ over $1.2 million.",
    options: ["lost", "loses", "has lost", "had lost"],
    correct: 3
  },
  {
    id: 27,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 27,
    question: "Had he (27)___ the match, it would have confirmed his dominance across both live and online formats.",
    options: ["win", "won", "have won", "winning"],
    correct: 1
  },
  {
    id: 28,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 28,
    question: "Despite this setback, Negreanu's standing in the game (28)___ largely intact.",
    options: ["remained", "was remaining", "had remained", "remains"],
    correct: 0
  },
  {
    id: 29,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 29,
    question: "He avoided (29)___ the media's attention and focused entirely on rebuilding his game.",
    options: ["to seek", "seeking", "sought", "having sought"],
    correct: 1
  },
  {
    id: 30,
    section: "D",
    sectionTitle: "Task 4 — Grammar",
    type: "grammar_gap",
    textDisplay: GRAMMAR_TEXT,
    gapNumber: 30,
    question: "His six World Series of Poker bracelets — won across multiple formats and decades — (30)___ a career of extraordinary consistency.",
    options: ["represent", "represented", "are representing", "have represented"],
    correct: 0
  }
];

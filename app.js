// ЄВІ Poker Mindset — Daniel Negreanu Edition

const state = {
  current: 0,
  answers: {},
  flagged: new Set(),
  timerSeconds: 45 * 60,
  timerInterval: null,
  started: false,
  finished: false,
  // Text is always shown (no collapse/expand toggle).
};

const $ = id => document.getElementById(id);
const screens = {
  welcome: $('welcome-screen'),
  quiz: $('quiz-screen'),
  results: $('results-screen'),
  review: $('review-screen')
};

// simple glowing chips-style particles
(function initParticles() {
  const canvas = $('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const N = 60;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 8;
      this.r = Math.random() * 1.6 + 0.6;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = -(Math.random() * 0.4 + 0.08);
      this.alpha = Math.random() * 0.5 + 0.15;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -8) this.reset(false);
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < N; i++) particles.push(new Particle());

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })();
})();

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle('active', key === name);
  });
}

function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerUI();
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerUI() {
  const m = Math.floor(state.timerSeconds / 60);
  const s = state.timerSeconds % 60;
  $('timer-display').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  const wrap = $('timer-wrap');
  if (wrap) {
    wrap.classList.remove('warning', 'danger');
    if (state.timerSeconds <= 60) wrap.classList.add('danger');
    else if (state.timerSeconds <= 5 * 60) wrap.classList.add('warning');
  }
}

function renderQuestion(index) {
  const q = questions[index];
  const card = $('question-card');
  card.classList.add('exit-card');
  setTimeout(() => {
    card.classList.remove('exit-card');
    _renderContent(q, index);
  }, 220);
}

function _renderContent(q, index) {
  const progressEl = $('sidebar-progress-text');
  if (progressEl) progressEl.textContent = `${index + 1} / ${questions.length}`;

  $('q-number-badge').textContent = String(index + 1).padStart(2, '0');

  const pill = $('section-pill');
  if (pill) {
    pill.textContent = `Section ${q.section}`;
    pill.className = `sidebar-section pill-${q.section}`;
  }

  const pct = ((index + 1) / questions.length) * 100;
  const progressFill = $('progress-fill');
  if (progressFill) progressFill.style.width = pct + '%';

  const textPanel = $('text-panel');
  const readingTextEl = $('reading-text');

  if (q.text || q.textDisplay) {
    textPanel.classList.remove('hidden');
    readingTextEl.textContent = q.text || q.textDisplay;

    const labelEl = $('text-panel-label');
    if (labelEl) {
      labelEl.textContent =
        q.type === 'gap_fill'
          ? `Текст для заповнення (пропуск ${q.gapNumber})`
          : q.type === 'matching'
            ? 'Текст для зіставлення'
            : 'Hero Reading — Daniel Negreanu';
    }
  } else {
    textPanel.classList.add('hidden');
  }

  $('question-text').textContent = q.question;

  const list = $('options-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.className = 'option-item';
    li.setAttribute('role', 'option');
    li.dataset.idx = i;
    li.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${opt}</span>
    `;
    if (state.answers[index] === i) li.classList.add('selected');
    li.addEventListener('click', () => selectOption(index, i));
    list.appendChild(li);
  });

  const flagBtn = $('btn-flag');
  const isFlagged = state.flagged.has(index);
  flagBtn.classList.toggle('flagged', isFlagged);
  $('flag-label').textContent = isFlagged ? 'Знято' : 'Позначити';

  $('btn-prev').disabled = index === 0;
  const isLast = index === questions.length - 1;
  $('btn-next').style.display = isLast ? 'none' : 'flex';
  $('btn-submit').style.display = isLast ? 'inline-flex' : 'none';
}

function selectOption(qIndex, optIndex) {
  if (state.finished) return;
  state.answers[qIndex] = optIndex;
  const items = $('options-list').querySelectorAll('.option-item');
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === optIndex);
  });
  renderQuestionNav();
}

function renderQuestionNav() {
  const bar = $('question-nav-bar');
  bar.innerHTML = '';
  questions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'qnav-btn';
    btn.textContent = i + 1;
    btn.title = `Питання ${i + 1} (${q.sectionTitle || 'Section ' + q.section})`;

    if (i === state.current) btn.classList.add('qnav-current');
    else if (state.flagged.has(i)) btn.classList.add('qnav-flagged');
    else if (state.answers[i] !== undefined) btn.classList.add('qnav-answered');

    btn.addEventListener('click', () => goTo(i));
    bar.appendChild(btn);
  });
}

function goTo(index) {
  if (index < 0 || index >= questions.length) return;
  state.current = index;
  renderQuestion(index);
  renderQuestionNav();
}

$('btn-flag').addEventListener('click', () => {
  const idx = state.current;
  if (state.flagged.has(idx)) {
    state.flagged.delete(idx);
    $('btn-flag').classList.remove('flagged');
    $('flag-label').textContent = 'Позначити';
  } else {
    state.flagged.add(idx);
    $('btn-flag').classList.add('flagged');
    $('flag-label').textContent = 'Знято';
  }
  renderQuestionNav();
});

$('btn-start').addEventListener('click', () => {
  showScreen('quiz');
  startTimer();
  state.started = true;
  renderQuestion(0);
  renderQuestionNav();
});

$('btn-prev').addEventListener('click', () => goTo(state.current - 1));
$('btn-next').addEventListener('click', () => goTo(state.current + 1));
$('btn-submit').addEventListener('click', finishQuiz);
$('btn-restart').addEventListener('click', restartQuiz);
$('btn-review').addEventListener('click', showReview);
$('btn-back-results').addEventListener('click', () => showScreen('results'));

function finishQuiz() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerInterval);
  computeResults();
  showScreen('results');
}

function computeResults() {
  const sectionTotals = { A: 5, B: 6, C: 5, D: 14 };
  const sectionCorrect = { A: 0, B: 0, C: 0, D: 0 };
  let total = 0;

  questions.forEach((q, i) => {
    if (state.answers[i] === q.correct) {
      total++;
      sectionCorrect[q.section]++;
    }
  });

  $('results-score').textContent = total;

  const pct = total / questions.length;
  let title, subtitle;
  if (pct >= 0.9) {
    title = 'Відмінно!';
    subtitle = 'Ти читаєш людей майже як Daniel Negreanu.';
  } else if (pct >= 0.7) {
    title = 'Добре!';
    subtitle = 'Міцний результат. Ще трохи практики — і ти легенда покеру ЄВІ.';
  } else if (pct >= 0.5) {
    title = 'Непогано';
    subtitle = 'Є база. Підкачай стратегію та уважність до деталей.';
  } else {
    title = 'Не здавайся';
    subtitle = 'Навіть найкращі програють банки. Важливо продовжувати гру.';
  }
  $('results-title').textContent = title;
  $('results-subtitle').textContent = subtitle;

  const converted = Math.round(100 + pct * 100);
  $('converted-score').textContent = converted;

  const secIds = {
    A: ['score-a', 'bar-a'],
    B: ['score-b', 'bar-b'],
    C: ['score-c', 'bar-c'],
    D: ['score-d', 'bar-d']
  };
  Object.entries(sectionCorrect).forEach(([sec, correct]) => {
    const totalSec = sectionTotals[sec];
    const [scoreId, barId] = secIds[sec];
    $(scoreId).textContent = `${correct} / ${totalSec}`;
    setTimeout(() => {
      $(barId).style.width = ((correct / totalSec) * 100) + '%';
    }, 100);
  });

  if (pct >= 0.7) launchConfetti();
}

function launchConfetti() {
  const canvas = $('confetti-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const colors = ['#C9A84C', '#E8C96A', '#7EB8D4', '#8FBE8A', '#C98A8A'];
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -Math.random() * canvas.height * 0.5,
    w: Math.random() * 10 + 4,
    h: Math.random() * 5 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 3,
    vy: Math.random() * 4 + 2,
    rot: Math.random() * Math.PI * 2,
    vrot: (Math.random() - 0.5) * 0.12,
    alpha: 1
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vrot;
      if (frame > 120) p.alpha = Math.max(0, p.alpha - 0.008);
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 240) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function showReview() {
  const list = $('review-list');
  list.innerHTML = '';

  questions.forEach((q, i) => {
    const answered = state.answers[i] !== undefined;
    const isCorrect = answered && state.answers[i] === q.correct;
    const isFlagged = state.flagged.has(i);

    const item = document.createElement('div');
    item.className = 'review-item ' +
      (isFlagged && !answered ? 'r-flagged' :
        !answered ? 'r-skipped' :
          isCorrect ? 'r-correct' : 'r-incorrect');

    const letters = ['A', 'B', 'C', 'D'];
    const yourAnswer = answered ? letters[state.answers[i]] : '—';
    const rightAnswer = letters[q.correct];

    item.innerHTML = `
      <span class="review-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="review-q">
        <strong>${q.sectionTitle}</strong>
        ${q.question.length > 100 ? q.question.substring(0, 100) + '…' : q.question}
      </div>
      <span class="review-result">
        ${!answered ? 'Пропущено' : isCorrect ? `✓ ${yourAnswer}` : `✗ ${yourAnswer} (→${rightAnswer})`}
        ${isFlagged ? ' ⚑' : ''}
      </span>
    `;
    list.appendChild(item);
  });

  showScreen('review');
}

function restartQuiz() {
  state.current = 0;
  state.answers = {};
  state.flagged = new Set();
  state.timerSeconds = 45 * 60;
  state.started = false;
  state.finished = false;
  clearInterval(state.timerInterval);
  updateTimerUI();
  showScreen('welcome');
}


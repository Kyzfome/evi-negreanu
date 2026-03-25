/**
 * Builds a printable PDF with all items, every option, and the correct answer.
 * Labels are in English so built-in Helvetica covers all glyphs; task text stays as in `questions.js`.
 */
function exportFullTestToPdf() {
  const JsPDF = typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF ? window.jspdf.jsPDF : null;
  if (!JsPDF) {
    alert('Не знайдено файл vendor/jspdf.umd.min.js. Переконайтеся, що папка vendor є поруч із index.html.');
    return;
  }
  if (typeof questions === 'undefined' || !questions.length) {
    alert('Питання ще не завантажені.');
    return;
  }

  const doc = new JsPDF({ unit: 'mm', format: 'a4', compress: true });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 14;
  const maxW = pageW - 2 * margin;
  let y = margin;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lineHeight = fs => fs * 0.42;

  function pageBreakIf(needMm) {
    if (y + needMm > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  }

  function writeParagraph(text, fontSize, fontStyle) {
    doc.setFont('helvetica', fontStyle || 'normal');
    doc.setFontSize(fontSize);
    const lh = lineHeight(fontSize);
    const lines = doc.splitTextToSize(String(text).replace(/\r\n/g, '\n'), maxW);
    pageBreakIf(lines.length * lh + 3);
    lines.forEach(line => {
      pageBreakIf(lh + 1);
      doc.text(line, margin, y);
      y += lh;
    });
    y += 1.8;
  }

  writeParagraph('EVI-style practice test — Answer key', 15, 'bold');
  writeParagraph(
    `Daniel Negreanu edition · ${questions.length} questions · generated ${new Date().toISOString().slice(0, 10)}`,
    9,
    'normal'
  );
  y += 2;

  let lastPassage = null;
  questions.forEach((q, idx) => {
    const passage = q.text || q.textDisplay || '';
    if (passage && passage !== lastPassage) {
      lastPassage = passage;
      writeParagraph('Reading / reference passage', 10, 'bold');
      writeParagraph(passage, 8, 'normal');
      y += 1.5;
    }

    if (q.instruction) writeParagraph(q.instruction, 8, 'italic');

    writeParagraph(`Question ${idx + 1}  [Section ${q.section}] — ${q.sectionTitle}`, 10, 'bold');
    writeParagraph(q.question, 9, 'normal');
    writeParagraph('Options:', 9, 'bold');

    q.options.forEach((opt, i) => {
      writeParagraph(`${letters[i]}) ${opt}`, 8, 'normal');
    });

    const keyLetter = letters[q.correct];
    const keyBody = q.options[q.correct] != null ? q.options[q.correct] : '—';
    writeParagraph(`Correct answer: ${keyLetter} — ${keyBody}`, 9, 'bold');
    y += 3;
  });

  const fname = `evi-negreanu-test-answer-key-${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(fname);
}

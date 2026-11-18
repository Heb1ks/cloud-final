'use strict';

const { modules, questions, quickReview } = window.CLOUD_CONTENT;
const moduleById = new Map(modules.map(module => [module.id, module]));
const questionById = new Map(questions.map(question => [question.id, question]));
const courseNames = ['Foundations', 'Developing'];
const main = document.querySelector('#main');
const letters = 'ABCD';
const storageKey = 'cloud-final-study-v1';
let storageAvailable = true;
let state = loadState();

function loadState() {
  const initial = { reviewed: {}, answers: {}, lastModule: null, session: null };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || typeof saved !== 'object') return initial;
    const session = saved.session;
    const validSession = Array.isArray(session?.ids) && session.ids.length > 0 &&
      session.ids.every(id => questionById.has(id)) && Number.isInteger(session.index) &&
      session.index >= 0 && session.index <= session.ids.length && session.replies && typeof session.replies === 'object';
    return {
      reviewed: saved.reviewed && typeof saved.reviewed === 'object' ? saved.reviewed : {},
      answers: saved.answers && typeof saved.answers === 'object' ? saved.answers : {},
      lastModule: moduleById.has(saved.lastModule) ? saved.lastModule : null,
      session: validSession ? session : null,
    };
  } catch {
    return initial;
  }
}

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    storageAvailable = false;
  }
  if (!storageAvailable) document.querySelector('#storage-notice').textContent = 'Прогресс доступен до закрытия вкладки';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function reading(html) {
  return html.replace(/<table>[\s\S]*?<\/table>/g, table => `<div class="table-scroll" tabindex="0" role="region" aria-label="Таблица">${table}</div>`)
    .replace(/<a href="https:\/\//g, '<a target="_blank" rel="noopener" href="https://');
}

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function errors() {
  return questions.filter(question => state.answers[question.id] && state.answers[question.id] !== question.answer);
}

function route() {
  const [page, id] = location.hash.slice(1).split('/');
  return { page, id };
}

function go(hash) {
  if (location.hash === hash) render(true);
  else location.hash = hash;
}

function updateNav(current) {
  for (const link of document.querySelectorAll('[data-nav]')) {
    if (link.dataset.nav === current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
}

const moduleSearch = new Map(modules.map(module => {
  const template = document.createElement('template');
  template.innerHTML = module.html;
  return [module.id, `${module.id} ${module.course} ${module.title} ${module.terms} ${template.content.textContent}`.toLowerCase()];
}));

function renderCatalog(query = '') {
  const catalog = document.querySelector('#catalog');
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const matches = modules.filter(module => words.every(word => moduleSearch.get(module.id).includes(word)));
  document.querySelector('#search-count').textContent = words.length ? `Найдено модулей: ${matches.length}` : '';
  catalog.innerHTML = courseNames.map(course => {
    const entries = matches.filter(module => module.course === course);
    if (!entries.length) return '';
    const courseModules = modules.filter(module => module.course === course);
    const count = courseModules.filter(module => state.reviewed[module.id]).length;
    return `<section class="course ${course.toLowerCase()}">
      <div class="course-title"><h3>Cloud ${course}</h3><span class="small">${count} из ${courseModules.length} повторено</span></div>
      <div class="course-grid">${entries.map(module => `<a class="module-card" href="#study/${module.id}">
        <span class="module-number">${module.id}</span>
        <span><span class="module-name">${module.title}</span><span class="module-terms">${module.terms}</span></span>
        <span class="module-arrow" aria-hidden="true">${state.reviewed[module.id] ? '✓' : '↗'}</span>
        ${state.reviewed[module.id] ? '<span class="sr-only">Повторено</span>' : ''}
      </a>`).join('')}</div>
    </section>`;
  }).join('') || '<p class="helper">Модули не найдены. Попробуй другое название сервиса или термина.</p>';
}

function showHome() {
  const reviewed = modules.filter(module => state.reviewed[module.id]).length;
  const answered = questions.filter(question => state.answers[question.id]).length;
  const next = moduleById.get(state.lastModule) || modules[0];
  main.innerHTML = `
    <section class="hero">
      <div class="hero-text">
        <p class="eyebrow">AWS Academy · Final Review</p>
        <h1>Подготовка к Cloud Computing Final</h1>
        <p>Повтори темы Cloud Foundations и Cloud Developing, затем проверь себя на вопросах по лекциям.</p>
        <div class="actions">
          <button class="btn primary" id="mixed">Смешанный тест <span aria-hidden="true">↗</span></button>
          <a class="btn secondary" href="#study/${next.id}">${state.lastModule ? `Продолжить с ${next.id}` : 'Открыть первый модуль'}</a>
        </div>
      </div>
    </section>
    <div class="overview" aria-label="Твой прогресс">
      <div class="stat"><div class="stat-value">${reviewed} / ${modules.length}</div><div class="stat-label">Модулей повторено</div></div>
      <div class="stat"><div class="stat-value">${answered} / ${questions.length}</div><div class="stat-label">Вопросов решено</div></div>
      <div class="stat"><div class="stat-value">${errors().length}</div><div class="stat-label">Ошибок к повторению</div></div>
    </div>
    <section aria-labelledby="topics-heading">
      <div class="section-head">
        <div><p class="eyebrow">Материалы курса</p><h2 id="topics-heading">Темы по модулям</h2></div>
        <label class="search"><span class="sr-only">Поиск по модулям</span><input id="topic-search" type="search" placeholder="Поиск: IAM, RCU, CloudWatch…"></label>
      </div>
      <p id="search-count" class="small" aria-live="polite"></p>
      <div id="catalog"></div>
    </section>`;
  renderCatalog();
  document.querySelector('#topic-search').addEventListener('input', event => renderCatalog(event.target.value));
  document.querySelector('#mixed').addEventListener('click', () => go('#practice'));
}

function showModule(module) {
  state.lastModule = module.id;
  save();
  const next = modules[modules.indexOf(module) + 1];
  const count = questions.filter(question => question.module === module.id).length;
  main.innerHTML = `<a class="back" href="#home">← Все темы</a>
    <div class="study-layout">
      <nav class="study-nav" aria-label="Модули курса"><p>Cloud ${module.course}</p><ul>${modules.filter(m => m.course === module.course).map(m =>
        `<li><a href="#study/${m.id}" ${m.id === module.id ? 'aria-current="page"' : ''}><strong>${m.id}</strong><span>${m.title}</span></a></li>`).join('')}</ul></nav>
      <article class="${module.course.toLowerCase()}">
        <div class="study-intro">
          <p class="eyebrow">Cloud ${module.course} / Модуль ${module.number}</p>
          <h1>${module.title}</h1><p class="helper">${module.terms}</p>
          <div class="actions"><a class="btn primary" href="#practice/${module.id}">Тест по теме · ${count} вопр.</a>${module.academy ? `<a class="btn" href="${module.academy}" target="_blank" rel="noopener">Knowledge Check ↗</a>` : ''}</div>
        </div>
        <div class="reading">${reading(module.html)}</div>
        <div class="study-end">
          <div class="actions">
            <button id="reviewed" class="btn" aria-pressed="${Boolean(state.reviewed[module.id])}">${state.reviewed[module.id] ? '✓ Тема повторена' : 'Отметить как повторённую'}</button>
            <a class="btn primary" href="#practice/${module.id}">Тест по теме</a>
            ${next ? `<a class="btn" href="#study/${next.id}">Следующий модуль →</a>` : ''}
          </div>
        </div>
      </article>
    </div>`;
  document.querySelector('#reviewed').addEventListener('click', event => {
    state.reviewed[module.id] = !state.reviewed[module.id];
    save();
    event.currentTarget.setAttribute('aria-pressed', String(state.reviewed[module.id]));
    event.currentTarget.textContent = state.reviewed[module.id] ? '✓ Тема повторена' : 'Отметить как повторённую';
  });
}

function poolFor(scope) {
  if (scope === 'errors') return errors();
  if (scope === 'all') return questions;
  if (courseNames.includes(scope)) return questions.filter(question => moduleById.get(question.module).course === scope);
  return questions.filter(question => question.module === scope);
}

function chooseQuestions(pool, count) {
  const byModule = new Map();
  for (const question of shuffled(pool)) {
    if (!byModule.has(question.module)) byModule.set(question.module, []);
    byModule.get(question.module).push(question);
  }
  const first = shuffled([...byModule.values()].map(group => group.shift()));
  return [...first, ...shuffled([...byModule.values()].flat())].slice(0, count);
}

function startQuiz(items, title) {
  if (!items.length) return;
  state.session = { title, ids: items.map(question => question.id), index: 0, replies: {} };
  save();
  go('#quiz');
}

function showPractice(preselected) {
  const previous = state.session;
  const canResume = previous && previous.index < previous.ids.length;
  main.innerHTML = `<div class="quiz-frame">
    <div class="page-heading"><p class="eyebrow">Практика по лекциям</p><h1>Тесты</h1>
    <p class="helper">Выбери курс или модуль. Вопросы на английском, разбор на русском появляется после каждого ответа.</p></div>
    ${canResume ? `<div class="notice"><span>Тест в процессе · ${Object.keys(previous.replies).length} из ${previous.ids.length} отвечено</span><a class="btn" href="#quiz">Продолжить</a></div>` : previous ? '<div class="notice"><span>Последний тест завершён</span><a class="btn" href="#quiz">Посмотреть результат</a></div>' : ''}
    <form class="config" id="quiz-settings">
      <div class="field"><label for="scope">Темы</label><select id="scope">
        <option value="all">Все модули · смешанный тест</option>
        <option value="Foundations">Cloud Foundations</option>
        <option value="Developing">Cloud Developing</option>
        <option value="errors" ${errors().length ? '' : 'disabled'}>Мои ошибки (${errors().length})</option>
        ${courseNames.map(course => `<optgroup label="Cloud ${course}">${modules.filter(module => module.course === course).map(module => `<option value="${module.id}">${module.id} · ${module.title}</option>`).join('')}</optgroup>`).join('')}
      </select></div>
      <div class="field"><label for="quiz-size">Количество вопросов</label><select id="quiz-size"></select></div>
      <p class="small" id="bank-size" aria-live="polite" style="margin:12px 0 17px"></p>
      <div class="actions"><button class="btn primary" type="submit">${canResume ? 'Начать новый тест' : 'Начать тест'}</button>
      ${moduleById.has(preselected) ? `<a class="btn" href="#study/${preselected}">Вернуться к теме</a>` : ''}</div>
    </form></div>`;
  const scope = document.querySelector('#scope');
  const size = document.querySelector('#quiz-size');
  if (moduleById.has(preselected)) scope.value = preselected;
  function updateSizes() {
    const total = poolFor(scope.value).length;
    size.innerHTML = [10, 20, 40].filter(n => n < total).map(n => `<option value="${n}">${n}</option>`).join('') + `<option value="${total}">Все (${total})</option>`;
    size.value = String(Math.min(total, 20));
    document.querySelector('#bank-size').textContent = `В подборке ${total} вопр.`;
  }
  updateSizes();
  scope.addEventListener('change', updateSizes);
  document.querySelector('#quiz-settings').addEventListener('submit', event => {
    event.preventDefault();
    const value = scope.value;
    const title = moduleById.has(value) ? moduleById.get(value).title : scope.selectedOptions[0].textContent;
    startQuiz(chooseQuestions(poolFor(value), Number(size.value)), title);
  });
}

function answerText(question, answer) {
  return [...answer].map(letter => `${letter}. ${question.options[letters.indexOf(letter)]}`).join(' / ');
}

function showQuiz() {
  const session = state.session;
  if (!session) {
    showPractice();
    return;
  }
  if (session.index === session.ids.length) {
    showScore(session);
    return;
  }
  const question = questionById.get(session.ids[session.index]);
  const module = moduleById.get(question.module);
  const reply = session.replies[question.id];
  const submitted = typeof reply === 'string';
  const correct = submitted && reply === question.answer;
  const required = question.answer.length;
  main.innerHTML = `<div class="quiz-frame">
    <a class="back" href="#practice">← Настройки теста</a>
    <div class="quiz-card">
      <div class="question-top ${module.course.toLowerCase()}"><span class="module-tag">${module.id} · ${module.course}</span><span class="small">Вопрос ${session.index + 1} из ${session.ids.length}</span></div>
      <progress class="progress" value="${session.index + Number(submitted)}" max="${session.ids.length}" aria-label="Отвечено вопросов"></progress>
      <h1 class="question-title" id="question-heading" lang="en">${escapeHtml(question.question)}</h1>
      <p class="small" id="choice-hint">${required > 1 ? `Выбери ${required} варианта ответа.` : 'Выбери один вариант ответа.'}</p>
      <form id="question-form">
        <fieldset class="choices" aria-labelledby="question-heading" aria-describedby="choice-hint" ${submitted ? 'disabled' : ''}>
          ${question.options.map((option, i) => {
            const letter = letters[i];
            const selected = submitted && reply.includes(letter);
            const style = !submitted ? '' : question.answer.includes(letter) ? 'correct' : selected ? 'wrong' : '';
            const annotation = style === 'correct' ? '<span class="sr-only">Правильный вариант</span>' : style === 'wrong' ? '<span class="sr-only">Ошибочный вариант</span>' : '';
            return `<label class="choice ${style}"><input type="${required > 1 ? 'checkbox' : 'radio'}" name="answer" value="${letter}" ${selected ? 'checked' : ''}><span class="choice-key" aria-hidden="true">${letter}</span><span lang="en">${escapeHtml(option)}</span>${annotation}</label>`;
          }).join('')}
        </fieldset>
        ${submitted ? `<div class="feedback ${correct ? 'correct' : 'wrong'}" tabindex="-1" id="feedback">
          <strong>${correct ? 'Верно' : `Правильный ответ — ${[...question.answer].join(', ')}`}</strong>
          <p>${escapeHtml(question.explanation)}</p><a href="#study/${question.module}">Повторить тему</a>
        </div>` : ''}
        <div class="actions">${submitted ? `<button class="btn primary" type="button" id="next-question">${session.index === session.ids.length - 1 ? 'Посмотреть результат' : 'Следующий вопрос →'}</button>` : '<button class="btn primary" type="submit" id="check-answer" disabled>Проверить ответ</button>'}</div>
      </form>
    </div></div>`;
  const form = document.querySelector('#question-form');
  if (submitted) {
    document.querySelector('#next-question').addEventListener('click', () => {
      session.index++;
      save();
      render(true);
    });
    return;
  }
  const selected = () => [...form.querySelectorAll('input:checked')].map(input => input.value).join('');
  form.addEventListener('change', () => { document.querySelector('#check-answer').disabled = selected().length !== required; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const answer = selected();
    if (answer.length !== required || session.replies[question.id]) return;
    session.replies[question.id] = answer;
    state.answers[question.id] = answer;
    save();
    showQuiz();
    document.querySelector('#feedback').focus();
  });
}

function showScore(session) {
  const attempted = session.ids.map(id => questionById.get(id));
  const wrong = attempted.filter(question => session.replies[question.id] !== question.answer);
  const correct = attempted.length - wrong.length;
  const groups = [...new Set(attempted.map(question => question.module))];
  main.innerHTML = `<div class="quiz-frame">
    <div class="score-card">
      <p class="eyebrow">Результат теста</p><h1>${correct} из ${attempted.length} · ${Math.round(correct / attempted.length * 100)}%</h1>
      <p class="helper">${escapeHtml(session.title)}. ${wrong.length ? `Ошибок в этом тесте — ${wrong.length}.` : 'Все ответы верные.'}</p>
      <div class="actions">${wrong.length ? '<button id="retry" class="btn primary">Повторить ошибки</button>' : ''}<a class="btn ${wrong.length ? '' : 'primary'}" href="#practice">К тестам</a><a class="btn" href="#home">К темам</a></div>
    </div>
    ${groups.length > 1 ? `<details><summary>Результаты по модулям</summary><div class="detail-body">${groups.sort((a, b) => modules.indexOf(moduleById.get(a)) - modules.indexOf(moduleById.get(b))).map(id => {
      const items = attempted.filter(question => question.module === id);
      const score = items.filter(question => session.replies[question.id] === question.answer).length;
      return `<p><a href="#study/${id}">${id} · ${moduleById.get(id).title}</a> — ${score} / ${items.length}</p>`;
    }).join('')}</div></details>` : ''}
    ${wrong.length ? `<h2 style="margin-top:24px">Разбор ошибок</h2><div class="error-list">${wrong.map(question =>
      `<details><summary lang="en">${escapeHtml(question.question)}</summary><div class="detail-body">
        <p>Твой ответ — <span lang="en">${escapeHtml(answerText(question, session.replies[question.id]))}</span></p>
        <p>Правильный ответ — <span lang="en">${escapeHtml(answerText(question, question.answer))}</span></p>
        <p>${escapeHtml(question.explanation)}</p><a href="#study/${question.module}">Повторить ${question.module}</a></div></details>`).join('')}</div>` : ''}
    </div>`;
  document.querySelector('#retry')?.addEventListener('click', () => startQuiz(shuffled(wrong), 'Повтор ошибок'));
}

function showReview() {
  main.innerHTML = `<div class="review-frame">
    <div class="page-heading"><p class="eyebrow">Перед экзаменом</p><h1>Памятка</h1><p class="helper">Различия, которые стоит воспроизвести по памяти, и формулы для задач DynamoDB.</p></div>
    <section class="formula-box" aria-labelledby="formula-title">
      <h2 id="formula-title">Калькулятор RCU / WCU</h2><p class="helper">Для отдельных операций с items одинакового размера.</p>
      <div class="formula-grid">
        <div class="field"><label for="item-size">Размер item, KB</label><input class="number-input" id="item-size" type="number" min="0.01" step="any" value="11"></div>
        <div class="field"><label for="rate">Операций в секунду</label><input class="number-input" id="rate" type="number" min="0" step="any" value="20"></div>
      </div>
      <output class="formula-result" id="formula-result" for="item-size rate" aria-live="polite"></output>
      <p class="small" style="margin:8px 0 0">Расход capacity за секунду. Для целого значения provisioned capacity округли результат вверх.</p>
    </section>
    ${quickReview.map(block => `<section class="review-block"><h2>${escapeHtml(block.title)}</h2><div class="reading">${reading(block.html)}</div></section>`).join('')}
  </div>`;
  const item = document.querySelector('#item-size');
  const rate = document.querySelector('#rate');
  function calculate() {
    const size = item.valueAsNumber;
    const operations = rate.valueAsNumber;
    const format = new Intl.NumberFormat('ru', { maximumFractionDigits: 4 });
    const result = document.querySelector('#formula-result');
    if (!Number.isFinite(size) || !Number.isFinite(operations) || !item.validity.valid || !rate.validity.valid) {
      result.textContent = 'Укажи размер больше нуля и неотрицательное число операций.';
      return;
    }
    const read = Math.ceil(size / 4) * operations;
    const write = Math.ceil(size) * operations;
    result.textContent = `${format.format(read)} RCU strong · ${format.format(read / 2)} RCU eventual · ${format.format(write)} WCU`;
  }
  item.addEventListener('input', calculate);
  rate.addEventListener('input', calculate);
  calculate();
}

function render(moveFocus = false) {
  const { page, id } = route();
  if (page === 'study' && moduleById.has(id)) {
    showModule(moduleById.get(id));
    updateNav('home');
  } else if (page === 'practice' || page === 'quiz') {
    if (page === 'quiz') showQuiz();
    else showPractice(id);
    updateNav('practice');
  } else if (page === 'review') {
    showReview();
    updateNav('review');
  } else {
    showHome();
    updateNav('home');
  }
  document.title = `${main.querySelector('h1')?.textContent || 'Подготовка'} · Cloud Final`;
  if (moveFocus) {
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
}

document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});
window.addEventListener('hashchange', () => render(true));
render();

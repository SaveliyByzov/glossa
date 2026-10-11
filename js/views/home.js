// Главная: приветствие, повторение на сегодня / дневная цель, список курсов.
import { h, icon } from '../dom.js';
import { store } from '../store.js';
import { config } from '../config.js';
import { loadAll } from '../courses.js';
import { todayXp, dailyGoal, currentStreak, streakBroken, activeVacation } from '../gamify.js';
import { courseProgress, nextLesson } from '../mastery.js';
import { dueBreakdown } from './review.js';
import { view, head, progress, glyph, empty, roman } from './common.js';
import { plural } from '../util.js';

function greeting() {
  const hr = new Date().getHours();
  return hr < 5 ? 'Доброй ночи' : hr < 12 ? 'Доброе утро' : hr < 18 ? 'Добрый день' : 'Добрый вечер';
}

export async function render() {
  const state = store.state;
  const list = await loadAll();
  const goal = dailyGoal(state);
  const xp = todayXp(state);

  // повторение по всем начатым курсам
  const due = { vocab: 0, skills: 0, mistakes: 0, total: 0, courses: [] };
  for (const { course } of list) {
    const cs = course && state.courses[course.id];
    if (!cs) continue;
    const d = dueBreakdown(cs);
    due.vocab += d.vocab; due.skills += d.skills; due.mistakes += d.mistakes; due.total += d.total;
    if (d.total) due.courses.push(course.id);
  }

  const subParts = [];
  if (due.total) subParts.push(`${due.total} ${plural(due.total, ['карточка ждёт', 'карточки ждут', 'карточек ждут'])} повторения.`);
  if (activeVacation(state)) subParts.push('Серия на паузе.');
  else if (streakBroken(state)) subParts.push(`Серия прервалась — бывает. Рекорд: ${state.stats.streak.best} ${plural(state.stats.streak.best, ['день', 'дня', 'дней'])}.`);
  subParts.push(xp >= goal ? 'Дневная цель выполнена.' : `До дневной цели — ${goal - xp} XP.`);
  const el = view('home', head(greeting(), subParts.join(' ')));

  el.append(daily(state, due, goal, xp));

  el.append(h('h3', { class: 'section__title' }, 'Курсы'));
  const cards = h('div', { class: 'course-list' });
  for (const { entry, course } of list) cards.append(courseCard(entry, course, state));
  el.append(list.length ? cards : empty({ title: 'Курсов пока нет', text: 'Проверьте файл data/courses.js.' }));
  return { el, title: 'Glossa', tab: 'home' };
}

function daily(state, due, goal, xp) {
  if (due.total) {
    const cross = (state.settings.crossLanguage ?? config.session.crossLanguage) && due.courses.length > 1;
    const href = cross ? '#/review/all' : `#/c/${state.lastCourse && due.courses.includes(state.lastCourse) ? state.lastCourse : due.courses[0]}/review/play`;
    const n = Math.min(due.total, config.session.reviewLength);
    const parts = [due.vocab && `лексика ${due.vocab}`, due.skills && `грамматика ${due.skills}`, due.mistakes && `ошибки ${due.mistakes}`].filter(Boolean);
    return h('div', { class: 'daily' },
      h('div', null,
        h('p', { class: 'daily__title' }, 'Повторение на сегодня'),
        h('p', { class: 'daily__sub' }, `${parts.join(' · ')} · ≈ ${Math.max(1, Math.round(n * 0.4))} мин`)),
      h('a', { class: 'btn btn--primary btn--sm', href }, 'Начать'));
  }
  const streak = currentStreak(state);
  return h('div', { class: 'daily' },
    h('div', null,
      h('p', { class: 'daily__title' }, `Цель на день: ${Math.min(xp, goal)} / ${goal} XP`),
      h('p', { class: 'daily__sub' }, streak ? `Серия: ${streak} ${plural(streak, ['день', 'дня', 'дней'])}` : 'Серия начнётся, когда вы выполните цель')),
    xp >= goal ? h('span', { class: 'badge badge--ok' }, 'Готово') : h('span'),
    progress(xp / goal, 'progress--ok progress--thin', 'Цель на день'));
}

function courseCard(entry, course, state) {
  if (!course) {
    return h('div', { class: 'course-card is-disabled', dataset: { lang: entry.id }, 'aria-disabled': 'true' },
      glyph(entry.id),
      h('div', { class: 'course-card__body' },
        h('h3', { class: 'course-card__name', lang: entry.id }, entry.name),
        h('p', { class: 'course-card__meta' }, entry.nameRu),
        h('p', { class: 'course-card__foot' }, 'Курс готовится — загляните позже')),
      h('span'));
  }
  const cs = state.courses[course.id];
  const prog = courseProgress(course, cs);
  const next = nextLesson(course, cs);
  const isNew = !cs || prog.done === 0;
  const unit = next && course.units[next.unitIndex];
  const foot = isNew && !cs ? (course.mode === 'learn' ? 'Начать с нуля' : 'Начать курс')
    : next ? `Юнит ${roman(next.unitIndex + 1)} · ${unit?.titleRu || unit?.title || next.title}` : 'Курс пройден — повторяйте';
  return h('a', { class: ['course-card', isNew && 'is-new'], href: `#/c/${course.id}`, dataset: { lang: course.id } },
    glyph(course.id, course),
    h('div', { class: 'course-card__body' },
      h('h3', { class: 'course-card__name', lang: course.id }, course.name),
      h('p', { class: 'course-card__meta' },
        `${(course.nameRu || '').replace(/\s*\(.*\)$/, '')}${course.level ? ` · ${course.level}` : ''} `,
        h('span', { class: 'chip chip--quiet' }, course.mode === 'learn' ? 'с нуля' : 'повтор')),
      progress(prog.ratio, 'progress--thin', `Пройдено ${prog.done} из ${prog.total}`),
      h('p', { class: 'course-card__foot' }, foot)),
    icon('chevron', 'course-card__chev'));
}

import { loadCv, type CvEntry, type SkillCategory, type LanguageSkill } from '../src/data/cv-parser';
import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve(import.meta.dirname, '../src/data');

const en = loadCv('en');
const es = loadCv('es');

function slugifyCategory(cat: string): string {
  return cat
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .replace(/__+/g, '_');
}

function getLocaleLevelMap(locale: 'en' | 'es'): Record<string, string> {
  if (locale === 'en') {
    return {
      C1: 'Professional', C2: 'Professional',
      B1: 'Intermediate', B2: 'Intermediate',
      A1: 'Basic', A2: 'Basic',
      Native: 'Native', Nativo: 'Native',
    };
  }
  return {
    C1: 'Profesional', C2: 'Profesional',
    B1: 'Intermedio', B2: 'Intermedio',
    A1: 'Básico', A2: 'Básico',
    Native: 'Nativo', Nativo: 'Nativo',
  };
}

const LEVEL_EN = getLocaleLevelMap('en');

const LEVEL_KEY_MAP: Record<string, string> = {
  C1: 'skills.lang.professional',
  C2: 'skills.lang.professional',
  B1: 'skills.lang.intermediate',
  B2: 'skills.lang.intermediate',
  A1: 'skills.lang.basic',
  A2: 'skills.lang.basic',
  Native: 'skills.lang.native',
  Nativo: 'skills.lang.native',
};

const LANG_NAME_MAP: Record<string, string> = {
  english: 'ENG',
  inglés: 'ENG',
  italian: 'ITA',
  italiano: 'ITA',
  spanish: 'ESP',
  español: 'ESP',
};

function formatExperience(exp: CvEntry, i: number): string {
  const descKeys = exp.description.map((_, j) => `exp.${i}.desc.${j}`);
  const descArr = '[' + descKeys.map((k) => `'${k}'`).join(', ') + ']';
  const descVals = '[' + exp.description.map((d) => JSON.stringify(d)).join(', ') + ']';
  return `  {
    date: ${JSON.stringify(exp.date)},
    dateI18n: 'exp.date.${i}',
    title: ${JSON.stringify(exp.title)},
    titleI18n: 'exp.title.${i}',
    description: ${descVals},
    descriptionI18n: ${descArr},
  }`;
}

function splitEducationTitle(edu: CvEntry): { title: string; description: string[] } {
  const separator = ' — ';
  const idx = edu.title.indexOf(separator);
  if (idx > 0 && edu.description.length === 0) {
    return {
      title: edu.title.substring(idx + separator.length),
      description: [edu.title.substring(0, idx)],
    };
  }
  return { title: edu.title, description: edu.description };
}

function formatEducation(edu: CvEntry, i: number): string {
  const { title, description } = splitEducationTitle(edu);
  const descKeys = description.map((_, j) => `edu.${i}.desc.${j}`);
  const descArr = '[' + descKeys.map((k) => `'${k}'`).join(', ') + ']';
  const descVals = '[' + description.map((d) => JSON.stringify(d)).join(', ') + ']';
  return `  {
    date: ${JSON.stringify(edu.date)},
    dateI18n: 'edu.date.${i}',
    title: ${JSON.stringify(title)},
    titleI18n: 'edu.title.${i}',
    description: ${descVals},
    descriptionI18n: ${descArr},
  }`;
}

function formatSkillCategory(cat: SkillCategory): string {
  const key = `skills.cat.${slugifyCategory(cat.category)}`;
  return `  {
    category: ${JSON.stringify(cat.category)},
    names: ${JSON.stringify(cat.names)},
    i18n: '${key}',
  }`;
}

function formatLanguageSkill(lang: LanguageSkill): string {
  const displayLevel = LEVEL_EN[lang.level] || lang.level;
  const levelKey = LEVEL_KEY_MAP[lang.level] || `skills.lang.${displayLevel.toLowerCase()}`;
  const nameCode = LANG_NAME_MAP[lang.name.toLowerCase()] || lang.name.toUpperCase().slice(0, 3);
  return `  {
    name: ${JSON.stringify(nameCode)},
    level: ${JSON.stringify(displayLevel)},
    certificate: ${JSON.stringify(lang.certificate !== '-' ? `${lang.level} (${lang.certificate})` : '-')},
    levelI18n: '${levelKey}',
  }`;
}

function generateExperience(): string {
  const entries = en.experience.map((exp, i) => formatExperience(exp, i)).join(',\n');
  return `export interface ExperienceEntry {
  date: string;
  dateI18n: string;
  title: string;
  titleI18n: string;
  description: string[];
  descriptionI18n: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
${entries}
];
`;
}

function generateEducation(): string {
  const entries = en.education.map((edu, i) => formatEducation(edu, i)).join(',\n');
  return `export interface EducationEntry {
  date: string;
  dateI18n: string;
  title: string;
  titleI18n: string;
  description: string[];
  descriptionI18n: string[];
}

export const CV_EDUCATION: EducationEntry[] = [
${entries}
];
`;
}

function generateSkills(): string {
  const tech = en.skills.map(formatSkillCategory).join(',\n');
  const lang = en.languages.map(formatLanguageSkill).join(',\n');
  return `export interface TechnicalSkillCategory {
  category: string;
  names: string[];
  i18n: string;
}

export interface LanguageSkillEntry {
  name: string;
  level: string;
  certificate: string;
  levelI18n: string;
}

export const TECHNICAL_SKILLS: TechnicalSkillCategory[] = [
${tech}
];

export const LANGUAGE_SKILLS: LanguageSkillEntry[] = [
${lang}
];
`;
}

function buildI18nEntries(lang: 'en' | 'es'): Record<string, string> {
  const data = lang === 'en' ? en : es;
  const entries: Record<string, string> = {};

  data.experience.forEach((exp, i) => {
    entries[`exp.date.${i}`] = exp.date;
    entries[`exp.title.${i}`] = exp.title;
    exp.description.forEach((desc, j) => {
      entries[`exp.${i}.desc.${j}`] = desc;
    });
  });

  data.education.forEach((edu, i) => {
    entries[`edu.date.${i}`] = edu.date;
    const { title, description } = splitEducationTitle(edu);
    entries[`edu.title.${i}`] = title;
    description.forEach((desc, j) => {
      entries[`edu.${i}.desc.${j}`] = desc;
    });
  });

  data.skills.forEach((cat, i) => {
    const enCat = en.skills[i];
    const key = `skills.cat.${enCat ? slugifyCategory(enCat.category) : slugifyCategory(cat.category)}`;
    entries[key] = cat.category;
  });

  const levelMap = getLocaleLevelMap(lang);
  const levelEntries: Record<string, string> = {};
  data.languages.forEach((l) => {
    const displayLevel = levelMap[l.level] || l.level;
    const levelKey = LEVEL_KEY_MAP[l.level];
    if (levelKey) {
      levelEntries[levelKey] = displayLevel;
    }
  });
  Object.assign(entries, levelEntries);

  return entries;
}

function generateI18n(): string {
  const enEntries = buildI18nEntries('en');
  const esEntries = buildI18nEntries('es');

  const enLines = Object.entries(enEntries)
    .map(([k, v]) => `    '${k}': ${JSON.stringify(v)}`)
    .join(',\n');

  const esLines = Object.entries(esEntries)
    .map(([k, v]) => `    '${k}': ${JSON.stringify(v)}`)
    .join(',\n');

  return `export const CV_I18N = {
  en: {
${enLines}
  },
  es: {
${esLines}
  },
} as const;
`;
}

function writeIfChanged(filePath: string, content: string) {
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf-8') === content) {
    return;
  }
  fs.writeFileSync(filePath, content, 'utf-8');
}

writeIfChanged(path.join(DATA_DIR, 'experience.ts'), generateExperience());
writeIfChanged(path.join(DATA_DIR, 'skills.ts'), generateSkills());
writeIfChanged(path.join(DATA_DIR, 'education.ts'), generateEducation());
writeIfChanged(path.join(DATA_DIR, 'cv-i18n.ts'), generateI18n());

console.log('CV data extracted successfully.');

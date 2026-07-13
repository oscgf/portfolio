import fs from 'node:fs';
import path from 'node:path';

export interface SkillCategory {
  category: string;
  names: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  certificate: string;
}

export interface CvEntry {
  title: string;
  date: string;
  description: string[];
}

export interface Contact {
  mail: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
}

export interface CvData {
  name: string;
  subtitle: string;
  contact: Contact;
  skills: SkillCategory[];
  experience: CvEntry[];
  education: CvEntry[];
  certifications: CvEntry[];
  languages: LanguageSkill[];
}

function stripInlineFormatting(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim();
}

function parseContactLine(line: string): { key: string; value: string } | null {
  const match = line.match(/^\*\*([^:]+):\*\*\s*(.+)$/);
  if (!match) return null;
  return { key: match[1].toLowerCase(), value: stripInlineFormatting(match[2]) };
}

function looksLikeDate(text: string): boolean {
  return /^(?:January|February|March|April|May|June|July|August|September|October|November|December|Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre|Presente?|Present|Abr|Mar|Dic|Jul|Jun)\b/i.test(
    text.trim()
  );
}

function splitSubtitle(subtitle: string): {
  title: string;
  location: string;
  date: string;
} {
  const parts = subtitle.split('·').map((s) => s.trim());
  if (parts.length === 2) {
    if (looksLikeDate(parts[1])) {
      return { title: parts[0], location: '', date: parts[1] };
    }
    return { title: parts[0], location: parts[1], date: '' };
  }
  return {
    title: parts[0] || '',
    location: parts[1] || '',
    date: parts[2] || '',
  };
}

function splitSkillNames(raw: string): string[] {
  const names: string[] = [];
  let current = '';
  let depth = 0;
  for (const ch of raw) {
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    if (ch === ',' && depth === 0) {
      names.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) names.push(current.trim());
  return names;
}

function parseSkills(lines: string[]): SkillCategory[] {
  const skills: SkillCategory[] = [];
  for (const line of lines) {
    const match = line.match(/^\*\*(.+?):\*\*\s*(.+)$/);
    if (match) {
      skills.push({
        category: match[1],
        names: splitSkillNames(match[2]),
      });
    }
  }
  return skills;
}

function parseEntries(lines: string[]): CvEntry[] {
  const entries: CvEntry[] = [];
  let current: CvEntry | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      if (current) entries.push(current);
      current = {
        title: stripInlineFormatting(line.slice(4)),
        date: '',
        description: [],
      };
    } else if (line.startsWith('*') && line.endsWith('*') && current) {
      const raw = line.slice(1, -1);
      const split = splitSubtitle(raw);
      current.title = `${split.title} — ${current.title}${split.location ? ` (${split.location})` : ''}`;
      current.date = split.date;
    } else if (line.startsWith('- ') && current) {
      current.description.push(stripInlineFormatting(line.slice(2)));
    } else if (
      line &&
      !line.startsWith('*') &&
      !line.startsWith('- ') &&
      current &&
      current.title &&
      !current.date
    ) {
      current.date = stripInlineFormatting(line);
    }
  }

  if (current) entries.push(current);
  return entries;
}

function parseCertifications(lines: string[]): CvEntry[] {
  const entries: CvEntry[] = [];
  let current: CvEntry | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      if (current) entries.push(current);
      current = {
        title: stripInlineFormatting(line.slice(4)),
        date: '',
        description: [],
      };
    } else if (line.startsWith('*') && line.endsWith('*') && current) {
      current.date = stripInlineFormatting(line.slice(1, -1));
    } else if (line && current && current.date) {
      current.description.push(stripInlineFormatting(line));
    }
  }

  if (current) entries.push(current);
  return entries;
}

function parseLanguages(lines: string[]): LanguageSkill[] {
  const languages: LanguageSkill[] = [];
  for (const line of lines) {
    const match = line.match(/^\s*-\s*\*\*(.+?):\*\*\s*(.+)$/);
    if (!match) continue;
    const name = match[1];
    const rawValue = match[2];
    const certMatch = rawValue.match(/^(\S+)\s*\((.+)\)$/);
    if (certMatch) {
      languages.push({
        name,
        level: certMatch[1],
        certificate: certMatch[2],
      });
    } else {
      languages.push({
        name,
        level: rawValue,
        certificate: '-',
      });
    }
  }
  return languages;
}

export function parseCvMarkdown(markdown: string): CvData {
  const lines = markdown.split(/\r?\n/) as string[];

  let name = '';
  let subtitle = '';
  const contact: Contact = { mail: '', phone: '', location: '', linkedin: '', portfolio: '' };
  const sections: Record<string, string[]> = {};
  let currentSection = '__header__';
  sections[currentSection] = [];

  let h1Set = false;
  let subtitleSet = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('# ') && !line.startsWith('## ')) {
      name = stripInlineFormatting(line.slice(2));
      h1Set = true;
      subtitleSet = true;
      continue;
    }

    if (h1Set && subtitleSet && line.startsWith('**') && line.trim() !== '') {
      subtitle = stripInlineFormatting(line);
      subtitleSet = false;
      continue;
    }

    if (line.startsWith('## ')) {
      currentSection = stripInlineFormatting(line.slice(3)).toLowerCase();
      sections[currentSection] = [];
      continue;
    }

    if (line === '---') continue;
    if (line.trim() === '') continue;

    if (currentSection === '__header__') {
      sections[currentSection].push(line);
    } else {
      sections[currentSection].push(line);
    }
  }

  for (const line of sections['__header__']) {
    const parsed = parseContactLine(line);
    if (!parsed) continue;
    switch (parsed.key) {
      case 'mail':
        contact.mail = parsed.value;
        break;
      case 'phone':
        contact.phone = parsed.value;
        break;
      case 'location':
        contact.location = parsed.value;
        break;
      case 'linkedin':
        contact.linkedin = parsed.value;
        break;
      case 'portfolio':
        contact.portfolio = parsed.value;
        break;
    }
  }

  const skills = parseSkills(sections['skills'] || sections['habilidades'] || []);

  const experience = parseEntries(
    sections['experience'] || sections['experiencia'] || []
  );

  const education = parseEntries(
    sections['education'] || sections['formación'] || sections['formacion'] || []
  );

  const certifications = parseCertifications(
    sections['certifications'] || sections['certificaciones'] || []
  );

  const languages = parseLanguages(
    sections['languages'] || sections['idiomas'] || []
  );

  return { name, subtitle, contact, skills, experience, education, certifications, languages };
}

export function loadCv(lang: 'en' | 'es' = 'en'): CvData {
  const cvDir = path.resolve(import.meta.dirname, '../../cv/source');
  const filename = lang === 'es' ? 'CV_es.md' : 'CV_en.md';
  const content = fs.readFileSync(path.join(cvDir, filename), 'utf-8');
  return parseCvMarkdown(content);
}

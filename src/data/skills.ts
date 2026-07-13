export interface TechnicalSkillCategory {
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
  {
    category: "Languages",
    names: ["Scala","Python","SQL","Java","C++"],
    i18n: 'skills.cat.languages',
  },
  {
    category: "Frameworks",
    names: ["Spark","Airflow","Kafka","Flink","dbt","PyTorch"],
    i18n: 'skills.cat.frameworks',
  },
  {
    category: "Databases",
    names: ["Redshift","PostgreSQL","MongoDB"],
    i18n: 'skills.cat.databases',
  },
  {
    category: "Technologies / Tools",
    names: ["AWS (S3, EMR, Glue, Athena)","Docker","Linux","Git"],
    i18n: 'skills.cat.technologies_tools',
  },
  {
    category: "Practices",
    names: ["Agile","Scrum","Kanban"],
    i18n: 'skills.cat.practices',
  }
];

export const LANGUAGE_SKILLS: LanguageSkillEntry[] = [
  {
    name: "ENG",
    level: "Professional",
    certificate: "C1 (CAE)",
    levelI18n: 'skills.lang.professional',
  },
  {
    name: "ITA",
    level: "Intermediate",
    certificate: "B2 (PLIDA)",
    levelI18n: 'skills.lang.intermediate',
  },
  {
    name: "ESP",
    level: "Native",
    certificate: "-",
    levelI18n: 'skills.lang.native',
  }
];

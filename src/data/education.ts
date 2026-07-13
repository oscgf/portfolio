export interface EducationEntry {
  date: string;
  dateI18n: string;
  title: string;
  titleI18n: string;
  description: string[];
  descriptionI18n: string[];
}

export const CV_EDUCATION: EducationEntry[] = [
  {
    date: "September 2023 – September 2025",
    dateI18n: 'edu.date.0',
    title: "Double Master's Degree in Telecommunication Engineering and Advanced Communications Technologies — University Carlos III of Madrid",
    titleI18n: 'edu.title.0',
    description: [],
    descriptionI18n: [],
  },
  {
    date: "September 2017 – March 2022",
    dateI18n: 'edu.date.1',
    title: "Degree in Engineering in Telecommunication Technologies and Services — University of Oviedo - University of Cagliari (1 year)",
    titleI18n: 'edu.title.1',
    description: [],
    descriptionI18n: [],
  }
];

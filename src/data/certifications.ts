export interface CertificationEntry {
  date: string;
  dateI18n: string;
  title: string;
  titleI18n: string;
  description: string[];
  descriptionI18n: string[];
  linkLabel?: string;
  linkLabelI18n?: string;
  url?: string;
}

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    date: "September 2026",
    dateI18n: 'cert.date.0',
    title: "AWS Certified Data Engineer – Associate",
    titleI18n: 'cert.title.0',
    description: ["In-depth understanding of how to use AWS services to implement data pipelines and to monitor, troubleshoot, and optimize cost and performance issues in accordance with best practices"],
    descriptionI18n: ['cert.0.desc.0'],
    url: "https://www.credly.com/badges/61db1581-8897-46fc-a050-3f5cd0186a51/public_url",
    linkLabel: "View certificate",
    linkLabelI18n: 'cert.0.link',
  },
  {
    date: "December 2025 – January 2026",
    dateI18n: 'cert.date.1',
    title: "Functional Programming in Scala",
    titleI18n: 'cert.title.1',
    description: ["Coursera specialization program for Big Data using Scala and Spark"],
    descriptionI18n: ['cert.1.desc.0'],
    url: "https://coursera.org/share/1c4dbc126580fe0969c69f5eb6f934c0",
    linkLabel: "View certificate",
    linkLabelI18n: 'cert.1.link',
  }
];

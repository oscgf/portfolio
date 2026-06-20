export interface ExperienceEntry {
    date: string;
    title: string;
    description: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        date: 'December 2024 – Present',
        title: 'Data Engineer — UC3M & Kairós DS (Madrid, Spain)',
        description: [
            "Designed and implemented end-to-end ETL data pipelines within AWS using Scala, Spark, and Python, processing gigabyte-scale datasets and reducing pipeline execution times by 30%.",
            "Orchestrated complex workflows using Apache Airflow, reducing data ingestion failures by 20% through automated retry mechanisms and real-time alerting.",
            "Optimized AWS cloud infrastructure costs by 15% through the migration and structuring of historical data lakes on Amazon S3 and Amazon Redshift, utilizing AWS Glue and Athena for data partitioning.",
            "Developed interactive Power BI dashboards connected to Athena and Redshift using dbt, reducing query cost and time by 40%.",
        ],
    },
    {
        date: 'April 2022 – July 2023',
        title: 'Martech Engineer — Merkle (Gijón, Spain)',
        description: [
            "Architected multi-platform first-party data collection systems that scaled to process over 15M monthly events across enterprise clients, boosting data accuracy by 25% and unlocking actionable insights for personalized marketing.",
            "Implemented user consent and privacy management frameworks adhering to GDPR/CCPA regulations, ensuring 100% compliance across digital assets without compromising web performance.",
        ],
    },
    {
        date: 'March 2021 – June 2021',
        title: 'Internship — University of Oviedo (Gijón, Spain)',
        description: [
            "Developed a neural network using PyTorch for signal detection and recovery in digital MIMO communication channel simulations, achieving a 94% signal recovery accuracy in high-noise research environments.",
        ],
    },
];

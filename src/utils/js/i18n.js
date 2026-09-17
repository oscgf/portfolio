(function () {
  const DICT = {
  "en": {
    "exp.date.0": "December 2024 – Present",
    "exp.title.0": "Data Engineer — UC3M & Kairós DS (Madrid, Spain)",
    "exp.0.desc.0": "Designed and implemented end-to-end ETL data pipelines within AWS using Scala, Spark, and Python, processing gigabyte-scale datasets and reducing pipeline execution times by 30%.",
    "exp.0.desc.1": "Orchestrated complex workflows using Apache Airflow, reducing data ingestion failures by 20% through automated retry mechanisms and real-time alerting.",
    "exp.0.desc.2": "Optimized AWS cloud infrastructure costs by 15% through the migration and structuring of historical data lakes on Amazon S3 and Amazon Redshift, utilizing AWS Glue and Athena for data partitioning.",
    "exp.0.desc.3": "Developed interactive Power BI dashboards connected to Athena and Redshift using dbt, reducing query cost and time by 40%.",
    "exp.date.1": "April 2022 – July 2023",
    "exp.title.1": "Martech Engineer — Merkle (Gijón, Spain)",
    "exp.1.desc.0": "Architected multi-platform first-party data collection systems that scaled to process over 15M monthly events across enterprise clients, boosting data accuracy by 25% and unlocking actionable insights for personalized marketing.",
    "exp.1.desc.1": "Implemented user consent and privacy management frameworks adhering to GDPR/CCPA regulations, ensuring 100% compliance across digital assets without compromising web performance.",
    "exp.date.2": "March 2021 – June 2021",
    "exp.title.2": "Internship — University of Oviedo (Gijón, Spain)",
    "exp.2.desc.0": "Developed a neural network using PyTorch for signal detection and recovery in digital MIMO communication channel simulations, achieving a 94% signal recovery accuracy in high-noise research environments.",
    "edu.date.0": "September 2023 – September 2025",
    "edu.title.0": "University Carlos III of Madrid",
    "edu.0.desc.0": "Double Master's Degree in Telecommunication Engineering and Advanced Communications Technologies",
    "edu.date.1": "September 2017 – March 2022",
    "edu.title.1": "University of Oviedo - University of Cagliari (1 year)",
    "edu.1.desc.0": "Degree in Engineering in Telecommunication Technologies and Services",
    "skills.cat.languages": "Languages",
    "skills.cat.frameworks": "Frameworks",
    "skills.cat.databases": "Databases",
    "skills.cat.technologies_tools": "Technologies / Tools",
    "skills.cat.practices": "Practices",
    "cert.date.0": "September 2026",
    "cert.title.0": "AWS Certified Data Engineer – Associate",
    "cert.0.desc.0": "In-depth understanding of how to use AWS services to implement data pipelines and to monitor, troubleshoot, and optimize cost and performance issues in accordance with best practices",
    "cert.0.link": "View certificate",
    "cert.date.1": "December 2025 – January 2026",
    "cert.title.1": "Functional Programming in Scala",
    "cert.1.desc.0": "Coursera specialization program for Big Data using Scala and Spark",
    "cert.1.link": "View certificate",
    "skills.lang.professional": "Professional",
    "skills.lang.intermediate": "Intermediate",
    "skills.lang.native": "Native",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "hero.greeting": "Hey, I'm",
    "hero.tagline": "Data Engineer passionate about tackling complex challenges and driving innovation.",
    "hero.cta": "Let's create the future together.",
    "hero.available": "Available",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.about": "About me",
    "section.education": "Education",
    "section.skills": "Skills",
    "section.certifications": "Certifications",
    "about.p1": "I am a Data Engineer with a passion for technology, problem-solving, and transforming data into value for business. My career spans data engineering and data analysis, machine learning, and telecommunications, providing a diverse set of skills to tackle complex analytical challenges.",
    "about.p2": "Currently, I work as a Data Engineer at Kairós DS for Fundación Universia. I design and implement scalable ETL processes in an AWS environment using SQL, Python, Spark, and Scala, ensuring data availability and quality for subsequent analytical exploitation. I also participate in data modeling and visualization with tools like PowerBI.",
    "about.p3": "In addition to my technical expertise, I hold a professional music title, which strengthens my creativity, discipline, and ability to approach challenges from different and structured perspectives. I believe in the power of teamwork and strive to make a real impact while continuing to professionally grow.",
    "skills.technical": "Technical",
    "skills.languages": "Languages",
    "skills.category": "Category",
    "skills.skill": "Skill",
    "btn.more_experience": "More experience",
    "btn.more_projects": "More projects",
    "btn.view_project": "View project",
    "btn.project_repo": "Project Repository",
    "btn.project_report": "Project Report",
    "toc.title": "On this page",
    "toc.overview": "Overview",
    "footer.copyright": "© 2026 Óscar González Fresno. Some Rights Reserved.",
    "footer.built": "Built with",
    "footer.astro": "Astro",
    "404.title": "Oops! The page you're looking for doesn't exist.",
    "404.back": "Go back to Homepage",
    "lang.en": "English",
    "lang.es": "Spanish",
    "edu.date.2": "September 2021 - March 2022",
    "edu.date.3": "September 2019 - July 2020",
    "edu.date.4": "September 2018 - June 2023",
    "edu.title.2": "Universidad de Sevilla",
    "edu.title.3": "Università degli Studi di Cagliari",
    "edu.title.4": "Conservatorio Profesional de Música y Danza de Gijón",
    "edu.2.desc.0": "Bachelor's Degree in Telecommunication Technologies and Services Engineering",
    "edu.3.desc.0": "Bachelor's Degree in Telecommunication Technologies and Services Engineering",
    "edu.4.desc.0": "Guitar Specialty"
  },
  "es": {
    "exp.date.0": "Diciembre 2024 – Presente",
    "exp.title.0": "Data Engineer — UC3M & Kairós DS (Madrid, España)",
    "exp.0.desc.0": "Diseño e implementación de pipelines ETL de datos en AWS utilizando Scala, Spark y Python, procesando conjuntos de datos a escala de gigabytes y reduciendo los tiempos de ejecución en un 30%.",
    "exp.0.desc.1": "Orquestación de flujos de trabajo complejos con Apache Airflow, reduciendo los fallos de ingesta de datos en un 20% mediante mecanismos de reintento automatizados y alertas en tiempo real.",
    "exp.0.desc.2": "Optimización de los costes de infraestructura cloud en AWS en un 15% mediante la migración y estructuración de data lakes históricos en Amazon S3 y Amazon Redshift, utilizando AWS Glue y Athena para el particionado de datos.",
    "exp.0.desc.3": "Desarrollo de dashboards interactivos en Power BI conectados a Athena y Redshift mediante dbt, reduciendo el coste y tiempo de consulta en un 40%.",
    "exp.date.1": "Abril 2022 – Julio 2023",
    "exp.title.1": "Martech Engineer — Merkle (Gijón, España)",
    "exp.1.desc.0": "Arquitectura de sistemas de recopilación de datos first-party multiplataforma que escalaron para procesar más de 15M de eventos mensuales en clientes enterprise, mejorando la precisión de los datos en un 25% y generando insights accionables para marketing personalizado.",
    "exp.1.desc.1": "Implementación de marcos de gestión de consentimiento y privacidad de usuarios conforme a GDPR/CCPA, garantizando un 100% de cumplimiento sin comprometer el rendimiento web.",
    "exp.date.2": "Marzo 2021 – Junio 2021",
    "exp.title.2": "Prácticas — Universidad de Oviedo (Gijón, España)",
    "exp.2.desc.0": "Desarrollo de una red neuronal con PyTorch para la detección y recuperación de señales en simulaciones de canales de comunicación digital MIMO, alcanzando una precisión del 94% en entornos de investigación con alto ruido.",
    "edu.date.0": "Septiembre 2023 – Septiembre 2025",
    "edu.title.0": "Universidad Carlos III de Madrid",
    "edu.0.desc.0": "Doble Máster en Ingeniería de Telecomunicación y Tecnologías Avanzadas de la Comunicación",
    "edu.date.1": "Septiembre 2017 – Marzo 2022",
    "edu.title.1": "Universidad de Oviedo - Universidad de Cagliari (1 año)",
    "edu.1.desc.0": "Grado en Ingeniería en Tecnologías y Servicios de Telecomunicación",
    "skills.cat.languages": "Lenguajes",
    "skills.cat.frameworks": "Frameworks",
    "skills.cat.databases": "Bases de datos",
    "skills.cat.technologies_tools": "Tecnologías / Herramientas",
    "skills.cat.practices": "Prácticas",
    "cert.date.0": "Septiembre 2026",
    "cert.title.0": "AWS Certified Data Engineer – Associate",
    "cert.0.desc.0": "Comprensión profunda de cómo usar los servicios de AWS para implementar pipelines de datos y para supervisar, solucionar y optimizar problemas de coste y rendimiento de acuerdo con las mejores prácticas",
    "cert.0.link": "Ver certificado",
    "cert.date.1": "Diciembre 2025 – Enero 2026",
    "cert.title.1": "Functional Programming in Scala",
    "cert.1.desc.0": "Programa de especialización de Coursera para Big Data con Scala y Spark",
    "cert.1.link": "Ver certificado",
    "skills.lang.professional": "Profesional",
    "skills.lang.intermediate": "Intermedio",
    "skills.lang.native": "Nativo",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "hero.greeting": "Hola, soy",
    "hero.tagline": "Data Engineer apasionado por resolver desafíos complejos e impulsar la innovación.",
    "hero.cta": "Construyamos el futuro juntos.",
    "hero.available": "Disponible",
    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.about": "Sobre mí",
    "section.education": "Formación",
    "section.skills": "Habilidades",
    "section.certifications": "Certificaciones",
    "about.p1": "Soy Data Engineer con pasión por la tecnología, la resolución de problemas y la transformación de datos en valor para el negocio. Mi trayectoria abarca la ingeniería y el análisis de datos, el machine learning y las telecomunicaciones, lo que me proporciona un conjunto diverso de habilidades para afrontar desafíos analíticos complejos.",
    "about.p2": "Actualmente trabajo como Data Engineer en Kairós DS para Fundación Universia. Diseño e implemento procesos ETL escalables en entorno AWS utilizando SQL, Python, Spark y Scala, garantizando la disponibilidad y calidad de los datos para su posterior explotación analítica. También participo en modelado y visualización de datos con herramientas como PowerBI.",
    "about.p3": "Además de mi experiencia técnica, poseo un título profesional de música, lo que refuerza mi creatividad, disciplina y capacidad para abordar desafíos desde perspectivas diferentes y estructuradas. Creo en el poder del trabajo en equipo y aspiro a generar un impacto real mientras continúo creciendo profesionalmente.",
    "skills.technical": "Técnicas",
    "skills.languages": "Idiomas",
    "skills.category": "Categoría",
    "skills.skill": "Tecnología",
    "btn.more_experience": "Más experiencia",
    "btn.more_projects": "Más proyectos",
    "btn.view_project": "Ver proyecto",
    "btn.project_repo": "Repositorio del proyecto",
    "btn.project_report": "Informe del proyecto",
    "toc.title": "En esta página",
    "toc.overview": "Resumen",
    "footer.copyright": "© 2026 Óscar González Fresno. Algunos derechos reservados.",
    "footer.built": "Hecho con",
    "footer.astro": "Astro",
    "404.title": "Vaya! La página que buscas no existe.",
    "404.back": "Volver al inicio",
    "lang.en": "Inglés",
    "lang.es": "Español",
    "edu.date.2": "Septiembre 2021 - Marzo 2022",
    "edu.date.3": "Septiembre 2019 - Julio 2020",
    "edu.date.4": "Septiembre 2018 - Junio 2023",
    "edu.title.2": "Universidad de Sevilla",
    "edu.title.3": "Università degli Studi di Cagliari",
    "edu.title.4": "Conservatorio Profesional de Música y Danza de Gijón",
    "edu.2.desc.0": "Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación",
    "edu.3.desc.0": "Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación",
    "edu.4.desc.0": "Especialidad de Guitarra"
  }
};

  function getLang() {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch {
      return 'en';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const dict = DICT[lang] || DICT['en'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  const currentLang = getLang();
  applyLanguage(currentLang);

  document.addEventListener('langchange', function (e) {
    setLang(e.detail.lang);
    applyLanguage(e.detail.lang);
  });
})();

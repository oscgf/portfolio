(function () {
  const DICT = {
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'hero.greeting': "Hey, I'm",
      'hero.tagline': 'Data Engineer passionate about tackling complex challenges and driving innovation.',
      'hero.cta': "Let's create the future together.",
      'hero.available': 'Available',
      'section.experience': 'Experience',
      'section.projects': 'Projects',
      'section.about': 'About me',
      'section.education': 'Education',
      'section.skills': 'Skills',
      'about.p1': 'I am a Data Engineer with a passion for technology, problem-solving, and transforming data into value for business. My career spans data engineering and data analysis, machine learning, and telecommunications, providing a diverse set of skills to tackle complex analytical challenges.',
      'about.p2': 'Currently, I work as a Data Engineer at Kairós DS for Fundación Universia. I design and implement scalable ETL processes in an AWS environment using SQL, Python, Spark, and Scala, ensuring data availability and quality for subsequent analytical exploitation. I also participate in data modeling and visualization with tools like PowerBI.',
      'about.p3': 'In addition to my technical expertise, I hold a professional music title, which strengthens my creativity, discipline, and ability to approach challenges from different and structured perspectives. I believe in the power of teamwork and strive to make a real impact while continuing to professionally grow.',
      'skills.technical': 'Technical',
      'skills.languages': 'Languages',
      'skills.category': 'Category',
      'skills.skill': 'Skill',
      'skills.cat.languages': 'Languages',
      'skills.cat.frameworks': 'Frameworks',
      'skills.cat.databases': 'Databases',
      'skills.cat.tools': 'Technologies / Tools',
      'skills.cat.practices': 'Practices',
      'skills.lang.native': 'Native',
      'skills.lang.professional': 'Professional',
      'skills.lang.intermediate': 'Intermediate',
      'btn.more_experience': 'More experience',
      'btn.more_projects': 'More projects',
      'btn.view_project': 'View project',
      'btn.project_repo': 'Project Repository',
      'btn.project_report': 'Project Report',
      'toc.title': 'On this page',
      'toc.overview': 'Overview',
      'footer.copyright': '\u00A9 2026 \u00D3scar Gonz\u00E1lez Fresno. Some Rights Reserved.',
      'footer.built': 'Built with',
      'footer.astro': 'Astro',
      '404.title': "Oops! The page you're looking for doesn't exist.",
      '404.back': 'Go back to Homepage',
      'lang.en': 'English',
      'lang.es': 'Spanish',
      'exp.title.0': 'Data Engineer — UC3M & Kairós DS (Madrid, Spain)',
      'exp.title.1': 'Martech Engineer — Merkle (Gijón, Spain)',
      'exp.title.2': 'Internship — University of Oviedo (Gijón, Spain)',
      'exp.0.desc.0': 'Designed and implemented end-to-end ETL data pipelines within AWS using Scala, Spark, and Python, processing gigabyte-scale datasets and reducing pipeline execution times by 30%.',
      'exp.0.desc.1': 'Orchestrated complex workflows using Apache Airflow, reducing data ingestion failures by 20% through automated retry mechanisms and real-time alerting.',
      'exp.0.desc.2': 'Optimized AWS cloud infrastructure costs by 15% through the migration and structuring of historical data lakes on Amazon S3 and Amazon Redshift, utilizing AWS Glue and Athena for data partitioning.',
      'exp.0.desc.3': 'Developed interactive Power BI dashboards connected to Athena and Redshift using dbt, reducing query cost and time by 40%.',
      'edu.title.0': 'Universidad Carlos III de Madrid',
      'edu.title.1': 'Universidad de Oviedo',
      'edu.title.2': 'Universidad de Sevilla',
      'edu.title.3': 'Università degli Studi di Cagliari',
      'edu.title.4': 'Conservatorio Profesional de Música y Danza de Gijón',
      'edu.0.desc.0': 'Double Master Degree in Telecommunications Engineering and Advanced Communications Technologies',
      'edu.1.desc.0': "Bachelor's Degree in Telecommunication Technologies and Services Engineering",
      'edu.2.desc.0': "Bachelor's Degree in Telecommunication Technologies and Services Engineering",
      'edu.3.desc.0': "Bachelor's Degree in Telecommunication Technologies and Services Engineering",
      'edu.4.desc.0': 'Guitar Specialty',
    },
    es: {
      'nav.about': 'Sobre m\u00ED',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'hero.greeting': 'Hola, soy',
      'hero.tagline': 'Data Engineer apasionado por resolver desaf\u00EDos complejos e impulsar la innovaci\u00F3n.',
      'hero.cta': 'Construyamos el futuro juntos.',
      'hero.available': 'Disponible',
      'section.experience': 'Experiencia',
      'section.projects': 'Proyectos',
      'section.about': 'Sobre m\u00ED',
      'section.education': 'Formaci\u00F3n',
      'section.skills': 'Habilidades',
      'about.p1': 'Soy Data Engineer con pasi\u00F3n por la tecnolog\u00EDa, la resoluci\u00F3n de problemas y la transformaci\u00F3n de datos en valor para el negocio. Mi trayectoria abarca la ingenier\u00EDa y el an\u00E1lisis de datos, el machine learning y las telecomunicaciones, lo que me proporciona un conjunto diverso de habilidades para afrontar desaf\u00EDos anal\u00EDticos complejos.',
      'about.p2': 'Actualmente trabajo como Data Engineer en Kair\u00F3s DS para Fundaci\u00F3n Universia. Dise\u00F1o e implemento procesos ETL escalables en entorno AWS utilizando SQL, Python, Spark y Scala, garantizando la disponibilidad y calidad de los datos para su posterior explotaci\u00F3n anal\u00EDtica. Tambi\u00E9n participo en modelado y visualizaci\u00F3n de datos con herramientas como PowerBI.',
      'about.p3': 'Adem\u00E1s de mi experiencia t\u00E9cnica, poseo un t\u00EDtulo profesional de m\u00FAsica, lo que refuerza mi creatividad, disciplina y capacidad para abordar desaf\u00EDos desde perspectivas diferentes y estructuradas. Creo en el poder del trabajo en equipo y aspiro a generar un impacto real mientras contin\u00FAo creciendo profesionalmente.',
      'skills.technical': 'T\u00E9cnicas',
      'skills.languages': 'Idiomas',
      'skills.category': 'Categor\u00EDa',
      'skills.skill': 'Tecnolog\u00EDa',
      'skills.cat.languages': 'Lenguajes',
      'skills.cat.frameworks': 'Frameworks',
      'skills.cat.databases': 'Bases de datos',
      'skills.cat.tools': 'Tecnolog\u00EDas / Herramientas',
      'skills.cat.practices': 'Pr\u00E1cticas',
      'skills.lang.native': 'Nativo',
      'skills.lang.professional': 'Profesional',
      'skills.lang.intermediate': 'Intermedio',
      'btn.more_experience': 'M\u00E1s experiencia',
      'btn.more_projects': 'M\u00E1s proyectos',
      'btn.view_project': 'Ver proyecto',
      'btn.project_repo': 'Repositorio del proyecto',
      'btn.project_report': 'Informe del proyecto',
      'toc.title': 'En esta p\u00E1gina',
      'toc.overview': 'Resumen',
      'footer.copyright': '\u00A9 2026 \u00D3scar Gonz\u00E1lez Fresno. Algunos derechos reservados.',
      'footer.built': 'Hecho con',
      'footer.astro': 'Astro',
      '404.title': 'Vaya! La p\u00E1gina que buscas no existe.',
      '404.back': 'Volver al inicio',
      'lang.en': 'Ingl\u00E9s',
      'lang.es': 'Espa\u00F1ol',
      'exp.title.0': 'Data Engineer — UC3M & Kairós DS (Madrid, España)',
      'exp.title.1': 'Ingeniero Martech — Merkle (Gijón, España)',
      'exp.title.2': 'Becario — Universidad de Oviedo (Gijón, España)',
      'exp.0.desc.0': 'Diseñé e implementé pipelines ETL de datos en AWS usando Scala, Spark y Python, procesando conjuntos de datos de escala de gigabytes y reduciendo los tiempos de ejecución de pipelines en un 30%.',
      'exp.0.desc.1': 'Orquesté flujos de trabajo complejos usando Apache Airflow, reduciendo los fallos de ingesta de datos en un 20% mediante mecanismos de reintento automatizado y alertas en tiempo real.',
      'exp.0.desc.2': 'Optimicé los costes de infraestructura cloud de AWS en un 15% mediante la migración y estructuración de lagos de datos históricos en Amazon S3 y Amazon Redshift, utilizando AWS Glue y Athena para el particionado de datos.',
      'exp.0.desc.3': 'Desarrollé dashboards interactivos de Power BI conectados a Athena y Redshift usando dbt, reduciendo el coste y tiempo de consulta en un 40%.',
      'edu.title.0': 'Universidad Carlos III de Madrid',
      'edu.title.1': 'Universidad de Oviedo',
      'edu.title.2': 'Universidad de Sevilla',
      'edu.title.3': 'Università degli Studi di Cagliari',
      'edu.title.4': 'Conservatorio Profesional de Música y Danza de Gijón',
      'edu.0.desc.0': 'Doble Máster en Ingeniería de Telecomunicación y Tecnologías Avanzadas de Comunicaciones',
      'edu.1.desc.0': 'Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación',
      'edu.2.desc.0': 'Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación',
      'edu.3.desc.0': 'Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación',
      'edu.4.desc.0': 'Especialidad de Guitarra',
    },
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

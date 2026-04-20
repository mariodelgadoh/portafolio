// ===== TYPING EFFECT =====
const professions = {
    es: ['Ingeniero en Sistemas', 'Desarrollador Frontend', 'Desarrollador Backend', 'Desarrollador Móvil', 'Especialista en BD', 'Diseñador UX/UI', 'Asesor Académico'],
    en: ['Systems Engineer', 'Frontend Developer', 'Backend Developer', 'Mobile Developer', 'Database Specialist', 'UX/UI Designer', 'Academic Tutor']
};

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement = document.querySelector('.typing');

const typingSpeed = 150;
const deletingSpeed = 80;
const pauseBetween = 4000;
const pauseAfterDelete = 1000;

function typeEffect() {
    if (!typingElement) return;
    
    const currentLang = localStorage.getItem('language') || 'es';
    const currentProfession = professions[currentLang][professionIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBetween);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions[currentLang].length;
        setTimeout(typeEffect, pauseAfterDelete);
    } else {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, speed);
    }
}

// ===== MODO OSCURO =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-theme', savedTheme === 'dark');
themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});

// ===== IDIOMAS =====
const translations = {
    es: {
        home: "Inicio",
        about: "Sobre Mí",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
        hello: "Hola, soy",
        and_im: "y soy",
        description: "Ingeniero en Sistemas Computacionales recién egresado por la Universidad de Guanajuato, con conocimientos en desarrollo de software, frontend, backend y aplicaciones móviles. Manejo de JavaScript, Vue.js, Node.js y Flutter, además de bases de datos relacionales. Interesado en crear soluciones tecnológicas funcionales y eficientes, con orientación a la innovación, la experiencia del usuario y el aprendizaje continuo.",
        download_cv: "Descargar CV",
        contact_me: "Contáctame",
        about_me: "Sobre Mí",
        about_title: "Ingeniero en Sistemas Computacionales",
        about_text1: "Recién egresado de Ingeniería en Sistemas Computacionales por la Universidad de Guanajuato, apasionado por el desarrollo de software y la creación de soluciones tecnológicas innovadoras. Cuento con conocimientos en desarrollo frontend, backend y aplicaciones móviles, buscando siempre aplicar las mejores prácticas y mantenerme actualizado con las últimas tecnologías.",
        about_text2: "Mi enfoque se centra en crear aplicaciones funcionales y eficientes que resuelvan problemas reales, con especial atención a la experiencia del usuario y la calidad del código. Me caracterizo por ser una persona proactiva, con capacidad de trabajo en equipo y aprendizaje continuo.",
        professional_interests: "Intereses Profesionales",
        interest1: "Desarrollo de software y aplicaciones innovadoras",
        interest2: "Diseño de interfaces atractivas y funcionales",
        interest3: "Aprendizaje de nuevas herramientas y lenguajes",
        interest4: "Colaboración en proyectos grupales",
        interest5: "Uso de tecnología para resolver problemas",
        skills_title: "Habilidades",
        skill1: "Desarrollo de software y aplicaciones",
        skill2: "Diseño de interfaces y experiencia de usuario",
        skill3: "Trabajo en equipo y colaboración",
        skill4: "Pensamiento crítico y resolución de problemas",
        skill5: "Adaptabilidad y aprendizaje continuo",
        technologies: "Tecnologías",
        my_services: "Mis Servicios",
        frontend_dev: "Desarrollo Frontend",
        frontend_desc: "Creación de interfaces web modernas, responsivas y atractivas utilizando Vue.js, JavaScript, HTML5 y CSS3.",
        backend_dev: "Desarrollo Backend",
        backend_desc: "Construcción de APIs y servidores robustos con Node.js, Express y arquitecturas escalables.",
        database_dev: "Desarrollo de Bases de Datos",
        database_desc: "Diseño, implementación y optimización de bases de datos relacionales (MySQL, PostgreSQL) y NoSQL (MongoDB).",
        mobile_dev: "Aplicaciones Móviles",
        mobile_desc: "Desarrollo de apps multiplataforma con Flutter para iOS y Android con interfaces nativas.",
        uxui_dev: "Diseño UX/UI",
        uxui_desc: "Diseño de interfaces atractivas y funcionales enfocadas en la experiencia de usuario y usabilidad.",
        tutoring: "Asesorías",
        tutoring_desc: "Asesorías personalizadas en matemáticas y programación.",
        my_portfolio: "Mi Portafolio",
        erp_etn: "ERP Enlaces Terrestres Nacionales (ETN)",
        fitodex: "FITODEX - Plataforma Agrícola",
        flutter_app: "App Móvil Fitodex",
        orbitas_app: "Simulador de Órbitas Planetarias",
        digitos_app: "Reconocimiento de Dígitos Manuscritos",
        music_app: "MusicArtists",
        api_rest: "API REST",
        uxui_project: "Diseño UX/UI",
        db_project: "Diseño de BD",
        get_in_touch: "Contacto",
        work_together: "Trabajemos juntos",
        contact_desc: "¿Tienes un proyecto en mente? Estoy interesado en nuevas oportunidades y colaboraciones.",
        follow_me: "Sígueme",
        name_placeholder: "Tu nombre completo",
        email_placeholder: "Tu correo electrónico",
        subject_placeholder: "Asunto",
        message_placeholder: "Tu mensaje",
        send_message: "Enviar Mensaje",
        all_rights: "Todos los derechos reservados.",
        profile_title: "Ingeniero en Sistemas Computacionales",
        profile_university: "Universidad de Guanajuato",
        project_description: "Descripción del Proyecto",
        key_features: "Características Principales",
        technologies_used: "Tecnologías Utilizadas",
        system_requirements: "Requisitos del Sistema",
        installation: "Instalación",
        execution: "Ejecución",
        github_repo: "Repositorio GitHub",
        github_repos: "Repositorios GitHub",
        web_link: "Sitio Web",
        project_gallery: "Galería del Proyecto",
        erp_description: "Sistema ERP desarrollado para la empresa de transporte Enlaces Terrestres Nacionales (ETN) que integra y gestiona eficientemente las operaciones internas a través de siete departamentos principales: Recursos Humanos, Finanzas, Inventarios, Compras, Proveedores, Ventas y Logística. El sistema cuenta con un usuario Admin con acceso total, así como usuarios generales y responsables para cada área.",
        fitodex_description: "Conoce más sobre Fitodex, nuestra misión y visión. Somos una empresa agrícola dedicada a la producción y venta de cultivos, insecticidas y otros productos relacionados. Nuestra misión es ofrecer soluciones efectivas y sostenibles para el manejo de plagas y la mejora de los cultivos, garantizando la calidad y eficacia de nuestros productos. Nuestra visión es ser líderes en el sector agrícola, proporcionando innovaciones que promuevan prácticas agrícolas responsables y sostenibles, contribuyendo al crecimiento y éxito de nuestros clientes.",
        fitodex_description2: "Fitodex ha sido desarrollada para facilitar el acceso a información técnica sobre pesticidas y fertilizantes, dirigida a productores agrícolas, técnicos y profesionales del sector agropecuario. Su función principal es permitir una búsqueda ágil y precisa de productos mediante el nombre comercial o el ingrediente activo, brindando apoyo en la toma de decisiones relacionadas con el manejo fitosanitario de los cultivos.",
        gallery_login: "Pantalla de Login",
        gallery_admin: "Pantalla de Admin",
        gallery_rrhh: "RH - Contratación",
        gallery_finanzas: "Finanzas - Gráficas",
        gallery_inventario: "Inventario General",
        gallery_compras: "Compras - Formulario",
        gallery_proveedores: "Lista de Proveedores",
        gallery_ventas: "Ventas de Boletos",
        gallery_logistica: "Logística - Rutas",
        gallery_reportes: "Módulo de Reportes",
        fitodex_inicio: "Página de Inicio",
        fitodex_cultivos: "Base de Cultivos",
        fitodex_insecticidas: "Base de Insecticidas",
        fitodex_plagas: "Universidad de Guanajuato",
        fitodex_busqueda: "Sistema de Búsqueda",
        fitodex_detalle_cultivo: "Detalles",
        fitodex_detalle_insecticida: "Ubicación",
        fitodex_detalle_plaga: "Editar Usuario",
        fitodex_admin: "Panel de Usuarios",
        fitodex_estadisticas: "Iniciar Sesión",
        click_for_more: "CLIC PARA SABER MÁS",
        fill_all_fields: "Por favor completa todos los campos",
        invalid_email: "Por favor ingresa un correo electrónico válido",
        sending: "Enviando...",
        success_message: "¡Mensaje enviado con éxito! Te contactaré pronto.",
        error_message: "Error al enviar el mensaje. Por favor intenta de nuevo.",
        connection_error: "Error de conexión. Por favor verifica tu internet e intenta de nuevo.",
        email_sent: "Correo enviado correctamente",
        app_fitodex_description: "Conoce más sobre Fitodex, nuestra misión y visión. Somos una empresa agrícola dedicada a la producción y venta de cultivos, insecticidas y otros productos relacionados. Nuestra misión es ofrecer soluciones efectivas y sostenibles para el manejo de plagas y la mejora de los cultivos, garantizando la calidad y eficacia de nuestros productos. Nuestra visión es ser líderes en el sector agrícola, proporcionando innovaciones que promuevan prácticas agrícolas responsables y sostenibles, contribuyendo al crecimiento y éxito de nuestros clientes.",
        app_fitodex_description2: "Aplicación móvil desarrollada para facilitar el acceso a información técnica sobre pesticidas y fertilizantes, dirigida a productores agrícolas, técnicos y profesionales del sector agropecuario. Su función principal es permitir una búsqueda ágil y precisa de productos mediante el nombre comercial o el ingrediente activo, brindando apoyo en la toma de decisiones relacionadas con el manejo fitosanitario de los cultivos.",
        app_inicio: "Inicializando APP",
        app_login: "Inicio",
        app_registro: "Insecticide Screen",
        app_home: "Pantalla de Búsqueda",
        app_busqueda: "Atención a Clientes",
        app_resultados: "Nosotros",
        app_detalles: "Avisos de Privacidad",
        app_perfil: "Universidad de Guanajuato",
        app_configuracion: "Ubicación",
        app_acerca: "Equipo",
        orbitas_description: "Programa de Simulación de Órbitas Planetarias y Cálculo del Error Cuadrático Medio. En el ámbito de la astronomía y la exploración espacial, la comprensión precisa de las órbitas planetarias es crucial para diversas aplicaciones, que van desde la investigación científica hasta el diseño de misiones espaciales. Este proyecto se enfoca en el desarrollo de un programa, accesible a través de una página web, que permite simular las órbitas planetarias dentro del sistema solar. La evaluación de la exactitud de las simulaciones se realiza mediante el uso del error cuadrático medio (ECM). El programa emplea métodos numéricos avanzados, como el método de Newton-Raphson, para el cálculo de la anomalía excéntrica y la minimización del error cuadrático.",
        orbitas_inicio: "Pantalla de inicio",
        orbitas_info: "Información sobre Error Cuadrático",
        orbitas_operaciones: "Ingreso de datos",
        orbitas_resultados: "Resultados de cálculos",
        orbitas_anomalia: "Información Anomalía Media",
        orbitas_excentricidad: "Información Excentricidad",
        orbitas_sistemasolar: "Información general del sistema solar",
        orbitas_planetas: "Información detallada de planetas",
        orbitas_tabla: "Tabla de datos orbitales",
        orbitas_visualizacion: "Visualización de órbitas planetarias",
        numerical_methods: "Métodos Numéricos",
        orbitas_feature1: "Simulación de órbitas planetarias:",
        orbitas_feature1_desc: "Utiliza parámetros orbitales y principios físicos fundamentales para modelar el movimiento de los planetas en el espacio.",
        orbitas_feature2: "Cálculo de posiciones:",
        orbitas_feature2_desc: "Calcula las posiciones de los planetas en función del tiempo, empleando el método de Newton-Raphson para garantizar la precisión de las órbitas simuladas.",
        orbitas_feature3: "Representación visual:",
        orbitas_feature3_desc: "Proporciona una representación visual precisa de las órbitas de los planetas alrededor del Sol.",
        orbitas_feature4: "Cálculo del Error Cuadrático Medio:",
        orbitas_feature4_desc: "Compara las posiciones predichas por el modelo con datos observacionales reales para cuantificar la precisión de la simulación.",
        orbitas_feature5: "Ecuación de Kepler:",
        orbitas_feature5_desc: "Implementa la ecuación M = E - e·sin(E) para relacionar la anomalía excéntrica con la anomalía media.",
        digitos_description: "Sistema de reconocimiento de dígitos manuscritos que combina el dataset MNIST con muestras propias del usuario para crear un modelo personalizado de alta precisión utilizando Random Forest. Desarrollado por Equipo PI para la materia de Inteligencia Artificial.",
        digitos_main: "Pantalla principal",
        digitos_dibujo: "Dibujando dígitos",
        digitos_guardar: "Guardando muestras",
        digitos_etiqueta: "Etiquetado de dígitos",
        digitos_entrenamiento: "Entrenamiento del modelo",
        digitos_reconocimiento: "Reconocimiento de dígitos",
        digitos_resultados: "Resultados con niveles de confianza",
        digitos_metricas: "Métricas detalladas del modelo",
        digitos_carpetas: "Resultados de digitos del 0 al 4",
        digitos_correccion: "Resultados de digitos del 5 al 9",
        digitos_feature1: "Preprocesamiento avanzado:",
        digitos_feature1_desc: "Procesamiento de imágenes similar al usado en MNIST con conversión a escala de grises, inversión de colores, recorte automático y redimensionamiento a 28x28 píxeles.",
        digitos_feature2: "Entrenamiento personalizado:",
        digitos_feature2_desc: "Permite capturar muestras propias dibujadas con el mouse para crear un modelo adaptado al estilo de escritura del usuario.",
        digitos_feature3: "Interfaz gráfica intuitiva:",
        digitos_feature3_desc: "Dispone de 5 cuadros independientes para dibujar dígitos con botones para guardar muestras, limpiar y reconocer.",
        digitos_feature5: "Métricas detalladas:",
        digitos_feature5_desc: "Genera reportes completos con precisión general, matriz de confusión, métricas F1-score y análisis de confusiones entre dígitos.",
        libraries: "Bibliotecas",
        music_description: "MusicArtists es una plataforma web completa para la gestión y reproducción de música, diseñada para conectar a los usuarios con sus artistas, álbumes y canciones favoritas. Se trata de un proyecto full-stack que combina un frontend interactivo desarrollado con Vue.js 3 y un backend robusto construido con Node.js, Express y MongoDB como base de datos NoSQL.",
        music_feature1: "Reproductor persistente por usuario:",
        music_feature1_desc: "Cada usuario tiene su propia cola de reproducción y estado de reproducción individual que se guarda al cerrar sesión.",
        music_feature2: "Panel de administración completo:",
        music_feature2_desc: "Dashboard con estadísticas en tiempo real y operaciones CRUD sobre artistas, álbumes, canciones y usuarios.",
        music_feature3: "Sistema de autenticación:",
        music_feature3_desc: "Implementa JWT, contraseñas hasheadas con bcrypt y validación de roles para proteger rutas administrativas.",
        music_feature4: "Manejo inteligente de imágenes:",
        music_feature4_desc: "Las canciones heredan automáticamente la portada del álbum, mientras que los sencillos mantienen su propia imagen personalizada.",
        music_feature5: "Diseño responsive:",
        music_feature5_desc: "Interfaz completamente adaptable a móviles, tablets y desktop con transiciones suaves y feedback visual inmediato.",
        music_main: "Pantalla principal",
        music_player: "Reproductor de música",
        music_artists: "Lista de artistas",
        music_albums: "Vista de artista",
        music_admin: "Panel de administración",
        music_stats: "Dashboard con estadísticas",
        music_crud: "Gestión de contenido",
        music_login: "Pantalla de inicio de sesión",
        music_playlists: "Pantalla de registro",
        music_responsive: "Vista del albúm",
        pokedex_app: "Pokédex Web App",
        pokedex_description: "Este proyecto es una aplicación web interactiva tipo Pokédex, que permite consultar información detallada de distintos Pokémon de manera dinámica. La aplicación consume datos desde una API externa (PokéAPI) para mostrar información como nombre, imagen, habilidades, tipos y otras características relevantes de cada Pokémon. El objetivo principal del proyecto es demostrar habilidades en desarrollo frontend, manejo de datos asíncronos y diseño de interfaces amigables para el usuario.",
        pokedex_feature1: "Búsqueda de Pokémon:",
        pokedex_feature1_desc: "Permite buscar Pokémon por nombre o número de ID, mostrando resultados instantáneos.",
        pokedex_feature2: "Visualización de datos:",
        pokedex_feature2_desc: "Muestra información detallada como imagen, tipos, habilidades, peso, altura y estadísticas base.",
        pokedex_feature3: "Consumo de API:",
        pokedex_feature3_desc: "Utiliza Fetch API para consumir datos en tiempo real desde PokéAPI, la fuente oficial de datos de Pokémon.",
        pokedex_feature4: "Interfaz responsiva:",
        pokedex_feature4_desc: "Diseño completamente adaptable a dispositivos móviles, tablets y desktop.",
        pokedex_feature5: "Despliegue en la nube:",
        pokedex_feature5_desc: "Aplicación desplegada en Vercel, accesible desde cualquier lugar con conexión a internet.",
        pokedex_main: "Pantalla principal",
        pokedex_search: "Búsqueda de Pokémon",
        pokedex_results: "Resultados de búsqueda",
        pokedex_details: "Detalles del Pokémon",
        pokedex_list: "Lista de Pokémon",
        pokedex_menu_games: "Menú de Juegos",
        pokedex_generation: "Selecciona una Generación",
        pokedex_who_is_that_pokemon: "¿Quién es ese Pokemon?",
        pokedex_memory_game: "Memorama",
        pokedex_end_game: "Fin de la partida",
        banderas_app: "Banderas del Mundo - Aplicación Web Interactiva",
        banderas_description: "Esta aplicación web interactiva permite explorar y visualizar banderas de distintos países del mundo. La aplicación consume una API externa (REST Countries API) para obtener información actualizada sobre los países, incluyendo sus banderas, capitales, poblaciones, idiomas y otras características relevantes. El objetivo principal del proyecto es ofrecer una experiencia visual atractiva y dinámica, donde el usuario pueda interactuar con los datos en tiempo real. Sirve como práctica para el consumo de APIs, manipulación del DOM y desarrollo de interfaces modernas en el frontend.",
        banderas_feature1: "Exploración de países:",
        banderas_feature1_desc: "Visualiza todos los países del mundo con sus respectivas banderas e información relevante.",
        banderas_feature2: "Búsqueda en tiempo real:",
        banderas_feature2_desc: "Filtra países por nombre de forma rápida y precisa mientras escribes.",
        banderas_feature3: "Filtrado por región:",
        banderas_feature3_desc: "Filtra países por continente (África, América, Asia, Europa, Oceanía).",
        banderas_feature4: "Información detallada:",
        banderas_feature4_desc: "Muestra capital, población, región, idiomas, monedas y dominio del país.",
        banderas_feature5: "Diseño responsivo:",
        banderas_feature5_desc: "Interfaz completamente adaptable a dispositivos móviles, tablets y desktop.",
        banderas_main: "Pantalla principal",
        banderas_search: "Ingresas tu Usuario",
        banderas_filter: "Inicia el Juego",
        banderas_details: "Bandera Acertada",
        banderas_mobile: "Cargando Bandera Desde la API",
        banderas_api: "Bandera Incorrecta",
        banderas_code: "Juego Terminado",
        banderas_vercel: "Juego Nuevo",
        banderas_github: "Vida Perdida",
        banderas_interactive: "Bandera Mexicana",
        eventos_app: "Eventos San Miguel de Allende - Plataforma Web",
        eventos_description: "Esta plataforma web está enfocada en la visualización y gestión de eventos culturales y sociales en San Miguel de Allende. Su objetivo principal es ofrecer a los usuarios un espacio donde puedan consultar información actualizada sobre actividades, festividades y eventos relevantes de la ciudad. La aplicación permite mostrar eventos de forma dinámica, utilizando una arquitectura moderna que combina frontend y backend. Además, integra una base de datos para almacenar y gestionar la información de los eventos, lo que facilita su actualización y escalabilidad. El proyecto también destaca por el uso de despliegues en la nube, utilizando diferentes plataformas para frontend y backend, lo que refleja buenas prácticas de desarrollo moderno y separación de responsabilidades.",
        eventos_feature1: "Visualización de eventos:",
        eventos_feature1_desc: "Muestra eventos culturales y sociales de San Miguel de Allende de forma dinámica y organizada.",
        eventos_feature2: "Gestión de contenido:",
        eventos_feature2_desc: "Permite administrar y actualizar la información de eventos mediante una base de datos centralizada.",
        eventos_feature3: "Arquitectura moderna:",
        eventos_feature3_desc: "Implementa separación clara entre frontend y backend para mayor escalabilidad y mantenibilidad.",
        eventos_feature4: "Tipado estático:",
        eventos_feature4_desc: "Utiliza TypeScript para mejorar la calidad del código y facilitar el desarrollo.",
        eventos_feature5: "Despliegue en la nube:",
        eventos_feature5_desc: "Frontend desplegado en Netlify y backend en Render, demostrando prácticas modernas de DevOps.",
        eventos_main: "Pantalla principal",
        eventos_list: "Lista de eventos",
        eventos_details: "Detalles del evento",
        eventos_admin: "Panel de Ingresar",
        eventos_mobile: "Panel de Registro",
        eventos_database: "Panel de Administrador",
        eventos_code: "Panel Favoritos",
        eventos_netlify: "Panel Crear un Evento",
        eventos_render: "Carrusel de Eventos",
        eventos_github: "Panel de calificar y comentar evento",
    },
    en: {
        home: "Home",
        about: "About Me",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        hello: "Hello, I'm",
        and_im: "and I'm",
        description: "Recent graduate in Computer Systems Engineering from the University of Guanajuato, with knowledge in software development, frontend, backend, and mobile applications. Experienced in JavaScript, Vue.js, Node.js, Flutter, and relational databases. Interested in creating functional and efficient technological solutions, with a focus on innovation, user experience, and continuous learning.",
        download_cv: "Download CV",
        contact_me: "Contact Me",
        about_me: "About Me",
        about_title: "Computer Systems Engineer",
        about_text1: "Recent graduate in Computer Systems Engineering from the University of Guanajuato, passionate about software development and creating innovative technological solutions. I have knowledge in frontend, backend, and mobile development, always seeking to apply best practices and stay updated with the latest technologies.",
        about_text2: "My focus is on creating functional and efficient applications that solve real problems, with special attention to user experience and code quality. I am proactive, with teamwork skills and continuous learning.",
        professional_interests: "Professional Interests",
        interest1: "Software development and innovative applications",
        interest2: "Attractive and functional interface design",
        interest3: "Learning new tools and programming languages",
        interest4: "Collaboration in group projects",
        interest5: "Using technology to solve problems",
        skills_title: "Skills",
        skill1: "Software and application development",
        skill2: "Interface design and user experience",
        skill3: "Teamwork and collaboration",
        skill4: "Critical thinking and problem solving",
        skill5: "Adaptability and continuous learning",
        technologies: "Technologies",
        my_services: "My Services",
        frontend_dev: "Frontend Development",
        frontend_desc: "Creation of modern, responsive, and attractive web interfaces using Vue.js, JavaScript, HTML5, and CSS3.",
        backend_dev: "Backend Development",
        backend_desc: "Building robust APIs and servers with Node.js, Express, and scalable architectures.",
        database_dev: "Database Development",
        database_desc: "Design, implementation, and optimization of relational databases (MySQL, PostgreSQL) and NoSQL (MongoDB).",
        mobile_dev: "Mobile Applications",
        mobile_desc: "Cross-platform app development with Flutter for iOS and Android with native interfaces.",
        uxui_dev: "UX/UI Design",
        uxui_desc: "Design of attractive and functional interfaces focused on user experience and usability.",
        tutoring: "Tutoring",
        tutoring_desc: "Personalized tutoring in mathematics and programming.",
        my_portfolio: "My Portfolio",
        erp_etn: "ERP Enlaces Terrestres Nacionales (ETN)",
        fitodex: "FITODEX - Agricultural Platform",
        flutter_app: "Fitodex Mobile App",
        orbitas_app: "Planetary Orbits Simulator",
        digitos_app: "Handwritten Digit Recognition",
        music_app: "MusicArtists",
        api_rest: "REST API",
        uxui_project: "UX/UI Design",
        db_project: "Database Design",
        get_in_touch: "Get In Touch",
        work_together: "Let's work together",
        contact_desc: "Do you have a project in mind? I'm interested in new opportunities and collaborations.",
        follow_me: "Follow Me",
        name_placeholder: "Your full name",
        email_placeholder: "Your email address",
        subject_placeholder: "Subject",
        message_placeholder: "Your message",
        send_message: "Send Message",
        all_rights: "All rights reserved.",
        profile_title: "Computer Systems Engineer",
        profile_university: "University of Guanajuato",
        project_description: "Project Description",
        key_features: "Key Features",
        technologies_used: "Technologies Used",
        system_requirements: "System Requirements",
        installation: "Installation",
        execution: "Execution",
        github_repo: "GitHub Repository",
        github_repos: "GitHub Repositories",
        web_link: "Website",
        project_gallery: "Project Gallery",
        erp_description: "ERP system developed for the transportation company Enlaces Terrestres Nacionales (ETN) that integrates and efficiently manages internal operations through seven main departments: Human Resources, Finance, Inventory, Purchasing, Suppliers, Sales, and Logistics. The system has an Admin user with full access, as well as general users and managers for each area.",
        fitodex_description: "Learn more about Fitodex, our mission and vision. We are an agricultural company dedicated to the production and sale of crops, insecticides and other related products. Our mission is to offer effective and sustainable solutions for pest management and crop improvement, guaranteeing the quality and effectiveness of our products. Our vision is to be leaders in the agricultural sector, providing innovations that promote responsible and sustainable agricultural practices, contributing to the growth and success of our clients.",
        fitodex_description2: "Fitodex has been developed to facilitate access to technical information on pesticides and fertilizers, aimed at agricultural producers, technicians and professionals in the agricultural sector. Its main function is to allow agile and precise product search by trade name or active ingredient, providing support in decision-making related to crop phytosanitary management.",
        gallery_login: "Login Screen",
        gallery_admin: "Admin Screen",
        gallery_rrhh: "HR - Hiring",
        gallery_finanzas: "Finance - Charts",
        gallery_inventario: "General Inventory",
        gallery_compras: "Purchasing - Form",
        gallery_proveedores: "Suppliers List",
        gallery_ventas: "Ticket Sales",
        gallery_logistica: "Logistics - Routes",
        gallery_reportes: "Reports Module",
        fitodex_inicio: "Home Page",
        fitodex_cultivos: "Crops Database",
        fitodex_insecticidas: "Insecticides Database",
        fitodex_plagas: "University of Guanajuato",
        fitodex_busqueda: "Search System",
        fitodex_detalle_cultivo: "Details",
        fitodex_detalle_insecticida: "Location",
        fitodex_detalle_plaga: "Edit User",
        fitodex_admin: "User Panel",
        fitodex_estadisticas: "Log In",
        click_for_more: "CLICK FOR MORE INFO",
        fill_all_fields: "Please fill in all fields",
        invalid_email: "Please enter a valid email address",
        sending: "Sending...",
        success_message: "Message sent successfully! I'll contact you soon.",
        error_message: "Error sending message. Please try again.",
        connection_error: "Connection error. Please check your internet and try again.",
        email_sent: "Email sent successfully",
        app_fitodex_description: "Learn more about Fitodex, our mission and vision. We are an agricultural company dedicated to the production and sale of crops, insecticides and other related products. Our mission is to offer effective and sustainable solutions for pest management and crop improvement, guaranteeing the quality and effectiveness of our products. Our vision is to be leaders in the agricultural sector, providing innovations that promote responsible and sustainable agricultural practices, contributing to the growth and success of our clients.",
        app_fitodex_description2: "Mobile application developed to facilitate access to technical information on pesticides and fertilizers, aimed at agricultural producers, technicians and professionals in the agricultural sector. Its main function is to allow agile and precise product search by trade name or active ingredient, providing support in decision-making related to crop phytosanitary management.",
        app_inicio: "Initializing APP",
        app_login: "Home",
        app_registro: "Insecticide Screen",
        app_home: "Search Screen",
        app_busqueda: "Customer Service",
        app_resultados: "We Fitodex",
        app_detalles: "Privacy Notices",
        app_perfil: "University of Guanajuato",
        app_configuracion: "Location",
        app_acerca: "Team",
        orbitas_description: "Planetary Orbits Simulation Program and Mean Squared Error Calculation. In the field of astronomy and space exploration, precise understanding of planetary orbits is crucial for various applications, ranging from scientific research to space mission design. This project focuses on developing a program, accessible through a web page, that allows simulating planetary orbits within the solar system. The accuracy of the simulations is evaluated using the mean squared error (MSE). The program employs advanced numerical methods, such as the Newton-Raphson method, for calculating eccentric anomaly and minimizing quadratic error.",
        orbitas_inicio: "Home Screen",
        orbitas_info: "Information about Mean Squared Error",
        orbitas_operaciones: "Data Entry",
        orbitas_resultados: "Calculation Results",
        orbitas_anomalia: "Mean Anomaly Information",
        orbitas_excentricidad: "Eccentricity Information",
        orbitas_sistemasolar: "Solar System General Information",
        orbitas_planetas: "Detailed Planet Information",
        orbitas_tabla: "Orbital Data Table",
        orbitas_visualizacion: "Planetary Orbits Visualization",
        numerical_methods: "Numerical Methods",
        orbitas_feature1: "Planetary orbit simulation:",
        orbitas_feature1_desc: "Uses orbital parameters and fundamental physical principles to model the movement of planets in space.",
        orbitas_feature2: "Position calculation:",
        orbitas_feature2_desc: "Calculates the positions of planets as a function of time, using the Newton-Raphson method to ensure the accuracy of simulated orbits.",
        orbitas_feature3: "Visual representation:",
        orbitas_feature3_desc: "Provides an accurate visual representation of the orbits of planets around the Sun.",
        orbitas_feature4: "Mean Squared Error calculation:",
        orbitas_feature4_desc: "Compares the positions predicted by the model with real observational data to quantify the accuracy of the simulation.",
        orbitas_feature5: "Kepler's equation:",
        orbitas_feature5_desc: "Implements the equation M = E - e·sin(E) to relate eccentric anomaly to mean anomaly.",
        digitos_description: "Handwritten digit recognition system that combines the MNIST dataset with the user's own samples to create a high-precision personalized model using Random Forest. Developed by Team PI for the Artificial Intelligence course.",
        digitos_main: "Main Screen",
        digitos_dibujo: "Drawing digits",
        digitos_guardar: "Saving samples",
        digitos_etiqueta: "Digit labeling",
        digitos_entrenamiento: "Model training",
        digitos_reconocimiento: "Digit recognition",
        digitos_resultados: "Results with confidence levels",
        digitos_metricas: "Detailed model metrics",
        digitos_carpetas: "Results for digits from 0 to 4",
        digitos_correccion: "Results for digits from 5 to 9",
        digitos_feature1: "Advanced preprocessing:",
        digitos_feature1_desc: "Image processing similar to MNIST with grayscale conversion, color inversion, automatic cropping, and resizing to 28x28 pixels.",
        digitos_feature2: "Personalized training:",
        digitos_feature2_desc: "Allows capturing custom samples drawn with the mouse to create a model adapted to the user's writing style.",
        digitos_feature3: "Intuitive graphical interface:",
        digitos_feature3_desc: "Features 5 independent drawing boxes with buttons to save samples, clear, and recognize.",
        digitos_feature5: "Detailed metrics:",
        digitos_feature5_desc: "Generates complete reports with overall accuracy, confusion matrix, F1-score metrics, and analysis of digit confusions.",
        libraries: "Libraries",
        music_description: "MusicArtists is a complete web platform for music management and playback, designed to connect users with their favorite artists, albums, and songs. It is a full-stack project that combines an interactive frontend developed with Vue.js 3 and a robust backend built with Node.js, Express, and MongoDB as a NoSQL database.",
        music_feature1: "Persistent player per user:",
        music_feature1_desc: "Each user has their own playback queue and individual playback state that is saved when logging out.",
        music_feature2: "Complete admin panel:",
        music_feature2_desc: "Dashboard with real-time statistics and CRUD operations on artists, albums, songs, and users.",
        music_feature3: "Authentication system:",
        music_feature3_desc: "Implements JWT, bcrypt-hashed passwords, and role validation to protect administrative routes.",
        music_feature4: "Intelligent image management:",
        music_feature4_desc: "Songs automatically inherit the album cover, while singles maintain their own custom image.",
        music_feature5: "Responsive design:",
        music_feature5_desc: "Fully adaptable interface for mobile, tablet, and desktop with smooth transitions and immediate visual feedback.",
        music_main: "Main screen",
        music_player: "Music player",
        music_artists: "Artists list",
        music_albums: "Artist's view",
        music_admin: "Admin panel",
        music_stats: "Dashboard with statistics",
        music_crud: "Content management",
        music_login: "Login screen",
        music_playlists: "Sign up screen",
        music_responsive: "Album view",
        pokedex_app: "Pokédex Web App",
        pokedex_description: "This project is an interactive Pokédex-style web application that allows querying detailed information about different Pokémon dynamically. The application consumes data from an external API (PokéAPI) to display information such as name, image, abilities, types, and other relevant characteristics of each Pokémon. The main objective of the project is to demonstrate skills in frontend development, asynchronous data handling, and user-friendly interface design.",
        pokedex_feature1: "Pokémon search:",
        pokedex_feature1_desc: "Allows searching for Pokémon by name or ID number, displaying instant results.",
        pokedex_feature2: "Data visualization:",
        pokedex_feature2_desc: "Shows detailed information such as image, types, abilities, weight, height, and base stats.",
        pokedex_feature3: "API consumption:",
        pokedex_feature3_desc: "Uses Fetch API to consume real-time data from PokéAPI, the official Pokémon data source.",
        pokedex_feature4: "Responsive interface:",
        pokedex_feature4_desc: "Fully adaptable design for mobile devices, tablets, and desktop.",
        pokedex_feature5: "Cloud deployment:",
        pokedex_feature5_desc: "Application deployed on Vercel, accessible from anywhere with an internet connection.",
        pokedex_main: "Main screen",
        pokedex_search: "Pokémon search",
        pokedex_results: "Search results",
        pokedex_details: "Pokémon details",
        pokedex_list: "List of Pokémon",
        pokedex_menu_games: "Games Menu",
        pokedex_generation: "Select a Generation",
        pokedex_who_is_that_pokemon: "Who is that Pokémon?",
        pokedex_memory_game: "Memory Game",
        pokedex_end_game: "Game Over",
        banderas_app: "World Flags - Interactive Web Application",
        banderas_description: "This interactive web application allows you to explore and view flags from different countries around the world. The application consumes an external API (REST Countries API) to obtain up-to-date information about countries, including their flags, capitals, populations, languages, and other relevant characteristics. The main objective of the project is to offer an attractive and dynamic visual experience, where the user can interact with data in real time. It serves as practice for API consumption, DOM manipulation, and modern frontend interface development.",
        banderas_feature1: "Country exploration:",
        banderas_feature1_desc: "View all countries of the world with their respective flags and relevant information.",
        banderas_feature2: "Real-time search:",
        banderas_feature2_desc: "Filter countries by name quickly and accurately as you type.",
        banderas_feature3: "Region filtering:",
        banderas_feature3_desc: "Filter countries by continent (Africa, Americas, Asia, Europe, Oceania).",
        banderas_feature4: "Detailed information:",
        banderas_feature4_desc: "Shows capital, population, region, languages, currencies, and country domain.",
        banderas_feature5: "Responsive design:",
        banderas_feature5_desc: "Fully adaptable interface for mobile devices, tablets, and desktop.",
        banderas_main: "Main screen",
        banderas_search: "Enter your Username",
        banderas_filter: "Start the Game",
        banderas_details: "Correct Flag",
        banderas_mobile: "Loading Flag From API",
        banderas_api: "Incorrect Flag",
        banderas_code: "Game Over",
        banderas_vercel: "New Game",
        banderas_github: "Lost Life",
        banderas_interactive: "Mexican Flag",
        eventos_app: "San Miguel de Allende Events - Web Platform",
        eventos_description: "This web platform focuses on the visualization and management of cultural and social events in San Miguel de Allende. Its main objective is to offer users a space where they can access updated information about activities, festivities, and relevant events in the city. The application allows dynamic display of events using a modern architecture that combines frontend and backend. It also integrates a database to store and manage event information, facilitating updates and scalability. The project also stands out for its cloud deployments, using different platforms for frontend and backend, reflecting modern development best practices and separation of concerns.",
        eventos_feature1: "Event visualization:",
        eventos_feature1_desc: "Displays cultural and social events from San Miguel de Allende in a dynamic and organized manner.",
        eventos_feature2: "Content management:",
        eventos_feature2_desc: "Allows managing and updating event information through a centralized database.",
        eventos_feature3: "Modern architecture:",
        eventos_feature3_desc: "Implements clear separation between frontend and backend for greater scalability and maintainability.",
        eventos_feature4: "Static typing:",
        eventos_feature4_desc: "Uses TypeScript to improve code quality and facilitate development.",
        eventos_feature5: "Cloud deployment:",
        eventos_feature5_desc: "Frontend deployed on Netlify and backend on Render, demonstrating modern DevOps practices.",
        eventos_main: "Main screen",
        eventos_list: "Events list",
        eventos_details: "Event details",
        eventos_admin: "Login panel",
        eventos_mobile: "Sign up panel",
        eventos_database: "Administrator Panel",
        eventos_code: "Favorites Panel",
        eventos_netlify: "Create an Event Panel",
        eventos_render: "Event Carousel",
        eventos_github: "Event rating and comment panel",
    }
};

// Elementos del selector de idioma
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');
const currentFlag = document.getElementById('currentFlag');
const langOptions = document.querySelectorAll('.lang-option');

// Cargar idioma guardado
const savedLang = localStorage.getItem('language') || 'es';
updateLanguage(savedLang);
updateFlag(savedLang);

langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!langToggle.contains(e.target)) {
        langDropdown.classList.remove('show');
    }
});

langDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = option.dataset.lang;
        updateLanguage(lang);
        updateFlag(lang);
        localStorage.setItem('language', lang);
        langDropdown.classList.remove('show');
        
        professionIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typeEffect();
        
        updateModalTexts('erp', lang);
        updateModalTexts('fitodex', lang);
        updateModalTexts('flutter', lang);
        updateModalTexts('orbitas', lang);
        updateModalTexts('digitos', lang);
        updateModalTexts('music', lang);
        updateModalTexts('pokedex', lang);
        updateModalTexts('banderas', lang);
        updateModalTexts('eventos', lang);
        updateViewerCaption(lang);
    });
});

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.gallery-item-tooltip[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        const sendMessageSpan = submitBtn.querySelector('span');
        if (sendMessageSpan && translations[lang].send_message) {
            sendMessageSpan.textContent = translations[lang].send_message;
        }
    }
    
    document.documentElement.lang = lang;
}

function updateFlag(lang) {
    const flagUrl = lang === 'es' 
        ? 'https://flagcdn.com/w40/mx.png'
        : 'https://flagcdn.com/w40/us.png';
    currentFlag.src = flagUrl;
}

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Función mejorada para descargar CV
function downloadCV() {
    const currentLang = localStorage.getItem('language') || 'es';
    
    const cvFiles = {
        es: 'Mario-Delgado-CV.pdf',
        en: 'Mario-Delgado-CV-English.pdf'
    };
    
    const fileName = cvFiles[currentLang];
    
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    const message = currentLang === 'es' 
        ? 'CV descargado exitosamente' 
        : 'CV downloaded successfully';
    showNotification(message);
}

function showNotification(message) {
    let notification = document.querySelector('.download-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'download-notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===== CONTACT FORM HANDLING - MÉTODO TRADICIONAL =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');
const paperPlaneIcon = submitBtn.querySelector('.fa-paper-plane');

submitBtn.addEventListener('mouseenter', () => {
    paperPlaneIcon.style.animation = 'fly 0.8s ease infinite';
});

submitBtn.addEventListener('mouseleave', () => {
    paperPlaneIcon.style.animation = 'none';
});

if (contactForm) {
    contactForm.setAttribute('novalidate', '');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const currentLang = localStorage.getItem('language') || 'es';
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showFormMessage(translations[currentLang].fill_all_fields, 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage(translations[currentLang].invalid_email, 'error');
            return;
        }
        
        // Mostrar mensaje de "enviando"
        submitBtn.disabled = true;
        paperPlaneIcon.className = 'fas fa-spinner fa-spin';
        submitBtn.innerHTML = `<span>${translations[currentLang].sending}</span> `;
        submitBtn.appendChild(paperPlaneIcon);
        
        // Crear un iframe oculto para recibir la respuesta
        const iframe = document.createElement('iframe');
        iframe.name = 'hiddenIframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        // Configurar el formulario para enviar al iframe
        contactForm.target = 'hiddenIframe';
        
        // Enviar el formulario
        contactForm.submit();
        
        // Mostrar mensaje de éxito inmediatamente
        showFormMessage(translations[currentLang].success_message, 'success');
        showNotification(translations[currentLang].email_sent);
        
        // Resetear formulario después de un breve momento
        setTimeout(() => {
            contactForm.reset();
            
            // Restaurar el comportamiento normal del formulario
            contactForm.target = '_self';
            document.body.removeChild(iframe);
            
            // Restaurar botón
            submitBtn.disabled = false;
            const sendMessageText = translations[currentLang].send_message || 'Send Message';
            submitBtn.innerHTML = `<span>${sendMessageText}</span> `;
            submitBtn.appendChild(paperPlaneIcon);
            paperPlaneIcon.className = 'fas fa-paper-plane';
        }, 1000);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// ===== FUNCIONES PARA MODALES DE PROYECTOS =====
let currentProject = null;
let currentImageIndex = 0;
let galleryImages = [];

function openProjectModal(projectId) {
    const modal = document.getElementById(projectId + 'Modal');
    if (modal) {
        if (currentProject && currentProject !== projectId) {
            closeProjectModal(currentProject);
        }
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        currentProject = projectId;
        
        setTimeout(() => {
            initGalleryImages(projectId);
        }, 100);
        
        updateModalTexts(projectId, localStorage.getItem('language') || 'es');
    }
}

function closeProjectModal(projectId) {
    const modal = document.getElementById(projectId + 'Modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (currentProject === projectId) {
            currentProject = null;
        }
    }
}

function updateModalTexts(projectId, lang) {
    const modal = document.getElementById(projectId + 'Modal');
    if (modal) {
        modal.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        modal.querySelectorAll('.gallery-item-tooltip[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
}

// ===== VISOR DE IMÁGENES =====
function initGalleryImages(projectId) {
    const galleryList = document.getElementById(projectId + 'GalleryList');
    if (!galleryList) return [];
    
    const galleryItems = galleryList.querySelectorAll('.gallery-list-item');
    galleryImages = [];
    
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const tooltip = item.querySelector('.gallery-item-tooltip');
        
        if (img && tooltip) {
            const imgSrc = img.getAttribute('src');
            
            galleryImages.push({
                id: index,
                src: imgSrc,
                element: item,
                captionKey: tooltip.getAttribute('data-i18n') || '',
                caption: tooltip.textContent || '',
                projectId: projectId
            });
        }
    });
    
    return galleryImages;
}

function openImageViewer(imageSrc, captionKey, projectId) {
    const modal = document.getElementById('imageViewerModal');
    const viewerImage = document.getElementById('viewerImage');
    const viewerCaption = document.getElementById('viewerCaption');
    const imageCounter = document.getElementById('imageCounter');
    const currentLang = localStorage.getItem('language') || 'es';
    
    const images = initGalleryImages(projectId);
    
    if (images.length === 0) {
        return;
    }
    
    let foundIndex = -1;
    
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === imageSrc) {
            foundIndex = i;
            break;
        }
    }
    
    if (foundIndex === -1) {
        const imageName = imageSrc.split('/').pop();
        for (let i = 0; i < images.length; i++) {
            if (images[i].src.includes(imageName)) {
                foundIndex = i;
                break;
            }
        }
    }
    
    if (foundIndex === -1 && captionKey) {
        for (let i = 0; i < images.length; i++) {
            if (images[i].captionKey === captionKey) {
                foundIndex = i;
                break;
            }
        }
    }
    
    if (foundIndex !== -1) {
        currentImageIndex = foundIndex;
    } else {
        currentImageIndex = 0;
    }
    
    viewerImage.src = images[currentImageIndex].src;
    
    if (translations[currentLang] && translations[currentLang][images[currentImageIndex].captionKey]) {
        viewerCaption.textContent = translations[currentLang][images[currentImageIndex].captionKey];
    } else {
        viewerCaption.textContent = images[currentImageIndex].caption;
    }
    
    imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
    const modal = document.getElementById('imageViewerModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateImage(direction) {
    if (!currentProject) return;
    
    const images = initGalleryImages(currentProject);
    
    if (images.length === 0) return;
    
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    
    const viewerImage = document.getElementById('viewerImage');
    const viewerCaption = document.getElementById('viewerCaption');
    const imageCounter = document.getElementById('imageCounter');
    const currentLang = localStorage.getItem('language') || 'es';
    
    viewerImage.src = images[currentImageIndex].src;
    
    if (translations[currentLang] && translations[currentLang][images[currentImageIndex].captionKey]) {
        viewerCaption.textContent = translations[currentLang][images[currentImageIndex].captionKey];
    } else {
        viewerCaption.textContent = images[currentImageIndex].caption;
    }
    
    imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
}

function updateViewerCaption(lang) {
    const viewerCaption = document.getElementById('viewerCaption');
    const modal = document.getElementById('imageViewerModal');
    
    if (modal.style.display === 'flex' && galleryImages.length > 0 && currentImageIndex >= 0) {
        if (translations[lang] && translations[lang][galleryImages[currentImageIndex].captionKey]) {
            viewerCaption.textContent = translations[lang][galleryImages[currentImageIndex].captionKey];
        }
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (currentProject) {
            closeProjectModal(currentProject);
        }
        closeImageViewer();
    } else if (e.key === 'ArrowLeft' && document.getElementById('imageViewerModal').style.display === 'flex') {
        navigateImage(-1);
    } else if (e.key === 'ArrowRight' && document.getElementById('imageViewerModal').style.display === 'flex') {
        navigateImage(1);
    }
});

window.addEventListener('click', function(e) {
    if (currentProject) {
        const modal = document.getElementById(currentProject + 'Modal');
        if (e.target === modal) {
            closeProjectModal(currentProject);
        }
    }
    
    const imageViewerModal = document.getElementById('imageViewerModal');
    if (e.target === imageViewerModal) {
        closeImageViewer();
    }
});

// ===== INTERSECTION OBSERVER =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section > *:not(.section-title)').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    title.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(title);
});

// ===== INICIAR EFECTO DE TYPING =====
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});
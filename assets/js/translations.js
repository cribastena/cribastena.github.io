/**
 * ==========================================================================
 * MULTI-LANGUAGE (i18n) SYSTEM - Vanilla JS
 * Supports English (default) and Spanish (Español).
 * Persists preference via localStorage and updates content dynamically.
 * ==========================================================================
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    'nav.skip': 'Skip to main content',
    'nav.about': 'ABOUT ME',
    'nav.work': 'WORK',
    'nav.contact': 'CONTACT',
    'nav.langAria': 'Switch language to Spanish',
    'nav.langTitle': 'Cambiar idioma a Español',

    // About section
    'about.title': 'about me',
    'about.p1': 'Hi! I’m Candela Ribas, a graphic and UX/UI designer with a multidisciplinary curious mind, always eager to create projects where aesthetics and experience go hand in hand. I believe great design comes from questioning everything, experimenting without fear, and playing with new ideas.',
    'about.p2': 'I\'m versatile and curious: I move freely between visual aesthetics and UX logic. I’m always looking to give each project its own personality and make an impact.',
    'about.p3': 'Thanks for checking out, feel free to explore!',

    // Work / Projects section
    'work.title': 'work',

    'work.p1.title': 'POSTERS & COVERS',
    'work.p1.desc': 'Designs that stop the scroll: posters and covers with personality, bold visuals, clear ideas that make them memorable.',
    'work.p1.aria': 'Open POSTERS & COVERS project',
    'work.p1.tag1': 'ADVERTISEMENT',
    'work.p1.tag2': 'MUSIC COVERS',
    'work.p1.tag3': 'BOOK COVERS',
    'work.p1.tag4': 'FLYERS',

    'work.p2.title': 'BRANDING',
    'work.p2.desc': 'I create brands with personality — from logos to visual identity, everything designed to stand out and connect.',
    'work.p2.aria': 'Open BRANDING project',
    'work.p2.tag1': 'LOGOS',
    'work.p2.tag2': 'POSITIONING',
    'work.p2.tag3': 'SLOGANS',
    'work.p2.tag4': 'CORPORATE/PERSONAL',
    'work.p2.tag5': 'BRAND GUIDELINES',

    'work.p3.title': 'VIDEOS & ANIMATIONS',
    'work.p3.desc': 'Making ideas move — fun, dynamic, and unforgettable with style and personality. I adapt to any style or vibe, from advertisement, stop motion to 2/3D.',
    'work.p3.aria': 'Open VIDEOS & ANIMATIONS project',
    'work.p3.tag1': 'ADVERTISEMENT',
    'work.p3.tag2': 'MUSIC VIDEOS',
    'work.p3.tag3': 'MOTION GRAPHICS',
    'work.p3.tag4': 'VIDEO EDITS',

    'work.p4.title': '3D',
    'work.p4.desc': 'Stop imagining and turning ideas into 3D visuals — see your products come alive before production.',
    'work.p4.aria': 'Open 3D project',
    'work.p4.tag1': 'PACKAGING',
    'work.p4.tag2': 'OBJECTS',
    'work.p4.tag3': 'CHARACTERS',
    'work.p4.tag4': 'ANIMATED 3D',

    'work.p5.title': 'ILLUSTRATIONS',
    'work.p5.desc': 'I can adapt to different styles to fit any audience, message, or context — working with analogics, mixed media and digital to bring ideas to life.',
    'work.p5.aria': 'Open ILLUSTRATIONS project',
    'work.p5.tag1': 'DIGITAL',
    'work.p5.tag2': 'ANALOG',
    'work.p5.tag3': 'MIXED MEDIA',
    'work.p5.tag4': 'COLLAGE',
    'work.p5.tag5': 'BOOK ILLUSTRATIONS',

    'work.p6.title': 'UX/UI',
    'work.p6.desc': 'Web and app prototypes that turn ideas into intuitive, usable, and visually striking experiences. Easy to use and hard to forget.',
    'work.p6.aria': 'Open UX/UI project',
    'work.p6.tag1': 'VISUAL INTERFACE',
    'work.p6.tag2': 'MICROINTERACTIONS',
    'work.p6.tag3': 'USER FLOW',
    'work.p6.tag4': 'INTERACTIVE PROTOTYPES',

    // Contact section
    'contact.title': 'contact',
    'contact.text': 'Got a cool project in mind?<br>Let’s chat!',
    'contact.btn': 'Reach out',

    // Footer
    'footer.copy': '© 2025 Candela Ribas. vanilla HTML, CSS y JS.',
    'footer.backToTop': 'Back to top',

    // Project Editor / Gallery page
    'editor.back': '← Back',
    'editor.close': 'Close',
    'editor.unmute': 'Unmute video',
    'project.zampo.intro': 'This project develops the conceptual and strategic design of ZAMPO, a gastronomic mobile app aimed at young and urban foodies, whose goal is to transform the way people discover and experience gastronomy in the digital environment.',
    'project.zampo.col1': 'The proposal emerges as a response to the loss of relevance of traditional gastronomic applications, perceived as lacking dynamism, impersonal, and disconnected from new digital consumption habits.',
    'project.zampo.col2': 'The research, based on surveys, interviews, and competitive analysis, highlights a preference for more visual, social, and participatory experiences, as well as a stronger connection with dynamic platforms such as TikTok or Instagram. The findings also emphasize the importance of peer recommendations and the interest in gamified dynamics applied to culinary discovery.',
    'project.zampo.col3': 'Drawing from these insights, ZAMPO proposes an experience that merges discovery, gamification, and community through tools such as challenges, roulettes, custom filters, and social recommendations, transforming gastronomic exploration into a more engaging and social journey.',
    'project.zampo.conclusion': 'In conclusion, ZAMPO positions itself as an innovative alternative within the digital gastronomic ecosystem, aligned with the new behaviors and expectations of young users.'
  },
  es: {
    // Navegación
    'nav.skip': 'Saltar al contenido principal',
    'nav.about': 'SOBRE MÍ',
    'nav.work': 'TRABAJOS',
    'nav.contact': 'CONTACTO',
    'nav.langAria': 'Cambiar idioma a Inglés',
    'nav.langTitle': 'Switch language to English',

    // Sección Sobre mí
    'about.title': 'sobre mí',
    'about.p1': '¡Hola! Soy Candela Ribas, diseñadora gráfica y de UX/UI con una mente curiosa y multidisciplinar, siempre con ganas de crear proyectos donde la estética y la experiencia vayan de la mano. Creo que el buen diseño nace de cuestionarlo todo, experimentar sin miedo y jugar con nuevas ideas.',
    'about.p2': 'Soy versátil y curiosa: me muevo con soltura entre la estética visual y la lógica de UX. Siempre busco aportar a cada proyecto su propia personalidad y generar impacto.',
    'about.p3': '¡Gracias por pasarte, siéntete libre de explorar!',

    // Sección Trabajos / Proyectos
    'work.title': 'trabajos',

    'work.p1.title': 'PÓSTERS Y PORTADAS',
    'work.p1.desc': 'Diseños que captan la mirada: pósters y portadas con personalidad, visuales potentes e ideas claras que los hacen memorables.',
    'work.p1.aria': 'Abrir proyecto PÓSTERS Y PORTADAS',
    'work.p1.tag1': 'PUBLICIDAD',
    'work.p1.tag2': 'PORTADAS MUSICALES',
    'work.p1.tag3': 'PORTADAS DE LIBROS',
    'work.p1.tag4': 'FOLLETOS',

    'work.p2.title': 'BRANDING',
    'work.p2.desc': 'Creo marcas con personalidad: desde logotipos hasta identidad visual, todo diseñado para destacar y conectar.',
    'work.p2.aria': 'Abrir proyecto BRANDING',
    'work.p2.tag1': 'LOGOTIPOS',
    'work.p2.tag2': 'POSICIONAMIENTO',
    'work.p2.tag3': 'ESLÓGANES',
    'work.p2.tag4': 'CORPORATIVO/PERSONAL',
    'work.p2.tag5': 'MANUAL DE MARCA',

    'work.p3.title': 'VÍDEOS Y ANIMACIONES',
    'work.p3.desc': 'Dando movimiento a las ideas: dinámico, divertido e inolvidable con estilo y personalidad. Me adapto a cualquier estética o tono, desde publicidad y stop motion hasta 2D y 3D.',
    'work.p3.aria': 'Abrir proyecto VÍDEOS Y ANIMACIONES',
    'work.p3.tag1': 'PUBLICIDAD',
    'work.p3.tag2': 'VIDEOCLIPS',
    'work.p3.tag3': 'MOTION GRAPHICS',
    'work.p3.tag4': 'EDICIÓN DE VÍDEO',

    'work.p4.title': '3D',
    'work.p4.desc': 'Deja de imaginar y convierte ideas en visuales 3D: da vida a tus productos antes de su producción.',
    'work.p4.aria': 'Abrir proyecto 3D',
    'work.p4.tag1': 'PACKAGING',
    'work.p4.tag2': 'OBJETOS',
    'work.p4.tag3': 'PERSONAJES',
    'work.p4.tag4': '3D ANIMADO',

    'work.p5.title': 'ILUSTRACIÓN',
    'work.p5.desc': 'Me adapto a distintos estilos según el público, mensaje o contexto, combinando técnicas analógicas, técnicas mixtas y digital para dar vida a las ideas.',
    'work.p5.aria': 'Abrir proyecto ILUSTRACIÓN',
    'work.p5.tag1': 'DIGITAL',
    'work.p5.tag2': 'ANALÓGICO',
    'work.p5.tag3': 'TÉCNICA MIXTA',
    'work.p5.tag4': 'COLLAGE',
    'work.p5.tag5': 'ILUSTRACIÓN EDITORIAL',

    'work.p6.title': 'UX/UI',
    'work.p6.desc': 'Prototipos web y de aplicaciones que convierten ideas en experiencias intuitivas, usables y visualmente impactantes. Fáciles de usar y difíciles de olvidar.',
    'work.p6.aria': 'Abrir proyecto UX/UI',
    'work.p6.tag1': 'INTERFAZ VISUAL',
    'work.p6.tag2': 'MICROINTERACCIONES',
    'work.p6.tag3': 'FLUJO DE USUARIO',
    'work.p6.tag4': 'PROTOTIPOS INTERACTIVOS',

    // Sección Contacto
    'contact.title': 'contacto',
    'contact.text': '¿Tienes un proyecto en mente?<br>¡Hablemos!',
    'contact.btn': 'Escríbeme',

    // Pie de página
    'footer.copy': '© 2025 Candela Ribas. vanilla HTML, CSS y JS.',
    'footer.backToTop': 'Volver arriba',

    // Visor de proyectos / Galería
    'editor.back': '← Atrás',
    'editor.close': 'Cerrar',
    'editor.unmute': 'Activar sonido',
    'project.zampo.intro': 'Este proyecto desarrolla el diseño conceptual y estratégico de ZAMPO, una aplicación móvil gastronómica dirigida a foodies jóvenes y urbanos, cuyo objetivo es transformar la forma en que las personas descubren y viven la gastronomía en el entorno digital.',
    'project.zampo.col1': 'La propuesta surge como respuesta a la pérdida de relevancia de las aplicaciones gastronómicas tradicionales, percibidas como poco dinámicas, impersonales y alejadas de los nuevos hábitos de consumo digital.',
    'project.zampo.col2': 'La investigación, basada en encuestas, entrevistas y análisis de la competencia, evidencia una preferencia por experiencias más visuales, sociales y participativas, así como una mayor conexión con plataformas dinámicas como TikTok o Instagram. Los resultados también destacan la importancia de la recomendación entre usuarios y el interés por dinámicas gamificadas aplicadas al descubrimiento gastronómico.',
    'project.zampo.col3': 'A partir de estos hallazgos, ZAMPO propone una experiencia que integra descubrimiento, gamificación y comunidad mediante herramientas como retos, ruletas, filtros personalizados y recomendaciones sociales, convirtiendo la exploración gastronómica en una experiencia más entretenida y social.',
    'project.zampo.conclusion': 'Como conclusión, ZAMPO se posiciona como una alternativa innovadora dentro del ecosistema digital gastronómico, alineada con los nuevos comportamientos y expectativas de los usuarios jóvenes.'
  }
};

/**
 * Get the current active language (from localStorage or default to 'en')
 */
function getCurrentLanguage() {
  const saved = localStorage.getItem('portfolio_lang');
  if (saved && (saved === 'es' || saved === 'en')) {
    return saved;
  }
  return 'en';
}

/**
 * Apply the selected language to the DOM
 * @param {'en' | 'es'} lang 
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;

  // 1. Update <html lang="...">
  document.documentElement.lang = lang;

  // 2. Persist in localStorage
  try {
    localStorage.setItem('portfolio_lang', lang);
  } catch (e) {
    /* localStorage unavailable */
  }

  const dict = TRANSLATIONS[lang];

  // 3. Update all text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (typeof dict[key] === 'string' && dict[key].includes('<br>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // 4. Update element attributes with data-i18n-attr (e.g. "aria-label:work.p1.aria")
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const specs = el.getAttribute('data-i18n-attr').split(';');
    specs.forEach((spec) => {
      const parts = spec.split(':');
      if (parts.length >= 2) {
        const attr = parts[0].trim();
        const key = parts[1].trim();
        if (attr && key && dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      }
    });
  });

  // 5. Update language toggle button visual state if present
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    const enOpt = toggleBtn.querySelector('.lang-en');
    const esOpt = toggleBtn.querySelector('.lang-es');

    if (lang === 'es') {
      if (esOpt) esOpt.classList.add('active');
      if (enOpt) enOpt.classList.remove('active');
      toggleBtn.setAttribute('aria-label', dict['nav.langAria'] || 'Cambiar idioma a Inglés');
      toggleBtn.title = dict['nav.langTitle'] || 'Switch language to English';
    } else {
      if (enOpt) enOpt.classList.add('active');
      if (esOpt) esOpt.classList.remove('active');
      toggleBtn.setAttribute('aria-label', dict['nav.langAria'] || 'Switch language to Spanish');
      toggleBtn.title = dict['nav.langTitle'] || 'Cambiar idioma a Español';
    }
  }
}

/**
 * Toggle between 'en' and 'es'
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = current === 'en' ? 'es' : 'en';
  setLanguage(next);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLanguage();
  setLanguage(lang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
});


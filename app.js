/* NexIA — sitio para clientes.
   Idioma ES/EN + tema claro/oscuro. Formularios -> WhatsApp (el sitio
   estático no guarda envíos).

   WhatsApp de NexIA: 56 5814 1504 (WA_NUMBER, código país 52). */

var WA_NUMBER = "525658141504"; /* WhatsApp de NexIA: 56 5814 1504 */

var STRINGS = {
  es: {
    "meta.title": "NexIA — Clientes que llegan. Horas que regresan.",
    "meta.description": "NexIA ayuda a negocios de Zihuatanejo, La Unión y Lázaro Cárdenas a conseguir más clientes y a recuperar las horas que se pierden en lo repetitivo.",
    "nav.changes": "Lo que cambia",
    "nav.realResults": "Resultados reales",
    "nav.about": "Quién soy",
    "nav.how": "Cómo funciona",
    "nav.who": "Para quién es",
    "nav.faq": "Preguntas",
    "nav.cta": "Cuéntanos tu caso",
    "theme.ariaLight": "Cambiar a tema claro",
    "theme.ariaDark": "Cambiar a tema oscuro",
    "hero.title": "Clientes que llegan. Horas que regresan.",
    "hero.sub": "Tu negocio no necesita más publicaciones: necesita gente entrando por la puerta y menos horas perdidas en lo que se repite todos los días.",
    "hero.cta": "Cuéntanos tu caso",
    "hero.secondary": "Ver cómo funciona",
    "hero.card1t": "Más clientes entrando",
    "hero.card1d": "Que te vean, te encuentren y se detengan.",
    "hero.card2t": "Menos horas perdidas",
    "hero.card2d": "Lo repetitivo, atendido solo.",
    "media.trackCaption": "La playa de Majahua: la costa por donde pasan tus clientes.",
    "media.whoCaption": "La Unión desde el aire: el territorio donde trabajan nuestros clientes.",
    "pains.title": "¿Te suena familiar?",
    "pains.p1": "Publico en Facebook y casi nadie lo ve.",
    "pains.p2": "Contesto los mismos mensajes todo el día.",
    "pains.p3": "Apunto gastos y ventas en una libreta.",
    "pains.note": "Si alguna de estas te suena, no eres el único: es lo que escuchamos todos los días de negocios como el tuyo.",
    "changes.title": "Lo que cambia",
    "changes.painLabel": "El problema: ",
    "changes.intro": "Dos resultados, no dos productos. El cómo va en letra chica, porque lo que compras es el resultado.",
    "changes.track1t": "«Quiero más clientes»",
    "changes.track1how": "Cómo: campañas de marketing",
    "changes.t1r1p": "La gente pasa frente a mi negocio y no se detiene.",
    "changes.t1r1r": "Que entren: convertir el paso de todos los días en visitas.",
    "changes.t1r2p": "Publico en Facebook y casi nadie lo ve.",
    "changes.t1r2r": "Que cada publicación trabaje para traer gente, no solo para “estar presente”.",
    "changes.t1r3p": "Mi competencia sí aparece en redes; yo no existo.",
    "changes.t1r3r": "Existir donde el cliente busca: en redes y en Google.",
    "changes.t1r4p": "Dependo de las recomendaciones y de la temporada.",
    "changes.t1r4r": "Demanda más constante, también fuera de temporada.",
    "changes.track2t": "«Quiero dejar de perder el tiempo»",
    "changes.track2how": "Cómo: automatizaciones con IA",
    "changes.t2r1p": "Contesto los mismos mensajes todo el día, hasta en domingo.",
    "changes.t2r1r": "Respuestas que atienden al cliente mientras tú no estás.",
    "changes.t2r2p": "Apunto gastos y ventas en libretas, o de memoria.",
    "changes.t2r2r": "Registro automático: sabes qué entra y qué sale sin capturar nada a mano.",
    "changes.t2r3p": "Se me van clientes porque contesto tarde.",
    "changes.t2r3r": "Nadie se queda esperando: el seguimiento ya no se olvida.",
    "changes.t2r4p": "Pierdo horas en tareas que se repiten igual cada semana.",
    "changes.t2r4r": "Horas que regresan para atender el negocio, no el papeleo.",
    "process.title": "Así trabajamos",
    "process.s1t": "Escuchamos tu caso",
    "process.s1d": "Nos cuentas tu problema en tus palabras, sin tecnicismos.",
    "process.s2t": "Diseñamos a tu medida",
    "process.s2d": "La campaña o el sistema, hechos para tu negocio.",
    "process.s3t": "Medimos y ajustamos",
    "process.s3d": "Revisamos qué funciona y lo afinamos contigo.",
    "who.title": "¿Para quién es?",
    "who.c1t": "Negocios locales",
    "who.c1d": "Negocios de Zihuatanejo, La Unión y Lázaro Cárdenas que quieren clientes.",
    "who.c2t": "Dueños a distancia",
    "who.c2d": "Dueños de propiedades en Troncones, Majahua y Saladita que rentan a distancia.",
    "who.not": "Con respeto: no es para quien solo quiere más publicaciones sin medir si traen clientes.",
    "proof.title": "Resultados reales",
    "proof.intro": "Casos de clientes de verdad, con el material y las cifras que se pueden verificar.",
    "proof.c1place": "Hotel · Playa Majahua, La Unión",
    "proof.c1t": "Majahua Palms",
    "proof.c1d": "Videos con dron y recorridos del hotel: la bahía desde el mar, la órbita completa del predio, el recorrido bungalow → alberca → playa en un solo plano y el atardecer desde la arena. Más de 60 GB de tomas propias y 12 clips terminados.",
    "proof.c1n": "La foto que abre esta página es un fotograma de ese material. Los reels de la página superan las 31 mil vistas (bungalows frente al mar), con 14 mil el dron de toda la playa y 11 mil el dron del complejo. En 2025, dos campañas de leads para el hotel: el anuncio de marzo usó el reel 'Tu Escape al Paraíso' y entre las dos alcanzaron a más de 18 mil personas. La página tiene 2,767 seguidores.",
    "proof.c2place": "Resort privado · Troncones",
    "proof.c2t": "Tronco Bay Inn",
    "proof.c2d": "Propuesta mensual de marketing digital para el hotel: 2 videos largos, 4 videos cortos, 10 imágenes con diseño, 12 historias y 2 sesiones de foto y video con dron, cámara réflex, cámara de acción, cámara 360, estabilizador, luces LED y micrófonos de solapa.",
    "proof.c2n": "La página del hotel tiene 13,276 seguidores. Su reel más visto reciente suma 6,602 vistas; el periodo anterior acumuló 1.2 millones de vistas en la página, sin que Facebook permita atribuirlas a un video concreto.",
    "proof.c3place": "Hotel · Zihuatanejo",
    "proof.c3t": "Catalina Beach Resort",
    "proof.c3d": "Videos y reels para el hotel entre 2022 y 2023: masters de dron (mayo de 2023), recorridos en GoPro al atardecer (julio de 2023) y campañas de octubre a diciembre de 2023, entre ellas un reel de la alberca (Night Pass) y un reel con eslogan (noviembre de 2023). El material de trabajo quedó en la laptop: 11 tomas reales y 12 carpetas de campaña.",
    "proof.c3n": "Las vistas por video están pendientes de confirmar.",
    "proof.note": "Cada caso se publica con material y cifras verificadas. Los próximos se suman cuando estén listos.",
    "about.title": "Quién te responde",
    "about.name": "Jhonatan Jesús Martínez Brooks",
    "about.tagline": "Marketing de contenidos · Producción multimedia · IA aplicada",
    "about.bio1": "Soy ingeniero en sistemas computacionales. Desde 2015 hago marketing de contenidos y video para negocios de la Costa Grande, con énfasis en turismo: hoteles y restaurantes de Zihuatanejo, Troncones y Majahua que necesitan que los vean, no solo existir en Facebook.",
    "about.bio2": "Hoy coordino NexIA, un sistema de producción con inteligencia artificial que hace en horas lo que antes tomaba semanas: guiones, edición de video, diseño y publicaciones.",
    "about.f1": "Ingeniero en Sistemas Computacionales, Instituto Tecnológico de la Costa Grande (2002–2007): promedio 92, titulación por promedio, segundo lugar de la carrera.",
    "about.f2": "Técnico en Informática, CONALEP 027 (1999–2002): promedio 95, primer lugar de la carrera.",
    "about.f3": "Freelance en marketing y video para PyMEs, 2015–2024. Proyecto Discover Troncones Saladita: iconografía, edición de video y coordinación de ventas.",
    "about.f4": "Docente en la Preparatoria No. 42 (UAGro) desde 2023: Cultura Digital, Física y Tutorías.",
    "about.f5": "Marcas propias: El Vivero de Vicky y MarIA, de bordado computarizado.",
    "about.cta": "Te responde Jhonatan, de NexIA.",
    "about.ctaLink": "Cuéntanos tu caso",
    "faq.title": "Preguntas de siempre",
    "faq.q1": "¿Y eso cuánto cuesta?",
    "faq.a1": "Proyectos con precio cerrado, sin mensualidad obligatoria.",
    "faq.q2": "¿Necesito saber de tecnología?",
    "faq.a2": "No: lo operamos nosotros.",
    "forms.title": "Empecemos por tu caso",
    "forms.intro": "Dos formas de empezar, las dos cortas a propósito. Al enviar, se abrirá WhatsApp con tu mensaje ya listo.",
    "forms.caseTitle": "Cuéntanos tu caso",
    "forms.casePurpose": "El formulario principal: recoge lo mínimo para poder responderte con una propuesta, no con preguntas.",
    "forms.fName": "Tu nombre",
    "forms.fBiz": "Tu negocio",
    "forms.fContact": "WhatsApp o correo",
    "forms.fPain": "¿Cuál es tu mayor problema?",
    "forms.pickPain": "Elige una opción",
    "forms.pickCity": "Elige tu ciudad",
    "forms.painOpt1": "No me llegan clientes",
    "forms.painOpt2": "Pierdo horas en lo repetitivo",
    "forms.painOpt3": "Los dos",
    "forms.painOpt4": "Apunto gastos y ventas en una libreta",
    "forms.trust": "Tu número solo se usa para responderte. Te responde Jhonatan, de NexIA.",
    "forms.fMore": "Cuéntanos más (opcional)",
    "forms.caseBtn": "Enviar mi caso",
    "forms.revTitle": "Revisión gratuita de tu presencia",
    "forms.revPurpose": "El formulario corto para el primer contacto: pide poco porque todavía no hay confianza. Sin compromiso y sin precio escondido.",
    "forms.fBizName": "Nombre del negocio",
    "forms.fCity": "Ciudad",
    "forms.fPage": "Tu página de Facebook o Instagram",
    "forms.fWa": "WhatsApp",
    "forms.revBtn": "Quiero mi revisión",
    "forms.cityOther": "Otra",
    "forms.phName": "María Fernanda",
    "forms.phBiz": "Restaurante La Brisa",
    "forms.phContact": "755 000 0000",
    "forms.phMore": "Ej.: contesto los mismos mensajes hasta en domingo…",
    "forms.confirmText": "Se abrió WhatsApp con tu mensaje ya listo. Si no se abrió, ",
    "forms.confirmLink": "toca aquí para intentarlo de nuevo",
    "forms.phBizName": "Hotel Casa del Mar",
    "forms.phPage": "facebook.com/…",
    "forms.phWa": "755 000 0000",
    "close.title": "Cuéntanos tu caso",
    "close.sub": "Cuéntanos tu problema en un mensaje y te respondemos con una propuesta.",
    "close.btn": "Hablar por WhatsApp",
    "close.area": "Zihuatanejo · La Unión · Lázaro Cárdenas",
    "footer.area": "Zihuatanejo · La Unión · Lázaro Cárdenas",
    "footer.how": "Campañas de marketing · Automatizaciones con IA",
    "sticky.cta": "Cuéntanos tu caso",
    "wa.caseMsg": "Hola NexIA, soy {nombre} de {negocio}. Mi mayor problema: {problema}.{mas} Mi WhatsApp/correo: {contacto}.",
    "wa.revMsg": "Hola NexIA, quiero la revisión gratuita de mi negocio {negocio} en {ciudad}. Mi página: {pagina}. Mi WhatsApp: {whatsapp}.",
    "wa.closeMsg": "Hola NexIA, quiero contarles mi caso.",
    "wa.morePrefix": " Te cuento más: ",
    "wa.noPage": "no tengo página todavía"
  },
  en: {
    "meta.title": "NexIA — Clients walking in. Hours coming back.",
    "meta.description": "NexIA helps businesses in Zihuatanejo, La Unión and Lázaro Cárdenas get more clients and win back the hours lost on repetitive work.",
    "nav.changes": "What changes",
    "nav.realResults": "Real results",
    "nav.about": "Who I am",
    "nav.how": "How it works",
    "nav.who": "Who it's for",
    "nav.faq": "Questions",
    "nav.cta": "Tell us your case",
    "theme.ariaLight": "Switch to light theme",
    "theme.ariaDark": "Switch to dark theme",
    "hero.title": "Clients walking in. Hours coming back.",
    "hero.sub": "Your business doesn't need more posts — it needs people walking through the door and fewer hours lost on what repeats every day.",
    "hero.cta": "Tell us your case",
    "hero.secondary": "See how it works",
    "hero.card1t": "More clients walking in",
    "hero.card1d": "Get seen, get found, get them to stop.",
    "hero.card2t": "Fewer hours wasted",
    "hero.card2d": "The repetitive stuff, handled on its own.",
    "media.trackCaption": "Majahua beach: the coast your clients walk along.",
    "media.whoCaption": "La Unión from above: the territory where our clients work.",
    "pains.title": "Sound familiar?",
    "pains.p1": "I post on Facebook and almost nobody sees it.",
    "pains.p2": "I answer the same messages all day long.",
    "pains.p3": "I keep sales and expenses in a notebook.",
    "pains.note": "If any of these sound familiar, you're not alone: it's what we hear every day from businesses like yours.",
    "changes.title": "What changes",
    "changes.painLabel": "The problem: ",
    "changes.intro": "Two results, not two products. The how goes in small print, because what you're buying is the result.",
    "changes.track1t": "“I want more clients”",
    "changes.track1how": "How: marketing campaigns",
    "changes.t1r1p": "People walk past my business and never stop.",
    "changes.t1r1r": "Get them in: turn everyday foot traffic into visits.",
    "changes.t1r2p": "I post on Facebook and almost nobody sees it.",
    "changes.t1r2r": "Make every post work to bring people in — not just to “be present”.",
    "changes.t1r3p": "My competitors show up online; I don't exist.",
    "changes.t1r3r": "Be where customers look: on social media and on Google.",
    "changes.t1r4p": "I depend on word of mouth and the season.",
    "changes.t1r4r": "Steadier demand, even out of season.",
    "changes.track2t": "“I want to stop wasting time”",
    "changes.track2how": "How: AI automations",
    "changes.t2r1p": "I answer the same messages all day, even on Sundays.",
    "changes.t2r1r": "Replies that serve your customers while you're away.",
    "changes.t2r2p": "I track expenses and sales in notebooks, or from memory.",
    "changes.t2r2r": "Automatic records: you know what comes in and out without typing anything by hand.",
    "changes.t2r3p": "I lose customers because I reply late.",
    "changes.t2r3r": "Nobody waits: follow-ups never get forgotten.",
    "changes.t2r4p": "I lose hours on tasks that repeat the same way every week.",
    "changes.t2r4r": "Hours back to run the business, not the paperwork.",
    "process.title": "How we work",
    "process.s1t": "We listen to your case",
    "process.s1d": "You tell us your problem in your own words, no jargon.",
    "process.s2t": "We design it for you",
    "process.s2d": "The campaign or the system, built for your business.",
    "process.s3t": "We measure and adjust",
    "process.s3d": "We check what works and fine-tune it with you.",
    "who.title": "Who is it for?",
    "who.c1t": "Local businesses",
    "who.c1d": "Businesses in Zihuatanejo, La Unión and Lázaro Cárdenas that want more clients.",
    "who.c2t": "Owners from afar",
    "who.c2d": "Property owners in Troncones, Majahua and Saladita who rent out from a distance.",
    "who.not": "With respect: it's not for anyone who just wants more posts without measuring whether they bring clients.",
    "proof.title": "Real results",
    "proof.intro": "Real client cases, with material and figures that can be checked.",
    "proof.c1place": "Hotel · Majahua Beach, La Unión",
    "proof.c1t": "Majahua Palms",
    "proof.c1d": "Drone videos and walkthroughs of the hotel: the bay from the sea, the full orbit of the property, the bungalow → pool → beach run in a single shot, and sunset from the sand. Over 60 GB of our own footage and 12 finished clips.",
    "proof.c1n": "The photo opening this page is a frame from that footage. The page's reels pass 31 thousand views (bungalows by the sea), with 14 thousand for the drone shot of the whole beach and 11 thousand for the drone shot of the complex. In 2025, two lead campaigns for the hotel: the March ad used the 'Tu Escape al Paraíso' reel, and together they reached more than 18 thousand people. The page has 2,767 followers.",
    "proof.c2place": "Private resort · Troncones",
    "proof.c2t": "Tronco Bay Inn",
    "proof.c2d": "Monthly digital marketing proposal for the hotel: 2 long videos, 4 short videos, 10 designed images, 12 stories and 2 photo and video sessions with a drone, reflex camera, action camera, 360 camera, stabiliser, LED lights and lapel microphones.",
    "proof.c2n": "The hotel's page has 13,276 followers. Its most-viewed recent reel has 6,602 views; the previous period brought 1.2 million views to the page, though Facebook won't attribute them to a single video.",
    "proof.c3place": "Hotel · Zihuatanejo",
    "proof.c3t": "Catalina Beach Resort",
    "proof.c3d": "Videos and reels for the hotel between 2022 and 2023: drone masters (May 2023), GoPro walkthroughs at sunset (July 2023) and campaigns from October to December 2023, including a pool reel (Night Pass) and a slogan reel (November 2023). The working material sits on the laptop: 11 real takes and 12 campaign folders.",
    "proof.c3n": "Per-video views are still to be confirmed.",
    "proof.note": "Each case is published with verified material and figures. More will follow as they're ready.",
    "about.title": "Who answers you",
    "about.name": "Jhonatan Jesús Martínez Brooks",
    "about.tagline": "Content marketing · Multimedia production · Applied AI",
    "about.bio1": "I'm a computer systems engineer. Since 2015 I've done content marketing and video for businesses on the Costa Grande, focused on tourism: hotels and restaurants in Zihuatanejo, Troncones and Majahua that need to be seen, not just to exist on Facebook.",
    "about.bio2": "Today I run NexIA, an AI-assisted production system that does in hours what used to take weeks: scripts, video editing, design and publishing.",
    "about.f1": "Computer Systems Engineer, Instituto Tecnológico de la Costa Grande (2002–2007): GPA 92, degree by GPA, second in my class.",
    "about.f2": "IT Technician, CONALEP 027 (1999–2002): GPA 95, first in my class.",
    "about.f3": "Freelance marketing and video for small businesses, 2015–2024. Discover Troncones Saladita project: iconography, video editing and sales coordination.",
    "about.f4": "Teacher at Preparatoria No. 42 (UAGro) since 2023: Digital Culture, Physics and Tutoring.",
    "about.f5": "Own brands: El Vivero de Vicky and MarIA, computerised embroidery.",
    "about.cta": "Jhonatan from NexIA answers you.",
    "about.ctaLink": "Tell us your case",
    "faq.title": "Common questions",
    "faq.q1": "How much does it cost?",
    "faq.a1": "Fixed-price projects, no mandatory monthly fee.",
    "faq.q2": "Do I need to know about technology?",
    "faq.a2": "No: we run it for you.",
    "forms.title": "Let's start with your case",
    "forms.intro": "Two ways to start, both short on purpose. When you send it, WhatsApp will open with your message ready.",
    "forms.caseTitle": "Tell us your case",
    "forms.casePurpose": "The main form: it collects the minimum so we can reply with a proposal, not with questions.",
    "forms.fName": "Your name",
    "forms.fBiz": "Your business",
    "forms.fContact": "WhatsApp or email",
    "forms.fPain": "What's your biggest problem?",
    "forms.pickPain": "Choose an option",
    "forms.pickCity": "Choose your city",
    "forms.painOpt1": "I'm not getting clients",
    "forms.painOpt2": "I lose hours on repetitive work",
    "forms.painOpt3": "Both",
    "forms.painOpt4": "I track expenses and sales in a notebook",
    "forms.trust": "Your number is only used to reply to you. Jhonatan from NexIA answers you.",
    "forms.fMore": "Tell us more (optional)",
    "forms.caseBtn": "Send my case",
    "forms.revTitle": "Free review of your presence",
    "forms.revPurpose": "The short form for a first contact: it asks for little because there's no trust yet. No commitment, no hidden price.",
    "forms.fBizName": "Business name",
    "forms.fCity": "City",
    "forms.fPage": "Your Facebook or Instagram page",
    "forms.fWa": "WhatsApp",
    "forms.revBtn": "I want my review",
    "forms.cityOther": "Other",
    "forms.phName": "María Fernanda",
    "forms.phBiz": "Restaurante La Brisa",
    "forms.phContact": "755 000 0000",
    "forms.phMore": "E.g.: I answer the same messages even on Sundays…",
    "forms.confirmText": "WhatsApp opened with your message ready. If it didn't open, ",
    "forms.confirmLink": "tap here to try again",
    "forms.phBizName": "Hotel Casa del Mar",
    "forms.phPage": "facebook.com/…",
    "forms.phWa": "755 000 0000",
    "close.title": "Tell us your case",
    "close.sub": "Tell us your problem in a message and we'll reply with a proposal.",
    "close.btn": "Chat on WhatsApp",
    "close.area": "Zihuatanejo · La Unión · Lázaro Cárdenas",
    "footer.area": "Zihuatanejo · La Unión · Lázaro Cárdenas",
    "footer.how": "Marketing campaigns · AI automations",
    "sticky.cta": "Tell us your case",
    "wa.caseMsg": "Hi NexIA, I'm {nombre} from {negocio}. My biggest problem: {problema}.{mas} My WhatsApp/email: {contacto}.",
    "wa.revMsg": "Hi NexIA, I'd like the free review of my business {negocio} in {ciudad}. My page: {pagina}. My WhatsApp: {whatsapp}.",
    "wa.closeMsg": "Hi NexIA, I'd like to tell you about my case.",
    "wa.morePrefix": " More detail: ",
    "wa.noPage": "I don't have a page yet"
  }
};

/* Mapas de valores internos (ES) a su texto en el idioma activo. */
var PAIN_MAP = {
  es: {
    "No me llegan clientes": "No me llegan clientes",
    "Pierdo horas en lo repetitivo": "Pierdo horas en lo repetitivo",
    "Apunto gastos y ventas en una libreta": "Apunto gastos y ventas en una libreta",
    "Los dos": "Los dos"
  },
  en: {
    "No me llegan clientes": "I'm not getting clients",
    "Pierdo horas en lo repetitivo": "I lose hours on repetitive work",
    "Apunto gastos y ventas en una libreta": "I track expenses and sales in a notebook",
    "Los dos": "Both"
  }
};
var CITY_MAP = {
  es: { "Zihuatanejo": "Zihuatanejo", "La Unión": "La Unión", "Lázaro Cárdenas": "Lázaro Cárdenas", "Otra": "Otra" },
  en: { "Zihuatanejo": "Zihuatanejo", "La Unión": "La Unión", "Lázaro Cárdenas": "Lázaro Cárdenas", "Otra": "Other" }
};

var lang = "es";
var theme = "light";

function t(key) {
  var d = STRINGS[lang] || STRINGS.es;
  return d[key] !== undefined ? d[key] : (STRINGS.es[key] || key);
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = t(els[i].getAttribute("data-i18n"));
  }
  var phs = document.querySelectorAll("[data-i18n-ph]");
  for (var j = 0; j < phs.length; j++) {
    phs[j].setAttribute("placeholder", t(phs[j].getAttribute("data-i18n-ph")));
  }
  var btns = document.querySelectorAll("[data-lang-btn]");
  for (var k = 0; k < btns.length; k++) {
    btns[k].setAttribute("aria-pressed", btns[k].getAttribute("data-lang-btn") === lang ? "true" : "false");
  }
  updateWaClose();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme);
  var logo = document.getElementById("logoImg");
  if (logo) {
    logo.src = theme === "dark"
      ? "logo/nexia-logo-horizontal-negativo.svg"
      : "logo/nexia-logo-horizontal-color.svg";
  }
  var flogo = document.getElementById("footerLogo");
  if (flogo) {
    flogo.src = theme === "dark"
      ? "logo/nexia-isotipo-negativo.svg"
      : "logo/nexia-isotipo-color.svg";
  }
  var btn = document.getElementById("themeBtn");
  if (btn) {
    btn.setAttribute("aria-label", theme === "dark" ? t("theme.ariaLight") : t("theme.ariaDark"));
  }
}

function setLang(l) {
  lang = (l === "en") ? "en" : "es";
  try { localStorage.setItem("nexia-lang", lang); } catch (e) {}
  applyLang();
}

function setTheme(th) {
  theme = (th === "dark") ? "dark" : "light";
  try { localStorage.setItem("nexia-theme", theme); } catch (e) {}
  applyTheme();
}

function waLink(msg) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}

function fill(template, vars) {
  var out = template;
  for (var k in vars) {
    out = out.split("{" + k + "}").join(vars[k]);
  }
  return out;
}

function updateWaClose() {
  var a = document.getElementById("waClose");
  if (a) a.href = waLink(t("wa.closeMsg"));
}

function showConfirm(form, url) {
  var note = form.querySelector(".form-confirm");
  if (!note) return;
  var link = note.querySelector(".confirm-link");
  if (link) link.href = url;
  note.hidden = false;
}

function init() {
  /* Sin JS todo visible: la clase js activa el reveal on scroll. */
  document.documentElement.classList.add("js");

  /* Reveal on scroll: cada bloque entra una vez, con su retardo CSS. */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          revealObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  var params = new URLSearchParams(window.location.search);
  var storedLang = null, storedTheme = null;
  try {
    storedLang = localStorage.getItem("nexia-lang");
    storedTheme = localStorage.getItem("nexia-theme");
  } catch (e) {}
  lang = params.get("lang") === "en" || params.get("lang") === "es"
    ? params.get("lang") : (storedLang === "en" || storedLang === "es" ? storedLang : "es");
  theme = params.get("theme") === "dark" || params.get("theme") === "light"
    ? params.get("theme") : (storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light");
  applyLang();
  applyTheme();

  var langBtns = document.querySelectorAll("[data-lang-btn]");
  for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener("click", function () {
      setLang(this.getAttribute("data-lang-btn"));
    });
  }
  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  }

  var caso = document.getElementById("caso");
  if (caso) {
    caso.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!caso.checkValidity()) { caso.reportValidity(); return; }
      var f = caso.elements;
      var mas = (f.mas.value || "").trim();
      var msg = fill(t("wa.caseMsg"), {
        nombre: f.nombre.value.trim(),
        negocio: f.negocio.value.trim(),
        problema: (PAIN_MAP[lang] || PAIN_MAP.es)[f.problema.value] || f.problema.value,
        mas: mas ? t("wa.morePrefix") + mas : "",
        contacto: f.contacto.value.trim()
      });
      var url = waLink(msg);
      window.open(url, "_blank");
      showConfirm(caso, url);
    });
  }

  var rev = document.getElementById("revision");
  if (rev) {
    rev.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!rev.checkValidity()) { rev.reportValidity(); return; }
      var f = rev.elements;
      var pagina = (f.pagina.value || "").trim();
      var msg = fill(t("wa.revMsg"), {
        negocio: f.negocio.value.trim(),
        ciudad: (CITY_MAP[lang] || CITY_MAP.es)[f.ciudad.value] || f.ciudad.value,
        pagina: pagina || t("wa.noPage"),
        whatsapp: f.whatsapp.value.trim()
      });
      var url = waLink(msg);
      window.open(url, "_blank");
      showConfirm(rev, url);
    });
  }

  /* La barra fija duplica la acción cuando ya estás en los formularios
     o en el cierre: se esconde mientras esas secciones están en pantalla. */
  var stickyBar = document.querySelector(".sticky-bar");
  if (stickyBar && "IntersectionObserver" in window) {
    var hideSticky = function (entries) {
      var inForms = entries.some(function (en) { return en.isIntersecting; });
      document.body.classList.toggle("hide-sticky", inForms);
    };
    var obs = new IntersectionObserver(hideSticky, { threshold: 0.05 });
    var formsSection = document.getElementById("formularios");
    var closing = document.querySelector(".closing");
    if (formsSection) obs.observe(formsSection);
    if (closing) obs.observe(closing);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

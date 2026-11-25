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
    "media.trackCaption": "La calle de La Unión durante el desfile del 20 de noviembre de 2026.",
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
    "proof.body": "Este espacio se llenará con casos y testimonios reales cuando existan. Nada de cifras de relleno ni testimonios inventados: lo que veas aquí será de clientes de verdad.",
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
    "media.trackCaption": "La Unión's main street during the 20 November 2026 parade.",
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
    "proof.body": "This space will be filled with real cases and testimonials when they exist. No filler figures, no invented testimonials: what you see here will be from real clients.",
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
    "Los dos": "Los dos"
  },
  en: {
    "No me llegan clientes": "I'm not getting clients",
    "Pierdo horas en lo repetitivo": "I lose hours on repetitive work",
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

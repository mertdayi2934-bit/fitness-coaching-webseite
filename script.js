// ===== ÜBERSETZUNGEN =====
// Hier speichern wir alle Texte in allen 3 Sprachen
const uebersetzungen = {

  de: {
    hero_titel:        "Dein Weg zum stärksten Ich",
    hero_text:         "Professionelles Personal Coaching – individuell, nachhaltig, effektiv.",
    hero_btn:          "Jetzt starten",
    ueber_titel:       "Über mich",
    ueber_text:        "Ich bin zertifizierter Personal Trainer mit über 5 Jahren Erfahrung.",
    methodik_titel:    "Meine Methodik",
    methodik_text:     "Jeder Mensch ist anders – deshalb ist jeder Trainingsplan individuell.",
    preise_titel:      "Pakete & Preise",
    ergebnisse_titel:  "Vorher & Nachher",
    bewertungen_titel: "Das sagen meine Kunden",
    faq_titel:         "Häufige Fragen",
    kontakt_titel:     "Kontakt",
    footer_text:       "© 2026 FitCoach – Alle Rechte vorbehalten",
    nav_ueber:       "Über mich",
    nav_methodik:    "Methodik",
    nav_preise:      "Preise",
    nav_ergebnisse:  "Ergebnisse",
    nav_bewertungen: "Bewertungen",
    nav_faq:         "FAQ",
    nav_kontakt:     "Kontakt",
    nav_gratis: "Gratis Pläne",
    gratis_titel: "Gratis Pläne herunterladen",
    gratis_text: "Starte direkt mit deinem kostenlosen Trainings- oder Ernährungsplan. Wähle einfach den passenden Plan und deine Sprache aus.",
    gratis_fitnessstudio_titel: "Trainingsplan Fitnessstudio",
    gratis_fitnessstudio_text: "3 Tage pro Woche, ideal für Einsteiger im Gym.",
    gratis_zuhause_titel: "Trainingsplan Zuhause",
    gratis_zuhause_text: "Effektives Training ohne Geräte – perfekt für zu Hause.",
    gratis_ernaehrung_titel: "Ernährungsplan",
    gratis_ernaehrung_text: "Ein einfacher Leitfaden für gesunde Ernährung und bessere Ergebnisse.",
    ueber_fakt1:       "✅ Zertifizierter Personal Trainer",
    ueber_fakt2:       "✅ Über 100 erfolgreiche Kunden",
    ueber_fakt3:       "✅ Spezialist für Muskelaufbau & Fettabbau",
    ueber_fakt4:       "✅ Online & Vor-Ort Coaching",
    ueber_btn:         "Kostenlos beraten lassen", 
    methodik_s1_titel: "Analyse",
    methodik_s1_text:  "Wir analysieren deinen aktuellen Stand – Körper, Ernährung und Ziele.",
    methodik_s2_titel: "Planung",
    methodik_s2_text:  "Ich erstelle deinen individuellen Trainings- und Ernährungsplan.",
    methodik_s3_titel: "Training",
    methodik_s3_text:  "Wir trainieren zusammen – motiviert, strukturiert und effektiv.",
    methodik_s4_titel: "Ergebnisse",
    methodik_s4_text:  "Du siehst echte Ergebnisse – nachhaltig und langfristig.",
    beliebt:    "⭐ Beliebtestes Paket",
    paket_btn:  "Jetzt buchen",
    paket1_name: "Starter",
    paket1_l1:  "✅ 4x Training pro Monat",
    paket1_l2:  "✅ Trainingsplan",
    paket1_l3:  "✅ WhatsApp Support",
    paket1_l4:  "❌ Ernährungsplan",
    paket1_l5:  "❌ Video Analyse",
    paket2_name: "Performance",
    paket2_l1:  "✅ 8x Training pro Monat",
    paket2_l2:  "✅ Trainingsplan",
    paket2_l3:  "✅ WhatsApp Support",
    paket2_l4:  "✅ Ernährungsplan",
    paket2_l5:  "❌ Video Analyse",
    paket3_name: "Elite",
    paket3_l1:  "✅ 12x Training pro Monat",
    paket3_l2:  "✅ Trainingsplan",
    paket3_l3:  "✅ 24/7 WhatsApp Support",
    paket3_l4:  "✅ Ernährungsplan",
    paket3_l5:  "✅ Video Analyse",
    pro_monat: "/Monat",
    ergebnisse_text: "Echte Ergebnisse meiner Kunden – hart erarbeitet, nachhaltig erreicht.",
    vorher:    "Vorher",
    nachher:   "Nachher",
    ergebnis1: "Max, 34 Jahre – 12 kg abgenommen in 3 Monaten",
    ergebnis2: "Lisa, 28 Jahre – 8 kg abgenommen in 2 Monaten",
    ergebnis3: "Tom, 41 Jahre – 15 kg abgenommen in 4 Monaten",
    bewertung1_text: "\"Ich habe in 3 Monaten 12 kg abgenommen – ich hätte das nie für möglich gehalten. Der beste Trainer den ich je hatte!\"",
    bewertung1_name: "Max M., 34 Jahre",
    bewertung2_text: "\"Endlich ein Trainer der auf mich als Person eingeht. Der Ernährungsplan war ein Gamechanger!\"",
    bewertung2_name: "Lisa K., 28 Jahre",
    bewertung3_text: "\"Professionell, motivierend und immer erreichbar. Absolute Empfehlung!\"",
    bewertung3_name: "Tom S., 41 Jahre",
    faq1_frage:   "Für wen ist das Coaching geeignet?",
    faq1_antwort: "Mein Coaching ist für alle geeignet – egal ob Anfänger oder Fortgeschrittener. Wir starten immer da wo du gerade stehst.",
    faq2_frage:   "Wie läuft das Online Coaching ab?",
    faq2_antwort: "Du bekommst deinen persönlichen Trainings- und Ernährungsplan per App. Wir kommunizieren täglich über WhatsApp und haben wöchentliche Video-Calls.",
    faq3_frage:   "Wie schnell sehe ich Ergebnisse?",
    faq3_antwort: "Die meisten Kunden sehen erste Ergebnisse bereits nach 2-4 Wochen. Nachhaltige Veränderungen entstehen in 3-6 Monaten.",
    faq4_frage:   "Kann ich das Paket jederzeit kündigen?",
    faq4_antwort: "Ja, alle Pakete sind monatlich kündbar. Keine versteckten Kosten, keine langen Vertragslaufzeiten.",
    kontakt_text:     "Schreib mir – ich melde mich innerhalb von 24 Stunden!",
    kontakt_ort:      "Augsburg, Deutschland",
    kontakt_zeit:     "Mo–Fr, 08:00–20:00 Uhr",
    kontakt_anrede:   "Anrede",
    kontakt_name:     "Name",
    kontakt_email:    "E-Mail",
    kontakt_ziel:     "Dein Ziel",
    kontakt_nachricht:"Nachricht",
    kontakt_btn:      "Nachricht senden",
    ziel_abnehmen:    "Abnehmen",
    ziel_muskel:      "Muskelaufbau",
    ziel_fitness:     "Allgemeine Fitness",
    ziel_ernaehrung:  "Ernährungsberatung",
    nav_supplements: "Supplements",
    supplements_titel: "Empfohlene Supplements",
    supplements_text: "Ergänze dein Training sinnvoll mit ausgewählten Supplements. Mit dem Code FITNESSMERT erhältst du bis zu 30 % Rabatt.",
    supplements_code_label: "Dein Rabattcode:",
    supplements_btn: "Supplements ansehen",
    supplement1_titel: "Protein",
    supplement1_text: "Unterstützt Muskelaufbau und Regeneration nach dem Training.",
    supplement2_titel: "Pre-Workout",
    supplement2_text: "Für mehr Fokus, Energie und Motivation vor intensiven Einheiten.",
    supplement3_titel: "Basics",
    supplement3_text: "Sinnvolle Grundlagen wie Kreatin, Omega-3 oder Vitamine.",
},

  en: {
    hero_titel:        "Your Path to the Strongest You",
    hero_text:         "Professional personal coaching – individual, sustainable, effective.",
    hero_btn:          "Get Started",
    ueber_titel:       "About Me",
    ueber_text:        "I am a certified personal trainer with over 5 years of experience.",
    methodik_titel:    "My Methodology",
    methodik_text:     "Every person is different – that's why every training plan is individual.",
    preise_titel:      "Packages & Prices",
    ergebnisse_titel:  "Before & After",
    bewertungen_titel: "What My Clients Say",
    faq_titel:         "Frequently Asked Questions",
    kontakt_titel:     "Contact",
    footer_text:       "© 2026 FitCoach – All rights reserved",
    nav_ueber:       "About Me",
    nav_methodik:    "Methodology",
    nav_preise:      "Prices",
    nav_ergebnisse:  "Results",
    nav_bewertungen: "Reviews",
    nav_faq:         "FAQ",
    nav_kontakt:     "Contact",
    nav_gratis: "Free Plans",
    gratis_titel: "Download Free Plans",
    gratis_text: "Start directly with your free training or nutrition plan. Choose the right plan and your language.",
    gratis_fitnessstudio_titel: "Gym Training Plan",
    gratis_fitnessstudio_text: "3 days per week, ideal for beginners at the gym.",
    gratis_zuhause_titel: "Home Training Plan",
    gratis_zuhause_text: "Effective training without equipment – perfect for home.",
    gratis_ernaehrung_titel: "Nutrition Plan",
    gratis_ernaehrung_text: "A simple guide for healthy nutrition and better results.",
    ueber_fakt1: "✅ Certified Personal Trainer",
    ueber_fakt2: "✅ Over 100 successful clients",
    ueber_fakt3: "✅ Specialist in muscle gain & fat loss",
    ueber_fakt4: "✅ Online & in-person coaching",
    ueber_btn:   "Get a free consultation",
    methodik_s1_titel: "Analysis",
    methodik_s1_text:  "We analyse your current state – body, nutrition and goals.",
    methodik_s2_titel: "Planning",
    methodik_s2_text:  "I create your individual training and nutrition plan.",
    methodik_s3_titel: "Training",
    methodik_s3_text:  "We train together – motivated, structured and effective.",
    methodik_s4_titel: "Results",
    methodik_s4_text:  "You see real results – sustainable and long-term.",
    beliebt:    "⭐ Most Popular",
    paket_btn:  "Book Now",
    paket1_name: "Starter",
    paket1_l1:  "✅ 4x training per month",
    paket1_l2:  "✅ Training plan",
    paket1_l3:  "✅ WhatsApp support",
    paket1_l4:  "❌ Nutrition plan",
    paket1_l5:  "❌ Video analysis",
    paket2_name: "Performance",
    paket2_l1:  "✅ 8x training per month",
    paket2_l2:  "✅ Training plan",
    paket2_l3:  "✅ WhatsApp support",
    paket2_l4:  "✅ Nutrition plan",
    paket2_l5:  "❌ Video analysis",
    paket3_name: "Elite",
    paket3_l1:  "✅ 12x training per month",
    paket3_l2:  "✅ Training plan",
    paket3_l3:  "✅ 24/7 WhatsApp support",
    paket3_l4:  "✅ Nutrition plan",
    paket3_l5:  "✅ Video analysis",
    pro_monat: "/month",
    ergebnisse_text: "Real results from my clients – hard work, sustainable progress.",
    vorher:    "Before",
    nachher:   "After",
    ergebnis1: "Max, 34 years – lost 12 kg in 3 months",
    ergebnis2: "Lisa, 28 years – lost 8 kg in 2 months",
    ergebnis3: "Tom, 41 years – lost 15 kg in 4 months",
    bewertung1_text: "\"I lost 12 kg in 3 months – I never thought that was possible. The best trainer I've ever had!\"",
    bewertung1_name: "Max M., 34 years",
    bewertung2_text: "\"Finally a trainer who treats me as an individual. The nutrition plan was a game changer!\"",
    bewertung2_name: "Lisa K., 28 years",
    bewertung3_text: "\"Professional, motivating and always available. Absolute recommendation!\"",
    bewertung3_name: "Tom S., 41 years",
    faq1_frage:   "Who is the coaching suitable for?",
    faq1_antwort: "My coaching is suitable for everyone – whether beginner or advanced. We always start where you are right now.",
    faq2_frage:   "How does online coaching work?",
    faq2_antwort: "You receive your personal training and nutrition plan via app. We communicate daily via WhatsApp and have weekly video calls.",
    faq3_frage:   "How quickly will I see results?",
    faq3_antwort: "Most clients see first results after 2-4 weeks. Sustainable changes happen within 3-6 months.",
    faq4_frage:   "Can I cancel the package at any time?",
    faq4_antwort: "Yes, all packages are cancellable monthly. No hidden costs, no long contract terms.",
    kontakt_text:     "Write to me – I'll get back to you within 24 hours!",
    kontakt_ort:      "Augsburg, Germany",
    kontakt_zeit:     "Mon–Fri, 08:00–20:00",
    kontakt_anrede:   "Title",
    kontakt_name:     "Name",
    kontakt_email:    "E-Mail",
    kontakt_ziel:     "Your Goal",
    kontakt_nachricht:"Message",
    kontakt_btn:      "Send Message",
    ziel_abnehmen:    "Lose weight",
    ziel_muskel:      "Muscle gain",
    ziel_fitness:     "General fitness",
    ziel_ernaehrung:  "Nutrition advice",
    nav_supplements: "Supplements",
    supplements_titel: "Recommended Supplements",
    supplements_text: "Support your training with selected supplements. Use code FITNESSMERT for up to 30% off.",
    supplements_code_label: "Your discount code:",
    supplements_btn: "View supplements",
    supplement1_titel: "Protein",
    supplement1_text: "Supports muscle growth and recovery after training.",
    supplement2_titel: "Pre-Workout",
    supplement2_text: "For more focus, energy and motivation before intense sessions.",
    supplement3_titel: "Basics",
    supplement3_text: "Useful essentials such as creatine, omega-3 or vitamins.",
},

  ru: {
    hero_titel:        "Твой путь к лучшей версии себя",
    hero_text:         "Профессиональный персональный коучинг – индивидуально, эффективно.",
    hero_btn:          "Начать сейчас",
    ueber_titel:       "Обо мне",
    ueber_text:        "Я сертифицированный персональный тренер с более чем 5-летним опытом.",
    methodik_titel:    "Моя методика",
    methodik_text:     "Каждый человек уникален – поэтому каждый план тренировок индивидуален.",
    preise_titel:      "Пакеты и цены",
    ergebnisse_titel:  "До и после",
    bewertungen_titel: "Отзывы клиентов",
    faq_titel:         "Частые вопросы",
    kontakt_titel:     "Контакт",
    footer_text:       "© 2026 FitCoach – Все права защищены",
    nav_ueber:       "Обо мне",
    nav_methodik:    "Методика",
    nav_preise:      "Цены",
    nav_ergebnisse:  "Результаты",
    nav_bewertungen: "Отзывы",
    nav_faq:         "Вопросы",
    nav_kontakt:     "Контакт",
    nav_gratis: "Бесплатные планы",
    gratis_titel: "Скачать бесплатные планы",
    gratis_text: "Начни с бесплатного плана тренировок или питания. Выбери подходящий план и язык.",
    gratis_fitnessstudio_titel: "План тренировок в зале",
    gratis_fitnessstudio_text: "3 дня в неделю, идеально для новичков в фитнес-зале.",
    gratis_zuhause_titel: "План тренировок дома",
    gratis_zuhause_text: "Эффективные тренировки без оборудования – идеально для дома.",
    gratis_ernaehrung_titel: "План питания",
    gratis_ernaehrung_text: "Простой гид по здоровому питанию и лучшим результатам.",
    ueber_fakt1: "✅ Сертифицированный персональный тренер",
    ueber_fakt2: "✅ Более 100 успешных клиентов",
    ueber_fakt3: "✅ Специалист по набору мышц и похудению",
    ueber_fakt4: "✅ Онлайн и очный коучинг",
    ueber_btn:   "Бесплатная консультация",
    methodik_s1_titel: "Анализ",
    methodik_s1_text:  "Мы анализируем твоё текущее состояние – тело, питание и цели.",
    methodik_s2_titel: "Планирование",
    methodik_s2_text:  "Я составляю индивидуальный план тренировок и питания.",
    methodik_s3_titel: "Тренировки",
    methodik_s3_text:  "Мы тренируемся вместе – мотивированно, структурировано и эффективно.",
    methodik_s4_titel: "Результаты",
    methodik_s4_text:  "Ты видишь реальные результаты – устойчивые и долгосрочные.",
    beliebt:    "⭐ Самый популярный",
    paket_btn:  "Записаться",
    paket1_name: "Старт",
    paket1_l1:  "✅ 4 тренировки в месяц",
    paket1_l2:  "✅ План тренировок",
    paket1_l3:  "✅ Поддержка в WhatsApp",
    paket1_l4:  "❌ План питания",
    paket1_l5:  "❌ Видео анализ",
    paket2_name: "Перформанс",
    paket2_l1:  "✅ 8 тренировок в месяц",
    paket2_l2:  "✅ План тренировок",
    paket2_l3:  "✅ Поддержка в WhatsApp",
    paket2_l4:  "✅ План питания",
    paket2_l5:  "❌ Видео анализ",
    paket3_name: "Элит",
    paket3_l1:  "✅ 12 тренировок в месяц",
    paket3_l2:  "✅ План тренировок",
    paket3_l3:  "✅ Поддержка 24/7 в WhatsApp",
    paket3_l4:  "✅ План питания",
    paket3_l5:  "✅ Видео анализ",
    pro_monat: "/месяц",
    ergebnisse_text: "Реальные результаты моих клиентов – упорный труд, устойчивый прогресс.",
    vorher:    "До",
    nachher:   "После",
    ergebnis1: "Макс, 34 года – минус 12 кг за 3 месяца",
    ergebnis2: "Лиза, 28 лет – минус 8 кг за 2 месяца",
    ergebnis3: "Том, 41 год – минус 15 кг за 4 месяца",
    bewertung1_text: "\"Я похудел на 12 кг за 3 месяца – я никогда не думал, что это возможно. Лучший тренер!\"",
    bewertung1_name: "Макс М., 34 года",
    bewertung2_text: "\"Наконец-то тренер, который относится ко мне индивидуально. План питания изменил всё!\"",
    bewertung2_name: "Лиза К., 28 лет",
    bewertung3_text: "\"Профессионально, мотивирующе и всегда на связи. Абсолютная рекомендация!\"",
    bewertung3_name: "Том С., 41 год",
    faq1_frage:   "Для кого подходит коучинг?",
    faq1_antwort: "Мой коучинг подходит для всех – новичков и опытных. Мы всегда начинаем с того места, где ты находишься.",
    faq2_frage:   "Как проходит онлайн-коучинг?",
    faq2_antwort: "Ты получаешь личный план тренировок и питания через приложение. Мы общаемся ежедневно в WhatsApp и проводим еженедельные видеозвонки.",
    faq3_frage:   "Как быстро я увижу результаты?",
    faq3_antwort: "Большинство клиентов видят первые результаты уже через 2-4 недели. Устойчивые изменения происходят за 3-6 месяцев.",
    faq4_frage:   "Могу ли я отменить пакет в любое время?",
    faq4_antwort: "Да, все пакеты можно отменить ежемесячно. Никаких скрытых расходов, никаких длительных контрактов.",
    kontakt_text:     "Напиши мне – я отвечу в течение 24 часов!",
    kontakt_ort:      "Аугсбург, Германия",
    kontakt_zeit:     "Пн–Пт, 08:00–20:00",
    kontakt_anrede:   "Обращение",
    kontakt_name:     "Имя",
    kontakt_email:    "Эл. почта",
    kontakt_ziel:     "Твоя цель",
    kontakt_nachricht:"Сообщение",
    kontakt_btn:      "Отправить",
    ziel_abnehmen:    "Похудеть",
    ziel_muskel:      "Набор мышц",
    ziel_fitness:     "Общий фитнес",
    ziel_ernaehrung:  "Консультация по питанию",
    nav_supplements: "Добавки",
    supplements_titel: "Рекомендуемые добавки",
    supplements_text: "Поддержи свои тренировки с помощью выбранных добавок. Используй код FITNESSMERT и получи скидку до 30%.",
    supplements_code_label: "Твой промокод:",
    supplements_btn: "Посмотреть добавки",
    supplement1_titel: "Протеин",
    supplement1_text: "Поддерживает рост мышц и восстановление после тренировки.",
    supplement2_titel: "Предтреник",
    supplement2_text: "Для большего фокуса, энергии и мотивации перед интенсивными тренировками.",
    supplement3_titel: "База",
    supplement3_text: "Полезные основы, такие как креатин, омега-3 или витамины.",
}

};

// ===== SPRACHWECHSLER FUNKTION =====
// Diese Funktion wird aufgerufen wenn man auf eine Flagge klickt
function spracheWechseln(sprache) {

  // Hole alle Elemente die ein data-i18n Attribut haben
  const elemente = document.querySelectorAll('[data-i18n]');

  // Gehe durch jedes Element
  elemente.forEach(function(element) {

    // Lese den Schlüssel aus – z.B. "hero_titel"
    const schluessel = element.getAttribute('data-i18n');

    // Suche den passenden Text in unseren Übersetzungen
    const text = uebersetzungen[sprache][schluessel];

    // Setze den Text ein
    if (text) {
      element.textContent = text;
    }

  });

  // Ändere die Sprache im html-Tag (wichtig für Barrierefreiheit)
  document.documentElement.lang = sprache;

}
// ===== FAQ TOGGLE =====
function faqToggle(button) {
  const item = button.parentElement;
  item.classList.toggle('offen');

  const istOffen = item.classList.contains('offen');
  button.setAttribute('aria-expanded', istOffen);
}
// ===== SCROLL ANIMATION =====
const beobachter = new IntersectionObserver(function(eintraege) {
  eintraege.forEach(function(eintrag) {
    if (eintrag.isIntersecting) {
      eintrag.target.classList.add('sichtbar');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(function(section) {
  section.classList.add('versteckt');
  beobachter.observe(section);
});

// ===== ZÄHLER ANIMATION =====
function zaehlerAnimation(element, ziel, dauer) {
  let start = 0;
  const schritt = ziel / (dauer / 16);
  const timer = setInterval(function() {
    start += schritt;
    if (start >= ziel) {
      element.textContent = ziel + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

const zaehlerBeobachter = new IntersectionObserver(function(eintraege) {
  eintraege.forEach(function(eintrag) {
    if (eintrag.isIntersecting) {
      const ziel = parseInt(eintrag.target.getAttribute('data-ziel'));
      zaehlerAnimation(eintrag.target, ziel, 2000);
      zaehlerBeobachter.unobserve(eintrag.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-ziel]').forEach(function(el) {
  zaehlerBeobachter.observe(el);
});

// ===== BACK TO TOP BUTTON =====
const topButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    topButton.classList.add('sichtbar');
  } else {
    topButton.classList.remove('sichtbar');
  }
});

topButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== AKTIVER NAVIGATIONSLINK =====
const sektionen = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let aktuelle = '';
  sektionen.forEach(function(sektion) {
    const sektionTop = sektion.offsetTop - 100;
    if (window.scrollY >= sektionTop) {
      aktuelle = sektion.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('aktiv');
    if (link.getAttribute('href') === '#' + aktuelle) {
      link.classList.add('aktiv');
    }
  });
});

// ===== FORMULAR VALIDIERUNG =====
document.addEventListener('DOMContentLoaded', function() {
  const formular = document.querySelector('.kontakt-form');
  if (formular) {
    formular.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const nachricht = document.getElementById('nachricht').value.trim();

      if (!name || !email || !nachricht) {
        e.preventDefault();
        zeigeFehler('Bitte fülle alle Pflichtfelder aus!');
        return;
      }

      if (!email.includes('@')) {
        e.preventDefault();
        zeigeFehler('Bitte gib eine gültige E-Mail Adresse ein!');
        return;
      }

      zeigeErfolg('Danke ' + name + '! Ich melde mich innerhalb von 24 Stunden. 💪');
    });
  }
});

function zeigeFehler(text) {
  const meldung = document.getElementById('form-meldung');
  meldung.textContent = text;
  meldung.className = 'form-meldung fehler';
  meldung.style.display = 'block';
}

function zeigeErfolg(text) {
  const meldung = document.getElementById('form-meldung');
  meldung.textContent = text;
  meldung.className = 'form-meldung erfolg';
  meldung.style.display = 'block';
}
// ===== BARRIEREFREIHEITS MENÜ =====
function toggleAccessibilityMenu() {
  const panel = document.getElementById('accessibility-panel');
  panel.classList.toggle('offen');
}

// ===== TEXT TO SPEECH =====
function textVorlesen() {
  // Falls schon vorgelesen wird, zuerst stoppen
  window.speechSynthesis.cancel();

  // Nur Hauptbereiche vorlesen, nicht Navigation/Footer/Barrierefreiheitsmenü
  const bereiche = document.querySelectorAll('section');

  let gesamterText = '';

  bereiche.forEach(function(section) {
    const textelemente = section.querySelectorAll('h1, h2, h3, p, li');

    textelemente.forEach(function(element) {
      const text = element.textContent.trim();

      if (text.length > 0) {
        gesamterText += text + '. ';
      }
    });
  });

  if (gesamterText.length === 0) {
    alert('Es wurde kein Text zum Vorlesen gefunden.');
    return;
  }

  const sprache = document.documentElement.lang || 'de';
  const ausgabe = new SpeechSynthesisUtterance(gesamterText);

  if (sprache === 'en') {
    ausgabe.lang = 'en-US';
  } else if (sprache === 'ru') {
    ausgabe.lang = 'ru-RU';
  } else {
    ausgabe.lang = 'de-DE';
  }

  ausgabe.rate = 0.9;
  ausgabe.pitch = 1;
  ausgabe.volume = 1;

  window.speechSynthesis.speak(ausgabe);
}

function vorlesenStoppen() {
  window.speechSynthesis.cancel();
}

// ===== SCHRIFTGRÖẞE VERSTELLEN =====
let aktuelleSchriftgroesse = 100;

function schriftgroesseAnwenden() {
  const elemente = document.querySelectorAll(
    'h1, h2, h3, p, li, a, button, label, input, textarea, select, span, strong'
  );

  elemente.forEach(function(element) {
    // Ursprüngliche Schriftgröße nur einmal speichern
    if (!element.dataset.originalFontSize) {
      const aktuelleGroesse = window.getComputedStyle(element).fontSize;
      element.dataset.originalFontSize = parseFloat(aktuelleGroesse);
    }

    const originalGroesse = parseFloat(element.dataset.originalFontSize);
    const neueGroesse = originalGroesse * (aktuelleSchriftgroesse / 100);

    element.style.fontSize = neueGroesse + 'px';
  });
}

function schriftGroesser() {
  if (aktuelleSchriftgroesse < 130) {
    aktuelleSchriftgroesse += 10;
    schriftgroesseAnwenden();
    barrierefreiheitSpeichern();
  }
}

function schriftKleiner() {
  if (aktuelleSchriftgroesse > 80) {
    aktuelleSchriftgroesse -= 10;
    schriftgroesseAnwenden();
    barrierefreiheitSpeichern();
  }
}

// ===== KONTRAST MODUS =====
function kontrastModus() {
  document.body.classList.toggle('kontrast');
}

// ===== RESET =====
function barrierefreiheitReset() {
  aktuelleSchriftgroesse = 100;

  const elemente = document.querySelectorAll(
    'h1, h2, h3, p, li, a, button, label, input, textarea, select, span, strong'
  );

  elemente.forEach(function(element) {
    element.style.fontSize = '';
    delete element.dataset.originalFontSize;
  });

  document.body.classList.remove('kontrast');
  window.speechSynthesis.cancel();

  localStorage.removeItem('schriftgroesse');
localStorage.removeItem('kontrastAktiv');
}

// ===== BARRIEREFREIHEIT EINSTELLUNGEN SPEICHERN =====
function barrierefreiheitSpeichern() {
  localStorage.setItem('schriftgroesse', aktuelleSchriftgroesse);
  localStorage.setItem('kontrastAktiv', document.body.classList.contains('kontrast'));
}

function gespeicherteBarrierefreiheitLaden() {
  const gespeicherteSchrift = localStorage.getItem('schriftgroesse');
  const gespeicherterKontrast = localStorage.getItem('kontrastAktiv');

  if (gespeicherteSchrift) {
    aktuelleSchriftgroesse = parseInt(gespeicherteSchrift);
    schriftgroesseAnwenden();
  }

  if (gespeicherterKontrast === 'true') {
    document.body.classList.add('kontrast');
  }
}

document.addEventListener('DOMContentLoaded', gespeicherteBarrierefreiheitLaden);

// ===== VORHER/NACHHER SLIDER =====
document.querySelectorAll('.slider-container').forEach(function(container) {
  const range = container.querySelector('.slider-range');
  const vorher = container.querySelector('.vorher-bild');
  const linie = container.querySelector('.slider-linie');
  const griff = container.querySelector('.slider-griff');

  let isDragging = false;

  function updateSlider(wert) {
    const pos = wert + '%';
    vorher.style.width = pos;
    linie.style.left = pos;
    griff.style.left = pos;
    range.value = wert;
  }

  function getWert(clientX) {
  const rect = container.getBoundingClientRect();
  const wert = Math.round(((clientX - rect.left) / rect.width) * 100);
  return Math.min(100, Math.max(0, wert));
}

updateSlider(50);

  // Maus
  container.addEventListener('mousedown', function() { isDragging = true; });
  window.addEventListener('mouseup', function() { isDragging = false; });
  container.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    updateSlider(getWert(e.clientX));
  });
  container.addEventListener('click', function(e) {
    updateSlider(getWert(e.clientX));
  });

  // Touch / Trackpad
  container.addEventListener('touchstart', function(e) {
    isDragging = true;
    updateSlider(getWert(e.touches[0].clientX));
  });
  container.addEventListener('touchmove', function(e) {
    e.preventDefault();
    if (!isDragging) return;
    updateSlider(getWert(e.touches[0].clientX));
  }, { passive: false });
  container.addEventListener('touchend', function() { isDragging = false; });

  // Range als Fallback
  range.addEventListener('input', function() {
    updateSlider(parseInt(this.value));
  });
});

// ===== HAMBURGER MENÜ MOBILE =====
function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.querySelector('.hamburger');

  navMenu.classList.toggle('offen');

  const istOffen = navMenu.classList.contains('offen');
  hamburger.setAttribute('aria-expanded', istOffen);
}

// Menü nach Klick auf Link wieder schließen
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (window.innerWidth <= 850 && navMenu.classList.contains('offen')) {
      navMenu.classList.remove('offen');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
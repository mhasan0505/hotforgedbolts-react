import { useLanguage } from "../contexts/LanguageContext";

export const translations = {
  en: {
    nav: {
      home: "Home",
      production: "Production",
      about: "About",
      contact: "Contact",
      products: "Products",
      bolts: "Bolts",
      nuts: "Nuts",
      washers: "Washers",
    },
    production: {
      categories: [
        {
          id: 1,
          name: "Hot Forged Bolts",
          description: "High-strength bolts manufactured through hot forging process",
          image: "/images/bolts.jpg"
        },
        {
          id: 2,
          name: "Nuts & Fasteners",
          description: "Precision-engineered nuts and fastening solutions",
          image: "/images/nuts.jpg"
        },
        {
          id: 3,
          name: "Washers",
          description: "Durable washers for secure fastening applications",
          image: "/images/washers.jpg"
        }
      ],
      keyfeatures: "Key Features" // Add this line
    },

    slider: {
      slide1: {
        title: "Precision in Every Forge",
        subtitle:
          "Hot forged bolts and nuts engineered with strength, accuracy, and durability — trusted by industries worldwide",
      },
      slide2: {
        title: "Built to Withstand",
        subtitle:
          "Certified fastening solutions that meet DIN, BS, TE standards — from standard bolts to custom specifications.",
      },
      slide3: {
        title: "Shaping Strength",
        subtitle:
          "Closed die forging solutions for high-performance, safety-critical components.",
      },
    },
    buttons: {
      getQuote: "Get Quote",
      contactUs: "Contact Us",
      learnMore: "Learn More",
      viewAll: "View All Products",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      language: "Language",
    },
  },
  it: {
    nav: {
      home: "Home",
      production: "Produzione",
      about: "Chi Siamo",
      contact: "Contatti",
      products: "Prodotti",
      bolts: "Bulloni",
      nuts: "Dadi",
      washers: "Rondelle",
    },
    production: {
      categories: [
        {
          id: 1,
          name: "Bulloni Forgiati a Caldo",
          description: "Bulloni ad alta resistenza prodotti attraverso il processo di forgiatura a caldo",
          image: "/images/bolts.jpg"
        },
        {
          id: 2,
          name: "Dadi e Elementi di Fissaggio",
          description: "Dadi e soluzioni di fissaggio di precisione",
          image: "/images/nuts.jpg"
        },
        {
          id: 3,
          name: "Rondelle",
          description: "Rondelle durevoli per applicazioni di fissaggio sicuro",
          image: "/images/washers.jpg"
        }
      ],
      keyfeatures: "Caratteristiche Primarie" // Add this line
    },

    slider: {
      slide1: {
        title: "Precisione in Ogni Forgiatura",
        subtitle:
          "Bulloni e dadi forgiati a caldo progettati con forza, precisione e durata — scelti dalle industrie di tutto il mondo.",
      },
      slide2: {
        title: "Costruito per Resistere",
        subtitle:
          "Soluzioni di fissaggio certificate che soddisfano gli standard DIN, BS, TE — dai bulloni standard alle specifiche personalizzate.",
      },
      slide3: {
        title: "Plasmare la Forza",
        subtitle:
          "Soluzioni di forgiatura a stampo chiuso per componenti ad alte prestazioni e critici per la sicurezza.",
      },
    },
    buttons: {
      getQuote: "Richiedi Preventivo",
      contactUs: "Contattaci",
      learnMore: "Scopri di Più",
      viewAll: "Visualizza Tutti i Prodotti",
    },
    common: {
      loading: "Caricamento...",
      error: "Errore",
      success: "Successo",
      language: "Lingua",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      production: "Produktion",
      about: "Über Uns",
      contact: "Kontakt",
      products: "Produkte",
      bolts: "Schrauben",
      nuts: "Muttern",
      washers: "Unterlegscheiben",
    },
    production: {
      categories: [
        {
          id: 1,
          name: "Warmgeschmiedete Schrauben",
          description: "Hochfeste Schrauben durch Warmschmiedeverfahren hergestellt",
          image: "/images/bolts.jpg"
        },
        {
          id: 2,
          name: "Muttern & Befestigungselemente",
          description: "Präzisionsgefertigte Muttern und Befestigungslösungen",
          image: "/images/nuts.jpg"
        },
        {
          id: 3,
          name: "Unterlegscheiben",
          description: "Langlebige Unterlegscheiben für sichere Befestigungsanwendungen",
          image: "/images/washers.jpg"
        }
      ],
      keyfeatures: "Hauptmerkmale" // Add this line
    },

    slider: {
      slide1: {
        title: "Präzision in jedem Schmiedevorgang",
        subtitle:
          "Warmgeschmiedete Schrauben und Muttern, entwickelt mit Stärke, Präzision und Langlebigkeit — weltweit von Industrien geschätzt.",
      },
      slide2: {
        title: "Gebaut, um zu Bestehen",
        subtitle:
          "Zertifizierte Befestigungslösungen, die den Normen DIN, BS, TE entsprechen — von Standardschrauben bis zu kundenspezifischen Anforderungen.",
      },
      slide3: {
        title: "Stärke Formen",
        subtitle:
          "Geschlossenes Gesenkschmieden für hochleistungsfähige, sicherheitskritische Komponenten.",
      },
    },
    buttons: {
      getQuote: "Angebot Anfordern",
      contactUs: "Kontaktieren Sie Uns",
      learnMore: "Mehr Erfahren",
      viewAll: "Alle Produkte Anzeigen",
    },
    common: {
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      language: "Sprache",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      production: "Producción",
      about: "Acerca de",
      contact: "Contacto",
      products: "Productos",
      bolts: "Pernos",
      nuts: "Tuercas",
      washers: "Arandelas",
    },
    production: {
      categories: [
        {
          id: 1,
          name: "Pernos Forjados en Caliente",
          description: "Pernos de alta resistencia fabricados mediante proceso de forja en caliente",
          image: "/images/bolts.jpg"
        },
        {
          id: 2,
          name: "Tuercas y Elementos de Fijación",
          description: "Tuercas y soluciones de fijación de precisión",
          image: "/images/nuts.jpg"
        },
        {
          id: 3,
          name: "Arandelas",
          description: "Arandelas duraderas para aplicaciones de fijación segura",
          image: "/images/washers.jpg"
        }
      ],
      keyfeatures: "Características Clave" // Add this line
    },

    slider: {
      slide1: {
        title: "Precisión en Cada Forja",
        subtitle:
          "Pernos y tuercas forjados en caliente diseñados con resistencia, precisión y durabilidad — confiados por industrias de todo el mundo.",
      },
      slide2: {
        title: "Construido para Resistir",
        subtitle:
          "Soluciones de fijación certificadas que cumplen con los estándares DIN, BS, TE — desde pernos estándar hasta especificaciones personalizadas.",
      },
      slide3: {
        title: "Dando Forma a la Resistencia",
        subtitle:
          "Soluciones de forja en matriz cerrada para componentes de alto rendimiento y críticos para la seguridad.",
      },
    },
    buttons: {
      getQuote: "Solicitar Cotización",
      contactUs: "Contáctanos",
      learnMore: "Saber Más",
      viewAll: "Ver Todos los Productos",
    },
    common: {
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      language: "Idioma",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      production: "Производство",
      about: "О Нас",
      contact: "Контакты",
      products: "Продукция",
      bolts: "Болты",
      nuts: "Гайки",
      washers: "Шайбы",
    },
    production: {
      categories: [
        {
          id: 1,
          name: "Горячекованые Болты",
          description: "Высокопрочные болты, изготовленные методом горячей ковки",
          image: "/images/bolts.jpg"
        },
        {
          id: 2,
          name: "Гайки и Крепежные Элементы",
          description: "Прецизионные гайки и крепежные решения",
          image: "/images/nuts.jpg"
        },
        {
          id: 3,
          name: "Шайбы",
          description: "Прочные шайбы для надежных крепежных применений",
          image: "/images/washers.jpg"
        }
      ],
      keyfeatures: "Основные Характеристики" // Add this line
    },

    slider: {
      slide1: {
        title: "Точность в каждой ковке",
        subtitle:
          "Горячекованые болты и гайки, разработанные с учетом прочности, точности и долговечности — доверяют промышленности по всему миру.",
      },
      slide2: {
        title: "Создано для выдержки",
        subtitle:
          "Сертифицированные крепежные решения, соответствующие стандартам DIN, BS, TE — от стандартных болтов до индивидуальных спецификаций.",
      },
      slide3: {
        title: "Формирование прочности",
        subtitle:
          "Решения для ковки в закрытых штампах для высокопроизводительных и критически важных для безопасности компонентов.",
      },
    },
    buttons: {
      getQuote: "Запросить Предложение",
      contactUs: "Связаться с Нами",
      learnMore: "Узнать Больше",
      viewAll: "Посмотреть Все Продукты",
    },
    common: {
      loading: "Загрузка...",
      error: "Ошибка",
      success: "Успех",
      language: "Язык",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      production: "Üretim",
      about: "Hakkımızda",
      contact: "İletişim",
      products: "Ürünler",
      bolts: "Cıvatalar",
      nuts: "Somunlar",
      washers: "Pullar",
    },
    production: {
      categories: [
        {
          id: 1,
          name: "Sıcak Dövme Cıvatalar",
          description: "Sıcak dövme işlemi ile üretilen yüksek mukavemetli cıvatalar",
          image: "/images/bolts.jpg"
        },
        {
          id: 2,
          name: "Somunlar ve Bağlantı Elemanları",
          description: "Hassas mühendislik ile üretilmiş somunlar ve bağlantı çözümleri",
          image: "/images/nuts.jpg"
        },
        {
          id: 3,
          name: "Pullar",
          description: "Güvenli bağlantı uygulamaları için dayanıklı pullar",
          image: "/images/washers.jpg"
        }
      ],
      keyfeatures: "Ana Özellikler" // Add this line
    },

    slider: {
      slide1: {
        title: "Her Dövmede Hassasiyet",
        subtitle:
          "Dünya çapında endüstriler tarafından güvenilen, güç, doğruluk ve dayanıklılıkla tasarlanmış sıcak dövme cıvatalar ve somunlar",
      },
      slide2: {
        title: "Dayanacak Şekilde Üretildi",
        subtitle:
          "DIN, BS, TE standartlarını karşılayan sertifikalı bağlantı çözümleri — standart cıvatalardan özel spesifikasyonlara kadar.",
      },
      slide3: {
        title: "Gücü Şekillendirme",
        subtitle:
          "Yüksek performanslı, güvenlik açısından kritik bileşenler için kapalı kalıp dövme çözümleri.",
      },
    },
    buttons: {
      getQuote: "Teklif Al",
      contactUs: "Bize Ulaşın",
      learnMore: "Daha Fazla Öğren",
      viewAll: "Tüm Ürünleri Görüntüle",
    },
    common: {
      loading: "Yükleniyor...",
      error: "Hata",
      success: "Başarılı",
      language: "Dil",
    },
  },
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, language };
};

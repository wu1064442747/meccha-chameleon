export const siteUrl = "https://ai-meccha-chameleon.online";

export const locales = ["en", "ar", "th"];

export const localeMeta = {
  en: {
    label: "English",
    lang: "en",
    dir: "ltr",
    path: "/",
    title: "Meccha Chameleon - Play Online Hide and Seek Game",
    description:
      "Play Meccha Chameleon online and learn what the chameleon hide and seek game is, how to play, where to play, and how maps shape hiding strategy.",
    ogDescription:
      "Paint, hide, and blend into the map in Meccha Chameleon. Play online, learn the rules, and explore maps and hiding tips.",
    schemaDescription:
      "Meccha Chameleon is a multiplayer hide-and-seek game where hiders paint themselves to blend into the map while seekers try to find them."
  },
  ar: {
    label: "العربية",
    lang: "ar",
    dir: "rtl",
    path: "/ar/",
    title: "Meccha Chameleon - العب لعبة الاختباء والتمويه أونلاين",
    description:
      "العب Meccha Chameleon أونلاين وتعرّف على لعبة الاختباء بالتمويه، طريقة اللعب، مكان اللعب، وكيف تؤثر الخرائط في استراتيجية الاختباء.",
    ogDescription:
      "لوّن شخصيتك، اختبئ، واندمج مع الخريطة في Meccha Chameleon. العب أونلاين وتعرّف على القواعد والخرائط ونصائح الاختباء.",
    schemaDescription:
      "Meccha Chameleon هي لعبة اختباء جماعية يحاول فيها المختبئون تلوين أنفسهم للاندماج مع الخريطة بينما يبحث اللاعبون الآخرون عنهم."
  },
  th: {
    label: "ไทย",
    lang: "th",
    dir: "ltr",
    path: "/th/",
    title: "Meccha Chameleon - เล่นเกมซ่อนหาออนไลน์",
    description:
      "เล่น Meccha Chameleon ออนไลน์ เรียนรู้ว่าเกมซ่อนหาแบบกิ้งก่าเล่นอย่างไร เล่นได้ที่ไหน และแผนที่มีผลต่อกลยุทธ์การซ่อนอย่างไร",
    ogDescription:
      "ระบายสี ซ่อนตัว และกลืนไปกับแผนที่ใน Meccha Chameleon เล่นออนไลน์ เรียนรู้กติกา และดูเคล็ดลับการซ่อนตัว",
    schemaDescription:
      "Meccha Chameleon เป็นเกมซ่อนหาแบบผู้เล่นหลายคนที่ฝ่ายซ่อนต้องระบายสีตัวเองให้กลืนไปกับแผนที่ ส่วนฝ่ายค้นหาต้องตามหาผู้เล่นที่ซ่อนอยู่"
  }
};

export const contentByLocale = {
  en: {
    brand: "Meccha Chameleon",
    navAriaLabel: "Primary navigation",
    footerAriaLabel: "Footer navigation",
    nav: {
      play: "Play",
      howToPlay: "How to Play",
      maps: "Maps",
      faq: "FAQ"
    },
    languageAriaLabel: "Language",
    playButton: "Play Now",
    hero: {
      title: "Meccha Chameleon",
      text: "Play the chameleon hide and seek game online. Paint, hide, and blend into the map before the seeker finds you."
    },
    quickFactsAriaLabel: "Game facts",
    quickFacts: [
      { label: "Mode", value: "Hiders vs seekers" },
      { label: "Players", value: "2-10 recommended" },
      { label: "Focus", value: "Paint, disguise, spot" }
    ],
    sectionPeek: "What is Meccha Chameleon?",
    game: {
      playableLabel: "Playable Meccha Chameleon game",
      browserPlay: "Browser play",
      status: "online",
      iframeTitle: "MECCHA CHAMELEON Game",
      adLabel: {
        top: "Advertisement above game",
        left: "Advertisement left of game",
        right: "Advertisement right of game"
      },
      adTitle: {
        top: "Advertisement top",
        left: "Advertisement left",
        right: "Advertisement right"
      }
    },
    whatIs: {
      title: "What is Meccha Chameleon?",
      intro:
        "It is a multiplayer hide-and-seek game about color, camouflage, and noticing what does not fit.",
      lead:
        "Meccha Chameleon puts one team in hiding and another team in pursuit. Hiders paint their white bodies with colors from the map, then pose in places where their shape and color look natural. Seekers win by finding every hidden player before time runs out.",
      imageAlt: "Meccha Chameleon key art showing the colorful camouflage characters",
      caption: "MECCHA CHAMELEON key art."
    },
    media: {
      title: "Gameplay Video and Pictures",
      intro:
        "Screenshots help new players understand the core loop faster: paint your body, choose a surface, then avoid standing out when the seeker scans the room.",
      trailerTitle: "MECCHA CHAMELEON trailer video",
      items: [
        {
          title: "Camouflage in plain sight",
          src: "/media/meccha-chameleon-camouflage.jpg",
          alt: "Meccha Chameleon gameplay showing a painted character blending into a stage"
        },
        {
          title: "Hide and seek pressure",
          src: "/media/meccha-chameleon-hide-and-seek.jpg",
          alt: "Meccha Chameleon hide and seek gameplay with players moving through a map"
        },
        {
          title: "Map reading",
          src: "/media/meccha-chameleon-map-scene.jpg",
          alt: "Meccha Chameleon map scene with surfaces used for camouflage"
        },
        {
          title: "Seeker view",
          src: "/media/meccha-chameleon-seeker.jpg",
          alt: "Meccha Chameleon seeker gameplay while looking for hidden players"
        }
      ]
    },
    howToPlay: {
      title: "How to Play",
      intro: "Use the map as your disguise, then read the room like a seeker.",
      steps: [
        {
          title: "Paint your body",
          text: "Hiders copy colors from the stage so their character blends into floors, walls, props, and shadows."
        },
        {
          title: "Choose a believable spot",
          text: "A perfect color match still fails if the silhouette looks strange. Hide where your pose makes sense."
        },
        {
          title: "Scan like a seeker",
          text: "Seekers look for color seams, odd outlines, repeated props, and tiny movement that breaks the illusion."
        }
      ]
    },
    whereToPlay: {
      title: "Where to Play",
      text:
        "If you searched for where to play Meccha Chameleon, start with the embedded game on this page. The online version loads directly in your browser, so you can jump into the hide-and-seek match from here.",
      optionLabel: "Browser",
      optionTitle: "Play online here"
    },
    maps: {
      title: "Meccha Chameleon Maps",
      intro:
        "Maps decide how strong a hiding spot can be. Look for surfaces with repeatable color, believable shapes, and routes seekers must scan.",
      imageAlt: "Meccha Chameleon map screenshot showing stage surfaces used for hiding",
      caption: "Actual gameplay screenshot from the map section.",
      rows: [
        {
          name: "Official stages",
          detail: "Use these first to understand common hiding surfaces, camera angles, and seeker routes."
        },
        {
          name: "Osaka map",
          detail:
            "A Japanese-themed update added a new Osaka stage, making map searches more important for players."
        },
        {
          name: "Community routes",
          detail:
            "Player routes and hiding habits change each match, so revisit familiar maps with fresh seeker paths in mind."
        }
      ]
    },
    tips: {
      title: "Best Hiding Tips",
      intro: "Good camouflage is part color science and part acting normal.",
      items: [
        "Sample colors from broad flat areas instead of noisy edges.",
        "Hide near real objects so your outline has an explanation.",
        "After moving, stop early; late motion is easier to catch than imperfect paint.",
        "As seeker, check corners, repeated patterns, and props facing the wrong way."
      ]
    },
    comparison: {
      title: "Meccha Chameleon vs Hide and Seek",
      paragraphs: [
        "Traditional hide and seek is about physical cover. Meccha Chameleon is about visual camouflage: you can be in plain sight if your paint, shape, and position convince the seeker.",
        "It also differs from many prop-hunt games. Instead of only becoming an object, the central trick is painting your body to disappear into the map."
      ]
    },
    faq: {
      title: "FAQ",
      intro: "Fast answers for players searching the game name, maps, and play options.",
      items: [
        {
          question: "What is Meccha Chameleon?",
          answer:
            "Meccha Chameleon is a multiplayer hide-and-seek game where hiders paint themselves to match the map while seekers search for players who do not quite belong."
        },
        {
          question: "Where can I play Meccha Chameleon?",
          answer: "You can play Meccha Chameleon online on this page through the embedded browser game frame."
        },
        {
          question: "Are there custom maps?",
          answer:
            "Maps are central to the game because each stage gives hiders different colors, surfaces, corners, and seeker routes to learn."
        },
        {
          question: "How many players can play?",
          answer:
            "Meccha Chameleon works best as a seeker-versus-hiders match where multiple players can hide, scan, and react together."
        }
      ]
    }
  },
  ar: {
    brand: "Meccha Chameleon",
    navAriaLabel: "التنقل الرئيسي",
    footerAriaLabel: "روابط التذييل",
    nav: {
      play: "العب",
      howToPlay: "طريقة اللعب",
      maps: "الخرائط",
      faq: "الأسئلة"
    },
    languageAriaLabel: "اللغة",
    playButton: "العب الآن",
    hero: {
      title: "Meccha Chameleon",
      text:
        "العب لعبة الاختباء والتمويه أونلاين. لوّن شخصيتك، اختبئ، واندمج مع الخريطة قبل أن يعثر عليك الباحث."
    },
    quickFactsAriaLabel: "معلومات اللعبة",
    quickFacts: [
      { label: "النمط", value: "مختبئون ضد باحثين" },
      { label: "اللاعبون", value: "ينصح بـ 2 إلى 10" },
      { label: "التركيز", value: "تلوين، تنكر، اكتشاف" }
    ],
    sectionPeek: "ما هي Meccha Chameleon؟",
    game: {
      playableLabel: "لعبة Meccha Chameleon قابلة للعب",
      browserPlay: "اللعب في المتصفح",
      status: "متصل",
      iframeTitle: "لعبة MECCHA CHAMELEON",
      adLabel: {
        top: "إعلان أعلى اللعبة",
        left: "إعلان يسار اللعبة",
        right: "إعلان يمين اللعبة"
      },
      adTitle: {
        top: "إعلان علوي",
        left: "إعلان أيسر",
        right: "إعلان أيمن"
      }
    },
    whatIs: {
      title: "ما هي Meccha Chameleon؟",
      intro: "إنها لعبة اختباء جماعية تدور حول الألوان والتمويه وملاحظة ما لا ينسجم مع المكان.",
      lead:
        "تضع Meccha Chameleon فريقا في وضع الاختباء وفريقا آخر في المطاردة. يلوّن المختبئون أجسامهم البيضاء بألوان من الخريطة، ثم يقفون في أماكن تبدو فيها أشكالهم وألوانهم طبيعية. يفوز الباحثون عندما يجدون كل اللاعبين المختبئين قبل انتهاء الوقت.",
      imageAlt: "صورة Meccha Chameleon تعرض شخصيات ملوّنة تستخدم التمويه",
      caption: "صورة Meccha Chameleon الرئيسية."
    },
    media: {
      title: "فيديو وصور اللعب",
      intro:
        "تساعد الصور اللاعبين الجدد على فهم الحلقة الأساسية بسرعة: لوّن جسمك، اختر سطحا مناسبا، ثم تجنب الظهور عندما يمسح الباحث الغرفة بعينيه.",
      trailerTitle: "فيديو عرض MECCHA CHAMELEON",
      items: [
        {
          title: "تمويه في مكان واضح",
          src: "/media/meccha-chameleon-camouflage.jpg",
          alt: "لقطة لعب من Meccha Chameleon تظهر شخصية ملوّنة تندمج مع المرحلة"
        },
        {
          title: "ضغط الاختباء والبحث",
          src: "/media/meccha-chameleon-hide-and-seek.jpg",
          alt: "لقطة اختباء وبحث في Meccha Chameleon مع لاعبين داخل الخريطة"
        },
        {
          title: "قراءة الخريطة",
          src: "/media/meccha-chameleon-map-scene.jpg",
          alt: "مشهد خريطة من Meccha Chameleon مع أسطح تستخدم للتمويه"
        },
        {
          title: "منظور الباحث",
          src: "/media/meccha-chameleon-seeker.jpg",
          alt: "لقطة من Meccha Chameleon من منظور الباحث أثناء البحث عن لاعبين مختبئين"
        }
      ]
    },
    howToPlay: {
      title: "طريقة اللعب",
      intro: "استخدم الخريطة كتمويه لك، ثم اقرأ المكان كما يفعل الباحث.",
      steps: [
        {
          title: "لوّن جسمك",
          text: "ينسخ المختبئون الألوان من المرحلة حتى تندمج الشخصية مع الأرضيات والجدران والأدوات والظلال."
        },
        {
          title: "اختر مكانا مقنعا",
          text: "حتى التطابق المثالي في اللون يفشل إذا كان الشكل غريبا. اختبئ في مكان يبدو فيه وضعك منطقيا."
        },
        {
          title: "افحص مثل الباحث",
          text: "يراقب الباحثون فواصل الألوان، الحواف الغريبة، العناصر المتكررة، وأي حركة صغيرة تكشف الخدعة."
        }
      ]
    },
    whereToPlay: {
      title: "أين تلعب",
      text:
        "إذا كنت تبحث عن مكان لعب Meccha Chameleon، فابدأ باللعبة المضمنة في هذه الصفحة. النسخة الأونلاين تعمل مباشرة في المتصفح، لذلك يمكنك الدخول إلى مباراة الاختباء والبحث من هنا.",
      optionLabel: "المتصفح",
      optionTitle: "العب أونلاين هنا"
    },
    maps: {
      title: "خرائط Meccha Chameleon",
      intro:
        "تحدد الخرائط مدى قوة مكان الاختباء. ابحث عن أسطح بألوان قابلة للتكرار، وأشكال مقنعة، ومسارات يجب أن يفحصها الباحثون.",
      imageAlt: "لقطة خريطة من Meccha Chameleon تعرض أسطحا تستخدم للاختباء",
      caption: "لقطة لعب فعلية من قسم الخرائط.",
      rows: [
        {
          name: "المراحل الرسمية",
          detail: "ابدأ بها لفهم أسطح الاختباء الشائعة وزوايا الكاميرا ومسارات الباحثين."
        },
        {
          name: "خريطة أوساكا",
          detail: "أضاف تحديث بطابع ياباني مرحلة أوساكا، ما جعل البحث عن الخرائط أكثر أهمية للاعبين."
        },
        {
          name: "مسارات المجتمع",
          detail: "تتغير طرق اللاعبين وعادات الاختباء في كل مباراة، لذلك أعد قراءة الخرائط المألوفة بعيون جديدة."
        }
      ]
    },
    tips: {
      title: "أفضل نصائح الاختباء",
      intro: "التمويه الجيد يجمع بين فهم اللون والتصرف بشكل طبيعي.",
      items: [
        "خذ اللون من مساحات عريضة ومسطحة بدلا من الحواف المليئة بالتفاصيل.",
        "اختبئ قرب عناصر حقيقية حتى يكون لشكل جسمك تفسير منطقي.",
        "بعد الحركة، توقف مبكرا؛ الحركة المتأخرة أسهل كشفا من لون غير مثالي.",
        "كباحث، افحص الزوايا والأنماط المتكررة والأدوات التي تواجه اتجاها غريبا."
      ]
    },
    comparison: {
      title: "Meccha Chameleon مقارنة بالاختباء التقليدي",
      paragraphs: [
        "الاختباء التقليدي يعتمد على الغطاء المادي. أما Meccha Chameleon فتعتمد على التمويه البصري: يمكنك أن تكون في مكان واضح إذا أقنع لونك وشكلك وموقعك الباحث.",
        "وتختلف أيضا عن كثير من ألعاب prop hunt. بدل أن تتحول فقط إلى غرض، تقوم الخدعة الأساسية على تلوين جسمك حتى تختفي داخل الخريطة."
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      intro: "إجابات سريعة للاعبين الذين يبحثون عن اسم اللعبة والخرائط وخيارات اللعب.",
      items: [
        {
          question: "ما هي Meccha Chameleon؟",
          answer:
            "Meccha Chameleon هي لعبة اختباء جماعية يلوّن فيها المختبئون أنفسهم ليتطابقوا مع الخريطة، بينما يبحث الباحثون عن اللاعبين الذين لا يبدون منسجمين مع المكان."
        },
        {
          question: "أين يمكنني لعب Meccha Chameleon؟",
          answer: "يمكنك لعب Meccha Chameleon أونلاين في هذه الصفحة من خلال إطار اللعبة المضمن."
        },
        {
          question: "هل توجد خرائط مخصصة؟",
          answer:
            "الخرائط جزء أساسي من اللعبة لأن كل مرحلة تمنح المختبئين ألوانا وأسطحا وزوايا ومسارات مختلفة للتعلم."
        },
        {
          question: "كم لاعبا يمكنهم اللعب؟",
          answer:
            "تعمل Meccha Chameleon بأفضل شكل كمباراة بين باحثين ومختبئين، حيث يستطيع عدة لاعبين الاختباء والفحص والتفاعل معا."
        }
      ]
    }
  },
  th: {
    brand: "Meccha Chameleon",
    navAriaLabel: "เมนูหลัก",
    footerAriaLabel: "เมนูส่วนท้าย",
    nav: {
      play: "เล่น",
      howToPlay: "วิธีเล่น",
      maps: "แผนที่",
      faq: "FAQ"
    },
    languageAriaLabel: "ภาษา",
    playButton: "เล่นเลย",
    hero: {
      title: "Meccha Chameleon",
      text:
        "เล่นเกมซ่อนหาแบบกิ้งก่าออนไลน์ ระบายสี ซ่อนตัว และกลืนไปกับแผนที่ก่อนที่ฝ่ายค้นหาจะเจอคุณ"
    },
    quickFactsAriaLabel: "ข้อมูลเกม",
    quickFacts: [
      { label: "โหมด", value: "ฝ่ายซ่อน vs ฝ่ายค้นหา" },
      { label: "ผู้เล่น", value: "แนะนำ 2-10 คน" },
      { label: "จุดเด่น", value: "ระบายสี ปลอมตัว จับผิด" }
    ],
    sectionPeek: "Meccha Chameleon คืออะไร?",
    game: {
      playableLabel: "เกม Meccha Chameleon ที่เล่นได้",
      browserPlay: "เล่นบนเบราว์เซอร์",
      status: "ออนไลน์",
      iframeTitle: "เกม MECCHA CHAMELEON",
      adLabel: {
        top: "โฆษณาเหนือเกม",
        left: "โฆษณาด้านซ้ายของเกม",
        right: "โฆษณาด้านขวาของเกม"
      },
      adTitle: {
        top: "โฆษณาด้านบน",
        left: "โฆษณาด้านซ้าย",
        right: "โฆษณาด้านขวา"
      }
    },
    whatIs: {
      title: "Meccha Chameleon คืออะไร?",
      intro: "นี่คือเกมซ่อนหาแบบผู้เล่นหลายคนที่เน้นสี การพรางตัว และการสังเกตสิ่งที่ดูผิดที่",
      lead:
        "Meccha Chameleon แบ่งผู้เล่นเป็นฝ่ายซ่อนและฝ่ายไล่หา ฝ่ายซ่อนต้องระบายสีร่างกายสีขาวให้เข้ากับสีในแผนที่ แล้วเลือกยืนในจุดที่รูปร่างและสีดูเป็นธรรมชาติ ฝ่ายค้นหาจะชนะเมื่อหาผู้เล่นที่ซ่อนอยู่ครบก่อนหมดเวลา",
      imageAlt: "ภาพหลักของ Meccha Chameleon ที่แสดงตัวละครสีสันสดใสกำลังพรางตัว",
      caption: "ภาพหลักของ MECCHA CHAMELEON"
    },
    media: {
      title: "วิดีโอและภาพเกมเพลย์",
      intro:
        "ภาพตัวอย่างช่วยให้ผู้เล่นใหม่เข้าใจลูปหลักได้เร็วขึ้น: ระบายสีตัวเอง เลือกพื้นผิว แล้วอย่าทำตัวโดดเด่นตอนฝ่ายค้นหากวาดสายตาไปรอบห้อง",
      trailerTitle: "วิดีโอตัวอย่าง MECCHA CHAMELEON",
      items: [
        {
          title: "พรางตัวกลางสายตา",
          src: "/media/meccha-chameleon-camouflage.jpg",
          alt: "เกมเพลย์ Meccha Chameleon ที่ตัวละครระบายสีจนกลืนไปกับฉาก"
        },
        {
          title: "แรงกดดันของการซ่อนหา",
          src: "/media/meccha-chameleon-hide-and-seek.jpg",
          alt: "เกมเพลย์ซ่อนหาใน Meccha Chameleon ที่ผู้เล่นเคลื่อนที่ในแผนที่"
        },
        {
          title: "อ่านแผนที่",
          src: "/media/meccha-chameleon-map-scene.jpg",
          alt: "ฉากแผนที่ Meccha Chameleon ที่มีพื้นผิวสำหรับใช้พรางตัว"
        },
        {
          title: "มุมมองฝ่ายค้นหา",
          src: "/media/meccha-chameleon-seeker.jpg",
          alt: "เกมเพลย์ Meccha Chameleon จากมุมมองฝ่ายค้นหาที่กำลังหาผู้เล่น"
        }
      ]
    },
    howToPlay: {
      title: "วิธีเล่น",
      intro: "ใช้แผนที่เป็นเครื่องพรางตัว แล้วอ่านห้องเหมือนฝ่ายค้นหา",
      steps: [
        {
          title: "ระบายสีตัวเอง",
          text: "ฝ่ายซ่อนต้องคัดลอกสีจากฉาก เพื่อให้ตัวละครกลืนกับพื้น ผนัง วัตถุ และเงา"
        },
        {
          title: "เลือกจุดที่ดูสมจริง",
          text: "สีที่ตรงอย่างเดียวอาจไม่พอ ถ้ารูปร่างดูแปลก ให้ซ่อนในตำแหน่งที่ท่าทางของคุณดูสมเหตุสมผล"
        },
        {
          title: "มองแบบฝ่ายค้นหา",
          text: "ฝ่ายค้นหาจะมองหารอยต่อของสี เส้นขอบที่ผิดปกติ วัตถุที่ซ้ำกัน และการขยับเล็กๆ ที่ทำให้การพรางตัวแตก"
        }
      ]
    },
    whereToPlay: {
      title: "เล่นได้ที่ไหน",
      text:
        "ถ้าคุณกำลังค้นหาว่าจะเล่น Meccha Chameleon ได้ที่ไหน ให้เริ่มจากเกมที่ฝังอยู่ในหน้านี้ เวอร์ชันออนไลน์โหลดได้โดยตรงในเบราว์เซอร์ คุณจึงเข้าแมตช์ซ่อนหาได้จากที่นี่",
      optionLabel: "เบราว์เซอร์",
      optionTitle: "เล่นออนไลน์ที่นี่"
    },
    maps: {
      title: "แผนที่ Meccha Chameleon",
      intro:
        "แผนที่เป็นตัวกำหนดว่าจุดซ่อนจะแข็งแกร่งแค่ไหน ให้มองหาพื้นผิวที่มีสีซ้ำได้ รูปร่างที่ดูน่าเชื่อ และเส้นทางที่ฝ่ายค้นหาต้องตรวจ",
      imageAlt: "ภาพหน้าจอแผนที่ Meccha Chameleon ที่แสดงพื้นผิวสำหรับการซ่อนตัว",
      caption: "ภาพเกมเพลย์จริงจากส่วนแผนที่",
      rows: [
        {
          name: "ฉากทางการ",
          detail: "เริ่มจากฉากเหล่านี้เพื่อเข้าใจพื้นผิวซ่อนตัว มุมกล้อง และเส้นทางของฝ่ายค้นหาที่พบบ่อย"
        },
        {
          name: "แผนที่โอซาก้า",
          detail: "อัปเดตธีมญี่ปุ่นเพิ่มฉากโอซาก้า ทำให้การค้นหาและเรียนรู้แผนที่สำคัญขึ้นสำหรับผู้เล่น"
        },
        {
          name: "เส้นทางจากผู้เล่น",
          detail: "เส้นทางและนิสัยการซ่อนของผู้เล่นเปลี่ยนไปทุกแมตช์ จึงควรมองแผนที่เดิมด้วยสายตาใหม่เสมอ"
        }
      ]
    },
    tips: {
      title: "เคล็ดลับการซ่อนที่ดีที่สุด",
      intro: "การพรางตัวที่ดีคือทั้งศาสตร์ของสีและการทำตัวให้ดูปกติ",
      items: [
        "เลือกสีจากพื้นที่กว้างและเรียบ แทนที่จะดูดสีจากขอบที่มีรายละเอียดเยอะ",
        "ซ่อนใกล้วัตถุจริง เพื่อให้เส้นร่างของคุณดูมีเหตุผล",
        "หลังจากขยับ ให้หยุดเร็ว การขยับช้าๆ ตอนท้ายมักถูกจับได้ง่ายกว่าสีที่ยังไม่สมบูรณ์",
        "ถ้าเป็นฝ่ายค้นหา ให้ตรวจมุม ลายซ้ำ และวัตถุที่หันผิดทิศ"
      ]
    },
    comparison: {
      title: "Meccha Chameleon เทียบกับซ่อนหา",
      paragraphs: [
        "ซ่อนหาแบบดั้งเดิมเน้นการมีที่กำบัง ส่วน Meccha Chameleon เน้นการพรางตัวด้วยสายตา คุณสามารถอยู่กลางที่โล่งได้ ถ้าสี รูปร่าง และตำแหน่งของคุณหลอกฝ่ายค้นหาได้สำเร็จ",
        "เกมนี้ยังต่างจากเกม prop hunt หลายเกม เพราะแก่นหลักไม่ใช่แค่การกลายเป็นวัตถุ แต่คือการระบายสีร่างกายให้หายไปในแผนที่"
      ]
    },
    faq: {
      title: "FAQ",
      intro: "คำตอบสั้นๆ สำหรับผู้เล่นที่ค้นหาชื่อเกม แผนที่ และช่องทางเล่น",
      items: [
        {
          question: "Meccha Chameleon คืออะไร?",
          answer:
            "Meccha Chameleon เป็นเกมซ่อนหาแบบผู้เล่นหลายคนที่ฝ่ายซ่อนต้องระบายสีตัวเองให้เข้ากับแผนที่ ส่วนฝ่ายค้นหาต้องมองหาผู้เล่นที่ดูไม่เข้ากับฉาก"
        },
        {
          question: "ฉันเล่น Meccha Chameleon ได้ที่ไหน?",
          answer: "คุณเล่น Meccha Chameleon ออนไลน์ได้ในหน้านี้ผ่านเฟรมเกมที่ฝังไว้"
        },
        {
          question: "มีแผนที่แบบกำหนดเองไหม?",
          answer:
            "แผนที่เป็นหัวใจของเกม เพราะแต่ละฉากมีสี พื้นผิว มุม และเส้นทางของฝ่ายค้นหาที่ต่างกันให้เรียนรู้"
        },
        {
          question: "เล่นได้กี่คน?",
          answer:
            "Meccha Chameleon เหมาะกับแมตช์ฝ่ายค้นหาปะทะฝ่ายซ่อนที่มีผู้เล่นหลายคนซ่อน ตรวจ และโต้ตอบกันได้"
        }
      ]
    }
  }
};

export function getLocaleFromPath(pathname = "/") {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    return "ar";
  }

  if (pathname === "/th" || pathname.startsWith("/th/")) {
    return "th";
  }

  return "en";
}

export function getLocalePage(locale) {
  const meta = localeMeta[locale] ?? localeMeta.en;

  return {
    locale,
    ...meta,
    url: `${siteUrl}${meta.path}`
  };
}

export function getContent(locale) {
  return contentByLocale[locale] ?? contentByLocale.en;
}

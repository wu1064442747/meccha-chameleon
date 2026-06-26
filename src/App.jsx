import React, { useEffect, useRef, useState } from "react";

const gameIframeUrl = "https://gg.storytellergame.io/mecha-chameleon/";
const steamUrl = "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/";
const workshopUrl = "https://steamcommunity.com/app/4704690/workshop/";
const trailerEmbedUrl = "https://www.youtube-nocookie.com/embed/X-65m9poaSY";
const gameSourceWidth = 1920;
const gameSourceHeight = 1080;

const adSlots = {
  top: {
    key: "8b769d83cd3f279aa2d71ed46e143a67",
    width: 728,
    height: 90
  },
  left: {
    key: "fc9a61df50e5f4dfa5be394afdae2bfc",
    width: 160,
    height: 600
  },
  right: {
    key: "cd7cff42ef840ccfbe97b2fee5e17273",
    width: 160,
    height: 600
  }
};

function scrollToPlay(event) {
  event.preventDefault();
  document.querySelector(".hero-section")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

const playSteps = [
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
];

const mapRows = [
  {
    name: "Official stages",
    detail: "Use these first to understand common hiding surfaces, camera angles, and seeker routes."
  },
  {
    name: "Osaka map",
    detail: "A Japanese-themed update added a new Osaka stage, making map searches more important for players."
  },
  {
    name: "Steam Workshop",
    detail: "Custom maps expand the game with community stages such as lobbies, galleries, stations, and themed rooms."
  }
];

const tips = [
  "Sample colors from broad flat areas instead of noisy edges.",
  "Hide near real objects so your outline has an explanation.",
  "After moving, stop early; late motion is easier to catch than imperfect paint.",
  "As seeker, check corners, repeated patterns, and props facing the wrong way."
];

const mediaItems = [
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
];

const faqs = [
  {
    question: "What is Meccha Chameleon?",
    answer:
      "Meccha Chameleon is a multiplayer hide-and-seek game where hiders paint themselves to match the map while seekers search for players who do not quite belong."
  },
  {
    question: "Where can I play Meccha Chameleon?",
    answer:
      "You can play the browser version on this page through the embedded game frame, and you can also visit the official Steam page for the PC release."
  },
  {
    question: "Are there custom maps?",
    answer:
      "Yes. Steam Workshop support makes maps a key part of the game, with community-made stages for different hiding styles."
  },
  {
    question: "How many players can play?",
    answer:
      "The Steam listing recommends multiplayer sessions for 2 to 10 players, which fits the seeker-versus-hiders format."
  }
];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatIsSection />
      <MediaSection />
      <HowToPlaySection />
      <WhereToPlaySection />
      <MapsSection />
      <TipsSection />
      <ComparisonSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#play" onClick={scrollToPlay} aria-label="Meccha Chameleon home">
        <span className="brand-mark" aria-hidden="true">
          MC
        </span>
        <span>Meccha Chameleon</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#play" onClick={scrollToPlay}>Play</a>
        <a href="#how-to-play">How to Play</a>
        <a href="#maps">Maps</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="header-action" href={steamUrl} target="_blank" rel="noreferrer">
        Steam
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="play">
      <div className="hero-stack">
        <div className="hero-copy">
          <div className="hero-text">
            <h1>Meccha Chameleon</h1>
            <p>
              Play the chameleon hide and seek game online. Paint, hide, and blend
              into the map before the seeker finds you.
            </p>
          </div>
          <div className="hero-controls">
            <div className="hero-actions">
              <a className="button primary" href="#play" onClick={scrollToPlay}>
                Play Now
              </a>
              <a className="button secondary" href={steamUrl} target="_blank" rel="noreferrer">
                Play on Steam
              </a>
            </div>
            <dl className="quick-facts" aria-label="Game facts">
              <div>
                <dt>Mode</dt>
                <dd>Hiders vs seekers</dd>
              </div>
              <div>
                <dt>Players</dt>
                <dd>2-10 recommended</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Paint, disguise, spot</dd>
              </div>
            </dl>
          </div>
        </div>

        <GamePanel />
      </div>
      <div className="section-peek" aria-hidden="true">
        <span>What is Meccha Chameleon?</span>
      </div>
    </section>
  );
}

function GamePanel() {
  const panelRef = useRef(null);
  const [frameStyle, setFrameStyle] = useState({
    "--game-body-width": "925px",
    "--game-body-height": "520px",
    "--game-scale": "0.4815"
  });

  useEffect(() => {
    const updateFrameScale = () => {
      const panel = panelRef.current;

      if (!panel) {
        return;
      }

      const layoutWidth = panel.parentElement.clientWidth - 2;
      const desktopSideAdWidth = 160 + 160 + 24;
      const availableWidth = window.matchMedia("(min-width: 1041px)").matches
        ? layoutWidth - desktopSideAdWidth
        : layoutWidth;
      const gameScale = Math.min(availableWidth / gameSourceWidth, 1);
      const clampedScale = Math.max(gameScale, 0.16);

      setFrameStyle({
        "--game-body-width": `${Math.round(gameSourceWidth * clampedScale)}px`,
        "--game-body-height": `${Math.round(gameSourceHeight * clampedScale)}px`,
        "--game-scale": clampedScale.toFixed(4)
      });
    };

    updateFrameScale();
    window.addEventListener("resize", updateFrameScale);

    const resizeObserver = new ResizeObserver(updateFrameScale);
    resizeObserver.observe(panelRef.current);

    return () => {
      window.removeEventListener("resize", updateFrameScale);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="game-ad-layout" ref={panelRef} style={frameStyle}>
      <div className="ad-slot ad-slot-top" aria-label="Advertisement above game">
        <AdFrame slot={adSlots.top} placement="top" />
      </div>
      <div className="ad-slot ad-slot-left" aria-label="Advertisement left of game">
        <AdFrame slot={adSlots.left} placement="left" />
      </div>
      <div
        className="game-panel"
        aria-label="Playable Meccha Chameleon game"
      >
        <div className="game-topbar">
          <span className="signal-dot" />
          <span>Browser play</span>
          <span className="game-status">online</span>
        </div>
        <div className="game-frame-window">
          <iframe
            id="game-iframe"
            src={gameIframeUrl}
            scrolling="no"
            allow="accelerometer; gyroscope; gamepad; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write"
            allowFullScreen
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox"
            title="MECCHA CHAMELEON Game"
          />
        </div>
      </div>
      <div className="ad-slot ad-slot-right" aria-label="Advertisement right of game">
        <AdFrame slot={adSlots.right} placement="right" />
      </div>
    </div>
  );
}

function AdFrame({ slot, placement }) {
  const adDocument = `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: transparent;
          }
          body {
            display: grid;
            place-items: center;
          }
        </style>
      </head>
      <body>
        <script>
          atOptions = {
            'key' : '${slot.key}',
            'format' : 'iframe',
            'height' : ${slot.height},
            'width' : ${slot.width},
            'params' : {}
          };
        </script>
        <script src="https://www.highperformanceformat.com/${slot.key}/invoke.js"></script>
      </body>
    </html>`;

  return (
    <iframe
      className="ad-frame"
      title={`Advertisement ${placement}`}
      width={slot.width}
      height={slot.height}
      srcDoc={adDocument}
      scrolling="no"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
    />
  );
}

function WhatIsSection() {
  return (
    <section className="content-band answer-band" id="what-is">
      <div className="section-heading">
        <h2>What is Meccha Chameleon?</h2>
        <p>
          It is a multiplayer hide-and-seek game about color, camouflage, and
          noticing what does not fit.
        </p>
      </div>
      <div className="answer-layout">
        <p className="answer-lead">
          Meccha Chameleon puts one team in hiding and another team in pursuit.
          Hiders paint their white bodies with colors from the map, then pose in
          places where their shape and color look natural. Seekers win by finding
          every hidden player before time runs out.
        </p>
        <figure className="answer-image">
          <img
            src="/media/meccha-chameleon-cover.jpg"
            alt="Official Meccha Chameleon key art from the Steam page"
            loading="lazy"
          />
          <figcaption>Official Steam key art for MECCHA CHAMELEON.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section className="content-band media-band" id="media">
      <div className="section-heading">
        <h2>Gameplay Video and Pictures</h2>
        <p>
          Screenshots help new players understand the core loop faster: paint
          your body, choose a surface, then avoid standing out when the seeker
          scans the room.
        </p>
      </div>
      <div className="media-layout">
        <div className="trailer-card">
          <iframe
            src={trailerEmbedUrl}
            title="MECCHA CHAMELEON trailer video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="screenshot-grid">
          {mediaItems.map((item) => (
            <figure key={item.title}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToPlaySection() {
  return (
    <section className="content-band" id="how-to-play">
      <div className="section-heading narrow">
        <h2>How to Play</h2>
        <p>Use the map as your disguise, then read the room like a seeker.</p>
      </div>
      <div className="step-rail">
        {playSteps.map((step, index) => (
          <article className="step-item" key={step.title}>
            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhereToPlaySection() {
  return (
    <section className="split-band" id="where-to-play">
      <div>
        <h2>Where to Play</h2>
        <p>
          If you searched for where to play Meccha Chameleon, start with the
          embedded game on this page. For the official PC release, use the Steam
          page so you can check current platform and purchase details.
        </p>
      </div>
      <div className="play-options">
        <a href="#play" onClick={scrollToPlay}>
          <span>Browser</span>
          <strong>Play online here</strong>
        </a>
        <a href={steamUrl} target="_blank" rel="noreferrer">
          <span>Official PC listing</span>
          <strong>Open Steam page</strong>
        </a>
      </div>
    </section>
  );
}

function MapsSection() {
  return (
    <section className="content-band maps-band" id="maps">
      <div className="section-heading">
        <h2>Meccha Chameleon Maps</h2>
        <p>
          Maps decide how strong a hiding spot can be. Look for surfaces with
          repeatable color, believable shapes, and routes seekers must scan.
        </p>
      </div>
      <div className="maps-layout">
        <figure className="map-preview">
          <img
            src="/media/meccha-chameleon-map-scene.jpg"
            alt="Meccha Chameleon map screenshot showing stage surfaces used for hiding"
            loading="lazy"
          />
          <figcaption>Actual gameplay screenshot from the map section.</figcaption>
        </figure>
        <div className="map-list">
          {mapRows.map((map) => (
            <article key={map.name}>
              <h3>{map.name}</h3>
              <p>{map.detail}</p>
            </article>
          ))}
          <a className="inline-link" href={workshopUrl} target="_blank" rel="noreferrer">
            Browse Steam Workshop maps
          </a>
        </div>
      </div>
    </section>
  );
}

function TipsSection() {
  return (
    <section className="dark-band">
      <div className="section-heading light">
        <h2>Best Hiding Tips</h2>
        <p>Good camouflage is part color science and part acting normal.</p>
      </div>
      <ul className="tips-list">
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="comparison-band">
      <div>
        <h2>Meccha Chameleon vs Hide and Seek</h2>
      </div>
      <div className="comparison-copy">
        <p>
          Traditional hide and seek is about physical cover. Meccha Chameleon is
          about visual camouflage: you can be in plain sight if your paint,
          shape, and position convince the seeker.
        </p>
        <p>
          It also differs from many prop-hunt games. Instead of only becoming an
          object, the central trick is painting your body to disappear into the
          map.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="content-band faq-band" id="faq">
      <div className="section-heading">
        <h2>FAQ</h2>
        <p>Fast answers for players searching the game name, maps, and play options.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Meccha Chameleon</span>
      <nav aria-label="Footer navigation">
        <a href="#play" onClick={scrollToPlay}>Play</a>
        <a href="#where-to-play">Where to Play</a>
        <a href="#maps">Maps</a>
        <a href="#faq">FAQ</a>
      </nav>
    </footer>
  );
}

export default App;

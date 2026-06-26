import React, { useEffect, useRef, useState } from "react";
import { getContent, getLocalePage, localeMeta, locales } from "./content.js";

const gameIframeUrl = "https://gg.storytellergame.io/mecha-chameleon/";
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

function App({ locale = "en" }) {
  const page = getLocalePage(locale);
  const content = getContent(locale);

  return (
    <main dir={page.dir}>
      <Header content={content} locale={locale} />
      <Hero content={content} />
      <WhatIsSection content={content} />
      <MediaSection content={content} />
      <HowToPlaySection content={content} />
      <WhereToPlaySection content={content} />
      <MapsSection content={content} />
      <TipsSection content={content} />
      <ComparisonSection content={content} />
      <FaqSection content={content} />
      <Footer content={content} />
    </main>
  );
}

function Header({ content, locale }) {
  return (
    <header className="site-header">
      <a className="brand" href="#play" onClick={scrollToPlay} aria-label={content.brand}>
        <span className="brand-mark" aria-hidden="true">
          MC
        </span>
        <span>{content.brand}</span>
      </a>
      <nav className="site-nav" aria-label={content.navAriaLabel}>
        <a href="#play" onClick={scrollToPlay}>{content.nav.play}</a>
        <a href="#how-to-play">{content.nav.howToPlay}</a>
        <a href="#maps">{content.nav.maps}</a>
        <a href="#faq">{content.nav.faq}</a>
      </nav>
      <nav className="language-nav" aria-label={content.languageAriaLabel}>
        {locales.map((localeKey) => (
          <a
            key={localeKey}
            href={localeMeta[localeKey].path}
            hrefLang={localeMeta[localeKey].lang}
            aria-current={localeKey === locale ? "page" : undefined}
          >
            {localeMeta[localeKey].label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ content }) {
  return (
    <section className="hero-section" id="play">
      <div className="hero-stack">
        <div className="hero-copy">
          <div className="hero-text">
            <h1>{content.hero.title}</h1>
            <p>{content.hero.text}</p>
          </div>
          <div className="hero-controls">
            <div className="hero-actions">
              <a className="button primary" href="#play" onClick={scrollToPlay}>
                {content.playButton}
              </a>
            </div>
            <dl className="quick-facts" aria-label={content.quickFactsAriaLabel}>
              {content.quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <GamePanel content={content} />
      </div>
      <div className="section-peek" aria-hidden="true">
        <span>{content.sectionPeek}</span>
      </div>
    </section>
  );
}

function GamePanel({ content }) {
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
      <div className="ad-slot ad-slot-top" aria-label={content.game.adLabel.top}>
        <AdFrame slot={adSlots.top} title={content.game.adTitle.top} />
      </div>
      <div className="ad-slot ad-slot-left" aria-label={content.game.adLabel.left}>
        <AdFrame slot={adSlots.left} title={content.game.adTitle.left} />
      </div>
      <div className="game-panel" aria-label={content.game.playableLabel}>
        <div className="game-topbar">
          <span className="signal-dot" />
          <span>{content.game.browserPlay}</span>
          <span className="game-status">{content.game.status}</span>
        </div>
        <div className="game-frame-window">
          <iframe
            id="game-iframe"
            src={gameIframeUrl}
            scrolling="no"
            allow="accelerometer; gyroscope; gamepad; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write"
            allowFullScreen
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox"
            title={content.game.iframeTitle}
          />
        </div>
      </div>
      <div className="ad-slot ad-slot-right" aria-label={content.game.adLabel.right}>
        <AdFrame slot={adSlots.right} title={content.game.adTitle.right} />
      </div>
    </div>
  );
}

function AdFrame({ slot, title }) {
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
      title={title}
      width={slot.width}
      height={slot.height}
      srcDoc={adDocument}
      scrolling="no"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
    />
  );
}

function WhatIsSection({ content }) {
  return (
    <section className="content-band answer-band" id="what-is">
      <div className="section-heading">
        <h2>{content.whatIs.title}</h2>
        <p>{content.whatIs.intro}</p>
      </div>
      <div className="answer-layout">
        <p className="answer-lead">{content.whatIs.lead}</p>
        <figure className="answer-image">
          <img src="/media/meccha-chameleon-cover.jpg" alt={content.whatIs.imageAlt} loading="lazy" />
          <figcaption>{content.whatIs.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function MediaSection({ content }) {
  return (
    <section className="content-band media-band" id="media">
      <div className="section-heading">
        <h2>{content.media.title}</h2>
        <p>{content.media.intro}</p>
      </div>
      <div className="media-layout">
        <div className="trailer-card">
          <iframe
            src={trailerEmbedUrl}
            title={content.media.trailerTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="screenshot-grid">
          {content.media.items.map((item) => (
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

function HowToPlaySection({ content }) {
  return (
    <section className="content-band" id="how-to-play">
      <div className="section-heading narrow">
        <h2>{content.howToPlay.title}</h2>
        <p>{content.howToPlay.intro}</p>
      </div>
      <div className="step-rail">
        {content.howToPlay.steps.map((step, index) => (
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

function WhereToPlaySection({ content }) {
  return (
    <section className="split-band" id="where-to-play">
      <div>
        <h2>{content.whereToPlay.title}</h2>
        <p>{content.whereToPlay.text}</p>
      </div>
      <div className="play-options">
        <a href="#play" onClick={scrollToPlay}>
          <span>{content.whereToPlay.optionLabel}</span>
          <strong>{content.whereToPlay.optionTitle}</strong>
        </a>
      </div>
    </section>
  );
}

function MapsSection({ content }) {
  return (
    <section className="content-band maps-band" id="maps">
      <div className="section-heading">
        <h2>{content.maps.title}</h2>
        <p>{content.maps.intro}</p>
      </div>
      <div className="maps-layout">
        <figure className="map-preview">
          <img src="/media/meccha-chameleon-map-scene.jpg" alt={content.maps.imageAlt} loading="lazy" />
          <figcaption>{content.maps.caption}</figcaption>
        </figure>
        <div className="map-list">
          {content.maps.rows.map((map) => (
            <article key={map.name}>
              <h3>{map.name}</h3>
              <p>{map.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TipsSection({ content }) {
  return (
    <section className="dark-band">
      <div className="section-heading light">
        <h2>{content.tips.title}</h2>
        <p>{content.tips.intro}</p>
      </div>
      <ul className="tips-list">
        {content.tips.items.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}

function ComparisonSection({ content }) {
  return (
    <section className="comparison-band">
      <div>
        <h2>{content.comparison.title}</h2>
      </div>
      <div className="comparison-copy">
        {content.comparison.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function FaqSection({ content }) {
  return (
    <section className="content-band faq-band" id="faq">
      <div className="section-heading">
        <h2>{content.faq.title}</h2>
        <p>{content.faq.intro}</p>
      </div>
      <div className="faq-list">
        {content.faq.items.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer({ content }) {
  return (
    <footer className="site-footer">
      <span>{content.brand}</span>
      <nav aria-label={content.footerAriaLabel}>
        <a href="#play" onClick={scrollToPlay}>{content.nav.play}</a>
        <a href="#where-to-play">{content.whereToPlay.title}</a>
        <a href="#maps">{content.nav.maps}</a>
        <a href="#faq">{content.nav.faq}</a>
      </nav>
    </footer>
  );
}

export default App;

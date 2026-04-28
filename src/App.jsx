import './App.css'

const contentItems = [
    {
        label: 'SOON TO COME',
        title: 'WILL BE COMING SOON...',
        time: 'n WORDS',
        subtitle: 'LECTURE',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'SOON TO COME',
        title: 'WILL BE COMING SOON...',
        time: 'n WORDS',
        subtitle: 'LECTURE',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'SOON TO COME',
        title: 'WILL BE COMING SOON...',
        time: 'n WORDS',
        subtitle: 'LECTURE',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'SOON TO COME',
        title: 'WILL BE COMING SOON...',
        time: 'n WORDS',
        subtitle: 'LECTURE',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'SOON TO COME',
        title: 'WILL BE COMING SOON...',
        time: 'n WORDS',
        subtitle: 'LECTURE',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'SOON TO COME',
        title: 'WILL BE COMING SOON...',
        time: 'n WORDS',
        subtitle: 'LECTURE',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    },
]
// ------------------------------------------------------------
function getEpochDays(){
    const now = new Date();
    const customEpoch = new Date(2026, 3, 28);

    const diff = now - customEpoch;
    const oneDay = 1000*60*60*24;

    return Math.floor(diff / oneDay);
}

const epochDays = getEpochDays();
const epochLabel = `EPOCH + ${epochDays}`;

// ------------------------------------------------------------
function App() {
    return (
        <main className="site-shell">
            <header className="topbar">
                <div className="brand-bar">
                    <span className="brand-mark">■</span>
                    <span>STRUCTURED</span>
                    <span className="brand-divider">/</span>
                    <span className='off-white'>THINKING</span>
                </div>

                <nav className="topbar-links">
                    <a href="#about">About</a>
                    <a href="#archive">Archive</a>
                    <a href="#philosophy">Philosophy</a>
                </nav>

                {/* <a className="enter-link" href="#about">ENTER ↗</a> */}
                <a className="enter-link" target="_blank" rel="noreferrer" href="https://etsryn.github.io/rayyandigitalspace/">BUILDWITHRAYYAN</a>
            </header>

            <section className="hero-section">
                <div className="hero-meta">
                    <span className="meta-pill">INDEX / 001</span>
                    <span className="meta-text">COMPUTER SCIENCE · FIRST PRINCIPLES</span>
                    <span className="meta-pill">{epochLabel}</span>
                </div>

                <h1 className="hero-heading">
                    ENGINEERING
                    <br />
                    IS STRUCTURED
                    <br />
                    <span className="hero-heading-secondary">THINKING</span>
                    <br />
                    <span className="hero-heading-nowrap">APPLIED TO REALITY</span>
                </h1>
            </section>

            <section className="hero-copy-panel">
                <div className="copy-left">
                    <p>Beyond code & syntax</p>
                    <p>Beyond textbooks & instructions</p>
                </div>

                <div className="copy-right">
                    <p className="section-label">// FIELD NOTES</p>
                    <p className="field-note-copy">A working archive on systems, logic, and the architecture of real-world problem solving in Computer Science.</p>
                </div>

            </section>
            <a className="primary-cta" href="#archive">EXPLORE THINKING <span aria-hidden="true">↗</span></a>

            <div className="keywords-row" aria-hidden="true">
                {['SIGNAL', 'NOISE', 'STRUCTURE', 'EMERGENCE', 'SYSTEMS', 'LOGIC', 'ARCHITECTURE', 'ABSTRACTION'].map((item) => (
                    <span key={item} className="keyword-item">{item}</span>
                ))}
            </div>

            <section className="about-section" id="about">
                <div className="about-panel">
                    <p className="section-label">§ 001 — ABOUT</p>
                    <dl className="about-list">
                        <div>
                            <dt>Discipline</dt>
                            <dd>CS / Systems</dd>
                        </div>
                        <div>
                            <dt>Method</dt>
                            <dd>First Principles</dd>
                        </div>
                        <div>
                            <dt>Output</dt>
                            <dd>Writing · Video</dd>
                        </div>
                    </dl>
                </div>

                <div className="about-copy">
                    <h2>
                        <span className="about-heading-line">I explore engineering <span className="about-heading-muted">beyond syntax </span>—</span>
                        <span className="about-heading-line">focusing on systems, logic, and how real</span>
                        <span className="about-heading-line">problem-solving actually works in</span>
                        <span className="about-heading-line">Computer Science.</span>
                    </h2>
                    <div className="about-text-block">
                        <p>Programming is a surface. Beneath it sits the real discipline — modelling state, reasoning about constraints, and designing structures that remain coherent under pressure.</p>
                        <p>This is a working record of that practice. Not a tutorial feed — a slow archive of how an engineering mind is built, one principle at a time.</p>
                    </div>
                </div>
            </section>

            <section className="archive-section" id="archive">
                <div className="archive-header">
                    <div>
                        <p className="section-label">§ 002 — ARCHIVE</p>
                        <h3>Selected writings <span className="about-heading-muted">&</span> talks.</h3>
                    </div>
                    <p className="archive-description">A slow catalogue of essays and lectures. Updated when the thinking is ready — not when the feed demands it.</p>
                </div>

                <div className="archive-grid">
                    {contentItems.map((item, index) => (
                        <article className="archive-card" key={item.title}>
                            <div className="card-topline">
                                <span>{item.label}</span>
                                <span>{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="card-visual" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,2,2,0) 0%, rgba(2,2,2,0.84) 70%), url('${item.image}')` }} />
                            <div className="card-copy">
                                <h4>{item.title}</h4>
                                <p>{item.time} · {item.subtitle}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="philosophy-section" id="philosophy">
                <p className="section-label">§ 003 — PHILOSOPHY</p>
                <div className="philosophy-grid">
                    <div>
                        <span className="philosophy-index">01</span>
                        <h4>Systems <span className="philosophy-muted">over syntax.</span></h4>
                    </div>
                    <div>
                        <span className="philosophy-index">02</span>
                        <h4>Thinking <span className="philosophy-muted">over memorization.</span></h4>
                    </div>
                    <div>
                        <span className="philosophy-index">03</span>
                        <h4>Engineering is not studied, <span className="philosophy-muted">it is built.</span></h4>
                    </div>
                    <div>
                        <span className="philosophy-index">04</span>
                        <h4>Clarity <span className="philosophy-muted">over cleverness.</span></h4>
                    </div>
                </div>
            </section>

            <section className="tagline-section">
                <div className="tagline-copy">
                    <p className="section-label">// TAGLINE</p>
                    <h2>
                        BUILD&nbsp;WITH
                        <span>PURPOSE.</span>
                    </h2>
                </div>
                <div className="elsewhere-links">
                    <p className="tagline-column-label">ELSEWHERE</p>
                    <a href="https://www.youtube.com/@buildwithrayyan" target="_blank" rel="noreferrer">YouTube</a>
                    <a href="https://www.instagram.com/BUILDWITHRAYYAN/" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><strike>X / Twitter</strike></a>
                    <a href="https://github.com" target="_blank" rel="noreferrer"><strike>GitHub</strike></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><strike>LinkedIn</strike></a>
                </div>
                <div className="tagline-contact">
                    <p className="tagline-column-label">CONTACT</p>
                    <a href="mailto:rayyan.connects@gmail.com">rayyan.connects@gmail.com</a>
                </div>
            </section>

            <footer className="bottom-footer">
                <span>© MMXXV — BUILDWITHRAYYAN</span>
                <span>NO TEMPLATE · BUILT BY HAND</span>
                <span>V 1.0</span>
            </footer>
        </main>
    )
}

export default App

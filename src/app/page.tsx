// import Image from 'next/image';

export default function Home() {
  return (
  <div>
    {/* <!-- Navigation --> */}
    <nav id="navbar">
        <a href="#" className="logo">Melissames Design / Develop</a>
        <div className="nav-links" id="navLinks">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
        <button className="mobile-menu-btn" id="mobileMenuBtn">
            <i className="fas fa-bars"></i>
        </button>
    </nav>
    
    {/* <!-- Hero Section --> */}
    <section className="hero">
        <div className="hero-bg">
            <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A1FFCE" stop-opacity="0.2" />
                        <stop offset="100%" stopColor="#00BFA6" stop-opacity="0.1" />
                    </linearGradient>
                </defs>
                <path fill="url(#gradient)" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,176C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="url(#gradient)" opacity="0.4" d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,240C672,213,768,171,864,181.3C960,192,1056,256,1152,261.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="url(#gradient)" opacity="0.3" d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
        <div className="hero-content">
            <h1 className="animated">Melissames Creative Studio</h1>
            <h2 className="animated delay-1">Design / Develop</h2>
            <p className="animated delay-2">Creative technology solutions that blend design thinking with cutting-edge development. Bringing digital experiences to life through innovation and artistry.</p>
            <a href="#projects" className="cta-button animated delay-3">Explore Projects</a>
        </div>
    </section>
    
    {/* <!-- About Section --> */}
    <section className="section about" id="about">
        <div className="section-header">
            <h2>About Me</h2>
            <p>Creative technologist with a passion for blending design and code</p>
        </div>
        <div className="about-content">
            <div className="about-image">
                {/* <img src="/api/placeholder/600/400" alt="Creative Technologist Working"> */}
            </div>
            <div className="about-text">
                <h3>Bridging Creative Vision & Technical Execution</h3>
                <p>I'm a creative technologist specializing in interactive digital experiences that merge aesthetic design with functional development. My approach combines artistic sensibility with technical expertise to create memorable digital solutions.</p>
                <p>With a background spanning both design and development, I bring a holistic perspective to each project, ensuring that technical implementations honor creative vision while maintaining optimal performance.</p>
                <div className="skills">
                    <span className="skill-tag">UI/UX Design</span>
                    <span className="skill-tag">Front-end Development</span>
                    <span className="skill-tag">Creative Coding</span>
                    <span className="skill-tag">Interactive Installations</span>
                    <span className="skill-tag">Digital Experiences</span>
                    <span className="skill-tag">Prototyping</span>
                    <span className="skill-tag">Motion Design</span>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Projects Section --> */}
    <section className="section projects" id="projects">
        <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A selection of recent work spanning digital design and development</p>
        </div>
        <div className="projects-grid">
            {/* <!-- Project 1 --> */}
            <div className="project-card">
                <div className="project-image">
                    <img src="/api/placeholder/600/400" alt="Interactive Installation Project"/>
                </div>
                <div className="project-content">
                    <h3>Reactive Spaces</h3>
                    <div className="project-tags">
                        <span className="project-tag">Interactive Installation</span>
                        <span className="project-tag">Motion Sensors</span>
                        <span className="project-tag">Processing</span>
                    </div>
                    <p>An immersive installation that responds to movement and sound, creating dynamic visual patterns that evolve with audience interaction.</p>
                    <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            {/* <!-- Project 2 --> */}
            <div className="project-card">
                <div className="project-image">
                    <img src="/api/placeholder/600/400" alt="Web Experience Project"/>
                </div>
                <div className="project-content">
                    <h3>Harmonic Interface</h3>
                    <div className="project-tags">
                        <span className="project-tag">Web Design</span>
                        <span className="project-tag">Three.js</span>
                        <span className="project-tag">WebGL</span>
                    </div>
                    <p>A music visualization web experience that transforms sound into mesmerizing 3D structures, allowing users to explore music in a new dimension.</p>
                    <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            {/* <!-- Project 3 --> */}
            <div className="project-card">
                <div className="project-image">
                    <img src="/api/placeholder/600/400" alt="Mobile App Design" />
                </div>
                <div className="project-content">
                    <h3>Botanical Lens</h3>
                    <div className="project-tags">
                        <span className="project-tag">Mobile App</span>
                        <span className="project-tag">AR</span>
                        <span className="project-tag">UI Design</span>
                    </div>
                    <p>An augmented reality app that identifies plants and provides care information through an intuitive, nature-inspired interface.</p>
                    <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            {/* <!-- Project 4 --> */}
            <div className="project-card">
                <div className="project-image">
                    <img src="/api/placeholder/600/400" alt="Data Visualization Project"/>
                </div>
                <div className="project-content">
                    <h3>Data Bloom</h3>
                    <div className="project-tags">
                        <span className="project-tag">Data Visualization</span>
                        <span className="project-tag">D3.js</span>
                        <span className="project-tag">SVG Animation</span>
                    </div>
                    <p>A dynamic data visualization project that transforms complex datasets into beautiful, organic visual forms that tell meaningful stories.</p>
                    <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            {/* <!-- Project 5 --> */}
            <div className="project-card">
                <div className="project-image">
                    <img src="/api/placeholder/600/400" alt="E-commerce Website Project"/>
                </div>
                <div className="project-content">
                    <h3>Artisan Market</h3>
                    <div className="project-tags">
                        <span className="project-tag">E-commerce</span>
                        <span className="project-tag">Web Design</span>
                        <span className="project-tag">UX Research</span>
                    </div>
                    <p>A thoughtfully designed e-commerce platform for artisans, featuring a seamless shopping experience and unique brand storytelling.</p>
                    <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            {/* <!-- Project 6 --> */}
            <div className="project-card">
                <div className="project-image">
                    <img src="/api/placeholder/600/400" alt="Experimental Interface Project"/>
                </div>
                <div className="project-content">
                    <h3>Gestural Control</h3>
                    <div className="project-tags">
                        <span className="project-tag">Experimental UI</span>
                        <span className="project-tag">Motion Tracking</span>
                        <span className="project-tag">JavaScript</span>
                    </div>
                </div> 
        </div>           
      </div>
    </section>                
  </div>                  
  );
}

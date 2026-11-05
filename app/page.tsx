import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Download, Github, Globe2, Layers3, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { profile, skills } from "@/lib/data";
export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="availability"><span /> OPEN TO PROJECTS & COLLABORATIONS</div>
          <p className="hero-intro">Hello, I’m Mahad <span className="wave" aria-hidden="true">✳</span></p>
          <h1 id="hero-title">Turning ideas<br />into <span className="highlight">digital</span><br /><span className="highlight">experiences.</span></h1>
          <p className="hero-description">Thoughtful design meets purposeful development.<br className="hidden lg:block" /> A space for ideas, interfaces and digital experiences built with care.</p>
          <div className="hero-actions"><Button asChild size="lg"><a href="#work">Explore my work <ArrowUpRight /></a></Button><a href="#contact" className="text-link">Let’s work together <ArrowUpRight size={17} /></a></div>
          <div className="hero-location"><Code2 size={15}/><span>Design. Develop. Refine.</span><i /><span>One detail at a time.</span></div>
        </div>
        <div className="hero-art">
          <div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/>
          <span className="orbit-star star-one" aria-hidden="true">✳</span><span className="orbit-star star-two" aria-hidden="true">+</span>
          <div className="portrait-frame"><div className="portrait-label"><span className="tiny-dot"/> THE PERSON BEHIND THE PIXELS</div><Image src={profile.portrait} alt="Mahad Bule" width={480} height={560} priority unoptimized className="portrait-photo"/><div className="portrait-signature">Mahad Bule<span>Ideas into interfaces</span></div></div>
          <div className="floating-note note-code"><div className="note-icon"><Code2 size={22}/></div><div><b>Built with purpose.</b><span>Designed for people.</span></div></div>
          <div className="floating-note note-detail"><span className="detail-spark">✦</span><span>Good ideas deserve<br /><b>great execution.</b></span></div>
          <div className="art-coordinate">DESIGNED WITH INTENTION</div>
        </div>
        <a className="hero-scroll" href="#about"><ArrowDown size={15}/> SCROLL TO DISCOVER</a>
      </section>
      <div className="discipline-strip"><div className="container"><span>WEB DEVELOPMENT</span><span aria-hidden="true">✳</span><span>REACT</span><span aria-hidden="true">✳</span><span>INTERFACE DESIGN</span><span aria-hidden="true">✳</span><span>CREATIVE THINKING</span><span aria-hidden="true">✳</span></div></div>
      <section id="about" className="section container about-section" aria-labelledby="about-title">
        <div><p className="eyebrow"><span>01 /</span> A LITTLE ABOUT ME</p><h2 id="about-title">Curious mind.<br />Practical <span className="serif-word">maker.</span></h2><a href="/Mahad-Bule-Profile.txt" download className="text-link mt-7">Download my profile <Download size={16}/></a></div>
        <div className="about-content"><p className="about-lead">I’m Mahad Bule. Welcome to my corner of the web — a place for ideas and thoughtful digital work.</p><p>This portfolio brings together a clean visual direction, responsive layouts and small interactions that make exploring feel natural.</p><p>The concept gallery below explores different kinds of interfaces. You can also visit my GitHub profile to explore my repositories.</p><div className="about-facts"><div><span>THE APPROACH</span><b>Simple. Useful. Considered.</b><small>Every detail has a purpose.</small></div><div><span>THE FOUNDATION</span><b>Next.js & React</b><small>Tailwind CSS · shadcn/ui · TypeScript</small></div></div></div>
      </section>
      <section id="work" className="section work-section" aria-labelledby="work-title"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span>02 /</span> CONCEPT GALLERY</p><h2 id="work-title">Room to <span className="serif-word">explore.</span></h2></div><p>Illustrative website and application concepts.<br className="hidden sm:block"/> Explore my GitHub for source projects.</p></div><Projects /></div></section>
      <section id="expertise" className="section container" aria-labelledby="expertise-title"><div className="section-heading"><div><p className="eyebrow"><span>03 /</span> WHAT I BRING</p><h2 id="expertise-title">The tools. The <span className="serif-word">thinking.</span></h2></div><p>Different skills.<br />One thoughtful approach.</p></div><div className="skills-list">{skills.map((skill,i) => {const Icon = [Code2,Globe2,Layers3][i]; return <article className="skill-row" key={skill.number}><span className="skill-number">/{skill.number}</span><div className="skill-icon"><Icon size={27}/></div><div className="skill-copy"><h3>{skill.title}</h3><p>{skill.description}</p></div><ul className="skill-tools" aria-label={skill.title+" tools"}>{skill.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article>})}</div></section>
      <section className="process-section"><div className="container process-inner"><div className="process-title"><Sparkles size={26}/><h2>Good work starts<br />with a good conversation.</h2></div><ol className="process-list"><li><span>01</span><div><h3>Understand</h3><p>Your goals, your audience, your needs.</p></div></li><li><span>02</span><div><h3>Build</h3><p>Clear design and purposeful development.</p></div></li><li><span>03</span><div><h3>Refine</h3><p>Test the details and make it work for you.</p></div></li></ol></div></section>
      <section id="contact" className="section container contact-section" aria-labelledby="contact-title"><div className="contact-heading"><p className="eyebrow"><span>04 /</span> HAVE SOMETHING IN MIND?</p><h2 id="contact-title">Let’s build<br />something <span className="serif-word">good.</span><ArrowDownRight className="contact-title-arrow" aria-hidden="true"/></h2><p>Thoughtful ideas are worth sharing.<br />Find me on GitHub and follow what comes next.</p><div className="contact-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/><span>github.com/MahadBulle</span><ArrowUpRight size={16}/></a></div></div><ContactForm /></section>
    </main>
    <footer className="site-footer"><div className="container"><a href="#" className="brand" aria-label="Back to top">mb<span>.</span></a><p>© {new Date().getFullYear()} Mahad Bule. Made with care.</p><a href="#" className="text-link">Back to top <ArrowUpRight size={15}/></a></div></footer>
  </>;
}

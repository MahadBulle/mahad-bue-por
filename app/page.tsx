import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Download, Github, Globe2, Layers3, Mail, MessageCircle, MapPin, Sparkles } from "lucide-react";
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
          <div className="availability"><span /> FULL-STACK DEVELOPER & WEB DESIGNER</div>
          <p className="hero-intro">Hello, I’m Mahad <span className="wave" aria-hidden="true">✳</span></p>
          <h1 id="hero-title">Turning ideas<br />into <span className="highlight">digital</span><br /><span className="highlight">experiences.</span></h1>
          <p className="hero-description">I’m a Computer Science graduate building websites and applications with React, Next.js, MERN and WordPress.</p>
          <div className="hero-actions"><Button asChild size="lg"><a href="#work">Explore my work <ArrowUpRight /></a></Button><a href="#contact" className="text-link">Let’s work together <ArrowUpRight size={17} /></a></div>
          <div className="hero-location"><Code2 size={15}/><span>Mogadishu, Somalia</span><i /><span>Available for collaboration</span></div>
        </div>
        <div className="hero-art">
          <div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/>
          <span className="orbit-star star-one" aria-hidden="true">✳</span><span className="orbit-star star-two" aria-hidden="true">+</span>
          <div className="portrait-frame"><div className="portrait-label"><span className="tiny-dot"/> MAHAD BULE / DEVELOPER</div><Image src={profile.portrait} alt="Mahad Bule" width={480} height={560} priority unoptimized className="portrait-photo"/><div className="portrait-signature">Mahad Bule<span>Full-stack Developer</span></div></div>
          <div className="floating-note note-code"><div className="note-icon"><Code2 size={22}/></div><div><b>Built with purpose.</b><span>Designed for people.</span></div></div>
          <div className="floating-note note-detail"><span className="detail-spark">✦</span><span>Good ideas deserve<br /><b>great execution.</b></span></div>
          <div className="art-coordinate">DESIGNED WITH INTENTION</div>
        </div>
        <a className="hero-scroll" href="#about"><ArrowDown size={15}/> SCROLL TO DISCOVER</a>
      </section>
      <div className="discipline-strip"><div className="container"><span>WEB DEVELOPMENT</span><span aria-hidden="true">✳</span><span>REACT</span><span aria-hidden="true">✳</span><span>INTERFACE DESIGN</span><span aria-hidden="true">✳</span><span>CREATIVE THINKING</span><span aria-hidden="true">✳</span></div></div>
      <section id="about" className="section container about-section" aria-labelledby="about-title">
        <div><p className="eyebrow"><span>01 /</span> A LITTLE ABOUT ME</p><h2 id="about-title">Curious mind.<br />Practical <span className="serif-word">maker.</span></h2><a href={profile.cv} target="_blank" rel="noopener noreferrer" className="text-link mt-7">View my CV <Download size={16}/></a></div>
        <div className="about-content"><p className="about-lead">I’m Mahad Bule, also known as Mahad Buulle — a Computer Science graduate from Somali International University.</p><p>I work across web design, full-stack development and WordPress to turn ideas into useful digital products.</p><p>From company websites to business applications, my focus is clarity, usability and development that serves a practical purpose.</p><div className="about-facts"><div><span>EDUCATION</span><b>BSc Computer Science</b><small>Somali International University · 2020–2024</small></div><div><span>BASED IN</span><b>Mogadishu, Somalia</b><small>Web design · Full-stack · WordPress</small></div></div></div>
      </section>
      <section id="work" className="section work-section" aria-labelledby="work-title"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span>02 /</span> SELECTED WORK</p><h2 id="work-title">Built with <span className="serif-word">purpose.</span></h2></div><p>Websites and applications across business,<br className="hidden sm:block"/> education, healthcare and community work.</p></div><Projects /></div></section>
      <section id="expertise" className="section container" aria-labelledby="expertise-title"><div className="section-heading"><div><p className="eyebrow"><span>03 /</span> WHAT I BRING</p><h2 id="expertise-title">The tools. The <span className="serif-word">thinking.</span></h2></div><p>Different skills.<br />One thoughtful approach.</p></div><div className="skills-list">{skills.map((skill,i) => {const Icon = [Code2,Globe2,Layers3][i]; return <article className="skill-row" key={skill.number}><span className="skill-number">/{skill.number}</span><div className="skill-icon"><Icon size={27}/></div><div className="skill-copy"><h3>{skill.title}</h3><p>{skill.description}</p></div><ul className="skill-tools" aria-label={skill.title+" tools"}>{skill.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article>})}</div></section>
      <section className="section container experience-section" aria-labelledby="experience-title"><div><p className="eyebrow">EXPERIENCE / THE JOURNEY</p><h2 id="experience-title">Learning through<br /><span className="serif-word">building.</span></h2></div><div className="experience-list"><article><div><h3>Deero Advert</h3><p>Web Developer</p></div><span>2023–2025</span></article><article><div><h3>Negaad Institute</h3><p>Software Engineer</p></div><span>2022–2023</span></article><article><div><h3>Faash Tech</h3><p>Web Developer</p></div><span>2021–2022</span></article></div></section><section className="process-section"><div className="container process-inner"><div className="process-title"><Sparkles size={26}/><h2>Good work starts<br />with a good conversation.</h2></div><ol className="process-list"><li><span>01</span><div><h3>Understand</h3><p>Your goals, your audience, your needs.</p></div></li><li><span>02</span><div><h3>Build</h3><p>Clear design and purposeful development.</p></div></li><li><span>03</span><div><h3>Refine</h3><p>Test the details and make it work for you.</p></div></li></ol></div></section>
      <section id="contact" className="section container contact-section" aria-labelledby="contact-title"><div className="contact-heading"><p className="eyebrow"><span>04 /</span> HAVE SOMETHING IN MIND?</p><h2 id="contact-title">Let’s build<br />something <span className="serif-word">good.</span><ArrowDownRight className="contact-title-arrow" aria-hidden="true"/></h2><p>A website, an application, or an idea ready for its next step.<br />Tell me what you have in mind.</p><div className="contact-links"><a href={"mailto:"+profile.email}><Mail size={18}/><span>{profile.email}</span><ArrowUpRight size={16}/></a><a href={"https://wa.me/"+profile.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/><span>{profile.phone}</span><ArrowUpRight size={16}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/><span>github.com/MahadBulle</span><ArrowUpRight size={16}/></a><a href={profile.facebook} target="_blank" rel="noopener noreferrer"><span>Facebook</span><ArrowUpRight size={16}/></a><a href={profile.instagram} target="_blank" rel="noopener noreferrer"><span>Instagram</span><ArrowUpRight size={16}/></a></div></div><ContactForm /></section>
    </main>
    <footer className="site-footer"><div className="container"><a href="#" className="brand" aria-label="Back to top">mb<span>.</span></a><p>© {new Date().getFullYear()} Mahad Bule. Made with care.</p><a href="#" className="text-link">Back to top <ArrowUpRight size={15}/></a></div></footer>
  </>;
}

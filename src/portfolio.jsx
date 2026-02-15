import React from 'react';

const customStyles = {
  bioPanel: {
    backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 20%)'
  },
  barcode: {
    height: '40px',
    width: '100%',
    backgroundImage: `repeating-linear-gradient(
      90deg,
      #111111 0px,
      #111111 2px,
      transparent 2px,
      transparent 4px,
      #111111 4px,
      #111111 5px,
      transparent 5px,
      transparent 9px
    )`
  },
  cardDivider: {
    height: '2px',
    backgroundImage: 'linear-gradient(to right, #111111 33%, rgba(255,255,255,0) 0%)',
    backgroundPosition: 'bottom',
    backgroundSize: '8px 1px',
    backgroundRepeat: 'repeat-x'
  }
};

const BioPanel = () => {
  return (
    <aside
      className="bg-[#FF4D00] rounded-[24px] p-8 h-full flex flex-col justify-between text-[#111111] overflow-hidden"
      style={customStyles.bioPanel}
    >
      <div>
        <div className="flex justify-between items-center border-b border-[#111111] pb-4 mb-8">
          <span className="font-medium text-sm">EST. 2021</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[rgba(0,0,0,0.2)]"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="font-['Playfair_Display'] text-5xl leading-none mb-4 tracking-[-1px]">
            Teja S
          </h1>
          <span className="text-sm uppercase tracking-wider opacity-80 block">Senior Software Engineer</span>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t-2 border-dotted border-[#111111] pt-8">
          <div>
            <span className="block text-[11px] uppercase mb-1 opacity-70">Experience</span>
            <strong className="text-2xl font-normal">05+</strong>
          </div>
          <div>
            <span className="block text-[11px] uppercase mb-1 opacity-70">Stack</span>
            <strong className="text-2xl font-normal">MERN</strong>
          </div>
          <div className="col-span-2">
            <span className="block text-[11px] uppercase mb-1 opacity-70">Location</span>
            <strong className="text-2xl font-normal">Remote</strong>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="text-[11px] font-bold uppercase flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 bg-[#111111] rounded-full"></span>
          CONTACT CARD
        </div>
        <div style={customStyles.barcode}></div>
        <div className="flex flex-col justify-between mt-1 text-[10px] font-mono mb-4">
          <span>+919686897181</span>
          <span>tejaspvg@gmail.com</span>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/Teja-s-au6" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/teja-s-945998245/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

const NavBar = () => {
  const navItems = [
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#E8E6E1] rounded-full py-3 px-6 inline-flex gap-8 self-start border border-[rgba(255,255,255,0.1)] sticky top-0 z-50 shadow-md">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-[13px] font-semibold text-[#111111] opacity-60 hover:opacity-100 transition-opacity uppercase tracking-wide cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

const SkillCard = ({ title, description, delay }) => {
  return (
    <div
      className="p-8 rounded-xl bg-[rgba(255,77,0,0.1)] animate-fadeInUp"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `fadeInUp 0.6s ease forwards ${delay}s`
      }}
    >
      <h3 className="font-['Playfair_Display'] text-lg mb-4">{title}</h3>
      <p className="text-[13px] opacity-80 leading-relaxed">{description}</p>
    </div>
  );
};

const JobRow = ({ year, role, description, company, delay }) => {
  return (
    <div
      className="grid grid-cols-[80px_1fr_auto] items-baseline py-4 border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
      style={{
        opacity: 0,
        transform: 'translateX(-20px)',
        animation: `slideInLeft 0.6s ease forwards ${delay}s`
      }}
    >
      <div className="font-semibold text-sm">{year}</div>
      <div>
        <h3 className="font-['Playfair_Display'] text-xl font-semibold">{role}</h3>
        <p className="text-[13px] opacity-70 mt-1">{description}</p>
      </div>
      <div className="text-sm font-medium text-right">{company}</div>
    </div>
  );
};

const ProjectCard = ({ number, year, title, techs, description, link, image }) => {
  return (
    <article className="bg-[#E8E6E1] rounded-[24px] overflow-hidden flex flex-col relative transition-transform duration-300 hover:-translate-y-1 h-full">
      <div className="h-60 bg-[#dcdad5] relative overflow-hidden group">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-[#ccc] flex items-center justify-center text-[#555]">
            Project Image
          </div>
        )}
        <div className="absolute top-5 right-5 w-8 h-8 bg-[#FF4D00] rounded-full z-10"></div>
      </div>

      <div
        className="mx-4 relative"
        style={customStyles.cardDivider}
      >
        <div className="absolute w-4 h-4 bg-[#111111] rounded-full -top-2 -left-6"></div>
        <div className="absolute w-4 h-4 bg-[#111111] rounded-full -top-2 -right-6"></div>
      </div>

      <div className="p-8 px-4 pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-xs font-semibold text-[#111111] mb-2">
          <span className="opacity-60">{number} — CASE STUDY</span>
          <span>{year}</span>
        </div>

        <h2 className="font-['Playfair_Display'] text-[32px] leading-tight mb-4 text-[#111111]">
          {title}
        </h2>

        {description && (
          <p className="text-[13px] opacity-70 mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-auto flex justify-between items-end">
          <div className="flex flex-wrap gap-1.5">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase border border-[rgba(0,0,0,0.2)] py-1 px-2 rounded-xl"
              >
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2 w-8 h-8 flex items-center justify-center rounded-full border border-[#111111] hover:bg-[#111111] hover:text-white transition-colors">
              ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const SectionHeader = ({ children, style, id }) => {
  return (
    <div id={id} className="text-[#E8E6E1] font-['Playfair_Display'] text-2xl my-8 mb-4 flex items-center gap-4 scroll-mt-24" style={style}>
      {children}
      <div className="flex-grow h-px bg-[rgba(255,255,255,0.2)]"></div>
    </div>
  );
};

const ContactPanel = () => {
  return (
    <div id="contact" className="bg-[#E8E6E1] rounded-[24px] p-16 text-center flex flex-col items-center justify-center min-h-[300px] mt-16 scroll-mt-24">
      <div className="w-16 h-16 bg-[#FF4D00] rounded-full mb-8"></div>
      <h2 className="font-['Playfair_Display'] text-[42px] mb-4">Let's build together.</h2>
      <p className="mb-6 opacity-70 max-w-md leading-relaxed">
        Open to senior frontend roles and creative technical partnerships.
      </p>
      <a href="mailto:tejaspvg@gmail.com" className="bg-transparent border border-[#111111] py-3 px-8 rounded-full text-sm uppercase tracking-wider cursor-pointer transition-all duration-200 hover:bg-[#111111] hover:text-white inline-block text-center">
        Get in touch
      </a>
    </div>
  );
};

const Portfolio = () => {

  const skills = [
    { title: 'Frontend & Languages', description: 'Javascript, TypeScript, HTML, CSS, Python, Reactjs, Nextjs, Jquery, Tailwind CSS, SCSS, Bootstrap, Material-UI, Ant-design', delay: 0 },
    { title: 'Backend & Database', description: 'Nodejs, Expressjs, Django, MongoDB, Mongoose, PostgreSQL', delay: 0.1 },
    { title: 'Tools & Cloud', description: 'Docker, AWS, Git, Vercel, Netlify, Heroku, Twilio, Postman, Jest, GraphQL, Redux', delay: 0.2 }
  ];

  const jobs = [
    { year: '2024-Present', role: 'Senior Software Engineer', description: 'Led frontend redesign, improved architecture, performance optimization with Vite.', company: 'Flowcart', delay: 0 },
    { year: '2023-24', role: 'Senior Software Engineer', description: 'Enhanced Event Discovery platform, handled high traffic, led dev team.', company: 'Yapsody India', delay: 0.1 },
    { year: '2022-23', role: 'FrontEnd Developer', description: 'Developed product features, maintained repositories, collaborated with UX/UI.', company: 'Riyalto', delay: 0.2 },
    { year: '2021-22', role: 'FrontEnd Developer', description: 'Built SaaS features, Peer Analysis platform for PwC, Vendor Analysis for Alvarez & Marsal.', company: 'SignalX', delay: 0.3 }
  ];

  const projects = [
    {
      number: '01',
      year: 'Jul 2020 - Aug 2020',
      title: 'Home Seek',
      techs: ['MERN', 'Redux', 'Google/FB Auth', 'JWT'],
      description: 'A MERN stack application which focuses on rental process for bachelors and families. Used redux architecture for state management. Authenticated using Google, FB, and JWT. Payment Gateway like RazorPay and for location Google API’s are also used.',
      link: 'https://github.com/Teja-s-au6/homeseek',
      image: '/homeseek.png'
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
      <div className="bg-[#111111] text-[#111111] font-['Inter'] antialiased overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto p-8 bg-[#111111] h-screen grid grid-cols-[320px_1fr] gap-8 max-[960px]:grid-cols-1 max-[960px]:p-4 overflow-hidden">
          <BioPanel />

          <main className="flex flex-col gap-6 h-full overflow-y-auto pr-2 pb-8 no-scrollbar scroll-smooth">
            <NavBar />

            <SectionHeader id="skills">Skills & Expertise</SectionHeader>

            <div className="bg-[#E8E6E1] rounded-[24px] p-8 grid grid-cols-3 gap-8 max-[960px]:grid-cols-1">
              {skills.map((skill, idx) => (
                <SkillCard key={idx} {...skill} />
              ))}
            </div>

            <SectionHeader id="experience" style={{ marginTop: '60px' }}>Career History</SectionHeader>

            <div className="bg-[#E8E6E1] rounded-[24px] p-8">
              {jobs.map((job, idx) => (
                <JobRow key={idx} {...job} />
              ))}
            </div>

            <SectionHeader id="projects" style={{ marginTop: '60px' }}>Featured Projects</SectionHeader>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-8 max-[960px]:grid-cols-1">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>

            <ContactPanel />
          </main>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
import React from 'react';

const CustomStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
    }
  `}</style>
);

const TechStack = () => {
  const frontendSkills = [
    { name: "Next.JS", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Tailwind Css", level: "Intermediate" },
    { name: "JavaScript", level: "Expert" },
    { name: "React JS", level: "Expert" },
    { name: "TanStack Query", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.JS", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Express.JS", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "Prisma", level: "Expert" },
    { name: "Kubernetes", level: "Intermediate" },
  ];

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
      <path d="M9 11L12 14L22 4" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.6814 3 15.2492 3.46162 16.5866 4.26389" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const TechIcon = ({ src, alt }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-3 mb-2 shadow-inner">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
      <p className="text-[13px] text-slate-600 dark:text-slate-400/90 text-center font-medium">{alt}</p>
    </div>
  );

  return (
    <div className="bg-white dark:bg-[#020617] transition-colors duration-300">
      <CustomStyles />
      <section className="relative w-full flex flex-col items-center justify-center py-24 px-4 overflow-hidden">

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl font-medium text-slate-900 dark:text-white mb-3 tracking-tight">Technologies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">My Technologies Level</p>
        </div>

        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-950/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/20 dark:bg-slate-950/20 rounded-full blur-[150px] pointer-events-none border border-slate-100 dark:border-slate-900"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-10 mb-20">
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <TechIcon src="https://cdn.simpleicons.org/nextdotjs/black/white" alt="Next.js" />
          <TechIcon src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" />
          <TechIcon src="https://media.daily.dev/image/upload/s--nmy-SeMz--/f_auto/v1733385075/squads/f6e60edb-ee79-4dee-914c-841e14638aa9" alt="ShadcnUI" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          <TechIcon src="https://cdn.simpleicons.org/express/black/white" alt="Express" />

          <div className="w-full h-0"></div>

          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
          <TechIcon src="https://cdn.simpleicons.org/prisma/black/white" alt="Prisma" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
          <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
          <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <TechIcon src="https://better-auth-console.com/favicon/favicon.svg" alt="BetterAuth" />
        </div>

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl font-medium text-slate-900 dark:text-white mb-3 tracking-tight">Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">My Technical Level</p>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">

          {/* Frontend Card */}
          <div className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-[32px] p-12 shadow-xl dark:shadow-[0_0_60px_-15px_rgba(30,41,59,0.3)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
            <h3 className="text-center text-2xl font-semibold text-slate-900 dark:text-white mb-12 tracking-tight">Frontend Developer</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">{skill.name}</h4>
                    <p className="text-sm font-light text-slate-500">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-[32px] p-12 shadow-xl dark:shadow-[0_0_60px_-15px_rgba(30,41,59,0.3)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
            <h3 className="text-center text-2xl font-semibold text-slate-900 dark:text-white mb-12 tracking-tight">Backend Developer</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">{skill.name}</h4>
                    <p className="text-sm font-light text-slate-500">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="absolute top-[60%] right-[10%] w-5 h-5 bg-indigo-500/50 rounded-full blur-md pointer-events-none"></div>

      </section>
    </div>
  );
};

export default TechStack;
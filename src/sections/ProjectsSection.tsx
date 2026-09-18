import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquareText, Link2, Wallet, KeyRound, type LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  stack: string;
  github: string;
  live?: string;
  liveLabel?: string;
  images: [string, string, string];
  Icon: LucideIcon;
}

const projects: Project[] = [
  {
    number: '01',
    category: 'Deployed',
    name: 'AI Mock Interview Platform',
    stack: 'Next.js, Gemini API, MongoDB',
    github: 'https://github.com/Rikshith-07/ai-mock-interview',
    live: 'https://ai-mock-interview-one-tau.vercel.app',
    images: ['/projects/mock-interview-1.png', '/projects/mock-interview-2.png', '/projects/mock-interview-3.png'],
    Icon: MessageSquareText,
  },
  {
    number: '02',
    category: 'Deployed',
    name: 'BitLinks',
    stack: 'Next.js, MongoDB',
    github: 'https://github.com/Rikshith-07/bitlinks-next',
    live: 'https://bitlinks-next.vercel.app',
    images: ['/projects/bitlinks-1.png', '/projects/bitlinks-2.png', '/projects/bitlinks-3.png'],
    Icon: Link2,
  },
  {
    number: '03',
    category: 'Deployed',
    name: 'PassOp',
    stack: 'React, Node.js, Express, MongoDB',
    github: 'https://github.com/Rikshith-07/passOp-Mongo',
    live: 'https://pass-op-mongo-five.vercel.app/',
    images: ['/projects/passop-1.png', '/projects/passop-2.png', '/projects/passop-3.png'],
    Icon: KeyRound,
  },
  {
    number: '04',
    category: 'Personal',
    name: 'BudgetWise',
    stack: 'React, Spring Boot, MySQL',
    github: 'https://github.com/Rikshith-07/budgetwise',
    live: 'https://drive.google.com/file/d/1rLsCUkM1IRon998fwx9Ovd7q0Xli8uyy/view?usp=drive_link',
    liveLabel: 'Watch Demo',
    images: [
      'https://raw.githubusercontent.com/Rikshith-07/budgetwise/main/docs/screenshots/landing_page.png',
      'https://raw.githubusercontent.com/Rikshith-07/budgetwise/main/docs/screenshots/dashboard.png',
      'https://raw.githubusercontent.com/Rikshith-07/budgetwise/main/docs/screenshots/transactions.png',
    ],
    Icon: Wallet,
  },
];

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-24 h-[85vh] md:top-32" style={{ top: `${24 + index * 28}px` }}>
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-[32px] border-2 border-[#D7E2EA] bg-ink p-3 sm:gap-6 sm:rounded-[50px] sm:p-6 md:gap-8 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-shrink-0 flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category} &middot; {project.stack}
              </span>
              <span className="text-base font-medium uppercase text-[#D7E2EA] sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <LiveProjectButton
              href={project.github}
              label="GitHub"
              className="px-4 py-2 text-[10px] sm:px-8 sm:py-3 sm:text-sm"
            />
            {project.live && (
              <LiveProjectButton
                href={project.live}
                label={project.liveLabel ?? 'Live Project'}
                className="px-4 py-2 text-[10px] sm:px-8 sm:py-3 sm:text-sm"
              />
            )}
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2 sm:flex-row sm:gap-3">
          <div className="grid h-20 flex-shrink-0 grid-cols-2 gap-2 sm:flex sm:h-auto sm:w-[40%] sm:flex-shrink sm:flex-col sm:gap-3">
            <div className="overflow-hidden rounded-2xl sm:flex-[2] sm:rounded-[40px] md:rounded-[60px]">
              <img
                src={project.images[0]}
                alt={`${project.name} screenshot one`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl sm:flex-[3] sm:rounded-[40px] md:rounded-[60px]">
              <img
                src={project.images[1]}
                alt={`${project.name} screenshot two`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-hidden rounded-2xl sm:w-[60%] sm:flex-none sm:rounded-[40px] md:rounded-[60px]">
            <img
              src={project.images[2]}
              alt={`${project.name} screenshot three`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 pb-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}

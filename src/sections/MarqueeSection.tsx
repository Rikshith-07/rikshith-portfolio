import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  slug: string;
  color: string;
}

const row1Skills: Skill[] = [
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '38BDF8' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
  { name: 'Java', slug: 'openjdk', color: 'FFFFFF' },
];

const row2Skills: Skill[] = [
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
  { name: 'Spring Boot', slug: 'springboot', color: '6DB33F' },
  { name: 'Express', slug: 'express', color: 'FFFFFF' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1' },
  { name: 'JWT', slug: 'jsonwebtokens', color: 'FFFFFF' },
  { name: 'Git', slug: 'git', color: 'F05032' },
];

function tripleRow(items: Skill[]) {
  return [...items, ...items, ...items];
}

function Tile({ skill }: { skill: Skill }) {
  return (
    <div className="flex h-[100px] w-[220px] flex-shrink-0 items-center justify-center gap-4 rounded-2xl border border-[#2A2A2A] bg-[#141414] px-6 sm:h-[120px] sm:w-[260px]">
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
        alt=""
        className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10"
        loading="lazy"
      />
      <span className="text-center text-sm font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-base">
        {skill.name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40">
      <div
        className="mb-3 flex gap-3"
        style={{ willChange: 'transform', transform: `translateX(${offset - 200}px)` }}
      >
        {tripleRow(row1Skills).map((skill, i) => (
          <Tile key={`r1-${i}`} skill={skill} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ willChange: 'transform', transform: `translateX(${-(offset - 200)}px)` }}
      >
        {tripleRow(row2Skills).map((skill, i) => (
          <Tile key={`r2-${i}`} skill={skill} />
        ))}
      </div>
    </section>
  );
}

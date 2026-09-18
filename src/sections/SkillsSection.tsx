import FadeIn from '../components/FadeIn';

const skills = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'Building responsive, accessible interfaces with React, Next.js, and Tailwind CSS, with an eye for clean component structure and smooth interactions.',
  },
  {
    number: '02',
    name: 'Full Stack Development',
    description:
      'Building end-to-end applications that connect React and Next.js frontends to Node.js and Spring Boot services, so every layer works together cleanly.',
  },
  {
    number: '03',
    name: 'REST API Design',
    description:
      'Designing well-structured REST APIs with clear authentication and predictable data flow, built to be easy for other developers to integrate with.',
  },
  {
    number: '04',
    name: 'Backend Architecture',
    description:
      'Structuring backend services around the controller-service-repository pattern in Spring Boot and Express, so the codebase stays maintainable as it grows.',
  },
  {
    number: '05',
    name: 'Database Design',
    description:
      'Modeling and optimizing data in MySQL and MongoDB so lookups stay fast and reliable as an application scales.',
  },
  {
    number: '06',
    name: 'Auth & Deployment',
    description:
      'Implementing OAuth and JWT-based authentication for secure sessions, then shipping the result on Vercel for fast, dependable access.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-ink sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </h2>

      <div className="mx-auto max-w-5xl">
        {skills.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.08}>
            <div
              className="flex flex-col gap-3 border-t py-6 last:border-b sm:flex-row sm:items-center sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="flex-shrink-0 font-black text-ink"
                style={{ fontSize: 'clamp(2.25rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase text-ink"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-ink"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

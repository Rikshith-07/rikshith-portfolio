import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import ResumeButton from '../components/ResumeButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn as="nav" delay={0} y={-20} className="flex flex-wrap justify-between gap-x-4 gap-y-2 px-4 pt-6 sm:px-6 md:px-10 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex flex-1 flex-col justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40} className="mt-6 w-full sm:mt-4 md:-mt-5">
          <h1 className="hero-heading w-full font-black uppercase leading-[0.95] tracking-tight">
            <span className="block w-full whitespace-nowrap text-center text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw]">Hi,</span>
            <span className="block w-full whitespace-nowrap text-center text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw]">i&apos;m rikshith</span>
          </h1>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[300px] sm:translate-y-0 md:w-[360px] lg:w-[420px]">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="pointer-events-auto"
        >
          <FadeIn delay={0.6} y={30}>
            <img src="/avatar.png" alt="Rikshith Ravi Teja" className="w-full select-none" draggable={false} />
          </FadeIn>
        </Magnet>
      </div>

      <div className="flex flex-col gap-6 px-6 pb-7 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          delay={0.35}
          y={20}
          className="max-w-[220px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          as="p"
        >
          <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a full stack developer driven by building scalable, thoughtful web experiences
          </span>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex flex-wrap gap-3">
          <ResumeButton />
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

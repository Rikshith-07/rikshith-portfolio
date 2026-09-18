import { Mail, Phone, Github, Linkedin, Code } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const links = [
  { label: 'rikshithraviteja2@gmail.com', href: 'mailto:rikshithraviteja2@gmail.com', Icon: Mail },
  { label: '+91 88858 58660', href: 'tel:+918885858660', Icon: Phone },
  { label: 'GitHub', href: 'https://github.com/Rikshith-07', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kuruva-rikshith-raviteja/', Icon: Linkedin },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Rikshith7/', Icon: Code },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 bg-ink px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-md font-light text-[#D7E2EA]/70" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}>
            Open to entry-level Software Engineer and Full Stack Developer roles in Bangalore and Hyderabad.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ContactButton />
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-4">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#D7E2EA]/70 transition-opacity hover:opacity-100"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </FadeIn>

        <p className="pt-8 text-xs uppercase tracking-widest text-[#D7E2EA]/30">
          &copy; {new Date().getFullYear()} Kuruva Rikshith Ravi Teja
        </p>
      </div>
    </section>
  );
}

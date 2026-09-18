import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ASSET_BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/';

const aboutText =
  "With more than a year of hands-on experience across React, Node.js, and Spring Boot, i focus on full stack development, REST API design, and clean backend architecture, i truly enjoy taking an idea from database schema to a polished interface. Let's build something reliable together!";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen px-5 py-20 sm:px-8 md:px-10">
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[3%] w-[70px] sm:left-[2%] sm:top-[4%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img src={`${ASSET_BASE}moon_icon.11395d36.png`} alt="" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] left-[2%] w-[60px] sm:left-[6%] sm:bottom-[8%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img src={`${ASSET_BASE}p59_1.4659672e.png`} alt="" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[3%] w-[70px] sm:right-[2%] sm:top-[4%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img src={`${ASSET_BASE}lego_icon-1.703bb594.png`} alt="" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] right-[2%] w-[75px] sm:right-[6%] sm:bottom-[8%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img src={`${ASSET_BASE}Group_134-1.2e04f3ce.png`} alt="" className="w-full" />
      </FadeIn>

      <div className="flex min-h-screen flex-col items-center justify-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <AnimatedText
            text={aboutText}
            className="mx-auto max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.15} className="flex flex-col items-center gap-1.5 border-t border-[#D7E2EA]/15 pt-8">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">Education</span>
            <span
              className="font-medium text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
            >
              B.Tech, Electronics &amp; Communication Engineering
            </span>
            <span className="text-sm text-[#D7E2EA]/60 sm:text-base">
              Reva University, Bangalore &middot; 2021 &ndash; 2025 &middot; CGPA 7.26
            </span>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

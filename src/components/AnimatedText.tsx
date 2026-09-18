import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            <Word word={word} progress={scrollYProgress} range={[start, end]} />
            {i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}

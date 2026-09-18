import { Download } from 'lucide-react';

interface ResumeButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function ResumeButton({
  href = 'https://drive.google.com/file/d/1M0sANITV_nMCeA7nVie19sUuXzltjnoZ/view?usp=sharing',
  label = 'Resume',
  className = '',
}: ResumeButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      <Download className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
      {label}
    </a>
  );
}

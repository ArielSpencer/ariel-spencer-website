interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  background?: 'primary' | 'secondary' | 'highlight' | 'none';
}

export default function Section({
  children,
  className = '',
  id,
  fullWidth = false,
  background = 'none',
}: SectionProps) {
  const bgClasses = {
    primary: 'bg-[var(--color-bg-primary)]',
    secondary: 'bg-[var(--color-bg-secondary)]',
    highlight: 'bg-[var(--color-bg-highlight)]',
    none: '',
  };

  return (
    <section 
      id={id} 
      className={`py-12 md:py-16 ${bgClasses[background]} ${className}`}
    >
      <div className={`${fullWidth ? '' : 'container mx-auto'} px-4 md:px-6`}>
        {children}
      </div>
    </section>
  );
}

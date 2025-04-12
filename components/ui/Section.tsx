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

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}: SectionTitleProps) {
  return (
    <div className={`mb-4 md:mb-6 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--color-text-body)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
"use client";

import Image from 'next/image';
import Button from '../ui/Button';
// import { FiArrowRight } from 'react-icons/fi';

const PurpleText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--color-accent)]">{children}</span>
);

const Skills = [
  { name: 'Python', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'TypeScript', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'NodeJS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'NextJS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
  { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Angular', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg' },
  { name: 'HTML5', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS3', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'Sass', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg' },
  { name: 'TailwindCSS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
  { name: 'Oracle db', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg' },
  { name: 'Swift', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
]

export default function Banner() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 w-1/2 h-1/2 bg-[var(--color-accent)] rounded-full blur-3xl" />
        <div className="absolute -left-10 bottom-0 w-1/3 h-1/3 bg-[var(--color-btn-accent)] rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block bg-[var(--color-bg-secondary)] px-4 py-2 rounded-full text-[var(--color-accent)] font-medium text-sm mb-6">
            Full-stack Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m <PurpleText>Spencer</PurpleText>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[var(--color-text-body)]">
            Matching code, creativity and user experience
          </p>
          <p className="mb-8 text-[var(--color-text-body)]">
            I create digital solutions with over <PurpleText>5 years of IT experience</PurpleText>, specializing in <PurpleText>TypeScript</PurpleText>, <PurpleText>Python</PurpleText>, and <PurpleText>Node.js</PurpleText> with an emphasis on <PurpleText>UX design</PurpleText> and <PurpleText>digital marketing</PurpleText> strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <Button href="#" size="lg">
              View My Work
              <FiArrowRight className="ml-2" />
            </Button> */}
            <Button href="https://wa.me/5511991007079" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="relative animate-fade-in">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute w-full h-full bg-gradient-to-r from-[var(--color-btn-accent)] to-[var(--color-accent)] opacity-10 rounded-full blur-xl"></div>
            <Image
              src="/assets/ariel-spencer-developer.png"
              alt="Ariel Spencer - Developer"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-full shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-70">
          {Skills.map((tech) => (
            <div key={tech.name} className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 relative mx-auto mb-2">
                <Image
                  src={tech.url}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xs md:text-sm text-[var(--color-text-body)]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
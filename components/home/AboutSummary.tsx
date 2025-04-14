"use client";

import Image from 'next/image';
import Section, { SectionTitle } from '../ui/Section';
import Tag from '../ui/Tag';
// import Button from '../ui/Button';
// import { FiArrowRight } from 'react-icons/fi';

export default function AboutSummary() {
  const skillGroups = [
    {
      title: "Development",
      skills: ["Software Development", "Web Development", "Front-End", "Back-End", "Mobile (iOS)"]
    },
    {
      title: "Design & Experience",
      skills: ["UX/UI", "Responsive Design", "Figma", "SEO", "Digital Marketing"]
    },
    {
      title: "Methodologies & Others",
      skills: ["Agile", "Scrum", "Systems Integration", "Clean Code", "Cloud Computing", "Product Manager"]
    }
  ];

  return (
    <Section background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 lg:order-1">
          <div className="relative rounded-lg overflow-hidden animate-fade-in">
            <div className="absolute w-full h-full bg-gradient-to-br from-[var(--color-accent)] to-transparent opacity-10"></div>
            <div className="aspect-square md:aspect-[4/5] relative">
              <Image
                src="/assets/ariel-spencer-oracle.png"
                alt="Ariel Spencer - Developer"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)] opacity-10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="lg:col-span-6 lg:order-1 animate-fade-in">
          <Tag variant="accent" size="sm" mb={4}>
            About Me
          </Tag>
          
          <SectionTitle 
            title="Passionate about creating digital experiences"
            subtitle=""
            centered={false}
          />
          
          <div className="space-y-4 text-[var(--color-text-body)]">
            <p>
              Born and raised in Brazil, I&apos;ve always been fascinated by technology and its potential to transform ideas into reality. With over 5 years of professional experience, I&apos;ve worked across various domains including web development, project management, iOS mobile applications, and UI/UX design.
            </p>
            
            <p>
              I&apos;m currently pursuing degrees in Systems Analysis and Development at FAM (Centro Universitário das Américas), where I&apos;ve served as class representative since my first semester. This leadership role has allowed me to develop strong communication and collaboration skills.
            </p>

            <p>
              I&apos;m also leading my group in our degree&apos;s integration project—a volunteer initiative helping an NGO implement technology solutions for inventory and animal control. This hands-on experience combines my technical skills with my passion for creating meaningful impact through technology.
            </p>
          </div>

          {/* <div className="mt-8">
            <Button href="/about" size="lg">
              More About Me
              <FiArrowRight className="ml-2" />
            </Button>
          </div> */}
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Skills Overview</h3>
            
            <div className="space-y-6">
              {skillGroups.map((group, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-[var(--color-accent)] mb-2">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <Tag variant='outline' size='md' hover key={skillIndex}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
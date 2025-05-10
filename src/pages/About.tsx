
import { Calendar, Code, GraduationCap, Briefcase } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import SkillBadge from '@/components/SkillBadge';

const About = () => {
  const skills = {
    programming: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
    dataScienceTools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    backendTools: ['Flask', 'FastAPI', 'RESTful APIs', 'SQL'],
    others: ['Git', 'Problem Solving', 'Data Analysis', 'Web Scraping']
  };
  
  return (
    <>
      {/* About Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-2/5">
              <div className="rounded-2xl overflow-hidden border-2 border-tech-blue">
                <img 
                  src="/placeholder.svg" 
                  alt="Abdul Rafay" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <SectionTitle title="About Me" />
              <p className="mb-4 text-lg">
                I'm Abdul Rafay, a 3rd-year Computer System Engineering student with a deep passion for Machine Learning, Data Science, and AI. 
              </p>
              <p className="mb-6 text-muted-foreground">
                My journey in tech began with programming in Java and quickly expanded to include Python and its powerful data science libraries. 
                I enjoy working with data, training ML models, and developing backend solutions using Flask and FastAPI. 
                As I continue to grow in this field, I remain committed to learning new technologies and solving complex problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 text-tech-blue" />
                  <span>3rd Year Student</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-2 text-tech-blue" />
                  <span>50+ LeetCode Problems Solved</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="mr-2 text-tech-blue" />
                  <span>Computer System Engineering</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 text-tech-blue" />
                  <span>Backend Development Intern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <SectionTitle 
            title="Education & Experience" 
            subtitle="My academic and professional journey"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2 text-tech-blue" /> Education
              </h3>
              
              <div className="relative pl-6 border-l border-tech-blue">
                <div className="mb-8 relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-tech-blue"></div>
                  <h4 className="text-lg font-medium">Computer System Engineering</h4>
                  <p className="text-muted-foreground">University Name • 2021 - Present</p>
                  <p className="mt-2">
                    Studying computer architecture, programming, data structures, and specialized courses in machine learning and data science.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2 text-tech-blue" /> Experience
              </h3>
              
              <div className="relative pl-6 border-l border-tech-blue">
                <div className="mb-8 relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-tech-blue"></div>
                  <h4 className="text-lg font-medium">Backend Developer Intern</h4>
                  <p className="text-muted-foreground">Company Name • Summer 2023</p>
                  <p className="mt-2">
                    Developed RESTful APIs using Flask and FastAPI, worked on database integrations, and implemented backend solutions for web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Skills & Expertise" 
            subtitle="Technologies and tools I'm proficient with"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap">
                {skills.programming.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Data Science Tools</h3>
              <div className="flex flex-wrap">
                {skills.dataScienceTools.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <div className="flex flex-wrap">
                {skills.backendTools.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Other Skills</h3>
              <div className="flex flex-wrap">
                {skills.others.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

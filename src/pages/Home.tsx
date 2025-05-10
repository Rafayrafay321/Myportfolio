
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import SkillBadge from '@/components/SkillBadge';

const skills = [
  'Java', 'Python', 'HTML', 'CSS', 'Flask', 'FastAPI',
  'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Machine Learning', 'Data Analysis'
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 animate-fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="text-gradient">Abdul Rafay</span>
              </h1>
              <p className="text-xl mb-6 text-muted-foreground">
                Computer System Engineering Student with a passion for Machine Learning, Data Science, and AI.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-tech-blue">
                  <img 
                    src="/placeholder.svg" 
                    alt="Abdul Rafay" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg border border-border">
                  <p className="font-medium">50+ LeetCode Problems Solved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <SectionTitle 
            title="My Skills" 
            subtitle="Technologies and tools I work with"
            centered
          />
          
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="What I Do" 
            subtitle="Services I offer to help you succeed"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-10 w-10 mb-4 text-tech-blue" />,
                title: "Data Analysis",
                description: "Transform raw data into actionable insights using Python, Pandas, and visualization tools."
              },
              {
                icon: <Code className="h-10 w-10 mb-4 text-tech-blue" />,
                title: "Backend Development",
                description: "Build robust backends with Flask and FastAPI to power your web applications."
              },
              {
                icon: <Beaker className="h-10 w-10 mb-4 text-tech-blue" />,
                title: "Machine Learning",
                description: "Develop ML models to solve complex problems and make data-driven predictions."
              }
            ].map((service, index) => (
              <div key={index} className="glass-card p-6 rounded-lg flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" asChild className="mt-auto">
                  <Link to="/services" className="flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Interested in working together?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;


import { Database, Beaker, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Database className="h-12 w-12 text-tech-blue" />,
    title: "Data Analysis",
    description: "Transform raw data into meaningful insights through comprehensive data analysis.",
    details: [
      "Exploratory data analysis (EDA) to understand patterns and relationships",
      "Data cleaning and preprocessing to ensure quality",
      "Statistical analysis to test hypotheses and validate findings",
      "Creating visualizations to communicate insights effectively"
    ],
    tools: "Python, Pandas, NumPy, Matplotlib, Seaborn"
  },
  {
    icon: <Beaker className="h-12 w-12 text-tech-blue" />,
    title: "Machine Learning Model Training",
    description: "Develop and train machine learning models to solve complex problems and make predictions.",
    details: [
      "Feature engineering and selection for optimal model performance",
      "Model selection and hyperparameter tuning",
      "Training and validating models on relevant datasets",
      "Model evaluation and performance metrics analysis"
    ],
    tools: "Python, Scikit-learn, TensorFlow, Pandas, NumPy"
  },
  {
    icon: <Code className="h-12 w-12 text-tech-blue" />,
    title: "Web Scraping & Backend Development",
    description: "Extract data from websites and develop robust backend systems for web applications.",
    details: [
      "Building web scrapers to collect data from various sources",
      "Developing RESTful APIs using Flask and FastAPI",
      "Database integration and management",
      "Creating efficient and scalable backend systems"
    ],
    tools: "Python, Flask, FastAPI, BeautifulSoup, Scrapy, SQL"
  }
];

const Services = () => {
  return (
    <>
      {/* Services Hero */}
      <section className="py-16 px-4 bg-gradient">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">My Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Specialized services focused on data science, machine learning, and backend development to help you solve complex problems and leverage the power of data.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="What I Offer" 
            subtitle="Professional services tailored to your needs"
            centered
          />
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-medium mb-4">What's included:</h4>
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-tech-blue mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="font-medium">Tools & Technologies:</p>
                      <p className="text-muted-foreground">{service.tools}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <SectionTitle 
            title="My Process" 
            subtitle="How I approach projects to ensure success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and requirements through detailed discussions."
              },
              {
                step: "02",
                title: "Planning",
                description: "Developing a comprehensive plan with timelines and deliverables."
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing solutions with regular updates and progress reports."
              },
              {
                step: "04",
                title: "Delivery",
                description: "Providing final deliverables with documentation and knowledge transfer."
              }
            ].map((phase, index) => (
              <div key={index} className="glass-card p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. Whether you need data analysis, machine learning solutions, or backend development, I'm here to help.
            </p>
            <Button asChild size="lg" className="bg-tech-blue hover:bg-tech-darkBlue">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

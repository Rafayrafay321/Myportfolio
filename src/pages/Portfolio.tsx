
import { ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import SkillBadge from '@/components/SkillBadge';

const datasets = [
  {
    title: "Housing Price Analysis",
    description: "Exploratory data analysis on housing prices dataset to identify key factors affecting property values.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "/placeholder.svg"
  },
  {
    title: "Customer Segmentation",
    description: "Used clustering algorithms to segment customers based on purchasing behavior and demographics.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/placeholder.svg"
  },
  {
    title: "Sales Forecasting",
    description: "Time series analysis and forecasting of sales data to predict future trends and seasonal patterns.",
    tools: ["Python", "Pandas", "Matplotlib", "Statsmodels"],
    image: "/placeholder.svg"
  }
];

const Portfolio = () => {
  return (
    <>
      {/* Portfolio Hero */}
      <section className="py-16 px-4 bg-gradient">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Here you'll find a collection of datasets I've analyzed and the insights I've drawn using various data science tools.
          </p>
        </div>
      </section>
      
      {/* Dataset Analysis */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Dataset Analysis" 
            subtitle="Exploring data and extracting meaningful insights"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datasets.map((project, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4 flex flex-wrap">
                    {project.tools.map((tool, i) => (
                      <SkillBadge key={i} name={tool} />
                    ))}
                  </div>
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Showcase */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <SectionTitle 
            title="Technical Skills Showcase" 
            subtitle="Tools and technologies I've mastered"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Data Visualization</h3>
              <p className="text-muted-foreground mb-6">
                Creating clear and informative visualizations is essential for data analysis. 
                Here's how I approach data visualization:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Using Matplotlib and Seaborn for statistical visualizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Creating interactive dashboards for data exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Customizing plots to highlight key insights and patterns</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Data Analysis Process</h3>
              <p className="text-muted-foreground mb-6">
                My approach to analyzing datasets follows these key steps:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Data cleaning and preprocessing with Pandas and NumPy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Exploratory data analysis to identify patterns and outliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Statistical analysis to test hypotheses and validate findings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tech-blue mr-2">•</span>
                  <span>Drawing actionable insights and creating detailed reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Future Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Coming Soon" 
            subtitle="Projects I'm currently working on"
            centered
          />
          
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">New Projects Under Development</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm currently working on several exciting projects including machine learning models for predictive analysis and web applications with Flask and FastAPI backends. Check back soon for updates!
            </p>
            <div className="flex justify-center flex-wrap gap-2">
              <SkillBadge name="Machine Learning" />
              <SkillBadge name="Flask" />
              <SkillBadge name="FastAPI" />
              <SkillBadge name="Data Visualization" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

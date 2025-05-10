
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card mt-10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient text-xl font-semibold">Abdul Rafay</p>
            <p className="text-muted-foreground text-sm mt-1">
              Computer System Engineering Student
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/rafay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/abdul-rafay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:rafaysh72@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} Abdul Rafay. All rights reserved.
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item, index) => (
              <Link 
                key={index} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

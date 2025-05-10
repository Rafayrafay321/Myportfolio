
import { useState, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import SectionTitle from '@/components/SectionTitle';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim()) {
      toast({ title: "Error", description: "Please enter your name" });
      return;
    }
    
    if (!formData.email.trim()) {
      toast({ title: "Error", description: "Please enter your email" });
      return;
    }
    
    if (!formData.subject.trim()) {
      toast({ title: "Error", description: "Please enter a subject" });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({ title: "Error", description: "Please enter a message" });
      return;
    }
    
    setIsSubmitting(true);
    
    // Initialize EmailJS with your public key
    emailjs.init("7LI8jGe_QNjOey2WQ");
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_xgf6t6f',  // Your Service ID
      'template_ycjb7g6', // Your Template ID
      formRef.current!,
      '7LI8jGe_QNjOey2WQ' // Your Public Key
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
      
      setIsSubmitting(false);
    });
  };
  
  return (
    <>
      {/* Contact Hero */}
      <section className="py-16 px-4 bg-gradient">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me directly.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail className="h-8 w-8 text-tech-blue" />,
                title: "Email",
                value: "rafaysh72@gmail.com",
                link: "mailto:rafaysh72@gmail.com"
              },
              {
                icon: <MapPin className="h-8 w-8 text-tech-blue" />,
                title: "Location",
                value: "Pakistan",
                link: "#"
              },
              {
                icon: <Phone className="h-8 w-8 text-tech-blue" />,
                title: "Phone",
                value: "Available upon request",
                link: "#"
              }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                className="glass-card p-6 rounded-lg text-center hover:border-tech-blue/50 transition-all"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-medium mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="md:w-2/3">
              <SectionTitle 
                title="Send Me a Message" 
                subtitle="I'll get back to you as soon as possible"
              />
              
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="bg-secondary/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className="bg-secondary/50 min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tech-blue hover:bg-tech-darkBlue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Connect Section */}
            <div className="md:w-1/3">
              <SectionTitle 
                title="Connect Online" 
                subtitle="Find me on social platforms"
              />
              
              <div className="glass-card p-6 rounded-lg flex flex-col h-[calc(100%-4.5rem)]">
                <p className="mb-6 text-muted-foreground">
                  Feel free to connect with me on these platforms for professional networking and to see more of my work.
                </p>
                
                {[
                  {
                    icon: <Github className="h-5 w-5" />,
                    name: "GitHub",
                    username: "@rafay",
                    link: "https://github.com/rafay"
                  },
                  {
                    icon: <Linkedin className="h-5 w-5" />,
                    name: "LinkedIn",
                    username: "abdul-rafay",
                    link: "https://linkedin.com/in/abdul-rafay"
                  },
                  {
                    icon: <Mail className="h-5 w-5" />,
                    name: "Email",
                    username: "rafaysh72@gmail.com",
                    link: "mailto:rafaysh72@gmail.com"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-4 px-3 rounded-md hover:bg-secondary/70 transition-colors mb-2"
                  >
                    <div className="p-2 bg-secondary rounded-md mr-4">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
                
                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground text-sm">
                    Available for freelance projects and full-time opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

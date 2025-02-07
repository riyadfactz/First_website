import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Create mailto URL
    const mailtoUrl = `mailto:mdalmahmud023@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in <span className="text-green-400">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                {
                  Icon: Mail,
                  href: 'mailto:mdalmahmud023@gmail.com',
                  label: 'mdalmahmud023@gmail.com',
                },
                {
                  Icon: Github,
                  href: 'https://github.com',
                  label: 'github.com/mdalmahmud023',
                },
                {
                  Icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'linkedin.com/in/mdalmahmud023',
                },
              ].map((social, index) => (
                <SocialLink key={index} {...social} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-green-400 focus:outline-none"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-green-400 focus:outline-none"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-green-400 focus:outline-none"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-green-500/10 text-green-400 rounded-lg
                       hover:bg-green-500/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  Icon,
  href,
  label,
  index,
}: {
  Icon: React.ElementType;
  href: string;
  label: string;
  index: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ x: 5 }}
  >
    <Icon size={20} />
    {label}
  </motion.a>
);

export default Contact;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    {
      name: 'github',
      href: 'https://github.com/faruk-mansuri',
      icon: <img src='./github.svg' alt='github' />,
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/faruk-mansuri-5900a1272/',
      icon: <img src='./linkedin.svg' alt='linkedin' />,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-20 bg-secondary backdrop-filter backdrop-blur-lg bg-opacity-30  ${
        scrolled ? 'bg-secondary/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-2xl font-bold text-primary'
          >
            <a
              href='/'
              className='text-lg sm:text-2xl text-primary font-semibold'
            >
              Faruk &nbsp;
              <span className='hidden sm:inline-block text-lg text-center sm:text-2xl text-primary font-semibold sm:visible'>
                Mansuri
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='flex space-x-4'>
            {navItems.map((item, index) => {
              if (item.name === 'github' || item.name === 'linkedin') {
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:text-gray-900 transition-colors duration-200'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.icon}
                  </motion.a>
                );
              }
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className='text-primary hover:text-gray-900 transition-colors duration-200'
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

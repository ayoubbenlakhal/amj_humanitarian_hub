import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Accueil', href: '/homepage', icon: 'Home' },
    { name: 'Mission', href: '/about-mission-universe', icon: 'Target' },
    { name: 'Projets', href: '/projects-gallery', icon: 'FolderOpen' },
    { name: 'Communauté', href: '/community-stories', icon: 'Users' },
    { name: 'Impact', href: '/impact-dashboard', icon: 'BarChart3' }
  ];

  const secondaryItems = [
    { name: 'Contact', href: '/contact-connect', icon: 'Mail' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-background'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/homepage" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-bold text-foreground">
                  AMJ Hub
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Humanitarian Impact
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <a
                key={item?.name}
                href={item?.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-300 group"
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                />
                <span>{item?.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/contact-connect"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
            <Button 
              variant="outline" 
              size="sm"
              iconName="Globe"
              iconPosition="left"
              iconSize={16}
              className="border-border hover:border-primary hover:text-primary"
            >
              FR/EN
            </Button>
            <Button 
              variant="default"
              size="sm"
              iconName="UserPlus"
              iconPosition="left"
              iconSize={16}
              className="bg-primary hover:bg-primary/90"
            >
              Rejoindre
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:bg-muted"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon 
                    name={item?.icon} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                  />
                  <span>{item?.name}</span>
                </a>
              ))}
              
              {secondaryItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon 
                    name={item?.icon} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                  />
                  <span>{item?.name}</span>
                </a>
              ))}

              <div className="pt-4 border-t border-border space-y-3">
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="Globe"
                  iconPosition="left"
                  iconSize={18}
                  className="justify-center border-border hover:border-primary hover:text-primary"
                >
                  Changer la langue
                </Button>
                <Button 
                  variant="default"
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={18}
                  className="justify-center bg-primary hover:bg-primary/90"
                >
                  Rejoindre le Mouvement
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentAction, setCurrentAction] = useState('donate');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaActions = [
    {
      id: 'donate',
      label: 'Faire un Don',
      icon: 'Heart',
      color: 'bg-primary hover:bg-primary/90',
      description: 'Soutenez nos projets'
    },
    {
      id: 'volunteer',
      label: 'Devenir Volontaire',
      icon: 'UserPlus',
      color: 'bg-secondary hover:bg-secondary/90',
      description: 'Rejoignez notre équipe'
    },
    {
      id: 'share',
      label: 'Partager',
      icon: 'Share2',
      color: 'bg-accent hover:bg-accent/90 text-foreground',
      description: 'Diffusez notre mission'
    },
    {
      id: 'contact',
      label: 'Nous Contacter',
      icon: 'Mail',
      color: 'bg-trust hover:bg-trust/90',
      description: 'Posez vos questions'
    }
  ];

  const handleActionClick = (actionId) => {
    switch (actionId) {
      case 'donate':
        // Scroll to donation section or open donation modal
        window.location.href = '#donation-section';
        break;
      case 'volunteer':
        window.location.href = '/contact-connect';
        break;
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'AMJ Humanitarian Hub',
            text: 'Découvrez AMJ - Jeunesse en Action, Impact Sans Frontières',
            url: window.location?.href
          });
        } else {
          // Fallback for browsers that don't support Web Share API
          navigator.clipboard?.writeText(window.location?.href);
          alert('Lien copié dans le presse-papiers!');
        }
        break;
      case 'contact':
        window.location.href = '/contact-connect';
        break;
      default:
        break;
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-4 space-y-3 animate-fade-in">
          {ctaActions?.map((action) => (
            <div
              key={action?.id}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => handleActionClick(action?.id)}
            >
              <div className="bg-white rounded-lg px-4 py-2 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <div className="text-sm font-medium text-foreground">
                  {action?.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {action?.description}
                </div>
              </div>
              
              <button
                className={`w-12 h-12 rounded-full ${action?.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110`}
              >
                <Icon name={action?.icon} size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Main CTA Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isExpanded ? 'rotate-45' : 'hover:scale-110'
          }`}
        >
          <Icon name={isExpanded ? "X" : "Plus"} size={24} />
        </button>

        {/* Pulse Animation */}
        {!isExpanded && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-ping opacity-20"></div>
        )}

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
          3
        </div>
      </div>
      {/* Quick Action Tooltips */}
      {!isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white rounded-lg px-3 py-2 shadow-soft whitespace-nowrap">
            <div className="text-sm font-medium text-foreground">
              Actions Rapides
            </div>
            <div className="text-xs text-muted-foreground">
              Cliquez pour voir les options
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
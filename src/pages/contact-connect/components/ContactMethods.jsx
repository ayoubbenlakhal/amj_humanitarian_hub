import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('general');

  const contactMethods = [
    {
      id: 'general',
      title: 'Contact Général',
      description: 'Questions générales et informations',
      icon: 'Mail',
      color: 'primary',
      details: {
        email: 'contact@amjhub.org',
        phone: '+33 1 42 86 17 28',
        hours: 'Lun-Ven: 9h-18h CET'
      }
    },
    {
      id: 'volunteer',
      title: 'Bénévolat',
      description: 'Rejoindre notre équipe de volontaires',
      icon: 'Users',
      color: 'secondary',
      details: {
        email: 'benevoles@amjhub.org',
        phone: '+33 1 42 86 17 29',
        hours: 'Lun-Sam: 10h-19h CET'
      }
    },
    {
      id: 'partnership',
      title: 'Partenariats',
      description: 'Collaborations et partenariats stratégiques',
      icon: 'Handshake',
      color: 'accent',
      details: {
        email: 'partenariats@amjhub.org',
        phone: '+33 1 42 86 17 30',
        hours: 'Lun-Ven: 9h-17h CET'
      }
    },
    {
      id: 'media',
      title: 'Médias & Presse',
      description: 'Relations presse et demandes médias',
      icon: 'Camera',
      color: 'trust',
      details: {
        email: 'presse@amjhub.org',
        phone: '+33 1 42 86 17 31',
        hours: 'Lun-Ven: 8h-20h CET'
      }
    },
    {
      id: 'emergency',
      title: 'Urgence Humanitaire',
      description: 'Coordination d\'urgence 24/7',
      icon: 'AlertTriangle',
      color: 'conversion',
      details: {
        email: 'urgence@amjhub.org',
        phone: '+33 1 42 86 17 32',
        hours: '24h/24 - 7j/7'
      }
    }
  ];

  const getColorClasses = (color, isActive) => {
    const colorMap = {
      primary: isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20',
      secondary: isActive ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary hover:bg-secondary/20',
      accent: isActive ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent hover:bg-accent/20',
      trust: isActive ? 'bg-trust text-white' : 'bg-trust/10 text-trust hover:bg-trust/20',
      conversion: isActive ? 'bg-conversion text-white' : 'bg-conversion/10 text-conversion hover:bg-conversion/20'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const activeMethodData = contactMethods?.find(method => method?.id === activeMethod);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Comment nous contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez le canal de communication qui correspond le mieux à votre besoin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods Grid */}
          <div className="space-y-4">
            {contactMethods?.map((method) => (
              <div
                key={method?.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeMethod === method?.id
                    ? 'border-primary shadow-soft'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setActiveMethod(method?.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    getColorClasses(method?.color, activeMethod === method?.id)
                  }`}>
                    <Icon 
                      name={method?.icon} 
                      size={24} 
                      color={activeMethod === method?.id ? 'white' : 'currentColor'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {method?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {method?.description}
                    </p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    activeMethod === method?.id
                      ? 'border-primary bg-primary' :'border-border'
                  }`}>
                    {activeMethod === method?.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Method Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  getColorClasses(activeMethodData?.color, true)
                }`}>
                  <Icon name={activeMethodData?.icon} size={28} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {activeMethodData?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeMethodData?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{activeMethodData?.details?.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="font-medium text-foreground">{activeMethodData?.details?.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Horaires</p>
                    <p className="font-medium text-foreground">{activeMethodData?.details?.hours}</p>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="default"
                    iconName="Mail"
                    iconPosition="left"
                    className="flex-1"
                    onClick={() => window.location.href = `mailto:${activeMethodData?.details?.email}`}
                  >
                    Envoyer un email
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Phone"
                    iconPosition="left"
                    className="flex-1"
                    onClick={() => window.location.href = `tel:${activeMethodData?.details?.phone}`}
                  >
                    Appeler
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
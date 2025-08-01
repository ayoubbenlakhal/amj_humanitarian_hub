import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-soft">
              <Icon name="MessageCircle" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Connectons-nous
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Votre voix compte dans notre mission humanitaire. Que vous souhaitiez nous rejoindre, 
            collaborer ou simplement en savoir plus, nous sommes là pour vous écouter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={16} className="text-secondary" />
              <span>Support multilingue</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-accent" />
              <span>Données sécurisées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
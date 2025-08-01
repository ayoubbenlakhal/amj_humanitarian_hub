import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroStories = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Jeunesse en Action, Impact Sans Frontières",
      subtitle: "Transformons ensemble les communautés à travers l\'engagement des jeunes",
      description: "Rejoignez un mouvement de jeunes passionnés qui créent un impact humanitaire durable dans le monde entier.",
      volunteer: "Sarah, 24 ans - Coordinatrice Projet Éducation"
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
      title: "L\'Éducation Change Tout",
      subtitle: "Construire l\'avenir à travers l\'apprentissage",
      description: "Nos programmes éducatifs touchent plus de 2,500 enfants dans 15 communautés rurales.",
      volunteer: "Ahmed, 26 ans - Responsable Formation"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Santé pour Tous",
      subtitle: "Accès aux soins de base dans les zones reculées",
      description: "Nos cliniques mobiles ont fourni des soins médicaux à plus de 8,000 personnes cette année.",
      volunteer: "Marie, 23 ans - Infirmière Volontaire"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroStories?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroStories?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroStories?.length) % heroStories?.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroStories?.map((story, index) => (
          <div
            key={story?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
            <Image
              src={story?.image}
              alt={story?.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Icon name="Heart" size={20} className="text-primary" />
                <span className="text-sm font-medium">AMJ Humanitarian Hub</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                {heroStories?.[currentSlide]?.title}
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-medium text-white/90">
                {heroStories?.[currentSlide]?.subtitle}
              </h2>
              
              <p className="text-lg text-white/80 max-w-2xl">
                {heroStories?.[currentSlide]?.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Rejoindre le Mouvement
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Découvrir nos Projets
              </Button>
            </div>

            {/* Volunteer Attribution */}
            <div className="flex items-center space-x-3 text-white/70">
              <Icon name="User" size={16} />
              <span className="text-sm">{heroStories?.[currentSlide]?.volunteer}</span>
            </div>
          </div>

          {/* Right Content - Impact Stats */}
          <div className="lg:justify-self-end">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Impact en Temps Réel
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">12,847</div>
                  <div className="text-sm text-muted-foreground">Vies Touchées</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">47</div>
                    <div className="text-xs text-muted-foreground">Projets Actifs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">234</div>
                    <div className="text-xs text-muted-foreground">Volontaires</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Objectif 2024</span>
                    <span className="font-medium text-foreground">15,000 vies</span>
                  </div>
                  <div className="mt-2 bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">85% atteint</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {heroStories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 z-30">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs mb-2 rotate-90 origin-center">Scroll</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
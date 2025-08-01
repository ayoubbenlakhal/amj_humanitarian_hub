import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VolunteerSpotlight = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const volunteerTestimonials = [
    {
      id: 1,
      name: "Aminata Diallo",
      age: 24,
      role: "Coordinatrice Éducation",
      location: "Conakry, Guinée",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      quote: `Rejoindre AMJ a transformé ma vision de l'engagement humanitaire. Ici, nous ne sommes pas seulement des volontaires, nous sommes des agents de changement. Chaque projet nous permet d'apprendre, de grandir et surtout de voir l'impact direct de nos actions sur les communautés.`,
      impact: "480 enfants formés",
      duration: "2 ans",
      projects: 8,
      specialty: "Éducation numérique",
      achievement: "Mise en place de 12 centres d\'apprentissage"
    },
    {
      id: 2,
      name: "Ibrahim Konaté",
      age: 27,
      role: "Responsable Santé Mobile",
      location: "Bamako, Mali",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      quote: `Ce qui me passionne chez AMJ, c'est notre approche innovante. Nous utilisons la technologie et les réseaux sociaux pour maximiser notre impact. Nos cliniques mobiles ont révolutionné l'accès aux soins dans les zones reculées.`,
      impact: "2,150 patients soignés",
      duration: "3 ans",
      projects: 12,
      specialty: "Santé communautaire",
      achievement: "Déploiement de 5 cliniques mobiles"
    },
    {
      id: 3,
      name: "Fatou Sow",
      age: 22,
      role: "Animatrice Communautaire",
      location: "Dakar, Sénégal",
      avatar: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      quote: `AMJ m'a donné l'opportunité de développer mes compétences en leadership tout en servant ma communauté. L'énergie de notre équipe jeune et dynamique est contagieuse. Nous créons vraiment un mouvement de changement positif.`,
      impact: "200 femmes formées",
      duration: "1.5 ans",
      projects: 5,
      specialty: "Autonomisation féminine",
      achievement: "Création de 15 coopératives"
    },
    {
      id: 4,
      name: "Moussa Traoré",
      age: 26,
      role: "Chef de Projet Environnement",
      location: "Ouagadougou, Burkina Faso",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      quote: `Travailler avec AMJ, c'est faire partie d'une famille unie par une vision commune. Nos projets environnementaux ne se contentent pas de planter des arbres, nous éduquons les communautés sur la durabilité et le changement climatique.`,
      impact: "5,000 arbres plantés",
      duration: "2.5 ans",
      projects: 10,
      specialty: "Développement durable",
      achievement: "Sensibilisation de 50 villages"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % volunteerTestimonials?.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [volunteerTestimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % volunteerTestimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + volunteerTestimonials?.length) % volunteerTestimonials?.length);
  };

  const currentVolunteer = volunteerTestimonials?.[currentTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2 mb-4">
            <Icon name="Users" size={20} className="text-secondary" />
            <span className="text-secondary font-medium">Témoignages</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Nos Volontaires Témoignent
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les histoires inspirantes de nos volontaires qui transforment des vies et créent un impact durable
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image & Basic Info */}
              <div className="relative bg-gradient-to-br from-primary to-secondary p-8 text-white">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src={currentVolunteer?.avatar}
                      alt={currentVolunteer?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {currentVolunteer?.name}
                  </h3>
                  
                  <p className="text-white/90 mb-1">
                    {currentVolunteer?.role}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-white/80 mb-6">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">{currentVolunteer?.location}</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">{currentVolunteer?.projects}</div>
                      <div className="text-xs text-white/80">Projets</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{currentVolunteer?.duration}</div>
                      <div className="text-xs text-white/80">Expérience</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Icon name="Quote" size={48} />
                </div>
              </div>

              {/* Right Side - Testimonial Content */}
              <div className="p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {currentVolunteer?.specialty}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentVolunteer?.age} ans
                      </div>
                    </div>

                    <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                      "{currentVolunteer?.quote}"
                    </blockquote>

                    {/* Impact Metrics */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Target" size={16} className="text-primary" />
                          <span className="text-sm font-medium">Impact Direct</span>
                        </div>
                        <span className="text-sm font-bold text-primary">
                          {currentVolunteer?.impact}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Award" size={16} className="text-secondary" />
                          <span className="text-sm font-medium">Réalisation Clé</span>
                        </div>
                        <span className="text-sm font-bold text-secondary">
                          {currentVolunteer?.achievement}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {volunteerTestimonials?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial 
                              ? 'bg-primary' :'bg-muted hover:bg-muted-foreground/20'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 bg-muted hover:bg-muted-foreground/10 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <Icon name="ChevronLeft" size={16} />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 bg-muted hover:bg-muted-foreground/10 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <Icon name="ChevronRight" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Volunteers Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-heading font-semibold text-center text-foreground mb-8">
            Rejoignez Notre Équipe de Volontaires
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerTestimonials?.map((volunteer, index) => (
              <div
                key={volunteer?.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'scale-105' :'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="bg-white rounded-xl p-4 shadow-card hover:shadow-soft transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                      <Image
                        src={volunteer?.avatar}
                        alt={volunteer?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {volunteer?.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {volunteer?.role}
                    </p>
                    <div className="text-xs text-primary font-medium">
                      {volunteer?.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Devenez Volontaire AMJ
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez une communauté de jeunes passionnés qui transforment le monde, un projet à la fois
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-connect"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="UserPlus" size={18} />
                <span>Rejoindre l'Équipe</span>
              </a>
              <a
                href="/community-stories"
                className="border border-border hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="Users" size={18} />
                <span>Voir Plus de Témoignages</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSpotlight;
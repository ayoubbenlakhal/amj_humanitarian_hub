import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OriginStory = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const storyChapters = [
    {
      id: 0,
      title: "L\'Étincelle Initiale",
      year: "2019",
      content: `Tout a commencé par une simple observation : les jeunes étaient passionnés par le changement social mais se sentaient exclus des organisations humanitaires traditionnelles.\n\nNotre fondatrice, Marie Dubois, alors étudiante en relations internationales, a organisé sa première collecte de fonds pour les réfugiés syriens depuis sa chambre universitaire.`,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Lightbulb"
    },
    {
      id: 1,
      title: "Le Premier Projet",
      year: "2020",
      content: `Malgré la pandémie, notre équipe de 5 étudiants a lancé "Solidarité Numérique" - un programme d'aide aux personnes âgées isolées.\n\nEn 6 mois, nous avons connecté 200 seniors avec des jeunes bénévoles, créant des liens intergénérationnels durables.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Rocket"
    },
    {
      id: 2,
      title: "L\'Expansion Internationale",
      year: "2021",
      content: `Notre approche innovante a attiré l'attention de jeunes du monde entier. Des chapitres AMJ ont vu le jour au Sénégal, au Maroc, et au Canada.\n\nChaque région a adapté notre modèle à ses réalités locales, créant un réseau global d'impact local.`,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Globe"
    },
    {
      id: 3,
      title: "La Reconnaissance",
      year: "2022-2024",
      content: `AMJ a reçu le Prix de l'Innovation Humanitaire de l'UNESCO et est devenue partenaire officielle de plusieurs ONG internationales.\n\nAujourd'hui, nous sommes fiers de compter plus de 500 jeunes actifs dans 15 pays, avec un impact direct sur plus de 15 000 bénéficiaires.`,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Award"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="BookOpen" size={16} />
            <span>Notre Histoire</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            L'Histoire d'une
            <span className="text-gradient"> Révolution</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            De l'idée d'une étudiante à un mouvement international, découvrez comment AMJ a transformé l'engagement humanitaire des jeunes en seulement 5 ans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Chapitres de Notre Évolution</h3>
            
            {storyChapters?.map((chapter, index) => (
              <div
                key={chapter?.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeChapter === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveChapter(index)}
              >
                <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeChapter === index 
                    ? 'border-primary bg-primary/5 shadow-soft' 
                    : 'border-border bg-background hover:border-primary/50'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      activeChapter === index 
                        ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={chapter?.icon} size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          activeChapter === index ? 'text-primary' : 'text-foreground'
                        }`}>
                          {chapter?.title}
                        </h4>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                          {chapter?.year}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {chapter?.content?.split('\n')?.[0]}
                      </p>
                    </div>
                    
                    <Icon 
                      name={activeChapter === index ? "ChevronDown" : "ChevronRight"} 
                      size={20} 
                      className={`transition-colors duration-300 ${
                        activeChapter === index ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < storyChapters?.length - 1 && (
                  <div className="absolute left-9 top-full w-0.5 h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-background rounded-2xl shadow-soft overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={storyChapters?.[activeChapter]?.image}
                  alt={storyChapters?.[activeChapter]?.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name={storyChapters?.[activeChapter]?.icon} size={20} color="white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{storyChapters?.[activeChapter]?.title}</h3>
                      <p className="text-white/80 text-sm">{storyChapters?.[activeChapter]?.year}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {storyChapters?.[activeChapter]?.content?.split('\n')?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Chapitre {activeChapter + 1} sur {storyChapters?.length}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ChevronLeft"
                        iconPosition="left"
                        disabled={activeChapter === 0}
                        onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                      >
                        Précédent
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ChevronRight"
                        iconPosition="right"
                        disabled={activeChapter === storyChapters?.length - 1}
                        onClick={() => setActiveChapter(Math.min(storyChapters?.length - 1, activeChapter + 1))}
                      >
                        Suivant
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
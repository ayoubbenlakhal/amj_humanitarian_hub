import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ValuesInAction = () => {
  const [activeValue, setActiveValue] = useState(0);

  const coreValues = [
    {
      id: 0,
      title: "Authenticité",
      subtitle: "Être Vrais, Être Nous",
      icon: "Heart",
      color: "primary",
      description: "Nous croyons en la puissance de l'authenticité. Pas de façade, pas de discours creux - juste des jeunes passionnés qui agissent avec sincérité.",
      principles: [
        "Transparence totale dans nos actions",
        "Communication honnête sur nos défis",
        "Reconnaissance de nos erreurs et apprentissages"
      ],
      projectExample: {
        title: "Projet Transparence 360°",
        description: "Nous publions tous nos rapports financiers, nos échecs et nos succès sur notre plateforme ouverte.",
        impact: "100% de transparence financière",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      testimonial: {
        quote: "AMJ ne nous vend pas de rêves, ils nous montrent la réalité du terrain avec ses hauts et ses bas. C'est ça qui m'a convaincue de les rejoindre.",
        author: "Léa Martin",
        role: "Bénévole depuis 2022"
      }
    },
    {
      id: 1,
      title: "Innovation",
      subtitle: "Réinventer l\'Humanitaire",
      icon: "Lightbulb",
      color: "secondary",
      description: "Nous refusons le \'on a toujours fait comme ça\'. Chaque défi est une opportunité d\'innover et de créer des solutions adaptées à notre époque.",
      principles: [
        "Adoption des nouvelles technologies",
        "Méthodes agiles et itératives",
        "Co-création avec les bénéficiaires"
      ],
      projectExample: {
        title: "AMJ Connect - IA pour l\'Humanitaire",
        description: "Notre plateforme utilise l\'IA pour matcher bénévoles et projets selon les compétences et disponibilités.",
        impact: "85% de matching réussi",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      testimonial: {
        quote: "Grâce à l'app AMJ, j'ai trouvé le projet parfait qui correspond exactement à mes compétences en développement web.",
        author: "Thomas Chen",
        role: "Développeur bénévole"
      }
    },
    {
      id: 2,
      title: "Inclusion",
      subtitle: "Tous Unis, Tous Différents",
      icon: "Users",
      color: "accent",
      description: "Notre force réside dans notre diversité. Nous célébrons toutes les différences et créons un espace où chacun peut contribuer selon ses moyens.",
      principles: [
        "Égalité des chances pour tous",
        "Valorisation de la diversité culturelle",
        "Accessibilité universelle de nos programmes"
      ],
      projectExample: {
        title: "Programme Voix Plurielles",
        description: "Initiative dédiée à l\'inclusion des jeunes en situation de handicap dans nos projets humanitaires.",
        impact: "200+ jeunes inclus",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      testimonial: {
        quote: "AMJ m'a donné l'opportunité de contribuer malgré mon handicap visuel. Ils ont adapté tous leurs outils pour que je puisse participer pleinement.",
        author: "Sarah Benali",
        role: "Coordinatrice régionale"
      }
    },
    {
      id: 3,
      title: "Impact Durable",
      subtitle: "Changer pour Longtemps",
      icon: "Target",
      color: "success",
      description: "Nous ne faisons pas de l\'humanitaire \'pansement\'. Chaque action vise un changement structurel et durable dans les communautés.",
      principles: [
        "Solutions pérennes et autonomes",
        "Transfert de compétences aux communautés",
        "Mesure d\'impact à long terme"
      ],
      projectExample: {
        title: "Écoles Autonomes du Sahel",
        description: "Formation d'enseignants locaux et création d'un système éducatif autonome dans 12 villages.",
        impact: "2000+ enfants scolarisés durablement",
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      testimonial: {
        quote: "Trois ans après le départ d'AMJ, notre école fonctionne toujours parfaitement. Ils nous ont vraiment rendus autonomes.",
        author: "Ibrahim Kone",
        role: "Directeur d'école, Mali"
      }
    },
    {
      id: 4,
      title: "Collaboration",
      subtitle: "Ensemble, Plus Forts",
      icon: "Handshake",
      color: "trust",
      description: "Nous croyons au pouvoir du collectif. Nos plus grands succès naissent de la collaboration entre jeunes, communautés et partenaires.",
      principles: [
        "Co-construction avec les bénéficiaires",
        "Partenariats stratégiques durables",
        "Partage de connaissances et ressources"
      ],
      projectExample: {
        title: "Alliance Jeunesse Méditerranée",
        description: "Réseau de 15 organisations jeunesse méditerranéennes pour des projets transfrontaliers.",
        impact: "50+ projets collaboratifs",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      testimonial: {
        quote: "Grâce à AMJ, nous avons créé un réseau méditerranéen qui nous permet de partager nos expériences et de grandir ensemble.",
        author: "Elena Rossi",
        role: "Partenaire italien"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Compass" size={16} />
            <span>Nos Valeurs</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Nos Valeurs en
            <span className="text-gradient"> Action</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nos valeurs ne sont pas des mots sur un mur. Elles guident chacune de nos actions et se concrétisent dans des projets réels qui transforment des vies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Values Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4 lg:sticky lg:top-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Nos 5 Piliers Fondamentaux</h3>
              
              {coreValues?.map((value, index) => (
                <div
                  key={value?.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeValue === index ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeValue === index 
                      ? `border-${value?.color} bg-${value?.color}/5 shadow-soft` 
                      : 'border-border bg-background hover:border-primary/50'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        activeValue === index 
                          ? `bg-${value?.color} text-white` 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={value?.icon} size={20} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          activeValue === index ? `text-${value?.color}` : 'text-foreground'
                        }`}>
                          {value?.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{value?.subtitle}</p>
                      </div>
                      
                      <Icon 
                        name={activeValue === index ? "ChevronDown" : "ChevronRight"} 
                        size={20} 
                        className={`transition-colors duration-300 ${
                          activeValue === index ? `text-${value?.color}` : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Content */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-2xl shadow-soft overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r from-${coreValues?.[activeValue]?.color}/10 to-${coreValues?.[activeValue]?.color}/5 p-8`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-${coreValues?.[activeValue]?.color} rounded-full flex items-center justify-center`}>
                    <Icon name={coreValues?.[activeValue]?.icon} size={28} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{coreValues?.[activeValue]?.title}</h3>
                    <p className={`text-${coreValues?.[activeValue]?.color} font-medium`}>{coreValues?.[activeValue]?.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {coreValues?.[activeValue]?.description}
                </p>
              </div>

              {/* Principles */}
              <div className="p-8 border-b border-border">
                <h4 className="font-semibold text-foreground mb-4">Nos Principes d'Action</h4>
                <div className="space-y-3">
                  {coreValues?.[activeValue]?.principles?.map((principle, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className={`text-${coreValues?.[activeValue]?.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-muted-foreground">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Example */}
              <div className="p-8 border-b border-border">
                <h4 className="font-semibold text-foreground mb-4">Exemple Concret</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <Image
                        src={coreValues?.[activeValue]?.projectExample?.image}
                        alt={coreValues?.[activeValue]?.projectExample?.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="absolute top-4 right-4">
                        <div className={`bg-${coreValues?.[activeValue]?.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {coreValues?.[activeValue]?.projectExample?.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">
                      {coreValues?.[activeValue]?.projectExample?.title}
                    </h5>
                    <p className="text-muted-foreground mb-4">
                      {coreValues?.[activeValue]?.projectExample?.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                      className={`border-${coreValues?.[activeValue]?.color} text-${coreValues?.[activeValue]?.color} hover:bg-${coreValues?.[activeValue]?.color} hover:text-white`}
                    >
                      Voir le Projet
                    </Button>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-8">
                <h4 className="font-semibold text-foreground mb-4">Témoignage</h4>
                
                <div className={`bg-${coreValues?.[activeValue]?.color}/5 rounded-xl p-6`}>
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={24} className={`text-${coreValues?.[activeValue]?.color} flex-shrink-0`} />
                    <div>
                      <blockquote className="text-foreground italic mb-4">
                        "{coreValues?.[activeValue]?.testimonial?.quote}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-${coreValues?.[activeValue]?.color} rounded-full flex items-center justify-center`}>
                          <Icon name="User" size={16} color="white" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {coreValues?.[activeValue]?.testimonial?.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {coreValues?.[activeValue]?.testimonial?.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Partagez-vous Nos Valeurs ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si ces valeurs résonnent en vous, rejoignez notre mouvement et aidez-nous à révolutionner l'action humanitaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Heart"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Rejoindre le Mouvement
              </Button>
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Télécharger notre Charte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesInAction;
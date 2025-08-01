import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImpactPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophyPillars = [
    {
      id: 0,
      title: "Humanitaire 3.0",
      subtitle: "L\'Ère Digitale au Service de l\'Humain",
      icon: "Smartphone",
      description: "Nous révolutionnons l\'action humanitaire en intégrant les technologies émergentes tout en gardant l\'humain au centre de nos préoccupations.",
      keyPoints: [
        "Intelligence artificielle pour optimiser l'aide",
        "Blockchain pour la transparence financière",
        "Réalité virtuelle pour sensibiliser",
        "Applications mobiles pour connecter les communautés"
      ],
      comparison: {
        traditional: [
          "Processus bureaucratiques longs",
          "Communication unidirectionnelle",
          "Approche top-down",
          "Mesure d\'impact limitée"
        ],
        amj: [
          "Réactivité en temps réel",
          "Dialogue permanent avec les bénéficiaires",
          "Co-création communautaire",
          "Données d\'impact en continu"
        ]
      },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 1,
      title: "Jeunesse Actrice",
      subtitle: "Les Jeunes comme Moteurs du Changement",
      icon: "Users",
      description: "Nous croyons que les jeunes ne sont pas les leaders de demain, mais les acteurs du changement d'aujourd'hui. Notre approche leur donne les clés pour agir maintenant.",
      keyPoints: [
        "Formation au leadership dès 16 ans",
        "Autonomie dans la gestion de projets",
        "Mentorat par les pairs",
        "Reconnaissance des compétences acquises"
      ],
      comparison: {
        traditional: [
          "Jeunes considérés comme bénéficiaires",
          "Participation limitée aux décisions",
          "Formation théorique uniquement",
          "Attente de la maturité pour agir"
        ],
        amj: [
          "Jeunes leaders de leurs projets",
          "Participation active aux décisions stratégiques",
          "Apprentissage par l\'action",
          "Responsabilisation immédiate"
        ]
      },
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Impact Systémique",
      subtitle: "Changer les Causes, Pas Seulement les Symptômes",
      icon: "Target",
      description: "Notre approche vise à transformer les systèmes qui créent les problèmes plutôt que de simplement traiter leurs conséquences.",
      keyPoints: [
        "Analyse des causes profondes",
        "Solutions structurelles durables",
        "Partenariats avec les décideurs",
        "Plaidoyer pour le changement politique"
      ],
      comparison: {
        traditional: [
          "Aide d\'urgence ponctuelle",
          "Traitement des symptômes",
          "Dépendance aux dons",
          "Impact temporaire"
        ],
        amj: [
          "Prévention et transformation",
          "Résolution des causes racines",
          "Autonomisation des communautés",
          "Changement durable"
        ]
      },
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Réseau Global, Action Locale",
      subtitle: "Penser Mondial, Agir Local",
      icon: "Globe",
      description: "Notre force réside dans notre capacité à connecter des initiatives locales au sein d'un réseau global, créant des synergies et des apprentissages croisés.",
      keyPoints: [
        "Adaptation culturelle des solutions",
        "Échange d\'expériences entre régions",
        "Mutualisation des ressources",
        "Standards globaux, mise en œuvre locale"
      ],
      comparison: {
        traditional: [
          "Approche standardisée universelle",
          "Silos organisationnels",
          "Duplication des efforts",
          "Peu d\'échange entre projets"
        ],
        amj: [
          "Solutions adaptées aux contextes",
          "Réseau collaboratif ouvert",
          "Optimisation des ressources",
          "Apprentissage collectif permanent"
        ]
      },
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const impactMetrics = [
    {
      number: "15K+",
      label: "Vies Transformées",
      description: "Bénéficiaires directs de nos programmes",
      icon: "Heart"
    },
    {
      number: "500+",
      label: "Jeunes Leaders",
      description: "Formés et actifs dans notre réseau",
      icon: "Users"
    },
    {
      number: "25",
      label: "Projets Systémiques",
      description: "Initiatives de transformation structurelle",
      icon: "Target"
    },
    {
      number: "15",
      label: "Pays Connectés",
      description: "Réseau international d\'action locale",
      icon: "Globe"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Compass" size={16} />
            <span>Notre Philosophie</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Révolutionner l'
            <span className="text-gradient">Impact Humanitaire</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre approche unique transforme l'action humanitaire traditionnelle en un mouvement dynamique, technologique et centré sur l'autonomisation des communautés.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics?.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-soft transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric?.number}</div>
              <div className="font-semibold text-foreground mb-1">{metric?.label}</div>
              <div className="text-sm text-muted-foreground">{metric?.description}</div>
            </div>
          ))}
        </div>

        {/* Philosophy Navigation */}
        <div className="grid lg:grid-cols-4 gap-4 mb-12">
          {philosophyPillars?.map((pillar, index) => (
            <div
              key={pillar?.id}
              className={`cursor-pointer transition-all duration-300 ${
                activePhilosophy === index ? 'transform scale-105' : ''
              }`}
              onClick={() => setActivePhilosophy(index)}
            >
              <div className={`p-6 rounded-xl border-2 text-center transition-all duration-300 ${
                activePhilosophy === index 
                  ? 'border-primary bg-primary/5 shadow-soft' 
                  : 'border-border bg-card hover:border-primary/50'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                  activePhilosophy === index 
                    ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={pillar?.icon} size={24} />
                </div>
                
                <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                  activePhilosophy === index ? 'text-primary' : 'text-foreground'
                }`}>
                  {pillar?.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">{pillar?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Content */}
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={philosophyPillars?.[activePhilosophy]?.icon} size={28} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{philosophyPillars?.[activePhilosophy]?.title}</h3>
                  <p className="text-primary font-medium">{philosophyPillars?.[activePhilosophy]?.subtitle}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {philosophyPillars?.[activePhilosophy]?.description}
              </p>

              <h4 className="font-semibold text-foreground mb-4">Points Clés de Notre Approche</h4>
              <div className="space-y-3 mb-8">
                {philosophyPillars?.[activePhilosophy]?.keyPoints?.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="default"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Voir nos Projets
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src={philosophyPillars?.[activePhilosophy]?.image}
                alt={philosophyPillars?.[activePhilosophy]?.title}
                className="w-full h-full object-cover lg:min-h-[500px]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-semibold text-foreground mb-2">Impact Concret</h5>
                  <p className="text-sm text-muted-foreground">
                    Cette approche nous a permis de créer un impact durable dans {philosophyPillars?.[activePhilosophy]?.keyPoints?.length} domaines clés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            AMJ vs Approche Traditionnelle
          </h3>
          
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Traditional Approach */}
              <div className="p-8 border-r border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Icon name="Building" size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Approche Traditionnelle</h4>
                    <p className="text-sm text-muted-foreground">Méthodes classiques</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {philosophyPillars?.[activePhilosophy]?.comparison?.traditional?.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AMJ Approach */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Rocket" size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Approche AMJ</h4>
                    <p className="text-sm text-primary">Innovation humanitaire</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {philosophyPillars?.[activePhilosophy]?.comparison?.amj?.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Prêt à Révolutionner l'Humanitaire ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Rejoignez notre mouvement et découvrez comment votre engagement peut créer un impact systémique et durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Rocket"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Découvrir nos Projets
              </Button>
              <Button
                variant="outline"
                iconName="FileText"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Lire notre Manifeste
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPhilosophy;
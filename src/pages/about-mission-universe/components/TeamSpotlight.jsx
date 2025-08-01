import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamSpotlight = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Fondatrice & Directrice Exécutive",
      location: "Paris, France",
      age: 26,
      joinedYear: 2019,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: `Diplômée en Relations Internationales de Sciences Po Paris, Marie a fondé AMJ à 21 ans avec la conviction que les jeunes peuvent révolutionner l'action humanitaire.\n\nSon approche innovante combine activisme digital et impact terrain, créant un modèle unique d'engagement jeunesse.`,
      expertise: ["Leadership", "Stratégie", "Relations Internationales"],
      languages: ["Français", "Anglais", "Espagnol"],
      achievements: [
        "Prix UNESCO Innovation Humanitaire 2023",
        "Forbes 30 Under 30 Social Impact 2022",
        "Conférencière TEDx sur l\'engagement jeunesse"
      ],
      socialLinks: {
        linkedin: "marie-dubois-amj",
        twitter: "@marie_amj",
        instagram: "@marie.amj"
      }
    },
    {
      id: 2,
      name: "Amadou Diallo",
      role: "Directeur Afrique de l\'Ouest",
      location: "Dakar, Sénégal",
      age: 24,
      joinedYear: 2020,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: `Ingénieur informatique passionné par le développement communautaire, Amadou a rejoint AMJ pour créer des solutions technologiques adaptées aux réalités africaines.\n\nIl dirige aujourd'hui nos programmes d'éducation numérique dans 8 pays d'Afrique de l'Ouest.`,
      expertise: ["Technologie", "Développement Communautaire", "Éducation"],
      languages: ["Français", "Wolof", "Anglais", "Arabe"],
      achievements: [
        "Création de 15 centres numériques communautaires",
        "Formation de 500+ jeunes aux métiers du digital",
        "Partenariat avec l\'Union Africaine"
      ],
      socialLinks: {
        linkedin: "amadou-diallo-tech",
        twitter: "@amadou_amj",
        instagram: "@amadou.amj"
      }
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      role: "Coordinatrice Amérique Latine",
      location: "Mexico City, Mexique",
      age: 25,
      joinedYear: 2021,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: `Psychologue sociale spécialisée dans l'intervention communautaire, Sofia a développé notre approche unique de soutien psychosocial pour les communautés vulnérables.\n\nElle coordonne nos programmes de résilience communautaire dans 6 pays d'Amérique Latine.`,
      expertise: ["Psychologie Sociale", "Intervention Communautaire", "Résilience"],
      languages: ["Espagnol", "Anglais", "Français", "Portugais"],
      achievements: [
        "Développement du programme \'Resilient Communities'",
        "Formation de 200+ intervenants communautaires",
        "Recherche publiée sur la résilience jeunesse"
      ],
      socialLinks: {
        linkedin: "sofia-rodriguez-psych",
        twitter: "@sofia_amj",
        instagram: "@sofia.amj"
      }
    },
    {
      id: 4,
      name: "Yuki Tanaka",
      role: "Directrice Innovation & Technologie",
      location: "Tokyo, Japon",
      age: 23,
      joinedYear: 2022,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: `Développeuse full-stack et experte en IA, Yuki révolutionne notre approche technologique avec des solutions innovantes pour maximiser notre impact humanitaire.\n\nElle dirige le développement de notre plateforme de matching bénévoles-projets alimentée par l'IA.`,
      expertise: ["Intelligence Artificielle", "Développement Web", "Innovation"],
      languages: ["Japonais", "Anglais", "Français"],
      achievements: [
        "Création de l'app AMJ Connect (50K+ utilisateurs)","Système IA de matching bénévoles-projets","Hackathon for Good - 1ère place 2023"
      ],
      socialLinks: {
        linkedin: "yuki-tanaka-dev",twitter: "@yuki_amj",instagram: "@yuki.amj"
      }
    },
    {
      id: 5,
      name: "Omar Hassan",role: "Coordinateur Moyen-Orient & Afrique du Nord",location: "Casablanca, Maroc",age: 27,joinedYear: 2020,image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: `Spécialiste en développement durable et ancien consultant en RSE, Omar apporte son expertise en gestion de projets complexes dans des environnements multiculturels.\n\nIl supervise nos initiatives d'entrepreneuriat social dans la région MENA.`,
      expertise: ["Développement Durable", "Entrepreneuriat Social", "Gestion de Projets"],
      languages: ["Arabe", "Français", "Anglais", "Berbère"],
      achievements: [
        "Lancement de 25 entreprises sociales","Programme de microfinance pour 300+ jeunes","Partenariat avec la Ligue Arabe"
      ],
      socialLinks: {
        linkedin: "omar-hassan-sustainability",twitter: "@omar_amj",instagram: "@omar.amj"
      }
    },
    {
      id: 6,
      name: "Emma Thompson",role: "Directrice Communication & Plaidoyer",location: "Londres, Royaume-Uni",age: 24,joinedYear: 2021,image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: `Journaliste de formation et experte en communication digitale, Emma transforme nos histoires d'impact en campagnes virales qui sensibilisent et mobilisent.\n\nElle dirige notre stratégie de plaidoyer auprès des institutions européennes et internationales.`,
      expertise: ["Communication Digitale", "Plaidoyer", "Storytelling"],
      languages: ["Anglais", "Français", "Allemand"],
      achievements: [
        "Campagne #YouthForChange - 2M+ vues","Intervention au Parlement Européen","Prix du Meilleur Storytelling Humanitaire 2023"
      ],
      socialLinks: {
        linkedin: "emma-thompson-comms",twitter: "@emma_amj",instagram: "@emma.amj"
      }
    }
  ];

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Notre Équipe</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Les Visages de
            <span className="text-gradient"> l'Innovation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rencontrez les jeunes leaders qui révolutionnent l'action humanitaire à travers le monde. Chacun apporte sa passion, son expertise et sa vision unique pour créer un impact durable.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="group bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => openMemberModal(member)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} color="white" />
                    <span className="text-white text-sm">{member?.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member?.name}</h3>
                    <p className="text-primary font-medium text-sm">{member?.role}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Âge</div>
                    <div className="text-sm font-medium text-foreground">{member?.age} ans</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member?.expertise?.slice(0, 2)?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member?.expertise?.length > 2 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      +{member?.expertise?.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <Icon name="Calendar" size={14} />
                    <span>Depuis {member?.joinedYear}</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Voir Plus
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Rejoignez Notre Équipe Internationale
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nous recherchons constamment de jeunes talents passionnés pour rejoindre notre mouvement et créer un impact positif dans le monde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="UserPlus"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Postuler Maintenant
              </Button>
              <Button
                variant="outline"
                iconName="Mail"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-2xl shadow-soft max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedMember?.image}
                  alt={selectedMember?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMemberModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Icon name="X" size={20} />
              </Button>
              
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedMember?.name}</h3>
                <p className="text-white/90">{selectedMember?.role}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Informations</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span>{selectedMember?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span>Membre depuis {selectedMember?.joinedYear}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} className="text-muted-foreground" />
                      <span>{selectedMember?.age} ans</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Langues</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.languages?.map((language, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Biographie</h4>
                <div className="prose prose-sm max-w-none">
                  {selectedMember?.bio?.split('\n')?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Domaines d'Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember?.expertise?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Réalisations Clés</h4>
                <ul className="space-y-2">
                  {selectedMember?.achievements?.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Linkedin"
                    iconPosition="left"
                    className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Twitter"
                    iconPosition="left"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    Twitter
                  </Button>
                </div>
                
                <Button
                  variant="default"
                  size="sm"
                  iconName="Mail"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSpotlight;
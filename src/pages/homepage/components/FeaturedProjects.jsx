import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Éducation Numérique Rurale",
      category: "Éducation",
      location: "Guinée, Région de Labé",
      description: "Équipement de 12 écoles rurales avec des tablettes et formation des enseignants aux outils numériques pour améliorer la qualité de l\'enseignement.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      beforeImage: "https://images.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg",
      afterImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 78,
      raised: 15420,
      goal: 20000,
      beneficiaries: 480,
      volunteers: 12,
      status: "En cours",
      urgency: "high",
      tags: ["Éducation", "Technologie", "Jeunesse"]
    },
    {
      id: 2,
      title: "Cliniques Mobiles de Santé",
      category: "Santé",
      location: "Mali, Région de Kayes",
      description: "Déploiement de cliniques mobiles pour fournir des soins de base et des vaccinations dans les zones reculées difficiles d'accès.",
      image: "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      beforeImage: "https://images.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_1280.jpg",
      afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 92,
      raised: 27600,
      goal: 30000,
      beneficiaries: 2150,
      volunteers: 18,
      status: "Presque terminé",
      urgency: "medium",
      tags: ["Santé", "Accès aux soins", "Mobile"]
    },
    {
      id: 3,
      title: "Autonomisation des Femmes",
      category: "Économie",
      location: "Sénégal, Région de Thiès",
      description: "Formation professionnelle en couture et artisanat pour 200 femmes, avec microcrédit pour lancer leurs propres entreprises.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.pixabay.com/photo/2016/11/29/06/15/adult-1867743_1280.jpg",
      afterImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      progress: 45,
      raised: 9000,
      goal: 20000,
      beneficiaries: 200,
      volunteers: 8,
      status: "En développement",
      urgency: "low",
      tags: ["Autonomisation", "Femmes", "Économie"]
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'from-green-500 to-green-600';
    if (progress >= 50) return 'from-yellow-500 to-yellow-600';
    return 'from-primary to-secondary';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <Icon name="FolderOpen" size={20} className="text-primary" />
            <span className="text-primary font-medium">Projets en Vedette</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Nos Initiatives Actuelles
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets qui transforment des vies et créent un impact durable dans nos communautés
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects?.map((project) => (
            <div
              key={project?.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(project?.urgency)}`}>
                    {project?.status}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project?.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">{project?.location}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {project?.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project?.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-medium text-foreground">{project?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor(project?.progress)} transition-all duration-1000`}
                      style={{ width: `${project?.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Funding Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {project?.raised?.toLocaleString()}€
                    </div>
                    <div className="text-xs text-muted-foreground">
                      sur {project?.goal?.toLocaleString()}€
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary">
                      {project?.beneficiaries}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Bénéficiaires
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{project?.volunteers} volontaires</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>Mis à jour il y a 2h</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Heart"
                    iconPosition="left"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Soutenir
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Showcase */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Transformations Réelles
            </h3>
            <p className="text-muted-foreground">
              Découvrez l'impact concret de nos interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-4">Avant nos interventions</h4>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={featuredProjects?.[0]?.beforeImage}
                  alt="Avant intervention"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Écoles sans équipement numérique, méthodes d'enseignement traditionnelles limitées
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-4">Après nos interventions</h4>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={featuredProjects?.[0]?.afterImage}
                  alt="Après intervention"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Salles de classe équipées, enseignants formés, élèves engagés dans l'apprentissage numérique
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="FolderOpen"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90 mr-4"
          >
            Voir Tous les Projets
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Plus"
            iconPosition="left"
          >
            Proposer un Projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
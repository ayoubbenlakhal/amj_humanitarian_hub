import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrustSignals = () => {
  const certifications = [
    {
      id: 1,
      name: "Association Loi 1901",
      description: "Statut officiel d'association à but non lucratif",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      year: "2019",
      authority: "Préfecture de Paris"
    },
    {
      id: 2,
      name: "Agrément Jeunesse & Sport",
      description: "Reconnaissance officielle pour l\'éducation populaire",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      year: "2021",
      authority: "Ministère des Sports"
    },
    {
      id: 3,
      name: "Label IDEAS",
      description: "Transparence et efficacité des associations",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      year: "2022",
      authority: "Comité de la Charte"
    },
    {
      id: 4,
      name: "Certification ISO 26000",
      description: "Responsabilité sociétale des organisations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      year: "2023",
      authority: "Bureau Veritas"
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: "UNESCO",
      type: "Partenaire Officiel",
      description: "Collaboration sur l\'éducation et la culture de paix",
      logo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      since: "2022"
    },
    {
      id: 2,
      name: "Croix-Rouge Française",
      type: "Partenaire Stratégique",
      description: "Programmes conjoints d\'aide humanitaire",
      logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      since: "2021"
    },
    {
      id: 3,
      name: "Union Africaine",
      type: "Partenaire Régional",
      description: "Développement de la jeunesse africaine",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      since: "2020"
    },
    {
      id: 4,
      name: "Parlement Européen",
      type: "Partenaire Institutionnel",
      description: "Plaidoyer pour les politiques jeunesse",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      since: "2023"
    },
    {
      id: 5,
      name: "Fondation de France",
      type: "Partenaire Financier",
      description: "Soutien aux projets d\'innovation sociale",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      since: "2021"
    },
    {
      id: 6,
      name: "Microsoft for Nonprofits",
      type: "Partenaire Technologique",
      description: "Solutions cloud et outils collaboratifs",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      since: "2022"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Prix UNESCO Innovation Humanitaire",
      year: "2023",
      description: "Reconnaissance de notre approche innovante de l\'engagement jeunesse",
      icon: "Award",
      color: "primary"
    },
    {
      id: 2,
      title: "Forbes 30 Under 30 Social Impact",
      year: "2022",
      description: "Notre fondatrice Marie Dubois distinguée pour son leadership",
      icon: "Star",
      color: "secondary"
    },
    {
      id: 3,
      title: "Prix Européen de la Jeunesse",
      year: "2022",
      description: "Meilleure initiative de mobilisation des jeunes en Europe",
      icon: "Trophy",
      color: "accent"
    },
    {
      id: 4,
      title: "Google.org Impact Challenge",
      year: "2021",
      description: "Lauréat pour notre plateforme de matching bénévoles-projets",
      icon: "Zap",
      color: "success"
    }
  ];

  const transparencyMetrics = [
    {
      label: "Transparence Financière",
      value: "100%",
      description: "Tous nos comptes sont publics et auditables",
      icon: "DollarSign"
    },
    {
      label: "Efficacité des Dons",
      value: "87%",
      description: "Part des dons directement allouée aux projets",
      icon: "TrendingUp"
    },
    {
      label: "Satisfaction Bénéficiaires",
      value: "94%",
      description: "Taux de satisfaction de nos bénéficiaires directs",
      icon: "Heart"
    },
    {
      label: "Rétention Bénévoles",
      value: "78%",
      description: "Bénévoles actifs après 1 an d'engagement",
      icon: "Users"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Confiance & Transparence</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Une Confiance
            <span className="text-gradient"> Méritée</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre crédibilité repose sur des certifications officielles, des partenariats stratégiques et une transparence totale dans nos actions et nos résultats.
          </p>
        </div>

        {/* Transparency Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {transparencyMetrics?.map((metric, index) => (
            <div key={index} className="bg-background rounded-xl p-6 text-center shadow-card hover:shadow-soft transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{metric?.value}</div>
              <div className="font-semibold text-foreground mb-2">{metric?.label}</div>
              <div className="text-sm text-muted-foreground">{metric?.description}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Certifications & Agréments Officiels
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="bg-background rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={cert?.image}
                    alt={cert?.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    {cert?.year}
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert?.description}</p>
                
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span>{cert?.authority}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Reconnaissances & Prix
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards?.map((award) => (
              <div key={award?.id} className="bg-background rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${award?.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon name={award?.icon} size={24} className={`text-${award?.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-foreground">{award?.title}</h4>
                      <span className={`bg-${award?.color}/10 text-${award?.color} px-2 py-1 rounded text-xs font-medium`}>
                        {award?.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{award?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Partenaires Stratégiques
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships?.map((partner) => (
              <div key={partner?.id} className="bg-background rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="relative overflow-hidden rounded-lg w-16 h-16 flex-shrink-0">
                    <Image
                      src={partner?.logo}
                      alt={partner?.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground">{partner?.name}</h4>
                      <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium">
                        {partner?.type}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{partner?.description}</p>
                    
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Icon name="Calendar" size={12} />
                      <span>Depuis {partner?.since}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Transparence Financière Totale
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous publions tous nos rapports financiers et d'activité. Chaque euro donné est tracé et son impact mesuré.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Rapports Annuels</h4>
              <p className="text-sm text-muted-foreground">Comptes détaillés et audités</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BarChart3" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Tableaux de Bord</h4>
              <p className="text-sm text-muted-foreground">Suivi en temps réel des projets</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Audits Externes</h4>
              <p className="text-sm text-muted-foreground">Contrôles indépendants réguliers</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              iconName="Download"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Télécharger nos Rapports
            </Button>
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Voir nos Comptes en Ligne
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
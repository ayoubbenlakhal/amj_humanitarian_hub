import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import ImpactChart from './ImpactChart';

const SuccessMetrics = () => {
  const [selectedMetric, setSelectedMetric] = useState('satisfaction');

  const qualitativeMetrics = {
    satisfaction: {
      title: "Satisfaction Bénéficiaires",
      data: [
        { name: 'Très Satisfait', value: 68 },
        { name: 'Satisfait', value: 24 },
        { name: 'Neutre', value: 6 },
        { name: 'Insatisfait', value: 2 }
      ],
      insights: [
        "92% de satisfaction globale sur nos programmes",
        "Amélioration de 15% par rapport à 2023",
        "Points forts: accompagnement personnalisé et suivi"
      ]
    },
    sustainability: {
      title: "Durabilité des Projets",
      data: [
        { name: 'Jan', value: 78 },
        { name: 'Fév', value: 82 },
        { name: 'Mar', value: 85 },
        { name: 'Avr', value: 88 },
        { name: 'Mai', value: 91 },
        { name: 'Juin', value: 89 }
      ],
      insights: [
        "89% des projets maintenus après 2 ans",
        "Taux de durabilité en progression constante",
        "Formation locale clé du succès à long terme"
      ]
    },
    community: {
      title: "Engagement Communautaire",
      data: [
        { name: 'Participation Active', value: 45 },
        { name: 'Participation Modérée', value: 35 },
        { name: 'Participation Faible', value: 15 },
        { name: 'Non Participation', value: 5 }
      ],
      insights: [
        "80% de participation active ou modérée",
        "Forte mobilisation des jeunes (18-35 ans)",
        "Leadership local émergent dans 70% des projets"
      ]
    }
  };

  const impactStories = [
    {
      id: 1,
      title: "Transformation Numérique à Dakar",
      beneficiary: "Aminata Diallo, 24 ans",
      before: "Diplômée sans emploi depuis 2 ans",
      after: "Développeuse web dans une startup locale",
      impact: "Salaire multiplié par 4, formation de 10 autres jeunes",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0d0e5?w=150&h=150&fit=crop&crop=face",
      category: "Éducation"
    },
    {
      id: 2,
      title: "Accès à l\'Eau Potable",
      beneficiary: "Village de Koundara",
      before: "6km de marche quotidienne pour l\'eau",
      after: "3 puits fonctionnels au cœur du village",
      impact: "1200 personnes bénéficiaires, 80% de réduction des maladies hydriques",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
      category: "Eau & Assainissement"
    },
    {
      id: 3,
      title: "Entrepreneuriat Féminin",
      beneficiary: "Coopérative Femmes Unies",
      before: "Activités informelles sans revenus stables",
      after: "Entreprise de transformation agro-alimentaire",
      impact: "25 emplois créés, revenus moyens +300%",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      category: "Économie"
    }
  ];

  const systemicChanges = [
    {
      title: "Politique Éducative Locale",
      description: "Intégration du numérique dans 15 écoles publiques suite à notre projet pilote",
      impact: "5000+ élèves bénéficiaires",
      icon: "GraduationCap",
      color: "blue"
    },
    {
      title: "Réseau d\'Entrepreneurs",
      description: "Création d\'un incubateur local géré par nos anciens bénéficiaires",
      impact: "50 startups accompagnées",
      icon: "Network",
      color: "green"
    },
    {
      title: "Modèle de Gestion Communautaire",
      description: "Réplication de notre approche dans 8 autres régions",
      impact: "12000+ personnes touchées",
      icon: "Users",
      color: "purple"
    }
  ];

  const currentMetric = qualitativeMetrics?.[selectedMetric];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-2">Métriques de Succès</h3>
        <p className="text-muted-foreground">Au-delà des chiffres : impact qualitatif et transformation durable</p>
      </div>
      {/* Qualitative Metrics */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl p-6 border border-border shadow-card">
            <h4 className="font-medium text-foreground mb-4">Indicateurs Qualitatifs</h4>
            <div className="space-y-2">
              {Object.entries(qualitativeMetrics)?.map(([key, metric]) => (
                <button
                  key={key}
                  onClick={() => setSelectedMetric(key)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    selectedMetric === key
                      ? 'bg-primary text-white' :'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {metric?.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ImpactChart
            type={selectedMetric === 'sustainability' ? 'line' : 'pie'}
            data={currentMetric?.data}
            title={currentMetric?.title}
            height={300}
          />
          
          <div className="mt-4 bg-card rounded-xl p-6 border border-border shadow-card">
            <h5 className="font-medium text-foreground mb-3">Insights Clés</h5>
            <ul className="space-y-2">
              {currentMetric?.insights?.map((insight, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-card">
        <h4 className="font-medium text-foreground mb-6">Histoires de Transformation</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactStories?.map((story) => (
            <div key={story?.id} className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={story?.image}
                  alt={story?.beneficiary}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-medium text-foreground">{story?.title}</h5>
                  <p className="text-sm text-muted-foreground">{story?.beneficiary}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={14} className="text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{story?.before}</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={14} className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground font-medium">{story?.after}</p>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <p className="text-sm text-primary font-medium">{story?.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Systemic Changes */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-card">
        <h4 className="font-medium text-foreground mb-6">Changements Systémiques</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {systemicChanges?.map((change, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                change?.color === 'blue' ? 'bg-blue-100' :
                change?.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
              }`}>
                <Icon 
                  name={change?.icon} 
                  size={24} 
                  className={
                    change?.color === 'blue' ? 'text-blue-600' :
                    change?.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  } 
                />
              </div>
              <h5 className="font-medium text-foreground mb-2">{change?.title}</h5>
              <p className="text-sm text-muted-foreground mb-3">{change?.description}</p>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                change?.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                change?.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
              }`}>
                {change?.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Long-term Sustainability */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
        <div className="text-center">
          <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-foreground mb-2">Vision 2030</h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Notre objectif : créer un écosystème autonome où chaque communauté devient actrice de son propre développement, 
            avec des leaders locaux formés et des structures pérennes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">100K+</p>
              <p className="text-sm text-muted-foreground">Vies transformées</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">500+</p>
              <p className="text-sm text-muted-foreground">Leaders formés</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">50+</p>
              <p className="text-sm text-muted-foreground">Communautés autonomes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;
import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MetricsCard from './components/MetricsCard';
import ImpactChart from './components/ImpactChart';
import GeographicMap from './components/GeographicMap';
import FinancialTransparency from './components/FinancialTransparency';
import ProjectProgress from './components/ProjectProgress';
import SuccessMetrics from './components/SuccessMetrics';

const ImpactDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    fr: {
      title: "Tableau de Bord Impact",
      subtitle: "Transparence totale sur notre impact humanitaire",
      description: "Découvrez en temps réel l'impact de vos dons et de votre engagement. Chaque euro compte, chaque action transforme des vies.",
      lastUpdate: "Dernière mise à jour",
      tabs: {
        overview: "Vue d\'ensemble",
        financial: "Transparence Financière",
        projects: "Suivi des Projets",
        geographic: "Impact Géographique",
        success: "Métriques de Succès"
      },
      cta: {
        donate: "Faire un Don",
        volunteer: "Devenir Bénévole",
        partner: "Devenir Partenaire"
      }
    },
    en: {
      title: "Impact Dashboard",
      subtitle: "Complete transparency on our humanitarian impact",
      description: "Discover in real-time the impact of your donations and engagement. Every euro counts, every action transforms lives.",
      lastUpdate: "Last updated",
      tabs: {
        overview: "Overview",
        financial: "Financial Transparency",
        projects: "Project Tracking",
        geographic: "Geographic Impact",
        success: "Success Metrics"
      },
      cta: {
        donate: "Donate Now",
        volunteer: "Become Volunteer",
        partner: "Become Partner"
      }
    }
  };

  const t = content?.[currentLanguage];

  // Mock real-time data
  const overviewMetrics = [
    {
      title: "Vies Impactées",
      value: "12,847",
      subtitle: "Bénéficiaires directs en 2024",
      icon: "Users",
      trend: "up",
      trendValue: "+23%",
      color: "primary"
    },
    {
      title: "Projets Actifs",
      value: "28",
      subtitle: "En cours dans 8 pays",
      icon: "FolderOpen",
      trend: "up",
      trendValue: "+12%",
      color: "secondary"
    },
    {
      title: "Fonds Mobilisés",
      value: "485K€",
      subtitle: "Budget 2024 alloué",
      icon: "Euro",
      trend: "up",
      trendValue: "+18%",
      color: "success"
    },
    {
      title: "Heures Bénévolat",
      value: "15,420",
      subtitle: "Engagement communautaire",
      icon: "Clock",
      trend: "up",
      trendValue: "+31%",
      color: "warning"
    }
  ];

  const monthlyImpactData = [
    { name: 'Jan', value: 850 },
    { name: 'Fév', value: 1200 },
    { name: 'Mar', value: 1450 },
    { name: 'Avr', value: 1680 },
    { name: 'Mai', value: 1920 },
    { name: 'Juin', value: 2150 },
    { name: 'Jul', value: 2380 },
    { name: 'Aoû', value: 2650 }
  ];

  const projectCategoriesData = [
    { name: 'Éducation', value: 35 },
    { name: 'Santé', value: 25 },
    { name: 'Eau & Assainissement', value: 20 },
    { name: 'Économie', value: 15 },
    { name: 'Urgence', value: 5 }
  ];

  const tabs = [
    { id: 'overview', label: t?.tabs?.overview, icon: 'BarChart3' },
    { id: 'financial', label: t?.tabs?.financial, icon: 'PieChart' },
    { id: 'projects', label: t?.tabs?.projects, icon: 'FolderOpen' },
    { id: 'geographic', label: t?.tabs?.geographic, icon: 'MapPin' },
    { id: 'success', label: t?.tabs?.success, icon: 'Target' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewMetrics?.map((metric, index) => (
                <MetricsCard key={index} {...metric} />
              ))}
            </div>
            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-6">
              <ImpactChart
                type="line"
                data={monthlyImpactData}
                title="Évolution Mensuelle de l'Impact"
                height={300}
              />
              <ImpactChart
                type="pie"
                data={projectCategoriesData}
                title="Répartition par Secteur"
                height={300}
              />
            </div>
            {/* Recent Achievements */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Réalisations Récentes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">École Numérique Dakar</h4>
                    <p className="text-sm text-muted-foreground">320 jeunes formés aux compétences digitales</p>
                    <p className="text-xs text-green-600 mt-1">Terminé - Août 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Droplets" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Puits Communautaires</h4>
                    <p className="text-sm text-muted-foreground">1200 personnes ont accès à l'eau potable</p>
                    <p className="text-xs text-blue-600 mt-1">En cours - 75% complété</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Micro-Entrepreneuriat</h4>
                    <p className="text-sm text-muted-foreground">85 entreprises créées, 156 emplois générés</p>
                    <p className="text-xs text-purple-600 mt-1">Suivi - Impact continu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'financial':
        return <FinancialTransparency />;
      case 'projects':
        return <ProjectProgress />;
      case 'geographic':
        return <GeographicMap />;
      case 'success':
        return <SuccessMetrics />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t?.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              {t?.subtitle}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t?.description}
            </p>
          </div>

          {/* Last Update & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-card rounded-xl p-6 border border-border shadow-card">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Icon name="RefreshCw" size={16} className="text-green-600" />
              <span className="text-sm text-muted-foreground">
                {t?.lastUpdate}: {new Date()?.toLocaleDateString('fr-FR')} à {new Date()?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                Rapport PDF
              </Button>
              <Button variant="default" size="sm" iconName="Share2" iconPosition="left">
                Partager
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto py-4">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-white shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </main>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez Notre Impact
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Chaque contribution compte. Ensemble, nous transformons des vies et construisons un avenir meilleur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              iconName="Heart"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              {t?.cta?.donate}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              {t?.cta?.volunteer}
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              iconName="Handshake"
              iconPosition="left"
              className="text-white hover:bg-white/10"
            >
              {t?.cta?.partner}
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AMJ Hub</h3>
                  <p className="text-sm text-white/70">Humanitarian Impact</p>
                </div>
              </div>
              <p className="text-white/70 mb-4">
                Mouvement de jeunes engagés pour un impact humanitaire durable et transparent.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Facebook" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Linkedin" size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/homepage" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/about-mission-universe" className="hover:text-white transition-colors">Mission</a></li>
                <li><a href="/projects-gallery" className="hover:text-white transition-colors">Projets</a></li>
                <li><a href="/community-stories" className="hover:text-white transition-colors">Communauté</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>contact@amjhub.org</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Paris, France</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; {new Date()?.getFullYear()} AMJ Hub. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImpactDashboard;
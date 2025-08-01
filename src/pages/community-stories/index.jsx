import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FeaturedStoryCarousel from './components/FeaturedStoryCarousel';
import StoryCard from './components/StoryCard';
import StoryFilters from './components/StoryFilters';
import SocialFeed from './components/SocialFeed';
import StoryModal from './components/StoryModal';

const CommunityStories = () => {
  const [activeFilters, setActiveFilters] = useState({
    role: [],
    project: [],
    location: []
  });
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const storiesPerPage = 9;

  // Mock data for stories
  const allStories = [
    {
      id: 1,
      title: "De bénévole à coordinatrice : Mon parcours avec AMJ",
      excerpt: "Comment une simple participation à un projet éducatif m'a menée à coordonner des missions internationales et à découvrir ma véritable passion pour l'humanitaire.",
      fullContent: `Mon aventure avec AMJ a commencé il y a trois ans, lors d'une simple distribution de fournitures scolaires dans un quartier défavorisé de Paris. Je n'imaginais pas alors que cette journée changerait complètement ma trajectoire professionnelle et personnelle.\n\nAu début, j'étais juste une bénévole parmi d'autres, motivée par l'envie d'aider mais sans vraiment savoir comment m'y prendre. L'équipe AMJ m'a accueillie avec une bienveillance et un professionnalisme qui m'ont immédiatement mise à l'aise.\n\nAu fil des missions, j'ai découvert mes capacités d'organisation et de coordination. L'équipe m'a fait confiance pour prendre des responsabilités croissantes, et aujourd'hui, je coordonne des projets éducatifs qui touchent des centaines d'enfants.\n\nCe qui me frappe le plus chez AMJ, c'est cette capacité à révéler le potentiel de chacun. Nous ne sommes pas juste des exécutants, nous sommes des acteurs de changement, encouragés à innover et à proposer nos propres initiatives.`,
      author: "Marie Dubois",
      role: "volunteer",
      project: "Éducation pour Tous",
      location: "Paris, France",
      date: "2025-07-25",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      featured: true,
      tags: ["leadership", "éducation", "développement personnel"],
      impact: [
        { value: "200+", label: "Enfants aidés" },
        { value: "15", label: "Projets coordonnés" },
        { value: "3", label: "Années d\'engagement" }
      ]
    },
    {
      id: 2,
      title: "L\'éducation qui a changé ma vie",
      excerpt: "Grâce au programme de soutien scolaire d'AMJ, j'ai pu poursuivre mes études et aujourd'hui, je prépare mon master en ingénierie. Une histoire de persévérance et de solidarité.",
      author: "Ahmed Hassan",
      role: "beneficiary",
      project: "Soutien Scolaire",
      location: "Marseille, France",
      date: "2025-07-20",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      featured: true,
      tags: ["éducation", "réussite", "persévérance"],
      impact: [
        { value: "18/20", label: "Moyenne obtenue" },
        { value: "2", label: "Années de soutien" },
        { value: "1", label: "Bourse décrochée" }
      ]
    },
    {
      id: 3,
      title: "Partenariat gagnant-gagnant avec AMJ",
      excerpt: "Notre entreprise a trouvé en AMJ un partenaire idéal pour nos actions RSE. Ensemble, nous avons créé un programme d'insertion professionnelle qui fait ses preuves.",
      author: "Sophie Martin",
      role: "partner",
      project: "Insertion Professionnelle",
      location: "Lyon, France",
      date: "2025-07-18",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      featured: true,
      tags: ["partenariat", "RSE", "insertion professionnelle"],
      impact: [
        { value: "50", label: "Emplois créés" },
        { value: "85%", label: "Taux d\'insertion" },
        { value: "2", label: "Années de partenariat" }
      ]
    },
    {
      id: 4,
      title: "Mission médicale au Sénégal : Une expérience transformatrice",
      excerpt: "Trois semaines dans un dispensaire rural m\'ont appris plus sur la médecine et sur moi-même que des années d\'études. Récit d\'une mission qui marque à vie.",
      author: "Dr. Lucas Moreau",
      role: "volunteer",
      project: "Santé Communautaire",
      location: "Dakar, Sénégal",
      date: "2025-07-15",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["santé", "mission internationale", "médecine"],
      impact: [
        { value: "500+", label: "Patients soignés" },
        { value: "3", label: "Semaines de mission" },
        { value: "5", label: "Formations dispensées" }
      ]
    },
    {
      id: 5,
      title: "Le jardin communautaire qui unit les générations",
      excerpt: "Notre projet de jardin partagé a créé des liens inattendus entre les habitants du quartier. Seniors et jeunes travaillent main dans la main pour cultiver plus que des légumes.",
      author: "Fatima Benali",
      role: "volunteer",
      project: "Environnement",
      location: "Toulouse, France",
      date: "2025-07-12",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      tags: ["environnement", "communauté", "intergénérationnel"],
      impact: [
        { value: "80", label: "Familles impliquées" },
        { value: "500m²", label: "Surface cultivée" },
        { value: "12", label: "Mois d\'activité" }
      ]
    },
    {
      id: 6,
      title: "Formation professionnelle : Un nouveau départ",
      excerpt: "Après des années de chômage, le programme de formation d'AMJ m'a donné les compétences et la confiance nécessaires pour retrouver un emploi stable.",
      author: "Jean-Pierre Durand",
      role: "beneficiary",
      project: "Insertion Professionnelle",
      location: "Lille, France",
      date: "2025-07-10",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["formation", "emploi", "reconversion"],
      impact: [
        { value: "6", label: "Mois de formation" },
        { value: "1", label: "CDI décroché" },
        { value: "100%", label: "Motivation retrouvée" }
      ]
    },
    {
      id: 7,
      title: "Collaboration fructueuse avec l\'université",
      excerpt: "Notre partenariat avec AMJ permet à nos étudiants de s\'engager concrètement tout en validant leurs crédits ECTS. Une approche pédagogique innovante.",
      author: "Prof. Catherine Leroy",
      role: "partner",
      project: "Éducation",
      location: "Bordeaux, France",
      date: "2025-07-08",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      tags: ["université", "pédagogie", "engagement étudiant"],
      impact: [
        { value: "150", label: "Étudiants engagés" },
        { value: "20", label: "Projets réalisés" },
        { value: "3", label: "Années de collaboration" }
      ]
    },
    {
      id: 8,
      title: "Reconstruction après les inondations",
      excerpt: "Quand notre village a été touché par les inondations, AMJ a été la première organisation à nous apporter une aide concrète et durable. Merci pour votre solidarité.",
      author: "Marie-Claire Rousseau",
      role: "beneficiary",
      project: "Aide d\'Urgence",
      location: "Alpes-Maritimes, France",
      date: "2025-07-05",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      tags: ["urgence", "solidarité", "reconstruction"],
      impact: [
        { value: "25", label: "Familles aidées" },
        { value: "2", label: "Mois d\'intervention" },
        { value: "100%", label: "Maisons réhabilitées" }
      ]
    },
    {
      id: 9,
      title: "Première mission, premiers émois",
      excerpt: "À 19 ans, j'ai participé à ma première mission humanitaire avec AMJ. Une expérience qui a défini mes valeurs et orienté mes choix de vie.",
      author: "Thomas Petit",
      role: "volunteer",
      project: "Éducation",
      location: "Rabat, Maroc",
      date: "2025-07-03",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      tags: ["première mission", "jeunesse", "découverte"],
      impact: [
        { value: "100", label: "Enfants rencontrés" },
        { value: "2", label: "Semaines sur place" },
        { value: "∞", label: "Souvenirs créés" }
      ]
    },
    {
      id: 10,
      title: "L\'entrepreneuriat social grâce à AMJ",
      excerpt: "Le programme d'accompagnement d'AMJ m'a aidée à créer ma coopérative de couture. Aujourd'hui, nous employons 15 femmes et exportons nos créations.",
      author: "Aisha Diallo",
      role: "beneficiary",
      project: "Entrepreneuriat",
      location: "Saint-Denis, France",
      date: "2025-07-01",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      tags: ["entrepreneuriat", "autonomisation", "création d\'emploi"],
      impact: [
        { value: "15", label: "Emplois créés" },
        { value: "50k€", label: "CA annuel" },
        { value: "3", label: "Pays clients" }
      ]
    }
  ];

  // Filter counts for the filter component
  const filterCounts = {
    role: {
      volunteer: allStories?.filter(s => s?.role === 'volunteer')?.length,
      beneficiary: allStories?.filter(s => s?.role === 'beneficiary')?.length,
      partner: allStories?.filter(s => s?.role === 'partner')?.length
    },
    project: {
      education: allStories?.filter(s => s?.project?.toLowerCase()?.includes('éducation') || s?.project?.toLowerCase()?.includes('scolaire'))?.length,
      health: allStories?.filter(s => s?.project?.toLowerCase()?.includes('santé'))?.length,
      environment: allStories?.filter(s => s?.project?.toLowerCase()?.includes('environnement'))?.length,
      community: allStories?.filter(s => s?.project?.toLowerCase()?.includes('communauté') || s?.project?.toLowerCase()?.includes('insertion'))?.length
    },
    location: {
      france: allStories?.filter(s => s?.location?.includes('France'))?.length,
      senegal: allStories?.filter(s => s?.location?.includes('Sénégal'))?.length,
      morocco: allStories?.filter(s => s?.location?.includes('Maroc'))?.length,
      other: allStories?.filter(s => !s?.location?.includes('France') && !s?.location?.includes('Sénégal') && !s?.location?.includes('Maroc'))?.length
    }
  };

  // Featured stories for carousel
  const featuredStories = allStories?.filter(story => story?.featured);

  // Filter stories based on active filters and search
  const filteredStories = allStories?.filter(story => {
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery?.toLowerCase();
      const matchesSearch = 
        story?.title?.toLowerCase()?.includes(searchLower) ||
        story?.excerpt?.toLowerCase()?.includes(searchLower) ||
        story?.author?.toLowerCase()?.includes(searchLower) ||
        story?.project?.toLowerCase()?.includes(searchLower) ||
        story?.location?.toLowerCase()?.includes(searchLower);
      
      if (!matchesSearch) return false;
    }

    // Role filter
    if (activeFilters?.role?.length > 0 && !activeFilters?.role?.includes(story?.role)) {
      return false;
    }

    // Project filter
    if (activeFilters?.project?.length > 0) {
      const projectMatch = activeFilters?.project?.some(filter => {
        switch (filter) {
          case 'education':
            return story?.project?.toLowerCase()?.includes('éducation') || story?.project?.toLowerCase()?.includes('scolaire');
          case 'health':
            return story?.project?.toLowerCase()?.includes('santé');
          case 'environment':
            return story?.project?.toLowerCase()?.includes('environnement');
          case 'community':
            return story?.project?.toLowerCase()?.includes('communauté') || story?.project?.toLowerCase()?.includes('insertion');
          default:
            return false;
        }
      });
      if (!projectMatch) return false;
    }

    // Location filter
    if (activeFilters?.location?.length > 0) {
      const locationMatch = activeFilters?.location?.some(filter => {
        switch (filter) {
          case 'france':
            return story?.location?.includes('France');
          case 'senegal':
            return story?.location?.includes('Sénégal');
          case 'morocco':
            return story?.location?.includes('Maroc');
          case 'other':
            return !story?.location?.includes('France') && !story?.location?.includes('Sénégal') && !story?.location?.includes('Maroc');
          default:
            return false;
        }
      });
      if (!locationMatch) return false;
    }

    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredStories?.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const paginatedStories = filteredStories?.slice(startIndex, startIndex + storiesPerPage);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters, searchQuery]);

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      role: [],
      project: [],
      location: []
    });
    setSearchQuery('');
  };

  const handleReadMore = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const handleShare = (story, platform) => {
    const url = window.location?.href;
    const text = `Découvrez cette histoire inspirante : "${story?.title}" sur AMJ Humanitarian Hub`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        navigator.clipboard?.writeText(`${text} ${url}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Histoires de Notre
              <span className="text-gradient block">Communauté</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez les témoignages authentiques de ceux qui font vivre AMJ : bénévoles passionnés, 
              bénéficiaires reconnaissants et partenaires engagés. Chaque histoire raconte un impact réel.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher une histoire, un auteur, un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{allStories?.length}</div>
              <div className="text-sm text-muted-foreground">Histoires partagées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">{allStories?.filter(s => s?.role === 'volunteer')?.length}</div>
              <div className="text-sm text-muted-foreground">Témoignages bénévoles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">{allStories?.filter(s => s?.role === 'beneficiary')?.length}</div>
              <div className="text-sm text-muted-foreground">Histoires d'impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{allStories?.filter(s => s?.role === 'partner')?.length}</div>
              <div className="text-sm text-muted-foreground">Partenariats</div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Stories Carousel */}
      {featuredStories?.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Histoires à la Une
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez les témoignages les plus marquants de notre communauté
              </p>
            </div>
            <FeaturedStoryCarousel stories={featuredStories} onReadMore={handleReadMore} />
          </div>
        </section>
      )}
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <StoryFilters
                  filters={filterCounts}
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>

            {/* Stories Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {filteredStories?.length} histoire{filteredStories?.length !== 1 ? 's' : ''} trouvée{filteredStories?.length !== 1 ? 's' : ''}
                </h3>
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} sur {totalPages}
                </div>
              </div>

              {paginatedStories?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    {paginatedStories?.map((story) => (
                      <StoryCard
                        key={story?.id}
                        story={story}
                        onReadMore={handleReadMore}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        iconName="ChevronLeft"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Précédent
                      </Button>
                      
                      <div className="flex space-x-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1)?.map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
                              page === currentPage
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        iconName="ChevronRight"
                        iconPosition="right"
                        iconSize={16}
                      >
                        Suivant
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Aucune histoire trouvée
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Essayez de modifier vos critères de recherche ou vos filtres
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    iconName="RotateCcw"
                    iconPosition="left"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Social Feed Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialFeed />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            Votre Histoire Nous Intéresse
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Vous avez vécu une expérience marquante avec AMJ ? Partagez votre témoignage 
            et inspirez d'autres personnes à s'engager pour un monde plus solidaire.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="PenTool"
              iconPosition="left"
              className="bg-white text-foreground hover:bg-white/90"
            >
              Partager Mon Histoire
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-foreground"
            >
              Rejoindre AMJ
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">AMJ Hub</h3>
                  <p className="text-sm text-white/70">Humanitarian Impact</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Chaque histoire partagée renforce notre communauté et inspire de nouveaux engagements. 
                Ensemble, nous construisons un avenir plus solidaire.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-white/70 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/about-mission-universe" className="text-white/70 hover:text-white transition-colors">Mission</a></li>
                <li><a href="/projects-gallery" className="text-white/70 hover:text-white transition-colors">Projets</a></li>
                <li><a href="/impact-dashboard" className="text-white/70 hover:text-white transition-colors">Impact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  contact@amj-hub.org
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +33 1 23 45 67 89
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Paris, France
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} AMJ Humanitarian Hub. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onShare={handleShare}
      />
    </div>
  );
};

export default CommunityStories;
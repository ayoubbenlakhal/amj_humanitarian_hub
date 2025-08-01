import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsOverview from './components/StatsOverview';

const ProjectsGallery = () => {
  const [filters, setFilters] = useState({
    impactArea: 'all',
    location: 'all',
    status: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');

  // Mock projects data
  const projects = [
    {
      id: 1,
      title: "École Numérique Rurale",
      description: "Création d\'un centre informatique dans une école rurale pour améliorer l\'accès à l\'éducation numérique.",
      fullDescription: `Ce projet vise à transformer l'éducation dans les zones rurales en créant un centre informatique moderne équipé de 20 ordinateurs, d'une connexion internet haut débit et de logiciels éducatifs adaptés.\n\nNous avons travaillé en étroite collaboration avec les enseignants locaux pour développer un programme de formation qui intègre les outils numériques dans le curriculum existant. Le projet inclut également la formation de 15 enseignants aux nouvelles technologies éducatives.\n\nL'impact de ce projet dépasse largement les murs de l'école, car les familles de la communauté peuvent également accéder au centre en dehors des heures de classe pour des formations en alphabétisation numérique.`,
      location: "Burkina Faso",
      impactArea: "education",
      status: "completed",
      progress: 100,
      beneficiaries: "450",
      volunteers: "12",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
      ],
      tags: ["Éducation", "Technologie", "Formation", "Communauté"],
      testimonial: {
        text: "Grâce à ce projet, nos enfants ont maintenant accès aux mêmes outils que ceux des villes.",
        author: "Marie Ouédraogo, Directrice"
      },
      startDate: "15 Mars 2024",
      duration: "6 mois",
      budget: "25 000 €",
      projectManager: "Sophie Martin",
      partners: "3",
      impactMetrics: [
        { label: "Élèves formés", value: "450" },
        { label: "Enseignants certifiés", value: "15" },
        { label: "Ordinateurs installés", value: "20" },
        { label: "Heures de formation", value: "240" }
      ],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
        after: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
      },
      challenges: [
        "Connexion internet instable dans la région",
        "Manque de formation préalable des enseignants",
        "Résistance initiale au changement"
      ],
      solutions: [
        "Installation d\'une antenne satellite dédiée",
        "Programme de formation intensive de 3 semaines",
        "Ateliers de sensibilisation avec la communauté"
      ],
      detailedTestimonials: [
        {
          author: "Marie Ouédraogo",
          role: "Directrice de l\'école",
          text: "Ce projet a révolutionné notre façon d\'enseigner. Les élèves sont plus engagés et motivés.",
          rating: 5,
          date: "Juillet 2024",
          avatar: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
          author: "Jean-Baptiste Kaboré",
          role: "Enseignant",
          text: "La formation reçue m\'a permis d\'intégrer le numérique dans mes cours de mathématiques.",
          rating: 5,
          date: "Juin 2024",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      ],
      volunteerOpportunities: [
        {
          role: "Formateur informatique",
          description: "Enseigner les bases de l\'informatique aux élèves",
          commitment: "2 semaines",
          spots: "2 places"
        },
        {
          role: "Coordinateur logistique",
          description: "Gérer l\'installation et la maintenance du matériel",
          commitment: "1 mois",
          spots: "1 place"
        }
      ],
      fundingGoal: "25 000 €",
      fundingRaised: "25 000 €",
      fundingProgress: 100
    },
    {
      id: 2,
      title: "Clinique Mobile de Santé",
      description: "Déploiement d\'une clinique mobile pour apporter des soins de santé primaires aux communautés isolées.",
      fullDescription: `La clinique mobile de santé est un projet innovant qui vise à réduire les inégalités d'accès aux soins dans les zones rurales reculées. Notre équipe médicale se déplace avec un véhicule spécialement équipé pour offrir des consultations, des vaccinations et des soins d'urgence.\n\nLe projet couvre un rayon de 150 km autour de notre base, touchant 12 villages différents selon un calendrier rotatif. Chaque village reçoit une visite mensuelle, avec des consultations gratuites et la distribution de médicaments essentiels.\n\nNous avons également mis en place un système de télémédecine permettant aux patients de consulter des spécialistes à distance, révolutionnant ainsi l'accès aux soins spécialisés dans ces régions.`,
      location: "Sénégal",
      impactArea: "health",
      status: "active",
      progress: 75,
      beneficiaries: "2,300",
      volunteers: "8",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop"
      ],
      tags: ["Santé", "Mobile", "Communauté", "Prévention"],
      testimonial: {
        text: "Cette clinique mobile a sauvé la vie de ma fille. Nous n\'aurions jamais pu aller à l\'hôpital à temps.",
        author: "Fatou Diallo, Mère de famille"
      },
      startDate: "10 Janvier 2024",
      duration: "12 mois",
      budget: "45 000 €",
      projectManager: "Dr. Amadou Ba",
      partners: "5",
      impactMetrics: [
        { label: "Patients traités", value: "2,300" },
        { label: "Villages desservis", value: "12" },
        { label: "Vaccinations", value: "850" },
        { label: "Consultations", value: "1,200" }
      ],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
        after: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
      },
      challenges: [
        "Routes difficiles d'accès pendant la saison des pluies","Manque de personnel médical qualifié","Conservation des médicaments sans électricité"
      ],
      solutions: [
        "Acquisition d\'un véhicule tout-terrain adapté",
        "Partenariat avec l\'université de médecine locale",
        "Installation de réfrigérateurs solaires"
      ],
      detailedTestimonials: [
        {
          author: "Dr. Aminata Sy",
          role: "Médecin généraliste",
          text: "Travailler sur ce projet me permet de toucher des populations qui n\'ont jamais eu accès aux soins.",
          rating: 5,
          date: "Août 2024",
          avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        }
      ],
      volunteerOpportunities: [
        {
          role: "Infirmier/ère",
          description: "Assister lors des consultations et vaccinations",
          commitment: "3 mois",
          spots: "2 places"
        }
      ],
      fundingGoal: "45 000 €",
      fundingRaised: "33 750 €",
      fundingProgress: 75
    },
    {
      id: 3,
      title: "Reforestation Communautaire",
      description: "Plantation de 10,000 arbres avec les communautés locales pour lutter contre la déforestation.",
      fullDescription: `Le projet de reforestation communautaire s'attaque à la déforestation massive qui affecte la région depuis des décennies. En partenariat avec les communautés locales, nous plantons des espèces d'arbres indigènes adaptées au climat local.\n\nChaque famille participante reçoit 50 plants d'arbres fruitiers et 25 plants d'arbres forestiers, accompagnés d'une formation sur les techniques de plantation et d'entretien. Le projet inclut également la création de pépinières communautaires pour assurer la durabilité à long terme.\n\nAu-delà de l'aspect environnemental, ce projet génère des revenus supplémentaires pour les familles grâce à la vente des fruits et du bois de manière durable.`,
      location: "Madagascar",
      impactArea: "environment",
      status: "active",
      progress: 60,
      beneficiaries: "800",
      volunteers: "15",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
      ],
      tags: ["Environnement", "Reforestation", "Communauté", "Durable"],
      testimonial: {
        text: "Mes enfants pourront grandir dans un environnement plus vert grâce à ce projet.",
        author: "Ravo Andriamanalina, Agriculteur"
      },
      startDate: "5 Février 2024",
      duration: "18 mois",
      budget: "30 000 €",
      projectManager: "Claire Dubois",
      partners: "4",
      impactMetrics: [
        { label: "Arbres plantés", value: "6,000" },
        { label: "Familles impliquées", value: "160" },
        { label: "Hectares reboisés", value: "25" },
        { label: "Pépinières créées", value: "3" }
      ],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop",
        after: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
      },
      challenges: [
        "Sécheresse prolongée affectant la survie des plants",
        "Manque de connaissances techniques des communautés",
        "Pression du bétail sur les jeunes plants"
      ],
      solutions: [
        "Installation de systèmes d\'irrigation goutte-à-goutte",
        "Formation intensive de 200 heures pour les participants",
        "Construction de clôtures de protection"
      ],
      detailedTestimonials: [
        {
          author: "Ravo Andriamanalina",
          role: "Agriculteur local",
          text: "Ce projet nous a appris à prendre soin de notre environnement tout en améliorant nos revenus.",
          rating: 5,
          date: "Septembre 2024",
          avatar: "https://randomuser.me/api/portraits/men/55.jpg"
        }
      ],
      volunteerOpportunities: [
        {
          role: "Technicien forestier",
          description: "Former les communautés aux techniques de plantation",
          commitment: "2 mois",
          spots: "1 place"
        }
      ],
      fundingGoal: "30 000 €",
      fundingRaised: "18 000 €",
      fundingProgress: 60
    },
    {
      id: 4,
      title: "Centre Communautaire Multifonctionnel",
      description: "Construction d'un centre communautaire offrant des services éducatifs, sanitaires et sociaux.",
      fullDescription: `Le centre communautaire multifonctionnel est conçu comme un hub central pour répondre aux besoins diversifiés de la communauté. Ce bâtiment de 400m² abrite une bibliothèque, une salle de formation, un dispensaire et un espace de réunion communautaire.\n\nLe centre propose des cours d'alphabétisation pour adultes, des formations professionnelles, des consultations médicales de base et sert de lieu de rassemblement pour les événements communautaires. Il est géré par un comité local formé et autonome.\n\nL'architecture du bâtiment utilise des matériaux locaux et des techniques de construction durables, incluant des panneaux solaires pour l'électricité et un système de récupération d'eau de pluie.`,
      location: "Mali",
      impactArea: "community",
      status: "planning",
      progress: 25,
      beneficiaries: "1,500",
      volunteers: "20",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
      ],
      tags: ["Communauté", "Construction", "Éducation", "Santé"],
      testimonial: {
        text: "Ce centre va transformer notre village en offrant des services que nous n\'avons jamais eus.",
        author: "Ibrahim Traoré, Chef de village"
      },
      startDate: "1 Avril 2024",
      duration: "24 mois",
      budget: "80 000 €",
      projectManager: "Mohamed Keita",
      partners: "6",
      impactMetrics: [
        { label: "Surface construite", value: "400m²" },
        { label: "Services offerts", value: "5" },
        { label: "Emplois créés", value: "8" },
        { label: "Formations prévues", value: "12" }
      ],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        after: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop"
      },
      challenges: [
        "Terrain difficile nécessitant des fondations spéciales",
        "Approvisionnement en matériaux dans une zone reculée",
        "Formation du personnel local pour la gestion"
      ],
      solutions: [
        "Étude géotechnique approfondie et adaptation des plans",
        "Partenariat avec des fournisseurs locaux",
        "Programme de formation de 6 mois pour le personnel"
      ],
      detailedTestimonials: [
        {
          author: "Ibrahim Traoré",
          role: "Chef de village",
          text: "Ce projet représente l\'espoir d\'un avenir meilleur pour nos enfants et notre communauté.",
          rating: 5,
          date: "Octobre 2024",
          avatar: "https://randomuser.me/api/portraits/men/48.jpg"
        }
      ],
      volunteerOpportunities: [
        {
          role: "Architecte",
          description: "Superviser la construction et adapter les plans",
          commitment: "6 mois",
          spots: "1 place"
        },
        {
          role: "Formateur",
          description: "Former le personnel local à la gestion du centre",
          commitment: "3 mois",
          spots: "2 places"
        }
      ],
      fundingGoal: "80 000 €",
      fundingRaised: "20 000 €",
      fundingProgress: 25
    },
    {
      id: 5,
      title: "Plateforme d\'E-learning Solidaire",
      description: "Développement d\'une plateforme numérique pour l\'apprentissage à distance dans les zones rurales.",
      fullDescription: `La plateforme d'e-learning solidaire révolutionne l'accès à l'éducation dans les zones où les infrastructures scolaires sont limitées. Cette solution technologique propose des cours en ligne adaptés aux réalités locales, disponibles en plusieurs langues locales.\n\nLa plateforme fonctionne même avec une connexion internet limitée grâce à sa technologie de synchronisation hors ligne. Elle propose des cours de niveau primaire à universitaire, avec un focus particulier sur les compétences professionnelles demandées sur le marché local.\n\nChaque apprenant dispose d'un parcours personnalisé avec suivi des progrès et certification. Des animateurs locaux formés accompagnent les utilisateurs dans leurs apprentissages.`,
      location: "Côte d\'Ivoire",
      impactArea: "technology",
      status: "funding",
      progress: 40,
      beneficiaries: "3,000",
      volunteers: "25",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
      ],
      tags: ["Technologie", "Éducation", "Innovation", "Numérique"],
      testimonial: {
        text: "Grâce à cette plateforme, j'ai pu suivre des cours universitaires depuis mon village.",
        author: "Aya Kouassi, Étudiante"
      },
      startDate: "20 Mai 2024",
      duration: "15 mois",
      budget: "60 000 €",
      projectManager: "Thomas Nguyen",
      partners: "7",
      impactMetrics: [
        { label: "Utilisateurs inscrits", value: "1,200" },
        { label: "Cours disponibles", value: "45" },
        { label: "Certifications délivrées", value: "180" },
        { label: "Langues supportées", value: "4" }
      ],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        after: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
      },
      challenges: [
        "Connectivité internet instable dans les zones rurales",
        "Manque de compétences numériques des utilisateurs",
        "Adaptation du contenu aux contextes locaux"
      ],
      solutions: [
        "Développement d\'une version hors ligne de la plateforme",
        "Ateliers d\'initiation au numérique",
        "Collaboration avec des experts locaux pour le contenu"
      ],
      detailedTestimonials: [
        {
          author: "Aya Kouassi",
          role: "Étudiante en informatique",
          text: "Cette plateforme m\'a permis d\'accéder à une éducation de qualité sans quitter ma communauté.",
          rating: 5,
          date: "Novembre 2024",
          avatar: "https://randomuser.me/api/portraits/women/22.jpg"
        }
      ],
      volunteerOpportunities: [
        {
          role: "Développeur web",
          description: "Contribuer au développement de la plateforme",
          commitment: "4 mois",
          spots: "3 places"
        },
        {
          role: "Créateur de contenu",
          description: "Développer des cours adaptés aux besoins locaux",
          commitment: "6 mois",
          spots: "5 places"
        }
      ],
      fundingGoal: "60 000 €",
      fundingRaised: "24 000 €",
      fundingProgress: 40
    },
    {
      id: 6,
      title: "Jardin Thérapeutique pour Seniors",
      description: "Création d\'un espace vert thérapeutique pour améliorer le bien-être des personnes âgées.",
      fullDescription: `Le jardin thérapeutique pour seniors est un projet innovant qui utilise l'horticulture comme outil de bien-être et de réhabilitation. Cet espace de 1000m² est spécialement conçu pour être accessible aux personnes à mobilité réduite et aux personnes âgées.\n\nLe jardin comprend des bacs de plantation surélevés, des allées larges et antidérapantes, des zones d'ombre et de repos, ainsi qu'un système d'arrosage automatique. Les activités proposées incluent la plantation, l'entretien des plantes, la récolte et des ateliers de jardinage thérapeutique.\n\nUne équipe de thérapeutes et d'animateurs accompagne les participants dans leurs activités, favorisant les liens sociaux et l'amélioration de la santé mentale et physique.`,
      location: "France",
      impactArea: "health",
      status: "completed",
      progress: 100,
      beneficiaries: "120",
      volunteers: "18",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      tags: ["Santé", "Seniors", "Thérapie", "Bien-être"],
      testimonial: {
        text: "Ce jardin m'a redonné goût à la vie. Je me sens utile et en paix ici.",author: "Marguerite Dupont, 78 ans"
      },
      startDate: "10 Juin 2024",duration: "8 mois",budget: "35 000 €",projectManager: "Dr. Anne Moreau",partners: "4",
      impactMetrics: [
        { label: "Participants réguliers", value: "120" },
        { label: "Séances organisées", value: "96" },
        { label: "Variétés plantées", value: "40" },
        { label: "Amélioration bien-être", value: "85%" }
      ],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=300&fit=crop",after: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
      },
      challenges: [
        "Adaptation des outils pour les personnes âgées","Sélection de plantes adaptées au climat local","Formation du personnel aux besoins spécifiques"
      ],
      solutions: [
        "Conception d\'outils ergonomiques spécialisés","Consultation avec des botanistes locaux","Formation de 40 heures pour tous les intervenants"
      ],
      detailedTestimonials: [
        {
          author: "Marguerite Dupont",role: "Participante",text: "Jardiner ici m\'a aidée à surmonter ma dépression après le décès de mon mari.",rating: 5,date: "Décembre 2024",avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          author: "Pierre Martin",role: "Participant",text: "J\'ai retrouvé ma passion pour le jardinage et j\'ai fait de nouveaux amis.",rating: 5,date: "Décembre 2024",avatar: "https://randomuser.me/api/portraits/men/70.jpg"
        }
      ],
      volunteerOpportunities: [
        {
          role: "Animateur jardinage",description: "Accompagner les seniors dans leurs activités de jardinage",commitment: "6 mois",spots: "4 places"
        }
      ],
      fundingGoal: "35 000 €",fundingRaised: "35 000 €",
      fundingProgress: 100
    }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects?.filter(project => {
      const matchesSearch = project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                           project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                           project?.location?.toLowerCase()?.includes(searchQuery?.toLowerCase());
      
      const matchesImpactArea = filters?.impactArea === 'all' || project?.impactArea === filters?.impactArea;
      const matchesLocation = filters?.location === 'all' || project?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase());
      const matchesStatus = filters?.status === 'all' || project?.status === filters?.status;

      return matchesSearch && matchesImpactArea && matchesLocation && matchesStatus;
    });

    // Sort projects
    switch (sortBy) {
      case 'recent':
        filtered?.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        break;
      case 'progress':
        filtered?.sort((a, b) => b?.progress - a?.progress);
        break;
      case 'beneficiaries':
        filtered?.sort((a, b) => parseInt(b?.beneficiaries?.replace(/[^\d]/g, '')) - parseInt(a?.beneficiaries?.replace(/[^\d]/g, '')));
        break;
      case 'alphabetical':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [projects, filters, searchQuery, sortBy]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const sortOptions = [
    { value: 'recent', label: 'Plus récents' },
    { value: 'progress', label: 'Progression' },
    { value: 'beneficiaries', label: 'Bénéficiaires' },
    { value: 'alphabetical', label: 'Alphabétique' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="FolderOpen" size={16} />
              <span>Galerie de Projets</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Nos <span className="text-gradient">Projets Humanitaires</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez l'impact concret de nos initiatives à travers le monde. 
              Chaque projet raconte une histoire de transformation et d'espoir.
            </p>
          </div>

          {/* Stats Overview */}
          <StatsOverview projects={projects} />
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
            onSearch={setSearchQuery}
            searchQuery={searchQuery}
          />

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {filteredProjects?.length} projet{filteredProjects?.length !== 1 ? 's' : ''} trouvé{filteredProjects?.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e?.target?.value)}
                  className="bg-card border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions?.map(option => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  <Icon name="Grid3X3" size={16} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  <Icon name="List" size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects?.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
            }`}>
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos critères de recherche ou vos filtres.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setFilters({ impactArea: 'all', location: 'all', status: 'all' });
                  setSearchQuery('');
                }}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Rejoignez notre communauté de changemakers et proposez votre propre initiative humanitaire. 
                Ensemble, nous pouvons créer un impact encore plus grand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                  iconName="Plus"
                  iconPosition="left"
                  iconSize={16}
                >
                  Proposer un Projet
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={16}
                >
                  Nous Contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={16} color="white" />
              </div>
              <span className="font-heading font-semibold text-foreground">AMJ Hub</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} AMJ Humanitarian Hub. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsGallery;
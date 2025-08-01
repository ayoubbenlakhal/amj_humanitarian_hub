import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectProgress = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "École Numérique Dakar",
      location: "Dakar, Sénégal",
      category: "Éducation",
      status: "En cours",
      progress: 75,
      startDate: "Janvier 2024",
      expectedEnd: "Décembre 2024",
      budget: 45000,
      spent: 33750,
      beneficiaries: 320,
      milestones: [
        { name: "Équipement informatique", completed: true, date: "Mars 2024" },
        { name: "Formation des enseignants", completed: true, date: "Mai 2024" },
        { name: "Lancement des cours", completed: true, date: "Juin 2024" },
        { name: "Évaluation mi-parcours", completed: false, date: "Septembre 2024" },
        { name: "Certification finale", completed: false, date: "Décembre 2024" }
      ],
      impact: `Formation de 320 jeunes aux compétences numériques essentielles.\nCréation de 15 emplois locaux dans le secteur tech.\nPartenariat avec 3 entreprises locales pour les stages.`,
      challenges: "Difficultés d'approvisionnement en matériel informatique",
      nextSteps: "Évaluation des compétences acquises et préparation de la phase 2"
    },
    {
      id: 2,
      title: "Eau Potable Villages",
      location: "Région de Kayes, Mali",
      category: "Eau & Assainissement",
      status: "Planification",
      progress: 25,
      startDate: "Octobre 2024",
      expectedEnd: "Juin 2025",
      budget: 78000,
      spent: 19500,
      beneficiaries: 1200,
      milestones: [
        { name: "Étude de faisabilité", completed: true, date: "Août 2024" },
        { name: "Mobilisation communautaire", completed: false, date: "Octobre 2024" },
        { name: "Construction des puits", completed: false, date: "Janvier 2025" },
        { name: "Formation maintenance", completed: false, date: "Avril 2025" },
        { name: "Inauguration", completed: false, date: "Juin 2025" }
      ],
      impact: `Accès à l'eau potable pour 1200 personnes dans 4 villages.\nRéduction de 60% des maladies hydriques.\nFormation de 20 techniciens locaux en maintenance.`,
      challenges: "Négociations foncières en cours avec les autorités locales",
      nextSteps: "Finalisation des accords communautaires et lancement des travaux"
    },
    {
      id: 3,
      title: "Entrepreneuriat Jeunes",
      location: "Ouagadougou, Burkina Faso",
      category: "Économie",
      status: "Terminé",
      progress: 100,
      startDate: "Juin 2023",
      expectedEnd: "Mai 2024",
      budget: 32000,
      spent: 31200,
      beneficiaries: 85,
      milestones: [
        { name: "Sélection des candidats", completed: true, date: "Juillet 2023" },
        { name: "Formation business plan", completed: true, date: "Septembre 2023" },
        { name: "Accompagnement individuel", completed: true, date: "Décembre 2023" },
        { name: "Financement micro-crédits", completed: true, date: "Février 2024" },
        { name: "Suivi post-création", completed: true, date: "Mai 2024" }
      ],
      impact: `85 jeunes entrepreneurs formés et accompagnés.\n52 entreprises créées avec un taux de survie de 78%.\nCréation de 156 emplois directs et indirects.`,
      challenges: "Accès limité au financement pour certains projets",
      nextSteps: "Suivi à long terme et préparation de la cohorte 2024"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'En cours': return 'bg-green-100 text-green-700 border-green-200';
      case 'Planification': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Terminé': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Éducation': return 'GraduationCap';
      case 'Eau & Assainissement': return 'Droplets';
      case 'Économie': return 'TrendingUp';
      default: return 'FolderOpen';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-2">Suivi des Projets</h3>
        <p className="text-muted-foreground">Progression en temps réel de nos initiatives</p>
      </div>
      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div
            key={project?.id}
            className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-soft transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={getCategoryIcon(project?.category)} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{project?.title}</h4>
                  <p className="text-sm text-muted-foreground">{project?.location}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
                {project?.status}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progression</span>
                <span className="text-sm font-medium text-foreground">{project?.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${project?.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-medium text-foreground">{project?.budget?.toLocaleString()} €</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bénéficiaires</p>
                <p className="font-medium text-foreground">{project?.beneficiaries}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="text-sm text-muted-foreground">
              <p>{project?.startDate} - {project?.expectedEnd}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{selectedProject?.title}</h3>
                  <p className="text-muted-foreground">{selectedProject?.location}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Project Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Durée</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedProject?.startDate} - {selectedProject?.expectedEnd}</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Euro" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Budget</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedProject?.spent?.toLocaleString()} € / {selectedProject?.budget?.toLocaleString()} €</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedProject?.beneficiaries} bénéficiaires</p>
                </div>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Étapes du Projet</h4>
                <div className="space-y-3">
                  {selectedProject?.milestones?.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        milestone?.completed ? 'bg-green-100 border-2 border-green-500' : 'bg-muted border-2 border-border'
                      }`}>
                        {milestone?.completed && <Icon name="Check" size={12} className="text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${milestone?.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {milestone?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{milestone?.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Description */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Impact Attendu</h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 whitespace-pre-line">{selectedProject?.impact}</p>
                </div>
              </div>

              {/* Challenges & Next Steps */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Défis Actuels</h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">{selectedProject?.challenges}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Prochaines Étapes</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">{selectedProject?.nextSteps}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectProgress;
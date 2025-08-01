import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Aperçu', icon: 'Eye' },
    { id: 'impact', label: 'Impact', icon: 'TrendingUp' },
    { id: 'testimonials', label: 'Témoignages', icon: 'MessageCircle' },
    { id: 'involvement', label: 'S\'Impliquer', icon: 'Heart' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FolderOpen" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-foreground">
                {project?.title}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={14} />
                <span>{project?.location}</span>
                <span>•</span>
                <span className="capitalize">{project?.status}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={project?.gallery?.[currentImageIndex]}
                    alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {project?.gallery?.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                      {project?.gallery?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-3">Description du Projet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project?.fullDescription}
                </p>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Détails Clés</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Date de début</span>
                      <span className="text-sm font-medium">{project?.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Durée</span>
                      <span className="text-sm font-medium">{project?.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Budget</span>
                      <span className="text-sm font-medium">{project?.budget}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Équipe</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Chef de projet</span>
                      <span className="text-sm font-medium">{project?.projectManager}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Volontaires</span>
                      <span className="text-sm font-medium">{project?.volunteers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Partenaires</span>
                      <span className="text-sm font-medium">{project?.partners}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-6">
              {/* Impact Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project?.impactMetrics?.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric?.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric?.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Before/After */}
              {project?.beforeAfter && (
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-4">Avant / Après</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-muted-foreground">Avant</h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={project?.beforeAfter?.before}
                          alt="Avant le projet"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Après</h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={project?.beforeAfter?.after}
                          alt="Après le projet"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center">
                    <Icon name="AlertTriangle" size={16} className="mr-2 text-warning" />
                    Défis Rencontrés
                  </h4>
                  <ul className="space-y-2">
                    {project?.challenges?.map((challenge, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <Icon name="Minus" size={12} className="mr-2 mt-1 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-success" />
                    Solutions Apportées
                  </h4>
                  <ul className="space-y-2">
                    {project?.solutions?.map((solution, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <Icon name="Check" size={12} className="mr-2 mt-1 flex-shrink-0 text-success" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              {project?.detailedTestimonials?.map((testimonial, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-foreground">{testimonial?.author}</h4>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{testimonial?.role}</span>
                      </div>
                      <blockquote className="text-muted-foreground italic mb-3">
                        "{testimonial?.text}"
                      </blockquote>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < testimonial?.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">
                          {testimonial?.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'involvement' && (
            <div className="space-y-6">
              {/* Volunteer Opportunities */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Opportunités de Bénévolat</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project?.volunteerOpportunities?.map((opportunity, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <h4 className="font-medium text-foreground">{opportunity?.role}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {opportunity?.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Engagement: {opportunity?.commitment}</span>
                        <span>Places: {opportunity?.spots}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funding Needs */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Besoins de Financement</h3>
                <div className="bg-muted/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Objectif de financement</span>
                    <span className="font-semibold text-foreground">{project?.fundingGoal}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 mb-4">
                    <div 
                      className="bg-primary rounded-full h-3 transition-all duration-300"
                      style={{ width: `${project?.fundingProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {project?.fundingProgress}% collecté
                    </span>
                    <span className="font-medium text-foreground">
                      {project?.fundingRaised} collectés
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  iconName="Heart"
                  iconPosition="left"
                  iconSize={16}
                >
                  Devenir Bénévole
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1 bg-secondary hover:bg-secondary/90"
                  iconName="DollarSign"
                  iconPosition="left"
                  iconSize={16}
                >
                  Faire un Don
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  iconName="Share2"
                  iconPosition="left"
                  iconSize={16}
                >
                  Partager
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'funding':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactIcon = (area) => {
    switch (area) {
      case 'education':
        return 'GraduationCap';
      case 'health':
        return 'Heart';
      case 'environment':
        return 'Leaf';
      case 'community':
        return 'Users';
      case 'technology':
        return 'Laptop';
      default:
        return 'Target';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <Icon name="Image" size={32} className="text-muted-foreground" />
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
            {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
          </span>
        </div>

        {/* Progress Indicator */}
        {project?.progress && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
              <div className="flex items-center justify-between text-white text-xs mb-1">
                <span>Progression</span>
                <span>{project?.progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5">
                <div 
                  className="bg-white rounded-full h-1.5 transition-all duration-300"
                  style={{ width: `${project?.progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon 
                name={getImpactIcon(project?.impactArea)} 
                size={16} 
                className="text-primary" 
              />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg leading-tight">
                {project?.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <Icon name="MapPin" size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{project?.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="font-semibold text-primary text-lg">
              {project?.beneficiaries}
            </div>
            <div className="text-xs text-muted-foreground">Bénéficiaires</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="font-semibold text-secondary text-lg">
              {project?.volunteers}
            </div>
            <div className="text-xs text-muted-foreground">Volontaires</div>
          </div>
        </div>

        {/* Testimonial Preview */}
        {project?.testimonial && (
          <div className="bg-accent/10 rounded-lg p-3 mb-4">
            <div className="flex items-start space-x-2">
              <Icon name="Quote" size={14} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-foreground italic line-clamp-2">
                  "{project?.testimonial?.text}"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  - {project?.testimonial?.author}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            Voir Détails
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90"
            iconName="Heart"
            iconPosition="left"
            iconSize={14}
          >
            S'Impliquer
          </Button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {project?.tags?.slice(0, 3)?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project?.tags?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{project?.tags?.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
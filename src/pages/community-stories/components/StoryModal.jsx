import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose, onShare }) => {
  if (!isOpen || !story) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'volunteer':
        return 'Heart';
      case 'beneficiary':
        return 'Users';
      case 'partner':
        return 'Handshake';
      default:
        return 'User';
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'volunteer':
        return 'Bénévole';
      case 'beneficiary':
        return 'Bénéficiaire';
      case 'partner':
        return 'Partenaire';
      default:
        return 'Membre';
    }
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
      <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative">
          <Image
            src={story?.image}
            alt={story?.title}
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Fermer"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                story?.role === 'volunteer' ? 'bg-primary text-primary-foreground' :
                story?.role === 'beneficiary' ? 'bg-secondary text-secondary-foreground' :
                'bg-accent text-accent-foreground'
              }`}>
                <Icon name={getRoleIcon(story?.role)} size={12} className="mr-1" />
                {getRoleLabel(story?.role)}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                <Icon name="MapPin" size={12} className="mr-1" />
                {story?.location}
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-heading font-bold text-white leading-tight">
              {story?.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Author Info */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {story?.author?.split(' ')?.map(n => n?.[0])?.join('')?.substring(0, 2)}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">{story?.author}</p>
                <p className="text-sm text-muted-foreground">{story?.project}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{formatDate(story?.date)}</p>
              <p className="text-xs text-muted-foreground flex items-center justify-end mt-1">
                <Icon name="Clock" size={12} className="mr-1" />
                {story?.readTime} min de lecture
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {story?.excerpt}
            </div>
            
            <div className="text-foreground leading-relaxed space-y-4">
              {story?.fullContent ? (
                story?.fullContent?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Cette histoire représente l'essence même de ce que nous accomplissons ensemble chez AMJ. 
                    Chaque témoignage comme celui-ci nous rappelle pourquoi nous nous engageons chaque jour 
                    pour créer un impact positif dans nos communautés.
                  </p>
                  <p>
                    L'engagement de nos bénévoles, la résilience de ceux que nous aidons, et le soutien 
                    de nos partenaires forment un écosystème unique où chaque action, même la plus petite, 
                    contribue à un changement significatif.
                  </p>
                  <p>
                    Nous croyons fermement que ces histoires individuelles, mises bout à bout, 
                    racontent une histoire collective plus grande : celle d'une génération qui refuse l'indifférence et choisit l'action pour construire un monde plus juste et solidaire.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Impact Metrics */}
          {story?.impact && (
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
                Impact de cette histoire
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {story?.impact?.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                    <div className="text-sm text-muted-foreground">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {story?.tags && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {story?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onShare(story, 'facebook')}
                iconName="Facebook"
                iconPosition="left"
                iconSize={16}
                className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Partager
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onShare(story, 'twitter')}
                iconName="Twitter"
                iconPosition="left"
                iconSize={16}
                className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onShare(story, 'linkedin')}
                iconName="Linkedin"
                iconPosition="left"
                iconSize={16}
                className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                LinkedIn
              </Button>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                iconName="Heart"
                iconPosition="left"
                iconSize={16}
                className="text-muted-foreground hover:text-red-500"
              >
                J'aime cette histoire
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="UserPlus"
                iconPosition="left"
                iconSize={16}
                className="bg-primary hover:bg-primary/90"
              >
                Rejoindre AMJ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
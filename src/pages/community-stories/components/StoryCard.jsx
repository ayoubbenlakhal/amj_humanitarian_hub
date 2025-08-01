import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onReadMore }) => {
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

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'volunteer':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'beneficiary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'partner':
        return 'bg-accent/10 text-accent-foreground border-accent/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <Image
          src={story?.image}
          alt={story?.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(story?.role)}`}>
            <Icon name={getRoleIcon(story?.role)} size={12} className="mr-1" />
            {story?.role === 'volunteer' ? 'Bénévole' : story?.role === 'beneficiary' ? 'Bénéficiaire' : 'Partenaire'}
          </span>
        </div>
        {story?.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning text-warning-foreground">
              <Icon name="Star" size={12} className="mr-1" />
              Vedette
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {story?.author?.split(' ')?.map(n => n?.[0])?.join('')?.substring(0, 2)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{story?.author}</p>
              <p className="text-xs text-muted-foreground">{story?.location}</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{formatDate(story?.date)}</span>
        </div>

        <h3 className="text-lg font-heading font-semibold text-foreground mb-2 line-clamp-2">
          {story?.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {story?.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center">
              <Icon name="MapPin" size={12} className="mr-1" />
              {story?.project}
            </span>
            <span className="flex items-center">
              <Icon name="Clock" size={12} className="mr-1" />
              {story?.readTime} min
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onReadMore(story)}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={14}
            className="text-primary hover:text-primary/80"
          >
            Lire plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
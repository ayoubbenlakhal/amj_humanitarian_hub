import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterBar = ({ filters, onFilterChange, onSearch, searchQuery }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const impactAreas = [
    { value: 'all', label: 'Tous les domaines', icon: 'Target' },
    { value: 'education', label: 'Éducation', icon: 'GraduationCap' },
    { value: 'health', label: 'Santé', icon: 'Heart' },
    { value: 'environment', label: 'Environnement', icon: 'Leaf' },
    { value: 'community', label: 'Communauté', icon: 'Users' },
    { value: 'technology', label: 'Technologie', icon: 'Laptop' }
  ];

  const locations = [
    { value: 'all', label: 'Toutes les régions' },
    { value: 'france', label: 'France' },
    { value: 'africa', label: 'Afrique' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asie' },
    { value: 'americas', label: 'Amériques' }
  ];

  const statuses = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'active', label: 'En cours' },
    { value: 'completed', label: 'Terminé' },
    { value: 'planning', label: 'En planification' },
    { value: 'funding', label: 'Recherche de fonds' }
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-card p-4 mb-6">
      {/* Search Bar */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Rechercher des projets..."
            value={searchQuery}
            onChange={(e) => onSearch(e?.target?.value)}
            className="w-full"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0"
        >
          <Icon name={isExpanded ? "ChevronUp" : "SlidersHorizontal"} size={18} />
        </Button>
      </div>
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {impactAreas?.slice(0, 4)?.map((area) => (
          <Button
            key={area?.value}
            variant={filters?.impactArea === area?.value ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange('impactArea', area?.value)}
            iconName={area?.icon}
            iconPosition="left"
            iconSize={14}
            className={filters?.impactArea === area?.value ? "bg-primary hover:bg-primary/90" : ""}
          >
            {area?.label}
          </Button>
        ))}
      </div>
      {/* Expanded Filters */}
      {isExpanded && (
        <div className="border-t border-border pt-4 space-y-4">
          {/* Impact Areas */}
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center">
              <Icon name="Target" size={16} className="mr-2 text-primary" />
              Domaine d'Impact
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {impactAreas?.map((area) => (
                <Button
                  key={area?.value}
                  variant={filters?.impactArea === area?.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('impactArea', area?.value)}
                  iconName={area?.icon}
                  iconPosition="left"
                  iconSize={14}
                  className={`justify-start ${filters?.impactArea === area?.value ? "bg-primary hover:bg-primary/90" : ""}`}
                >
                  {area?.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center">
              <Icon name="MapPin" size={16} className="mr-2 text-secondary" />
              Localisation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {locations?.map((location) => (
                <Button
                  key={location.value}
                  variant={filters?.location === location.value ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('location', location.value)}
                  className={`justify-start ${filters?.location === location.value ? "bg-secondary hover:bg-secondary/90" : ""}`}
                >
                  {location.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center">
              <Icon name="Activity" size={16} className="mr-2 text-accent" />
              Statut du Projet
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {statuses?.map((status) => (
                <Button
                  key={status.value}
                  variant={filters?.status === status.value ? "outline" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('status', status.value)}
                  className={`justify-start ${
                    filters?.status === status.value 
                      ? "border-accent text-accent hover:bg-accent/10" :""
                  }`}
                >
                  {status.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-end pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFilterChange({ impactArea: 'all', location: 'all', status: 'all' })}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Effacer les filtres
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
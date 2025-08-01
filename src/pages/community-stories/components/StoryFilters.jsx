import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryFilters = ({ filters, activeFilters, onFilterChange, onClearFilters }) => {
  const filterCategories = [
    {
      key: 'role',
      label: 'Rôle',
      icon: 'Users',
      options: [
        { value: 'volunteer', label: 'Bénévoles', count: filters?.role?.volunteer || 0 },
        { value: 'beneficiary', label: 'Bénéficiaires', count: filters?.role?.beneficiary || 0 },
        { value: 'partner', label: 'Partenaires', count: filters?.role?.partner || 0 }
      ]
    },
    {
      key: 'project',
      label: 'Projet',
      icon: 'FolderOpen',
      options: [
        { value: 'education', label: 'Éducation', count: filters?.project?.education || 0 },
        { value: 'health', label: 'Santé', count: filters?.project?.health || 0 },
        { value: 'environment', label: 'Environnement', count: filters?.project?.environment || 0 },
        { value: 'community', label: 'Communauté', count: filters?.project?.community || 0 }
      ]
    },
    {
      key: 'location',
      label: 'Localisation',
      icon: 'MapPin',
      options: [
        { value: 'france', label: 'France', count: filters?.location?.france || 0 },
        { value: 'senegal', label: 'Sénégal', count: filters?.location?.senegal || 0 },
        { value: 'morocco', label: 'Maroc', count: filters?.location?.morocco || 0 },
        { value: 'other', label: 'Autres', count: filters?.location?.other || 0 }
      ]
    }
  ];

  const hasActiveFilters = Object.values(activeFilters)?.some(filterArray => filterArray?.length > 0);

  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters?.[category] || [];
    const newFilters = currentFilters?.includes(value)
      ? currentFilters?.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  return (
    <div className="bg-card rounded-xl shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground flex items-center">
          <Icon name="Filter" size={20} className="mr-2 text-primary" />
          Filtrer les histoires
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={14}
            className="text-muted-foreground hover:text-foreground"
          >
            Effacer tout
          </Button>
        )}
      </div>
      <div className="space-y-6">
        {filterCategories?.map((category) => (
          <div key={category?.key}>
            <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
              <Icon name={category?.icon} size={16} className="mr-2 text-muted-foreground" />
              {category?.label}
            </h4>
            <div className="space-y-2">
              {category?.options?.map((option) => {
                const isActive = (activeFilters?.[category?.key] || [])?.includes(option?.value);
                return (
                  <button
                    key={option?.value}
                    onClick={() => handleFilterToggle(category?.key, option?.value)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/20' :'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
                    }`}
                  >
                    <span className="flex items-center">
                      <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                        isActive ? 'bg-primary border-primary' : 'border-muted-foreground/30'
                      }`}>
                        {isActive && <Icon name="Check" size={12} className="text-white" />}
                      </div>
                      {option?.label}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isActive ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      {option?.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([category, values]) =>
              values?.map((value) => {
                const categoryData = filterCategories?.find(c => c?.key === category);
                const optionData = categoryData?.options?.find(o => o?.value === value);
                return (
                  <span
                    key={`${category}-${value}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {optionData?.label}
                    <button
                      onClick={() => handleFilterToggle(category, value)}
                      className="ml-2 hover:text-primary/70"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryFilters;
import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ projects }) => {
  const stats = {
    total: projects?.length,
    active: projects?.filter(p => p?.status === 'active')?.length,
    completed: projects?.filter(p => p?.status === 'completed')?.length,
    totalBeneficiaries: projects?.reduce((sum, p) => sum + parseInt(p?.beneficiaries?.replace(/[^\d]/g, '')), 0),
    totalVolunteers: projects?.reduce((sum, p) => sum + parseInt(p?.volunteers?.replace(/[^\d]/g, '')), 0),
    countries: [...new Set(projects.map(p => p.location))]?.length
  };

  const statCards = [
    {
      label: 'Projets Totaux',
      value: stats?.total,
      icon: 'FolderOpen',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Projets Actifs',
      value: stats?.active,
      icon: 'Activity',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Projets Terminés',
      value: stats?.completed,
      icon: 'CheckCircle',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Bénéficiaires',
      value: `${(stats?.totalBeneficiaries / 1000)?.toFixed(1)}k+`,
      icon: 'Users',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      label: 'Volontaires',
      value: `${stats?.totalVolunteers}+`,
      icon: 'Heart',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      label: 'Pays',
      value: stats?.countries,
      icon: 'Globe',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-4 text-center shadow-card hover:shadow-soft transition-all duration-300"
        >
          <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
            <Icon name={stat?.icon} size={20} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {stat?.value}
          </div>
          <div className="text-xs text-muted-foreground">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
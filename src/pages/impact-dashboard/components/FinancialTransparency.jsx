import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ImpactChart from './ImpactChart';

const FinancialTransparency = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const financialData = {
    '2024': {
      totalBudget: 485000,
      allocated: 412750,
      remaining: 72250,
      breakdown: [
        { name: 'Projets Terrain', value: 65, amount: 315250 },
        { name: 'Administration', value: 12, amount: 58200 },
        { name: 'Sensibilisation', value: 15, amount: 72750 },
        { name: 'Formation', value: 8, amount: 38800 }
      ]
    },
    '2023': {
      totalBudget: 420000,
      allocated: 378000,
      remaining: 42000,
      breakdown: [
        { name: 'Projets Terrain', value: 68, amount: 285600 },
        { name: 'Administration', value: 10, amount: 42000 },
        { name: 'Sensibilisation', value: 14, amount: 58800 },
        { name: 'Formation', value: 8, amount: 33600 }
      ]
    }
  };

  const currentData = financialData?.[selectedYear];
  const allocationPercentage = (currentData?.allocated / currentData?.totalBudget) * 100;

  const reports = [
    {
      id: 1,
      title: "Rapport Annuel 2023",
      type: "PDF",
      size: "2.4 MB",
      date: "Mars 2024",
      downloads: 1250
    },
    {
      id: 2,
      title: "Audit Financier 2023",
      type: "PDF",
      size: "1.8 MB",
      date: "Février 2024",
      downloads: 890
    },
    {
      id: 3,
      title: "Impact Report Q4 2023",
      type: "PDF",
      size: "3.1 MB",
      date: "Janvier 2024",
      downloads: 2100
    }
  ];

  const certifications = [
    {
      name: "Certification Don en Confiance",
      issuer: "Comité de la Charte",
      validUntil: "Décembre 2025",
      icon: "Shield"
    },
    {
      name: "Label IDEAS",
      issuer: "France Active",
      validUntil: "Juin 2025",
      icon: "Award"
    },
    {
      name: "Agrément Jeunesse",
      issuer: "Ministère de la Jeunesse",
      validUntil: "Septembre 2026",
      icon: "CheckCircle"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Transparence Financière</h3>
            <p className="text-muted-foreground">Gestion responsable et transparente de vos dons</p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e?.target?.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Budget Overview */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-card">
          <h4 className="font-medium text-foreground mb-4">Aperçu Budgétaire {selectedYear}</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Budget Total</span>
              <span className="font-semibold text-foreground">{currentData?.totalBudget?.toLocaleString()} €</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Fonds Alloués</span>
              <span className="font-semibold text-green-600">{currentData?.allocated?.toLocaleString()} €</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Réserve</span>
              <span className="font-semibold text-yellow-600">{currentData?.remaining?.toLocaleString()} €</span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Allocation</span>
                <span className="text-sm font-medium text-foreground">{allocationPercentage?.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${allocationPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Allocation Chart */}
        <ImpactChart
          type="pie"
          data={currentData?.breakdown}
          title="Répartition des Fonds"
          height={250}
        />
      </div>
      {/* Detailed Breakdown */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-card">
        <h4 className="font-medium text-foreground mb-4">Détail des Allocations</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentData?.breakdown?.map((item, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-foreground">{item?.name}</h5>
                <span className="text-sm font-semibold text-primary">{item?.value}%</span>
              </div>
              <p className="text-lg font-bold text-foreground">{item?.amount?.toLocaleString()} €</p>
              <p className="text-xs text-muted-foreground mt-1">
                {item?.name === 'Administration' ? 'Frais de fonctionnement' :
                 item?.name === 'Projets Terrain' ? 'Actions directes' :
                 item?.name === 'Sensibilisation'? 'Communication & événements' : 'Développement des compétences'}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Downloadable Reports */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-card">
          <h4 className="font-medium text-foreground mb-4">Rapports Téléchargeables</h4>
          <div className="space-y-3">
            {reports?.map((report) => (
              <div key={report?.id} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">{report?.title}</h5>
                    <p className="text-sm text-muted-foreground">{report?.date} • {report?.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">{report?.downloads} téléchargements</span>
                  <Button variant="ghost" size="sm" iconName="Download" iconPosition="left">
                    Télécharger
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-card">
          <h4 className="font-medium text-foreground mb-4">Certifications & Labels</h4>
          <div className="space-y-4">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={cert?.icon} size={20} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-foreground">{cert?.name}</h5>
                  <p className="text-sm text-muted-foreground">{cert?.issuer}</p>
                  <p className="text-xs text-green-600 mt-1">Valide jusqu'en {cert?.validUntil}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="Info" size={16} className="text-blue-600" />
              <p className="text-sm text-blue-800">
                Nos comptes sont audités annuellement par un cabinet indépendant certifié.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTransparency;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GeographicMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: 1,
      name: "Afrique de l\'Ouest",
      country: "Sénégal, Mali, Burkina Faso",
      projects: 12,
      beneficiaries: 2450,
      coordinates: { lat: 14.4974, lng: -14.4524 },
      status: "active"
    },
    {
      id: 2,
      name: "Afrique Centrale",
      country: "Cameroun, RDC",
      projects: 8,
      beneficiaries: 1680,
      coordinates: { lat: 4.0383, lng: 21.7587 },
      status: "active"
    },
    {
      id: 3,
      name: "Europe",
      country: "France, Belgique",
      projects: 5,
      beneficiaries: 890,
      coordinates: { lat: 46.2276, lng: 2.2137 },
      status: "planning"
    },
    {
      id: 4,
      name: "Amérique du Nord",
      country: "Canada",
      projects: 3,
      beneficiaries: 520,
      coordinates: { lat: 56.1304, lng: -106.3468 },
      status: "completed"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'planning': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'planning': return 'Planification';
      case 'completed': return 'Terminé';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Impact Géographique</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-muted-foreground">Actif</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-muted-foreground">Planification</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-muted-foreground">Terminé</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Interactive Map */}
        <div className="relative bg-muted rounded-lg overflow-hidden" style={{ height: '400px' }}>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="AMJ Global Impact Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=14.4974,-14.4524&z=2&output=embed"
            className="border-0"
          />
          
          {/* Overlay with region markers */}
          <div className="absolute inset-0 pointer-events-none">
            {regions?.map((region) => (
              <div
                key={region?.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                style={{
                  left: `${Math.random() * 60 + 20}%`,
                  top: `${Math.random() * 60 + 20}%`
                }}
                onClick={() => setSelectedRegion(region)}
              >
                <div className={`w-4 h-4 ${getStatusColor(region?.status)} rounded-full border-2 border-white shadow-lg animate-pulse`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Region Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Régions d'Impact</h4>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {regions?.map((region) => (
              <div
                key={region?.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  selectedRegion?.id === region?.id
                    ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/50'
                }`}
                onClick={() => setSelectedRegion(region)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-medium text-foreground">{region?.name}</h5>
                    <p className="text-sm text-muted-foreground">{region?.country}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(region?.status)} text-white`}>
                    {getStatusText(region?.status)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="FolderOpen" size={16} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{region?.projects}</p>
                      <p className="text-xs text-muted-foreground">Projets</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{region?.beneficiaries?.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Bénéficiaires</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Selected Region Details */}
      {selectedRegion && (
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-foreground">Détails - {selectedRegion?.name}</h4>
            <button
              onClick={() => setSelectedRegion(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{selectedRegion?.projects}</p>
              <p className="text-sm text-muted-foreground">Projets Actifs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">{selectedRegion?.beneficiaries?.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Vies Impactées</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">{Math.floor(selectedRegion?.beneficiaries / selectedRegion?.projects)}</p>
              <p className="text-sm text-muted-foreground">Moyenne/Projet</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeographicMap;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationsMap = () => {
  const [selectedLocation, setSelectedLocation] = useState('paris');

  const locations = [
    {
      id: 'paris',
      name: 'Siège Social - Paris',
      type: 'Bureaux principaux',
      address: '15 Rue de la Paix, 75002 Paris, France',
      coordinates: { lat: 48.8698, lng: 2.3314 },
      phone: '+33 1 42 86 17 28',
      email: 'paris@amjhub.org',
      hours: 'Lun-Ven: 9h-18h',
      description: 'Notre siège social abrite les équipes de direction, coordination et développement.',
      services: ['Direction générale', 'Coordination projets', 'Partenariats', 'Communication'],
      accessibility: true,
      parking: false,
      publicTransport: 'Métro Opéra (lignes 3, 7, 8)'
    },
    {
      id: 'lyon',
      name: 'Antenne Régionale - Lyon',
      type: 'Bureau régional',
      address: '42 Cours Franklin Roosevelt, 69006 Lyon, France',
      coordinates: { lat: 45.7640, lng: 4.8357 },
      phone: '+33 4 78 52 33 14',
      email: 'lyon@amjhub.org',
      hours: 'Mar-Sam: 10h-17h',
      description: 'Notre antenne régionale pour le Sud-Est de la France et les projets européens.',
      services: ['Coordination régionale', 'Formation bénévoles', 'Projets locaux'],
      accessibility: true,
      parking: true,
      publicTransport: 'Métro Foch (ligne A)'
    },
    {
      id: 'marseille',
      name: 'Centre Méditerranée - Marseille',
      type: 'Centre opérationnel',
      address: '28 La Canebière, 13001 Marseille, France',
      coordinates: { lat: 43.2965, lng: 5.3698 },
      phone: '+33 4 91 54 76 82',
      email: 'marseille@amjhub.org',
      hours: 'Lun-Ven: 8h-16h',
      description: 'Centre spécialisé dans les missions méditerranéennes et l\'aide aux migrants.',
      services: ['Missions urgence', 'Aide migrants', 'Logistique maritime'],
      accessibility: false,
      parking: false,
      publicTransport: 'Métro Vieux-Port (ligne 1)'
    },
    {
      id: 'dakar',
      name: 'Bureau Afrique - Dakar',
      type: 'Bureau international',
      address: 'Avenue Cheikh Anta Diop, Dakar, Sénégal',
      coordinates: { lat: 14.6937, lng: -17.4441 },
      phone: '+221 33 824 15 67',
      email: 'dakar@amjhub.org',
      hours: 'Lun-Jeu: 8h-17h, Ven: 8h-12h',
      description: 'Coordination des projets en Afrique de l\'Ouest et formation des équipes locales.',
      services: ['Coordination Afrique', 'Formation locale', 'Développement durable'],
      accessibility: true,
      parking: true,
      publicTransport: 'Bus DDD et Car Rapide'
    }
  ];

  const selectedLocationData = locations?.find(loc => loc?.id === selectedLocation);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Nos Bureaux & Centres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez-nous dans nos différents bureaux pour des rencontres en personne
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Locations List */}
          <div className="lg:col-span-1 space-y-4">
            {locations?.map((location) => (
              <div
                key={location.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedLocation === location.id
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50 bg-card'
                }`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {location.type}
                    </p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    selectedLocation === location.id
                      ? 'border-primary bg-primary' :'border-border'
                  }`}>
                    {selectedLocation === location.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span className="line-clamp-2">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Interactive Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="h-80 lg:h-96 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={selectedLocationData?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${selectedLocationData?.coordinates?.lat},${selectedLocationData?.coordinates?.lng}&z=15&output=embed`}
                  className="border-0"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-soft">
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    {selectedLocationData?.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {selectedLocationData?.type}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {selectedLocationData?.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedLocationData?.description}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Building" size={24} className="text-primary" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Adresse</p>
                      <p className="font-medium text-foreground">{selectedLocationData?.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={20} className="text-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-medium text-foreground">{selectedLocationData?.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{selectedLocationData?.email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={20} className="text-trust mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Horaires</p>
                      <p className="font-medium text-foreground">{selectedLocationData?.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Train" size={20} className="text-conversion mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Transport</p>
                      <p className="font-medium text-foreground">{selectedLocationData?.publicTransport}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name="Accessibility" 
                        size={16} 
                        className={selectedLocationData?.accessibility ? 'text-success' : 'text-muted-foreground'} 
                      />
                      <span className="text-sm text-muted-foreground">Accessible PMR</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name="Car" 
                        size={16} 
                        className={selectedLocationData?.parking ? 'text-success' : 'text-muted-foreground'} 
                      />
                      <span className="text-sm text-muted-foreground">Parking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-foreground mb-4">Services disponibles</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLocationData?.services?.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  iconName="Navigation"
                  iconPosition="left"
                  className="flex-1"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedLocationData?.coordinates?.lat},${selectedLocationData?.coordinates?.lng}`, '_blank')}
                >
                  Itinéraire
                </Button>
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  className="flex-1"
                  onClick={() => window.location.href = `tel:${selectedLocationData?.phone}`}
                >
                  Appeler
                </Button>
                <Button
                  variant="outline"
                  iconName="Mail"
                  iconPosition="left"
                  className="flex-1"
                  onClick={() => window.location.href = `mailto:${selectedLocationData?.email}`}
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
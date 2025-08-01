import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const emergencyContacts = [
    {
      id: 'coordination',
      title: 'Coordination d\'Urgence',
      description: 'Coordination générale des interventions d\'urgence',
      phone: '+33 1 42 86 17 32',
      email: 'urgence@amjhub.org',
      availability: '24h/24 - 7j/7',
      responseTime: 'Immédiate',
      languages: ['Français', 'Anglais', 'Arabe'],
      icon: 'AlertTriangle',
      color: 'conversion'
    },
    {
      id: 'medical',
      title: 'Urgence Médicale',
      description: 'Support médical et évacuations sanitaires',
      phone: '+33 1 42 86 17 35',
      email: 'medical@amjhub.org',
      availability: '24h/24 - 7j/7',
      responseTime: 'Immédiate',
      languages: ['Français', 'Anglais', 'Espagnol'],
      icon: 'Heart',
      color: 'error'
    },
    {
      id: 'security',
      title: 'Sécurité Terrain',
      description: 'Sécurité des équipes et évacuations',
      phone: '+33 1 42 86 17 36',
      email: 'securite@amjhub.org',
      availability: '24h/24 - 7j/7',
      responseTime: 'Immédiate',
      languages: ['Français', 'Anglais'],
      icon: 'Shield',
      color: 'warning'
    },
    {
      id: 'logistics',
      title: 'Logistique d\'Urgence',
      description: 'Approvisionnement et transport d\'urgence',
      phone: '+33 1 42 86 17 37',
      email: 'logistique@amjhub.org',
      availability: '24h/24 - 7j/7',
      responseTime: '< 2 heures',
      languages: ['Français', 'Anglais', 'Portugais'],
      icon: 'Truck',
      color: 'trust'
    }
  ];

  const emergencyProcedures = [
    {
      step: 1,
      title: 'Évaluation immédiate',
      description: 'Évaluez la gravité de la situation et la sécurité immédiate',
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Contact d\'urgence',
      description: 'Appelez le numéro d\'urgence approprié selon le type de crise',
      icon: 'Phone'
    },
    {
      step: 3,
      title: 'Informations clés',
      description: 'Communiquez : localisation, nature de l\'urgence, nombre de personnes',
      icon: 'Info'
    },
    {
      step: 4,
      title: 'Suivi des instructions',
      description: 'Suivez les instructions données par l\'équipe de coordination',
      icon: 'CheckCircle'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      conversion: 'bg-conversion/10 text-conversion border-conversion/20',
      error: 'bg-error/10 text-error border-error/20',
      warning: 'bg-warning/10 text-warning border-warning/20',
      trust: 'bg-trust/10 text-trust border-trust/20'
    };
    return colorMap?.[color] || colorMap?.conversion;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-conversion/5 via-error/5 to-warning/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alert Header */}
        <div className="bg-conversion/10 border border-conversion/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-conversion rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="AlertTriangle" size={24} color="white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Contacts d'Urgence Humanitaire
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                En cas d'urgence humanitaire, de crise sécuritaire ou médicale, contactez immédiatement nos équipes spécialisées disponibles 24h/24.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 text-conversion">
                  <Icon name="Clock" size={16} />
                  <span className="font-medium">Service 24h/24 - 7j/7</span>
                </div>
                <div className="flex items-center space-x-2 text-conversion">
                  <Icon name="Globe" size={16} />
                  <span className="font-medium">Support multilingue</span>
                </div>
                <div className="flex items-center space-x-2 text-conversion">
                  <Icon name="Zap" size={16} />
                  <span className="font-medium">Réponse immédiate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Emergency Contacts */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Numéros d'Urgence
            </h3>
            
            <div className="space-y-6">
              {emergencyContacts?.map((contact) => (
                <div key={contact?.id} className={`p-6 rounded-xl border-2 ${getColorClasses(contact?.color)}`}>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      contact?.color === 'conversion' ? 'bg-conversion' :
                      contact?.color === 'error' ? 'bg-error' :
                      contact?.color === 'warning'? 'bg-warning' : 'bg-trust'
                    }`}>
                      <Icon name={contact?.icon} size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                        {contact?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {contact?.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{contact?.availability}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Zap" size={12} />
                          <span>Réponse {contact?.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                      <Icon name="Phone" size={18} className="text-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Téléphone</p>
                        <p className="font-bold text-foreground">{contact?.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                      <Icon name="Mail" size={18} className="text-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground text-sm">{contact?.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Langues disponibles</p>
                    <div className="flex flex-wrap gap-1">
                      {contact?.languages?.map((lang, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-background/50 text-foreground text-xs rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Phone"
                      iconPosition="left"
                      className="flex-1 text-xs"
                      style={{ 
                        backgroundColor: contact?.color === 'conversion' ? 'var(--color-conversion)' :
                                        contact?.color === 'error' ? 'var(--color-error)' :
                                        contact?.color === 'warning' ? 'var(--color-warning)' :
                                        'var(--color-trust)'
                      }}
                      onClick={() => window.location.href = `tel:${contact?.phone}`}
                    >
                      Appeler
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Mail"
                      iconPosition="left"
                      className="flex-1 text-xs"
                      onClick={() => window.location.href = `mailto:${contact?.email}?subject=URGENCE - ${contact?.title}`}
                    >
                      Email
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Procedures */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Procédure d'Urgence
            </h3>
            
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-8">
              <div className="space-y-6">
                {emergencyProcedures?.map((procedure) => (
                  <div key={procedure?.step} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{procedure?.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {procedure?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {procedure?.description}
                      </p>
                    </div>
                    <Icon name={procedure?.icon} size={20} className="text-primary mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h4 className="text-lg font-heading font-bold text-foreground mb-6">
                Actions Rapides
              </h4>
              
              <div className="space-y-4">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  className="bg-conversion hover:bg-conversion/90 justify-start"
                  onClick={() => window.location.href = 'tel:+33142861732'}
                >
                  <div className="text-left">
                    <div className="font-semibold">Urgence Générale</div>
                    <div className="text-xs opacity-90">+33 1 42 86 17 32</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="MessageSquare"
                  iconPosition="left"
                  className="justify-start border-conversion text-conversion hover:bg-conversion/10"
                  onClick={() => {
                    const message = "URGENCE - Besoin d'assistance immédiate";
                    window.open(`https://wa.me/33142861732?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp Urgence</div>
                    <div className="text-xs opacity-70">Message instantané</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  iconName="Mail"
                  iconPosition="left"
                  className="justify-start"
                  onClick={() => window.location.href = 'mailto:urgence@amjhub.org?subject=URGENCE HUMANITAIRE&body=URGENT - Décrivez la situation, localisation et nombre de personnes concernées'}
                >
                  <div className="text-left">
                    <div className="font-semibold">Email d'Urgence</div>
                    <div className="text-xs opacity-70">urgence@amjhub.org</div>
                  </div>
                </Button>
              </div>

              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-warning mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Information importante
                    </p>
                    <p className="text-xs text-muted-foreground">
                      En cas de danger immédiat, contactez d'abord les services d'urgence locaux (15, 17, 18 en France) puis notre équipe de coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Additional Info */}
        <div className="mt-12">
          <Button
            variant="outline"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mx-auto"
          >
            {isExpanded ? 'Masquer' : 'Voir'} les informations complémentaires
          </Button>

          {isExpanded && (
            <div className="mt-8 bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-4">
                    Zones d'Intervention
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>France métropolitaine et DOM-TOM</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>Afrique de l'Ouest (Sénégal, Mali, Burkina Faso)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>Méditerranée (missions maritimes)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>Interventions ponctuelles mondiales</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-4">
                    Types d'Urgences
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={14} />
                      <span>Catastrophes naturelles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Users" size={14} />
                      <span>Crises humanitaires</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Shield" size={14} />
                      <span>Situations sécuritaires</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Heart" size={14} />
                      <span>Urgences médicales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;
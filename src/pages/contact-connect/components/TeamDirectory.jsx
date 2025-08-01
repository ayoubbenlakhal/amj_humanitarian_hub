import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamDirectory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: 'Sophie Dubois',
      role: 'Directrice Générale',
      department: 'direction',
      email: 'sophie.dubois@amjhub.org',
      phone: '+33 1 42 86 17 28',
      bio: 'Experte en développement humanitaire avec 15 ans d\'expérience dans la coordination de projets internationaux.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      languages: ['Français', 'Anglais', 'Espagnol'],
      expertise: ['Stratégie organisationnelle', 'Partenariats internationaux', 'Gestion de crise'],
      availability: 'Sur rendez-vous',
      social: {
        linkedin: 'https://linkedin.com/in/sophie-dubois',
        twitter: 'https://twitter.com/sophiedubois'
      }
    },
    {
      id: 2,
      name: 'Marc Lefebvre',
      role: 'Coordinateur des Projets',
      department: 'projects',
      email: 'marc.lefebvre@amjhub.org',
      phone: '+33 1 42 86 17 29',
      bio: 'Spécialiste en gestion de projets humanitaires avec une expertise particulière en Afrique subsaharienne.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      languages: ['Français', 'Anglais', 'Wolof'],
      expertise: ['Gestion de projets', 'Développement durable', 'Formation locale'],
      availability: 'Lun-Ven 9h-17h',
      social: {
        linkedin: 'https://linkedin.com/in/marc-lefebvre'
      }
    },
    {
      id: 3,
      name: 'Amina Hassan',
      role: 'Responsable Partenariats',
      department: 'partnerships',
      email: 'amina.hassan@amjhub.org',
      phone: '+33 1 42 86 17 30',
      bio: 'Experte en développement de partenariats stratégiques et en mobilisation de ressources.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      languages: ['Français', 'Anglais', 'Arabe'],
      expertise: ['Partenariats corporatifs', 'Levée de fonds', 'Relations institutionnelles'],
      availability: 'Mar-Sam 10h-18h',
      social: {
        linkedin: 'https://linkedin.com/in/amina-hassan',
        twitter: 'https://twitter.com/aminahassan'
      }
    },
    {
      id: 4,
      name: 'Thomas Martin',
      role: 'Chef de Mission Urgence',
      department: 'emergency',
      email: 'thomas.martin@amjhub.org',
      phone: '+33 1 42 86 17 32',
      bio: 'Spécialiste des interventions d\'urgence avec 12 ans d\'expérience sur le terrain.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      languages: ['Français', 'Anglais', 'Portugais'],
      expertise: ['Gestion de crise', 'Logistique d\'urgence', 'Coordination terrain'],
      availability: '24h/24 - 7j/7',
      social: {
        linkedin: 'https://linkedin.com/in/thomas-martin'
      }
    },
    {
      id: 5,
      name: 'Elena Rodriguez',
      role: 'Responsable Communication',
      department: 'communication',
      email: 'elena.rodriguez@amjhub.org',
      phone: '+33 1 42 86 17 33',
      bio: 'Experte en communication digitale et storytelling pour les organisations humanitaires.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      languages: ['Français', 'Anglais', 'Espagnol', 'Italien'],
      expertise: ['Communication digitale', 'Relations médias', 'Storytelling'],
      availability: 'Lun-Ven 8h-16h',
      social: {
        linkedin: 'https://linkedin.com/in/elena-rodriguez',
        twitter: 'https://twitter.com/elenarodriguez',
        instagram: 'https://instagram.com/elena.amj'
      }
    },
    {
      id: 6,
      name: 'David Chen',
      role: 'Coordinateur Bénévoles',
      department: 'volunteers',
      email: 'david.chen@amjhub.org',
      phone: '+33 1 42 86 17 34',
      bio: 'Spécialiste en gestion et formation des équipes bénévoles avec une approche innovante.',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      languages: ['Français', 'Anglais', 'Mandarin'],
      expertise: ['Gestion bénévoles', 'Formation', 'Engagement communautaire'],
      availability: 'Mar-Dim 10h-19h',
      social: {
        linkedin: 'https://linkedin.com/in/david-chen'
      }
    }
  ];

  const departments = [
    { id: 'all', name: 'Tous les départements', icon: 'Users' },
    { id: 'direction', name: 'Direction', icon: 'Crown' },
    { id: 'projects', name: 'Projets', icon: 'FolderOpen' },
    { id: 'partnerships', name: 'Partenariats', icon: 'Handshake' },
    { id: 'emergency', name: 'Urgence', icon: 'AlertTriangle' },
    { id: 'communication', name: 'Communication', icon: 'Megaphone' },
    { id: 'volunteers', name: 'Bénévoles', icon: 'Heart' }
  ];

  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers?.filter(member => member?.department === selectedDepartment);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rencontrez les personnes passionnées qui dirigent nos missions humanitaires
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments?.map((dept) => (
            <button
              key={dept?.id}
              onClick={() => setSelectedDepartment(dept?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDepartment === dept?.id
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <Icon name={dept?.icon} size={16} />
              <span>{dept?.name}</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers?.map((member) => (
            <div key={member?.id} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-soft transition-all duration-300">
              {/* Member Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member?.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {member?.availability}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {member?.bio}
              </p>

              {/* Languages */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-foreground mb-2">Langues</h4>
                <div className="flex flex-wrap gap-1">
                  {member?.languages?.map((lang, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="text-xs font-medium text-foreground mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-1">
                  {member?.expertise?.slice(0, 2)?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member?.expertise?.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{member?.expertise?.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex space-x-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Mail"
                  iconPosition="left"
                  className="flex-1 text-xs"
                  onClick={() => window.location.href = `mailto:${member?.email}`}
                >
                  Email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  className="flex-1 text-xs"
                  onClick={() => window.location.href = `tel:${member?.phone}`}
                >
                  Appel
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                {member?.social?.linkedin && (
                  <a
                    href={member?.social?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#0077B5]/10 rounded-full flex items-center justify-center hover:bg-[#0077B5]/20 transition-colors duration-300"
                  >
                    <Icon name="Linkedin" size={16} className="text-[#0077B5]" />
                  </a>
                )}
                {member?.social?.twitter && (
                  <a
                    href={member?.social?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors duration-300"
                  >
                    <Icon name="Twitter" size={16} className="text-[#1DA1F2]" />
                  </a>
                )}
                {member?.social?.instagram && (
                  <a
                    href={member?.social?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#E4405F]/10 rounded-full flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors duration-300"
                  >
                    <Icon name="Instagram" size={16} className="text-[#E4405F]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Vous ne trouvez pas la bonne personne ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez notre équipe générale et nous vous dirigerons vers la personne appropriée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = 'mailto:contact@amjhub.org'}
              >
                Contact général
              </Button>
              <Button
                variant="outline"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:+33142861728'}
              >
                +33 1 42 86 17 28
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDirectory;
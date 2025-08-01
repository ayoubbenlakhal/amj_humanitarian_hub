import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialConnect = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@amj_humanitarian',
      followers: '12.5K',
      description: 'Suivez nos missions quotidiennes et découvrez l\'impact de nos actions sur le terrain',
      color: '#E4405F',
      icon: 'Instagram',
      url: 'https://instagram.com/amj_humanitarian',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Distribution de kits scolaires au Sénégal 📚✨ #Education #Senegal',
          likes: 234,
          comments: 18,
          date: '2025-07-30'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Formation des bénévoles à Paris 🤝 #Volunteers #Training',
          likes: 189,
          comments: 12,
          date: '2025-07-28'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Nouveau puits d\'eau potable inauguré 💧 #CleanWater #Impact',
          likes: 312,
          comments: 25,
          date: '2025-07-26'
        }
      ]
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'AMJ Humanitarian Hub',
      followers: '8.2K',
      description: 'Connectez-vous avec notre réseau professionnel et découvrez nos opportunités de partenariat',
      color: '#0077B5',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/amj-humanitarian',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Rapport d\'impact 2024 : 15 000 bénéficiaires touchés dans 8 pays',
          likes: 156,
          comments: 23,
          date: '2025-07-29'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Nouveau partenariat avec l\'UNESCO pour l\'éducation en Afrique',
          likes: 203,
          comments: 31,
          date: '2025-07-27'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Webinaire : "L\'avenir de l\'aide humanitaire digitale"',
          likes: 89,
          comments: 15,
          date: '2025-07-25'
        }
      ]
    },
    {
      id: 'twitter',
      name: 'Twitter',
      handle: '@AMJHumanitarian',
      followers: '5.8K',
      description: 'Actualités en temps réel, alertes urgences et discussions sur l\'humanitaire',
      color: '#1DA1F2',
      icon: 'Twitter',
      url: 'https://twitter.com/AMJHumanitarian',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: '🚨 URGENCE : Collecte de fonds pour les victimes des inondations au Bangladesh. Chaque don compte ! #Bangladesh #Emergency',
          likes: 78,
          comments: 12,
          date: '2025-07-31'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Thread 🧵 : Comment nos équipes s\'adaptent aux défis climatiques en Afrique subsaharienne',
          likes: 134,
          comments: 28,
          date: '2025-07-30'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Merci à tous nos bénévoles ! 500 heures de formation dispensées ce mois-ci 👏 #Volunteers #Training',
          likes: 92,
          comments: 8,
          date: '2025-07-28'
        }
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: 'AMJ Humanitarian',
      followers: '3.1K',
      description: 'Documentaires, témoignages et reportages depuis le terrain',
      color: '#FF0000',
      icon: 'Youtube',
      url: 'https://youtube.com/@AMJHumanitarian',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Documentaire : "Eau pour tous" - Notre mission au Mali (15 min)',
          likes: 245,
          comments: 34,
          date: '2025-07-29'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Témoignage : Sarah, bénévole depuis 3 ans raconte son expérience',
          likes: 167,
          comments: 19,
          date: '2025-07-26'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          caption: 'Formation : Comment devenir bénévole humanitaire ? (Guide complet)',
          likes: 189,
          comments: 42,
          date: '2025-07-24'
        }
      ]
    }
  ];

  const selectedPlatformData = socialPlatforms?.find(platform => platform?.id === selectedPlatform);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Suivez-nous sur les Réseaux
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez connectés avec notre communauté et découvrez nos actions en temps réel
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Platform Selector */}
          <div className="lg:col-span-1 space-y-4">
            {socialPlatforms?.map((platform) => (
              <div
                key={platform?.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPlatform === platform?.id
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50 bg-card'
                }`}
                onClick={() => setSelectedPlatform(platform?.id)}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${platform?.color}15` }}
                  >
                    <Icon 
                      name={platform?.icon} 
                      size={24} 
                      style={{ color: platform?.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {platform?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {platform?.handle}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {platform?.followers} abonnés
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    selectedPlatform === platform?.id
                      ? 'border-primary bg-primary' :'border-border'
                  }`}>
                    {selectedPlatform === platform?.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {platform?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Platform Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Platform Header */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${selectedPlatformData?.color}15` }}
                  >
                    <Icon 
                      name={selectedPlatformData?.icon} 
                      size={32} 
                      style={{ color: selectedPlatformData?.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {selectedPlatformData?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedPlatformData?.handle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">
                    {selectedPlatformData?.followers}
                  </p>
                  <p className="text-sm text-muted-foreground">abonnés</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {selectedPlatformData?.description}
              </p>

              <div className="flex space-x-4">
                <Button
                  variant="default"
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.open(selectedPlatformData?.url, '_blank')}
                  style={{ backgroundColor: selectedPlatformData?.color }}
                >
                  Suivre sur {selectedPlatformData?.name}
                </Button>
                <Button
                  variant="outline"
                  iconName="Share"
                  iconPosition="left"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `AMJ Humanitarian sur ${selectedPlatformData?.name}`,
                        url: selectedPlatformData?.url
                      });
                    }
                  }}
                >
                  Partager
                </Button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h4 className="text-xl font-heading font-bold text-foreground mb-6">
                Publications récentes
              </h4>
              
              <div className="space-y-6">
                {selectedPlatformData?.posts?.map((post) => (
                  <div key={post?.id} className="flex space-x-4 p-4 bg-muted/30 rounded-lg">
                    <Image
                      src={post?.image}
                      alt="Post image"
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-3 line-clamp-2">
                        {post?.caption}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Heart" size={14} />
                            <span>{post?.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="MessageCircle" size={14} />
                            <span>{post?.comments}</span>
                          </div>
                          <span>{post?.date}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="ExternalLink"
                          iconPosition="right"
                          className="text-xs"
                          onClick={() => window.open(selectedPlatformData?.url, '_blank')}
                        >
                          Voir
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button
                  variant="outline"
                  iconName="MoreHorizontal"
                  iconPosition="right"
                  onClick={() => window.open(selectedPlatformData?.url, '_blank')}
                >
                  Voir toutes les publications
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
            <Icon name="Mail" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Restez informés par email
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recevez nos actualités, projets et opportunités d'engagement directement dans votre boîte mail
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
              >
                S'abonner
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              1-2 emails par mois • Désabonnement facile • Données protégées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
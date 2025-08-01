import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      author: 'Marie Dubois',
      username: '@marie_volunteer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `Incroyable journée avec l'équipe AMJ ! Nous avons distribué des fournitures scolaires à plus de 200 enfants. Leurs sourires valent tous les efforts du monde 📚✨ #AMJHumanitarian #EducationForAll #VolunteerLife`,
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=400&fit=crop',likes: 127,comments: 23,shares: 15,timestamp: '2025-07-28T14:30:00Z',
      hashtags: ['#AMJHumanitarian', '#EducationForAll', '#VolunteerLife']
    },
    {
      id: 2,
      platform: 'instagram',author: 'Ahmed Hassan',username: '@ahmed_impact',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `Fier de faire partie de cette communauté extraordinaire ! Le projet de jardin communautaire prend forme grâce à AMJ 🌱 #CommunityGarden #AMJImpact #TogetherWeGrow`,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',likes: 89,comments: 12,shares: 8,timestamp: '2025-07-27T16:45:00Z',
      hashtags: ['#CommunityGarden', '#AMJImpact', '#TogetherWeGrow']
    },
    {
      id: 3,
      platform: 'instagram',author: 'Sophie Martin',username: '@sophie_helps',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',content: `Formation terminée ! Prête à rejoindre les missions AMJ. Merci pour cette préparation complète et inspirante 💪 #AMJTraining #ReadyToHelp #HumanitarianWork`,image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop',likes: 156,comments: 31,shares: 22,timestamp: '2025-07-26T10:20:00Z',
      hashtags: ['#AMJTraining', '#ReadyToHelp', '#HumanitarianWork']
    },
    {
      id: 4,
      platform: 'instagram',author: 'Fatima Benali',username: '@fatima_community',avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',content: `Atelier de sensibilisation environnementale réussi ! Les jeunes sont motivés pour protéger notre planète 🌍 #EnvironmentalAwareness #AMJGreen #YouthAction`,image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop',likes: 203,comments: 45,shares: 33,timestamp: '2025-07-25T13:15:00Z',
      hashtags: ['#EnvironmentalAwareness', '#AMJGreen', '#YouthAction']
    },
    {
      id: 5,
      platform: 'instagram',author: 'Lucas Moreau',username: '@lucas_volunteer',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',content: `Première mission avec AMJ et déjà des souvenirs inoubliables ! L'équipe est fantastique et l'impact réel 🙏 #FirstMission #AMJFamily #MakingADifference`,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop',likes: 92,comments: 18,shares: 11,timestamp: '2025-07-24T09:30:00Z',
      hashtags: ['#FirstMission', '#AMJFamily', '#MakingADifference']
    },
    {
      id: 6,
      platform: 'instagram',author: 'Aisha Diallo',username: '@aisha_hope',avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face',content: `Merci AMJ pour le soutien médical ! Ma famille et moi sommes reconnaissants pour votre aide précieuse ❤️ #Grateful #AMJSupport #HealthcareForAll`,image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',likes: 178,comments: 52,shares: 28,timestamp: '2025-07-23T15:45:00Z',
      hashtags: ['#Grateful', '#AMJSupport', '#HealthcareForAll']
    }
  ];

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `il y a ${diffInHours}h`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `il y a ${diffInDays}j`;
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Notre Communauté en Action
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez les moments authentiques partagés par notre communauté sur les réseaux sociaux
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialPosts?.map((post) => (
          <div
            key={post?.id}
            className="bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden cursor-pointer group"
            onClick={() => handlePostClick(post)}
          >
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={post?.avatar}
                  alt={post?.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-foreground">{post?.author}</p>
                    <Icon name="Instagram" size={14} className="text-pink-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">{post?.username}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatTimeAgo(post?.timestamp)}
                </span>
              </div>

              <p className="text-sm text-foreground mb-3 line-clamp-3">
                {post?.content}
              </p>

              {post?.image && (
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={post?.image}
                    alt="Post content"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Icon name="Heart" size={12} className="mr-1 text-red-500" />
                    {post?.likes}
                  </span>
                  <span className="flex items-center">
                    <Icon name="MessageCircle" size={12} className="mr-1" />
                    {post?.comments}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Share" size={12} className="mr-1" />
                    {post?.shares}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ExternalLink"
                  iconSize={12}
                  className="text-muted-foreground hover:text-primary p-1"
                >
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for expanded post view */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={selectedPost?.avatar}
                    alt={selectedPost?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-foreground">{selectedPost?.author}</p>
                      <Icon name="Instagram" size={16} className="text-pink-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedPost?.username}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  iconName="X"
                  className="text-muted-foreground hover:text-foreground"
                />
              </div>

              {selectedPost?.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedPost?.image}
                    alt="Post content"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <p className="text-foreground mb-4 leading-relaxed">
                {selectedPost?.content}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedPost?.hashtags?.map((hashtag, index) => (
                  <span
                    key={index}
                    className="text-sm text-primary hover:text-primary/80 cursor-pointer"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Icon name="Heart" size={16} className="mr-2 text-red-500" />
                    {selectedPost?.likes} j'aime
                  </span>
                  <span className="flex items-center">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    {selectedPost?.comments} commentaires
                  </span>
                  <span className="flex items-center">
                    <Icon name="Share" size={16} className="mr-2" />
                    {selectedPost?.shares} partages
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {formatTimeAgo(selectedPost?.timestamp)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialFeed;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InstagramFeed = () => {
  const [activePost, setActivePost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      caption: "Nos jeunes volontaires distribuent des fournitures scolaires dans les écoles rurales. Chaque sourire compte! 📚✨ #EducationPourTous #AMJImpact",
      likes: 247,
      comments: 18,
      timestamp: "Il y a 2 heures"
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
      caption: "Formation en premiers secours pour notre équipe médicale mobile. Prêts à sauver des vies! 🏥❤️ #SantéPourTous #Formation",
      likes: 189,
      comments: 12,
      timestamp: "Il y a 5 heures"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Construction d\'un nouveau puits dans le village de Koundara. L\'eau potable pour tous! 💧🌍 #EauPotable #Développement",
      likes: 312,
      comments: 25,
      timestamp: "Il y a 1 jour"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      caption: "Atelier de couture pour l'autonomisation des femmes. Ensemble, nous créons l'indépendance économique! ✂️👗 #Autonomisation #Femmes",
      likes: 156,
      comments: 9,
      timestamp: "Il y a 2 jours"
    },
    {
      id: 5,
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/adult-1867743_1280.jpg",
      caption: "Plantation d\'arbres avec la communauté locale. Chaque arbre planté est un espoir pour l\'avenir! 🌱🌳 #Reforestation #Environnement",
      likes: 203,
      comments: 14,
      timestamp: "Il y a 3 jours"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Nos bénéficiaires partagent leurs histoires de transformation. Votre soutien change des vies! 🙏💫 #Témoignages #Impact",
      likes: 278,
      comments: 21,
      timestamp: "Il y a 4 jours"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-2 mb-4">
            <Icon name="Instagram" size={20} className="text-white" />
            <span className="text-white font-medium">@ambitionjeune_officiel</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Notre Communauté en Action
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez nos dernières activités et découvrez l'impact de notre communauté à travers nos réseaux sociaux
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {instagramPosts?.map((post) => (
            <div
              key={post?.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={post?.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={16} />
                          <span className="text-sm">{post?.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={16} />
                          <span className="text-sm">{post?.comments}</span>
                        </div>
                      </div>
                      <Icon name="ExternalLink" size={16} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Post Info */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post?.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post?.timestamp}</span>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span className="text-xs">{post?.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span className="text-xs">{post?.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-card">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Instagram" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-heading font-semibold text-foreground">
                  Suivez-nous sur Instagram
                </h3>
                <p className="text-sm text-muted-foreground">
                  @ambitionjeune_officiel
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">2.4K</div>
                <div className="text-xs text-muted-foreground">Abonnés</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary">156</div>
                <div className="text-xs text-muted-foreground">Publications</div>
              </div>
              <a
                href="https://instagram.com/ambitionjeune_officiel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Icon name="Plus" size={16} />
                <span>Suivre</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for expanded post view */}
      {activePost && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-300"
              >
                <Icon name="X" size={16} />
              </button>
              
              <div className="aspect-square">
                <Image
                  src={activePost?.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <p className="text-foreground mb-4">{activePost?.caption}</p>
                
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-sm">{activePost?.timestamp}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{activePost?.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{activePost?.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;
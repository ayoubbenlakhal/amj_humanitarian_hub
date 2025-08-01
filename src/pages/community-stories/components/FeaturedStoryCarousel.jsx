import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedStoryCarousel = ({ stories, onReadMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || stories?.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, stories?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stories?.length) % stories?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (!stories || stories?.length === 0) return null;

  const currentStory = stories?.[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
      <div className="relative h-96 lg:h-[500px]">
        <Image
          src={currentStory?.image}
          alt={currentStory?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Navigation Arrows */}
        {stories?.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Histoire précédente"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Histoire suivante"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </>
        )}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                <Icon name="Star" size={12} className="mr-1" />
                Histoire Vedette
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                <Icon name="MapPin" size={12} className="mr-1" />
                {currentStory?.location}
              </span>
            </div>

            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-white mb-3 leading-tight">
              {currentStory?.title}
            </h2>

            <p className="text-lg text-white/90 mb-6 max-w-2xl leading-relaxed">
              {currentStory?.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {currentStory?.author?.split(' ')?.map(n => n?.[0])?.join('')?.substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{currentStory?.author}</p>
                    <p className="text-xs text-white/70">{currentStory?.project}</p>
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                onClick={() => onReadMore(currentStory)}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-foreground hover:bg-white/90"
              >
                Lire l'histoire complète
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Dots Indicator */}
      {stories?.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {stories?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6' :'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Aller à l'histoire ${index + 1}`}
            />
          ))}
        </div>
      )}
      {/* Auto-play indicator */}
      {isAutoPlaying && stories?.length > 1 && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Icon name="Play" size={14} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedStoryCarousel;
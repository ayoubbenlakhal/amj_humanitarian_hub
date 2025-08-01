import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import LocationsMap from './components/LocationsMap';
import TeamDirectory from './components/TeamDirectory';
import SocialConnect from './components/SocialConnect';
import EmergencyContact from './components/EmergencyContact';

const ContactConnect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactHero />
        <ContactMethods />
        <ContactForm />
        <LocationsMap />
        <TeamDirectory />
        <SocialConnect />
        <EmergencyContact />
      </main>
      {/* Footer */}
      <footer className="bg-trust text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AMJ</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">AMJ Hub</h3>
                  <p className="text-xs text-white/80">Humanitarian Impact</p>
                </div>
              </div>
              <p className="text-sm text-white/80 mb-4">
                Ensemble, créons un impact humanitaire durable pour les communautés les plus vulnérables.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-white/80 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/about-mission-universe" className="text-white/80 hover:text-white transition-colors">Mission</a></li>
                <li><a href="/projects-gallery" className="text-white/80 hover:text-white transition-colors">Projets</a></li>
                <li><a href="/community-stories" className="text-white/80 hover:text-white transition-colors">Communauté</a></li>
                <li><a href="/impact-dashboard" className="text-white/80 hover:text-white transition-colors">Impact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>15 Rue de la Paix, 75002 Paris</li>
                <li>+33 1 42 86 17 28</li>
                <li>contact@amjhub.org</li>
                <li className="text-conversion font-medium">Urgence: +33 1 42 86 17 32</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">IG</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">LI</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">TW</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-sm">YT</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/60">
              © {new Date()?.getFullYear()} AMJ Humanitarian Hub. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConnect;
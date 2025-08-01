import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    urgency: 'normal',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categoryOptions = [
    { value: 'volunteer', label: 'Bénévolat et engagement' },
    { value: 'partnership', label: 'Partenariat et collaboration' },
    { value: 'donation', label: 'Don et financement' },
    { value: 'media', label: 'Médias et presse' },
    { value: 'project', label: 'Projet spécifique' },
    { value: 'emergency', label: 'Urgence humanitaire' },
    { value: 'other', label: 'Autre demande' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Faible - Réponse sous 3-5 jours' },
    { value: 'normal', label: 'Normal - Réponse sous 24-48h' },
    { value: 'high', label: 'Urgent - Réponse sous 24h' },
    { value: 'critical', label: 'Critique - Réponse immédiate' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        urgency: 'normal',
        newsletter: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Message envoyé avec succès !
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais selon la priorité indiquée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => setSubmitStatus(null)}
              >
                Envoyer un autre message
              </Button>
              <Button
                variant="outline"
                iconName="Home"
                iconPosition="left"
                onClick={() => window.location.href = '/homepage'}
              >
                Retour à l'accueil
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Envoyez-nous un message
          </h2>
          <p className="text-lg text-muted-foreground">
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Prénom"
                type="text"
                name="firstName"
                value={formData?.firstName}
                onChange={handleInputChange}
                placeholder="Votre prénom"
                required
              />
              <Input
                label="Nom"
                type="text"
                name="lastName"
                value={formData?.lastName}
                onChange={handleInputChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="votre.email@exemple.com"
                required
              />
              <Input
                label="Téléphone"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="+33 1 23 45 67 89"
                description="Optionnel - pour un contact plus rapide"
              />
            </div>

            {/* Message Details */}
            <Input
              label="Sujet"
              type="text"
              name="subject"
              value={formData?.subject}
              onChange={handleInputChange}
              placeholder="Résumé de votre demande"
              required
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Catégorie"
                options={categoryOptions}
                value={formData?.category}
                onChange={(value) => handleSelectChange('category', value)}
                placeholder="Sélectionnez une catégorie"
                required
              />
              <Select
                label="Priorité"
                options={urgencyOptions}
                value={formData?.urgency}
                onChange={(value) => handleSelectChange('urgency', value)}
                description="Aide-nous à prioriser votre demande"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-conversion">*</span>
              </label>
              <textarea
                name="message"
                value={formData?.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Décrivez votre demande en détail..."
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Minimum 20 caractères - Soyez précis pour une meilleure assistance
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData?.newsletter}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <div>
                <label htmlFor="newsletter" className="text-sm font-medium text-foreground cursor-pointer">
                  S'abonner à notre newsletter
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  Recevez nos actualités, projets et opportunités d'engagement (1-2 emails/mois)
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="flex-1"
                disabled={!formData?.firstName || !formData?.lastName || !formData?.email || !formData?.subject || !formData?.category || !formData?.message}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
              <Button
                type="button"
                variant="outline"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={() => setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  subject: '',
                  category: '',
                  message: '',
                  urgency: 'normal',
                  newsletter: false
                })}
              >
                Réinitialiser
              </Button>
            </div>

            {submitStatus === 'error' && (
              <div className="flex items-center space-x-3 p-4 bg-error/10 border border-error/20 rounded-lg">
                <Icon name="AlertCircle" size={20} className="text-error" />
                <p className="text-sm text-error">
                  Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProjectsGallery from './pages/projects-gallery';
import AboutMissionUniverse from './pages/about-mission-universe';
import ContactConnect from './pages/contact-connect';
import CommunityStories from './pages/community-stories';
import ImpactDashboard from './pages/impact-dashboard';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutMissionUniverse />} />
        <Route path="/projects-gallery" element={<ProjectsGallery />} />
        <Route path="/about-mission-universe" element={<AboutMissionUniverse />} />
        <Route path="/contact-connect" element={<ContactConnect />} />
        <Route path="/community-stories" element={<CommunityStories />} />
        <Route path="/impact-dashboard" element={<ImpactDashboard />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

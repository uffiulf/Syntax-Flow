import React, { useEffect } from 'react';
import { AppProvider, useApp } from './lib/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { TeamPage } from './components/pages/TeamPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { ContactPage } from './components/pages/ContactPage';
import { Toaster } from './components/ui/sonner';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'team':
        return <TeamPage />;
      case 'profile':
        return <ProfilePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-detail':
        return <ProjectDetailPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

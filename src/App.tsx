import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TodaysPlan from './components/TodaysPlan';
import FullItinerary from './components/FullItinerary';
import Contacts from './components/Contacts';
import Emergency from './components/Emergency';
import LoginPage from './components/LoginPage';
import MyTrips from './components/MyTrips';
import { allTrips, TripData } from './data/tripData';

type Screen = 'login' | 'trips' | 'dashboard';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [selectedTrip, setSelectedTrip] = useState<TripData | null>(null);
  const [activeSection, setActiveSection] = useState('today');
  const [userName] = useState('Anagha');

  const handleLogin = () => {
    setScreen('trips');
  };

  const handleSelectTrip = (trip: TripData) => {
    setSelectedTrip(trip);
    setScreen('dashboard');
    setActiveSection('today');
  };

  const handleBackToTrips = () => {
    setScreen('trips');
    setSelectedTrip(null);
  };

  const renderContent = () => {
    if (!selectedTrip) return null;

    const todayItinerary = selectedTrip.itinerary.find(
      (day) => day.day === selectedTrip.currentDay
    )!;

    switch (activeSection) {
      case 'today':
        return (
          <TodaysPlan
            todayItinerary={todayItinerary}
            currentDay={selectedTrip.currentDay}
            totalDays={selectedTrip.totalDays}
          />
        );
      case 'itinerary':
        return <FullItinerary itinerary={selectedTrip.itinerary} currentDay={selectedTrip.currentDay} />;
      case 'contacts':
        return (
          <Contacts
            tourGuide={selectedTrip.contacts.tourGuide}
            driver={selectedTrip.contacts.driver}
          />
        );
      case 'emergency':
        return <Emergency emergency={selectedTrip.emergency} />;
      default:
        return (
          <TodaysPlan
            todayItinerary={todayItinerary}
            currentDay={selectedTrip.currentDay}
            totalDays={selectedTrip.totalDays}
          />
        );
    }
  };

  switch (screen) {
    case 'login':
      return <LoginPage onLogin={handleLogin} />;

    case 'trips':
      return <MyTrips trips={allTrips} onSelectTrip={handleSelectTrip} userName={userName} />;

    case 'dashboard':
      return selectedTrip ? (
        <div className="min-h-screen bg-slate-100">
          <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

          <div className="ml-64">
            <Header tripName={selectedTrip.tripName} dateRange={selectedTrip.dateRange} />
            <main>{renderContent()}</main>
            <div className="p-8">
              <button
                onClick={handleBackToTrips}
                className="text-slate-600 hover:text-slate-900 font-medium text-sm mb-4"
              >
                ← Back to My Trips
              </button>
            </div>
          </div>
        </div>
      ) : null;

    default:
      return null;
  }
}

export default App;

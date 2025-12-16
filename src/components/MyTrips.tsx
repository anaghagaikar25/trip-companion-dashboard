import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { TripData } from '../data/tripData';

interface MyTripsProps {
  trips: TripData[];
  onSelectTrip: (trip: TripData) => void;
  userName: string;
}

const MyTrips = ({ trips, onSelectTrip, userName }: MyTripsProps) => {
  const upcomingTrips = trips.filter((trip) => trip.status === 'upcoming');
  const ongoingTrips = trips.filter((trip) => trip.status === 'ongoing');

  const TripCard = ({ trip }: { trip: TripData }) => {
    const statusStyles =
      trip.status === 'ongoing'
        ? 'bg-emerald-100 text-emerald-700'
        : 'bg-sky-100 text-sky-700';

    const accentColor =
      trip.status === 'ongoing' ? 'from-emerald-500 to-teal-500' : 'from-sky-500 to-indigo-500';

    return (
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 hover-lift slide-up transition-all">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-1">
              {trip.tripName}
            </h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={16} />
              <span>{trip.destination}</span>
            </div>
          </div>

          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles}`}>
            {trip.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
          </span>
        </div>

        {/* Dates */}
        <div className="flex items-center justify-between text-sm text-slate-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{trip.dateRange}</span>
          </div>
          <span>{trip.totalDays} days</span>
        </div>

        {/* CTA */}
        <button
          onClick={() => onSelectTrip(trip)}
          className={`w-full flex items-center justify-between bg-gradient-to-r ${accentColor} text-white font-semibold px-4 py-3 rounded-xl transition`}
        >
          <span>View Trip</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Header */}
      <div className="px-8 py-10 bg-gradient-to-r from-indigo-600 to-teal-500 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {userName} 👋
        </h1>
        <p className="text-white/80">
          Here’s a snapshot of your journey
        </p>
      </div>

      {/* Content */}
      <div className="px-8 py-10">
        {/* Ongoing Trips */}
        {ongoingTrips.length > 0 && (
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Your Current Trip
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Trips */}
        {upcomingTrips.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Upcoming Trips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {trips.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center slide-up">
            <MapPin size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No trips yet
            </h3>
            <p className="text-slate-600">
              Start planning your next adventure ✈️
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTrips;

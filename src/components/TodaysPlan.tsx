import { Clock, MapPin } from 'lucide-react';
import { DayItinerary } from '../data/tripData';

interface TodaysPlanProps {
  todayItinerary: DayItinerary;
  currentDay: number;
  totalDays: number;
}

const TodaysPlan = ({ todayItinerary, currentDay, totalDays }: TodaysPlanProps) => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Today's Plan</h2>
        <p className="text-slate-600">
          Day {currentDay} of {totalDays} · {todayItinerary.date}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">{todayItinerary.title}</h3>

        <div className="space-y-6">
          {todayItinerary.activities.map((activity, index) => (
            <div key={index} className="flex gap-4 relative">
              {/* Timeline connector */}
              {index < todayItinerary.activities.length - 1 && (
                <div className="absolute left-[23px] top-[40px] w-0.5 h-full bg-slate-200" />
              )}

              {/* Time badge */}
              <div className="flex-shrink-0 w-24">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Clock size={16} className="text-blue-600" />
                  <span>{activity.time}</span>
                </div>
              </div>

              {/* Activity card */}
              <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">{activity.name}</h4>
                    {activity.description && (
                      <p className="text-sm text-slate-600">{activity.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaysPlan;

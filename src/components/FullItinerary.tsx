import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { DayItinerary } from '../data/tripData';

interface FullItineraryProps {
  itinerary: DayItinerary[];
  currentDay: number;
}

const FullItinerary = ({ itinerary, currentDay }: FullItineraryProps) => {
  const [expandedDays, setExpandedDays] = useState<number[]>([currentDay]);

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Full Itinerary</h2>
        <p className="text-slate-600">Complete tour schedule for all {itinerary.length} days</p>
      </div>

      <div className="space-y-4">
        {itinerary.map((day) => {
          const isExpanded = expandedDays.includes(day.day);
          const isCurrentDay = day.day === currentDay;

          return (
            <div
              key={day.day}
              className={`bg-white rounded-xl shadow-sm border transition-all ${
                isCurrentDay ? 'border-blue-400 ring-2 ring-blue-100' : 'border-slate-200'
              }`}
            >
              {/* Day header */}
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors rounded-t-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      isCurrentDay
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {day.day}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                      {day.title}
                      {isCurrentDay && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          Today
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-slate-600">{day.date}</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="text-slate-400" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>

              {/* Expanded activities */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <div className="space-y-3">
                    {day.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <Clock size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-baseline gap-3">
                            <span className="font-medium text-slate-700">{activity.time}</span>
                            <span className="font-semibold text-slate-900">{activity.name}</span>
                          </div>
                          {activity.description && (
                            <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullItinerary;

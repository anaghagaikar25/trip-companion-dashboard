import { AlertCircle, Phone, Mail, MapPin, User } from 'lucide-react';
import { TripData } from '../data/tripData';

interface EmergencyProps {
  emergency: TripData['emergency'];
}

const Emergency = ({ emergency }: EmergencyProps) => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <AlertCircle className="text-red-600" />
          Emergency Information
        </h2>
        <p className="text-slate-600">Important contacts and information for emergencies</p>
      </div>

      {/* Emergency Number - Prominent */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <Phone size={28} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-red-700 font-medium mb-1">Emergency Services</p>
            <a
              href={`tel:${emergency.emergencyNumber}`}
              className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              {emergency.emergencyNumber}
            </a>
            <p className="text-sm text-red-700 mt-1">Police, Medical, Fire</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Tour Manager */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <User className="text-blue-600" />
            Tour Manager
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-600">Name</p>
              <p className="text-lg font-medium text-slate-900">{emergency.tourManager.name}</p>
            </div>
            <div>
              <a
                href={`tel:${emergency.tourManager.phone}`}
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <Phone size={16} className="text-blue-600" />
                <span className="group-hover:underline">{emergency.tourManager.phone}</span>
              </a>
            </div>
            {emergency.tourManager.email && (
              <div>
                <a
                  href={`mailto:${emergency.tourManager.email}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors group"
                >
                  <Mail size={16} className="text-blue-600" />
                  <span className="group-hover:underline">{emergency.tourManager.email}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hotel Information */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <MapPin className="text-blue-600" />
            Current Hotel
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-600">Hotel Name</p>
              <p className="text-lg font-medium text-slate-900">{emergency.hotel.name}</p>
            </div>
            <div>
              <a
                href={`tel:${emergency.hotel.phone}`}
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <Phone size={16} className="text-blue-600" />
                <span className="group-hover:underline">{emergency.hotel.phone}</span>
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-600">Address</p>
              <p className="text-slate-700">{emergency.hotel.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <p className="text-sm text-yellow-900">
          <strong>Important:</strong> In case of a medical emergency, call {emergency.emergencyNumber} first,
          then notify your tour manager immediately.
        </p>
      </div>
    </div>
  );
};

export default Emergency;

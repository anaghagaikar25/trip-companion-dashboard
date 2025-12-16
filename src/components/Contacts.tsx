import { Phone, Mail, User } from 'lucide-react';
import { Contact } from '../data/tripData';

interface ContactsProps {
  tourGuide: Contact;
  driver: Contact;
}

const Contacts = ({ tourGuide, driver }: ContactsProps) => {
  const ContactCard = ({ contact }: { contact: Contact }) => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <User size={28} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900">{contact.name}</h3>
          <p className="text-slate-600 text-sm mb-4">{contact.role}</p>

          <div className="space-y-2">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors group"
            >
              <Phone size={16} className="text-blue-600" />
              <span className="group-hover:underline">{contact.phone}</span>
            </a>
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <Mail size={16} className="text-blue-600" />
                <span className="group-hover:underline">{contact.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Contacts</h2>
        <p className="text-slate-600">Your tour team contact information</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ContactCard contact={tourGuide} />
        <ContactCard contact={driver} />
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> These contacts are available 24/7 during your tour. Don't hesitate
          to reach out if you need assistance.
        </p>
      </div>
    </div>
  );
};

export default Contacts;

export interface Activity {
  time: string;
  name: string;
  description?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface Contact {
  name: string;
  role: string;
  phone: string;
  email?: string;
}

export interface TripData {
  id: string;
  tripName: string;
  destination: string;
  dateRange: string;
  status: 'upcoming' | 'ongoing';
  totalDays: number;
  currentDay: number;
  itinerary: DayItinerary[];
  contacts: {
    tourGuide: Contact;
    driver: Contact;
  };
  emergency: {
    emergencyNumber: string;
    tourManager: Contact;
    hotel: {
      name: string;
      phone: string;
      address: string;
    };
  };
}

export interface UserProfile {
  name: string;
  email: string;
}

export const hampitTripData: TripData = {
  id: 'hampi-2025-01',
  tripName: "Hampi Tour",
  destination: "Hampi",
  dateRange: "10-14 Jan 2025",
  status: 'ongoing',
  totalDays: 5,
  currentDay: 2,
  itinerary: [
    {
      day: 1,
      date: "11 Jan 2025",
      title: "Arrival & Orientation",
      activities: [
        { time: "14:00", name: "Airport Pickup", description: "Meet at Terminal 2 Exit Gate" },
        { time: "16:30", name: "Hotel Check-in", description: "Clarks Inn Hampi" },
        { time: "18:00", name: "Welcome Dinner", description: "Hotel Restaurant" },
        { time: "20:00", name: "Orientation Briefing", description: "Tour overview and safety guidelines" },
      ],
    },
    {
      day: 2,
      date: "12 Jan 2025",
      title: "Temple Exploration",
      activities: [
        { time: "09:00", name: "Hotel Pickup", description: "Breakfast included" },
        { time: "10:00", name: "Virupaksha Temple", description: "Guided tour with history presentation" },
        { time: "11:30", name: "Hemakuta Hill", description: "Panoramic views and photo opportunity" },
        { time: "14:00", name: "Lunch", description: "Traditional South Indian cuisine at Mango Tree" },
        { time: "16:00", name: "Vittala Temple Complex", description: "Famous stone chariot and musical pillars" },
        { time: "18:00", name: "Return to Hotel", description: "Evening at leisure" },
      ],
    },
    {
      day: 3,
      date: "13 Jan 2025",
      title: "Royal Enclosure & Markets",
      activities: [
        { time: "08:30", name: "Hotel Pickup" },
        { time: "09:00", name: "Royal Enclosure", description: "Ancient palace complex" },
        { time: "11:00", name: "Lotus Mahal", description: "Indo-Islamic architecture" },
        { time: "12:30", name: "Lunch Break", description: "Local restaurant" },
        { time: "14:30", name: "Hampi Bazaar", description: "Shopping and local crafts" },
        { time: "17:00", name: "Sunset at Matanga Hill", description: "Best sunset viewpoint" },
        { time: "19:00", name: "Dinner", description: "Rooftop restaurant" },
      ],
    },
    {
      day: 4,
      date: "14 Jan 2025",
      title: "River Adventures",
      activities: [
        { time: "07:00", name: "Early Breakfast" },
        { time: "08:00", name: "Coracle Ride", description: "Traditional round boat on Tungabhadra River" },
        { time: "10:00", name: "Anegundi Village", description: "Ancient village exploration" },
        { time: "13:00", name: "Riverside Lunch" },
        { time: "15:00", name: "Boulder Climbing", description: "Optional adventure activity" },
        { time: "17:30", name: "Return to Hotel" },
        { time: "19:30", name: "Farewell Dinner", description: "Cultural performance included" },
      ],
    },
    {
      day: 5,
      date: "15 Jan 2025",
      title: "Departure",
      activities: [
        { time: "08:00", name: "Breakfast & Check-out" },
        { time: "10:00", name: "Last-minute Shopping", description: "Quick bazaar visit" },
        { time: "12:00", name: "Lunch", description: "En route to airport" },
        { time: "15:00", name: "Airport Drop-off", description: "End of tour" },
      ],
    },
  ],
  contacts: {
    tourGuide: {
      name: "Rajesh Kumar",
      role: "Senior Tour Guide",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@hampitours.com",
    },
    driver: {
      name: "Suresh Patil",
      role: "Driver",
      phone: "+91 98765 43211",
    },
  },
  emergency: {
    emergencyNumber: "112",
    tourManager: {
      name: "Priya Sharma",
      role: "Tour Manager",
      phone: "+91 98765 43212",
      email: "priya.sharma@hampitours.com",
    },
    hotel: {
      name: "Clarks Inn Hampi",
      phone: "+91 8394 241234",
      address: "Kamalapura Road, Near Virupaksha Temple, Hampi 583239",
    },
  },
};

export const keralaTripData: TripData = {
  id: 'kerala-2025-02',
  tripName: "Kerala Backwaters Tour",
  destination: "Kerala",
  dateRange: "20-27 Feb 2025",
  status: 'upcoming',
  totalDays: 8,
  currentDay: 1,
  itinerary: [
    {
      day: 1,
      date: "20 Feb 2025",
      title: "Arrival & Kochi Exploration",
      activities: [
        { time: "14:00", name: "Airport Pickup" },
        { time: "16:00", name: "Hotel Check-in", description: "Taj Malabar Resort & Spa" },
        { time: "18:00", name: "Fort Kochi Walk", description: "Historic old town tour" },
        { time: "20:00", name: "Welcome Dinner", description: "Local seafood specialties" },
      ],
    },
    {
      day: 2,
      date: "21 Feb 2025",
      title: "Backwater Adventures",
      activities: [
        { time: "08:00", name: "Breakfast & Hotel Pickup" },
        { time: "09:00", name: "Houseboat Cruise", description: "Full-day backwater cruise" },
        { time: "13:00", name: "Lunch on Boat", description: "Traditional Kerala cuisine" },
        { time: "17:00", name: "Return to Hotel" },
      ],
    },
    {
      day: 3,
      date: "22 Feb 2025",
      title: "Spice Gardens & Local Markets",
      activities: [
        { time: "08:00", name: "Breakfast" },
        { time: "09:30", name: "Spice Plantation Tour" },
        { time: "13:00", name: "Lunch Break" },
        { time: "15:00", name: "Local Spice Market", description: "Shopping and tasting" },
        { time: "19:00", name: "Dinner", description: "Restaurant" },
      ],
    },
  ],
  contacts: {
    tourGuide: {
      name: "Anjali Menon",
      role: "Senior Tour Guide",
      phone: "+91 98765 54321",
      email: "anjali.menon@keralatours.com",
    },
    driver: {
      name: "Vikram Singh",
      role: "Driver",
      phone: "+91 98765 54322",
    },
  },
  emergency: {
    emergencyNumber: "112",
    tourManager: {
      name: "Deepak Kumar",
      role: "Tour Manager",
      phone: "+91 98765 54323",
      email: "deepak.kumar@keralatours.com",
    },
    hotel: {
      name: "Taj Malabar Resort & Spa",
      phone: "+91 4842 121800",
      address: "Willingdon Island, Kochi 682009",
    },
  },
};

export const goaTripData: TripData = {
  id: 'goa-2025-03',
  tripName: "Goa Beach Paradise",
  destination: "Goa",
  dateRange: "15-22 Mar 2025",
  status: 'upcoming',
  totalDays: 8,
  currentDay: 1,
  itinerary: [
    {
      day: 1,
      date: "15 Mar 2025",
      title: "Welcome to Goa",
      activities: [
        { time: "13:00", name: "Airport Pickup" },
        { time: "15:00", name: "Hotel Check-in" },
        { time: "18:00", name: "Beach Sunset", description: "Baga Beach walk" },
        { time: "20:00", name: "Dinner", description: "Beachfront restaurant" },
      ],
    },
    {
      day: 2,
      date: "16 Mar 2025",
      title: "Water Sports & Beach Day",
      activities: [
        { time: "09:00", name: "Breakfast" },
        { time: "10:00", name: "Water Sports", description: "Parasailing and jet skiing" },
        { time: "13:00", name: "Lunch" },
        { time: "15:00", name: "Beach Relaxation" },
      ],
    },
  ],
  contacts: {
    tourGuide: {
      name: "Marco D'Costa",
      role: "Senior Tour Guide",
      phone: "+91 98765 65432",
      email: "marco.costa@goatours.com",
    },
    driver: {
      name: "Ashok Kumar",
      role: "Driver",
      phone: "+91 98765 65433",
    },
  },
  emergency: {
    emergencyNumber: "112",
    tourManager: {
      name: "Sophia Fernandes",
      role: "Tour Manager",
      phone: "+91 98765 65434",
      email: "sophia.fernandes@goatours.com",
    },
    hotel: {
      name: "Marriott Resort Goa",
      phone: "+91 832 6666666",
      address: "Baga Beach, Goa 403506",
    },
  },
};

export const allTrips: TripData[] = [hampitTripData, keralaTripData, goaTripData];

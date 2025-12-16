interface HeaderProps {
  tripName: string;
  dateRange: string;
}

const Header = ({ tripName, dateRange }: HeaderProps) => {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-6">
      <h1 className="text-3xl font-bold text-slate-900">Your Trip Dashboard</h1>
      <p className="text-slate-600 mt-1">
        {tripName} · {dateRange}
      </p>
    </div>
  );
};

export default Header;

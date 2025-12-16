import { useState } from 'react';
import { Plane, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        onLogin();
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-teal-50 to-slate-100 flex items-center justify-center p-4 fade-in">
      <div className="w-full max-w-md">
        {/* Hero / Logo */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-indigo-600 to-teal-500 text-white p-4 rounded-full shadow-md">
              <Plane size={28} />
            </div>
          </div>

          <h1 className="text-4xl font-bold">
            Trip Companion
          </h1>

          <p className="text-slate-600 mt-2">
            Tour Execution Dashboard
          </p>

          <p className="text-sm text-slate-500 mt-3">
            Welcome back, Explorer 👋
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 slide-up hover-lift">
          {/* Demo Badge */}
          <div className="mb-6 text-center">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
              Demo Mode • No authentication required
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              disabled={!email || !password || loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 disabled:from-slate-300 disabled:to-slate-300 text-white font-semibold py-3 rounded-lg transition-all mt-8"
            >
              {loading ? 'Signing you in...' : 'Continue to Dashboard'}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-600 text-sm">
          <p>
            Managing trips across India, one journey at a time 🌏
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

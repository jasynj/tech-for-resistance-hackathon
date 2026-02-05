import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto w-full px-4 sm:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MatEquity" className="h-9 w-9 rounded-xl object-contain" />
            <div className="font-extrabold tracking-tight text-lg">MayaCare</div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <Link className="text-[#2563EB] hover:text-[#1D4ED8]" to="/dashboard">
              Dashboard
            </Link>
            <Link className="text-[#64748B] hover:text-[#0F172A]" to="/symptoms">
              Symptoms
            </Link>
            <Link className="text-[#64748B] hover:text-[#0F172A]" to="/timeline">
              Timeline
            </Link>
            <Link className="text-[#64748B] hover:text-[#0F172A]" to="/advocacy">
              Advocacy
            </Link>
            <Link className="text-[#64748B] hover:text-[#0F172A]" to="/education">
              Education
            </Link>
          </nav>
        </div>
      </header>
      <main className="px-4 py-4 sm:px-6 sm:py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

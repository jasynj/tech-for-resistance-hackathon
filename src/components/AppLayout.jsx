import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import profilePic from '../assets/profile pic.jpg';

function AppLayout() {
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#2563EB] hover:text-[#1D4ED8]' : 'text-[#64748B] hover:text-[#0F172A]';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto w-full px-4 sm:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MatEquity" className="h-9 w-9 rounded-xl object-contain" />
            <div className="font-extrabold tracking-tight text-lg">MayaCare</div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <NavLink className={navLinkClass} to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className={navLinkClass} to="/symptoms">
              Symptoms
            </NavLink>
            <NavLink className={navLinkClass} to="/timeline">
              Timeline
            </NavLink>
            <NavLink className={navLinkClass} to="/advocacy">
              Advocacy
            </NavLink>
            <NavLink className={navLinkClass} to="/education">
              Education
            </NavLink>
            <div className="relative ml-2 group">
              <button
                type="button"
                className="rounded-full focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                aria-label="Open user menu"
              >
                <img
                  src={profilePic}
                  alt="User avatar"
                  className="h-8 w-8 rounded-full border border-[#E2E8F0] bg-white object-cover"
                />
              </button>

              <div
                role="menu"
                aria-label="User menu"
                className="hidden group-hover:block group-focus-within:block absolute right-0 mt-2 w-44 rounded-xl border border-[#E2E8F0] bg-white shadow-sm p-1"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => alert('Demo: Signed out')}
                  className="w-full text-left rounded-lg px-3 py-2 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
                >
                  Sign out
                </button>

                <NavLink
                  to="/emergency"
                  role="menuitem"
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[#FEF2F2] ${
                      isActive ? 'text-[#B91C1C]' : 'text-[#DC2626]'
                    }`
                  }
                >
                  Emergency
                </NavLink>
              </div>
            </div>
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

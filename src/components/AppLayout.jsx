import { Link, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <nav style={{
        padding: '1rem',
        borderBottom: '1px solid #ccc',
        marginBottom: '2rem'
      }}>
        <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="/symptoms" style={{ marginRight: '1rem' }}>Symptoms</Link>
        <Link to="/timeline" style={{ marginRight: '1rem' }}>Timeline</Link>
        <Link to="/advocacy" style={{ marginRight: '1rem' }}>Advocacy</Link>
        <Link to="/education" style={{ marginRight: '1rem' }}>Education</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

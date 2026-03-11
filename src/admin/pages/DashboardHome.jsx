import { getDashboardCounts } from '../lib/storage';

function DashboardHome() {
  const counts = getDashboardCounts();

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Manage website content modules from one place.</p>
      <div className="admin-grid">
        <article className="admin-stat">
          <h3>CMS Sections</h3>
          <p>{counts.cmsSections}</p>
        </article>
        <article className="admin-stat">
          <h3>Blog Posts</h3>
          <p>{counts.blogs}</p>
        </article>
        <article className="admin-stat">
          <h3>Services</h3>
          <p>{counts.services}</p>
        </article>
      </div>
    </section>
  );
}

export default DashboardHome;

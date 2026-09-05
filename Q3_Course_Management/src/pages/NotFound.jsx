import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-section">
      <div className="details-card">
        <h1>404 - Page Not Found</h1>
        <p>The page you requested is unavailable.</p>
        <Link to="/" className="primary-btn">Return Home</Link>
      </div>
    </section>
  );
}

export default NotFound;

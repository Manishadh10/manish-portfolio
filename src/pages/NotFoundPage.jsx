import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-card">
          <span className="error-code">404</span>
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-desc">
            The page you are looking for doesn't exist or may have been moved.
          </p>
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Contact Manish</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

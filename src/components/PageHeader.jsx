import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function PageHeader({ badge, title, subtitle, breadcrumb }) {
  return (
    <div className="page-header">
      <div className="container">
        {/* Breadcrumb */}
        <div className="page-breadcrumbs">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">{breadcrumb || title}</span>
        </div>

        {/* Badge */}
        {badge && (
          <div className="page-header-badge">
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="page-title">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default PageHeader;

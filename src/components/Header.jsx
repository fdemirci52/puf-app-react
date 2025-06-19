import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/icons/logo.svg" alt="PUF Logo" />
        </div>

        <div className="header-actions">          
          <button className="notification-btn" aria-label="Notifications">
            <img src="/icons/bell.svg" alt="Notifications" className="icon" />
            {count > 0 && (
              <span className="notification-badge">{count}</span>
            )}
          </button>

          <button className="search-btn" aria-label="Search">
            <span className="icon">
              <img src="/icons/search.svg" alt="Search" />
            </span>
            <span className="label text-h2-xl">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

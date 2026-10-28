import { useEffect, useState } from "react";
import { navLinks } from "../data.js";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Highlight the nav link of the section that is on screen
  useEffect(() => {
    function handleScroll() {
      let current = "";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = link.id;
        }
      });
      setActiveId(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          Manish Adhikari
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={"#" + link.id}
              className={activeId === link.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

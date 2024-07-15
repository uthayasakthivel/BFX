import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { text: "Home", path: "" },
    { text: "About Us", path: "about" },
    { text: "Pages", path: "pages" },
    { text: "Services", path: "services" },
    { text: "Courses", path: "courses" },
    { text: "Blog", path: "blog" },
    { text: "Register", path: "register" },
  ];

  return (
    <nav className="navbar">
      <div className="container flex flex__between">
        <h1 className="logo">Medical</h1>
        <div
          className={`nav-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <CloseIcon sx={{ fontSize: "40px" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "40px" }} />
          )}
        </div>
        <ul className={`nav-links flex ${isMobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="nav-link"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

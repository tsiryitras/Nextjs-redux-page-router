import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="/" className="flex items-center">
            Logo
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="btn-menu"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? `M8 1v12` : `M1 1h15M1 7h15M1 13h15`}
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            {" "}
            <ul className="nav-link">
              <Link
                href="/"
                className={`nav-item${
                  router.pathname === "/" ? "-active" : ""
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/about"
                className={`nav-item${
                  router.pathname === "/about" ? "-active" : ""
                }`}
              >
                A propos
              </Link>
              <Link
                href="/user"
                className={`nav-item${
                  router.pathname === "/user" ? "-active" : ""
                }`}
              >
                User
              </Link>
              <Link href="/login" className="link-login">
                Se Connecter
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

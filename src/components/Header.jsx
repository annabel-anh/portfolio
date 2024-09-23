import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import MobileMenu from "./MobileMenu.jsx";
import NavLinks from "./NavLinks.jsx";
import SocialIconLink from "./SocialIconLink.jsx";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  let headerClasses = `fixed w-full bg-white/70 backdrop-filter backdrop-blur-md transition-transform duration-300 inset-x-0 top-0 z-50 w-full border-b border-steel-blue/10
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`;

  return (
    <header className={headerClasses}>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-12"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 font-mono">
            <span className="sr-only">Quynh Anh Ninh</span>
            qanh.ninh
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <RxHamburgerMenu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <NavLinks className="hidden lg:flex lg:gap-x-12" />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <SocialIconLink
            href={"https://www.linkedin.com/in/quynhanhninh151/"}
            icon={<FaLinkedinIn />}
            className={"mr-5"}
          />
          <SocialIconLink
            href={"https://github.com/annabel-anh"}
            icon={<FaGithub />}
          />
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  );
}

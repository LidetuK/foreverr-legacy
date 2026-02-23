import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/foreverr-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#ecosystem" },
    { label: "EXXiiT Partnership", href: "#ecosystem" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="FOREVERR / EXXiiT" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#download" className="btn-primary-gradient px-6 py-2.5 text-sm inline-block">
            Download Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav mt-2 mx-4 rounded-lg p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#download" className="btn-primary-gradient px-6 py-2.5 text-sm text-center mt-2 inline-block">
              Download Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

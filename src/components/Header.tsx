import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [cartCount] = useState(0);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/custom", label: "Custom" },
    { path: "/build", label: "Build Your Own" },
    { path: "/inspiration", label: "Inspiration" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full glass-nav z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm hover:text-blue-400 transition-colors ${
                    location.pathname === item.path
                      ? "text-blue-400"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-white">
              Noor
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

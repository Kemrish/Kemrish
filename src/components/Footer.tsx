import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Noor</h3>
            <p className="text-gray-400">
              Illuminating spaces with custom LED neon signs. Create your unique
              statement piece today.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/custom"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Custom Signs
                </Link>
              </li>
              <li>
                <Link to="/build" className="text-gray-400 hover:text-blue-400">
                  Build Your Own
                </Link>
              </li>
              <li>
                <Link
                  to="/inspiration"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Inspiration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@noor.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Neon Street, LED City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Noor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
